"use client";

import useEmblaCarousel from "embla-carousel-react";
// @ts-ignore
import { OptionsType } from "embla-carousel/components/Options";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  options?: Partial<OptionsType>;
};

export default function EmblaCarousel({ className, children, options }: Props) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      {children}
    </div>
  );
}
