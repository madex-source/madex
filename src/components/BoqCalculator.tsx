import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Building, Layers } from 'lucide-react';

interface BoqCalculatorProps {
  onOpenInspectionModal: () => void;
}

export const BoqCalculator: React.FC<BoqCalculatorProps> = ({ onOpenInspectionModal }) => {
  const [roomType, setRoomType] = useState<string>('bedroom');
  const [scopeTier, setScopeTier] = useState<string>('tier2');
  const [area, setArea] = useState<number>(350);

  // Dynamic calculations based on tier & area
  const calculation = useMemo(() => {
    let minRate = 65;
    let maxRate = 110;
    let tierTitle = '3D Visualization & Blueprints';

    if (scopeTier === 'tier1') {
      minRate = 25;
      maxRate = 45;
      tierTitle = '2D Architectural & MEP Sets';
    } else if (scopeTier === 'tier2') {
      minRate = 65;
      maxRate = 110;
      tierTitle = '3D Visualization & Blueprints';
    } else if (scopeTier === 'tier3') {
      minRate = 1600;
      maxRate = 2800;
      tierTitle = 'Turnkey Construction Execution';
    }

    // Room multiplier adjustment for high-density fixtures (like kitchen, bath)
    let roomMultiplier = 1.0;
    let roomLabel = 'Master Bedroom Suite';

    if (roomType === 'living') {
      roomMultiplier = 1.0;
      roomLabel = 'Living Room Suite';
    } else if (roomType === 'bedroom') {
      roomMultiplier = 1.0;
      roomLabel = 'Master Bedroom Suite';
    } else if (roomType === 'kitchen') {
      roomMultiplier = scopeTier === 'tier3' ? 1.25 : 1.1;
      roomLabel = 'Modular Chef Kitchen & Dining';
    } else if (roomType === 'bathroom') {
      roomMultiplier = scopeTier === 'tier3' ? 1.35 : 1.1;
      roomLabel = 'Luxury Bathroom / Sanitary Suite';
    } else if (roomType === 'home') {
      roomMultiplier = 0.95; // bulk discount
      roomLabel = 'Full Residence (2BHK / 3BHK Flat)';
    } else if (roomType === 'office') {
      roomMultiplier = 1.05;
      roomLabel = 'Commercial Workspace / Office';
    }

    const calculatedMin = Math.round(area * minRate * roomMultiplier);
    const calculatedMax = Math.round(area * maxRate * roomMultiplier);

    const minFormatted = calculatedMin >= 100000 
      ? `Rs. ${(calculatedMin / 100000).toFixed(2)} Lakhs` 
      : `Rs. ${calculatedMin.toLocaleString()}`;

    const maxFormatted = calculatedMax >= 100000 
      ? `Rs. ${(calculatedMax / 100000).toFixed(2)} Lakhs` 
      : `Rs. ${calculatedMax.toLocaleString()}`;

    return {
      minAmount: calculatedMin,
      maxAmount: calculatedMax,
      minFormatted,
      maxFormatted,
      tierTitle,
      roomLabel,
    };
  }, [roomType, scopeTier, area]);

  const handleExportToWhatsApp = () => {
    const text = `*Scale and Spaces - BOQ Estimate Inquiry*%0A%0A*Project / Space:* ${encodeURIComponent(calculation.roomLabel)}%0A*Scope Tier:* ${encodeURIComponent(calculation.tierTitle)}%0A*Floor Area:* ${area} sq.ft%0A*Estimated Investment:* ${encodeURIComponent(calculation.minFormatted)} – ${encodeURIComponent(calculation.maxFormatted)}%0A%0A_Please let me know your availability for site inspection in Kathmandu or Birgunj._`;
    window.open(`https://wa.me/9779703881733?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#FDFAF6] border-b border-[#E5D0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1010] tracking-tight">
            Instant Room &amp; Project Cost Calculator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B4A4A] leading-relaxed">
            Estimate your design or turnkey construction investment in seconds based on current Nepal market pricing and NBC structural standards.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5D0D0] shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Field 1: Space / Project Type */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
                1. Space / Project Type
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-4 py-3 bg-[#FDFAF6] border border-[#E5D0D0] rounded-xl text-[#1C1010] font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#8B1A1A] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="living">Living Room Suite</option>
                <option value="bedroom">Master Bedroom Suite</option>
                <option value="kitchen">Modular Chef Kitchen &amp; Dining</option>
                <option value="bathroom">Luxury Bathroom / Sanitary</option>
                <option value="home">Full Residence (2BHK / 3BHK Flat)</option>
                <option value="office">Commercial Workspace / Office</option>
              </select>
            </div>

            {/* Field 2: Scope Tier */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
                2. Scope of Deliverables
              </label>
              <select
                value={scopeTier}
                onChange={(e) => setScopeTier(e.target.value)}
                className="w-full px-4 py-3 bg-[#FDFAF6] border border-[#E5D0D0] rounded-xl text-[#1C1010] font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#8B1A1A] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="tier1">Tier 1: 2D Architectural &amp; MEP Sets (Rs. 25–45/sq.ft)</option>
                <option value="tier2">Tier 2: 3D Visualization &amp; Blueprints (Rs. 65–110/sq.ft)</option>
                <option value="tier3">Tier 3: Turnkey Construction Execution (Rs. 1,600–2,800/sq.ft)</option>
              </select>
            </div>
          </div>

          {/* Area Slider */}
          <div className="mt-8 p-6 bg-[#FDFAF6] rounded-2xl border border-[#E5D0D0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
                  3. Floor Area (Square Feet)
                </label>
                <p className="text-xs text-[#6B4A4A]">Drag to adjust the carpet / built-up square footage</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E5D0D0] shadow-2xs font-mono font-bold text-lg text-[#1C1010]">
                <span>{area.toLocaleString()}</span>
                <span className="text-xs text-[#6B4A4A]">sq.ft</span>
              </div>
            </div>

            <input
              type="range"
              min="80"
              max="4000"
              step="10"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-3 bg-[#E5D0D0] rounded-lg appearance-none cursor-ew-resize accent-[#8B1A1A]"
            />

            {/* Quick Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-semibold">
              <span className="text-[#6B4A4A]">Presets:</span>
              {[150, 350, 750, 1200, 2400].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setArea(preset)}
                  className={`px-3 py-1 rounded-md border transition-all ${
                    area === preset
                      ? 'bg-[#8B1A1A] text-white border-[#8B1A1A]'
                      : 'bg-white text-[#1C1010] border-[#E5D0D0] hover:border-[#8B1A1A]/50'
                  }`}
                >
                  {preset} sq.ft
                </button>
              ))}
            </div>
          </div>

          {/* Result Card (Saubhagya Ghar Editorial Obsidian Strip) */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#1C0A0A] border border-white/10 text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-[0.08em] text-rose-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Estimated Investment Range (NPR)
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-mono tabular-nums">
                  {calculation.minFormatted} – {calculation.maxFormatted}
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  Subject to on-site structural audit in Kathmandu or Birgunj. Zero hidden fees.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleExportToWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-md shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenInspectionModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Checklist items included */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2D Architectural Layout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3D &amp; 360° VR Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Electrical &amp; MEP Detailing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Itemized Material BOQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
