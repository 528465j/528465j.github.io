---
title: "AI-Driven Melanoma Detection"
valueLine: "A PyTorch deep-learning model for classifying dermoscopic melanoma images, built for early-detection use in healthcare."
themes: ["technical-ai-ml"]
tools: ["python-ml-dl"]
roles: ["data-scientist", "ai-ml-specialist"]
employer: "aihi"
metrics: ["+12% accuracy on imbalanced data", "93% precision", "25% faster convergence", "15,000+ images, 88% GPU utilisation"]
evidence: { type: "repo", url: "https://github.com/528465j/AIHI/blob/main/Dermoscopic-Image-Classification-of-Melanoma.ipynb" }
order: 3
---

Built and evaluated a PyTorch model to classify dermoscopic images of melanoma at the Australian Institute of Health Innovation. Engineered domain-specific transformations such as rotational invariance and noise reduction to improve generalisation, lifting accuracy by 12% on imbalanced data. Used StepLR dynamic learning-rate scheduling to cut convergence time by 25% while holding precision at 93%.

Ran rigorous evaluation across more than 50 epochs, reporting AUC-ROC and F1 for transparency against clinical-grade expectations, and processed over 15,000 high-resolution images on NCI GADI HPC at 88% GPU utilisation. Added Grad-CAM visualisations so clinicians could inspect the model's decision regions.
