import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  ArrowUpRight, 
  Compass, 
  Rotate3d, 
  X, 
  ExternalLink, 
  MessageSquare, 
  Building
} from 'lucide-react';
import { PortfolioItem, ShowcaseItem, PostItem } from '../types';

interface PortfolioShowcaseProps {
  portfolio: PortfolioItem[];
  showcase: ShowcaseItem[];
  posts: PostItem[];
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  portfolio,
  showcase,
  posts,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(portfolio.map((p) => p.category)))];

  const filteredPortfolio = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="py-16 sm:py-24 bg-[#FDFAF6] border-b border-[#E5D0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#8B1A1A]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1010] tracking-tight">
              Design Works, 3D Renders &amp; AutoCAD Blueprints
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#6B4A4A] leading-relaxed">
              Explore our built and conceptual projects across Kathmandu, Birgunj, and the Central Terai. Click any project to inspect details in high definition.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#8B1A1A] text-white shadow-xs'
                    : 'bg-white text-[#1C1010] border border-[#E5D0D0] hover:border-[#8B1A1A]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid (Saubhagya Ghar Editorial Card Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModalProject(item)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#B02828] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0A]/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-[#8B1A1A] border border-[#E5D0D0] shadow-xs">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#8B1A1A] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-[#1C1010] group-hover:text-[#8B1A1A] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B4A4A] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 flex items-center justify-between text-xs font-semibold text-[#6B4A4A] border-t border-[#E5D0D0]">
                  <span>View Full Renders &amp; Blueprints</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8B1A1A]" />
                </div>
              </div>
            ))}
          </div>

          {/* 360° VR & Social Works Showcase (Synced from 'Showcase' Tab) */}
          <div className="mt-20 pt-16 border-t border-[#E5D0D0]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em] mb-3">
                <Rotate3d className="w-3.5 h-3.5" />
                <span>360° Virtual Reality &amp; Site Updates</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C1010] tracking-tight">
                Walkthroughs &amp; Live Site Engineering
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6B4A4A]">
                Experience full 360° panoramic tours and real concrete casting audits from our active construction sites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {showcase.map((s, idx) => {
                // If description is raw URL, provide clean explanatory text
                const cleanDesc =
                  s.description && !s.description.startsWith('http')
                    ? s.description
                    : s.platform === 'Instagram'
                    ? 'Watch our latest on-site project reel and walkthrough.'
                    : s.platform === 'Facebook'
                    ? 'Explore continuous construction and architectural site audits.'
                    : 'Interactive 360° virtual tour and blueprint inspection.';

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#B02828] shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Image or Clean Gradient Header if image is unlinked */}
                      <div className="relative h-52 w-full overflow-hidden bg-[#1C0A0A] flex items-center justify-center">
                        {s.imageUrl ? (
                          <img
                            src={s.imageUrl}
                            alt={s.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0A]/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C0A0A]/90 text-white text-xs font-bold shadow-xs">
                          <Rotate3d className="w-3.5 h-3.5 text-[#B02828]" />
                          <span>{s.platform}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="font-serif text-base font-bold text-[#1C1010] leading-snug">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-[#6B4A4A] leading-relaxed">
                          {cleanDesc}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <a
                        href={s.url || '#contact'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FDFAF6] hover:bg-[#F5E8E8] border border-[#E5D0D0] text-[#1C1010] text-xs font-bold rounded-md transition-colors"
                      >
                        <span>Explore Experience</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Marquee Reel (Synced from 'Posts' Tab) */}
      <section className="py-12 bg-white border-b border-[#E5D0D0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#8B1A1A]">
              Live Project Reel
            </span>
            <h4 className="font-serif text-lg font-bold text-[#1C1010]">Continuous Construction Feed</h4>
          </div>
          <span className="text-xs text-[#6B4A4A] font-medium">Hover over any card to pause stream</span>
        </div>

        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex gap-6 px-4">
            {posts.concat(posts).map((post, idx) => (
              <a
                key={idx}
                href={post.link || '#portfolio'}
                className="w-72 shrink-0 bg-[#FDFAF6] hover:bg-white rounded-2xl border border-[#E5D0D0] hover:border-[#8B1A1A] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 block group"
              >
                <div className="h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="font-serif text-xs font-bold text-[#1C1010] group-hover:text-[#8B1A1A] transition-colors truncate">
                    {post.title}
                  </div>
                  <p className="text-[11px] text-[#6B4A4A] mt-1 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in" onClick={() => setActiveModalProject(null)}>
          <div className="relative w-full max-w-3xl bg-[#FDFAF6] rounded-2xl overflow-hidden shadow-2xl border border-[#E5D0D0] max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#1C1010] hover:bg-white flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-950 shrink-0">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#F5E8E8] border border-[#B02828]/30 text-xs font-bold text-[#8B1A1A] uppercase tracking-[0.08em]">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-[#6B4A4A] font-medium">Scale &amp; Spaces Project Archive</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1C1010] tracking-tight">
                {activeModalProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#6B4A4A] leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="pt-4 border-t border-[#E5D0D0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#6B4A4A] text-center sm:text-left">
                  Scale and Spaces Private Limited &bull; Kathmandu &amp; Birgunj
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/9779703881733?text=Hi%20Scale%20and%20Spaces,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                      activeModalProject.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire this Design</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2.5 rounded-md bg-white border border-[#E5D0D0] text-[#1C1010] text-xs font-bold transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
