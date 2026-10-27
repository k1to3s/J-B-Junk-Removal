import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | J&B Junk Removal",
  description: "Residential and commercial junk removal in Temecula, CA.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Temecula Valley
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Services
        </h1>
        <p className="text-base text-slate-600 max-w-xl">
          Full-service lifting, loading, and responsible disposal across Temecula Valley.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {SERVICES.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-sky-100 hover:border-sky-200 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs"
          >
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 text-xs font-bold">
                  0{idx + 1}
                </span>
                <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
              </div>
              <p className="text-sm text-slate-600">{service.fullDesc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                {service.itemsIncluded.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                    <Check className="w-3.5 h-3.5 text-sky-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/get-a-quote?service=${service.id}`}
              className="shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* Concise Hazardous Exclusion Note */}
      <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start gap-3 text-xs text-slate-600">
        <AlertCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-900">Prohibited Items:</strong> Under California law, we cannot haul wet paint, chemicals, motor oil, fuel, batteries, propane tanks, or asbestos. Contact Riverside County HHW (rcwaste.org) for hazardous disposal.
        </p>
      </div>
    </div>
  );
}
