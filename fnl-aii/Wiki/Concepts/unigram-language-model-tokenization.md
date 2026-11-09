---
type: wiki-page
slug: unigram-language-model-tokenization
category: concept
tags:
  - tokenization
  - unigram-language-model
  - language-model-pretraining
  - nlp
  - unigram-language-model-tokenization
sources:
  - "[[Raw/bostromBytePairEncoding2020]]"
related:
  - "[[Wiki/Concepts/subword-tokenization]]"
  - "[[Wiki/Concepts/byte-pair-encoding]]"
  - "[[Wiki/Concepts/tokenization-inductive-bias]]"
created: 2026-10-09
updated: 2026-10-09
---

# Unigram Language Model Tokenization

Top-down tokenization: start from a superset of candidate substrings and prune it under a unigram language model, removing the tokens whose loss costs least likelihood (Kudo, 2018). Bostrom and Durrett (2020) find it recovers morphology-aligned units and beats BPE on downstream tasks.

## Key Claims
- Unigram LM tokenization matches or outperforms BPE on every downstream task tested, in both English and Japanese, with architecture, pretraining data, training objective and optimization held fixed. ([[Raw/bostromBytePairEncoding2020]])
- The largest measured gap between the two tokenizations appears on Japanese TyDiQA (53.7 versus 41.4 EM), where the fine-tuning set holds only about 5k examples and written Japanese carries no whitespace word boundaries. ([[Raw/bostromBytePairEncoding2020]])
- The SentencePiece library implements BPE and unigram LM tokenization but not the WordPiece algorithm, despite the association of WordPiece with SentencePiece's name and origin (per Kudo and Richardson, 2018). ([[Raw/bostromBytePairEncoding2020]])

## Tensions and Contradictions

## Related
- [[Wiki/Concepts/subword-tokenization]]
- [[Wiki/Concepts/byte-pair-encoding]]
- [[Wiki/Concepts/tokenization-inductive-bias]]

## Open Questions
