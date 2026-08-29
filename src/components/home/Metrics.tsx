"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function useCount(to: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, to]);

  return value;
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const years = useCount(site.metrics.years.value, active);
  const objects = useCount(site.metrics.objects.value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section--tight" aria-labelledby="metrics-title">
      <div className="container--wide">
        <p className="kicker" id="metrics-title">
          Наши показатели
        </p>
        <div className="metrics" ref={ref}>
          <div className="metric">
            <b>{site.metrics.control.value}</b>
            <span>{site.metrics.control.label}</span>
          </div>
          <div className="metric">
            <b>
              {years}
              {site.metrics.years.suffix}
            </b>
            <span>{site.metrics.years.label}</span>
          </div>
          <div className="metric">
            <b>
              {objects}
              {site.metrics.objects.suffix}
            </b>
            <span>{site.metrics.objects.label}</span>
          </div>
          <div className="metric">
            <b>{site.metrics.zero.value}</b>
            <span>{site.metrics.zero.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
