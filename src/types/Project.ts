import type { AstroComponentFactory } from "astro/runtime/server/index.js";

interface TechStack {
  title: string;
  Icon: AstroComponentFactory;
}

export interface Project {
  title: string;
  description: string;
  stack: TechStack[];
  image: ImageMetadata;
  codeUrl: string;
  demoUrl: string;
}
