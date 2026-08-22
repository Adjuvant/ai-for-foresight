# Verification Report: `open-questions-ai-led-interviews-cited.md`

**Task:** Verification pass (adversarial audit) of the cited brief against the four research files
`open-questions-ai-led-interviews-research-T{1,2,3,4}.md`.
**Date:** 2026-08-22 · **Mode:** evidence-integrity audit — no edits made to the cited file.
**Reviewed files:**
- `/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/outputs/.drafts/open-questions-ai-led-interviews-cited.md` (target)
- `/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/outputs/.drafts/open-questions-ai-led-interviews-research-T1.md`
- `/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/outputs/.drafts/open-questions-ai-led-interviews-research-T2.md`
- `/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/outputs/.drafts/open-questions-ai-led-interviews-research-T3.md`
- `/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/outputs/.drafts/open-questions-ai-led-interviews-research-T4.md`

---

## Summary

The cited brief is a merge-and-cite pass over four parallel research threads covering: (T1) publication
status/replication of Geiecke & Jaravel's "Conversations at Scale", (T2) interviewer-induced bias,
homogenization, and the synthetic-respondent boundary, (T3) LLM coding-agreement standards, (T4)
governance/data-residency/consent. Overall, the brief is **citable and largely accurate**: the merged
Sources list is complete and mechanically consistent (116 entries, no gaps), every inline citation
resolves to a Sources entry, every source is cited at least once, and the load-bearing figures I spot-checked
against T1–T4 (0.42/0.62, 86%/84%, 0.655/0.76/0.73/0.83, 384/462/422, 3.93/3.51/2.98/2.42, 3.50/3.53/2.70,
142%/148%, 4.9%, 67%, 72/64, +13 pp/+8 pp, 4.4%, 2,243) match the research files exactly. No fabricated
facts, no unresolved citation numbers, no internal contradictions that invert a research-file finding were
found.

The weaknesses are in **confidence-tag preservation** (two MAJOR instances where single-source or
PDF-blocked/provider-indexed items are asserted as flat fact in body prose, one of which also lost its tag
from the Sources entry) and **citation precision on absence claims** (three MINOR cases where a number is
cited for a claim it does not directly support). No FATAL issues.

---

## Findings

### FATAL

None. There is no unsupported claim of the fabrication type, no broken citation numbering, and no
presentation of a nonexistent source.

### MAJOR

- **[M1] Confidence-tag loss: POQ 2026 sample/topic detail (2,243 US adults; Dec 2024; immigration/tariffs) is `single-source` per the research file but presented as verified fact, and the tag is missing from both the body and the Sources entry.**
  - Research-file evidence: T2 tags the sample/topic detail explicitly as `[single-source — sample/topic detail from publisher page content via search-provider]` and its evidence table marks "sample metrics single-source". Only the abstract was read directly.
  - Brief: Executive Summary bullet 3 states "A new randomized experiment in *Public Opinion Quarterly* (Austin et al. 2026, 2,243 US adults) … [25]" with no tag; §2.1 repeats "randomized experiment, 2,243 US adults (fielded Dec 2024, immigration/tariffs topics)" *before* the "Abstract (read) [25]" / "Publisher-page content (`single-source`) [25]" split, so the figure reads as verified metadata.
  - Sources entry #25 flags only "+13 pp/+8 pp `single-source` publisher-page content" — the sample metrics' single-source status was dropped from the source note too.
  - **Required fix:** tag the sample/topic detail `single-source` inline and in Sources #25, or degrade to "2,243 US adults (publisher-page content, single-source)".

- **[M2] Confidence-tag loss: §4.3 and Executive Summary bullet 7 assert PDF-blocked / provider-indexed institutional content as flat fact; the "every confidence tag… preserved inline" header claim is not accurate for these passages.**
  - Research-file evidence: T4 marks the Wits HREC (Medical) SOP v2 as `blocked — PDF only (provider-indexed)`, and marks the Journal of Singing PDF and Druk Journal PDF as provider-indexed.
  - Brief §4.3: "**Wits HREC (Medical) SOP v2 (July 2026)** requires case-by-case HREC notification for AI transcription (no blanket approval; closed tool required; researcher corrections mandated) [105]." — no inline `blocked — PDF only` / provider-indexed caveat; the tag survives only in Sources #105. Same pattern for JOS [109] and Druk [110] in the "no mainstream journal" inference chain. Exec bullet 7 presents Wits as plain evidence of "IRB uptake is now documented".
  - Mitigating factor: Sources entries 105/109/110 are tagged, and §4.3 does label the journal claim "inference from the checked set". But the Wits requirement details (a procedural standard a researcher would act on) are load-bearing and should carry the caveat inline.
  - **Required fix:** add `blocked — PDF only` / `provider-indexed` markers inline in §4.3 (and, minimally, a note in Exec bullet 7), or soften to "provider-indexed content indicates…".

