---
title: Scholarship
description: Programmatic and AI-assisted research tools that let a scholar interrogate the corpus with the latest generation of language models — every citation grounded in an actual document.
---

The work described elsewhere in this section is, in a sense,
preparatory: it makes the corpus searchable, navigable, citable. This
thread asks the next question: **once the corpus is in good shape,
what new kinds of scholarly work does it enable?**

The answer the project is investing in is **AI-assisted research
that is grounded in actual documents**. Not AI that produces
plausible-sounding history from training data, but AI that consults
the corpus, retrieves specific documents, and answers research
questions using those documents as the explicit, citable evidence.

## The interface

The infrastructure that makes this possible is a **Model Context
Protocol (MCP) server** — a programmatic interface, accessible to
Claude, ChatGPT, and any other modern language model that supports
the protocol, that exposes the corpus as a queryable resource.

When a scholar working in a contemporary AI assistant asks something
like:

> *"Find every Petition involving shipping insurance from Maryland
> between 1780 and 1800 where Hugh Dalrymple appeared as counsel, and
> summarise their procedural outcomes."*

the assistant, having been pointed at the SCOS MCP server, can:

1. Translate the question into structured queries against the
   corpus — searching by date, by party, by counsel, by document
   type
2. Retrieve the actual documents that match
3. Read their content (the OCR'd body text plus the case-binding
   information that links them into cases)
4. Synthesise a response — with **every citation pointing to a real
   document URL on scos.law**, not to a confabulation

This is qualitatively different from how language models typically
work with historical corpora. The assistant is not guessing from
what it has seen during training; it is reading the corpus, in real
time, in response to the question.

## What it changes about research practice

Two things, primarily.

**Speed of survey.** A literature review across a decade of Session
Papers cases on a particular procedural question becomes a
conversation with the corpus rather than a multi-week archive
visit. The scholar still does the interpretive work — the AI is not
producing the analysis — but the *retrieval and survey* work that
historically dominated archival research at scale becomes much
faster.

**Reproducibility.** Because every claim the assistant makes comes
with a citation to a specific document, the scholar can verify each
claim against the actual material. This is the difference between
"the AI said this" and "the AI said this, and here is exactly which
documents support the claim, and a click takes you to each one."

## The semantic search layer

The MCP server is backed by two parallel indexes:

- A **keyword index** — the same Solr-based infrastructure that
  powers the [search thread](/scos-modernization-site/future/search/) — for queries that
  name specific terms
- A **semantic search index** built from embeddings of the corpus's
  text, for queries that describe *what kind of document* the
  scholar is looking for rather than what specific words it contains

The semantic index lets a query like "cases involving disputed
inheritance of estates in the Caribbean" succeed even when the
documents don't all use exactly those words. The embeddings are
computed by an open-weight model on the project's research
computing infrastructure — keeping the cost low and the data on
institutional servers.

## What it preserves about traditional research

The MCP server does not replace any of the conventional ways of
working with the corpus. Scholars who prefer to browse the case
catalog, read documents in the viewer, and write notes by hand can
do all of that, unchanged, on scos.law.

What it adds is a research mode that was not previously possible —
not at this scale, not with citations grounded in actual documents,
not without the years of human effort that constructing a research
corpus from raw archival material has historically required.

## Who else this benefits

The MCP interface also opens scos.law as a **federated resource**
that other scholarly projects can integrate. A digital humanities
project building an interactive map of eighteenth-century
transatlantic legal disputes; a biographical database tracing
particular Scottish families across the Atlantic; a research group
working on the history of advocacy at the Scottish bar — any of
these can query SCOS programmatically, receive structured responses,
and build the corpus's evidence into their own work without needing
to ingest it into their own database.

The MCP protocol is itself open and emerging as a standard; the
project's contribution is to make a substantive historical corpus
available through it, with care and provenance built in from the
start.
