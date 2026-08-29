export const site = {
  name: "CHOP",
  shortName: "CHOP",
  legalName: "ООО «ЧОО «CHOP»",
  fullName: "Частное охранное предприятие CHOP",
  entityType: "ЧАСТНОЕ ОХРАННОЕ ПРЕДПРИЯТИЕ",
  tagline: "Профессиональная охрана объектов, имущества и людей",
  idea: "Безопасность должна работать до того, как возникает угроза.",
  h1: "Безопасность под контролем",
  seoTitle: "CHOP — охрана объектов, имущества и людей",
  seoDescription:
    "Частное охранное предприятие CHOP. Охрана объектов, контроль доступа, защита имущества и безопасность мероприятий. Получите консультацию и расчёт стоимости охраны.",
  phone: "+7 (XXX) XXX-XX-XX",
  phoneHref: "tel:+7",
  email: "info@chop.ru",
  address: "ул. Примерная, 24",
  city: "Москва",
  fullAddress: "г. Москва, ул. Примерная, 24",
  hours: "Пн–Пт: 09:00–18:00",
  intake: "Приём заявок: круглосуточно",
  url: "https://delscream.github.io/CHOP",
  locale: "ru_RU",
  metrics: {
    control: { value: "24/7", label: "контроль охраняемых объектов" },
    years: { value: 15, suffix: "+", label: "лет работы команды" },
    objects: { value: 120, suffix: "+", label: "объектов под охраной" },
    zero: { value: 0, suffix: "", label: "допустимых компромиссов в вопросах безопасности" },
  },
  legal: {
    licenseNumber: "XXXXXX",
    licenseDate: "XX.XX.XXXX",
    ogrn: "XXXXXXXXXXXXX",
    inn: "XXXXXXXXXX",
    registryUrl: "https://rosgvard.gov.ru/",
    disclaimer:
      "Реквизиты и сведения о лицензии должны указываться только в соответствии с фактическими документами организации. Росгвардия ведёт реестры выданных лицензий на частную охранную деятельность.",
  },
  director: {
    name: "Александр Воронов",
    role: "Генеральный директор",
    quote:
      "Мы не стремимся сделать охрану незаметной. Мы стремимся сделать так, чтобы заказчик всегда понимал: его объект находится под контролем.",
  },
  author: {
    name: "Валерий Гацкан",
    handle: "@DelScream",
    vk: "https://vk.ru/delscream",
    telegram: "https://t.me/DelScream",
    github: "https://github.com/DelScream",
  },
} as const;

export const nav = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/objects", label: "Объекты" },
  { href: "/#approach", label: "Подход" },
  { href: "/about", label: "О компании" },
  { href: "/vacancies", label: "Вакансии" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const footerNav = {
  company: [
    { href: "/about", label: "О компании" },
    { href: "/about#team", label: "Команда" },
    { href: "/vacancies", label: "Вакансии" },
    { href: "/documents", label: "Документы" },
  ],
  services: [
    { href: "/uslugi/ohrana-obektov", label: "Охрана объектов" },
    { href: "/uslugi/kontrol-dostupa", label: "Контроль доступа" },
    { href: "/uslugi/ohrana-imushestva", label: "Охрана имущества" },
    { href: "/uslugi/soprovozhdenie", label: "Сопровождение" },
    { href: "/uslugi/ohrana-meropriyatij", label: "Мероприятия" },
  ],
} as const;
