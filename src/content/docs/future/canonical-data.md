---
title: Canonical Data Layer
description: A preservation-grade, citable, platform-agnostic representation of the corpus's metadata.
---

## The premise

The eight years of expert human cataloging that underpin scos.law are
the project's single most valuable asset. They are also currently
held in only one form: as records in a particular Drupal database, on
a particular server, served by a particular cloud hosting provider.

This is the operational reality of any modern digital archive. It is
also a vulnerability. Software vendors change. Hosting contracts
change. Database platforms have lifespans that, on the scale of the
materials they describe, are short.

**The 2018 Skene cataloging deserves a representation that survives
all of these.**

## What this thread builds

A **canonical data layer** — a complete representation of the
corpus's metadata as plain-text files, version-controlled, stored
independently of any operational platform, and citable in its own
right as a published scholarly dataset.

Concretely, this means: every case, every catalogued document, every
named agent (party, counsel, judge, clerk, witness), every named
place, and every named organisation appears as its own YAML file in
a public-ready data repository. Each file carries:

- **A stable identifier** that survives platform migrations
- **The descriptive metadata** in a format any future reader of the
  data can parse without specialised software
- **Provenance per field**: not just "what" but "who set this, when,
  from what source, at what level of confidence"
- **Relations to other records** by stable identifier — so the
  network of cases, people, and documents survives intact whether or
  not any particular database does

## The five-tier provenance hierarchy

The single most important design decision in the canonical layer is
that **provenance is recorded per field, not per record**. Every
value in every file is marked with one of five tiers:

| Tier | Meaning |
|---|---|
| **Gold** | Human curator, pre-AI era. The 2018 Skene cataloging. |
| **Human-reviewed** | AI extracted, curator confirmed. |
| **AI-pending** | AI extracted, awaiting curator review. |
| **Derived** | Algorithmically computed from other fields (e.g., normalised party name). |
| **Speculative** | Provisional, uncertain, or experimental — never in citable releases. |

The result is that "publish only the human-curated data without any
AI involvement" becomes a straightforward operation: filter to
gold-tier records, produce a tarball, deposit it. There is no
archaeology required to figure out what is what.

## The citable gold-standard dataset

A planned release in 2027 will produce, from the gold-tier subset of
the canonical layer, **a published scholarly dataset** that anyone
can cite, anyone can download, and anyone can use to verify the
project's AI work against the human ground truth.

The release will carry:

- A **digital object identifier** for permanent citation, deposited
  via Zenodo (or the UVA Library Dataverse, or both)
- A **methodology document** explaining who cataloged, when, against
  what sources, with what conventions, and what the integrity
  expectations of the data are
- A **schema** documenting the structure of every record, so future
  users can interpret it without our help
- A **citation format** (`CITATION.cff` at the repository root) that
  any reference manager can ingest
- An **open license** — currently planned as CC-BY-4.0 — that
  permits reuse for any purpose with attribution

The eight years of cataloging will, in other words, become **a
scholarly publication in its own right** — a contribution to the
field by Loren Moulds and his collaborators that does not depend on
the continued operation of any specific website for its
availability or citation.

## How it stays in sync with the operational site

The canonical layer and the operational site (scos.law and its
descendants) live as two faces of the same data:

- **The operational site is the editor's working environment**:
  Drupal-based, with all the workflow, search facets, viewer
  integration, and editorial UI that operational use requires.
- **The canonical layer is the durable record**: exported from the
  operational site on a regular cadence, version-controlled in git,
  human-readable, and depositable in a research data repository.

In v1, the synchronisation flows from operational to canonical:
edits happen in the working environment, exports refresh the
canonical files. In v2, planned for later, the synchronisation
becomes bidirectional with conflict-resolution rules. The decision
to start one-directional is a deliberate choice to ship a working
preservation layer before reaching for more sophisticated editing
patterns.

## What this thread is not

The canonical layer is **not a replacement** for scos.law. The site
is the right place to read, browse, and search the corpus; the
canonical layer is preservation infrastructure.

The canonical layer is **not a substitute** for the operational
catalog. The catalog is where editors work; the canonical layer is
where the corpus is preserved as data.

The canonical layer is, however, the **insurance** that makes every
other piece of this project sustainable. If Drupal goes the way of
ColdFusion, the corpus is fine. If the next-generation digital
archive runs on something that hasn't been invented yet, the corpus
is fine. The form the corpus takes today is one expression of the
data; the data itself outlives it.
