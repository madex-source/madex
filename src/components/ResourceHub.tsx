import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  ExternalLink, 
  MessageSquare,
  Search,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { RateItem, DownloadItem, ArticleItem } from '../types';

interface ResourceHubProps {
  rates: RateItem[];
  downloads: DownloadItem[];
  articles: ArticleItem[];
}

export const ResourceHub: React.FC<ResourceHubProps> = ({
  rates,
  downloads,
  articles,
}) => {
  const [activeTab, setActiveTab] = useState<'rates' | 'downloads' | 'articles'>('rates');
  const [rateSearch, setRateSearch] = useState<string>('');

  const filteredRates = rates.filter(
    (r) =>
      r.item.toLowerCase().includes(rateSearch.toLowerCase()) ||
      r.category.toLowerCase().includes(rateSearch.toLowerCase())
  );

  return (
    <section id="rates" className="py-16 sm:py-24 bg-[#FDFAF6] border-b border-[#E5D0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#8B1A1A]" />
            <span>Technical Resources &amp; Market Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1010] tracking-tight">
            Client Resource Hub &amp; Construction Rates
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B4A4A] leading-relaxed">
            Live civil engineering market rates for Kathmandu and Birgunj, verified structural guides, and architectural renovation specifications.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab('rates')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'rates'
                ? 'bg-[#8B1A1A] text-white shadow-md'
                : 'bg-white text-[#1C1010] border border-[#E5D0D0] hover:border-[#8B1A1A]/40'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Live Material Rates</span>
          </button>

          <button
            onClick={() => setActiveTab('downloads')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'downloads'
                ? 'bg-[#8B1A1A] text-white shadow-md'
                : 'bg-white text-[#1C1010] border border-[#E5D0D0] hover:border-[#8B1A1A]/40'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Downloads &amp; Blueprints</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-[#8B1A1A] text-white shadow-md'
                : 'bg-white text-[#1C1010] border border-[#E5D0D0] hover:border-[#8B1A1A]/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Design &amp; Engineering Journal</span>
          </button>
        </div>

        {/* Tab 1: Rates Table */}
        {activeTab === 'rates' && (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-xl border border-[#E5D0D0]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6B4A4A]">
                <Clock className="w-4 h-4 text-[#8B1A1A]" />
                <span>Market verified in Kathmandu (Valley) &amp; Birgunj (Parsa). Updated weekly.</span>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search item or category..."
                  value={rateSearch}
                  onChange={(e) => setRateSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-[#FDFAF6] border border-[#E5D0D0] rounded-lg text-xs font-medium focus:outline-hidden focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]"
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#E5D0D0] shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1C0A0A] text-white text-xs font-mono uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Material / Specification</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Standard Unit</th>
                    <th className="py-3.5 px-4 sm:px-6">Market Rate (NPR)</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5D0D0] font-medium text-[#1C1010]">
                  {filteredRates.map((r, idx) => (
                    <tr key={idx} className="hover:bg-[#FDFAF6] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1010]">
                        {r.item}
                      </td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-[#6B4A4A]">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F5E8E8] text-[#8B1A1A] border border-[#B02828]/20">
                          {r.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#6B4A4A]">{r.unit}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#8B1A1A] font-mono tabular-nums">
                        {r.rate}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-emerald-700 font-semibold">
                        {r.updated || 'Current'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#6B4A4A] italic text-center sm:text-right pt-2">
              * Note: Rates are indicative and fluctuate based on transportation to site, fuel levies, and bulk volume.
            </p>
          </div>
        )}

        {/* Tab 2: Downloads (Fixed Links with resilient fallbacks) */}
        {activeTab === 'downloads' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((d, idx) => {
              const targetUrl = d.downloadUrl || d.url || `https://wa.me/9779703881733?text=${encodeURIComponent(`Hi Scale and Spaces, please share the document: ${d.title}`)}`;
              const displaySize = d.fileSize || d.size || 'Official PDF';

              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#8B1A1A] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5E8E8] border border-[#B02828]/20 text-xs font-bold text-[#8B1A1A]">
                      <FileCheck className="w-3.5 h-3.5 text-[#8B1A1A]" />
                      <span>{d.category || 'Engineering Guide'}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#1C1010] leading-snug">{d.title}</h4>
                    <p className="text-xs text-[#6B4A4A] font-mono">{displaySize}</p>
                  </div>

                  <div className="pt-6">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#1C0A0A] hover:bg-[#8B1A1A] text-white text-xs font-bold rounded-md transition-all shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File / PDF</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Articles / Journal */}
        {activeTab === 'articles' && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => {
              const targetUrl = art.link || art.url || `https://wa.me/9779703881733?text=Hi%20Scale%20and%20Spaces,%20I%20read%20your%20article%20on%20"${encodeURIComponent(art.title)}" and would like to discuss it.`;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#8B1A1A] shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-[#1C0A0A]">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#8B1A1A] shadow-xs border border-[#E5D0D0]">
                        {art.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-serif text-base font-bold text-[#1C1010] leading-snug mb-2">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#6B4A4A] line-clamp-3 leading-relaxed">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FDFAF6] hover:bg-[#F5E8E8] border border-[#E5D0D0] text-[#1C1010] text-xs font-bold rounded-md transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#8B1A1A]" />
                      <span>Discuss on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
