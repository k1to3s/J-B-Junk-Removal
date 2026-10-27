# RUNTIME & DEVELOPMENT DEPENDENCY AUDIT

**Project:** J&B Junk Removal Production Website  
**Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, PostgreSQL via Drizzle ORM  

---

## 1. Runtime Dependencies

| Package | Version | Justification & Purpose |
|---|---|---|
| `next` | `16.2.6` | Production fullstack framework (Server Components, API routes, Image/Font optimization, Server-Side Rendering, edge caching). |
| `react` | `19.2.6` | Core UI component rendering library. |
| `react-dom` | `19.2.6` | DOM bindings for React. |
| `drizzle-orm` | `0.45.2` | Lightweight, type-safe SQL ORM for storing quote requests, contact inquiries, and privacy consent audit logs in PostgreSQL. |
| `pg` | `8.20.0` | High-performance PostgreSQL database client. |
| `lucide-react` | `^1.16.0` | Accessible, tree-shakeable SVG icons (Phone, MapPin, Truck, ShieldCheck, etc.). Zero bundle overhead for unused icons. |
| `dotenv` | `17.3.1` | Loads local environment variables for database credentials. |

---

## 2. Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `typescript` | `5.9.3` | Strict mode typechecking across all server and client components. |
| `tailwindcss` | `4.1.17` | Utility-first CSS engine for accessible tokens and responsive layouts. |
| `@tailwindcss/postcss` | `4.1.17` | PostCSS integration for Tailwind CSS v4. |
| `postcss` | `8.5.8` | CSS processor. |
| `drizzle-kit` | `0.31.10` | Database schema migrations and prototyping tooling. |
| `eslint`, `eslint-config-next` | `9.x / 16.x` | Code quality and Next.js best-practice linting. |

---

## 3. Deliberately Excluded / Avoided Dependencies

1. **No Slider Libraries (e.g. `react-compare-image`, `swiper`):**
   - **Reason:** Built manually using native HTML `<input type="range">` with CSS clip-path. This guarantees 100% native keyboard accessibility (Arrow keys, Home, End), zero layout shift, and eliminates 45KB+ of JS bundle weight.
2. **No Animation Libraries (e.g. `framer-motion`, `gsap`):**
   - **Reason:** All micro-interactions, skeleton shimmers, and drawer transitions are powered by pure CSS transitions and `@media (prefers-reduced-motion: reduce)` media queries.
3. **No Heavy Google Maps SDK (`@react-google-maps/api`):**
   - **Reason:** Implemented a privacy-first, click-to-load embed with static visual fallback. This avoids downloading 250KB+ of tracking and rendering scripts on page load.
4. **No Marketing / Tag Management Packages (e.g. `react-gtm-module`, `analytics`):**
   - **Reason:** Complies with privacy-first default mandate (zero marketing pixels / zero third-party trackers).
5. **No Bulky UI Frameworks (e.g. `material-ui`, `chakra-ui`):**
   - **Reason:** All components are bespoke, accessible Tailwind components designed specifically for J&B Junk Removal's visual identity.
