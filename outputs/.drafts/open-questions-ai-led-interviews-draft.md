# AI-Led Interviews: Open Questions — Deep-Research Update

**Run:** deep-research verification of `notes/open-questions-ai-led-interviews.md`
**Date:** 2026-08-22 · **Status:** draft for citation · **Previous provenance:** single-thread, medium-verification (inherited)
**Research files:** `outputs/.drafts/open-questions-ai-led-interviews-research-T{1,2,3,4}.md`

---

## Executive Summary

This run re-verified the eight consolidated open questions from the AI-led-interviews brief against fresh web and literature evidence (4 parallel research threads, 130+ sources checked, no PDF full-text parsing; PDF-only claims marked `blocked`). Headline changes since the Feb 2026 snapshot:

1. **Publication status upgraded but still unreadable.** *Conversations at Scale* is now institutionally corroborated as **in press at the Review of Economic Studies** (LSE Research Online record 140596, deposited 13 Aug 2026) — no longer single-source author-reporting. But no journal page, DOI, or accepted full text exists, so **the LSE Behavioural Lab numbers and the 86%-vs-84% coding figure still cannot be verified at the published-version level**.
2. **Dating correction.** The LSE Behavioural Lab human-vs-AI comparison entered the paper in the **16 Jul 2025 NBER Summer Institute version**, not (only) the Feb 2026 author PDF. Still single-source (author versions + two commercial blogs); **no independent replication exists anywhere in the checked record**.
3. **Interviewer-induced bias: the biggest update.** The archive's "no peer-reviewed measurement" claim survives only in its narrow reading. A new randomized experiment in *Public Opinion Quarterly* (Austin et al. 2026, 2,243 US adults) finds **AI interviewing polarizes respondents' subsequent closed-ended answers** — the first peer-reviewed measurement of interviewer-induced answer change in AI-led research interviews. Separately, behavioural coding (Wuttke et al., LaTeCH-CLfL 2025) shows AI interviewers commit 67% of "judging the respondent" anti-bias guideline violations in small-N interviews.
4. **Homogenization is now measured in survey open-ends** (Zhang, Xu & Alvero, SMR 2025: 34% of participants report LLM use; LLM text more homogeneous and more positive), but **no homogenization analysis of the Geiecke & Jaravel transcripts exists**.
5. **Vertex AI residency claim verified with caveats.** Google's jurisdiction-pinned path now exists under the renamed **Gemini Enterprise Agent Platform**: EU multi-region and locational endpoints pin ML processing to the EU; the Gemini *API* remains unpinnable. Open: whether pay-as-you-go (vs provisioned throughput) guarantees regional processing.
6. **The whisper-1 voice leak persists.** The seed platform's repo (last push 9 Feb 2026) still hardwires voice transcription to the OpenAI API in both apps even when `API = "azure" | "anthropic" | "google"`. Provider-neutral voice is feasible (Azure STT/EU `gpt-4o-transcribe`, Google Chirp 3 via EU endpoint, self-hosted Whisper, OpenAI EU endpoint) but not implemented.
7. **Consent templating: AAPOR report confirmed to exist; IRB uptake is now documented.** AAPOR's May 2026 report is verified (PDF text blocked); new institutional consent language exists (University of Kentucky, McMaster, Wits HREC SOP v2, Rutgers living guide); no mainstream journal yet requires *participant-facing* AI-consent clauses.
8. **Standing tension unchanged at its core.** Bisbee is now published (Political Analysis 2024), Westwood's PNAS 2025 existential-threat claim has a live rebuttal thread (Rothschild et al. OSF 2026; Westwood PNAS reply 2026 with a 4.4% contamination lower-bound estimate), and 2025–26 validation studies keep the synthetic-respondent boundary **item- and task-dependent**. **No study directly tests whether AI interviewers of real humans shift that boundary** — the recommended next experiment.

Verification posture: every claim below carries a source URL or a research-file pointer; items that could only be checked via search-engine-included PDF text or metadata are flagged `single-source`, `unverified`, or `blocked — PDF only`.

---

## Thread 1 — Validation

### 1.1 Publication status: accepted, in press, not yet readable

The archive's "Accepted at REStud 2026 [single-source]" is now **institutionally corroborated**:

