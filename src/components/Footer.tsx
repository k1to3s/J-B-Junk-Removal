"use client";

import Link from "next/link";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Footer() {
  const openCookiePreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <footer className="bg-sky-50/60 text-slate-600 py-12 pb-24 lg:pb-12 border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-sky-200/60">
          <div className="space-y-1">
            <Link href="/" aria-label="J&B Junk Removal Home" className="inline-block">
              <Logo className="h-20 w-auto" title="J&B Junk Removal" />
            </Link>
            <p className="text-xs text-slate-500">
              Temecula, Murrieta & Southwest Riverside County • {COMPANY_INFO.hours}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-sky-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-slate-600 hover:text-sky-700 transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Non-hazardous hauling only.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-sky-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-sky-700 transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-sky-700 transition-colors">
              Cookies
            </Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-sky-700 underline underline-offset-2 cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
