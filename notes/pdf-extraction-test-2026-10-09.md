# PDF extraction test — two Zotero items (2026-10-09)

Scope: compare the `pdf_extract` (pdf-extract-service) path against other available
extractors on two real vault-bound PDFs. Not a general benchmark.

## Items

| Citekey | Title | Year | DOI | PDF |
|---|---|---|---|---|
| `bressaInputVisualizationCollecting2024` | Input Visualization: Collecting and Modifying Data with Visual Representations | 2024 | 10.1145/3613904.3642808 | `/Users/thomas/Zotero/storage/9J24ZHCN/Bressa et al. - 2024 - Input Visualization ... .pdf` (18 pp, pdfTeX, letter) |
| `schottlerVisualizingInteractingGeospatial2021` | Visualizing and Interacting with Geospatial Networks: A Survey and Design Space | 2021 | 10.1111/cgf.14198 | `/Users/thomas/Zotero/storage/342ZMZDG/Schöttler et al. - 2021 - Visualizing and Interacting ... .pdf` (30 pp, OpenPDF 1.4.2, A4) |

Both: digital-native text layer (no OCR needed), none have Zotero annotations
(`zotero_details_safe`), so PDF text is the only content path.
`schottler...` additionally carries an Edinburgh Research Explorer cover page (PDF p.1,
content pp. 5-33).

Service health at test time: `pdf-extract-service: ok`; advertised extractors
`liteparse, poppler, pdfplumber` (contract v2).

## Observed defect in the `pdf_extract` path (both items)

`pdf_extract` selected `liteparse` as sole engine ("Fallback chain: liteparse") and
returned **layout-preserving** text in which the two body columns are merged onto the
same output line, separated by a run of spaces.

Schöttler, extracted.md lines 1286-1292 (gaps compressed):

```
1286 |[......] (Section 4.2), we eventually defined five design dimensions GEO,[...] 11.2. Design space coverage and open designs
1288 |[....] space was created on the premise that each visualization technique[...] Our design space allows us to discuss existing and common designs
```

Bressa page 1 was worse — word-level scrambling inside the abstract and the ACM
permission block:

> "We examine input visualizations, visual representations that are designed to collect (and represent) new data rather than encode **preexisting datasets Information visualization is commonly used** to reveal insights and stories within existing data."

`document_parse` (LiteParse v2) reproduced the same merge on both PDFs, so the behaviour
is shared by the liteparse-family layout heuristic, not a single-tool glitch.

## Cross-check: poppler default reading order is clean

`pdftotext` (poppler, local `/opt/homebrew/bin/pdftotext`) with **no `-layout`** flag
reconstructs reading order and separates the columns. `-layout` reproduces the same
merge as liteparse, i.e. the defect is the layout-preserving mode, not the source PDF.

Bressa, poppler default, abstract:

> "We examine input visualizations, visual representations that are designed to collect (and represent) new data rather than encode preexisting datasets. Information visualization is commonly used to reveal insights and stories within existing data. As a result, most..."

### Quantitative comparison

Internal `>=25`-space run used as a proxy for a column-gutter merge (`\S {25,}\S`).

| File / extractor | lines | lines w/ gutter merge | Figure N: captions | Ref labels |
|---|---|---|---|---|
| Schöttler — `pdf_extract` / liteparse | 1894 | 174 | 17 (missing 4, 13) | 106 |
| Schöttler — `pdftotext -layout` | 1909 | 178 | — | — |
| Schöttler — `pdftotext` (reading order) | 2365 | **0** | **19 (1-19, all)** | 106 |
| Bressa — `pdf_extract` / liteparse | 1221 | 208 | — | — |
| Bressa — `pdftotext` (reading order, full 18 pp) | 6191 | **0** | — | runs to `[143] Yi et al. 2007` |

Completeness: all three Schöttler outputs run to the Wiley copyright line and contain
106 reference labels; Bressa's poppler output runs to `[143]`. Nothing is dropped — the
difference is ordering/column handling, plus 2 lost figure captions under liteparse.

Commands (reproducible):

```bash
pdftotext "PDF" -                      # reading order  -> 0 merged lines
pdftotext -layout "PDF" -              # layout preserved -> same merge as liteparse
```

## Assessment

