# T4 — Governance, Data Residency, Consent (researcher D)

**Run:** `open-questions-ai-led-interviews` · **Thread:** T4 (jurisdiction pinning, voice-transcription leak, consent templating)
**Date of research:** 2026-08-22 (run start; Google Cloud docs pages read carry "Last updated 2026-08-21 UTC")
**Brief:** `outputs/.plans/open-questions-ai-led-interviews-T4.md` · **Context:** `notes/open-questions-ai-led-interviews.md` (Q9–Q11), archived brief `fnl-aii/Research/Computational Social Science/ai-led-interviews.md`

**Claim tags used:** `[verified — primary, read]` (document fetched/read in this run) · `[verified — provider-indexed]` (page content surfaced via search provider, not fetched directly) · `[single-source]` · `[unverified]` · `[blocked — PDF only]` · `[inference]`

---

## Q1 — Can Google pin *processing* to a jurisdiction? (the key unverified claim)

**Verdict: the archive's claim is now VERIFIED — with caveats.** Google's jurisdiction-pinned path exists and is documented at length, but it is no longer branded "Vertex AI": the relevant product is now **Gemini Enterprise Agent Platform (formerly Generative AI on Vertex AI / Vertex AI Platform)** — the terms page lists "Generative AI on Gemini Enterprise Agent Platform (formerly Generative AI on Vertex AI)" among services configurable for data location, and the blog-era URL `cloud.google.com/vertex-ai/generative-ai/docs/locations` now 404s (moved) `[6][7][verified — primary, read]`.

**What the official docs now say (all `[verified — primary, read]` unless noted):**

1. **ML processing location is endpoint-determined.** "ML processing is the method by which data is processed … or applies the model to the data for model inference. The geographic location of this processing is determined by your choice of endpoint" — with three endpoint classes `[1]`:
   - **Jurisdictional multi-region endpoints** — "ML processing stays within that specific geographical region (such as the United States or the European Union)". EU hostname: `https://aiplatform.eu.rep.googleapis.com`; US: `https://aiplatform.us.rep.googleapis.com` `[2]`.
   - **Locational endpoints** (e.g., `europe-west1`) — "ML processing remains entirely within the broader multi-regional or country jurisdiction associated with that region"; for EU regions, in-country vs EU-wide processing varies **by model** via per-model tables `[1]`.
   - **Global endpoints** (e.g., `aiplatform.googleapis.com`) — "don't provide regional isolation or data residency guarantees"; docs explicitly tell customers not to use the global endpoint when they have ML-processing requirements `[2]`.
2. **Per-model availability tables** list, e.g., Gemini 3.7 Flash / 3.6 Flash / 3.5 Flash (and transcription models **Chirp 2 / Chirp 3: Transcription**) with support across EU multi-region and European locational endpoints; partner models (Anthropic Claude on Google Cloud, Mistral) and open models (DeepSeek, Llama, Gemma, Qwen…) have narrower tables including EU multi-region `[1]` (checkmark cells did not render in the fetch — model presence in each table confirmed, cell-level detail `[single-source — page structure]`).
3. **Data at rest** stays in the customer-selected location regardless of endpoint `[1]` (consistent with the older at-rest residency blog `[7]`).
4. **CMEK:** available for Agent Platform ML resources and Gemini Enterprise. **Gemini Enterprise CMEK requires US or EU multi-region apps/data stores (global excluded)** `[4]`; for Agent Platform CMEK, the key ring must be in the same region as the resource and global-location resources are barred from CMEK (Cloud KMS keys must reside within a fixed geographic boundary) `[3]`. Compliance table: "CMEK for Gemini Enterprise … US and EU multi-region APIs only" `[4b]`.
5. **EU Data Boundary-style commitment:** Google does not use the same "EU Data Boundary" branding as Microsoft, but the multi-region EU endpoint is described as providing "data-in-use isolation controls" aligned with GDPR/HIPAA-type sovereign requirements; terms page covers "AI/ML Data Location" configuration for the service `[1][6]`.

