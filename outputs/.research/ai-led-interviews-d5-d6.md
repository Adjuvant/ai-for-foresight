# LLM API data residency / data retention + research-ethics guidance for AI-led interview research

**Purpose:** evidence base for a study design that needs jurisdictional data pinning (processing/retention of interview transcripts with third-party LLM providers) and defensible consent/ethics language.

**Verification level:** medium. All provider claims below were **read directly from the fetched pages** (raw HTML/PDF fetched and parsed during this run); load-bearing claims are marked cross-checked vs single-source. Every source has a direct, verified URL (all URLs returned HTTP 200 during this run; fetch-blocked-but-live pages noted where applicable).

**Fetched:** August 2026 (run date).

---

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | Microsoft Learn — Data, privacy, and security for Foundry Models sold by Azure (incl. Azure OpenAI) | https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy | No training on customer prompts/completions; standard deployments process within customer-specified geography; Global/DataZone deployments relax processing location; EEA human reviewers for EEA resources | primary (official vendor doc) | cross-checked [2,3] |
| 2 | Microsoft Learn — What is the EU Data Boundary? | https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn | EU Data Boundary: Microsoft commits to store and process EU enterprise customer data within the EU/EEA boundary (limited exceptions) | primary (official) | cross-checked [1] |
| 3 | Microsoft Azure — Data Residency in Azure (product page) | https://azure.microsoft.com/en-us/explore/global-infrastructure/data-residency/ | Azure offers region/geography-based data residency options; customers maintain ownership of customer data | primary (official, marketing-level) | single-source (general; specifics in [1]) |
| 4 | OpenAI — Data controls in the OpenAI platform (API docs) | https://platform.openai.com/docs/guides/your-data | API data not used for training (since 2023-03-01); abuse-monitoring logs ≤30 days by default; ZDR/MAM on approval; project-level data residency with us./eu.api.openai.com endpoints | primary (official vendor doc) | cross-checked [5] |
| 5 | OpenAI — Terms of Use | https://openai.com/policies/terms-of-use/ | Input/Output ownership; "We may use Content to provide, maintain, develop, and improve our Services…" with training opt-out path; refers data-usage specifics to help-center/policy pages | primary (official legal terms) | cross-checked [4] |
| 6 | Anthropic — Commercial Terms of Service (effective June 17, 2025) | https://www.anthropic.com/legal/commercial-terms | "Anthropic may not train models on Customer Content from Services"; Anthropic Ireland is contracting entity for EEA/CH/UK customers; DPA incorporated by reference | primary (official legal terms) | cross-checked [7] |
| 7 | Anthropic docs — API and data retention | https://platform.claude.com/docs/en/manage-claude/api-and-data-retention | Conversation content not retained by default; ZDR available by arrangement; flagged content may be retained up to 2 years; Covered Models require 30-day retention | primary (official vendor doc) | cross-checked [6,10] |
| 8 | Anthropic docs — Data residency | https://platform.claude.com/docs/en/manage-claude/data-residency | `inference_geo:"us"` per-request US-only inference; workspace geo (storage at rest) currently US-only; 1.1x pricing for US-only inference (Claude 4.6+) | primary (official vendor doc) | cross-checked [9] |
| 9 | Anthropic Help Center — Enable US-only inference for your organization | https://support.claude.com/en/articles/15422948-enable-us-only-inference-for-your-organization | Org-level US-only inference control | primary | cross-checked [8] |
| 10 | Anthropic Help Center — Data retention practices for Covered Models | https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models | Covered Models (Fable 5/Mythos 5): 30-day retention of prompts/outputs for safety, effective June 9, 2026; deletion after 30 days except flagged/legal holds; not available under ZDR | primary | cross-checked [7] |
| 11 | Google — Gemini API / Google AI Studio Additional Terms of Service | https://ai.google.dev/gemini-api/terms | Paid Services: no training on prompts/responses; DPA applies; safety logs retained "for a limited period"; data "may be stored transiently or cached in any country in which Google or its agents maintain facilities" | primary (official legal terms) | single-source (official Google legal terms) |
| 12 | HHS OHRP / SACHRP — IRB Considerations on the Use of Artificial Intelligence in Human Subjects Research (approved Oct 19, 2022) | https://www.hhs.gov/ohrp/sachrp-committee/recommendations/irb-considerations-use-artificial-intelligence-human-subjects-research/index.html | Federal advisory body guidance: current consent regulatory elements are ill-suited to AI risks; recommends more nuanced public/private distinction | primary (US federal guidance) | cross-checked [13,15] (consistent theme) |
| 13 | AAPOR — Task Force report: Responsible AI Integration in Survey Research (May 2026) | https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf | Disclosure of AI use — including third-party AI platforms that may retain or train on data — should be integrated into informed consent; separate consent item for higher-risk uses | primary (professional association) | cross-checked [14,15] |
| 14 | AAPOR — Code of Professional Ethics and Practices (amended June 2026) | https://aapor.org/wp-content/uploads/2026/06/AAPOR-2026-Code-of-Ethics-Final-.pdf | Members must consider AI re-identification capabilities when disclosing participant information; must name AI platforms used for coding/analysis in disclosure standards | primary (professional association code) | cross-checked [13] |
| 15 | Rutgers HRPP — AI in human-subjects research guidance + AI Consent Guide (Jan 2026) | https://research.rutgers.edu/faculty-staff/compliance/human-research-protection/hrpp-guidance-topics | University IRB guidance with downloadable consent-language templates covering AI transcription of audio recordings; requires third-party vendor risk assessment for unauthorized AI tools | primary (university IRB guidance) | single-source (institutional guidance; consistent with [13]) |
| 16 | Samuel G. & Wassenaar D. (2025) — Joint Editorial: Informed Consent and AI Transcription of Qualitative Data, J Empir Res Hum Res Ethics 20(1–2):3–5 | https://journals.sagepub.com/doi/10.1177/15562646241296712 | Position: researchers should inform participants when AI transcription software processes recordings and obtain explicit consent; disclose cloud/third-party data transfer | primary (peer-reviewed editorial) | cross-checked [13,15] |
| 17 | Georgia State University URSA — IRB Protocols for AI-generated transcripts (Nov 2023) | https://ursa.research.gsu.edu/2023/11/29/irb-protocols-for-ai-generated-transcripts/ | "Researchers who use AI-powered transcription services must describe these plans in the IRB application as a data sharing practice" | primary (university IRB announcement) | single-source |
| 18 | ICMJE — Recommendations, "Use of AI by Authors" (updated Jan 2026) | https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html | Journals should require authors to disclose AI-assisted technology use at submission; nondisclosure may be construed as misconduct | primary (journal-editorial body) | cross-checked [19] |
| 19 | Springer Nature / Nature Portfolio — Artificial Intelligence (AI) editorial policy | https://www.nature.com/nature-portfolio/editorial-policies/ai | Authors must disclose AI use; "Manuscripts, peer review reports, and sensitive data must not be shared with unsecured or public AI systems" | primary (publisher policy) | cross-checked [18] |

