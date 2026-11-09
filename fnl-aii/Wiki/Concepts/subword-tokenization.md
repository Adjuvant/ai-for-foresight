---
type: wiki-page
slug: subword-tokenization
category: concept
tags:
  - tokenization
  - subword-tokenization
  - language-model-pretraining
  - nlp
sources:
  - "[[Raw/bostromBytePairEncoding2020]]"
related:
  - "[[Wiki/Concepts/byte-pair-encoding]]"
  - "[[Wiki/Concepts/unigram-language-model-tokenization]]"
  - "[[Wiki/Concepts/tokenization-inductive-bias]]"
  - "[[Wiki/Concepts/subword-morphology-alignment]]"
created: 2026-10-09
updated: 2026-10-09
---

# Subword Tokenization

Segmenting text into subword units so a fixed-size vocabulary can cover an open vocabulary; the choice is locked into a pretrained model, because downstream use must reuse the original vocabulary. Bostrom and Durrett (2020) treat the choice as a first-order pretraining decision rather than an implementation detail.

## Key Claims
- Because a pretrained language model's subword vocabulary cannot be altered, every downstream application must tokenize its inputs and generate its outputs with the vocabulary the model was pretrained on. ([[Raw/bostromBytePairEncoding2020]])
- For the tokenization algorithms actually in use, vocabulary construction and tokenization are tightly coupled, so the two steps cannot be treated as independent design choices. ([[Raw/bostromBytePairEncoding2020]])
- WordPiece cannot be compared directly against BPE and unigram LM, because its implementation is not public and its merge scoring would require fitting a language model for every candidate merge. ([[Raw/bostromBytePairEncoding2020]])

## Tensions and Contradictions

## Related
- [[Wiki/Concepts/byte-pair-encoding]]
- [[Wiki/Concepts/unigram-language-model-tokenization]]
- [[Wiki/Concepts/tokenization-inductive-bias]]
- [[Wiki/Concepts/subword-morphology-alignment]]

## Open Questions
