# Domain map: AI-led / LLM-conducted interviews in research (2023–2026, plus seminal predecessors)

**Scope:** qualitative research, social science, survey methodology, market research, HCI.
**Method note:** all leads below were verified by direct API fetches (arXiv Atom API, OpenAlex, GitHub REST API) or direct HTTP fetch of the tool's website (title + HTTP status checked). Abstracts were read for most papers (quotes below paraphrase abstracts, not full texts — full-text claims are not asserted). "Verification" column: `cross-checked` = existence + role corroborated by ≥2 independent retrievals (e.g., arXiv + OpenAlex, or multiple papers addressing the same finding); `single-source` = verified to exist via one authoritative index but not corroborated elsewhere in this run; nothing here is `unverified`.
**Recency:** publication year given per entry. "Preprint" vs "peer-reviewed" flagged per venue metadata.

---

## Evidence table

### A. Methodological papers — LLM/conversational-agent interviewers

| # | Source | URL | Key claim / why it matters | Type | Recency | Peer-reviewed? | Verification |
|---|--------|-----|-----------|------|---------|----------------|--------------|
| 1 | Xiao et al., "Tell Me About Yourself: Using an AI-Powered Chatbot to Conduct Conversational Surveys with Open-ended Questions" | https://arxiv.org/abs/1905.10700 | Seminal predecessor (2019): chatbot asks open-ended survey questions, interprets free-text and probes — the template later LLM interviewers follow | paper (methodology) | 2019 | arXiv preprint (widely cited CHI-line work) | cross-checked (arXiv + OpenAlex) |
| 2 | Ge et al., "What should I Ask: A Knowledge-driven Approach for Follow-up Questions Generation in Conversational Surveys" | https://arxiv.org/abs/2205.10977 | Addresses the core interviewing skill — generating good follow-up/probe questions — in conversational surveys | paper (methodology) | 2022 | arXiv preprint | cross-checked (arXiv + OpenAlex) |
| 3 | Dengel et al., "Qualitative Research Methods for LLMs: Conducting Semi-Structured Interviews with ChatGPT and BARD on Computer Science Education" (Informatics 10(4):78) | https://doi.org/10.3390/informatics10040078 | Early peer-reviewed treatment of LLMs **as interviewees** (synthetic interview partners) in a qualitative methods frame | paper (methodology) | 2023 | yes — MDPI Informatics | cross-checked (OpenAlex + arXiv listing of same work) |
| 4 | Liu et al., "Understand User Opinions of LLMs via LLM-Powered In-the-Moment User Experience Interviews" (CLUE) | https://arxiv.org/abs/2502.15226 | LLM-powered interviewer that runs in-the-moment UX interviews right after LLM use and auto-aggregates insights — a working "AI interviewer for research" system | paper (system, HCI) | 2025 | arXiv preprint | single-source (arXiv metadata + abstract read) |
| 5 | Li & Cai, "Applying LLM-Powered Virtual Humans to Child Interviews in Child-Centered Design" | https://arxiv.org/abs/2504.20016 | LLM virtual-human interviewers for hard-to-interview populations (children) in design research | paper (system, HCI) | 2025 | arXiv preprint | single-source |
| 6 | Tirumala et al., "Mic Drop or Data Flop? Evaluating the Fitness for Purpose of AI Voice Interviewers for Data Collection within Quantitative & Qualitative Research Contexts" | https://arxiv.org/abs/2509.01814 | Position paper reviewing evidence on when voice-based AI interviewers are fit for purpose for survey/qualitative data collection — directly the survey-methodology question | paper (methodology/position) | 2025 | arXiv preprint | single-source |
| 7 | Carmon et al., "Capturing Inner Experience At Scale: An AI Interviewer Co-Developed with the Founder of a Landmark Phenomenological Method" | https://arxiv.org/abs/2607.20310 | AI interviewer co-designed with Russell Hurlburt for descriptive experience sampling — AI-led *depth* interviewing at scale rather than scripted surveys | paper (methodology) | 2026 | arXiv preprint | single-source |
| 8 | Liu & Yu, "MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI" | https://arxiv.org/abs/2511.03731 | Dual-agent (supervisor + conversational) architecture for scalable, "constitutional" AI-led qualitative data collection across three studies | paper (system) | 2025 | arXiv preprint | single-source |
| 9 | Anugraha, Padmakumar & Yang, "SparkMe: Adaptive Semi-Structured Interviewing for Qualitative Insight Discovery" | https://arxiv.org/abs/2602.21136 | Adaptive LLM semi-structured interviewing for product/policy insight at scale — from the Stanford NLP (Diyi Yang) group | paper (system) | 2026 | arXiv preprint | single-source |
| 10 | Tang & Shang, "AURA: A Reinforcement Learning Framework for AI-Driven Adaptive Conversational Surveys" | https://arxiv.org/abs/2510.27126 | RL-based adaptive question selection for AI-driven conversational surveys — moves beyond prompt-only interviewer design | paper (methodology) | 2025 | arXiv preprint | single-source |
| 11 | Kim E. et al., "LLM-as-an-Interviewer: Beyond Static Testing Through Dynamic LLM Evaluation" | https://arxiv.org/abs/2412.10424 | Inverts the framing: the LLM *interviews another LLM* with feedback and follow-ups — relevant interviewer-interaction design, though aimed at LLM evaluation not human subjects | paper (methodology, NLP eval) | 2024 | arXiv preprint | single-source |
| 12 | Sakib et al., "Expecting Too Much, Getting Too Little: Exploring the Challenges and Design Opportunities of Asynchronous AI Interviewers" | https://arxiv.org/abs/2601.02775 | Critique of asynchronous AI interview systems (hiring context): user agency, lack of personalization — useful for design problems of AI interviewers generally | paper (critique, HCI) | 2026 | arXiv preprint | single-source |

