---
type: research-brief
slug: open-questions-ai-led-interviews
date: 2026-08-22
status: draft
derived_from: fnl-aii/Research/Computational Social Science/ai-led-interviews.md
verification: medium (inherited from source brief — no new search performed)
tags:
  - ai-led-interviews
  - open-questions
  - llm-interviewers
  - survey-methodology
  - data-residency
  - research-ethics
---

# Open Questions from Recent Research: AI-Led Interviews

## Summary

This brief consolidates the open questions left by the vault's most recent research thread — the
AI-led-interviews horizon scan (Geiecke & Jaravel, "Conversations at Scale", SSRN 4974382; archived at
[fnl-aii/Research/Computational Social Science/ai-led-interviews.md](fnl-aii/Research/Computational%20Social%20Science/ai-led-interviews.md)).
It is a knowledge-synthesis document: **no new search was performed**; every claim inherits the
medium-verification status (cross-checked / single-source / unverified) of the source brief.

The field is in a characteristic position: the strongest headline claims rest on **single-source
evidence**, and the open questions cluster into four threads — validation, interviewer-induced bias,
analysis-pipeline consistency, and governance/consent. A standing tension separates the
peer-reviewed synthetic-respondent strand from the mostly-preprint AI-interviewer strand.

## Key Findings (context for the open questions)

- AI-led interview transcripts blind-grade at ~3/5 = "average human expert"; the LSE Behavioural Lab
  comparison (AI voice 3.93 > human FTF 3.51 > AI text 2.98 > human online text 2.42) exists **only in
  the Feb 2026 author PDF** — single-source, unreplicated.
- The grading yardstick itself is noisy: inter-grader correlation 0.42 (0.62 excluding one outlier);
  sample reports shift between paper versions (French-election deployment 422 vs 384; US 466 vs 462).
- The analysis pipeline (hypothesis generation, then labelling) reaches ~86% of human-human
  inter-coder consistency (84% in the June 2025 version — both figures single-source per version);
  cross-model coding is stable (Claude 3.5 Sonnet vs GPT-4o: 0.83).
- No peer-reviewed measurement exists of sycophancy / interviewer-induced agreement bias in AI-led
  *research* interviews; false-memory induction is documented only in an adjacent domain (witness
  interviews, Chan et al.).
- Jurisdiction pinning is fully available only via Azure regional deployments; OpenAI EU is
  approval-gated; Anthropic is US-only; Gemini cannot pin processing. Voice transcription in the seed
  platform always routes through OpenAI `whisper-1`, silently breaking pinning for voice input.

## Thread 1 — Validation

1. **Replication of the LSE Behavioural Lab result.** The AI-voice-beats-human-benchmark finding is
   single-source (author PDF). Open: independent replication; whether the REStud published version
   (author-reported acceptance) reproduces the numbers.
2. **Reliability of the yardstick.** Inter-grader correlation 0.42–0.62 asks how much of the "≈ average
   human expert" verdict is grader noise. Open: a grading protocol with higher inter-rater reliability.
3. **Cross-version sample discrepancies** (422 vs 384; 466 vs 462) are unexplained; check against the
   published version before citing scale figures.
4. **Boundary of complementarity.** Authors concede AI interviewers "never match the best human
   experts" — the method is positioned as a complement for large-scale measurement, hypothesis
   generation, and mechanism discovery. Where that boundary falls is unspecified.

## Thread 2 — Interviewer-induced bias

5. **Sycophancy / agreement bias in AI-led research interviews is unmeasured.** Closest anchors are
   model-level sycophancy (Sharma et al.) and conversational-AI false-memory induction in witness
   interviews (Chan et al.). Whether an adaptive conversational interviewer *shapes* the answers it
   records — especially in political views, subjective mental states, and mental models of policy — is
   the single most consequential open question for the method.
6. **Response homogenization.** Ideation homogenization under LLM influence (Anderson et al.) raises
   whether AI-led interviews narrow the response diversity that motivates open-ended collection.

## Thread 3 — Analysis-pipeline consistency

7. **Which figure is canonical?** LLM-RA agreement is 86% of human-human in the Feb 2026 version, 84%
   in June 2025 — both single-source per version. Open: published-version reconciliation.
