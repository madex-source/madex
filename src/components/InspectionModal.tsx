import React, { useState } from 'react';
import { X, Calendar, MessageSquare, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetPackage?: string;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  isOpen,
  onClose,
  presetPackage,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(presetPackage || 'Full Property Site Inspection');
  const [hub, setHub] = useState('Kathmandu Valley');
  const [preferredDate, setPreferredDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Scale and Spaces - Free Inspection Booking*%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(
      service
    )}%0A*Location Hub:* ${encodeURIComponent(
      hub
    )}%0A*Preferred Date:* ${encodeURIComponent(preferredDate || 'Earliest Available')}`;

    // Send async backup
    fetch('https://formsubmit.co/ajax/studio@scaleandspaces.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ Name: name, Phone: phone, Service: service, Hub: hub, Date: preferredDate }),
    }).catch(() => {});

    window.open(`https://wa.me/9779703881733?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-lg bg-[#FDFAF6] rounded-2xl shadow-2xl border border-[#E5D0D0] overflow-hidden my-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1C0A0A] text-white">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#B02828]" />
            <div>
              <h3 className="font-serif text-lg font-bold">Book On-Site Inspection</h3>
              <p className="text-xs text-white/70">Scale and Spaces Private Limited</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ramesh Shrestha"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5D0D0] rounded-md text-sm text-[#1C1010] outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +977 98XXXXXXXX"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5D0D0] rounded-md text-sm text-[#1C1010] outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
                Project Region *
              </label>
              <select
                value={hub}
                onChange={(e) => setHub(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5D0D0] rounded-md text-sm text-[#1C1010] outline-none focus:border-[#8B1A1A] transition-colors"
              >
                <option value="Kathmandu Valley">Kathmandu Valley (Tokha, Lalitpur, Bhaktapur)</option>
                <option value="Birgunj / Parsa">Birgunj / Parsa / Bara</option>
                <option value="Chitwan / Hetauda">Chitwan / Hetauda</option>
                <option value="Other Nepal District">Other Nepal District</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5D0D0] rounded-md text-sm text-[#1C1010] outline-none focus:border-[#8B1A1A] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#1C1010]">
              Inquiry / Service Type
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="e.g. 2.5 Tala Ghar Naksha Pass & 3D Interior"
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5D0D0] rounded-md text-sm text-[#1C1010] outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>

          {/* Guarantees */}
          <div className="pt-2 border-t border-[#E5D0D0] grid grid-cols-2 gap-2 text-xs text-[#6B4A4A]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Zero obligation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>NBC 205 safety check</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-3 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-md text-xs font-semibold text-[#6B4A4A] hover:bg-[#F5E8E8] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8B1A1A] hover:bg-[#6B1212] text-white text-xs font-bold rounded-md shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
