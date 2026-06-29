export type NavItem = {
  label: string;
  href: string;
};

export type Messenger = {
  label: string;
  href: string;
  handle: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  audience: string;
  includes: string[];
  estimatedTime: string;
  priceFrom: string;
  iconName: string;
  route: string;
  cta: string;
  isPlaceholderPrice: boolean;
};

export type ServicePage = {
  serviceSlug: string;
  route: string;
  heroTitle: string;
  heroDescription: string;
  problems: string[];
  approach: string[];
  deliverables: string[];
  faqRefs: string[];
};

export type Benefit = {
  title: string;
  description: string;
  iconName: string;
};

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  duration: string;
  clientAction: string;
  companyAction: string;
  isPlaceholderDuration: boolean;
};

export type PortfolioProject = {
  title: string;
  slug: string;
  type: string;
  area: string;
  duration: string;
  budgetRange: string;
  location: string;
  description: string;
  scope: string[];
  result: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  galleryAlt: string[];
  isDemo: boolean;
};

export type PricingPackage = {
  name: string;
  slug: string;
  priceFrom: string;
  unit: "м²";
  description: string;
  includes: string[];
  notIncluded: string[];
  bestFor: string;
  timeline: string;
  cta: string;
  isPlaceholderPrice: boolean;
};

export type Testimonial = {
  name: string;
  projectType: string;
  area: string;
  tag: "квартира" | "дом" | "дизайн-проект";
  text: string;
  rating: number;
  date: string;
  isDemo: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  slug: string;
  items: FaqItem[];
};

export type Stat = {
  value: string;
  label: string;
  description: string;
  isPlaceholder: boolean;
};

export type SeoPage = {
  route: string;
  title: string;
  description: string;
  keywords: string[];
};

export type LegalPlaceholder = {
  route: string;
  title: string;
  status: "needs-owner-review";
  notes: string[];
};

export type LeadFormOption = {
  name: string;
  label: string;
  options: string[];
};

export const siteConfig = {
  name: "Ремонт под ключ",
  tagline: "Ремонт квартир и домов с понятной сметой, сроками и контролем работ",
  description:
    "Сайт для компании ремонта под ключ: услуги, процесс, ориентиры по стоимости, портфолио и заявки на расчёт.",
  city: "Город уточняется",
  serviceArea: "Город и область уточняются владельцем бизнеса",
  phone: "+7 (000) 000-00-00",
  email: "hello@example.com",
  messengers: [
    {
      label: "Telegram",
      href: "/contacts#contact-form",
      handle: "подключить перед запуском",
    },
    {
      label: "WhatsApp",
      href: "/contacts#contact-form",
      handle: "подключить перед запуском",
    },
  ] satisfies Messenger[],
  address: "Адрес офиса или шоурума уточняется",
  workingHours: "Пн-Сб 10:00-19:00, по предварительной записи",
  legalName: "ООО «Название компании уточняется»",
  inn: "ИНН уточняется",
  ogrn: "ОГРН уточняется",
  isPlaceholder: true,
} as const;

