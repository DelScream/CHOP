import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { Cover, Split } from "@/components/ui/Media";
import { CtaBand } from "@/components/ui/PageHero";
import { pics } from "@/lib/content";
import { vacancies } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Вакансии",
  "Работа в команде CHOP: охранник, старший смены, администратор объекта.",
  "/vacancies",
);

export default function VacanciesPage() {
  return (
    <>
      <Cover
        src={pics.industrial.src}
        alt={pics.industrial.alt}
        kicker="Кадровый контур"
        title="Работа в команде"
        text="Нам нужны дисциплинированные сотрудники, которые понимают ответственность охранной работы и готовы соблюдать установленные регламенты."
      />
      <Split image={pics.lobby.src} alt={pics.lobby.alt} caption="Объект, смена, регламент">
        <p className="kicker">Как устроена работа</p>
        <h2>Смена живёт правилами, а не настроением</h2>
        <div className="prose" style={{ marginTop: 16 }}>
          <p>
            Охрана объекта — это график, зона ответственности и взаимодействие с руководством площадки. Мы ищем людей,
            которые выдерживают режим: пришли, приняли пост, закрыли контур, передали смену без серых зон.
          </p>
          <p>
            Конкретные требования, график и объект обсуждаются после отклика. Не указываем сертификаты и разряды, пока
            это не подтверждено кадровыми документами организации.
          </p>
        </div>
      </Split>
      <section className="section section--panel">
        <div className="container">
          <div className="vacancy-grid">
            {vacancies.map((vacancy) => (
              <article key={vacancy.slug} className="card">
                <span className="code">{vacancy.code}</span>
                <h2>{vacancy.title}</h2>
                <ul>
                  {vacancy.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="resume">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Резюме</p>
            <h2>Отправить резюме</h2>
            <p className="lead">
              Оставьте контакты и коротко опишите опыт — вернёмся с уточнением по вакансии и объекту.
            </p>
          </div>
          <LeadForm id="resume-form" submitLabel="Отправить резюме" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
