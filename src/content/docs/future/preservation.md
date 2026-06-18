---
title: Preservation and Consolidation
description: Bringing together the existing digitized Session Papers from across the holding institutions, with the methods needed to process them at scale, into a single unified and described digital archive.
---

## The opportunity

The cross-institutional nature of the Session Papers corpus has been
a research strength for as long as the documents have existed. It has
also, for most of the corpus's modern history, been a practical
obstacle: a scholar working seriously on the materials has had to
contend with separate catalogs, separate platforms, separate
descriptive conventions, and separate access arrangements at each of
the holding institutions.

Over the last decade, a substantial amount of digitization has
happened at those institutions independently. UVA has digitized
roughly 38,500 pages from the Skene Collection. The University of
Edinburgh has digitized approximately 155,000 pages of materials from
its own holdings and from those of partner libraries. Smaller but
significant digitization efforts exist at other holding institutions.

The opportunity that the preservation thread of this project addresses
is to **bring all of that existing digital material together, in a
single managed location, under a unified descriptive framework**, so
that the modern pipelines described elsewhere in this section have a
single, well-described, durable starting point — and so that scholars
encountering the corpus do not have to know in advance which
institution holds what before they can begin to work.

## What this thread builds

The preservation thread is building a **consolidated digital archive**
of the Session Papers materials that have already been digitized across
the holding institutions. Hosted in cloud object storage that UVA
controls, designed for durability, and structured so that everything
downstream in the modernization program — the
[text pipeline](/scos-modernization-site/future/text-pipeline/), the
[case-binding work](/scos-modernization-site/future/case-binding/),
the [search infrastructure](/scos-modernization-site/future/search/),
the [research interface](/scos-modernization-site/future/scholarship/) —
can read from a single canonical source.

Concretely the archive holds, for each item:

- The full-resolution page image as it was digitized
- The IIIF manifest that describes the item's structure, sequence,
  and rights statement
- A provenance record that captures where the image came from, when
  it was retrieved, and what its integrity hash is at retrieval time
- A pointer back to the holding institution and to the descriptive
  catalog record (where one exists) at that institution

A single small database file serves as the **canonical index** of the
archive's contents — every item, its location in storage, its source
institution, its IIIF manifest, its rights statement, its descriptive
metadata. The index is small enough to copy freely and serves as the
worklist for every downstream pipeline.

## What this enables

Three concrete capabilities that follow from having the existing
digitized material consolidated and described:

- **New methods of processing can run across the whole corpus at
  once.** The
  [text pipeline](/scos-modernization-site/future/text-pipeline/) is
  applied uniformly to UVA-digitized and Edinburgh-digitized pages
  alike, with the same era-aware handling and the same quality gates.
  The
  [case-binding pipeline](/scos-modernization-site/future/case-binding/)
  draws on documents from all the holding institutions
  simultaneously, because that is the only level at which a case can
  reliably be reconstructed.
- **Cross-institutional description becomes possible.** Each item in
  the archive carries its source institution as a first-class field.
  Items that the UVA cataloging has already described inherit those
  descriptions; items from partner institutions where descriptive
  cataloging is still in progress carry whatever description exists
  and are flagged for the partnered cataloging work to come.
- **The descriptive infrastructure persists across changes in any
  single institution's hosting decisions.** Each holding institution
  retains stewardship of its physical materials and of its own
  imagery; the consolidated archive is a workspace for the joint
  modernization, not a transfer of ownership. If any one institution
  reorganizes its digital collections platform — as the University of
  Edinburgh is currently doing — the modernization work continues
  uninterrupted.

## A note on Edinburgh's platform transition

The University of Edinburgh is in the process of moving its digital
collections off the Luna image platform onto a next-generation
open-source platform. As part of that transition, Edinburgh and UVA
are coordinating directly on the hosting arrangement for UVA-owned
materials going forward, with UVA assuming continued operational
responsibility for its own holdings. This is a normal evolution of a
long-running cross-institutional collaboration, and the consolidation
work described above is the right preparation for it.

## What it costs

The consolidated archive uses cloud object storage's archival tier,
which at typical pricing for the size of the collection comes out to
well under one US dollar per month for the entire holdings — orders
of magnitude smaller than the value of the descriptive and
processing work the archive enables.

## What this thread is not

This thread does not produce a new public-facing website. The public
face of the corpus remains
[scos.law.virginia.edu](https://scos.law.virginia.edu/) and the
modernization described in the other threads on this site. The
consolidated archive is the underlying material on which all of that
work rests — durable, well-described, and ready to be processed.
