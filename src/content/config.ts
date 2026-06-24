import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    valueLine: z.string(),
    themes: z.array(z.enum(["analytics-bi", "technical-ai-ml"])),
    tools: z.array(z.enum([
      "microsoft-bi-fabric", "azure-genai-llm", "python-ml-dl", "sql-cloud-data-engineering"
    ])),
    roles: z.array(z.enum([
      "data-analyst", "business-analyst", "data-engineer", "data-scientist", "ai-ml-specialist"
    ])),
    metrics: z.array(z.string()).default([]),
    // Free-text tool tags that are not one of the four stack pages (e.g. "Tableau").
    // Rendered as same-styled badges; they do not affect stack-page membership.
    extraTools: z.array(z.string()).default([]),
    // Links a project/achievement to an experience timeline entry (its slug),
    // used to build the per-experience pages.
    employer: z
      .enum(["telstra-assistant-manager", "telstra-consultant", "aihi", "resolve", "prolearn"])
      .optional(),
    evidence: z.object({
      // "confidential" renders a "Confidential as per company policy" box instead
      // of a link or a sharing-link-pending state.
      type: z.enum(["repo", "link", "none", "confidential"]),
      url: z.string().optional(),
      note: z.string().optional()
    }),
    diagram: z.string().optional(),
    // Optional multi-mode slideshow that replaces the single `diagram` on the
    // detail page (used by the confidential agentic-AI project, which can only be
    // shown through self-authored workflow diagrams). Each mode has a label and an
    // ordered list of image paths under /public.
    gallery: z
      .array(
        z.object({
          label: z.string(),
          images: z.array(z.string()),
        })
      )
      .optional(),
    // Caption shown beneath a `gallery` carousel (defaults in Carousel.astro).
    // A single-mode gallery renders no toggle.
    galleryCaption: z.string().optional(),
    // Optional disclaimer rendered next to a `gallery` carousel (and its on-card
    // preview), e.g. "Screenshots are masked due to NDA" for the confidential
    // Telstra dashboard projects. Rendered only when present.
    galleryDisclaimer: z.string().optional(),
    // Opt-in: show an auto-rotating mini preview of the gallery images on the
    // project card itself (used by the masked Telstra dashboard projects). Kept
    // off by default so diagram-gallery projects (agentic AI, RAG) are unaffected.
    cardPreview: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(50),
    lenses: z.object({
      business: z.object({ lead: z.string(), highlights: z.array(z.string()) }),
      technical: z.object({ lead: z.string(), highlights: z.array(z.string()) })
    }).optional()
  })
});

export const collections = { projects };
