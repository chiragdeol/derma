import React, { useState, useRef, useCallback } from "react";
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
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]" or "aspect-square"
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
  aspectRatio = "aspect-[4/3]",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      className={`relative overflow-hidden rounded-3xl border border-border/40 select-none shadow-lg cursor-ew-resize ${aspectRatio} ${className}`}
    >
      {/* AFTER Image (Full background layer) */}
      <img
        src={afterImage}
        alt="After treatment result"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* AFTER Label Badge (Bottom Right) */}
      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest text-white/90 uppercase border border-white/10 shadow-sm pointer-events-none">
        {afterLabel}
      </div>

      {/* BEFORE Image (Clipped overlay layer) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%", maxWidth: "none" }}
        />
        {/* BEFORE Label Badge (Bottom Left) */}
        <div className="absolute bottom-3 left-3 z-10 px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest text-white/90 uppercase border border-white/10 shadow-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Slider Line & Center Drag Handle Button */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.5)] transform -translate-x-1/2 flex items-center justify-center cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="w-8 h-8 rounded-full bg-white text-foreground shadow-xl flex items-center justify-center border border-black/10 hover:scale-110 active:scale-95 transition-transform cursor-grab active:cursor-grabbing">
          <div className="flex items-center gap-0.5 text-foreground/80">
            <ChevronLeft className="w-3 h-3 -mr-0.5" />
            <ChevronRight className="w-3 h-3 -ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
  title?: string;
  subtitle?: string;
}

export function BeforeAfterCarousel({ items, title = "Clinical Transformations", subtitle = "Real Results Before & After" }: BeforeAfterCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!items || items.length === 0) return null;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-12 space-y-6">
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

      {/* Multi-Card Horizontal Scrollable Track */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/60"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map((item) => (
          <div
            key={item.id || item.treatmentName}
            className="flex-none w-[320px] sm:w-[380px] snap-start rounded-3xl bg-card border border-border/60 p-4 space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <BeforeAfterSlider
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
            
            <div className="flex items-center justify-between pt-1">
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">{item.treatmentName}</h4>
                {item.description && (
                  <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                )}
              </div>
              {item.category && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#974d08] bg-[#974d08]/10 px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
