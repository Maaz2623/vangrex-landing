import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { MainSections } from "@/components/main-sections";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <MainSections />
    </main>
  );
}
