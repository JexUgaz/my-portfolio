import TabSwitcher from "@/react/TabSwitcher";
import { techSkillsItems } from "@/components/skills/data/techSkillsItems";

const TechSkillsTab = () => (
  <TabSwitcher
    className="mt-20 sm:px-10"
    textSize="text-lg"
    items={techSkillsItems}
  />
);

export default TechSkillsTab;
