# Obsidian AGENTS.md

Conventions for the knowledge vault.

## Purpose

The vault has three parallel functions:

1. **Research archive** — verified deep-research briefs, queryable via Obsidian Bases.
2. **LLM wiki** — a persistent synthesis layer on top of the archive and raw sources.
3. **Projects** — project-scoped research materials. They draw on the wiki and the sources.

## Vault Layout

```
./
├── Raw/            ← Immutable academic papers. The LLM reads, never modifies.
├── Signals/        ← Immutable web clips and entity references.
├── Questions/      ← Open questions and briefs awaiting research.
├── Research/       ← Archived deep-research briefs. Feedstock for the wiki.
├── Projects/       ← Project-scoped notes.
├── Wiki/           ← LLM-maintained synthesis.
│   ├── index.md
│   ├── log.md
│   ├── Concepts/
│   │   └── _index.md
│   ├── Entities/
│   │   └── _index.md
│   └── Synthesis/
│       └── _index.md
├── Literature/     ← Markdown reference lists, one per research brief.
└── _meta/          ← Vault metadata: research.base, changelog.md.
```

**Data flow by phase:**
- Ph 0a — papers → Raw/ via zotero-ingest.
- Ph 0b — clips → Signals/ via the web clipper or defuddle.
- Ph 1 — Questions/ → deep research → outputs/.
- Ph 2 — outputs/ → Research/ plus Literature/.
- Ph 3 — Raw/, Signals/, Research/ → Wiki/.
- Ph 4 — Wiki/ plus sources → Projects/.
- Ph 5 — Wiki/ → curation audit.
- Promotion — Projects/ → Wiki/ when insights are generalisable.

**Dependency direction:** Projects/ → Wiki/ → { Research/ → Raw/, Signals/ }. No upstream wikilinks.

## Schemas

- **research-brief** — frontmatter: type, slug, topic_path, date, status, sources_consulted, sources_accepted, verification, rounds, tags.
- **raw-paper and signal** — invariants: authors: is a list, never author:. Names are flat Family, Given strings. Use imported:, not created:. No wikilinks in author names.
- **wiki-page** — type is wiki-page. category is concept, entity, or synthesis. related and sources are full-path wikilinks. signals: is never mixed with sources:. Exactly one closing ---. Key Claims is required on concept pages.

## Deterministic Writers

Never hand-edit _index.md, Wiki/index.md, Wiki/log.md, or claim-register.md. Only the toolkit deterministic tools write them.

## Status Values

| Status | Meaning |
|--------|---------|
| draft | Work in progress, not verified. |
| in-progress | Active work, partially verified. |
| verified | Passed verification, ready for archive. |
| archived | Archived, no longer actively maintained. |

## See Also

- agent-knowledge-base-toolkit CONTEXT.md — terms and conventions.
