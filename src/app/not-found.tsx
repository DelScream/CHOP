import Link from "next/link";
import { HudFrame } from "@/components/diagrams/HeroSchema";

export default function NotFound() {
  return (
    <section className="lost-object">
      <div className="container">
        <HudFrame>
          <div className="panel">
            <div className="panel-head">
              <span>SECURITY SYSTEM</span>
              <span>ERR</span>
            </div>
            <p className="kicker">Потерянный объект</p>
            <p style={{ letterSpacing: "0.12em", marginBottom: 16 }}>OBJECT: 404</p>
            <p style={{ letterSpacing: "0.12em", marginBottom: 24 }}>
              STATUS: <span style={{ color: "var(--signal)" }}>NOT FOUND</span>
            </p>
            <p className="muted" style={{ marginBottom: 28 }}>
              Последняя известная координата объекта отсутствует.
            </p>
            <Link className="btn btn--signal" href="/">
              Вернуться на объект
            </Link>
          </div>
        </HudFrame>
      </div>
    </section>
  );
}
