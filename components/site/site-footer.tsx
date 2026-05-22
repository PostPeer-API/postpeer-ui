import { GithubIcon } from "@/components/site/icons";
import { Logo } from "@/components/site/logo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={siteConfig.links.parent}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              PostPeer API
            </a>
            <span
              aria-disabled="true"
              title="Coming soon"
              className="inline-flex cursor-not-allowed items-center gap-1.5 text-muted-foreground/70"
            >
              Components
              <span className="rounded-full border border-border bg-background/60 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                Soon
              </span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Built on{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              shadcn/ui
            </a>
            . Powered by{" "}
            <a
              href={siteConfig.links.parent}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              PostPeer
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
