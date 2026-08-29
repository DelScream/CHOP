import Link from "next/link";
import { SocialLinks } from "@/components/ui/Icons";
import { footerNav, site } from "@/lib/site";

export function PortfolioLine() {
  return (
    <>
      Сделано в рамках портфолио: {site.author.name} {site.author.handle}
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container--wide footer-grid">
        <div>
          <p className="brand">
            <strong>{site.name}</strong>
          </p>
          <p className="muted" style={{ marginTop: 8 }}>
            Частное охранное предприятие
          </p>
          <p className="muted" style={{ marginTop: 16, maxWidth: "36ch" }}>
            {site.tagline}
          </p>
          <p className="muted" style={{ marginTop: 24, fontSize: "0.85rem" }}>
            <PortfolioLine />
          </p>
        </div>
        <div>
          <h2>Компания</h2>
          {footerNav.company.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Услуги</h2>
          {footerNav.services.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Контакты</h2>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.city}</p>
        </div>
      </div>
      <div className="portfolio-band">
        <div className="container--wide portfolio-band__inner">
          <p>
            <PortfolioLine />
            <span className="muted"> · </span>
            <a href={site.author.vk} target="_blank" rel="noreferrer">
              vk.ru/delscream
            </a>
            <span className="muted"> · </span>
            <a href={site.author.telegram} target="_blank" rel="noreferrer">
              t.me/DelScream
            </a>
            <span className="muted"> · </span>
            <a href={site.author.github} target="_blank" rel="noreferrer">
              github.com/DelScream
            </a>
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
