---
type: wiki-page
slug: byte-pair-encoding
category: concept
tags:
  - tokenization
  - byte-pair-encoding
  - language-model-pretraining
  - nlp
sources:
  - "[[Raw/bostromBytePairEncoding2020]]"
related:
  - "[[Wiki/Concepts/subword-tokenization]]"
  - "[[Wiki/Concepts/unigram-language-model-tokenization]]"
  - "[[Wiki/Concepts/subword-morphology-alignment]]"
created: 2026-10-09
updated: 2026-10-09
---

# Byte Pair Encoding

Bottom-up subword vocabulary construction that merges the most frequent token bigram until the vocabulary reaches its target size; the dominant method in pretrained language models, and the one Bostrom and Durrett (2020) find inferior to unigram LM tokenization at identical pretraining settings.

## Key Claims
- BPE's greedy bigram-frequency merging absorbs frequent affixes and punctuation into neighbouring tokens, leaving intermediate 'junk' tokens that inflate the low-frequency dead zone of the vocabulary by roughly 1,500 entries in English Wikipedia. ([[Raw/bostromBytePairEncoding2020]])
- BPE subword boundaries correspond to gold English morphological boundaries far worse than unigram LM tokenization does — 19.3% versus 30.3% F1. ([[Raw/bostromBytePairEncoding2020]])
- BPE produces more and shorter subword units per word than unigram LM at the same 20,000-token vocabulary size (4.721 versus 4.633 units per word type). ([[Raw/bostromBytePairEncoding2020]])

## Tensions and Contradictions

## Related
- [[Wiki/Concepts/subword-tokenization]]
- [[Wiki/Concepts/unigram-language-model-tokenization]]
- [[Wiki/Concepts/subword-morphology-alignment]]

## Open Questions