- `pdf_extract` output is usable for search/retrieval, but **not** for verbatim quoting or
  sentence-level extraction of two-column PDFs: lines concatenate left and right columns,
  and section headings can land mid-line (e.g. "3. Scope and Definitions" and
  "12. Conclusion" in Schöttler).
- Liteparse additionally lost 2 of 19 figure captions in Schöttler (Figures 4 and 13 are
  cited in text but no `Figure 4:`/`Figure 13:` label survives).
- The pdf-extract-service advertises `poppler` and `pdfplumber`, but the `pdf_extract`
  tool schema exposes only `path`, `ocr`, `timeout` — **no engine selector**. It always
  ran liteparse. Actionable gap: expose engine choice, or fall back to poppler
  reading-order text when liteparse's quality score is low (<0.8 both cases: 0.76, 0.75).
- Trade-off to keep in mind: reading-order output is better for prose and captions but
  loses the visual grid needed to reconstruct tables and figure/caption adjacency. For
  this use case (vault text notes) reading order is the right default.

## Follow-up: root cause (2026-10-09, second pass)

Cloned the service repo (`Adjuvant/pdf-extract-service`, HEAD `c546385`, version 0.2.0)
and read the pipeline. The defect is not "liteparse is bad" — it is two separable bugs.

**A. The interleaving guard samples only the first 200 lines.**
`src/quality.py: detect_column_interleaving` needs `ratio > 0.12` **and** `aligned >= 0.80`
on `text.splitlines()[:200]`. Both papers open with a single-column cover page / abstract,
so the sampled window fails the alignment bar while mid-document windows pass it:

| text | sampled 0-200 | mid-document window |
|---|---|---|
| Schöttler liteparse | ratio 0.46, aligned 0.72 → **False** | lines 1000-1200: aligned 0.91 → **True** |
| Bressa liteparse | ratio 0.70, aligned 0.24 → False | lines 1000-1200: aligned 0.73 → False |
| `tests/fixtures/indesign-three-column-sidebar.pdf` | aligned 0.27 → False | every window False |

So liteparse's column-merged answer is never penalized and never warned.

**B. `src/extractors/poppler.py` hardcodes `pdftotext -layout`** — the layout-preserving
mode that *creates* the merge. Verified arithmetic: `score_quality(-layout)` 0.7477 −
`INTERLEAVING_PENALTY` 0.40 = 0.3477 = the service's reported poppler candidate score.
Without `-layout`, reading-order text scores 0.7622 (Schöttler) / 0.8878 (Bressa) — higher
than the winning liteparse answer — but the service cannot produce it. `preferred=poppler`
still returns liteparse.

**C. `pdfplumber` merges columns with a single space**, so no whitespace signal exists
(0 lines with a 4+ space run over 4330 lines). It therefore scores highest of the three:
**0.9277** on Bressa's interleaved abstract, above every gate, `warnings: []`. Same failure
class as the closed issue #21, different damage class.

**D.** `layout_aware = True` only for docling/mineru/marker; the slim image
(`available = [liteparse, poppler, pdfplumber]`) has none, yet the penalty's own warning
recommends one.

Reproduces on a repo-owned fixture with no external file:

```
POST /extract/upload file=@tests/fixtures/indesign-three-column-sidebar.pdf
  winner=liteparse 0.7821  warnings=[]  1068 of 2362 lines hold a >=25-space gutter
```

`tests/fixtures/manifest.json` labels that file `damage: ["column-interleaving"]` and pins
`pdfplumber` — the walk contradicts its own pin and says nothing.

### Posted

Reported as a dogfood example: <https://github.com/Adjuvant/pdf-extract-service/issues/31>
(labels `bug`, `dogfood`). Body: `notes/pdf-extract-dogfood-evidence/issue-body.md`;
raw service responses and the diagnostic script in the same directory.

## Blocked / not run

- No engine selection through the Feynman `pdf_extract` tool (`path`, `ocr`, `timeout` only).
  The service itself *does* support the `preferred` multipart part — verified by `curl`;
  the gap is in the client wrapper, not the service.
- `pdfplumber` not tested: not installed locally, not selectable through the tool.
- OCR mode not tested: both PDFs have text layers, so OCR would not address the ordering
  defect.
