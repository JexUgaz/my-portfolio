import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface AboutTimelineItem {
  title: string;
  Description: AstroComponentFactory;
}
