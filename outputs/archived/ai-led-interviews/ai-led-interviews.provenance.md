# Provenance: AI-led interviews in research studies (literesearch)

- **Date:** 2026-08-22
- **Seed:** outputs/friedrichgeiecke-interviews-summary.md (friedrichgeiecke/interviews; SSRN 4974382)
- **Intent:** explore-domain (mixed focus: three follow-up questions first, then domain map)
- **Verification mode:** medium
- **Rounds:** 1 (3 parallel researcher scans + direct repo fetches)
- **Sources consulted:** ~60 (3 researcher scans: 12 paper-version sources, 39 domain leads, 19 provider/ethics sources; + 4 repo files fetched directly)
- **Sources accepted:** 45 (numbered in outputs/ai-led-interviews.md); remaining lead-level detail retained in research files
- **Verification:** PASS WITH NOTES
- **Plan:** outputs/.plans/ai-led-interviews.md
- **Research files:**
  - outputs/.research/ai-led-interviews-d1-d2.md
  - outputs/.research/ai-led-interviews-d3-d4.md
  - outputs/.research/ai-led-interviews-d5-d6.md
  - outputs/.research/ai-led-interviews-repo-{README,config,analysis/README,tutorial}.md (direct raw.githubusercontent.com fetches)

## Claim-cluster provenance (medium mode)

| Claim cluster | Sources | Status |
|---|---|---|
| Paper exists; DOI 10.2139/ssrn.4974382; authors LSE | SSRN (blocked, existence only), CEPR DP19705, POID WP120, OpenAlex, EconPapers | cross-checked |
| Abstract text (Nov 2024 / June 2025 versions) | CEPR + EconPapers + POID page + POID PDF (identical text) | cross-checked |
| Abstract + evidence (Feb 2026 revision) | author-site PDF only | single-source (primary author document) |
| Expert blind-grading (~3 = average human expert; 0.42/0.62 inter-grader corr.) | POID WP120 PDF + Feb 2026 PDF | cross-checked |
| LSE Behavioural Lab human-vs-AI comparison (3.93/3.51/2.98/2.42) | Feb 2026 author PDF only | single-source |
| LLM-vs-human coding agreement (0.655 vs 0.76 = 86%; Claude-GPT 0.83) | Feb 2026 PDF (86% figures); June 2025 PDF (84% figures) | single-source per version; direction consistent across versions |
| Repo analysis method = 2-step hypothesis-generation + labelling; paper §2.3 | analysis/README.md (direct raw fetch) + paper sections | cross-checked (primary) |
| Repo consent requirement (flag third-party AI processing; no template) | README.md (direct raw fetch) | primary, single-source (it is the definitive source on what the repo says) |
| Voice transcription always uses OpenAI API regardless of provider | config.py (direct raw fetch, MODEL_TRANSCRIPTION = "whisper-1") | primary, single-source |
| Azure regional deployment = in-geography processing; EU Data Boundary; EEA reviewers | learn.microsoft.com data-privacy doc + EU Data Boundary doc | cross-checked (both official Microsoft) |
| OpenAI: no API training, 30-day default abuse logs, EU endpoint approval-gated | platform docs + Terms of Use | cross-checked |
| Anthropic: no training, US-only inference pin, storage US-only | platform.claude.com data-residency + API-and-data-retention docs (+ Commercial Terms) | cross-checked |
| Gemini API: no training on paid tier, no processing pin | ai.google.dev terms (binding legal doc) | single-source |
| AAPOR tiered AI-disclosure consent guidance | AAPOR task force PDF + AAPOR 2026 Code of Ethics | cross-checked |
| REStud 2026 acceptance | Jaravel homepage only | single-source (author-reported) |
| No arXiv/NBER version of the paper | arXiv API query (zero results) + OpenAlex locations | cross-checked |

## Blocked / unreachable sources

- **SSRN abstract page (ssrn.com/abstract=4974382, papers.ssrn.com, api.ssrn.com):** Cloudflare challenge on all hosts and via proxy — abstract never read from SSRN itself; all abstract/evidence text sourced from CEPR/POID/author-hosted versions. Whether the current SSRN posting matches the Feb 2026 author version is **unverified**.
- **OpenAI Business Privacy page + help-center articles:** HTTP 403 (bot protection); platform docs + Terms of Use used instead.
- **AAPOR site pages:** 403 on direct fetch; PDFs used.
- **Semantic Scholar:** persistent HTTP 429 during the paper scan.
- **General web engines (DDG/Bing/Mojeek) in the paper scan:** blocked/anomaly pages — secondary press coverage of the paper cannot be ruled out; none found.
- **Vertex AI regional residency:** flagged as the Google pinning path but not verified this run.

## Notes

Lightweight horizon scan at medium verification: load-bearing claims traced to checked sources; single-source items (notably the Feb-2026-only Behavioural Lab results and coding-agreement figures) flagged inline in the brief. Researcher scans relied on abstracts/metadata for domain-map papers, not full texts. No factual claim in the brief derives from an unfetched source.
