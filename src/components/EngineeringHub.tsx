import React, { useState } from 'react';
import { 
  Wrench, 
  Paintbrush, 
  Lightbulb, 
  LayoutGrid, 
  Scissors, 
  Wind, 
  Ruler, 
  Building2, 
  Layers, 
  Calculator, 
  Compass, 
  ShieldCheck, 
  Check, 
  MessageSquare
} from 'lucide-react';

export const EngineeringHub: React.FC = () => {
  const [activeSuite, setActiveSuite] = useState<'interior' | 'civil' | 'nbc'>('interior');

  // Interior tools state
  const [intTool, setIntTool] = useState<string>('paint');
  const [paintL, setPaintL] = useState<number>(14);
  const [paintW, setPaintW] = useState<number>(12);
  const [paintH, setPaintH] = useState<number>(10);
  const [paintDed, setPaintDed] = useState<number>(50);

  const [ceilL, setCeilL] = useState<number>(16);
  const [ceilW, setCeilW] = useState<number>(14);
  const [ceilBoard, setCeilBoard] = useState<number>(24);

  const [luxRoom, setLuxRoom] = useState<number>(300);
  const [luxArea, setLuxArea] = useState<number>(150);
  const [luxWatt, setLuxWatt] = useState<number>(9);

  const [kitLayout, setKitLayout] = useState<number>(1.8);
  const [kitLen, setKitLen] = useState<number>(10);

  const [curtW, setCurtW] = useState<number>(72);
  const [curtH, setCurtH] = useState<number>(96);
  const [curtFull, setCurtFull] = useState<number>(2.2);

  const [acArea, setAcArea] = useState<number>(180);
  const [acH, setAcH] = useState<number>(10);
  const [acExp, setAcExp] = useState<number>(1.2);

  // Civil tools state
  const [civTool, setCivTool] = useState<string>('cost');
  const [plinthUnit, setPlinthUnit] = useState<'terai' | 'sqft'>('terai');
  const [plinthVal, setPlinthVal] = useState<number>(10);
  const [plinthPlotW, setPlinthPlotW] = useState<number>(30);

  const [brkL, setBrkL] = useState<number>(30);
  const [brkH, setBrkH] = useState<number>(10);
  const [brkT, setBrkT] = useState<number>(9);

  const [housePlinth, setHousePlinth] = useState<number>(1000);
  const [houseStoreys, setHouseStoreys] = useState<number>(2);
  const [houseRate, setHouseRate] = useState<number>(3200);

  const [rccL, setRccL] = useState<number>(20);
  const [rccW, setRccW] = useState<number>(15);
  const [rccD, setRccD] = useState<number>(5);

  const [tieB, setTieB] = useState<number>(250);
  const [tieD, setTieD] = useState<number>(355);
  const [tieCover, setTieCover] = useState<number>(25);
  const [tieDia, setTieDia] = useState<number>(8);

  const [traceScale, setTraceScale] = useState<number>(1200);
  const [traceCm, setTraceCm] = useState<number>(5);

  // NBC tools state
  const [nbcTool, setNbcTool] = useState<string>('pga');
  const [pgaZ, setPgaZ] = useState<string>('0.35');
  const [detailStorey, setDetailStorey] = useState<string>('2');
  const [sbcDepth, setSbcDepth] = useState<number>(15);
  const [farPlot, setFarPlot] = useState<number>(2000);
  const [farTotalBuilt, setFarTotalBuilt] = useState<number>(3200);
  const [septicUsers, setSepticUsers] = useState<number>(8);

  // Calculations
  // 1. Paint
  const netPaintArea = Math.max(0, 2 * (paintL + paintW) * paintH - paintDed);
  const paintPuttyKg = Math.round(netPaintArea * 0.05);
  const paintPrimerL = (netPaintArea / 100).toFixed(1);
  const paintEmulsionL = (netPaintArea / 55).toFixed(1);

  // 2. Ceiling
  const ceilArea = ceilL * ceilW;
  const ceilSheets = Math.ceil((ceilArea * 1.1) / ceilBoard);
  const ceilLChannel = Math.round(2 * (ceilL + ceilW));

  // 3. Lighting Lux
  const lumensNeeded = luxRoom * luxArea * 0.0929;
  const lumenPerBulb = luxWatt === 7 ? 630 : luxWatt === 9 ? 810 : 1080;
  const lightFixtures = Math.ceil(lumensNeeded / lumenPerBulb);

  // 4. Kitchen Running Feet
  const kitRft = Math.round(kitLen * kitLayout);
  const kitCountertop = Math.round(kitRft * 2.2);

  // 5. Curtains
  const curtMeters = ((Math.ceil((curtW * curtFull) / 48) * ((curtH + 12) * 0.0254))).toFixed(1);

  // 6. AC Tonnage
  const btu = acArea * acH * 6 * acExp;
  const acTon = btu > 20000 ? '2.0 Ton' : btu > 14000 ? '1.5 Ton' : '1.0 Ton';

  // 7. Plinth Area
  const plotSqft = plinthUnit === 'terai' ? plinthVal * 3645 : plinthVal;
  const permissiblePlinth = Math.round(Math.max(0, plotSqft - 5 * plinthPlotW) * 0.7);

  // 8. Brickwork
  const netWallArea = Math.max(0, brkL * brkH - 60);
  const totalBricks = Math.ceil(netWallArea * (brkT === 4.5 ? 4.6 : 9.2) * 1.05);
  const brickCementBags = (netWallArea * 0.026).toFixed(1);

  // 9. Building Cost
  const totalBuiltUp = housePlinth * houseStoreys;
  const totalCostLakhs = ((totalBuiltUp * houseRate) / 100000).toFixed(1);
  const totalCementBags = Math.round(totalBuiltUp * 0.4);
  const totalSteelTons = ((totalBuiltUp * 3.8) / 1000).toFixed(1);

  // 10. Concrete RCC
  const dryVolCuft = rccL * rccW * (rccD / 12) * 1.54;
  const rccCementBags = ((dryVolCuft * (1 / 5.5)) / 1.25).toFixed(1);
  const rccSandCuft = Math.round(dryVolCuft * (1.5 / 5.5));
  const rccGittiCuft = Math.round(dryVolCuft * (3 / 5.5));

  // 11. Stirrup Tie
  const tieLen = 2 * ((tieB - 2 * tieCover) + (tieD - 2 * tieCover)) + 2 * Math.max(65, 10 * tieDia) - 6 * tieDia;
  const tieWeightKg = (((tieDia * tieDia) / 162) * (tieLen / 1000)).toFixed(2);

  // 12. Trace Map
  const groundM = (traceCm * traceScale) / 100;
  const groundFt = (groundM * 3.28).toFixed(1);

  // 13. NBC Detailing
  const is2Storey = detailStorey === '2';

  // 14. SBC Soil
  const sbcVal = sbcDepth <= 12 ? '200 kN/m²' : sbcDepth <= 17 ? '150 kN/m²' : '125 kN/m²';

  // 15. FAR
  const farVal = (farTotalBuilt / (farPlot || 1)).toFixed(2);

  // 16. Septic
  const septicL = (septicUsers * 0.9).toFixed(1);
  const septicW = (septicUsers * 0.45).toFixed(1);
  const septicLitres = Math.round(septicUsers * 300);

  return (
    <section id="hub" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Studio Engineering Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            17 Engineering &amp; Interior Calculators
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional estimation tools specifically formulated for Nepal building codes, material ratios, municipal permits, and interior fitouts.
          </p>
        </div>

        {/* Main Suite Tabs (Interior, Civil, NBC 205) */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setActiveSuite('interior')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-2xs ${
              activeSuite === 'interior'
                ? 'bg-[#FF5722] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Paintbrush className="w-4 h-4" />
            <span>Interior Studio (6 Tools)</span>
          </button>

          <button
            onClick={() => setActiveSuite('civil')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-2xs ${
              activeSuite === 'civil'
                ? 'bg-[#0A192F] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Civil Takeoffs (6 Tools)</span>
          </button>

          <button
            onClick={() => setActiveSuite('nbc')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-2xs ${
              activeSuite === 'nbc'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>NBC 205:2024 Suite (5 Tools)</span>
          </button>
        </div>

        {/* Hub Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
          {/* 1. Interior Suite */}
          {activeSuite === 'interior' && (
            <div>
              {/* Sub-tool selector */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
                {[
                  { id: 'paint', label: '🎨 Paint & Putty' },
                  { id: 'ceiling', label: '💡 False Ceiling & LED' },
                  { id: 'lighting', label: '🔆 Room Lux' },
                  { id: 'kitchen', label: '🍳 Modular Kitchen' },
                  { id: 'curtain', label: '🪟 Curtains & Fabric' },
                  { id: 'ac', label: '❄️ AC Tonnage' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIntTool(item.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      intTool === item.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Paint Tool */}
              {intTool === 'paint' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Length (ft)</label>
                      <input
                        type="number"
                        value={paintL}
                        onChange={(e) => setPaintL(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Width (ft)</label>
                      <input
                        type="number"
                        value={paintW}
                        onChange={(e) => setPaintW(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Height (ft)</label>
                      <input
                        type="number"
                        value={paintH}
                        onChange={(e) => setPaintH(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Deductions (sq.ft)</label>
                      <input
                        type="number"
                        value={paintDed}
                        onChange={(e) => setPaintDed(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Wall Area</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{Math.round(netPaintArea)} sq.ft</div>
                    <div className="text-sm text-slate-600">
                      Putty: <strong className="text-slate-900">~{paintPuttyKg} kg</strong> &bull; Primer: <strong className="text-slate-900">~{paintPrimerL} L</strong> &bull; Emulsion: <strong className="text-slate-900">~{paintEmulsionL} L</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Ceiling Tool */}
              {intTool === 'ceiling' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Length (ft)</label>
                      <input
                        type="number"
                        value={ceilL}
                        onChange={(e) => setCeilL(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Width (ft)</label>
                      <input
                        type="number"
                        value={ceilW}
                        onChange={(e) => setCeilW(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Gypsum Board Size</label>
                      <select
                        value={ceilBoard}
                        onChange={(e) => setCeilBoard(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={24}>4ft × 6ft (24 sq.ft)</option>
                        <option value={32}>4ft × 8ft (32 sq.ft)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gypsum Board Requirement</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{ceilSheets} Sheets</div>
                    <div className="text-sm text-slate-600">
                      Ceiling Area: <strong className="text-slate-900">{ceilArea} sq.ft</strong> &bull; Perimeter Channel: <strong className="text-slate-900">~{ceilLChannel} Rft</strong> &bull; Cove LED: <strong className="text-slate-900">~{ceilLChannel} ft</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Lighting Tool */}
              {intTool === 'lighting' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Room Function</label>
                      <select
                        value={luxRoom}
                        onChange={(e) => setLuxRoom(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={150}>Living Room (150 Lux)</option>
                        <option value={100}>Bedroom (100 Lux)</option>
                        <option value={300}>Kitchen / Study (300 Lux)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Floor Area (sq.ft)</label>
                      <input
                        type="number"
                        value={luxArea}
                        onChange={(e) => setLuxArea(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Downlight Wattage</label>
                      <select
                        value={luxWatt}
                        onChange={(e) => setLuxWatt(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={7}>7W LED (630 Lumens)</option>
                        <option value={9}>9W LED (810 Lumens)</option>
                        <option value={12}>12W LED (1,080 Lumens)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recommended Illumination</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{lightFixtures} Downlights</div>
                    <div className="text-sm text-slate-600">
                      Total Output: <strong className="text-slate-900">~{Math.round(lumensNeeded)} Lumens</strong> &bull; Total Power Load: <strong className="text-slate-900">~{lightFixtures * luxWatt}W</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Kitchen Tool */}
              {intTool === 'kitchen' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Kitchen Layout</label>
                      <select
                        value={kitLayout}
                        onChange={(e) => setKitLayout(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={1.0}>Straight Single-Wall</option>
                        <option value={1.8}>L-Shape Corner</option>
                        <option value={2.5}>U-Shape Grand</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Primary Wall Run (ft)</label>
                      <input
                        type="number"
                        value={kitLen}
                        onChange={(e) => setKitLen(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cabinet Run &amp; Countertop</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{kitRft} Running Feet</div>
                    <div className="text-sm text-slate-600">
                      Base Cabinets: <strong className="text-slate-900">{kitRft} Rft</strong> &bull; Overhead Cabinets: <strong className="text-slate-900">~{Math.round(kitRft * 0.75)} Rft</strong> &bull; Countertop Granite/Quartz: <strong className="text-slate-900">~{kitCountertop} sq.ft</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Curtains Tool */}
              {intTool === 'curtain' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Window Width (inches)</label>
                      <input
                        type="number"
                        value={curtW}
                        onChange={(e) => setCurtW(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Window Height (inches)</label>
                      <input
                        type="number"
                        value={curtH}
                        onChange={(e) => setCurtH(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Fullness Pleat</label>
                      <select
                        value={curtFull}
                        onChange={(e) => setCurtFull(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={1.8}>1.8× Eyelet Heading</option>
                        <option value={2.2}>2.2× Pinch / Box Pleat</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fabric Requirement</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">~{curtMeters} Meters</div>
                    <div className="text-sm text-slate-600">
                      Total Flat Width: <strong className="text-slate-900">{Math.round(curtW * curtFull)}"</strong> &bull; Recommended Curtain Track: <strong className="text-slate-900">{(curtW / 12).toFixed(1)} Feet</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* AC Tonnage Tool */}
              {intTool === 'ac' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Room Area (sq.ft)</label>
                      <input
                        type="number"
                        value={acArea}
                        onChange={(e) => setAcArea(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Ceiling Height (ft)</label>
                      <input
                        type="number"
                        value={acH}
                        onChange={(e) => setAcH(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Sun Exposure</label>
                      <select
                        value={acExp}
                        onChange={(e) => setAcExp(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={1.0}>Intermediate Floor (Shaded)</option>
                        <option value={1.2}>Top Floor (Direct Sun)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recommended AC Capacity</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{acTon}</div>
                    <div className="text-sm text-slate-600">
                      Estimated Cooling Heat Load: <strong className="text-slate-900">~{Math.round(btu).toLocaleString()} BTU/hr</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Civil Takeoffs Suite */}
          {activeSuite === 'civil' && (
            <div>
              {/* Sub-tool selector */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
                {[
                  { id: 'cost', label: '🏠 Building Cost' },
                  { id: 'plinth', label: '📐 Allowable Plinth' },
                  { id: 'brick', label: '🧱 Brickwork' },
                  { id: 'rcc', label: '🏗️ Concrete RCC' },
                  { id: 'steel', label: '🔩 Stirrup Length' },
                  { id: 'land', label: '🗺️ Trace Map' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCivTool(item.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      civTool === item.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Building Cost Tool */}
              {civTool === 'cost' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Plinth Area (sq.ft)</label>
                      <input
                        type="number"
                        value={housePlinth}
                        onChange={(e) => setHousePlinth(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Storeys</label>
                      <select
                        value={houseStoreys}
                        onChange={(e) => setHouseStoreys(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={1}>1 Storey</option>
                        <option value={2}>2 Storeys</option>
                        <option value={2.5}>2.5 Storeys</option>
                        <option value={3}>3 Storeys</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Construction Tier</label>
                      <select
                        value={houseRate}
                        onChange={(e) => setHouseRate(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={2600}>Standard (Rs. 2,600/sq.ft)</option>
                        <option value={3200}>Premium (Rs. 3,200/sq.ft)</option>
                        <option value={3800}>Luxury Turnkey (Rs. 3,800/sq.ft)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Building Construction Estimate</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">Rs. {totalCostLakhs} Lakhs</div>
                    <div className="text-sm text-slate-600">
                      Total Built-up: <strong className="text-slate-900">{totalBuiltUp.toLocaleString()} sq.ft</strong> &bull; OPC Cement: <strong className="text-slate-900">~{totalCementBags} Bags</strong> &bull; Rebar Steel: <strong className="text-slate-900">~{totalSteelTons} Tons</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Plinth Tool */}
              {civTool === 'plinth' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Land Unit</label>
                      <select
                        value={plinthUnit}
                        onChange={(e) => setPlinthUnit(e.target.value as any)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value="terai">Terai (Kattha / Dhur)</option>
                        <option value="sqft">Square Feet</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">
                        {plinthUnit === 'terai' ? 'Kattha Value' : 'Total Sq.Ft'}
                      </label>
                      <input
                        type="number"
                        value={plinthVal}
                        onChange={(e) => setPlinthVal(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Frontage Width (ft)</label>
                      <input
                        type="number"
                        value={plinthPlotW}
                        onChange={(e) => setPlinthPlotW(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Permissible Ground Plinth Area</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{permissiblePlinth.toLocaleString()} sq.ft</div>
                    <div className="text-sm text-slate-600">
                      Gross Plot Area: <strong className="text-slate-900">{Math.round(plotSqft).toLocaleString()} sq.ft</strong> &bull; Municipal Setbacks: 5ft front road setback applied.
                    </div>
                  </div>
                </div>
              )}

              {/* Brick Tool */}
              {civTool === 'brick' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Wall Length (ft)</label>
                      <input
                        type="number"
                        value={brkL}
                        onChange={(e) => setBrkL(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Wall Height (ft)</label>
                      <input
                        type="number"
                        value={brkH}
                        onChange={(e) => setBrkH(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Thickness</label>
                      <select
                        value={brkT}
                        onChange={(e) => setBrkT(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={9}>9" Main Loadbearing Wall</option>
                        <option value={4.5}>4.5" Partition Wall</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Brickwork Takeoff</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">~{totalBricks.toLocaleString()} Bricks</div>
                    <div className="text-sm text-slate-600">
                      Net Wall Surface: <strong className="text-slate-900">{netWallArea} sq.ft</strong> &bull; Mortar Cement: <strong className="text-slate-900">~{brickCementBags} Bags</strong> (1:6 standard mix)
                    </div>
                  </div>
                </div>
              )}

              {/* RCC Tool */}
              {civTool === 'rcc' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Slab Length (ft)</label>
                      <input
                        type="number"
                        value={rccL}
                        onChange={(e) => setRccL(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Slab Width (ft)</label>
                      <input
                        type="number"
                        value={rccW}
                        onChange={(e) => setRccW(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Thickness (inches)</label>
                      <input
                        type="number"
                        value={rccD}
                        onChange={(e) => setRccD(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">M20 (1:1.5:3) Concrete Mix Takeoff</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">~{rccCementBags} Bags Cement</div>
                    <div className="text-sm text-slate-600">
                      River Sand: <strong className="text-slate-900">~{rccSandCuft} cu.ft</strong> &bull; 20mm Gitti: <strong className="text-slate-900">~{rccGittiCuft} cu.ft</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Steel Stirrup Tool */}
              {civTool === 'steel' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Beam Width B (mm)</label>
                      <input
                        type="number"
                        value={tieB}
                        onChange={(e) => setTieB(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Beam Depth D (mm)</label>
                      <input
                        type="number"
                        value={tieD}
                        onChange={(e) => setTieD(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Clear Cover (mm)</label>
                      <input
                        type="number"
                        value={tieCover}
                        onChange={(e) => setTieCover(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Tie Rebar Dia (mm)</label>
                      <input
                        type="number"
                        value={tieDia}
                        onChange={(e) => setTieDia(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stirrup Bar Cutting Length</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{tieLen} mm ({(tieLen / 1000).toFixed(2)} m)</div>
                    <div className="text-sm text-slate-600">
                      Core Dimensions: <strong className="text-slate-900">{tieB - 2 * tieCover} × {tieD - 2 * tieCover} mm</strong> &bull; Weight per Ring: <strong className="text-slate-900">~{tieWeightKg} kg</strong> (135° seismic hooks included)
                    </div>
                  </div>
                </div>
              )}

              {/* Trace Map Tool */}
              {civTool === 'land' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Cadastral Map Scale</label>
                      <select
                        value={traceScale}
                        onChange={(e) => setTraceScale(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      >
                        <option value={500}>1:500 (Urban detailed parcel)</option>
                        <option value={1200}>1:1200 (Standard Terai / Lalpurja map)</option>
                        <option value={2400}>1:2400 (Rural district survey)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Length on Map (Centimeters)</label>
                      <input
                        type="number"
                        value={traceCm}
                        onChange={(e) => setTraceCm(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Actual Ground Distance</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{groundM.toFixed(1)} Meters ({groundFt} Feet)</div>
                    <div className="text-sm text-slate-600">
                      1 cm measured with ruler = <strong className="text-slate-900">{(traceScale / 100).toFixed(1)} meters</strong> on the actual land.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. NBC 205 (2081) Suite */}
          {activeSuite === 'nbc' && (
            <div>
              {/* Sub-tool selector */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
                {[
                  { id: 'pga', label: '🇳🇵 PGA Lookup' },
                  { id: 'detailing', label: '📋 Member Detailing' },
                  { id: 'soil', label: '⚖️ Soil Bearing (SBC)' },
                  { id: 'far', label: '🏢 FAR & BCR' },
                  { id: 'septic', label: '🚰 Septic Tank' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setNbcTool(item.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      nbcTool === item.id
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* PGA Lookup Tool */}
              {nbcTool === 'pga' && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Select Nepal Municipality / District</label>
                    <select
                      value={pgaZ}
                      onChange={(e) => setPgaZ(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                    >
                      <option value="0.35">Parsa - Birgunj Metropolitan City (PGA Z = 0.35g)</option>
                      <option value="0.40">Chitwan - Bharatpur Metropolitan City (PGA Z = 0.40g)</option>
                      <option value="0.35">Kathmandu Metropolitan City (PGA Z = 0.35g)</option>
                      <option value="0.35">Lalitpur Metropolitan City (PGA Z = 0.35g)</option>
                      <option value="0.35">Pokhara Metropolitan City (PGA Z = 0.35g)</option>
                      <option value="0.30">Bara - Kalaiya Sub-Metropolitan (PGA Z = 0.30g)</option>
                    </select>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">NBC 105:2020 / NBC 205:2024 Parameter</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">PGA (Z) = {pgaZ}g</div>
                    <div className="text-sm text-slate-600">
                      Seismic Zone Factor: <strong className="text-slate-900">{pgaZ}</strong> &bull; Importance Factor I = <strong className="text-slate-900">1.0</strong> (Residential) &bull; Ductility Factor Rμ = <strong className="text-slate-900">4.0</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Member Detailing Tool */}
              {nbcTool === 'detailing' && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Number of Storeys</label>
                    <select
                      value={detailStorey}
                      onChange={(e) => setDetailStorey(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                    >
                      <option value="2">2 Storeys (NBC 205 Section 8)</option>
                      <option value="3">3 Storeys (NBC 205 Section 9)</option>
                    </select>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mandatory Structural Schedule</div>
                    <div className="text-2xl font-black text-slate-900 font-mono my-1">
                      {is2Storey ? 'Col: 350×350 mm | Footing: 1.5×1.5 m' : 'Col: 400×400 mm | Footing: 1.9×1.9 m'}
                    </div>
                    <div className="text-sm text-slate-600 space-y-1">
                      <div>
                        Column Rebar: <strong className="text-slate-900">{is2Storey ? '4-16Ø + 4-12Ø Fe500' : '8-16Ø or 4-20Ø + 4-16Ø Fe500'}</strong>
                      </div>
                      <div>
                        Plinth Beam: <strong className="text-slate-900">250×355 mm (Top 3-12Ø, Bottom 3-12Ø)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Soil Bearing Tool */}
              {nbcTool === 'soil' && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">6kg Weight Drop Impression Depth (mm)</label>
                    <input
                      type="number"
                      value={sbcDepth}
                      onChange={(e) => setSbcDepth(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                    />
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Safe Bearing Capacity (SBC)</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">{sbcVal}</div>
                    <div className="text-sm text-slate-600">
                      Classification: <strong className="text-slate-900">{sbcDepth <= 12 ? 'Hard/Dense Soil' : sbcDepth <= 17 ? 'Medium Compact Soil' : 'Soft Clayey Soil'}</strong> &bull; NBC 205 Cl 3.5 Field Test Protocol.
                    </div>
                  </div>
                </div>
              )}

              {/* FAR & BCR Tool */}
              {nbcTool === 'far' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Total Plot Area (sq.ft)</label>
                      <input
                        type="number"
                        value={farPlot}
                        onChange={(e) => setFarPlot(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Total Built-up All Floors (sq.ft)</label>
                      <input
                        type="number"
                        value={farTotalBuilt}
                        onChange={(e) => setFarTotalBuilt(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Municipal FAR Ratio</div>
                    <div className="text-3xl font-black text-slate-900 font-mono my-1">FAR: {farVal}</div>
                    <div className="text-sm text-slate-600">
                      Standard Nepal residential guideline: FAR &le; 2.0 &bull; Ready for municipal Naksha Pass submission.
                    </div>
                  </div>
                </div>
              )}

              {/* Septic Tank Tool */}
              {nbcTool === 'septic' && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-600 block mb-1">Number of Household Users</label>
                    <input
                      type="number"
                      value={septicUsers}
                      onChange={(e) => setSepticUsers(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-semibold"
                    />
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recommended Septic Tank Dimensions</div>
                    <div className="text-2xl font-black text-slate-900 font-mono my-1">{septicL} ft × {septicW} ft × 5.0 ft Depth</div>
                    <div className="text-sm text-slate-600">
                      Required Liquid Volume: <strong className="text-slate-900">~{septicLitres.toLocaleString()} Liters</strong> &bull; 2-Chamber RCC construction with soak pit connection.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Consultation CTA */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-600 text-center sm:text-left">
              Need custom NBC calculations, soil lab test, or a formal BOQ for your bank loan?
            </span>
            <a
              href="https://wa.me/9779703881733?text=Hi%20Scale%20and%20Spaces,%20I%20need%20custom%20structural%20engineering%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-2xs whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Consult Lead Engineer</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
