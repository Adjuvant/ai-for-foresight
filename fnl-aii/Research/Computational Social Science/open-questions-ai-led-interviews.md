---
type: research-brief
slug: open-questions-ai-led-interviews
topic_path: Research/Computational Social Science
date: 2026-08-22
status: verified
sources_consulted: 150
sources_accepted: 116
verification: PASS WITH NOTES
rounds: 1
tags:
  - run
  - date
  - status
  - previous-provenance
  - research-files
  - citation-method
  - dating-correction
  - gemini-enterprise-agent-platform
  - the-whisper-1-voice-leak-persists
  - item-and-task-dependent
  - ingested
plan: ../outputs/.plans/open-questions-ai-led-interviews.md
archived_at: 2026-08-22T01:48:47.570Z
updated_at: 2026-08-22T01:48:47.570Z
---

# AI-Led Interviews: Open Questions — Deep-Research Update (revised, cited)

**Run:** deep-research verification of `notes/open-questions-ai-led-interviews.md`
**Date:** 2026-08-22 · **Status:** revised after verification — final candidate · **Previous provenance:** single-thread, medium-verification (inherited)
**Research files:** `outputs/.drafts/open-questions-ai-led-interviews-research-T{1,2,3,4}.md` (run counts: T1 32 evidence items, T2 45, T3 38, T4 53 — merged into the numbered Sources below)
**Citation method:** inline numbers [1]–[116] map to the Sources section; every confidence tag from the research files (verified / single-source / unverified / blocked — Cloudflare / blocked — PDF only) is preserved inline. No PDFs were fetched; PDF-only items keep their `blocked` tags.

---

## Executive Summary

This run re-verified the eight consolidated open questions from the AI-led-interviews brief against fresh web and literature evidence (4 parallel research threads, 130+ sources checked, no PDF full-text parsing; PDF-only claims marked `blocked`). Headline changes since the Feb 2026 snapshot:

1. **Publication status upgraded but still unreadable.** *Conversations at Scale* is now institutionally corroborated as **in press at the Review of Economic Studies** (LSE Research Online record 140596, deposited 13 Aug 2026) [1] — no longer single-source author-reporting [2, 3, 4]. But no journal page, DOI, or accepted full text exists [5, 6, 8], so **the LSE Behavioural Lab numbers and the 86%-vs-84% coding figure still cannot be verified at the published-version level** [1, 7].
2. **Dating correction.** The LSE Behavioural Lab human-vs-AI comparison entered the paper in the **16 Jul 2025 NBER Summer Institute version** [9], not (only) the Feb 2026 author PDF [10]. Still single-source (author versions + two commercial blogs) [9, 10, 15, 16]; **no independent replication exists anywhere in the checked record** [5, 6].
3. **Interviewer-induced bias: the biggest update.** The archive's "no peer-reviewed measurement" claim survives only in its narrow reading. A new randomized experiment in *Public Opinion Quarterly* (Austin et al. 2026; 2,243 US adults — sample/topic detail `single-source`, publisher-page content) finds **AI interviewing polarizes respondents' subsequent closed-ended answers** — the first peer-reviewed measurement of interviewer-induced answer change in AI-led research interviews [25]. Separately, behavioural coding (Wuttke et al., LaTeCH-CLfL 2025) shows AI interviewers commit 67% of "judging the respondent" anti-bias guideline violations in small-N interviews [26].
4. **Homogenization is now measured in survey open-ends** (Zhang, Xu & Alvero, SMR 2025: 34% of participants report LLM use; LLM text more homogeneous and more positive) [38], but **no homogenization analysis of the Geiecke & Jaravel transcripts exists** [6].
5. **Vertex AI residency claim verified with caveats.** Google's jurisdiction-pinned path now exists under the renamed **Gemini Enterprise Agent Platform**: EU multi-region and locational endpoints pin ML processing to the EU [80, 81]; the Gemini *API* remains unpinnable [85]. Open: whether pay-as-you-go (vs provisioned throughput) guarantees regional processing [84].
6. **The whisper-1 voice leak persists.** The seed platform's repo (last push 9 Feb 2026) [97] still hardwires voice transcription to the OpenAI API in both apps even when `API = "azure" | "anthropic" | "google"` [93, 94]. Provider-neutral voice is feasible (Azure STT/EU `gpt-4o-transcribe` [89], Google Chirp 3 via EU endpoint [81], self-hosted Whisper, OpenAI EU endpoint [86, 87, 88]) but not implemented.
7. **Consent templating: AAPOR report confirmed to exist; IRB uptake is now documented.** AAPOR's May 2026 report is verified (PDF text blocked) [98, 99]; new institutional consent language exists (University of Kentucky [103], McMaster [104], Wits HREC SOP v2 [105] — details PDF-only, provider-indexed —, Rutgers living guide [102]); no mainstream journal yet requires *participant-facing* AI-consent clauses [108, 109, 110].
8. **Standing tension unchanged at its core.** Bisbee is now published (Political Analysis 2024) [47], Westwood's PNAS 2025 existential-threat claim [48] has a live rebuttal thread (Rothschild et al. OSF 2026 [49]; Westwood PNAS reply 2026 with a 4.4% contamination lower-bound estimate [50]), and 2025–26 validation studies keep the synthetic-respondent boundary **item- and task-dependent** [53, 54, 55, 56, 57]. **No study directly tests whether AI interviewers of real humans shift that boundary** — the recommended next experiment [25, 46, 59].

Verification posture: every claim below carries a source URL or a research-file pointer; items that could only be checked via search-engine-included PDF text or metadata are flagged `single-source`, `unverified`, or `blocked — PDF only`.

---

## Thread 1 — Validation

### 1.1 Publication status: accepted, in press, not yet readable

The archive's "Accepted at REStud 2026 [single-source]" is now **institutionally corroborated**:

