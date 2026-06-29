import type { FaqGroup } from "@/data/site";
import { faqGroups } from "@/data/site";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export interface FaqAccordionProps {
  className?: string;
  groupSlug?: string;
  groups?: FaqGroup[];
  heading?: boolean;
  limit?: number;
}

export function FaqAccordion({
  className,
  groupSlug,
  groups = faqGroups,
  heading = true,
  limit,
}: FaqAccordionProps) {
  const group = groups.find((item) => item.slug === groupSlug) ?? groups[0];

  if (!group) {
    return null;
  }

  const items = (limit ? group.items.slice(0, limit) : group.items).map((item) => ({
    content: <p>{item.answer}</p>,
    title: item.question,
    value: item.question,
  }));

  return (
    <div className={cn("grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start", className)}>
      {heading ? (
        <SectionHeading
          description="Ответы пока основаны на структуре сайта и требуют подтверждения реальными условиями подрядчика."
          title={group.title}
        />
      ) : null}
      <Accordion items={items} />
    </div>
  );
}
