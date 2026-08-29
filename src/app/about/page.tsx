import type { Metadata } from "next";
import Image from "next/image";
import { Cover, Split } from "@/components/ui/Media";
import { CtaBand } from "@/components/ui/PageHero";
import { withBase } from "@/lib/asset";
import { pics } from "@/lib/content";
import { approachItems, processSteps, teamNotes } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "О компании",
  "CHOP — частное охранное предприятие. Охрана объектов, дисциплина регламента и контроль качества работы на объекте.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <Cover
        src={pics.city.src}
        alt={pics.city.alt}
        kicker="О компании"
        title="Безопасность должна работать до того, как возникает угроза"
        text="Мы продаём не услугу охранника, а ощущение контролируемой безопасности: объект, оценка, режим, посты, контроль."
      />
      <Split image={pics.office.src} alt={pics.office.alt} caption="Объект внутри системы, а не пост у двери">
        <p className="kicker">Кто мы</p>
        <h2>{site.fullName}</h2>
        <div className="prose" style={{ marginTop: 16 }}>
          <p>
            CHOP работает с предприятиями, складами, офисами, торговыми и строительными объектами. Мы не обещаем
            универсальную схему и не маскируем охрану под «невидимый сервис». Заказчик должен понимать, что его объект
            находится под контролем.
          </p>
          <p>
            Команда собирает контур под задачу: территория, режим, число постов, доступ, взаимодействие с ответственными
            лицами. Дальше — регламент, запуск и контроль качества. Импровизация на объекте не является методом работы.
          </p>
        </div>
      </Split>
      <section className="section section--panel" id="approach">
        <div className="container--wide">
          <div className="section-head">
            <p className="kicker">Подход</p>
            <h2>Система важнее импровизации</h2>
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
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Порядок работы</p>
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
      <section className="section section--panel" id="team">
        <div className="container--wide portrait">
          <div className="portrait-photo">
            <Image src={withBase(pics.director.src)} alt={pics.director.alt} fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div>
            <p className="kicker">Руководство</p>
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
      <CtaBand />
    </>
  );
}
