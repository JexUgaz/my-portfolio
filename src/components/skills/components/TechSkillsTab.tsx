import TabSwitcher from "@/react/TabSwitcher";
import { techSkillsItems } from "@/components/skills/data/techSkillsItems";

const TechSkillsTab = () => (
  <TabSwitcher className="w-full mt-10 sm:px-10" items={techSkillsItems} />
);

export default TechSkillsTab;
