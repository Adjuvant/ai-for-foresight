# Researcher C — Thread 3 Findings: Analysis-Pipeline Consistency (LLM Coding Agreement)

**Run:** deep research `open-questions-ai-led-interviews` (T3)
**Date:** 2026-08-22
**Brief:** `outputs/.plans/open-questions-ai-led-interviews-T3.md`
**Method:** paper-first via Crossref / OpenAlex / arXiv metadata + web_search; **no PDFs fetched** (per brief). PDF-only claims are tagged `[blocked — PDF only]` and inherited from the prior vault scan (`fnl-aii/Research/Computational Social Science/ai-led-interviews.md`), which read the PDFs directly in Aug 2026.
**Claim tags:** `[verified from source URL]` = read/fetched this run; `[single-source]` = one independent source; `[unverified]` = could not confirm; `[blocked — PDF only]` = full text not fetched this run.

---

## Answer per question

### Q1. Canonical figure — is there a REStud published version, and does it resolve 86% vs 84%?

**Short answer: the paper is now institutionally confirmed as *In Press* at the Review of Economic Studies (accepted 2026, deposited 13 Aug 2026), but no published/issue version with accessible full text exists as of this run, so the 86-vs-84 tension is UNRESOLVED at the published-version level. The 86% figure stands as the number in the latest accessible full text (7 Feb 2026 author version).**

Evidence gathered this run:

- **LSE Research Online record 140596** — "Jaravel, X. (2026). Conversations at scale: robust AI-led interviews. *Review of Economic Studies*, [In Press]". Item type: Article; Departments: LSE Economics; **Date deposited 13 August 2026; Acceptance date 2026**. URI https://researchonline.lse.ac.uk/id/eprint/140596. No DOI, no issue/volume, no abstract, no file links on the record page. **[verified from source URL]** [1]
- The OpenAlex record for this deposit (W7203563320, 2026, "article", version `acceptedVersion`, LSE repository source, harvested via ORCID) corroborates the LSE deposit; its landing-page URL is a malformed ORCID string, so the canonical URL is the LSE record itself. **[verified from metadata]** [4][1]
- Author self-report pages: Jaravel's site ("Accepted Review of Economic Studies, 2026") [2] and Geiecke's Google Sites page ("Accepted, Review of Economic Studies") [3] — both **[single-source, self-reported]**, now upgraded to institutional corroboration by [1].
- A vendor blog (qualz.ai) describes the paper as "peer-reviewed validation ... accepted at the Review of Economic Studies" — low-value secondary, consistent with [1]. [37]
- **No Oxford Academic (academic.oup.com/restud) article page, no REStud DOI, and no issue metadata were found** via web search as of 2026-08-22 — **[verified absence via search]** (web_search query "Jaravel 'Conversations at scale' Review of Economic Studies Oxford academic oup article published 2026").
- OpenAlex still lists the SSRN preprint (W4403417545, 2024, DOI 10.2139/ssrn.4974382) alongside the 2026 LSE deposit [5][4].

**The 86-vs-84 numbers:** Neither figure is restated in any metadata/abstract source found this run — both live in the full-text PDFs, which this run did not fetch (per brief).

- Feb 2026 author PDF (latest accessible full text): LLM-RA correlation 0.655 vs RA-RA 0.76 → "86% of human-human"; GPT-5 vs RAs 0.73; Claude 3.5 Sonnet vs GPT-4o cross-model 0.83; "percent agreement and Cohen's kappa similarly high". **[blocked — PDF only for this run; numbers read directly in prior vault scan, single-source per version]** [8][6]
- June 2025 LSE POID WP120: "close to (84% of)" human-human correlation; French-election vote-party labels perfect agreement; mean 0.68 across 13 vote-reason codes (range 0.44–1). **[blocked — PDF only; prior vault scan]** [7][6]
- Since the REStud in-press full text is not accessible, whether the published version reports 86 or 84 (or both, e.g., per-application numbers) **cannot be verified**. The tension is thus **unresolved as of the latest accessible version (7 Feb 2026 author PDF, which reports 86%)**. **[verified — status of the tension]** [6][8]

*Coordination note for T1:* LSE Research Online 140596 + OpenAlex W7203563320 + author pages [1][2][3][4] are the shared, verifiable publication-status sources; T3 found no REStud/OUP page.

---

### Q2. Acceptance standard — what do other studies use as the "acceptable" bar for LLM-assisted coding agreement?

**Landscape (thresholds literature, all confirmed):**

