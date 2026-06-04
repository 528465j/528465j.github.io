---
title: "Cloud Data Platform Evaluation"
valueLine: "A comparative evaluation of Snowflake, Azure Synapse and Amazon Redshift on a multi-year sales dataset."
themes: ["analytics-bi", "technical-ai-ml"]
tools: ["sql-cloud-data-engineering"]
roles: ["data-engineer", "data-scientist", "business-analyst", "data-analyst"]
metrics: ["8-dimension scoring matrix", "4 years of sales data", "98% faster integration on Snowflake vs Redshift", "40% lower query latency on Synapse serverless", "3x faster model training via Snowpark"]
evidence: { type: "link", url: "https://drive.google.com/file/d/1QJpQT0IysxDjlVBvz0Uw1huy4T1wxCP-/view?usp=sharing", note: "Separate sharing link, no repository." }
featured: true
order: 15
lenses:
  business:
    lead: "Compared Snowflake, Azure Synapse and Amazon Redshift across eight business dimensions to guide a platform decision."
    highlights:
      - "Scored the three platforms across cloud flexibility, scalability, integration efficiency, visualisation compatibility, security, compliance, setup complexity and query performance."
      - "Validated against a four-year sales dataset with end-to-end demos covering ingestion, analytics workload benchmarking and cost-performance."
      - "Delivered a scoring matrix that pointed to Azure Synapse for hybrid-cloud environments and Snowflake for pure scalability, so stakeholders could match platform choice to priorities."
  technical:
    lead: "Benchmarked Snowflake, Azure Synapse and Amazon Redshift for AI and ML workloads and large-scale analytics."
    highlights:
      - "Tested cross-platform ingestion (CSV, JSON, APIs), finding integration on Snowflake's zero-management architecture about 98% faster than Redshift."
      - "Processed 10TB on Azure Synapse serverless pools and measured a 40% query-latency reduction against traditional warehousing."
      - "Assessed ML readiness with Python and TensorFlow pipelines, with Snowflake Snowpark giving roughly 3x faster model training on structured data."
---

This evaluation exists in two framings for two audiences. Use the toggle to switch between the business decision-support view and the technical and ML-readiness view. Both share the same study: a comparison of Snowflake, Azure Synapse and Amazon Redshift run against a four-year sales dataset, covering ingestion, query performance, cost and visualisation integration. The recommendation favoured Snowflake for real-time and scalability cases and Azure Synapse for hybrid-cloud and enterprise needs.
