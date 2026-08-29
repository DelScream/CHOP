import { site } from "./site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: site.fullName,
    alternateName: ["CHOP", site.legalName, "частное охранное предприятие"],
    description: site.tagline,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: "RU",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      streetAddress: site.address,
      addressCountry: "RU",
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.legalName,
      taxID: site.legal.inn,
      identifier: site.legal.ogrn,
    },
  };
}
