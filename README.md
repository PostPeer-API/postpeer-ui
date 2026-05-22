# PostPeer UI

> Your scheduling SaaS is already built.

Drop-in React components for cross-platform social media publishing. Built on
[shadcn/ui](https://ui.shadcn.com). Free and open source.

This repo contains the marketing site at [ui.postpeer.dev](https://ui.postpeer.dev)
and the upcoming component registry — a composer, an account selector, a
scheduler, and editors that respect each platform's rules (X, Instagram,
LinkedIn, TikTok, YouTube, Threads, Facebook, Pinterest).

## Status

**v0.1** — the marketing site is live. The component registry is not published
yet. Track progress on the site or watch this repo.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — `radix-nova` style
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [motion](https://motion.dev) for animations
- [ogl](https://github.com/oframe/ogl) for the WebGL grainient background

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint    # ESLint
pnpm build   # production build
```

## Project layout

```
app/              Next.js App Router pages
components/
  marketing/     Landing-page sections
  site/          Header, footer, logo, theme
  ui/            shadcn primitives
config/          Site + nav config
lib/             Shared utilities
registry/        Component registry (coming soon)
```

## Contributing

The registry is still in design. If you'd like to follow along, watch this
repo or the [parent project](https://postpeer.dev).

## License

MIT
