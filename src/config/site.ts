// Single source of truth for identity-level config.
// Per ARCHITECTURE.md section 2, the GitHub username is read from this one
// constant everywhere outside astro.config.mjs `site` and the profile data,
// so a later rename to a name-based handle is a one-line change here.
export const GITHUB_USERNAME = "528465j";
export const SITE_URL = `https://${GITHUB_USERNAME}.github.io`;
export const BASE_PATH = "/";

// The four stack pages (ARCHITECTURE.md section 12). `shipped` is the one-line
// "what I shipped with this". All claims are defensible from the candidate's
// actual work.
export const STACKS = [
  {
    id: "microsoft-bi-fabric",
    label: "Microsoft BI and Fabric",
    shipped:
      "Automated NPS and sales-performance reporting in Microsoft Fabric with DAX semantic models, a one-page pricing and promo lookup used in live customer conversations, and a Power BI dashboard for NSW Health.",
  },
  {
    id: "azure-genai-llm",
    label: "Azure and GenAI / LLM",
    shipped:
      "A nine-agent LangGraph document-generation workflow and a Retrieval-Augmented Azure OpenAI assistant, both run end to end with retrieval tuning, cost control and a truthfulness constraint.",
  },
  {
    id: "python-ml-dl",
    label: "Python, ML and Deep Learning",
    shipped:
      "PyTorch deep-learning models for medical imaging and image synthesis on NCI GADI HPC, a sparse-projection feature pipeline, and customer segmentation with K-means.",
  },
  {
    id: "sql-cloud-data-engineering",
    label: "SQL, Cloud Warehousing and Data Engineering",
    shipped:
      "A comparative evaluation of Snowflake, Azure Synapse and Amazon Redshift on a multi-year sales dataset, plus SQL-driven business insights with end-to-end extract, clean and transform work.",
  },
] as const;
