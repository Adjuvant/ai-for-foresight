# Window 1 notes (chars 0-6000)

## Key claims
- Repo accompanies paper "Conversations at Scale: Robust AI-led Interviews" (SSRN 4974382).
- Contains code for an AI-led interview platform for research studies + notebooks for AI-assisted transcript analysis.
- Supports LLM providers: OpenAI, Anthropic, Google, plus open-source/weight models via Microsoft Azure.
- All content strictly for non-commercial research only (see licence section).
- Two entry paths: (a) instant Colab testing without Python install; (b) full Streamlit-based platform (~1h local setup from scratch).
- Platform supports text-based and voice-based interviews; two apps: `interview.py` (text interviewer, text+voice input) and `full_voice_interview.py` (voice interviewer, voice-only input, uses multimodal model that generates sound directly, e.g. `gpt-audio-2025-08-28`; currently OpenAI-only).

## Technical approach / methodology (from primitives)
- Streamlit app; conda env from `interviewsenv.yml`; API keys in `/.streamlit/secrets.toml`; model + interview outline configured in `config.py` (API, model name, outline topics, text/voice input options, additional API kwargs).
- Azure requires per-model deployment via Azure AI Foundry; use Azure Inference API endpoint + API version.
- Cloud hosting option for research studies including online surveys (tutorial-online-interviews.md) — window cut off mid-sentence here.

## Cited evidence
- SSRN paper link: https://ssrn.com/abstract=4974382
- Colab: https://colab.research.google.com/drive/1sYl2BMiZACrOMlyASuT-bghCwS5FxHSZ
- Video tutorials playlist: https://www.youtube.com/playlist?list=PLEKqeUuYDSq-O1niu2Kqm0FGa0mMgYRx7

# Window 2 notes (chars 6000-8847)

## Key claims
- Cloud hosting: tutorial-online-interviews.md describes step-by-step how AI-led interviews are hosted online and integrated into other survey components.
- Transcript analysis: separate `analysis` folder with code and discussion (analysis/README.md) on LLM-based transcript analysis.
- Data handling: interview data is sent to API providers (OpenAI, Anthropic, Google, Azure) to compute responses; providers process under their own terms/privacy/retention policies, which must be reviewed before studies.
- Compliance burden on researchers: data-protection laws, research ethics (IRB/ethics committee approvals), and consent forms must flag that interview data is sent to third-party AI providers for responses and transcript analysis.
- Licences: source code = PolyForm Noncommercial License 1.0.0; documentation (README, markdown, notebook text) = CC BY-NC 4.0. Strictly non-commercial.
- Paper: "Conversations at Scale: Robust AI-led Interviews", Geiecke, Friedrich and Jaravel, Xavier (2026), SSRN 4974382; BibTeX citekey geieckejaravel2026.
