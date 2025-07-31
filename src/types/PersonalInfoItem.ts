import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";

export interface PersonalInfoItem {
  label: TranslationKey;
  content: string;
  icon: {
    Icon: AstroComponentFactory;
  };
}
