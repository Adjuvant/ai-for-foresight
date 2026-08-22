# Researcher Brief T3 — Analysis-Pipeline Consistency

**Run:** deep research `open-questions-ai-led-interviews`
**Your role:** researcher C — Thread 3 (analysis-pipeline consistency / LLM coding agreement)

## Context (read first)
- `notes/open-questions-ai-led-interviews.md` — Q7, Q8.
- `fnl-aii/Research/Computational Social Science/ai-led-interviews.md` — Q2 of that brief (analysis pipeline facts) and the LLM-assisted qualitative-analysis strand of the domain map.
- `outputs/.plans/open-questions-ai-led-interviews.md` — run plan.

## Background facts to verify/update (from archive)
- The seed paper's analysis pipeline: LLM hypothesis generation then labelling (§2.3). Claimed agreement:
  - Feb 2026 author version: LLM-RA correlation 0.655 vs RA-RA 0.76 → "86% of human-human" consistency; GPT-5 vs RAs 0.73; Claude 3.5 Sonnet vs GPT-4o cross-model 0.83.
  - June 2025 POID WP120 version: "close to 84% of" human-human correlation; French-election vote-party labels perfect agreement, mean 0.68 across 13 vote-reason codes (range 0.44–1).
- Human baseline: RA-RA correlation 0.76.

## Questions to answer (T3)
1. **Canonical figure:** Did a REStud published version (or any newer version) appear, and what coding-agreement numbers does it report (86%? 84%? both?)? If no new version exists, state that the 86-vs-84 tension is unresolved as of the latest accessible version. (Coordinate with T1 if possible — both check publication status; you may use the same sources.)
2. **Acceptance standard:** What do other studies use as the "acceptable" bar for LLM-assisted coding agreement relative to human inter-coder reliability? Search the LLM-assisted qualitative-analysis literature:
   - De Paoli (SSCR 2023, DOI 10.1177/08944393231220483)
   - Mathis et al. (CMPB 2024, DOI 10.1016/j.cmpb.2024.108356)
   - Dai et al. (arXiv 2310.15100), QualiGPT (arXiv 2310.07061), J-PAL llm-quali-coding tutorial (github.com/PovertyAction/llm-quali-coding)
   - Any NEW studies (2025–2026) comparing LLM coding agreement to human-human agreement (correlation, Cohen's kappa, percent agreement) in interview/qualitative data, including the well-known thresholds literature (e.g., Landis & Koch kappa benchmarks, acceptable reliability 0.7–0.8+) for context.
3. **Cross-model stability:** any new evidence on agreement across LLM models for labelling tasks (the 0.83 Claude-vs-GPT-4o anchor)?
4. **Methodological commentary:** any published critique of using correlation-with-human-coders as the yardstick for LLM coding quality (e.g., benchmark ceiling, human-baseline noise)?

## Method
- Paper-first with `alpha_search` and `feynman_science_database_search` (arxiv, crossref, openalex) plus `web_search` for status (REStud publication) and grey literature.
- **Do NOT fetch PDFs.** Abstracts/metadata/HTML only; cite PDF URLs from metadata and mark full-text as blocked where needed.
- Record queries and sources actually read.

## Output
Write a findings report (Markdown) with:
- Answer per question; claims tagged **[verified from source URL]** / **[single-source]** / **[unverified]** / **[blocked — PDF only]**.
- A short "acceptance-standards landscape" section: what thresholds the field uses (with sources).
- "New sources found" list with URLs.
- End with: queries run; sources accepted; sources rejected.