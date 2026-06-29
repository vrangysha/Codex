import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  CheckCircle2,
  ClipboardCheck,
  Home,
  House,
  Layers,
  Paintbrush,
  PencilRuler,
  Plug,
  Ruler,
  ShowerHead,
  Sofa,
  Wrench,
} from "lucide-react";
import { PortfolioEstimateForm } from "@/components/forms/portfolio-estimate-form";
import { BeforeAfterPlaceholder } from "@/components/sections/before-after-placeholder";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects, type PortfolioProject } from "@/data/site";
import { cn } from "@/lib/utils";

export const portfolioFilters = [
  { slug: "all", label: "Все" },
  { slug: "apartments", label: "Квартиры" },
  { slug: "houses", label: "Дома" },
  { slug: "cosmetic", label: "Косметический" },
  { slug: "capital", label: "Капитальный" },
  { slug: "design-project", label: "Дизайн-проект" },
  { slug: "bathrooms", label: "Ванные" },
  { slug: "kitchens", label: "Кухни" },
] as const;

export type PortfolioFilter = (typeof portfolioFilters)[number]["slug"];

const scopeExamples = [
  { icon: Wrench, title: "демонтаж", text: "разбор старых покрытий и подготовка объекта" },
  { icon: Plug, title: "электрика", text: "группы, розетки, освещение и щит" },
  { icon: ShowerHead, title: "сантехника", text: "трассы, выводы, узлы и мокрые зоны" },
  { icon: Paintbrush, title: "стены", text: "подготовка, покраска, обои или покрытия" },
  { icon: Layers, title: "пол", text: "основание, стяжка, покрытие и примыкания" },
  { icon: Bath, title: "плитка", text: "раскладка, гидроизоляция и аккуратные узлы" },
  { icon: Sofa, title: "мебельные закладные", text: "опоры и выводы для будущего монтажа" },
  { icon: PencilRuler, title: "освещение", text: "сценарии света, выключатели и выводы" },
];

export function normalizePortfolioFilter(value?: string): PortfolioFilter {
  const match = portfolioFilters.find((filter) => filter.slug === value);
  return match?.slug ?? "all";
}

export function getFilteredPortfolioProjects(filter: PortfolioFilter) {
  if (filter === "all") {
    return portfolioProjects;
  }

  return portfolioProjects.filter((project) => projectMatchesFilter(project, filter));
}

function projectMatchesFilter(project: PortfolioProject, filter: PortfolioFilter) {
  const haystack = [
    project.title,
    project.slug,
    project.type,
    project.description,
    ...project.scope,
  ]
    .join(" ")
    .toLowerCase();

  if (filter === "apartments") {
    return /квартира|новостройка|apartment|euro|cosmetic/.test(haystack);
  }

  if (filter === "houses") {
    return /дом|house/.test(haystack);
  }

  if (filter === "cosmetic") {
    return /космет|обои|покраска|локаль|спальня|прихожая/.test(haystack);
  }

  if (filter === "capital") {
    return /демонтаж|инженер|чернов|электрика|сантехника|гидроизоляция/.test(haystack);
  }

  if (filter === "design-project") {
    return /планирован|подбор материалов|концепц|дизайн|чертеж/.test(haystack);
  }

  if (filter === "bathrooms") {
    return /ванная|мокрая|сантехника|плитка|гидроизоляция|bathroom/.test(haystack);
  }

  if (filter === "kitchens") {
    return /кухня|kitchen/.test(haystack);
  }

  return false;
}

function getFilterCount(filter: PortfolioFilter) {
  return getFilteredPortfolioProjects(filter).length;
}

function projectTags(project: PortfolioProject) {
  return [project.type, ...project.scope].filter(Boolean).slice(0, 5);
}