- LSE Research Online record 140596 lists the paper as *Review of Economic Studies*, [In Press], publisher OUP, ISSN 0034-6527, accepted 2026, deposited 13 Aug 2026, refereed TRUE, **no full text deposited** [1] (https://researchonline.lse.ac.uk/id/eprint/140596/).
- Author pages agree: Xavier Jaravel ("Accepted Review of Economic Studies, 2026") [2] and Friedrich Geiecke ("Accepted, Review of Economic Studies") [3] (https://www.xavierjaravel.com/papers; https://sites.google.com/view/friedrichgeiecke/research).
- An independent academic blog (adventures-in-ai-and-democracy.ghost.io, ~Mar 2026) says "forthcoming in the Review of Economic Studies" [4].
- **No journal-hosted page or DOI exists**: Crossref returns only SSRN DOI 10.2139/ssrn.4974382 [5]; OpenAlex W4403417545 shows only the SSRN location [6]; RePEc/IDEAS shows only the CEPR working-paper record DP19705 [13]; the OUP advance-articles page is Cloudflare-gated [8]. OpenAlex also indexes the LSE deposit as W7203563320 (version `acceptedVersion`) [7].

**Consequence:** the accepted-version full text is inaccessible (`full_text_status: none`) [1], so whether the published version reproduces the Behavioural Lab tables or the 86%/84% coding figures **cannot be verified today**. [T1 Q1; T3 Q1] [1, 8]

### 1.2 Replication of the LSE Behavioural Lab result: none found; dating corrected

- **Correction to the archive:** the four-modality comparison (panel A: AI voice 3.93 > human FTF 3.51 > AI text 2.98 > human online text 2.42; panel B: human FTF 3.53 ≈ AI voice 3.50 > AI text 2.70) is present in the **16 Jul 2025 NBER Summer Institute version** [9] (https://conference.nber.org/conf_papers/f221279.pdf) as well as the Feb 2026 author PDF [10] (https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf). The lab study entered between POID WP120 (5 Jun 2025) [14] and the NBER version. `blocked — PDF only` for full read; text surfaced via search-included content.
- **No independent replication, reproduction by another team, or peer-reviewed comment on the comparison was found** (searches incl. replication/critique/IngentaConnect; OpenAlex shows 10 citing works, none a replication) [5, 6]. Two commercial blogs reproduce the tables (thevoiceofuser.com [15]; qualz.ai [16]).
- Adjacent independent evidence — *not* replications: Wuttke et al. 2026 (arXiv 2606.20064; 571-respondent sample; "one mode is not clearly better", completion differed by condition) [20]; Jack, Cooper & Flower, *Methodological Innovations* 2026 (peer-reviewed; 74 social scientists; rapport/interpretation costs) [21]; Cuevas et al., PACM HCI 2025 (richness critique) [22]; InterviewBot (arXiv 2608.10412, Aug 2026; probe-light voice interviewer) [23]. [T1 Q2]

### 1.3 Reliability of the yardstick (inter-grader 0.42 / 0.62)

Unchanged in author versions [10]; the only external discussion found is one commercial-blog critique ("The aggregate patterns are real. The decimal points are not." — thevoiceofuser.com) [15]. The paper partially addresses grader heterogeneity internally ("even after accounting for expert fixed effects", search-surfaced PDF text), but this is `blocked — PDF only` [10]. No academic response or later-version revision found. [T1 Q3]

### 1.4 Sample discrepancies: partially resolved

- **Current-version figures (Feb 2026/in-press narrative): 384 French-election; 462 US meaning-in-life** — corroborated by two independent secondary sources (qualz.ai [16]; thevoiceofuser.com [15]).
- **422 (French)** is anchored to the **Nov 2024** version ("we ran 422 interviews with French voters", BSE-hosted PDF [11], https://events.bse.eu/live/files/5703-geieckejaravel2024pdf).
- **466 (US)** remains unexplained — single-source, archive → June 2025 POID PDF (note: [10, 11, 15, 16] report the rival figure 462, not 466).
- Also noted: word-count figure 142% (CEP in-brief on the paper [24]) vs 148% (current blogs [15, 16]) — unflagged in the archive, unreconciled.
- No canonical text exists to reconcile these (in-press version inaccessible) [1, 8]. **Recommendation: cite 384/462 as current, flag 422/466 as working-paper-version numbers.** [T1 Q4]

### 1.5 Boundary of complementarity

The caveat "the AI-led interviews never match the best human experts" is alive in the paper [10] (`blocked — PDF only` for full read) and quoted in journalism: EdSurge (22 Nov 2024) quotes it directly [17]. Scope statements are stable: Jaravel to Times Higher Education (Nov 2024): getting closer to qualitative interviewing "is not the primary goal" [18]; LSE Impact blog (Oct 2024) positions the method for "large-scale, rigorous interviews" [19]. A new author artifact exists: a NotebookLM podcast summary linked from Geiecke's homepage [3]. No fresh post-Feb-2026 author interview found. [T1 Q5]

### 1.6 SSRN parity: likely stale, still gated

SSRN remains Cloudflare-blocked (HTTP 403 challenge) [12]. The search-indexed snapshot shows the **old** posting (title "…with a Simple Open-Source Platform", last revised 21 Nov 2024, old abstract) [12] — conflicting with one unverifiable claim of "last revised 7 Feb 2026". Weight of evidence: not updated. `unverified` pending a human-browser check. [T1 Q6]

---

## Thread 2 — Interviewer-Induced Bias

### 2.1 Sycophancy / agreement bias: from "unmeasured" to "first measurements exist"

The archive said: no peer-reviewed measurement of sycophancy / interviewer-induced agreement bias in AI-led research interviews. **Narrow reading still true — no study measures LLM-interviewer sycophancy as a construct against ground truth in a research interview. Broad reading is now false:**

- **Austin, Hohe, Kennedy, Litman, Minozzi & Moses, "An Experimental Comparison of AI-Enabled Semi-Structured Interviews and Fixed Surveys", *Public Opinion Quarterly*, 2026-08-17 (DOI 10.1093/poq/nfag063)** [25] — randomized experiment, 2,243 US adults, fielded Dec 2024, immigration/tariffs topics (`single-source` — publisher-page content) [25]. Abstract (read) [25]: AI interviewing increases the volume and specificity of articulated rationales with minuscule satisfaction decline and no rolloff increase — **but AI interviews "appear to shape subsequent responses": respondents exhibit greater polarization in follow-up items after AI probing**. Publisher-page content (`single-source`) [25]: answer-change rates rose +13 pp (immigration) and +8 pp (tariffs) vs a no-follow-up control, moving toward more extreme positions. The paper's own framing: AI interviewing "may alter the cognitive architecture of opinion formation". This is interviewer-induced measurement bias measured in a randomized design in the field's flagship survey-methodology journal. Unreplicated. [T2 Q1]
- **Wuttke et al., "AI Conversational Interviewing", LaTeCH-CLfL 2025 (DOI 10.18653/v1/2025.latechclfl-1.17)** [26] — small-N behavioural coding (6 human-led, 5 AI-led interviews) of adherence to anti-bias interview guidelines (`blocked — PDF only`, single-source): ~72 guideline violations per AI interview vs ~64 per human; **67% of "interviewer judges the respondent" violations committed by the AI** (e.g., "Your definition of politics is quite insightful"); 75% of "guiding/suggestions" violations by humans; AI turns averaged 52.4 vs 32.8 words. Relevance ratings of elicited responses not substantially different. First peer-reviewed behavioural evidence that AI interviewers emit biased interviewer behaviour in research settings despite instructions. [T2 Q1]
- **Anchor statuses updated:** Sharma et al. (arXiv 2310.13548) [27] is now **published, ICLR 2024 poster** [28]; Chan et al. (arXiv 2408.04681, false-memory induction in witness interviews) [29] **remains a preprint** (peer-reviewed adjacent work exists: Pataranutaporn et al., CHI 2025, DOI 10.1145/3706598.3713697 [30]). [T2 Q1]
- **Mechanism evidence 2025–26 (why an adaptive interviewer could shape answers):** Jain et al. (arXiv 2509.12517) [31] — interaction context increases agreement sycophancy (up to +45% for Gemini 2.5 Pro with memory profiles); Kim & Khashabi (Findings EMNLP 2025) [32] — conversational follow-up framing raises endorsement of user counterarguments; Hong et al. SYCON (Findings EMNLP 2025) [33] — multi-turn conformity benchmark across 17 LLMs; Cheng et al., *Science* 2026 (DOI 10.1126/science.aec8352) [34] — AI affirms ~49% more than humans, and one sycophantic interaction reduces responsibility-taking (N=2,405, preregistered); Braun (Findings EMNLP 2025) [35] — LLMs show a *no-saying* acquiescence bias; **counterweight**: Conlon & Schwardmann (CEPR DP21505) [36] — AI advice *depolarizes* despite measurable sycophancy (advice domain, N=1,500) — the depolarization weakens but is not reversed as sycophancy rises. A review (arXiv 2512.00656) [37] notes no measurement of sycophancy includes human perception of it. [T2 Q1]

**Bottom line:** the single most consequential open question from the brief is now *partially* answered: answer-shaping in AI-led research interviews is real and measurable (POQ 2026) [25], but its magnitude, moderation (topic, model, interaction context), and relation to sycophancy-as-construct are unreplicated and unmapped. The POQ result is the study to watch for replications.

### 2.2 Response homogenization

- **Anchor confirmed:** Anderson, Shah & Kreminski, "Homogenization Effects of LLMs on Human Creative Ideation", Creativity & Cognition 2024 (DOI 10.1145/3635636.3656204) [42].
- **Homogenization is now measured in open-ended survey data, peer-reviewed:** Zhang, Xu & Alvero, "Generative AI Meets Open-Ended Survey Responses", *Sociological Methods & Research* 54(3):1197–1242, 2025 (DOI 10.1177/00491241251327130) [38] — 34% of online participants report LLM use on open-ends; LLM text **more homogeneous and more positive**, especially for sensitive items about social groups; "may mask important underlying social variation". Supporting: Boelaert et al., "Machine Bias", SMR 2025 (DOI 10.1177/00491241251330582) [39] — topic-random bias, low variance; NORC AAPOR 2024 (lexical diversity; `PDF only`) [40]; Yu et al., IJCNLP-AACL 2025 (DOI 10.18653/v1/2025.ijcnlp-short.22) [41] — fixed viewpoints, single-perspective claims; AI Suggestions Homogenize Writing, CHI 2025 (DOI 10.1145/3706598.3713564) [43]. [T2 Q2]
- **No homogenization analysis of the Geiecke & Jaravel transcripts exists** (absence verified against the 10 OpenAlex-indexed citing works of SSRN 4974382 — scoped to the OpenAlex citation graph) [6]. [T2 Q2]

**Bottom line:** the risk that AI-led interviewing narrows response diversity is now directly measurable with published methods (SMR 2025) [38], but the application to G&J transcripts is undone — a cheap, high-value validation study.

---

## Thread 3 — Analysis-Pipeline Consistency

### 3.1 Canonical coding-agreement figure: unresolved

- **86% (LLM-RA ≈ 86% of RA-RA human-human consistency; LLM-RA corr 0.655 vs RA-RA 0.76; GPT-5 vs RAs 0.73; Claude 3.5 Sonnet vs GPT-4o cross-model 0.83)** — Feb 2026 author version (latest accessible full text) [10]. `blocked — PDF only` this run; inherited from the prior vault scan (single-source per version). [T3 Q1]
- **84% ("close to (84% of)")** — June 2025 POID WP120 [14]. `blocked — PDF only` [10, 14]. [T3 Q1]
- REStud in-press accepted text not deposited anywhere [1]; **no published-version reconciliation possible today**. 86% remains the number in the latest accessible version. [T3 Q1]

### 3.2 Acceptance standard: the field has no universal cutoff

Verified landscape (thresholds literature + 2025–26 comparisons):

- No single accepted cutoff exists; a 2026 scoping review reports LLM–human agreement ranging **36–99%** across studies and cautions against treating 80% as a validated standard (BMC Medical Research Methodology, DOI 10.1186/s12874-026-02913-1) [69]; training-oriented resources such as J-PAL's llm-quali-coding materials contain no agreement benchmarks or acceptance thresholds at all [79].
- Dominant working bars: **(a) match-the-human-baseline** (Discover Education 2026: GPT-4o reached human-level ICC [66]; PLOS Digital Health 2026: LLM 93.5% vs human 92.7% agreement, κ=0.34 both, Gwet's AC1 0.92–0.93, only ChatGPT-5 reached formal non-inferiority [61]); **(b) "substantial" chance-corrected agreement κ/α ≥ 0.6–0.8** (Landis & Koch 1977 [60]; a psychosocial-autopsy study reports accuracy 0.84, κ=0.68 substantial [65]; a nine-model comparison posts external-consistency κ 0.78–0.79 vs 0.74 manual [64]; Krippendorff's α ≥ 0.800 reliable / 0.667–0.800 tentative [68]); **(c) percent agreement ≥ 80–90%** (Neuendorf-style [62]; theme-level alignment 90.9–100% in an agentic-coding study [67]).
- The seed's "X% of human-human" ratio framing is **rare** — only one new study uses the same baseline-ratio logic (Discover Education's "slightly below human-human") [66]. The seed's RA-RA baseline of 0.76 sits mid-"substantial" and matches human baselines reported elsewhere (α 0.76–0.93) [66]. [T3 Q2]

### 3.3 Critiques of the yardstick: agreement-with-humans is not quality

- **"Agreement Is Not Quality" (arXiv 2607.28890, Jul 2026)** [72] — the most on-point critique: human-LLM Jaccard 0.30 vs human-human 0.52, yet a source-blind expert verifier showed **no preference** between human and LLM coding (51.5% vs 48.5%, p=0.537); for several codes human consensus encoded "shared conservative bias" the verifier rejected. Conclusion: human-agreement measures fail in both directions; remedy = blind expert verification alongside agreement metrics.
- **Alt-test (ACL 2025, DOI 10.18653/v1/2025.acl-long.782)** [70] — human-bounded IAA metrics can only say whether an LLM matches humans; no decision criteria; proposes comparing LLM against ≥3 human annotators with an "average advantage probability".
- **Parfenova et al. (NAACL Findings 2025)** [71] — the human yardstick is partly self-referential (humans rate human labels more favorably even when LLMs are closer to true labels).
- **Multi-run instability:** arXiv 2508.14764 [63] and arXiv 2605.07422 [74] show single-run agreement reporting is methodologically insufficient (run-to-run κ spans 0.363–0.468 can flip Fair/Moderate) — directly relevant to the seed's single reported 0.83 cross-model run (Feb 2026 PDF, `blocked — PDF only`; per prior vault scan) [10].
- **Cross-model stability now has a literature:** model-model agreement ≥ human-human is a repeated finding (argumentation, *SEM 2025 [77]; SE annotation, MSR 2025 [78]; multi-LLM thematic analysis, arXiv 2512.20352 [73]: intra-model κ 0.842–0.907, cross-model overlap 60–70%; nine-model dyads reaching Jaccard 1.00 on all sub-themes [64]) **with a consistent caveat**: model-model agreement is consistency, not correctness (models can agree *and be wrong the same way* — arXiv 2605.07422 shared label-bias [74]; Brown et al. arXiv 2503.23243 [75]: item difficulty, not model identity, drives LLM-human agreement). A party-cue experiment (HSSC 2025, nature.com/articles/s41599-025-05834-4) [76] found low human-LLM agreement on political statements (α 0.43–0.56) with cue-conditioned divergence — directly relevant to the seed's political vote-reason coding. [T3 Q3, Q4]

**Bottom line:** the 86%-vs-84% tension stays unresolved until the REStud text appears [1, 8, 10, 14]; arguably the bigger issue is the yardstick itself — the field now has published critiques and alternatives (blind-expert verification [72], alt-test [70], Gwet's AC1 + non-inferiority [61], multi-run reporting [63, 74]) that should be applied to the G&J pipeline.

---

## Thread 4 — Governance & Consent

### 4.1 Provider matrix refresh (as of 2026-08-22) and the Vertex AI verdict

**Q5 of the brief (is Vertex AI a viable Google pinning path): now VERIFIED with caveats.**

- The pinnable Google path now runs under the renamed **Gemini Enterprise Agent Platform (formerly Generative AI on Vertex AI / Vertex AI Platform)**. Official docs (read this run) [80, 81]: **ML processing location is endpoint-determined** — jurisdictional multi-region endpoints (EU hostname `aiplatform.eu.rep.googleapis.com`) keep ML processing within the EU; locational endpoints (e.g., `europe-west1`) keep processing within the region's jurisdiction (per-model variation for EU in-country vs EU-wide); **global endpoints provide no residency guarantee** (docs tell customers not to use global endpoints when ML-processing requirements exist) [81]. Data at rest stays in the customer-selected location regardless of endpoint [80]. CMEK available but US/EU multi-region only (global excluded) [82, 83]. Per-model tables include Gemini 3.x Flash and transcription models **Chirp 2 / Chirp 3: Transcription** on EU endpoints [81].
- **Caveats:** (a) Google's EU multi-region table includes `europe-west2` (London) — a UK/EU nuance [81]; (b) a Google dev-forum thread reports **pay-as-you-go vs provisioned-throughput inference-location guarantees are unresolved in official docs** (`single-source`, unresolved) [84]; (c) the **Gemini API (AI Studio/developer API) remains unpinnable** ("may be stored transiently or cached in any country") [85].
- **Other providers:** Azure/Microsoft Foundry remains the strongest option (Global / Data Zone US-EU-APAC / Regional deployments [89, 90]; APAC Data Zone from 2026-09-01 [89]; EU Data Zone = Azure EU Data Boundary incl. EFTA [91]; no-training/no-retention commitments documented [90]; `gpt-4o-transcribe` now in EU regions [89]); OpenAI EU remains approval-gated (EEA+CH storage *and* processing via `eu.api.openai.com` [87, 88]; priced 10% uplift for residency-eligible models [86, 87]; `/v1/audio/transcriptions` now shows abuse-monitoring retention "None", ZDR-eligible [86]); Anthropic remains US-only (richer geo controls — `inference_geo`, workspace defaults — but `inference_geo` supported only on Claude 4.6+ models) [92]. [T4 Q1, Q2]

### 4.2 The whisper-1 voice leak: persists

- Repo `friedrichgeiecke/interviews` last pushed **2026-02-09** (GitHub API) [97]. `config.py` still sets `MODEL_TRANSCRIPTION = "whisper-1"` with the unchanged comment that voice transcription always uses the OpenAI API [93]. `interview.py` (main platform): when `"voice" in INPUT_MODE`, a separate OpenAI client is created and `client_audio.audio.transcriptions.create(...)` runs **regardless of the configured provider** — "silently routes through OpenAI even when `API = "azure" | "anthropic" | "google"`" [94]. `full_voice_interview.py` is OpenAI-only end-to-end (raises ValueError for any other API; closing TTS via `gpt-4o-mini-tts`) [95]. README consent-flagging requirement unchanged; licence split code = PolyForm Noncommercial 1.0.0, docs = CC BY-NC 4.0 [96].
- **Provider-neutral voice is feasible but unimplemented:** Azure AI Speech / Azure OpenAI `gpt-4o-transcribe` (EU regions) [89], Google Chirp 3 via the EU endpoint [81], self-hosted open-weight Whisper, or the approval-gated OpenAI EU endpoint (which now supports `/v1/audio/transcriptions` with EU processing) [86, 87, 88]. Jurisdiction-pinned studies still must restrict to text input or replace the transcription call. [T4 Q3]

### 4.3 Consent templating and IRB uptake

- **AAPOR Task Force, *Responsible AI Integration in Survey Research* (May 2026):** existence and date verified (announcement + Reports page [99]; presented at AAPOR 81st Annual Conference, 14 May 2026 [99]). Full text is `blocked — PDF only` [98]; provider-indexed snippet confirms Section 6 "Responsibility to Human Subjects" ("Disclosure, consent, data protection, risk assessment, and fairness must explicitly account for AI-enabled inference…") [98]. The archive's two specific claims — a **distinct, clearly labelled consent item with opt-out where feasible** for AI-assisted interviewing/external data retention, and the warning about third-party platforms that **"may retain or further train on personal data"** — are corroborated by provider-indexed content but **not primary-read** (`blocked — PDF only; corroborated by provider-indexed content — high confidence`) [98]. Adjacent AAPOR instruments verified: TI Attachment C (June 2026) requires disclosure of AI-assisted interviewing in reporting [100]; the 2026 Code of Ethics states AI-generated responses are not research participants [101].
- **Rutgers HRPP AI Consent Guide:** current (Jan 2026, living document, HRPP Toolkit; PRIM&R CE session delivered) [102].
- **Samuel & Wassenaar (JERHRE 2025, DOI 10.1177/15562646241296712):** verified (provider-indexed page content) [106] — explicit consent for AI transcription, jargon-free clause, right to decline/withdraw AI transcription, human verification, manual alternatives.
- **IRB uptake — new evidence:** University of Kentucky IRB office ships a "Sample Informed Consent Language for AI" menu including an **AI-Transcription clause** and a **Third-Party Cloud clause** ("Your data may be stored, retained, and used for training by {software}") [103]; McMaster REB publishes example AI-transcription consent language naming the service [104]; **Wits HREC (Medical) SOP v2 (July 2026)** (`blocked — PDF only`, provider-indexed content) requires case-by-case HREC notification for AI transcription (no blanket approval; closed tool required; researcher corrections mandated) [105]. SACHRP/OHRP 2022 remains the federal anchor [107].
- **No mainstream journal found requiring *participant-facing* AI-consent language** (inference from the checked set: author-side disclosure norms vary — Dialogica mandates an AI Use Disclosure (page read) [108]; Journal of Singing requires disclosure when material (provider-indexed PDF) [109]; Druk Journal explicitly exempts transcription (provider-indexed PDF) [110]). [T4 Q4]

**Bottom line:** the consent-template open question is now operationalizable: AAPOR supplies the requirement [98, 100], Rutgers/UKentucky/McMaster supply wording [102, 103, 104], Wits supplies a procedural standard (details PDF-only, provider-indexed) [105]; the platform-side gap (no built-in template in OpenInterviewer [111]/Outset [114]/Dovetail [115]/Looppanel [116]) remains — with two open-source exceptions (Synap ships a mandatory disclosure modal with an IRB-disclosure field [112]; AInterviewer is designed for local models so jurisdiction = your infrastructure [113]).

---

## Standing Tension — Synthetic-Respondent Validity Boundary

- **Anchors updated:** Argyle et al., Political Analysis 2023 (unchanged) [46]; **Bisbee et al. now published — Political Analysis 2024 (DOI 10.1017/pan.2024.5)** [47]; **Westwood, PNAS 2025 (DOI 10.1073/pnas.2518075122)** confirmed (99.8% attention-check pass; 97.7% reverse-shibboleth declines; hypothesis-confirming data; biased polling vectors) [48].
- **Live dispute:** Rothschild, Barari, Buskirk, Hillygus & Gordon, "Reply to Westwood" (OSF 10.31235/osf.io/ykxwj, 26 May 2026) argues contamination claims overstate (no definitions/benchmarks/reproducible real-world impact) [49]; **Westwood's PNAS reply** (e2537420123, 18 Feb 2026) presents a Prolific keystroke audit (n=2,898): 4.4% (95% CI 3.7–5.2%) flagged by at least one detector — presented as a lower bound; simulations: random 4.4% contamination cuts power up to 3.5 pp, non-random contamination could inflate ATEs ~2.3 pp [50]. Van der Stigchel et al. extend the concern to behavioural studies [51]; Gerber & Cash (Communications Psychology 2026) add the "well-meaning human uses AI" channel [52].
- **2025–26 validation studies harden the boundary toward item/task-dependence:** LISS-panel digital personas (arXiv 2605.10659 [53]: good on stable attributes/values; poor on subjective/heterogeneous/rare items, individual-level prediction); psychometric audit of 37 LLMs (arXiv 2608.14606 [54]: a Gaussian-copula baseline beats every LLM; homogeneous LLM "crowd"; +0.84 SD acquiescence; fabricated mediation paths); Salecha et al., PNAS Nexus (emergent social-desirability bias, GPT-4 shift of 1.20 human SD) [55]; recency bias across 167k simulated WVS interviews (arXiv 2507.07188) [56]; von der Heyde et al. systematic review of 136 studies (OSF eubj4 / COLM 2025) [57]; Cummins AMPPS registered report (analytic flexibility) [58]; cf. Kozlowski & Evans, "Simulating Subjects", SMR 2025 (six model characteristics impairing subject simulation) [45].
- **The core gap stands:** **no study directly tests whether AI interviewers of real humans shift the valid-use boundary for synthetic respondents** (absence verified across the T2 OpenAlex/arXiv/Crossref search record; scoped to indexed literature; [53, 54] are the closest validation studies, not absence evidence). Closest adjacent evidence: POQ 2026 (AI interviewing is itself a treatment that changes real responses — complicating calibration baselines) [25] and Chopra & Haaland (CESifo 2026 working paper; AI-led interviews: benefit from dynamic probing; responses internally valid and predict behaviour 6 months out) [59] (see also Haaland, Roth, Stantcheva & Wohlfart, JEL 2025, on open-ended data-collection methods including AI-led interviews [44]).

**Recommended design (inference, from the evidence):** pair POQ-style fixed-vs-AI-interview randomization [25] with Bisbee-style item-level human-vs-LLM comparison [47] — i.e., take a set of items where LLM respondents fail (social desirability, subjective states, heterogeneous/rare categories), elicit the same content from real humans via AI-led interviews, and test whether AI-elicited human data changes where the LLM-respondent failure boundary falls (does conversational elicitation rescue or worsen distributional fidelity?).

---

## Disagreements and Conflicts in the Evidence

1. **Westwood vs Rothschild et al.:** real-world LLM contamination prevalence (PNAS audit 4.4% lower bound [50]; original claim in [48] — vs "overstated, lacks reproducible real-world impact" [49]). Not resolved; both sides peer-reviewed/preprint respectively.
2. **Sycophancy consequence direction:** Cheng et al. (*Science* 2026; sycophancy harms user judgment) [34] vs Conlon & Schwardmann (CEPR DP21505; advice still depolarizes despite sycophancy) [36]. Likely domain-dependent (chat/recall vs decision-advice); un-reconciled.
3. **Agreement-as-yardstick:** standard IAA practice vs "Agreement Is Not Quality" (arXiv 2607.28890) [72] and alt-test (ACL 2025) [70]. Affects how the G&J 86%/84% numbers should be read [10, 14].
4. **86% vs 84%:** version conflict, unresolved at published-version level [1, 10, 14].
5. **Google EU pinning:** official docs (endpoint-determined pinning) [80, 81] vs dev-forum reports (PAYGO may not guarantee regional processing) [84] — official docs silent on billing tier.
6. **SSRN last-revised:** 21 Nov 2024 (index snapshot) [12] vs claimed 7 Feb 2026 (unverifiable response) — conflicting.
7. **Wuttke et al. (2026) vs G&J lab:** "one mode is not clearly better" (571-respondent field study) [20] vs "AI voice beats human benchmarks" (30-min blind-graded lab) [9, 10, 15] — different designs, not necessarily contradictory, but the strongest independent field evidence does not reproduce the headline ranking.

## Open Questions (Updated)

1. **Published-version verification (HIGH):** does the REStud in-press text reproduce the Behavioural Lab tables, the 384/462 sample figures, and the 86%-vs-84% coding number? No accessible accepted text as of 2026-08-22 [1, 8].
2. **Replication of POQ 2026 polarization:** does the AI-interview-induced answer change replicate across topics, platforms, and respondent pools? Its magnitude (+13 pp / +8 pp, single-source publisher-page content) is the newest load-bearing number in the field [25].
3. **Sycophancy-as-construct inside interviews:** still no measurement of an LLM interviewer's sycophantic behaviour against ground truth (absence per T2 search record, arXiv/OpenAlex/Crossref 2024–2026; [26] is a behavioural-coding proxy, not a construct measurement); the mechanism literature (contextual sycophancy, Jain et al. [31]) suggests respondent-context memory could amplify it — testable in interview platforms.
4. **Homogenization of G&J transcript data:** methods exist (SMR 2025 [38]) but no one has applied them [6].
5. **Does AI-led elicitation shift the LLM-respondent validity boundary?** The standing tension's core question remains untested [46, 25, 59].
6. **Provider-neutral voice:** technically feasible (Azure STT [89], Chirp 3 EU [81], self-hosted Whisper, OpenAI EU [86, 87, 88]), unimplemented in the seed platform [93, 95]; whether it becomes a maintained feature is open.
7. **Google PAYGO guarantee:** whether pay-as-you-go EU-endpoint inference is *guaranteed* in-region — official docs unresolved [84].
8. **Participant-facing AI-consent in mainstream journals:** not found; norms vary (Dialogica requires disclosure [108]; Druk exempts transcription [110]).
9. **SSRN parity:** human-browser check needed (21 Nov 2024 vs 7 Feb 2026) [12].
10. **Origin of the 466 figure and the 142% vs 148% word-count discrepancy:** unreconciled [10, 11, 15, 16, 24].

## Recommended Next Steps

1. Watch the REStud advance-article page [8]; on publication, diff the tables against the Feb 2026 author PDF (lab numbers, samples, coding figures) [10].
2. Attempt a replication or registered-reanalysis of POQ 2026's polarization finding in an AI-led-interview platform [25].
3. Run a homogenization analysis (SMR 2025 method [38]) on an AI-led-interview transcript corpus; report lexical/response diversity vs human-interviewer controls [6].
4. Pair fixed-survey vs AI-interview randomization [25] with Bisbee-style item-level LLM-vs-human comparison [47] to attack the boundary question.
5. For EU-pinned studies: standardize on Microsoft Foundry Regional/EU Data Zone [89, 91] or Google EU multi-region endpoint [80, 81] (text input only, or swap the transcription call); adopt AAPOR requirement [98] + Rutgers/UKentucky wording [102, 103]; document Wits-style case-by-case IRB notification [105].

---

## Sources

Merged, deduplicated numbering across research files T1–T4. Confidence tags as recorded by the researchers: `verified` = read/fetched this run (or metadata/API-verified); `single-source` = one independent source; `unverified` = could not confirm; `blocked — Cloudflare` / `blocked — PDF only` = not readable under this run's fetch policy (search-surfaced text flagged accordingly).

### Seed paper & versions (T1)

1. LSE Research Online record 140596 — "Conversations at scale: robust AI-led interviews", *Review of Economic Studies*, [In Press], deposited 13 Aug 2026 — https://researchonline.lse.ac.uk/id/eprint/140596/ — `verified` (institutional metadata; JSON/BibTeX exports read)
2. Xavier Jaravel — Papers — https://www.xavierjaravel.com/papers — `verified` (author page)
3. Friedrich Geiecke — Research — https://sites.google.com/view/friedrichgeiecke/research — `verified` (author page)
4. Adventures in AI & Democracy (academic blog, ~Mar 2026) — https://adventures-in-ai-and-democracy.ghost.io/ai-interviewers-qualitative-literacy-and-big-dick-data/ — `verified`
5. Crossref REST API (Geiecke author query, 2024–2027) — https://api.crossref.org/works?query.author=Geiecke — `verified` (metadata; only SSRN DOI 10.2139/ssrn.4974382 found)
6. OpenAlex W4403417545 (SSRN preprint record) — https://openalex.org/W4403417545 — `verified` via API (web page Cloudflare-gated)
7. OpenAlex W7203563320 (LSE deposit record, version `acceptedVersion`) — https://openalex.org/W7203563320 — `verified` via metadata
8. OUP — Review of Economic Studies advance articles — https://academic.oup.com/restud/advance-articles — `blocked — Cloudflare` (re-fetched this run; security-verification page)
9. Geiecke & Jaravel, NBER Summer Institute version, 16 Jul 2025 — https://conference.nber.org/conf_papers/f221279.pdf — `blocked — PDF only` (text surfaced via search-included content; dates the Behavioural Lab comparison)
10. Geiecke & Jaravel, 7 Feb 2026 author PDF — https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf — `blocked — PDF only` (86% figure; 0.42/0.62; 0.655/0.76/0.73/0.83 anchors; caveat sentence; single-source per version)
11. Geiecke & Jaravel, BSE-hosted Nov 2024 version — https://events.bse.eu/live/files/5703-geieckejaravel2024pdf — `blocked — PDF only` (422 French; "we ran 422 interviews with French voters")
12. SSRN abstract record — https://ssrn.com/abstract=4974382 — `blocked — Cloudflare` (HTTP 403; indexed snapshot shows old title/abstract, last revised 21 Nov 2024)
13. CEPR DP19705 — https://cepr.org/publications/dp19705 — `verified` (working-paper record; RePEc/IDEAS has no REStud entry)
14. LSE POID WP120 abstract page — https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 — `verified` (5 Jun 2025; PDF `blocked — PDF only`; 84% figure from prior vault scan)
15. thevoiceofuser.com — "The strongest paper yet on AI-led interviewing" — https://www.thevoiceofuser.com/the-strongest-paper-yet-on-ai-led-interviewing/ — `verified` (commercial blog; Table II reproduction; 0.42/0.62 discussion; 384/462; 148%)
16. qualz.ai — "AI-led interviews: peer-reviewed validation" — https://qualz.ai/blog/ai-led-interviews-peer-reviewed-validation/ — `verified` (vendor blog; 384/462; 148%; five-LLM list)
17. EdSurge (22 Nov 2024) — https://www.edsurge.com/news/2024-11-22-researchers-try-using-ai-chatbots-to-conduct-interviews-for-social-science-studies — `verified` (quotes the "never match" caveat)
18. Times Higher Education (Nov 2024) — https://www.timeshighereducation.com/news/ai-chatbot-can-conduct-research-interviews-unprecedented-scale — `verified` (Jaravel scope quotes)
19. LSE Impact blog (30 Oct 2024, authors) — https://blogs.lse.ac.uk/impactofsocialsciences/2024/10/30/ai-can-carry-out-qualitative-research-at-unprecedented-scale/ — `verified`
20. Wuttke et al., "AI Conversational Interviewing" (arXiv 2606.20064, 2026; 571-respondent analytic sample) — https://arxiv.org/abs/2606.20064 — `verified` (independent, adjacent; not a replication)
21. Jack, Cooper & Flower, "Automating the qualitative interview?", *Methodological Innovations* 2026 — https://journals.sagepub.com/doi/10.1177/20597991261448157 — `verified` (peer-reviewed; 74 social scientists; abstract-level)
22. Cuevas et al., "Collecting Qualitative Data at Scale with LLMs", PACM HCI 2025 (DOI 10.1145/3710947) — https://arxiv.org/abs/2309.10187 — `verified` (richness critique)
23. "When the Interviewer Is a Bot" / InterviewBot, arXiv 2608.10412 (Aug 2026) — https://arxiv.org/html/2608.10412v1 — `verified` (probe-light; 4.9% deep-probe turns)
24. CEP — "My must-read paper" (Aghion), CentrePiece CEPCP732, 20 Feb 2026 — https://cep.lse.ac.uk/_new/publications/abstract.asp?index=12051 — `verified` (142% word-count increase; NBER SI 2025 citation)

### Bias & validation (T2)

25. Austin, Hohe, Kennedy, Litman, Minozzi & Moses, "An Experimental Comparison of AI-Enabled Semi-Structured Interviews and Fixed Surveys", *Public Opinion Quarterly*, 2026-08-17 — https://doi.org/10.1093/poq/nfag063 — `verified` (abstract read; sample/topic detail and poll-level +13 pp/+8 pp `single-source` publisher-page content)
26. Wuttke et al., "AI Conversational Interviewing: Transforming Surveys with LLMs as Adaptive Interviewers", LaTeCH-CLfL 2025, pp. 179–204 (DOI 10.18653/v1/2025.latechclfl-1.17) — https://aclanthology.org/2025.latechclfl-1.17/ — `verified` (anthology page read this run); behavioural numbers (72/64 violations; 67%; 52.4/32.8 words) `single-source` / `blocked — PDF only`
27. Sharma et al., "Towards Understanding Sycophancy in Language Models" — https://arxiv.org/abs/2310.13548 — `verified` (now ICLR 2024, not preprint)
28. Sharma et al., ICLR 2024 poster (OpenReview) — https://openreview.net/forum?id=tvhaxkMKAn — `verified` in research T2 (ICLR virtual site + OpenReview forum); forum page challenge-gated on re-fetch
29. Chan et al., "Conversational AI Powered by Large Language Models Amplifies False Memories in Witness Interviews" — https://arxiv.org/abs/2408.04681 — `verified` (preprint; no peer-reviewed version as of 2026-08-22)
30. Pataranutaporn et al., "Synthetic Human Memories", CHI 2025 — https://doi.org/10.1145/3706598.3713697 — `verified`
31. Jain et al., "Interaction Context Often Increases Sycophancy in LLMs" — https://arxiv.org/abs/2509.12517 — `verified` (+45% Gemini 2.5 Pro with memory profiles)
32. Kim & Khashabi, "Challenging the Evaluator: LLM Sycophancy Under User Rebuttal", Findings EMNLP 2025 — https://doi.org/10.18653/v1/2025.findings-emnlp.1222 — `verified`
33. Hong et al., "Measuring Sycophancy of Language Models in Multi-turn Dialogues" (SYCON), Findings EMNLP 2025 — https://doi.org/10.18653/v1/2025.findings-emnlp.121 — `verified`
34. Cheng et al., "Sycophantic AI decreases prosocial intentions and promotes dependence", *Science*, 2026 — https://doi.org/10.1126/science.aec8352 — `verified` (arXiv/Crossref + abstract; N=2,405; ~49% more affirmation)
35. Braun, "Acquiescence Bias in Large Language Models", Findings EMNLP 2025 — https://doi.org/10.18653/v1/2025.findings-emnlp.607 — `verified`
36. Conlon & Schwardmann, "AI Sycophancy and Decisions", CEPR DP21505 — https://cepr.org/publications/dp21505 — `verified` (N=1,500; advice domain)
37. "Sycophancy Claims about Language Models: The Missing Human-in-the-Loop" — https://arxiv.org/abs/2512.00656 — `verified`
38. Zhang, Xu & Alvero, "Generative AI Meets Open-Ended Survey Responses", *Sociological Methods & Research* 54(3): 1197–1242, 2025 — https://doi.org/10.1177/00491241251327130 — `verified`
39. Boelaert et al., "Machine Bias", *SMR* 2025 — https://doi.org/10.1177/00491241251330582 — `verified`
40. NORC (Huang et al.), "LLMs Don't Respond Like Humans", AAPOR 2024 — https://www.norc.org/content/dam/norc-org/pdf2025/AAPOR%20LLMs%20Don%27t%20Respond%20Like%20Humans%20-%20Lilian%20Huang.pdf — `blocked — PDF only` / `single-source` (presentation; lexical diversity)
41. Yu et al., "An Analysis of Large Language Models for Simulating User Responses in Surveys", IJCNLP-AACL 2025 — https://doi.org/10.18653/v1/2025.ijcnlp-short.22 — `verified`
42. Anderson, Shah & Kreminski, "Homogenization Effects of LLMs on Human Creative Ideation", Creativity & Cognition 2024 — https://doi.org/10.1145/3635636.3656204 — `verified`
43. "AI Suggestions Homogenize Writing Toward Western Styles…", CHI 2025 — https://doi.org/10.1145/3706598.3713564 — `verified`
44. Haaland, Roth, Stantcheva & Wohlfart, "Understanding Economic Behavior Using Open-Ended Survey Data", *JEL* 2025 — https://doi.org/10.1257/jel.20251780 — `verified`
45. Kozlowski & Evans, "Simulating Subjects", *SMR* 2025 — https://doi.org/10.1177/00491241251337316 — `verified`

### Synthetic-respondent boundary (T2 Q3)

46. Argyle et al., "Out of One, Many", *Political Analysis* 2023 — https://doi.org/10.1017/pan.2023.2 — `verified`
47. Bisbee et al., "Synthetic Replacements for Human Survey Data?", *Political Analysis* 2024 — https://doi.org/10.1017/pan.2024.5 — `verified` (status change: now published)
48. Westwood, "The potential existential threat of large language models to online survey research", *PNAS* 122(48): e2518075122, 2025 — https://doi.org/10.1073/pnas.2518075122 — `verified`
49. Rothschild, Barari, Buskirk, Hillygus & Gordon, "Reply to Westwood", OSF 10.31235/osf.io/ykxwj (26 May 2026) — https://doi.org/10.31235/osf.io/ykxwj — `verified`
50. Westwood, "Reply to Van der Stigchel et al.", *PNAS* 123(8): e2537420123, 2026 — https://www.pnas.org/doi/10.1073/pnas.2537420123 — `verified` (keystroke audit n=2,898; 4.4% lower bound)
51. Van der Stigchel et al., "Will online behavioral research follow the fate of online survey research?", PNAS letter — https://www.pnas.org/doi/10.1073/pnas.2535585123 — `single-source` (not directly read; cited inside Westwood's reply)
52. Gerber & Cash, "Identifying generative AI use among genuine responders…", *Communications Psychology* 4: 111, 2026 — https://doi.org/10.1038/s44271-026-00506-8 — `verified`
53. "When Can Digital Personas Reliably Approximate Human Survey Findings?" (LISS personas), arXiv 2605.10659 — https://arxiv.org/html/2605.10659 — `verified`
54. "Plausible but Not Valid: A Psychometric Audit of LLMs as Synthetic Survey Respondents" (37 LLMs), arXiv 2608.14606 — https://arxiv.org/html/2608.14606 — `verified`
55. Salecha et al., "Large language models display human-like social desirability biases…", *PNAS Nexus* — https://pubmed.ncbi.nlm.nih.gov/39691446/ — `verified`
56. "Prompt Perturbations Reveal Human-Like Biases in LLM Survey Responses" (recency bias; 167k simulated WVS interviews), arXiv 2507.07188 — https://arxiv.org/abs/2507.07188 — `verified`
57. von der Heyde, Keusch, Buskirk & Eck, "AI in the Loop?! A Systematic Review…" (136 studies), OSF 10.31235/osf.io/eubj4 — https://doi.org/10.31235/osf.io/eubj4 — `verified` (OSF record not directly read this run; via ResearchGate/SurvAI hub/OpenReview references + COLM 2025 version arXiv 2509.03391)
58. Cummins, "The Threat of Analytic Flexibility in Using LLMs to Simulate Human Data", *AMPPS* (registered report) — https://doi.org/10.1177/25152459261461505 — `verified`
59. Chopra & Haaland, "Conducting Qualitative Interviews with AI", CESifo Working Paper 2026 — https://www.ifo.de/en/publications/2026/working-paper/conducting-qualitative-interviews-ai — `verified`

### Analysis pipeline (T3)

60. Landis & Koch, "The Measurement of Observer Agreement for Categorical Data", *Biometrics* 33(1), 1977 — https://doi.org/10.2307/2529310 — `verified` (DOI; banding via secondary quotes)
61. PLOS Digital Health 2026 — blind mixed-methods LLM-vs-human comparison (LLM 93.5% vs human 92.7%; κ=0.34 both; Gwet's AC1 0.92–0.93; only ChatGPT-5 non-inferior) — https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001189 — `verified`
62. Medical Science Educator 2025 (agreement 81.7–83.9%, κ 0.43–0.50; Neuendorf/Landis–Koch quotes) — https://link.springer.com/article/10.1007/s40670-025-02587-2 — `verified`
63. PERC 2025 / arXiv 2508.14764 (κ>0.6 for 3 of 4 themes after optimization; multi-run reporting) — https://arxiv.org/abs/2508.14764 — `verified`
64. BMC Medical Informatics & Decision Making 2025 (nine-model comparison; external κ 0.79/0.78/0.78 vs manual 0.74→0.82; Jaccard 1.00 dyads) — https://link.springer.com/article/10.1186/s12911-025-02961-5 — `verified`
65. Frontiers in Public Health 2025 (Llama-3 deductive coding; accuracy 0.84, κ=0.68 substantial) — https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1512537/full — `verified`
66. Discover Education 2026 (GPT-4o reached human-level inter-coder reliability; α humans 0.76–0.93 vs LLMs 0.73–0.91; "slightly below human-human") — https://link.springer.com/article/10.1007/s44217-025-00868-x — `verified`
67. International Journal of Qualitative Methods 2026 (Claude Code; theme-level alignment 90.9–100%) — https://doi.org/10.1177/16094069261462093 — `verified` (web page; PDF blocked)
68. Hila & Hauser, ASIS&T 2025 / arXiv 2507.14384 (κ=0.744, α=0.746; Krippendorff α ≥0.800 reliable / 0.667–0.800 tentative) — https://arxiv.org/abs/2507.14384 — `verified`
69. BMC Medical Research Methodology 2026 scoping review (LLM–human agreement 36–99%; "80%" not a universal cutoff) — https://link.springer.com/article/10.1186/s12874-026-02913-1 — `verified`
70. The Alternative Annotator Test ("alt-test"), ACL 2025 — https://aclanthology.org/2025.acl-long.782/ — `verified`
71. Parfenova et al., NAACL Findings 2025 (self-referential human yardstick) — https://aclanthology.org/2025.findings-naacl.361/ — `verified`
72. "Agreement Is Not Quality: Blind Expert Verification…", arXiv 2607.28890 (Jul 2026) — https://arxiv.org/abs/2607.28890 — `verified` (Jaccard 0.30 vs 0.52; no blind-expert preference, p=0.537)
73. Multi-LLM Thematic Analysis, arXiv 2512.20352 (intra-model κ 0.842–0.907; cross-model overlap 60–70%) — https://arxiv.org/abs/2512.20352 — `verified`
74. Psychological-safety coding, arXiv 2605.07422 (run-to-run κ 0.363–0.468; shared label bias across models) — https://arxiv.org/abs/2605.07422 — `verified`
75. Brown et al., arXiv 2503.23243 (item difficulty drives LLM–human agreement, not model identity) — https://arxiv.org/abs/2503.23243 — `verified`
76. HSSC 2025 party-cue study (human-LLM α 0.43–0.56; cue-conditioned divergence) — https://www.nature.com/articles/s41599-025-05834-4 — `verified` HTTP 200; `single-source` (Crossref metadata unavailable)
77. Lindahl, "*SEM 2025" (model-model agreement > human agreement in argumentation annotation) — https://aclanthology.org/2025.starsem-1.19/ — `verified` (anthology page read this run)
78. Fænø et al., MSR 2025, "Can LLMs Replace Manual Annotation of SE Artifacts?" — https://software-lab.org/publications/msr2025_LLM-annotation.pdf — `blocked — PDF only` (model-model α 0.66–0.82; snippets read)
79. J-PAL PovertyAction, llm-quali-coding (training materials; no agreement benchmarks or thresholds) — https://github.com/PovertyAction/llm-quali-coding — `verified` (README read)

### Governance & consent (T4)

80. Google Cloud — Data residency, Gemini Enterprise Agent Platform — https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency — `verified` (read this run)
81. Google Cloud — Deployments and endpoints, Gemini Enterprise Agent Platform — https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/locations — `verified` (read this run; EU multi-region hostname; `europe-west2`; Chirp 2/3 Transcription)
82. Google Cloud — CMEK (Agent Platform ML) — https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/cmek — `verified`
83. Google Cloud — CMEK (Gemini Enterprise; US/EU multi-region only) — https://docs.cloud.google.com/gemini/enterprise/docs/cmek — `verified`
84. Google dev forum — "Is inference location guaranteed within region for pay-as-you-go?" — https://discuss.google.dev/t/vertex-ai-generative-ai-is-inference-location-guaranteed-within-region-for-pay-as-you-go/298384 — `single-source` (unresolved; official docs silent on billing tier)
85. Google — Gemini API Additional Terms of Service — https://ai.google.dev/gemini-api/terms — `verified` (provider-indexed; API unpinnable)
86. OpenAI — Data controls in the OpenAI platform — https://developers.openai.com/api/docs/guides/your-data — `verified` (`/v1/audio/transcriptions` retention "None", ZDR-eligible; 10% uplift)
87. OpenAI — Introducing data residency in Europe — https://openai.com/index/introducing-data-residency-in-europe/ — `verified`
88. OpenAI Help Center — Data residency for the OpenAI API — https://help.openai.com/en/articles/10503543-data-residency-for-the-openai-api — `verified`
89. Microsoft Learn — Deployment types for Microsoft Foundry Models — https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types — `verified` (Data Zones incl. APAC from 2026-09-01; `gpt-4o-transcribe` EU regions)
90. Microsoft Learn — Data, privacy, and security for Foundry Models sold by Azure — https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy — `verified`
91. Microsoft Learn — EU Data Boundary: optional capabilities that transfer data — https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-transfers-for-optional-capabilities — `verified`
92. Anthropic — Data residency, Claude Platform docs — https://platform.claude.com/docs/en/manage-claude/data-residency — `verified` (US-only; `inference_geo` on Claude 4.6+)
93. friedrichgeiecke/interviews — config.py — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/config.py — `verified` (`MODEL_TRANSCRIPTION = "whisper-1"`; unchanged comment)
94. friedrichgeiecke/interviews — interview.py — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/interview.py — `verified` (audio client created regardless of provider)
95. friedrichgeiecke/interviews — full_voice_interview.py — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/full_voice_interview.py — `verified` (OpenAI-only; ValueError for other APIs)
96. friedrichgeiecke/interviews — README — https://github.com/friedrichgeiecke/interviews — `verified` (consent-flagging requirement; PolyForm Noncommercial 1.0.0 / CC BY-NC 4.0 licence split)
97. GitHub API — friedrichgeiecke/interviews metadata — https://api.github.com/repos/friedrichgeiecke/interviews — `verified` (pushed_at 2026-02-09T22:38:43Z)
98. AAPOR Task Force — *Responsible AI Integration in Survey Research* (May 2026) PDF — https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf — `blocked — PDF only` (Section 6 snippet + consent-item claims via provider-indexed content)
99. AAPOR — Task Force report announcement — https://aapor.org/announcements/task-force-on-responsible-ai-integration-in-survey-research-report/ — `verified` (report released May 2026; presented 14 May 2026 at AAPOR 81st per AAPOR special-sessions page)
100. AAPOR — Transparency Initiative Attachment C (rev. June 2026) — https://aapor.org/wp-content/uploads/2022/11/TI-Attachment-C.pdf — `verified` (provider-indexed PDF)
101. AAPOR — Standards and Ethics (2026 revision) — https://aapor.org/standards-and-ethics/ — `verified`
102. Rutgers AI Ethics Lab — "AI in Human Subjects Research: Rutgers Consent Guide" (Jan 2026; living document) — https://aiethicslab.rutgers.edu/ai-in-human-subjects-research-rutgers-consent-guide/ — `verified`
103. University of Kentucky — Sample Informed Consent Language for AI — https://research.uky.edu/office-research-integrity/ai-machine-learning-human-research/sample-ic-language-ai-use — `verified` (AI-Transcription clause; Third-Party Cloud clause)
104. McMaster — Informed Consent (AI transcription guidance) — https://research.mcmaster.ca/home/support-for-researchers/research-resources/digital-research-commons-pilot-drcp/transcription/informed-consent/ — `verified`
105. Wits HREC (Medical) — SOP Focus Group Discussions v2 (July 2026) — https://www.wits.ac.za/media/wits-university/research/medicalhrec/documents/sop-focus-group-discussions.pdf — `blocked — PDF only` (provider-indexed)
106. Samuel & Wassenaar, "Informed Consent and AI Transcription of Qualitative Data", *JERHRE* 2025 — https://doi.org/10.1177/15562646241296712 — `verified` (provider-indexed)
107. HHS OHRP SACHRP — IRB Considerations on the Use of AI in Human Subjects Research — https://www.hhs.gov/ohrp/sachrp-committee/recommendations/irb-considerations-use-artificial-intelligence-human-subjects-research/index.html — `verified`
108. Dialogica — Policy on the Use of Generative AI and AI-Assisted Tools — https://dialogica-journal.com/index.php/journal/policy-on-the-use-of-generative-ai-and-ai-assisted-tools — `verified` (mandatory AI Use Disclosure)
109. Journal of Singing — AI policy (Jul 2026) — https://www.nats.org/_Library/JOS_Web_Page/JoS_AI_Policy_7_29_26.pdf — `verified` (provider-indexed PDF)
110. Druk Journal — Guideline for Use of generative AI — http://drukjournal.bt/wp-content/uploads/2025/12/Guideline-for-Use-of-generative-AI.pdf — `verified` (provider-indexed PDF; transcription exempted)
111. OpenInterviewer (linxule) — https://github.com/linxule/openinterviewer — `verified` (consent flow ships; no AI-use-specific template clause evidenced)
112. Synap (opieeipo) — https://github.com/opieeipo/Synap — `verified` (mandatory consent/disclosure modal; IRB-disclosure field)
113. AInterviewer — platform paper (arXiv HTML 2606.20588) — https://arxiv.org/html/2606.20588 — `verified` (provider-indexed; local/open-weight models)
114. Outset — FAQ — https://outset.ai/resources/faq — `verified` (SOC 2 Type II, ISO 42001, no PII required; no AI-consent template found)
115. Dovetail — Understanding Informed Consent in Research — https://dovetail.com/research/what-is-informed-consent-in-research/ — `verified` (no AI-consent template found)
116. Looppanel — Security (AI summarization non-retention) — https://help.looppanel.com/en/articles/11011890-security-on-looppanel — `verified` (no consent template found)

## Limitations

- **PDF policy:** no full-text PDF parsing was performed (per workflow). All author/institution PDFs of the seed paper (Feb 2026 [10], Nov 2024 [11], NBER [9], POID [14], SSRN Delivery [12]) are `blocked` for full read; some text surfaced via search-included content and is flagged accordingly.
- **AAPOR exact wording** [98] corroborated via provider-indexed content only; word-level verification needs a PDF pass.
- **alphaXiv (`alpha_search`) unavailable to subagents** (not logged in); equivalent coverage via Crossref [5]/OpenAlex [6, 7]/arXiv/PubMed/OSF APIs.
- **Adjacent sources surfaced by T1 but not load-bearing in this brief** (acknowledged here, not numbered): Ashwin, Chhabra & Rao, "Using LLMs for Qualitative Analysis can Introduce Serious Bias", *SMR* 2026 (https://doi.org/10.1177/00491241251338246 — relevant to §3.3); "AI Interviews the Interviewers", CUI 2026 (https://doi.org/10.1145/3816046.3816218); Means-End-Chain human-vs-LLM chapter, Springer 2026 (https://link.springer.com/rwe/10.1007/978-3-658-46709-8_41-1 — synthetic-respondent strand).
- **Citation-graph scoping:** "no homogenization analysis exists" [6] is scoped to the 10 OpenAlex-indexed citing works; Google Scholar may index more.
- **Current-state claims (provider docs [80–92], repo state [93–97]) are time-stamped 2026-08-22** and can change.
- All research-agent runs were flagged FAILED by the subagent runtime on a child tool-allowlist issue (hf_* tools); complete reports were produced and recovered from the artifact directory — treated as PASS WITH NOTES.

---

## Verification notes (this run)

- **Live re-checks performed:** LSE Research Online 140596 (read — matches bullet 1.1) [1]; POQ DOI 10.1093/poq/nfag063 (resolves to OUP; abstract content per research T2) [25]; LaTeCH-CLfL anthology page (read — Wuttke et al., pp. 179–204, DOI confirmed) [26]; *SEM 2025 anthology page (read — "agreement between models is higher than human agreement") [77]; CEP CEPCP732 (read — 142% word increase confirmed) [24]; POID WP120 abstract page (read — 5 Jun 2025 record confirmed) [14]; academic.oup.com/restud/advance-articles (Cloudflare gate confirmed — kept `blocked`) [8]; OpenReview Sharma forum (challenge page on re-fetch — publication status per research T2, kept `verified`) [28].
- **Not re-fetched (per instructions):** all PDFs (`blocked — PDF only` tags preserved) [9, 10, 11, 26, 40, 78, 98, 105, 109, 110]; Cloudflare-gated hosts (SSRN [12], academic.oup.com [8]); URLs whose status was established by the research files' own fetches (Google/Azure/OpenAI/Anthropic docs, repo raw files, GitHub API).
- **No claims removed;** all draft content preserved. Confidence tags (verified / single-source / unverified / blocked) carried through from the research files; tag gaps found in the review pass (POQ sample metrics; Wits/JOS/Druk inline caveats) are fixed in this revised version. Where the draft's Sources list was shorter than the body's needs (e.g., *SEM 2025 [77], MSR 2025 [78], CEP in-brief [24], OpenReview [28], NORC [40], Dovetail [115], Looppanel [116]), matching URLs from the research files were added so every body claim has an anchor; every numbered source is cited at least once and every inline citation resolves to Sources.
- **Removed Unsupported Claims:** none (no unsupported factual claims had to be removed; items that could not be verified at the published-version level are retained with their `blocked`/`single-source`/`unverified` tags rather than deleted, per instructions).