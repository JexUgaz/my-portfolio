import { Tooltip } from "react-tooltip";

export interface TechGridItem {
  name: string;
  tooltip: {
    color: string;
  };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface TechGridProps {
  techs: TechGridItem[];
}

const TechGrid: React.FC<TechGridProps> = ({ techs }) => {
  return (
    <div className="w-full bg-white/10 rounded-2xl max-w-3xl py-5 mx-auto flex flex-wrap justify-center gap-4">
      {techs.map(({ name, Icon, tooltip: { color } }, index) => (
        <div
          key={index}
          className="group relative w-[17%] max-w-[150px] flex-1 sm:flex-none"
        >
          <div
            className="p-2 sm:p-3 rounded-xl cursor-pointer flex items-center justify-center
                   bg-white/30 hover:bg-white/80
                   hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <span data-tooltip-id={`tooltip-${index}`}>
              <Icon className="size-20 drop-shadow-[var(--shadow-white-sm)] group-hover:drop-shadow-[var(--shadow-primary)] group-hover:animate-lift-soft" />
            </span>
          </div>

          <Tooltip
            id={`tooltip-${index}`}
            place="right"
            offset={10}
            content={name}
            opacity={1}
            className="z-50 text-sm font-medium text-white px-2 py-1 rounded"
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
