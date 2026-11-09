# Provenance: Next-Concept Modeling (NCM)

- **Date:** 2026-11-09
- **Seed:** free-topic — Next-Concept Modeling, arXiv 2610.14162 (identity-locked by the caller)
- **Intent:** tell-me-more-about-this (primary) + explore-domain (neighbourhood only)
- **Verification mode:** medium
- **Rounds:** 9 lead rounds (arXiv abs → arXiv HTML v1 → method sections → appendix ablations → repo API/code → HF checkpoints/datasets → blog + lab pages → issue threads → OpenAlex/Zenodo citation graph) + 2 `researcher` children
- **Sources consulted:** 62
- **Sources accepted:** 51 (numbered in the brief; 45–51 added by the 2026-11-09 addendum)
- **Verification:** PASS WITH NOTES
- **Plan:** outputs/.plans/next-concept-modeling.md
- **Addendum plan:** outputs/.plans/next-concept-modeling-addendum.md
- **Research files:**
  - outputs/.research/ncm-d1-d2.md — paper anatomy + training method (lead)
  - outputs/.research/ncm-d3-d4.md — inference / test-time scaling + lineage (lead)
  - outputs/.research/ncm-d4-lineage.md — lineage fanout (researcher child)
  - outputs/.research/ncm-d5-d6.md — reactions, citations, repo signals (researcher child) **+ lead addendum**
  - outputs/.research/ncm-add-d1-run-path.md — addendum: the real run path and the six known defects (lead, 2026-11-09)
  - outputs/.research/ncm-add-d2-hardware.md — addendum: parameter counts, memory arithmetic, measured consumer runs, training-cost derivation (lead, 2026-11-09)

