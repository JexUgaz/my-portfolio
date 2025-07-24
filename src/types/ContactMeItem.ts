import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface ContactMeItem {
  tooltip: string;
  url: string;
  Icon: AstroComponentFactory;
}
