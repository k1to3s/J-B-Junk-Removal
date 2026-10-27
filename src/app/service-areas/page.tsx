import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed";

export const metadata: Metadata = {
  title: "Service Areas | J&B Junk Removal",
  description: "Serving Temecula, Murrieta, Winchester, Wildomar, Menifee, and Lake Elsinore.",
};

export default function ServiceAreasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Local Coverage
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Service Areas
        </h1>
        <p className="text-base text-slate-600">
          Local daily dispatch across Temecula Valley and Southwest Riverside County.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICE_AREAS.map((area) => (
          <div
            key={area.name}
            className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-200 transition-colors flex flex-col justify-between space-y-4 shadow-2xs"
          >
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-slate-900">{area.name}</h2>
              <p className="text-xs text-slate-500">{area.description}</p>
              <p className="text-[11px] font-semibold text-sky-600 pt-1">
                ZIP: {area.zipCodes.join(", ")}
              </p>
            </div>
            <Link
              href={`/get-a-quote?zip=${area.zipCodes[0]}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 pt-2 border-t border-sky-50"
            >
              <span>Book in {area.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      <GoogleMapsEmbed />
    </div>
  );
}
