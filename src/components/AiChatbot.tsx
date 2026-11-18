import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  User,
  Calculator,
  MessageCircle,
  RotateCcw,
  Maximize2,
  Minimize2,
  ShieldCheck,
  GripVertical,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionLabel?: string;
  category?: 'engineering' | 'cost' | 'architectural' | 'general';
}

export const OFFICIAL_FAVICON_ICON = 'https://i.postimg.cc/Y043kmZp/Favicon.png';

const INITIAL_GREETING: ChatMessage = {
  id: 'msg-init',
  sender: 'bot',
  text: `**Namaste! Welcome to Scale and Spaces Pvt. Ltd.** 🏛️

I am your **AI Engineering & Architectural Assistant**. How can our team assist your project today?

• **Turnkey Construction & BOQ Estimates**
• **Municipal 2D/3D Naksha Pass (Kathmandu & Birgunj)**
• **NBC 205:2024 Earthquake-Resilient Structural Blueprints**
• **Modern Interior Architecture & Modular Fitouts**
• **Zero-Cost On-Site Engineering Audit**

Ask me any technical question, or pick a quick suggestion below:`,
  timestamp: 'Just now',
};

const SUGGESTED_QUERIES = [
  '📐 2.5 tala naksha pass cost & process?',
  '🧱 Built-up cost per sq.ft in Nepal?',
  '🛡️ NBC 205 earthquake code requirements?',
  '🏢 Office locations in Birgunj & Kathmandu?',
  '🍳 Modular kitchen & interior renovation rates?',
  '📋 Book free site inspection in KTM / Birgunj',
];

