import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | J&B Junk Removal",
  description: "Simple 3-step junk removal process in Temecula, CA.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Request a free estimate",
      desc: "Submit our quick form or call us. Tell us what needs to go.",
    },
    {
      num: "02",
      title: "Approve your on-site price",
      desc: "We arrive in a 2-hour window and confirm your exact volume price before lifting.",
    },
    {
      num: "03",
      title: "We haul, sweep & recycle",
      desc: "Our crew loads everything, sweeps the floor clean, and sorts items for local donation.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Simple Process
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          How It Works
        </h1>
        <p className="text-base text-slate-600">
          Three simple steps from quote to clean sweep.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {steps.map((s) => (
          <div
            key={s.num}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-sky-100 flex items-start gap-5 shadow-2xs"
          >
            <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-600 text-xs font-extrabold">
              {s.num}
            </span>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-900">{s.title}</h2>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Book your pickup window</h2>
          <p className="text-xs text-slate-600">Same-day and next-day slots available.</p>
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
