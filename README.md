# Gitesh Sorout | Developer Portfolio

A responsive personal portfolio showcasing my projects, skills, education, certifications and contact details.

**Live site:** https://gitesh-portfolio.netlify.app

## Features

- Light and dark theme toggle (remembers your choice)
- Animated hero section with a rotating terminal card
- Project cards with screenshots, tech stack, live demo and source links
- Certifications with links to the original certificates
- Working contact form that delivers messages straight to my inbox
- Downloadable resume
- Fully responsive, with reduced-motion support

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Contact form:** Web3Forms
- **Hosting:** Netlify

## Featured Projects

1. **AI Expense Tracker:** full-stack app with AI categorization, OCR and savings insights (React, Spring Boot, MongoDB, Groq API)
2. **Calories Burned Prediction App:** machine learning app built with Linear Regression and Streamlit
3. **Employee Payroll Management System:** full-stack payroll app (Node.js, Express, MongoDB)

## Project Structure

This repository is a pnpm workspace. The portfolio site lives in:

```
artifacts/developer-portfolio/
├── public/            # static files (resume PDF, project screenshots, favicon)
├── src/
│   ├── App.tsx        # page layout and sections
│   ├── data/portfolio.ts   # all content: projects, skills, certifications, links
│   └── components/    # UI components
└── vite.config.ts
```

All the text and links on the site come from `src/data/portfolio.ts`, so most edits happen in that one file.

## Run Locally

Requires Node.js 20+ and [pnpm](https://pnpm.io/).

```bash
# install dependencies (from the repository root)
pnpm install

# create the environment file for the contact form
echo VITE_WEB3FORMS_ACCESS_KEY=your-key-here > artifacts/developer-portfolio/.env.local

# start the dev server
pnpm --filter @workspace/developer-portfolio run dev
```

Get a free access key at [web3forms.com](https://web3forms.com). Without it, the contact form shows a "not configured" message.

## Build for Production

```bash
pnpm --filter @workspace/developer-portfolio run build
```

The output is created in `artifacts/developer-portfolio/dist/public` and can be uploaded to Netlify or any static host.

## Contact

- Email: giteshsorout@gmail.com
- GitHub: [@gitesh2005](https://github.com/gitesh2005)
- LinkedIn: [Gitesh Sorout](https://www.linkedin.com/in/gitesh-sorout-146697289/)
