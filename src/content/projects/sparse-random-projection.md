---
title: "Sparse Random Projection for Medical Image Analysis"
valueLine: "A feature-extraction pipeline that compresses high-dimensional medical imaging while keeping diagnostic signal."
themes: ["technical-ai-ml"]
tools: ["python-ml-dl"]
roles: ["data-scientist", "ai-ml-specialist"]
employer: "aihi"
metrics: ["65% dimensionality reduction", "35% faster than PCA", "10,000+ images standardised", "Scales to 3D with under 10% code change"]
evidence: { type: "repo", url: "https://github.com/528465j/AIHI/blob/main/Sparse-Random-Projection.ipynb" }
order: 5
---

Built a feature-extraction pipeline using Sparse Random Projection to compress three-dimensional medical imaging into interpretable two-dimensional slices, reducing dimensionality by 65% while keeping diagnostically important features. Engineered OpenCV preprocessing, including automated cropping and noise reduction, to standardise quality across more than 10,000 heterogeneous images.

Combined global features (pixel-intensity histograms), local features (texture gradients) and pattern-based features (pixel-difference matrices) to improve interpretability for clinician review. The pipeline scales to full 3D volumetric analysis with under 10% code change, and its sparse matrix operations made feature extraction 35% faster than a PCA equivalent.
