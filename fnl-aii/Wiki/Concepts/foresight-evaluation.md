---
type: wiki-page
slug: foresight-evaluation
category: concept
tags:
  - evaluation
  - foresight
  - llm
  - calibration
  - contamination
  - foresight-evaluation
sources:
  - "[[Research/AI Systems & Deployment/foresight-automation-weak-signals]]"
  - "[[Research/AI Systems & Deployment/science-fiction-military-planning]]"
  - "[[Raw/kohlerStrategicForesightKnowledge2021]]"
related:
  - "[[Wiki/Concepts/science-fiction-planning]]"
  - "[[Wiki/Concepts/forecasting]]"
  - "[[Wiki/Concepts/strategic-foresight]]"
  - "[[Wiki/Concepts/trend-analysis]]"
created: 2026-08-23
updated: 2026-08-29
---

# Foresight Evaluation

The field's core open problem: how to measure whether scanning is 'early and right'. Candidate designs — fully prospective tournaments, dynamic future-only benchmarks, chronological backtests with leakage audits, calibration scoring, and process metrics — each have distinct failure modes; LLM training-data contamination is the first-order technical threat.

## Key Claims
- Dynamic future-only benchmarks make LLM data leakage structurally impossible by construction: ForecastBench keeps ~1,000 continuously refreshed questions with no known answer at submission, and expert forecasters still beat the top LLM (p<0.001) [16] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-16]].
- Retrospective backtests of LLM foresight are threatened by training-data contamination — measured at 1–45% across six benchmarks with up to +14% accuracy inflation — unless leakage is audited, e.g., the BLF forecaster's backtesting framework at <1.5% leakage [29] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-29]] [17] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-17]].
- More capable LLMs can make worse tail-risk forecasts under single-threshold metrics; evaluation should pair continuous unbounded accuracy measures with bounded binary scores [21] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-21]].
- Evaluation design changes conclusions: a single GPT-4 failed live probabilistic forecasting (statistically indistinguishable from the 50% baseline), while a 12-LLM ensemble matched a 925-human crowd and LLM assistants improved human forecasters 24–28% [14] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-14]] [34] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-34]] [35] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-35]].
- Impact evaluation of speculative-future interventions is currently absent: no verified study shows a commissioned SF program (NATO, Red Team Défense, Dstl, US Army) changing doctrine or procurement, and the only peer-reviewed audit reports narrative convergence (twelve 'strikingly similar' NATO stories) rather than measured effect [2][4] [[Literature/science-fiction-military-planning#^science-fiction-military-planning-2]] [[Literature/science-fiction-military-planning#^science-fiction-military-planning-4]].
- Experts suffer from self-serving memory and hindsight bias: political experts who in 1988 gave a probability estimate that the Communist Party would lose its monopoly on power misremembered their own estimate after the collapse of the Soviet Union, recalling a number on average 31 percentage points higher than what they had stated (per Tetlock). ([[Raw/kohlerStrategicForesightKnowledge2021]])
- Self-assessed forecasting track records diverge sharply from independent assessment: Ray Kurzweil judged 78% of his technology predictions for 2009 entirely correct, while independent assessors judged 27% true (and 12% true for his 2019 predictions) (per Armstrong). ([[Raw/kohlerStrategicForesightKnowledge2021]])
- The IEA's flagship World Energy Outlook consistently predicted that solar adoption would persist at contemporary levels, while the actual trajectory was much faster — a documented case of persistence bias in institutional forecasting. ([[Raw/kohlerStrategicForesightKnowledge2021]])
- The Brier score is the standard evaluation metric for probabilistic sociopolitical forecasts, while F1-style precision and recall highlight the challenge of verifying forecasts for low-probability, high-impact risks such as CBRN attacks, where always predicting the negative condition already suffices for high accuracy. ([[Raw/kohlerStrategicForesightKnowledge2021]])
- Weather and hurricane forecasts have improved consistently over decades given more data and supercomputers, in contrast to mixed track records for sociopolitical predictions — 'the crowd appears harder to predict than the cloud'. ([[Raw/kohlerStrategicForesightKnowledge2021]])

## Tensions and Contradictions

## Related
- [[Wiki/Concepts/science-fiction-planning]]
- [[Wiki/Concepts/forecasting]]
- [[Wiki/Concepts/strategic-foresight]]
- [[Wiki/Concepts/trend-analysis]]

## Open Questions
