# Run plan: rc.6 open testing issues — #69 family

**Date**: 2026-08-31 · **Candidate**: `@adjuvant/agent-knowledge-base-toolkit` **0.2.0-rc.6** · **Repo**: this KB repo (dog-food vault, shared machine)

> **Session state:** (filled by the run)
>
> **Tracker anchor:** issue #69 on the toolkit tracker is the parent of all testing issues below. Report evidence per issue. File new findings on the toolkit tracker.

## Source: open testing issues under parent #69

| Issue | What to prove | Where the report goes |
|---|---|---|
| #80 | Unified test runner (#2) works at the rc.6 tag | comment on #80 |
| #81 | Claim-register connectivity (#53) deploy check | comment on #81 |
| #42 | Candidate matrix: identity, load, PDF cold start | comment on #42 |
| #69 | rc.6 capability delta + not-run areas | comment on #69 |

Open sibling bugs #72 and #73 are NOT part of this run. They are defects, not test items.

## Gate (before T1)

- [ ] Settings selectors are rc.6 in `.pi/settings.json` and `.feynman/settings.json`.  (Done 2026-08-31, commit `f6109ad`.)
- [ ] `.pi/npm` resolves `0.2.0-rc.6`. (Done 2026-08-31, verified.) Verify `.feynman/npm` resolves `0.2.0-rc.6`; restart the Feynman runtime so extensions register rc.6.
- [ ] PDF service restarts from the rc.6 package path. Stop the stale pair. Start from `.pi/npm` rc.6 path. `/health` is ok. Venv = base uvicorn only (per #68 runbook).
- [ ] Credentials sane: GitHub Packages token (npm) for installs.
- [ ] **R0 baseline**: record identity and key surfaces JSON into `notes/rc6-baseline-<date>.json`. List `wiki_health`, `list_projects`, `validate_project_notes`, `pdf_extract_capabilities`, and the resolved package version for both harnesses.

## Tasks

### T1 — #80: unified test runner in the rc.6 delivery

Prove the six steps of the #80 test plan at the `v0.2.0-rc.6` tag:

1. Run `npm test` in the toolkit repo at the tag. Expect every test to pass (196 tests).
2. Confirm the nested Zotero files run under the root command. TAP output shows named cases such as `parseTagsFromBibtex parses three tags from the keywords field` and `ingest_paper accepts string 'null' for full_text and annotations`.
3. Confirm no legacy runner remains. No file in `tests/` has manual pass/fail counters or `process.exit`.
4. Confirm checkout hygiene. Run `npx tsx --test tests/zotero-ingest/ingest-paper.test.ts`. No `vault/` directory appears in the checkout.
5. Dev-mode ingest smoke in a disposable sub-instance: `zotero_details_safe` and `ingest_paper` still work with a real `ctx.cwd`.
6. Run `npm run check` with the PDF service venv activated. Biome, Prettier, ruff, shfmt must all pass.

Evidence: TAP output with nested cases, clean git status after the ingest-paper suite, changelog entry "unify legacy test runners (#2)" present at the tag.
Report: comment on #80.

### T2 — #81: claim-register research-brief connectivity deploy check

1. Run `npm test` (or `npx tsx --test tests/directed-wiki-ingest.test.ts`) on the shipped ref `v0.2.0-rc.6`. Expect pass.
2. Live reconcile: reconcile the `agentic-signal-intelligence` thread in this vault. Expect the source row to report five pages and the log line to record the update.

Evidence: test output; live reconcile result with the source row and the `CLAIMS:` log suffix.
Report: comment on #81.

### T3 — #69: rc.6 capability delta

New live surface in rc.6 = wave 5 blocked-source safety. Other waves are regression.

1. **Blocked-source ingest guard** (wave 5): ingest real or `tmp-` content where one Literature entry is blocked (e.g. `Cloudflare-blocked; existence verified via mirrors`) and one is `not-directly-read`. Expect: blocked claims are parked; one warning per parked claim in the ingest log in the exact form `(warning: blocked source parked — <entry-id>: <parked-claim>)`; verified, reported, and unmarked claims still appear; processing continues.
2. **Blocked-source validator report** (wave 5): link one blocked entry deliberately on a page. Expect `validate_wiki_pages` reports it under `blocked_source_links` (compact) and `blocked_source_link_issues` (detail, with page path, link, and verbatim entry). It does NOT appear under `broken_block_links`. The report is non-blocking.
3. **Canonical synthesis body** (wave 3): rebuild a synthesis page. Expect unheaded analysis, then `## Tensions and Contradictions`, then `## Open Questions`, each exactly once, in that order.
4. **Scaffold contract** (wave 1): fresh disposable KB via the `init` command. Expect the seeded tree and the guidance agree with the skeleton (light check; unit-covered otherwise).
5. **Not-run areas** (record, do not attempt): shared test harness — upstream only; Marker/MinerU extractor lifecycle — extractors not installed. Confirm the extractor absence via `pdf_extract_capabilities`.

Report: evidence and any findings; file new findings on the toolkit tracker; comment on #69.

### T4 — #42: candidate matrix (dogfood cycle item)

1. Identity: both harnesses resolve `0.2.0-rc.6`.
2. Load matrix: skill, extension, and agent counts equal the shipped manifest; no duplicate-tool or packaging warnings on startup.
3. PDF service cold start from the rc.6 package path; extract one real document.

The full clean-start harness matrix stays deferred (owner gate, #42).

Report: results; comment on #42.

## Report format

- One verdict per task: PASS, FAIL, or NOT-RUN.
- Evidence path for each verdict.
- Comment posted on each issue above.
- Final `git status` equals the baseline plus run artifacts only.

## Churn policy

- Every task produces real research value or is explicitly disposable.
- Temporary and negative-test artifacts use a `tmp-` prefix and are deleted in the same session. Record the deletion.
- Commit only real content. Run `dry_run` first for tools that mutate shared bookkeeping.