- **Landis & Koch (1977, Biometrics 33(1), DOI 10.2307/2529310)** — the canonical benchmark: κ < 0.00 poor; 0.00–0.20 slight; 0.21–0.40 fair; 0.41–0.60 moderate; **0.61–0.80 substantial; 0.81–1.00 almost perfect**. DOI verified via Crossref this run [23]. The value banding is quoted identically in at least three independent 2025 studies read this run: Hila & Hauser [22], the physics-IRR paper [17], and the Med Sci Educ ChatGPT-thematic-analysis paper [16] — **[verified from source URL]** (thresholds cross-checked).
- **Krippendorff's α**: ≥ 0.800 reliable; 0.667–0.800 "tentative conclusions"; < 0.667 insufficient [22] **[single-source, quoted in Hila & Hauser]**.
- **Neuendorf rule of thumb** (as quoted in Med Sci Educ): agreement > 90% "acceptable by all"; > 0.80 "acceptable by many" [16] **[single-source]**.
- **McHugh** banding (κ 0.81–1.00 almost perfect, 0.61–0.80 substantial …), quoted in [17] **[single-source]**.
- Crucially, **there is no single universally accepted cutoff**: the Med Sci Educ paper explicitly notes "there is no standard accepted level of agreement for intercoder reliability" and calls Landis–Koch values "arbitrary" [16]; a 2026 scoping review of LLM-in-qualitative-research reports LLM–human agreement ranging **36–99%** across studies and warns against treating **80% as a validated universal cutoff** — it appears as a study-specific result, not a methodological standard [24].

**The five briefed sources, status:**

| Source | What it reports | Status this run |
|---|---|---|
| De Paoli, SSCR 2023 (10.1177/08944393231220483) | Inductive TA with GPT-3.5-Turbo; **no numeric reliability coefficients**; validity argued qualitatively ("model can infer most of the main themes"; "good degree of validity"); 219 citations | abstract **[verified from source URL]** [9] |
| Mathis et al., CMPB 2024 (10.1016/j.cmpb.2024.108356) | 70B open LLM vs human TA on psychiatric interviews; **Jaccard similarity 0.44–0.69 = "moderate to substantial"** — i.e., the acceptance bar is expressed as similarity to human themes, not kappa | abstract **[verified from source URL]** [10] |
| Dai et al., arXiv 2310.15100 (EMNLP Findings 2023) | LLM-in-the-loop TA with in-context learning; "yields **similar coding quality to that of human coders** but reduces labour/time" — no numeric threshold in abstract | abstract **[verified from source URL]** [11] |
| QualiGPT, arXiv 2310.07061 | GPT-based coding tool "verified" by comparing against manual coding on simulated and actual datasets; abstract reports no coefficients | abstract **[verified from source URL]** [12] |
| J-PAL llm-quali-coding (github.com/PovertyAction/llm-quali-coding) | **Training materials only**; teaches theme extraction, direct coding, inductive clustering; contains **no agreement benchmarks or acceptance thresholds** (README read this run) | README **[verified from source URL]** [13] |

**New 2025–2026 studies comparing LLM coding agreement to human baselines (all URL-verified this run):**

1. **PLOS Digital Health (2026-04-03; DOI 10.1371/journal.pdig.0001189; medRxiv preprint 10.64898/2025.12.25.25343031)** — blinded mixed-methods comparison, ChatGPT-5 + Claude 4 Sonnet + QualiGPT vs two blinded human analysts on a healthcare focus-group transcript, adjudicated by expert consensus (also run vs 2 humans, 6,200 binary data points): **LLM mean agreement 93.5% vs humans 92.7%; Cohen's κ = 0.34 for both** (attenuated by low code prevalence 7.8%); **Gwet's AC1 0.93 (LLM) vs 0.92 (human)**; only ChatGPT-5 reached formal **non-inferiority** in the inductive task; strict hallucination 1.2%, comprehensive error rate 12.4%. Conclusion: use as adjunct, not replacement; κ misleading at low prevalence — the explicit remedy is Gwet's AC1 + non-inferiority testing with pre-specified margins. [14][15] — highest-methodological-quality new study found.
2. **Medical Science Educator (2025-12-04; 10.1007/s40670-025-02587-2)** — ChatGPT vs manual graders on medical-student free text: agreement 81.7–83.9%, Cohen's κ 0.43–0.50 (moderate); authors argue "agreement above 80% … can be viewed as a strong level of agreement" per Neuendorf/Landis–Koch; human inter-observer benchmark here was >90%. [16]
3. **Physics Education Research Conference 2025 (10.1119/perc.2025.pr.Borse; arXiv 2508.14764)** — GPT-4o & GPT-4.5-preview vs two coders-to-consensus on 14 audio transcripts: after prompt/hyperparameter optimization, **κ > 0.6 (substantial) for 3 of 4 themes** (best κ = 0.70), κ = 0.55 moderate for metacognitive thinking; optimization gained ~0.14 κ. [17]
4. **BMC Medical Informatics & Decision Making (2025-03-10; 10.1186/s12911-025-02961-5)** — nine generative models vs manual expert coding of 448 leishmaniasis-scar responses: external consistency vs reference **ChatGPT o1-Pro 0.79, Claude 3.5 Sonnet 0.78, Llama 3.1 0.78** vs manual 0.74 (improved to 0.82 in a second pass); multiple models hit Jaccard = 1.00 on 24 sub-themes. [18]
5. **Frontiers in Public Health (2025-02-19; 10.3389/fpubh.2025.1512537)** — Llama-3 server-installed vs researchers deductively coding 38 psychosocial-autopsy interviews: **accuracy 0.84, Cohen's κ = 0.68 (substantial)**; recommends collaborative model (LLM deductive coding + researcher review); flags hallucination and unsolicited elaboration. [19]
6. **Discover Education (2026-02-04; 10.1007/s44217-025-00868-x)** — GPT-3.5/4/4o vs human coders on science-teacher Facebook posts: **GPT-4o reached human-coder-level inter-coder reliability** (Krippendorff α humans 0.76–0.93 vs LLMs 0.73–0.91), "around the traditional threshold of 0.80"; older GPT-3.5 slightly below human-human. [20]
7. **International Journal of Qualitative Methods (2026-01-19; 10.1177/16094069261462093)** — Claude Code (agentic) vs human thematic analysis of e-commerce interviews: code-level F1 55.9–87.6% (structured prompts 83.1% avg vs 59.2% general); **theme-level alignment 90.9–100%**; inter-session theme consistency 86.1%. [21]
8. **Hila & Hauser, ASIS&T Proceedings 2025 (10.1002/pra2.1255; arXiv 2507.14384)** — ChatGPT deductive coding vs Comparative Agendas Project human-coded labels (21 policy domains): best intervention (Step-by-Step Task Decomposition) reached **accuracy 0.775, κ = 0.744, α = 0.746 — i.e., "substantial agreement" thresholds (Landis–Koch / Krippendorff)**, judged sufficient for integration into rigorous workflows. [22]
9. **Than, Fan, Law, Nelson & McCall, SMR 2025 (10.1177/00491241251339188)** — "Updating The Future of Coding": generative LLMs (GPT-4, Gemma 2, Llama variants) approach the accuracy of earlier supervised ML on a hand-coded corpus of 1,253 US news-magazine articles; LLMs positioned as augmenting, not replacing, human coding. [25]
10. **Scoping review, BMC Medical Research Methodology (2026-06-16; 10.1186/s12874-026-02913-1)** — LLM–human agreement across the qualitative literature ranges **36–99%**, task-dependent; ~75% of studies omit model parameters; authors call for a "COREQ + LLM" reporting extension rather than a single agreement benchmark. [24]

