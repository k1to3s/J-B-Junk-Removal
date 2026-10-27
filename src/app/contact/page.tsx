"use client";

import { useState } from "react";
import { Phone, Mail, Clock, Check, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) setError(data.message || "Failed to send.");
      else setSuccess(true);
    } catch {
      setError("Network error. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-12">
      <div className="space-y-2 border-b border-sky-100 pb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
          Direct Dispatch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Contact
        </h1>
        <p className="text-base text-slate-600">
          Reach our Temecula dispatch team by phone or message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Direct Info */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-5">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Phone</span>
                <a href={COMPANY_INFO.phoneRaw} className="text-sm font-bold text-slate-900 hover:text-sky-600">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Email</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-slate-900 hover:text-sky-600">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
              <div>
                <span className="block text-xs text-slate-400">Hours</span>
                <span className="text-sm font-semibold text-slate-900">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-sky-100 shadow-2xs">
            {success ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Message Sent</h2>
                <p className="text-xs text-slate-500">We will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-800">Message *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
