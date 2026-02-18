# MarkitAI Landing Page

A high-converting SaaS landing page for **MarkitAI** — your AI-powered virtual marketing team for SMEs.

## Tech stack

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, Framer Motion
- **Backend:** Next.js API routes, Supabase (waitlist), Resend (confirmation emails)
- **Deploy:** Vercel

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment variables**  
   Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (create a project at [supabase.com](https://supabase.com), then run `supabase-waitlist.sql` in the SQL editor)
   - `RESEND_API_KEY` and optionally `RESEND_FROM_EMAIL` (get key at [resend.com](https://resend.com))

3. **Logo**  
   Place your MarkitAI logo at `public/logo.png` (recommended size ~280×80px). If missing, the header shows a text “MarkitAI” fallback.

4. **Run locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

**Note:** If `npm run build` fails on Windows with `ERR_UNSUPPORTED_ESM_URL_SCHEME` (protocol 'c:'), this is a known Node.js 24 + Windows path issue. Use Node 20 LTS, or build/deploy on Vercel (Linux) where the build runs without this issue.

## Analytics

- **Google Analytics:** Replace `G-XXXXXXXXXX` in `app/layout.tsx` with your GA4 measurement ID.
- **PostHog:** Add the PostHog snippet in `app/layout.tsx` if you use it.

## Project structure

- `app/` — Next.js App Router (layout, page, API, globals)
- `components/` — Header, Hero, Problem, HowItWorks, Differentiators, DashboardPreview, Waitlist, FAQ, Footer
- `public/` — Static assets (e.g. `logo.png`)

The waitlist form posts to `/api/waitlist`, which stores signups in Supabase and sends a confirmation email via Resend when configured.
