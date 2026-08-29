import Link from "next/link";
import { site } from "@/lib/site";

export function PageHero({
  kicker,
  title,
  text,
  children,
}: {
  kicker: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="kicker">{kicker}</p>
        <h1 className="display">{title}</h1>
        {text ? (
          <p className="lead" style={{ marginTop: 18 }}>
            {text}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="audit-list">
      {items.map((item, index) => (
        <li key={item}>
          <span>{item}</span>
          <b>{String(index + 1).padStart(2, "0")}</b>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="section cta-block">
      <div className="container">
        <p className="kicker">Задача</p>
        <h2 className="display">
          Ваш объект.
          <br />
          Наша задача — его безопасность.
        </h2>
        <p className="lead">Расскажите, что необходимо защищать. Мы предложим подходящий формат охраны.</p>
        <div className="btn-row">
          <Link className="btn btn--signal" href="/contacts#request">
            Получить консультацию
          </Link>
          <a className="btn btn--ghost" href={site.phoneHref}>
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}
