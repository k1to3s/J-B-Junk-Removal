"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function GoogleMapsEmbed() {
  const [loadInteractiveMap, setLoadInteractiveMap] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs">
      <div className="relative w-full aspect-[16/9] md:aspect-[24/9] bg-sky-50/70 flex items-center justify-center">
        {loadInteractiveMap ? (
          <iframe
            title="J&B Junk Removal Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106195.34005856983!2d-117.2024227!3d33.5034111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc820e28f09d89%3A0x867cf3b2a3a5f80b!2sTemecula%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        ) : (
          <div className="p-6 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 border border-sky-200 mx-auto flex items-center justify-center">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Temecula & Southwest Riverside County</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Privacy-first map. External scripts only load on click.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setLoadInteractiveMap(true)}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Load Map
              </button>
              <a
                href="https://www.google.com/maps/place/Temecula,+CA/@33.5034,-117.1481,12z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-sky-800 font-bold text-xs transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Compact City Pills */}
      <div className="p-4 bg-white border-t border-sky-100 flex flex-wrap items-center gap-2">
        {SERVICE_AREAS.map((area) => (
          <span
            key={area.name}
            className="px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-xs font-semibold text-sky-900"
          >
            {area.name} <span className="text-sky-600/80">({area.zipCodes[0]})</span>
          </span>
        ))}
      </div>
    </div>
  );
}
