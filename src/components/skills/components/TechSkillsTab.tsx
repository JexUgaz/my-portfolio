import TabSwitcher from "@/react/TabSwitcher";
import { techSkillsItems } from "@/components/skills/data/techSkillsItems";

const TechSkillsTab = () => (
  <TabSwitcher
    className="px-0 lg:px-10"
    textSize="text-sm lg:text-base xl:text-lg"
    items={techSkillsItems}
  />
);

export default TechSkillsTab;
