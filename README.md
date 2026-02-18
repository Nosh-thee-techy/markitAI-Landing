# MarkitAI Landing Page

A high-converting, production-ready SaaS landing page for **MarkitAI** — your AI-powered virtual marketing team for small and medium-sized enterprises (SMEs).

---

## What is MarkitAI?

**MarkitAI** is an AI-powered virtual marketing team built for SMEs. It is **not** a scheduling tool: it actively runs campaigns, posts on your behalf on approved platforms, and delivers weekly AI-driven business intelligence so you get the impact of a marketing team without the cost.

### The problem we solve

- **Marketing overwhelm** — SMEs wear too many hats; running campaigns, posting, and analyzing data takes time you don’t have.
- **Expensive agencies** — Hiring an agency or full-time marketer isn’t realistic for most small teams.
- **Data that doesn’t drive action** — Product data, sales numbers, and engagement live in spreadsheets and platforms, but nobody turns them into campaigns.

### What MarkitAI does

1. **Connects to your product data** — Manual input, CSV upload, or integrations (e.g. Shopify, HubSpot, Jumia, Kilimall).
2. **Analyzes performance** — Uses your sales and engagement data to inform what to run next.
3. **Creates and runs campaigns** — AI generates campaigns and **actively posts** on your approved channels (with your permission).
4. **Tracks real impact** — Engagement → interaction → sales in one place, with conversion metrics that tie to revenue.
5. **Weekly intelligent updates** — Voice and dashboard summaries so you stay on top of performance without digging through spreadsheets.

### Who it’s for

- E-commerce and retail SMEs  
- Service businesses  
- SaaS and agencies  
- Any small team that wants professional marketing without a full-time team or agency budget  

---

## Brand & color palette

This project uses a consistent color system. You can use these in Tailwind as `brand-*` and in CSS as `var(--brand-*)`.

| Token | Hex | Usage |
|-------|-----|--------|
| **Purple** | `#8B5CF6` | Primary accent, AI emphasis, CTAs |
| **Purple dark** | `#7C3AED` | Gradients, hover states |
| **Cyan** | `#34D3FC` | Highlights, gradient start |
| **Blue** | `#2563EB` | Trust, links, gradient mid |
| **Dark** | `#1A1A2E` | Body text, headings |
| **Dark muted** | `#2D2D44` | Secondary text |
| **Black** | `#0A0A0A` | Strong contrast, footers, dark UI |
| **Gold** | `#B8860B` | Brown-golden accent, premium feel |
| **Gold light** | `#D4A84B` | Lighter gold for backgrounds/hover |
| **Gold dark** | `#8B6914` | Darker gold for borders/depth |

**Tailwind examples:** `text-brand-gold`, `bg-brand-black`, `border-brand-gold-dark`  
**CSS variables:** `var(--brand-black)`, `var(--brand-gold)`

---

## Tech stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 (App Router) |
| **UI** | React 18, Tailwind CSS, Framer Motion |
| **Backend** | Next.js API Routes (Node.js) |
| **Database / Auth** | Supabase (optional: Firebase) |
| **Email** | Resend (or SendGrid) for waitlist confirmation |
| **Deployment** | Vercel |
| **Analytics** | Google Analytics; PostHog optional |

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (for server-side insert) |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Sender email for confirmation (e.g. `notifications@yourdomain.com`) |

