# PRE-LAUNCH PRODUCTION CHECKLIST

**Client:** J&B Junk Removal  
**Target:** Public Production Launch  

---

## 1. Business Contact & Identity Verification

- [ ] **Final Business Phone Number:** Replace `(951) 555-5865 [PLACEHOLDER]` with the official J&B Junk Removal direct dispatch phone number in `src/lib/constants.ts` or set `NEXT_PUBLIC_PHONE_NUMBER`.
- [ ] **Business Email Mailbox:** Configure real `quotes@jandbjunkremoval.com` and `privacy@jandbjunkremoval.com` mailboxes.
- [ ] **City of Temecula Business License:** File for and record the official municipal business license number with the City of Temecula Permit Center.
- [ ] **Google Business Profile:** Claim and verify the J&B Junk Removal Google Business Profile in Temecula to support local map pack rankings.

---

## 2. Media & Photography Upgrades

- [ ] **Authentic Job Photography:** Replace demonstration Before & After images with genuine J&B Junk Removal completed project photos as they become available.
- [ ] **Customer Photo Consent:** Ensure written or digital property release consent is signed before capturing identifiable residential cleanout photographs.

---

## 3. Email & SMS Quote Notification Integrations

- [ ] **Quote Dispatch Webhook / Email:** Connect `/api/quote` to your preferred transactional email provider (e.g. Resend, SendGrid, Postmark) or SMS alert service (e.g. Twilio) so our crew receives instant mobile alerts when a customer submits a quote.
- [ ] **Database Backup:** Ensure automated daily backups are enabled on your production PostgreSQL instance.

---

## 4. Domain & Hosting Setup

- [ ] **DNS Records:** If you own `jandbjunkremoval.com`, configure its DNS using the exact records shown in your Netlify domain settings. Do not assume the sample domain is yours.
- [ ] **SSL / HTTPS:** Verify HTTPS certificate provisioning on Netlify.
- [ ] **Google Search Console:** Submit `https://jandbjunkremoval.com/sitemap.xml` for indexation.

---

## 5. Legal Review

- [ ] **California Legal Counsel:** Have qualified California legal counsel review the Privacy Policy, Terms & Conditions, and hazardous waste disclaimers prior to high-volume commercial marketing.