**Pattern (inference from the above):** across the 2025–26 studies, the de facto working bars are (a) **LLM agreement ≥ human-human agreement** ("match the human baseline") — explicitly used by Discover Education [20] and argued in PLOS Digital Health [14]; or (b) **chance-corrected agreement ≥ "substantial" (κ/α ≥ 0.6–0.8)** per Landis–Koch/Krippendorff [17][22][19]; or (c) **percent agreement ≥ 80%** with Neuendorf-style justification [16]. The seed paper's **"X% of human-human" ratio** (86/84%) is a rarer framing — only one new study found this run (Discover Education's "slightly below human-human" framing [20]) uses the same baseline-ratio logic. The seed's RA-RA baseline of 0.76 sits mid-"substantial" and is consistent with the human-baseline levels reported elsewhere (humans 0.76–0.93 α in [20]; κ 0.34–0.93 depending on metric and prevalence in [14]).

---

### Q3. Cross-model stability — new evidence on agreement across LLM models for labelling tasks

**Anchor:** Claude 3.5 Sonnet vs GPT-4o cross-model coding correlation **0.83** in the seed pipeline (Feb 2026 version) **[blocked — PDF only this run; inherited from vault scan]** [8][6].

New evidence (all URL-verified this run), grouped:

- **Model-model agreement ≥ human-human in several tasks:**
  - Lindahl, ***SEM 2025 (10.18653/v1/2025.starsem-1.19)** — GPT-4o vs Claude as argumentation annotators (Swedish): "agreement between models is higher than human agreement" for argumentation scheme and span annotation; model-model α 0.43 vs human-human 0.39 (spans). [28]
  - Fænø/… MSR 2025 "Can LLMs Replace Manual Annotation of SE Artifacts?" — mean model-model Krippendorff α 0.66–0.82 for top-3 LLMs (GPT-4, Gemini, Claude) across tasks; **model-model agreement strongly correlates with human-model agreement** (r≈0.65, p<0.05), proposed as a programmatic proxy check. [29][PDF blocked; findings read from web page/snippets]
  - Blind-expert-verification study (arXiv 2607.28890): among five LLMs, **pairwise LLM-LLM Jaccard 0.37–0.68 ≈ human-human 0.52**, and notably higher than human-LLM 0.30 — i.e., models "share interpretive tendencies that differ from human patterns"; intra-model exact-match 71.1–99.2% (κ 0.871–0.995) exceeds the human-human baseline. [30]
- **Cross-model consistency on the same qualitative data:**
  - Multi-LLM Thematic Analysis (arXiv 2512.20352): Gemini 2.5 Pro, GPT-4o, Claude 3.5 Sonnet on one interview transcript — intra-model κ 0.907/0.853/0.842 (all > 0.80, Landis–Koch "almost perfect"); **cross-model theme overlap 60–70%**, ~0.88 semantic similarity for a shared theme; framework built explicitly for cross-model validation. [31]
  - Rollins honors thesis: Claude 3 vs Gemini cross-model κ = 0.62 (up from 0.50 for Claude 2 vs Bing) — undergraduate source, low weight but directionally consistent. [36]
  - BMC nine-model study: multiple model dyads reached perfect thematic agreement (Jaccard 1.00 on all 24 sub-themes, e.g., ChatGPT o1-Pro, o1, Grok V2, DeepSeek V3); external-consistency kappas clustered tightly 0.78–0.79 across best models vs 0.74 manual. [18]
