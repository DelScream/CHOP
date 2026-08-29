"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

const DESKTOP_NAV = "(min-width: 1200px)";

export function Header() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia(DESKTOP_NAV).matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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

  return (
    <div className={`site-chrome${compact ? " is-compact" : ""}${open ? " is-open" : ""}`}>
      <header className="site-header">
        <div className="container--wide site-header__inner">
          <Link href="/" className="brand" aria-label={site.fullName} onClick={() => setOpen(false)}>
            <strong>{site.name}</strong>
            <span>{site.entityType}</span>
          </Link>
          <nav className="nav" aria-label="Основное меню">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-cta">
            <a className="header-phone" href={site.phoneHref}>
              {site.phone}
            </a>
            <Link className="btn btn--signal header-cta__btn" href="/contacts#request">
              Получить расчёт
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="menu-toggle__bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>
      <nav id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Мобильное меню">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a className="mobile-nav__phone" href={site.phoneHref}>
          {site.phone}
        </a>
        <Link className="btn btn--signal" href="/contacts#request" onClick={() => setOpen(false)}>
          Получить расчёт
        </Link>
      </nav>
    </div>
  );
}
