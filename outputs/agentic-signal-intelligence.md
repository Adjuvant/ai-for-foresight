---
type: research-brief
slug: agentic-signal-intelligence
status: verified
scan_mode: literesearch
seed: free-topic — "AI based automated intelligence gathering systems, foresight and futures signal gathering. Explore conventional adaptations of existing agentic systems specialised for policy and weak signals analysis."
intent: explore-domain
verification_mode: medium
focus: mixed — domain map + concrete adapted systems
date: 2026-08-22
tags:
  - agentic-ai
  - osint
  - foresight
  - horizon-scanning
  - weak-signals
  - policy-intelligence
---

# Agentic Signal Intelligence: How Conventional AI Agents Are Being Adapted for Intelligence Gathering, Foresight and Weak-Signal Analysis

## Scan Setup

- **Seed:** free-text topic on AI-based automated intelligence gathering, foresight/futures signal gathering, and conventional adaptations of agentic systems for policy and weak-signals analysis.
- **Intent:** explore-domain (lead-rich landscape + concrete adapted systems)
- **Verification mode:** medium — load-bearing claims checked against primary/secondary sources; leads marked `[VERIFIED]` / `[REPORTED]` / `[UNVERIFIED]`.
- **Constraints:** 2023–2026 window (seminal theory older where it orients the field); global; public-sector/intelligence-community adaptations only as openly discussed; offensive-surveillance detail excluded.
- **Method note:** the builtin `researcher` subagents were unavailable (missing `research-tools.ts` extension), so all five dimension sweeps were run directly by the lead via search-RSS, GitHub API, OpenAlex/Crossref, and direct page fetches; per-dimension logs persist under `outputs/.research/`.

## Quick Synthesis

The seed's "conventional adaptations" framing is accurate: as of mid-2026, almost nothing in this space is bespoke. The dominant pattern is **off-the-shelf agentic stacks repurposed with specialized tool layers** — Claude/GPT-class models, MCP servers, browser agents and Deep-Research-class agents as the collection/synthesis core, with domain specialization added via curated toolsets (OSINT skill packs, news-intelligence APIs, signal taxonomies) rather than custom AI [8][29][30][13]. Open-source agentic OSINT builds (e.g., OpenOSINT, LookerBot) and venture-backed OSINT platforms (Dataminr, Perigon) sit on this same substrate; the commercial incumbents pair LLM features with decade-old collection/sensor infrastructure [1][2][7][11].

Foresight/futures automation is the least mature layer. Purpose-built "LLM horizon scanning" products with verified capability are rare; what exists is split between practitioner method writing (MIT SMR, SOIF) [9][14], vendor-promoted trend-signal platforms (Nextatlas, Futures Platform, Shaping Tomorrow) whose AI claims remain largely promotional [10][12][13], and a very thin 2025–2026 academic slice (LLM+multidimensional tech foresight; a prospective venture-tournament test of LLM strategic foresight) [18][19]. Institutional practice is ahead of tooling: the EU, UK, EMA and UN all run documented horizon-scanning/foresight programs, but public documentation of *agentic* AI inside them is rare — the UK's GOV.UK "AI Insights" series is the strongest openly-documented example of government scanning AI developments with institutional rigor [20][21][22].

