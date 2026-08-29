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
related: []
created: 2026-08-23
updated: 2026-08-23
---

# Foresight Evaluation

The field's core open problem: how to measure whether scanning is 'early and right'. Candidate designs — fully prospective tournaments, dynamic future-only benchmarks, chronological backtests with leakage audits, calibration scoring, and process metrics — each have distinct failure modes; LLM training-data contamination is the first-order technical threat.

## Key Claims
- Dynamic future-only benchmarks make LLM data leakage structurally impossible by construction: ForecastBench keeps ~1,000 continuously refreshed questions with no known answer at submission, and expert forecasters still beat the top LLM (p<0.001) [16] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-16]].
- Retrospective backtests of LLM foresight are threatened by training-data contamination — measured at 1–45% across six benchmarks with up to +14% accuracy inflation — unless leakage is audited, e.g., the BLF forecaster's backtesting framework at <1.5% leakage [29] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-29]] [17] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-17]].
- More capable LLMs can make worse tail-risk forecasts under single-threshold metrics; evaluation should pair continuous unbounded accuracy measures with bounded binary scores [21] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-21]].
- Evaluation design changes conclusions: a single GPT-4 failed live probabilistic forecasting (statistically indistinguishable from the 50% baseline), while a 12-LLM ensemble matched a 925-human crowd and LLM assistants improved human forecasters 24–28% [14] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-14]] [34] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-34]] [35] [[Literature/foresight-automation-weak-signals#^foresight-automation-weak-signals-35]].

## Tensions and Contradictions

## Related

## Open Questions
