---
type: wiki-page
slug: lossy-latent-bottleneck
category: concept
tags:
  - latent-representation
  - compression
  - language-models
  - tokenization
  - reconstruction-fidelity
  - lossy-latent-bottleneck
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/unit-of-prediction-vs-output]]"
  - "[[Wiki/Concepts/coarse-to-fine-generation]]"
  - "[[Wiki/Concepts/tokenization-inductive-bias]]"
  - "[[Wiki/Concepts/subword-tokenization]]"
created: 2026-11-09
updated: 2026-11-09
---

# Lossy Latent Bottleneck

When a model predicts through a compressed representation, the compressor sets a hard upper bound on everything downstream: information the representation cannot distinguish is lost to every model built on it. The bottleneck therefore deserves more scrutiny than the generator above it usually gets.

## Key Claims
- Any method that predicts through a compressed representation inherits that compressor's blind spots permanently, because information the representation cannot distinguish is lost to every model built on top of it. ([[Research/Machine Learning Methods/ncm]])
- An aggregate reconstruction rate of 99.8% is compatible with systematic loss of names, numerals and diacritics, because the error is concentrated on rare categories rather than spread across tokens. ([[Research/Machine Learning Methods/ncm]])
- The compressor, not the generator, sets the quality ceiling of a compressed-representation method, so compress-decompress fidelity belongs before any other evaluation. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

A high aggregate reconstruction rate is not reassurance: 99.8% averaged over tokens can still mean most instances of a rare category are corrupted, and rare categories are where correctness usually matters. The NCM paper documents the failure modes without propagating them quantitatively to downstream task accuracy.

## Related
- [[Wiki/Concepts/unit-of-prediction-vs-output]]
- [[Wiki/Concepts/coarse-to-fine-generation]]
- [[Wiki/Concepts/tokenization-inductive-bias]]
- [[Wiki/Concepts/subword-tokenization]]

## Open Questions

- What reconstruction rate is acceptable for a given task, given that the loss is concentrated on precisely the tokens with high information value.
- Whether compression should preserve an exact side channel for names and numerals rather than relying on aggregate fidelity.

## Evidence in the NCM paper
Round-tripping text through the multiscale code hierarchy recovers it at 99.79–100% on most datasets, with WMT14 the weakest at 98.79% [[Literature/ncm#^ncm]]. The paper's own Table 11 names what still fails: named entities, numerals and diacritics. Independent testers found the same thing downstream — proper names drop out more often than ordinary tokens, and rare names and numbers survived the codec at 89% on XSum and 96% on WMT14 [[Literature/ncm#^ncm-18|18]] [[Literature/ncm#^ncm-35|35]].

A follow-up found a second-order consequence: NCM's own samples are not the code stacks its tokenizer would assign. Re-encoding rewrites 61–96% of codes at the six coarsest levels while decoding back to the same text for 98% of samples, which is evidence about the sampler rather than the compressor, but it only exists because a lossy middle layer creates the gap between codes and text in the first place [[Literature/ncm#^ncm-34|34]].
