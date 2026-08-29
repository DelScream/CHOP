import type { Metadata } from "next";
import { ServiceView, serviceStaticParams } from "@/components/pages/ServiceView";
import { services } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return pageMeta("Услуга", "Охранные услуги CHOP.", "/uslugi");
  return pageMeta(service.seoTitle, service.description, `/uslugi/${service.slug}`);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  return <ServiceView slug={slug} />;
}
