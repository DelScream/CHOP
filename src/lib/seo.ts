import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta(title: string, description: string, path = "/"): Metadata {
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: site.locale,
      type: "website",
      siteName: site.fullName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
