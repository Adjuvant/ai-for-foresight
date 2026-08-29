---
type: question
slug: information-hazards-in-foresight
title: "Information Hazards in Foresight: Search and Research Report"
created: 2026-08-29
status: open
topic_path: Research/AI Governance & Ethics
tags:
  - information-hazards
  - dual-use
  - biosecurity
  - cbrn
  - strategic-foresight
  - knowledge-governance
related:
  - "[[Wiki/Concepts/strategic-foresight]]"
  - "[[Wiki/Concepts/scenario-planning]]"
  - "[[Wiki/Concepts/horizon-scanning]]"
  - "[[Wiki/Concepts/science-fiction-planning]]"
---

# Information Hazards in Foresight: Search and Research Report

Open research question for phase 1 (deep research → `outputs/` → `Research/AI Governance & Ethics/`). Split into two deliverables: **A — information-hazard literature search** (landscape map), **B — research report** (verified synthesis with construct-validity-bounded scope).

Seed source: Kohler, Kevin (2021). *Strategic Foresight: Knowledge, Tools, and Methods for the Future*, CSS Risk and Resilience Reports `[[Raw/kohlerStrategicForesightKnowledge2021]]` — especially its information-hazards box (Bostrom 2011 definition; dual-use research; responsible vulnerability disclosure; participatory futures unsuitable for CBRN contexts).

---

## Primary question

> What is the verified state of knowledge on **information hazards** — the dissemination of (true) information that may cause harm or enable some agent to cause harm (per Bostrom 2011) — as it (a) is conceptualised and critiqued in the scholarly literature, (b) arises in and constrains **strategic foresight practice**, and (c) is mitigated, and what changes when LLM-based research and agentic tools can generate or aggregate hazard-relevant knowledge at scale?

## Construct validity scope (anti-over-scoping guard)

The construct is **information hazard**, not "risky information" in general. Every sub-question below maps to one operational facet of this construct and to an observable evidence class. Search and report must stay inside these bounds:

| In scope (facets of the construct) | Adjacent constructs — OUT of scope unless shown to be a mechanism of the core construct |
|---|---|
| Bostrom's typology (2011) and its uptake, critiques, refinements | Misinformation / disinformation (false content; harm from falsity — the construct covers *true* information) |
| Field-specific operationalisation: biosecurity & dual-use research (e.g., Esvelt 2018; Lewis et al. 2019), cybersecurity (responsible vulnerability disclosure), AI safety (capability leakage, training-data release) | Content moderation / platform policy on falsehoods |
| Foresight-methods interaction: horizon scanning & search, scenario workshops, red teaming, participatory futures, science-fiction prototyping as *generators or disseminators* of hazard-relevant knowledge | Privacy and data protection (harms to persons from personal data) |
| Documented mitigations and their evidence base (NDAs, invitation-only formats, vetting, publication screening, dual-use oversight, responsible disclosure) | Copyright / intellectual property |
| Cost side of mitigations: chilling effects, loss of open science, verification cost | State secrecy / classification law (national-security disclosure regimes) |
| AI-era delta (2022–2026): LLM generation, aggregation, and exfiltration of hazard-relevant knowledge in research and foresight workflows | Laboratory biosafety / biorisk management of *physical* agents (knowledge vs. material pathways) |
| Contrast cases: how a claim *is or is not* an information hazard (e.g., the wildlife-sampling / PREDICT case; PAM prediction-market moral panic as a false-positive case) | Risk communication to the public (audience-facing messaging) |

Rule: a source enters the report only if it bears on **true-knowledge dissemination causing or enabling harm** in research or foresight contexts; adjacent constructs serve only as contrast cases. This is the explicit boundary that keeps the question from over-scoping into "all risks of information".

## Sub-questions (each bounded, each falsifiable by source evidence)

1. **Landscape (search deliverable).** What is the scholarly landscape of information hazards from Bostrom (2011) to 2026: the typology, which fields adopted it, which critiques or boundary disputes exist, and which works are the primary anchors (Esvelt 2018, PLoS Pathogens 14:10 e1007286; Lewis et al., *Risk Analysis* 39:5, 975–981)?
2. **Foresight interaction.** Which foresight methods generate or disseminate hazard-relevant (true) information, and what do documented practices actually do about it — CBRN civil protection and national risk analysis (Swiss ComNBC/FOCP reference scenarios), red teaming, closed vs. participatory scenario workshops, SF prototyping/design fiction?
3. **Mitigation evidence.** What documented mitigations exist (non-disclosure agreements, invitation-only workshops, participant vetting, responsible vulnerability disclosure, publication screening, dual-use review), and what *verified* evidence addresses their effectiveness against harm and their costs (chilling effects, lost open science, false negatives)?
4. **AI-era delta.** What changes when LLM-based research tools and deep-research agents can generate, aggregate, or inadvertently leak hazard-relevant knowledge at scale; what verified evidence exists 2022–2026 on such effects in foresight or research workflows (e.g., model-exposure of dual-use content, agentic-tool leakage), and what is still unverified?

## Report deliverable specification

- **Output**: one research brief in `outputs/` (numbered sources, provenance sidecar), archived under approved topic path `Research/AI Governance & Ethics` with `Literature/` note (block ids) per the archiver pipeline.
- **Wiki artifacts**: create `Wiki/Concepts/information-hazards` (Key Claims, wikilink attribution); update `strategic-foresight`, `scenario-planning`, `horizon-scanning`, `science-fiction-planning` only with genuinely new attributed claims (append-only rule).
- **Attribution rule (review-synthesis)**: the report must distinguish the source's own claims from reported positions of other authors (e.g., Kohler's CBRN-closed-workshop recommendation is his; Bostrom's definition is reported `per Bostrom`); every quantitative or comparative claim must trace to a source URL/DOI.
- **Success criteria**: (1) all four sub-questions answered or explicitly marked `unverified`/`no evidence found`; (2) construct boundary respected — no drift into misinformation, privacy, or physical biosafety; (3) at least one falsifiable claim per sub-question; (4) `validate_wiki_pages` clean (0 broken block links) on touched pages after ingest.

## Anchor sources (seed list for the search)

- Bostrom, Nick (2011). "Information Hazards: A Typology of Potential Harms from Knowledge." *Review of Contemporary Philosophy* 10: 44–79. (as cited in `[[Raw/kohlerStrategicForesightKnowledge2021]]`)
- Esvelt, Kevin (2018). "Inoculating Science against Potential Pandemics and Information Hazards." *PLoS Pathogens* 14:10, e1007286 (doi 10.1371/journal.ppat.1007286).
- Lewis, Gregory; Millett, Piers; Sandberg, Anders; Snyder-Beattie, Andrew; Gronvall, Gigi. "Information Hazards in Biotechnology." *Risk Analysis* 39:5, 975–981.
- Kohler, Kevin (2021). `[[Raw/kohlerStrategicForesightKnowledge2021]]` — information-hazards box; dual-use examples (mousepox, horsepox, gain-of-function influenza, botulinum toxin H); responsible-disclosure norm; participatory-futures caveat.