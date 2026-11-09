---
type: project-note
note_type: protocol
project: strix-halo-ml
status: active
created: 2026-11-09
updated: 2026-11-09
---

# PyTorch Bootstrap on gfx1151 (Windows ROCm)

## Context

Any model or framework run on this machine goes through ROCm, not CUDA. The supported path is `gfx1151` wheels on Windows, and it has gaps that cost hours each time they are rediscovered. This note holds the sequence that works, so a new workload starts from a known state rather than from a search.

Nothing in this note has been executed on the machine yet. It is assembled from the published support matrices and the source code of one project. Treat step 6 in particular as a hypothesis to confirm, not a result.

## Procedure

1. Confirm the target. Check that the adapter reports `gfx1151` before installing anything. Do not assume the wheel finds the device.
2. Create a virtual environment on a Python version the wheels cover: 3.10, 3.11, 3.12 or 3.13.
3. Install PyTorch from the `gfx1151` wheel index, not from the default PyPI index. The default wheel is CPU-only or CUDA-only and installs without complaint.
4. Verify the device is visible with `torch.cuda.is_available()` and `torch.cuda.get_device_name(0)`. A ROCm build reports its device through the `cuda` namespace, so this is the correct check.
5. Verify a real kernel runs: multiply two matrices, then synchronise. A build can pass step 4 and fail here.
6. Verify attention: run one `scaled_dot_product_attention` call. This is the operation most likely to hit a missing kernel on RDNA 3.5.
7. Record the working set: PyTorch build, ROCm runtime, Python version. The wheel index moves, so a known-good combination is worth naming.
8. Set the UMA split in BIOS only if a workload needs more dedicated GPU memory than the default. Unified memory makes this a configuration choice, not a purchase.

## Load-bearing Constraints

- No CUDA. Anything depending on a CUDA-only kernel is unavailable on Windows: flash-attention, xformers, bitsandbytes, Triton kernels.
- No Triton on Windows means no `torch.compile`, so graph-captured and compiled execution paths are out. Any plan that assumes them will not reproduce.
- Bandwidth is about 256 GB/s. Capacity decisions are almost never binding here; throughput decisions usually are.
- Wheel coverage is per Python version. Upgrading Python can move the environment to a version with no published wheel.
- ZLUDA is not a supported path and was reported to fail on this target.

## Open Questions

- Whether the native Windows wheels or the WSL2 path is the more reliable long-term base. Not yet tested on this machine.
- Which operations beyond attention have no working kernel on RDNA 3.5.
- Whether the 96 GB addressable figure is stable across BIOS splits, or whether the usable fraction tracks the iGPU allocation.

## Revision History

- 2026-11-09 — created from the evidence in [[Research/Machine Learning Methods/ncm]]. Not executed.
