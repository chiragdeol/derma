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
      <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[11px] font-bold tracking-widest text-white/90 uppercase border border-white/10 shadow-sm pointer-events-none">
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
        <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[11px] font-bold tracking-widest text-white/90 uppercase border border-white/10 shadow-sm">
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
        <div className="w-9 h-9 rounded-full bg-white text-foreground shadow-xl flex items-center justify-center border border-black/10 hover:scale-110 active:scale-95 transition-transform cursor-grab active:cursor-grabbing">
          <div className="flex items-center gap-0.5 text-foreground/80">
            <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
            <ChevronRight className="w-3.5 h-3.5 -ml-1" />
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
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="w-full py-8 space-y-6">
      {(title || subtitle) && (
        <div className="flex items-end justify-between px-2">
          <div>
            <p className="eyebrow mb-1.5 text-[#974d08]">{subtitle}</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
          </div>
          
          {items.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent/20 flex items-center justify-center text-foreground transition-colors cursor-pointer"
                aria-label="Previous transformation"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono font-medium text-muted-foreground px-1">
                {currentIndex + 1} / {items.length}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent/20 flex items-center justify-center text-foreground transition-colors cursor-pointer"
                aria-label="Next transformation"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Slider Card */}
      <div className="space-y-3">
        <BeforeAfterSlider
          beforeImage={currentItem.beforeImage}
          afterImage={currentItem.afterImage}
        />
        
        {currentItem.treatmentName && (
          <div className="flex justify-between items-center px-1">
            <h4 className="font-display text-lg font-semibold text-foreground">{currentItem.treatmentName}</h4>
            {currentItem.category && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#974d08] bg-[#974d08]/10 px-3 py-1 rounded-full">
                {currentItem.category}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Carousel Thumbnail Indicators */}
      {items.length > 1 && (
        <div className="flex gap-2 justify-center pt-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? "w-8 bg-[#974d08]" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
