import { useState } from "react";

interface Props {
  tabs: Record<string, string[]>;
  className?: string;
}

const TabSwitcher: React.FC<Props> = ({ tabs, className = "" }) => {
  const tabKeys = Object.keys(tabs);
  const [selected, setSelected] = useState(tabKeys[0]);

  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <div className="flex flex-wrap gap-3">
        {tabKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              selected === key
                ? "bg-accent text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            } transition`}
          >
            {key}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-3">
        {tabs[selected].map((item) => (
          <li
            key={item}
            className="px-3 py-2 bg-gray-800 rounded-xl text-white text-sm shadow-md"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSwitcher;
