---
title: "Agentic AI Workflow for Scalable Document Generation"
valueLine: "A nine-agent LangGraph orchestration that generates tailored application documents with a hard truthfulness constraint."
themes: ["technical-ai-ml"]
tools: ["azure-genai-llm"]
roles: ["ai-ml-specialist", "data-engineer", "data-scientist"]
metrics: ["50% lower estimated per-row cost", "Batch time cut from 37 hours to under 8 hours for 200 applications", "9 agents across 12 modules"]
evidence: { type: "none", note: "Built in a confidential environment. Presented through explanation and self-authored workflow diagrams." }
gallery:
  - label: "Workflow in Action"
    images:
      - "/diagrams/agentic-workflow/ERD_diagram.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-02.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-03.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-04.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-05.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-06.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-07.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-08.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-09.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-10.png"
      - "/diagrams/agentic-workflow/LangGraph_State_Evolution-11.png"
      - "/diagrams/agentic-workflow/The_Idempotent_Job_Blueprint-7.png"
      - "/diagrams/agentic-workflow/The_9-Agent_Assembly_Line-9.png"
  - label: "Workflow Adaptation"
    images:
      - "/diagrams/agentic-workflow/audit_cycle-02.png"
      - "/diagrams/agentic-workflow/audit_cycle-04.png"
      - "/diagrams/agentic-workflow/audit_cycle-05.png"
      - "/diagrams/agentic-workflow/audit_cycle-06.png"
      - "/diagrams/agentic-workflow/audit_cycle-07.png"
      - "/diagrams/agentic-workflow/audit_cycle-08.png"
      - "/diagrams/agentic-workflow/audit_cycle-09.png"
      - "/diagrams/agentic-workflow/audit_cycle-11.png"
      - "/diagrams/agentic-workflow/audit_cycle-12.png"
      - "/diagrams/agentic-workflow/audit_cycle-13.png"
featured: true
order: 1
---

Designed a nine-agent LangGraph state machine with specialised nodes for job-description acquisition, structured JD analysis (skills decomposition, keyword extraction and seniority signals), company research with web search, comparative fit assessment, document generation, claims-map validation, a QA audit with iterative revision, LaTeX rendering, and versioned Google Drive storage. Agents exchange structured JSON contracts: the JD analysis agent produces a schema that downstream generators consume as a tailoring checklist, which lifted first-pass audit scores and cut wasted revision cycles.

Engineered production-grade reliability: thread-safe parallel processing with per-thread API clients and SSL serialisation, exponential backoff on transient errors, idempotent processing with versioned outputs, and observability through per-row cost tracking, processing-time logging and email failure alerts. Claims-map validation acts as a hard truthfulness constraint, cross-referencing every generated claim against verified source data and stripping anything invented.

Tuned for cost and throughput with tiered model assignment, company-research caching, early exit on audit-score plateaus and ThreadPoolExecutor parallelism, reducing estimated per-row cost by about 50% and batch time from 37 hours to under 8 hours for 200 applications. Integrated Google Workspace APIs (Sheets, Drive, Docs) for input, versioned output and traceability.
