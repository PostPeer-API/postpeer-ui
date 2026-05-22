"use client";

import * as React from "react";
import Link from "next/link";

import { GithubIcon } from "@/components/site/icons";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    // Sentinel sits at the top of the page. While it's visible we're at the
    // top; once it leaves the viewport we treat the header as "scrolled".
    // Using IntersectionObserver (instead of a scroll listener) avoids timing
    // bugs around scroll restoration on reload / back-forward navigation,
    // where window.scrollY can be read before the browser restores position
    // and no scroll event fires for the programmatic restore.
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-2 w-px"
      />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 text-foreground transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
            : "border-b border-transparent bg-transparent"
        )}
      >
      <div className="container mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        >
          <Logo />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {mainNav.map((item) =>
            item.soon ? (
              <span
                key={item.href}
                aria-disabled="true"
                title="Coming soon"
                className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md px-3 py-1.5 text-muted-foreground/70"
              >
                {item.label}
                <span className="rounded-full border border-border bg-background/60 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                  Soon
                </span>
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-muted-foreground transition-colors hover:text-foreground",
                  scrolled ? "hover:bg-muted" : "hover:bg-foreground/10"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Button asChild variant="ghost" size="icon-sm" aria-label="GitHub">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
    </>
  );
}
