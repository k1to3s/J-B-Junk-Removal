"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

interface FaqAccordionProps {
  items?: Array<{ question: string; answer: string }>;
  limit?: number;
}

export default function FaqAccordion({ items = FAQS, limit }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-2.5">
      {displayItems.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? "bg-sky-50/50 border-sky-200"
                : "bg-white border-sky-100 hover:border-sky-200"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-sky-500 shrink-0 transition-transform duration-150 ${
                    isOpen ? "rotate-180 text-sky-600" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <p className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
