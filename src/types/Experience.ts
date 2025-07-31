import type { TranslationKey } from "@/i18n/types";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

interface TechStack {
  title: string;
  Icon: AstroComponentFactory;
}

export interface Experience {
  title: TranslationKey;
  company: string;
  logo: ImageMetadata;
  description: TranslationKey;
  stack: TechStack[];
  date: TranslationKey;
}
