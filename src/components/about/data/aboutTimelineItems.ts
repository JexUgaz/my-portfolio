import type { AboutTimelineItem } from "@/types/AboutTimelineItem";
import PhaseDescription1 from "@/components/about/components/PhaseDescription1.astro";
import PhaseDescription2 from "@/components/about/components/PhaseDescription2.astro";
import PhaseDescription3 from "@/components/about/components/PhaseDescription3.astro";
import PhaseDescription4 from "@/components/about/components/PhaseDescription4.astro";

export const aboutTimelineItems: AboutTimelineItem[] = [
  {
    Description: PhaseDescription1,
    title: "Foundation: Engineering Mindset",
  },
  {
    Description: PhaseDescription2,
    title: "Transition: Software as My Medium",
  },
  {
    Description: PhaseDescription3,
    title: "Growth: Real Projects, Real People",
  },
  {
    Description: PhaseDescription4,
    title: "Focus Today: Systems that Deliver Value",
  },
];
