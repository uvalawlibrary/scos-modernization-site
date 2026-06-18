---
title: Roadmap
description: The modernization timeline — workstreams, sequence, and current status, without firm dates.
---

This page is the live punch list for the modernization. The chart
below shows the **sequence and dependencies** of the workstreams
described elsewhere in this section, grouped into lanes that roughly
correspond to phases of the work. **Horizontal position indicates
position-in-sequence, not calendar dates** — dates depend on the
shape of the cross-institutional conversation, on grant cycles, and
on what we learn from the model-bake-off and metadata-audit work
currently underway. The textual list further down restates each item
in detail with a current-status note.

Status updated **17 June 2026**.

<div class="roadmap" role="figure" aria-label="SCOS modernization roadmap">

<div class="roadmap-header">
  <div>Workstream</div>
  <div>Done</div>
  <div>Now</div>
  <div>Next</div>
  <div>After</div>
  <div>Later</div>
  <div>Parked / gated</div>
</div>

<div class="roadmap-lane">Foundation</div>

<div class="roadmap-row">
  <div class="roadmap-label">law_iiif spike (SCOS paragraph model)</div>
  <div class="roadmap-bar done" style="grid-column: 2;">Spike accepted</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Design docs (OCR, case binding, canonical data)</div>
  <div class="roadmap-bar done" style="grid-column: 2;">Drafted</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 0 — SCOS on law_iiif canonical module</div>
  <div class="roadmap-bar done" style="grid-column: 2 / span 2;">Cutover in code; manifest-parity diff vs legacy pending</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 0.25 — Dark archive harvest (UoE Luna → GCS)</div>
  <div class="roadmap-bar now" style="grid-column: 3 / span 2;">HPC harvest running on Rivanna</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">SCOS OCR Solr on multi-site VM</div>
  <div class="roadmap-bar now" style="grid-column: 3 / span 2;">Configset deployed; settings.php wiring + smoke test</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">CRC / UoE partnership coordination</div>
  <div class="roadmap-bar now" style="grid-column: 3 / span 3;">Open-ended; framing Luna transition + post-Luna federation</div>
</div>

<div class="roadmap-lane">Inventory &amp; bake-offs</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 0.5 — Metadata audit + AI-interpretation fields</div>
  <div class="roadmap-bar next" style="grid-column: 4 / span 2;">Field-by-field audit; seed controlled subject vocabulary</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 0.75 — Model + infra bake-offs (E1–E6)</div>
  <div class="roadmap-bar next" style="grid-column: 4 / span 2;">Stratified sample → gold standard → bake-off → HPC infra</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Track 3.1a — UVA-owned hosting transition</div>
  <div class="roadmap-bar next" style="grid-column: 4 / span 2;">Inventory UVA masters; plan post-Luna image service</div>
</div>

<div class="roadmap-lane">Production on the UVA-owned 38 k</div>

<div class="roadmap-row">
  <div class="roadmap-label">HPC OCR pipeline (Stage A geometry → Stage B era-aware AI)</div>
  <div class="roadmap-bar after" style="grid-column: 5 / span 2;">Tesseract + Gemma/Gemini correction; marginalia routing</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">AI extraction at scale on UVA 38 k</div>
  <div class="roadmap-bar after" style="grid-column: 5 / span 2;">Summaries, agents, subjects, categories with provenance</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">SCOS MCP server (UVA 38 k first)</div>
  <div class="roadmap-bar after" style="grid-column: 5 / span 2;">Keyword + semantic + retrieval + statistics</div>
</div>

<div class="roadmap-lane">Federation to the 193 k</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 1.5 — UoE volume page classifier</div>
  <div class="roadmap-bar later" style="grid-column: 5 / span 2;">Cover / title / body / blank → document segmentation</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Pipelines widened to full 193 k</div>
  <div class="roadmap-bar later" style="grid-column: 6 / span 1;">Post-classifier; preferably post-B200 GPUs</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">§7.4 federation into scos.law</div>
  <div class="roadmap-bar later" style="grid-column: 6 / span 1;">Stub records; rights gating per holder; image service IIIF-federated</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 6 — Bulk-upload pipeline for new local scans</div>
  <div class="roadmap-bar later" style="grid-column: 6 / span 1;">Deposit packages → GCS + Cantaloupe + queue workers</div>
</div>

<div class="roadmap-lane">Enrichment</div>

