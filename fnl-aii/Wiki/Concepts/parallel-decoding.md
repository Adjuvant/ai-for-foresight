---
type: wiki-page
slug: parallel-decoding
category: concept
tags:
  - parallel-decoding
  - inference-efficiency
  - language-models
  - throughput
  - latency
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/unit-of-prediction-vs-output]]"
  - "[[Wiki/Concepts/coarse-to-fine-generation]]"
  - "[[Wiki/Concepts/lossy-latent-bottleneck]]"
created: 2026-11-09
updated: 2026-11-09
---

# Parallel Decoding

Emitting several positions per forward pass rather than one, so that throughput comes from needing fewer sequential network calls rather than from making each call faster. The distinction matters because pass cost has a hardware floor while pass count has only a willingness-to-emit floor.

## Key Claims
- Throughput improves mainly by needing fewer sequential model calls, not by making each call cheaper, because one call costs roughly the same whether it emits one token or fifty. ([[Research/Machine Learning Methods/ncm]])
- The wall-clock gain from parallel decoding exceeds the reduction in model calls, because the earliest calls are the cheapest and later calls grow with level length — 10–31× against 6–16×. ([[Research/Machine Learning Methods/ncm]])
- The reported speedup is not obtainable by running the released code: it requires a KV cache, bf16 autocast and CUDA graphs that ship disabled or absent. ([[Research/Machine Learning Methods/ncm]])
- Parallel decoding loses its advantage on batched serving, where a same-size autoregressive model was measured up to 8.7× faster at batch 32. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

The advantage inverts with batching. Fewer sequential passes helps latency-bound single-request decoding and stops helping once the workload is throughput-bound, where a same-size autoregressive model was measured 8.7× faster at batch 32 [[Literature/ncm#^ncm-48|48]].

## Related
- [[Wiki/Concepts/unit-of-prediction-vs-output]]
- [[Wiki/Concepts/coarse-to-fine-generation]]
- [[Wiki/Concepts/lossy-latent-bottleneck]]

## Open Questions

- Whether the pass reduction survives a compute-matched comparison against an autoregressive model. None exists in the paper or in the literature.
- How much of the gain is parallel emission and how much is quantisation: the two are bundled, not ablated against each other.

## Measurement reality
The speedup is a product of two factors, not one: 6–16× fewer network calls, and cheaper early calls because coarse levels have few positions to compute. That is why the measured wall-clock gain, 10–31×, exceeds the call reduction [[Literature/ncm#^ncm]].

The claim is real under the authors' settings and not reproducible from the shipped code. A reporter measured 44.71 s for XSum against a ≈3.4 s figure read-off, and reached 3.45 s only after adding a KV cache, bf16 autocast and CUDA graphs himself; the maintainer confirmed those as the benchmark settings [[Literature/ncm#^ncm-15|15]]. None of the three is enabled in the released code, and no timing script ships.

Independent measurements on ordinary hardware put the method in a different regime than the headline numbers suggest. On a 6 GB RTX 3050 Laptop GPU, batch-1 latency was 268 ms at p50 and 325 ms at p95, while at batch 32 a same-size autoregressive model was 8.7× faster [[Literature/ncm#^ncm-48|48]]. On an RTX 3080 at batch 16 the figure was 12.6 ms per sequence [[Literature/ncm#^ncm-35|35]].
