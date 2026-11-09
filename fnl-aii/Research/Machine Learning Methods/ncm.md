---
type: research-brief
slug: ncm
topic_path: Research/Machine Learning Methods
date: 2026-11-09
status: verified
sources_consulted: 62
sources_accepted: 51
verification: PASS WITH NOTES
rounds: 9
tags:
  - language-models
  - coarse-to-fine-generation
  - discrete-latents
  - residual-vqvae
  - parallel-decoding
  - test-time-scaling
  - hazy-research
  - scan-setup
  - quick-synthesis
  - key-leads
  - ingested
archived_at: 2026-11-09T12:13:02.320Z
updated_at: 2026-11-09T12:13:02.320Z
references: Literature/ncm.md
---

# Next-Concept Modeling (NCM): mechanism, efficiency claims, and what independent scrutiny found

## Scan Setup

- **Seed:** free-topic, identity-locked — *Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation*, Kumbong\*, Khare\*, Mlauzi, Woen, Ding, Buchanan, Arora, Mirhoseini, Ré (Stanford CS/EE; Arora → Together AI). arXiv `2610.14162`. [1] [3] [4]
- **Intent:** `tell-me-more-about-this` (primary) + `explore-domain` for the immediate neighbourhood only.
- **Verification mode:** `medium` — load-bearing numbers are traced to a named table, figure, appendix or repo artifact; commentary is never the source of a number.
- **Focus:** `mixed` — method reconstruction first, then lineage and reactions.
- **Constraints honoured:** no press releases, roundups, social threads or SEO write-ups used as evidence; third-party material appears only where it is a *primary artifact* (a preprint with its own data, a repo, an issue thread with repro scripts).
- **Read/scope limit, stated plainly:** arXiv shows **v1 only** — a single submission, `[v1] Fri, 9 Oct 2026 17:49:45 UTC`, no `Comments:` field, no revision [1]. Everything below rests on **one unreviewed preprint**, an author blog post, and an author repo. There is no camera-ready and no peer-review outcome to check it against. Treat every claim as "the authors report", not "the field accepts".

## Quick Synthesis

NCM stops predicting the next word and starts predicting the next *layer of detail*. Stage 1 builds a compressor that turns a passage into a short stack of codes at ascending granularity — 12 rungs for TinyStories, 11 for WMT14, 8 for XSum, 32 for OpenWebText — from **a single code** standing for the whole passage up to 1,024 codes standing for every token [2]. Stage 2 freezes that compressor and trains an ordinary transformer to produce one rung per pass, every code on a rung at once, given the partial reconstruction of the rungs already done [2]. One answer therefore costs as many passes as there are rungs rather than as many as there are tokens — and the early passes are cheap, because coarse rungs have few positions to compute. That second point *is* the efficiency argument: the wall-clock gain (10–31×) is larger than the reduction in network calls (6–16×) precisely because later passes get more expensive [2].

The mechanism is not new mathematics. It is a careful transfer of VAR's next-scale prediction from images to text, plus three fixes the authors name themselves: a separate codebook per rung, training that forces coarse rungs to carry real information, and a reconstruction target measured at the token level [3]. The genuinely hard text-specific problem is that images can be downsampled and text cannot — a single wrong character can invert a meaning or break code. They handle it by learning the downsampling and by pushing reconstruction accuracy to 99.79–100% (weakest case WMT14, 98.79%) [2]. The biggest departure from diffusion language models is not the parallel decoding but the training budget: all rungs are predicted in a single pass, which gives ~4.9× fewer training tokens than the diffusion baselines on LM1B (13.36B vs 66B) and ~4× on OWT [2].

What the paper calls test-time scaling is much narrower than the phrase suggests, and it is the most easily misread part of the paper. The only thing that scales is **how many complete drafts the model generates before one is chosen** — not hierarchy depth, not refinement passes, not extra work per level. The paper sweeps 1 to 256 drafts: quality improves throughout and flattens late, worth **+4.48 ROUGE-1** end to end, with the headline settings using 16 drafts on XSum and 12 on WMT14 [2]. There is no rule for where to spend compute, no efficiency frontier, and no per-example adaptation — the last is listed as future work [2]. Plain-language walkthrough in *Concepts at a Level Above This Paper*, §6.

On whether it holds up: **the quality numbers reproduce; the speed numbers do not reproduce from the shipped code.** Three independent parties match the released checkpoints within noise (Sudoku 99.4/96.4/86.3 vs 99.5/96.5/86.1; WMT14 BLEU 22.61 vs 22.6; XSum 34.92/12.71/27.93 vs 35.0/12.8/28.0) [16] [22]. But the Figure 1 timings required three ordinary inference-speed settings — cached past work, half precision, and compiled compute graphs — that are **absent from the released code**. A reporter measured 44.71 s for XSum against a ≈3.4 s read-off, and reached 3.45 s only after adding all three himself; the maintainer then confirmed those as the authors' own benchmark settings [16]. As of this scan there are **zero academic citations**, no compute-matched NCM-vs-AR comparison anywhere, and the OpenWebText checkpoint — one of the three headline datasets — is not released at all [11] [41] [42].

## Concepts at a Level Above This Paper

Six ideas this paper carries that are not about this paper. Each is stated in plain language first, then tied back to NCM. These are the extraction candidates for the wiki — the paper's technical vocabulary (residual VQ, nested dropout, block-diagonal attention) belongs *inside* these pages as an instance of the idea, not as a page of its own. Every technical term is defined once in the glossary.

### 1. A model can predict in a different unit than it prints

Most language models make two decisions at once: what to predict next, and what to show. They predict one token and immediately print that token, so the prediction unit and the output unit are the same thing. They do not have to be. A model could predict a whole phrase, sentence or paragraph as one unit, then expand it into text afterwards.

*In NCM:* the prediction unit is one level of a learned hierarchy of text codes — sometimes a single code standing in for the whole passage, sometimes all 1,024 tokens at once. The printed unit is still a token, produced by decoding the codes at the end.

*Why it matters:* almost every cost and quality property of a language model follows from this one choice — how many forward passes a document costs, whether an error can be fixed locally, whether a model can be fast on long outputs without getting worse.

*Not claimed:* that a bigger unit is better. The paper's own Table 8 has an ordinary autoregressive baseline ahead of it on TinyStories quality (8.89 vs 15.41) [2].

### 2. Fix the gist before the detail

Commit early to the cheap decision, late to the expensive one. Getting the overall gist roughly right is forgiving: the detail can absorb an error. Getting the fifth token right is unforgiving: everything after it has to live with that choice. Coarse-to-fine generation reorders the work so the forgiving decisions happen first, and each one is made with more information than the one before.

*In NCM:* the coarsest level can be a single code for the entire sequence. Being wrong there costs one symbol; being wrong on the last token of an autoregressive continuation costs the rest of the text.

*Why it matters:* this is the general case for hierarchical generation in any medium, and the reason image generation adopted it before text did.

*Not claimed:* that coarse errors are harmless. They propagate — which is why the paper needs deliberate error injection during training to survive its own train/test mismatch.

### 3. Parallel decoding buys throughput from fewer passes, not faster passes