<div class="roadmap-row">
  <div class="roadmap-label">§7.5 Case + agent registry</div>
  <div class="roadmap-bar later" style="grid-column: 5 / span 2;">Seeded from UVA's curated metadata; retrieval-augments extraction</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">§7.6 Morison's / BAILII citation matching</div>
  <div class="roadmap-bar later" style="grid-column: 6 / span 1;">HSLR data acquisition; citation fields on case_data</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 4 — Entity extraction + network graph</div>
  <div class="roadmap-bar later" style="grid-column: 6 / span 1;">Persons / places / orgs; role-typed edges; evidence-cited</div>
</div>

<div class="roadmap-lane">Research surfaces</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 5 — Exploration UI</div>
  <div class="roadmap-bar later" style="grid-column: 6 / span 1;">Trend dashboards, maps, network viewer, semantic layer, JSON:API + bulk CSV</div>
</div>

<div class="roadmap-lane">Parked / gated</div>

<div class="roadmap-row">
  <div class="roadmap-label">Phase 2 — Minute books</div>
  <div class="roadmap-bar parked" style="grid-column: 7;">Gated on locating / digitizing missing volumes</div>
</div>

<div class="roadmap-row">
  <div class="roadmap-label">Track 3.1b — Non-UVA UoE-held content</div>
  <div class="roadmap-bar parked" style="grid-column: 7;">Gated on CRC reply re: IIIF on the next-generation platform</div>
</div>

<div class="roadmap-legend">
  <span class="pill pill-done">Done</span>
  <span class="pill pill-now">Now</span>
  <span class="pill pill-next">Next</span>
  <span class="pill pill-after">After foundation</span>
  <span class="pill pill-later">Later</span>
  <span class="pill pill-parked">Parked / gated</span>
</div>

</div>

## What changed recently

The shape of the work has shifted in the last several days, and the
chart above reflects that. The notable updates:

- The **law_iiif canonical module** is now the platform that SCOS
  reads from. The cutover from the bespoke `law_scos` /
  `scos_iiif` modules to the canonical pattern is done in code; what
  remains is a manifest-parity diff against the legacy output to
  confirm nothing user-visible regressed.
- The **dark archive harvest** is in flight on Rivanna, the
  University of Virginia's research-computing cluster, walking the
  Edinburgh-hosted IIIF Collection and writing into a UVA-controlled
  GCS archive bucket. This is preservation-first work — the goal is
  that every page of the materials currently visible on the
  Edinburgh side has an authoritative, durable copy under UVA's
  control before any platform transition.
- The **multi-site OCR Solr VM** that PWCT was migrated onto is now
  also hosting the SCOS OCR Solr core. A single small VM holds the
  Solr cores for every Acquia site that needs printed-page
  highlighting, which is what the
  [search infrastructure](/scos-modernization-site/future/search/)
  rests on.
- The three new **design documents** — the OCR pipeline, the
  case-binding pipeline, the canonical data layer — are drafted and
  in the project's repository. They formalize the methodology
  described elsewhere on this site and give the bake-offs in Phase
  0.75 a clear evaluation target.
- The University of Edinburgh's confirmation that it is retiring the
  Luna platform has split the previously single "image-service
  migration" item into two tracks: **Track 3.1a** for the UVA-owned
  materials, which is now an active workstream as UVA assumes
  continued responsibility for its own holdings, and **Track 3.1b**
  for the non-UVA UoE-held content, which is gated on the
  conversation about whether the next-generation Edinburgh platform
  will support the IIIF protocols that make low-friction federation
  possible.

## The punch list, expanded

The list below is the full set of items the chart summarizes, with
the current status noted on each.

### Pre-flight

- <span class="pill pill-done">Done</span> **law_iiif paragraph-canvas
  spike** — proof that the canonical module can read SCOS's
  `field_document_luna_sync` paragraph model. Spike accepted; cutover
  followed.
- <span class="pill pill-now">Now</span> **UoE harvest understanding
  in writing** — the Edinburgh confirmation of Luna retirement
  effectively opens the harvest window; the formal partnership-level
  framing of the dark-archive copy is part of the ongoing CRC
  conversation.

### Foundation

- <span class="pill pill-done">Done</span> **Phase 0 — SCOS on
  law_iiif:** configured for `case_document`; retired
  `law_scos\BuildManifest` / `BuildSearchSnippet` / WHIIIF;
  `scos_iiif` module removed. Manifest-parity diff vs. legacy still
  to run.
