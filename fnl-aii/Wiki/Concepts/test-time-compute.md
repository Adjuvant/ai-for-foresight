---
type: wiki-page
slug: test-time-compute
category: concept
tags:
  - test-time-compute
  - inference-scaling
  - sampling
  - language-models
  - evaluation
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/consensus-candidate-selection]]"
  - "[[Wiki/Concepts/parallel-decoding]]"
created: 2026-11-09
updated: 2026-11-09
---

# Test-Time Compute (Three Families)

Spending more compute at inference is not one technique but at least three bets with different requirements and failure modes: thinking longer, sampling many answers and selecting among them, and learning at test time. Arguments about whether it works are usually arguments about which of the three is meant.

## Key Claims
- Spending more compute at inference time covers at least three distinct bets — thinking longer, sampling and selecting, and learning at test time — which differ in what they require and how they fail. ([[Research/Machine Learning Methods/ncm]])
- A candidate-count sweep is a different intervention from increasing hierarchy depth or refinement passes, and reporting it as test-time scaling invites the reader to attribute it to the wrong axis. ([[Research/Machine Learning Methods/ncm]])
- Sample-and-select raises the expected quality of a batch without making any individual sample better, so it raises the floor of a set rather than the ceiling of an answer. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

The phrase is used in the literature for at least three different bets with different costs, requirements and failure modes, so a claim that test-time compute "works" or "does not work" is underdetermined until the family is named.

## Related
- [[Wiki/Concepts/consensus-candidate-selection]]
- [[Wiki/Concepts/parallel-decoding]]

## Open Questions

- Whether the three families compose — for instance sampling many drafts, then refining the chosen one — and whether the combined return is greater or less than either alone.
- How cost should be counted across the families: per request, per unit of quality, or per correct answer, each of which favours a different one.

## The three families
**Think longer** — longer reasoning traces, iterative refinement, repeated passes over one answer. Buys a better single answer. Requires training that rewards it or a refinement loop. Fails by committing to a wrong line and doubling down.

**Sample and select** — draw many complete answers, then choose. Buys a better pool, then a pick. Requires only a scoring rule, optionally a trained verifier. Fails because selection is only as good as the scorer. See [[Wiki/Concepts/consensus-candidate-selection]].

**Learn at test time** — update the model during use. Buys adaptation to the specific problem. Requires safe online updating and a signal. Fails by overfitting the instance, forgetting, or drifting.

Next-Concept Modeling takes the second bet in its cheapest form: no trained judge, no verifier, no weight updates. Its paper calls the candidate sweep "test-time scaling", which is why the phrase misleads in this case — the scaled axis is the number of complete drafts, not hierarchy depth, refinement passes or extra work per level [[Literature/ncm#^ncm]].