### MINOR

- **[m3] Wrong citation for an absence claim.** Open Questions item 3: "still no measurement of an LLM interviewer's sycophantic behaviour against ground truth [26]" — [26] is Wuttke et al. (LaTeCH-CLfL 2025), which is the *closest existing measurement* (behavioral guideline-violation coding), not evidence of absence. The absence claim derives from the T2 search record (absent from arXiv/OpenAlex/Crossref searches), not from [26]. Recommend citing the search record / dropping the number, as done for the other absence claims (e.g., "[6]" scoped notes).

- **[m4] Misleading citation on the 466 figure.** §1.4: "**466 (US)** remains unexplained (archive-sourced only) [10, 11, 15, 16]." The four cited sources document **462** (the rival figure) — [10] is the Feb 2026 PDF, [11] the Nov 2024 PDF, [15]/[16] the blogs that give 462. T1 scopes 466 to "archive → June 2025 PDF". As written, the citation implies these sources contain or explain 466. Recommend "466 remains unexplained, single-source (archive → June 2025 POID PDF)" with a pointer to the archive rather than the number list.

- **[m5] Loose citation in "Disagreements and Conflicts" #1.** "real-world LLM contamination prevalence (PNAS audit 4.4% lower bound [48, 50] …)" — the 4.4% keystroke audit is from [50] (Westwood's PNAS reply, verified from PMC full text); [48] is the original PNAS claim (99.8% attention-check pass, 97.7% reverse-shibboleth). Attaching [48] to the 4.4% number conflates the two. Recommend "[50] (audit; original claim in [48])".

- **[m6] Absence-claim citation [53, 54] for the standing-tension core gap.** "no study directly tests whether AI interviewers of real humans shift the valid-use boundary … (absence verified across the T2 OpenAlex/arXiv/Crossref search record; scoped to indexed literature) [53, 54]" — [53]/[54] are the two closest *validation* studies, not the search record on which the absence claim actually rests. The parenthetical scope note is present and correct; the bracketed citation adds nothing and slightly misleads. Recommend citing the T2 search record (or "T2 Q3") as with other absence claims.

