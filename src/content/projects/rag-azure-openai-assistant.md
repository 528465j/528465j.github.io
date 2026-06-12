---
title: "Retrieval-Augmented Azure OpenAI Assistant"
valueLine: "An internal knowledge assistant that answers staff questions on products, policies and procedures in natural language."
themes: ["technical-ai-ml"]
tools: ["azure-genai-llm"]
roles: ["ai-ml-specialist", "data-scientist", "data-engineer"]
metrics: ["Replaced manual portal searches with natural-language access", "Reduced follow-up questions from frontline staff"]
evidence: { type: "confidential", note: "Built in a confidential environment. Presented through explanation and self-authored architecture diagrams." }
gallery:
  - label: "AskTelstra RAG architecture"
    images:
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-1.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-2.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-3.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-4.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-5.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-6.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-7.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-8.png"
      - "/diagrams/rag-architecture/AskTelstra_RAG_Architecture-9.png"
galleryCaption: "Self-authored architecture diagrams"
featured: true
order: 2
---

Designed an end-to-end Retrieval-Augmented Generation pipeline on Azure OpenAI that lets staff query products, policies and procedures in plain language instead of searching portals by hand. Consolidated and cleaned semi-structured and unstructured content from several internal sources, standardising formats, removing duplicates and aligning metadata into a single reliable source of truth.

Implemented document chunking with tuned overlap and generated vector embeddings, stored in Azure Blob Storage for low-latency, context-aware retrieval, then connected the vector store to Azure OpenAI behind a chat interface. Worked with operations and support stakeholders to iterate prompts, chunking strategy and retrieval settings, improving answer relevance and reducing follow-up questions. Instrumented usage analytics and feedback logging to track adoption and answer quality, which surfaced common information gaps and guided content curation.