One forward pass costs roughly the same whether it emits one token or fifty. So emitting more per pass is close to free, and speed comes from needing fewer passes overall. The distinction sounds pedantic and decides everything: making a pass cheaper has a hard floor set by hardware, while reducing the *number* of passes has a floor set only by how much a model is willing to emit at once.

*In NCM:* the speedup is a product of two things — 6–16× fewer sequential steps, and cheaper early steps because coarse levels have few positions to compute. That is why the wall-clock gain (10–31×) exceeds the step reduction [2].

*Why it matters:* it separates two research programmes that get conflated in public discussion — making inference cheaper per unit of work, versus restructuring inference so that less sequential work exists.

*Not claimed:* that fewer passes always wins. Single-request latency, batched throughput and cost per token are three different measurements.

### 4. A lossy middle layer sets the ceiling, so the compressor matters as much as the generator

If a model predicts in a compressed representation, it inherits that compressor's blind spots permanently. Anything the representation cannot distinguish is lost to every model built on top of it. The middle layer is a hard upper bound, not a preprocessing detail — and it usually gets a fraction of the scrutiny that the model above it gets.

*In NCM:* round-tripping text through the hierarchy recovers it at 99.79–100% on most datasets (98.79% on WMT14), and the paper's own Table 11 names what is lost: names, numbers, diacritics [2]. Independent testers found the same thing downstream — proper names drop out more often than ordinary words [19] [36].

*Why it matters:* it is "garbage in, garbage out" with a number attached, and the test is cheap: compress, decompress, and measure what disappeared. That test should come before any other evaluation of a compressed-representation method.

*Not claimed:* that 99.8% is good enough. A 0.2% failure rate concentrated on names, doses or figures is not a rounding error; it is the risk.

### 5. "Test-time compute" is not one thing

Spending more compute at inference time is at least three different bets, routinely discussed as if they were one:

| Family | What you're buying | What it requires | How it fails |
| --- | --- | --- | --- |
| **Think longer** — longer reasoning, iterative refinement | A better *single* answer | Training that rewards it, or a refinement loop | Confident wrong reasoning; doubling down |
| **Sample and select** — many complete answers, then choose | A better *pool*, then a pick | A way to score answers | Only as good as the scorer; bland outputs win |
| **Learn at test time** — update the model during use | Adaptation to this problem | Safe online updating, and a signal | Overfits the instance; drifts |

NCM takes the second bet in its cheapest form: no trained judge, no verifier, no weight updates. Its gains are bounded by the quality of its scorer, not by how long it thinks.

*Why it matters:* most arguments about whether test-time compute "works" are really arguments about which of the three is meant, and whether cost is counted per request or per unit of quality.

### 6. Spending compute to *pick* beats spending it to *improve*

Choosing among answers you already have needs no training, no reward model and no gradient — only a way to score. Improving an answer needs a mechanism that can tell better from worse at every step, which is much harder to build and much harder to keep honest. Selection shows up early in the life of any generation method, and its returns flatten sooner.

*In NCM:* 16 drafts give ROUGE-L 29.6 on XSum; 12 give BLEU 25.2 on WMT14 [2].

#### In plain words: how the candidate count works

You ask the model for the same output 16 times. You now have 16 drafts. You score every draft against the other 15, using the same overlap measure you will be graded on — ROUGE for summaries, BLEU for translation. **No reference answer is involved.** You keep the draft that looks most like the rest of the group.

That is the whole mechanism. There is no judge, critic, verifier or reward model. It is a consensus pick: find the middle of the cloud, take the point nearest to it.

It works because a language model has many valid ways to say something and most drafts are reasonable. The outliers are usually the ones that drifted, hedged oddly, or slipped in an error. Keeping the typical one filters those out statistically, without anyone ever defining "wrong".

Four consequences explain the numbers:

- **It costs nothing to set up.** ROUGE and BLEU are already computed to report results, so the scorer already exists. No training, labels or new model.
- **It optimises the metric, not quality.** A ROUGE-shaped picker targets ROUGE, and will prefer a bland median-shaped draft over a sharper unusual one. That is a known failure of consensus selection, not an NCM quirk.
- **Cost is linear in drafts; benefit is not.** 16 drafts means generating 16 full outputs. The entire sweep from 1 to 256 returns +4.48 ROUGE-1, most of it early. That is why the headline settings are 16 and 12 — and why the paper needs no rule for allocating compute: there is no allocation decision to make, you pick a number and pay it.
- **It raises the floor of a batch, not the ceiling of a draft.** No individual output is better than it was. You are choosing more carefully among outputs of the same quality.

Compare the neighbours, since they get conflated: *self-consistency* is a majority vote, which works for short discrete answers and not for free text; *best-of-N with a reward model* needs a trained judge and inherits its biases; a *process verifier* scores intermediate steps and must be trained on step-level labels. Consensus selection is the only one of the four that needs nothing but a text-overlap measure — which is exactly why it is cheapest, and why its ceiling is lowest.

### Concept map for ingest

| # | Concept | Proposed wiki slug | Evidence strength |
| --- | --- | --- | --- |
| 1 | Prediction unit ≠ output unit | `unit-of-prediction-vs-output` | strong — mechanism explicit in §3.4 |
| 2 | Coarse-to-fine generation | `coarse-to-fine-generation` | strong — VAR lineage plus ablation |
| 3 | Parallel decoding buys passes, not speed | `parallel-decoding` | strong — two-factor argument, §4.6 |
| 4 | Lossy middle layer as ceiling | `lossy-latent-bottleneck` | strong — Table 11 plus independent repro |
| 5 | Three families of test-time compute | `test-time-compute` | strong — framing ours, instance the paper's |
| 6 | Selection cheaper than improvement; consensus picking | `consensus-candidate-selection` | strong on numbers (Fig 15); medium on the framing |

Supporting ideas that should appear *inside* these pages as examples rather than get pages of their own: residual vector quantization, nested dropout, conditioning corruption, block-diagonal attention, EMA codebooks.

## Key Leads

