import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | J&B Junk Removal",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
      <div className="space-y-1 border-b border-sky-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900">Terms & Conditions</h1>
        <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">1. Estimates vs. Final Quotes</h2>
          <p>
            Online and phone estimates are preliminary. A binding price is confirmed in person by our crew before loading begins. Declining an on-site quote carries zero fee.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">2. Hazardous Materials Excluded</h2>
          <p>
            We do not transport hazardous materials, including wet paint, chemicals, motor oil, fuel, batteries, propane tanks, biohazards, or asbestos.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">3. Customer Authorization</h2>
          <p>
            You confirm you are the lawful owner or authorized agent of all items designated for haul-away. Ownership transfers to J&B Junk Removal upon loading and payment.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">4. Governing Law</h2>
          <p>
            Governed by the laws of the State of California, Riverside County. Contact: {COMPANY_INFO.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
