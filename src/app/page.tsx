import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed";
import FaqAccordion from "@/components/FaqAccordion";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-24 pb-20">
      {/* 1. CLEAN WHITE & BABY BLUE HERO */}
      <section className="pt-14 sm:pt-20 pb-14 border-b border-sky-100 bg-gradient-to-b from-sky-50/80 via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-xs font-bold text-sky-800">
            <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
            <span>Temecula & Southwest Riverside County</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.06]">
              Your junk gone. <br />
              <span className="text-sky-600">Your space back.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Single items to full cleanouts. Upfront volume pricing, heavy lifting included, and responsible local disposal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm shadow-sky-200 transition-all"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href={COMPANY_INFO.phoneRaw}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" aria-hidden="true" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Minimal Trust Strip */}
          <div className="pt-6 border-t border-sky-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Free Upfront Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Same-Day Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Full-Service Lifting</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Donation & Recycling</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE BEFORE & AFTER SLIDER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              See the difference
            </h2>
            <p className="text-sm text-slate-500">
              See an illustration of how a cleared space can look. Actual project photos coming soon.
            </p>
          </div>
          <Link
            href="/before-after"
            className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
          >
            <span>More comparisons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <BeforeAfterSlider
          beforeImage="/images/slider/garage-before.svg"
          afterImage="/images/slider/garage-after.svg"
          beforeAlt="Cluttered garage before cleanout"
          afterAlt="Clean swept garage after cleanout"
          title="Garage Cleanout — Illustrative Example"
          description="Sample illustration — not photographs of a completed J&B project."
        />
      </section>

      {/* 3. CLEAN SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              What we haul
            </h2>
            <p className="text-sm text-slate-500">Residential & commercial hauling.</p>
          </div>
          <Link
            href="/services"
            className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
          >
            <span>All services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:bg-sky-50/30 transition-all flex flex-col justify-between space-y-6 shadow-2xs"
            >
              <div className="space-y-2.5">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-600 text-xs font-bold">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-sky-600 pt-3 border-t border-sky-50">
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (Soft Baby Blue Container) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-sky-50/90 border border-sky-100 space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                Step 1
              </span>
              <h3 className="text-base font-bold text-slate-900">Request a quote</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send a quick list or photo online, or call us for a free estimate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                Step 2
              </span>
              <h3 className="text-base font-bold text-slate-900">Confirm your price</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We arrive on time and confirm your exact price before lifting a finger.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                Step 3
              </span>
              <h3 className="text-base font-bold text-slate-900">Reclaim your space</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We load everything, sweep the floor clean, and donate or recycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Service area
          </h2>
          <p className="text-sm text-slate-500">
            Dispatched locally from Temecula, CA.
          </p>
        </div>
        <GoogleMapsEmbed />
      </section>

      {/* 6. FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Common questions
          </h2>
        </div>
        <FaqAccordion limit={4} />
      </section>

      {/* 7. FINAL CTA (Baby Blue Banner) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-50 via-sky-100/70 to-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Ready to clear the clutter?
            </h2>
            <p className="text-sm text-slate-600">
              Free upfront estimates. No obligation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              href="/get-a-quote"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xs shadow-sky-200 transition-colors"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY_INFO.phoneRaw}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-sky-900 border border-sky-200 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
