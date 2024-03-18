"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function EmblaCarousel({ className, children }: Props) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      {children}
    </div>
  );
}
