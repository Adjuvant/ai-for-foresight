---
type: wiki-page
slug: amd-strix-halo
category: entity
tags:
  - hardware
  - amd
  - rocm
  - local-inference
  - gfx1151
  - ml-infrastructure
  - amd-strix-halo
sources:
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/parallel-decoding]]"
  - "[[Wiki/Concepts/unit-of-prediction-vs-output]]"
  - "[[Wiki/Concepts/lossy-latent-bottleneck]]"
  - "[[Wiki/Concepts/consensus-candidate-selection]]"
created: 2026-11-09
updated: 2026-11-09
---

# AMD Strix Halo (Ryzen AI MAX+ 395 / Radeon 8060S)

AMD Ryzen AI MAX+ 395 / Radeon 8060S (`gfx1151`) workstation: 128 GB unified memory, 96 GB addressable on Windows, about 256 GB/s of bandwidth, running PyTorch through ROCm rather than CUDA. Capacity-rich and bandwidth-poor, so it takes models that fit the family comfortably and runs them at consumer-laptop speed.

## Key Texts
| Text | Year | Key Concept |
|------|------|-------------|

## Concepts Developed
- Wiki/Concepts/parallel-decoding
- Wiki/Concepts/lossy-latent-bottleneck

## Hardware facts
Ryzen AI MAX+ 395 with Radeon 8060S graphics — RDNA 3.5, architecture target `gfx1151`. Unified LPDDR5X memory, 256-bit, so about 256 GB/s of bandwidth. The machine holds 128 GB, of which 96 GB is addressable on Windows; the CPU/GPU split is a BIOS/UMA setting rather than separate physical pools.

Two consequences follow for ML work. Capacity is not the limiting resource — a 96 GB box exceeds almost any single-model inference requirement. Bandwidth is, and 256 GB/s is roughly a tenth of a data-centre accelerator, so bandwidth-bound inference runs at consumer-laptop speeds regardless of how much memory sits behind it.

## Software stack
ROCm 7.2 (January 2026) added Ryzen APU support, including PyTorch on Windows for `gfx1151`. Wheels are published for Python 3.10 to 3.13 [[Literature/ncm#^ncm-52|52]] [[Literature/ncm#^ncm-55|55]]. TheRock nightlies cover the same target for earlier access.

The stack is not CUDA and not a CUDA translation layer. A ROCm PyTorch build presents its devices under the `cuda` API names, so code written against `torch.cuda` runs unmodified. What does not work: Triton on Windows is still in progress, which removes `torch.compile` and therefore graph-captured execution; and xformers, flash-attention and bitsandbytes have no working Windows AMD builds [[Literature/ncm#^ncm-54|54]].

## What it has been checked against
Next-Concept Modeling, as a worked example of the check this page exists for. Largest released checkpoint is 837M parameters; requirement is 8 GB at bf16 or 16 GB at fp32, against 96 GB available, so capacity is a non-issue. Expected throughput about 200 ms per request at batch 1, derived from a measured 268 ms p50 on a 192 GB/s RTX 3050 Laptop and scaled by bandwidth. The speed settings the paper used are unavailable here because they depend on graph capture.

See [[Projects/strix-halo-ml/_index]] for the running capability ledger and the bootstrap procedure.
