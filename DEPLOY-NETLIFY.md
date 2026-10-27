# Deploying J&B Junk Removal on Netlify

1. In Netlify, open your site under **Project configuration > Build & deploy** and connect this GitHub repository **k1to3s/J-B-Junk-Removal** on branch **main**.
2. Confirm the project base directory is the repository root, build command is **npm run build**, and publish directory is **.next**. These are also set in `netlify.toml`.
3. Trigger **Deploy site** or **Retry deploy** after this commit is synced. This application is a Next.js server-rendered project; do NOT use a static `dist` folder, static ZIP drag-and-drop, or a universal `/* /index.html 200` redirect.
4. Before accepting real online requests, create a PostgreSQL database, set the secret `DATABASE_URL` in Netlify environment variables, apply the Drizzle schema from `src/db/schema.ts` (see `drizzle.config.json`), then redeploy. Otherwise /api/quote and /api/contact cannot store requests. The form's photo picker currently records filenames only; it does not upload photos.
5. Replace the placeholder phone and email in `src/lib/constants.ts`, and the fallback number in `src/app/api/quote/route.ts`. Verify any website domain in layout, sitemap and robots before pointing a real domain.
6. Replace the illustrative image assets in `public/images/slider` with authentic, permission-cleared before/after photos. These are demo illustrations, not real work photos.
7. Test /, /services, /get-a-quote, /contact, /before-after and /api/health. Only submit the quote/contact forms after the database and notification workflow are configured.

**Important:** Changing build files does not itself verify the Netlify site. Check the latest Netlify deploy log and published URL for success. No Netlify access or URL was provided during this repair.