**Supabase setup:** Create a project at [supabase.com](https://supabase.com), then run the SQL in `supabase-waitlist.sql` in the SQL editor to create the `waitlist` table.

### 3. Logo

- **Option A:** Place your MarkitAI logo at `public/logo.png` (recommended ~280×80px). The header will use it if you switch the Header component to prefer the image.
- **Option B:** Use the built-in SVG logo (gradient M + “Markit**AI**” wordmark) — no file needed; it’s the default in the header.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm start
```

**Windows note:** If `npm run build` fails with `ERR_UNSUPPORTED_ESM_URL_SCHEME` (protocol `c:`), use Node 20 LTS or build on Vercel (Linux); the repo is configured for that.

---

## Project structure

```
├── app/
│   ├── api/waitlist/     # POST handler: Supabase + Resend
│   ├── layout.tsx        # Root layout, metadata, fonts, analytics
│   ├── page.tsx          # Home page (all sections)
│   ├── globals.css       # Tailwind + CSS variables
│   ├── privacy/page.tsx  # Privacy policy placeholder
│   └── terms/page.tsx    # Terms of use placeholder
├── components/
│   ├── Logo.tsx          # SVG MarkitAI logo
│   ├── Header.tsx         # Nav + logo
│   ├── Footer.tsx        # Contact, links, social, legal
│   ├── Hero.tsx          # Headline, subheadline, CTAs, hero visual
│   ├── Problem.tsx       # “Sound familiar?” pain points
│   ├── Features.tsx      # 4 feature cards (What we do)
│   ├── HowItWorks.tsx    # 4-step process
│   ├── Differentiators.tsx # Why MarkitAI is different
│   ├── FeaturesBenefits.tsx # Benefits grid
│   ├── DashboardPreview.tsx # Line graph, KPIs, funnel
│   ├── Testimonials.tsx  # Carousel + platform logos
│   ├── Waitlist.tsx      # Reserve My Spot form
│   └── FAQ.tsx           # Accordion FAQ
├── public/               # Static assets (e.g. logo.png)
├── .env.example          # Env template
├── supabase-waitlist.sql # Waitlist table + RLS
├── tailwind.config.cjs   # Theme + brand colors
├── postcss.config.cjs
├── next.config.mjs
└── package.json
```

---

## Landing page sections (overview)

| Section | Purpose |
|--------|--------|
| **Hero** | “Your Virtual Marketing Team Powered by AI”; subheadline; Join Waitlist + See Demo; hero visual + subtle AI animation |
| **Problem** | Marketing overwhelm, expensive agencies, data not actionable |
| **Features** | Product Data Integration, Campaign Creation & Posting, Performance Tracking, Weekly Intelligent Updates |
| **How it works** | Connect data → We generate & post → Track results & insights → Optimize (AI recommendations) |
| **Differentiators** | Actively posts, weekly updates, real conversion tracking, business intelligence |
| **Features & benefits** | Real sales data, multi-platform, AI insights, custom plans, timeline/planner |
| **Dashboard preview** | Line graph, KPI cards (Interactions, Sales, ROI), funnel |
| **Testimonials** | Carousel + supported platforms (Shopify, HubSpot, Jumia, Kilimall, etc.) |
| **Waitlist** | Name, Email, Business type, Budget (optional); CTA “Reserve My Spot”; questions link |
| **FAQ** | How different from scheduler, does it post, security, platforms, launch |
| **Footer** | Contact, product links, Privacy/Terms, social, tagline |

---

## Waitlist & API

- **Form:** Name, Email, Business type, Monthly marketing budget (optional).  
- **Submit:** POST to `/api/waitlist`.  
- **Backend:** Writes to Supabase `waitlist` table; sends confirmation email via Resend when keys are set.  
- **Validation:** Name and email required; duplicate email returns a friendly error.

---

## Analytics

- **Google Analytics:** In `app/layout.tsx`, replace `G-XXXXXXXXXX` with your GA4 measurement ID.  
- **PostHog:** Add the PostHog script in `app/layout.tsx` if you use it.

---

## Deployment (Vercel)

1. Push the repo to GitHub (or connect another Git provider).  
2. In [Vercel](https://vercel.com), import the project.  
3. Add the same environment variables as in `.env.local`.  
4. Deploy; Vercel will run `npm run build` and serve the app.

---

## License & ownership

This codebase is for the MarkitAI product and landing experience. Add your own license and terms as needed for your company.
