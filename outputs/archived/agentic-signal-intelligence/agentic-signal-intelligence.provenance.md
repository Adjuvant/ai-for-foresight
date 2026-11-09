# Provenance: AI agentic systems for intelligence gathering, foresight & weak signals

- **Date:** 2026-08-22
- **Seed:** free-text topic — "AI based automated intelligence gathering systems, foresight and futures signal gathering. Explore conventional adaptations of existing agentic systems specialised for policy and weak signals analysis."
- **Intent:** explore-domain
- **Verification mode:** medium
- **Rounds:** 1 (single coordinated sweep; builtin `researcher` subagents unavailable — missing extension `research-tools.ts` — so the lead ran all dimension sweeps directly via search-RSS (Bing RSS, Google News RSS, HN Algolia), GitHub API, OpenAlex/Crossref/arXiv APIs, and direct page fetches; per-dimension logs written by the lead)
- **Sources consulted:** ~48 (search-result items inspected across 5 dimensions; includes rejected/noisy results)
- **Sources accepted:** 38 (numbered in brief Sources)
- **Verification:** PASS WITH NOTES

## Research files

- outputs/.research/agentic-signal-intelligence-dimA-osint.md
- outputs/.research/agentic-signal-intelligence-dimB-foresight.md
- outputs/.research/agentic-signal-intelligence-dimC-weak-signals.md
- outputs/.research/agentic-signal-intelligence-dimD-policy.md
- outputs/.research/agentic-signal-intelligence-dimE-frameworks.md

## Verification status of load-bearing claims

| Claim | Status | Evidence |
| ----- | ------ | -------- |
| OpenOSINT is an AI-powered OSINT agent with REPL/MCP/CLI, 19 tools, Claude/GPT-4/local models | VERIFIED | GitHub README (page fetch + API) |
| LookerBot = AI agents for OSINT collection | VERIFIED | lfgberg.org page |
| Dataminr = real-time AI event/risk detection; "100+ US government agencies" | VERIFIED (platform) / REPORTED (gov count) | dataminr.com pages + TechCrunch (NATO/OpenAI customers) |
| Recorded Future has an AI layer for intel workflows | VERIFIED page; capabilities REPORTED | recordedfuture.com/platform/ai |
| Perigon = AI real-time news-intelligence platform | VERIFIED | perigon.io |
| Open-source framework repositories and star counts (STORM, gpt-researcher, open_deep_research, DeepResearch, browser-use, CrewAI, AutoGen, LangGraph, smolagents) | VERIFIED | GitHub API |
| OpenAI Deep Research and Operator launched Feb 2025 class agents | VERIFIED | openai.com pages (rendered) |
| Anthropic multi-agent research system build notes | VERIFIED | anthropic.com engineering post |
| Google Gemini Deep Research (Dec 2024) | VERIFIED | blog.google post |
| Perplexity Deep Research launch | REPORTED | hub URL resolves but Cloudflare bot-checked; media coverage seen |
| Ansoff 1975 weak signals (California Management Review) | VERIFIED | Crossref DOI 10.2307/41164635 |
| Hiltunen "future sign and its three dimensions" (Futures) | VERIFIED | OpenAlex DOI 10.1016/j.futures.2007.08.021 |
| Unifying weak-signal constructs (Futures 2021) | VERIFIED | OpenAlex DOI 10.1016/j.futures.2021.102837 |
| TForMIX (IEEE Access 2025) LLM tech foresight | VERIFIED | Crossref |
| Strategic Foresight of LLMs (SSRN 2026) | VERIFIED via Crossref; SSRN page bot-blocked | DOI 10.2139/ssrn.6166986 |
| EU Strategic Foresight program page | VERIFIED | commission.europa.eu |
| GOV.UK AI Insights: Agentic AI | VERIFIED | gov.uk (series owner not asserted beyond "AI Insights series"; page metadata lists DCMS) |
| UN Global Pulse (SG's innovation lab) | VERIFIED homepage; program specifics REPORTED | unglobalpulse.org |
| ESA/EMA horizon scanning (Frontiers 2026) | VERIFIED | Crossref DOI 10.3389/fmed.2026.1800213 |
| CCDCOE NATO 2030 horizon-scanning report (2020) | VERIFIED reachable; historical/orienting | PDF HEAD 200 |
| Nextatlas / Futures Platform / Shaping Tomorrow / SOIF pages | VERIFIED pages; performance/AI claims REPORTED or UNVERIFIED | direct fetches |

## Blocked / unverified / rejected items

- Perplexity blog (Cloudflare), OECD OPSI foresight page (Cloudflare), SSRN abstract page (Cloudflare), WEF article canonical URL (news-consent redirect loop) — dropped or marked REPORTED; no fabricated URLs.
- ISO horizon-scanning standards (task hint "ISO 27950/56088"): numbering could not be confirmed in scan; omitted from brief, listed as gap.
- Rejected/noisy: Mojeek/DDG/Ecosia bot walls; Bing RSS generic-term spam; domain-specific horizon-scan papers (conservation/biomedical); marketing pages without substance (aiplusinfo, mobs-bd, academy.plessas); Overwatch YC and Limitless OSINT (no verifiable product pages); Magentic-One (repo unresolvable); nickscamara open-deep-research (superseded).
- arXiv API returned 0 entries for several foresight queries during the scan (endpoint flakiness) — academic coverage relies on OpenAlex/Crossref instead, which is adequate for medium mode.

- **Notes:** Medium-mode horizon scan; every named source carries a direct URL; load-bearing claims are marked per source in the brief; lighter claims (vendor self-descriptions) flagged REPORTED rather than asserted. Pivot recorded: researcher-subagent fanout unavailable → lead-run sweeps, documented in plan ledger and this sidecar.