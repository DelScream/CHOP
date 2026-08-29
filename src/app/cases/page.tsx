import type { Metadata } from "next";
import { CardImage } from "@/components/ui/CardImage";
import { Cover, Split } from "@/components/ui/Media";
import { CtaBand } from "@/components/ui/PageHero";
import { caseExtra, pics } from "@/lib/content";
import { cases } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Кейсы",
  "Примеры организации охраны объектов: логистический комплекс, производство, бизнес-центр. CHOP.",
  "/cases",
);

export default function CasesPage() {
  return (
    <>
      <Cover
        src={pics.warehouse.src}
        alt={pics.warehouse.alt}
        kicker="Отчётность"
        title="Кейсы"
        text="Не галерея подвигов, а сценарии: как объект собирается в систему контроля — задача, решение, результат."
      />
      <section className="section">
        <div className="container prose">
          <p>
            Это демонстрационные сценарии для портфолио-сайта. Они показывают логику работы CHOP: сначала устройство
            объекта, затем режим, посты и понятный результат для заказчика.
          </p>
        </div>
      </section>
      {cases.map((item, index) => {
        const extra = caseExtra[item.slug];
        return (
          <Split
            key={item.slug}
            image={extra?.image ?? pics.city.src}
            alt={extra?.alt ?? item.title}
            caption={`Кейс ${item.num}`}
            reverse={index % 2 === 1}
          >
            <p className="kicker">Кейс {item.num}</p>
            <h2>{item.title}</h2>
            <div className="prose" style={{ marginTop: 16 }}>
              {extra?.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <b>Задача.</b> {item.task}
              </p>
              <p>
                <b>Решение.</b> {item.solution}
              </p>
              <p>
                <b>Результат.</b> {item.result}
              </p>
            </div>
          </Split>
        );
      })}
      <section className="section section--panel">
        <div className="container--wide">
          <div className="cases-grid">
            {cases.map((item) => {
              const extra = caseExtra[item.slug];
              return (
                <article key={item.slug} className="card">
                  {extra ? <CardImage src={extra.image} alt={extra.alt} /> : null}
                  <span className="code">КЕЙС {item.num}</span>
                  <h2>{item.title}</h2>
                  <p>{item.result}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
