import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [locationHub, setLocationHub] = useState('Kathmandu Valley');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting request & launching WhatsApp...');

    try {
      // 1. Asynchronous backup to email via FormSubmit
      fetch('https://formsubmit.co/ajax/studio@scaleandspaces.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Email: email,
          Hub: locationHub,
          PreferredDate: preferredDate || 'Earliest Available',
          Scope: message,
        }),
      }).catch(() => {});

      // 2. Open WhatsApp immediately with fully formatted request
      const formattedText = `*Scale and Spaces - Free Inspection Request*%0A%0A*Name:* ${encodeURIComponent(
        name
      )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(
        email
      )}%0A*Location Hub:* ${encodeURIComponent(
        locationHub
      )}%0A*Preferred Date:* ${encodeURIComponent(
        preferredDate || 'Earliest available'
      )}%0A*Project Scope / Needs:*%0A${encodeURIComponent(message)}`;

      window.open(`https://wa.me/9779703881733?text=${formattedText}`, '_blank');

      setStatus('Inquiry submitted successfully! Our lead engineer will connect shortly.');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setPreferredDate('');
    } catch (err) {
      setStatus('Redirecting to WhatsApp...');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Physical Hubs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Direct Consultation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Collaborate with Scale &amp; Spaces
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Book a comprehensive site inspection, review your 2D AutoCAD floor plans, or partner for complete turnkey NBC 205 architectural execution.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+9779703881733"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone &amp; WhatsApp Hotline
                  </div>
                  <div className="text-base font-bold text-slate-900">+977 9703881733</div>
                </div>
              </a>

              <a
                href="mailto:studio@scaleandspaces.com"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Inquiries
                  </div>
                  <div className="text-base font-bold text-slate-900">studio@scaleandspaces.com</div>
                </div>
              </a>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF5722] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Head Office — Kathmandu</div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tokha-6, Grande Hospital Road, Kathmandu Valley, Nepal
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Regional Office — Birgunj</div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Birgunj-12, Murli Chowk, Parsa District, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Free on-site structural preliminary checks in Kathmandu Valley &amp; Parsa/Bara with zero obligation.
              </span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Request Free Property Site Inspection
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill details below to instantly dispatch your request to our engineering desk and WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shrestha"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Location Hub
                    </label>
                    <select
                      value={locationHub}
                      onChange={(e) => setLocationHub(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] focus:bg-white"
                    >
                      <option value="Kathmandu Valley">Kathmandu Valley (Tokha / Baneshwor / Lalitpur)</option>
                      <option value="Birgunj / Parsa / Bara">Birgunj / Parsa / Bara</option>
                      <option value="Chitwan / Pokhara">Chitwan / Pokhara</option>
                      <option value="Other Nepal District">Other Nepal District</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Site Visit Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Scope &amp; Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your residential or commercial project (e.g. 2.5-storey building Naksha pass, dampness repair, modular kitchen, full 3BHK turnkey renovation)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-[#FF5722] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Request (WhatsApp &amp; Email)</span>
                </button>

                {status && (
                  <div className="p-3 bg-orange-50 border border-orange-200 text-xs font-semibold text-[#FF5722] rounded-xl text-center">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
