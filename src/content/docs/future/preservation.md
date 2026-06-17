---
title: Preservation
description: A dark archive that guarantees the corpus survives, regardless of any single institution's hosting decisions.
---

## The risk

For most of the last decade, the University of Virginia's digital
surrogates of its Session Papers holdings have been hosted on the
University of Edinburgh's image platform. This arrangement has worked
well — it gave both institutions more visibility into the same set of
materials, and it contributed substantially to Edinburgh's machine
learning training corpus.

It has, however, made the public availability of UVA's digitised
holdings dependent on the continued operation of a particular
software platform at a particular institution thousands of miles
away. Software platforms are mortal. Institutional priorities change.
The dependency was always intended to be temporary; the question was
when it would have to end.

In 2026, the University of Edinburgh confirmed its intention to
**decommission the Luna platform** on which Session Papers content
has historically been hosted, replacing it with an open-source
digital collections platform. As part of the transition, Edinburgh
intends to **return UVA's content** rather than continue to host it.

This is a perfectly reasonable institutional decision, and the
project's response to it is straightforward: **acquire a complete,
verified, durable copy of every page image and every catalog entry
that has lived on the Edinburgh platform, hosted on infrastructure
the project itself controls.** Once that copy exists, the corpus's
public availability is no longer dependent on any single hosting
arrangement.

## The dark archive

The preservation thread is therefore building a **dark archive** — a
durable storage layer, hosted in cloud object storage, that contains
a verified copy of every page image, every IIIF manifest, and every
piece of catalogue metadata for the entire pilot collection on the
Edinburgh platform.

"Dark" in this context means **not directly public-facing**. The dark
archive is not a website. It is preservation infrastructure: a copy
of the corpus that exists so that scos.law and any future
public-facing platform can be rebuilt from it, regardless of what
happens to any individual hosting arrangement.

Concretely:

- The dark archive holds the full collection of digital surrogates
  for **all approximately 193,000 items** in the Edinburgh-hosted
  pilot collection — both the UVA-owned portion (the Skene material)
  and the Edinburgh-held portion that has been part of the shared
  hosting arrangement.
- Every image is stored with its checksum, with a record of when and
  from where it was retrieved, and with the IIIF manifest that
  describes it.
- The IIIF Collection metadata — which describes which page belongs
  to which item, which item belongs to which holding institution, and
  what each item's published rights statement is — is captured as
  part of the archive.
- A single SQLite database file is the **canonical index** of the
  archive's contents: every item, its location in cloud storage, its
  metadata, its provenance. The database is small enough to be
  copied freely as part of the preservation copy itself.

## What it costs and what it buys

The dark archive uses cloud object storage's lowest-cost tier, which
at typical archival-storage prices comes out at well under one US
dollar per month for the entire collection.

It buys, in return:

- **Insurance** against any single hosting decision at any single
  institution
- **A clean canonical input** for the [text pipeline](/future/text-pipeline/)
  to work from — no dependency on a remote image server during the
  multi-month processing runs
- **A complete inventory** of which institutions hold what, derived
  directly from the IIIF metadata, that becomes the foundation for
  the [partnership thread](/future/partnership/) and the broader
  cross-institutional view of the corpus

The harvest itself is currently underway, running gently and politely
against the source platform at a rate that respects the host
institution's operations. By the time the harvest completes the
project will have, for the first time, a single durable copy of the
public state of the entire pilot collection — and the freedom to
build whatever comes next without that dependency.
