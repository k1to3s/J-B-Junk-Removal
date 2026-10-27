"use client";

import { useState, useId } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  description?: string;
  initialPosition?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title,
  description,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(initialPosition);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const sliderId = useId();
  const descId = useId();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Home") setSliderPos(0);
    else if (e.key === "End") setSliderPos(100);
  };

  const allImagesLoaded = beforeLoaded && afterLoaded;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          {description && <p className="text-xs text-slate-500">{description}</p>}
        </div>
        <span className="text-[11px] font-semibold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
          Drag to compare
        </span>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden select-none bg-sky-50 border-2 border-sky-100 shadow-xs">
        {!allImagesLoaded && (
          <div
            className="absolute inset-0 z-20 skeleton-shimmer flex items-center justify-center"
            role="status"
            aria-live="polite"
          >
            <span className="text-xs font-semibold text-sky-700">Loading...</span>
          </div>
        )}

        {/* After Layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            onLoad={() => setAfterLoaded(true)}
          />
          <span className="absolute bottom-3 right-3 z-10 bg-sky-600/95 backdrop-blur-xs text-white font-bold text-[11px] px-2.5 py-1 rounded-lg shadow-xs">
            After
          </span>
        </div>

        {/* Before Layer */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            onLoad={() => setBeforeLoaded(true)}
          />
          <span className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-xs text-slate-900 font-bold text-[11px] px-2.5 py-1 rounded-lg shadow-xs">
            Before
          </span>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none w-0.5 bg-white shadow"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-sky-600 text-white border-2 border-white shadow-md flex items-center justify-center">
            <MoveHorizontal className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {/* Native Range Input */}
        <input
          id={sliderId}
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleSliderChange}
          onKeyDown={handleKeyDown}
          aria-label={`Compare ${title} before and after`}
          aria-describedby={descId}
          className="comparison-slider-input absolute inset-0 z-30 opacity-0 focus-visible:opacity-100"
        />
      </div>

      <p id={descId} className="sr-only">
        Use left and right arrow keys to compare before and after images.
      </p>
    </div>
  );
}
