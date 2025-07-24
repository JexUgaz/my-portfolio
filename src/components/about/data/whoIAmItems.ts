import LightBulbIcon from "@/components/icons/LightBulbIcon.astro";
import PersonIcon from "@/components/icons/PersonIcon.astro";
import type { WhoIAmItem } from "@/types/WhoIAmItem";

export const whoIAmItems: WhoIAmItem[] = [
  {
    title: "¿Who I Am?",
    icon: {
      Icon: PersonIcon,
      size: "size-5",
    },
    description: `Engineer from <span class="text-accent">PUCP</span> with a background in networks and systems. Enthusiastic about <span class="text-accent">AI</span> and currently focused on <span class="text-accent">cloud</span> and <span class="text-accent">software solutions</span>.`,
  },
  {
    title: "My Approach",
    icon: {
      Icon: LightBulbIcon,
      size: "size-6",
    },
    description: `I care about building <span class="text-accent">useful and reliable</span> solutions — always listening, iterating, and aligning with real-world goals.`,
  },
];
