import { Quote, Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-card border border-clinic-line bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-soft dark:border-white/10 dark:bg-white/10">
      <div className="flex items-center justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-card bg-clinic-mist text-clinic-primary dark:bg-cyan-400/10 dark:text-cyan-100">
          <Quote aria-hidden="true" className="h-5 w-5" />
        </span>
        <span className="inline-flex items-center gap-1 rounded-card bg-amber-50 px-3 py-1 text-sm font-black text-amber-700 dark:bg-amber-300/10 dark:text-amber-100">
          <Star aria-hidden="true" className="h-4 w-4 fill-current" />
          {testimonial.rating}
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-clinic-body dark:text-cyan-50/80">“{testimonial.text}”</p>
      <div className="mt-6 border-t border-clinic-line pt-4 dark:border-white/10">
        <p className="font-black text-clinic-ink dark:text-white">{testimonial.name}</p>
        <p className="mt-1 text-sm font-semibold text-clinic-primary dark:text-clinic-secondary">
          {testimonial.service}
        </p>
      </div>
    </article>
  );
}
