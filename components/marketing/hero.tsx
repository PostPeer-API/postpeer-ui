import BlurText from "@/components/BlurText";
import { HeroBackground } from "@/components/marketing/hero-background";
import { GithubIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Grainient background — theme-aware (light violet/pink ↔ deep indigo). */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <HeroBackground />
      </div>

      {/* Bottom fade into page background for a smooth handoff. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background"
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            v0.1 · A free toolkit from{" "}
            <a
              href={siteConfig.links.parent}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              PostPeer
            </a>
          </div>

          <BlurText
            text="Your social media scheduling SaaS, already built."
            animateBy="words"
            direction="top"
            delay={120}
            stepDuration={0.4}
            className="mt-6 justify-center text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          />

          <p className="mt-6 text-pretty text-base text-muted-foreground sm:text-lg md:text-xl max-w-2xl mx-auto">
            React components for posting across platforms. A composer, an
            account selector, a scheduler, and editors that respect each
            platform's rules. Built on shadcn/ui. Free and open source.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              disabled
              aria-disabled="true"
              className="h-11 px-5 text-sm"
            >
              Browse components
              <span className="ml-1 rounded-full border border-primary-foreground/30 bg-primary-foreground/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                Soon
              </span>
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
  );
}
