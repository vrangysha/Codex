"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email для рассылки
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="email@example.com"
        className="min-h-12 flex-1 rounded-card border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-cyan-50/60 focus:border-clinic-secondary focus:outline-none focus:ring-4 focus:ring-cyan-300/20"
      />
      <button
        type="submit"
        className="min-h-12 rounded-card bg-clinic-secondary px-5 text-sm font-bold text-clinic-ink transition-all duration-200 hover:scale-105 hover:bg-white"
      >
        {sent ? "Готово" : "Получать советы"}
      </button>
    </form>
  );
}