export function PortfolioPage({ activeFilter }: { activeFilter: PortfolioFilter }) {
  const filteredProjects = getFilteredPortfolioProjects(activeFilter);
  const featuredProject = portfolioProjects[1] ?? portfolioProjects[0];
  const activeFilterLabel =
    portfolioFilters.find((filter) => filter.slug === activeFilter)?.label ?? "Все";

  return (
    <>
      <Section containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { current: true, label: "Портфолио" },
            ]}
          />
          <Badge className="mt-8" variant="warning">
            Примеры оформления кейсов
          </Badge>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Портфолио ремонтов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            примеры объектов, этапов и решений. Пока реальные фото и разрешения на публикацию не
            предоставлены, раздел показывает честную структуру будущего портфолио.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ size: "lg" })} href="#portfolio-estimate">
              Рассчитать похожий проект
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href="#portfolio-estimate"
            >
              Обсудить задачу
            </Link>
          </div>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-3">
            <HeroProofItem icon={ClipboardCheck} label="демо-данные не скрыты" />
            <HeroProofItem icon={Ruler} label="готовая структура кейса" />
            <HeroProofItem icon={Home} label="фото нужны от владельца" />
          </div>
          <div className="mt-6 overflow-hidden rounded-md border border-border bg-background">
            <div className="grid gap-3 p-4 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="aspect-[4/3] rounded-md border border-border bg-surface-alt" />
              <div className="grid gap-3">
                <div className="rounded-md border border-border bg-surface p-4">
                  <p className="text-sm font-semibold text-foreground">Карточка проекта</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    тип, площадь, сроки, состав работ, бюджетный диапазон и заметка о статусе.
                  </p>
                </div>
                <div className="rounded-md border border-warning/30 bg-warning/15 p-4">
                  <p className="text-sm font-semibold text-warning-foreground">
                    Нужны реальные фото
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Сейчас изображения только структурные векторные заглушки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="surface-alt" className="scroll-mt-24" id="portfolio-grid">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            description="Фильтры работают как обычные ссылки, поэтому страницу можно открыть сразу с нужной категорией и пользоваться ею без скриптов."
            title="Фильтры проектов"
          />
          <p className="text-sm leading-6 text-muted">
            Выбрана категория:{" "}
            <span className="font-semibold text-foreground">{activeFilterLabel}</span>
          </p>
        </div>

        <nav aria-label="Фильтры портфолио" className="mt-8 flex flex-wrap gap-3">
          {portfolioFilters.map((filter) => {
            const isActive = filter.slug === activeFilter;
            const href =
              filter.slug === "all"
                ? "/portfolio#portfolio-grid"
                : `/portfolio?filter=${filter.slug}#portfolio-grid`;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-foreground hover:border-primary/40 hover:bg-background",
                )}
                href={href}
                key={filter.slug}
              >
                <span>{filter.label}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs",
                    isActive ? "bg-background/20" : "bg-surface-alt text-muted",
                  )}
                >
                  {getFilterCount(filter.slug)}
                </span>
              </Link>
            );
          })}
        </nav>

        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <PortfolioProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <PortfolioEmptyState activeFilterLabel={activeFilterLabel} />
        )}
      </Section>

      <Section>
        <SectionHeading
          description="Крупный кейс показывает будущую структуру: задача, состав работ, результат, сроки, площадь и несколько визуальных материалов. Это демо-кейс, а не реальный объект."
          title="Крупный пример оформления кейса"
        />
        {featuredProject ? (
          <div className="mt-10 grid gap-8 rounded-lg border border-border bg-surface p-6 shadow-soft lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="relative overflow-hidden rounded-md border border-border bg-background">
                <Image
                  alt={featuredProject.imageAlt}
                  className="aspect-[16/10] w-full object-cover"
                  height={720}
                  src={featuredProject.image}
                  unoptimized
                  width={1152}
                />
                <Badge className="absolute left-4 top-4" variant="warning">
                  Демо-кейс, нужны реальные данные
                </Badge>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {getFeaturedGallery(featuredProject).map(({ alt, src }, index) => (
                  <Image
                    alt={alt}
                    className="aspect-[4/3] rounded-md border border-border bg-background object-cover"
                    height={360}
                    key={`${src}-${index}`}
                    src={src}
                    unoptimized
                    width={480}
                  />
                ))}
              </div>
            </div>

            <div>
              <Badge variant="primary">Пример карточки кейса</Badge>
              <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight">
                {featuredProject.title}
              </h2>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <CaseMetric label="Площадь" value={featuredProject.area} />
                <CaseMetric label="Сроки" value={featuredProject.duration} />
                <CaseMetric label="Формат" value={featuredProject.type} />
                <CaseMetric label="Бюджет" value={featuredProject.budgetRange} />
              </dl>
              <div className="mt-6 space-y-5">
                <CaseText title="Задача" text={featuredProject.description} />
                <CaseText title="Что сделали" text={featuredProject.scope.join(", ")} />
                <CaseText title="Результат" text={featuredProject.result} />
              </div>
              <Link className={`${buttonVariants({ size: "lg" })} mt-8`} href="#portfolio-estimate">
                Рассчитать похожий проект
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          <PortfolioEmptyState activeFilterLabel="все проекты" compact />
        )}
      </Section>

      <Section background="surface-alt">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeading
            description="Не придумываем фальшивые фото «до/после». Пока нет реальных фото с разрешением, показываем только безопасный компонент-заглушку."
            title="До и после"
          />
          <BeforeAfterPlaceholder />
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Эти работы могут попадать в разные кейсы. Точный состав должен быть подтверждён реальными объектами, сметами и разрешением на публикацию."
          title="Что может быть внутри проектов"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {scopeExamples.map(({ icon: Icon, title, text }) => (
            <article
              className="rounded-lg border border-border bg-surface p-6 shadow-soft"
              key={title}
            >
              <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-xl font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        background="surface-alt"
        className="scroll-mt-24"
        containerClassName="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        id="portfolio-estimate"
      >
        <div>
          <Badge variant="accent">Расчёт по похожему формату</Badge>
          <SectionHeading
            className="mt-5"
            description="Хотите похожий ремонт? Пришлите площадь и фото — подготовим предварительный расчёт."
            title="Хотите похожий ремонт?"
          />
          <div className="mt-8 rounded-lg border border-border bg-surface p-5">
            <CheckCircle2 aria-hidden="true" className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-6 text-muted">
              На первом шаге достаточно типа объекта, площади и комментария. Фото можно передать
              позже в переписке после подключения реального канала обработки заявок.
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-surface p-5">
            <House aria-hidden="true" className="h-6 w-6 text-accent" />
            <p className="mt-3 text-sm leading-6 text-muted">
              Итоговая смета зависит от состояния объекта, состава работ, материалов, сроков и
              доступа на объект.
            </p>
          </div>
        </div>
        <PortfolioEstimateForm />
      </Section>
    </>
  );
}

function HeroProofItem({ icon: Icon, label }: { icon: typeof ClipboardCheck; label: string }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
      <p className="mt-3 text-sm font-semibold leading-6">{label}</p>
    </div>
  );
}