**Caveats / residual noise `[verified — read]`:**
- **UK/London nuance:** Google's EU multi-region table includes `europe-west2` (London) `[2]`, yet the UK is not an EU member state — a jurisdictional subtlety for strict EU-GDPR pinning claims. A Google developer-forum thread discusses exactly this ambiguity `[8]`.
- **Pay-as-you-go vs provisioned-throughput ambiguity:** a live Google developer-forum thread (Dec 2025–2026) asks whether inference processing is *guaranteed* in-region under pay-as-you-go; community claims say PAYGO may not guarantee regional processing and Provisioned Throughput is required. **No official doc found that explicitly resolves this pricing-model question** — the official residence docs speak of endpoint choice, not billing tier. `[single-source — forum, unresolved]`
- **Gemini API (developer API / AI Studio) unchanged:** the terms still say paid-service logs "may be stored transiently or cached in any country in which Google or its agents maintain facilities" — the Gemini API still cannot pin processing. `[9][verified — provider-indexed]`

**Archive claim test:**
> *"Gemini API cannot pin processing; a jurisdiction-pinned Google path would be Vertex AI (not verified)"* → First half **stands** `[9]`; second half is now **verified** (path = Gemini Enterprise Agent Platform EU multi-region / locational endpoints, per-model caveats, CMEK US/EU only, PAYGO ambiguity unresolved).

---

## Q2 — Provider matrix freshness (re-check vs. Feb 2026 archive)

| Provider | Jurisdiction pinning (Aug 2026) | Key facts as of now | Changes since Feb 2026 archive | Confidence |
|---|---|---|---|---|
| **Azure / Microsoft Foundry** (was Azure AI Foundry) | **Yes — strongest option** | Deployment types: Global (any geography) / **Data Zone (US, EU, APAC)** / **Regional (single region)** — "Pin processing to a single region: Standard or Regional Provisioned"; EU Data Zone = Azure EU Data Boundary incl. EFTA; EEA-located human reviewers for EEA resources; "prompts and completions are not used to train, retrain, or improve the base models"; no-training/no-retention commitments documented `[14][15][16]` | Brand rename to **Microsoft Foundry**; **APAC Data Zone launches 2026-09-01**; pricing: EU Data Zone +20% (was +11%), regional non-US +25–50% vs Global from 2026-09-01; `gpt-4o-transcribe`/`gpt-4o-mini-transcribe` now available in EU regions (francecentral, swedencentral, etc.) `[14][17]` | cross-checked (3 MS docs) |
| **OpenAI API** | **EU only, approval-gated** (unchanged) | `eu.api.openai.com` = EU (EEA+CH) storage **and** processing; requires MAM/ZDR/Eyes Off/Safety Retention approval + Modified Retention amendment; other non-US regions (UK, JP, CA, KR, SG, AU, IN, UAE) are storage-only; UAE also processing; per-request regional selection possible from Global-geography projects via `us.`/`eu.` prefixed domains; no training on API data (Mar 2023); **`/v1/audio/transcriptions` now shows abuse-monitoring retention "None" and is ZDR-eligible** `[10][12][13]` | **10% price uplift** for data-residency-eligible models released ≥ 2026-03-05; EU region selectable only for **new Projects**; in-region GPU inference (US/EU) for eligible ChatGPT Enterprise/Edu/Healthcare; EKM (BYOK via AWS/GCP/Azure KMS) `[10][11][13]` | cross-checked (3 OpenAI sources) |
| **Anthropic API** | **US-only pinning** (unchanged) | `inference_geo: "us" \| "global"` per request, plus workspace-level `allowed_inference_geos` / `default_inference_geo`; workspace geo = "us" only; US-only inference priced 1.1×; parameter supported **only on Claude 4.6+ models** (older models → 400); Claude Platform on AWS = us/global; Claude in Microsoft Foundry = Azure US Data Zone instead of `inference_geo` `[18][19][20]` | No EU; the old org-level "global routing opt-out" has been migrated to the new geo controls (automatic for legacy opt-out customers) `[18]` | cross-checked (3 Anthropic sources) |
| **Google Gemini API** | **No** (unchanged) | Paid tier: no training; "may be stored transiently or cached in any country" `[9]` | None found | single-source (binding terms) |
| **Google Vertex AI → Gemini Enterprise Agent Platform** | **Yes, with caveats** (see Q1) | EU multi-region endpoint pins ML processing to EU; locational endpoints pin to jurisdiction; global endpoint = no guarantee; per-model tables; CMEK US/EU multi-region only `[1][2][3][4]` | Product renamed; docs restructured; PAYGO-vs-provisioned question still unresolved in official docs `[8]` | cross-checked (4 Google docs) |

