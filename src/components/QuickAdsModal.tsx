import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Sparkles,
  MessageCircle,
  Mail,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Bell,
  Download,
  MapPin,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { AdItem } from '../types';

interface QuickAdsModalProps {
  ads: AdItem[];
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function QuickAdsModal({ ads, isOpen, onClose, onOpen }: QuickAdsModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Auto-advance if multiple ads
  useEffect(() => {
    if (!isOpen || ads.length <= 1 || isFullscreenImage) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isOpen, ads.length, isFullscreenImage]);

  // Reset zoom when modal opens or closes
  useEffect(() => {
    if (!isFullscreenImage) {
      setZoomLevel(1);
    }
  }, [isFullscreenImage]);

  if (!ads || ads.length === 0) return null;

  const currentAd = ads[currentIndex] || ads[0];
  const isHiring = /hiring|job|career|vacancy|architect|engineer|intern/i.test(
    `${currentAd.title} ${currentAd.caption}`
  );

  const prevAd = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  const nextAd = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  };

  const whatsappHref = `https://wa.me/9779703881733?text=${encodeURIComponent(
    isHiring
      ? `Hello Scale and Spaces Private Limited, I saw your hiring advertisement "${currentAd.title}" (${currentAd.caption}) on your website. I am interested in applying. Here are my details:`
      : `Hello Scale and Spaces Private Limited, I am inquiring regarding "${currentAd.title}".`
  )}`;

  const mailHref = `mailto:studio@scaleandspaces.com?subject=${encodeURIComponent(
    isHiring ? `Job Application: ${currentAd.title} - Scale and Spaces` : `Inquiry: ${currentAd.title}`
  )}&body=${encodeURIComponent(
    `Dear Scale and Spaces Recruitment Team,\n\nI am writing to apply regarding the "${currentAd.title}" vacancy posted on your website.\n\nName:\nContact Number:\nCity (Kathmandu / Birgunj / Other):\nPortfolio / CV link:\n\nLooking forward to hearing from you.\nThank you.`
  )}`;

  return (
    <>
      {/* Floating Re-open Badge when Closed */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="View announcements and job vacancies"
          className="fixed left-4 bottom-24 sm:bottom-6 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold rounded-full shadow-2xl border border-orange-500/40 transition-all transform hover:scale-105 group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5722]"></span>
          </span>
          <span className="flex items-center gap-1.5">
            {isHiring ? <Briefcase className="w-3.5 h-3.5 text-[#FF5722]" /> : <Bell className="w-3.5 h-3.5 text-[#FF5722]" />}
            <span>{isHiring ? 'We are Hiring!' : 'Notices & Offers'}</span>
          </span>
          {ads.length > 1 && (
            <span className="px-1.5 py-0.5 rounded-full bg-[#FF5722] text-[10px] font-black text-white">
              {currentIndex + 1}/{ads.length}
            </span>
          )}
        </button>
      )}

