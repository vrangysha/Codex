import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="bg-background py-16 sm:py-20 lg:py-24">
      <Container className="grid min-h-[58dvh] gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <div>
          <p className="text-sm font-medium text-muted">404</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Страница не найдена
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
            Возможно, адрес изменился или страница ещё не опубликована. Можно вернуться на главную,
            посмотреть услуги или оставить заявку на консультацию.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="/">
              <Home aria-hidden="true" className="h-4 w-4" />
              На главную
            </Link>
            <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/services">
              Услуги
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link className={buttonVariants({ variant: "outline", size: "lg" })} href="/contacts">
              Консультация
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 shadow-soft">
          <Search aria-hidden="true" className="h-8 w-8 text-primary" />
          <h2 className="mt-5 text-2xl font-semibold leading-tight">Куда перейти дальше</h2>
          <ul className="mt-5 space-y-3 text-base leading-7 text-muted">
            <li>Главная страница — общий обзор ремонта под ключ.</li>
            <li>Услуги — направления ремонта квартир, домов и дизайн-проекта.</li>
            <li>Контакты — заявка, телефон, эл. почта и мессенджеры.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