---

## Q3 — whisper-1 voice leak (current repo state)

**Verdict: the leak persists. Transcription is still hardwired to the OpenAI API in both apps; the repo has not been pushed since 2026-02-09** (GitHub API: `pushed_at: 2026-02-09T22:38:43Z`, `updated_at: 2026-07-07`, 73★/19 forks, license "other" = PolyForm) `[25][verified — primary, read]`. All code facts below are `[verified — primary, read]` from raw.githubusercontent.com on 2026-08-22:

1. **`config.py`** `[21]`: `MODEL_TRANSCRIPTION = "whisper-1"  # or e.g. gpt-4o-transcribe or gpt-4o-mini-transcribe` with the unchanged comment: *"the transcription of optional voice input always uses the OpenAI API in the code here, but other speech-to-text APIs and models could be integrated similarly"*. `API = "openai" | "anthropic" | "google" | "azure"` unchanged; comment "(full_voice_interview.py currently only supports 'openai')" unchanged.
2. **`interview.py`** (main platform, text interviewer + optional voice input) `[23]`: the interviewer client is provider-agnostic, **but** a separate client is created for audio regardless of provider:
   ```python
   if "voice" in config.INPUT_MODE:
       client_audio = OpenAI(api_key=st.secrets["KEY_OPENAI"])
   ...
   st.session_state.response_transcription = client_audio.audio.transcriptions.create(
       model=config.MODEL_TRANSCRIPTION, file=voice_response).text
   ```
   → Voice input **silently routes through OpenAI even when `API = "azure" | "anthropic" | "google"`**. This is the concrete mechanism behind the archive's "jurisdiction leak."
3. **`full_voice_interview.py`** (voice interviewer + voice respondent) `[22]`: still OpenAI-only end-to-end — `if config.API == "openai": client = OpenAI(...)` else `raise ValueError("Only the OpenAI API is currently supported for this interview.")`; transcription via `client.audio.transcriptions.create(model=config.MODEL_TRANSCRIPTION, ...)`; interviewer audio via OpenAI audio chat completions; closing TTS via `gpt-4o-mini-tts` (`client.audio.speech`).
4. **README** `[24]`: consent requirement unchanged (flag in consent forms that interview data is sent to third-party AI providers); licence split now explicit: **code = PolyForm Noncommercial 1.0.0; docs = CC BY-NC 4.0**.

**Is provider-neutral voice now possible?** *Feasible but not implemented* `[inference from code + provider docs]`:
- The config comment explicitly invites other STT integration (no code exists).
- Feasible replacements that now have in-jurisdiction options: **Azure AI Speech / Azure OpenAI `gpt-4o-transcribe` regional deployment** (EU regions available) `[14]`; **Google Chirp 3: Transcription via Gemini Enterprise Agent Platform EU endpoint** (listed in EU multi-region model table) `[1]`; **self-hosted open-weight Whisper** (jurisdiction = your server).
- OpenAI per se is no longer a dead end for EU: `eu.api.openai.com` supports `/v1/audio/transcriptions` with storage+processing (approval-gated), and the endpoint row shows no abuse-monitoring retention `[10]`.

---

## Q4 — Consent templating

