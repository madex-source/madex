import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeftRight, Layers } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-orange-400 uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            2D AutoCAD Blueprint to Photorealistic Reality
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Drag the divider to explore how exact AutoCAD working drawings convert into contractor-ready, photorealistic 3D environments.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full h-[320px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background Layer: 3D Rendered Reality */}
            <img
              src="https://i.postimg.cc/ryKvxdrN/Bedroom-render-Project2-1.png"
              alt="3D Photorealistic Bedroom Render"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Foreground Clipped Layer: 2D Working Drawing */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <img
                src="https://i.postimg.cc/jjb8122k/Bedroom-Layout-Project2.png"
                alt="AutoCAD 2D Blueprint Layout"
                className="absolute inset-0 w-full h-full object-cover bg-white"
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-xl border-2 border-white">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md">
              AutoCAD 2D Blueprint
            </div>

            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#FF5722]/90 backdrop-blur-md border border-orange-400 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md">
              3D Rendered Reality
            </div>

            {/* Native Range Slider for accessibility & keyboard support */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Before and after transformation slider"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
            <span>&larr; Drag left for 3D Render</span>
            <span>Drag right for AutoCAD 2D &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};
