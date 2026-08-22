# Researcher Brief T4 — Governance, Data Residency, Consent

**Run:** deep research `open-questions-ai-led-interviews`
**Your role:** researcher D — Thread 4 (jurisdiction pinning, voice transcription leak, consent templating)

## Context (read first)
- `notes/open-questions-ai-led-interviews.md` — Q9, Q10, Q11 in the plan (Q9–Q11 of the brief).
- `fnl-aii/Research/Computational Social Science/ai-led-interviews.md` — Q3 of that brief (provider matrix, whisper-1 leak, consent) with full source list (sources 31–41, 7, 10) and the provider configuration matrix.
- `outputs/.plans/open-questions-ai-led-interviews.md` — run plan.

## Background facts to verify/update (from archive, as of Feb 2026)
- Azure (AI Foundry regional deployment): strongest jurisdiction-pinning option; EU Data Boundary.
- OpenAI: EU endpoint (`eu.api.openai.com`) = storage + processing in EU but approval-gated; other regions storage-only.
- Anthropic: US-only pinning (`inference_geo:"us"`).
- Gemini API: no processing pin; Vertex AI flagged as the possible Google path but **not verified**.
- Voice transcription in the seed platform (`github.com/friedrichgeiecke/interviews`) always routes through OpenAI `whisper-1` even when the provider is set to Anthropic/Google/Azure.

## Questions to answer (T4)
1. **Vertex AI residency (the key unverified claim):** As of now, can Google Vertex AI pin *processing* (not just storage) of data used in model inference to a jurisdiction (e.g., EU)? Check current Google Cloud docs: Vertex AI data residency / processing location / "data processing location" controls; EU regions; Customer-Managed Encryption Keys (CMEK); whether inference requests are processed in-region for regional endpoints; any EU Data Boundary-style commitment. The archive's claim "Gemini API cannot pin processing; a jurisdiction-pinned Google path would be Vertex AI (not verified)" — verify or falsify it with official docs.
2. **Provider matrix freshness:** Re-check each provider's current (2026) residency/retention state for any changes since Feb 2026: Azure AI Foundry regional deploys + EU Data Boundary; OpenAI data controls (EU endpoint approval gating; zero-data-retention; new features like data residency options); Anthropic data residency (still US-only? new regions?); Gemini API terms (still "any country" transient logging?).
3. **whisper-1 voice leak:** Check the current state of `config.py` / `full_voice_interview.py` (and any related files) in `github.com/friedrichgeiecke/interviews` (use fetch_content on raw.githubusercontent.com paths, or the repo browser; the repo README/config may have changed since the archive). Is transcription still hardwired to OpenAI `whisper-1`? Is provider-neutral voice now possible (e.g., Azure STT, Google STT, local Whisper)? Keep it factual: what the code currently does.
4. **Consent templating:**
   - AAPOR Task Force, *Responsible AI Integration in Survey Research* (May 2026, https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf — may be a PDF; if blocked, work from AAPOR pages and secondary coverage): confirm the "distinct, clearly labeled consent item with opt-out" requirement and the warning about third-party platforms that "may retain or further train on personal data."
   - Rutgers HRPP AI Consent Guide template — still current? URL and what it provides.
   - Samuel & Wassenaar, JERHRE 2025 (DOI 10.1177/15562646241296712) — editorial position.
   - **New:** any evidence of IRB uptake — IRB guidance documents (US institutions, SACHRP updates), journal policies requiring AI-consent language, template consent clauses now shipping in AI-interview platforms (Outset, Dovetail, Looppanel, open-source OpenInterviewer)?

## Method
- Current-web heavy: `web_search` (multiple angles; recency filters) + `fetch_content` on official docs (learn.microsoft.com, platform.openai.com/docs, platform.claude.com/docs, cloud.google.com/vertex-ai, ai.google.dev) and the GitHub repo files (raw.githubusercontent.com). Use `alpha_search` only if a literature angle appears (e.g., privacy research on LLM interview data).
- **Do NOT fetch PDFs** (AAPOR report may be a PDF — if so, work from metadata/HTML coverage and mark the PDF itself as blocked).
- Record queries and sources actually read.

## Output
Write a findings report (Markdown) with:
- Answer per question; claims tagged **[verified from source URL]** / **[single-source]** / **[unverified]** / **[blocked — PDF only]**.
- A refreshed provider matrix (table) with "as of now" status per provider.
- Whether the Vertex AI claim is now **verified / falsified / still unverified**.
- "New sources found" list with URLs.
- End with: queries run; sources accepted; sources rejected.