---
type: project
slug: strix-halo-ml
status: active
created: 2026-11-09
updated: 2026-11-09
domain: local-ml-infrastructure
phase: 0 - baseline
wiki_connections:
  - "[[Wiki/Concepts/parallel-decoding]]"
  - "[[Wiki/Concepts/lossy-latent-bottleneck]]"
  - "[[Wiki/Entities/amd-strix-halo]]"
source_connections:
  - "[[Research/Machine Learning Methods/ncm]]"
---

# Strix Halo ML Workstation

## Scope

The operational base for the Strix Halo workstation — the machine that runs ML work for this vault. It holds the environment procedure, a capability ledger of what fits and what does not, and the record of what actually ran. This is not a research thread. Its job is to stop the same ROCm discoveries being made twice, and to make "will this run here" answerable from evidence rather than from optimism.

The hardware identity and stable facts live on [[Wiki/Entities/amd-strix-halo]]. Procedures and per-workload results live here.

## Research Questions

- RQ1: Which workloads fit this machine's capacity-and-bandwidth profile, and which need a different host?
- RQ2: Which framework paths break on ROCm-on-Windows, and what is the cheapest reliable workaround for each?
- RQ3: When does bandwidth rather than memory capacity decide whether a workload is practical here?

## Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 0     | Hardware facts and capability ledger — record what the machine is and what it has been checked against | active |
| 1     | Verified environment — one PyTorch bootstrap that survives a clean rebuild, Windows or WSL2 | todo |
| 2     | First end-to-end run — reproduce a released checkpoint and record what changed versus the paper | todo |

## Capability Ledger

The running answer to "will this run here". One row per workload checked. Every verdict names its evidence.

| Workload | Requirement | Verdict | Evidence |
|----------|-------------|---------|----------|
| Next-Concept Modeling, `lm1b-large` inference (837M parameters) | 16 GB at fp32, 8 GB at bf16; about 200 ms per request at batch 1 | **Fits, bandwidth-limited.** Capacity has roughly 6× headroom. The paper's graph-captured timing path is unavailable, so expect the ~9–10 s XSum class rather than 3.4 s | [[Research/Machine Learning Methods/ncm]] |

Add a row before starting any workload that has a published memory or throughput requirement. A row with `untested` in the verdict column is more useful than no row.

## Project Notes

- [[Projects/strix-halo-ml/pytorch-bootstrap]] — Repeatable bootstrap for a ROCm PyTorch environment on gfx1151 under Windows: wheel selection, verification checks, and the fallback ladder when a wheel or kernel is missing.

## Project Outputs

## Open Questions

- Questions the project has not yet resolved.
