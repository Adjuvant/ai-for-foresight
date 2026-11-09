---
type: wiki-page
slug: consensus-candidate-selection
category: concept
tags:
  - consensus-selection
  - minimum-bayes-risk
  - sampling
  - test-time-compute
  - evaluation-metrics
  - consensus-candidate-selection
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/test-time-compute]]"
  - "[[Wiki/Concepts/parallel-decoding]]"
created: 2026-11-09
updated: 2026-11-09
---

# Consensus Candidate Selection (Minimum Bayes Risk)

Generate several complete candidates, score each against the others with an existing overlap metric, and keep the one nearest the group. Marketed as minimum Bayes risk; in practice a consensus pick that needs no reference answer, no judge and no retraining, and that optimises the metric rather than quality.

## Key Claims
- Minimum Bayes risk selection needs no reference answer, trained judge or reward model — only a text-overlap metric and a set of independently drawn candidates. ([[Research/Machine Learning Methods/ncm]])
- Candidate selection optimises whatever metric scores the overlap, so it targets that metric rather than correctness and can prefer a bland consensus draft over a sharper unusual one. ([[Research/Machine Learning Methods/ncm]])
- The cost of consensus selection is linear in the number of candidates while the benefit is diminishing, so a small candidate count captures most of the gain — 16 drafts on XSum and 12 on WMT14. ([[Research/Machine Learning Methods/ncm]])
- Selection among existing answers is cheaper to adopt than any mechanism for improving an answer, because it requires no training, no reward model and no gradient. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

The picker optimises the metric it scores with, not quality: a ROUGE-shaped picker will prefer a bland median-shaped draft over a sharper unusual one. That is a known failure of consensus selection rather than a property of this paper.

## Related
- [[Wiki/Concepts/test-time-compute]]
- [[Wiki/Concepts/parallel-decoding]]

## Open Questions

- Whether a metric-free scorer — one that does not simply reproduce the reported metric — changes which candidate wins.
- How much of the gain survives when the metric used for selection differs from the metric used to report, which is the ordinary case outside benchmarks.

## How it works, in plain terms
Ask the model for the same output 16 times. Score every draft against the other 15 using the same overlap measure the result will be graded on — ROUGE for summaries, BLEU for translation. No reference answer is involved. Keep the draft that looks most like the rest of the group.

That is the whole mechanism. There is no judge, critic, verifier or reward model. It is a consensus pick: find the middle of the cloud and take the point nearest to it. It works because a language model has many valid ways to say something and most drafts are reasonable, so the outliers tend to be the ones that drifted, hedged oddly, or slipped in an error.

In Next-Concept Modeling the sweep from 1 to 256 drafts returns +4.48 ROUGE-1, improving throughout and flattening late; the headline settings use 16 drafts on XSum (ROUGE-L 29.6) and 12 on WMT14 (BLEU 25.2) [[Literature/ncm#^ncm]]. Cost is linear in the number of drafts while benefit is not, which is why the paper needs no rule for allocating compute: there is no allocation decision to make.

Compare the neighbours, since they are routinely conflated. Self-consistency is a majority vote, which works for short discrete answers and not for free text. Best-of-N with a reward model needs a trained judge and inherits that judge's biases. A process verifier scores intermediate steps and must be trained on step-level labels. Consensus selection is the only one of the four that needs nothing but a text-overlap measure — which is why it is cheapest and why its ceiling is lowest [[Literature/ncm#^ncm]].
