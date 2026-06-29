import Image from "next/image";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ImageFrameRatio = "wide" | "square" | "portrait";

const ratioClass: Record<ImageFrameRatio, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export interface ImageFrameProps {
  alt: string;
  badge?: string;
  caption?: string;
  children?: ReactNode;
  className?: string;
  ratio?: ImageFrameRatio;
  src?: string;
}

export function ImageFrame({
  alt,
  badge,
  caption,
  children,
  className,
  ratio = "wide",
  src,
}: ImageFrameProps) {
  return (
    <figure className={cn("overflow-hidden rounded-lg border border-border bg-surface", className)}>
      <div className={cn("relative bg-surface-alt", ratioClass[ratio])}>
        {src ? (
          <Image
            alt={alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={src}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm leading-6 text-muted">
            {children ?? "Здесь будет лицензированное изображение или реальное фото проекта."}
          </div>
        )}
        {badge ? (
          <div className="absolute left-4 top-4">
            <Badge variant="warning">{badge}</Badge>
          </div>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="px-5 py-4 text-sm leading-6 text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
