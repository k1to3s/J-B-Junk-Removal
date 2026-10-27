import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY_INFO, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | J&B Junk Removal",
  description: "Frequently asked questions about junk removal in Temecula, CA.",
};

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Help Center
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          FAQ
        </h1>
        <p className="text-base text-slate-600">
          Quick answers on pricing, scheduling, and accepted materials.
        </p>
      </div>

      <FaqAccordion items={FAQS} />

      <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-slate-600">
          <strong className="text-slate-900 block text-sm">Have another question?</strong>
          Call our dispatch directly at {COMPANY_INFO.phoneDisplay}.
        </div>
        <Link
          href="/contact"
          className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shrink-0 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