### B. LLM-assisted qualitative analysis (adjacent, heavily overlapping domain)

| # | Source | URL | Key claim / why it matters | Type | Recency | Peer-reviewed? | Verification |
|---|--------|-----|-----------|------|---------|----------------|--------------|
| 13 | De Paoli, "Performing an Inductive Thematic Analysis of Semi-Structured Interviews With a Large Language Model" (Social Science Computer Review) | https://doi.org/10.1177/08944393231220483 | Provocation/experiment: GPT-3.5 emulating inductive thematic analysis and its *limits* — one of the most-cited early peer-reviewed entries | paper (methodology + critique) | 2023 | yes — SSCR | cross-checked (OpenAlex + arXiv version 2305.13014) |
| 14 | Dai et al., "LLM-in-the-loop: Leveraging Large Language Model for Thematic Analysis" | https://arxiv.org/abs/2310.15100 | Human-in-the-loop LLM thematic analysis; frames reliability questions familiar from dual-coder TA practice | paper (methodology) | 2023 | arXiv preprint | single-source |
| 15 | Zhang et al., "QualiGPT: GPT as an easy-to-use tool for qualitative coding" | https://arxiv.org/abs/2310.07061 | Introduces QualiGPT, an easy-to-use GPT-based qualitative coding tool (with follow-up user study, arXiv 2407.14925) | paper + tool | 2023 | arXiv preprint | cross-checked (two arXiv records + GitHub repo #34) |
| 16 | Mathis et al., "Inductive thematic analysis of healthcare qualitative interviews using open-source large language models: How does it compare to traditional methods?" (CMPB) | https://doi.org/10.1016/j.cmpb.2024.108356 | Peer-reviewed head-to-head: open-source LLMs vs. traditional inductive TA on healthcare interviews | paper (validation) | 2024 | yes — Computer Methods and Programs in Biomedicine | cross-checked (OpenAlex + citation by De Paoli 2023 line of work) |
| 17 | Hämäläinen, Tavast & Kunnari, "Evaluating Large Language Models in Generating Synthetic HCI Research Data: a Case Study" (CHI 2023) | https://doi.org/10.1145/3544548.3580688 | Peer-reviewed early test of LLM-generated synthetic qualitative research data (user personas/interviews) in HCI | paper (validation) | 2023 | yes — CHI 2023 | single-source (OpenAlex) |

