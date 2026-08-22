# Summary: Conversations at Scale — Robust AI-led Interviews (repository README)

**Source:** https://github.com/friedrichgeiecke/interviews
**Date:** 2026-08-22
**Tier:** 2 (2 windows)

## Key Claims
- The repository delivers an end-to-end toolkit for AI-led (LLM-conducted) interviews in research studies: a Streamlit-based interview platform plus notebooks for AI-assisted transcript analysis, accompanying the paper *Conversations at Scale: Robust AI-led Interviews* (Geiecke & Jaravel, 2026, SSRN 4974382).
- It supports LLM providers across OpenAI, Anthropic, Google, and open-source/weight models via Microsoft Azure; Azure requires per-model deployment through Azure AI Foundry.
- Two exploration paths: (a) a no-install Colab notebook for quick idea testing (needs an API key), and (b) the full platform with ~1h local setup from scratch via miniconda and an `interviewsenv.yml` environment.
- Two interview apps ship: `interview.py` — text-based interviewer with text and voice input — and `full_voice_interview.py` — a voice interviewer with voice-only input that uses a multimodal audio-generating model (e.g. `gpt-audio-2025-08-28`), currently OpenAI-only, where intonation can adjust endogenously to conversation content.
- Respondent data is transmitted to third-party API providers to compute answers; researchers must review providers' terms/privacy/data-retention policies, secure IRB/ethics approvals, and flag third-party AI processing in consent forms.
- Licensing is strictly non-commercial: source code under PolyForm Noncommercial License 1.0.0; documentation (README, markdown, notebook text) under CC BY-NC 4.0.

## Field Context
The source positions itself as reusable research infrastructure for AI-led qualitative interviews "at scale" — that is, replacing or augmenting human interviewers in survey research. How this paper positions itself against prior interview-method literature (e.g. earlier LLM-interviewing work or chatbot-survey methods) is not stated in the README and is **source-inferred only from the title**: the "robust" claim presumably addresses reliability/replicability concerns of AI-conducted interviews relative to human-conducted ones. A corpus-level literature check (e.g. `/lit` on the SSRN paper) would be needed to establish the claimed novelty. The repo's practical design choices — provider-agnostic abstraction, voice-input support via multimodal audio models, and survey integration — suggest a survey-methodology research line (economics/social science, given author affiliation signals in the BibTeX style) rather than an NLP methods paper.

## Technical Hinges
1. **Provider abstraction + streaming text/voice interviews.** The platform decouples interview logic from model choice (four provider families + Azure-hosted open models), with configuration concentrated in `config.py` (model, outline, text/voice input options, extra API kwargs). Contrast from source's own framing: prior "passing LLM text output through a separate TTS model" is explicitly contrasted with the newer multimodal voice path that generates sound directly (`full_voice_interview.py`) — a hinge because endogenously adjusted intonation changes what a "voice interview" measures.
2. **AI-assisted transcript analysis as a first-class deliverable.** The `analysis/` folder is treated as a core component, not an afterthought — the paper covers interview *and* analysis methods, implying the pipeline's value is the full record-and-analyze loop.
3. **Compliance-by-design constraints.** Data flows to third-party providers (OpenAI/Anthropic/Google/Azure), and the README makes researcher responsibility (ethics approval, consent wording, data-protection law) an explicit design boundary — a turn on which any real deployment hinges.
4. **Non-commercial licensing.** PolyForm NC 1.0.0 + CC BY-NC 4.0 deliberately restrict the tool to non-commercial research, shaping who can legitimately adopt it.

## Methodology From Primitives
- **Approach**: config-driven Streamlit web apps (`interview.py`, `full_voice_interview.py`) that orchestrate multi-turn conversations between an LLM interviewer and a respondent, parameterized in `config.py` (API, model name, interview outline covering target topics, input modalities).
- **Setup/evidence path**: miniconda → clone repo → API key in `/.streamlit/secrets.toml` → `conda env create -f interviewsenv.yml` → `streamlit run interview.py`; cloud hosting for research studies integrates interviews into broader online surveys (tutorial-online-interviews.md).
- **Evaluation**: the README contains no benchmark, validation, or quality evidence for interview quality; the SSRN paper (not fetched here) is where the method is "discussed in detail."
- **Failure modes (inferred, not stated)**: model API outages/rate limits mid-interview, provider data-retention conflicts with ethics requirements, voice-interview functionality gated to a single provider (OpenAI), and accidental leakage of `secrets.toml` into public repos (explicitly warned against).

## Limitations
- The voice-based interviewer app supports only the OpenAI API at present.
- The README explicitly disclaims responsibility for data-protection and ethics compliance, placing the burden on researchers and warning that provider policies must be reviewed before any study.
- All content is restricted to non-commercial research; commercial use is excluded by licence.
- No quality/validation metrics for interview reliability are presented in the README itself (they may live in the paper).

## Follow-up Questions
1. What does the SSRN paper (4974382) actually claim about "robustness" — which validation, reliability, or consistency evidence supports using AI-led interviews at scale in real studies?
2. Does the `analysis/` toolkit perform open coding, thematic analysis, or something else, and what is the claimed agreement quality against human-coded transcripts?
3. For a study that must keep respondent data in a specific jurisdiction, which provider configuration (e.g. Azure region pinning vs. OpenAI) is compatible, and what consent language does the repo recommend?

## Verdict
This README establishes the repository's purpose, architecture, setup path, and legal/compliance envelope: a non-commercial, provider-agnostic platform for AI-led interviews and LLM-assisted transcript analysis that pairs a streamlit runtime with Azure deployment for open-weight models and survey integration. Its credibility rests on the accompanying SSRN paper, not on any evidence in the README. Researchers considering AI-conducted interviews should read this for feasibility and compliance framing; anyone evaluating the method's *validity* should read the paper and run the Colab/analysis notebooks themselves, and note the non-commercial licence before adopting.

## Sources
1. friedrichgeiecke/interviews README — https://github.com/friedrichgeiecke/interviews