- **Caveats — model-model agreement is not always high, and is not validity:**
  - Same MSR 2025 study: on a causality-detection task model-model α dropped to 0.39 and static-analysis warning to 0.12, where human-model agreement was also poor — high model-model agreement is informative only when the task is annotatable [29].
  - Argumentation "attitude" task: model-model agreement lower (α 0.25) than human-model combinations (0.35) [28].
  - Psychological-safety coding (arXiv 2605.07422): three LLMs, ten runs each — intra-model stability SD 0.017–0.038; Gemini 2.5 Flash's single-run κ spanned 0.363–0.468 (crossing the Fair–Moderate boundary), so one run per model is not a stable estimate; systematic label bias (over-prediction of "Sharing Negative Feedback" up to 5.25×) was **shared across all three models** — a concrete example of models agreeing with each other *and being wrong the same way*. [32]
  - Label/explanation variation (ACL 2026 long): LLM ensembles can resemble human label distributions but "exhibit striking idiosyncrasies not observed in humans" on difficult items (e.g., llama-3.1-8b failing to classify a single item as false); models are not drop-in replacements where authentic human judgment variation matters. [35]
  - Party-cue experiment (HSSC 2025, nature.com/articles/s41599-025-05834-4): LLM coding of political statements showed **low human-LLM agreement (Krippendorff α 0.43–0.56)** and cue-conditioned divergence (ChatGPT-4o α 0.68 with center-left cue vs 0.37 with far-right cue), with OpenAI models more cue-sensitive than humans — directly relevant to the seed's political vote-reason coding application. [34][Crossref metadata unavailable; URL HTTP 200 verified — **[single-source, web]**]
  - Brown et al. (arXiv 2503.23243): across 3 LLMs / 4 datasets, different models "tend to be biased in the same directions" within a dataset — bias is task-driven, not model-choice-driven; **item difficulty (label entropy) is the strongest predictor of LLM-human agreement**, not model identity. [33]

**Assessment (inference):** the seed's 0.83 anchor is not an outlier — model-model agreement at or above human-human agreement on labelling tasks is now a repeated finding across argumentation [28], SE annotation [29], and qualitative coding [30][31]; but the newer literature consistently adds the caveat that **model-model agreement is a consistency property, not a correctness property**, and can be high while human-model agreement is low [29][32][33].

---

### Q4. Methodological commentary — published critiques of correlation-with-human-coders as the yardstick for LLM coding quality

Direct critiques found (all URL-verified):

1. **"Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not Ground Truth" (arXiv 2607.28890, Jul 2026)** — the most on-point critique. Five LLMs + three trained humans code 2,560 educator-AI messages on a 72-item codebook. Results: human-LLM Jaccard 0.30 vs human-human 0.52 (standard practice would read as "inferior LLM coding"), **yet a source-blind expert verifier preferred human and LLM coding at indistinguishable rates (51.5% vs 48.5%, p = 0.537)**; a Bradley-Terry ranking placed two LLMs above two of three human coders; for several substantive codes human consensus encoded "shared conservative bias" that the verifier rejected in favor of the LLM. Conclusion: **agreement with human coders is an inadequate measure of LLM coding quality — it fails in both directions**; remedy proposed = source-blind expert verification alongside agreement metrics. [30]
2. **Parfenova, Marfurt, Pfeffer & Denzler, NAACL Findings 2025 (10.18653/v1/2025.findings-naacl.361)** — human-coder yardstick is partly *self-referential*: "While human annotations may sometimes differ from the golden standard, they are often rated more favorably by other humans. In contrast, some LLMs demonstrate closer alignment with the true labels but receive lower evaluations from experts." Also documents a task-difficulty dichotomy (humans better on complex sentences, LLMs on simple ones). [27]
3. **The Alternative Annotator Test ("alt-test"), ACL 2025 (10.18653/v1/2025.acl-long.782)** — systematic critique of traditional measures in the LLM-as-annotator literature: IAA kappas and accuracy "can only evaluate whether an LLM matches human performance (i.e., is bounded by it)", have no decision criteria ("is an F1 score of 0.6 sufficient?"), and overlook individual-level variation. Proposes a statistical procedure: compare the LLM against ≥ 3 human annotators on 50–100 examples, with an interpretable "average advantage probability" measure. [26]
4. **PLOS Digital Health (2026)** — concrete metric critique: Cohen's κ is misleadingly attenuated at low code prevalence (κ = 0.34 despite 93% raw agreement); remedy = Gwet's AC1 + F1 + Jaccard + **formal non-inferiority testing against pre-specified margins** rather than eyeballing comparative kappas; also blind human analysts to reduce reflexivity/expectancy bias. [14]
5. **Hila & Hauser (2025)** — "benchmark ceiling" framing: κ/α ~0.74 achieved "substantial agreement thresholds … approaching the performance of a trained human coder"; residual disagreements attributed to the inherent ambiguity of the human-coded scheme — i.e., **the scheme itself is the noise floor**, echoing the seed's own admission that RA-RA correlation of 0.76 bounds what LLM coding can exceed. [22]
6. **Multi-run stability critiques**: arXiv 2508.14764 [17] and arXiv 2605.07422 [32] both argue single-run agreement reporting is "methodologically insufficient" — variance across runs (up to 0.105 κ span) can flip the Fair/Moderate interpretation; repeated runs should be a reporting minimum. Direto relevance to the seed's single run of Claude-vs-GPT-4o (0.83). [17][32]
7. **Scoping review (BMC Med Res Methodol 2026)** — at the field level: agreement numbers are incomparable across studies (36–99%) because of heterogeneous metrics and missing reporting (75% omit parameters); asks for a COREQ+LLM reporting standard, not a single threshold. [24]
8. **ACL 2026 label-variation paper** — cautionary methodological note that LLM annotations can exhibit artificial consensus / skewed label distributions ("either" answer 95%+ for some models) that would inflate naive agreement comparisons. [35]

