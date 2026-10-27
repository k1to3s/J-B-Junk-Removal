"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Clean Logo with Baby Blue Badge */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="J&B Junk Removal Home"
        >
          <Logo className="h-12 w-auto shrink-0 transition-transform group-hover:scale-[1.03]" title="J&B Junk Removal" />
          <span className="hidden sm:inline-block text-[11px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
            Temecula, CA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-sky-700 bg-sky-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-sky-50/50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={COMPANY_INFO.phoneRaw}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200/60 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-xs shadow-sky-200 transition-all"
          >
            <span>Free Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-sky-50"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-16 bg-white border-b border-sky-100 p-4 lg:hidden shadow-lg space-y-4"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <nav className="grid grid-cols-2 gap-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-semibold ${
                  pathname === link.href
                    ? "bg-sky-100 text-sky-800"
                    : "text-slate-700 hover:bg-sky-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-sky-100 flex gap-2">
            <a
              href={COMPANY_INFO.phoneRaw}
              className="flex-1 py-2.5 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 text-center text-xs font-bold"
            >
              Call Now
            </a>
            <Link
              href="/get-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-xl bg-sky-600 text-white text-center text-xs font-bold"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
