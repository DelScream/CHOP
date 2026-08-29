"use client";

import { useEffect, useState } from "react";

const stages = [
  { id: "object", label: "01 объект" },
  { id: "regime", label: "02 режим" },
  { id: "posts", label: "03 посты" },
  { id: "launch", label: "04 запуск" },
  { id: "audit", label: "05 оценка" },
  { id: "control", label: "06 контроль" },
  { id: "report", label: "07 отчёт" },
];

export function SystemRail() {
  const [active, setActive] = useState(stages[0].id);

  useEffect(() => {
    const nodes = stages
      .map((stage) => document.getElementById(stage.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.18, 0.4], rootMargin: "-20% 0px -40% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="system-rail" aria-label="Контур системы">
      {stages.map((stage) => (
        <a key={stage.id} href={`#${stage.id}`} className={active === stage.id ? "is-active" : ""}>
          {stage.label}
        </a>
      ))}
    </nav>
  );
}
