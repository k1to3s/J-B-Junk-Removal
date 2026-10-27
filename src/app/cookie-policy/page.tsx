"use client";

export default function CookiePolicyPage() {
  const openSettings = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
      <div className="space-y-1 border-b border-sky-100 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900">Cookie Policy</h1>
        <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">1. Essential Storage Only</h2>
          <p>
            We use first-party local storage (<code className="text-sky-700 font-mono">jb_cookie_consent</code>) to remember your privacy choices and protect quote form submissions.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-base font-bold text-slate-900">2. Interactive Maps</h2>
          <p>
            Third-party Google Maps scripts are blocked by default unless you click &quot;Load Map&quot; or enable functional maps in settings.
          </p>
        </section>

        <button
          type="button"
          onClick={openSettings}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs cursor-pointer transition-colors"
        >
          Manage Cookie Preferences
        </button>
      </div>
    </div>
  );
}