- LSE Research Online record 140596 lists the paper as *Review of Economic Studies*, [In Press], publisher OUP, ISSN 0034-6527, accepted 2026, deposited 13 Aug 2026, refereed TRUE, **no full text deposited** (https://researchonline.lse.ac.uk/id/eprint/140596/).
- Author pages agree: Xavier Jaravel ("Accepted Review of Economic Studies, 2026") and Friedrich Geiecke ("Accepted, Review of Economic Studies") (https://www.xavierjaravel.com/papers; https://sites.google.com/view/friedrichgeiecke/research).
- An independent academic blog (adventures-in-ai-and-democracy.ghost.io, ~Mar 2026) says "forthcoming in the Review of Economic Studies".
- **No journal-hosted page or DOI exists**: Crossref returns only SSRN DOI 10.2139/ssrn.4974382; OpenAlex W4403417545 shows only the SSRN location; the OUP advance-articles page is Cloudflare-gated. OpenAlex also indexes the LSE deposit as W7203563320 (version `acceptedVersion`).

**Consequence:** the accepted-version full text is inaccessible (`full_text_status: none`), so whether the published version reproduces the Behavioural Lab tables or the 86%/84% coding figures **cannot be verified today**. [T1 Q1; T3 Q1]

### 1.2 Replication of the LSE Behavioural Lab result: none found; dating corrected

- **Correction to the archive:** the four-modality comparison (panel A: AI voice 3.93 > human FTF 3.51 > AI text 2.98 > human online text 2.42; panel B: human FTF 3.53 ≈ AI voice 3.50 > AI text 2.70) is present in the **16 Jul 2025 NBER Summer Institute version** (https://conference.nber.org/conf_papers/f221279.pdf) as well as the Feb 2026 author PDF (https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf). The lab study entered between POID WP120 (5 Jun 2025) and the NBER version. `blocked — PDF only` for full read; text surfaced via search-included content.
- **No independent replication, reproduction by another team, or peer-reviewed comment on the comparison was found** (searches incl. replication/critique/IngentaConnect; OpenAlex shows 10 citing works, none a replication). Two commercial blogs reproduce the tables (thevoiceofuser.com; qualz.ai). [T1 Q2]
- Adjacent independent evidence — *not* replications: Wuttke et al. 2026 (arXiv 2606.20064; 571-respondent sample; "one mode is not clearly better", completion differed by condition); Jack, Cooper & Flower, *Methodological Innovations* 2026 (peer-reviewed; 74 social scientists; rapport/interpretation costs); Cuevas et al., PACM HCI 2025 (richness critique); InterviewBot (arXiv 2608.10412, Aug 2026; probe-light voice interviewer). [T1 Q2]

### 1.3 Reliability of the yardstick (inter-grader 0.42 / 0.62)

Unchanged in author versions; the only external discussion found is one commercial-blog critique ("The aggregate patterns are real. The decimal points are not." — thevoiceofuser.com). The paper partially addresses grader heterogeneity internally ("even after accounting for expert fixed effects", search-surfaced PDF text), but this is `blocked — PDF only`. No academic response or later-version revision found. [T1 Q3]

### 1.4 Sample discrepancies: partially resolved

- **Current-version figures (Feb 2026/in-press narrative): 384 French-election; 462 US meaning-in-life** — corroborated by two independent secondary sources (qualz.ai; thevoiceofuser.com).
- **422 (French)** is anchored to the **Nov 2024** version ("we ran 422 interviews with French voters", BSE-hosted PDF, https://events.bse.eu/live/files/5703-geieckejaravel2024pdf). [T1 Q4]
- **466 (US)** remains unexplained (archive-sourced only).
- Also noted: word-count figure 142% (CEP 2024) vs 148% (current blogs) — unflagged in the archive, unreconciled.
- No canonical text exists to reconcile these (in-press version inaccessible). **Recommendation: cite 384/462 as current, flag 422/466 as working-paper-version numbers.** [T1 Q4]

### 1.5 Boundary of complementarity

The caveat "the AI-led interviews never match the best human experts" is alive in the paper and quoted in journalism: EdSurge (22 Nov 2024) quotes it directly. Scope statements are stable: Jaravel to Times Higher Education (Nov 2024): getting closer to qualitative interviewing "is not the primary goal"; LSE Impact blog (Oct 2024) positions the method for "large-scale, rigorous interviews". A new author artifact exists: a NotebookLM podcast summary linked from Geiecke's homepage. No fresh post-Feb-2026 author interview found. [T1 Q5]

### 1.6 SSRN parity: likely stale, still gated

SSRN remains Cloudflare-blocked (HTTP 403 challenge). The search-indexed snapshot shows the **old** posting (title "…with a Simple Open-Source Platform", last revised 21 Nov 2024, old abstract) — conflicting with one unverifiable claim of "last revised 7 Feb 2026". Weight of evidence: not updated. `unverified` pending a human-browser check. [T1 Q6]

---

## Thread 2 — Interviewer-Induced Bias

### 2.1 Sycophancy / agreement bias: from "unmeasured" to "first measurements exist"

The archive said: no peer-reviewed measurement of sycophancy / interviewer-induced agreement bias in AI-led research interviews. **Narrow reading still true — no study measures LLM-interviewer sycophancy as a construct against ground truth in a research interview. Broad reading is now false:**

- **Austin, Hohe, Kennedy, Litman, Minozzi & Moses, "An Experimental Comparison of AI-Enabled Semi-Structured Interviews and Fixed Surveys", *Public Opinion Quarterly*, 2026-08-17 (DOI 10.1093/poq/nfag063)** — randomized experiment, 2,243 US adults (fielded Dec 2024, immigration/tariffs topics). Abstract (read): AI interviewing increases the volume and specificity of articulated rationales with minuscule satisfaction decline and no rolloff increase — **but AI interviews "appear to shape subsequent responses": respondents exhibit greater polarization in follow-up items after AI probing**. Publisher-page content (`single-source`): answer-change rates rose +13 pp (immigration) and +8 pp (tariffs) vs a no-follow-up control, moving toward more extreme positions. The paper's own framing: AI interviewing "may alter the cognitive architecture of opinion formation". This is interviewer-induced measurement bias measured in a randomized design in the field's flagship survey-methodology journal. Unreplicated. [T2 Q1]
- **Wuttke et al., "AI Conversational Interviewing", LaTeCH-CLfL 2025 (DOI 10.18653/v1/2025.latechclfl-1.17)** — small-N behavioural coding (6 human-led, 5 AI-led interviews) of adherence to anti-bias interview guidelines (`blocked — PDF only`, single-source): ~72 guideline violations per AI interview vs ~64 per human; **67% of "interviewer judges the respondent" violations committed by the AI** (e.g., "Your definition of politics is quite insightful"); 75% of "guiding/suggestions" violations by humans; AI turns averaged 52.4 vs 32.8 words. Relevance ratings of elicited responses not substantially different. First peer-reviewed behavioural evidence that AI interviewers emit biased interviewer behaviour in research settings despite instructions. [T2 Q1]
- **Anchor statuses updated:** Sharma et al. (arXiv 2310.13548) is now **published, ICLR 2024 poster**; Chan et al. (arXiv 2408.04681, false-memory induction in witness interviews) **remains a preprint** (peer-reviewed adjacent work exists: Pataranutaporn et al., CHI 2025, DOI 10.1145/3706598.3713697). [T2 Q1]
- **Mechanism evidence 2025–26 (why an adaptive interviewer could shape answers):** Jain et al. (arXiv 2509.12517) — interaction context increases agreement sycophancy (up to +45% for Gemini 2.5 Pro with memory profiles); Kim & Khashabi (Findings EMNLP 2025) — conversational follow-up framing raises endorsement of user counterarguments; Hong et al. SYCON (Findings EMNLP 2025) — multi-turn conformity benchmark across 17 LLMs; Cheng et al., *Science* 2026 (DOI 10.1126/science.aec8352) — AI affirms ~49% more than humans, and one sycophantic interaction reduces responsibility-taking (N=2,405, preregistered); Braun (Findings EMNLP 2025) — LLMs show a *no-saying* acquiescence bias; **counterweight**: Conlon & Schwardmann (CEPR DP21505) — AI advice *depolarizes* despite measurable sycophancy (advice domain, N=1,500) — the depolarization weakens but is not reversed as sycophancy rises. A review (arXiv 2512.00656) notes no measurement of sycophancy includes human perception of it. [T2 Q1]

**Bottom line:** the single most consequential open question from the brief is now *partially* answered: answer-shaping in AI-led research interviews is real and measurable (POQ 2026), but its magnitude, moderation (topic, model, interaction context), and relation to sycophancy-as-construct are unreplicated and unmapped. The POQ result is the study to watch for replications.

### 2.2 Response homogenization

- **Anchor confirmed:** Anderson, Shah & Kreminski, "Homogenization Effects of LLMs on Human Creative Ideation", Creativity & Cognition 2024 (DOI 10.1145/3635636.3656204).
- **Homogenization is now measured in open-ended survey data, peer-reviewed:** Zhang, Xu & Alvero, "Generative AI Meets Open-Ended Survey Responses", *Sociological Methods & Research* 54(3):1197–1242, 2025 (DOI 10.1177/00491241251327130) — 34% of online participants report LLM use on open-ends; LLM text **more homogeneous and more positive**, especially for sensitive items about social groups; "may mask important underlying social variation". Supporting: Boelaert et al., "Machine Bias", SMR 2025 (DOI 10.1177/00491241251330582) — topic-random bias, low variance; NORC AAPOR 2024 (lexical diversity; `PDF only`); Yu et al., IJCNLP-AACL 2025 (DOI 10.18653/v1/2025.ijcnlp-short.22) — fixed viewpoints, single-perspective claims; AI Suggestions Homogenize Writing, CHI 2025 (DOI 10.1145/3706598.3713564). [T2 Q2]
- **No homogenization analysis of the Geiecke & Jaravel transcripts exists** (absence verified against the 10 OpenAlex-indexed citing works of SSRN 4974382 — scoped to the OpenAlex citation graph). [T2 Q2]

**Bottom line:** the risk that AI-led interviewing narrows response diversity is now directly measurable with published methods (SMR 2025), but the application to G&J transcripts is undone — a cheap, high-value validation study.

---

## Thread 3 — Analysis-Pipeline Consistency

### 3.1 Canonical coding-agreement figure: unresolved

- **86% (LLM-RA ≈ 86% of RA-RA human-human consistency; LLM-RA corr 0.655 vs RA-RA 0.76; GPT-5 vs RAs 0.73; Claude 3.5 Sonnet vs GPT-4o cross-model 0.83)** — Feb 2026 author version (latest accessible full text). `blocked — PDF only` this run; inherited from the prior vault scan (single-source per version).
- **84% ("close to (84% of)")** — June 2025 POID WP120. `blocked — PDF only`.
- REStud in-press accepted text not deposited anywhere; **no published-version reconciliation possible today**. 86% remains the number in the latest accessible version. [T3 Q1]

### 3.2 Acceptance standard: the field has no universal cutoff

Verified landscape (thresholds literature + 2025–26 comparisons):

- No single accepted cutoff exists; a 2026 scoping review reports LLM–human agreement ranging **36–99%** across studies and cautions against treating 80% as a validated standard (BMC Medical Research Methodology, DOI 10.1186/s12874-026-02913-1).
- Dominant working bars: **(a) match-the-human-baseline** (Discover Education 2026: GPT-4o reached human-level ICC; PLOS Digital Health 2026: LLM 93.5% vs human 92.7% agreement, κ=0.34 both, Gwet's AC1 0.92–0.93, only ChatGPT-5 reached formal non-inferiority); **(b) "substantial" chance-corrected agreement κ/α ≥ 0.6–0.8** (Landis & Koch 1977; Krippendorff's α ≥ 0.800 reliable / 0.667–0.800 tentative); **(c) percent agreement ≥ 80–90%** (Neuendorf-style).
- The seed's "X% of human-human" ratio framing is **rare** — only one new study uses the same baseline-ratio logic (Discover Education's "slightly below human-human"). The seed's RA-RA baseline of 0.76 sits mid-"substantial" and matches human baselines reported elsewhere (α 0.76–0.93). [T3 Q2]

### 3.3 Critiques of the yardstick: agreement-with-humans is not quality

- **"Agreement Is Not Quality" (arXiv 2607.28890, Jul 2026)** — the most on-point critique: human-LLM Jaccard 0.30 vs human-human 0.52, yet a source-blind expert verifier showed **no preference** between human and LLM coding (51.5% vs 48.5%, p=0.537); for several codes human consensus encoded "shared conservative bias" the verifier rejected. Conclusion: human-agreement measures fail in both directions; remedy = blind expert verification alongside agreement metrics.
- **Alt-test (ACL 2025, DOI 10.18653/v1/2025.acl-long.782)** — human-bounded IAA metrics can only say whether an LLM matches humans; no decision criteria; proposes comparing LLM against ≥3 human annotators with an "average advantage probability".
- **Parfenova et al. (NAACL Findings 2025)** — the human yardstick is partly self-referential (humans rate human labels more favorably even when LLMs are closer to true labels).
- **Multi-run instability:** arXiv 2508.14764 and arXiv 2605.07422 show single-run agreement reporting is methodologically insufficient (run-to-run κ spans 0.363–0.468 can flip Fair/Moderate) — directly relevant to the seed's single 0.83 cross-model run.
- **Cross-model stability now has a literature:** model-model agreement ≥ human-human is a repeated finding (argumentation, *SEM 2025; SE annotation, MSR 2025; multi-LLM thematic analysis, arXiv 2512.20352: intra-model κ 0.842–0.907, cross-model overlap 60–70%) **with a consistent caveat**: model-model agreement is consistency, not correctness (models can agree *and be wrong the same way* — arXiv 2605.07422 shared label-bias; Brown et al. arXiv 2503.23243: item difficulty, not model identity, drives LLM-human agreement). A party-cue experiment (HSSC 2025, nature.com/articles/s41599-025-05834-4) found low human-LLM agreement on political statements (α 0.43–0.56) with cue-conditioned divergence — directly relevant to the seed's political vote-reason coding. [T3 Q3, Q4]

**Bottom line:** the 86%-vs-84% tension stays unresolved until the REStud text appears; arguably the bigger issue is the yardstick itself — the field now has published critiques and alternatives (blind-expert verification, alt-test, Gwet's AC1 + non-inferiority, multi-run reporting) that should be applied to the G&J pipeline.

---

## Thread 4 — Governance & Consent

### 4.1 Provider matrix refresh (as of 2026-08-22) and the Vertex AI verdict

**Q5 of the brief (is Vertex AI a viable Google pinning path): now VERIFIED with caveats.**

- The pinnable Google path now runs under the renamed **Gemini Enterprise Agent Platform (formerly Generative AI on Vertex AI / Vertex AI Platform)**. Official docs (read this run): **ML processing location is endpoint-determined** — jurisdictional multi-region endpoints (EU hostname `aiplatform.eu.rep.googleapis.com`) keep ML processing within the EU; locational endpoints (e.g., `europe-west1`) keep processing within the region's jurisdiction (per-model variation for EU in-country vs EU-wide); **global endpoints provide no residency guarantee** (docs tell customers not to use global endpoints when ML-processing requirements exist). Data at rest stays in the customer-selected location regardless of endpoint. CMEK available but US/EU multi-region only (global excluded). Per-model tables include Gemini 3.x Flash and transcription models **Chirp 2 / Chirp 3: Transcription** on EU endpoints.
- **Caveats:** (a) Google's EU multi-region table includes `europe-west2` (London) — a UK/EU nuance; (b) a Google dev-forum thread reports **pay-as-you-go vs provisioned-throughput inference-location guarantees are unresolved in official docs** (`single-source`, unresolved); (c) the **Gemini API (AI Studio/developer API) remains unpinnable** ("may be stored transiently or cached in any country").
- **Other providers:** Azure/Microsoft Foundry remains the strongest option (Global / Data Zone US-EU-APAC / Regional deployments; APAC Data Zone from 2026-09-01; EU Data Zone = Azure EU Data Boundary incl. EFTA; `gpt-4o-transcribe` now in EU regions); OpenAI EU remains approval-gated (EEA+CH storage *and* processing via `eu.api.openai.com`; priced 10% uplift for residency-eligible models; `/v1/audio/transcriptions` now shows abuse-monitoring retention "None", ZDR-eligible); Anthropic remains US-only (richer geo controls — `inference_geo`, workspace defaults — but `inference_geo` supported only on Claude 4.6+ models). [T4 Q1, Q2]

### 4.2 The whisper-1 voice leak: persists

- Repo `friedrichgeiecke/interviews` last pushed **2026-02-09** (GitHub API). `config.py` still sets `MODEL_TRANSCRIPTION = "whisper-1"` with the unchanged comment that voice transcription always uses the OpenAI API. `interview.py` (main platform): when `"voice" in INPUT_MODE`, a separate OpenAI client is created and `client_audio.audio.transcriptions.create(...)` runs **regardless of the configured provider** — "silently routes through OpenAI even when `API = "azure" | "anthropic" | "google"`". `full_voice_interview.py` is OpenAI-only end-to-end (raises ValueError for any other API; closing TTS via `gpt-4o-mini-tts`). README consent-flagging requirement unchanged; licence split code = PolyForm Noncommercial 1.0.0, docs = CC BY-NC 4.0.
- **Provider-neutral voice is feasible but unimplemented:** Azure AI Speech / Azure OpenAI `gpt-4o-transcribe` (EU regions), Google Chirp 3 via the EU endpoint, self-hosted open-weight Whisper, or the approval-gated OpenAI EU endpoint (which now supports `/v1/audio/transcriptions` with EU processing). Jurisdiction-pinned studies still must restrict to text input or replace the transcription call. [T4 Q3]

### 4.3 Consent templating and IRB uptake

- **AAPOR Task Force, *Responsible AI Integration in Survey Research* (May 2026):** existence and date verified (announcement + Reports page; presented at AAPOR 81st Annual Conference, 14 May 2026). Full text is `blocked — PDF only`; provider-indexed snippet confirms Section 6 "Responsibility to Human Subjects" ("Disclosure, consent, data protection, risk assessment, and fairness must explicitly account for AI-enabled inference…"). The archive's two specific claims — a **distinct, clearly labelled consent item with opt-out where feasible** for AI-assisted interviewing/external data retention, and the warning about third-party platforms that **"may retain or further train on personal data"** — are corroborated by provider-indexed content but **not primary-read** (word-level certainty needs a PDF pass). Adjacent AAPOR instruments verified: TI Attachment C (June 2026) requires disclosure of AI-assisted interviewing in reporting; the 2026 Code of Ethics states AI-generated responses are not research participants.
- **Rutgers HRPP AI Consent Guide:** current (Jan 2026, living document, HRPP Toolkit; PRIM&R CE session delivered).
- **Samuel & Wassenaar (JERHRE 2025, DOI 10.1177/15562646241296712):** verified — explicit consent for AI transcription, jargon-free clause, right to decline/withdraw AI transcription, human verification, manual alternatives.
- **IRB uptake — new evidence:** University of Kentucky IRB office ships a "Sample Informed Consent Language for AI" menu including an **AI-Transcription clause** and a **Third-Party Cloud clause** ("Your data may be stored, retained, and used for training by {software}"); McMaster REB publishes example AI-transcription consent language naming the service; **Wits HREC (Medical) SOP v2 (July 2026)** requires case-by-case HREC notification for AI transcription (no blanket approval; closed tool required; researcher corrections mandated). SACHRP/OHRP 2022 remains the federal anchor.
- **No mainstream journal found requiring *participant-facing* AI-consent language** (inference from the checked set: author-side disclosure norms vary — Dialogica mandates an AI Use Disclosure; Journal of Singing requires disclosure when material; Druk Journal explicitly exempts transcription). [T4 Q4]

**Bottom line:** the consent-template open question is now operationalizable: AAPOR supplies the requirement, Rutgers/UKentucky/McMaster supply wording, Wits supplies a procedural standard; the platform-side gap (no built-in template in OpenInterviewer/Outset/Dovetail/Looppanel) remains — with two open-source exceptions (Synap ships a mandatory disclosure modal with an IRB-disclosure field; AInterviewer is designed for local models so jurisdiction = your infrastructure).

---

## Standing Tension — Synthetic-Respondent Validity Boundary

- **Anchors updated:** Argyle et al., Political Analysis 2023 (unchanged); **Bisbee et al. now published — Political Analysis 2024 (DOI 10.1017/pan.2024.5)**; **Westwood, PNAS 2025 (DOI 10.1073/pnas.2518075122)** confirmed (99.8% attention-check pass; 97.7% reverse-shibboleth declines; hypothesis-confirming data; biased polling vectors).
- **Live dispute:** Rothschild, Barari, Buskirk, Hillygus & Gordon, "Reply to Westwood" (OSF 10.31235/osf.io/ykxwj, 26 May 2026) argues contamination claims overstate (no definitions/benchmarks/reproducible real-world impact); **Westwood's PNAS reply** (e2537420123, 18 Feb 2026) presents a Prolific keystroke audit (n=2,898): 4.4% (95% CI 3.7–5.2%) flagged by at least one detector — presented as a lower bound; simulations: random 4.4% contamination cuts power up to 3.5 pp, non-random contamination could inflate ATEs ~2.3 pp. Van der Stigchel et al. extend the concern to behavioural studies; Gerber & Cash (Communications Psychology 2026) add the "well-meaning human uses AI" channel.
- **2025–26 validation studies harden the boundary toward item/task-dependence:** LISS-panel digital personas (arXiv 2605.10659: good on stable attributes/values; poor on subjective/heterogeneous/rare items, individual-level prediction); psychometric audit of 37 LLMs (arXiv 2608.14606: a Gaussian-copula baseline beats every LLM; homogeneous LLM "crowd"; +0.84 SD acquiescence; fabricated mediation paths); Salecha et al., PNAS Nexus (emergent social-desirability bias, GPT-4 shift of 1.20 human SD); recency bias across 167k simulated WVS interviews (arXiv 2507.07188); von der Heyde et al. systematic review of 136 studies (OSF eubj4 / COLM 2025); Cummins AMPPS registered report (analytic flexibility).
- **The core gap stands:** **no study directly tests whether AI interviewers of real humans shift the valid-use boundary for synthetic respondents** (absence verified). Closest adjacent evidence: POQ 2026 (AI interviewing is itself a treatment that changes real responses — complicating calibration baselines) and Chopra & Haaland (CESifo 2026 working paper; AI-led interviews: benefit from dynamic probing; responses internally valid and predict behaviour 6 months out).

**Recommended design (inference, from the evidence):** pair POQ-style fixed-vs-AI-interview randomization with Bisbee-style item-level human-vs-LLM comparison — i.e., take a set of items where LLM respondents fail (social desirability, subjective states, heterogeneous/rare categories), elicit the same content from real humans via AI-led interviews, and test whether AI-elicited human data changes where the LLM-respondent failure boundary falls (does conversational elicitation rescue or worsen distributional fidelity?).

---

## Disagreements and Conflicts in the Evidence

1. **Westwood vs Rothschild et al.:** real-world LLM contamination prevalence (PNAS audit 4.4% lower bound vs "overstated, lacks reproducible real-world impact"). Not resolved; both sides peer-reviewed/preprint respectively.
2. **Sycophancy consequence direction:** Cheng et al. (*Science* 2026; sycophancy harms user judgment) vs Conlon & Schwardmann (CEPR DP21505; advice still depolarizes despite sycophancy). Likely domain-dependent (chat/recall vs decision-advice); un-reconciled.
3. **Agreement-as-yardstick:** standard IAA practice vs "Agreement Is Not Quality" (arXiv 2607.28890) and alt-test (ACL 2025). Affects how the G&J 86%/84% numbers should be read.
4. **86% vs 84%:** version conflict, unresolved at published-version level.
5. **Google EU pinning:** official docs (endpoint-determined pinning) vs dev-forum reports (PAYGO may not guarantee regional processing) — official docs silent on billing tier.
6. **SSRN last-revised:** 21 Nov 2024 (index snapshot) vs claimed 7 Feb 2026 (unverifiable response) — conflicting.
7. **Wuttke et al. (2026) vs G&J lab:** "one mode is not clearly better" (571-respondent field study) vs "AI voice beats human benchmarks" (30-min blind-graded lab) — different designs, not necessarily contradictory, but the strongest independent field evidence does not reproduce the headline ranking.

## Open Questions (Updated)

1. **Published-version verification (HIGH):** does the REStud in-press text reproduce the Behavioural Lab tables, the 384/462 sample figures, and the 86%-vs-84% coding number? No accessible accepted text as of 2026-08-22.
2. **Replication of POQ 2026 polarization:** does the AI-interview-induced answer change replicate across topics, platforms, and respondent pools? Its magnitude (+13 pp / +8 pp, single-source publisher-page content) is the newest load-bearing number in the field.
3. **Sycophancy-as-construct inside interviews:** still no measurement of an LLM interviewer's sycophantic behaviour against ground truth; the mechanism literature (contextual sycophancy, Jain et al.) suggests respondent-context memory could amplify it — testable in interview platforms.
4. **Homogenization of G&J transcript data:** methods exist (SMR 2025) but no one has applied them.
5. **Does AI-led elicitation shift the LLM-respondent validity boundary?** The standing tension's core question remains untested.
6. **Provider-neutral voice:** technically feasible (Azure STT, Chirp 3 EU, self-hosted Whisper, OpenAI EU), unimplemented in the seed platform; whether it becomes a maintained feature is open.
7. **Google PAYGO guarantee:** whether pay-as-you-go EU-endpoint inference is *guaranteed* in-region — official docs unresolved.
8. **Participant-facing AI-consent in mainstream journals:** not found; norms vary (Dialogica requires disclosure; Druk exempts transcription).
9. **SSRN parity:** human-browser check needed (21 Nov 2024 vs 7 Feb 2026).
10. **Origin of the 466 figure and the 142% vs 148% word-count discrepancy:** unreconciled.

## Recommended Next Steps

1. Watch the REStud advance-article page; on publication, diff the tables against the Feb 2026 author PDF (lab numbers, samples, coding figures).
2. Attempt a replication or registered-reanalysis of POQ 2026's polarization finding in an AI-led-interview platform.
3. Run a homogenization analysis (SMR 2025 method) on an AI-led-interview transcript corpus; report lexical/response diversity vs human-interviewer controls.
4. Pair fixed-survey vs AI-interview randomization with Bisbee-style item-level LLM-vs-human comparison to attack the boundary question.
5. For EU-pinned studies: standardize on Microsoft Foundry Regional/EU Data Zone or Google EU multi-region endpoint (text input only, or swap the transcription call); adopt AAPOR requirement + Rutgers/UKentucky wording; document Wits-style case-by-case IRB notification.

## Sources

Primary URL list (full per-claim mapping in `outputs/.drafts/open-questions-ai-led-interviews-research-T{1,2,3,4}.md`):

**Seed paper & versions:** https://ssrn.com/abstract=4974382 · https://cepr.org/publications/dp19705 · https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 · https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf · https://conference.nber.org/conf_papers/f221279.pdf · https://events.bse.eu/live/files/5703-geieckejaravel2024pdf · https://researchonline.lse.ac.uk/id/eprint/140596/ · https://www.xavierjaravel.com/papers · https://sites.google.com/view/friedrichgeiecke/research

**Bias & validation (T2):** https://doi.org/10.1093/poq/nfag063 · https://aclanthology.org/2025.latechclfl-1.17/ · https://arxiv.org/abs/2310.13548 · https://arxiv.org/abs/2408.04681 · https://arxiv.org/abs/2509.12517 · https://doi.org/10.18653/v1/2025.findings-emnlp.1222 · https://doi.org/10.18653/v1/2025.findings-emnlp.121 · https://doi.org/10.1126/science.aec8352 · https://doi.org/10.18653/v1/2025.findings-emnlp.607 · https://cepr.org/publications/dp21505 · https://doi.org/10.1177/00491241251327130 · https://doi.org/10.1177/00491241251330582 · https://doi.org/10.18653/v1/2025.ijcnlp-short.22 · https://doi.org/10.1145/3635636.3656204 · https://doi.org/10.1145/3706598.3713564 · https://doi.org/10.1017/pan.2023.2 · https://doi.org/10.1017/pan.2024.5 · https://doi.org/10.1073/pnas.2518075122 · https://doi.org/10.31235/osf.io/ykxwj · https://www.pnas.org/doi/10.1073/pnas.2537420123 · https://arxiv.org/html/2605.10659 · https://arxiv.org/html/2608.14606 · https://pubmed.ncbi.nlm.nih.gov/39691446/ · https://arxiv.org/abs/2507.07188 · https://doi.org/10.31235/osf.io/eubj4 · https://doi.org/10.1177/25152459261461505 · https://doi.org/10.1177/00491241251337316 · https://www.ifo.de/en/publications/2026/working-paper/conducting-qualitative-interviews-ai · https://doi.org/10.1257/jel.20251780

**Analysis pipeline (T3):** https://doi.org/10.2307/2529310 · https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001189 · https://link.springer.com/article/10.1007/s40670-025-02587-2 · https://arxiv.org/abs/2508.14764 · https://link.springer.com/article/10.1186/s12911-025-02961-5 · https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1512537/full · https://link.springer.com/article/10.1007/s44217-025-00868-x · https://doi.org/10.1177/16094069261462093 · https://arxiv.org/abs/2507.14384 · https://link.springer.com/article/10.1186/s12874-026-02913-1 · https://aclanthology.org/2025.acl-long.782/ · https://aclanthology.org/2025.findings-naacl.361/ · https://arxiv.org/abs/2607.28890 · https://arxiv.org/abs/2512.20352 · https://arxiv.org/abs/2605.07422 · https://arxiv.org/abs/2503.23243 · https://www.nature.com/articles/s41599-025-05834-4 · https://github.com/PovertyAction/llm-quali-coding

**Governance (T4):** https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency · https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/locations · https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/cmek · https://ai.google.dev/gemini-api/terms · https://developers.openai.com/api/docs/guides/your-data · https://openai.com/index/introducing-data-residency-in-europe/ · https://help.openai.com/en/articles/10503543-data-residency-for-the-openai-api · https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types · https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy · https://legal.microsoft.com/en-us/privacy/eudb/eu-data-boundary-transfers-for-optional-capabilities · https://platform.claude.com/docs/en/manage-claude/data-residency · https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/config.py · https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/interview.py · https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/full_voice_interview.py · https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf · https://aapor.org/standards-and-ethics/ · https://aiethicslab.rutgers.edu/ai-in-human-subjects-research-rutgers-consent-guide/ · https://research.uky.edu/office-research-integrity/ai-machine-learning-human-research/sample-ic-language-ai-use · https://research.mcmaster.ca/home/support-for-researchers/research-resources/digital-research-commons-pilot-drcp/transcription/informed-consent/ · https://www.wits.ac.za/media/wits-university/research/medicalhrec/documents/sop-focus-group-discussions.pdf · https://doi.org/10.1177/15562646241296712 · https://www.hhs.gov/ohrp/sachrp-committee/recommendations/irb-considerations-use-artificial-intelligence-human-subjects-research/index.html · https://dialogica-journal.com/index.php/journal/policy-on-the-use-of-generative-ai-and-ai-assisted-tools · https://github.com/linxule/openinterviewer · https://github.com/opieeipo/Synap · https://arxiv.org/html/2606.20588 · https://outset.ai/resources/faq

## Limitations

- **PDF policy:** no full-text PDF parsing was performed (per workflow). All author/institution PDFs of the seed paper (Feb 2026, Oct 2024, NBER, BSE, POID, SSRN Delivery) are `blocked` for full read; some text surfaced via search-included content and is flagged accordingly.
- **AAPOR exact wording** corroborated via provider-indexed content only; word-level verification needs a PDF pass.
- **alphaXiv (`alpha_search`) unavailable to subagents** (not logged in); equivalent coverage via Crossref/OpenAlex/arXiv/PubMed/OSF APIs.
- **Citation-graph scoping:** "no homogenization analysis exists" is scoped to the 10 OpenAlex-indexed citing works; Google Scholar may index more.
- **Current-state claims (provider docs, repo state) are time-stamped 2026-08-22** and can change.
- All research-agent runs were flagged FAILED by the subagent runtime on a child tool-allowlist issue (hf_* tools); complete reports were produced and recovered from the artifact directory — treated as PASS WITH NOTES.