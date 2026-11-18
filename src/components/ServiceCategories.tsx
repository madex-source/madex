import React from 'react';
import {
  Home,
  Compass,
  UtensilsCrossed,
  ShieldCheck,
  Droplets,
  Building,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ArticleItem } from '../types';

interface ServiceCategoriesProps {
  onOpenInspectionModal: () => void;
  articles?: ArticleItem[];
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({
  onOpenInspectionModal,
  articles = [],
}) => {
  // Built-in fallback default services
  const fallbackServices = [
    {
      title: 'Complete Home Renovation & Remodeling',
      subtitle: 'Old Structure Overhaul',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fit=crop&q=80',
      description:
        'Full-scale residential transformation including wall removals, layout redesign, flooring replacements, and modern aesthetic upgrades in Kathmandu and Birgunj.',
      category: 'Home Renovation',
    },
    {
      title: 'Architectural 2D & 3D Naksha Pass',
      subtitle: 'Municipal Approval Sets',
      icon: Compass,
      image: 'https://i.postimg.cc/ryKvxdrN/Bedroom-render-Project2-1.png',
      description:
        'Comprehensive AutoCAD working blueprints, municipal permit submission packages, bioclimatic cross-ventilation, and photorealistic 3D elevations.',
      category: 'Architectural & Naksha',
    },
    {
      title: 'Modular Kitchens & Interior Architecture',
      subtitle: 'Luxury Living Spaces',
      icon: UtensilsCrossed,
      image: 'https://i.postimg.cc/1XH29vcT/Modular-Kitchen-vs-Carpenters-Kitchen-in-Birgunj.jpg',
      description:
        'Custom ergonomic modular kitchens with moisture-resistant BWP marine ply, quartz stone countertops, false ceilings, and ambient acoustic illumination.',
      category: 'Modular Interior',
    },
    {
      title: 'NBC 205:2024 Civil & Structural Engineering',
      subtitle: 'Seismic Safety Standard',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&fit=crop&q=80',
      description:
        'Engineering design adhering to NBC 205 (2081 BS update) and NBC 105:2020. Column, beam, and footing schedules tailored for Nepal’s seismic PGA zones.',
      category: 'Structural Engineering',
    },
    {
      title: 'Dampness, Seepage & Waterproofing Solutions',
      subtitle: 'Durable Moisture Protection',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&fit=crop&q=80',
      description:
        'Scientific diagnostics and chemical treatment for rising wall dampness, leaking terrace slabs, basement moisture, and bathroom tile seepages across Nepal.',
      category: 'Waterproofing',
    },
    {
      title: 'Commercial, Clinic & Hospital Turnkey Projects',
      subtitle: 'Institutional & Retail',
      icon: Building,
      image: 'https://i.postimg.cc/jn7G8bwV/Resturant-Office-Interior.png',
      description:
        'Turnkey architectural and interior execution for corporate offices, medical clinics, sterile hospital zones, and high-footfall restaurants.',
      category: 'Commercial Turnkey',
    },
  ];

  // If Google Sheet Article tab has rows, dynamically display them here!
  const displayItems =
    articles && articles.length > 0
      ? articles.map((art, idx) => ({
          title: art.title,
          subtitle: art.category || 'Specialized Discipline',
          image: art.imageUrl || fallbackServices[idx % fallbackServices.length].image,
          description:
            art.summary || art.excerpt || 'Professional architectural and turnkey engineering service.',
          category: art.category || 'Discipline',
          icon: fallbackServices[idx % fallbackServices.length].icon,
        }))
      : fallbackServices;

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FDFAF6] border-b border-[#E5D0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Disciplines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1010] tracking-tight">
            Integrated Services Built for Nepal's Standards
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B4A4A] leading-relaxed">
            From single-room interior renovations to multi-storey NBC 205 earthquake-resistant constructions, we deliver turnkey precision with transparent cost tracking.
          </p>
        </div>

        {/* Services Grid (Dynamically linked to Google Sheet 'Article' / 'Articles' Tab) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((service, idx) => {
            const Icon = service.icon || Building;
            return (
              <div
                key={idx}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#B02828] transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Image Container */}
                {service.image ? (
                  <div className="relative h-48 w-full overflow-hidden bg-[#1C0A0A]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0A]/75 via-transparent to-transparent" />

                    {/* Category Pill */}
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#8B1A1A] border border-[#E5D0D0] shadow-xs">
                      <Icon className="w-3.5 h-3.5 text-[#8B1A1A]" />
                      <span>{service.subtitle}</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-28 w-full bg-gradient-to-br from-[#1C0A0A] to-[#2E0B0B] p-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                      <Icon className="w-3.5 h-3.5 text-[#8B1A1A]" />
                      <span>{service.subtitle}</span>
                    </div>
                  </div>
                )}

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1C1010] group-hover:text-[#8B1A1A] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B4A4A] line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-[#E5D0D0] flex items-center justify-between">
                    <button
                      onClick={onOpenInspectionModal}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#8B1A1A] hover:text-[#6B1212] transition-colors"
                    >
                      <span>Book Free Inspection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/9779703881733?text=${encodeURIComponent(
                        `Hi Scale and Spaces, I want to inquire about ${service.title} for my property.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
