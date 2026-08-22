# Lite Research Plan: AI agentic systems for intelligence gathering, foresight & weak signals

## Seed

- Path or topic: Free-text topic — "AI based automated intelligence gathering systems, foresight and futures signal gathering. Explore conventional adaptations of existing agentic systems specialised for policy and weak-signals analysis."
- Seed type: free-topic
- Vault sweep result: no direct existing material; nearest threads are `Wiki/Synthesis/ai-research-methods` and `Research/Computational Social Science/*` (AI-led interviews, synthetic respondents). This scan is new ground; archive target (post-scan, with user approval) fits `Research/AI Governance & Ethics` or `Research/AI Systems & Deployment`.

## User Intent

- Intent: `explore-domain`
- Verification mode: `medium` (key leads get direct URLs; load-bearing claims checked; minor leads loose)
- Focus: `mixed` — domain-map of approaches + concrete adapted systems (similar-cases)
- Constraints:
  - Time range: 2023–2026 (agentic-LLM era; older seminal sources where they orient the field)
  - Source mix: practitioner/vendor docs + academic; recent primary sources lead
  - Geography: global
  - Include: government/policy foresight context (public-sector + intelligence-community adaptations discussed openly)
  - Exclude: offensive-surveillance operations detail (boundary notes only)

## Search Strategy

- Search dimensions:
  1. OSINT / open-source intelligence gathering with LLM agentic pipelines (e.g., agentic OSINT frameworks, commercetech)
  2. Horizon scanning / futures & foresight automation (weak-signal detection, early-warning systems, scenario generation)
  3. Weak-signal detection & trend analysis methods (classical + ML, then agentic adaptations)
  4. Policy analysis & policy intelligence tools built on agentic LLM stacks (policy brief generation, regulatory horizon scanning)
  5. Mainstream agentic frameworks repurposed for these tasks (LangGraph, AutoGen, Claude/GPT-based research agents, browser agents, subagent orchestration)
  6. Public-sector / government foresight units using AI agents (EU, US, UK, think tanks)
  7. Adjacent: AI research assistants (Deep Research-class tools) used as signal-gathering layers
- Source priorities:
  - recent primary sources (vendor docs, government publications, arXiv, arXiv-adjacent preprints)
  - practitioner writeups (blogs, conference talks, case studies)
  - academic sources where methods are involved (foresight methodology, weak-signal theory: Ansoff 1975 lineage, Hiltunen 2008, ISO 56088/27950 scanning standards)
- Note: "conventional adaptations" in seed = emphasize off-the-shelf agentic stacks being repurposed, not bespoke classified systems.

## Acceptance Criteria

- [ ] Output answers the chosen intent (explore-domain: readable landscape + concrete adapted systems)
- [ ] Key leads include direct URLs
- [ ] Claims are phrased at `medium` verification level (verified vs reported vs unverified distinctions explicit)
- [ ] Brief includes numbered `## Sources`
- [ ] Provenance sidecar written
- [ ] Lightweight and lead-rich — not a deep-research upgrade

## Task Ledger

| ID  | Owner               | Task                                       | Status | Output             |
| --- | ------------------- | ------------------------------------------ | ------ | ------------------ |
| T1  | lead / literesearch | Read seed, sweep vault, confirm scope      | done   | plan               |
| T2  | lead / researcher   | Sweep 6 search dimensions in parallel      | done   | outputs/.research/ ×5 |
| T3  | lead / literesearch | Synthesize brief + provenance sidecar      | done   | outputs/<slug>.md + .provenance.md |
| T4  | lead / literesearch | Update ledger, verify plan file at end     | done   | plan               |

> **Pivot note (T2):** builtin `researcher` subagents could not launch in this environment (missing extension `research-tools.ts` — "Failed to load extension"). The lead ran all five dimension sweeps directly (BingRSS/GoogleNewsRSS/HN Algolia + GitHub API + OpenAlex/Crossref + direct fetches; arXiv endpoint returned 0 for several queries), and wrote the per-dimension artifacts to `outputs/.research/`. No scope change; sweep coverage matches the plan's dimension list.

## Verification Log

| Item                                | Method                       | Status  | Evidence          |
| ----------------------------------- | ---------------------------- | ------- | ----------------- |
| Intent confirmed                    | user message ("1 explore-domain", "go") | done | session           |
| Key leads have direct URLs          | source check on load-bearing claims | done (38/38) | outputs/<slug>.md |
| Verification mode applied (medium)  | plan vs brief review         | done | outputs/<slug>.md (VERIFIED/REPORTED/UNVERIFIED markers) |
| Provenance sidecar written          | file exists check            | done | outputs/<slug>.provenance.md |
| Plan file updated at end of run     | ledger/log review            | done | this file        |
| Researcher fanout                   | launch attempt               | blocked | extension `research-tools.ts` missing → lead-run sweeps (pivot note above) |