"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COMMAND = "npx shadcn@latest add @postpeer-ui/composer";

export function InstallSnippet() {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked — silently ignore
    }
  };

  return (
    <section className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-40 sm:pb-56">
      <div
        aria-disabled="true"
        className="group relative flex cursor-not-allowed items-center justify-between gap-3 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 font-mono text-sm shadow-xs opacity-70"
      >
        <code className="flex-1 truncate text-foreground/90">
          <span className="select-none text-muted-foreground">$ </span>
          {COMMAND}
        </code>
        <span className="inline-flex shrink-0 items-center rounded-full border border-border bg-background/85 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Coming soon
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onCopy}
          disabled
          aria-disabled="true"
          aria-label="Install command not yet available"
          className="shrink-0"
        >
          <Check
            className={cn(
              "size-4 transition-all",
              copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          />
          <Copy
            className={cn(
              "absolute size-4 transition-all",
              copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
            )}
          />
        </Button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        The registry isn&rsquo;t published yet. Once it is, one shadcn add per
        component drops the source into your repo with nothing to bundle at
        runtime.
      </p>
    </section>
  );
}
