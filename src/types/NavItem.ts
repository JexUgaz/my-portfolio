import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface NavItem {
  link: string;
  title: string;
  icon: {
    Icon: AstroComponentFactory;
    className?: string;
  };
}
