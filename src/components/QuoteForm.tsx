"use client";

import { useState, useId, useRef } from "react";
import { Check, AlertCircle, Upload, Phone, ArrowRight, Loader2 } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    zipCode: "92591",
    serviceType: "residential-junk-removal",
    estimatedVolume: "quarter-truck",
    preferredDate: "",
    preferredTime: "morning",
    description: "",
    honeypot: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successQuoteId, setSuccessQuoteId] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const zipId = useId();
  const serviceId = useId();
  const volumeId = useId();
  const dateId = useId();
  const descId = useId();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    if (uploadedPhotos.length + files.length > 5) {
      setErrors((prev) => ({ ...prev, photos: "Max 5 photos." }));
      return;
    }
    const newNames = files.map((f) => f.name);
    setUploadedPhotos((prev) => [...prev, ...newNames]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name required.";
    if (formData.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid 10-digit phone required.";
    if (!/^\d{5}$/.test(formData.zipCode.trim())) newErrors.zipCode = "5-digit ZIP required.";
    if (formData.description.trim().length < 5) newErrors.description = "Brief item list required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      errorSummaryRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, photoUrls: uploadedPhotos }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        else setGeneralError(data.message || "Submission failed.");
        errorSummaryRef.current?.focus();
      } else {
        setSubmitSuccess(true);
        setSuccessQuoteId(data.quoteId);
      }
    } catch {
      setGeneralError("Network error. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-8 rounded-2xl bg-sky-50/70 border border-sky-200 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 mx-auto flex items-center justify-center">
          <Check className="w-6 h-6" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Quote Request Sent (#{successQuoteId || "104"})</h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
          We received your request and will text or call <strong>{formData.phone}</strong> shortly with your estimate.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <a
            href={COMPANY_INFO.phoneRaw}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call Dispatch</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="px-4 py-2 rounded-xl text-sky-700 hover:bg-sky-100 text-xs font-bold cursor-pointer"
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-2xl bg-white border border-sky-100 shadow-xs space-y-5"
      aria-label="Quote Request Form"
    >
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs space-y-1"
          role="alert"
        >
          <div className="flex items-center gap-1.5 font-bold">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>Please check required fields:</span>
          </div>
          <ul className="list-disc pl-5">
            {Object.entries(errors).map(([k, msg]) => (
              <li key={k}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {generalError && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs" role="alert">
          {generalError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor={nameId} className="block text-xs font-bold text-slate-800">
            Name *
          </label>
          <input
            id={nameId}
            type="text"
            name="fullName"
            required
            autoComplete="name"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor={phoneId} className="block text-xs font-bold text-slate-800">
            Phone *
          </label>
          <input
            id={phoneId}
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="(951) 555-0192"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor={zipId} className="block text-xs font-bold text-slate-800">
            ZIP Code *
          </label>
          <input
            id={zipId}
            type="text"
            name="zipCode"
            required
            inputMode="numeric"
            maxLength={5}
            autoComplete="postal-code"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor={emailId} className="block text-xs font-bold text-slate-800">
            Email <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor={serviceId} className="block text-xs font-bold text-slate-800">
            Service Type
          </label>
          <select
            id={serviceId}
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor={volumeId} className="block text-xs font-bold text-slate-800">
            Estimated Size
          </label>
          <select
            id={volumeId}
            name="estimatedVolume"
            value={formData.estimatedVolume}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
          >
            <option value="single-item">Single Item</option>
            <option value="quarter-truck">1/4 Truckload</option>
            <option value="half-truck">1/2 Truckload</option>
            <option value="full-truck">Full Truckload</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor={descId} className="block text-xs font-bold text-slate-800">
          What are we hauling? *
        </label>
        <textarea
          id={descId}
          name="description"
          rows={2}
          required
          placeholder="e.g. Old couch, broken fridge, 6 garage boxes"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-sky-50/30 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <label htmlFor={dateId} className="block text-xs font-bold text-slate-800 mb-1">
            Preferred Date <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id={dateId}
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-sky-50/30 text-xs"
          />
        </div>

        <div>
          <span className="block text-xs font-bold text-slate-800 mb-1">
            Photos <span className="text-slate-400 font-normal">(optional)</span>
          </span>
          <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-dashed border-sky-200 bg-sky-50/50 hover:bg-sky-100/50 text-xs font-semibold text-sky-700 w-full justify-center">
            <Upload className="w-3.5 h-3.5" />
            <span>{uploadedPhotos.length > 0 ? `${uploadedPhotos.length} attached` : "Upload photos"}</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-sm shadow-sky-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        Used strictly to send your quote. Zero spam.
      </p>
    </form>
  );
}