- **[m7] Omitted T1-discovered on-point sources, without note.** The verification notes claim "No claims removed", but three T1-discovered sources flagged as relevant to Thread 3 / the standing tension were dropped from the brief entirely: Ashwin, Chhabra & Rao, "Using LLMs for Qualitative Analysis can Introduce Serious Bias", *SMR* 2026 (DOI 10.1177/00491241251338246 — directly relevant to §3.3's critique of LLM coding); "AI Interviews the Interviewers", CUI 2026 (DOI 10.1145/3816046.3816218); and the Means-End-Chain human-vs-LLM Springer chapter (T1 flagged for the T2 standing tension). Absence is not an error per se, but given §3.3 claims to survey the critique literature, the omission of a peer-reviewed SMR paper titled "can Introduce Serious Bias" should be acknowledged or the source added.

- **[m8] Sources #57 tag fidelity.** Brief Sources #57 says "`verified`" for von der Heyde et al. (OSF 10.31235/osf.io/eubj4). T2's marker for the same item is `[verified — ResearchGate/SurvAI hub/OpenReview references; OSF record not directly read]`. The "OSF record not directly read" caveat was dropped. Minor, since the claim is additionally anchored to the COLM 2025 version.

- **[m9] "Single run" characterization of the 0.83 anchor is inherited inference, presented as fact.** §3.3: "directly relevant to the seed's single 0.83 cross-model run [10]". The 0.83 anchor is PDF-blocked this run; the "single run" framing comes from T3 (inherited from the prior vault scan). The `blocked — PDF only` tag is present in §3.1 for the anchors, but §3.3 uses "single run" as established fact. Recommend "the single reported cross-model run (0.83, Feb 2026 PDF)" or keep with an explicit "(as reported per prior vault scan)".

- **[m10] AAPOR "presented 14 May 2026" fact bundled into [99].** §4.3: "presented at AAPOR 81st Annual Conference, 14 May 2026 [99]". T4 sourced the 14 May presentation fact from a separate special-sessions page (#28b), not from the announcement page (#27). The brief merged that fact into the note of #99 ("verified (report released May 2026; presented 14 May 2026 at AAPOR 81st)") without noting the bundling. The fact itself is T4-supported; only the attribution bundling is loose.

---

## Checks performed (specific)

1. **Sources-list completeness:** extracted all `^N. ` entries from the Sources section → exactly 116, numbering 1–116 with no gaps (programmatic; awk).
2. **Inline-citation resolution:** extracted every `[n]`, `[n, m]`, `[n, m, …]` group from the whole file, flattened to individual numbers → max 116; **zero** inline numbers lacking a Sources entry (programmatic; comm).
3. **Every-source-cited-once:** inverse check → **zero** Sources entries never cited inline (comma-aware extraction; the brief's verification-notes claim "every numbered source is cited at least once" is TRUE).
4. **Content-level citation mapping:** walked every body section (§1.1–§1.6, §2.1–§2.2, §3.1–§3.3, §4.1–§4.3, Standing Tension, Disagreements, Open Questions, Next Steps) and mapped each [n] to its Sources entry and to the corresponding T1–T4 passages. All resolve correctly except m3/m4/m5/m6 (above).
5. **Cross-file figure consistency:** for 0.42, 0.62, 0.655, 0.83, 86%, 84%, 384, 462, 422, 3.93, 3.51, 2.98, 2.42, 3.50, 3.53, 2.70, 4.9%, 142% — verified each appears in the brief with the same value and the same source attribution as T1/T3 (grep counts + read-through).
6. **Confidence-tag preservation audit:** for every claim the research files tag `single-source`, `unverified`, or `blocked` (POQ magnitude, POQ sample metrics, Wuttke LaTeCH numbers, G&J lab figures, 0.42/0.62, 86/84 anchors, 466, 422-anchoring, NBER dating, SSRN last-revised, Google PAYGO, Van der Stigchel letter, HSSC party-cue, AAPOR wording, Wits SOP, Samuel & Wassenaar, NORC, JOS/Druk), checked whether the tag appears inline and/or in the Sources entry → M1, M2, m8 violations; the rest preserved.
7. **Absence-claim audit:** "no replication", "no homogenization analysis", "no sycophancy construct measurement", "no direct test of boundary shift" — confirmed each is scoped (checked record / OpenAlex citing set / indexed literature) consistently with T1/T2; m3 and m6 are citation-placement issues, not scope issues.
8. **Omission audit:** grep for T1-discovered URLs/DOIs (Ashwin DOI, CUI DOI 10.1145/3816046.3816218, Means-End-Chain, LSE Festival poster 130055, CentrePiece 695) in the brief → all absent except CentrePiece CEPCP732 [24] → m7.
9. **Header run-count sanity:** T1 has 32 evidence-table rows, T2 "45 numbered sources", T3 38, T4 numbered list ends at 53 → header counts defensible (matching each file's own claim).

---

## Single-source / unverified / blocked critical claims carried by the brief (register — do not delete)

| # | Claim | Status per research file | Tag in brief (inline / Sources) |
|---|-------|--------------------------|--------------------------------|
| S1 | POQ 2026 polarization magnitude +13 pp (immigration), +8 pp (tariffs) | single-source publisher-page content (T2) | tagged ✓ (both) |
| S2 | POQ 2026 sample: 2,243 US adults, Dec 2024, immigration/tariffs | single-source (T2) | **tag dropped** (M1) |
| S3 | Wuttke LaTeCH behavioral numbers: 72/64 violations, 67% judging, 75% guiding, 52.4/32.8 words | single-source + PDF-only (T2) | tagged ✓ (both) |
| S4 | G&J four-modality lab figures (3.93/3.51/2.98/2.42; 3.50/3.53/2.70) | single-source author versions + 2 blogs (T1) | tagged ✓ (both) |
| S5 | Inter-grader 0.42 / 0.62 | single-source (author PDFs; one blog) (T1) | tagged ✓ |
| S6 | 86% / 84% and 0.655/0.76/0.73/0.83 anchors | single-source per version; PDF-blocked this run; prior vault scan (T3) | tagged ✓ |
| S7 | 466 (US) figure | single-source, archive → June 2025 PDF (T1) | tagged ✓ ("archive-sourced only"), citation list wrong (m4) |
| S8 | 422 (French) anchored to Nov 2024 BSE PDF | single-source, blocked (T1) | tagged ✓ |
| S9 | Behavioural Lab section present in 16 Jul 2025 NBER version (dating correction) | single-source, PDF-blocked, search-surfaced (T1) | tagged ✓ |
| S10 | SSRN last-revised: 21 Nov 2024 (index) vs 7 Feb 2026 (unverifiable) | unverified / conflicting (T1) | tagged ✓ |
| S11 | Google PAYGO in-region inference guarantee unresolved | single-source forum (T4) | tagged ✓ |
| S12 | Van der Stigchel PNAS letter | single-source, not directly read (T2) | tagged ✓ |
| S13 | HSSC party-cue α 0.43–0.56 | single-source web, Crossref unavailable (T3) | tagged ✓ |
| S14 | AAPOR Section 6 snippet + consent-item/opt-out + retain/train wording | blocked — PDF only, provider-indexed (T4) | tagged ✓ |
| S15 | Wits HREC SOP v2 requirement details | blocked — PDF only, provider-indexed (T4) | **tag only in Sources, not inline** (M2) |
| S16 | Samuel & Wassenaar JERHRE content | provider-indexed (T4) | tagged ✓ |
| S17 | "even after accounting for expert fixed effects" | search-surfaced PDF text, blocked (T1) | tagged ✓ |
| S18 | NORC lexical-diversity presentation | PDF-only / single-source (T2) | tagged ✓ |
| S19 | Journal of Singing policy (Jul 2026) / Druk transcription exemption | provider-indexed PDFs (T4) | source-tagged only (M2) |
| S20 | NotebookLM podcast artifact on Geiecke's page | single-source author-page link (T1) | benign existence claim; tagged in Sources ✓ |

---

## Inline Annotations

> "A new randomized experiment in *Public Opinion Quarterly* (Austin et al. 2026, 2,243 US adults) finds **AI interviewing polarizes respondents' subsequent closed-ended answers** — the first peer-reviewed measurement of interviewer-induced answer change in AI-led research interviews [25]."
**[M1] MAJOR:** The 2,243-sample metrics are `single-source` per research T2 ("sample metrics single-source", "[single-source — sample/topic detail from publisher page content via search-provider]"), but this headline claim carries no tag. The polarization finding itself is verified (abstract read); the sample/topic detail is not.

> "randomized experiment, 2,243 US adults (fielded Dec 2024, immigration/tariffs topics). Abstract (read) [25]: … Publisher-page content (`single-source`) [25]: answer-change rates rose +13 pp…"
**[M1] MAJOR:** The 2,243/Dec-2024/topics clause sits *outside* the "Abstract (read)" and "Publisher-page content (single-source)" scopes, so it reads as verified metadata. In T2 these details carry the single-source tag. Sources #25 also only flags +13/+8 pp, not the sample metrics.

> "**Wits HREC (Medical) SOP v2 (July 2026)** requires case-by-case HREC notification for AI transcription (no blanket approval; closed tool required; researcher corrections mandated) [105]."
**[M2] MAJOR:** T4 tags this item `blocked — PDF only (provider-indexed)`. The body presents the requirement details as flat fact; the caveat exists only in Sources #105. A researcher acting on "Wits supplies a procedural standard" needs the caveat.

> "Confidence tags (verified / single-source / unverified / blocked) carried through from the research files." (header + verification notes)
**[M2/M1] MAJOR:** Not fully accurate — M1 (POQ sample metrics) and M2 (Wits/JOS/Druk body assertions) show tags not carried through to the body, and in M1 not to Sources either.

> "still no measurement of an LLM interviewer's sycophantic behaviour against ground truth [26]"
**[m3] MINOR:** [26] is Wuttke et al.'s behavioral-coding paper — the closest existing measurement — not support for the absence claim. The absence rests on the T2 search record.

> "**466 (US)** remains unexplained (archive-sourced only) [10, 11, 15, 16]."
**[m4] MINOR:** [10]/[11]/[15]/[16] all document 462 (the rival figure). T1 scopes 466 to the archive → June 2025 POID PDF. The citation list implies these sources explain 466, which is the opposite of the sentence's claim.

> "real-world LLM contamination prevalence (PNAS audit 4.4% lower bound [48, 50] vs 'overstated…' [49])"
**[m5] MINOR:** The 4.4% keystroke audit is [50]; [48] is the original existential-threat claim. Fine as a pointer to both sides of the dispute, but the audit number should cite only [50].

> "**No homogenization analysis of the Geiecke & Jaravel transcripts exists** (absence verified against the 10 OpenAlex-indexed citing works of SSRN 4974382 — scoped to the OpenAlex citation graph) [6]."
**[OK]** Properly scoped; matches T2/T3; the Limitations section restates the scoping. Exemplary absence-claim handling — contrast with m3/m6.

> "Sources #57 … von der Heyde… `verified`"
**[m8] MINOR:** Research T2 adds "OSF record not directly read" (verified via ResearchGate/SurvAI hub/OpenReview references); that caveat was dropped in the merge.

> "directly relevant to the seed's single 0.83 cross-model run [10]"
**[m9] MINOR:** "single run" is inherited from the prior vault scan (T3), not read this run; the 0.83 is `blocked — PDF only`. The §3.1 tag covers the figure; the "single run" characterization should carry the same inheritance note.

---

## Revision Plan (prioritized)

1. **M1:** Restore the single-source tag for the POQ sample metrics — inline (Exec bullet 3, §2.1) and in Sources #25.
2. **M2:** Add inline `blocked — PDF only` / `provider-indexed` markers to the Wits, JOS, and Druk assertions in §4.3 (and a footnote in Exec bullet 7).
3. **m4:** Fix the 466 citation to point at the archive / June 2025 POID PDF rather than [10, 11, 15, 16].
4. **m3, m6:** Re-point absence-claim citations to the search record / T2-Q3 pointer, consistent with the [6] pattern.
5. **m5:** Restrict the 4.4% citation to [50] (keep [48] as the original claim).
6. **m7:** Decide whether to add Ashwin et al. SMR 2026 (+ optionally CUI 2026, Means-End-Chain) to §3.3/Standing Tension; if not, note the omission explicitly.
7. **m8, m9, m10:** Restore the "OSF record not directly read" caveat; qualify "single run"; either cite the AAPOR special-sessions source for the 14 May 2026 fact or soften the note in #99.
8. Re-run the tag-preservation audit (check S2/S15/S19 in the register above go green).

---

## Verdict

Reasonable to publish as a cited research brief after a **revision pass focused on confidence-tag fidelity** (M1, M2). Citation-numbering mechanics and claim-to-source alignment are sound; no fabricated or unsupported factual claims were found; absence claims are appropriately scoped; the single-source register is explicit. Confidence in the core verifications (REStud in-press status, no replication found, POQ polarization finding, Vertex EU pinning, whisper-1 leak, AAPOR/Rutgers/Wits consent evidence) is high. Residual risk concentrates in the PDF-blocked and provider-indexed items (as the brief itself discloses at length) and in the tag drops above.

---

## Sources (additionally inspected during this review)

- `outputs/.drafts/open-questions-ai-led-interviews-cited.md` (target, read in full)
- `outputs/.drafts/open-questions-ai-led-interviews-research-T1.md` (read in full)
- `outputs/.drafts/open-questions-ai-led-interviews-research-T2.md` (read in full)
- `outputs/.drafts/open-questions-ai-led-interviews-research-T3.md` (read in full)
- `outputs/.drafts/open-questions-ai-led-interviews-research-T4.md` (read in full)
- Programmatic audits: inline-citation/Sources resolution, source-coverage, figure-consistency greps (commands documented under "Checks performed")

No external URLs were fetched during this verification pass (file-to-file cross-check only).