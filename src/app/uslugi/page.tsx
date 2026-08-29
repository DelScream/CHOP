import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/PageHero";
import { CardImage } from "@/components/ui/CardImage";
import { Cover } from "@/components/ui/Media";
import { pics, serviceExtra } from "@/lib/content";
import { services, technicalNote } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Охранные услуги",
  "Охрана объектов, контроль доступа, охрана имущества, сопровождение и охрана мероприятий. Частное охранное предприятие CHOP.",
  "/uslugi",
);

export default function ServicesPage() {
  return (
    <>
      <Cover
        src={pics.industrial.src}
        alt={pics.industrial.alt}
        kicker="Каталог услуг"
        title="Охранные услуги"
        text="Частная охрана для предприятий, складов, офисов и коммерческой недвижимости. Формат работы определяется задачей объекта, а не шаблонным прайсом."
      />
      <section className="section">
        <div className="container prose">
          <p>
            CHOP продаёт не «человека в форме», а контур: оценка объекта, режим, посты, доступ и контроль качества. Ниже —
            услуги, которые собираются под конкретную территорию, график и уровень риска.
          </p>
        </div>
      </section>
      <section className="section section--panel">
        <div className="container">
          <div className="service-list">
            {services.map((service) => (
              <article key={service.slug} className="service-row">
                <span className="num">{service.num}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p className="muted">{service.short}</p>
                  {service.hasPage ? (
                    <Link className="btn btn--ghost" href={`/uslugi/${service.slug}`} style={{ marginTop: 16 }}>
                      Подробнее
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
            <article className="service-row">
              <span className="num">07</span>
              <div>
                <h2>Технические средства безопасности</h2>
                <p className="muted">{technicalNote}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Как это выглядит на объекте</p>
            <h2>Разный объект — разный контур</h2>
          </div>
          <div className="protect-grid">
            {Object.entries(serviceExtra)
              .filter(([slug]) => slug !== "zashchita-zhizni")
              .map(([slug, extra]) => (
                <Link key={slug} href={`/uslugi/${slug}`} className="card">
                  <CardImage src={extra.image} alt={extra.alt} />
                  <h3>{services.find((item) => item.slug === slug)?.title}</h3>
                  <p>{extra.forWhom}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
