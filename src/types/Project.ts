import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";

interface TechStack {
  title: string;
  Icon: AstroComponentFactory;
}

export interface Project {
  title: TranslationKey;
  description: TranslationKey;
  stack: TechStack[];
  image: ImageMetadata;
  codeUrl: string;
  demoUrl: string;
}
