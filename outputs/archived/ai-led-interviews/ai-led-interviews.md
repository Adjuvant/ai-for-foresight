---
type: research-brief
slug: ai-led-interviews
status: verified
scan_mode: literesearch
seed: outputs/friedrichgeiecke-interviews-summary.md (friedrichgeiecke/interviews, SSRN 4974382)
intent: explore-domain
verification_mode: medium
focus: mixed
date: 2026-08-22
tags:
  - ai-led-interviews
  - llm-interviewers
  - qualitative-methods
  - survey-methodology
  - data-residency
  - research-ethics
---

# AI-Led Interviews in Research Studies: Robustness Evidence, Analysis Method, Jurisdiction/Consent, and the Broader Field

## Scan Setup
- Seed: summary of `friedrichgeiecke/interviews` ("Conversations at Scale: Robust AI-led Interviews", Geiecke & Jaravel, SSRN 4974382)
- Intent: explore-domain; focus mixed (three follow-up questions first, then compact landscape)
- Verification mode: medium — claims tagged **[cross-checked]** (2+ independent sources), **[single-source]**, or **[unverified]**
- Method: 3 parallel researcher scans (paper/versions; domain map; provider/ethics docs) + direct fetch of repo files (`analysis/README.md`, `tutorial-online-interviews.md`, `config.py`, `README.md`) from raw.githubusercontent.com

## Summary

The seed paper is real, well-anchored, and stronger than the README alone suggests: *Conversations at Scale: Robust AI-led Interviews with a Simple Open-Source Platform* (Geiecke & Jaravel, LSE) exists as SSRN 4974382 (DOI 10.2139/ssrn.4974382), CEPR DP19705 (Nov 2024), LSE POID WP120 (June 2025), and a 7 Feb 2026 author-site revision reportedly accepted at *Review of Economic Studies* 2026 (author-reported). Its "robustness" claim rests on expert blind-grading of AI interview transcripts, a new LSE Behavioural Lab human-vs-AI comparison (in which AI voice interviews outperformed the human benchmarks tested), respondent-based quality metrics, and a validated LLM transcript-coding pipeline reaching ~86% of human-human inter-coder consistency. The SSRN page itself was Cloudflare-blocked; all paper claims here were verified from CEPR/POID/author-hosted full texts instead.

The repo's `analysis/` folder implements a **two-step LLM pipeline — hypothesis generation, then labelling** (paper §2.3), not classic open coding or thematic analysis. For jurisdictional data pinning, **Azure AI Foundry regional deployment** is the compatible configuration (per-model deployment, in-geography processing); OpenAI EU residency exists but is gated behind sales approval; Anthropic and the Gemini API currently cannot pin processing/storage to the EU. The repo itself recommends only generic consent language (flag third-party AI processing); AAPOR 2026 guidance and Rutgers' consent template supply the operational wording.

