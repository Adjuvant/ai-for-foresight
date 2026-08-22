---
type: wiki-page
slug: ai-research-methods
category: synthesis
tags:
  - ai-led-interviews
  - synthetic-respondents
  - llm-assisted-qualitative-analysis
  - research-methods
  - ai-governance
  - ai-research-methods
sources:
  - "[[Research/Computational Social Science/ai-led-interviews]]"
  - "[[Research/Computational Social Science/open-questions-ai-led-interviews]]"
related:
  - "[[Wiki/Concepts/ai-led-interviews]]"
  - "[[Wiki/Concepts/synthetic-respondents]]"
  - "[[Wiki/Concepts/llm-assisted-qualitative-analysis]]"
  - "[[Wiki/Concepts/ai-data-residency]]"
  - "[[Wiki/Concepts/ai-consent-research]]"
created: 2026-08-22
updated: 2026-08-22
---

# AI research methods: LLMs as interviewer, respondent, and analyst

Convergent landscape: LLMs occupy three roles in social research — interviewer of real humans (ai-led-interviews), simulated respondent (synthetic-respondents), and analyst of transcripts (llm-assisted-qualitative-analysis) — each with distinct validity evidence and shared governance needs (ai-data-residency, ai-consent-research).

## Open Questions

1. **Replication of the LSE Behavioural Lab result** — *(status update 2026-08-22: partially answered.)* REStud acceptance is now institutionally corroborated (LSE Research Online record 140596) but the in-press text is not deposited; no independent replication exists anywhere in the checked record; the comparison dates to the Jul 2025 NBER version, not only the Feb 2026 PDF. Watch the REStud advance-articles page for the published tables.
2. **Sycophancy inside research interviews** — *(status update 2026-08-22: partially answered.)* POQ 2026 (Austin et al.) measured interviewer-induced answer change in a randomized design — AI probing polarizes subsequent closed-ended answers (+13 pp immigration, +8 pp tariffs; 2,243 US adults); Wuttke et al. 2025 coded AI interviewers committing 67% of 'judging the respondent' guideline violations. No construct-level measurement of LLM-interviewer sycophancy against ground truth yet exists; unreplicated.
3. **SSRN text parity** — *(status update 2026-08-22: still open.)* Index snapshot shows the old posting (last revised 21 Nov 2024) conflicting with an unverifiable '7 Feb 2026' claim; needs a human-browser check.
4. **Non-commercial licence friction** — unchanged: PolyForm NC 1.0.0 blocks commercial market-research use of the seed platform.
5. **Cross-version sample-size discrepancies** — *(status update 2026-08-22: partially resolved.)* 384 (French) and 462 (US) are the current-version figures; 422 is anchored to the Nov 2024 version; 466 remains unexplained. Published-version reconciliation still pending.
6. **NEW — Published-version verification of headline numbers**: do the REStud accepted text and the Behavioural Lab tables reproduce 86%-vs-84% coding agreement and the four-modality grades? (unreadable as of 2026-08-22)
7. **NEW — POQ 2026 replication**: does the AI-interview-induced polarization result replicate across topics, platforms, and respondent pools? (the newest load-bearing number in the field, single-source publisher-page content)
8. **NEW — Homogenization of G&J transcript data**: methods exist (SMR 2025) but no homogenization analysis of the Geiecke & Jaravel transcripts has been published.
9. **NEW — Does AI-led elicitation shift the LLM-respondent validity boundary?** The standing tension's core question remains untested.
10. **NEW — Google PAYGO guarantee**: whether pay-as-you-go EU-endpoint inference is guaranteed in-region (official docs silent; provisioned throughput may be required).
11. **NEW — Mainstream-journal participant-facing AI-consent language**: not found; norms vary (Dialogica requires disclosure; Druk exempts transcription).

## Framing

The literature (2023–2026) splits into AI interviewers as data collectors from real humans (scale/efficiency arguments) versus AI as simulated participants (validity arguments in the silicon-sampling debate), plus a fast-growing LLM-assisted qualitative-analysis strand. Most interviewer-strand work remains preprint; the peer-reviewed canon sits mostly in the synthetic-respondent and analysis strands [13][14][21][22][23][24][25].

**Follow-up verification (2026-08-22, source 2 of this thread):** a deep-research pass on the open questions added: (a) REStud acceptance is institutionally corroborated (LSE Research Online 140596) but the accepted text is not deposited — the LSE Behavioural Lab tables and the 86%-vs-84% coding figure remain unverifiable at the published-version level; (b) the AI-interviewer strand gained its first peer-reviewed measurement of interviewer-induced answer change — POQ 2026 (Austin et al.) found AI probing polarizes subsequent closed-ended answers, and Wuttke et al. 2025 coded AI interviewers committing 67% of 'judging the respondent' guideline violations; (c) homogenization of open-ended survey responses is now measurable in peer-reviewed work (Zhang, Xu & Alvero, SMR 2025), but no one has applied it to the Geiecke & Jaravel transcripts; (d) the Google residency open question is answered — Gemini Enterprise Agent Platform (formerly Generative AI on Vertex AI) EU multi-region and locational endpoints pin ML processing, while the Gemini API remains unpinnable, and the whisper-1 voice-input leak persists; (e) on the synthetic-respondent boundary, Bisbee et al. is now published (Political Analysis 2024), Westwood's PNAS 2025 claim has a live rebuttal (Rothschild et al. 2026) and counter-reply (4.4% contamination lower bound), and 2025–26 validation studies converge on item/task-dependence — whether AI interviewers shift that boundary remains untested (per [[Research/Computational Social Science/open-questions-ai-led-interviews]]).

## Sources

# Prior-brief sources (ai-led-interviews, 2026-08-22):
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

### Follow-up sources (2026-08-22) — open-questions-ai-led-interviews

Numbering below matches the follow-up brief's own `[N]` citations in the Key Claims and Open Questions bodies above.

Merged, deduplicated numbering across research files T1–T4. Confidence tags as recorded by the researchers: `verified` = read/fetched this run (or metadata/API-verified); `single-source` = one independent source; `unverified` = could not confirm; `blocked — Cloudflare` / `blocked — PDF only` = not readable under this run's fetch policy (search-surfaced text flagged accordingly).

#### Seed paper & versions (T1)

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

#### Bias & validation (T2)

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

#### Synthetic-respondent boundary (T2 Q3)

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

#### Analysis pipeline (T3)

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

#### Governance & consent (T4)

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
