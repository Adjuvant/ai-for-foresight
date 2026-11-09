---
type: wiki-page
slug: unit-of-prediction-vs-output
category: concept
tags:
  - language-models
  - generation-granularity
  - discrete-latents
  - coarse-to-fine-generation
  - next-token-prediction
  - unit-of-prediction-vs-output
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/coarse-to-fine-generation]]"
  - "[[Wiki/Concepts/parallel-decoding]]"
  - "[[Wiki/Concepts/lossy-latent-bottleneck]]"
  - "[[Wiki/Concepts/tokenization-inductive-bias]]"
  - "[[Wiki/Concepts/subword-tokenization]]"
created: 2026-11-09
updated: 2026-11-09
---

# Unit of Prediction vs Unit of Output

A language model makes two decisions that most designs conflate: what unit it predicts next, and what unit it prints. Autoregressive models collapse them by predicting and emitting one token per pass. Next-Concept Modeling separates them, predicting a whole level of a learned code hierarchy — sometimes a single code standing for an entire passage — and expanding to tokens only at the end.

## Key Claims
- Prediction granularity and output granularity are independent design choices, so a model can predict a whole phrase or passage as one unit while still emitting text token by token. ([[Research/Machine Learning Methods/ncm]])
- When the predicted unit is a level rather than a token, the conditioning state becomes a real-valued partial reconstruction of the output rather than the sequence of already-emitted tokens. ([[Research/Machine Learning Methods/ncm]])
- A larger prediction unit is not by itself a quality improvement: Next-Concept Modeling trails a plain autoregressive baseline on TinyStories generation perplexity, 15.41 against 8.89. ([[Research/Machine Learning Methods/ncm]])
- Extending the pretraining design space to the encoding also extends it to the prediction unit, which is the coarser object the encoding makes available. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

The paper's own Table 8 puts an autoregressive baseline ahead of NCM on TinyStories generation perplexity (8.89 against 15.41), so the concept does not carry a quality claim on the evidence available. Both source and claim are from a single unreviewed preprint, arXiv 2610.14162 v1, with no revision and no peer-review outcome [[Literature/ncm#^ncm]].

## Related
- [[Wiki/Concepts/coarse-to-fine-generation]]
- [[Wiki/Concepts/parallel-decoding]]
- [[Wiki/Concepts/lossy-latent-bottleneck]]
- [[Wiki/Concepts/tokenization-inductive-bias]]
- [[Wiki/Concepts/subword-tokenization]]

## Open Questions

- Whether a coarse prediction unit helps at all when compute is matched against an autoregressive model: no compute-matched comparison exists in the paper or in the literature, and an independent practitioner recorded the same gap.
- Whether the separation holds when the hierarchy is learned per corpus rather than fixed per dataset — the released configs fix level ladders per dataset.
- Whether the idea generalises past text, given that its direct ancestor is next-scale image prediction (VAR).

## Instantiation in Next-Concept Modeling
Stage 1 trains a multiscale residual VQ-VAE that encodes text into K levels of discrete codes of increasing length — 8 levels for XSum, 12 for TinyStories, 32 for OpenWebText, from as few as one code at the coarsest level up to the full 1,024-token sequence at the finest. Stage 2 freezes that tokenizer and trains a plain transformer to predict one level per pass, all codes within a level in parallel, conditioned on the cumulative reconstruction of the levels already decoded [[Literature/ncm#^ncm]]. The printed output is still tokens, recovered by decoding the code stack at the end.

Three departures from next-token training follow: the predicted unit is a whole level rather than a token; the conditioning state is a real-valued partial decode rather than previous tokens; and all K levels are predicted in a single forward pass during training, with block-diagonal attention giving K cross-entropy terms per pass [[Literature/ncm#^ncm]].

Because codes within a level are modelled as conditionally independent, generation requires one transformer call per level — K sequential calls instead of one per token. That is the efficiency argument, and it is why this concept and [[Wiki/Concepts/parallel-decoding]] are entangled: changing the prediction unit is what makes parallel emission possible at all.
