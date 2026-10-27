import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | J&B Junk Removal",
  description: "Local junk removal team in Temecula, CA.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Locally Owned
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          About J&B
        </h1>
        <p className="text-base text-slate-600 max-w-xl">
          Locally owned in Temecula, California. Built for fast, honest, and eco-conscious hauling without franchise markups.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2 shadow-2xs">
          <h2 className="text-base font-bold text-slate-900">Upfront Volume Pricing</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We confirm your exact price in person before lifting anything. Zero hidden fees.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2 shadow-2xs">
          <h2 className="text-base font-bold text-slate-900">Eco-First Sorting</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Usable furniture is donated where possible, and metal is recycled.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2 shadow-2xs">
          <h2 className="text-base font-bold text-slate-900">Respectful Crews</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Two-person teams that show up on time, protect your walls, and sweep up afterward.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2 shadow-2xs">
          <h2 className="text-base font-bold text-slate-900">Local Dispatch</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Based right here in Southwest Riverside County with same-day availability.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-slate-900">Work with our local crew</h2>
          <p className="text-xs text-slate-600">Free estimates across Temecula & Murrieta.</p>
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
