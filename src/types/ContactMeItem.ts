import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface ContactMeItem {
  title: string;
  description: string;
  url: string;
  Icon: AstroComponentFactory;
}
