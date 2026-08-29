import { HomeView } from "@/components/home/HomeView";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(site.seoTitle, site.seoDescription, "/");

export default function HomePage() {
  return <HomeView />;
}
