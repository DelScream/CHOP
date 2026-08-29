import type { Metadata } from "next";
import Link from "next/link";
import { CardImage } from "@/components/ui/CardImage";
import { Cover } from "@/components/ui/Media";
import { CtaBand } from "@/components/ui/PageHero";
import { objectExtra, pics } from "@/lib/content";
import { objectPages } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Объекты охраны",
  "Охрана офисов, складов, производства, торговых объектов и строительных площадок. Частное охранное предприятие CHOP.",
  "/objects",
);

export default function ObjectsPage() {
  return (
    <>
      <Cover
        src={pics.city.src}
        alt={pics.city.alt}
        kicker="Типы объектов"
        title="Охраняем объекты по задаче, а не по шаблону"
        text="Офис, склад, производство и стройплощадка требуют разного режима. Сначала объект, затем посты, доступ и контроль."
      />
      <section className="section">
        <div className="container prose">
          <p>
            Нет универсальной схемы «для любого здания». Склад живёт транспортом, офис — входной группой, производство —
            периметром и сменой. Ниже типы объектов, с которыми чаще всего собирается контур охраны CHOP.
          </p>
        </div>
      </section>
      <section className="section section--panel">
        <div className="container--wide">
          <div className="protect-grid">
            {objectPages.map((item) => {
              const extra = objectExtra[item.slug];
              return (
                <Link key={item.slug} href={`/objects/${item.slug}`} className="card">
                  {extra ? <CardImage src={extra.image} alt={extra.alt} /> : null}
                  <span className="code">OBJ</span>
                  <h2>{item.title}</h2>
                  <p>{item.lead}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
