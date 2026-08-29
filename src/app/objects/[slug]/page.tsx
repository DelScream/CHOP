import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScenarioBoard } from "@/components/diagrams/ScenarioBoard";
import { Cover, Split } from "@/components/ui/Media";
import { CtaBand, PointList } from "@/components/ui/PageHero";
import { objectExtra } from "@/lib/content";
import { objectPages } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return objectPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = objectPages.find((page) => page.slug === slug);
  if (!item) return pageMeta("Объект", "Охрана объектов CHOP.", "/objects");
  return pageMeta(item.seoTitle, item.description, `/objects/${item.slug}`);
}

export default async function ObjectPage({ params }: Props) {
  const { slug } = await params;
  const item = objectPages.find((page) => page.slug === slug);
  if (!item) notFound();
  const extra = objectExtra[item.slug];

  return (
    <>
      <Cover
        src={extra?.image ?? "/images/city-night.jpg"}
        alt={extra?.alt ?? item.title}
        kicker="Объект"
        title={item.title}
        text={item.lead}
      />
      {extra ? (
        <Split image={extra.image} alt={extra.alt} caption="Территория объекта">
          <p className="kicker">Как устроен объект</p>
          <h2>Сначала территория, потом посты</h2>
          <div className="prose" style={{ marginTop: 16 }}>
            {extra.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Split>
      ) : null}
      <section className="section section--panel">
        <div className="container audit">
          <div>
            <h2>Как строится охрана</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Режим, посты и контроль доступа определяются устройством конкретного объекта, а не шаблонным прайсом.
            </p>
          </div>
          <PointList items={item.points} />
        </div>
      </section>
      {extra ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Зоны</p>
              <h2>Что держим в контуре</h2>
            </div>
            <div className="protect-grid">
              {extra.zones.map((zone) => (
                <article key={zone.title} className="card">
                  <h3>{zone.title}</h3>
                  <p>{zone.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="section section--panel">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Схема</p>
            <h2>Контур объекта</h2>
          </div>
          <ScenarioBoard initial={item.typeId} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
