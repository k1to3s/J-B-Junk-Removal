import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Before & After Gallery | J&B Junk Removal",
  description: "Interactive before and after cleanout comparisons in Temecula, CA.",
};

export default function BeforeAfterPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-14">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Illustrative Examples
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Before & After
        </h1>
        <p className="text-base text-slate-600 max-w-xl">
          These illustrations show what clearing clutter can achieve. Actual project photos will be added as available.
        </p>
      </div>

      <div className="space-y-16">
        <BeforeAfterSlider
          beforeImage="/images/slider/garage-before.svg"
          afterImage="/images/slider/garage-after.svg"
          beforeAlt="Cluttered two-car residential garage"
          afterAlt="Clean, empty and broom-swept two-car garage"
          title="Garage Cleanout — Example"
          description="Sample illustration, not a completed customer project."
        />

        <BeforeAfterSlider
          beforeImage="/images/slider/backyard-before.svg"
          afterImage="/images/slider/backyard-after.svg"
          beforeAlt="Backyard patio littered with broken furniture and yard debris"
          afterAlt="Spotless backyard paver patio"
          title="Patio & Yard Debris — Example"
          description="Sample illustration, not a completed customer project."
        />
      </div>

      <div className="p-8 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Ready to reclaim your space?</h2>
          <p className="text-xs text-slate-600">Free upfront estimates in Temecula & Murrieta.</p>
        </div>
        <Link
          href="/get-a-quote"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-500 transition-colors"
        >
          <span>Get Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