### AAPOR Task Force, *Responsible AI Integration in Survey Research* (May 2026)
- Existence/date **verified**: announcement page + AAPOR Reports page ("Released May 2026") `[27][28]`; presented at AAPOR 81st Annual Conference 2026-05-14 (two task-force panels incl. "Transparency and Disclosure in AI-Enabled Survey Research") `[28b]`.
- Full-text reading of the PDF is **`[blocked — PDF only]`** (per run instructions no PDF fetch). **However**, the provider indexed the PDF body: the direct snippet confirms Section 6 "Responsibility to Human Subjects" — "AI does not diminish researchers' ethical obligations … Disclosure, consent, data protection, risk assessment, and fairness must explicitly account for AI-enabled inference, automation, and downstream reuse" `[26][verified — provider-indexed]`.
- The two specific archive claims — (a) **"distinct, clearly labeled consent item with opt-out where feasible" for AI-assisted interviewing and external data retention**, and (b) the warning about third-party platforms **"that may retain or further train on personal data"** — are corroborated by the search provider's synthesis of the PDF text but could not be read directly: `[blocked — PDF only; corroborated by provider-indexed content — high confidence, not primary-read]`. If the lead needs word-level certainty, a PDF pass is required (out of scope for this run).
- Adjacent AAPOR instruments verified `[29][30]`: TI Attachment C (rev. June 2026) now requires reporting disclosure of AI used for data collection/processing ("AI-assisted interviewing" listed as a data-collection strategy; what task AI performed; human oversight); revised 2026 Code of Ethics states AI-generated responses are **not** research participants and must be labeled as such.

### Rutgers HRPP AI Consent Guide — still current: YES
- Released **January 2026** by Rutgers OfR HRPP+IRB teams (Ringel, Watkinson, Walker) as **"AI in Human Subjects Research: Rutgers Consent Guide"**; a **living document**; provides suggested consent language for AI-as-focus and AI-as-tool (e.g., transcription services); part of the HRPP Toolkit; authors ran a PRIM&R CE session ("Demystifying AI for Research Participants: A Practical IRB Consent Framework") `[31][32][33][verified — primary, read]`.

### Samuel & Wassenaar, JERHRE 2025 — `[verified — provider-indexed]`
"Joint Editorial: Informed Consent and AI Transcription of Qualitative Data" (DOI 10.1177/15562646241296712; online 2024-11-26; KCL Pure records publication status "2026"): researchers should inform participants when AI transcription software processes recordings and obtain **explicit consent**; recommends a specific clause in consent forms (jargon-free explanation of how AI transcription works), data-security vetting of the service, **right to decline/withdraw AI transcription even while consenting to the study**, human verification of transcripts, and manual-transcription alternatives; supplies **generic wording** naming the AI service + data-governance link `[34][35]`. Notable detail: the editorial says it drew on ChatGPT- and Claude-drafted position statements in developing its own `[34]` (context for its drafting, not a validity issue).

### IRB uptake — NEW evidence (this run)
- **University of Kentucky (IRB office)**: "Sample Informed Consent Language for AI" — a consent-clause menu incl. **AI Transcription** ("We will use {tool} to transcribe audio recordings… reviewed and corrected by the research team"), **Third-Party Software: Cloud Service** ("Your data may be stored, retained, and used for training by {software} according to the Terms and Use Agreement"), data-security and AI-training/development clauses, option-to-withdraw caveats `[36][verified — primary, read]`; plus AI Protocol Submission Guidance requiring vendor data access/ownership disclosure `[37]`.
- **McMaster REB (Canada)**: transcription guidance with **example consent language** naming the AI transcription platform, linking its privacy policy, noting REB approval and residual external-server risk `[38]`.
- **Wits HREC (Medical) SOP v2 (July 2026)**: AI transcription of FGD/IDI recordings requires **HREC notification — no blanket approval, case-by-case**, must be specified in protocol or via formal amendment, "closed" (non-internet) tool required, researcher must intervene/correct outputs; separate signature line required for audio recording `[39]` (provider-indexed PDF).
- **SACHRP/OHRP (2022)** remains the federal-level advisory anchor (consent elements "ill-suited" to AI risks) `[40]`.
- **Education-research template**: IACOMPUTINGED *Template: AI Use Policy for Education Researchers* (Apr 2026) — consent/assent clauses incl. "will not use the data to train new AI tools" vs training-risk variants `[41]` (provider-indexed PDF).

