import React from 'react';
import { ShieldCheck, Award, MapPin, Globe, CheckCircle2, User } from 'lucide-react';
import { AboutContent, TeamMember } from '../types';

interface AboutAndTeamProps {
  about: AboutContent;
  team: TeamMember[];
  onOpenInspectionModal: () => void;
}

export const AboutAndTeam: React.FC<AboutAndTeamProps> = ({
  about,
  team,
  onOpenInspectionModal,
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FDFAF6] border-b border-[#E5D0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Firm Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src={about.photoUrl}
                alt="Scale and Spaces Leadership"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0A]/90 via-[#1C0A0A]/20 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1A1A] text-xs font-bold uppercase tracking-[0.08em] mb-2 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>Licensed Nepal Practice</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold">Scale and Spaces Private Limited</h4>
                <p className="text-xs text-white/80">
                  Head Office: Tokha-6, Kathmandu &bull; Regional Hub: Birgunj-12, Parsa
                </p>
              </div>
            </div>
          </div>

          {/* About Text Content (Saubhagya Ghar Editorial Layout) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em]">
              <span>Corporate Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1010] tracking-tight leading-tight text-balance">
              {about.title}
            </h2>

            <div className="space-y-4 text-[#6B4A4A] text-base leading-relaxed">
              <p>{about.bioP1}</p>
              <p>{about.bioP2}</p>
            </div>

            {/* Credentials Row */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#E5D0D0]">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#1C1010] font-mono">
                  {about.stat1Num}
                </div>
                <div className="text-xs text-[#6B4A4A] font-bold uppercase tracking-[0.08em] mt-1">
                  {about.stat1Label}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#1A3A2A] font-mono">
                  {about.stat2Num}
                </div>
                <div className="text-xs text-[#6B4A4A] font-bold uppercase tracking-[0.08em] mt-1">
                  {about.stat2Label}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#8B1A1A] font-mono">
                  {about.stat3Num}
                </div>
                <div className="text-xs text-[#6B4A4A] font-bold uppercase tracking-[0.08em] mt-1">
                  {about.stat3Label}
                </div>
              </div>
            </div>

            {/* Core Competencies Clusters without percentiles */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-[#1C1010]">
              <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E5D0D0] shadow-2xs">
                📐 Architectural Design
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E5D0D0] shadow-2xs">
                🏗️ Civil Engineering &amp; NBC 205
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E5D0D0] shadow-2xs">
                🧊 3D Photorealism
              </span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E5D0D0] shadow-2xs">
                📊 Itemized BOQ Cost Control
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6B4A4A] font-medium pt-2">
              <Globe className="w-4 h-4 text-[#8B1A1A]" />
              <span>Practice Consultation Languages: <strong className="text-[#1C1010]">{about.languages}</strong></span>
            </div>
          </div>
        </div>

        {/* Section 2: Leadership & Engineering Team */}
        <div id="team" className="pt-16 border-t border-[#E5D0D0]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
              <Award className="w-3.5 h-3.5 text-[#8B1A1A]" />
              <span>Engineering Leadership</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1010] tracking-tight">
              Meet Our Studio &amp; Engineering Team
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#6B4A4A]">
              Dedicated architects, civil engineers, and site supervisors turning technical blueprints into durable living realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#B02828] shadow-xs hover:shadow-lg transition-all p-6 text-center flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#F7EFEF] shadow-inner">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1C1010]">{member.name}</h4>
                  <div className="text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mt-0.5 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B4A4A] leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5D0D0] w-full flex justify-center">
                  <button
                    onClick={onOpenInspectionModal}
                    className="text-xs font-bold text-[#8B1A1A] hover:text-[#6B1212] transition-colors"
                  >
                    Schedule Direct Consultation &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
