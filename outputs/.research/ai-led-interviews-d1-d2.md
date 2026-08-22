# Conversations at Scale: Robust AI-led Interviews — Geiecke & Jaravel (SSRN 4974382)

Verification level: medium. Every claim below is tagged **[cross-checked]** (2+ independent sources), **[single-source]**, or **[unverified]**. SSRN itself is Cloudflare-gated (see §1).

## 0. Bibliographic core

- Title (SSRN/DOI): *Conversations at Scale: Robust AI-led Interviews with a Simple Open-Source Platform* — **[cross-checked]** (OpenAlex record for DOI 10.2139/ssrn.4974382 [9]; CEPR DP19705 [3]; EconPapers [4]; POID WP120 [5])
- DOI: 10.2139/ssrn.4974382 — **[cross-checked]** [9][3]
- Authors: Friedrich Geiecke (LSE), Xavier Jaravel (LSE & CEPR) — **[cross-checked]** [3][6][8]
- Publication status: **Accepted, Review of Economic Studies, 2026** — **[single-source]** (Jaravel's homepage [7]; not independently confirmed elsewhere; CEPR/POID pages list it only as a discussion/working paper)

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | SSRN abstract page (Cloudflare-blocked) | https://ssrn.com/abstract=4974382 | Paper exists on SSRN; abstract not retrievable directly (see §1) | primary | high (existence) / n.a. (contents) |
| 2 | GitHub companion repo (README read in full) | https://github.com/friedrichgeiecke/interviews | Open-source interview platform + LLM transcript-analysis notebooks; SSRN 4974382 is the companion paper; cites BibTeX year 2026 | primary | high |
| 3 | CEPR Discussion Paper DP19705 | https://cepr.org/publications/dp19705 | Full abstract; published 22 Nov 2024 | primary | high |
| 4 | EconPapers (RePEc:cpr:ceprdp:19705) | https://econpapers.repec.org/RePEc:cpr:ceprdp:19705 | Abstract verbatim; date 2024-11 | secondary (mirror) | high |
| 5 | LSE POID working paper page (WP120, 5 June 2025) | https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 | Abstract; "POID Working Paper No. 120", 5 June 2025 | primary | high |
| 6 | POID WP120 PDF (read: abstract, intro, evaluation & coding sections) | https://poid.lse.ac.uk/textonly/publications/downloads/poidwp120.pdf | June-2025 version; robustness evidence detailed in §2 below | primary | high |
| 7 | Xavier Jaravel homepage — papers page | https://www.xavierjaravel.com/papers | Lists paper as accepted at REStud 2026 | primary (self-reported) | medium-high |
| 8 | Latest paper PDF on Jaravel's site, dated 7 Feb 2026 (read: abstract, intro, evaluation & coding sections) | https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf | Revised abstract; voice interviews; LSE Behavioural Lab human-vs-AI comparison; new "mental models" application | primary | high |
| 9 | OpenAlex work record W4403417545 | https://openalex.org/W4403417545 | DOI 10.2139/ssrn.4974382; year 2024; type preprint; 10 citations | secondary (index) | high |
| 10 | OpenAlex author record for Friedrich Geiecke | https://openalex.org/A5017461386 | Prior works list (RL treatment allocation, geometry of innovation, bubbles test, ML thesis) | secondary (index) | medium-high |
| 11 | Chopra & Haaland, "Conducting Qualitative Interviews with AI" | https://doi.org/10.65864/ch6grwpore | Closest related prior work (multi-agent LLM interviews; cited in the paper) | primary (related work) | high |
| 12 | Wuttke et al., "AI Conversational Interviewing" (2025) | https://doi.org/10.18653/v1/2025.latechclfl-1.17 | Adjacent literature on LLM adaptive interviewers | primary (related work) | high |

## 1. SSRN page & abstract (Question 1)

**SSRN access status: BLOCKED.** Direct fetch of https://ssrn.com/abstract=4974382 (and papers.ssrn.com equivalent, and SSRN's API host) returns a Cloudflare "Just a moment…" challenge; the abstract could not be read verbatim from SSRN. **The SSRN page was NOT directly read.** — **[cross-checked]** (blocked on www.ssrn.com, papers.ssrn.com, api.ssrn.com, and via jina.ai proxy)

**Workaround:** the paper's abstract is published verbatim on CEPR and LSE pages. The two abstracts below are verbatim as read:

**Nov 2024 / CEPR DP19705 + June 2025 / POID WP120 abstract (identical text) [3][4][5][6]:**

> "The advent of large language models (LLMs) provides an opportunity to conduct qualitative interviews at a large scale, with thousands of respondents, creating a bridge between qualitative and quantitative methods. In this paper, we develop a simple, versatile open-source platform for researchers to run AI-led qualitative interviews. Our approach incorporates established best practices from the sociology literature, uses only a single LLM agent with low latency, and can be adapted to new interview topics almost instantaneously. We assess its robustness by drawing comparisons to human experts and using several respondents-based quality metrics. Its versatility is illustrated through four broad classes of applications: eliciting key factors in decision making, political views, views of the external world, and subjective mental states. High performance ratings are obtained in all of these domains. The platform is easy to use and deploy: we provide detailed explanations and code for researchers to swiftly set up and test their own AI-led interviews. In addition, we develop, validate, and share a simple LLM-based pipeline for textual analysis and coding of large volumes of interview transcripts."

**Feb 7, 2026 version abstract (Jaravel homepage PDF) [8] — revised; likely closest to the current SSRN posting (inference, since the repo BibTeX cites year 2026 [2]):**

> "The advent of large language models (LLMs) creates new opportunities to conduct qualitative interviews at scale and at low cost, with thousands of respondents, thereby bridging qualitative and quantitative methods. We develop a simple, versatile approach for researchers to run AI-led qualitative interviews, including voice interviews. We assess its robustness by drawing comparisons to human experts and with several respondents-based quality metrics. The versatility of the approach is illustrated through four broad classes of applications: eliciting key factors in decision making, political views, subjective mental states, and mental models of the effects of public policies. High performance ratings are obtained in all of these domains. Our applications highlight the potential of AI-led interviews as a tool for measurement, hypothesis generation, and discovering mechanisms."

New in the 2026 revision: voice interviews added; "views of the external world" application replaced/extended by "mental models of the effects of public policies"; framing shifted toward measurement/hypothesis generation/mechanisms. — **[cross-checked]** (read directly from [6] and [8])

## 2. Robustness / validation evidence reported in the paper

All items read directly from the PDFs [6] (June 2025) and/or [8] (Feb 2026):

1. **Expert evaluation vs hypothetical human experts.** Trained sociologists produced **40 evaluations of 20 AI-led interview transcripts** (each transcript blind-graded by two sociology PhD students) across seven prompts in four topic classes. Grading scale 1=worst / 3=average / 5=best human expert. Result: AI interviews "deemed by the experts to be comparable to an average human expert (subject to the same constraints)" — grades cluster at ~3; **no transcript received a 5; one received a 1**. Inter-grader correlation on the same transcript: 0.42 full sample, 0.62 excluding an outlier; regression coefficient across graders 0.55 (0.69 excluding outlier). — **[cross-checked]** (present in both [6] and [8])
2. **Comparison to *actual* human experts (new in 2026 version).** LSE Behavioural Lab study (June–July 2025), four modalities: face-to-face human, online text-chat human, AI text, AI voice. Eight sociology PhD students (Cambridge/Harvard/JHU/LSE/Oxford) blind-graded transcripts. Against the online-text-chat benchmark: **AI voice 3.93 > human face-to-face 3.51 > AI text 2.98 > human online text 2.42**. Against the face-to-face benchmark: human FTF 3.53 ≈ AI voice 3.50 > AI text 2.70 > human online text 1.99. AI voice model: gpt-4o-audio-preview-2025-06-03. AI-led interviews showed slightly lower grade variability (avg coeff. of variation 0.341 vs 0.409 for humans). — **[single-source]** (only in [8]; June 2025 version [6] contains only the hypothetical-expert comparison)
3. **Respondent-based quality metrics** (both versions): preference for AI vs human interviewer in future; preference vs plain open-text survey fields; respondent rating of how well interview captured their views (randomized open-text-field comparison arm); confidence in responses and "learned from the interview"; word counts; and sociologists rating depth of transcripts vs open-text responses. Claimed: "excellent results" on all topics; in the meaning-in-life application, **142% more words written than open text fields** [6]. — **[cross-checked]** ([6] and [8])
4. **Validation of the AI transcript-coding pipeline (LLM vs human coders).**
   - 2026 version [8]: two research assistants manually labeled 57 randomly selected transcripts (meaning-in-life activities). Average correlation LLM-vs-RA = **0.655** vs RA-vs-RA = **0.76** → LLM achieves **86%** of human-human labeler consistency. GPT-5 vs RAs: 0.73. Claude 3.5 Sonnet vs GPT-4o (cross-model replicability): **0.83**. "Alternative metrics for inter-coder agreement, such as percent agreement and Cohen's kappa, are similarly high." — **[single-source]** (only [8])
   - June 2025 version [6]: "correlation between the LLM and human labelers is close to (84% of) the correlation between different human labelers"; in the French-election application, LLM-vs-research-assistant correlation was **perfect for vote-party labels** and averaged **0.68 across 13 reasons** (range 0.44–1). — **[single-source]** (only [6])
5. **Prompt/model/input-mode sensitivity checks.** Aug 2025 follow-up with ~100 respondents randomized to baseline vs enhanced prompt [8]; evaluations across text/voice inputs, multiple prompts and LLMs [8]; footnote in both versions that results are robust to alternative prompts.
6. **Scale / replicability claims.** "Thousands of interviews within hours" with a single-LLM-agent architecture and low latency [6][8]; deployment demonstrated in a second language (French) **one week before the 2024 French legislative election** — 422 interviews [6] / 384 interviews [8] (note the discrepancy between versions; the 2026 revision reports 384, and the US meaning-in-life sample shifts 466 [6] → 462 [8]). Data collected via Prolific (representative US sample, Aug 2024) [6][8].
7. **Scope caveat the authors themselves state:** evaluations benchmark against text-chat/30-minute settings, not full-fledged in-person expert interviews; "the AI-led interviews never match the best human experts" [8]; AI interviews positioned as a complement for large-scale settings [8].

Cross-model/cross-version note (inference): the LLM used for interviews in the evaluated transcripts is GPT-4o (baseline), with GPT-5 and Claude 3.5 Sonnet used for coding replicability checks.

## 3. Versions & artifacts located (Question 2)

| Artifact | URL | Date/version | Status |
|---|---|---|---|
| SSRN abstract 4974382 | https://ssrn.com/abstract=4974382 | DOI 10.2139/ssrn.4974382 (OpenAlex year: 2024) | exists; **content blocked** by Cloudflare — **[cross-checked]** (DOI resolves per [9]) |
| CEPR Discussion Paper DP19705 | https://cepr.org/publications/dp19705 | 22 Nov 2024 | read (abstract) |
| EconPapers mirror | https://econpapers.repec.org/RePEc:cpr:ceprdp:19705 | 2024-11 | read |
| LSE POID Working Paper WP120 page | https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 | 5 June 2025 | read |
| POID WP120 PDF | https://poid.lse.ac.uk/textonly/publications/downloads/poidwp120.pdf | June 2025 | read in part (abstract, intro, §2 evaluations, coding validation, applications) |
| Author-site PDF (latest) | https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf | **7 Feb 2026** | read in part (abstract, intro, §2 evaluations incl. LSE Behavioural Lab study, coding validation, applications) |
| GitHub companion repo | https://github.com/friedrichgeiecke/interviews | live | README read in full |
| Colab quick-test notebook | https://colab.research.google.com/drive/1sYl2BMiZACrOMlyASuT-bghCwS5FxHSZ | linked from repo/paper | existence verified via [2][6] only — **[single-source]** |
| Video tutorials playlist | https://www.youtube.com/playlist?list=PLEKqeUuYDSq-O1niu2Kqm0FGa0mMgYRx7 | linked from repo | **[single-source]** |
| OpenAlex record | https://openalex.org/W4403417545 | 2024 (SSRN DOI) | read; 10 citations |
| arXiv preprint | — | — | **none found** (arXiv API query for title and for author "Geiecke" returned zero results) — **[cross-checked]** (arXiv API + OpenAlex locations list only the SSRN DOI) |
| NBER working paper | — | — | **not found**; OpenAlex lists only the SSRN preprint; the Feb 2026 acknowledgments mention presenting at NBER Summer Institute, but no NBER WP number located — **[unverified/likely none]** |
| Secondary coverage | — | — | no press/blog coverage located; web search engines (DDG, Bing, Mojeek) were blocked or returned junk during this session, so coverage cannot be ruled out — **[unverified]** |

Selected citing works (from OpenAlex [9], 10 total as of retrieval): "Understanding Economic Behavior Using Open-Ended Survey Data" (JEL, 2025, doi:10.1257/jel.20251780); "Simulating Subjects: The Promise and Peril of AI Stand-Ins…" (Sociological Methods & Research, 2025, doi:10.1177/00491241251337316); "Automating the qualitative interview? Using Gen AI chatbots in social science research" (2026, doi:10.1177/20597991261448157); "AI Interviews the Interviewers…" (ACM, 2026, doi:10.1145/3816046.3816218).

## 4. Prior / related work by these authors (Question 3)

- **No earlier Geiecke & Jaravel paper on AI/LLM interviews found.** *Conversations at Scale* appears to be their first joint output on this topic. — **[cross-checked]** (OpenAlex author record for Geiecke [10] lists only this 2024 work with Jaravel; repo [2] links only this paper)
- Geiecke's prior works (per OpenAlex [10]): "Dynamically Optimal Treatment Allocation" (reinforcement learning, with Adusumilli & Schilter, ~2019); "A Geometry of Innovation" (with Bussy, 2020); "A Direct Test of Rational Bubbles" (with Trede, 2010); PhD thesis "Essays in Economics and Machine Learning" (2019). Machine-learning background, but no prior LLM-interviewing paper. — **[single-source]** (OpenAlex only)
- Related work by others (cited in the paper [6][8], independently verified to exist): **Chopra & Haaland, "Conducting Qualitative Interviews with AI"** (multi-agent LLM interviews; stock-market participation application; doi:10.65864/ch6grwpore) [11]; **Wuttke, Aßenmacher, Klamm, Lang, Würschinger & Kreuter, "AI Conversational Interviewing: Transforming Surveys with LLMs as Adaptive Interviewers"** (2025) [12]; **Duraj, He, Le Mens & Kovács** human-expert interviews on stock market participation (cited in [6][8]; not independently located this session — **[single-source]**).

## 5. Separation of verification tiers

- **(a) Verified directly from SSRN/author/official pages:** existence of SSRN record & DOI [via OpenAlex [9], not SSRN itself]; full abstracts from CEPR [3], EconPapers [4], POID [5][6]; latest Feb 2026 abstract from author-site PDF [8]; repo contents [2]; REStud acceptance claim [7 — author self-report, single-source]; robustness evidence in §2 items 1, 3 (cross-checked across two paper versions).
- **(b) Single-source claims:** LSE Behavioural Lab human-vs-AI comparison results (only in [8]); 86%/0.655/0.76 LLM-coder agreement figures (only in [8]); 84%/0.68 coding figures (only in [6]); 142% word-count increase ([6], though [8] repeats the metric framework); Feb-2026-version sample sizes; Geiecke's prior-works list (OpenAlex only).
- **(c) Unverifiable / blocked:** SSRN abstract page contents (Cloudflare); the SSRN version's date, page count, and whether its abstract matches the Feb 2026 author-site version (inferred likely, not verified); existence of secondary press/blog coverage (search engines blocked this session); any VoxEU column (Cloudflare-blocked; none found); NBER version (none found).

## Coverage Status

**Checked directly:** SSRN page (blocked), SSRN API (blocked), GitHub repo README (full), CEPR DP19705 page, EconPapers record, LSE POID page + full June 2025 PDF (evaluation & coding sections), Jaravel homepage + Feb 2026 PDF (evaluation & coding sections), OpenAlex (work + author + citations), arXiv API (no preprint), Chopra & Haaland and Wuttke et al. DOIs.

**Remaining uncertainties:** exact text/date of the current SSRN abstract (blocked); whether the SSRN posting is identical to the Feb 2026 author-site version; any press coverage, slides, or conference pages (search engines were blocked/rate-limited during this session); REStud acceptance is author-reported only.

**Not completed:** Semantic Scholar verification (persistent HTTP 429); DDG/Bing/Mojeek general web search (blocked/anomaly pages); VoxEU column check (Cloudflare).
