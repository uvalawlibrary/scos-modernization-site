---
title: About the Project
description: Team, funding, partners, citation.
---

## Project leads

**Loren S. Moulds** — Digital Collections Librarian and Head of
Digital Scholarship & Preservation at the Arthur J. Morris Law
Library (Special Collections), University of Virginia School of Law.

The work described on this site is one of several closely-related
projects in cultural-heritage computation that Loren has led at UVA,
which together form a lineage of methodology, tooling, and
institutional capability in AI-assisted archival description and
discovery.

**[Jim Ambuske](https://www.jimambuske.com/about)** — Director of
Digital History at *More Perfect*, historian of the early modern
British Atlantic, and longtime collaborator on the Session Papers
project. Jim is co-author of the 2018 *Scottish Archives* article
that frames the corpus's scholarly significance, was co-investigator
on the 2021 joint UVA–Edinburgh "Open EDITOR" proposal, and remains
a principal intellectual partner on the project's research and
dissemination threads.

## Partner institutions

The University of Virginia School of Law Library is in formal
partnership with the **Centre for Research Collections (CRC) at the
University of Edinburgh Main Library** on the digital modernization
of the Session Papers. The collaboration has been continuous since
2017 and has produced the Edinburgh-led EDITOR pilot, a shared
hosting arrangement for digital surrogates, joint conference
presentations, the March 2021 transatlantic symposium, and the
present generation of cross-institutional work.

The Faculty of Advocates, the Signet Library, and the National
Records of Scotland are the other principal holding institutions for
the corpus. Specific named collaborators at the partner institutions
are recognized in the project's published outputs.

## Funding and support

The current generation of work is supported through:

- **The Andrew W. Mellon Foundation's partnership with the
  University of North Carolina at Chapel Hill**, which provides
  funding for pipeline and methodology development and supports the
  shared cultural-heritage-AI methodology lineage described below.
- **The University of Virginia School of Law**, which provides
  institutional support for the project's curatorial and
  technological work.
- **The University of Virginia Research Computing / LawData
  allocation**, which provides the HPC compute resources for the
  open-weight AI components of the pipelines described in the
  [Future](/scos-modernization-site/future/) section.

Earlier phases of work — including the 2018 launch of scos.law,
subsequent digitization, the Edinburgh-led EDITOR pilot, and the
March 2021 transatlantic workshop — have been supported by a series
of awards including the William Nelson Cromwell Foundation, the
Scottish Library and Information Council, the Omohundro Institute of
Early American History and Culture, and the Centre for Culture, Data
& Society at the University of Edinburgh.

## Methodology lineage

The project's approach to AI-assisted archival work draws explicitly
on a lineage of recent and current projects in cultural-heritage
computation:

- **UNC On the Books** (Mellon-funded; UNC Chapel Hill) — the
  methodological lineage for archivist-AI collaboration on archival
  description, including the observable-versus-inferential discipline
  and the no-demographics-by-default ethical posture
- **NARA Index Cards** (UVA Law Library) — a 1.4-million-card
  Bureau of Indian Affairs photographic-index dataset processed
  through a multi-model HPC pipeline, establishing the
  three-tier production architecture and the composite-key
  multi-model pattern this project lifts unchanged
- **Grand Rapids Public Museum Glass Slides** (UVA Law Library +
  GRPM) — a three-tier vision-language-model comparison pattern
  for archival image description, with safety-suppression
  infrastructure for uncurated content
- **HPC Starter Kit** (UVA Law Library, with UNC Digital Research
  Services) — a reusable vLLM-on-Slurm scaffold for running
  open-weight vision-language models on university HPC clusters,
  designed for adoption by other GLAM projects

Each of these projects earned a piece of the scaffolding the
Session Papers modernization builds on. The Session Papers project,
in turn, intends to contribute methodology and tooling back into
the lineage.

## Reference work

The most thorough published framing of the corpus's scholarly
significance appears in:

> Ambuske, Jim, Randall Flaherty, and Loren S. Moulds. "Recovering
> Hidden Histories of Early America and the British Atlantic World
> with the Scottish Court of Session Digital Archive Project."
> *Scottish Archives* 24 (2018), 26–42.

For a worked example of the AI-assisted handwritten-text-recognition
methodology that informs this project's deferred frontier-HTR work
(and a recent collaboration of the project lead's outside the SCOS
corpus):

> Herrington, Philip M., and Loren S. Moulds. "Reading the Register:
> Using AI-Assisted Handwritten Text Recognition (HTR) to Unlock the
> Hermitage Plantation Register of Guests." *Journal of Map &
> Geography Libraries* (2026). DOI:
> [10.1080/15420353.2026.2614780](https://doi.org/10.1080/15420353.2026.2614780).

## Voices and resources in the field

The methodological landscape that this project sits in has, in the
last two years, been documented openly and in near-real time by a
small community of practitioners working at the intersection of
generative AI and historical / archival research. Where the project's
own methodology builds on, converges with, or learns from this
community's published patterns, the following are particularly
worth following:

- **[Computational History](https://computationalhistory.substack.com/)**
  — historians publishing close, evaluative writing on how
  generative AI changes (and does not change) historical research
  workflows, with attention to source criticism, reproducibility,
  and disciplinary epistemics.
- **[Generative History](https://generativehistory.substack.com/)**
  — practitioner notes on applying generative models to historical
  sources, including transcription, translation, and entity
  extraction.
- **Daniel van Strien's
  [AI Patterns for GLAM](https://danielvanstrien.xyz/ai-patterns-for-glam/)**
  — a maintained pattern catalog for galleries-libraries-archives-
  museums work with AI, including
  [VLM structured generation](https://danielvanstrien.xyz/ai-patterns-for-glam/patterns/structured-generation/vlm-structured-generation.html),
  which closely tracks the structured-output discipline this
  project uses for its
  [text](/scos-modernization-site/future/text-pipeline/) and
  [case-binding](/scos-modernization-site/future/case-binding/)
  pipelines.

The lineage works in both directions: this project draws on the
patterns documented above, and where its own contributions are
generalizable to other historical print and manuscript corpora,
they will be published openly into the same community.

## Citation

For the project as a whole:

> Moulds, Loren S. *The Scottish Court of Session Papers
> Modernization Project.* University of Virginia School of Law
> Library, 2026–. https://scos.law.virginia.edu/

For the planned 2027 gold-standard reference dataset:

> Moulds, Loren S., and collaborators. *Scottish Court of Session
> Session Papers — Curated Catalog, 2018 Cohort.* University of
> Virginia School of Law Library. DOI forthcoming.

A formal citation file (`CITATION.cff`) will be published alongside
the gold-standard dataset.

## Get in touch

For research enquiries about the corpus, for institutional
partnership conversations, or for methodology questions about the
tooling and pipelines described elsewhere on this site:

**Loren S. Moulds** — moulds@virginia.edu

UVA Law Library, Charlottesville, Virginia, USA.
