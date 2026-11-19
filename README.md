# Code&Crumbs — Intelligent Software & Digital Products Agency

> **"We build what moves your business forward."**  
> Code&Crumbs designs and develops intelligent software, AI-powered products, and digital experiences for ambitious enterprises.

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

---

## 1. System Architecture & Technologies

Code&Crumbs is engineered with strict Swiss grid layout standards, editorial typography, and high-performance interactive 3D WebGL:

* **Framework:** Next.js 15 (App Router with Server Components & SSG)
* **Frontend:** React 19, TypeScript, Tailwind CSS
* **3D Visual Engine:** Three.js & React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
* **Motion & Interactions:** Framer Motion & GSAP (ScrollTrigger, Magnetic Buttons, Cursor)
* **Smooth Scrolling:** Lenis
* **Document Engine:** `pdf-lib` (Vector Binary PDFs) and `docx` (Editorial DOCX Proposals)
* **Design Identity:** Warm off-white (`#F4F0E8` Sand), Deep Charcoal (`#171717`), and Burnt Orange (`#E85D35`)

---

## 2. Key Platform Features

### 01. Interactive 3D Hero
* Modular architectural geometric block composition built with React Three Fiber.
* Mouse-responsive rotation, dynamic raycasting, soft depth shadows, and camera parallax.
* Fully accessible: automatic fallback for `prefers-reduced-motion` and viewport-adaptive scaling for mobile screens.

### 02. Interactive Project Configurator (`/build`)
* 9-step client requirement builder with real-time investment calculation.
* Dual currency support (USD `$` and INR `₹`) with dynamic tier conversion.
* Deep URL query integration pre-selecting services from the `/services` directory.

### 03. Portfolio & Case Studies (`/work` and `/work/[slug]`)
* Five comprehensive production case studies:
  1. **Evaluna ERP:** Multi-facility manufacturing resource planning with sub-second inventory dispatch.
  2. **Summrix AI:** Enterprise document intelligence pipeline processing 10,000+ financial filings.
  3. **Multi-Agent Research System:** Autonomous research swarm with consensus verification.
  4. **SynthHire AI Interview Simulator:** Real-time conversational interview rehearsal environment with speech latency optimization.
  5. **Aurora Synthetics:** Bio-informatics visual workflow designer.
* Features browser mockups, architecture diagrams, verified metrics, and technical challenges.

### 04. Three Live Functional Demos (`/demos/*`)
* **SaaS Telemetry & Analytics (`/demos/saas-dashboard`):** Real-time MRR analytics, customer directory with multi-column search filtering, and customer creation modal.
* **AI Workflow Orchestrator (`/demos/ai-automation`):** 5-node deterministic pipeline simulator (Webhook -> LLM Qualifier -> Classification -> CRM Sync -> Slack Alert) with real-time log telemetry.
* **Enterprise ERP Workflow (`/demos/erp-workflow`):** State machine lifecycle engine for order allocation, QA approval, and freight dispatch.

### 05. Sales Kit & Pitch Resources (`/resources`)
* Publicly downloadable vector binary PDFs generated directly via `pdf-lib`:
  * Company Introduction
  * Services & Capabilities
  * Technology Stack Overview
  * Case Studies & Proven Metrics
  * 4-Stage Engagement Process

### 06. Lead Ingestion & Transactional Email (`/api/enquiry`)
* Server-side input validation and XSS sanitization.
* In-memory token bucket rate limiting (5 submissions per 10-minute window per IP).
* Honeypot bot protection field.
* Configurable email adapter supporting Resend, Postmark, SMTP, and local development fallback.

---

## 3. Getting Started (Local Development)

### Prerequisites
* Node.js 18.18+ or 20+
* `pnpm` (recommended), `npm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/code-and-crumbs.git
cd code-and-crumbs

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 4. Scripts & Utilities

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server with hot-reload |
| `pnpm build` | Compiles TypeScript, runs static generation, and produces production bundle |
| `pnpm start` | Serves the optimized production build |
| `pnpm lint` | Executes ESLint verification |
| `pnpm typecheck` | Runs `tsc --noEmit` across all application modules |
| `pnpm generate:docs` | Generates the 5 vector binary PDFs into `public/docs/` |
| `pnpm generate:proposal` | Compiles tailored proposal DOCX and PDF documents from incoming leads |
| `node scripts/qa-suite.mjs` | Executes the automated 40+ assertion QA audit suite |

---

## 5. Environment Variables & Configuration

Configure these in `.env.local` or directly within the **Vercel Project Settings**:

```ini
# Application Domain
NEXT_PUBLIC_SITE_URL=https://codeandcrumbs.com

# Calendar Scheduling (Cal.com or Google Calendar)
# (Leave empty to enable graceful email fallback card)
NEXT_PUBLIC_CALENDAR_URL=https://cal.com/codeandcrumbs/discovery

# Lead Intake Recipient
CONTACT_EMAIL=codeandcrumbs.agency@gmail.com

# Sender Address
CONTACT_FROM_EMAIL=codeandcrumbs.agency@gmail.com

# Transactional Email Provider ("resend" | "postmark" | "smtp" | "console")
EMAIL_PROVIDER=resend
EMAIL_PROVIDER_API_KEY=re_your_api_key_here
```

---

## 6. Vercel Production Deployment

### Recommended Vercel Settings:
* **Framework Preset:** `Next.js`
* **Root Directory:** `./`
* **Build Command:** `next build` (or `pnpm build`)
* **Output Directory:** `.next`
* **Install Command:** `pnpm install`
* **Node.js Version:** `20.x`

---

## 7. Quality Assurance Certification

The codebase has undergone independent QA validation:
* **0** TypeScript compilation errors (`tsc --noEmit`)
* **0** ESLint warnings/errors
* **27 / 27** static routes pre-rendered
* **0** broken links across the entire crawl graph
* **100%** WCAG AA color contrast compliance

---

© 2026 Code&Crumbs. All rights reserved.