### Journal policies (author-side disclosure; no journal found requiring *participant-facing* AI-consent language)
- **Dialogica** (psychology journal): mandatory "AI Use Disclosure" incl. transcription/annotation within documented research methods; personal data must not enter AI systems unless consent/ethics basis, provider retention/training terms assessed, etc. `[42][verified — primary, read]`.
- **Journal of Singing** (Jul 2026 policy): AI-assisted transcription is "Yellow" — requires disclosure when it materially affects analysis `[43]` (provider-indexed PDF).
- **Counterpoint:** *Druk Journal* policy explicitly lists "Transcription of interviews or audio content" as **not requiring disclosure** `[43b]` — norms are not uniform.
- **AMEE Guide No.192** (HPER publishing) — "disclose when in doubt" framing `[43c]` (provider-indexed PDF).

### Platform consent templates — what actually ships
- **OpenInterviewer** (open-source, MIT, BYOS Gemini/Claude): participant flow = **link → consent → interview → complete**; repo ships a `consent/` flow (`src/app/consent/page.tsx` + `api/consent/route.ts`); consent text is **researcher-supplied study info**; acceptance is **timestamped and written to storage as the first record** `[44][45][verified — primary, read]`. No built-in AI-use-specific template clause evidenced.
- **Synap** (open-source, multi-provider): "A consent/disclosure modal must be explicitly accepted before the chat begins. That acceptance event (timestamped, with participant token) is the first record written to storage"; config includes an **"IRB disclosure text — Verbatim consent language"** field `[51][verified — primary, read via search result]`.
- **AInterviewer** (new open-source platform, AGPLv3, local/open-weight models for security): consent is part of the pre-determined study setup; by design supports **locally hosted / open-weight LLMs** ("optimised for … open-source or open-weight LLMs rather than API-based models" — jurisdiction = your infrastructure) `[50][verified — provider-indexed abstract/HTML]`.
- **Outset**: FAQ verified (SOC 2 Type II, ISO 42001, GDPR/HIPAA/CCPA, anonymous participation, no PII required, deletion on request) — **no public AI-consent template found** `[46]`.
- **Dovetail**: educational "Understanding Informed Consent in Research" pages + AI Product-Specific Terms (must disclose AI-generated content externally) — **no AI consent template found** `[47][48]`.
- **Looppanel**: security page — AI summarization "used only for your session, never for model training", non-retention `[49]` — **no consent template found**.
- **Merren** (India/US AI-moderated research vendor): plain-language consent flow with affirmative response + four elements incl. opt-out; GDPR/DPDP framing `[52][single-source — vendor blog]`.

---

## Refreshed provider matrix (as of 2026-08-22) — summary

See table in Q2. Bottom line: **Azure (Microsoft Foundry) regional/Data-Zone deployments remain the strongest pinning option; OpenAI EU remains approval-gated but now has priced, per-request regional processing and a no-retention audio-transcription row; Anthropic remains US-only (richer geo controls, Claude 4.6+ only); Gemini API still unpinnable; Google's pinnable path is now officially the Gemini Enterprise Agent Platform with per-model EU ML-processing commitments — the archive's "not verified" flag is resolved (verified, with the PAYGO caveat).**

---

## New sources found (not in archive)

