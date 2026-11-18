import React, { useState, useEffect, useCallback } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ServiceCategories } from './components/ServiceCategories';
import { BoqCalculator } from './components/BoqCalculator';
import { PackagesSection } from './components/PackagesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { EngineeringHub } from './components/EngineeringHub';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ResourceHub } from './components/ResourceHub';
import { AboutAndTeam } from './components/AboutAndTeam';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactDock } from './components/FloatingContactDock';
import { InspectionModal } from './components/InspectionModal';
import { QuickAdsModal } from './components/QuickAdsModal';
import { AiChatbot } from './components/AiChatbot';

import {
  defaultHero,
  defaultPackages,
  defaultAbout,
  defaultTeam,
  defaultFaqs,
  defaultRates,
  defaultPortfolio,
  defaultShowcase,
  defaultPosts,
  defaultArticles,
  defaultDownloads,
  defaultAds,
  loadAllSheetData,
  GOOGLE_SHEET_ID,
} from './services/googleSheets';

import {
  HeroContent,
  PackageItem,
  AboutContent,
  TeamMember,
  FaqItem,
  RateItem,
  PortfolioItem,
  ShowcaseItem,
  PostItem,
  ArticleItem,
  DownloadItem,
  AdItem,
} from './types';

export default function App() {
  const [hero, setHero] = useState<HeroContent>(defaultHero);
  const [packages, setPackages] = useState<PackageItem[]>(defaultPackages);
  const [about, setAbout] = useState<AboutContent>(defaultAbout);
  const [team, setTeam] = useState<TeamMember[]>(defaultTeam);
  const [faqs, setFaqs] = useState<FaqItem[]>(defaultFaqs);
  const [rates, setRates] = useState<RateItem[]>(defaultRates);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(defaultPortfolio);
  const [showcase, setShowcase] = useState<ShowcaseItem[]>(defaultShowcase);
  const [posts, setPosts] = useState<PostItem[]>(defaultPosts);
  const [articles, setArticles] = useState<ArticleItem[]>(defaultArticles);
  const [downloads, setDownloads] = useState<DownloadItem[]>(defaultDownloads);
  const [ads, setAds] = useState<AdItem[]>(defaultAds);

  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Inspection modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPresetPackage, setModalPresetPackage] = useState<string | undefined>(undefined);

  // Quick Ads Popup state
  const [isAdsModalOpen, setIsAdsModalOpen] = useState<boolean>(false);

  const handleOpenInspectionModal = (pkgName?: string) => {
    setModalPresetPackage(pkgName);
    setIsModalOpen(true);
  };

  const handleCloseInspectionModal = () => {
    setIsModalOpen(false);
    setModalPresetPackage(undefined);
  };

  // Google Sheet live sync handler
  const syncWithGoogleSheet = useCallback(async () => {
    setIsSyncing(true);
    try {
      const data = await loadAllSheetData(GOOGLE_SHEET_ID);
      if (data.hero) setHero(data.hero);
      if (data.packages && data.packages.length > 0) setPackages(data.packages);
      if (data.about) setAbout(data.about);
      if (data.team && data.team.length > 0) setTeam(data.team);
      if (data.faqs && data.faqs.length > 0) setFaqs(data.faqs);
      if (data.rates && data.rates.length > 0) setRates(data.rates);
      if (data.portfolio && data.portfolio.length > 0) setPortfolio(data.portfolio);
      if (data.showcase && data.showcase.length > 0) setShowcase(data.showcase);
      if (data.posts && data.posts.length > 0) setPosts(data.posts);
      if (data.articles && data.articles.length > 0) setArticles(data.articles);
      if (data.downloads && data.downloads.length > 0) setDownloads(data.downloads);
      if (data.ads && data.ads.length > 0) setAds(data.ads);

      setLastSyncedAt(new Date());
    } catch (e) {
      console.warn('Google Sheet synchronization caught warning:', e);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  // Run on mount
  useEffect(() => {
    syncWithGoogleSheet();

    // Auto-open Quick Ads modal after 2.5 seconds on first visit
    const hasSeenAdsSession = sessionStorage.getItem('ss_ads_seen');
    if (!hasSeenAdsSession) {
      const timer = setTimeout(() => {
        setIsAdsModalOpen(true);
        sessionStorage.setItem('ss_ads_seen', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [syncWithGoogleSheet]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#FF5722] selection:text-white relative">
      {/* Top Utility Strip & Main Corporate Header */}
      <TopBar
        onOpenInspectionModal={() => handleOpenInspectionModal()}
        lastSyncedAt={lastSyncedAt}
        isSyncing={isSyncing}
        onRefreshData={syncWithGoogleSheet}
        onOpenAdsModal={() => setIsAdsModalOpen(true)}
        adsCount={ads.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          hero={hero}
          onOpenInspectionModal={() => handleOpenInspectionModal()}
          posts={posts}
        />

        {/* 2. Core Service Categories (Linked to Article tab in Google Sheet) */}
        <ServiceCategories
          onOpenInspectionModal={() => handleOpenInspectionModal()}
          articles={articles}
        />

        {/* 3. Live BOQ Cost Estimator */}
        <BoqCalculator
          onOpenInspectionModal={() => handleOpenInspectionModal()}
        />

        {/* 4. Inspection & Design Packages (Synced with Google Sheet 'Packages' Tab) */}
        <PackagesSection
          packages={packages}
          onOpenInspectionModal={handleOpenInspectionModal}
        />

        {/* 5. 2D AutoCAD to 3D Photorealism Interactive Slider */}
        <BeforeAfterSlider />

        {/* 6. Studio Calculation & Engineering Hub (All 17 Calculators: Interior, Civil, NBC 205) */}
        <EngineeringHub />

        {/* 7. Selected Works, 360 VR & Live Feed */}
        <PortfolioShowcase
          portfolio={portfolio}
          showcase={showcase}
          posts={posts}
        />

        {/* 8. Client Resource Hub (Material Rates, PDF Downloads, Design Journal) */}
        <ResourceHub
          rates={rates}
          downloads={downloads}
          articles={articles}
        />

        {/* 9. Firm Philosophy & Leadership Team */}
        <AboutAndTeam
          about={about}
          team={team}
          onOpenInspectionModal={() => handleOpenInspectionModal()}
        />

        {/* 10. Frequently Asked Questions */}
        <FaqSection faqs={faqs} />

        {/* 11. Dual-Route Site Visit & Consultation Scheduler */}
        <ContactSection />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer />

      {/* Floating Action Dock (WhatsApp, Call, Social, Scroll to Top) */}
      <FloatingContactDock />

      {/* Quick Ads & Hiring Popup Modal (Directly synced with Google Sheet Ads Tab) */}
      <QuickAdsModal
        ads={ads}
        isOpen={isAdsModalOpen}
        onClose={() => setIsAdsModalOpen(false)}
        onOpen={() => setIsAdsModalOpen(true)}
      />

      {/* Multi-Lingual AI Engineering & Work Scope Chatbot */}
      <AiChatbot />

      {/* Quick Inspection Booking Modal */}
      <InspectionModal
        isOpen={isModalOpen}
        onClose={handleCloseInspectionModal}
        presetPackage={modalPresetPackage}
      />
    </div>
  );
}
