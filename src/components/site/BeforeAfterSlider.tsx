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
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/40 select-none shadow-sm grid grid-cols-2 gap-[1px] bg-border/40 ${aspectRatio} ${className}`}
    >
      {/* BEFORE Image (Left Half) */}
      <div className="relative w-full h-full overflow-hidden bg-muted">
        <img
          src={beforeImage}
          alt="Before treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2.5 left-2.5 z-10 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold tracking-widest text-white uppercase border border-white/10 shadow-sm">
          {beforeLabel}
        </div>
      </div>

      {/* AFTER Image (Right Half) */}
      <div className="relative w-full h-full overflow-hidden bg-muted">
        <img
          src={afterImage}
          alt="After treatment result"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold tracking-widest text-white uppercase border border-white/10 shadow-sm">
          {afterLabel}
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
