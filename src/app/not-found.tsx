import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold">
          404
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Looks Like This Page Got Hauled Away.
        </h1>
        <p className="text-sm text-slate-500">
          We couldn&apos;t find that page. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <Link
            href="/"
            className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-bold text-xs transition-colors"
          >
            Services
          </Link>
          <a
            href={COMPANY_INFO.phoneRaw}
            className="px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-bold text-xs transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
