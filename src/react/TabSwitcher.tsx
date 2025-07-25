import type { TabSwitcherItem } from "@/types/TabSwitcherItem";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  items: TabSwitcherItem[];
  className?: string;
}
const TabSwitcher: React.FC<Props> = ({ items, className = "" }) => {
  const [selected, setSelected] = useState<number>(0);

  const noSelectedClasses =
    "bg-white/10 text-gray-300 hover:bg-white/20 border-white/10";
  const selectedClasses =
    "bg-accent/90 text-white shadow-md border-transparent";

  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch gap-6 w-full ${className}`}
    >
      <div className="flex flex-row sm:flex-col gap-3 sm:max-w-[200px]">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setSelected(i)}
            className={`px-6 py-2 rounded-2xl text-base font-semibold border transition-all duration-200
              ${selected === i ? selectedClasses : noSelectedClasses}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-1"
        >
          {items[selected].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabSwitcher;
