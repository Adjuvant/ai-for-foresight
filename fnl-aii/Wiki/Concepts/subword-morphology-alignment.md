---
type: wiki-page
slug: subword-morphology-alignment
category: concept
tags:
  - tokenization
  - morphology
  - subword-segmentation
  - nlp
  - subword-morphology-alignment
sources:
  - "[[Raw/bostromBytePairEncoding2020]]"
related:
  - "[[Wiki/Concepts/subword-tokenization]]"
  - "[[Wiki/Concepts/byte-pair-encoding]]"
  - "[[Wiki/Concepts/unigram-language-model-tokenization]]"
created: 2026-10-09
updated: 2026-10-09
---

# Subword Morphology Alignment

How closely unsupervised subword boundaries line up with gold morphological segmentation — the diagnostic Bostrom and Durrett (2020) use to explain why the tokenization choice changes downstream performance, measured against CELEX2 for English and MeCab for Japanese.

## Key Claims
- Unsupervised subword tokenizers show low boundary recall against English gold morpheme boundaries because many common words with derivational morphology are represented as single tokens, and BPE compounds this by absorbing affixes into larger units. ([[Raw/bostromBytePairEncoding2020]])
- Subword boundaries align with morphological reference segmentations far better in Japanese than in English — 77.2% versus 30.3% F1 for unigram LM tokenization. ([[Raw/bostromBytePairEncoding2020]])
- Unigram LM segmentation is equivalent to Morfessor-style maximum-a-posteriori unigram segmentation without Morfessor's informed prior over token length (per Creutz and Lagus, 2005). ([[Raw/bostromBytePairEncoding2020]])

## Tensions and Contradictions

## Related
- [[Wiki/Concepts/subword-tokenization]]
- [[Wiki/Concepts/byte-pair-encoding]]
- [[Wiki/Concepts/unigram-language-model-tokenization]]

## Open Questions
