# Provenance: Science fiction in military and defence planning

- **Date:** 2026-08-29
- **Seed:** free-text topic (no vault file)
- **Intent:** explore-domain
- **Verification mode:** medium
- **Rounds:** 1 (three parallel delegate subagents, disjoint dimensions) + 1 lead verification pass + vault sweep
- **Sources consulted:** ~30 (live pages, archived Wayback snapshots, Crossref/OpenAlex/Semantic Scholar records)
- **Sources accepted:** 8
- **Verification:** PASS WITH NOTES
- **Plan:** outputs/.plans/science-fiction-military-planning.md
- **Research files:**
  - outputs/.research/science-fiction-military-planning-d1-d2.md
  - outputs/.research/science-fiction-military-planning-d3-d4.md
  - outputs/.research/science-fiction-military-planning-d5-d6.md

- **Notes:** Lightweight horizon scan; references included for follow-up, not exhaustive verification.

**Retrieval notes.** Most live pages fetched 2026-08-29 with HTTP 200; bot-blocked hosts (wiley.com, journals.sagepub.com, sciencedirect.com, CAIRN, rand.org, dni.gov, iarpa.gov, act.nato.int) were verified via Crossref/OpenAlex metadata or Wayback Machine snapshots — each such case is flagged inline in the brief or research files. Search engines (DuckDuckGo, Bing, Mojeek) were largely captcha-blocked; evidence relied on APIs, direct fetches, and Wayback CDX.

**Known limitations / notes.**
- The vault's `candyTurningForesightOut2025` item appears misdated — verified publication is Candy & Kornet (2019), *Journal of Futures Studies* 23(3); no 2025 re-issue found. Flagged in the brief; left out of numbered sources.
- User-configured `researcher` subagent unavailable in this environment (tool-allowlist references unregistered `hf_*` tools); parallel web work ran on builtin `delegate` subagents instead — same fallback as the earlier `agentic-signal-intelligence` scan.
- Claims intentionally left unverified / not asserted: named "Ghost Fleet" military exercise, Naval War College wargame use, Dstl or NATO design-fiction programs, RAND fictional-futures games, "RADAR" successor program (France), Caroline Besse critique (not found in searches).
- No peer-reviewed evidence located that any SF program changed doctrine or procurement — flagged as the domain's evidence gap.