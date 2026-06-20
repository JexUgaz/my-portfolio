import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { TranslationKey } from "@/i18n/types";
import type { ProjectSectionTranslationKey, ProjectSectionTranslationValue } from "@/i18n/types/project-types";
import type { ImageMetadata } from "astro";

export type ProjectStatus = "demo" | "production" | "client" | "open-source" | "archived";

type TechStack = {
  title: string;
  Icon: AstroComponentFactory;
};

type ProjectSection = {
  label: ProjectSectionTranslationKey;
  markdownPath: ProjectSectionTranslationKey;
};

export type ProjectImages = {
  desktop: {
    optimize: ImageMetadata;
    raw: string;
  };
  mobile: {
    optimize: ImageMetadata;
    raw: string;
  };
};

export type ProjectSectionPopUp = {
  label: ProjectSectionTranslationValue;
  content: string;
};

export type ProjectDetails = {
  images: ProjectImages[];
  sections: ProjectSection[];
};

export interface Project {
  title: TranslationKey;
  description: TranslationKey;
  stack: TechStack[];
  image: ImageMetadata;
  codeUrl: string;
  demoUrl: string;
  status: ProjectStatus;
  details?: ProjectDetails;
}
