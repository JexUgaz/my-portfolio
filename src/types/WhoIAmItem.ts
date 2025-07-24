import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface WhoIAmItem {
  title: string;
  description: string;
  icon: {
    Icon: AstroComponentFactory;
    size: string;
  };
}
