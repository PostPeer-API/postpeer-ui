export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  soon?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Components", href: "/components", soon: true },
  { label: "Docs", href: "/docs", soon: true },
];
