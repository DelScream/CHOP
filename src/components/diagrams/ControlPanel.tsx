"use client";

import { useEffect, useState } from "react";
import { HudFrame } from "@/components/diagrams/HeroSchema";

function stamp(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${dd}.${mm}.${yyyy} / ${hh}:${min}`;
}

export function ControlPanel() {
  const [checked, setChecked] = useState("29.08.2026 / 13:42");

  useEffect(() => {
    const tick = () => setChecked(stamp(new Date()));
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <HudFrame>
      <div className="panel">
        <div className="panel-head">
          <span>SECURITY CONTROL</span>
          <span>SYS.04</span>
        </div>
        <p style={{ letterSpacing: "0.14em", marginBottom: 18 }}>ОБЪЕКТ №041</p>
        <div className="panel-grid">
          <div>
            <span>СТАТУС</span>
            <span>
              <i className="status-dot" />
              ACTIVE
            </span>
          </div>
          <div>
            <span>ПОСТЫ</span>
            <b>04</b>
          </div>
          <div>
            <span>КПП</span>
            <b>02</b>
          </div>
          <div>
            <span>ПЕРИМЕТР</span>
            <b>OK</b>
          </div>
          <div>
            <span>ДОСТУП</span>
            <b>OK</b>
          </div>
          <div>
            <span>ТРЕВОГА</span>
            <b>0</b>
          </div>
        </div>
        <p className="muted" style={{ marginTop: 20, fontSize: "0.72rem", letterSpacing: "0.12em" }}>
          ПОСЛЕДНЯЯ ПРОВЕРКА
          <br />
          {checked}
        </p>
        <p className="muted" style={{ marginTop: 16, fontSize: "0.75rem" }}>
          Декоративная визуализация, а не заявление о наличии конкретной системы.
        </p>
      </div>
    </HudFrame>
  );
}