---

## Q1. Azure OpenAI / Azure AI Foundry — data residency & region pinning

**Status: done.**

- Microsoft's official privacy doc for "Models sold by Azure" (which explicitly includes Azure OpenAI models) states that prompts, completions, embeddings, and training data: are NOT available to other customers; are NOT available to OpenAI or other model providers; are NOT used to improve providers' models; are NOT used to train any generative-AI foundation models without your permission [1].
- **Processing location rule:** "Prompts and responses are processed within the customer-specified geography (unless you are using a Global or DataZone deployment type), but may be processed between regions within the geography for operational purposes" [1].
- **Deployment-type caveats (critical for pinning)** [1]:
  - **Global** deployments: "prompts and responses may be processed in any geography where the relevant model sold by Azure is deployed."
  - **DataZone** deployments: processing anywhere within the defined data zone (a DataZone deployment in an EU member state stays within the EU).
  - For both, **data at rest** (uploaded data, abuse-monitoring data store) is stored in the customer-designated geography.
- **Abuse monitoring** (30-day-style sampling for human review in edge cases): data store is logically separated per customer resource and per geography; for resources deployed in the EEA, "the authorized Microsoft employees are located in the European Economic Area"; managed customers may apply for **modified abuse monitoring** [1].
- **EU Data Boundary:** "a geographically defined boundary within which Microsoft has committed to store and process Customer Data and personal data for our Microsoft enterprise online services, including Azure…" subject to limited documented exceptions [2].
- **Study implication:** Azure is the strongest of the four providers for jurisdictional pinning — pick a regional (non-Global, non-DataZone) deployment in the target geography; combine with the EU Data Boundary commitments for EU studies.

