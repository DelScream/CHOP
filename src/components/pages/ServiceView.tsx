import Link from "next/link";
import { notFound } from "next/navigation";
import { ScenarioBoard } from "@/components/diagrams/ScenarioBoard";
import { Cover, Split } from "@/components/ui/Media";
import { CtaBand, PointList } from "@/components/ui/PageHero";
import { serviceExtra } from "@/lib/content";
import { objectPages, services } from "@/lib/data";

export function serviceStaticParams() {
  return services.filter((item) => item.hasPage).map((item) => ({ slug: item.slug }));
}

export function ServiceView({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug && item.hasPage);
  if (!service) notFound();
  const extra = serviceExtra[service.slug];
  const related = objectPages.slice(0, 3);

  return (
    <>
      <Cover
        src={extra?.image ?? "/images/industrial-night.jpg"}
        alt={extra?.alt ?? service.title}
        kicker={`Услуга ${service.num}`}
        title={service.title}
        text={service.lead}
      />
      <Split image={extra?.image ?? "/images/industrial-night.jpg"} alt={extra?.alt ?? service.title} caption="Контур объекта">
        <p className="kicker">Суть услуги</p>
        <h2>Что именно мы закрываем</h2>
        <div className="prose" style={{ marginTop: 16 }}>
          {extra?.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Split>
      <section className="section section--panel">
        <div className="container audit">
          <div>
            <h2>Что входит в контур</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              {extra?.forWhom}
            </p>
          </div>
          <PointList items={service.points} />
        </div>
      </section>
      {extra ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Порядок</p>
              <h2>Как запускаем работу</h2>
            </div>
            <div className="process">
              {extra.how.map((item, index) => (
                <article key={item}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="section section--panel">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Схема объекта</p>
            <h2>Режим подбирается под тип объекта</h2>
          </div>
          <ScenarioBoard />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="kicker">Смежные объекты</p>
          <div className="protect-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/objects/${item.slug}`} className="card">
                <h3>{item.title}</h3>
                <p>{item.lead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
