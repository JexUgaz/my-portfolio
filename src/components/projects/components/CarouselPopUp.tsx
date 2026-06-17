import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { getBasename } from "@/utils/helpers";
import type { ProjectImages } from "@/types/Project";

type Props = {
  readonly images: ProjectImages[];
};

export const CarouselPopUp = ({ images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openInNewTab = (src: string) => window.open(src, "_blank");

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map(({ optimize: { src }, raw }) => {
            const baseName = getBasename(src);
            return (
              <div className="embla__slide" key={baseName}>
                <img src={src} alt={baseName} className="embla__slide__img" />

                <button className="embla__slide__fullscreen-btn" onClick={() => openInNewTab(raw)}>
                  ⛶
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <button className="embla__button embla__button--prev" onClick={scrollPrev}>
        ←
      </button>
      <button className="embla__button embla__button--next" onClick={scrollNext}>
        →
      </button>
    </div>
  );
};