- **Addendum round (2026-11-09):** appended `## Addendum: Running It and What Hardware You Need` between `## Follow-up Routes` and `## Glossary`; extended `## Sources` from 44 to **51** entries. No other part of the brief was modified. Sources consulted for the addendum: 11 (README, `requirements.txt`, `evaluate.py`, `config/eval/` × 8, HF tree API, issues #5/#9/#10/#11/#21/#24, PR #5, arXiv v1 appendix C, Seemann PDF, Rahmani PDF, Music parity page); accepted 7 new (45–51); rejected 0 new (no secondary write-ups used). One `literesearch` agent, no child fanout — the five search dimensions resolved from primary sources already in hand plus five direct fetches, so fanout would have added no coverage.

- **Non-CUDA round (2026-11-09):** appended `### On a non-CUDA machine (AMD, Windows)` inside the addendum, before `### Training cost`; extended `## Sources` from 51 to **56** entries (52–56). Triggered by the operator's target machine: 128 GB Strix Halo (Ryzen AI MAX+ 395 / Radeon 8060S, gfx1151), 96 GB addressable on Windows. **Method:** the portability claim was read out of the repository, not asserted — fetched `requirements.txt`, `models/common.py`, `models/next_concept.py`, `models/quant.py`, `models/vqvae.py`, `evaluate.py`, `evaluation/gen_ppl.py`, the repo tree, and the released `xsum/config.yaml`. Findings: no Triton/flash-attn/xformers/bitsandbytes anywhere; attention defaults to `F.scaled_dot_product_attention` (`use_flex_attention: false` in the shipped config) with a guarded `flex_attention` fallback; `torch.distributed` is fully guarded. **Conclusion: no source edits or custom wheel conversions are required** — an ordinary ROCm build runs it. The one real loss is `torch.compile`, unavailable because Triton-on-Windows is still in progress ([55]), which puts the Figure 1 CUDA-graph timings out of reach. Bandwidth, not capacity, is the binding constraint: Strix Halo ~256 GB/s against a measured 268 ms p50 on a 192 GB/s RTX 3050 Laptop ([49]) implies ~200 ms per XSum request at batch 1. STE100 re-checked on the new subsection: 39 sentences, mean 9.1 words, longest 19.

- **Notes:** Lightweight horizon scan at `medium`; references included for follow-up, not exhaustive verification. Every headline number in the brief is traced to a named table/figure/appendix (§4.5, §4.6, Table 2/3/5/6/8/9, F.2.1/F.2.3/F.3/F.4, Fig. 15, Fig. 6) or to a repo/HF artifact — never to commentary.

## What the scan established (beyond the brief)

1. **arXiv revision state: v1 only.** Single submission, `[v1] Fri, 9 Oct 2026 17:49:45 UTC (352 KB)`, no `Comments:` field, no replacement. The knowledge base is one unreviewed preprint + an author blog + an author repo. The arXiv abstract also contains a **duplicated sentence** (the Sudoku sentence appears twice), which the child independently confirmed — a v1 copy-editing artifact that will propagate into auto-generated summaries.
2. **Released checkpoints exist — 9 of 10 advertised entries.** `hazyresearch/ncm-checkpoints` + `hazyresearch/ncm-datasets` (both MIT, created 2026-10-13). Confirmed by fetching sizes from the HF tree API: LM1B small/medium/large at 390 MB / 1268 MB / 2901 MB, plus XSum, WMT14, TinyStories, Sudoku×3. **OpenWebText is absent**: `owt/` holds only `TODO.md` (contents: `TODO`), the resolve URLs return 404, and `config/eval/owt.yaml` ships `data: {}` — while the repo README links all three OWT files. So the OWT leg of the "10× faster" claim is not auditable from artifacts.
3. **Training code was never released.** The repo is inference/evaluation only (5 commits, last push 2026-10-14, 12 unmerged PRs). Issue #10 asks for it (open); the maintainer said in issue #9 "We'll release the timing stuff + training code shortly" (2026-10-20). The plan's instruction to pull method detail from "training scripts" therefore resolves to configs-yes / scripts-no, and the brief says so.
4. **The speed claims are real under stated settings but not reproducible from the shipped code.** Issue #9's reporter measured 44.71 s for XSum vs a ≈3.4 s Figure 1 read-off, reaching 3.45 s only after adding KV cache + bf16 autocast + CUDA graphs; the maintainer confirmed those were the benchmark settings. The child's gap ("did the authors answer?") was closed by the lead reading the comment bodies — they did, and they also conceded an NFE off-by-one for XSum.
5. **Citation count is zero.** Semantic Scholar citations array empty; arXiv metadata search returns only the paper. OpenAlex's 3 "citations" are Zenodo deposits (2 by one individual, 1 an actuarial application). Two metadata traps noted and not propagated: OpenAlex `cited_by_count: 3` vs `counts_by_year: 2`; and the actuarial record's `publication_date: 1997-12-31` is a valuation date inside the document, not a publication date.
6. **Two IDs in the caller's/fanout briefs were wrong and were corrected by the lineage child**: `2311.05915` is "Fake Alignment", not FlashFFTConv (correct: `2311.05908`); Monarch Mixer is `2310.12109`. Separately, the plan's hypothesis that NCM inherits the Ré-lab efficient-sequence-model stack is **unsupported** — full-text search of v1 finds zero mentions of Monarch/Hyena/FlashFFT, and the released generator has no linear-attention layer.
7. **The caller's label for the second NCP paper is imprecise.** arXiv `2609.10715` is titled *NCP-ArchPreview Technical Report: Moving towards Latent Space Language Models through Next Concept Prediction* (the caller called it "Intern-NCP"). Authors include Dahua Lin; the brief uses the actual title.
8. **One independent finding I verified personally** rather than taking from a comment: `idx_to_zhats` in `models/quant.py` accumulates with in-place `add_` and appends the same tensor each level (issue #11), and the `quadratic` level scheduler divides by `(n-2)**2` while every sibling scheduler uses `n-1` (issue #21). Both are real in the released code.

## Rejections and exclusions

- **Excluded by rule, not used as evidence:** arXiv aggregators (alphaxiv, emergentmind, huggingface.co/papers, arxivradar, mlsanity), SEO write-ups and mirrors (arxiv.t3mt.com, dev.to syndication of Music's work), Google Scholar (JS-gated, unreachable — the main citation-search hole), and all social/news venues. The child listed the rejected set explicitly.
- **Rejected on relevance:** arXiv `2610.33027` (*Conceptizer: Next-Token Prediction Is Not All You Need*) surfaced in the OpenAlex "next-concept" neighbourhood but is unrelated — a fixed ~9K-synonym concept vocabulary used for reward shaping, no connection to NCM's coarse-to-fine hierarchy.
- **Flagged unverified, therefore not load-bearing:** two lineages rows (VQ-VAE-2 `1906.00446`, DFlash `2602.06036`) rest on the paper's own bibliography rather than a fetched abs page; `Kanz4kii/Next-Concept-Modeling` on HF is an apparent reimplementation whose purpose was not inspected; `kumboh/ncm-vqvae-16lvl-32to1024` (lead author's own HF account, 2026-08-02 — predating the preprint) is noted as a signal only.
- **Weight discount applied to the independent literature.** The five Zenodo follow-ups are single-author, self-archived, not peer reviewed, and at least two disclose heavy LLM assistance. They are used as directional signals and leads with that caveat stated in the brief; none is the sole support for a load-bearing claim about the paper.

## Residual uncertainty

- Google Scholar was unreachable, so "zero citations" is established across Semantic Scholar + arXiv metadata + OpenAlex, not Scholar. A paper citing NCM only in its body could still be missed.
- No venueless/peer-review outcome was found; the brief states v1-only and unreviewed rather than implying absence of rejection.
- The per-level conditioning-corruption schedule, the exact `Down_k` architecture above level 1, and all training FLOPs/hardware are not determinable from paper + released code. The brief marks these as gaps rather than reconstructing them.
- Gap: the paper's Figure 6/Figure 15 values exist only as plot read-offs and prose; no appendix table backs the MBR sweep. Reported as such.

### Addendum-specific residual uncertainty

- **v1 discloses no training compute at all.** It names one H100 SXM 80GB, and only for the timing benchmark. There is no training GPU count, no wall-clock, and zero occurrences of "GPU hour" / "GPU-hour" / "GPU days" in the full HTML. GPU-hours are reported `unavailable`, not estimated from silence.
- **The training-cost estimate rests on one assumption with a named error bar.** `derived`: 6 × 725.3e6 × 6.55e9 = 2.85e19 FLOPs at an assumed 150 TFLOP/s gives 53 GPU-hours for `lm1b-large`; the level-concatenation factor (TinyStories ladder sums to 641 positions against L = 128, ×5.0) lifts the plan to 120–300 GPU-hours. The 30%-of-dense-peak throughput assumption and the ×5 ladder factor are both mine, not the authors'.
- **KV-cache figures are derived, never measured.** No source reports a KV-cache byte count. The claim that the cache stays under 24 MB per sequence rests on the config dims × positions × 2 bytes and is checkable by anyone with the configs.
- **The one calibration point against a measured peak is 3× — and it is a single point.** The arithmetic predicts 1.0 GB for XSum at batch 32 in fp16; Rahmani measured 3.4 GB. The planning rule (4 × arithmetic) is fitted to that one observation and may be wrong in either direction for `lm1b-large`.
- **No independent party reports VRAM for `lm1b-medium`, `lm1b-large`, or TinyStories on a GPU, and none reports latency under the released default settings on any hardware.** Marked `unavailable` in the brief rather than extrapolated.
- **Not executed.** The install and eval commands were transcribed from `README.md` and `evaluate.py`, not run: the session had no GPU and no network write path to a checkpoint mirror. A reader who finds a typo in step 6 of the procedure should treat the README as authoritative.
- **Line budget deviation, stated plainly:** the addendum is 105 lines (74 non-blank), against the plan's "~50 added lines". The seven required areas (procedure, breakage, per-bundle memory table, measured runs, split training cost, 8–12 step playbook, applications) set a floor above 50. Nothing was cut from the required coverage to meet the line target.
