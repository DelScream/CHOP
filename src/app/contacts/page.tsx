import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { YandexMap } from "@/components/maps/YandexMap";
import { Cover } from "@/components/ui/Media";
import { pics } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "Контакты",
  "Центр контроля CHOP: телефон, почта, адрес в Москве. Получите консультацию и расчёт стоимости охраны.",
  "/contacts",
);

export default function ContactsPage() {
  return (
    <>
      <Cover
        src={pics.city.src}
        alt={pics.city.alt}
        kicker="Связь"
        title="Центр контроля"
        text={`${site.hours}. ${site.intake}. Первый шаг — коротко описать объект и задачу.`}
      />
      <section className="section">
        <div className="container--wide contacts-layout">
          <div>
            <p className="kicker">Головной офис</p>
            <h2>Как с нами связаться</h2>
            <p className="lead" style={{ marginTop: 12, marginBottom: 20 }}>
              Для расчёта охраны нужны тип объекта, режим работы и что именно требуется защищать. Звонок и заявка —
              равнозначный старт.
            </p>
            <div className="contact-list">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>{site.fullAddress}</p>
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
      <section className="section section--panel" id="request">
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