export const navigation = {
  main: [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Портфолио", href: "/portfolio" },
    { label: "Цены", href: "/pricing" },
    { label: "Этапы", href: "/process" },
    { label: "О компании", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Контакты", href: "/contacts" },
  ] satisfies NavItem[],
  footer: {
    services: [
      { label: "Ремонт квартир", href: "/services/apartment-renovation" },
      { label: "Ремонт домов", href: "/services/house-renovation" },
      { label: "Косметический ремонт", href: "/services/cosmetic-renovation" },
      { label: "Капитальный ремонт", href: "/services/capital-renovation" },
      { label: "Дизайн-проект", href: "/services/design-project" },
    ] satisfies NavItem[],
    legal: [
      { label: "Политика конфиденциальности", href: "/privacy" },
      { label: "Условия использования", href: "/terms" },
    ] satisfies NavItem[],
    contacts: [
      { label: "Контакты", href: "/contacts" },
      { label: "Вопросы и ответы", href: "/faq" },
    ] satisfies NavItem[],
    cta: { label: "Заказать расчёт", href: "/contacts" } satisfies NavItem,
  },
} as const;

export const contacts = {
  phone: siteConfig.phone,
  email: siteConfig.email,
  messengers: siteConfig.messengers,
  address: siteConfig.address,
  workingHours: siteConfig.workingHours,
  mapNote: "Карта будет подключена после подтверждения публичного адреса.",
  isPlaceholder: true,
} as const;

export const services: Service[] = [
  {
    slug: "apartment-renovation",
    title: "Ремонт квартир под ключ",
    shortTitle: "Квартиры",
    description:
      "Комплексный ремонт квартиры от замера и сметы до чистовой отделки, уборки и передачи результата.",
    audience: "Собственники квартир в новостройках и вторичном жилье.",
    includes: [
      "замер и консультация",
      "смета по этапам",
      "черновые работы",
      "чистовая отделка",
      "контроль качества",
    ],
    estimatedTime: "от 2 до 5 месяцев, зависит от площади и состава работ",
    priceFrom: "от 18 000 ₽",
    iconName: "Home",
    route: "/services/apartment-renovation",
    cta: "Рассчитать ремонт квартиры",
    isPlaceholderPrice: true,
  },
  {
    slug: "house-renovation",
    title: "Ремонт домов",
    shortTitle: "Дома",
    description:
      "Отделка и ремонт частных домов с учётом инженерии, сезонности, площади и особенностей эксплуатации.",
    audience: "Владельцы частных домов, таунхаусов и коттеджей.",
    includes: [
      "обследование объекта",
      "план работ",
      "инженерные узлы",
      "отделка помещений",
      "координация подрядчиков",
    ],
    estimatedTime: "от 3 до 8 месяцев",
    priceFrom: "от 20 000 ₽",
    iconName: "House",
    route: "/services/house-renovation",
    cta: "Обсудить ремонт дома",
    isPlaceholderPrice: true,
  },
  {
    slug: "cosmetic-renovation",
    title: "Косметический ремонт",
    shortTitle: "Косметический",
    description:
      "Обновление отделки без полного демонтажа: стены, потолки, напольные покрытия, локальные работы.",
    audience: "Клиенты, которым нужно быстро освежить квартиру или отдельные помещения.",
    includes: [
      "локальный демонтаж",
      "подготовка поверхностей",
      "покраска или обои",
      "напольные покрытия",
      "мелкие доработки",
    ],
    estimatedTime: "от 2 до 6 недель",
    priceFrom: "от 7 000 ₽",
    iconName: "PaintRoller",
    route: "/services/cosmetic-renovation",
    cta: "Оценить косметический ремонт",
    isPlaceholderPrice: true,
  },
  {
    slug: "capital-renovation",
    title: "Капитальный ремонт",
    shortTitle: "Капитальный",
    description:
      "Глубокий ремонт с демонтажом, выравниванием, инженерными работами и полной заменой отделки.",
    audience: "Семьи и собственники, которым нужен ремонт вторичного жилья или сложного объекта.",
    includes: [
      "демонтаж",
      "выравнивание стен и пола",
      "электрика и сантехника",
      "черновая отделка",
      "чистовая отделка",
    ],
    estimatedTime: "от 3 до 6 месяцев",
    priceFrom: "от 22 000 ₽",
    iconName: "HardHat",
    route: "/services/capital-renovation",
    cta: "Рассчитать капитальный ремонт",
    isPlaceholderPrice: true,
  },
  {
    slug: "design-project",
    title: "Дизайн-проект",
    shortTitle: "Дизайн",
    description:
      "Планировочное и визуальное решение с комплектом чертежей, чтобы ремонт был понятен до старта работ.",
    audience: "Клиенты, которым важны планировка, стиль, эргономика и точность сметы.",
    includes: [
      "обмерный план",
      "планировочные решения",
      "визуальная концепция",
      "рабочие чертежи",
      "спецификация материалов",
    ],
    estimatedTime: "от 3 до 8 недель",
    priceFrom: "от 2 500 ₽",
    iconName: "Ruler",
    route: "/services/design-project",
    cta: "Обсудить дизайн-проект",
    isPlaceholderPrice: true,
  },
  {
    slug: "rough-finishing",
    title: "Черновая отделка",
    shortTitle: "Черновая",
    description:
      "Подготовка объекта к чистовой отделке: геометрия, стяжка, штукатурка, инженерные трассы.",
    audience: "Собственники новостроек и объектов после демонтажа.",
    includes: ["стяжка", "штукатурка", "перегородки", "электрика", "сантехническая разводка"],
    estimatedTime: "от 4 до 10 недель",
    priceFrom: "от 10 000 ₽",
    iconName: "Construction",
    route: "/services/rough-finishing",
    cta: "Запросить черновые работы",
    isPlaceholderPrice: true,
  },
  {
    slug: "fine-finishing",
    title: "Чистовая отделка",
    shortTitle: "Чистовая",
    description:
      "Финальные отделочные работы после подготовленного чернового контура: покрытия, окраска, монтаж.",
    audience: "Клиенты с подготовленным объектом или завершённой черновой стадией.",
    includes: ["покраска", "обои", "плитка", "напольные покрытия", "плинтусы и финальный монтаж"],
    estimatedTime: "от 3 до 8 недель",
    priceFrom: "от 8 000 ₽",
    iconName: "Paintbrush",
    route: "/services/fine-finishing",
    cta: "Оценить чистовую отделку",
    isPlaceholderPrice: true,
  },
  {
    slug: "engineering",
    title: "Инженерные работы",
    shortTitle: "Инженерия",
    description:
      "Электрика, сантехника, вентиляция и слаботочные системы как часть ремонта или отдельный пакет.",
    audience: "Клиенты, которым нужно безопасно спланировать и выполнить инженерные сети.",
    includes: [
      "электрощит",
      "розетки и освещение",
      "водоснабжение",
      "канализация",
      "вентиляционные решения",
    ],
    estimatedTime: "от 2 до 6 недель",
    priceFrom: "по смете",
    iconName: "Cable",
    route: "/services/engineering",
    cta: "Обсудить инженерию",
    isPlaceholderPrice: true,
  },
  {
    slug: "materials",
    title: "Подбор и закупка материалов",
    shortTitle: "Материалы",
    description:
      "Помощь с подбором, расчётом, заказом и поставкой черновых и чистовых материалов под смету.",
    audience: "Клиенты, которым важно не переплатить и не сорвать график из-за поставок.",
    includes: [
      "подбор аналогов",
      "расчёт объёмов",
      "смета закупки",
      "логистика",
      "контроль поставок",
    ],
    estimatedTime: "параллельно с ремонтом",
    priceFrom: "по договорённости",
    iconName: "PackageCheck",
    route: "/services/materials",
    cta: "Подобрать материалы",
    isPlaceholderPrice: true,
  },
  {
    slug: "author-supervision",
    title: "Авторский надзор",
    shortTitle: "Надзор",
    description:
      "Контроль соответствия ремонта дизайн-проекту, материалам и согласованным решениям.",
    audience: "Клиенты с дизайн-проектом, которым нужен регулярный контроль реализации.",
    includes: [
      "выезды на объект",
      "проверка решений",
      "корректировки",
      "коммуникация с бригадой",
      "отчёты",
    ],
    estimatedTime: "на период ремонта",
    priceFrom: "по договорённости",
    iconName: "ClipboardCheck",
    route: "/services/author-supervision",
    cta: "Запросить надзор",
    isPlaceholderPrice: true,
  },
];

export const servicePages: ServicePage[] = [
  {
    serviceSlug: "apartment-renovation",
    route: "/services/apartment-renovation",
    heroTitle: "Ремонт квартиры под ключ без хаоса в смете и сроках",
    heroDescription:
      "Собираем работы, материалы, контроль и коммуникацию в один понятный процесс для собственника квартиры.",
    problems: [
      "непонятная итоговая стоимость",
      "разные подрядчики без единой ответственности",
      "сорванные сроки",
    ],
    approach: ["фиксируем этапы", "показываем смету до старта", "ведём объект через прораба"],
    deliverables: ["этапная смета", "график работ", "фотоотчёты", "акт сдачи"],
    faqRefs: ["pricing", "process", "contract-payment"],
  },
  {
    serviceSlug: "house-renovation",
    route: "/services/house-renovation",
    heroTitle: "Ремонт дома с учётом инженерии, площади и сезонности",
    heroDescription:
      "Планируем ремонт дома как систему: коммуникации, отделка, материалы, график и контроль подрядчиков.",
    problems: [
      "много связанных инженерных решений",
      "сложно оценить сроки",
      "нужна координация нескольких видов работ",
    ],
    approach: ["обследуем объект", "выделяем критические узлы", "согласуем этапность и поставки"],
    deliverables: ["план работ", "смета по зонам", "контроль качества", "гарантийные документы"],
    faqRefs: ["materials", "timeline", "warranty"],
  },
  {
    serviceSlug: "cosmetic-renovation",
    route: "/services/cosmetic-renovation",
    heroTitle: "Косметический ремонт для аккуратного обновления пространства",
    heroDescription:
      "Помогаем быстро обновить отделку без лишнего демонтажа, если объект не требует капитального вмешательства.",
    problems: [
      "нужно обновить интерьер быстро",
      "важно не затягивать бытовой ремонт",
      "объём работ трудно оценить на глаз",
    ],
    approach: [
      "проверяем состояние поверхностей",
      "отделяем обязательное от желательного",
      "планируем короткий цикл работ",
    ],
    deliverables: ["перечень работ", "сроки по помещениям", "смета материалов", "финальная уборка"],
    faqRefs: ["pricing", "timeline", "materials"],
  },
  {
    serviceSlug: "capital-renovation",
    route: "/services/capital-renovation",
    heroTitle: "Капитальный ремонт с демонтажом, инженерией и полной отделкой",
    heroDescription:
      "Подходит для вторичного жилья, сложных объектов и случаев, когда нужно обновить всё до базового контура.",
    problems: [
      "скрытые дефекты",
      "много пыльных и шумных работ",
      "высокий риск роста сметы без диагностики",
    ],
    approach: [
      "проводим первичную диагностику",
      "закладываем этапы контроля",
      "согласуем допущения до договора",
    ],
    deliverables: [
      "детализированная смета",
      "график демонтажа и отделки",
      "инженерные решения",
      "акты этапов",
    ],
    faqRefs: ["contract-payment", "process", "warranty"],
  },
  {
    serviceSlug: "design-project",
    route: "/services/design-project",
    heroTitle: "Дизайн-проект, который помогает строить, а не только смотреть",
    heroDescription:
      "Создаём планировочные, визуальные и рабочие материалы, чтобы ремонт был понятен для клиента и команды.",
    problems: [
      "нет единого решения по планировке",
      "сложно выбрать материалы",
      "ремонт стартует без точных чертежей",
    ],
    approach: [
      "изучаем сценарии жизни",
      "делаем планировочные варианты",
      "готовим рабочий комплект",
    ],
    deliverables: [
      "обмерный план",
      "планировка",
      "визуальная концепция",
      "чертежи",
      "спецификация",
    ],
    faqRefs: ["design", "materials", "contract-payment"],
  },
];

export const benefits: Benefit[] = [
  {
    title: "Фиксируем смету до старта",
    description:
      "Разделяем обязательные работы, опции и допущения, чтобы клиент понимал базовую стоимость.",
    iconName: "FileCheck2",
  },
  {
    title: "Работаем по договору",
    description:
      "Фиксируем состав работ, ответственность сторон, порядок оплаты и гарантийные условия.",
    iconName: "ScrollText",
  },
  {
    title: "Поэтапная оплата",
    description: "Оплата привязана к этапам, а не к неясному проценту готовности.",
    iconName: "WalletCards",
  },
  {
    title: "Фотоотчёты",
    description:
      "Регулярно показываем состояние объекта, если клиент не может часто приезжать лично.",
    iconName: "Camera",
  },
  {
    title: "Прораб на связи",
    description:
      "У объекта есть ответственный человек, который координирует вопросы и подрядчиков.",
    iconName: "MessageCircle",
  },
  {
    title: "Гарантия на работы",
    description: "Гарантийные условия нужно подтвердить владельцу бизнеса перед публикацией.",
    iconName: "ShieldCheck",
  },
  {
    title: "Помогаем с материалами",
    description:
      "Подсказываем, где можно сэкономить без потери качества и где экономить рискованно.",
    iconName: "PackageCheck",
  },
  {
    title: "Контролируем сроки",
    description: "Собираем работы в график и заранее отмечаем этапы, которые зависят от поставок.",
    iconName: "CalendarCheck",
  },
  {
    title: "Аккуратность на объекте",
    description: "Организация хранения, выноса мусора и чистовых зон снижает риск повреждений.",
    iconName: "Sparkles",
  },
  {
    title: "Прозрачный процесс",
    description:
      "Клиент понимает, что происходит сейчас, что дальше и какие решения нужны от него.",
    iconName: "ListChecks",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Заявка",
    description: "Клиент оставляет контакты и кратко описывает объект.",
    duration: "в день обращения",
    clientAction: "Указать тип объекта, площадь, желаемый формат ремонта и удобный способ связи.",
    companyAction: "Связаться, уточнить задачу и назначить консультацию.",
    isPlaceholderDuration: true,
  },
  {
    number: 2,
    title: "Консультация",
    description: "Обсуждаем задачи, ограничения, сроки и ожидаемый уровень отделки.",
    duration: "30-60 минут",
    clientAction: "Рассказать о планах, бюджете и сомнениях.",
    companyAction: "Пояснить варианты работ, риски и примерный порядок процесса.",
    isPlaceholderDuration: true,
  },
  {
    number: 3,
    title: "Замер",
    description: "Собираем исходные данные по объекту для расчёта и планирования.",
    duration: "1-2 часа",
    clientAction: "Обеспечить доступ на объект и передать планы, если они есть.",
    companyAction: "Снять размеры, проверить состояние объекта и отметить важные узлы.",
    isPlaceholderDuration: true,
  },
  {
    number: 4,
    title: "Смета",
    description: "Готовим ориентир по стоимости и разделяем работы на понятные блоки.",
    duration: "2-5 рабочих дней",
    clientAction: "Проверить состав работ и уточнить приоритеты.",
    companyAction: "Подготовить расчёт, обозначить допущения и возможные вилки.",
    isPlaceholderDuration: true,
  },
  {
    number: 5,
    title: "Договор",
    description: "Фиксируем условия, этапы, оплату и ответственность сторон.",
    duration: "1-3 рабочих дня",
    clientAction: "Согласовать условия и подписать документы.",
    companyAction: "Подготовить договор, график и приложения.",
    isPlaceholderDuration: true,
  },
  {
    number: 6,
    title: "График работ",
    description:
      "Разбиваем ремонт на этапы, контрольные точки и решения, которые нужны от клиента.",
    duration: "1-3 рабочих дня",
    clientAction: "Согласовать порядок работ, доступ на объект и важные даты.",
    companyAction: "Подготовить график этапов, поставок, проверок и промежуточной приёмки.",
    isPlaceholderDuration: true,
  },
  {
    number: 7,
    title: "Закупка материалов",
    description: "Уточняем материалы, поставки, аналоги и решения по чистовой отделке.",
    duration: "1-3 недели",
    clientAction: "Выбрать материалы или согласовать предложенные варианты.",
    companyAction: "Посчитать объёмы, помочь с закупкой и учесть сроки поставок.",
    isPlaceholderDuration: true,
  },
  {
    number: 8,
    title: "Черновые работы",
    description: "Выполняем подготовку объекта, демонтаж, выравнивание и базовые слои.",
    duration: "3-8 недель",
    clientAction: "Согласовывать ключевые решения по мере необходимости.",
    companyAction: "Организовать работы, контролировать геометрию и фиксировать скрытые этапы.",
    isPlaceholderDuration: true,
  },
  {
    number: 9,
    title: "Инженерные системы",
    description: "Выполняем электрику, сантехнику, вентиляцию и другие инженерные узлы.",
    duration: "2-6 недель",
    clientAction: "Подтвердить расположение выводов, оборудования и сценариев использования.",
    companyAction:
      "Смонтировать инженерные системы, проверить узлы и зафиксировать скрытые работы.",
    isPlaceholderDuration: true,
  },
  {
    number: 10,
    title: "Чистовая отделка",
    description: "Доводим помещения до финального вида: покрытия, монтаж, детали.",
    duration: "3-8 недель",
    clientAction: "Подтвердить чистовые материалы, цвета и финальные решения.",
    companyAction: "Выполнить отделку, монтаж и локальные доработки.",
    isPlaceholderDuration: true,
  },
  {
    number: 11,
    title: "Контроль качества",
    description: "Проверяем результат перед передачей объекта.",
    duration: "1-5 рабочих дней",
    clientAction: "Принять участие в осмотре или согласовать замечания дистанционно.",
    companyAction: "Проверить узлы, составить список доработок и закрыть замечания.",
    isPlaceholderDuration: true,
  },
  {
    number: 12,
    title: "Сдача объекта",
    description: "Передаём результат, документы и рекомендации по эксплуатации.",
    duration: "1 день",
    clientAction: "Принять работы и подписать акт.",
    companyAction: "Передать объект, документы, контакты и рекомендации.",
    isPlaceholderDuration: true,
  },
  {
    number: 13,
    title: "Гарантия",
    description: "Остаёмся на связи после сдачи объекта по гарантийным вопросам.",
    duration: "срок гарантии уточняется",
    clientAction: "Сообщать о вопросах по эксплуатации или гарантийным случаям.",
    companyAction:
      "Рассматривать обращения и организовывать гарантийные выезды по условиям договора.",
    isPlaceholderDuration: true,
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Квартира 42 м²",
    slug: "apartment-42",
    type: "Квартира",
    area: "42 м²",
    duration: "примерно 10 недель",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс компактной квартиры с ремонтом под ключ.",
    scope: ["планирование этапов", "черновые работы", "чистовая отделка", "финальная сдача"],
    result: "Демонстрационное описание результата. Нужно заменить реальным объектом.",
    image: "/images/placeholders/portfolio-kitchen-living-placeholder.svg",
    imageAlt: "Схематичная заглушка будущего фото кухни-гостиной в демонстрационном кейсе",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Квартира 68 м²",
    slug: "apartment-68",
    type: "Квартира",
    area: "68 м²",
    duration: "примерно 14 недель",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс семейной квартиры с несколькими мокрыми зонами.",
    scope: ["демонтаж", "электрика", "сантехника", "отделка комнат"],
    result: "Демонстрационный результат без статуса реального проекта.",
    image: "/images/placeholders/portfolio-bathroom-placeholder.svg",
    imageAlt: "Схематичная заглушка будущего фото ванной комнаты в демонстрационном кейсе",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Евро-двушка",
    slug: "euro-two-room",
    type: "Новостройка",
    area: "54 м²",
    duration: "примерно 12 недель",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс квартиры с кухней-гостиной и отдельной спальней.",
    scope: ["черновая отделка", "чистовая отделка", "подбор материалов"],
    result: "Демо-описание для структуры портфолио.",
    image: "/images/placeholders/portfolio-kitchen-living-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото квартиры с кухней-гостиной",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Ванная комната",
    slug: "bathroom-renovation",
    type: "Мокрая зона",
    area: "5 м²",
    duration: "примерно 4 недели",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс ремонта ванной комнаты с заменой инженерии.",
    scope: ["демонтаж", "гидроизоляция", "плитка", "сантехника"],
    result: "Демо-описание результата, не реальная публикация.",
    image: "/images/placeholders/portfolio-bathroom-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото ремонта ванной комнаты",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Частный дом",
    slug: "private-house",
    type: "Дом",
    area: "126 м²",
    duration: "примерно 24 недели",
    budgetRange: "примерный диапазон уточняется",
    location: "Область уточняется",
    description: "Демонстрационный кейс отделки частного дома с инженерными работами.",
    scope: ["обследование", "инженерия", "отделка", "контроль подрядчиков"],
    result: "Демо-описание, требующее замены на реальный кейс.",
    image: "/images/placeholders/portfolio-house-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото ремонта частного дома",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Кухня-гостиная",
    slug: "kitchen-living-room",
    type: "Помещение",
    area: "24 м²",
    duration: "примерно 6 недель",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс объединённой зоны кухни и отдыха.",
    scope: ["электрика", "стены", "пол", "монтаж чистовых элементов"],
    result: "Демо-описание для будущей карточки проекта.",
    image: "/images/placeholders/portfolio-kitchen-living-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото объединённой кухни-гостиной",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Спальня",
    slug: "bedroom-renovation",
    type: "Комната",
    area: "16 м²",
    duration: "примерно 3 недели",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс спокойной чистовой отделки спальни.",
    scope: ["подготовка стен", "покраска", "напольное покрытие", "свет"],
    result: "Демо-описание без претензии на реальный отзыв или кейс.",
    image: "/images/placeholders/portfolio-bedroom-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото спальни после отделки",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Прихожая",
    slug: "hallway-renovation",
    type: "Зона входа",
    area: "9 м²",
    duration: "примерно 2 недели",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс практичной отделки входной зоны.",
    scope: ["износостойкие материалы", "освещение", "покрытия", "финальный монтаж"],
    result: "Демо-описание, которое должно быть заменено реальным объектом.",
    image: "/images/placeholders/portfolio-hallway-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото прихожей после ремонта",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
  {
    title: "Косметический ремонт",
    slug: "cosmetic-refresh",
    type: "Квартира",
    area: "58 м²",
    duration: "примерно 5 недель",
    budgetRange: "примерный диапазон уточняется",
    location: "Город уточняется",
    description: "Демонстрационный кейс обновления отделки без капитального демонтажа.",
    scope: ["локальные работы", "обои или покраска", "напольные покрытия", "мелкие доработки"],
    result: "Демо-описание для структуры портфолио.",
    image: "/images/placeholders/portfolio-finish-detail-placeholder.svg",
    imageAlt: "Схематичный плейсхолдер будущего фото детали чистовой отделки",
    gallery: [
      "/images/placeholders/demo-project-detail-a.svg",
      "/images/placeholders/demo-project-detail-b.svg",
    ],
    galleryAlt: [
      "Нейтральная заглушка детали будущей галереи демонстрационного кейса",
      "Нейтральная заглушка второго изображения будущей галереи демонстрационного кейса",
    ],
    isDemo: true,
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    name: "Косметический",
    slug: "cosmetic",
    priceFrom: "от 7 000 ₽",
    unit: "м²",
    description: "Обновление видимых поверхностей без полного демонтажа и сложной инженерии.",
    includes: [
      "подготовка поверхностей",
      "покраска или обои",
      "напольные покрытия",
      "локальный монтаж",
    ],
    notIncluded: ["капитальная инженерия", "перепланировка", "сложный демонтаж"],
    bestFor: "Квартиры, которые нужно быстро освежить перед проживанием, сдачей или продажей.",
    timeline: "от 2 до 6 недель",
    cta: "Оценить косметический ремонт",
    isPlaceholderPrice: true,
  },
  {
    name: "Капитальный",
    slug: "capital",
    priceFrom: "от 22 000 ₽",
    unit: "м²",
    description: "Глубокий ремонт с демонтажом, инженерией, черновыми и чистовыми работами.",
    includes: [
      "демонтаж",
      "электрика и сантехника",
      "выравнивание",
      "черновая отделка",
      "чистовая отделка",
    ],
    notIncluded: ["дизайн-проект", "мебель", "техника", "авторский надзор"],
    bestFor: "Вторичное жильё или объекты, где нужно обновить базовые системы.",
    timeline: "от 3 до 6 месяцев",
    cta: "Рассчитать капитальный ремонт",
    isPlaceholderPrice: true,
  },
  {
    name: "Под ключ",
    slug: "turnkey",
    priceFrom: "от 18 000 ₽",
    unit: "м²",
    description:
      "Комплексный ремонт с управлением этапами, материалами, качеством и сдачей объекта.",
    includes: [
      "смета",
      "график",
      "черновые работы",
      "чистовая отделка",
      "фотоотчёты",
      "сдача объекта",
    ],
    notIncluded: ["мебель под заказ", "бытовая техника", "нестандартные авторские изделия"],
    bestFor:
      "Клиенты, которым нужен один ответственный подрядчик вместо самостоятельной координации.",
    timeline: "от 2 до 5 месяцев",
    cta: "Получить расчёт под ключ",
    isPlaceholderPrice: true,
  },
  {
    name: "Дизайнерский",
    slug: "designer",
    priceFrom: "от 28 000 ₽",
    unit: "м²",
    description: "Ремонт с дизайн-проектом, подбором материалов и повышенным вниманием к деталям.",
    includes: [
      "дизайн-проект",
      "рабочие чертежи",
      "подбор материалов",
      "чистовая отделка",
      "контроль соответствия",
    ],
    notIncluded: ["дорогие чистовые материалы", "мебель", "декор", "индивидуальные изделия"],
    bestFor: "Клиенты, которым важны планировка, визуальная цельность и точное исполнение решений.",
    timeline: "от 4 до 8 месяцев",
    cta: "Обсудить дизайнерский ремонт",
    isPlaceholderPrice: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Клиент A",
    projectType: "Ремонт квартиры под ключ",
    area: "62 м²",
    tag: "квартира",
    text: "Демонстрационный отзыв: здесь будет реальный текст клиента о понятной смете, связи с прорабом и аккуратном ведении работ.",
    rating: 5,
    date: "дата уточняется",
    isDemo: true,
  },
  {
    name: "Клиент B",
    projectType: "Капитальный ремонт",
    area: "78 м²",
    tag: "квартира",
    text: "Демо-отзыв показывает будущую структуру карточки: текст нужно заменить подтверждённой цитатой клиента с разрешением на публикацию.",
    rating: 5,
    date: "дата уточняется",
    isDemo: true,
  },
  {
    name: "Клиент C",
    projectType: "Дизайн-проект",
    area: "54 м²",
    tag: "дизайн-проект",
    text: "Демонстрационный текст для будущего реального отзыва о планировке, подборе материалов и подготовке ремонта.",
    rating: 5,
    date: "дата уточняется",
    isDemo: true,
  },
  {
    name: "Клиент D",
    projectType: "Ремонт дома",
    area: "140 м²",
    tag: "дом",
    text: "Демо-отзыв: в этой карточке позже должен быть настоящий опыт клиента по срокам, материалам, инженерии и коммуникации.",
    rating: 5,
    date: "дата уточняется",
    isDemo: true,
  },
  {
    name: "Клиент E",
    projectType: "Косметический ремонт",
    area: "38 м²",
    tag: "квартира",
    text: "Демонстрационный отзыв для проверки сетки и чтения на мобильных экранах. Реальный текст нужен от клиента и с источником.",
    rating: 5,
    date: "дата уточняется",
    isDemo: true,
  },
  {
    name: "Клиент F",
    projectType: "Проект и ремонт под ключ",
    area: "96 м²",
    tag: "дизайн-проект",
    text: "Демо-отзыв о спокойном процессе: карточка показывает поля, но не является настоящей клиентской рекомендацией.",
    rating: 5,
    date: "дата уточняется",
    isDemo: true,
  },
];

export const faqGroups: FaqGroup[] = [
  {
    title: "Стоимость",
    slug: "pricing",
    items: [
      {
        question: "Почему нельзя назвать точную стоимость без замера?",
        answer:
          "Стоимость зависит от площади, состояния объекта, инженерии, состава работ и материалов. До замера можно дать только ориентир, а точную смету нужно подтверждать после осмотра и уточнения задач.",
      },
      {
        question: "Что входит в смету?",
        answer:
          "В смете нужно разделить работы, материалы, допущения, этапы и позиции, которые требуют уточнения. Финальный формат сметы должен подтвердить владелец бизнеса.",
      },
      {
        question: "Можно ли уложиться в заранее заданный бюджет?",
        answer:
          "Да, если заранее определить приоритеты, состав обязательных работ и допустимые замены материалов. Обещать точное попадание в бюджет без замера нельзя.",
      },
      {
        question: "Как согласуются дополнительные работы?",
        answer:
          "Дополнительные работы должны согласовываться письменно до выполнения: с причиной, стоимостью и влиянием на сроки.",
      },
      {
        question: "Материалы входят в стоимость?",
        answer:
          "Это зависит от выбранной модели. Нужно явно разделить стоимость работ, черновых материалов, чистовых материалов, доставки и возможной закупки подрядчиком.",
      },
      {
        question: "Цена на сайте является офертой?",
        answer:
          "Нет. Все цены и диапазоны сейчас являются ориентировочными заглушками и не считаются публичной офертой.",
      },
    ],
  },
  {
    title: "Сроки",
    slug: "timeline",
    items: [
      {
        question: "Сколько длится ремонт квартиры?",
        answer:
          "Ориентиры зависят от площади и состава работ. Точные сроки нужно подтверждать после замера и планирования.",
      },
      {
        question: "Что влияет на сроки?",
        answer:
          "На сроки влияют площадь, состояние объекта, инженерные работы, поставки материалов, согласования, скрытые дефекты и изменения решений.",
      },
      {
        question: "Можно ли ускорить ремонт?",
        answer:
          "Иногда можно за счёт раннего выбора материалов, чёткого проекта и своевременных согласований.",
      },
      {
        question: "Как вы контролируете график?",
        answer:
          "График должен разбиваться на этапы и контрольные точки. Реальный формат отчётов и ответственного за график нужно подтвердить владельцем бизнеса.",
      },
      {
        question: "Что происходит при задержке материалов?",
        answer:
          "Нужно заранее видеть критичные позиции, согласовать замену или корректировку графика и не обещать сроки, которые зависят от неподтверждённых поставок.",
      },
      {
        question: "Когда лучше начинать закупку материалов?",
        answer:
          "Критичные позиции лучше планировать до старта или на ранних этапах, чтобы не останавливать работы.",
      },
      {
        question: "Можно ли жить в квартире во время ремонта?",
        answer:
          "При капитальном ремонте это обычно неудобно и часто небезопасно. Решение зависит от объёма работ.",
      },
    ],
  },
  {
    title: "Договор и оплата",
    slug: "contract-payment",
    items: [
      {
        question: "Работаете ли вы по договору?",
        answer:
          "Да, это обязательное правило контентной модели. Реальные реквизиты и формулировки должен подтвердить владелец бизнеса.",
      },
      {
        question: "Что должно быть в договоре?",
        answer:
          "Состав работ, этапность, стоимость, порядок оплаты, ответственность сторон, гарантийные условия и приложения.",
      },
      {
        question: "Как проходит оплата?",
        answer:
          "Модель предполагает поэтапную оплату, но точный порядок, возможную предоплату и способы оплаты должен подтвердить владелец бизнеса.",
      },
      {
        question: "Можно ли платить по этапам?",
        answer:
          "Да, если этапность закреплена в смете и договоре. Проценты, суммы и условия закрытия этапов нельзя публиковать без подтверждения.",
      },
      {
        question: "Как фиксируются изменения?",
        answer:
          "Изменения нужно оформлять отдельным согласованием, приложением или актом с влиянием на стоимость и сроки.",
      },
      {
        question: "Какие документы выдаются в конце?",
        answer:
          "Минимально нужны акт сдачи и гарантийные условия. Полный список документов подтверждается владельцем бизнеса и юристом.",
      },
    ],
  },
  {
    title: "Материалы",
    slug: "materials",
    items: [
      {
        question: "Кто закупает материалы?",
        answer:
          "Возможны разные модели: закупка клиентом, закупка подрядчиком или смешанный формат. Реальные условия, наценки и ответственность за доставку нужно подтвердить.",
      },
      {
        question: "Можно ли купить материалы самостоятельно?",
        answer:
          "Да, если материалы подходят по характеристикам и не мешают технологии работ. Условия приёмки и ответственности нужно закрепить заранее.",
      },
      {
        question: "Помогаете ли с подбором?",
        answer:
          "Контентная модель предполагает помощь с подбором и проверкой совместимости, но реальный объём услуги должен подтвердить владелец бизнеса.",
      },
      {
        question: "Как избежать лишних закупок?",
        answer:
          "Нужны расчёт по смете, проверка остатков и согласование количества до заказа. Запасы и возвраты зависят от конкретных материалов и поставщиков.",
      },
      {
        question: "Что делать, если материал сняли с продажи?",
        answer:
          "Подбирается аналог с сопоставимыми характеристиками, ценой и сроком поставки. Замену нужно согласовать до покупки и монтажа.",
      },
      {
        question: "Черновые и чистовые материалы считаются отдельно?",
        answer: "Рекомендуется разделять их в смете, чтобы клиент понимал структуру расходов.",
      },
    ],
  },
  {
    title: "Процесс ремонта",
    slug: "process",
    items: [
      {
        question: "Можно ли жить в квартире во время ремонта?",
        answer:
          "При капитальном ремонте это обычно неудобно и часто небезопасно. При косметическом ремонте решение зависит от объёма работ и порядка помещений.",
      },
      {
        question: "Кто контролирует мастеров?",
        answer:
          "Модель предполагает ответственного прораба или менеджера, но реальные роли, полномочия и частоту проверок нужно подтвердить.",
      },
      {
        question: "Как часто будут отчёты?",
        answer:
          "Фотоотчёты и сообщения по этапам указаны как будущий стандарт. Формат, канал и частоту отчётов нужно согласовать с владельцем бизнеса.",
      },
      {
        question: "Как принимаются этапы?",
        answer: "Через осмотр, фиксацию замечаний и закрывающие документы по этапу или объекту.",
      },
      {
        question: "Что такое скрытые работы?",
        answer:
          "Это работы, которые потом закрываются отделкой: инженерные трассы, гидроизоляция, основание, крепления и другие узлы. Их важно проверять до закрытия.",
      },
      {
        question: "Что происходит после сдачи?",
        answer: "Клиент получает документы, рекомендации и канал для гарантийных вопросов.",
      },
    ],
  },
  {
    title: "Гарантия",
    slug: "warranty",
    items: [
      {
        question: "Есть ли гарантия на работы?",
        answer:
          "Гарантия предусмотрена в структуре сайта, но срок и условия обязательно нужно подтвердить владельцу бизнеса и закрепить в документах.",
      },
      {
        question: "Что входит в гарантию?",
        answer: "Гарантийные условия зависят от договора, технологии работ и выбранных материалов.",
      },
      {
        question: "Что не входит в гарантию?",
        answer:
          "Исключения нужно описывать аккуратно в юридических документах: эксплуатация, внешние повреждения, вмешательство третьих лиц и материалы с отдельной гарантией производителя.",
      },
      {
        question: "Как обратиться по гарантии?",
        answer:
          "Нужен понятный контактный канал и порядок обращения. Он будет добавлен после подтверждения бизнес-процесса.",
      },
      {
        question: "Сколько действует гарантия?",
        answer:
          "Срок гарантии пока не подтверждён и не должен публиковаться как реальное обещание без подтверждения владельцем бизнеса.",
      },
      {
        question: "Есть ли гарантийный акт?",
        answer: "Формат документов требует подтверждения владельца бизнеса и юриста.",
      },
    ],
  },
  {
    title: "Дизайн-проект",
    slug: "design",
    items: [
      {
        question: "Нужен ли дизайн-проект для ремонта?",
        answer:
          "Он особенно полезен при перепланировке, сложной отделке, подборе материалов и контроле сметы.",
      },
      {
        question: "Что входит в дизайн-проект?",
        answer:
          "В модели указаны обмерный план, планировка, визуальная концепция, рабочие чертежи и спецификация.",
      },
      {
        question: "Можно ли ремонтировать без визуализаций?",
        answer:
          "Можно, если достаточно технического задания и понятных материалов. Это зависит от ожиданий клиента.",
      },
      {
        question: "Кто согласует материалы?",
        answer:
          "Клиент принимает финальные решения, команда помогает с подбором и проверкой совместимости.",
      },
      {
        question: "Дизайн-проект влияет на сроки?",
        answer:
          "Да, он добавляет подготовительный этап, но снижает риск переделок во время ремонта.",
      },
      {
        question: "Можно ли использовать готовый проект?",
        answer: "Да, если он содержит достаточные чертежи и спецификации для работы.",
      },
      {
        question: "Дизайн-проект нужен для расчёта сметы?",
        answer:
          "Для сложного ремонта он помогает точнее определить состав работ, материалы и узлы. Но окончательная смета всё равно требует проверки объекта и решений.",
      },
    ],
  },
  {
    title: "Портфолио и отзывы",
    slug: "portfolio-reviews",
    items: [
      {
        question: "Где посмотреть реальные работы?",
        answer:
          "Раздел портфолио подготовлен, но реальные фото, даты, состав работ и разрешения на публикацию нужно добавить перед публичным запуском.",
      },
      {
        question: "Почему в портфолио пока демонстрационные кейсы?",
        answer:
          "Реальные кейсы нельзя придумывать. До получения фото, данных и разрешений раздел показывает безопасную структуру будущих публикаций.",
      },
      {
        question: "Можно ли связаться с клиентами?",
        answer:
          "Только если конкретный клиент отдельно согласится на такой формат связи. Контакты нельзя передавать или публиковать без разрешения.",
      },
      {
        question: "Как оставить отзыв?",
        answer:
          "После сдачи объекта можно согласовать текст, ссылку, скриншот или видео. Перед публикацией нужно получить разрешение клиента.",
      },
      {
        question: "Можно ли показать фото до и после?",
        answer:
          "Да, если есть реальные фото, права на публикацию и согласие клиента. Плейсхолдеры и AI-изображения нельзя выдавать за реальные работы.",
      },
      {
        question: "Как проверяются отзывы перед публикацией?",
        answer:
          "Нужны источник, дата, разрешение клиента и правило отображения имени или инициалов. Без этого отзыв должен оставаться демонстрационным или не публиковаться.",
      },
    ],
  },
];

export const stats: Stat[] = [
  {
    value: "10",
    label: "направлений услуг",
    description: "Структура услуг подготовлена для будущих страниц.",
    isPlaceholder: true,
  },
  {
    value: "13",
    label: "этапов процесса",
    description: "Процесс описан как управляемая последовательность.",
    isPlaceholder: true,
  },
  {
    value: "8",
    label: "групп FAQ",
    description: "Вопросы сгруппированы по решениям, которые принимает клиент.",
    isPlaceholder: true,
  },
];

export const seoPages: SeoPage[] = [
  {
    route: "/",
    title: "Ремонт квартир и домов под ключ",
    description: "Услуги ремонта под ключ с понятной сметой, этапами работ и заявкой на расчёт.",
    keywords: ["ремонт под ключ", "ремонт квартиры", "ремонт дома", "смета ремонта"],
  },
  {
    route: "/services",
    title: "Услуги ремонта квартир и домов",
    description:
      "Все направления работ: ремонт квартир, домов, косметический, капитальный, дизайн-проект и материалы.",
    keywords: ["услуги ремонта", "ремонт квартир", "капитальный ремонт", "дизайн проект"],
  },
  {
    route: "/services/apartment-renovation",
    title: "Ремонт квартир под ключ — смета, договор, гарантия",
    description:
      "Косметический и капитальный ремонт квартир под ключ: замер, смета, материалы, отделка и гарантия.",
    keywords: ["ремонт квартиры под ключ", "ремонт новостройки", "ремонт вторички"],
  },
  {
    route: "/services/house-renovation",
    title: "Ремонт домов под ключ — инженерия, отделка, гарантия",
    description:
      "Ремонт частных домов: черновые и чистовые работы, инженерные системы, материалы, контроль качества.",
    keywords: ["ремонт дома", "отделка дома", "ремонт коттеджа"],
  },
  {
    route: "/services/cosmetic-renovation",
    title: "Косметический ремонт квартир и домов — быстрое обновление интерьера",
    description:
      "Косметический ремонт: стены, полы, потолки, обои, покраска, подготовка квартиры к продаже или аренде.",
    keywords: ["косметический ремонт", "обновление квартиры", "ремонт комнаты"],
  },
  {
    route: "/services/capital-renovation",
    title: "Капитальный ремонт квартир и домов под ключ",
    description:
      "Капитальный ремонт: демонтаж, инженерия, черновые работы, отделка, контроль скрытых работ и гарантия.",
    keywords: ["капитальный ремонт", "ремонт вторичного жилья", "полный ремонт квартиры"],
  },
  {
    route: "/services/design-project",
    title: "Дизайн-проект для ремонта квартиры и дома",
    description:
      "Планировочные решения, визуализации, рабочие чертежи, подбор материалов и авторский надзор.",
    keywords: ["дизайн проект", "планировка квартиры", "рабочие чертежи"],
  },
  {
    route: "/services/rough-finishing",
    title: "Черновая отделка",
    description:
      "Черновые работы перед чистовой отделкой: стяжка, штукатурка, перегородки и инженерные трассы.",
    keywords: ["черновая отделка", "черновой ремонт", "подготовка квартиры к ремонту"],
  },
  {
    route: "/services/fine-finishing",
    title: "Чистовая отделка",
    description:
      "Финальные отделочные работы: покраска, обои, плитка, напольные покрытия и монтаж.",
    keywords: ["чистовая отделка", "отделочные работы", "финальная отделка"],
  },
  {
    route: "/services/engineering",
    title: "Инженерные работы",
    description: "Электрика, сантехника, вентиляция и слаботочные системы в составе ремонта.",
    keywords: ["инженерные работы", "электрика сантехника ремонт", "инженерия квартиры"],
  },
  {
    route: "/services/materials",
    title: "Подбор и закупка материалов",
    description: "Подбор, расчёт, заказ и контроль поставок черновых и чистовых материалов.",
    keywords: ["подбор материалов", "закупка материалов ремонт", "материалы для ремонта"],
  },
  {
    route: "/services/author-supervision",
    title: "Авторский надзор",
    description:
      "Контроль соответствия ремонта дизайн-проекту, материалам и согласованным решениям.",
    keywords: ["авторский надзор", "контроль ремонта", "сопровождение дизайн проекта"],
  },
  {
    route: "/portfolio",
    title: "Портфолио ремонтов квартир и домов",
    description:
      "Примеры ремонтов квартир и домов: площади, сроки, состав работ и решения для разных объектов.",
    keywords: ["портфолио ремонта", "примеры ремонта", "ремонт до после"],
  },
  {
    route: "/pricing",
    title: "Цены на ремонт квартир и домов — смета и расчёт стоимости",
    description:
      "Ориентировочные цены на косметический, капитальный ремонт и ремонт под ключ. Точная смета после замера.",
    keywords: ["цены на ремонт", "стоимость ремонта", "ремонт цена за метр"],
  },
  {
    route: "/process",
    title: "Этапы ремонта квартир и домов — от замера до сдачи",
    description:
      "Понятный процесс ремонта: консультация, замер, смета, договор, работы, контроль качества и гарантия.",
    keywords: ["этапы ремонта", "процесс ремонта", "как проходит ремонт"],
  },
  {
    route: "/about",
    title: "О компании — ремонт квартир и домов под ключ",
    description:
      "Подход к ремонту: прозрачная смета, контроль качества, договор, гарантия и понятная коммуникация.",
    keywords: ["компания ремонт", "подрядчик ремонт", "ремонтная компания"],
  },
  {
    route: "/reviews",
    title: "Отзывы о ремонте квартир и домов",
    description:
      "Отзывы клиентов о ремонте под ключ, коммуникации, смете, сроках и качестве работ.",
    keywords: ["отзывы ремонт", "ремонт квартир отзывы", "отзывы клиентов"],
  },
  {
    route: "/faq",
    title: "FAQ по ремонту квартир и домов",
    description:
      "Ответы на вопросы о стоимости, сроках, договоре, материалах, гарантии и этапах ремонта.",
    keywords: ["вопросы о ремонте", "сроки ремонта", "смета ремонта"],
  },
  {
    route: "/contacts",
    title: "Контакты компании по ремонту квартир и домов",
    description:
      "Оставьте заявку на ремонт, замер или консультацию. Телефон, эл. почта, мессенджеры и зона обслуживания.",
    keywords: ["контакты ремонт", "заявка на ремонт", "замер квартиры"],
  },
  {
    route: "/privacy",
    title: "Политика конфиденциальности",
    description: "Юридический текст требует проверки владельцем бизнеса и юристом.",
    keywords: ["политика конфиденциальности"],
  },
  {
    route: "/terms",
    title: "Условия использования",
    description:
      "Временные условия использования сайта. Цены и заявки не являются публичной офертой.",
    keywords: ["условия использования", "пользовательское соглашение"],
  },
];

export const legalPlaceholders: LegalPlaceholder[] = [
  {
    route: "/privacy",
    title: "Политика конфиденциальности",
    status: "needs-owner-review",
    notes: [
      "Нужно подтвердить оператора персональных данных.",
      "Нужно указать реальные способы обработки и хранения заявок.",
      "Нужно согласовать использование аналитики, cookie и CRM.",
    ],
  },
  {
    route: "/terms",
    title: "Условия использования",
    status: "needs-owner-review",
    notes: [
      "Нужно подтвердить юридическое лицо и реквизиты.",
      "Нужно описать ограничения ответственности и порядок использования сайта.",
      "Нужно проверить текст юристом до публикации.",
    ],
  },
];

export const leadFormOptions: LeadFormOption[] = [
  {
    name: "objectType",
    label: "Тип объекта",
    options: [
      "Квартира в новостройке",
      "Вторичное жильё",
      "Частный дом",
      "Отдельное помещение",
      "Пока не знаю",
    ],
  },
  {
    name: "area",
    label: "Площадь",
    options: ["до 40 м²", "40-60 м²", "60-90 м²", "90-130 м²", "более 130 м²", "точно не знаю"],
  },
  {
    name: "renovationType",
    label: "Тип ремонта",
    options: [
      "Косметический",
      "Капитальный",
      "Под ключ",
      "Дизайн-проект",
      "Инженерные работы",
      "Нужна консультация",
    ],
  },
  {
    name: "objectCondition",
    label: "Состояние объекта",
    options: [
      "новостройка без отделки",
      "есть черновая отделка",
      "жилая квартира",
      "вторичное жильё под демонтаж",
      "часть работ уже выполнена",
      "нужно оценить на замере",
    ],
  },
  {
    name: "startTime",
    label: "Когда планируете старт",
    options: [
      "как можно скорее",
      "в течение месяца",
      "через 1-3 месяца",
      "через 3-6 месяцев",
      "пока выбираю подрядчика",
    ],
  },
  {
    name: "budgetRange",
    label: "Бюджетный диапазон",
    options: [
      "до 500 тыс. ₽",
      "500 тыс.-1 млн ₽",
      "1-2 млн ₽",
      "2-4 млн ₽",
      "более 4 млн ₽",
      "нужна смета",
    ],
  },
  {
    name: "contactMethod",
    label: "Удобный способ связи",
    options: ["Телефон", "Telegram", "WhatsApp", "Эл. почта"],
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, Service>;

export const seoByRoute = Object.fromEntries(seoPages.map((page) => [page.route, page])) as Record<
  string,
  SeoPage
>;
