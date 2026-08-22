---
topic_path: Research/Computational Social Science
---

# Lite Research Plan: AI-led interviews in research studies

## Seed

- Path or topic: Free text — three follow-up questions on `friedrichgeiecke/interviews` ("Conversations at Scale: Robust AI-led Interviews", SSRN 4974382), expanded to the broader domain
- Seed type: free-topic
- Anchor material: `outputs/friedrichgeiecke-interviews-summary.md` (previous run)

## User Intent

- Intent: explore-domain (map the broader field of AI-led/LLM interviews in research)
- Verification mode: medium (cross-check key claims against 2+ independent sources)
- Focus: mixed (follow-up routes first — the three questions — plus a compact landscape of nearby work)
- Constraints: none (recency-led, seminal sources where relevant)

## Search Strategy

- Search dimensions:
  1. The Geiecke & Jaravel paper itself (SSRN 4974382): abstract, posted version, robustness/validation evidence for AI-led interviews; web + arXiv/bioRxiv/SSRN retrieval
  2. The repo internals for the follow-up questions: `analysis/README.md` (coding method for transcript analysis), `tutorial-online-interviews.md` (survey integration, consent language), `config.py` (provider/jurisdiction options)
  3. Domain landscape: LLM-conducted interviews / interview agents in social science, market research, and HCI (e.g. "AI interviewer", "LLM qualitative interviews", "chatbot interviews", conversational agents in surveys); related tooling and platforms
  4. Provider data-residency and consent: Azure data residency/region pinning, OpenAI/Anthropic API data retention & privacy terms; research-ethics guidance on third-party AI processing in interviews (IRB/consent templates)
- Source priorities:
  - recent primary sources (2023–2026 papers, preprint servers, provider policy docs)
  - historical/seminal sources when relevant (e.g. early conversational-agent survey research)
  - provider official docs for data-residency claims

## Acceptance Criteria

- [x] Output answers the chosen intent (domain map) with the three follow-up routes answered or routed
- [x] Key leads include direct URLs
- [x] Claims are phrased at medium verification level (cross-checked where load-bearing)
- [x] Brief includes numbered `## Sources`
- [x] Provenance sidecar written (`outputs/ai-led-interviews.provenance.md`)

## Task Ledger

| ID  | Owner               | Task                                                                 | Status   | Output                       |
| --- | ------------------- | -------------------------------------------------------------------- | -------- | ---------------------------- |
| T1  | lead / literesearch | Read seed + anchor summary; extract search terms; plan                | done     | this plan                    |
| T2  | literesearch agent  | Paper lookup (SSRN 4974382) + repo internals for the 3 questions      | done     | outputs/.research/ai-led-interviews-d1-d2.md + ai-led-interviews-repo-*.md |
| T3  | literesearch agent  | Domain landscape: LLM-interview papers, tools, platforms              | done     | outputs/.research/ai-led-interviews-d3-d4.md |
| T4  | literesearch agent  | Provider data-residency + consent/ethics sources                      | done     | outputs/.research/ai-led-interviews-d5-d6.md |
| T5  | literesearch agent  | Synthesize brief + provenance; update ledger/log                      | done     | outputs/ai-led-interviews.md |

## Verification Log

| Item                                | Method                       | Status  | Evidence          |
| ----------------------------------- | ---------------------------- | ------- | ----------------- |
| Intent confirmed                    | questionnaire                | done    | session           |
| Plan confirmed by user              | prose confirmation           | done    | session           |
| Key leads have direct URLs          | lead review                  | done    | outputs/ai-led-interviews.md (45 numbered sources) |
| Verification mode applied correctly | plan vs brief review         | done    | outputs/ai-led-interviews.md (inline cross-checked/single-source/unverified tags) + provenance sidecar |

## Pivot / Blocker Notes (final pass)

- **SSRN blocked:** ssrn.com Cloudflare-gated on all hosts; the paper's abstract and robustness evidence were instead read from CEPR DP19705, EconPapers, LSE POID WP120 (June 2025 PDF), and the author-hosted 7 Feb 2026 PDF. SSRN-text parity with the Feb 2026 version remains unverified — noted in brief and provenance.
- **No pivot:** all three follow-up questions were answered within the planned dimensions; domain map delivered at 39-lead depth in the research file, condensed to ~33 leads in the brief.
- **Residual single-source items** (flagged, not blockers): LSE Behavioural Lab human-vs-AI results and the 86% coding-agreement figures exist only in the Feb 2026 author PDF; REStud acceptance is author-reported.
- **Result ready for archive** as a medium-verification horizon scan; a future `deep-research` pass would be justified only on the single-source robustness evidence once the REStud published version appears.
