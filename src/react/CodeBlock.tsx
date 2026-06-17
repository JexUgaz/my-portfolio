import { useEffect, useRef } from "react";
import mermaid from "./lib/mermaid";

interface CodeBlockProps {
  className?: string;
  children?: React.ReactNode;
}

const getCode = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.join("");
  return "";
};

const MermaidBlock = ({ code }: { code: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const render = async () => {
      try {
        const id = `mmd-${crypto.randomUUID()}`;

        const { svg } = await mermaid.render(id, code);

        if (!ref.current) return;
        ref.current.innerHTML = svg;
      } catch (e) {
        console.error("Mermaid error:", e);
      }
    };

    render();
  }, [code]);

  return <div ref={ref} />;
};

export const CodeBlock = ({ className, children }: CodeBlockProps) => {
  const isMermaid = className?.includes("language-mermaid");

  if (!isMermaid) return <code className={className}>{children}</code>;

  const code = getCode(children).trim();

  return <MermaidBlock code={code} />;
};