      {/* Main Responsive Announcement Modal (Adaptive Desktop Side-by-Side / Mobile Stacked) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-ad-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-auto animate-scale-up flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Badge, Counter & Close Button */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-gradient-to-r from-slate-900 via-[#0A192F] to-slate-900 text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FF5722]/20 text-[#FF5722]">
                  {isHiring ? <Briefcase className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </span>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-orange-400 block leading-tight">
                    {isHiring ? 'Official Hiring & Career Notice' : 'Official Notice & Announcement'}
                  </span>
                  <span className="text-[10px] text-slate-400 block">Scale and Spaces Private Limited</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {ads.length > 1 && (
                  <span className="text-xs font-mono text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                    {currentIndex + 1} / {ads.length}
                  </span>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close Announcement"
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Adaptive 2-Column on Desktop for Full Poster Resolution */}
            <div className="overflow-y-auto flex-1 flex flex-col md:flex-row">
              {/* Left Column: High-Resolution Poster View (Full Height, No Grey Letterboxing) */}
              {currentAd.imageUrl && (
                <div className="md:w-7/12 bg-slate-950 flex flex-col items-center justify-center relative p-3 sm:p-5 border-b md:border-b-0 md:border-r border-slate-200">
                  <div className="relative group max-h-[55vh] md:max-h-[75vh] w-full flex items-center justify-center">
                    <img
                      src={currentAd.imageUrl}
                      alt={currentAd.title}
                      className="max-h-[55vh] md:max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl cursor-zoom-in transition-transform duration-200 group-hover:scale-[1.01]"
                      onClick={() => setIsFullscreenImage(true)}
                      loading="eager"
                    />

                    {/* Quick 100% Zoom Button Overlay */}
                    <button
                      onClick={() => setIsFullscreenImage(true)}
                      aria-label="View Full Resolution"
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3.5 py-2 bg-black/85 hover:bg-black text-white text-xs font-bold rounded-full backdrop-blur-md shadow-2xl border border-white/20 transition-all hover:scale-105"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>100% Full Resolution</span>
                    </button>

                    {/* Left/Right Carousel Nav */}
                    {ads.length > 1 && (
                      <>
                        <button
                          onClick={prevAd}
                          aria-label="Previous announcement"
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 hover:bg-black text-white shadow-xl transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextAd}
                          aria-label="Next announcement"
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 hover:bg-black text-white shadow-xl transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 mt-2 text-center">
                    Click poster or use the zoom button to inspect full-size image details.
                  </p>
                </div>
              )}

              {/* Right Column: Key Details, Hiring Requirements & Action Buttons */}
              <div className={`p-5 sm:p-7 flex flex-col justify-between ${currentAd.imageUrl ? 'md:w-5/12' : 'w-full'}`}>
                <div className="space-y-4">
                  {/* Status & Title */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active Position
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Scale and Spaces</span>
                  </div>

                  <div>
                    <h3 id="quick-ad-title" className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {currentAd.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#FF5722] mt-0.5">
                      {isHiring ? 'Architectural & Engineering Practice' : currentAd.caption}
                    </p>
                  </div>

                  {/* Highlights from Poster */}
                  {isHiring ? (
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Position:</strong> An Architect / 3D Visualizer
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Office:</strong> Birgunj (Infront of Indian Embassy) &amp; Tokha-6, Kathmandu
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Briefcase className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Role:</strong> "To think beyond walls, to design what's next!" (AutoCAD, 3D Renders, NBC 205 compliance)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Email CV:</strong> studio@scaleandspaces.com
                        </div>
                      </div>
                    </div>
                  ) : (
                    currentAd.caption && (
                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {currentAd.caption}
                      </div>
                    )
                  )}

                  {/* Quick Specs */}
                  <div className="text-[11px] text-slate-500 space-y-1">
                    <p>• Lead Contact: Scale and Spaces. pvt. Ltd. (+977 9703881733)</p>
                    <p>• Direct submission on WhatsApp or Email is accepted immediately.</p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 space-y-2.5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-extrabold rounded-xl shadow-md transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isHiring ? 'Apply Directly on WhatsApp' : 'Inquire on WhatsApp'}</span>
                  </a>

                  {isHiring && (
                    <a
                      href={mailHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-98"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Resume / Portfolio</span>
                    </a>
                  )}

                  {currentAd.imageUrl && (
                    <button
                      onClick={() => setIsFullscreenImage(true)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>Inspect Raw Image Fullscreen</span>
                    </button>
                  )}

                  {/* Carousel Indicator Dots */}
                  {ads.length > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-2">
                      {ads.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          aria-label={`Go to ad ${idx + 1}`}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentIndex ? 'w-7 bg-[#FF5722]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Ultra-High-Resolution Interactive Lightbox View */}
      {isFullscreenImage && currentAd.imageUrl && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col p-3 sm:p-5 animate-fade-in"
          onClick={() => setIsFullscreenImage(false)}
        >
          {/* Lightbox Controls */}
          <div
            className="flex items-center justify-between text-white pb-3 max-w-6xl mx-auto w-full shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm sm:text-base font-bold text-white">{currentAd.title}</span>
              <span className="text-xs text-orange-400 bg-white/10 px-2.5 py-0.5 rounded-full font-mono">
                {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                title="Zoom Out"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                title="Reset Zoom (100%)"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.min(3, z + 0.25))}
                title="Zoom In"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <a
                href={currentAd.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="scale-and-spaces-poster.jpg"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF5722] hover:bg-[#E64A19] text-xs font-bold rounded-lg transition-colors text-white ml-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Raw JPG</span>
              </a>

              <button
                onClick={() => setIsFullscreenImage(false)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors ml-1"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Full Resolution Centered & Zoomable Graphic */}
          <div
            className="flex-1 flex items-center justify-center overflow-auto p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentAd.imageUrl}
              alt={currentAd.title}
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: 'transform 0.15s ease-out',
              }}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>
      )}
    </>
  );
}
