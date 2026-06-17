---
title: Case Binding
description: Turning a corpus of independent procedural papers into a navigable archive of litigation.
---

## The problem

A single Court of Session case might produce, over the course of its
litigation, half a dozen distinct printed papers — a Petition that
opens proceedings, Memorials that argue the substantive question,
Answers that respond, an Information that brings the cause to the
Inner House, a Decreet that records judgement.

Treated as **independent documents**, these papers tell six separate
stories. Treated as **one case**, they tell the story of a single
contested dispute as it moved through the court.

For the human curator working with the UVA collection over the last
eight years, deciding which paper belongs to which case is core
intellectual work — often requiring contextual clues, marginalia,
comparison of party names across documents, and reference to the
printed reports where they exist. The result is the existing
catalog: roughly **2,400 documents at UVA**, with roughly **half
already bound to specific cases**.

At the scale of the cross-institutional corpus — closer to **250,000
documents** across all the holding institutions — that work cannot be
done one paper at a time by a human curator. It has to be done at
scale, with the human work as the ground truth, and with curator
review on the parts that matter.

## The approach

The case-binding pipeline runs in five phases. The first and the last
handle most of the work; the middle three handle the harder
remainder.

**Phase 1 — Match against known cases.** For each document, the
pipeline looks at the parties, the date, the court venue, and the
counsel and judges named in the document, and asks: does an existing
catalogued case match this? If the match is strong enough, the
document gets attached to that case. This is the easy majority of
the work, particularly for documents whose parties appear by name in
the existing UVA cataloging.

**Phase 2 — Cluster documents to each other.** For documents that
don't match any existing case, the pipeline asks: do these documents
match *each other*? Two Memorials filed within a few weeks of each
other, between the same parties, on the same matter — these are
almost certainly the same case, even if the case doesn't yet exist
in the catalog. The pipeline uses party names (with careful
normalisation for spelling variants like *MacDonald / M'Donald /
McDonald*), dates, document types, and — critically — the explicit
**cross-references inside the documents themselves** (a Memorial
might refer to "the within Petition" or "the Answers lodged by the
said John MacDonald") to cluster documents into provisional cases.

**Phase 3 — AI adjudication for borderline clusters.** When the
clustering is uncertain — when a document might or might not belong
to a particular cluster, or when two clusters might or might not be
the same case — a contemporary language model is asked to consider
the evidence and propose a judgement, with reasoning. This is a
bounded volume of work, only the harder cases, and is the right
place for frontier-tier AI to do what it is genuinely good at:
applying contextual judgement to ambiguous evidence.

**Phase 4 — New cases get stub records.** Where the pipeline has
confidently identified a new case that does not yet exist in the
catalog, a stub case record is created and routed to curator review.
The curator confirms, splits, merges, or rejects. The cataloging
work continues; it does not stop. But it is now starting from a
proposal rather than from nothing.

**Phase 5 — Re-matching as new content arrives.** The pipeline does
not run once and stop. Every newly-ingested document, every newly
confirmed case, every new variant of a party name added to the
normalisation rules, triggers re-evaluation of the unmatched and
weakly-bound portions of the corpus. Bindings can form long after
either end was first ingested — particularly important for the
cross-institutional content where documents from one institution
turn out to belong to cases largely held at another.

## What the user sees

The user-facing payoff is the corpus appearing as a navigable archive
of **litigation**, not as a pile of independent papers. From any
single document, a scholar can move to the other papers in the same
case, to the other cases the same advocate appeared in, to the other
cases with the same party, to the other cases at the same court
venue in the same year.

## What it preserves

What it does not do, equally importantly:

- **Overwrite the human cataloging.** Where the curator has already
  bound a document to a case, the human binding wins. The pipeline
  proposes; it does not retroactively rewrite.
- **Operate without provenance.** Every binding the pipeline proposes
  is recorded with its method, its confidence, and the model and
  prompt version that produced it. Every curator confirmation is
  recorded with the curator's identity and timestamp. The audit
  trail is complete.
- **Try to be authoritative on questions that need human judgement.**
  Where the evidence is genuinely contested — and Session Papers
  cases do sometimes turn on whether two seemingly-separate disputes
  are in fact connected — the pipeline surfaces the evidence to a
  curator rather than pretending to a confidence it cannot earn.

The result, at corpus scale, is what the eight years of expert
cataloging at UVA achieved at smaller scale: a corpus that is not
just a pile of pages but an archive of arguments, identifiable cases,
and the people who appeared in them.
