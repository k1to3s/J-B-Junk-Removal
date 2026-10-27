import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | J&B Junk Removal",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
      <div className="space-y-1 border-b border-sky-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When you request a quote or contact {COMPANY_INFO.legalName}, we collect your name, phone number, email (optional), ZIP code, job description, and optional uploaded job photos.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">2. How We Use Information</h2>
          <p>
            We use your information strictly to calculate estimates, schedule pickups, and dispatch our hauling crew. We never sell or share your personal data with third-party advertisers.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">3. Zero Tracking Default</h2>
          <p>
            This website does not load Google Analytics, Google Tag Manager, or advertising pixels. We honor browser Global Privacy Control (GPC) signals automatically.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">4. California Rights (CCPA / CalOPPA)</h2>
          <p>
            California residents may request access to or deletion of their submitted information at any time by contacting {COMPANY_INFO.email} or calling {COMPANY_INFO.phoneDisplay}.
          </p>
        </section>
      </div>
    </div>
  );
}
