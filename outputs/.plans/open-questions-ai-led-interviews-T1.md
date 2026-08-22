# Researcher Brief T1 — Validation Thread

**Run:** deep research `open-questions-ai-led-interviews`
**Your role:** researcher A — Thread 1 (validation of the Geiecke & Jaravel "Conversations at Scale" claims)

## Context (read first)
- `notes/open-questions-ai-led-interviews.md` — the open-questions brief this run must answer.
- `fnl-aii/Research/Computational Social Science/ai-led-interviews.md` — the archived 45-entry source brief with full version list, access statuses, and open questions.
- `outputs/.plans/open-questions-ai-led-interviews.md` — run plan.

## Questions to answer (T1)
1. **Publication status:** Has *Conversations at Scale: Robust AI-led Interviews* (Geiecke & Jaravel) appeared in the *Review of Economic Studies* (the archive says author-reported acceptance as of Feb 2026)? Check: REStud web page / IngentaConnect / journal site; arXiv; the authors' sites (xavierjaravel.com/papers; friedrichgeiecke.com or similar); SSRN 4974382; CEPR DP19705; LSE POID WP120 news. Record what exists now vs. what was claimed in the archive.
2. **Replication of the LSE Behavioural Lab result** (AI voice 3.93 > human FTF 3.51 > AI text 2.98 > human online text 2.42: single-source in the Feb 2026 author PDF). Search for any independent replication, comment, critique, or published-version reproduction of the human-vs-AI interview comparison (modalities: voice/text/FTF; blind grading by sociology PhD students). Also look for new LSE Behavioural Lab material.
3. **Reliability of the yardstick:** inter-grader correlation 0.42 (0.62 excl. outlier). Any discussion/response in later versions, blog posts, or replication threads?
4. **Sample discrepancies:** French-election deployment 422 (June 2025) vs 384 (Feb 2026); US sample 466 vs 462. If a canonical/published version is found, record the numbers it reports. If not, state clearly: unresolved.
5. **Boundary of complementarity:** the authors' caveat that AI interviewers "never match the best human experts" — quoted anywhere newly (interviews, blog, podcast, author commentary)? Record any new statement of scope/intended use.
6. **SSRN parity:** is the SSRN abstract page still Cloudflare-gated? Any sign of an updated posting matching the Feb 2026 version?

## Method
- Current-state web first (`web_search` with multiple query angles; use recency filters where useful). Then paper metadata databases (`alpha_search`, `feynman_science_database_search` sources: arxiv, crossref, openalex) to check for a journal version and citations to the paper.
- **Do NOT fetch PDFs.** If the only source for a claim is a PDF (e.g., the author PDFs already listed in the archive), cite the PDF URL from search metadata and mark full-text reading as blocked. HTML pages (CEPR page, POID abstract page, journal ToC pages, SSRN abstract if reachable) are fine for `fetch_content`.
- Record every query you ran and which sources you actually read vs. only found.

## Output
Write a findings report (Markdown) with:
- Answer per question, each claim tagged **[verified from source URL]** / **[single-source]** / **[unverified]** / **[blocked — PDF only]**.
- A "What changed since the archive" section (Feb 2026 → now).
- A "New sources found" list with URLs.
- End with: queries run; sources accepted; sources rejected (dead links, blocked).