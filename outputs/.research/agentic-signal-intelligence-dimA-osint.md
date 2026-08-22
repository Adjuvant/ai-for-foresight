# Dimension A — Agentic OSINT / automated intelligence gathering (sweep log)

- Date: 2026-08-22
- Mode: medium verification; gathered by lead via curl/BingRSS/HN Algolia/GitHub API (researcher subagents unavailable: missing extension `research-tools.ts`)
- Queries: "agentic OSINT LLM automation", "AI agents OSINT collection", "agentic AI OSINT framework", HN Algolia "OSINT agent", GitHub API `q=OSINT LLM agent`
- Weak/rejected: Bing RSS generic-term noise (agentic-AI explainers, spam football sites); Mojeek/DDG captcha walls; Sweep rejected marketing-language pages with no substance (aiplusinfo, mobs-bd).

## Leads

| Lead | Type | What it does | Verification |
| ---- | ---- | ------------ | ------------ |
| OpenOSINT/OpenOSINT — https://github.com/OpenOSINT/OpenOSINT | Open-source agent | AI-powered OSINT agent: interactive REPL, MCP server, CLI, 19 tools; works with Claude, GPT-4 or local models; "authorized security research only" | VERIFIED (GitHub README via API + page fetch) |
| LookerBot — https://lfgberg.org/2025/04/24/development/LookerBot/ | Practitioner build (Liam Geyer) | AI agents for OSINT collection (social media, news, public records, GitHub) | VERIFIED (page title/desc) |
| Social Links "AI Agents and OSINT" — https://blog.sociallinks.io/ai-agents-and-osint-the-future-of-cyber-operations/ | Practitioner/vendor blog | How AI agents reshape OSINT collection for cyber risk; mesh architecture with agents | VERIFIED (page) |
| Recorded Future AI — https://www.recordedfuture.com/platform/ai | Commercial intelligence platform | AI features on threat-intelligence platform: analyst workload reduction, intel report generation | VERIFIED page; capability claims REPORTED (vendor) |
| Dataminr — https://www.dataminr.com/ + /ai-platform/ | Commercial real-time event/risk AI | Real-time detection from public data; vendor claims 100+ US gov agencies use it | VERIFIED pages; gov-user claim REPORTED (vendor) |
| Dataminr funding/news — https://techcrunch.com/2025/03/19/analytics-company-dataminr-secures-85m-to-fund-growth/ | Press | $85M raise; NATO and OpenAI named customers | VERIFIED (TechCrunch) |
| Perigon — https://perigon.io/ | Commercial news-intelligence API platform | Real-time news intelligence, AI monitoring; positioning for risk/trend tracking via LLM pipelines | VERIFIED (page) |
| GreyNoise — https://www.greynoise.io/ | Commercial sensor/API | Real-time network threat intelligence (active exploitation, compromised IPs) — adjacent "signal layer", not foresight | VERIFIED (page) |
| Overwatch (YC S22) OSINT platform | Startup (Launch HN 2024) | OSINT platform for cyber/fraud risk | REPORTED (HN listing only; no verified product URL — dropped from brief) |
| Limitless OSINT — https://limitless-osint.com/ | Startup (Show HN 2026) | "AI OSINT search and interactive intelligence sandboxes" | UNVERIFIED (fetch returned unrelated content; dropped) |

## Notes
- Boundary: offensive/surveillance operations tooling excluded by task; several OSINT-agent repos self-describe as "authorized research only" — keep as boundary note.
- Pattern: mainstream stack (Claude/GPT + MCP + browser agents) is the default substrate; differentiation is in collection/evaluation layers (MCP servers, structured tool sets, alerting).