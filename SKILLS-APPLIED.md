# SKILLS APPLIED — J&B JUNK REMOVAL PRODUCTION ARCHITECTURE

This document summarizes the specific rules, art direction principles, and engineering patterns applied to J&B Junk Removal from the three mandatory agent skill frameworks:

---

## 1. Taste Skill (`Leonxlnx/taste-skill`)

### Applied Art Direction & Anti-AI Slop Rules
1. **Intentional Typography & Contrast Hierarchy:**
   - Selected **Plus Jakarta Sans** for confident, grounded geometric character.
   - Avoided generic centered-everything template layouts and cartoonish truck clip-art.
   - Used deep navy (`#10283F`), forest green (`#176B4D`), and sharp warm off-white (`#F8FAF8`) with energetic lime accents (`#A2D634`) for high-contrast focal points.
2. **Restrained Visual Elements:**
   - No excessive blur or gratuitous glassmorphism.
   - Clean, tangible cards with solid borders (`border-slate-200`) and subtle shadows.
   - Avoided decorative gradients or placeholder fluff.
3. **Real Photography & Perspective Match:**
   - Handled the Before & After showcase with exact matching perspective, natural daylight, and realistic Southern California residential environments.
4. **Motion Discipline:**
   - Built with `@media (prefers-reduced-motion: reduce)` overrides for all animations and shimmer loaders.
   - Avoided heavy parallax or scroll-hijacking libraries.

---

## 2. Vercel Agent Skills (`vercel-labs/agent-skills`)

### Applied Next.js & React Engineering Rules
1. **Server vs. Client Component Boundaries:**
   - Static informational pages (`/`, `/services`, `/how-it-works`, `/pricing`, `/about`, `/faq`, `/terms-and-conditions`, `/privacy-policy`) leverage Next.js App Router Server Components for minimal client JS bundle and instant SSR.
   - Interactive components (`BeforeAfterSlider`, `Header` mobile drawer, `QuoteForm`, `CookieBanner`, `GoogleMapsEmbed`, `FaqAccordion`) are cleanly isolated client components.
2. **Next.js Image & Font Optimization:**
   - Uses `next/image` with explicit responsive `sizes`, WebP/AVIF auto-negotiation, and priority LCP flags for the hero section.
   - Uses `next/font/google` (`Plus_Jakarta_Sans`) with `display: swap` and CSS variable injection for zero layout shifts (CLS < 0.01).
3. **Secure API Route & Server Actions:**
   - Secure POST endpoints for `/api/quote`, `/api/contact`, and `/api/privacy-consent` with input sanitization, honeypot spam protection, and PostgreSQL storage via Drizzle ORM.
4. **Performance & Metadata:**
   - Structured metadata, JSON-LD `LocalBusiness` schema, OpenGraph tags, sitemap, and robots.txt.

---

## 3. UI/UX Pro Max (`nextlevelbuilder/ui-ux-pro-max-skill`)

### Applied Design System & Usability Standards
1. **Accessible Color Contrast (WCAG 2.2 AA):**
   - High-contrast text combinations: `#10283F` on `#F8FAF8` (> 12:1), `#176B4D` on `#EEF2EF` (> 4.8:1), white text on `#176B4D` (> 5.2:1).
   - Clear focus rings (`outline: 2px solid var(--color-forest)`) with visible offset.
2. **Touch Targets:**
   - Primary mobile buttons and interactive sliders meet or exceed the 44 × 44 CSS px touch target threshold.
3. **Form Ergonomics:**
   - Logical tab order, visible labels, proper autocomplete tags (`autocomplete="tel"`, `autocomplete="postal-code"`), numeric mobile keypads, inline validation, and focusable error summaries.
4. **Zero-Dependency Signature Slider:**
   - Native `<input type="range">` control ensuring full keyboard arrow, Home, and End key support, accessible screen reader descriptions, and clip-path visual overlays.
