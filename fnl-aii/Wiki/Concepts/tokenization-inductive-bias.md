---
type: wiki-page
slug: tokenization-inductive-bias
category: concept
tags:
  - tokenization
  - inductive-bias
  - language-model-pretraining
  - nlp
  - tokenization-inductive-bias
  - language-models
sources:
  - "[[Raw/bostromBytePairEncoding2020]]"
  - "[[Research/Machine Learning Methods/ncm]]"
related:
  - "[[Wiki/Concepts/subword-tokenization]]"
  - "[[Wiki/Concepts/unigram-language-model-tokenization]]"
  - "[[Wiki/Concepts/byte-pair-encoding]]"
  - "[[Wiki/Concepts/unit-of-prediction-vs-output]]"
  - "[[Wiki/Concepts/lossy-latent-bottleneck]]"
created: 2026-10-09
updated: 2026-11-09
---

# Tokenization Inductive Bias

The claim that a pretrained model's input encoding — not only its architecture, data or objective — carries measurable inductive bias, so tokenization belongs to the pretraining design space. Bostrom and Durrett (2020) supply the first controlled comparison, and their own single-run design is an open replication gap.

## Key Claims
- Tokenization choice alone changes fine-tuned downstream task performance across tasks and two typologically distant languages, holding architecture, data, objective and optimization fixed. ([[Raw/bostromBytePairEncoding2020]])
- Input encoding encodes a non-trivial and previously unmeasured inductive bias in pretrained language models, which makes tokenization part of the pretraining design space rather than a preprocessing detail. ([[Raw/bostromBytePairEncoding2020]])
- Performance gaps between tokenizations are larger where fine-tuning data is scarce and where the writing system does not delimit words with whitespace. ([[Raw/bostromBytePairEncoding2020]])
- A learned quantised code hierarchy extends the tokenization-inductive-bias argument past input encoding, because the same hierarchy that compresses the input also fixes the granularity at which the model can predict. ([[Research/Machine Learning Methods/ncm]])
- Replacing subword tokenization with a multiscale residual VQ code hierarchy changes the model's failure profile, not only its accuracy: names, numerals and diacritics are lost in a way that byte-pair encoding does not lose them. ([[Research/Machine Learning Methods/ncm]])

## Tensions and Contradictions

## Related
- [[Wiki/Concepts/subword-tokenization]]
- [[Wiki/Concepts/unigram-language-model-tokenization]]
- [[Wiki/Concepts/byte-pair-encoding]]
- [[Wiki/Concepts/unit-of-prediction-vs-output]]
- [[Wiki/Concepts/lossy-latent-bottleneck]]

## Open Questions

- Only one pretraining run per tokenization was run (a stated computational constraint), so the reported gaps are not separated from pretraining-seed variance.
- Whether the unigram LM advantage holds for larger corpora, larger vocabularies, and languages with other writing systems is untested.
- No equivalent measurement exists for WordPiece, since its implementation is not public.
