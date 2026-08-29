import type { Metadata } from "next";
import { Cover, Split } from "@/components/ui/Media";
import { CtaBand } from "@/components/ui/PageHero";
import { pics } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "Документы и лицензия",
  "Сведения о лицензии и реквизитах частного охранного предприятия CHOP. Проверка через реестры Росгвардии.",
  "/documents",
);

export default function DocumentsPage() {
  return (
    <>
      <Cover
        src={pics.industrial.src}
        alt={pics.industrial.alt}
        kicker="Правовой контур"
        title="Работаем в правовом поле"
        text="Охранные услуги оказываются только в пределах лицензии и требований законодательства о частной охранной деятельности."
      />
      <Split image={pics.office.src} alt={pics.office.alt} caption="Реквизиты подставляются из фактических документов">
        <p className="kicker">Прозрачность</p>
        <h2>Сначала документы, потом формулировки на сайте</h2>
        <div className="prose" style={{ marginTop: 16 }}>
          <p>{site.legal.disclaimer}</p>
          <p>
            Росгвардия ведёт реестры выданных лицензий на частную охранную деятельность. Кнопка ниже ведёт на официальный
            контур ведомства — проверяйте сведения по фактическому номеру лицензии организации, а не по демонстрационным
            символам на этой странице.
          </p>
        </div>
      </Split>
      <section className="section section--panel">
        <div className="container">
          <div className="license-grid">
            <article className="card">
              <span className="code">LIC</span>
              <h2>Лицензия</h2>
              <p>
                Номер: {site.legal.licenseNumber}
                <br />
                Дата предоставления: {site.legal.licenseDate}
              </p>
            </article>
            <article className="card">
              <span className="code">ORG</span>
              <h2>Организация</h2>
              <p>{site.legalName}</p>
            </article>
            <article className="card">
              <span className="code">OGRN</span>
              <h2>ОГРН</h2>
              <p>{site.legal.ogrn}</p>
            </article>
            <article className="card">
              <span className="code">INN</span>
              <h2>ИНН</h2>
              <p>{site.legal.inn}</p>
            </article>
          </div>
          <a className="btn btn--signal" href={site.legal.registryUrl} target="_blank" rel="noreferrer" style={{ marginTop: 28 }}>
            Проверить сведения
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
