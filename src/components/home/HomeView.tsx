import Link from "next/link";
import Image from "next/image";
import { ControlPanel } from "@/components/diagrams/ControlPanel";
import { HeroSchema } from "@/components/diagrams/HeroSchema";
import { YandexMap } from "@/components/maps/YandexMap";
import { ScenarioBoard } from "@/components/diagrams/ScenarioBoard";
import { LeadForm } from "@/components/forms/LeadForm";
import { Metrics } from "@/components/home/Metrics";
import { SystemRail } from "@/components/layout/SystemRail";
import { CtaBand } from "@/components/ui/PageHero";
import { CardImage } from "@/components/ui/CardImage";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/ui/Reveal";
import { withBase } from "@/lib/asset";
import { caseExtra, pics } from "@/lib/content";
import {
  approachItems,
  auditPoints,
  cases,
  heroStrip,
  processSteps,
  protectCards,
  services,
  teamNotes,
  technicalNote,
  vacancies,
} from "@/lib/data";
import { site } from "@/lib/site";

export function HomeView() {
  return (
    <>
      <SystemRail />
      <section className="hero" id="object">
        <div className="hero__media" aria-hidden>
          <Image
            src={withBase(pics.city.src)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__bg"
          />
          <div className="hero__shade" />
        </div>
        <div className="container--wide hero__grid">
          <div>
            <p className="kicker">Система контроля · OBJ.041</p>
            <h1 className="display">
              <span>Безопасность</span>
              <span>под контролем.</span>
            </h1>
            <p className="lead">
              Охраняем объекты, людей и имущество. Формируем систему безопасности под конкретный объект, режим работы и
              уровень риска.
            </p>
            <div className="btn-row hero__actions">
              <Link className="btn btn--signal" href="/contacts#request">
                <span className="label-desktop">Рассчитать стоимость</span>
                <span className="label-mobile">Получить расчёт</span>
              </Link>
              <Link className="btn btn--ghost" href="/uslugi">
                <span className="label-desktop">Посмотреть услуги</span>
                <span className="label-mobile">Услуги</span>
              </Link>
            </div>
          </div>
          <HeroSchema />
        </div>
        <div className="container--wide">
          <div className="hero-strip">
            {heroStrip.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Metrics />

      <section className="section" id="protect">
        <div className="container--wide">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Контур защиты</p>
              <h2>
                Охраняем не по прайсу.
                <br />
                Охраняем по задаче.
              </h2>
            </div>
          </Reveal>
          <div className="protect-grid">
            {protectCards.map((card) => {
              const photo =
                card.id === "office"
                  ? pics.office
                  : card.id === "warehouse"
                    ? pics.warehouse
                    : card.id === "plant"
                      ? pics.factory
                      : card.id === "retail"
                        ? pics.mall
                        : card.id === "site"
                          ? pics.construction
                          : pics.event;
              return (
                <Link key={card.id} href={card.href} className="card">
                  <CardImage src={photo.src} alt={photo.alt} />
                  <span className="code">{card.code}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--panel" id="regime">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Режим объекта</p>
            <h2>Охранные услуги</h2>
            <p className="lead">
              Частное охранное предприятие CHOP формирует охрану объектов, контроль доступа и защиту имущества как
              единую систему, а не набор разрозненных постов.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.hasPage ? `/uslugi/${service.slug}` : "/uslugi"}
                className="service-row"
              >
                <span className="num">{service.num}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p className="muted">{service.short}</p>
                </div>
              </Link>
            ))}
            <article className="service-row">
              <span className="num">07</span>
              <div>
                <h3>Технические средства безопасности</h3>
                <p className="muted">{technicalNote}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="posts">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Посты и зоны</p>
            <h2>
              Пока вы занимаетесь бизнесом —
              <br />
              мы контролируем объект.
            </h2>
          </div>
          <ScenarioBoard />
        </div>
      </section>

      <section className="section section--panel" id="launch">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Запуск контура</p>
            <h2>От запроса до первого поста</h2>
          </div>
          <div className="process">
            {processSteps.map((step) => (
              <article key={step.num}>
                <span className="num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="audit">
        <div className="container--wide audit">
          <div>
            <p className="kicker">Оценка объекта</p>
            <h2>
              Невозможно защитить объект,
              <br />
              не понимая, как он устроен.
            </h2>
            <Link className="btn btn--signal" href="/contacts#request" style={{ marginTop: 28 }}>
              Заказать оценку объекта
            </Link>
          </div>
          <ol className="audit-list">
            {auditPoints.map((point, index) => (
              <li key={point}>
                <span>{point}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--panel" id="control">
        <div className="container--wide control">
          <ControlPanel />
          <div>
            <p className="kicker">Система контроля</p>
            <h2>Объект внутри контура, а не охранник у двери.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Для каждого объекта формируется собственный порядок работы: от организации постов и контроля доступа до
              взаимодействия с ответственными лицами заказчика.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Почему нам доверяют</p>
            <h2>Подход</h2>
          </div>
          <div className="approach-grid">
            {approachItems.map((item) => (
              <article key={item.code} className="card">
                <span className="code">
                  {item.code} / {item.kicker}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--panel" id="documents">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Правовой контур</p>
            <h2>Работаем в правовом поле</h2>
          </div>
          <div className="license-grid">
            <article className="card">
              <span className="code">LIC</span>
              <h3>Лицензия</h3>
              <p>
                Номер: {site.legal.licenseNumber}
                <br />
                Дата предоставления: {site.legal.licenseDate}
              </p>
            </article>
            <article className="card">
              <span className="code">ORG</span>
              <h3>Организация</h3>
              <p>{site.legalName}</p>
            </article>
            <article className="card">
              <span className="code">OGRN</span>
              <h3>ОГРН</h3>
              <p>{site.legal.ogrn}</p>
            </article>
            <article className="card">
              <span className="code">INN</span>
              <h3>ИНН</h3>
              <p>{site.legal.inn}</p>
            </article>
          </div>
          <p className="muted" style={{ marginTop: 20, maxWidth: "70ch" }}>
            {site.legal.disclaimer}
          </p>
          <a className="btn btn--ghost" href={site.legal.registryUrl} target="_blank" rel="noreferrer" style={{ marginTop: 24 }}>
            Проверить сведения
          </a>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container--wide portrait">
          <div className="portrait-photo">
            <Image src={withBase(pics.director.src)} alt={pics.director.alt} fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div>
            <p className="kicker">Команда</p>
            <h2>{site.director.name}</h2>
            <p className="muted" style={{ margin: "8px 0 20px" }}>
              {site.director.role}
            </p>
            <blockquote className="quote">«{site.director.quote}»</blockquote>
          </div>
        </div>
        <div className="container--wide" style={{ marginTop: 40 }}>
          <div className="team-notes">
            {teamNotes.map((note) => (
              <article key={note.title} className="card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--panel" id="vacancies">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Кадровый контур</p>
            <h2>Работа в команде</h2>
            <p className="lead">
              Нам нужны дисциплинированные сотрудники, которые понимают ответственность охранной работы и готовы соблюдать
              установленные регламенты.
            </p>
          </div>
          <div className="vacancy-grid">
            {vacancies.map((vacancy) => (
              <article key={vacancy.slug} className="card">
                <span className="code">{vacancy.code}</span>
                <h3>{vacancy.title}</h3>
                <ul>
                  {vacancy.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link className="btn btn--signal" href="/vacancies#resume" style={{ marginTop: 28 }}>
            Отправить резюме
          </Link>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Разбор</p>
            <h2>Вопросы до первого поста</h2>
          </div>
          <FaqList />
        </div>
      </section>

      <section className="section section--panel" id="report">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Отчётность по объектам</p>
            <h2>Кейсы</h2>
          </div>
          <div className="cases-grid">
            {cases.map((item) => {
              const extra = caseExtra[item.slug];
              return (
                <article key={item.slug} className="card">
                  {extra ? <CardImage src={extra.image} alt={extra.alt} /> : null}
                  <span className="code">КЕЙС {item.num}</span>
                  <h3>{item.title}</h3>
                  <p>
                    <b>Задача.</b> {item.task}
                  </p>
                  <p>
                    <b>Решение.</b> {item.solution}
                  </p>
                  <p>
                    <b>Результат.</b> {item.result}
                  </p>
                </article>
              );
            })}
          </div>
          <Link className="btn btn--ghost" href="/cases" style={{ marginTop: 28 }}>
            Все кейсы
          </Link>
        </div>
      </section>

      <CtaBand />

      <section className="section section--panel" id="contacts">
        <div className="container--wide contacts-layout">
          <div>
            <p className="kicker">Связь</p>
            <h2>Центр контроля</h2>
            <div className="contact-list">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>{site.fullAddress}</p>
              <p>
                {site.hours}
                <br />
                {site.intake}
              </p>
            </div>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <a
                className="btn btn--ghost"
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(site.fullAddress)}`}
                target="_blank"
                rel="noreferrer"
              >
                Построить маршрут
              </a>
              <a className="btn btn--signal" href={`mailto:${site.email}`}>
                Написать
              </a>
            </div>
          </div>
          <YandexMap />
        </div>
      </section>

      <section className="section" id="request">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Заявка</p>
            <h2>Расскажите о задаче</h2>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
