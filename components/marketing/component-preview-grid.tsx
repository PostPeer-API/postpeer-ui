import {
  CalendarRange,
  Layers,
  PenLine,
  Users,
  type LucideIcon,
} from "lucide-react";

type ComponentPreview = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

const PREVIEWS: ComponentPreview[] = [
  {
    slug: "composer",
    name: "Composer",
    description:
      "A post editor with media, mentions, and overrides for each platform.",
    icon: PenLine,
  },
  {
    slug: "account-selector",
    name: "Account Selector",
    description:
      "Pick which connected accounts to publish to, grouped by platform.",
    icon: Users,
  },
  {
    slug: "scheduler",
    name: "Scheduler",
    description:
      "A calendar and queue you can drag posts into. Knows about timezones.",
    icon: CalendarRange,
  },
  {
    slug: "platform-editors",
    name: "Platform Editors",
    description:
      "Editors that look right on X, Instagram, LinkedIn, TikTok, and the rest.",
    icon: Layers,
  },
];

export function ComponentPreviewGrid() {
  return (
    <section className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything a publishing UI needs.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Composable primitives that work standalone or stack into a full
          dashboard. Fork what you need; ignore the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PREVIEWS.map((preview) => (
          <PreviewCard key={preview.slug} {...preview} />
        ))}
      </div>
    </section>
  );
}

function PreviewCard({ name, description, icon: Icon }: ComponentPreview) {
  return (
    <div
      aria-disabled="true"
      className="group relative flex cursor-not-allowed flex-col overflow-hidden rounded-xl border border-border/80 bg-card opacity-90"
    >
      <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full border border-border bg-background/85 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground backdrop-blur">
        Coming soon
      </span>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/60 bg-gradient-to-br from-accent via-background to-background">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.92_0_0/0.5)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0_0/0.5)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.06)_1px,transparent_1px)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border/80 bg-background/80 text-muted-foreground backdrop-blur-sm">
            <Icon className="size-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-5">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
