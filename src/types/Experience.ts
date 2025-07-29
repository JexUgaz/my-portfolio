import type { AstroComponentFactory } from "astro/runtime/server/index.js";

interface TechStack {
  title: string;
  Icon: AstroComponentFactory;
}

export interface Experience {
  title: string;
  company: string;
  logo: ImageMetadata;
  description: string;
  stack: TechStack[];
  date: string;
}
