---
title: Search
description: Word-level search inside the documents, with results that highlight the exact location on the page.
---

## The current state

A scholar arriving at scos.law today can search the **catalog
metadata** — case titles, parties, counsel, judges, archival
provenance. For the substantial portion of the corpus that has been
catalogued in detail, this is meaningful and useful search.

What the scholar **cannot** do is search inside the documents
themselves. Typing a party name like *McGowan* finds the cases where
McGowan has been described in the catalog. It does not find the
hundreds of other places where McGowan might be named in the body of
a Memorial, an Information, or a Decreet without yet having been
indexed.

This thread closes that gap.

## What it does

After the [text pipeline](/scos-modernization-site/future/text-pipeline/) has produced
high-quality OCR for the corpus, the search thread makes that text
**searchable at the word level, with sub-page precision**.

Concretely:

- A query for a name, a place, or a phrase searches the **full
  corpus**, not just the catalog
- Each result lists the documents where the term appears
- Within each document, the result identifies the **exact page** the
  term appears on
- Within each page, opening the document viewer shows **the precise
  word, highlighted, at its exact location on the printed sheet**
- Phrase matches — multi-word queries — highlight each occurrence of
  the phrase across whatever number of words it spans

This is the search experience that has become standard for modern
digital archives over the last decade — but it has required real
infrastructure to implement, and it has not yet been available at
scos.law.

## How it works

Two pieces of established infrastructure carry most of the load.

**Apache Solr** with the **dbmdz solr-ocrhighlighting** extension
indexes the OCR output produced by the text pipeline. Solr handles
the search query; the extension handles the geometric coordinates
that let the viewer highlight the right region of the page.

**The International Image Interoperability Framework (IIIF) Search
API** is the protocol that the document viewer uses to ask the
search index "where in this document does this term appear?" The
answer comes back as a list of annotations — one per occurrence —
that the viewer can render directly as highlights on the page image.

The same combination is already in production for the project's
PWCT collection, where it serves search-with-highlighting against an
adjacent corpus of historical legal records. SCOS is being brought
onto the same infrastructure, with a search configuration tuned for
the era-specific typography of eighteenth-century Scots-law
printing.

## What this changes for a researcher

Three changes in research practice that an in-document search will
make possible:

- **Finding hidden mentions.** A scholar looking for the names of
  enslaved people who appear in Session Papers cases will, for the
  first time, be able to search the body text rather than only the
  cataloged case titles and abstracts. The methodological work of
  recovering those mentions does not become trivial, but it becomes
  *possible at the scale of the corpus*.
- **Tracing topics across documents.** A historian interested in,
  say, the use of a particular legal argument across a decade of
  cases can search for the argument's distinctive phrasing rather
  than working through every catalog entry in the period.
- **Confirming attributions and identifications.** The case-binding
  work described elsewhere on this site relies, in part, on detecting
  cross-references between procedural papers ("the within Petition";
  "the Memorial lodged by the said John MacDonald"). Once those
  references are searchable, the work of confirming a binding becomes
  much faster.

## What it does not change

The catalog metadata search remains the right tool when the scholar
already knows what they are looking for — the case name, the year,
the party's exact name. In-document search complements catalog
search; it does not replace it.

Search results are also only as good as the underlying OCR. The text
pipeline is doing serious work to make the OCR good across the
eighteenth-century typography of the corpus, but no automatic process
is perfect, and the search results will inherit whatever errors the
underlying recognition produces. The project's
[evaluation harness](/scos-modernization-site/future/text-pipeline/) measures this
explicitly, against the human cataloging, and the OCR will be
improved iteratively as new models become available.

This is the standard contemporary trade-off for any digital archive
at this scale. The alternative — refusing to ship in-document search
because it cannot be perfect — is the trade-off many scholars have
been working under for decades, and the project's view is that
something carefully imperfect at the scale of the corpus is better
than nothing.