### C. Synthetic respondents vs. real respondents (survey methodology)

| # | Source | URL | Key claim / why it matters | Type | Recency | Peer-reviewed? | Verification |
|---|--------|-----|-----------|------|---------|----------------|--------------|
| 18 | Argyle et al., "Out of One, Many: Using Language Models to Simulate Human Samples" (Political Analysis 31(4)) | https://doi.org/10.1017/pan.2023.2 | The "silicon sampling" origin paper: GPT-3 conditioned on socio-demographic backstories reproduces ANES response distributions — foundation of synthetic-respondents debate | paper (methodology) | 2023 | yes — Political Analysis | cross-checked (OpenAlex + arXiv 2209.06899) |
| 19 | Aher, Arriaga & Kalai, "Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies" | https://arxiv.org/abs/2208.10264 | Replicates classic human-subject experiments (TCPD paradigm) with LLM simulated participants; introduced conditional prompt matrix method | paper (validation) | 2022 (arXiv) / 2023 ICML | arXiv preprint (ICML 2023 paper) | cross-checked (OpenAlex + arXiv) |
| 20 | Bisbee et al., "Synthetic Replacements for Human Survey Data? The Perils of Large Language Models" (SocArXiv preprint) | https://doi.org/10.31235/osf.io/5ecfa | Prominent political-science critique: LLMs fail to reproduce social-desirability-sensitive and within-respondent consistency patterns; warns against synthetic replacements | paper (critique) | 2023 | preprint (OSF) | cross-checked (OpenAlex + cited by PNAS #22 debate) |
| 21 | Kim & Lee, "AI-Augmented Surveys: Leveraging Large Language Models and Surveys for Opinion Prediction" | https://arxiv.org/abs/2305.09620 | Middle path: LLMs *augment* (impute missing responses in repeated cross-sections) rather than replace human survey respondents | paper (methodology) | 2023 | arXiv preprint | single-source |
| 22 | Westwood, "The potential existential threat of large language models to online survey research" (PNAS) | https://doi.org/10.1073/pnas.2518075122 | High-profile PNAS piece on LLM contamination/degradation of online survey research — the counter-pressure on synthetic/AI-mediated data collection | paper (critique) | 2025 | yes — PNAS | cross-checked (OpenAlex record + discovery via survey-methodology search) |
| 23 | Jansen, Jung & Salminen, "Employing large language models in survey research" (Natural Language Processing Journal) | https://doi.org/10.1016/j.nlp.2023.100020 | Peer-reviewed overview of LLM roles in survey research (incl. conversational/synthetic interviewing directions) | paper (review) | 2023 | yes — NLP Journal (Elsevier) | single-source (OpenAlex) |
| 24 | Bail, "Can Generative AI improve social science?" (PNAS) | https://doi.org/10.1073/pnas.2314021121 | Accessible PNAS framing of where generative AI can/cannot help social-science research design — useful umbrella citation | paper (review/position) | 2024 | yes — PNAS | single-source (OpenAlex) |
| 25 | "ChatGPT is not A Man but Das Man: Representativeness and Structural Consistency of Silicon Samples Generated by Large Language Models" | https://arxiv.org/abs/2507.02919 | Critique of silicon-sample representativeness and structural consistency — part of the ongoing synthetic-respondent validation literature | paper (critique) | 2025 | arXiv preprint | single-source |

### D. Validation studies, criticisms, open problems

