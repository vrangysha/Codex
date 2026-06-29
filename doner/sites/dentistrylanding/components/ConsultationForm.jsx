"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

const services = [
  "Первичная консультация",
  "Профгигиена",
  "Ортодонтия",
  "Имплантация",
  "Эстетика улыбки",
  "Лечение зубов"
];

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-card border border-clinic-line bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/10"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-card bg-emerald-50 text-clinic-accent dark:bg-emerald-400/10 dark:text-emerald-200">
          <CalendarCheck aria-hidden="true" className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-2xl font-black text-clinic-ink dark:text-white">Запись на консультацию</h2>
          <p className="mt-1 text-sm text-clinic-body dark:text-cyan-50/80">Ответим в течение 15 минут в рабочее время.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="text-sm font-bold text-clinic-ink dark:text-white" htmlFor="name">
            Имя
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 min-h-12 w-full rounded-card border border-clinic-line bg-white px-4 text-base text-clinic-ink outline-none transition-all duration-200 focus:border-clinic-primary focus:ring-4 focus:ring-cyan-200 dark:border-white/20 dark:bg-clinic-ink dark:text-white dark:focus:ring-cyan-300/20"
            placeholder="Как к вам обращаться"
          />
        </div>
        <div>
          <label className="text-sm font-bold text-clinic-ink dark:text-white" htmlFor="phone">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className="mt-2 min-h-12 w-full rounded-card border border-clinic-line bg-white px-4 text-base text-clinic-ink outline-none transition-all duration-200 focus:border-clinic-primary focus:ring-4 focus:ring-cyan-200 dark:border-white/20 dark:bg-clinic-ink dark:text-white dark:focus:ring-cyan-300/20"
            placeholder="+7 900 000-00-00"
          />
        </div>
        <div>
          <label className="text-sm font-bold text-clinic-ink dark:text-white" htmlFor="service">
            Интересующая услуга
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 min-h-12 w-full rounded-card border border-clinic-line bg-white px-4 text-base text-clinic-ink outline-none transition-all duration-200 focus:border-clinic-primary focus:ring-4 focus:ring-cyan-200 dark:border-white/20 dark:bg-clinic-ink dark:text-white dark:focus:ring-cyan-300/20"
            defaultValue={services[0]}
          >
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-bold text-clinic-ink dark:text-white" htmlFor="message">
            Комментарий
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 w-full resize-y rounded-card border border-clinic-line bg-white px-4 py-3 text-base text-clinic-ink outline-none transition-all duration-200 focus:border-clinic-primary focus:ring-4 focus:ring-cyan-200 dark:border-white/20 dark:bg-clinic-ink dark:text-white dark:focus:ring-cyan-300/20"
            placeholder="Расскажите, что беспокоит или какой результат хотите получить"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-card bg-clinic-accent px-5 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:scale-105 hover:bg-clinic-accentDark"
      >
        {submitted ? <CheckCircle2 aria-hidden="true" className="h-5 w-5" /> : <CalendarCheck aria-hidden="true" className="h-5 w-5" />}
        {submitted ? "Заявка отправлена" : "Отправить заявку"}
      </button>
      {submitted ? (
        <p className="mt-4 rounded-card bg-emerald-50 px-4 py-3 text-sm font-semibold text-clinic-accentDark dark:bg-emerald-400/10 dark:text-emerald-100" role="status">
          Спасибо. Координатор свяжется с вами и предложит удобное время.
        </p>
      ) : null}
    </form>
  );
}
