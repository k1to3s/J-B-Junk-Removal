"use client";

import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function MobileStickyCta() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-sky-100 px-3 py-2 shadow-sm"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Quick Actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        <a
          href={COMPANY_INFO.phoneRaw}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 font-bold text-xs"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <Link
          href="/get-a-quote"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-600 text-white font-bold text-xs"
        >
          <span>Free Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
