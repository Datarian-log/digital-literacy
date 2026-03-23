# 📚 Digital Literacy Self-Assessment

A self-assessment tool for university students to evaluate their digital literacy skills across four domains.
Results help educators identify individual strengths and gaps, enabling tailored digital literacy education.

🔗 **Live site:** https://datarian-log.github.io/digital-literacy/

## ✨ Features

- 🔍 **4 Assessment Domains** — Information Search & Evaluation, AI Literacy, Data Literacy, Academic Information Use
- 🎓 **Student Level Adaptation** — Separate question variants for undergraduate and graduate students
- ✅ **Domain Selection** — Multi-select domains on the landing page to customize the assessment
- 📊 **Analytical Results** — Strengths analysis, personalized learning path with recommendations
- 📋 **Interest Survey** — Collect student interest in workshops and programs
- 📄 **Export** — PDF download and print support
- 📡 **Google Sheets Integration** — Auto-submit assessment results and interest survey responses to Google Sheets

## 🛠 Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4

## 🚀 Getting Started

```bash
npm install
cp .env.example .env   # Add your Google Apps Script URL
npm run dev
```

## 📝 Google Sheets Setup

1. Create a new Google Spreadsheet
2. Open **Extensions > Apps Script** and paste the contents of `google-apps-script.js`
3. Deploy as a Web App (Execute as: Me, Access: Anyone)
4. Copy the deployment URL into your `.env` file as `VITE_GOOGLE_SHEETS_URL`

## 🌐 Deployment

Deployed automatically to GitHub Pages via GitHub Actions on push to `main`.
