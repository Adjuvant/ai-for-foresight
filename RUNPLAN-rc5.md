# Run plan: rc.5 research-pipeline test

**Date**: 2026-08-29 · **Scope**: `@adjuvant/agent-knowledge-base-toolkit` **0.2.0-rc.5** · **Repo**: this KB repo (dog-food vault, shared machine)

> **Session state (2026-08-29):** R0 ✅ · R1 ✅ · R2 ✅ (Gate A ✅) · R3 ✅ (+R3b wiki ingest) · R4 ✅ · R5 ❌ (found live #66-class regression → #73, reverted clean) · R6 ✅ · R7 ✅ · R8 ✅ · **R9 ✅ — run plan complete (Gate C ✅)**. Remaining uncommitted (user's call): RUNPLAN-rc5.md, kohler/pink Raw notes, notes/rc5-baseline JSON, _meta/changelog.md (kohler/pink entries). Open repo items filed this run: #72 (ingest_paper), #73 (wiki_fix frontmatter-only dead-link removal), #74 (frames-vs-sources connector scan); evidence comments on #52 (thin pages) and #53 (claim register dead for research-briefs).

## Why research tasks, not fixtures

The rc.3 experiment (`experiments/toolkit-0.2.0-rc3-live-test.md`) proved the *mechanics* with synthetic `lc-` fixtures: slug repair, report snapshots, point-of-use validation, archiver/Literature format, project bookkeeping, PDF service. rc.5 changes the game in three ways — the fixes must hold on **real content**, the removed workflow-skill surface must be gone **from the shipped package**, and the pipelines this vault actually runs daily (Zotero → Raw → Wiki, literesearch → archiver, project maintenance) should be pushed end-to-end.

## rc.5 delta under test

| Change | Source | Covered by |
|---|---|---|
| `wiki_fix` dead-related removal actually removes; no false reports | #66 | R5 |
| Section reader reads past `###` subsections; no false `unlisted_notes` | #67 | R4 |
| stop.sh kills reload pair; forward-update runbook; base uvicorn | #68 | R7 (already verified once; re-prove under load) |
| dev-chain / epic / gh-plan / wave skills + gh-plan extension removed | #70 | R6 |

## Prerequisites (gate before R1)

- [ ] Runtime reloaded so extensions register **rc.5** (`.pi` + `.feynman` node_modules verified `0.2.0-rc.5`; settings selectors rc.5)
- [ ] PDF service running from `.pi/npm` rc.5 path; `/health` ok; venv = base uvicorn only
- [ ] Credentials sane: BBT JSON-RPC reachable (zotero), GitHub Packages token (npm)
- [ ] **R0 baseline**: `wiki_health` (all), `list_projects`, `validate_project_notes`, `pdf_extract_capabilities`, `npm view` rc.5 — record JSON into `notes/rc5-baseline-<date>.json`

## Churn policy (retires the `lc-` pattern)

- Every task must produce **real research value** (real Raw/Literature/Research/Project content) or be explicitly disposable.
- Temporary/negative-test artifacts use a `tmp-` prefix and are deleted **in the same session**; record deletion in the verification log.
- No `lc-` style fixtures. No fake DOIs. No throwaway concept pages.
- Commit only real content. Final `git status` must equal baseline + intended task artifacts.
- Instrument carefully: any tool that mutates shared bookkeeping (indexes, logs, registers) runs `dry_run` first.

## Tasks

### R1 — Real Zotero → Raw ingest chain
- **Objective**: ingest 3 unread items (start with citekey `watsonMovingLinearityAcademicpolicymaking2024`; pick 2 more from the Futures collection) through the real pipeline.
- **Surfaces**: `zotero_get_tags`, `zotero_details_safe` (BBT fallback), `ingest_paper` (`full_text_path`/`full_text_source`, OCR flag), `zotero_mark_ingested`, real PDF extraction via pdf-extract service.
- **Steps**: tags → details (+PDF path) → extract full text (fallback chain) → write `fnl-aii/Raw/<citekey>.md` → mark `/unread` → `ingested:obsidian`.
- **Acceptance**: Raw note exists with verbatim full text + frontmatter (`full_text_source`, `full_text_via_ocr` if used); domain tags only (no `/unread`, no admin tags); mark-ingested applied (or gracefully skipped with note if BBT offline); no temp files left.
- **Artifacts**: `fnl-aii/Raw/<citekey>.md` ×3 (real, committable).

### R2 — Real point-of-use wiki ingest (ADR 0001 pipeline)
- **Objective**: from R1's Watson note, update the concept(s) it truly supports (`foresight-evaluation`, `policy-foresight`) with **≥1 new Key Claim per page**, each attributed via point-of-use block link to the Literature note (verbatim bullets + `^<citekey>-<n>` block ids) — per the vault-wiki-ingest skill.
- **Surfaces**: `vault-wiki-ingest` (incl. Key Claims rule + log/`CLAIMS:` suffix), `finalize_wiki_ingest`, `validate_wiki_pages` (`broken_block_links`, `numbered_citations_unattributed`), Literature note generation.
- **Acceptance**: touched concepts have new attributed claims; `validate_wiki_pages` shows **0** broken block links and **0** unattributed numbered citations for touched pages; Literature note bullets carry unique block ids; claim-register check runs.
- **Artifacts**: updated concept pages + Literature note (real).

### R3 — literesearch scan → archiver round-trip
- **Objective**: answer a real open question from the vault (e.g. from `open-questions-ai-led-interviews.md`): *"What verified 2024–2026 evidence exists on AI-conducted interviews shaping responses vs human interviewers?"*
- **Surfaces**: `configure_research_models` (run R8 first), `literesearch` agent (bounded, 6–8 sources), `archive_research` (4-tier resolution, `write_literature`, `set_plan_topic_path`, `move_outputs`), topic-registry guard (positive + one `tmp-` negative).
- **Acceptance**: brief lands in `outputs/` → archived under a registered topic; Literature note generated with block ids; plan gets `topic_path`; unregistered `topic_path` rejected with zero writes; sources traceable.
- **Artifacts**: real Research brief + Literature note; `tmp-` negative fixture deleted.

### R4 — Real project with subsection bookkeeping (#67 live regression)
- **Objective**: build a real project ("futures-evaluation benchmark audit") exercising the fixed section reader.
- **Surfaces**: `create_project`, `create_project_note` (methodology / memo / design-rationale with real `frames` + prose; one output with real origin URL), `update_project_bookkeeping` with `###` subsections, `scan_project`, `validate_project_notes`, `scan_project_connections`.
- **Acceptance**: notes under subsections are **not** flagged `unlisted_notes`; one intentional output **without** origin is flagged `missing_origin` (check still fires); upserts replace in place, prose preserved; `list_projects` shows correct `note_count`/`output_count`.
- **Artifacts**: real project notes (committable); the no-origin output is deliberate and documented.

### R5 — Live dead-link repair (#66 live regression)
- **Objective**: induce a *real* dead related link (rename a real concept page that another page lists in `related`), then repair via the fixed `wiki_fix`.
- **Surfaces**: `check_dead_links`, `wiki_fix` (dry-run then apply), file-level verification.
- **Steps**: rename one concept (e.g. `policy-foresight.md` → archived/titled variant) or delete a page intentionally → related link in a peer page goes dead → `check_dead_links` lists it → `wiki_fix` apply → **read the file**: dead line gone, body untouched, `updated:` bumped, no false report.
- **Acceptance**: removal verified at file level (not just tool report); `check_dead_links` → 0; rename decision reversible via git.
- **Artifacts**: one real rename/repair, logged.

### R6 — rc.5 delta payload & docs
- **Objective**: prove the shipped package matches the rc.5 change set.
- **Surfaces**: `npm pack --dry-run --json`, package `files` allowlist, skill/extension manifests.
- **Steps**: pack rc.5; assert removed skills absent (`dev-chain`, `epic-*`, `gh-plan`, `wave-*`, gh-plan extension); grep docs — only CHANGELOG references remain (history, acceptable); verify `CHANGELOG.md` + `docs/support/` ship; version parity across `.pi`/`.feynman`.
- **Acceptance**: programmatic zero-violation diff (reuse the T7 method from the rc.3 experiment).
- **Artifacts**: none (report only).

### R7 — PDF service robustness under real load (#68)
- **Objective**: prove the hardened lifecycle + base uvicorn under realistic extraction load.
- **Surfaces**: `pdf_extract` (poppler → liteparse → docling fallback), `scripts/stop.sh`/`start.sh`, health/capabilities, venv.
- **Steps**: extract 2–3 real Zotero PDFs (record extractor, quality score, duration); mid-run stop/start cycle; assert no zombies (`pgrep` after stop), port frees and rebinds; re-extract after restart; venv check (no uvloop/httptools/websockets).
- **Acceptance**: all extractions return text with documented fallback path; restart cycle clean; base uvicorn confirmed.
- **Artifacts**: none (log only).

### R8 — Subagent model config surface
- **Objective**: prove `configure_research_models` validation + merge semantics before using it in R3.
- **Surfaces**: `configure_research_models` (valid/invalid model, user vs project scope, unrelated-field preservation).
- **Acceptance**: valid model accepted; invalid model rejected with clear error; `settings.json` diff touches only intended fields; restore prior values after test.
- **Artifacts**: settings diff (restored), no churn.

### R9 — Consistency gate under real state
- **Objective**: close C3/C4 claims with the vault in a realistic, post-task state.
- **Surfaces**: `wiki_health`, `scan_wiki_graph`, `validate_wiki_pages`, `check_dead_links`, `sync_wiki_index`, `scan_project`, `scan_project_connections`, `detect_project_promotions`, `list_projects`, `validate_project_notes`.
- **Acceptance**: counts agree across reports; second run identical (deterministic); deltas vs R0 baseline are exactly the intended task artifacts; no dead links introduced.
- **Artifacts**: comparison recorded in the verification log.

## Sequence & gates

```
R0 baseline → R6 (payload, no vault writes) → R1 (ingest) → R2 (wiki ingest + verify)
→ R8 (models) → R3 (literesearch + archiver) → R4 (project) → R5 (repair) → R9 gate
R7 (service) can run any time (parallel-friendly)
```

- Gate A (after R2): `validate_wiki_pages` clean for touched pages; log `CLAIMS:` present.
- Gate B (after R5): file-level diff proves removal; `check_dead_links` = 0.
- Gate C (final): R9 agreement + determinism; `git status` == baseline + intended artifacts; all `tmp-*` deleted.

## Verification log

| # | Task | Result | Evidence (path / command output) |
|---|------|--------|----------------------------------|
| R0 | baseline capture | ✅ captured | `notes/rc5-baseline-2026-08-29.json` (wiki_health: 20 pages/61 links/0 dead_related; projects: 0; validate_project_notes: all-zero; pdf service ok, extractors liteparse/poppler/pdfplumber/docling; `.pi`+`.feynman` = 0.2.0-rc.5; npm registry dist-tags lookup unverified) |
| R1 | Zotero ingest ×3 | ✅ done (safe-fallback level; no annotations; `/unread` not present → mark_ingested no-op) | `fnl-aii/Raw/kohlerStrategicForesightKnowledge2021.md` (221KB, pdfplumber q0.78, 51pp) · `fnl-aii/Raw/pinkDesignAnthropologicalForesighting2023.md` (59KB, liteparse q0.81) · `fnl-aii/Raw/candyTurningForesightOut2025.md` (62KB, liteparse q0.79); ingest logged in `fnl-aii/_meta/changelog.md`; note: `ingest_paper` validator requires `full_text` property — path-only call rejected; workaround `full_text:"null"` + `full_text_path` loads file (verified body contains real text); candy item Zotero year=2025 vs actual JFS 2019-03 |
| R2 | point-of-use ingest + verify | ✅ done (source: candyTurningForesightOut2025; raw-paper wikilink attribution, no Literature note — research-brief rule N/A) | created `Wiki/Concepts/experiential-futures.md` (4 attributed claims); updated `Wiki/Concepts/policy-foresight.md` (+1 claim appended, 6 preserved, related += experiential-futures); `foresight-evaluation` intentionally skipped (no genuine claim from this source); authors first-appearance → no entity pages; Raw note tagged `ingested`; log + indexes updated; `validate_wiki_pages(concept)`: broken_block_links 0, unattributed_claims 0, our pages clean (5 pre-existing numbered_citations_unattributed elsewhere = documented 2026-08-22 pattern); `check_dead_links(concept)`: 0 |
| Gate A | validate clean + CLAIMS suffix | ✅ | See R2 evidence; claim-register check ran via `finalize_wiki_ingest` (0 changes — no second-appearance claims, source on <3 pages) |
| R3 | literesearch + archiver | ✅ full round-trip incl. negative guard | scan: `literesearch` agent (run 6a9e5a18, ~31 min, deepseek-v4-flash) → `outputs/science-fiction-military-planning.md` (8 numbered sources, domain map, medium mode, provenance sidecar PASS WITH NOTES; honest flags: JFS bot-blocked, RAND RR-A198-4 no SF content, IARPA FUSE no fiction mention, no verified doctrine/procurement impact study); plan ledger + verification log updated by agent; archive: positive `topic_path=Research/AI Systems & Deployment` → `fnl-aii/Research/.../science-fiction-military-planning.md` (references field + 8-entry `## Sources`), `fnl-aii/Literature/science-fiction-military-planning.md` (8 entries, unique `^science-fiction-military-planning-N` block ids), plan `topic_path` set, outputs moved to `archived/`; negative: `tmp-sf-negative` + `topic_path=Research/Science Fiction & Strategy` → rejected "Topic path is not approved by topic-paths.json", zero writes verified (no dir/literature/plan/move), fixture deleted same-session |
| R3b | wiki ingest of R3 brief (science-fiction-military-planning) | ✅ Gate A pass; **claim-register bug confirmed → commented on #53** | created `Wiki/Concepts/science-fiction-planning.md` (4 claims, point-of-use links); updated `policy-foresight` (+1) + `foresight-evaluation` (+1); no synthesis (tag overlap <3); no entities (first appearance); `validate_wiki_pages`: broken_block_links 0, unattributed_claims 0 (touched pages clean); dead links 0; log/index updated; FINDING: `write_wiki_page` drops attribution when claim text contains wikilinks (`core/wiki-page-builder.ts:169`), so register reconciliation can't match research-brief claims → measured 3 citing pages, register row not added; same for foresight/agentic threads (5 pages each, no rows) — matches OPEN issue #53 exactly (root cause + all 3 threads unrecorded); comment with evidence posted (issuecomment-5464779801); no duplicate filed |
| R4 | project subsections | ✅ #67 live regression passed; upsert verified; no-origin output flagged | created project `Projects/futures-evaluation-benchmark-audit/` (domain foresight-evaluation, phase→2 via upsert); _index Scope/RQs/Phases prose filled + ### subsections added (Methodology & Design, Memos / Source Documents, Working Drafts); 3 notes (methodology `evaluation-design-audit`, design-rationale `benchmark-design-rationale`, memo `sf-impact-evidence-gap-memo` — real frames + prose, dependency-test wikilinks) + 2 outputs (`hiltunen-huhtinen-2024-audit` w/ real origin DOI, `audit-checklist-draft` w/ NO origin — deliberate); upsert test: summaries replaced in place, single rows, subsections + prose preserved (file-level verified); `validate_project_notes`: **unlisted_notes 0** (subsection-listed notes not flagged — #67 fix ✓), **missing_origin 1 → audit-checklist-draft** (check still fires ✓), empty_frames 0; `list_projects`: note_count 3, output_count 2 ✓; scan_project: 5 files, 2 outputs, wiki_sources:[] for all notes (observation: scanner reads `sources`/`related`, not `frames` — frames wikilinks reported as `body_wikilink_not_in_sources` by scan_project_connections; minor surface gap, not an acceptance failure) |
| R5 | dead-link repair | ❌ **acceptance FAILED — live #66-class regression found in rc.5; reverted clean** | induced real dead link (`git mv` experiential-futures → tmp-ef-renamed); check_dead_links detected 2 dead related (policy-foresight, science-fiction-planning); `wiki_fix` dry-run+apply reported removals — but file-level read showed dead bullets STILL in body `## Related` sections (policy-foresight:45, science-fiction-planning:37); frontmatter clean (removal left blank-line artifacts); root cause: wiki-fix handler removes **frontmatter only by contract** ("never the page body") while `check_dead_links` scans frontmatter only → false 0; **#66 fix incomplete for wiki-page shape** (frontmatter+body Related mirror); filed as issue **#73** (bug); revert: git mv back + byte-exact restore from /tmp/r5-snap (diff-verified identical, status back to baseline, check_dead_links 0); no vault residue |
| R6 | payload delta | ✅ zero violations (rc.3 T7 method reused) | `npm pack --dry-run --json`: 83 files, version 0.2.0-rc.5; 14-entry allowlist → 0 missing/0 extras (npm-mandatory package.json exempt); removed skills absent from payload + skills/ dir (dev-chain, epic-*, gh-plan, wave-*, gh-plan extension); CHANGELOG.md + docs/support/ (install/migrate/update) ship; doc grep: removed names only in CHANGELOG (historical, incl. #70 entry); version parity .pi/.feynman = 0.2.0-rc.5; script `/tmp/rc5-payload-check.mjs` exit 0 |
| R7 | pdf service | ✅ hardened lifecycle + base uvicorn re-proven under real load | load: watsonMovingLinearityAcademicpolicymaking2024 (Policy Briefing 150, 2pp) q=0.67/168ms + ruttingDisruptiveSeedsScenario2023 (Sustainability Science 18:1117-33, 17pp) q=0.80/1529ms, both via fallback chain liteparse→poppler→pdfplumber; stop: stop.sh killed reload pair (83805 shell + 83807 main + 83818 child), port freed, health down, no zombies (first pgrep hit was a self-match false positive — [s] trick confirmed clean); restart: health ok, capabilities restored, port rebound (94297/94308); venv = uvicorn 0.52.4 only, NO uvloop/httptools/websockets (base uvicorn ✓); re-extraction post-restart identical (watson 0.67/166ms, rutting 0.80/1396ms) — deterministic, no degradation; note: service runs with --reload by design (watchfiles pair rebuilt each start), which is orthogonal to base-uvicorn extras; artifacts none (log only) |
| R8 | model config | ✅ validation + merge semantics proven; restored (no churn) | valid project-scope (`researcher=opencode-go/deepseek-v4-pro:high`) → diff touched exactly 1 line, packages + other overrides intact; invalid (`gpt-4`) → clear rejection, no write; user-scope (`literesearch=inherit`) → merged into pre-existing `~/.feynman/agent/settings.json` (all 12 top-level keys preserved; note: user settings live at `agent/settings.json`, not `~/.feynman/settings.json` — earlier probe paths wrong); `~/.pi/` + `.pi/settings.json` untouched; restored: project file byte-identical to snapshot, user file = original minus added override (no pre-image existed → semantic field-level restore, caveated); model IDs must be exact provider/model (see user enabledModels); commit `ad5af6c` (user's, R2 artifacts) landed during the test window — verified scope, no interference |
| R9 | consistency gate | ✅ passed (determinism + agreement + intended deltas) | battery #1 ≡ battery #2 on all 5 re-run surfaces (22 pages/68 links; dead 0; sync identical; list_projects identical); cross-report agreement: wiki_health/scan_wiki_graph/validate/sync all 22 pages, projects 1 (3 notes/2 outputs) consistent across list_projects/scan_project/validate_project_notes; deltas vs R0: pages 20→22 (+2 new concepts: experiential-futures, science-fiction-planning), links 61→68 (+7 new related edges), projects 0→1, stubs 14→16 (+2 thin new pages — consistent with #52), no new violations; dead links 0 both via tool AND R5-informed file-level body \#\# Related sweep; flaggables all pre-existing/documented: sync `_index` router artifacts (3-count dup), 6 numbered_citations_unattributed (2026-08-22 pattern), 25 tenuous tag-overlap edges; git status == baseline + intended artifacts (RUNPLAN, kohler/pink, baseline JSON, changelog entries); no tmp-* residue; detect_project_promotions: 1 new_concept + 4 extend_existing candidates (reported only, not acted on — gate) |
| Gate C | final state + determinism + no tmp-* | ✅ | See R9 row; second battery identical; all `tmp-*` fixtures deleted (recorded per task); git status verified |

## Out of scope

- C9 shared extension test harness — upstream `npm test` only (not shipped).
- C10 Marker/MinerU lifecycle — extractors not installed; re-enter when `marker-pdf`/`mineru` are added to the service env.
- Batch PDF extraction, multi-user service auth, cache policies — tracked under wayfinder issues (#55–#65), not tested here.