import type { AstroComponentFactory } from "astro/runtime/server/index.js";
export interface SocialContactItem {
  title: string;
  description: string;
  url: string;
  Icon: AstroComponentFactory;
}
