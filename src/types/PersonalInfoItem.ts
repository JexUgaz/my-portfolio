import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface PersonalInfoItem {
  label: string;
  content: string;
  icon: {
    Icon: AstroComponentFactory;
  };
}