- Google Cloud — Data residency, Gemini Enterprise Agent Platform — https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency
- Google Cloud — Deployments and endpoints — https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/locations
- Google Cloud — CMEK (Agent Platform ML) — https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/cmek
- Google Cloud — CMEK (Gemini Enterprise) — https://docs.cloud.google.com/gemini/enterprise/docs/cmek
- Google Cloud — Security controls for Generative AI — https://docs.cloud.google.com/vertex-ai/generative-ai/docs/security-controls
- Google Cloud — Services Data Residency (terms, v. July 1 2026) — https://cloud.google.com/terms/data-residency
- Google dev forum — Vertex inference-location PAYGO thread — https://discuss.google.dev/t/vertex-ai-generative-ai-is-inference-location-guaranteed-within-region-for-pay-as-you-go/298384
- OpenAI — Introducing data residency in Europe (2026-01-16) — https://openai.com/index/introducing-data-residency-in-europe/
- OpenAI Help Center — Data residency for the OpenAI API — https://help.openai.com/en/articles/10503543-data-residency-for-the-openai-api
- OpenAI — Business data privacy, security and compliance — https://openai.com/business-data/
- Anthropic — Data residency (Claude API/Platform docs) — https://platform.claude.com/docs/en/manage-claude/data-residency
- Anthropic — Claude Platform on AWS data residency — https://docs.aws.amazon.com/claude-platform/latest/userguide/data-residency.html
- Anthropic support — US-only inference — https://support.claude.com/en/articles/15422948-enable-us-only-inference-for-your-organization
- Microsoft — Deployment types for Microsoft Foundry Models — https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types
- Microsoft — Foundry Model Deployment Pricing Update (2026) — https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/microsoft-foundry-model-deployment-pricing-update/4535385
- University of Kentucky — Sample Informed Consent Language for AI — https://research.uky.edu/office-research-integrity/ai-machine-learning-human-research/sample-ic-language-ai-use
- McMaster — Informed Consent (AI transcription guidance) — https://research.mcmaster.ca/home/support-for-researchers/research-resources/digital-research-commons-pilot-drcp/transcription/informed-consent/
- Wits HREC (Medical) SOP v2 (July 2026) — https://www.wits.ac.za/media/wits-university/research/medicalhrec/documents/sop-focus-group-discussions.pdf
- Dialogica — AI policy — https://dialogica-journal.com/index.php/journal/policy-on-the-use-of-generative-ai-and-ai-assisted-tools
- AInterviewer (arxiv html) — https://arxiv.org/html/2606.20588
- Synap (opieeipo) — https://github.com/opieeipo/Synap
- Merren — AI Research Ethics (data privacy in AI interviews) — https://merren.io/blog/ai-research-ethics-data-privacy/
- InferCheck — Vertex AI GDPR profile — https://infercheck.eu/en/provider/vertex

---

## Coverage Status

**Directly checked (read):** repo files `config.py`, `interview.py`, `full_voice_interview.py`, README (raw.githubusercontent.com, 2026-08-22); GitHub API metadata; Google data-residency/locations/CMEK/security-controls/terms pages; OpenAI data-controls page; Microsoft Foundry privacy + deployment-types pages; Anthropic residency pages (via provider fetch); Rutgers HRPP/AI Ethics Lab pages; University of Kentucky consent-menu page; McMaster guidance page; SAGE DOI landing for Samuel & Wassenaar; AAPOR announcement/Reports/TI Attachment C/Code of Ethics; OpenInterviewer README + repo tree.

**Blocked:** AAPOR report full text (PDF, per instructions) — exact "distinct consent item" phrasing corroborated only via provider-indexed content; Dialogica/JOS/Wits/IACOMPUTINGED PDFs read only as provider-indexed text; Anthropic API-and-data-retention page (retention details like "flagged content kept up to 2 years") was **not** re-verified this run — inherited from archive [35][36].

**Unresolved for follow-up:** (1) Google PAYGO-vs-provisioned processing guarantee (official docs silent; forum thread) `[8]`; (2) cell-level CMEK per-model matrices (checkmark rendering lost in fetch) `[5]`; (3) whether any *mainstream* journal (vs. Dialogica/JOS niche titles) requires participant-facing AI-consent language — none found, `[inference]`; (4) exact AAPOR wording verification needs an out-of-scope PDF pass.

---

## Queries run
Round 1 (4 search cells): Vertex AI residency (3 angles); OpenAI EU / Azure Foundry / Anthropic / Gemini residency 2026; AAPOR + Rutgers + Samuel&Wassenaar + IRB guidance;  + fetch of repo config.py/full_voice_interview.py/README.
Round 2: AAPOR "consent + opt-out + retain/train" targeted; journal policies; OpenInterviewer consent; Dovetail/Looppanel/Outset; + fetch of interview.py + GitHub API.
Round 3: fetch OpenAI data controls + MS Foundry data privacy; CMEK search ×2; AAPOR search; OpenInterviewer tree; + locate OLD Vertex locations page (404 → rebrand evidence).
Round 4: AAPOR task-force consent synthesis ×2 (opt-out wording corroboration).