function getFeaturedGallery(project: PortfolioProject) {
  const entries = [
    {
      alt: project.galleryAlt[0] ?? project.imageAlt,
      src: project.gallery[0],
    },
    {
      alt: project.galleryAlt[1] ?? project.imageAlt,
      src: project.gallery[1],
    },
    {
      alt: project.imageAlt,
      src: project.image,
    },
  ];

  return entries.filter((entry): entry is { alt: string; src: string } =>
    Boolean(entry.alt && entry.src),
  );
}

function PortfolioEmptyState({
  activeFilterLabel,
  compact,
}: {
  activeFilterLabel: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "mt-10 rounded-lg border border-dashed border-border bg-background p-6 text-center",
        compact && "bg-surface",
      )}
    >
      <Badge variant="warning">Нужны реальные проекты</Badge>
      <h3 className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-tight">
        В категории «{activeFilterLabel}» пока нет опубликованных работ
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
        Блок остается устойчивым при пустом портфолио: вместо сломанной сетки показывается
        пояснение. Добавьте реальные фотографии, сроки, состав работ и разрешение на публикацию,
        чтобы заменить это состояние.
      </p>
      <Link className={`${buttonVariants({ size: "lg" })} mt-6`} href="#portfolio-estimate">
        Рассчитать похожий проект
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}

function PortfolioProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-surface shadow-soft"
      id={project.slug}
    >
      <div className="relative bg-background">
        <Image
          alt={project.imageAlt}
          className="aspect-[4/3] w-full object-cover"
          height={720}
          src={project.image}
          unoptimized
          width={960}
        />
        <Badge className="absolute left-4 top-4" variant="warning">
          Нужны реальные данные
        </Badge>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="neutral">{project.type}</Badge>
          {project.isDemo ? <Badge variant="warning">Пример оформления кейса</Badge> : null}
        </div>
        <h3 className="mt-4 text-2xl font-semibold leading-tight">{project.title}</h3>
        <dl className="mt-5 grid gap-3 text-sm leading-6 sm:grid-cols-2">
          <ProjectFact label="Площадь" value={project.area} />
          <ProjectFact label="Срок" value={project.duration} />
          <ProjectFact label="Бюджет" value={project.budgetRange} wide />
        </dl>
        <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {projectTags(project).map((tag) => (
            <span
              className="rounded-full border border-border bg-background px-3 py-1 text-sm leading-6 text-muted"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <details className="mt-6 rounded-md border border-border bg-background p-4">
          <summary className="flex min-h-11 cursor-pointer items-center text-sm font-semibold text-primary outline-offset-4 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring">
            Смотреть детали
          </summary>
          <div className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <p>
              <span className="font-semibold text-foreground">Состав:</span>{" "}
              {project.scope.join(", ")}.
            </p>
            <p>
              <span className="font-semibold text-foreground">Результат:</span> {project.result}
            </p>
            <p>
              Это демонстрационное описание. Для публикации нужны реальные фото, сроки, состав
              работ, бюджетный диапазон и разрешение владельца объекта.
            </p>
          </div>
        </details>
      </div>
    </article>
  );
}

function ProjectFact({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div
      className={cn("rounded-md border border-border bg-background p-3", wide && "sm:col-span-2")}
    >
      <dt className="text-muted">{label}</dt>
      <dd className="mt-1 font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function CaseMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <dt className="text-sm leading-6 text-muted">{label}</dt>
      <dd className="mt-1 font-semibold leading-6 text-foreground">{value}</dd>
    </div>
  );
}

function CaseText({ text, title }: { text: string; title: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