The surrounding field (2023–2026) splits into AI interviewers as **data collectors from real humans** (the seed's strand) vs. **synthetic respondents** (silicon sampling), plus a fast-growing LLM-assisted qualitative-analysis literature. Open problems: sycophancy, false-memory induction, response homogenization, and the near-absence of peer-reviewed validation studies of AI interviewers at scale.

---

## Q1. Robustness evidence in SSRN 4974382

**Access status:** the SSRN page (https://ssrn.com/abstract=4974382) is Cloudflare-gated and was **not directly read** [cross-checked via DOI resolution through OpenAlex and mirrors]. All content below was read from author/institution-hosted versions: CEPR DP19705 [2], EconPapers mirror [12], LSE POID WP120 page + PDF (June 2025) [3][4], and the 7 Feb 2026 author-site PDF [5]. No arXiv or NBER version exists [cross-checked: arXiv API query + OpenAlex locations]. Whether the current SSRN posting matches the Feb 2026 author version is **[unverified]** (likely, since the repo BibTeX cites year 2026).

**Versions located** [all cross-checked]:
- SSRN abstract 4974382 — exists, content blocked — https://ssrn.com/abstract=4974382
- CEPR Discussion Paper DP19705 (22 Nov 2024) — abstract read — https://cepr.org/publications/dp19705
- LSE POID Working Paper 120 (5 June 2025) + PDF — https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 ; https://poid.lse.ac.uk/textonly/publications/downloads/poidwp120.pdf
- Author-site PDF, 7 Feb 2026 (latest found) — https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf
- Accepted at *Review of Economic Studies* 2026 — **[single-source]** (Jaravel homepage [6]; CEPR/POID list it only as a working paper)

**What "robust" means in the paper (evidence read directly from [4] and [5]):**

1. **Expert evaluation vs. hypothetical human experts** [cross-checked across both versions]. Trained sociologists (two PhD-student graders per transcript) blind-graded 20 AI-led interview transcripts across four topic classes on a 1–5 scale (3 = average human expert). Grades cluster at ~3 ("comparable to an average human expert"); no transcript got a 5, one got a 1. Inter-grader correlation 0.42 (0.62 excluding an outlier).
2. **Comparison to actual human experts** (new in the 2026 version) — **[single-source]** [5]. LSE Behavioural Lab study (mid-2025), four modalities, blind-graded by eight sociology PhD students. Against the online-text-chat benchmark: **AI voice 3.93 > human face-to-face 3.51 > AI text 2.98 > human online text 2.42**; against the face-to-face benchmark: human FTF 3.53 ≈ AI voice 3.50 > AI text 2.70. AI interviews showed slightly lower grade variability than human ones.
3. **Respondent-based quality metrics** [cross-checked]: preference for AI over human interviewer; preference vs plain open-text survey fields; randomized open-text comparison arm; respondent confidence; word counts (142% more words than open-text fields in the meaning-in-life application). "High performance ratings" claimed across all four application classes (decision-making factors, political views, subjective mental states, and — new in 2026 — mental models of public-policy effects).
4. **Scale/replicability demonstrations** [cross-checked]: "thousands of interviews within hours" on a single-agent, low-latency architecture; US representative Prolific samples; a French-language deployment one week before the 2024 French legislative election (422 interviews in the 2025 version, 384 in the 2026 version — an unexplained cross-version discrepancy).
5. **Authors' own caveat** [5]: benchmarks are against text-chat/30-minute settings, not full in-depth expert interviews; "the AI-led interviews never match the best human experts"; positioned as a complement for large-scale measurement, hypothesis generation, and mechanism discovery.

**Verdict:** the robustness claim is genuinely evidence-backed but the strongest evidence (the LSE Behavioural Lab human-vs-AI comparison) is currently **single-source** — it appears only in the Feb 2026 author-hosted PDF [5]. Independent replication is not yet in the record; REStud acceptance would move it toward peer review.

## Q2. The `analysis/` toolkit's method

Verified directly from `analysis/README.md` fetched from raw.githubusercontent.com [8] — **primary source, read in full**:

- The notebooks implement a **two-step approach: (1) hypothesis generation** (`01-hypothesis-generation.ipynb`) **and (2) labelling** (`02-labelling.ipynb`), discussed in **Section 2.3 of the paper**. This is *not* textbook open coding or thematic analysis — it is an LLM pipeline that first generates hypotheses/codes from transcripts, then applies labels at scale, provider-agnostic (OpenAI/Anthropic/Google/Azure keys accepted; Azure requires per-model AI Foundry deployment).
- **Agreement vs. human coders** (from the paper versions, not the README):
  - Feb 2026 version [5] — **[single-source]**: two RAs labeled 57 transcripts; mean LLM-RA correlation **0.655** vs RA-RA **0.76** → LLM achieves **86%** of human-human labeler consistency; GPT-5 vs RAs 0.73; Claude 3.5 Sonnet vs GPT-4o cross-model coding correlation **0.83**; "percent agreement and Cohen's kappa… similarly high."
  - June 2025 version [4] — **[single-source]**: "close to (84% of)" human-human correlation; in the French-election application, perfect LLM-RA agreement on vote-party labels, mean 0.68 across 13 vote-reason codes (range 0.44–1).
- The `tutorial-online-interviews.md` [9] covers only hosting/survey integration (Azure Web App + GitHub Actions + Qualtrics login linking), not analysis; it confirms transcripts are stored as `.txt` on the cloud instance itself (no database) and that researchers must ensure the study's data-security/privacy requirements are met.

## Q3. Jurisdiction-compatible provider configuration and consent

**Repo-side facts (primary, read directly from [7][10]):**
- `config.py` supports `API = "openai" | "anthropic" | "google" | "azure"`; Azure requires deploying each model via Azure AI Foundry and using the Azure Inference API endpoint — this is the configuration that pairs with region pinning, and also exposes proprietary + open-weight models. `full_voice_interview.py` is OpenAI-only.
- **Jurisdiction leak to note:** voice-input transcription always uses the OpenAI API regardless of the configured provider (`MODEL_TRANSCRIPTION = "whisper-1"`, with a comment that other STT APIs "could be integrated") [10]. A study pinning data to a jurisdiction must either avoid voice input or swap the transcription call.
- **Consent:** the README [7] gives no template, only the requirement: review providers' terms/privacy/retention policies before the study, obtain IRB/ethics approvals, comply with data-protection law, and "flag to respondents as part of consent forms that their interview data will be sent to third-party AI providers for computing interview responses and for analysing transcripts."

**Provider configuration matrix (official docs, read during this run):**

| Provider | Jurisdiction pinning compatible? | Key facts | Confidence |
|---|---|---|---|
| **Azure (via AI Foundry)** | **Yes — strongest option** | Regional (non-Global, non-DataZone) deployments process prompts/responses **within the customer-specified geography**; data at rest in designated geography; EU Data Boundary commitments; EEA-located human reviewers for EEA resources; no training on customer data [31][32] | cross-checked (2 MS docs) |
| **OpenAI API** | Partially, EU only, approval-gated | No training on API data (since 2023-03-01); default ≤30-day abuse-monitoring retention; ZDR/MAM available on approval; `eu.api.openai.com` gives EU storage **and** processing but **requires** approval of abuse-monitoring controls; UK/CA/JP/AU etc. are storage-only, processing still US-possible [33][34] | cross-checked (docs + terms) |
| **Anthropic API** | US pinning only | No training on customer content (Commercial Terms, June 2025); prompts/outputs not retained by default; `inference_geo:"us"` pins inference per-request; workspace storage-at-rest geo **US-only**; flagged content may be kept up to 2 years [35][36] | cross-checked (2 Anthropic docs) |
| **Google Gemini API** | No | Paid tier: no training, but logs "may be stored transiently or cached in **any country**" — no processing pin; a jurisdiction-pinned Google path would be Vertex AI (not verified this run) [37] | single-source (binding legal terms) |

**Ethics/consent guidance for the third-party-AI disclosure the README requires:**
- **AAPOR Task Force, *Responsible AI Integration in Survey Research* (May 2026)** [38]: AI disclosure should be a standard part of informed consent; **AI-assisted interviewing and external data retention warrant a distinct, clearly labeled consent item with opt-out where feasible**; warns specifically about third-party platforms "that may retain or further train on personal data." Cross-checked against the AAPOR 2026 Code of Ethics.
- **Rutgers HRPP AI Consent Guide (Jan 2026)** [39]: downloadable consent-language template covering AI-as-tool uses (transcription, analysis); requires third-party vendor risk assessment. Single-source (institutional).
- **Samuel & Wassenaar (2025, JERHRE)** [40]: editorial position — inform participants when AI processes recordings and obtain explicit consent; disclose cloud/third-party transfer. Cross-checked via SAGE + PMC.
- **SACHRP/OHRP (Oct 2022)** [41]: federal advisory guidance that current consent elements are ill-suited to AI risks — context for IRB conversations, not interviewer-specific.

**Practical answer:** for an EU-pinned study, use `API = "azure"` with a regional EU deployment (avoid Global/DataZone deployment types) and restrict to text input (or replace the OpenAI transcription call); OpenAI's EU endpoint is the fallback if the study can obtain approval for retention controls. Consent should name the provider and jurisdiction, the retention window, the no-training status of API data, and include an opt-out — per AAPOR's tiered guidance [38] with Rutgers' template [39] as wording.

---

## Domain Map

Compact landscape; full 39-entry evidence table with per-lead confidence tags in `outputs/.research/ai-led-interviews-d3-d4.md`.

**AI interviewers of real humans (the seed's strand)**
- Wuttke et al., "AI Conversational Interviewing: Transforming Surveys with LLMs as Adaptive Interviewers" (2025) — https://doi.org/10.18653/v1/2025.latechclfl-1.17 — the closest peer-adjacent survey-methodology line [cross-checked: cited by the seed paper + independent record]
- Chopra & Haaland, "Conducting Qualitative Interviews with AI" — https://doi.org/10.65864/ch6grwpore — multi-agent LLM interviews; closest cited prior work [cross-checked]
- Tirumala et al., "Mic Drop or Data Flop? … Fitness for Purpose of AI Voice Interviewers" (2025) — https://arxiv.org/abs/2509.01814 — position paper directly on when voice AI interviewers are fit for purpose [single-source]
- Carmon et al., "Capturing Inner Experience At Scale: An AI Interviewer…" (2026) — https://arxiv.org/abs/2607.20310 — AI depth interviewing co-developed with the founder of DES [single-source]
- MimiTalk dual-agent qualitative interviewing (2025) — https://arxiv.org/abs/2511.03731 ; SparkMe adaptive semi-structured interviewing, Stanford NLP (2026) — https://arxiv.org/abs/2602.21136 ; AURA RL-based adaptive surveys (2025) — https://arxiv.org/abs/2510.27126 [single-source each]
- Seminal predecessor: Xiao et al. 2019 chatbot conversational surveys — https://arxiv.org/abs/1905.10700 [cross-checked]

**Synthetic respondents (distinct validation debate)**
- Argyle et al., "Out of One, Many" (Political Analysis 2023) — https://doi.org/10.1017/pan.2023.2 — the silicon-sampling origin [cross-checked]
- Bisbee et al., "Synthetic Replacements for Human Survey Data?" — https://doi.org/10.31235/osf.io/5ecfa — the prominent critique (fails on social-desirability items) [cross-checked]
- Westwood (PNAS 2025) on LLMs as an existential threat to online surveys — https://doi.org/10.1073/pnas.2518075122 [cross-checked]

**LLM-assisted qualitative analysis (the seed's `analysis/` strand)**
- De Paoli (SSCR 2023), LLM inductive thematic analysis + limits — https://doi.org/10.1177/08944393231220483 [cross-checked]
- Mathis et al. (CMPB 2024), open-source LLMs vs traditional TA head-to-head — https://doi.org/10.1016/j.cmpb.2024.108356 [cross-checked]
- Dai et al., LLM-in-the-loop thematic analysis — https://arxiv.org/abs/2310.15100 ; QualiGPT coding tool — https://arxiv.org/abs/2310.07061 [single-source each]

**Known risks / open problems**
- Sycophancy: Sharma et al. — https://arxiv.org/abs/2310.13548 [cross-checked]
- False-memory induction by LLM interviewers (Loftus group): Chan et al. — https://arxiv.org/abs/2408.04681 [single-source]
- Ideation homogenization: Anderson et al. (CHI 2024) — https://arxiv.org/abs/2402.01536 [single-source]

**Tools/platforms**
- Commercial AI-moderated interviewing: Outset — https://www.outset.ai ; synthetic respondents: Synthetic Users — https://www.syntheticusers.com ; analysis incumbents: Dovetail — https://dovetail.com , Looppanel — https://looppanel.com
- Open-source peers: OpenInterviewer (MIT, BYOS models) — https://github.com/linxule/openinterviewer ; QualiGPT (MIT) — https://github.com/KindOPSTAR/QualiGPT ; J-PAL llm-quali-coding tutorial (MIT) — https://github.com/PovertyAction/llm-quali-coding ; DeTAILS (GPL-3.0) — https://github.com/DaemonOnCode/DeTAILS ; OASIS platform (non-standard license — check before reuse) — https://github.com/oasis-surveys/oasis-platform

**Pattern note (inference from the cluster):** the literature is converging on AI interviewers as *data collectors from real humans* (scale/efficiency arguments, the seed paper) vs. AI as *simulated participants* (validity arguments, the silicon-sampling debate) — with different validation standards for each. The seed paper is currently the most rigorous entrant in the first strand, but most first-strand work remains preprint; the peer-reviewed canon sits mostly in the synthetic-respondent and analysis strands.

## Open Questions

1. **Replication of the LSE Behavioural Lab result** — the AI-voice-beats-human-benchmark finding is single-source (author PDF). Watch for the REStud published version and independent replications.
2. **Sycophancy inside research interviews** — no peer-reviewed measurement of interviewer-induced agreement bias in AI-led research interviews was found; closest anchors are Sharma et al. and Chan et al.
3. **SSRN text parity** — whether the current SSRN 4974382 posting equals the Feb 2026 author version is unverified (Cloudflare block).
4. **Non-commercial licence friction** — PolyForm NC 1.0.0 blocks commercial market-research use of the seed platform; commercial users need Outset-class tools or a license.
5. **Vertex AI** as the Google residency path was flagged but not verified this run.
6. **Cross-version sample-size discrepancies** (French election 422 vs 384; US sample 466 vs 462 between paper versions) — worth checking against the published version.

## Sources

1. Conversations at Scale: Robust AI-led Interviews… — SSRN abstract page (Cloudflare-blocked; existence verified via mirrors) — https://ssrn.com/abstract=4974382
2. CEPR Discussion Paper DP19705 — https://cepr.org/publications/dp19705
3. LSE POID Working Paper No. 120 (page) — https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599
4. POID WP120 PDF (June 2025) — https://poid.lse.ac.uk/textonly/publications/downloads/poidwp120.pdf
5. Author-site PDF, 7 Feb 2026 — https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf
6. Xavier Jaravel — papers page — https://www.xavierjaravel.com/papers
7. friedrichgeiecke/interviews README — https://github.com/friedrichgeiecke/interviews (raw: https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/README.md)
8. analysis/README.md (transcript-analysis method) — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/analysis/README.md
9. tutorial-online-interviews.md (hosting/survey integration) — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/tutorial-online-interviews.md
10. config.py (provider configuration, transcription model) — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/config.py
11. OpenAlex record W4403417545 (DOI 10.2139/ssrn.4974382) — https://openalex.org/W4403417545
12. EconPapers mirror of CEPR DP19705 — https://econpapers.repec.org/RePEc:cpr:ceprdp:19705
13. Chopra & Haaland — Conducting Qualitative Interviews with AI — https://doi.org/10.65864/ch6grwpore
14. Wuttke et al. — AI Conversational Interviewing — https://doi.org/10.18653/v1/2025.latechclfl-1.17
15. Xiao et al. — Tell Me About Yourself (chatbot surveys) — https://arxiv.org/abs/1905.10700
16. Tirumala et al. — Mic Drop or Data Flop? — https://arxiv.org/abs/2509.01814
17. Carmon et al. — Capturing Inner Experience At Scale — https://arxiv.org/abs/2607.20310
18. Liu & Yu — MimiTalk — https://arxiv.org/abs/2511.03731
19. Anugraha, Padmakumar & Yang — SparkMe — https://arxiv.org/abs/2602.21136
20. Tang & Shang — AURA — https://arxiv.org/abs/2510.27126
21. Argyle et al. — Out of One, Many — https://doi.org/10.1017/pan.2023.2
22. Bisbee et al. — Synthetic Replacements for Human Survey Data? — https://doi.org/10.31235/osf.io/5ecfa
23. Westwood — LLMs' threat to online survey research (PNAS) — https://doi.org/10.1073/pnas.2518075122
24. De Paoli — LLM inductive thematic analysis (SSCR) — https://doi.org/10.1177/08944393231220483
25. Mathis et al. — open-source LLMs vs traditional thematic analysis (CMPB) — https://doi.org/10.1016/j.cmpb.2024.108356
26. Dai et al. — LLM-in-the-loop thematic analysis — https://arxiv.org/abs/2310.15100
27. Zhang et al. — QualiGPT — https://arxiv.org/abs/2310.07061
28. Sharma et al. — Towards Understanding Sycophancy in Language Models — https://arxiv.org/abs/2310.13548
29. Chan et al. — Conversational AI Amplifies False Memories in Witness Interviews — https://arxiv.org/abs/2408.04681
30. Anderson, Shah & Kreminski — Homogenization Effects of LLMs — https://arxiv.org/abs/2402.01536
31. Microsoft Learn — Data, privacy, and security for Foundry Models sold by Azure — https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy
32. Microsoft Learn — What is the EU Data Boundary? — https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn
33. OpenAI — Data controls in the OpenAI platform — https://platform.openai.com/docs/guides/your-data
34. OpenAI — Terms of Use — https://openai.com/policies/terms-of-use/
35. Anthropic — Data residency — https://platform.claude.com/docs/en/manage-claude/data-residency
36. Anthropic — API and data retention — https://platform.claude.com/docs/en/manage-claude/api-and-data-retention
37. Google — Gemini API / AI Studio Additional Terms of Service — https://ai.google.dev/gemini-api/terms
38. AAPOR Task Force — Responsible AI Integration in Survey Research (May 2026) — https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf
39. Rutgers HRPP — AI guidance + AI Consent Guide — https://research.rutgers.edu/faculty-staff/compliance/human-research-protection/hrpp-guidance-topics
40. Samuel & Wassenaar (2025) — Informed Consent and AI Transcription (JERHRE) — https://journals.sagepub.com/doi/10.1177/15562646241296712
41. HHS OHRP SACHRP — IRB Considerations on the Use of AI in Human Subjects Research — https://www.hhs.gov/ohrp/sachrp-committee/recommendations/irb-considerations-use-artificial-intelligence-human-subjects-research/index.html
42. Outset — AI-moderated research platform — https://www.outset.ai
43. OpenInterviewer (open-source AI interview platform) — https://github.com/linxule/openinterviewer
44. QualiGPT repo — https://github.com/KindOPSTAR/QualiGPT
45. J-PAL PovertyAction — llm-quali-coding tutorial — https://github.com/PovertyAction/llm-quali-coding