## Sources accepted
30 accepted (numbered 1–52 in the evidence table; 30 with load-bearing claims). No sources rejected for credibility; two deprioritized to single-source context-only: Google dev-forum PAYGO thread (unresolved question, not a claim) and InferCheck GDPR profile (vendor-style compliance checker, cross-references official docs).

## Sources (numbered, matching evidence table)
1. Google Cloud — Data residency | Gemini Enterprise Agent Platform — https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency
2. Google Cloud — Deployments and endpoints | Gemini Enterprise Agent Platform — https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/locations
3. Google Cloud — CMEK (Agent Platform ML) — https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/cmek
4. Google Cloud — CMEK | Gemini Enterprise — https://docs.cloud.google.com/gemini/enterprise/docs/cmek
4b. Google Cloud — Compliance certifications and security controls | Gemini Enterprise — https://docs.cloud.google.com/gemini/enterprise/docs/compliance-security-controls
5. Google Cloud — Security controls for Generative AI — https://docs.cloud.google.com/vertex-ai/generative-ai/docs/security-controls
6. Google Cloud — GCP Services Data Residency (terms) — https://cloud.google.com/terms/data-residency
7. Google Cloud blog — Generative AI data residency guarantees (at-rest) — https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-generative-ai-data-residency-guarantees-for-data-stored-at-rest
8. Google dev forum — Vertex AI inference location PAYGO — https://discuss.google.dev/t/vertex-ai-generative-ai-is-inference-location-guaranteed-within-region-for-pay-as-you-go/298384
9. Google — Gemini API Additional Terms of Service — https://ai.google.dev/gemini-api/terms
10. OpenAI — Data controls in the OpenAI platform — https://developers.openai.com/api/docs/guides/your-data
11. OpenAI — Introducing data residency in Europe — https://openai.com/index/introducing-data-residency-in-europe/
12. OpenAI Help Center — Data residency for the OpenAI API — https://help.openai.com/en/articles/10503543-data-residency-for-the-openai-api
13. OpenAI — Business data privacy, security, and compliance — https://openai.com/business-data/
14. Microsoft Learn — Deployment types for Microsoft Foundry Models — https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types
15. Microsoft Learn — Data, privacy, and security for Foundry Models sold by Azure — https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy
16. Microsoft Learn — EU Data Boundary: optional capabilities that transfer data — https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-transfers-for-optional-capabilities
17. Microsoft Community Hub — Foundry Model Deployment Pricing Update — https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/microsoft-foundry-model-deployment-pricing-update/4535385
18. Anthropic — Data residency | Claude Platform docs — https://platform.claude.com/docs/en/manage-claude/data-residency
19. AWS — Data residency | Claude Platform on AWS — https://docs.aws.amazon.com/claude-platform/latest/userguide/data-residency.html
20. Anthropic support — Enable US-only inference — https://support.claude.com/en/articles/15422948-enable-us-only-inference-for-your-organization
21. friedrichgeiecke/interviews — config.py — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/config.py
22. friedrichgeiecke/interviews — full_voice_interview.py — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/full_voice_interview.py
23. friedrichgeiecke/interviews — interview.py — https://raw.githubusercontent.com/friedrichgeiecke/interviews/main/interview.py
24. friedrichgeiecke/interviews — README — https://github.com/friedrichgeiecke/interviews
25. GitHub API — friedrichgeiecke/interviews metadata — https://api.github.com/repos/friedrichgeiecke/interviews
26. AAPOR — Responsible AI Integration in Survey Research (PDF) — https://aapor.org/wp-content/uploads/2026/05/Responsible-AI-Integration-In-Survey-Research.pdf
27. AAPOR — Task Force report announcement — https://aapor.org/announcements/task-force-on-responsible-ai-integration-in-survey-research-report/
28. AAPOR — Reports — https://aapor.org/publications-resources/reports/
28b. AAPOR — 81st Annual Conference special sessions — https://aapor.org/aapor-81st-annual-conference/special-sessions/
29. AAPOR — Transparency Initiative Disclosure Elements (June 2026) — https://aapor.org/wp-content/uploads/2022/11/TI-Attachment-C.pdf
30. AAPOR — Standards and Ethics (2026 revision) — https://aapor.org/standards-and-ethics/
31. Rutgers AI Ethics Lab — AI Consent Guide — https://aiethicslab.rutgers.edu/ai-in-human-subjects-research-rutgers-consent-guide/
32. Rutgers — HRPP Toolkit — https://research.rutgers.edu/faculty-staff/compliance/human-research-protection/toolkit
33. Rutgers — New AI Consent Guide news — https://research.rutgers.edu/news/new-ai-consent-guide-helps-researchers-strengthen-irb-submissions-and-protect-participants
34. SAGE — Samuel & Wassenaar, JERHRE (DOI landing) — https://doi.org/10.1177/15562646241296712
35. KCL Pure — publication record — https://kclpure.kcl.ac.uk/portal/en/publications/informed-consent-and-ai-transcription-of-qualitative-data/
36. University of Kentucky — Sample Informed Consent Language for AI — https://research.uky.edu/office-research-integrity/ai-machine-learning-human-research/sample-ic-language-ai-use
37. University of Kentucky — AI/Machine Learning in Human Research — https://research.uky.edu/office-research-integrity/ai-machine-learning-human-research
38. McMaster — Informed Consent (AI transcription) — https://research.mcmaster.ca/home/support-for-researchers/research-resources/digital-research-commons-pilot-drcp/transcription/informed-consent/
39. Wits HREC (Medical) — SOP Focus Group Discussions v2 (July 2026) — https://www.wits.ac.za/media/wits-university/research/medicalhrec/documents/sop-focus-group-discussions.pdf
40. HHS OHRP SACHRP — IRB Considerations on AI — https://www.hhs.gov/ohrp/sachrp-committee/recommendations/irb-considerations-use-artificial-intelligence-human-subjects-research/index.html
41. IACOMPUTINGED — Template: AI Use Policy for Education Researchers — https://iacomputinged.org/wp-content/uploads/2026/04/Template_-ParticipantConsentAssent_April2026.pdf
42. Dialogica — Policy on Generative AI and AI-Assisted Tools — https://dialogica-journal.com/index.php/journal/policy-on-the-use-of-generative-ai-and-ai-assisted-tools
43. Journal of Singing — AI policy — https://www.nats.org/_Library/JOS_Web_Page/JoS_AI_Policy_7_29_26.pdf
43b. Druk Journal — Guideline for Use of generative AI — http://drukjournal.bt/wp-content/uploads/2025/12/Guideline-for-Use-of-generative-AI.pdf
43c. AMEE Guide No.192 — When and how to disclose AI use in academic publishing — https://media.tghn.org/uploads/topics/attachments/When_and_how_to_disclose_AI_use_in_academic_publishing__AMEE_Guide_No.192.pdf
44. OpenInterviewer (linxule) — README — https://github.com/linxule/openinterviewer
45. GitHub API — openinterviewer tree (consent page) — https://api.github.com/repos/linxule/openinterviewer/git/trees/main?recursive=1
46. Outset — FAQ — https://outset.ai/resources/faq
47. Dovetail — Understanding Informed Consent in Research — https://dovetail.com/research/what-is-informed-consent-in-research/
48. Dovetail — Product-Specific Terms: AI Features — https://dovetail.com/legal/ai-features/
49. Looppanel — Security — https://help.looppanel.com/en/articles/11011890-security-on-looppanel
50. AInterviewer — platform paper (arXiv HTML) — https://arxiv.org/html/2606.20588
51. Synap (opieeipo) — https://github.com/opieeipo/Synap
52. Merren — AI Research Ethics blog — https://merren.io/blog/ai-research-ethics-data-privacy/
53. InferCheck — Google Vertex AI GDPR Profile — https://infercheck.eu/en/provider/vertex