**Bottom line (inference):** the seed's yardstick — "LLM-RA correlation ÷ RA-RA correlation" — is exactly the kind of human-bounded comparison that Q4's literature now criticizes: (i) the human baseline itself is noisy (the field's own human-human agreement ranges from κ 0.34 to 0.93 depending on metric and task [14][20]), (ii) agreement-with-humans and expert-judged quality diverge in both directions [30], and (iii) single-run correlations are unstable [17][32]. The seed's own caveat ("the benchmark is the bottleneck") is independently reinforced by [29][33] (task difficulty, not model, drives LLM-human agreement).

---

## Acceptance-standards landscape (synthesis)

| Bar | Value | Used by | Landis–Koch label (κ) |
|---|---|---|---|
| Human-human baseline parity | LLM agreement ≥ human-human agreement | Discover Education [20] (GPT-4o matched humans); PLOS [14] (93.5% vs 92.7%) | n/a |
| Landis & Koch [23] | κ 0.61–0.80 / 0.81–1.00 | Med Sci Educ [16], Hila & Hauser [22], physics IRR [17], psychosocial autopsy [19] | substantial / almost perfect |
| Krippendorff α | ≥ 0.800 reliable; 0.667–0.800 tentative | Hila & Hauser [22] | — |
| Percent agreement | > 80% acceptable by many; > 90% by all (Neuendorf) | Med Sci Educ [16] | — |
| Gwet's AC1 / non-inferiority | high AC1 (0.92–0.93) + pre-specified margin | PLOS Digital Health [14] | — |
| "% of human-human" ratio | 86% (Feb 2026) / 84% (Jun 2025) | **seed paper only** [6][8][7] | — |

**Key message:** no single universal cutoff exists [16][24]; the field's dominant working bars are *match-the-human-baseline* and *substantial* (κ/α ≥ 0.6–0.8); the seed's percentage-of-human-human framing is uncommon and should be reported alongside raw correlations and (ideally) chance-corrected metrics.

## New sources found (2025–2026, not in the archive brief)

- PLOS Digital Health blind mixed-methods comparison — https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001189 (medRxiv: https://www.medrxiv.org/content/10.64898/2025.12.25.25343031v1)
- Med Sci Educ ChatGPT thematic analysis — https://link.springer.com/article/10.1007/s40670-025-02587-2
- PERC 2025 IRR LLM-vs-human raters — https://doi.org/10.1119/perc.2025.pr.Borse ; arXiv https://arxiv.org/abs/2508.14764
- BMC Med Inform Decis Mak nine-model comparison — https://link.springer.com/article/10.1186/s12911-025-02961-5 (PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC11895178/)
- Frontiers Public Health psychosocial-autopsy LLM coding — https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1512537/full
- Discover Education LLM-complement coding — https://link.springer.com/article/10.1007/s44217-025-00868-x
- Int J Qualitative Methods Claude Code alignment — https://doi.org/10.1177/16094069261462093
- Hila & Hauser ASIS&T 2025 — https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.1255 ; arXiv https://arxiv.org/abs/2507.14384
- Than et al. SMR 2025 "Updating The Future of Coding" — https://doi.org/10.1177/00491241251339188
- BMC Med Res Methodol scoping review — https://link.springer.com/article/10.1186/s12874-026-02913-1 (PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC13270661/)
- alt-test ACL 2025 — https://aclanthology.org/2025.acl-long.782/
- Parfenova et al. NAACL Findings 2025 — https://aclanthology.org/2025.findings-naacl.361/
- Lindahl *SEM 2025 argumentation annotators — https://aclanthology.org/2025.starsem-1.19/
- MSR 2025 Can LLMs Replace Manual Annotation — https://software-lab.org/publications/msr2025_LLM-annotation.pdf
- Agreement Is Not Quality (arXiv 2607.28890) — https://arxiv.org/abs/2607.28890
- Multi-LLM Thematic Analysis (arXiv 2512.20352) — https://arxiv.org/abs/2512.20352
- Prompt engineering for psychological-safety coding (arXiv 2605.07422) — https://arxiv.org/abs/2605.07422
- Brown et al. contentious-topic annotations (arXiv 2503.23243) — https://arxiv.org/abs/2503.23243
- Party-cue LLM annotators HSSC 2025 — https://www.nature.com/articles/s41599-025-05834-4
- Label/explanation variation ACL 2026 — https://aclanthology.org/2026.acl-long.752/
- LSE Research Online 140596 (REStud In Press record) — https://researchonline.lse.ac.uk/id/eprint/140596/

---

## Coverage Status

**Checked directly this run:** REStud/published-version status via LSE Research Online record, OpenAlex, author pages, web search (no OUP page found); Crossref metadata + abstracts for De Paoli, Mathis, Dai, QualiGPT, PLOS, Med Sci Educ, BMC ×2, Frontiers, Discover Education, IJoQM, SMR, *SEM, NAACL, PERC, ASIS&T, Landis & Koch; arXiv abs pages for 8 papers (all exist); J-PAL GitHub README; POID WP120 abstract page.
**Marked blocked:** all full-text PDFs (Feb 2026 author PDF; POID WP120 PDF; MSR 2025 PDF; SAGE PDFs of De Paoli/IJoQM — DOI-verified only). The 86%/84% numbers, 0.655/0.76/0.73/0.83 anchors are inherited from the prior vault scan that read the PDFs (single-source per version) and remain `[blocked — PDF only]` for this run.
**Remaining uncertainty:** (1) which figure (86 vs 84) the REStud in-press version reports — unresolved until the accepted version is publicly posted; (2) T1 coordination: publication-status sources [1][2][3][4] are shared — T3 saw no REStud DOI; (3) the party-cue article (nature.com/s41599-025-05834-4) resolves at HTTP 200 but Crossref metadata failed — treated as single-source web; (4) QualiGPT/Dai articles have version histories not fully checked (v1 abstracts used).

## Queries run

1. alpha search "Conversations at Scale robust AI-led interviews Geiecke Jaravel" (failed — not logged into alphaXiv; noted, not a source gap)
2. OpenAlex works title.search "conversations at scale AI-led interviews" (2 hits; full record W7203563320 examined)
3. Crossref DOI lookups (17 DOIs, 15 resolved)
4. arXiv API id_list + title searches (2310.07061 OK; export endpoint flaky; abs-page verification for 8 IDs)
5. web_search ×6 (3 query-sets): REStud status; LLM thematic-analysis agreement 2025; cross-model agreement; 4 exact-title verifications; scoping review / Future of Coding / REStud OUP page
6. Retrieve: LSE Research Online 140596; arXiv 2310.15100 abs; raw.githubusercontent J-PAL README; arXiv abs pages ×8

## Sources accepted

[1]–[38] per Evidence table (all URL-verified); accepted with caveats flagged inline (self-reported author pages; vendor blog; undergraduate thesis; web-verified-only items).

## Sources rejected

- Any AI-synthesized pages with no primary backing (none used).
- qualz.ai blog [37]: kept only as corroborating secondary for REStud acceptance, explicitly low-weight.
- Saffron/Refolk hiring-blog hit and JMIR medical-education transcript-scoring article surfaced by searches: out of scope for T3 (interview *assessment* rather than transcript *coding*); not used.
- arXiv API "no-entry" responses treated as API failure, not rejection — all 8 candidate IDs subsequently verified real via abs pages.

---

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | LSE Research Online record 140596 | https://researchonline.lse.ac.uk/id/eprint/140596/ | "Jaravel, X. (2026). … Review of Economic Studies, [In Press]"; accepted 2026, deposited 13 Aug 2026 | primary (institutional repository) | high |
| 2 | Xavier Jaravel — papers page | https://www.xavierjaravel.com/papers | "Accepted Review of Economic Studies, 2026" | self-reported | medium |
| 3 | Friedrich Geiecke — Research (Google Sites) | https://sites.google.com/view/friedrichgeiecke/research | "Accepted, Review of Economic Studies" | self-reported | medium |
| 4 | OpenAlex W7203563320 | https://openalex.org/W7203563320 | 2026 LSE-repository record, version acceptedVersion | secondary (index) | high |
| 5 | OpenAlex W4403417545 | https://openalex.org/W4403417545 | SSRN DOI 10.2139/ssrn.4974382, 2024 | secondary (index) | high |
| 6 | Vault brief (prior scan) — ai-led-interviews.md | file: fnl-aii/Research/Computational Social Science/ai-led-interviews.md | 86% (Feb 2026) & 84% (Jun 2025) figures; 0.655/0.76/0.73/0.83 anchors read from PDFs | internal (previous direct PDF read) | medium |
| 7 | LSE POID WP120 page | https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 | June 2025 version exists; ~84% figure (full text PDF-blocked) | primary (version record) | medium |
| 8 | Feb 2026 author PDF | https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf | Latest full text; 86% figure (PDF-blocked this run) | primary (PDF) | medium |
| 9 | De Paoli, SSCR 2023 | https://doi.org/10.1177/08944393231220483 | GPT-3.5 inductive TA "viable"; no numeric coefficients | primary (abstract) | high |
| 10 | Mathis et al., CMPB 2024 | https://doi.org/10.1016/j.cmpb.2024.108356 | Jaccard 0.44–0.69, "moderate to substantial" | primary (abstract) | high |
| 11 | Dai et al., EMNLP Findings 2023 | https://arxiv.org/abs/2310.15100 | LLM-in-the-loop TA; "similar coding quality to human coders" | primary (abstract) | high |
| 12 | QualiGPT | https://arxiv.org/abs/2310.07061 | GPT coding tool; verified vs manual coding | primary (abstract) | high |
| 13 | J-PAL llm-quali-coding | https://github.com/PovertyAction/llm-quali-coding | Training materials; no benchmarks/thresholds | primary (README) | high |
| 14 | PLOS Digital Health 2026 | https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001189 | LLM 93.5% vs human 92.7% agreement; κ=0.34 both; AC1 0.92–0.93; one non-inferior LLM | primary (article + HTML) | high |
| 15 | medRxiv preprint of [14] | https://www.medrxiv.org/content/10.64898/2025.12.25.25343031v1 | Preprint of [14] | primary (preprint) | high |
| 16 | Med Sci Educ 2025 | https://link.springer.com/article/10.1007/s40670-025-02587-2 | Agreement 81.7–83.9%, κ 0.43–0.50; Neuendorf/Landis-Koch quotes | primary | medium |
| 17 | PERC 2025 / arXiv 2508.14764 | https://arxiv.org/abs/2508.14764 ; https://doi.org/10.1119/perc.2025.pr.Borse | κ>0.6 for 3/4 themes after optimization; κ 0.55 for MT; multi-run reporting needed | primary (HTML) | high |
| 18 | BMC Med Inform Decis Mak 2025 | https://link.springer.com/article/10.1186/s12911-025-02961-5 | 9 models: external κ 0.79/0.78/0.78 vs manual 0.74→0.82 | primary (HTML) | medium |
| 19 | Frontiers Public Health 2025 | https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1512537/full | Llama-3: accuracy 0.84, κ=0.68 substantial | primary (HTML) | high |
| 20 | Discover Education 2026 | https://link.springer.com/article/10.1007/s44217-025-00868-x | GPT-4o matched human ICC; α humans 0.76–0.93 vs LLMs 0.73–0.91 | primary (snippets) | medium |
| 21 | Int J Qualitative Methods 2026 | https://doi.org/10.1177/16094069261462093 | Claude Code: code F1 55.9–87.6%; theme 90.9–100% | primary (web page; PDF blocked) | medium |
| 22 | Hila & Hauser 2025 (ASIS&T / arXiv) | https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.1255 ; https://arxiv.org/abs/2507.14384 | κ=0.744, α=0.746 "substantial"; Landis-Koch/Krippendorff bars | primary (HTML) | high |
| 23 | Landis & Koch 1977 | https://doi.org/10.2307/2529310 | Canonical κ banding | primary (DOI verified; content via secondary quotes) | high |
| 24 | BMC Med Res Methodol scoping review 2026 | https://link.springer.com/article/10.1186/s12874-026-02913-1 | LLM-human agreement 36–99%; 80% not a universal cutoff; reporting gaps | primary (article) | high |
| 25 | Than et al., SMR 2025 | https://doi.org/10.1177/00491241251339188 | Generative LLMs approach earlier supervised-ML coding accuracy | primary (abstract) | medium |
| 26 | alt-test, ACL 2025 | https://aclanthology.org/2025.acl-long.782/ | Critique of human-bounded IAA metrics; statistical replacement test | primary (anthology page) | high |
| 27 | Parfenova et al., NAACL Findings 2025 | https://aclanthology.org/2025.findings-naacl.361/ | Humans rate human labels more favorably; LLM-truth alignment ≠ expert grades | primary (anthology page) | high |
| 28 | Lindahl, *SEM 2025 | https://aclanthology.org/2025.starsem-1.19/ | Model-model agreement > human agreement (scheme/span tasks) | primary (anthology page) | high |
| 29 | Fænø et al., MSR 2025 | https://software-lab.org/publications/msr2025_LLM-annotation.pdf | Model-model α 0.66–0.82; correlates with human-model agreement | primary (PDF blocked; snippets read) | medium |
| 30 | Liu et al., "Agreement Is Not Quality" (arXiv 2607.28890) | https://arxiv.org/abs/2607.28890 | Jaccard 0.30 vs 0.52 but no blind-expert preference (p=0.537) | primary (arXiv HTML) | high |
| 31 | Multi-LLM Thematic Analysis (arXiv 2512.20352) | https://arxiv.org/abs/2512.20352 | Intra-model κ 0.842–0.907; cross-model overlap 60–70% | primary (arXiv HTML) | medium |
| 32 | Psychological-safety coding (arXiv 2605.07422) | https://arxiv.org/abs/2605.07422 | Run-to-run κ spans 0.363–0.468; shared systematic label bias across models | primary (arXiv HTML) | high |
| 33 | Brown et al. (arXiv 2503.23243) | https://arxiv.org/abs/2503.23243 | Label entropy (item difficulty) is strongest predictor of LLM-human agreement | primary (arXiv abs) | medium |
| 34 | Party-cue LLM annotators (HSSC 2025) | https://www.nature.com/articles/s41599-025-05834-4 | Human-LLM α 0.43–0.56; cue-conditioned divergence | primary (web; Crossref metadata unavailable) | medium |
| 35 | Label & explanation variation (ACL 2026) | https://aclanthology.org/2026.acl-long.752/ | Model idiosyncrasies on hard items; artificial consensus risk | primary (anthology page) | medium |
| 36 | Rollins honors thesis | https://scholarship.rollins.edu/cgi/viewcontent.cgi?article=1236&context=honors | Claude 3 vs Gemini κ=0.62 cross-model | secondary (undergraduate) | low |
| 37 | qualz.ai vendor blog | https://qualz.ai/blog/ai-led-interviews-peer-reviewed-validation/ | REStud acceptance narrative | secondary (vendor) | low |
| 38 | CEPR DP19705 | https://cepr.org/publications/dp19705 | Nov 2024 working-paper version record | primary (abstract page) | high |

## Sources (numbered)

1. LSE Research Online — "Conversations at scale: robust AI-led interviews" record 140596 — https://researchonline.lse.ac.uk/id/eprint/140596/
2. Xavier Jaravel — Papers — https://www.xavierjaravel.com/papers
3. Friedrich Geiecke — Research — https://sites.google.com/view/friedrichgeiecke/research
4. OpenAlex W7203563320 — https://openalex.org/W7203563320
5. OpenAlex W4403417545 — https://openalex.org/W4403417545
6. Vault brief (file) — fnl-aii/Research/Computational Social Science/ai-led-interviews.md
7. LSE POID WP120 abstract page — https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599
8. Geiecke & Jaravel, 7 Feb 2026 author PDF — https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf
9. De Paoli, SSCR 2023 — https://doi.org/10.1177/08944393231220483
10. Mathis et al., CMPB 2024 — https://doi.org/10.1016/j.cmpb.2024.108356
11. Dai et al., arXiv 2310.15100 — https://arxiv.org/abs/2310.15100
12. QualiGPT, arXiv 2310.07061 — https://arxiv.org/abs/2310.07061
13. J-PAL PovertyAction llm-quali-coding — https://github.com/PovertyAction/llm-quali-coding
14. PLOS Digital Health 2026 — https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001189
15. medRxiv preprint — https://www.medrxiv.org/content/10.64898/2025.12.25.25343031v1
16. Medical Science Educator 2025 — https://link.springer.com/article/10.1007/s40670-025-02587-2
17. Borse et al., PERC 2025 — https://doi.org/10.1119/perc.2025.pr.Borse ; arXiv https://arxiv.org/abs/2508.14764
18. BMC Medical Informatics & Decision Making 2025 — https://link.springer.com/article/10.1186/s12911-025-02961-5
19. Frontiers in Public Health 2025 — https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1512537/full
20. Discover Education 2026 — https://link.springer.com/article/10.1007/s44217-025-00868-x
21. International Journal of Qualitative Methods 2026 — https://doi.org/10.1177/16094069261462093
22. Hila & Hauser, ASIS&T 2025 — https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/pra2.1255 ; arXiv https://arxiv.org/abs/2507.14384
23. Landis & Koch, Biometrics 1977 — https://doi.org/10.2307/2529310
24. BMC Medical Research Methodology scoping review 2026 — https://link.springer.com/article/10.1186/s12874-026-02913-1
25. Than et al., Sociological Methods & Research 2025 — https://doi.org/10.1177/00491241251339188
26. The Alternative Annotator Test, ACL 2025 — https://aclanthology.org/2025.acl-long.782/
27. Parfenova et al., NAACL Findings 2025 — https://aclanthology.org/2025.findings-naacl.361/
28. Lindahl, *SEM 2025 — https://aclanthology.org/2025.starsem-1.19/
29. Fænø et al., MSR 2025 — https://software-lab.org/publications/msr2025_LLM-annotation.pdf
30. Liu et al., arXiv 2607.28890 — https://arxiv.org/abs/2607.28890
31. Multi-LLM Thematic Analysis, arXiv 2512.20352 — https://arxiv.org/abs/2512.20352
32. Psychological-safety Coding, arXiv 2605.07422 — https://arxiv.org/abs/2605.07422
33. Brown et al., arXiv 2503.23243 — https://arxiv.org/abs/2503.23243
34. HSSC 2025 party-cue study — https://www.nature.com/articles/s41599-025-05834-4
35. ACL 2026 label/explanation variation — https://aclanthology.org/2026.acl-long.752/
36. Rollins honors thesis — https://scholarship.rollins.edu/cgi/viewcontent.cgi?article=1236&context=honors
37. qualz.ai blog — https://qualz.ai/blog/ai-led-interviews-peer-reviewed-validation/
38. CEPR DP19705 — https://cepr.org/publications/dp19705