8. **Acceptance standard.** The human baseline (RA–RA correlation 0.76) bounds what LLM coding can
   exceed; whether "86% of human-human" is an acceptable standard for a given research claim is
   unsettled. Cross-model stability (0.83) suggests the model is not the bottleneck — the benchmark is.

## Thread 4 — Governance & consent

9. **Vertex AI as Google's residency path** was flagged but never verified — the one provider without
   a jurisdiction-pinning path today (Gemini API) may have one via Vertex.
10. **The voice-input residency leak.** `whisper-1` transcription bypasses configured provider choice;
    jurisdiction-pinned studies must restrict to text input or replace the transcription call. Open:
    whether provider-neutral voice is achievable at all.
11. **Consent templating.** Platforms require researchers to flag third-party AI processing but ship no
    consent template. AAPOR (May 2026), Rutgers HRPP, and Samuel & Wassenaar (JERHRE 2025) supply
    wording; open: IRB uptake and operationalizability of the "distinct labelled consent item with
    opt-out" requirement.

## Standing Tension

The peer-reviewed canon on AI in surveys sits with the **synthetic-respondent** strand — Argyle's
distributional fidelity, Bisbee's failure on social-desirability items, Westwood's existential-threat
warning — while the **AI-interviewer** strand (this research) is mostly preprint. The field's strongest
claims about AI *interviewers of real humans* are currently the least peer-reviewed. The unresolved
boundary between Bisbee (item-dependent failure) and Westwood (surveys doomed) is where the next
validation study should bite: where exactly are LLM respondents valid, and do AI interviewers change
where that boundary falls?

## Consolidated Open Questions

1. Does the REStud published version replicate the LSE Behavioural Lab human-vs-AI result?
2. How large is interviewer-induced sycophancy/agreement bias in AI-led research interviews?
3. Do AI-led interviews homogenize response diversity relative to human interviewers?
4. Which coding-agreement figure (86% vs 84%) is canonical, and what is the acceptance standard?
5. Is Vertex AI a viable Google jurisdiction-pinning path (processing, not just storage)?
6. Can voice input be made provider-neutral, or is OpenAI transcription a hard dependency?
7. What consent template should ship with an AI-interview platform, and how do IRBs receive it?
8. Does AI-interview-elicited data shift the valid-use boundary for synthetic respondents?

## Sources

Primary thread (full 45-entry list at the archived brief):
1. Geiecke & Jaravel — Conversations at Scale: Robust AI-led Interviews — SSRN 4974382 (Cloudflare-gated) — https://ssrn.com/abstract=4974382
2. Feb 2026 author revision PDF (single-source for Behavioural Lab + 86% figures) — https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf
3. LSE POID WP120 PDF, June 2025 (84% figure) — https://poid.lse.ac.uk/textonly/publications/downloads/poidwp120.pdf
4. CEPR DP19705 — https://cepr.org/publications/dp19705

Vault pages (knowledge layer):
5. [Wiki Synthesis — AI research methods: LLMs as interviewer, respondent, analyst](fnl-aii/Wiki/Synthesis/ai-research-methods.md)
6. [Wiki Concept — AI-led interviews](fnl-aii/Wiki/Concepts/ai-led-interviews.md)
7. [Wiki Concept — LLM-assisted qualitative analysis](fnl-aii/Wiki/Concepts/llm-assisted-qualitative-analysis.md)
8. [Wiki Concept — AI data residency](fnl-aii/Wiki/Concepts/ai-data-residency.md)
9. [Wiki Concept — AI consent in research](fnl-aii/Wiki/Concepts/ai-consent-research.md)
10. [Wiki Concept — Synthetic respondents](fnl-aii/Wiki/Concepts/synthetic-respondents.md)

## Limitations

- Single-thread provenance: derived from one archived brief; the vault has no other research threads to
  triangulate against.
- No fresh verification pass: numbers inherit the source brief's medium-verification tags; the
  single-source items (Behavioural Lab, 86%/84%) stay single-source here.
- Not a deep-research run: this is a consolidation, not a new scan. Treat as an internal working brief.