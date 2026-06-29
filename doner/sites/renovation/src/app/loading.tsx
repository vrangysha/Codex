import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div aria-live="polite" className="bg-background py-16 sm:py-20">
      <Container className="space-y-8" size="wide">
        <div className="max-w-3xl space-y-4">
          <div className="h-8 w-40 animate-pulse rounded-full bg-surface-alt" />
          <div className="h-12 w-full max-w-2xl animate-pulse rounded-md bg-surface-alt" />
          <div className="h-5 w-full max-w-xl animate-pulse rounded-md bg-surface-alt" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-40 animate-pulse rounded-lg border border-border bg-surface" />
          <div className="h-40 animate-pulse rounded-lg border border-border bg-surface" />
          <div className="h-40 animate-pulse rounded-lg border border-border bg-surface" />
        </div>
        <span className="sr-only">Загрузка страницы</span>
      </Container>
    </div>
  );
}
