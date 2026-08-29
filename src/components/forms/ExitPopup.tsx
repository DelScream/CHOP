"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/ui/Icons";
import { site } from "@/lib/site";

function host(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export function ExitPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setOpen(false);
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="popup-card hud">
        <span className="hud-corners" aria-hidden>
          <span />
          <span />
        </span>
        <p className="kicker">Портфолио</p>
        <h2 id="popup-title">Сделано в рамках портфолио</h2>
        <p className="popup-author">
          {site.author.name} {site.author.handle}
        </p>
        <nav className="popup-mark" aria-label="Ссылки автора">
          <a href={site.author.vk} target="_blank" rel="noreferrer">
            {host(site.author.vk)}
          </a>
          <a href={site.author.telegram} target="_blank" rel="noreferrer">
            {host(site.author.telegram)}
          </a>
          <a href={site.author.github} target="_blank" rel="noreferrer">
            {host(site.author.github)}
          </a>
        </nav>
        <SocialLinks />
        <button type="button" className="btn btn--ghost btn--block popup-close" onClick={() => setOpen(false)}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
