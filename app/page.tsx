import { ComponentPreviewGrid } from "@/components/marketing/component-preview-grid";
import { Hero } from "@/components/marketing/hero";
import { InstallSnippet } from "@/components/marketing/install-snippet";
import { Platforms } from "@/components/marketing/platforms";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <InstallSnippet />
        <ComponentPreviewGrid />
        <Platforms />
      </main>
      <SiteFooter />
    </>
  );
}
