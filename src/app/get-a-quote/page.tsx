import type { Metadata } from "next";
import { Phone, Check } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Quote | J&B Junk Removal",
  description: "Request your free upfront junk removal quote in Temecula, CA.",
};

export default function GetAQuotePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Free Estimate
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Get a Free Quote
        </h1>
        <p className="text-base text-slate-600">
          Fast upfront estimates. No obligation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <QuoteForm />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-4">
            <h2 className="text-base font-bold text-slate-900">Why J&B</h2>
            <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Firm price confirmed before lifting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500 shrink-0" />
                <span>2-hour arrival windows</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Two-person full-service crew</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Donation & recycling included</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-sky-100/70 border border-sky-200 space-y-2">
            <span className="text-xs text-sky-800 font-semibold block">Prefer to call?</span>
            <a
              href={COMPANY_INFO.phoneRaw}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-sky-900 hover:text-sky-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
