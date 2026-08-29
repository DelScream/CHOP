import type { MetadataRoute } from "next";
import { objectPages, services } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/uslugi", "/objects", "/about", "/cases", "/vacancies", "/documents", "/contacts"];
  const serviceRoutes = services
    .filter((item) => item.hasPage)
    .map((item) => `/uslugi/${item.slug}`);
  const objectRoutes = objectPages.map((item) => `/objects/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...objectRoutes].map((path) => ({
    url: path === "" ? `${site.url}/` : `${site.url}${path}/`,
    lastModified: new Date("2026-08-29"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}