| Lead | Type | Why it matters | Relation to seed | Source |
| --- | --- | --- | --- | --- |
| Paper, v1 only (9 Oct 2026) | primary | The whole knowledge base. No revisions, no venue. | is the seed | [1] [2] |
| Table 2 / Table 3 / Table 8 | primary | The only legitimate home of the quality numbers | measured results | [2] |
| Table 5 + Table 6 | primary | Per-dataset `K`, codebook sizes, level ladders, training hyperparameters | method spec | [2] |
| Released `config.yaml` files | artifact | Actual per-level code counts for TinyStories / WMT14 / Sudoku / XSum; `predict_level0: false` | fills paper gaps | [12] |
| `models/quant.py` | artifact | `MultiscaleResidualVectorQuantizer`; EMA codebooks; `F.interpolate` as the `R_k` upsampler | method detail | [14] |
| `models/next_concept.py` | artifact | `generate()` = one pass per level; block-diagonal mask; level encodings; tied codebook heads | inference detail | [13] |
| `hazyresearch/ncm-checkpoints` | artifact | **9 of 10 advertised model bundles actually exist** (plus a separate eval-set repo [9]) | reproducibility | [8] [10] |
| `owt/TODO.md` | artifact | OWT bundle is a placeholder containing the literal text `TODO`; weights 404, while the README still links them [7] | breaks the 10× claim's audit | [11] |
| Issue #9 (velaia) | independent repro | Only public wall-clock reproduction; author reply concedes settings and an NFE off-by-one | tests the speed claim | [16] |
| PR #25 (ftruter) | independent repro | Third-party MLX port; LM1B-small 95.36 vs 93.05 reported | tests quality claims | [22] |
| Issue #19 (Red-fuchs) | independent negative | "could not find a compute-matched NCM vs AR comparison anywhere"; names/numbers survive codec 89–96% | tests scope | [19] |
| Khoury, *Round-Trip Refinement* | follow-up | Non-canonical code stacks; training-free sampler improves gen-PPL 17–22% | accepts method, fixes sampler | [35] |
| Music, *Coarse-to-Fine on a Laptop* | follow-up | From-scratch MLX study; NCM/AR gen-PPL ratio 2.13–3.33 | negative at small scale | [38] |
| VAR (2404.02905) | lineage | Next-scale prediction for images — the structural template | parent method | [24] |
| HMAR (2506.04421) | lineage | Same lead author, same next-scale machinery, images | nearest sibling | [25] |
| ImageFolder (2410.01756) | lineage | Source of nested dropout | tokenizer trick | [31] |
| HDLM (2510.08632) | nearest text prior | Hierarchical semantic-scale prediction inside a diffusion LM | unbenchmarked neighbour | [30] |
| NCP (2602.08984) / NCP-ArchPreview (2609.10715) | **different line** | SJTU/LUMIA-group pretraining objective; cited by NCM as [36] | contrast only | [32] [33] |
| OpenAlex citing-works graph | metadata | 3 "citations", all Zenodo self-deposits, not papers | citation reality | [41] |

## Patterns and Themes

*The technical section. The jargon below is defined in the glossary and is not needed to follow the rest of the brief — it is here for follow-up reading and for anyone reconstructing the method.*

### 1. The mechanism, compressed

**Stage 1 — multiscale residual VQ-VAE (§3.3, eqs. 6–9).** Encoder maps text to `L` latents of width `d = 384`; each level `k` downsamples the *residual* left by earlier levels to `ℓ_k` vectors, snaps each to that level's own codebook, and adds the upsampled result to a cumulative reconstruction: `ẑ^(k) = ẑ^(k-1) + R_k(e_k(r_k))`, `z^(k) = z − ẑ^(k)` [2]. Two implementation facts matter and are only in the code: the tokenizer **encoder has zero transformer blocks** in all six configurations (Table 5) — it is essentially an embedding lookup — and `R_k` is a linear `F.interpolate` upsample preceded by learned strided convs [2] [14]. Codebooks are **EMA-updated, not gradient-trained** (`requires_grad_(False)`) [14].

**Nested dropout is the load-bearing trick.** A cutoff `k ~ U{1..K}` is sampled; only levels `1..k` are kept; and **both** the reconstruction cross-entropy **and** the VQ terms are evaluated at that cutoff (eq. 9). Purpose, stated explicitly: stop early levels free-riding on fine levels. Without it there is no decodable coarse representation, and without that there is no coarse-to-fine generation [2].

**Stage 2 — coarse-to-fine objective (§3.4, eq. 10).** Codes within a level are modelled as **independent** given the reconstruction; all cross-level dependence flows through the continuous `ẑ^(k-1)`, resized and projected to the next level's length (eqs. 4–5) [2]. Loss `L = −Σ_k w_k Σ_i log p(r_k^i | z̃^(k-1))` with `w_k ∝ ℓ_k^{−α}`: `α=0` weights every code equally (the ELBO weighting), `α=1` every level equally. Ablation F.2.3: α from 0→1.5 moves the coarse share of loss 19%→63% while gen-PPL stays flat at 18.9–19.0 for α≤1 and degrades to 19.4 at 1.5 — the weighting is not very sensitive in practice [2].

**Three departures from next-token training, precisely.** (i) The predicted unit is a whole level, not a token. (ii) The conditioning state is a *real-valued partial decode*, never the previous tokens. (iii) **All K levels are predicted in a single forward pass** during training (Algorithm 1) with block-diagonal attention, giving K cross-entropy terms per pass — this is why the training budget is small [2]. Block-diagonal was ablated against block-causal and a 2-level sliding window and won on quality *and* time (gen-PPL 15.41 / H 3.98 / 5.65 s vs 19.63 / 4.01 / 7.90 s vs 17.84 / 3.99 / 6.83 s on TinyStories) [2].

**Teacher forcing vs own samples, and the fix.** The authors state the mismatch outright: training conditions on clean codes, inference conditions on the model's own — and because a level is sampled in parallel, *several* errors can enter the next level's conditioning at once, which is worse than AR's one-wrong-token [2]. Their fix is **conditioning corruption**: replace a fraction of *input* codes with uniform draws from the same level's codebook, linearly decreasing across levels, mean rate ≈ 0.50, targets left clean. Moderate corruption helps substantially; excessive corruption degrades the conditioning signal [2]. **The per-level rate schedule is not published** — a third party opened issue #24 specifically because they wanted to retrain from scratch and could not recover it [21].

### 2. Inference and the real nature of the speedup

Generation is `K` sequential passes: resize `ẑ^(k-1)` → project → one forward pass → sample all `ℓ_k` codes in parallel → update `ẑ` [2]. Output tokens are argmax'd at the end. The speedup is a **product of two factors, not one**: fewer steps (6–16× fewer NFE) *and* cheaper early steps (coarse levels have few positions). §4.6 says this explicitly, and it is the strongest technical point in the paper [2]. The generator is a plain transformer — 12 blocks / width 768 / 12 heads for most datasets, 16/1024 for OWT, 36/1280 for the 725M LM1B model — with RoPE, QK-norm, level positional encodings, and output heads **tied to the codebook** (`tie_heads_to_codebook: true`, head not trainable) [12] [13].

**How the extra quality is bought.** Not by thinking longer — by drawing more drafts and picking one. The picking rule is a consensus vote: score each draft against the others using the overlap measure already reported (ROUGE, BLEU), keep the one nearest the group. No reference answer, no judge, no retraining. Sweeping 1 → 256 drafts returns +4.48 ROUGE-1, improving throughout and flattening late; the headline settings use 16 drafts on XSum (ROUGE-L 29.6) and 12 on WMT14 (BLEU 25.2) [2]. The claim is *quality at matched wall-clock*, not at any compute: "NCM's low sampling cost allows multiple candidates within the NFE budget that diffusion baselines use for a single sample" [2]. The formal name for the picking rule is minimum Bayes risk selection, explained in the glossary and in plain terms in *Concepts at a Level Above This Paper*, §6. A second, smaller lever is classifier-free guidance, counted as two forward evaluations per guided step (XSum peaks at `w=0.5`; BLEU, being length-corrected, peaks at `w=1.0`) [2].

