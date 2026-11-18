import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C0A0A] text-slate-300 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/cJbhzmkF/Logo.png"
                alt="Scale and Spaces Logo"
                className="w-9 h-9 object-contain"
                width={36}
                height={36}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.postimg.cc/Y043kmZp/Favicon.png';
                }}
              />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                SCALE <span className="text-[#B02828]">&amp;</span> SPACES
              </span>
            </a>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Sensitizing scale to create spaces where human life interacts with structural safety. Integrated architectural planning, home renovation, civil engineering, and turnkey construction practice in Nepal.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NBC 205:2024 &bull; NBC 105:2020 Registered Practice</span>
            </div>
          </div>

          {/* Column 2: Core Disciplines */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Home Renovation
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  2D AutoCAD Naksha
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  3D Photorealism &amp; VR
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  NBC 205 Engineering
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  BOQ Valuation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Turnkey Execution
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Hub Tools */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white">
              Studio Calculators
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  Paint &amp; Putty Sizer
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  False Ceiling &amp; LED
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  Concrete RCC Mix (M20)
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  PGA Nepal Municipal Lookup
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-white transition-colors">
                  Kathmandu &amp; Birgunj Rates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Practice Offices */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white">
              Practice Locations
            </h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B02828] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Head Office:</strong> Tokha-6, Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Regional Hub:</strong> Birgunj-12, Parsa, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B02828] shrink-0" />
                <a href="tel:+9779703881733" className="hover:text-white">
                  +977 9703881733
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B02828] shrink-0" />
                <a href="mailto:studio@scaleandspaces.com" className="hover:text-white">
                  studio@scaleandspaces.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {new Date().getFullYear()} <strong>Scale and Spaces Private Limited</strong>. All rights reserved. Registered in Nepal.
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <a
              href="https://www.instagram.com/scaleandspaces/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.facebook.com/p/Scale-and-Spaces-61555038874110/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <i className="fa-brands fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://np.linkedin.com/in/chetansarraf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </a>
            <a
              href="#home"
              className="hover:text-white transition-colors inline-flex items-center gap-1 font-bold"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
