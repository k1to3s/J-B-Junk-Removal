"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface CookiePreferences {
  strictlyNecessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [functional, setFunctional] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleOpen = () => setShowModal(true);
    window.addEventListener("open-cookie-preferences", handleOpen);

    try {
      const stored = localStorage.getItem("jb_cookie_consent");
      const isGpc = (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

      if (!stored) {
        if (isGpc) {
          savePreferences({
            strictlyNecessary: true,
            functional: false,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString(),
          });
        } else {
          setShowBanner(true);
        }
      } else {
        const parsed: CookiePreferences = JSON.parse(stored);
        setFunctional(parsed.functional);
      }
    } catch {
      // ignore
    }

    return () => window.removeEventListener("open-cookie-preferences", handleOpen);
  }, []);

  const savePreferences = async (prefs: CookiePreferences) => {
    try {
      localStorage.setItem("jb_cookie_consent", JSON.stringify(prefs));
      await fetch("/api/privacy-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prefs),
      }).catch(() => {});
    } catch {
      // ignore
    }
    setShowBanner(false);
    setShowModal(false);
  };

  if (!mounted) return null;

  return (
    <>
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Privacy Notice"
          className="fixed bottom-16 lg:bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-40 bg-white text-slate-800 p-4 rounded-2xl shadow-xl border border-sky-200 flex flex-col gap-3"
        >
          <p className="text-xs text-slate-600 leading-relaxed">
            Zero ad trackers. We only use essential storage for quotes.{" "}
            <Link href="/cookie-policy" className="underline text-sky-600 font-semibold">
              Policy
            </Link>
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                savePreferences({
                  strictlyNecessary: true,
                  functional: false,
                  analytics: false,
                  marketing: false,
                  timestamp: new Date().toISOString(),
                })
              }
              className="flex-1 py-1.5 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-bold text-xs cursor-pointer"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
            >
              Settings
            </button>
            <button
              type="button"
              onClick={() =>
                savePreferences({
                  strictlyNecessary: true,
                  functional: true,
                  analytics: false,
                  marketing: false,
                  timestamp: new Date().toISOString(),
                })
              }
              className="flex-1 py-1.5 px-3 rounded-xl bg-sky-600 text-white hover:bg-sky-500 font-bold text-xs cursor-pointer"
            >
              Accept
            </button>
          </div>
        </aside>
      )}

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-sky-100 space-y-4">
            <div className="flex items-center justify-between">
              <h3 id="cookie-title" className="text-base font-bold text-slate-900">
                Privacy Preferences
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1 text-slate-400 hover:text-slate-900"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Strictly Necessary</p>
                  <p className="text-slate-500">Security & quote submissions.</p>
                </div>
                <span className="text-[11px] font-bold text-sky-600">Required</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-sky-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Interactive Maps</p>
                  <p className="text-slate-500">Embedded Google Maps view.</p>
                </div>
                <input
                  type="checkbox"
                  checked={functional}
                  onChange={(e) => setFunctional(e.target.checked)}
                  className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
                  aria-label="Enable Interactive Maps"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    strictlyNecessary: true,
                    functional,
                    analytics: false,
                    marketing: false,
                    timestamp: new Date().toISOString(),
                  })
                }
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
