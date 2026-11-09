#!/usr/bin/env python3
"""Dogfood diagnostic: does the interleaving guard fire on real two-column journal PDFs?

Run from a clone of pdf-extract-service, with the service up on 127.0.0.1:8765:

    python3 dogfood-diagnose.py <pdf> [<pdf> ...]

For each PDF it prints:
  * the default POST /extract/upload answer,
  * the answer with preferred=poppler and preferred=pdfplumber,
  * the internals of src.quality.detect_column_interleaving on the winning text,
    per 200-line window (the function itself samples only the first 200 lines),
  * score_quality on the reading-order text (pdftotext without -layout), which the
    service never produces because src/extractors/poppler.py hardcodes -layout.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

from src.quality import detect_column_interleaving, score_quality

URL = "http://127.0.0.1:8765/extract/upload"


def _interleaving_penalty() -> float:
    """src.pipeline imports pydantic, which this diagnostic does not otherwise need."""
    try:
        from src.pipeline import INTERLEAVING_PENALTY
        return INTERLEAVING_PENALTY
    except ModuleNotFoundError:
        src = Path(__file__).with_name("src") / "pipeline.py"
        m = re.search(r"^INTERLEAVING_PENALTY = ([0-9.]+)", src.read_text(), re.M)
        return float(m.group(1))


INTERLEAVING_PENALTY = _interleaving_penalty()


def call(pdf: Path, preferred: str | None = None) -> dict:
    cmd = ["curl", "-s", "-X", "POST", URL, "-F", f"file=@{pdf}"]
    if preferred:
        cmd += ["-F", f"preferred={preferred}"]
    return json.loads(subprocess.run(cmd, capture_output=True, text=True, check=True).stdout)


def detector_internals(lines: list[str]) -> str:
    """Replicate detect_column_interleaving's body so its two bars are visible."""
    lines = lines[:200]
    checked = 0
    starts: list[int] = []
    for line in lines:
        stripped = line.rstrip()
        if len(stripped) < 50:
            continue
        checked += 1
        m = re.search(r"(\S.{10,}?)\s{4,}(.{10,}\S)", stripped)
        if m and len(m.group(1)) >= 15 and len(m.group(2)) >= 15:
            starts.append(stripped.index(m.group(2)))
    if checked < 10 or not starts:
        return f"checked={checked} starts={len(starts)} (bails out)"
    ratio = len(starts) / checked
    median = sorted(starts)[len(starts) // 2]
    aligned = sum(1 for s in starts if abs(s - median) <= 12) / len(starts)
    return (f"checked={checked} ratio={ratio:.2f}(need>0.12) "
            f"median_start={median} aligned={aligned:.2f}(need>=0.80) "
            f"-> {ratio > 0.12 and aligned >= 0.80}")


def report(pdf: Path) -> None:
    print(f"\n=== {pdf.name} ===")
    for label, pref in [("default", None), ("preferred=poppler", "poppler"),
                        ("preferred=pdfplumber", "pdfplumber")]:
        d = call(pdf, pref)
        cands = [(c["extractor"], round(c["quality_score"], 4)) for c in d.get("candidates", [])]
        print(f"  {label:20s} winner={d['extractor']:10s} score={d['quality_score']:.4f} "
              f"warnings={d['warnings']} missing_word_boundaries={d['missing_word_boundaries']}")
        print(f"  {'':20s} candidates={cands}")

    text = call(pdf)["text"]
    lines = text.splitlines()
    print(f"  gutter-merged lines (>=25-space run): "
          f"{sum(1 for l in lines if re.search(r'\S {25,}\S', l))} / {len(lines)}")
    print(f"  detect_column_interleaving(whole text) = {detect_column_interleaving(text)}")
    for start in range(0, min(len(lines), 1600), 200):
        win = "\n".join(lines[start:start + 200])
        print(f"    window {start:4d}-{start + 200:4d}: {detector_internals(lines[start:start + 200])}"
              f"  detect={detect_column_interleaving(win)}")

    layout = subprocess.run(["pdftotext", "-layout", str(pdf), "-"],
                            capture_output=True, text=True).stdout
    reading_order = subprocess.run(["pdftotext", str(pdf), "-"],
                                   capture_output=True, text=True).stdout
    print(f"  score_quality(pdftotext -layout)          = {score_quality(layout):.4f} "
          f"(penalized -> {max(0.0, score_quality(layout) - INTERLEAVING_PENALTY):.4f})")
    print(f"  score_quality(pdftotext, reading order)   = {score_quality(reading_order):.4f} "
          f"<- better than the winning answer, and never produced")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    for arg in sys.argv[1:]:
        report(Path(arg).expanduser())
