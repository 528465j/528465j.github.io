---
title: "Generative Adversarial Network for Image Synthesis"
valueLine: "A Wasserstein GAN that generates high-resolution synthetic faces to address data scarcity."
themes: ["technical-ai-ml"]
tools: ["python-ml-dl"]
roles: ["data-scientist", "ai-ml-specialist"]
employer: "aihi"
metrics: ["15% FID stability gain vs baseline", "40% faster training", "50,000+ images", "90% model efficiency in constrained settings"]
evidence: { type: "repo", url: "https://github.com/528465j/AIHI/blob/main/Image-Generation-with-WGAN-D1.ipynb", note: "Downloading the notebook is recommended; GitHub rendering of this file is limited." }
order: 4
---

Designed a Wasserstein GAN in PyTorch to generate high-resolution synthetic facial images from the CelebA dataset, addressing data scarcity for downstream tasks. Built a custom evaluation framework using Frechet Inception Distance to measure synthetic image quality, achieving a 15% stability improvement over a baseline GAN.

Optimised the workflow on NCI GADI HPC, cutting training time by 40% through parallel processing and careful GPU and CPU allocation, and managed datasets of more than 50,000 images across local and cloud storage. Wrote Bash automation for job scheduling and log analysis on Linux clusters to keep the work reproducible, and reached 90% model efficiency in constrained-resource settings using gradient-penalty techniques.
