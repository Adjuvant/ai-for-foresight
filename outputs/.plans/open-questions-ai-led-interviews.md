# Plan: Open Questions — AI-Led Interviews

- **Slug:** `open-questions-ai-led-interviews`
- **Source brief:** `notes/open-questions-ai-led-interviews.md` (research-brief, dated 2026-08-22)
- **Task type:** Execute deep research on the open questions left by the AI-led-interviews thread.
- **Date:** 2026-08-22 (run start)

---

## 1. Key Questions

The source brief consolidates 8 open questions across 4 threads plus a standing tension. This run
attempts to verify, update, or sharpen each:

**Thread 1 — Validation**
1. Has the Geiecke & Jaravel "Conversations at Scale" paper been published (REStud acceptance claim)?
   Does a published/press version exist that reproduces the LSE Behavioural Lab human-vs-AI numbers?
2. Any independent replication of the AI-voice-beats-human-interviewer result, or of the inter-grader
   reliability yardstick (0.42–0.62)?
3. Do sample-size discrepancies (422 vs 384; 466 vs 462) resolve in a canonical version?
4. Where is the stated boundary of complementarity ("never match the best human experts")?

**Thread 2 — Interviewer-induced bias**
5. Is there any peer-reviewed or new measurement of sycophancy / agreement bias in AI-led *research*
   interviews? Status of the closest anchors (Sharma et al. model sycophancy; Chan et al. witness
   false-memory induction).
6. Evidence on response/ideation homogenization under AI conversational influence (Anderson et al.).

**Thread 3 — Analysis pipeline**
7. Which LLM-RA agreement figure is canonical (86% Feb 2026 vs 84% June 2025)? Does a published
   version reconcile them? What is the human-baseline acceptance standard (RA–RA 0.76)?

**Thread 4 — Governance & consent**
8. Is Vertex AI a viable Google jurisdiction-pinning path for research data processing (not just
   storage)? Current state of Azure / OpenAI EU / Anthropic / Gemini residency options.
9. Does the seed platform's voice transcription still route through OpenAI `whisper-1`; is provider-
   neutral voice feasible today?
10. Consent templating: AAPOR (May 2026), Rutgers HRPP, Samuel & Wassenaar (JERHRE 2025) — what
    wording exists, and any evidence of IRB uptake?

**Standing tension**
11. Where does the synthetic-respondent valid-use boundary sit (Argyle distributional fidelity,
    Bisbee social-desirability failure, Westwood existential threat), and does any new work test
    whether AI interviewers shift that boundary?

## 2. Evidence Needed

- **Web (current-state):** REStud/publication status; provider residency options (Azure, OpenAI EU,
  Anthropic, Gemini/Vertex); whisper-1 transcription behavior in interview platforms; AAPOR consent
  guidance; any news of platform consent templates or IRB guidance.
- **Papers (peer-reviewed):** sycophancy measurement in LLM interviews; false-memory induction in
  conversational AI; response homogenization; synthetic respondents (Argyle, Bisbee, Westwood);
  LLM-assisted qualitative coding agreement; interrater reliability of interview grading.
- **Primary documents:** Geiecke & Jaravel PDFs if reachable via non-PDF routes (abstracts, HTML,
  SSRN/CEPR metadata). PDF full-text parsing is a *last resort*; per workflow, prefer metadata,
  abstracts, HTML, and web snippets, and mark PDF parsing blocked rather than crash-prone parsing.
- **Vault context:** `fnl-aii/Research/Computational Social Science/ai-led-interviews.md` (archived
  brief, 45-entry source list), associated wiki pages.

## 3. Scale Decision

**Multi-faceted research topic → 4 `researcher` subagents** (broad survey, 4 distinct threads +
standing tension). Threads differ in evidence types (papers vs current web), so decomposition clearly
helps and reduces context pressure. One synthesis by lead; verifier + reviewer passes after draft.

| Thread | Agent | Focus | Evidence mix |
|---|---|---|---|
| T1 | researcher A | Validation: publication status, replication, sample figures, boundary | web + paper metadata |
| T2 | researcher B | Interviewer-induced bias: sycophancy, false memory, homogenization | papers (heavy) + web |
| T3 | researcher C | Analysis pipeline: coding-agreement figures, acceptance standard | paper metadata + web |
| T4 | researcher D | Governance: residency pinning, whisper-1, consent templates | web (heavy, current) |

