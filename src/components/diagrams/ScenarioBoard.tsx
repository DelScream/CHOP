"use client";

import { useState } from "react";
import { objectTypes, scenarioCopy, type ObjectTypeId } from "@/lib/data";
import { HudFrame } from "@/components/diagrams/HeroSchema";

function Schema({ type }: { type: ObjectTypeId }) {
  if (type === "warehouse") {
    return (
      <svg className="schema-svg" viewBox="0 0 460 250" role="img" aria-label="Схема склада">
        <text x="20" y="28">КПП</text>
        <line className="link" x1="52" y1="24" x2="230" y2="24" />
        <text x="196" y="20">ПЕРИМЕТР</text>
        <line className="link" x1="250" y1="24" x2="408" y2="24" />
        <text x="414" y="28">КПП</text>
        <line className="link" x1="40" y1="32" x2="40" y2="86" />
        <line className="link" x1="420" y1="32" x2="420" y2="86" />
        <rect className="building" x="20" y="92" width="88" height="52" />
        <text x="42" y="122">ВХОД</text>
        <rect className="building" x="186" y="84" width="88" height="70" />
        <text x="204" y="124">СКЛАД</text>
        <rect className="building" x="352" y="92" width="88" height="52" />
        <text x="360" y="122">ПОГРУЗКА</text>
        <circle className="post" cx="230" cy="186" r="5" />
        <text x="242" y="190">ПОСТ 01</text>
        <rect className="perimeter" x="8" y="8" width="444" height="234" />
      </svg>
    );
  }

  if (type === "plant") {
    return (
      <svg className="schema-svg" viewBox="0 0 460 250" role="img" aria-label="Схема производства">
        <rect className="perimeter" x="8" y="8" width="444" height="234" />
        <rect className="building" x="70" y="70" width="150" height="90" />
        <text x="112" y="118">ЦЕХ A</text>
        <rect className="building" x="240" y="70" width="150" height="90" />
        <text x="282" y="118">ЦЕХ B</text>
        <circle className="post" cx="40" cy="50" r="5" />
        <text x="52" y="54">ПОСТ 01</text>
        <circle className="post" cx="420" cy="50" r="5" />
        <text x="318" y="54">ПОСТ 02</text>
        <circle className="post" cx="40" cy="210" r="5" />
        <text x="52" y="214">КПП</text>
        <text x="20" y="32">ПЕРИМЕТР · 24/7</text>
      </svg>
    );
  }

  if (type === "retail") {
    return (
      <svg className="schema-svg" viewBox="0 0 460 250" role="img" aria-label="Схема торгового объекта">
        <rect className="perimeter" x="8" y="8" width="444" height="234" />
        <rect className="building" x="90" y="64" width="280" height="120" />
        <text x="186" y="128">ТОРГОВЫЙ ЗАЛ</text>
        <circle className="post" cx="90" cy="124" r="5" />
        <text x="28" y="128">ВХОД</text>
        <circle className="post" cx="370" cy="124" r="5" />
        <text x="382" y="128">ВХОД</text>
        <circle className="post" cx="230" cy="210" r="5" />
        <text x="242" y="214">ПОСТ 01</text>
      </svg>
    );
  }

  if (type === "site") {
    return (
      <svg className="schema-svg" viewBox="0 0 460 250" role="img" aria-label="Схема стройплощадки">
        <rect className="perimeter" x="8" y="8" width="444" height="234" />
        <rect className="building" x="150" y="80" width="160" height="70" />
        <text x="188" y="120">ПЛОЩАДКА</text>
        <circle className="post" cx="60" cy="80" r="5" />
        <text x="72" y="84">ТЕХНИКА</text>
        <circle className="post" cx="380" cy="80" r="5" />
        <text x="300" y="84">МАТЕРИАЛЫ</text>
        <circle className="post" cx="60" cy="200" r="5" />
        <text x="72" y="204">КПП</text>
      </svg>
    );
  }

  return (
    <svg className="schema-svg" viewBox="0 0 460 250" role="img" aria-label="Схема офиса">
      <rect className="perimeter" x="8" y="8" width="444" height="234" />
      <rect className="building" x="130" y="58" width="200" height="120" />
      <text x="198" y="122">ОФИС</text>
      <circle className="post" cx="130" cy="118" r="5" />
      <text x="36" y="122">РЕСЕПШН</text>
      <circle className="post" cx="360" cy="200" r="5" />
      <text x="280" y="204">ПОСТ 01</text>
      <text x="20" y="32">ВХОДНАЯ ГРУППА</text>
    </svg>
  );
}

export function ScenarioBoard({ initial = "warehouse" }: { initial?: ObjectTypeId }) {
  const [type, setType] = useState<ObjectTypeId>(initial);
  const copy = scenarioCopy[type];

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Тип объекта">
        {objectTypes.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={type === item.id}
            className={`tab${type === item.id ? " is-active" : ""}`}
            onClick={() => setType(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="scenario">
        <HudFrame>
          <div style={{ position: "relative", padding: 20 }}>
            <div className="scan-line" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                color: "var(--steel)",
                marginBottom: 8,
              }}
            >
              <span>{copy.title}</span>
              <span>СХЕМА</span>
            </div>
            <Schema type={type} />
          </div>
        </HudFrame>
        <div className="scenario-side">
          <p className="muted">{copy.note}</p>
          <ul>
            {copy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
