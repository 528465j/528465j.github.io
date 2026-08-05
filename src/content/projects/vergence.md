---
title: "Vergence: Automated Data Quality and Reconciliation Pipeline"
valueLine: "A controls-first pipeline that measures where two independent sources disagree, with one language-model step held behind a human approval gate."
themes: ["technical-ai-ml"]
tools: ["sql-cloud-data-engineering", "azure-genai-llm"]
extraTools: ["Pydantic", "pytest"]
roles: ["data-engineer", "ai-ml-specialist", "data-scientist", "data-analyst"]
metrics: ["7 controls registered, 7 run", "9 exceptions traced to 5 planted defects", "19 columns resolved from the registry on the second run, zero model calls", "Byte-identical exception register across three mapping paths", "16 tests, all passing"]
evidence: { type: "repo", url: "https://github.com/528465j/vergence", note: "Public repository, MIT licence. Every figure is captured output held in docs/, produced against synthetic data; no real data has passed through the system." }
gallery:
  - label: "Pipeline architecture"
    images:
      - "/diagrams/vergence/vergence-01.png"
      - "/diagrams/vergence/vergence-02.png"
      - "/diagrams/vergence/vergence-03.png"
      - "/diagrams/vergence/vergence-04.png"
      - "/diagrams/vergence/vergence-05.png"
      - "/diagrams/vergence/vergence-06.png"
      - "/diagrams/vergence/vergence-07.png"
      - "/diagrams/vergence/vergence-08.png"
      - "/diagrams/vergence/vergence-09.png"
galleryCaption: "Pipeline architecture and control flow"
featured: true
order: 0
---

Designed, built and published Vergence, a controls-first pipeline that prepares financial ledger data for analysis by measuring where two independent sources disagree. A General Ledger and a Trial Balance arrive from providers whose formats and column names differ; the pipeline resolves them to a canonical schema, validates, deduplicates, reconciles the two against each other and emits an exception register. The name is the design brief. Vergence is how far two lines are from meeting, so a difference between sources is a quantity to be sized and evidenced rather than a fault to be quietly closed.

One hard line separates what a model may decide from what it may not. Schema resolution is the only stage permitted to call a language model, and it reaches that tier only for the columns two deterministic tiers could not settle: an exact match against a registry of approved mappings, then synonym and fuzzy matching, then a proposal. Proposals are constrained to the canonical field enumeration by their type rather than by a prompt, so a field that does not exist cannot be constructed at all, and anything below the confidence gate waits for a person. The resolver defaults to no model attached, in which case the pipeline still reaches a correct result and simply routes more columns to review.

Seven controls then run over the population exactly as delivered. Money is held as Decimal rather than floating point, so binary rounding cannot manufacture a break that looks genuine. Validation quarantines a failing row with its rule and raw values intact instead of coercing it, and nothing is deleted: removing a duplicate would silently change what three other controls report. On the published run the seven controls raised nine exceptions against five deliberately planted defects, and the same two files pushed through three different mapping paths produced a byte-identical register. Mapping decides how columns are read, not what the controls find. It is a scoped prototype against synthetic data, with two designed stages left unbuilt, and the repository states those limits before it states anything else.