| # | Source | URL | Key claim / why it matters | Type | Recency | Peer-reviewed? | Verification |
|---|--------|-----|-----------|------|---------|----------------|--------------|
| 26 | Sharma et al., "Towards Understanding Sycophancy in Language Models" | https://arxiv.org/abs/2310.13548 | Canonical paper on RLHF-trained models matching user beliefs over truth — the mechanism behind sycophancy/desirability concerns in AI-led interviews | paper (critique/analysis) | 2023 | arXiv preprint (Anthropic) | cross-checked (arXiv + multiple related sycophancy papers found in same search) |
| 27 | Chan et al., "Conversational AI Powered by Large Language Models Amplifies False Memories in Witness Interviews" | https://arxiv.org/abs/2408.04681 | Experimental evidence that LLM conversational agents induce more false memories than biased human questioning in simulated witness interviews (Loftus group) — direct data-quality risk for AI interviewers | paper (validation/critique) | 2024 | arXiv preprint | single-source (abstract read) |
| 28 | Anderson, Shah & Kreminski, "Homogenization Effects of Large Language Models on Human Creative Ideation" | https://arxiv.org/abs/2402.01536 | Shows LLM assistance homogenizes human ideation output — empirical anchor for the response-homogenization worry in AI-mediated research | paper (validation) | 2024 | arXiv preprint (CHI 2024) | single-source |
| 29 | "'I'm Categorizing LLM as a Productivity Tool': Examining Ethics of LLM Use in HCI Research Practices" (PACM HCI / CSCW) | https://doi.org/10.1145/3711000 | Peer-reviewed empirical ethics study of how HCI researchers actually use LLMs (incl. analysis tasks), with normative concerns | paper (ethics) | 2025 | yes — PACM on HCI | single-source (OpenAlex) |

### E. Tools and platforms (AI-conducted interviews / AI-assisted qualitative analysis)

| # | Source | URL | Key claim / why it matters | Type | Licensing | Verification |
|---|--------|-----|-----------|------|-----------|--------------|
| 30 | Outset — "The AI-Moderated Research Platform" | https://www.outset.ai | Commercial platform for AI-moderated (voice) interview studies; the leading commercial instantiation of AI-led market-research interviews | platform (commercial) | proprietary SaaS (no public source) | cross-checked (HTTP 200 + page title) |
| 31 | Dovetail — Customer Intelligence Platform | https://dovetail.com | Widely used qualitative research repository with AI analysis features (tagging, summarization, search) — the AI-assisted-analysis incumbent | platform (commercial) | proprietary SaaS | cross-checked (HTTP 200 + page title) |
| 32 | Looppanel — UX Research AI Analysis & Repository | https://looppanel.com | Commercial AI UX-research analysis tool (transcription, note-taking, synthesis for interviews) | platform (commercial) | proprietary SaaS | cross-checked (HTTP 200 + page title) |
| 33 | Synthetic Users — "User research at the speed of AI" | https://www.syntheticusers.com | Commercial *synthetic respondent* service (LLM-simulated user interviews instead of human participants) — commercial flashpoint of the synthetic-data debate | platform (commercial) | proprietary SaaS | cross-checked (HTTP 200 + page title) |
| 34 | QualiGPT (GitHub: KindOPSTAR/QualiGPT) | https://github.com/KindOPSTAR/QualiGPT | Open-source GPT-based qualitative coding tool from papers #15; ~44 stars | tool (open-source) | MIT | cross-checked (GitHub API + arXiv paper) |
| 35 | OpenInterviewer (GitHub: linxule/openinterviewer) | https://github.com/linxule/openinterviewer | Open-source platform for adaptive AI-assisted qualitative interviews: study config, participant links, transcript + synthesis dashboard, BYOS model deployment (e.g., Gemini) | tool (open-source) | MIT | cross-checked (GitHub API + README read) |
| 36 | OASIS Platform (GitHub: oasis-surveys/oasis-platform) | https://github.com/oasis-surveys/oasis-platform | Self-hosted open-source harness for AI-powered survey interviews (voice-to-voice and text chat agents) | tool (open-source) | custom/"NOASSERTION" license (non-standard — check repo before reuse) | cross-checked (GitHub API + repo description) |
| 37 | DeTAILS (GitHub: DaemonOnCode/DeTAILS) | https://github.com/DaemonOnCode/DeTAILS | Open-source toolkit: "Deep Thematic Analysis with Iterative LLM Support" — iterative LLM-assisted coding workflow | tool (open-source) | GPL-3.0 | single-source (GitHub API) |
| 38 | llm4qual (GitHub: msamogh/llm4qual) | https://github.com/msamogh/llm4qual | HuggingFace + LangChain framework for qualitative research analysis | tool (open-source) | MIT | single-source (GitHub API) |
| 39 | PovertyAction / llm-quali-coding | https://github.com/PovertyAction/llm-quali-coding | MIT-licensed hands-on tutorial (J-PAL's Poverty Action Lab) teaching researchers LLM-based qualitative coding — practitioner-credibility signal | tutorial (open-source) | MIT | single-source (GitHub API) |

