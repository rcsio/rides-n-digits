"use client";

import clsx from "clsx";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  dots?: number;
  options?: Partial<EmblaOptionsType>;
};

export default function EmblaCarousel({
  className,
  children,
  dots,
  options,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => setPos(emblaApi.selectedScrollSnap));
    }
  }, [emblaApi]);

  return (
    <div
      className={clsx("relative overflow-hidden", {
        [`${className}`]: className,
      })}
      ref={emblaRef}
    >
      {children}

      {dots && dots > 0 && (
        <div className="absolute bottom-2 flex w-full justify-center gap-x-2">
          {[...Array(dots)].map((_, i) => (
            <div
              key={i}
              className={clsx(
                "aspect-square w-2 rounded-full shadow",
                {
                  "border border-white": i !== pos,
                },
                {
                  "bg-white": i === pos,
                },
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