**The measured numbers, with their measurement conditions.** 1,024 sequences, batch 16, one H100 SXM 80GB, end-to-end = generation only [2] [16]: LM1B **11× fewer NFE** than DUO and **21× faster** at better gen-PPL; XSum **16× fewer NFE** than AURORA-LM and **31× faster** at comparable ROUGE; OWT **10× faster** [2]. The comparison set is discrete-diffusion and flow baselines — MDLM, DUO, SEDD, Eso-LM, CANDI, FLM/S-FLM/FMLM+, ELF [34], AURORA-LM [2]. Note the OWT wording is "competitive", and Table 8 backs the hedge — NCM 83.12 gen-PPL vs DUO 77.69 and FLM 62.23, i.e. NCM is *behind* both on that metric and ahead only on cost [2].

### 3. The claims that did not survive untouched

**Speed is real but not shipped.** Issue #9 is the decisive artifact. On the released code (fp32, no cache), XSum took **44.71 s** against a Figure 1 read-off of **≈3.4 s**. Adding KV cache → 10.04 s; + CUDA graphs → 8.85 s; + bf16 autocast → **3.45 s**, "right at the ≈3.4 s". The maintainer confirmed: "Our setting is closer to + KV cache + bf16 autocast + CUDA graphs… For the baselines, everything is run with same precision and compile settings" [16]. So the comparison is fair *as run*, but **"21× faster" is not obtainable by running the repo** — KV caching is off by default (and was wrong before a third-party patch), autocast and CUDA graphs are absent, and no timing script was released [16] [17]. Also: the fast setting changes ~half of all outputs versus fp32 eager (identical-output rate 53.5%/50.9%, ROUGE-L 27.74 vs 27.77) [16].

**An acknowledged off-by-one.** Table 2 reports NFE=8 for XSum, but the config has 9 levels and `generate()` makes 9 passes. Maintainer: "that's just an off by one error from us… For the unconditional generations we don't count the l0 generation" [16].

**One of three headline datasets has no released weights.** The README links OWT tokenizer + generator; `owt/` actually contains only `TODO.md` (contents: `TODO`), both resolve URLs 404, and `config/eval/owt.yaml` ships `data: {}` [11]. LM1B (small/medium/large), XSum, WMT14, TinyStories and Sudoku bundles are real — 9 of 10 entries [8].

**No compute-matched comparison to autoregressive models exists — in the paper or the literature.** The paper's AR baselines are a single borrowed row on the conditional tasks and a catastrophic Sudoku row; on unconditional generation its own Table 8 shows an AR baseline ahead of NCM on TinyStories gen-PPL (8.89 vs 15.41, entropies 4.01 vs 3.98) [2]. Independent workers report the same at small scale (NCM 24.404 vs AR 11.484; 51.0 vs 57.6% exact match on prefix-conditioned MASSIVE-de) and state the gap directly: "We could not find a compute-matched NCM vs AR comparison anywhere" [19] [38]. Speculative decoding appears only as motivation, never as a measured baseline [2].

### 4. Lineage — three ingredients, and one elegant correction

Quantisation primitive → VQ-VAE [26] plus residual quantisation from neural audio codecs, SoundStream [27]. Multiscale residual schedule → **VAR** [24], named in §3.1 as the source of multiscale residual quantisation and in F.4 as the source of the CFG scheme; the blog says it outright: "Building on VAR's approach to images, we make several changes for text" [3]. Coarse-level informativeness → **nested dropout from ImageFolder** [31]. The same-lead-author sibling is **HMAR** [25], which attacks exactly the failure NCM inherits (VAR-style scale prediction degrading quality) and fixes it with masked parallel prediction inside a scale — the closest structural precedent, though the paper cites it only jointly with VAR.

**A correction worth carrying:** NCM does **not** sit on the Ré-lab's efficient-sequence-model stack. Full-text search of v1 returns zero matches for "Monarch", "Hyena", "FlashFFT", and "Based" appears only as an English word; the released generator contains no linear-attention or structured-matrix layer [2] [13]. Arora's contribution reads as institutional (equal senior authorship, Together AI) rather than architectural. Asserting "NCM is Based/Hyena applied to coarse-to-fine generation" would be unsupported.

**The nearest text-side neighbour is unbenchmarked.** HDLM — *Next Semantic Scale Prediction via Hierarchical Diffusion Language Models* — predicts semantic scales coarse-to-fine inside a diffusion LM, and gets one line of related work and no experiment [30] [2]. HDLM is a fixed vocabulary surjection; NCM is a learned residual VQ hierarchy — different mechanisms, same idea, and the paper does not measure the difference. The two canonical non-quantised takes on "predict a bigger unit" bracket the space and are cited but not compared: MEGABYTE (fixed byte patches) [28] and Large Concept Models (continuous sentence embeddings) [29].

### 5. Reactions: small, real, unreviewed, and mostly about the sampler

**Citation count is zero.** Semantic Scholar's citations array returns empty; arXiv metadata search for "Next-Concept Modeling" returns one result, the paper itself [42]. OpenAlex's 3 "citations" are all Zenodo deposits: two by one individual (an MLX software record and an MLX study) and one — *Next-Concept Reserving* — an actuarial claims-reserving application that correctly credits NCM and explicitly disclaims affiliation [41] [40]. Two caveats on that graph: OpenAlex reports `cited_by_count: 3` but `counts_by_year: 2`, and it stamps the actuarial record `publication_date: 1997-12-31`, which is a **valuation date inside the document**, not a publication date [41] [40].

What does exist is a genuine, unreviewed independent layer, which is more interesting than a citation count:
- **Khoury, *Round-Trip Refinement*** (Zenodo, 28/31 Oct 2026, with code) — the only real follow-up paper. Finds that NCM's samples are *not* the code stacks its own tokenizer would assign: re-encoding rewrites **61–96%** of codes at the six coarsest levels while decoding back to the same text for **98%** of samples. Proposes a training-free sampler (decode → re-encode → keep coarse → regenerate fine) that lowers GPT-2-large gen-PPL by **17%/22%** at equal entropy for six extra passes, with controls ruling out temperature. Note it *spends* passes to gain quality, i.e. it trades the speed advantage away [35].
- **Music, *Coarse-to-Fine Text Generation on a Laptop*** (Zenodo v0.13, with 35 MB of evidence) — independent MLX implementation and from-scratch TinyStories scaling study: NCM/AR gen-PPL ratio 3.33 → 2.43 → 2.38 going 11.8M → 49.6M → 87.4M; best NCM 24.404 vs AR 11.484. Author's own scoping: single-seed except one, mixed precision, unequal compute, synthetic prose — "a trend under stated conditions and not a scaling law" [38].
- **Seemann, *Fast but Imprecise?*** (Zenodo v2) — consumer GPU, batch 1: NCM writes a 64-token block **6.7× faster** than a same-size AR model, but its tokenizer and generator "lose names far more often than ordinary tokens" [36].
- **Rahmani** (Zenodo + repo) — 6 GB laptop GPU: the speed advantage is confined to single requests with 20–64-token outputs; the fixed canvas caps translations at ~23 words; ~37% of outputs repeat [37].
- **GitHub issue tracker** — 1,671 stars, 217 forks, 5 commits total, last push 2026-10-14, 12 PRs open and none merged [6]. The issues contain real code review: a quadratic-schedule normalisation bug I confirmed in `utils/registry.py` (`(n-2)**2` where every sibling scheduler uses `n-1`) [15] [20]; `idx_to_zhats` returning the same tensor for every level via in-place `add_` — which I also confirmed in `models/quant.py` [14] [18]; dead-code restart and EMA-init bugs backed by real training runs [19]. Training code was never released and issue #10 asking for it is still open [17].

