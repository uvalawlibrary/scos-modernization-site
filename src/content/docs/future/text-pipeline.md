---
title: Text Pipeline
description: Making every page of every Session Paper searchable — with eighteenth-century print handled carefully.
---

## The problem

The Session Papers are printed materials, which sounds like a problem
already solved. Optical character recognition — OCR — has been
available for decades, and reading printed text is among the more
mature applications of machine learning.

In practice, **off-the-shelf OCR does not work well** on
eighteenth-century printed pages. The reasons are concrete:

- **The long-s (ſ)** — the letterform that looks somewhat like an `f`
  but is pronounced and read as `s` — appears throughout pre-1795
  printing. Standard OCR reads it as `f`, producing "Seſsion"
  rendered as "Sefsion", and "purſuer" as "purfuer". Across a corpus
  of hundreds of thousands of pages, this single error
  is catastrophic for full-text search.
- **Ligatures** — paired letter combinations cast as a single
  character, common in eighteenth-century type — are often misread
  as garbage. The "ct" ligature, the "ﬅ" (long-s + t), the "ﬃ"
  triple-letter ligatures.
- **Page furniture** — printed page numbers, catchwords, signature
  marks — gets interleaved with body text and pollutes search
  results.
- **Marginalia** — manuscript annotations added by readers across two
  centuries — bleeds into the body OCR and degrades it further.
- **Bound-volume curvature** — the pages near the gutter of a bound
  volume are scanned with optical distortion that defeats line-level
  layout analysis tuned for flat pages.
- **Eighteenth-century legal language** is internally consistent
  but unfamiliar to general-purpose OCR systems trained on
  contemporary text.

The Virginia and Edinburgh teams have been working with these
particular obstacles, in different combinations, since 2018. The
current text pipeline is the product of what has been learned.

## The approach

The pipeline runs in two stages, deliberately.

**Stage one** uses a classical OCR engine — fast, well-understood,
free, and good at **geometry**. It identifies where the text is on
the page, where the words and lines are, what their bounding boxes
are. It does this reliably, even on eighteenth-century print. What
it produces is not, by itself, satisfactory text — it has all the
long-s and ligature problems described above — but it has the right
*shape*, which is what stage two needs.

**Stage two** uses a contemporary open-weight vision-language model —
the kind of system that has only become practical in the last two
years — to do the actual **reading**. The model sees the page image
and the geometric OCR output from stage one, and it corrects the
text: the long-s gets read as `s`, the ligatures as their constituent
letters, the page furniture gets tagged as page furniture rather
than mistaken for body text. Marginalia regions are detected, their
locations recorded, and flagged in the resulting metadata — though
their actual transcription is deferred for a later, separate phase of
work that uses a higher-cost AI tier appropriate for handwriting.

The reading model is **era-aware**: it knows whether the page is
pre-1795 (long-s likely present, aggressive ligature handling
appropriate) or post-1800 (long-s rare, light touch). Era inference
comes from cataloging metadata where available, and from the model
itself where the metadata is silent.

The output is **ALTO XML** — a long-established library standard for
the geometric description of a printed page, with text content
attached to bounding boxes — that the search infrastructure can
ingest directly. Each page's ALTO file is paired with a structured
data file recording extracted page-level information: the
page number printed on the page, any catchword at the foot, any
signature mark, whether marginalia is present and where, the era
inferred for the typography.

## Where it runs

The pipeline is computationally serious. Running open-weight
vision-language models across hundreds of thousands of pages requires
GPU time at a level that small computers cannot provide. The
project's compute home for this work is the **University of
Virginia's research computing environment (Rivanna)**, where the same
pipeline patterns that have been proven on prior University projects
— the NARA Index Cards corpus, the Grand Rapids Public Museum's
glass-plate collection, the Court of Session manuscript handwriting
pilot — extend straightforwardly to the SCOS text pipeline.

Output flows into the [search infrastructure](/scos-modernization-site/future/search/) and
into the [case-binding pipeline](/scos-modernization-site/future/case-binding/), and also
into the [canonical data layer](/scos-modernization-site/future/canonical-data/) for
preservation independent of any operational platform.

## What the user sees

The user-facing payoff is the ability described on the
[search page](/scos-modernization-site/future/search/): typing a word into the search box
on scos.law and seeing it highlighted on the actual page, in the
viewer, with the exact location on the eighteenth-century printed
sheet circled.

A scholar interested in "Cape Anthony" — say, because they are
working on the maritime history of Atlantic merchants — will be able
to find every printed mention of it in the corpus, regardless of how
the original printer set the letterforms.

That is what this pipeline is for.
