"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items, initialOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(initialOpen);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-panel-${index}`;
        return (
          <article
            key={item.question}
            className="rounded-card border border-clinic-line bg-white shadow-sm dark:border-white/10 dark:bg-white/10"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex min-h-16 w-full items-center justify-between gap-4 rounded-card px-5 py-4 text-left text-base font-black text-clinic-ink transition-all duration-200 hover:bg-clinic-mist dark:text-white dark:hover:bg-white/10"
            >
              <span>{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-clinic-primary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={contentId}
              className={`overflow-hidden transition-all duration-200 ease-smooth ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-5 pb-5 text-sm leading-7 text-clinic-body dark:text-cyan-50/80">
                {item.answer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
