import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { HeroContent, PostItem } from '../types';

interface HeroSectionProps {
  hero: HeroContent;
  onOpenInspectionModal: () => void;
  posts?: PostItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  hero,
  onOpenInspectionModal,
  posts = [],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Background slides dynamically fed from Google Sheet 'Posts' tab (or portfolio fallback)
  const backgroundSlides =
    posts && posts.length > 0
      ? posts
      : [
          {
            title: 'Hyatt Community Hospital',
            caption: 'Tertiary healthcare facility master planned with NBC 105 seismic ductility.',
            imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&fit=crop&q=85',
          },
          {
            title: 'BYD Birgunj Showroom & Corporate Complex',
            caption: 'Structural glass facade and executive commercial corporate spaces.',
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&fit=crop&q=85',
          },
          {
            title: 'Tulsi Gupta Luxury Private Residence',
            caption: 'Bespoke architectural residence with warm LED coving and Italian marble.',
            imageUrl: 'https://i.postimg.cc/SRvT1GYp/Modern-Luxuary-Living-room-Project1.jpg',
          },
          {
            title: 'Contemporary Master Residence & Penthouse',
            caption: 'Turnkey architectural renovation and modern interior execution.',
            imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&fit=crop&q=85',
          },
          {
            title: 'Adarsh City Center & Yash Commercial Complex',
            caption: 'Mixed-use commercial mall with high-speed escalators and seismic foundations.',
            imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&fit=crop&q=85',
          },
        ];

  const totalSlides = backgroundSlides.length;

  // Auto-advance background every 5 seconds
  useEffect(() => {
    if (totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides]);

  // Keep slide in bounds if posts update dynamically from Google Sheet
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  return (
    <section
      id="home"
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#1C0A0A]"
    >
      {/* Background Image Carousel with Smooth Fade Transitions */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform transition-transform duration-7000`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title || 'Scale and Spaces Project'}
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600';
              }}
            />
          </div>
        ))}

        {/* Warm Rich Crimson-Obsidian Overlay (Matching Saubhagya Ghar / image_f35918f5.png) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#2E0B0B]/75 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
      </div>

      {/* Hero Content Container (Pristine, Centered, No Clutter) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 flex flex-col items-center">
        {/* Subtitle Kicker (Clean, Elegant, Tracking-Widest) */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-white/80 uppercase mb-4 sm:mb-6">
          {hero.badge || 'SCALE & SPACES • TOKHA & BIRGUNJ'}
        </p>

        {/* Editorial Serif Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl text-balance">
          {hero.title || 'Home Renovation, Bathroom & Interior Design in Birgunj & Kathmandu'}
        </h1>

        {/* Concise Description */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          {hero.description ||
            'Plan practical home renovations and interior spaces in Kathmandu and Birgunj across Nepal with clear scope, thoughtful design and coordinated execution.'}
        </p>

        {/* Clean Action Buttons (Exactly two: Book Inspection + Call Now) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Crimson CTA Button */}
          <button
            onClick={onOpenInspectionModal}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#8B1A1A] hover:bg-[#6B1212] rounded-md shadow-lg transition-all duration-200 active:scale-95 group cursor-pointer"
          >
            <span>Book Inspection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Outlined Call Button */}
          <a
            href="tel:+9779703881733"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-transparent hover:bg-white/10 border border-white/40 hover:border-white rounded-md transition-all duration-200 active:scale-95"
          >
            <Phone className="w-4 h-4 text-white/90" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* Bottom Horizontal Slide Indicator Dashes (Matching image_f35918f5.png) */}
      {totalSlides > 1 && (
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 flex items-center justify-center gap-2">
          {backgroundSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-white opacity-100 shadow-xs'
                  : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
