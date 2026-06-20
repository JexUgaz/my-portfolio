import { useState } from "react";
import "highlight.js/styles/github-dark.css";
import { ReactMarkdownRenderer } from "@/react/ReactMarkdownRenderer";
import { CarouselPopUp } from "./CarouselPopUp";
import type { ProjectImages, ProjectSectionPopUp } from "@/types/Project";

type Props = {
  readonly images: ProjectImages[];
  readonly sections: ProjectSectionPopUp[];
};

const DetailPopUpContent = ({ sections, images }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const sectionActive = sections[activeTab];
  return (
    <div className="w-full desktop:w-[90%] desktop:max-w-3xl rounded-xl shadow-xl desktop:p-4 h-full">
      <CarouselPopUp images={images} />

      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4 overflow-x-auto">
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1 text-xs font-bold rounded-md transition
              ${activeTab === i ? "bg-white text-primary" : "bg-primary text-white"}`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm leading-relaxed md">
        <ReactMarkdownRenderer content={sectionActive.content} />
      </div>
    </div>
  );
};

export default DetailPopUpContent;
