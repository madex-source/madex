import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  RefreshCw,
  ArrowRight,
  Menu,
  X,
  Calendar,
  Briefcase,
  MessageSquare,
} from 'lucide-react';
import { OFFICIAL_LOGO_URL } from '../services/googleSheets';

interface TopBarProps {
  onRefreshData?: () => void;
  isSyncing?: boolean;
  lastSyncedAt?: Date | null;
  onOpenInspectionModal: () => void;
  onOpenAdsModal?: () => void;
  adsCount?: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  onRefreshData,
  isSyncing = false,
  lastSyncedAt,
  onOpenInspectionModal,
  onOpenAdsModal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#1C0A0A] text-[#FDFAF6] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#8B1A1A]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#8B1A1A]" />
              <span>Head Office: Tokha-6, Kathmandu | Contact Office: Birgunj-12, Parsa</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+9779703881733"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B02828]" />
              <span className="font-semibold text-white">+977 9703881733</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href="mailto:studio@scaleandspaces.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#B02828]" />
              <span>studio@scaleandspaces.com</span>
            </a>
            {lastSyncedAt && (
              <button
                onClick={onRefreshData}
                disabled={isSyncing}
                title="Sync with Google Sheet"
                className="hidden lg:flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{isSyncing ? 'Syncing...' : 'Live Synced'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar (Matching image_f35918f5.png) */}
      <header className="sticky top-0 z-50 bg-[#FDFAF6]/95 backdrop-blur-md border-b border-[#E5D0D0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Brand Logo & Name */}
            <a href="#home" className="flex items-center gap-3 shrink-0 group">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Scale and Spaces Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                width={40}
                height={40}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://i.postimg.cc/Y043kmZp/Favicon.png';
                }}
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1010] leading-tight">
                  SCALE &amp; SPACES
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#6B4A4A] uppercase">
                  Scale and Spaces Private Limited
                </span>
              </div>
            </a>

            {/* Center Desktop Navigation Links (Matching image_f35918f5.png) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1C1010]">
              <a
                href="#home"
                className="hover:text-[#8B1A1A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8B1A1A]"
              >
                Home
              </a>
              <a href="#services" className="hover:text-[#8B1A1A] transition-colors py-1">
                Services
              </a>
              <a href="#portfolio" className="hover:text-[#8B1A1A] transition-colors py-1">
                Projects
              </a>
              <a href="#team" className="hover:text-[#8B1A1A] transition-colors py-1">
                Team
              </a>
              <a href="#about" className="hover:text-[#8B1A1A] transition-colors py-1">
                About
              </a>
              <a href="#rates" className="hover:text-[#8B1A1A] transition-colors py-1">
                Rates
              </a>
            </nav>

            {/* Right Action Button & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              {/* Crimson Primary CTA (Matching image_f35918f5.png) */}
              <button
                onClick={onOpenInspectionModal}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#8B1A1A] hover:bg-[#6B1212] rounded-md shadow-sm hover:shadow transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white/90" />
                <span>Free Inspection</span>
              </button>

              {/* Three-Line Menu Button for Mobile & Secondary Links */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 text-[#1C1010] hover:text-[#8B1A1A] hover:bg-[#F5E8E8] rounded-md border border-[#E5D0D0] transition-colors focus:outline-hidden md:hidden"
                aria-label="Toggle navigation drawer"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer for Mobile */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#FDFAF6] h-full shadow-2xl border-l border-[#E5D0D0] overflow-y-auto flex flex-col p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5D0D0]">
              <div className="flex items-center gap-2.5">
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="Scale and Spaces Logo"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <div className="font-serif font-bold text-lg text-[#1C1010] leading-tight">
                    SCALE &amp; SPACES
                  </div>
                  <div className="text-[10px] text-[#6B4A4A] uppercase tracking-wider">
                    Scale and Spaces Private Limited
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 text-[#6B4A4A] hover:text-[#1C1010] hover:bg-[#F5E8E8] rounded-md transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#6B4A4A] px-2 mb-2">
                Site Navigation
              </div>
              {[
                { label: 'Home Overview', href: '#home' },
                { label: 'Turnkey Services & Disciplines', href: '#services' },
                { label: 'Instant BOQ Cost Estimator', href: '#calculator' },
                { label: 'Blueprints & Inspection Packages', href: '#packages' },
                { label: '2D CAD to 3D Photorealism', href: '#compare' },
                { label: 'Engineering Blueprints Hub', href: '#hub' },
                { label: 'Architecture & Interior Portfolio', href: '#portfolio' },
                { label: 'Live Material Rates & Takeoff', href: '#rates' },
                { label: 'About Scale and Spaces', href: '#about' },
                { label: 'Engineering Team', href: '#team' },
                { label: 'Client FAQs', href: '#faq' },
                { label: 'Contact & Offices (KTM & Birgunj)', href: '#contact' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#1C1010] hover:bg-[#F5E8E8] hover:text-[#8B1A1A] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B4A4A]" />
                </a>
              ))}
            </div>

            {/* Career / Hiring Popup Trigger */}
            {onOpenAdsModal && (
              <button
                onClick={() => {
                  onOpenAdsModal();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] hover:bg-[#E5D0D0] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>We are Hiring! View Careers &amp; Notices</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#8B1A1A] text-white text-[10px]">
                  Openings
                </span>
              </button>
            )}

            {/* Sync live sheet button */}
            {onRefreshData && (
              <button
                onClick={() => {
                  onRefreshData();
                  setMenuOpen(false);
                }}
                disabled={isSyncing}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#E5D0D0] text-xs font-semibold text-[#1C1010] hover:bg-[#F5E8E8] transition-colors"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#8B1A1A]' : 'text-emerald-600'}`}
                />
                <span>{isSyncing ? 'Syncing...' : 'Sync Live Sheet'}</span>
              </button>
            )}

            {/* Primary Action Button inside Drawer */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenInspectionModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#8B1A1A] hover:bg-[#6B1212] rounded-md shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Property Inspection</span>
              </button>
            </div>

            {/* Practice Footnote */}
            <div className="pt-4 border-t border-[#E5D0D0] text-[11px] text-[#6B4A4A] space-y-1">
              <div>
                <strong>Head Office:</strong> Tokha-6, Kathmandu
              </div>
              <div>
                <strong>Contact Office:</strong> Birgunj-12, Parsa (Opp. Indian Embassy)
              </div>
              <div>
                <strong>Phone / WhatsApp:</strong> +977 9703881733
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