A useful summary of what independent scrutiny actually established: **quality reproduces, speed is real-but-unshipped, and the strongest technical criticism targets the sampler and the tokenizer's handling of names and numbers rather than the headline architecture.** The paper's own Table 11 already lists named-entity, numeral and diacritic errors as its reconstruction failure modes — so the independent finding is a downstream consequence the paper documented the cause of but did not quantifiably propagate [2] [19]. The mildest available corroboration is a Papers-with-Code (HF) listing of the XSum result which the authors reviewed and confirmed without corrections — author-verified, not independently replicated [23]. Derivative tooling exists but is thin: two ONNX/WebGPU and MLX ports [43] [44], and an MLX checkpoint-parity page reporting 1,988 / 1,926 / 1,724 of 2,000 Sudoku boards solved (99.4 / 96.3 / 86.2 vs the paper's 99.5 / 96.5 / 86.1) [39].

### 6. NCP is a different line — one paragraph, no merging

NCM is **not** related to "Next Concept **Prediction**" except by name and vocabulary. NCP is a LUMIA-Lab / SJTU-group *pretraining objective* that adds a discrete-concept prediction head alongside next-token prediction to improve quality — 70M–1.5B params and 300B tokens (arXiv `2602.08984`, Feb 2026) [32], scaled in the NCP-ArchPreview technical report to an 8.9B-parameter model trained on 5.73T Dolma-3 tokens, reaching OLMo-3-7B's final pretraining loss with 51.3% of the tokens (arXiv `2609.10715`, Sep 2026) [33]. Its goal is pretraining compute efficiency, not inference speed; it preserves autoregressive token generation. NCM's goal is generation speed via a coarse-to-fine *decode schedule*. Both NCP papers predate NCM and cannot cite it; NCM cites the first as reference [36], describes it as "predicts discrete concepts to guide subsequent token generation", and never uses the acronym "NCP" [2]. No source found conflates them — but a query for "next concept" retrieves both, so the collision is a real search hazard, not a real intellectual one.

## Follow-up Routes

1. **Read the paper's §3.3 + F.1/F.2/F.3 against Table 5 and the released `config.yaml` ladders** — the level ladders (TinyStories `1,8,16,24,…,128`; Sudoku `1,2,4,6,9,13,18,26,37,50,67,89`) are the most concrete design surface for anyone extending this, and they exist nowhere in the prose [12].
2. **Retrain the generator from the released architecture** if you want to test the method rather than the artifacts. Blockers you will hit immediately: no training code [17], unpublished corruption schedule [21], and an unauthorised-but-real `code_corruption` config block that "no released Python file reads" [21].
3. **The sampler is the live research edge.** Khoury's non-canonical-code-stack finding plus his round-trip sampler is the most defensible next experiment: it is training-free, uses the authors' own checkpoints and eval code, and directly trades NFE for quality [35]. Anyone wanting a cheap test of whether NCM's hierarchy is meaningful should replicate the 61–96% re-encoding result first.
4. **A compute-matched NCM-vs-AR benchmark is an open slot** — explicitly identified as missing by an independent practitioner and absent from the paper [19]. Cheapest credible version: released LM1B small/medium checkpoints vs a same-size AR model on identical hardware with KV cache + autocast + CUDA graphs, reporting wall-clock at matched entropy.
5. **Watch the OpenWebText gap** — either the weights appear, or the 10× OWT claim stays unauditable. Press the repo, not the paper [11].
6. **Watch the citation graph, not the news.** OpenAlex `cites:W7221767759` is the graph most likely to pick up a first real citing paper; re-run in ~4–6 weeks [41].
7. **Read HMAR's method section beside NCM's Appendix C.2** if you need the "shared next-scale machinery" link documented rather than inferred [25]. This is the only place a defensible same-group technical inheritance can be shown.
8. **Adjacent lines worth one search each, in this order:** HDLM (hierarchical semantic-scale diffusion — the unbenchmarked neighbour) [30]; block-autoregressive diffusion (the KV-cache-friendly alternative NCM dismisses in prose but never measures); speculative decoding as an actual baseline [2].

## Addendum: Running It and What Hardware You Need

*This section uses Simplified Technical English. Every hardware figure carries a tag. `measured` means someone reported it, with a link. `derived` means the arithmetic follows the number. `unavailable` means the source is silent.*

### How to run it

The repository is evaluation-only [6] [7]. You can run the released checkpoints today.

1. Install Python 3.10 or newer. Install a CUDA build of PyTorch.
2. Clone the repository: `git clone https://github.com/HazyResearch/ncm.git`
3. Enter the directory and install the dependencies: `cd ncm && pip install -r requirements.txt`. The list has nine lines, and PyTorch is unpinned [45].
4. Download the weights: `hf download hazyresearch/ncm-checkpoints --local-dir artifacts`.
5. Download the test inputs: `hf download hazyresearch/ncm-datasets --repo-type dataset --local-dir data`.
6. Run a conditional task: `python evaluate.py --config config/eval/xsum.yaml --checkpoint-dir artifacts/xsum --data-dir data/xsum` [7] [46].
7. Run an unconditional task: `python evaluate.py --config config/eval/lm1b-small.yaml --checkpoint-dir artifacts/lm1b/small`.
8. Read the scores. XSum prints ROUGE and generative perplexity. WMT14 prints BLEU, chrF and a length ratio. Sudoku prints the solved rate [7].

`evaluate.py` starts one generation shard per visible GPU. A shard is one slice of the test set. The script merges the shards, then scores them [46]. Keep the directory names. Each config finds `generator.pt` and `tokenizer.pt` by relative path. The `lm1b-*.yaml` configs read the shared tokenizer from `artifacts/lm1b/tokenizer.pt`, one directory up [47].

### What breaks, in plain words

Six problems block a clean run. None of them is fixed upstream.

- **The OpenWebText bundle is empty.** `owt/` holds one file, `TODO.md`, whose text is `TODO`. Both weight files return HTTP 404 [11]. You cannot run the 10× OWT claim at all.
- **KV caching is off by default.** A KV cache stores past attention keys and values. The code contains a cache, but a flag disables it. The repair is an unmerged pull request [51]. The maintainer confirmed the authors used cache, bf16 autocast and compiled graphs [16]. Without all three, one reporter measured 44.71 s for XSum against a ≈3.4 s read-off [16].
- **`idx_to_zhats` aliases its output.** It adds in place, so every level receives the same tensor [14] [18]. The state passed between levels is then wrong. Patch it from issue #11.
- **The quadratic scheduler divides by `(n-2)**2`.** Every sibling scheduler divides by `n-1` [15] [20]. This affects retraining and sweeps only, not the released configs.
- **No timing script ships.** `evaluate.py` measures nothing. You must time the generation call yourself.
- **No training code ships.** Issue #10 asks for it and stays open [17].

Fix the cache and the aliasing before you quote a number. Both change speed and output.

### Inference hardware, per bundle

Take the parameter counts from the paper's tables, cross-checked against the released file sizes [2] [48]. Multiply by 4 bytes for fp32 and by 2 bytes for bf16. The KV cache costs 2 × blocks × width × positions × 2 bytes. Positions means prefix length plus output length. All figures below are `derived` at batch 1.

| Bundle | Params | Weights fp32 | Weights bf16 | KV cache bf16 | Minimum VRAM |
| --- | --- | --- | --- | --- | --- |
| `sudoku-*` (each) | 40.36M | 161 MB | 81 MB | 2.9 MB | 2 GB |
| `tinystories` | 125.04M | 500 MB | 250 MB | 4.8 MB | 2 GB |
| `xsum` | 148.65M | 595 MB | 297 MB | 20.6 MB | 2 GB |
| `wmt14` | 263.96M | 1.06 GB | 528 MB | 5.9 MB | 4 GB |
| `lm1b-small` | 208.47M | 834 MB | 417 MB | 4.8 MB | 2 GB |
| `lm1b-medium` | 428.40M | 1.71 GB | 857 MB | 12.7 MB | 4 GB |
| `lm1b-large` | 836.70M | 3.35 GB | 1.67 GB | 23.8 MB | 8 GB |
| `owt` | 205.85M | — | — | — | `unavailable` (no weights) |

Worked examples, so you can check the arithmetic:

- **`lm1b-large`:** 725.3M + 111.40M = 836.70M parameters. 836.70M × 4 bytes = 3.35 GB. The bf16 figure is half that. Its cache is 2 × 36 blocks × 1,280 width × 129 positions × 2 bytes = 23.8 MB.
- **`xsum` cache:** 2 × 12 × 768 × 560 × 2 = 20.6 MB. At batch 16 that is 20.6 × 16 = 0.33 GB.

Two results surprise most readers. First, the cache is small. It stays under 24 MB per sequence for every released bundle. Weights dominate. Second, the whole family fits in 8 GB. That follows from a fixed output canvas of at most 1,024 positions.

Minimum VRAM equals 4 × (bf16 weights + cache), rounded up. The factor 4 comes from one `measured` point. XSum peaked at 3.4 GB at batch 32 in fp16, against 1.0 GB of arithmetic [49]. Treat 4 GB as the practical floor, because the CUDA context and the allocator need 0.5 to 1 GB. Without bf16 autocast, read the fp32 column instead. `lm1b-large` then needs 16 GB (`derived`: 4 × 3.35 GB = 13.4 GB).

### What ordinary hardware actually achieved

All items below are `measured`.

- A 6 GB RTX 3050 Laptop GPU scored XSum ROUGE-L 27.8, against the paper's 28.0 [37] [49].
- Batch-1 latency on that card was 268 ms at p50 and 325 ms at p95. Peak memory was 3.4 GB at batch 32 [49].
- The same run hit the limits. At batch 32 NCM is 8.7× slower than a same-size autoregressive model. NCM repeated a word or bigram in 37.8% of summaries, against 5.4% for the baseline [37] [49].
- On WMT14 the card gave 242 ms at batch 1. The fixed canvas wrote 18 to 25 words whatever the input length [49].
- An RTX 3080 wrote a 64-token WMT14 block in 109 ms at batch 1. At batch 16 it took 12.6 ms per sequence [36] [50].
- An Apple M5 Pro took 39.8 ms per TinyStories sample on Metal. The same model took 280 ms on CPU [39].
- VRAM for `lm1b-medium`, `lm1b-large`, and TinyStories on a GPU is `unavailable`. No independent party reported it. Seemann reports no memory figure at all [50].

### On a non-CUDA machine (AMD, Windows)

A 128 GB Strix Halo machine can run every released bundle. It does not need CUDA. It needs PyTorch.

*What the code requires.* Read from the repository, not assumed:

- `requirements.txt` lists nine packages. None is CUDA-specific [45].
- Attention uses `torch.nn.functional.scaled_dot_product_attention`. The shipped `xsum` config sets `use_flex_attention: false` [12]. The `flex_attention` import is optional and falls back to SDPA [52].
- No file imports Triton, flash-attention, xformers or bitsandbytes.
- `torch.cuda.*` calls map to HIP on a ROCm build. `evaluate.py` finds devices with `torch.cuda.device_count()` [46].
- `torch.distributed` in `models/quant.py` is guarded by `dist.is_available()` and `dist.is_initialized()`. One process needs no NCCL [14].

*What to install.* AMD added Ryzen APU support in ROCm 7.2, released in January 2026. That release covers PyTorch on Windows for gfx1151, the GPU in the Ryzen AI MAX+ 395 [53] [54]. Use the `amd-torch-device-gfx1151` wheels, which cover Python 3.10 to 3.13 [56]. If the Windows build fails, use WSL2 with ROCm for gfx1151. Do not use ZLUDA.

*One limit.* Triton on Windows is still in progress [55]. Without Triton, `torch.compile` is unavailable. You cannot reproduce the Figure 1 CUDA-graph timings [16]. Expect the ~9–10 s class for XSum, not 3.4 s.

*Memory is not the constraint.* `lm1b-large` needs 16 GB in fp32 (`derived`: 4 × 3.35 GB = 13.4 GB). A 96 GB box has headroom at any batch. Skip bf16 autocast, because it changes about half of all outputs [16].

*Bandwidth is the constraint.* NCM is bandwidth-bound. Weights dominate, and the cache stays under 24 MB (table above). A 6 GB RTX 3050 Laptop gives 192 GB/s and 268 ms at p50 [49]. Strix Halo gives about 256 GB/s. Expect about 200 ms per request (`derived`: 268 × 192 ÷ 256). Stay at batch 1 to 8.

*Patch these first.* The aliasing bug and the scheduler bug change output [14] [15]. The KV-cache pull request changes speed [51]. Fix both defects before you quote any number.

*Training.* Out of reach on this class of machine. Use the FLOP budget below. At 15 TFLOP/s effective, the estimate is about 610 hours, or about 3,000 hours with the ladder factor. Both `derived`.

### Training cost

Two separate questions, two separate answers.

**Reproduce the smallest released model: not possible.** No training script, config, or optimizer code exists [17]. The corruption schedule is unpublished [21]. Two shipped defects would corrupt the run [18] [20]. The eval code scores a retrain. It cannot produce one.

**Reproduce the paper: v1 does not say how long it trained.** v1 names one H100 SXM 80GB. It gives that figure for the timing benchmark only [2]. It reports no training GPU count and no wall-clock. GPU-hours are `unavailable`; the phrase does not appear in v1.

v1 does give enough to compute a budget. It reports batch size, sequence length, update count and precision for every dataset (Table 6) [2].

`derived` estimate for `lm1b-large`, the largest released model. Training FLOPs ≈ 6 × N × tokens = 6 × 725.3e6 × 6.55e9 = 2.85e19. Assume one H100 reaches 150 TFLOP/s, or 30% of its dense bf16 peak. That gives 53 GPU-hours. The tokenizer adds 8.4. Subtotal 61 GPU-hours, or 2.5 days on one H100. Then apply the ladder factor. NCM trains all levels in one pass over the concatenated level positions, not over 128 positions. The TinyStories ladder sums to 641 positions against 128, a factor of 5.0. **Plan for 120 to 300 GPU-hours, or 5 to 13 days on one H100. Error bar ±(2–5)×.**

### Playbook

1. Pick `xsum` for summarisation. Pick `sudoku-*` for the cheapest check, at 40M parameters.
2. Size the GPU from the table. 4 GB covers every task bundle. 8 GB covers `lm1b-large`.
3. Install with the three commands in *How to run it*.
4. Place each bundle so `tokenizer.pt` sits where its config expects it.
5. Run with `--n 8` first. Confirm the pipeline completes before a full pass.
6. Patch the cache, the `idx_to_zhats` aliasing, and the scheduler.
7. Add `torch.autocast("cuda", dtype=torch.bfloat16)`. Expect it to change about half of all outputs [16].
8. Warm up first. Put `torch.cuda.synchronize()` around the generation call, and time nothing else.
9. Report batch size, output length and precision. Without them your number is not comparable.
10. Compare quality to the paper, not speed. Quality reproduces. Speed does not, from the shipped code [16].
11. Add `--cfg 0.5` on XSum and `--cfg 1.0` on WMT14 to match the reported rows [7].
12. **If you want to train: stop.** No training code exists, the schedule is unpublished, and two defects remain. Score a released checkpoint, or wait for issue #10.

### What this is good for, and what it is not

- **Good: long outputs where throughput matters.** NCM needs 8 to 12 passes instead of one pass per token. Call count falls 6–16× [2].
- **Good: one request at a time on a small card.** The gain is largest at batch 1, because autoregressive decoding is latency-bound there. Measured: 109 ms against 729 ms for a same-size model [36].
- **Bad: exact rare names, numbers, or diacritics.** Rare names and numbers survive the codec at 89% on XSum [19]. WMT14 reaches 96%.
- **Bad: batched serving.** At batch 32 a same-size autoregressive model is up to 8.7× faster [37].
- **Bad: variable-length output.** The canvas is fixed per bundle, so long inputs get silently shortened [37].
- **Unproven: any task at matched compute.** No compute-matched NCM-versus-autoregressive study exists [19].

## Glossary

Jargon kept out of the main text, defined once. Nothing here is needed to follow the narrative above.

| Term | Plain meaning |
| --- | --- |
| **NFE** (number of function evaluations) | How many times the network is called to produce one output. The paper states efficiency in NFE *and* in wall-clock, and the two diverge because early calls are cheaper. |
| **MBR** (minimum Bayes risk) | The formal name for the consensus pick. Choose the candidate with the lowest expected loss under the model's own distribution; approximated in practice by scoring each draft against the others with a utility metric. Properly it needs a loss and a candidate set — here, just ROUGE/BLEU and the drafts. |
| **Autoregressive (AR)** | Emitting one token per pass, each conditioned on the tokens already emitted. The baseline everything here is measured against. |
| **Residual vector quantization (RVQ)** | Compressing a signal with a stack of codebooks where each book encodes what the previous ones got wrong, so error is corrected layer by layer instead of in one pass. |
| **Codebook** | A fixed-size table of learned vectors. Quantizing replaces each vector with the nearest entry's index, turning text into integers. |
| **Level hierarchy / multiscale** | Several codebooks at different granularities: level 1 covers the whole passage in one or two codes, the last level covers it token by token. |
| **EMA codebooks** | Entries updated as a running average of the vectors assigned to them rather than by gradient descent. Cheaper and more stable; they are not trained by backprop. |
| **Nested dropout** | Training with a randomly chosen coarseness cutoff so the model stays useful at every level of detail. Forces coarse levels to carry real information instead of free-riding on the fine ones. |
| **Conditioning corruption** | Deliberately feeding slightly wrong inputs during training. Here it closes the gap between training on clean codes and running on the model's own, since parallel sampling can inject several errors at once. |
| **Block-diagonal attention** | An attention pattern where positions inside a level see each other but nothing across levels, letting all levels be predicted in a single pass. Ablated against block-causal and a sliding window. |
| **Teacher forcing** | Training on ground-truth context rather than the model's own outputs. Fast and stable, but creates a mismatch with inference — the failure NCM has to patch. |
| **Classifier-free guidance (CFG)** | Mixing a conditional and an unconditional prediction to push output toward the prompt. Costs two forward evaluations per guided step; here borrowed from VAR's per-scale logits. |
| **gen-PPL** (generative perplexity) | Perplexity measured by an external model on generated text. Lower is better; the usual quality yardstick for unconditional generation. |
| **Speculative decoding** | Drafting several tokens cheaply, then verifying them in one pass. A different route to the same goal; cited as motivation here but never measured. |
| **VAR** | *Visual Autoregressive Modeling* — next-scale prediction for images, the structural template NCM transfers to text. |
| **NCP** | "Next Concept **Prediction**" (SJTU) — a different line entirely: it changes the *training objective*, not the decode schedule. Distinguished in Patterns and Themes, §6. |

## Sources

1. Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation (arXiv abs, v1 only, 9 Oct 2026) — https://arxiv.org/abs/2610.14162
2. Full text v1 (HTML; §1–5, Appendices A–J, Tables 1–11, Figures 1–19) — https://arxiv.org/html/2610.14162v1
3. Hazy Research blog, "Next-Concept Modeling" (12 Oct 2026) — https://hazyresearch.stanford.edu/blog/2026-10-12-ncm
4. Stanford Scaling Intelligence Lab publication page — https://scalingintelligence.stanford.edu/pubs/ncm/
5. **Stanford Scaling Intelligence Lab blog mirror (same text as [3])** — https://scalingintelligence.stanford.edu/blogs/ncm/
6. `HazyResearch/ncm` repository (MIT; 1,671★; 5 commits; last push 2026-10-14) — https://github.com/HazyResearch/ncm
7. Repository README (released-models table — note the OWT links do not resolve — eval instructions, BibTeX) — https://github.com/HazyResearch/ncm/blob/main/README.md
8. `hazyresearch/ncm-checkpoints` (HF model repo, MIT, 2026-10-13) — https://huggingface.co/hazyresearch/ncm-checkpoints
9. `hazyresearch/ncm-datasets` (HF dataset repo, eval sets) — https://huggingface.co/datasets/hazyresearch/ncm-datasets
10. NCM Hugging Face collection — https://huggingface.co/collections/hazyresearch/ncm
11. `owt/TODO.md` — the OpenWebText slot's entire contents (weights 404) — https://huggingface.co/hazyresearch/ncm-checkpoints/blob/main/owt/TODO.md
12. Released XSum generator config (`predict_level0`, `attn_pattern`, tied heads, tokenizer block) — https://huggingface.co/hazyresearch/ncm-checkpoints/blob/main/xsum/config.yaml
13. `models/next_concept.py` — generator, `generate()`, per-level loop, block-diagonal mask — https://github.com/HazyResearch/ncm/blob/main/models/next_concept.py
14. `models/quant.py` — `MultiscaleResidualVectorQuantizer`, EMA codebooks, `idx_to_zhats` — https://github.com/HazyResearch/ncm/blob/main/models/quant.py
15. `utils/registry.py` — level schedulers incl. the `(n-2)**2` quadratic — https://github.com/HazyResearch/ncm/blob/main/utils/registry.py
16. Issue #9 — "Which inference settings were used for the Figure 1 / Section 4.6 timings?" (repro table + maintainer reply) — https://github.com/HazyResearch/ncm/issues/9
17. Issue #10 — "There isn't any code for the training" (open) — https://github.com/HazyResearch/ncm/issues/10
18. Issue #11 — "`idx_to_zhats` returns the same tensor for every level" — https://github.com/HazyResearch/ncm/issues/11
19. Issue #19 — "Independent MLX experiments … (incl. negative results)" — https://github.com/HazyResearch/ncm/issues/19
20. Issue #21 — quadratic level schedule normalises by `(n-2)**2` — https://github.com/HazyResearch/ncm/issues/21
21. Issue #24 — questions on the conditioning-corruption schedule (§3.4 / F.3) — https://github.com/HazyResearch/ncm/issues/24
22. PR #25 — Apple Silicon MLX port with reproduction numbers — https://github.com/HazyResearch/ncm/pull/25
23. Issue #3 — Papers with Code verification request, author-verified response — https://github.com/HazyResearch/ncm/issues/3
24. VAR — Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction — https://arxiv.org/abs/2404.02905
25. HMAR — Efficient Hierarchical Masked Auto-Regressive Image Generation (Kumbong et al., CVPR 2025) — https://arxiv.org/abs/2506.04421
26. VQ-VAE — Neural Discrete Representation Learning — https://arxiv.org/abs/1711.00937
27. SoundStream — An End-to-End Neural Audio Codec (residual quantisation) — https://arxiv.org/abs/2107.03312
28. MEGABYTE — Predicting Million-byte Sequences with Multiscale Transformers — https://arxiv.org/abs/2305.07185
29. Large Concept Models — Language Modeling in a Sentence Representation Space — https://arxiv.org/abs/2412.08821
30. HDLM — Next Semantic Scale Prediction via Hierarchical Diffusion Language Models — https://arxiv.org/abs/2510.08632
31. ImageFolder — Autoregressive Image Generation with Folded Tokens (nested dropout) — https://arxiv.org/abs/2410.01756
32. Next Concept Prediction in Discrete Latent Space Leads to Stronger Language Models (*different line*) — https://arxiv.org/abs/2602.08984
33. NCP-ArchPreview Technical Report (*different line*, 8.9B latent-space LM) — https://arxiv.org/abs/2609.10715
34. ELF: Embedded Language Flows (a diffusion/flow baseline) — https://arxiv.org/abs/2605.10938
35. Khoury, *Round-Trip Refinement: A Training-Free Sampler for Next-Concept Language Models* (Zenodo, 31 Oct 2026) — https://doi.org/10.5281/zenodo.23737645
36. Seemann, *Fast but Imprecise? Next-Concept Models versus Autoregressive Language Models, and Fusing Them with PlanSpec* (Zenodo v2, 24 Oct 2026) — https://doi.org/10.5281/zenodo.23564346
37. Rahmani, *Next-Concept Models on a Laptop GPU…* (Zenodo, 31 Oct 2026) + code — https://doi.org/10.5281/zenodo.23837501 ; https://github.com/Aymenrahmanii/NCM
38. Music, *Coarse-to-Fine Text Generation on a Laptop: A Native MLX Study* (Zenodo v0.13, 4 Nov 2026) — https://doi.org/10.5281/zenodo.23620913
39. Music, NCM-MLX checkpoint-parity report (Sudoku 1,988/1,926/1,724 of 2,000) — https://janmus1c.github.io/ncm-mlx/research/checkpoint-parity/
40. *Next-Concept Reserving: A Coarse-to-Fine Generator for Claims Development* (Zenodo, actuarial application, correct attribution) — https://doi.org/10.5281/zenodo.23678936
41. OpenAlex work record and citing-works graph (`W7221767759`) — https://api.openalex.org/works?filter=cites:W7221767759
42. Semantic Scholar citations endpoint (empty array) — https://api.semanticscholar.org/graph/v1/paper/arXiv:2610.14162/citations
43. `mrfakename/ncm-webgpu-weights` — ONNX/WebGPU port with parity fixtures — https://huggingface.co/mrfakename/ncm-webgpu-weights
44. `Red-fuchs/ncm-modular` — independent MLX experiments (§ issue #19 companion repo) — https://github.com/Red-fuchs/ncm-modular
45. `requirements.txt` — the nine install lines (PyTorch unpinned) — https://github.com/HazyResearch/ncm/blob/main/requirements.txt
46. `evaluate.py` — the eval entry point: per-GPU shard spawn, merge, `--gpus` / `--n` / `--out` flags — https://github.com/HazyResearch/ncm/blob/main/evaluate.py
47. `config/eval/` — per-bundle eval configs, incl. `lm1b-small|medium|large` (24 / 36 blocks, width 1024 / 1280) and the `../tokenizer.pt` path — https://github.com/HazyResearch/ncm/tree/main/config/eval
48. Hugging Face tree API for `ncm-checkpoints` — exact per-file bundle sizes used for the parameter derivation — https://huggingface.co/api/models/hazyresearch/ncm-checkpoints/tree/main?recursive=true
49. Rahmani, full report PDF — Table 1 measured latency, peak GPU memory and repetition rate on a 6 GB RTX 3050 Laptop GPU — https://zenodo.org/records/23837502/files/ncm-limits-report.pdf
50. Seemann, full PDF — Table 1 per-block timings on an RTX 3080 (109 / 27.3 / 12.6 ms per sequence at batch 1 / 4 / 16) — https://zenodo.org/records/23607317/files/Seemann-2026-NCM-vs-AR-PlanSpec-v2.pdf
51. PR #5 — "Fix the KV-cached `generate()` path: identical outputs, 2-5x faster" (open, unmerged) — https://github.com/HazyResearch/ncm/pull/5
52. `models/common.py` — optional `flex_attention` import, guarded, with an SDPA fallback and an autocast dtype alignment — https://github.com/HazyResearch/ncm/blob/main/models/common.py
53. AMD Software: PyTorch on Windows Edition 7.2 release notes (ROCm 7.2, 21 Jan 2026) — https://www.amd.com/en/resources/support-articles/release-notes/RN-AMDGPU-WINDOWS-PYTORCH-7-2.html
54. ROCm on Radeon and Ryzen — Windows PyTorch support matrix and pip install path, gfx1151 / Ryzen AI MAX+ 395 — https://rocm.docs.amd.com/projects/radeon-ryzen/en/latest/docs/compatibility/compatibilityrad/windows/windows_compatibility.html
55. TheRock `external-builds/pytorch` README — support-status table; `torch` and `aotriton` supported on Windows, `triton` in progress — https://github.com/ROCm/TheRock/blob/main/external-builds/pytorch/README.md
56. `amd-torch-device-gfx1151` wheels — win_amd64 and linux_x86_64, Python 3.10–3.13 — https://stable.repo.amd.com/rocm/pytorch/whl-next/amd-torch-device-gfx1151/
