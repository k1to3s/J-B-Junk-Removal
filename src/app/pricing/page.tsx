import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | J&B Junk Removal",
  description: "Upfront volume-based junk removal pricing in Temecula, CA.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Single Item",
      size: "1 bulky item",
      desc: "Couch, mattress, fridge, washer, or TV.",
    },
    {
      name: "1/4 Truckload",
      size: "~1–2 pickup beds",
      desc: "Small closet, 8–10 boxes, or light patio clutter.",
    },
    {
      name: "1/2 Truckload",
      size: "~3–4 pickup beds",
      desc: "Standard garage cleanout or multiple furniture pieces.",
    },
    {
      name: "Full Truckload",
      size: "~6–8 pickup beds",
      desc: "Estate cleanouts, large garages, or commercial turnovers.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Volume Based
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Pricing
        </h1>
        <p className="text-base text-slate-600 max-w-xl">
          You only pay for the truck space your items fill. Labor, loading, and disposal included.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 transition-colors flex flex-col justify-between space-y-6 shadow-2xs"
          >
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold">
                {t.size}
              </span>
              <h2 className="text-lg font-bold text-slate-900">{t.name}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
            </div>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-between pt-3 border-t border-sky-50 text-xs font-bold text-sky-600 hover:text-sky-700"
            >
              <span>Request estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Every quote includes:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-semibold">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-sky-500" />
            <span>Two-person lifting crew</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-sky-500" />
            <span>Sorting & recycling fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-sky-500" />
            <span>Broom-clean floor sweep</span>
          </div>
        </div>
      </div>
    </div>
  );
}
