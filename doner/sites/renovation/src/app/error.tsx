"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-background py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="rounded-lg border border-border bg-surface p-6 shadow-soft sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-destructive/10 text-destructive">
              <AlertTriangle aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted">Ошибка загрузки</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-foreground">
                Не удалось показать страницу
              </h1>
              <p className="mt-4 text-base leading-7 text-muted">
                Попробуйте обновить блок. Если ошибка повторится, перейдите на главную или оставьте
                заявку через раздел контактов.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className={buttonVariants({ size: "lg" })} onClick={reset} type="button">
              <RotateCcw aria-hidden="true" className="h-4 w-4" />
              Повторить
            </button>
            <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/">
              На главную
            </Link>
            <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/contacts">
              Консультация
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
