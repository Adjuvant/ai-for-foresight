---
type: wiki-page
slug: coarse-to-fine-generation
category: concept
tags:
  - coarse-to-fine-generation
  - language-models
  - image-generation-lineage
  - discrete-latents
  - hierarchical-generation
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/unit-of-prediction-vs-output]]"
  - "[[Wiki/Concepts/parallel-decoding]]"
  - "[[Wiki/Concepts/lossy-latent-bottleneck]]"
created: 2026-11-09
updated: 2026-11-09
---

# Coarse-to-Fine Generation

Generating in ascending detail: commit to the gist of an output early, when the decision is cheap and forgiving, then refine toward detail. The structural template is VAR's next-scale image prediction, transferred to text by Next-Concept Modeling with a learned multiscale code hierarchy and three text-specific fixes.

## Key Claims
- Reordering generation so that cheap, forgiving decisions come first and expensive, unforgiving ones come last lets the expensive decisions be made with more context than in a left-to-right order. ([[Research/Machine Learning Methods/ncm]])
- A coarse-to-fine hierarchy is only usable for generation if the coarse levels are forced to carry real information, which nested dropout accomplishes by training with a random coarseness cutoff. ([[Research/Machine Learning Methods/ncm]])
- Parallel emission within a level lets several errors enter the next level's conditioning at once, a strictly worse failure mode than autoregressive decoding's single wrong token. ([[Research/Machine Learning Methods/ncm]])
- Text cannot be downsampled the way images can, so a coarse-to-fine text model must learn its downsampler and push reconstruction accuracy close to lossless before the hierarchy is trustworthy. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

Coarse errors propagate rather than cancel, which is why the paper needs error injection to survive its own train/inference mismatch — the coarse-to-fine order does not make early mistakes cheap, it makes them few.

## Related
- [[Wiki/Concepts/unit-of-prediction-vs-output]]
- [[Wiki/Concepts/parallel-decoding]]
- [[Wiki/Concepts/lossy-latent-bottleneck]]

## Open Questions

- The nearest text-side neighbour, HDLM, predicts semantic scales coarse-to-fine inside a diffusion model and gets one line of related work and no experiment. The two mechanisms are not compared.
- Whether the ordering helps or merely enables parallel emission is not separated: the ablation varies attention pattern, not decode order.

## Mechanism and lineage
The design template is VAR, next-scale prediction for images, which the authors name as the source of both the multiscale residual quantisation schedule and the classifier-free-guidance scheme [[Literature/ncm#^ncm]] [[Literature/ncm#^ncm-23|23]]. Two ingredients make it work on text. Nested dropout, taken from ImageFolder, samples a coarseness cutoff during training and evaluates the reconstruction loss at that cutoff, so the coarse levels cannot free-ride on the fine ones and remain decodable on their own [[Literature/ncm#^ncm]] [[Literature/ncm#^ncm-30|30]]. A token-level reconstruction objective plus a learned downsampler handles the fact that images can be averaged down and text cannot: a single wrong character can invert a meaning or break code, so reconstruction accuracy is pushed to 99.79–100% on most datasets, weakest on WMT14 at 98.79% [[Literature/ncm#^ncm]].

Because a level is emitted in parallel, several errors can enter the next level's conditioning at once — worse than autoregressive decoding's one-wrong-token. The authors compensate with conditioning corruption: replace a fraction of input codes with uniform draws from the same level's codebook, decreasing linearly across levels, mean rate around 0.50, targets left clean. The per-level rate schedule is unpublished [[Literature/ncm#^ncm]].