- <span class="pill pill-now">Now</span> **Phase 0.25 — Dark archive
  harvest:** walking the public IIIF Collection
  (`…/iiif/collection/s/1ssgi9`); pulling images, manifests, and
  provenance into a GCS Archive-class bucket under UVA's control.
  Per `docs/scos-modernization-plan.md §3.5`.
- <span class="pill pill-next">Next</span> **Phase 0.5 — Metadata
  audit + new AI-interpretation fields:** field-by-field population
  audit of `case_document` / `case_data`; add `field_ai_summary`,
  `field_ai_agents`, `field_ai_subjects`, `field_ai_categories`,
  `field_extraction_provenance`; seed the SCOS subject controlled
  vocabulary.
- <span class="pill pill-next">Next</span> **Phase 0.75 — Model &amp;
  infra experiments (E1–E6):** stratified sample → gold standard →
  OCR bake-off → per-task bake-off → HPC infra validation →
  `docs/scos-model-decisions.md`. Includes the embedding-model
  benchmark for the MCP server (§9.6.3).

### Production on the UVA-owned 38 k

- <span class="pill pill-now">Now</span> **SCOS OCR Solr + UV
  highlighting (§5.4):** SCOS OCR configset deployed to the
  multi-site OCR Solr VM (replacing what would have been a separate
  per-site Cloud Run instance); `law_iiif\SolrOcrHandler` extended to
  include the `case_document` bundle; `settings.php` wiring + a
  Parker-petition end-to-end smoke test remain.
- <span class="pill pill-after">After</span> **HPC OCR pipeline for
  UVA 38 k:** Tesseract baseline (geometry) + era-aware AI
  correction (Stage B) + marginalia routing (Stage C); ALTO to
  `/project/LawData/scos/alto/`. All on cluster, no laptops.
- <span class="pill pill-after">After</span> **AI extraction at
  scale on UVA 38 k:** summaries / agents / subjects / categories
  per the E6 model assignments; ingest into the §0.5 fields with
  provenance and moderation states.

### Federation to the 193 k

- <span class="pill pill-later">Later</span> **Phase 1.5 — Page
  classifier for UoE volumes:** cover / title / body / blank
  classifier over each shelfmark to segment volumes into documents.
- <span class="pill pill-later">Later</span> **Intense-phase
  widening:** same OCR + AI pipelines across the full 193 k from the
  dark archive (preferably post-B200 GPUs).
- <span class="pill pill-later">Later</span> **§7.4 Federation into
  scos.law:** stub records for non-UVA items; rights gating per
  holding institution; image service IIIF-federated where the holder
  supports it.
- <span class="pill pill-later">Later</span> **Phase 6 — Bulk-upload
  pipeline for new local scans:** deposit-package convention, GCS +
  Cantaloupe, queue workers.

### Enrichment

- <span class="pill pill-later">Later</span> **§7.5 Case &amp; agent
  registry** seeded from UVA's curated metadata;
  retrieval-augments every extraction job; deferred re-matching on
  each new ingest.
- <span class="pill pill-later">Later</span> **§7.6 Morison's /
  BAILII citation matching:** acquire HSLR data (request from
  BAILII or OCR public-domain Morison's); citation fields on
  `case_data`.
- <span class="pill pill-later">Later</span> **Phase 4 — Entity
  extraction + network graph:** persons / places / organizations
  with role-typed edges, evidence-cited, exportable.

### Research surfaces

- <span class="pill pill-later">Later</span> **Phase 5 exploration:**
  trend dashboards, maps, network viewer, semantic layer, JSON:API
  + bulk CSV.
- <span class="pill pill-later">Later</span> **§9.6 SCOS MCP server:**
  keyword + semantic + retrieval + statistics over the corpus;
  ships on the UVA 38 k first.

### Parked / gated

- <span class="pill pill-parked">Parked</span> **Phase 2 — Minute
  books** — gated on locating and digitizing missing volumes.
- <span class="pill pill-parked">Gated</span> **Track 3.1b — Non-UVA
  UoE-held content service migration** — contingent on the
  Edinburgh next-generation-platform decision about IIIF support and
  on the partnership-level conversation about hosting arrangements
  for non-UVA materials.

## How this page works

This page is intended to be **the canonical lightweight view of
where the modernization is**, updated as the chart changes rather
than left to drift. The detailed working punch list and the deeper
design documents live in the project's internal documentation; this
page is the public-facing summary, scoped to what is helpful for
collaborators, partners, and interested readers to follow along
with. The accompanying threads in the
[What Comes Next](/scos-modernization-site/future/) section explain
each workstream in fuller detail.
