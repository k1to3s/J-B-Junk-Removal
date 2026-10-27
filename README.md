# J&B Junk Removal — Production Website

Professional, privacy-first, accessible, and high-converting website for **J&B Junk Removal**, serving Temecula, Murrieta, and Southwest Riverside County, California.

---

## 1. Tech Stack & Architecture

- **Framework:** Next.js (App Router)
- **UI Engine:** React & Tailwind CSS
- **Language:** TypeScript (Strict Mode)
- **Database:** PostgreSQL with Drizzle ORM
- **Icons:** Lucide React (tree-shakeable SVGs)
- **Fonts:** Next.js Optimized Plus Jakarta Sans
- **Hosting Target:** Netlify

---

## 2. Key Features

- **Zero-Dependency Before & After Comparison Slider:** Built with native HTML `<input type="range">`, supporting mouse, touch, and keyboard arrows (`Home`/`End`), full ARIA descriptions, and responsive aspect ratios.
- **Accessible & Secure Free Quote System:** Multi-step form with inline validation, honeypot anti-spam protection, rate limiting, optional photo attachments, and PostgreSQL storage.
- **Privacy-First Default Architecture:** Zero advertising trackers, zero Google Analytics, zero marketing pixels. Includes accessible Cookie Preference center honoring Global Privacy Control (GPC).
- **Privacy-Protected Google Maps Integration:** Click-to-load interactive map with static fallback and service boundary badges for Temecula, Murrieta, Winchester, Wildomar, Menifee, and Lake Elsinore.
- **Comprehensive Local SEO & Schema:** Full Schema.org `LocalBusiness` JSON-LD markup, OpenGraph cards, sitemap.xml, and robots.txt.
- **100% WCAG 2.2 AA Accessibility:** Tested color contrast ratios (> 4.5:1), visible focus rings, skip-to-content link, mobile drawer with Escape key support, and accessible error summaries.
- **California Legal Compliance:** Tailored Privacy Policy, Terms & Conditions, and Cookie Policy compliant with CalOPPA, CCPA/CPRA, and Riverside County non-hazardous hauling regulations.

---

## 3. Project Structure

```
├── public/
│   └── images/
│       ├── hero-hauling.jpg
│       ├── slider/
│       │   ├── garage-before.jpg
│       │   ├── garage-after.jpg
│       │   ├── backyard-before.jpg
│       │   └── backyard-after.jpg
│       └── services/
│           ├── appliance-removal.jpg
│           ├── commercial-cleanout.jpg
│           └── estate-cleanout.jpg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   ├── health/route.ts
│   │   │   ├── privacy-consent/route.ts
│   │   │   └── quote/route.ts
│   │   ├── about/page.tsx
│   │   ├── before-after/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── cookie-policy/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── get-a-quote/page.tsx
│   │   ├── how-it-works/page.tsx
│   │   ├── not-found.tsx
│   │   ├── pricing/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── robots.ts
│   │   ├── service-areas/page.tsx
│   │   ├── services/page.tsx
│   │   ├── sitemap.ts
│   │   ├── terms-and-conditions/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── CookieBanner.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── Footer.tsx
│   │   ├── GoogleMapsEmbed.tsx
│   │   ├── Header.tsx
│   │   ├── MobileStickyCta.tsx
│   │   ├── QuoteForm.tsx
│   │   └── SkeletonLoader.tsx
│   ├── db/
│   │   ├── index.ts
│   │   └── schema.ts
│   └── lib/
│       └── constants.ts
├── A11Y-REPORT.md
├── COMPETITOR-RESEARCH.md
├── DEPENDENCIES.md
├── LAUNCH-CHECKLIST.md
├── LEGAL-CHECKLIST.md
├── PERFORMANCE-REPORT.md
├── PRIVACY-AUDIT.md
├── SKILLS-APPLIED.md
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Local Development & Setup

### Prerequisites
- Node.js (v22 recommended)
- PostgreSQL instance running locally or via Docker

### Installation
```bash
npm install
```

### Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Ensure `DATABASE_URL` matches your local PostgreSQL connection string:
```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
```

### Database Push (Apply Schema)
```bash
npx drizzle-kit push
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 5. Production Build & Validation

Run strict typegen, typecheck, and production build:
```bash
npx next typegen
npm exec tsc -- --noEmit
npm run build
```

---

## 6. Pre-Launch Configuration

Before taking this website live for public advertising, review `LAUNCH-CHECKLIST.md` to:
1. Replace `[PLACEHOLDER]` phone number and email with live business lines.
2. Connect quote submissions to email or SMS alerts.
3. Configure your custom domain on Netlify; see `DEPLOY-NETLIFY.md`.
