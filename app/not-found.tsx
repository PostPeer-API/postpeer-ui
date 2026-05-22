import type { Metadata } from "next";
import Link from "next/link";

import { HeroBackground } from "@/components/marketing/hero-background";
import { GithubIcon } from "@/components/site/icons";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <section className="relative isolate flex flex-1 items-center overflow-hidden bg-background">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <HeroBackground />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background"
          />

          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" />
                Error 404
              </div>

              <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl leading-[1.05]">
                Page not found
              </h1>

              <p className="mt-6 text-pretty text-base text-muted-foreground sm:text-lg max-w-xl mx-auto">
                The page you&rsquo;re looking for doesn&rsquo;t exist or has
                moved. Head back home or take a look at the project on GitHub.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="h-11 px-5 text-sm">
                  <Link href="/">Return home</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 px-5 text-sm bg-background/60 backdrop-blur"
                >
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="size-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