## Q2. OpenAI API — data usage / retention / residency

**Status: done.**

- **Training:** "As of March 1, 2023, data sent to the OpenAI API is not used to train or improve OpenAI models (unless you explicitly opt in to share data with us)" [4]. (The Terms of Use's broad "we may use Content" language [5] is narrowed for API customers by this platform doc — inference from reading both.)
- **Default retention:** abuse-monitoring logs (may contain prompts and responses) are retained **up to 30 days by default**, unless longer retention is required by law or to protect against harm [4].
- **Retention controls:** eligible customers (prior approval via sales) can select **Zero Data Retention (ZDR)** or **Modified Abuse Monitoring (MAM)**, configurable at org and project level [4].
- **Data residency (project-level config; sales approval required)** [4]:
  - **United States** (`us.api.openai.com`): regional storage **and** processing; no MAM/ZDR prerequisite.
  - **Europe (EEA + Switzerland)** (`eu.api.openai.com`): regional storage **and** processing; **requires** approval for abuse-monitoring controls (ZDR/MAM/Eyes Off/Safety Retention).
  - Australia, Canada, Japan, India, Singapore, South Korea, UK: **storage only, no regional processing** — "OpenAI may also process and temporarily store Customer Content outside of the Region."
  - `us.`/`eu.` endpoints use **Cloudflare Regional Services** so TLS termination and HTTPS decryption occur within the selected region.
  - Residency does not apply to "system data" (accounts, metadata, usage data); 10% price uplift on residency-eligible models released on or after March 5, 2026.
- **Endpoint caveats relevant to interview transcripts:** `/v1/responses` stores application state ≥30 days when `store` is omitted/true (unless ZDR); Assistants/threads objects retained indefinitely unless deleted; prompt caching holds encrypted KV tensors on GPU hosts ≤24h; cannot set `store=true` in non-US regions; no background mode in EU for `/v1/responses` [4].
- **Study implication:** EU pinning is achievable but gated behind sales approval for retention controls; default posture is US-centric processing with 30-day abuse-monitoring retention.

## Q3. Anthropic API — data usage / retention / residency

**Status: done.**

- **Training:** "Anthropic may not train models on Customer Content from Services" — Commercial Terms of Service, effective June 17, 2025; Anthropic also disclaims rights to Inputs/Outputs and incorporates the Anthropic DPA [6].
- **EU contracting entity:** "'Anthropic' means Anthropic Ireland, Limited if Customer resides in the European Economic Area ('EEA'), Switzerland or UK" [6].
- **Default retention:** "Conversation content (your prompts and Claude's outputs) is not retained by default; the exception is Covered Models, which require 30-day retention" [7].
- **ZDR:** contractual arrangement (request via sales/account rep); prompts and outputs not stored after the API response; stateful features excluded (Files API, Batch API 29-day retention, code-execution containers ≤30 days, Managed Agents sessions) [7].
- **Retention regardless of arrangement:** "if a chat or session is flagged, Anthropic may retain inputs and outputs for up to 2 years" [7].
- **Covered Models policy (effective June 9, 2026):** Fable 5 / Mythos 5-class models require 30-day retention of prompts/outputs for safety monitoring "on every platform where these models are offered"; data deleted after 30 days except flagged/legal-hold; ZDR unavailable for these models; on Bedrock/Google Cloud Agent Platform retained data stays within the cloud provider's environment [10].
- **Residency controls** [8]:
  - `inference_geo: "us"` (per-request or workspace default) pins inference to US infrastructure; `"global"` default may run anywhere; the response reports actual `usage.inference_geo`.
  - **Workspace geo** (storage at rest + endpoint processing): **US is currently the only option**.
  - US-only inference priced at **1.1x** standard rates on Claude 4.6+ models [8]; org-level US-only inference setting also exists [9].
- **Study implication:** Anthropic currently cannot pin storage at rest to the EU (workspace geo = US only); US-only inference pinning is available and verifiable per-request. GDPR posture rests on the DPA / Anthropic Ireland contracting entity, not geographic pinning.

## Q4. Google Gemini API (paid tier) — training / retention

**Status: done (single official source: the Additional Terms; DPA referenced within it).**

- **No training on paid-tier data:** "When you use Paid Services, including for example the paid quota of the Gemini API, Google doesn't use your prompts (including associated system instructions, cached content, and files such as images, videos, or documents) or responses to improve our products, and will process your prompts and responses in accordance with the Data Processing Addendum for Products Where Google is a Data Processor" [11].
- **Unpaid tier differs:** on Unpaid Services, Google uses submitted content and generated responses to "provide, improve, and develop Google products and services and machine learning technologies" — **except** for EEA/Switzerland/UK users, where the Paid-Services data terms apply to all services including the free tier [11].
- **Retention (paid):** "Google logs prompts and responses for a limited period of time, solely for detecting and preventing violations of the Prohibited Use Policy… This data may be stored transiently or cached in **any country in which Google or its agents maintain facilities**" [11] — i.e., **no geographic processing pin** on the Gemini API.
- **EEA/UK restriction:** "You may only use Paid Services when making API Clients available to users in the European Economic Area, Switzerland, or the United Kingdom" [11].
- **Study implication (inference from [11]):** Gemini API (ai.google.dev) offers no residency pinning; a jurisdiction-pinned study should use **Vertex AI** (same models, region-pinned endpoints) instead. (Vertex AI regional behavior not verified in this run — flagged as follow-up if Vertex is a candidate.)

## Q5. Research-ethics guidance on third-party LLM processing in interview research

**Status: done.**

### Federal / regulatory guidance
- **SACHRP (HHS OHRP advisory committee), Oct 2022** — the standing federal guidance on AI in human-subjects research. Key points read directly [12]:
  - For AI research requiring informed consent, "the nature of the risks and benefits of such research is ill-suited to the current required elements of consent" (group vs individual harms).
  - Finding AI uses exempt (45 CFR 46.104(d)(4)) "can leave research subjects unprotected… or leave them uninformed about how information they provide will be used."
  - "much AI research is compliant but not necessarily adequately protective of the rights and welfare of research participants."
  - SACHRP recommends the Secretary consider a "more nuanced but explicit definition of public versus private behavior and private information."
  - Note: this document addresses AI as research subject-matter/data source more than AI-as-vendor-tool, but it is the document IRBs cite for AI review generally (inference from its charge structure).

### Professional association guidance (survey/interview research)
- **AAPOR Task Force report, *Responsible AI Integration in Survey Research* (May 2026)** — the most directly on-point document found. Read directly from the PDF [13]:
  - "Disclosure should be considered when AI systems are used in ways that materially affect participants or their data. This includes… **use of proprietary or third-party AI platforms that may retain or further train on personal data**. This is especially important if consumer, rather than enterprise, versions of AI platforms are being used."
  - "AI disclosure should ordinarily be integrated into the informed consent process as a standard practice… For higher-risk or novel uses (e.g., AI-assisted interviewing, adaptive survey design, or **external data retention**), a distinct, clearly labeled section, or a separate consent item, should be used… with an opportunity to opt out when feasible."
  - "Researchers should consider layered consent approaches, combining concise summaries with links to more detailed explanations."
  - On data governance: "Particular care is required when using open-source or externally hosted AI models, which may lack clear guarantees about data retention, secondary use, or model training on submitted inputs" [13 §6.2.3].
  - "The question of whether a human or an algorithm is listening to and interpreting their words is relevant to whether and how they choose to participate" [13 §6.1.1].
- **AAPOR Code of Professional Ethics and Practices (amended June 2026)** [14]: members must "consider the capabilities of readily-available artificial intelligence and other tools when disclosing participant information" (AI re-identification risk in confidentiality); transparency standards require naming the software or AI platform used for automated coding and specifying parameters/decision rules.

### Journal ethics statements
- **Samuel & Wassenaar (2025), Joint Editorial in *Journal of Empirical Research on Human Research Ethics*** (open access; full text read via Europe PMC mirror of PMC12048736) [16]:
  - Position: "researchers should inform participants when AI transcription software will be used to process their recorded responses, and obtain explicit consent for this use."
  - "AI transcription often involves uploading recordings to cloud-based services. Participants should be informed about this data transfer and any associated risks with third party access."
  - The editorial was written for exactly the situation in scope here: RECs/IRBs being asked whether AI transcription of interviews/focus groups requires explicit consent.
- **ICMJE Recommendations (updated Jan 2026), "Use of AI by Authors"** [18]: journals should require disclosure of AI-assisted technologies at submission; nondisclosure "may be construed as misconduct." (Manuscript-level disclosure, not participant consent — relevant to publication ethics side.)
- **Springer Nature / Nature Portfolio AI policy** [19]: authors must disclose AI use; "Manuscripts, peer review reports, and sensitive data must not be shared with unsecured or public AI systems" — a publisher-level statement that directly supports restricting which LLM tiers (consumer vs enterprise API) may touch participant data.

### IRB / institutional guidance and consent templates
- **Rutgers HRPP AI guidance + AI Consent Guide (Jan 2026)** — the best consent-language template source found [15]:
  - The "Rutgers AI Consent Guide provides suggested language that can be adapted for informed consent processes or documents… including… situations where AI is integrated merely as a tool, such as **an AI service that provides transcriptions of audio recordings** or analyzes images." (Direct download: https://research.rutgers.edu/sites/default/files/2025-11/ai-consent-guide.docx)
  - "As a best practice—and often an IRB requirement when using third-party AI applications… not already authorized by the Office of Information Technology's Information Security Office—you must consult with Rutgers OIT for a third-party vendor risk assessment."
- **Georgia State University URSA (Nov 2023)** [17]: "Researchers who use Artificial Intelligence (AI)-powered transcription services must describe these plans in the IRB application as a data sharing practice," and use the Legal Affairs contract routing form when paying for such services.
- **AAPOR report §6.1.3** [13] supplies the tiered structure for that language (brief embedded disclosure for low-risk transcription with human review; separate labeled consent item for AI-assisted interviewing or external data retention, with opt-out).

### Synthesis for a study needing jurisdictional pinning (inference, labeled as such)
Combining [1][4][8][11] (provider controls) with [13][15][16] (ethics guidance): an AI-led interview study with EU pinning is most defensible on (a) Azure OpenAI regional deployment in an EU geography (in-geography processing, EU Data Boundary, EEA-located reviewers for abuse monitoring [1][2]), or (b) OpenAI API with an EU-residency project after sales approval of retention controls [4]. Anthropic supports US-only inference pinning but not EU storage pinning [8]; the Gemini API offers no processing pin [11]. Consent materials should disclose, in plain language: that an LLM provider processes transcripts, which provider/jurisdiction, retention windows (e.g., ≤30-day abuse-monitoring logs), that API data is not used for training, and offer an opt-out — per AAPOR's tiered disclosure guidance [13] and Rutgers' template language [15].

---

## Coverage Status

**Checked directly (fetched and read in full or in relevant part):**
- Microsoft Learn data-privacy doc for Models sold by Azure (full relevant sections: geography processing, Global/DataZone, abuse monitoring, storage) — [1]
- Microsoft EU Data Boundary overview — [2]
- OpenAI platform "your data" guide (full markdown incl. residency tables) — [4]
- OpenAI Terms of Use (via reader proxy) — [5]
- Anthropic Commercial Terms, API-and-data-retention doc, Data-residency doc, US-only inference article, Covered Models retention article — [6][7][8][9][10]
- Google Gemini API/AI Studio Additional Terms (Paid/Unpaid Services sections) — [11]
- SACHRP AI guidance (full ~30KB text) — [12]
- AAPOR Task Force report PDF (4834 lines text; consent/disclosure/data-governance sections read) — [13]
- AAPOR 2026 Code of Ethics PDF (AI-relevant sections read) — [14]
- Rutgers HRPP AI guidance page (via reader proxy) — [15]
- Samuel & Wassenaar JERHRE editorial full text (Europe PMC XML) — [16]
- GSU URSA IRB announcement — [17]
- ICMJE AI-by-authors page — [18]
- Springer Nature AI editorial policy — [19]

**Not completed / residual uncertainties:**
- **OpenAI Business Privacy page** (https://openai.com/policies/business-privacy/) and help-center articles returned HTTP 403 to direct fetch (bot protection); the platform docs [4] + Terms of Use [5] were used instead.
- **Vertex AI regional data residency** (Google Cloud) was flagged as the residency-capable Google alternative but not verified in this run — follow-up if Vertex is shortlisted.
- **Anthropic standard (non-ZDR, non-Covered-Model) API retention for abuse/safety logging** — the docs state conversation content is "not retained by default" [7]; the privacy-center retention article (privacy.claude.com) was referenced but not fetched. If an exact default safety-log TTL is load-bearing, verify that page.
- **AAPOR site pages block direct fetch** (403); PDFs and the announcement page (via reader proxy) were used instead.
- Google Gemini terms is the **only official source** for the paid-tier no-training claim found; no second independent official source was located (confidence: single-source, though it is the binding legal document).

## Sources

1. Microsoft Learn — Data, privacy, and security for Foundry Models sold by Azure in Microsoft Foundry — https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy
2. Microsoft Learn — What is the EU Data Boundary? — https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn
3. Microsoft Azure — Data Residency in Azure — https://azure.microsoft.com/en-us/explore/global-infrastructure/data-residency/
4. OpenAI — Data controls in the OpenAI platform — https://platform.openai.com/docs/guides/your-data
5. OpenAI — Terms of Use — https://openai.com/policies/terms-of-use/
6. Anthropic — Commercial Terms of Service (effective June 17, 2025) — https://www.anthropic.com/legal/commercial-terms
7. Anthropic — API and data retention — https://platform.claude.com/docs/en/manage-claude/api-and-data-retention
8. Anthropic — Data residency — https://platform.claude.com/docs/en/manage-claude/data-residency
9. Anthropic Help Center — Enable US-only inference for your organization — https://support.claude.com/en/articles/15422948-enable-us-only-inference-for-your-organization
10. Anthropic Help Center — Data retention practices for Covered Models — https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models
11. Google — Gemini API / Google AI Studio Additional Terms of Service — https://ai.google.dev/gemini-api/terms
12. HHS OHRP SACHRP — IRB Considerations on the Use of Artificial Intelligence in Human Subjects Research (approved October 19, 2022) — https://www.hhs.gov/ohrp/sachrp-committee/recommendations/irb-considerations-use-artificial-intelligence-human-subjects-research/index.html
13. AAPOR Task Force — Responsible AI Integration in Survey Research (May 2026) — https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf (announcement: https://aapor.org/announcements/task-force-on-responsible-ai-integration-in-survey-research-report/)
14. AAPOR — Code of Professional Ethics and Practices (amended June 2026) — https://aapor.org/wp-content/uploads/2026/06/AAPOR-2026-Code-of-Ethics-Final-.pdf
15. Rutgers University Office for Research / HRPP — AI in human-subjects research guidance and AI Consent Guide — https://research.rutgers.edu/faculty-staff/compliance/human-research-protection/hrpp-guidance-topics (guide: https://research.rutgers.edu/sites/default/files/2025-11/ai-consent-guide.docx)
16. Samuel, G., & Wassenaar, D. (2025). Joint Editorial: Informed Consent and AI Transcription of Qualitative Data. *Journal of Empirical Research on Human Research Ethics*, 20(1–2), 3–5. — https://journals.sagepub.com/doi/10.1177/15562646241296712 (free full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC12048736/)
17. Georgia State University URSA — IRB Protocols for AI-generated transcripts (Nov 29, 2023) — https://ursa.research.gsu.edu/2023/11/29/irb-protocols-for-ai-generated-transcripts/
18. ICMJE — Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals: Use of AI by Authors (updated January 2026) — https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html
19. Springer Nature / Nature Portfolio — Artificial Intelligence (AI) editorial policy — https://www.nature.com/nature-portfolio/editorial-policies/ai