Standing tension (synthetic respondents) folded into T2 brief with explicit instruction.

## 4. Task Ledger

| # | Task | Owner | Status |
|---|---|---|---|
| 1 | Write plan artifact | lead | ✅ done |
| 2 | User approval of plan | user | ✅ approved (“y”) |
| 3 | Write per-researcher briefs T1–T4 | lead | ✅ done |
| 4 | Gather evidence (4 researchers, failFast:false) | researchers A–D | ✅ done — all 4 produced full reports; runs flagged FAILED by subagent runtime (strict child tool allowlist rejected hf_* tools) but reports complete on disk. NOTE: research files written under `.pi-subagents/artifacts/outputs/7ac7893b/...`; copied to `outputs/.drafts/open-questions-ai-led-interviews-research-T{1-4}.md` |
| 5 | Update ledger + verification log | lead | ✅ done (this edit) |
| 6 | Write draft (lead-authored synthesis) | lead | ✅ `outputs/.drafts/open-questions-ai-led-interviews-draft.md` |
| 7 | Cite via verifier subagent | verifier | ✅ `outputs/.drafts/open-questions-ai-led-interviews-cited.md` (verified on disk; copied from artifact dir) |
| 8 | Review cited draft | reviewer | ✅ `outputs/.drafts/open-questions-ai-led-interviews-verification.md` — 0 FATAL, 2 MAJOR + 8 MINOR |
| 9 | Apply FATAL fixes, revise if needed | lead | ✅ MAJOR+MINOR fixed → `outputs/.drafts/open-questions-ai-led-interviews-revised.md`; post-fix rg + citation-integrity checks passed |
| 10 | Deliver final + provenance | lead | ✅ `outputs/open-questions-ai-led-interviews.md` + `.provenance.md` (diff -q final==revised) |

## 5. Verification Log

| Step | Check | Result |
|---|---|---|
| 1 | Plan exists on disk: `outputs/.plans/open-questions-ai-led-interviews.md` | ✅ |
| 2 | Research files exist: `outputs/.drafts/<slug>-research-T{1,2,3,4}.md` (copied from subagent artifact dir; `wc -l` 205/253/264/219) | ✅ |
| 3 | Draft exists: `outputs/.drafts/<slug>-draft.md` | ✅ |
| 4 | Cited exists: `outputs/.drafts/<slug>-cited.md` (on-disk check after verifier) | ✅ copied from `.pi-subagents/artifacts/outputs/20165841/...`; wc -l 340 |
| 5 | Review pass: `outputs/.drafts/<slug>-verification.md` (reviewer) | ✅ reviewer report copied from artifact dir; 0 FATAL / 2 MAJOR / 8 MINOR |
| 6 | Final deliverable on disk + provenance sidecar | ✅ `outputs/<slug>.md` + `.provenance.md` |
| 7 | Post-fix `rg` checks for removed/added claims (if fixes applied) | ✅ 5 old patterns absent, 10 new patterns present; Python citation audit: 116 sources, no gaps, all cited |

## 6. Decision Log

- **2026-08-22:** Scale decision = 4 researcher subagents (multi-faceted, 4 threads). Direct-mode
  would be too shallow for thread 2 (paper-heavy) and thread 4 (current-state web) simultaneously.
- PDF parsing: blocked-by-default per workflow; use metadata/abstract/web snippets; record any
  full-text gaps as `blocked`.
- `memory_remember` not in visible tool set → plan persistence via disk artifact only (blocked:
  memory package not visible).
- Final artifact family: `outputs/open-questions-ai-led-interviews.md` + `.provenance.md`.
- **Post-run note (subagents):** subagent runtime reported FAILED for all 4 researcher tasks with
  “requested unavailable child tools: hf_dataset_info, hf_repo_files, hf_repo_read_file”, yet each
  produced a complete findings report (saved under the artifact dir, copied to canonical path).
  Treated as PASS WITH NOTES: evidence gathered; child-allowlist noise recorded; no evidence lost.
- **Post-run note (alphaXiv):** `alpha_search` (alphaXiv) blocked for subagents (“not logged in”);
  equivalent coverage via Crossref/OpenAlex/arXiv REST APIs; recorded as blocked capability.
- **Post-run note (AAPOR PDF):** AAPOR report full text remains PDF-only; exact consent wording
  corroborated via provider-indexed content; word-level certainty marked as needing a PDF pass.