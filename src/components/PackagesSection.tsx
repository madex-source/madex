import React from 'react';
import { Check, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { PackageItem } from '../types';

interface PackagesSectionProps {
  packages: PackageItem[];
  onOpenInspectionModal: (packageTitle?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onOpenInspectionModal,
}) => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-[#FDFAF6] border-b border-[#E5D0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
            <span>Transparent Inspection Tiers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1010] tracking-tight">
            Design &amp; Site Inspection Packages
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B4A4A] leading-relaxed">
            Transparent, fixed pricing for site measurements, structural feasibility, AutoCAD 2D drafting, and photorealistic 3D visualization.
          </p>
        </div>

        {/* Packages Cards Grid (Saubhagya Ghar Editorial Tier Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            const whatsappMsg = `Hi Scale and Spaces, I want to book the ${pkg.name} (${pkg.price}) for my property.`;

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#1C0A0A] text-white shadow-2xl ring-2 ring-[#8B1A1A] scale-100 lg:-translate-y-2'
                    : 'bg-white text-[#1C1010] border border-[#E5D0D0] hover:border-[#B02828] hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8B1A1A] text-white text-xs font-bold uppercase tracking-[0.08em] shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Badge */}
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-4 ${
                      isPopular
                        ? 'bg-white/10 text-rose-200 border border-white/20'
                        : 'bg-[#F5E8E8] text-[#8B1A1A] border border-[#B02828]/20'
                    }`}
                  >
                    {pkg.badge}
                  </span>

                  {/* Title & Price */}
                  <h3 className="font-serif text-2xl font-bold tracking-tight mb-2">
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span
                      className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${
                        isPopular ? 'text-white' : 'text-[#8B1A1A]'
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isPopular ? 'text-white/60' : 'text-[#6B4A4A]'
                      }`}
                    >
                      / project
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      isPopular ? 'text-white/80' : 'text-[#6B4A4A]'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div
                    className={`pt-6 border-t space-y-3 mb-8 ${
                      isPopular ? 'border-white/15' : 'border-[#E5D0D0]'
                    }`}
                  >
                    <div
                      className={`text-xs font-bold uppercase tracking-[0.08em] mb-2 ${
                        isPopular ? 'text-white/60' : 'text-[#6B4A4A]'
                      }`}
                    >
                      Included Deliverables:
                    </div>

                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            isPopular
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? 'text-white/90' : 'text-[#1C1010]'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/9779703881733?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md font-bold text-sm transition-all shadow-sm active:scale-98 ${
                      isPopular
                        ? 'bg-[#8B1A1A] hover:bg-[#6B1212] text-white shadow-md'
                        : 'bg-[#1C0A0A] hover:bg-[#1C0A0A]/90 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Request on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenInspectionModal(pkg.name)}
                    className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                      isPopular
                        ? 'text-white/70 hover:text-white hover:bg-white/10'
                        : 'text-[#6B4A4A] hover:text-[#1C1010] hover:bg-[#F5E8E8]'
                    }`}
                  >
                    <span>Or Book Site Visit Inspection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