// Rich Architectural & Engineering Knowledge Base
function getSmartConsultantResponse(query: string): string {
  const q = query.toLowerCase();

  // 1. Company Aim, Mission & Philosophy
  if (/aim|mission|vision|goal|objective|purpose|philosophy|target|who are you|about|उद्देश्य|लक्ष्य|k ho aim/i.test(q)) {
    return `🏛️ **Company Aim & Mission of Scale and Spaces Pvt. Ltd.:**

At **Scale and Spaces Pvt. Ltd.**, our foundational principle is **"Sensitizing Scale, Harmonizing Spaces"** — uniting cutting-edge architectural imagination with rigorous civil engineering safety across Nepal.

**Our Core Pillars:**
1. **Life Safety & Structural Integrity:** 100% adherence to **NBC 205:2024** and **NBC 105:2020** earthquake resistance codes. We design ductile, seismic-resilient structures that safeguard families against disaster.
2. **Photorealistic Clarity Before Construction:** Eradicating costly site errors and material wastage through ultra-HD 3D visualization and interactive 360° VR digital walkthroughs.
3. **Transparent Financial Control:** Providing detailed, honest Bill of Quantities (BOQ) with live market rates so clients experience **Zero Unexpected Cost Overruns**.
4. **Bioclimatic & Sustainable Design:** Harnessing natural cross-ventilation, optimal solar orientation, and climate-responsive materials for Kathmandu Valley and the Terai plains.
5. **Turnkey Peace of Mind:** Delivering single-window accountability from municipal Naksha Pass and soil SBC testing to modular kitchen fitouts and final key handover.

*Led by the engineering team at **Scale and Spaces Pvt. Ltd.**, we are dedicated to raising the standard of architectural living in Nepal.*`;
  }

  // 2. Hiring & Careers
  if (/hiring|career|job|vacancy|apply|intern|cv|resume|architect|site supervisor|भर्ना|नौकरी|kaam/i.test(q)) {
    return `💼 **Scale and Spaces Pvt. Ltd. is actively hiring!**

We currently welcome applications for:
• **Architect / 3D Visualizer** (Birgunj Office - in front of Indian Embassy & Kathmandu)
• **Site Engineer / Civil Supervisor** (NBC 205 structural compliance & site execution)
• **AutoCAD / Lumion Specialist**

**How to Apply:**
1. Check our **Hiring Notice popup** on this site for the full-resolution hiring poster.
2. Email your CV & Portfolio to: **studio@scaleandspaces.com**
3. Or message directly on WhatsApp: **+977 9703881733**

*Our engineering directors review portfolios promptly.*`;
  }

  // 3. Naksha Pass / Blueprints / Packages
  if (/naksha|municipal|pass|drawing|blueprint|2d|3d|नक्सा|floor plan|package/i.test(q)) {
    return `📐 **Official Municipal Naksha Pass & Design Packages:**

1. **Estimation Only (Rs. 1,500):** Comprehensive BOQ material takeoff & budget sheet.
2. **With 2D Working Plan (Rs. 2,500):** Detailed contractor-ready AutoCAD floor plans, column grids, and municipal approval compliance set under NBC 205:2024.
3. **Complete 2D & 3D Plan (Rs. 20,000):** Full architectural drawings, ultra-HD photorealistic 3D interior/exterior renders, plus an interactive 360° VR virtual walkthrough!

Every plan strictly adheres to local municipality building bye-laws in Kathmandu Valley (KMC, Tokha, Lalitpur), Birgunj Metropolitan, and Terai regions.`;
  }

  // 4. Construction Cost / Rates per sq.ft
  if (/cost|price|rate|sqft|square foot|budget|per sq|खर्च|लागत|lakh/i.test(q)) {
    return `🧱 **Current Construction Cost Rates in Nepal (2026):**

• **Standard Quality:** Rs. 2,600 – 2,900 / sq.ft (Built-up)
• **Premium Residential:** Rs. 3,000 – 3,450 / sq.ft (Recommended for modern homes)
• **Luxury / Turnkey:** Rs. 3,500 – 4,200+ / sq.ft (Imported vitrified tiles, false ceilings, full modular kitchen)

*Typical Budget Estimate:*
A 2.5-storey home with ~2,000 sq.ft built-up area generally costs **Rs. 58 to 68 Lakhs** for turnkey execution. Check our **Cost Estimator tool** on the website for an exact calculation!`;
  }

  // 5. Offices / Location / Contact
  if (/office|address|location|kathmandu|birgunj|tokha|phone|number|contact|ठेगाना/i.test(q)) {
    return `🏢 **Scale and Spaces Pvt. Ltd. Practice Locations:**

📍 **Head Office:** Tokha-6, Kathmandu, Nepal
📍 **Regional Office:** Birgunj-12, Parsa, Nepal (In front of Indian Embassy)
📞 **Phone / WhatsApp:** +977 9703881733
✉️ **Email:** studio@scaleandspaces.com
🏢 **Company:** Scale and Spaces Pvt. Ltd.

We offer **Zero-Cost On-Site Inspection** in Kathmandu and Birgunj. Would you like to schedule an engineer visit?`;
  }

  // 6. Modular Kitchen & Interior Renovation
  if (/kitchen|modular|ceiling|interior|paint|decor|renovation|पुट्टी|किचेन/i.test(q)) {
    return `🎨 **Turnkey Interior Renovation & Execution Rates:**

• **Modular Kitchens:** Marine BWP Plywood with Acrylic or PU high-gloss finish at **Rs. 2,400 – 3,600 per running foot**.
• **Gypsum False Ceilings:** Concealed LED channel profile design at **Rs. 135 – 195 per sq.ft**.
• **Wall Painting & Putty:** 2 coats putty + primer + luxury emulsion at **Rs. 32 – 48 per sq.ft**.

We have interactive calculators for Paint, False Ceiling, and Kitchen sizing right on this site!`;
  }

  // 7. NBC 205 Earthquake Engineering
  if (/nbc|earthquake|seismic|column|beam|soil|sbc|पिलर|भूकम्प/i.test(q)) {
    return `🛡️ **NBC 205:2024 Earthquake Safety Code:**

According to Nepal's National Building Code:
• Minimum column dimension for 2-3 storeys: **350 mm × 350 mm** (up to 400 mm for 3 full storeys).
• Minimum main reinforcement: 4 bars of 16mm + 4 bars of 12mm Fe500 grade TMT.
• Stirrup spacing in joint confinement zones: **100 mm c/c** for ductile energy dissipation.

We ensure 100% municipal and structural engineering compliance for every project.`;
  }

  // 8. General Greetings / Nepali / Hindi
  if (/namaste|hello|hi|hey|नमस्ते|प्रणाम|k cha|kaisan ba|haalat/i.test(q)) {
    return `**Namaste! / नमस्ते!** **Scale and Spaces Pvt. Ltd.** (काठमाडौँ र बीरगंज) मा तपाईंलाई हार्दिक स्वागत छ!

हामी तपाईंको घरको **२D/३D नक्सा पास**, **इन्जिनियरिङ्ग डिजाइन**, **घर निर्माण**, वा **रेनोभेसन (Renovation)** को लागि कसरी सहयोग गर्न सक्छौं?

तपाईं नेपाली, हिन्दी वा अंग्रेजी जुनसुकै भाषामा पनि आफ्नो आवश्यकता सोध्न सक्नुहुन्छ!`;
  }

  // Mixed conversational fallback
  return `Thank you for your message! **Scale and Spaces Pvt. Ltd.** is Nepal's premier architecture, engineering, and turnkey home renovation practice operating in **Kathmandu (Tokha-6)** and **Birgunj (Birgunj-12)**.

For your specific project requirement, the engineers at **Scale and Spaces Pvt. Ltd.** can provide an exact customized estimation and site inspection.

You can connect directly on WhatsApp: **+977 9703881733** or book a free on-site engineering audit!`;
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  // Dragging state for desktop
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });

  const windowRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);

      // Setup default position if null and on desktop screen
      if (position === null && typeof window !== 'undefined' && window.innerWidth >= 640) {
        const defaultX = 24;
        const defaultY = Math.max(20, window.innerHeight - 590);
        setPosition({ x: defaultX, y: defaultY });
      }
    }
  }, [isOpen, messages]);

  // Window resize listener to keep window on screen
  useEffect(() => {
    const handleResize = () => {
      if (position && windowRef.current && window.innerWidth >= 640) {
        const modalWidth = windowRef.current.offsetWidth || 420;
        const modalHeight = windowRef.current.offsetHeight || 560;
        const maxX = window.innerWidth - modalWidth - 16;
        const maxY = window.innerHeight - modalHeight - 16;
        setPosition((prev) => {
          if (!prev) return null;
          return {
            x: Math.max(12, Math.min(maxX, prev.x)),
            y: Math.max(12, Math.min(maxY, prev.y)),
          };
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [position]);

  // Pointer drag events for dragging header
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isExpanded || window.innerWidth < 640) return;
    // Don't drag if user clicked a button or close icon
    if ((e.target as HTMLElement).closest('button, a, input')) return;

    const modalEl = windowRef.current;
    if (!modalEl) return;

    const rect = modalEl.getBoundingClientRect();
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: rect.left,
      initY: rect.top,
    };

    setIsDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || isExpanded || window.innerWidth < 640) return;

    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;

    const modalEl = windowRef.current;
    const modalWidth = modalEl?.offsetWidth || 420;
    const modalHeight = modalEl?.offsetHeight || 560;

    const rawX = dragStartRef.current.initX + dx;
    const rawY = dragStartRef.current.initY + dy;

    // Constrain within screen viewport with safety padding
    const clampedX = Math.max(10, Math.min(window.innerWidth - modalWidth - 10, rawX));
    const clampedY = Math.max(10, Math.min(window.innerHeight - modalHeight - 10, rawY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch (_) {}
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage.trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const replyText = getSmartConsultantResponse(text);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);

      if (!isOpen) {
        setHasUnread(true);
      }
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([INITIAL_GREETING]);
  };

  return (
    <>
      {/* Floating Trigger Button (Matches official Favicon Icon) */}
      <div className="fixed bottom-6 left-5 sm:bottom-6 sm:left-6 z-40 flex items-center">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex items-center gap-2.5 p-2 sm:px-3.5 sm:py-2.5 bg-[#1C0A0A] hover:bg-[#2C1010] text-white rounded-full shadow-2xl border border-[#8B1A1A]/50 transition-all duration-300 transform active:scale-95 cursor-pointer"
          aria-label="Ask AI Engineer"
        >
          {/* Linked official favicon icon */}
          <div className="w-7 h-7 rounded-full bg-white/10 p-1 flex items-center justify-center overflow-hidden shrink-0 border border-white/20">
            <img
              src={OFFICIAL_FAVICON_ICON}
              alt="Scale and Spaces Favicon"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = OFFICIAL_FAVICON_ICON;
              }}
            />
          </div>

          <span className="hidden sm:inline-block text-xs font-bold text-white tracking-wide pr-1">
            Ask AI
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />

          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          )}
        </button>
      </div>

      {/* Chat Window Modal - Draggable with position */}
      {isOpen && (
        <div
          ref={windowRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-chat-title"
          style={
            !isExpanded && position && typeof window !== 'undefined' && window.innerWidth >= 640
              ? {
                  position: 'fixed',
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  width: '420px',
                  height: '560px',
                  maxHeight: '84vh',
                  zIndex: 50,
                }
              : undefined
          }
          className={`fixed z-50 transition-all duration-200 flex flex-col shadow-2xl rounded-2xl overflow-hidden border border-[#E5D0D0] bg-[#FDFAF6] ${
            isExpanded
              ? 'inset-4 sm:inset-10 md:inset-16 w-auto h-auto'
              : position && typeof window !== 'undefined' && window.innerWidth >= 640
              ? ''
              : 'bottom-20 left-4 sm:bottom-20 sm:left-6 w-[94vw] sm:w-[420px] h-[560px] max-h-[84vh]'
          }`}
        >
          {/* Header - Draggable Header with Grip Cue & Matching Favicon Icon */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`bg-[#1C0A0A] text-white p-3 px-4 flex items-center justify-between border-b border-[#8B1A1A]/40 shrink-0 select-none ${
              !isExpanded ? 'cursor-grab active:cursor-grabbing' : ''
            }`}
            title={!isExpanded ? 'Drag header to move chat window' : undefined}
          >
            <div className="flex items-center gap-2.5">
              {/* Grip cue for drag affordance */}
              {!isExpanded && (
                <div className="hidden sm:flex text-stone-500 hover:text-stone-300 transition-colors p-0.5">
                  <GripVertical className="w-4 h-4" />
                </div>
              )}

              {/* Favicon icon matching brand identity */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 p-1 border border-[#8B1A1A]/60 flex items-center justify-center shrink-0 shadow-inner">
                <img
                  src={OFFICIAL_FAVICON_ICON}
                  alt="Scale & Spaces Favicon"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 id="ai-chat-title" className="text-xs font-extrabold flex items-center gap-1.5 text-white">
                  Scale &amp; Spaces AI Engineer
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </h2>
                <p className="text-[10px] text-stone-300 font-medium">
                  Scale and Spaces. pvt. ltd. • Tokha-6 &amp; Birgunj-12
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-stone-300">
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={resetChat}
                title="Restart chat"
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Minimize' : 'Expand'}
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:block cursor-pointer"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-[#F5E8E8] border-b border-[#E5D0D0] px-4 py-1.5 flex items-center justify-between text-[11px] text-[#6B4A4A] select-none">
            <span className="flex items-center gap-1.5 font-semibold text-[#8B1A1A]">
              <ShieldCheck className="w-3.5 h-3.5" /> NBC 205:2024 Verified Engineering Standards
            </span>
            <span className="font-mono text-[10px] text-stone-600">Birgunj &amp; KTM</span>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FDFAF6] text-[#1C1010]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#1C0A0A] p-1 flex items-center justify-center shrink-0 mt-0.5 shadow-xs border border-[#8B1A1A]/40 overflow-hidden">
                    <img
                      src={OFFICIAL_FAVICON_ICON}
                      alt="Scale & Spaces"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#8B1A1A] text-white rounded-br-none'
                      : 'bg-white text-[#1C1010] border border-[#E5D0D0] rounded-bl-none'
                  }`}
                >
                  <div
                    className="prose prose-xs max-w-none text-current"
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/\n\n/g, '<br/><br/>')
                        .replace(/\n/g, '<br/>'),
                    }}
                  />

                  {/* Direct WhatsApp Action for Bot Advice */}
                  {msg.sender === 'bot' && msg.id !== 'msg-init' && (
                    <div className="mt-3 pt-2.5 border-t border-[#E5D0D0] flex flex-wrap items-center gap-2">
                      <a
                        href={`https://wa.me/9779703881733?text=${encodeURIComponent(
                          'Hi Scale and Spaces Team, I am chatting with your AI Engineering Assistant regarding my project.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-md border border-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Chat on WhatsApp (+977 9703881733)</span>
                      </a>
                      <a
                        href="#calculator"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5E8E8] hover:bg-[#E5D0D0] text-[#8B1A1A] text-[11px] font-bold rounded-md border border-[#8B1A1A]/20 transition-colors"
                      >
                        <Calculator className="w-3 h-3" />
                        <span>BOQ Estimator</span>
                      </a>
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#8B1A1A] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs shadow-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-xs text-[#6B4A4A]">
                <div className="w-7 h-7 rounded-full bg-[#1C0A0A] p-1 flex items-center justify-center shrink-0 shadow-xs border border-[#8B1A1A]/40 overflow-hidden">
                  <img
                    src={OFFICIAL_FAVICON_ICON}
                    alt="Scale & Spaces"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white border border-[#E5D0D0] px-3.5 py-2 rounded-xl rounded-bl-none flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#8B1A1A] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#8B1A1A] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#8B1A1A] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] font-medium text-stone-500 ml-1">Analyzing NBC standards...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Query Chips */}
          <div className="bg-white border-t border-[#E5D0D0] px-3 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold text-[#6B4A4A] tracking-wider shrink-0 mr-1">
              Popular:
            </span>
            {SUGGESTED_QUERIES.map((query, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(query)}
                className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FDFAF6] hover:bg-[#F5E8E8] text-[#1C1010] hover:text-[#8B1A1A] border border-[#E5D0D0] hover:border-[#8B1A1A]/40 transition-colors cursor-pointer"
              >
                {query}
              </button>
            ))}
          </div>

          {/* Input Box Footer */}
          <div className="p-3 bg-white border-t border-[#E5D0D0] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about naksha pass, NBC 205, cost per sq.ft..."
              className="flex-1 text-xs bg-[#FDFAF6] border border-[#E5D0D0] rounded-lg px-3.5 py-2.5 text-[#1C1010] placeholder:text-stone-400 focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-all"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 bg-[#8B1A1A] hover:bg-[#6B1212] text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-xs cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
