import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface BeforeAfterItem {
  id: string;
  treatmentName: string;
  beforeImage: string;
  afterImage: string;
  category?: string;
  description?: string;
}

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  treatmentName?: string;
  className?: string;
  aspectRatio?: string;
}

export function BeforeAfterCard({
  beforeImage,
  afterImage,
  treatmentName,
  subtitle = "AL NEMAH MEDICAL CENTER",
  category = "SKIN | LASER | AESTHETICS",
  className = "",
}: {
  beforeImage: string;
  afterImage: string;
  treatmentName?: string;
  subtitle?: string;
  category?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10.5] sm:aspect-[16/10] max-h-[380px] overflow-hidden rounded-2xl bg-black border border-white/10 select-none shadow-xl group ${className}`}
    >
      {/* Side-by-Side Full Height Images */}
      <div className="grid grid-cols-2 h-full w-full bg-black">
        <div className="relative h-full w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={beforeImage}
            alt={`${treatmentName || "Treatment"} Before`}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="relative h-full w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={afterImage}
            alt={`${treatmentName || "Treatment"} After`}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Dark Maroon/Black Gradient Overlay at Bottom with Centered Typography */}
      <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-[#2d0507] via-black/80 to-transparent flex flex-col items-center justify-end text-center z-10 pointer-events-none">
        {treatmentName && (
          <h4 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide mb-1 drop-shadow-md">
            {treatmentName}
          </h4>
        )}
        <div className="text-[9px] font-sans font-medium tracking-[0.2em] text-[#d6aa8d] uppercase">
          {subtitle}
        </div>
        {category && (
          <div className="text-[8px] font-sans tracking-[0.15em] text-white/70 uppercase font-light mt-0.5">
            {category}
          </div>
        )}
      </div>
    </div>
  );
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  treatmentName,
  className = "",
}: BeforeAfterSliderProps) {
  return (
    <BeforeAfterCard
      beforeImage={beforeImage}
      afterImage={afterImage}
      treatmentName={treatmentName}
      className={className}
    />
  );
}

interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
  title?: string;
  subtitle?: string;
}

export function BeforeAfterCarousel({ items, title = "Clinical Transformations", subtitle = "Real Results Before & After" }: BeforeAfterCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    const cardWidth = 520;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -520, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 520, behavior: "smooth" });
    }
  };

  const scrollToIndex = (idx: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: idx * 520, behavior: "smooth" });
      setActiveIndex(idx);
    }
  };

  return (
    <div className="w-full py-8 space-y-6">
      {(title || subtitle) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
          <div>
            <p className="eyebrow mb-1.5 text-[#974d08]">{subtitle}</p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground">{title}</h3>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-accent/20 flex items-center justify-center text-foreground transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-accent/20 flex items-center justify-center text-foreground transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Multi-Card Horizontal Scroll Track */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, idx) => (
          <div
            key={item.id || item.treatmentName || idx}
            className="flex-none w-[340px] sm:w-[480px] md:w-[540px] lg:w-[580px] snap-start"
          >
            <BeforeAfterCard
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              treatmentName={item.treatmentName}
              category={item.category}
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots Row */}
      <div className="flex justify-center items-center gap-2 pt-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "w-3.5 h-3.5 bg-[#974d08] scale-110 shadow-sm"
                : "w-2.5 h-2.5 border border-[#974d08]/50 bg-transparent hover:bg-[#974d08]/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