On weak signals specifically, the theory lineage (Ansoff 1975; Hiltunen's "future sign"; the 2021 Futures construct-review) still anchors the field, while LLM-era adaptation research is exploratory and mostly benchmark/pilot scale rather than deployed systems [15][16][17][19].

## Landscape by Dimension

### 1. Agentic OSINT / automated intelligence gathering
- **Open-source agents:** OpenOSINT (AI-powered OSINT agent with REPL, MCP server, CLI; 19 tools; Claude/GPT-4/local models; "authorized security research only") [1]; LookerBot, a personal-build example of AI agents for OSINT collection [2]; Social Links' engineering blog frames the agentic-OSINT pattern for cyber risk [3].
- **Commercial:** Dataminr (real-time event/threat detection from public data; vendor claims 100+ US government agencies as users; NATO and OpenAI reported as customers) [5][6][11]; Recorded Future's AI layer on its threat-intel platform [4]; Perigon's real-time news-intelligence API as an LLM-pipeline feed [7]. GreyNoise is an adjacent "sensor" layer (real-time exploitation/network signals), not a foresight tool [8].
- **Boundary note:** agentic-OSINT repos are explicitly "authorized research" tooling; offensive-surveillance operations are out of scope here.

### 2. Horizon scanning & foresight automation
- **Practice:** MIT SMR's "Four Keys to Effective Horizon Scanning" is the canonical recent practitioner method text [9]; SOIF is the main signals-literate foresight NGO/academy [14].
- **Commercial tools:** Nextatlas markets "foresight your AI can't give you" (early-adopter panel, claims ~30-month-early trend spotting) [10]; Futures Platform (trends/scenarios toolbox) [12]; Shaping Tomorrow (long-running scanning service, "decision-grade strategic intelligence") [13]. All vendor performance claims `[REPORTED]`.
- **Institutional:** EMA's medicines horizon-scanning program (2026 Frontiers paper) is a model of institutional regulatory scanning practice [11].

### 3. Weak-signal & trend detection methods
- **Lineage:** Ansoff 1975 ("Managing Strategic Surprise by Response to Weak Signals", California Management Review) [15]; Hiltunen's "future sign and its three dimensions" (Futures) [16]; the 2021 Futures review unifying weak-signal constructs [17].
- **LLM adaptations (early, academic):** TForMIX (LLM + multidimensional modeling for technological foresight, IEEE Access 2025) [18]; "The Strategic Foresight of LLMs" (2026 SSRN working paper, prospective venture tournament) [19]. Both are pilots/benchmarks, not deployed systems.

### 4. Policy foresight & public-sector adaptation
- **Documented programs:** EU Commission Strategic Foresight (scanning feeding strategic planning and annual Foresight Reports) [20]; GOV.UK "AI Insights" series (explainers scanning AI developments; Agentic AI volume) [21]; UN Global Pulse (innovation lab; early-warning/foresight-adjacent AI) [22]; NATO-adjacent CCDCOE horizon-scanning methodology (2020 report — historical/orienting example in an alliance context) [23].
- **Adoption channel:** commercial real-time-intelligence platforms are the de facto way public sector gets "agentic-adjacent" capability via procurement (Dataminr's government user base [5]); direct evidence of in-house agentic foresight stacks in government is thin and largely unpublished.

### 5. Mainstream agentic frameworks & Deep-Research-class tools
- **Products:** OpenAI Deep Research [24] and Operator (browser agent) [25]; Google Gemini Deep Research [26]; Anthropic's multi-agent research system build-notes [27]; Perplexity Deep Research [28].
- **Open research agents:** Stanford STORM [29], gpt-researcher [30], langchain-ai/open_deep_research [31], Alibaba-NLP/DeepResearch (Tongyi) [32].
- **Frameworks/substrate:** browser-use [33], CrewAI [34], AutoGen [35], LangGraph [36], smolagents [37], Manus (general "action engine") [38].

## Key Patterns in "Conventional Adaptations"

1. **Model + MCP + browser as commodity substrate.** Differentiation concentrates in tool/skill layers (OSINT skill packs, MCP servers, evaluation pipelines), not model or architecture [1][3][13-dimE].
2. **Deep-Research-class agents are the default "intelligence gatherer."** OpenAI/Google/Perplexity deep research and their open clones (STORM, gpt-researcher, open_deep_research) now serve as the collection-and-synthesis layer that foresight/policy pilots wrap with source feeds and taxonomies [24][26][29][30][31][32].
3. **Commercial incumbents absorb agentic features rather than being replaced.** Recorded Future, Dataminr, Perigon, GreyNoise pair new LLM/agent features with existing collection infrastructure — the "Gartner-marketplace" pathway into intelligence-community-adjacent use [4][5][7][8].
4. **Governments document foresight programs, not agentic internals.** Public records show scanning and foresight institutionalization (EU, UK, EMA, UN), while agentic automation inside them appears in passing (UK AI Insights series) or not at all [20][21][22].
5. **Weak-signal LLM research is belated and thin.** 2025–2026 papers benchmark LLM foresight capability (venture tournaments, technological-foresight hybrids) but no verified deployed "LLM weak-signal detector" product surfaced [18][19].

## Gaps & Open Questions

- **No verified dedicated "LLM weak-signal detection" product** or government agentic-foresight deployment with public documentation was found; both would be high-value follow-ups. Reported-but-unverified proliferate; vendor claims dominate (Nextatlas, Shaping Tomorrow, Recorded Future AI).
- **ISO horizon-scanning standards** (task hint "ISO 27950/56088") could not be verified during the scan (no authoritative confirmation of numbering); dropped pending a standards-library lookup.
- **Evaluation is missing everywhere:** only the SSRN venture tournament [19] and, indirectly, STORM-class quality work approach measuring whether agentic scanning beats manual scanning.
- **Boundary:** GCHQ-adjacent press items (air-gapped LLMs for intelligence analysts) are reported, not verified, and out of scope as operational detail.

## Follow-up Routes

1. **Interviews/vendor docs:** request capability data from Nextatlas, FutureLabs-style tooling, Recorded Future AI and Dataminr for agentic collection workflows; watch for EU JRC and UK GO-Science/DSIT publications on AI-assisted scanning.
2. **arXiv/SSRN track:** "weak signal detection", "LLM early warning", "scenario generation LLM" (2025–2026); follow citation graph of the SSRN foresight-tournament paper [19].
3. **Open-source fork-watch:** OpenOSINT's MCP-tool ecosystem, langchain open_deep_research plugins, browser-use deployments — the "conventional adaptation" frontier is visible in GitHub activity.
4. **Government leads:** EU Strategic Foresight Report cycle (annual) [20]; GOV.UK AI Insights series (new volumes) [21]; UN Global Pulse early-warning portfolios [22]; EMA horizon scanning outputs [11].
5. **Standards:** verify ISO horizon-scanning/futures standards via ISO's online browsing platform (blocked during scan) — candidate numbering 27950/56088 unconfirmed.

## Sources

1. OpenOSINT/OpenOSINT (AI-powered OSINT agent; GitHub README) — https://github.com/OpenOSINT/OpenOSINT `[VERIFIED]`
2. L. Geyer, "LookerBot: AI Agents for OSINT Collection" — https://lfgberg.org/2025/04/24/development/LookerBot/ `[VERIFIED]`
3. Social Links Blog, "AI Agents and OSINT: the Future of Cyber Operations" — https://blog.sociallinks.io/ai-agents-and-osint-the-future-of-cyber-operations/ `[VERIFIED]`
4. Recorded Future, AI platform page — https://www.recordedfuture.com/platform/ai `[VERIFIED page; capability claims REPORTED]`
5. Dataminr, AI Platform page — https://www.dataminr.com/ai-platform/ `[VERIFIED page; gov-user count REPORTED]`
6. TechCrunch, "Analytics company Dataminr secures $85M to fund growth" — https://techcrunch.com/2025/03/19/analytics-company-dataminr-secures-85m-to-fund-growth/ `[VERIFIED]`
7. Perigon, AI news-intelligence platform — https://perigon.io/ `[VERIFIED]`
8. GreyNoise, real-time network threat intelligence — https://www.greynoise.io/ `[VERIFIED]`
9. S. D. Anthony, "Four Keys to Effective Horizon Scanning", MIT Sloan Management Review — https://sloanreview.mit.edu/article/four-keys-to-effective-horizon-scanning/ `[VERIFIED]`
10. Nextatlas — https://www.nextatlas.com/ `[VERIFIED page; performance claims REPORTED]`
11. "Horizon scanning at EMA: preparing for the medicines of the future", Frontiers in Medicine (2026) — https://doi.org/10.3389/fmed.2026.1800213 `[VERIFIED via Crossref]`
12. Futures Platform — https://www.futuresplatform.com/ `[VERIFIED page; AI features UNVERIFIED]`
13. Shaping Tomorrow — https://www.shapingtomorrow.com/ `[VERIFIED page; AI-agent usage UNVERIFIED]`
14. School of International Futures (SOIF) — https://www.soif.org.uk/ `[VERIFIED]`
15. H. I. Ansoff, "Managing Strategic Surprise by Response to Weak Signals", California Management Review (1975) — https://doi.org/10.2307/41164635 `[VERIFIED via Crossref]`
16. E. Hiltunen, "The future sign and its three dimensions", Futures — https://doi.org/10.1016/j.futures.2007.08.021 `[VERIFIED via OpenAlex; online 2007, vol. 2008]`
17. "Unifying weak signals definitions to improve construct understanding", Futures (2021) — https://doi.org/10.1016/j.futures.2021.102837 `[VERIFIED via OpenAlex]`
18. "TForMIX: A Method That Combines LLM and Multidimensional Modeling for Technological Foresight", IEEE Access (2025) — https://doi.org/10.1109/access.2025.3605116 `[VERIFIED via Crossref]`
19. "The Strategic Foresight of LLMs: Evidence from a Fully Prospective Venture Tournament", SSRN (2026) — https://doi.org/10.2139/ssrn.6166986 `[VERIFIED via Crossref; SSRN page bot-blocked]`
20. European Commission, Strategic Foresight — https://commission.europa.eu/strategy-and-policy/strategic-planning/strategic-foresight_en `[VERIFIED]`
21. GOV.UK, "AI Insights: Agentic AI" — https://www.gov.uk/government/publications/ai-insights/ai-insights-agentic-ai-html `[VERIFIED]`
22. UN Global Pulse — https://www.unglobalpulse.org/ `[VERIFIED homepage; program claims REPORTED]`
23. CCDCOE, "Cyber Threats and NATO 2030: Horizon Scanning and Analysis" (2020) — https://ccdcoe.org/uploads/2020/12/Cyber-Threats-and-NATO-2030_Horizon-Scanning-and-Analysis.pdf `[VERIFIED reachable; historical/orienting]`
24. OpenAI, "Introducing deep research" — https://openai.com/index/introducing-deep-research/ `[VERIFIED via rendered page]`
25. OpenAI, "Introducing Operator" — https://openai.com/index/introducing-operator/ `[VERIFIED via rendered page]`
26. Google, "Gemini: Try Deep Research and Gemini 2.0 Flash Experimental" — https://blog.google/products/gemini/google-gemini-deep-research/ `[VERIFIED]`
27. Anthropic, "How we built our multi-agent research system" — https://www.anthropic.com/engineering/multi-agent-research-system `[VERIFIED]`
28. Perplexity, "Introducing Perplexity Deep Research" — https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research `[URL resolves; content REPORTED — bot-checked]`
29. Stanford STORM — https://github.com/stanford-oval/storm `[VERIFIED]`
30. gpt-researcher — https://github.com/assafelovic/gpt-researcher `[VERIFIED]`
31. langchain-ai/open_deep_research — https://github.com/langchain-ai/open_deep_research `[VERIFIED]`
32. Alibaba-NLP/DeepResearch — https://github.com/Alibaba-NLP/DeepResearch `[VERIFIED]`
33. browser-use — https://github.com/browser-use/browser-use `[VERIFIED]`
34. CrewAI — https://github.com/crewAIInc/crewAI `[VERIFIED]`
35. Microsoft AutoGen — https://github.com/microsoft/autogen `[VERIFIED]`
36. LangGraph — https://github.com/langchain-ai/langgraph `[VERIFIED]`
37. Hugging Face smolagents — https://github.com/huggingface/smolagents `[VERIFIED]`
38. Manus — https://manus.im/ `[VERIFIED]`