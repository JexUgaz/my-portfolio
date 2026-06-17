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

  const openInNewTab = ({ desktop, mobile }: { desktop: string, mobile: string }) => {
    const isMobile = window.matchMedia("(max-width: 680px)").matches;

    window.open(
      isMobile ? mobile : desktop,
      "_blank"
    );
  }

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map(({ desktop, mobile }) => {
            const desktopSrc = desktop.optimize.src;
            const baseName = getBasename(desktopSrc);
            return (
              <div className="embla__slide" key={baseName}>
                <picture>
                  <source
                    media="(max-width: 680px)"
                    srcSet={mobile.optimize.src}
                  />

                  <img
                    src={desktopSrc}
                    alt={baseName}
                    className="embla__slide__img"
                  />
                </picture>

                <button
                  className="embla__slide__fullscreen-btn"
                  onClick={() => openInNewTab({ desktop: desktop.raw, mobile: mobile.raw })}
                >
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
