import Image from "next/image";

export default function ImagePanel({ src, alt, priority = false, caption, className = "" }) {
  return (
    <figure className={`relative overflow-hidden rounded-card border border-clinic-line bg-white shadow-soft dark:border-white/10 dark:bg-white/10 ${className}`}>
      <div className="relative aspect-photo w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-clinic-line bg-white px-5 py-4 text-sm font-semibold text-clinic-body dark:border-white/10 dark:bg-clinic-ink dark:text-cyan-50/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
