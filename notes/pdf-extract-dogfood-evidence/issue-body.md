### What I ran

I dogfooded the service from a real client: ingesting Zotero-held papers into a markdown knowledge vault. Two items, both two-column, both with a text layer and no OCR need:

| Item | Venue / year | Producer | Pages | DOI |
| --- | --- | --- | --- | --- |
| Schöttler, Yang, Pfister, Bach — *Visualizing and Interacting with Geospatial Networks: A Survey and Design Space* | Computer Graphics Forum 40(6), 2021 | OpenPDF 1.4.2 | 30 (A4) | [10.1111/cgf.14198](https://doi.org/10.1111/cgf.14198) |
| Bressa, Louis, Willett, Huron — *Input Visualization: Collecting and Modifying Data with Visual Representations* | CHI '24 | pdfTeX 1.40.25 | 18 (letter) | [10.1145/3613904.3642808](https://doi.org/10.1145/3613904.3642808) |

Service: slim image, `contract_version` 2, `available = [liteparse, poppler, pdfplumber]`. Report written against repo HEAD `c546385` (`0.2.0`).

**The finding reproduces on our own sample set, so you do not need either paper:**

```
POST /extract/upload  file=@tests/fixtures/indesign-three-column-sidebar.pdf
  winner=liteparse  quality_score=0.7821  warnings=[]  missing_word_boundaries=false
  1068 of 2362 output lines hold a >=25-space column gutter
```

`tests/fixtures/manifest.json` labels that file `damage: ["column-interleaving"]` and pins `pdfplumber`. The walk answers with liteparse, interleaved, and gives the caller no warning.

### The six live answers

| PDF | request | winner | score | candidates | warnings |
| --- | --- | --- | --- | --- | --- |
| Schöttler | default | liteparse | 0.7524 | liteparse 0.7524 | `[]` |
| Schöttler | `preferred=poppler` | liteparse | 0.7524 | poppler 0.3477, liteparse 0.7524 | `[]` |
| Schöttler | `preferred=pdfplumber` | pdfplumber | 0.7682 | pdfplumber 0.7682 | `[]` |
| Bressa | default | liteparse | 0.7586 | liteparse 0.7586 | `[]` |
| Bressa | `preferred=poppler` | liteparse | 0.7586 | poppler 0.3410, liteparse 0.7586 | `[]` |
| Bressa | `preferred=pdfplumber` | pdfplumber | 0.9277 | pdfplumber 0.9277 | `[]` |

`missing_word_boundaries` is `false` in all six. No request produced a warning.

### F1 — the winning text is column-interleaved

liteparse answers in a layout-preserving shape: left-column and right-column text share one output line, separated by the gutter whitespace.

Schöttler, output lines 1286–1288 (gaps compressed for width):

```
(Section 4.2), we eventually defined five design dimensions GEO,   11.2. Design space coverage and open designs
                NET:NODE, NET:LINK, COMP, and INTERACT. This design
  space was created on the premise that each visualization technique  Our design space allows us to discuss existing and common designs
```

174 of 1894 lines hold a `>=25`-space internal run; Bressa 208 of 1221. Section headings land mid-line (`3. Scope and Definitions`, `12. Conclusion`). Schöttler's liteparse output also loses 2 of 19 figure captions (Figures 4 and 13 are cited in text, no `Figure 4:`/`Figure 13:` label survives).

### F2 — `detect_column_interleaving` does not fire on this text

`src/quality.py` samples `text.splitlines()[:200]`. Both documents open with a single-column cover page / title block / abstract, so the head of the file dilutes the alignment test. Replicating the function's body per 200-line window:

**Schöttler** (guard needs `ratio > 0.12` **and** `aligned >= 0.80`):

| window | checked | ratio | median start | aligned | fires |
| --- | --- | --- | --- | --- | --- |
| 0–200 (**the window it samples**) | 127 | 0.46 | 78 | **0.72** | no |
| 400–600 | 172 | 0.44 | 77 | 0.79 | no |
| 1000–1200 | 181 | 0.72 | 78 | **0.91** | **yes** |
| 1200–1400 | 173 | 0.75 | 78 | 0.85 | **yes** |

**Bressa** — the alignment bar fails in every window, so it never fires:

| window | checked | ratio | median start | aligned | fires |
| --- | --- | --- | --- | --- | --- |
| 0–200 (sampled) | 165 | 0.70 | 66 | 0.24 | no |
| 800–1000 | 190 | 0.79 | 67 | 0.30 | no |
| 1000–1200 | 190 | 0.85 | 98 | 0.73 | no |

**Our own fixture**, `indesign-three-column-sidebar.pdf`, interleaved in 1068/2362 lines:

| window | checked | ratio | median start | aligned | fires |
| --- | --- | --- | --- | --- | --- |
| 0–200 (sampled) | 124 | 0.40 | 134 | 0.27 | no |
| 400–600 | 122 | 0.85 | 50 | 0.56 | no |
| 600–800 | 173 | 0.86 | 123 | 0.23 | no |
| 1200–1400 | 146 | 0.76 | 158 | 0.28 | no |

False on the whole text and in every window. The `ratio` bar is satisfied almost everywhere; the `aligned >= 0.80` bar is what fails, because a three-column/sidebar page and a two-column page with full-width figures put the "right column" start at several different offsets.

`cjk-dual-column.pdf` shows the same guard flipping on position alone: window 0–200 `aligned=0.79` → no; window 200–400 `aligned=0.90` → **yes**.

So the guard is position-dependent rather than damage-dependent. Consequence: liteparse's interleaved answer is never penalized, never warned, and at 0.75–0.78 it clears the `0.45` gate comfortably.

### F3 — the poppler extractor runs the mode that creates the damage

`src/extractors/poppler.py` hardcodes `pdftotext -layout`. On Schöttler that is the layout-preserving mode, so poppler *also* returns column-merged text; the guard fires there and the `0.40` penalty lands:

```
score_quality(pdftotext -layout, Schöttler) = 0.7477
0.7477 - INTERLEAVING_PENALTY (0.40)        = 0.3477   <- exactly the reported candidate score
```

`pdftotext` **without** `-layout` returns reading-order text that this repo's own `score_quality` rates higher than the answer the walk returns:

| PDF | winning answer | `score_quality(pdftotext -layout)` | `score_quality(pdftotext, reading order)` |
| --- | --- | --- | --- |
| Schöttler | liteparse 0.7524 | 0.7477 | **0.7622** |
| Bressa | liteparse 0.7586 | 0.7417 | **0.8878** |

The service can never produce that text. `preferred=poppler` does not help: poppler runs first, scores 0.3477, and the walk falls through to liteparse — verified above.

Note the penalty is itself inconsistent, because it depends on the same guard. On `indesign-three-column-sidebar.pdf`, poppler's `-layout` text is *not* detected in the first 200 lines (`aligned=0.27`), so poppler returned **0.7976 unpenalized** — higher than liteparse's 0.7821, but unreachable because it is not first in the order.

### F4 — pdfplumber's interleaving is invisible to the guard, and scores highest

`pdfplumber` also merges the columns, but glues them with a **single space**, so there is no gutter run to detect. Bressa, verbatim:

```
We examine input visualizations, visual representations that are visual encodings. Meanwhile, the implications of visualizations as
designed to collect (and represent) new data rather than encode inputs and as data sources have received little attention—despite the
preexisting datasets. Information visualization is commonly used existence of visual and physical examples stretching back centuries.
```

Lines with any internal `4+`-space run: **0** (Bressa, 4330 lines; Schöttler, 1992 lines). Scores: **0.9277** (Bressa) and 0.7682 (Schöttler) — the highest of the three extractors, above every client gate, `warnings: []`, `missing_word_boundaries: false`. This is the same failure class as #21 (a damaged extraction rated above every gate), with `column-interleaving` as the damage class instead of `missing-spaces`.

### F5 — the guard's own remedy is unavailable in this image

When the penalty fires, it appends:

> `"Detected dual-column interleaving; score penalized. A layout-aware extractor (docling, mineru, marker) is recommended."`

`layout_aware = True` only for docling, mineru, and marker. `GET /capabilities` on this slim install reports `[liteparse, poppler, pdfplumber]` — no layout-aware extractor exists, so the caller cannot act on the advice, and the two extractors that *are* available both emit the merge.

### Reproduction

```bash
# the finding, on a repo-owned fixture, no external files
curl -s -X POST http://127.0.0.1:8765/extract/upload \
  -F file=@tests/fixtures/indesign-three-column-sidebar.pdf | jq '{extractor,quality_score,warnings}'

# poppler cannot be reached
curl -s -X POST http://127.0.0.1:8765/extract/upload \
  -F file=@tests/fixtures/indesign-three-column-sidebar.pdf -F preferred=poppler \
  | jq '{extractor,quality_score,candidates}'

# the mode poppler does not use
pdftotext tests/fixtures/indesign-three-column-sidebar.pdf - | wc -c
```

<details>
<summary>Diagnostic script (run from a repo clone with the service up)</summary>

```python
#!/usr/bin/env python3
"""Does the interleaving guard fire on real two-column PDFs?  python3 dogfood-diagnose.py <pdf>..."""
import json, re, subprocess, sys
from pathlib import Path
from src.quality import detect_column_interleaving, score_quality

URL = "http://127.0.0.1:8765/extract/upload"

def _penalty():
    try:
        from src.pipeline import INTERLEAVING_PENALTY
        return INTERLEAVING_PENALTY
    except ModuleNotFoundError:                     # pipeline pulls pydantic; not needed here
        m = re.search(r"^INTERLEAVING_PENALTY = ([0-9.]+)",
                      (Path(__file__).with_name("src") / "pipeline.py").read_text(), re.M)
        return float(m.group(1))

INTERLEAVING_PENALTY = _penalty()

def call(pdf, preferred=None):
    cmd = ["curl", "-s", "-X", "POST", URL, "-F", f"file=@{pdf}"]
    if preferred:
        cmd += ["-F", f"preferred={preferred}"]
    return json.loads(subprocess.run(cmd, capture_output=True, text=True, check=True).stdout)

def internals(lines):
    lines, checked, starts = lines[:200], 0, []
    for line in lines:
        s = line.rstrip()
        if len(s) < 50:
            continue
        checked += 1
        m = re.search(r"(\S.{10,}?)\s{4,}(.{10,}\S)", s)
        if m and len(m.group(1)) >= 15 and len(m.group(2)) >= 15:
            starts.append(s.index(m.group(2)))
    if checked < 10 or not starts:
        return f"checked={checked} starts={len(starts)} (bails out)"
    ratio = len(starts) / checked
    med = sorted(starts)[len(starts) // 2]
    aligned = sum(1 for x in starts if abs(x - med) <= 12) / len(starts)
    return (f"checked={checked} ratio={ratio:.2f}(need>0.12) median_start={med} "
            f"aligned={aligned:.2f}(need>=0.80) -> {ratio > 0.12 and aligned >= 0.80}")

for arg in sys.argv[1:]:
    pdf = Path(arg)
    print(f"\n=== {pdf.name} ===")
    for label, pref in [("default", None), ("preferred=poppler", "poppler"), ("preferred=pdfplumber", "pdfplumber")]:
        d = call(pdf, pref)
        print(f"  {label:20s} winner={d['extractor']:10s} score={d['quality_score']:.4f} "
              f"warnings={d['warnings']} mwb={d['missing_word_boundaries']} "
              f"candidates={[(c['extractor'], round(c['quality_score'], 4)) for c in d.get('candidates', [])]}")
    text = call(pdf)["text"]
    lines = text.splitlines()
    print(f"  gutter-merged lines (>=25-space run): "
          f"{sum(1 for l in lines if re.search(r'\S {25,}\S', l))} / {len(lines)}")
    for start in range(0, min(len(lines), 1600), 200):
        win = "\n".join(lines[start:start + 200])
        print(f"    window {start:4d}-{start + 200:4d}: {internals(lines[start:start + 200])}"
              f"  detect={detect_column_interleaving(win)}")
    layout = subprocess.run(["pdftotext", "-layout", str(pdf), "-"], capture_output=True, text=True).stdout
    order = subprocess.run(["pdftotext", str(pdf), "-"], capture_output=True, text=True).stdout
    print(f"  score_quality(pdftotext -layout)        = {score_quality(layout):.4f}")
    print(f"  score_quality(pdftotext, reading order) = {score_quality(order):.4f}  <- never produced")
```

</details>

### Suggested fixes

1. **`detect_column_interleaving`: stop sampling only the head.** The ratio bar is already met on all three documents; the alignment bar is what fails, and it fails because the sampled 200 lines are the single-column front matter. Sampling the whole text, or several windows spread through it, would fire on Schöttler (windows 1000–1400) and on `cjk-dual-column.pdf` (window 200–400). For `indesign-three-column-sidebar.pdf` and Bressa the alignment bar needs loosening too — a column gutter that moves between 50 and 165 with full-width figures is still a gutter.
2. **Detect the single-space shape.** pdfplumber's merge carries no whitespace signal at all, so no gap-based rule can see it, and it is the shape that scores highest (0.9277). A sentence-continuity check across the line's midline would catch `"…that are" + "visual encodings. Meanwhile,"`.
3. **Drop `-layout` from `PopplerExtractor`, or add a reading-order mode.** It is one flag, it costs nothing, and on both papers it produces text this repo's own metric rates higher than the answer the walk returns.
4. **Do not stop at the first acceptable extractor when the damage class is undetectable.** `candidates` already carries the scores; a tie-break on the best score would have chosen poppler on `indesign-three-column-sidebar.pdf` (0.7976 > 0.7821) and pdfplumber on both papers.
5. Consider a manifest test that asserts the walk's default answer for a `column-interleaving` fixture is either non-interleaved or warned. `test_fixture_manifest.py` currently checks metadata and size only ("the pin is a record, not a target"), which is why this survived.

### Related

- #26 *Calibrate the quality heuristic against the diverse sample set* — this is a calibration case for the open issue: `column-interleaving` damage that no vector currently covers in the single-space shape.
- #21 (closed) — same class: damaged text rated above every client gate.
- #22 (closed) — the sample set. `indesign-three-column-sidebar.pdf` is the fixture that reproduces this; `latex-dual-column.pdf` does not (liteparse scores 0.3829 there, pdfplumber wins at 0.7778).
- #5 — wider engine coverage; the reading-order mode belongs here too.

### Not tested

- No engine can be requested from the Feynman client I used: its tool wrapper exposes `path`, `ocr`, `timeout` only, so `preferred` is unreachable from that client. That is a client-side gap, not this repo's — noted only so the `preferred` results above are read as deliberate `curl` probes.
- `docling`, `mineru`, `marker` — not run (slim image). The claim that a layout-aware extractor would answer better is the contract's, not something I measured.
- The two papers are not attached. `indesign-three-column-sidebar.pdf` reproduces F1/F2/F4 with no external file; both papers are public at the DOIs above if you want the exact inputs.
