import { useEffect, useState } from "react";

interface Props {
  readonly maxWidth: number;
}

export const useMediaQuery = ({ maxWidth }: Props) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = globalThis.matchMedia(`(max-width: ${maxWidth}px)`);

    const update = () => setMatches(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, [maxWidth]);

  return matches;
};