---

## Findings

### 1. State of AI-led interviews (papers)

The field has a clear pre-LLM lineage: Xiao et al.'s 2019 AI-chatbot conversational survey [1] established the pattern of a bot asking open-ended questions, interpreting free text, and probing; Ge et al. extended the probing problem to knowledge-driven follow-up generation [2]. Post-2023, the LLM wave produced two distinct strands:

- **AI interviewing humans for research.** Working systems now span UX research (CLUE, in-the-moment LLM-UX interviews [4]), child-centered design with LLM virtual humans [5], phenomenology (an AI interviewer co-developed with Russell Hurlburt for experience sampling [7]), and scalable semi-structured qualitative interviewing (MimiTalk's dual-agent constitutional design [8]; SparkMe from Stanford [9]). Survey methodology has engaged directly: Tirumala et al.'s position paper asks when voice AI interviewers are "fit for purpose" for quantitative and qualitative data collection [6], and AURA brings RL to adaptive survey question selection [10].
- **LLMs as interviewees / synthetic respondents.** Argyle et al.'s "silicon sampling" [18] and Aher et al.'s replication of human-subject studies [19] are the seminal pair; Dengel et al. show semi-structured interviews *with* ChatGPT/BARD as synthetic experts in a qualitative-methods journal [3]. Hämäläinen et al. (CHI 2023) tested synthetic HCI research data specifically [17].

*Inference (from the cluster, not a single source):* the literature is converging on a distinction between AI interviewers as **data collectors from real humans** (efficiency/scale arguments) and AI as **simulated participants** (validity arguments), with different validation standards applying to each.

### 2. Tools and platforms

Commercial AI-moderated interviewing is already a product category: Outset (AI-moderated research platform, voice interviews) [30], Looppanel and Dovetail on the analysis side [31][32], and Synthetic Users on the fully-synthetic side [33]. Open-source counterparts exist but are young (single/double-digit stars): OpenInterviewer (MIT; full interview platform with BYOS model hosting) [35], OASIS (self-hosted AI survey-interview harness, non-standard license) [36], plus LLM-assisted coding tools QualiGPT (MIT) [34], DeTAILS (GPL-3.0) [37], llm4qual (MIT) [38], and J-PAL's llm-quali-coding tutorial [39].

### 3. Validation, criticisms, open problems

The strongest documented risks found in this run:
- **Sycophancy/agreeableness:** RLHF-trained models match user beliefs over truth [26] — a mechanism-level threat to AI interviewer neutrality (inference: this is a general LLM property, not yet specifically measured in interview-agent studies found here — open problem).
- **False-memory induction:** LLM conversational agents induced more false memories than biased human questioning in simulated witness interviews [27] — the clearest experimental data-quality harm for AI-led interviews.
- **Homogenization:** LLM assistance measurably homogenizes human ideation output [28]; relatedly, silicon samples show representativeness and structural-consistency problems [25], and Bisbee et al. document that synthetic survey data fails on social-desirability-sensitive items [20].
- **Ecological threat to online surveys:** PNAS-level warning that LLMs threaten the viability of online survey research itself [22]; see also [23][24] for peer-reviewed surveys of the terrain.
- **Reliability of LLM qualitative analysis:** De Paoli frames LLM thematic analysis as an exploration with explicit limits [13]; Mathis et al. provide the peer-reviewed head-to-head vs. traditional methods [16]; LLM-in-the-loop designs keep humans in the coding loop for reliability reasons [14].
- **Ethics:** practitioner ethics of LLM use in research is now empirically studied in HCI [29]; asynchronous AI interviewers face user-agency and personalization critiques [12].

### 4. Gaps and open problems observed (inference from search coverage)

- Very few peer-reviewed *validation* studies of AI interviewers with real human respondents comparing data quality to human interviewers at scale — most systems papers are arXiv preprints (single-source items above). The peer-reviewed canon currently sits mostly in the synthetic-respondent and analysis-assistance strands [3][13][16][18][22].
- No peer-reviewed paper found in this run that directly measures sycophancy inside an AI-led research interview (open problem; closest anchors are [26][27]).

---

## Sources

1. Xiao, Zhou, Liao, Mark et al. — Tell Me About Yourself: Using an AI-Powered Chatbot to Conduct Conversational Surveys with Open-ended Questions — https://arxiv.org/abs/1905.10700
2. Ge, Xiao, Diesner, Ji, Karahalios, Sundaram — What should I Ask: A Knowledge-driven Approach for Follow-up Questions Generation in Conversational Surveys — https://arxiv.org/abs/2205.10977
3. Dengel, Gehrlein, Fernes, Görlich, Maurer, Pham — Qualitative Research Methods for LLMs: Conducting Semi-Structured Interviews with ChatGPT and BARD on Computer Science Education — https://doi.org/10.3390/informatics10040078
4. Liu, Wang, Cohen, Li, Xiong — Understand User Opinions of Large Language Models via LLM-Powered In-the-Moment User Experience Interviews (CLUE) — https://arxiv.org/abs/2502.15226
5. Li & Cai — Applying LLM-Powered Virtual Humans to Child Interviews in Child-Centered Design — https://arxiv.org/abs/2504.20016
6. Tirumala, Jain, Leybzon, Buskirk — Mic Drop or Data Flop? Evaluating the Fitness for Purpose of AI Voice Interviewers for Data Collection within Quantitative & Qualitative Research Contexts — https://arxiv.org/abs/2509.01814
7. Carmon, Bersch, Fernyhough, Hurlburt, Kühn — Capturing Inner Experience At Scale: An AI Interviewer Co-Developed with the Founder of a Landmark Phenomenological Method — https://arxiv.org/abs/2607.20310
8. Liu & Yu — MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI — https://arxiv.org/abs/2511.03731
9. Anugraha, Padmakumar, Yang — SparkMe: Adaptive Semi-Structured Interviewing for Qualitative Insight Discovery — https://arxiv.org/abs/2602.21136
10. Tang & Shang — AURA: A Reinforcement Learning Framework for AI-Driven Adaptive Conversational Surveys — https://arxiv.org/abs/2510.27126
11. Kim E., Suk, Kim, Muennighoff, Kim, Oh — LLM-as-an-Interviewer: Beyond Static Testing Through Dynamic LLM Evaluation — https://arxiv.org/abs/2412.10424
12. Sakib, Rayasam, Dey — Expecting Too Much, Getting Too Little: Exploring the Challenges and Design Opportunities of Asynchronous AI Interviewers — https://arxiv.org/abs/2601.02775
13. De Paoli — Performing an Inductive Thematic Analysis of Semi-Structured Interviews With a Large Language Model — https://doi.org/10.1177/08944393231220483
14. Dai, Xiong, Ku — LLM-in-the-loop: Leveraging Large Language Model for Thematic Analysis — https://arxiv.org/abs/2310.15100
15. Zhang, Wu, Xie, Kim, Carroll — QualiGPT: GPT as an easy-to-use tool for qualitative coding — https://arxiv.org/abs/2310.07061
16. Mathis, Zhao, Pratt, Weleff, De Paoli — Inductive thematic analysis of healthcare qualitative interviews using open-source large language models: How does it compare to traditional methods? — https://doi.org/10.1016/j.cmpb.2024.108356
17. Hämäläinen, Tavast, Kunnari — Evaluating Large Language Models in Generating Synthetic HCI Research Data: a Case Study — https://doi.org/10.1145/3544548.3580688
18. Argyle, Busby, Fulda, Gubler, Rytting, Wingate — Out of One, Many: Using Language Models to Simulate Human Samples — https://doi.org/10.1017/pan.2023.2
19. Aher, Arriaga, Kalai — Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies — https://arxiv.org/abs/2208.10264
20. Bisbee, Clinton, Dorff, Kenkel, Larson — Synthetic Replacements for Human Survey Data? The Perils of Large Language Models — https://doi.org/10.31235/osf.io/5ecfa
21. Kim J. & Lee — AI-Augmented Surveys: Leveraging Large Language Models and Surveys for Opinion Prediction — https://arxiv.org/abs/2305.09620
22. Westwood — The potential existential threat of large language models to online survey research — https://doi.org/10.1073/pnas.2518075122
23. Jansen, Jung, Salminen — Employing large language models in survey research — https://doi.org/10.1016/j.nlp.2023.100020
24. Bail — Can Generative AI improve social science? — https://doi.org/10.1073/pnas.2314021121
25. ChatGPT is not A Man but Das Man: Representativeness and Structural Consistency of Silicon Samples Generated by Large Language Models — https://arxiv.org/abs/2507.02919
26. Sharma, Tong, Korbak, Duvenaud, Askell, Bowman et al. — Towards Understanding Sycophancy in Language Models — https://arxiv.org/abs/2310.13548
27. Chan, Pataranutaporn, Suri, Zulfikar, Maes, Loftus — Conversational AI Powered by Large Language Models Amplifies False Memories in Witness Interviews — https://arxiv.org/abs/2408.04681
28. Anderson, Shah, Kreminski — Homogenization Effects of Large Language Models on Human Creative Ideation — https://arxiv.org/abs/2402.01536
29. 'I'm Categorizing LLM as a Productivity Tool': Examining Ethics of LLM Use in HCI Research Practices — https://doi.org/10.1145/3711000
30. Outset — The AI-Moderated Research Platform — https://www.outset.ai
31. Dovetail — Customer Intelligence Platform — https://dovetail.com
32. Looppanel — UX Research AI Analysis & Repository — https://www.looppanel.com
33. Synthetic Users — https://www.syntheticusers.com
34. KindOPSTAR/QualiGPT (GitHub) — https://github.com/KindOPSTAR/QualiGPT
35. linxule/OpenInterviewer (GitHub) — https://github.com/linxule/openinterviewer
36. oasis-surveys/oasis-platform (GitHub) — https://github.com/oasis-surveys/oasis-platform
37. DaemonOnCode/DeTAILS (GitHub) — https://github.com/DaemonOnCode/DeTAILS
38. msamogh/llm4qual (GitHub) — https://github.com/msamogh/llm4qual
39. PovertyAction/llm-quali-coding (GitHub) — https://github.com/PovertyAction/llm-quali-coding

## Coverage Status

**Checked directly (existence + metadata/abstract read):** all 39 entries above via arXiv Atom API, OpenAlex API, GitHub REST API, or direct HTTP fetch (tools: HTTP 200 + page title confirmed).

**Caveats / residual uncertainty:**
- Abstracts were read; full texts were not. Claims above describe what abstracts/metadata state, plus clearly-labeled inferences.
- Peer-review status for arXiv items reflects venue metadata available at fetch time; some (e.g., #26, #28) are associated with peer-reviewed venues but were verified here only as arXiv records — treated as preprints until confirmed.
- alpha CLI was unavailable (not logged in), so discovery relied on arXiv/OpenAlex/GitHub APIs + direct site checks; coverage of industry/trade press (e.g., ESOMAR debates on synthetic respondents) is thin — commercial platforms #30–#33 stand in for that landscape.
- Tasks complete: (1) methodological papers — done; (2) tools/platforms — done; (3) validation/criticism — done; (4) seminal predecessors — done (#1, #2, #18, #19, #20).
