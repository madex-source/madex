import {
  HeroContent,
  PackageItem,
  AboutContent,
  TeamMember,
  FaqItem,
  RateItem,
  ArticleItem,
  ShowcaseItem,
  PortfolioItem,
  PostItem,
  DownloadItem,
  AdItem,
} from '../types';

export const GOOGLE_SHEET_ID = '1JHdOnFs271bT_2Sgb4eGO2LIEqyxv0OvAGdYCXh-7Wg';
export const OFFICIAL_LOGO_URL = 'assets/logo.svg';
export const OFFICIAL_FAVICON_URL = 'assets/logo.jpg';

export const defaultAds: AdItem[] = [
  {
    title: 'Hiring Notice: Architects & Civil Engineers',
    imageUrl: 'https://i.postimg.cc/TYFVjwS0/Hiring.jpg',
    caption: 'Ready to join Scale and Spaces Pvt. Ltd. at our Kathmandu & Birgunj offices.',
    status: 'Active',
    badge: 'Open Vacancy',
    ctaText: 'Apply on WhatsApp',
    ctaLink: 'https://wa.me/9779703881733?text=Hi%20Scale%20and%20Spaces,%20I%20saw%20your%20Hiring%20announcement%20and%20would%20like%20to%20apply.',
  },
  {
    title: 'Festive Architectural Living',
    imageUrl: 'https://i.postimg.cc/XqX5dSkT/Gemini-Generated-Image-uok69suok69suok6.jpg',
    caption: 'Sensitizing scale to create spaces where environment interacts with thoughtful design.',
    status: 'Active',
    badge: 'Design Philosophy',
    ctaText: 'Book Free Inspection',
    ctaLink: '#contact',
  },
];

export function formatImageUrl(url: string | null | undefined): string {
  if (!url || String(url).trim() === '') return '';
  const str = String(url).trim();
  const m = str.match(/\/d\/([a-zA-Z0-9_-]+)/) || str.match(/id=([a-zA-Z0-9_-]+)/);
  return m && m[1] ? `https://lh3.googleusercontent.com/d/${m[1]}` : str;
}

// Fallback initial data ensuring zero broken states and instantaneous fast render
export const defaultHero: HeroContent = {
  badge: '• ARCHITECTS • ENGINEERS • CONSTRUCTION',
  title: 'The Best Architecture & Interior Design Firm in Birgunj and Kathmandu',
  description:
    'Scale and Spaces Pvt. Ltd. is an integrated architectural, engineering, and construction firm operating from Tokha-6, Kathmandu and Birgunj-12, Parsa.',
  btn1Text: 'Explore Projects',
  btn1Link: '#portfolio',
  btn2Text: 'Instant BOQ Estimator',
  btn2Link: '#calculator',
  disciplines: [
    'Architectural Design',
    'Civil Engineering & NBC 205',
    '3D Photorealism',
    'Itemized BOQ Cost Control',
    '2D & 3D Naksha Pass',
    'Turnkey Construction',
  ],
};

export const defaultPackages: PackageItem[] = [
  {
    badge: 'Basic Tier',
    name: 'Estimation Only',
    price: 'Rs. 1,500',
    description: 'Professional cost estimation and material volume takeoff for your project.',
    features: [
      'Basic Property Assessment',
      'Itemized BOQ Cost Estimation',
      'Material Quantity Schedule',
      'Direct WhatsApp Consultation',
    ],
    isPopular: false,
  },
  {
    badge: 'Architectural',
    name: 'With 2D Working Plan',
    price: 'Rs. 2,500',
    description: 'Complete property measurement with contractor-ready AutoCAD floor plans.',
    features: [
      'Complete Property Site Inspection',
      'Detailed 2D AutoCAD Floor Plans',
      'Cost Estimation with BOQ Breakdown',
      'Material & Specification Guidance',
      'Priority Engineer Review',
    ],
    isPopular: false,
  },
  {
    badge: 'Turnkey Luxury',
    name: 'Complete 2D & 3D Plan',
    price: 'Rs. 20,000',
    description: 'Full architectural drawings, photorealistic 3D interior/exterior, and 360° VR.',
    features: [
      'Full Architectural & Structural 2D Drawings',
      '4K Photorealistic 3D Exterior & Interior Renders',
      'Interactive 360° VR Virtual Tour Walkthrough',
      'Comprehensive Structural Blueprints (NBC 205)',
      'Itemized Bill of Quantities (BOQ)',
      'Municipal Naksha Pass Approval Set',
    ],
    isPopular: true,
  },
];

export const defaultAbout: AboutContent = {
  title: 'Sensitizing Scale, Harmonizing Spaces',
  bioP1:
    'Scale and Spaces Private Limited is a registered architectural, engineering, and turnkey construction practice operating with licensed regional studios in Tokha-6, Kathmandu and Birgunj-12, Parsa.',
  bioP2:
    'We unite cutting-edge 3D photorealistic visualization, structural engineering safety strictly adhering to NBC 205:2024 / NBC 105:2020 seismic standards, and transparent, itemized Bill of Quantities (BOQ) cost control.',
  photoUrl: 'https://i.postimg.cc/05wwzfcw/Profile-Pic.png',
  stat1Num: '50+',
  stat1Label: 'Projects Completed',
  stat2Num: '100%',
  stat2Label: 'NBC 205 Seismic Compliant',
  stat3Num: '2',
  stat3Label: 'Offices (KTM & Birgunj)',
  languages: 'Nepali • Bhojpuri • Hindi • English',
};

// Extracted directly from official company document portfolio_d5c2edf0.htm
export const defaultTeam: TeamMember[] = [
  {
    "name": "Er. Chetan Kr. Sarraf",
    "role": "Interior Designer & Lead Civil Engineer",
    "photoUrl": "assets/team/team-chetan.jpg",
    "bio": "Co-founder & Lead Engineer. Specializing in high-end luxury interiors, NBC 205 structural blueprints, AutoCAD detailing, and transparent BOQ valuation."
  },
  {
    "name": "Ar. Supriya Thapa",
    "role": "Principal Architect",
    "photoUrl": "assets/team/team-supriya.jpg",
    "bio": "Leads bioclimatic spatial design, contemporary luxury villas, aesthetic elevations, and municipal bye-law compliance across Nepal."
  },
  {
    "name": "Ar. Yateendra K Labh",
    "role": "Director / Architect",
    "photoUrl": "assets/team/team-yateendra.jpg",
    "bio": "Oversees large-scale masterplanning, institutional healthcare infrastructure, commercial complexes, and urban landscape developments."
  },
  {
    "name": "Er. Sunil Chaurasiya",
    "role": "Structural Engineer",
    "photoUrl": "assets/team/team-sunil.jpg",
    "bio": "Directs NBC 205:2024 and NBC 105:2020 earthquake engineering, column-beam ductile detailing, and bar bending schedules."
  },
  {
    "name": "Megnath Gupta",
    "role": "Project Manager",
    "photoUrl": "assets/team/team-megnath.jpg",
    "bio": "Manages turnkey project execution, material procurement schedules, quality control, and on-site contractor logistics."
  },
  {
    "name": "Ar. Ashmin R Bhattarai",
    "role": "Architect & 3D Visualization Lead",
    "photoUrl": "assets/team/team-ashmin.jpg",
    "bio": "Expert in ultra-photorealistic Lumion 3D renderings, virtual reality walkthroughs, and architectural lighting plans."
  },
  {
    "name": "Bishal Manandar",
    "role": "Electrical Engineer",
    "photoUrl": "assets/team/team-bishal.jpg",
    "bio": "Specialist in electrical conduit layouts, power load balancing, smart home automation, and solar backup engineering."
  },
  {
    "name": "Wasim Alam",
    "role": "Site Engineer",
    "photoUrl": "assets/team/team-wasim.jpg",
    "bio": "Directs on-site structural audits, concrete batch slump tests, and foundation soil bearing checks."
  },
  {
    "name": "Sheetal Gupta",
    "role": "Architectural Designer",
    "photoUrl": "assets/team/team-sheetal.jpg",
    "bio": "Specializes in 2D working drawings, spatial zoning, interior clearances, and municipal Naksha Pass documentation."
  }
];

export const defaultFaqs: FaqItem[] = [
  {
    question: 'What services does Scale and Spaces Private Limited offer?',
    answer:
      'We provide full-scope architectural design, home renovation & remodeling, interior architecture, structural civil engineering (NBC 205 / NBC 105), 3D visualization, municipal Naksha Pass drawing approvals, and turnkey construction management across Nepal.',
  },
  {
    question: 'Where are your offices located in Nepal?',
    answer:
      'We operate from two full-fledged physical offices: Head Office at Tokha-6, Kathmandu, and Regional Office at Birgunj-12, Parsa (in front of the Indian Embassy). We cover Kathmandu Valley, Birgunj, Parsa, Bara, Chitwan, and eastern districts.',
  },
  {
    question: 'Do you provide on-site property inspection before quoting?',
    answer:
      'Yes! We provide on-site engineering property audits in Kathmandu and Birgunj. Our team measures the site, assesses structural conditions, checks municipal setback rules, and discusses customized BOQ estimates.',
  },
  {
    question: 'How do you prevent construction budget overruns?',
    answer:
      'Every project has a 100% itemized Bill of Quantities (BOQ) with guaranteed material takeoff specifications (cement, rebar, tiles, fixtures). Clients have full financial clarity before breaking ground.',
  },
  {
    question: 'Are your blueprints compliant with Nepal National Building Code?',
    answer:
      'Every residential and commercial design is certified for full seismic compliance under NBC 205:2024 and NBC 105:2020 earthquake safety standards for building permits and municipality approvals.',
  },
];

export const defaultRates: RateItem[] = [
  {
    "item": "OPC Cement (Shivam / Hetauda 53G)",
    "category": "Civil",
    "unit": "50 kg Bag",
    "rate": "Rs. 720 – 770",
    "updated": "Verified 2026"
  },
  {
    "item": "TMT Steel Rebar (Fe 500D Grade)",
    "category": "Civil",
    "unit": "Per Kg",
    "rate": "Rs. 92 – 98",
    "updated": "Verified 2026"
  },
  {
    "item": "First-Class Red Clay Bricks (Chimney)",
    "category": "Civil",
    "unit": "Per 1,000 Pcs",
    "rate": "Rs. 14,500 – 16,000",
    "updated": "Verified 2026"
  },
  {
    "item": "Coarse River Sand (Washed)",
    "category": "Civil",
    "unit": "Per Tiper (100 cu.ft)",
    "rate": "Rs. 9,500 – 11,500",
    "updated": "Verified 2026"
  },
  {
    "item": "Crushed Stone Aggregate (20mm / 40mm)",
    "category": "Civil",
    "unit": "Per Tiper (100 cu.ft)",
    "rate": "Rs. 10,500 – 12,500",
    "updated": "Verified 2026"
  },
  {
    "item": "UPVC Soundproof Glazed Windows",
    "category": "Openings",
    "unit": "sq.ft",
    "rate": "Rs. 650 – 850",
    "updated": "Verified 2026"
  },
  {
    "item": "Italian / Spanish Marble & Granite",
    "category": "Finishes",
    "unit": "sq.ft",
    "rate": "Rs. 350 – 650",
    "updated": "Verified 2026"
  },
  {
    "item": "Modular Kitchen (BWP 710 Marine Ply + Acrylic)",
    "category": "Interior",
    "unit": "Running Feet",
    "rate": "Rs. 2,800 – 3,400",
    "updated": "Verified 2026"
  },
  {
    "item": "Gypsum False Ceiling with LED Coving",
    "category": "Interior",
    "unit": "sq.ft",
    "rate": "Rs. 165 – 195",
    "updated": "Verified 2026"
  },
  {
    "item": "2-Coat Putty + Primer + Luxury Emulsion Paint",
    "category": "Finishes",
    "unit": "sq.ft",
    "rate": "Rs. 38 – 48",
    "updated": "Verified 2026"
  }
];

export const defaultPortfolio: PortfolioItem[] = [
  {
    "title": "Mithila Tower & Commercial Complex",
    "category": "Commercial",
    "client": "Dr. Manoj Ray",
    "location": "Jiwisa Chowk, Malangwa",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/mithila_tower.jpg",
    "description": "Multi-storey commercial complex designed with central atrium daylighting, retail promenades, earthquake-resistant RCC frame under NBC 205, and high-traffic circulation.",
    "highlights": "NBC 205 Seismic Compliance • Commercial Atrium • Daylight Optimization"
  },
  {
    "title": "Hyatt Community Hospital",
    "category": "Institutional",
    "client": "Hyatt Healthcare Trust",
    "location": "Barhathwa, Sarlahi",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/hyatt_hospital_1.jpg",
    "description": "Tertiary multi-specialty healthcare facility engineered for sterile medical zoning, ICU flows, medical gas distribution lines, and emergency trauma vehicular access.",
    "highlights": "NBC 105 Seismic Code • Sterile Zoning • Medical Gas Pipeline • 150-Bed Capacity"
  },
  {
    "title": "Hyatt Community Hospital - Campus Perspective",
    "category": "Institutional",
    "client": "Hyatt Healthcare Trust",
    "location": "Barhathwa, Sarlahi",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/hyatt_hospital_2.jpg",
    "description": "Campus perspective showing ambulance bays, outpatient reception plazas, solar orientation, and landscape buffer zones.",
    "highlights": "Emergency Ramp • Passive Shading • Hospital Circulation"
  },
  {
    "title": "Commercial Complex of Mr. Aashiq Ansari",
    "category": "Commercial",
    "client": "Mr. Aashiq Ansari",
    "location": "Gandak, Birgunj",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/aashiq_ansari_commercial.jpg",
    "description": "Modern commercial retail building featuring double-glazed glass storefronts, mezzanine retail storage, and structural concrete framing.",
    "highlights": "Retail Glazing • Mezzanine Engineering • High Footfall Design"
  },
  {
    "title": "Commercial Building for Mr. Umashankar",
    "category": "Commercial",
    "client": "Mr. Umashankar",
    "location": "Birgunj, Parsa",
    "year": "2026 A.D.",
    "imageUrl": "assets/projects/umashankar_commercial.jpg",
    "description": "Contemporary high-visibility retail and corporate office development along major transit corridors with municipal Naksha Pass documentation.",
    "highlights": "Commercial Bye-laws • Naksha Pass Approved • Modern Facade"
  },
  {
    "title": "Commercial Building of Mr. Anand Chaudhary",
    "category": "Commercial",
    "client": "Mr. Anand Chaudhary",
    "location": "Birgunj-7, Parsa",
    "year": "2026 A.D.",
    "imageUrl": "assets/projects/anand_chaudhary_commercial.jpg",
    "description": "Five-storey commercial building with column-free retail floor plates, elevator core integration, and earthquake ductile detailing.",
    "highlights": "Column-free Spans • Ductile Detailing • Modern Aluminium Louvers"
  },
  {
    "title": "Commercial cum Residence for Mr. Kamlesh Agrawal",
    "category": "Commercial",
    "client": "Mr. Kamlesh Agrawal",
    "location": "Adarshnagar, Birgunj",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/kamlesh_agrawal_commercial.jpg",
    "description": "Mixed-use commercial and luxury residential tower in Adarshnagar, featuring ground-floor showrooms with luxury duplex private residence above.",
    "highlights": "Mixed-use Zoning • Private Elevator • Acoustic Separation"
  },
  {
    "title": "BYD Birgunj Showroom & Corporate Complex",
    "category": "Commercial",
    "client": "BYD Birgunj",
    "location": "Birgunj, Parsa",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/byd_showroom_1.jpg",
    "description": "Flagship electric vehicle showroom with double-height structural glass curtain wall facade, EV heavy charging foundations, and executive VIP lounge.",
    "highlights": "Double-height Curtain Wall • EV Charging Bay • Corporate Brand Guidelines"
  },
  {
    "title": "BYD Birgunj - Service Bay & Experience Center",
    "category": "Commercial",
    "client": "BYD Birgunj",
    "location": "Birgunj, Parsa",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/byd_showroom_2.jpg",
    "description": "Complete architectural plan and Lumion 3D visualization for customer delivery bays, technical diagnostics workshop, and corporate reception.",
    "highlights": "Industrial Heavy Floor Slab • 3D Photorealism • Delivery Pavilion"
  },
  {
    "title": "Adarsh City Center & Yash Commercial Hub",
    "category": "Commercial",
    "client": "Yash Petrol Pump & Adarsh Group",
    "location": "Inarwamal, Harnaiya, Bara",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/adarsh_city_center_1.jpg",
    "description": "Transit-oriented retail and food plaza adjoining highway petrol center with basement parking, escalators, and covered promenades.",
    "highlights": "Highway Transit Plaza • Basement Soil Stabilization • Food Court"
  },
  {
    "title": "Adarsh City Center - Retail Promenade",
    "category": "Commercial",
    "client": "Yash Petrol Pump & Adarsh Group",
    "location": "Inarwamal, Harnaiya, Bara",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/adarsh_city_center_2.jpg",
    "description": "Architectural elevation and lighting scheme for the pedestrian retail concourse and outdoor landscaped terraces.",
    "highlights": "Landscape Terraces • Outdoor Dining • Architectural Lighting"
  },
  {
    "title": "The Shavdaahgriham & Masterplan (Ranighat Samshanghat)",
    "category": "Landscape",
    "client": "Birgunj Metropolitan City Office",
    "location": "Ranighat, Birgunj",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/shavdaahgriham_ranighat_1.jpg",
    "description": "Civic masterplan and landscape architecture for riverfront crematorium, scattering gardens, and serene public reflection spaces.",
    "highlights": "Riverfront Landscaping • Native Terai Vegetation • Heritage Preservation"
  },
  {
    "title": "Electrical Crematorium (Ranighat Samshanghat)",
    "category": "Landscape",
    "client": "Birgunj Metropolitan City Office",
    "location": "Ranighat, Birgunj",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/shavdaahgriham_crematorium.jpg",
    "description": "Modern eco-friendly electrical crematorium engineered with high-efficiency exhaust scrubbers and minimal emotional distress architecture.",
    "highlights": "Eco-friendly Engineering • Calming Geometry • Municipal Milestone"
  },
  {
    "title": "Ranighat Shavdaahgriham - Traditional Khapada Roof",
    "category": "Landscape",
    "client": "Birgunj Metropolitan City Office",
    "location": "Ranighat, Birgunj",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/shavdaahgriham_roof.jpg",
    "description": "Preservation of indigenous Terai architectural heritage using traditional clay Khapada roofing integrated with contemporary steel tension trusses.",
    "highlights": "Indigenous Khapada Clay • Hybrid Steel Trusses • Thermal Comfort"
  },
  {
    "title": "Recreational Mato Park",
    "category": "Landscape",
    "client": "Pokhariya Municipality",
    "location": "Pokhariya, Parsa",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/recreational_mato_park_1.jpg",
    "description": "Public botanical and leisure park integrating earth architecture mounds, water retention ponds, walking tracks, and children play zones.",
    "highlights": "Sustainable Earth Architecture • Rainwater Harvesting • Public Civic Plaza"
  },
  {
    "title": "Recreational Mato Park - Amphitheater & Plaza",
    "category": "Landscape",
    "client": "Pokhariya Municipality",
    "location": "Pokhariya, Parsa",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/recreational_mato_park_2.jpg",
    "description": "Central community gathering amphitheater with stepped grass seating, native shade trees, and permeable paving.",
    "highlights": "Open Amphitheater • Permeable Pavers • Native Flora"
  },
  {
    "title": "Landscape Makeover of Inland Revenue Office (IRO)",
    "category": "Landscape",
    "client": "Inland Revenue Office, Birgunj",
    "location": "Birgunj, Parsa",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/iro_birgunj_landscape.jpg",
    "description": "Government office premises revitalization featuring welcoming entry gates, shaded waiting corridors, and drought-tolerant Terai landscaping.",
    "highlights": "Government Campus Revitalization • Shaded Walkways • Low-maintenance Plants"
  },
  {
    "title": "Residence of Mr. Tulsi Gupta",
    "category": "Residential",
    "client": "Mr. Tulsi Gupta",
    "location": "Birgunj, Parsa",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/tulsi_gupta_residence_1.jpg",
    "description": "Ultra-luxury modern family residence with Italian marble floors, fluted acoustic paneling, concealed cove LED lighting, and private courtyard.",
    "highlights": "Turnkey Interior Fitout • NBC 205 Frame • Smart Home Automation"
  },
  {
    "title": "Residence of Mr. Tulsi Gupta - Exterior View",
    "category": "Residential",
    "client": "Mr. Tulsi Gupta",
    "location": "Birgunj, Parsa",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/tulsi_gupta_residence_2.jpg",
    "description": "Architectural facade elevation featuring textured plaster, wood-finish exterior louvers, glass railings, and evening landscape lighting.",
    "highlights": "Climate-responsive Louvers • Architectural Lighting • Grand Balcony"
  },
  {
    "title": "Residence of Dr. Shahid Alam",
    "category": "Residential",
    "client": "Dr. Shahid Alam",
    "location": "Birgunj, Parsa",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/shahid_alam_residence.jpg",
    "description": "Contemporary villa designed for medical professional family with climate-responsive facade, spacious bedrooms, and earthquake-proof RCC structure.",
    "highlights": "Passive Climate Shading • Custom Joinery • Structural Blueprints"
  },
  {
    "title": "Residence of Mr. Rohan Yadav",
    "category": "Residential",
    "client": "Mr. Rohan Yadav",
    "location": "Ranighat, Birgunj",
    "year": "2022 A.D.",
    "imageUrl": "assets/projects/rohan_yadav_residence.jpg",
    "description": "Refined 2.5-storey residential bungalow with open-plan kitchen, south-facing daylighting, and complete municipal approval drawings.",
    "highlights": "Daylight Planning • Naksha Pass Set • Open Plan Layout"
  },
  {
    "title": "Residence for Mr. Sumit Singh",
    "category": "Residential",
    "client": "Mr. Sumit Singh",
    "location": "Brahma Chowk, Birgunj",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/sumit_singh_residence.jpg",
    "description": "Sleek geometric contemporary villa with cantilevered balconies, custom metal pergolas, and optimized cross-ventilation.",
    "highlights": "Cantilever Balconies • Geometric Elevations • Cross Ventilation"
  },
  {
    "title": "Residence cum Commercial Building of Dr. Ashok Shah",
    "category": "Residential",
    "client": "Dr. Ashok Shah",
    "location": "Lath Galli, Birgunj",
    "year": "2019 A.D.",
    "imageUrl": "assets/projects/ashok_shah_residence.jpg",
    "description": "Urban medical clinic on lower floor with comfortable private residential quarters above, maximizing narrow plot frontage.",
    "highlights": "Clinic Integration • Efficient Core • Urban Infill Design"
  },
  {
    "title": "Residence Building of Mr. Rajeshwar Tiwari",
    "category": "Residential",
    "client": "Mr. Rajeshwar Tiwari",
    "location": "Birgunj-13, Parsa",
    "year": "2022 A.D.",
    "imageUrl": "assets/projects/rajeshwar_tiwari_residence.jpg",
    "description": "Traditional Terai family home reimagined with modern earthquake-resistant structural grid, spacious verandas, and puja room.",
    "highlights": "NBC 205 Frame • Vastu Compliant • Traditional Veranda"
  },
  {
    "title": "Residence of Mr. Tikaram Dhakal",
    "category": "Residential",
    "client": "Mr. Tikaram Dhakal",
    "location": "Budhanilkantha, Kathmandu",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/tikaram_dhakal_residence.jpg",
    "description": "Valley hillside residence capturing Himalayan mountain views, south-facing solar gain, and seismic slope retaining foundation engineering.",
    "highlights": "Himalayan Panorama • Hill Slope Foundation • Solar Orientation"
  },
  {
    "title": "Residence of Mr. Samir Ojha",
    "category": "Residential",
    "client": "Mr. Samir Ojha",
    "location": "Tokha-6, Kathmandu",
    "year": "2025 A.D.",
    "imageUrl": "assets/projects/samir_ojha_residence.jpg",
    "description": "Modern urban villa in Tokha featuring 2.5 storeys, modular kitchen, rooftop solar terrace, and complete Naksha Pass municipal documentation.",
    "highlights": "Tokha Bye-laws • Modular Kitchen • Solar Ready Terrace"
  },
  {
    "title": "Residence of Mr. Prakash Amatya",
    "category": "Residential",
    "client": "Mr. Prakash Amatya",
    "location": "Chandragiri, Kathmandu",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/prakash_amatya_residence.jpg",
    "description": "Contemporary multi-family residence with stepped gardens, open terrace pavilions, and seismic foundation engineering.",
    "highlights": "Stepped Garden • Mountain Views • Seismic Engineering"
  },
  {
    "title": "Residence of Mr. Yagya Raj Upreti",
    "category": "Residential",
    "client": "Mr. Yagya Raj Upreti",
    "location": "Chandragiri, Kathmandu",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/yagya_raj_upreti_residence.jpg",
    "description": "Hilltop residence designed for thermal comfort, natural brick finishes, insulated glass windows, and earthquake safety.",
    "highlights": "Thermal Comfort • Insulated Glazing • Brick Accent Architecture"
  },
  {
    "title": "Residence of Mr. Bidur Khatiwada",
    "category": "Residential",
    "client": "Mr. Bidur Khatiwada",
    "location": "Sirutaar, Lalitpur",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/bidur_khatiwada_residence.jpg",
    "description": "Suburban Lalitpur villa combining modern minimalist aesthetics, private courtyard gardens, and full structural civil engineering.",
    "highlights": "Lalitpur Bye-laws • Courtyard Garden • Turnkey Engineering"
  },
  {
    "title": "Residence of Mr. Uma Shah",
    "category": "Residential",
    "client": "Mr. Uma Shah",
    "location": "Tokha-6, Kathmandu",
    "year": "2019 A.D.",
    "imageUrl": "assets/projects/uma_shah_residence.jpg",
    "description": "Kathmandu Valley residential home designed with traditional brick elements, open kitchen, and reinforced concrete frame.",
    "highlights": "Valley Architecture • RCC Frame • Modern Traditional Blend"
  },
  {
    "title": "Residence of Mr. Laxmi Prasad Poudel",
    "category": "Residential",
    "client": "Mr. Laxmi Prasad Poudel",
    "location": "Bhaktapur",
    "year": "2019 A.D.",
    "imageUrl": "assets/projects/laxmi_poudel_residence.jpg",
    "description": "Family residence in historic Bhaktapur respecting local municipal architectural bye-laws and Newari traditional accents.",
    "highlights": "Bhaktapur Bye-laws • Heritage Context • Reinforced Frame"
  },
  {
    "title": "Residence of Mr. Narayan Baral",
    "category": "Residential",
    "client": "Mr. Narayan Baral",
    "location": "Birtamod, Jhapa",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/narayan_baral_residence.jpg",
    "description": "Spacious Eastern Nepal residence featuring climate-responsive overhangs, wide porch, and turnkey interior joinery.",
    "highlights": "Eastern Terai Climate • Wide Porch • Custom Interior"
  },
  {
    "title": "Residence of Mr. Bhim Baral",
    "category": "Residential",
    "client": "Mr. Bhim Baral",
    "location": "Birtamod, Jhapa",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/bhim_baral_residence.jpg",
    "description": "Modern duplex home designed for joint family living with independent access, double garage, and landscaped lawn.",
    "highlights": "Duplex Plan • Landscaped Frontage • Double Garage"
  },
  {
    "title": "Residence of Mr. Chiran Khatiwada",
    "category": "Residential",
    "client": "Mr. Chiran Khatiwada",
    "location": "Budhabare, Jhapa",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/chiran_khatiwada_residence.jpg",
    "description": "Contemporary rural villa integrating scenic tea garden views, deep verandahs, and earthquake-proof civil detailing.",
    "highlights": "Tea Garden Views • Deep Verandahs • Ductile RCC"
  },
  {
    "title": "Residence of Jagdish Mahato",
    "category": "Residential",
    "client": "Mr. Jagdish Mahato",
    "location": "Janakpurdham, Dhanusha",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/jagdish_mahato_residence.jpg",
    "description": "Grand residential villa in Janakpur featuring classical Mithila arches, central courtyard ventilation, and modern luxury suites.",
    "highlights": "Mithila Classical Touch • Courtyard Ventilation • Luxury Suites"
  },
  {
    "title": "Low-rise Apartment for Birgunj Customs Office",
    "category": "Institutional",
    "client": "Birgunj Customs Office",
    "location": "Birgunj Customs, Birgunj",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/birgunj_customs_apartment.jpg",
    "description": "Staff housing and executive residential quarters for customs officers, built with high security, seismic durability, and communal facilities.",
    "highlights": "Government Staff Housing • NBC 205 Compliance • Secure Compound"
  },
  {
    "title": "Office Building for Alpine High School",
    "category": "Institutional",
    "client": "Alpine High School",
    "location": "Birgunj-13, Parsa",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/alpine_high_school.jpg",
    "description": "Administrative academic building featuring principal office, conference boardroom, staff lounges, and student advisory center.",
    "highlights": "Educational Administration • Boardroom Acoustic Design • Natural Light"
  },
  {
    "title": "Institutional Building of Aria Institute",
    "category": "Institutional",
    "client": "Aria Institute",
    "location": "Birgunj-13, Parsa",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/aria_institute.jpg",
    "description": "Higher education building with multimedia lecture halls, computer labs, student library, and fire safety egress staircases.",
    "highlights": "Higher Education Facility • Fire Safety Egress • Sound Dampening"
  },
  {
    "title": "Standards & Metrology Calibration Center",
    "category": "Institutional",
    "client": "Standards and Metrology Office, Birgunj",
    "location": "Hetauda, Makwanpur",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/standards_metrology_hetauda.jpg",
    "description": "Specialized precision measurement laboratory building with vibration-isolated foundations and thermal stabilization.",
    "highlights": "Vibration Isolation • High Precision Labs • Government Infrastructure"
  },
  {
    "title": "Administrative Building of Arun Rural Municipality",
    "category": "Institutional",
    "client": "Arun Rural Municipality, Bhojpur",
    "location": "Pyauli, Arun, Bhojpur",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/arun_rural_municipality_1.jpg",
    "description": "Local government municipal headquarters designed with civic assembly hall, mayoral offices, public service counters, and solar power.",
    "highlights": "Civic Architecture • Mountain Terrain Retaining • Universal Accessibility"
  },
  {
    "title": "Arun Rural Municipality - Elevation & Plaza",
    "category": "Institutional",
    "client": "Arun Rural Municipality, Bhojpur",
    "location": "Pyauli, Arun, Bhojpur",
    "year": "2023 A.D.",
    "imageUrl": "assets/projects/arun_rural_municipality_2.jpg",
    "description": "Public plaza, flagpole ceremonial ground, and stone-cladded municipal facade overlooking the Arun river valley.",
    "highlights": "Ceremonial Plaza • Stone Cladding • Public Counters"
  },
  {
    "title": "Blood Transfusion Service Center",
    "category": "Institutional",
    "client": "Project Office of Urban Development & Building Construction, Dhankuta",
    "location": "Khandbari, Sankhuwasabha",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/blood_transfusion_center.jpg",
    "description": "Critical regional healthcare facility with temperature-controlled cold chain blood storage, donor lounges, and sterile laboratory suites.",
    "highlights": "Critical Healthcare • Cold Chain Storage • Sterile Lab Zoning"
  },
  {
    "title": "Multipurpose Block of Himalaya Kiran Public Campus",
    "category": "Institutional",
    "client": "Himalaya Kiran Public Campus",
    "location": "Khandbari, Sankhuwasabha",
    "year": "2022 A.D.",
    "imageUrl": "assets/projects/himalaya_kiran_campus.jpg",
    "description": "University multipurpose academic block featuring 400-seat auditorium, exam halls, and earthquake-resistant structural grid.",
    "highlights": "400-Seat Auditorium • Campus Masterplan • Structural Grid"
  },
  {
    "title": "Office Building of Animal Quarantine Office",
    "category": "Institutional",
    "client": "Animal Quarantine Office",
    "location": "Kakarbhitta, Jhapa",
    "year": "2022 A.D.",
    "imageUrl": "assets/projects/animal_quarantine_jhapa.jpg",
    "description": "Cross-border quarantine inspection building with laboratory screening rooms, administrative desks, and vehicle inspection ramps.",
    "highlights": "Border Inspection Facility • Bio-secure Labs • Quarantine Ramps"
  },
  {
    "title": "ISCKON Temple Complex",
    "category": "Religious",
    "client": "ISCKON Birgunj / Ramjanki Temple Trust",
    "location": "Behind Ramjanki Temple, Birgunj",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/isckon_temple_birgunj.jpg",
    "description": "Sacred temple complex combining traditional Vedic shikhara geometry with seismic RCC core engineering and devotional prayer halls.",
    "highlights": "Vedic Architecture • Shikhara Geometry • Acoustically Tuned Bhajan Hall"
  },
  {
    "title": "Temple Complex of Kalikamai Temple",
    "category": "Religious",
    "client": "Kalikamai Temple Management Committee",
    "location": "Kalikamai, Parsa",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/kalikamai_temple_complex.jpg",
    "description": "Pilgrimage complex masterplan with circumambulation walkways, sacred water kund, pilgrim shelters, and ornate brick carvings.",
    "highlights": "Pilgrimage Masterplan • Sacred Kund • Ornate Carvings"
  },
  {
    "title": "Temple of Arun Adhyatmik Kendra",
    "category": "Religious",
    "client": "Arun Adhyatmik Kendra",
    "location": "Pyauli, Bhojpur",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/arun_adhyatmik_temple.jpg",
    "description": "Spiritual meditation sanctuary positioned on peaceful hilltop ridge, designed with natural local stone, timber rafters, and meditation gardens.",
    "highlights": "Spiritual Sanctuary • Timber Rafters • Mountain Meditation Gardens"
  },
  {
    "title": "Interior Design - Residence of Mr. Bidur Khatiwada",
    "category": "Interior",
    "client": "Mr. Bidur Khatiwada",
    "location": "Sirutaar, Lalitpur",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/interior_bidur_khatiwada_1.jpg",
    "description": "Scandinavian minimalist interior styling with fluted charcoal acoustic paneling, concealed cove LED lighting, and Italian marble flooring.",
    "highlights": "Acoustic Fluting • Cove Lighting • Italian Marble"
  },
  {
    "title": "Living Room & Entertainment Unit - Bidur Khatiwada",
    "category": "Interior",
    "client": "Mr. Bidur Khatiwada",
    "location": "Sirutaar, Lalitpur",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/interior_bidur_khatiwada_2.jpg",
    "description": "Custom floating TV credenza with concealed cable routing, backlit profile LED niches, and matte PU paint finish.",
    "highlights": "Custom Joinery • Backlit Profile LED • Concealed Wiring"
  },
  {
    "title": "Modular Kitchen with BWP Marine Ply & Acrylic",
    "category": "Interior",
    "client": "Mr. Bidur Khatiwada",
    "location": "Sirutaar, Lalitpur",
    "year": "2020 A.D.",
    "imageUrl": "assets/projects/interior_bidur_khatiwada_kitchen.jpg",
    "description": "Ergonomic modular kitchen built with Boiling Water Proof (BWP) 710 marine plywood, soft-close Blum hardware, and high-gloss acrylic shutters.",
    "highlights": "BWP 710 Marine Ply • Soft-close Tandem Boxes • Quartz Countertop"
  },
  {
    "title": "Interior Design - Residence of Mr. Narayan Baral",
    "category": "Interior",
    "client": "Mr. Narayan Baral",
    "location": "Birtamode, Jhapa",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/interior_narayan_baral_1.jpg",
    "description": "Warm contemporary interior featuring rich walnut laminates, coffered gypsum false ceilings, and ambient 3000K warm illumination.",
    "highlights": "Walnut Joinery • Coffered Ceiling • 3000K Warm Ambiance"
  },
  {
    "title": "Foyer & Dining Suite - Narayan Baral",
    "category": "Interior",
    "client": "Mr. Narayan Baral",
    "location": "Birtamode, Jhapa",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/interior_narayan_baral_dining.jpg",
    "description": "Open-plan dining space with integrated crockery unit, fluted glass partitions, and designer chandelier accent.",
    "highlights": "Fluted Glass • Crockery Display • Designer Chandelier"
  },
  {
    "title": "Master Bedroom Suite - Narayan Baral",
    "category": "Interior",
    "client": "Mr. Narayan Baral",
    "location": "Birtamode, Jhapa",
    "year": "2021 A.D.",
    "imageUrl": "assets/projects/interior_narayan_baral_bedroom.jpg",
    "description": "Luxury master bedroom with floor-to-ceiling cushioned headboard, integrated dresser unit, and bedside pendant drop lights.",
    "highlights": "Cushioned Headboard • Floor-to-ceiling Wardrobes • Bedside Pendants"
  },
  {
    "title": "Interior Design - Residence of Mr. Nitesh Singh",
    "category": "Interior",
    "client": "Mr. Nitesh Singh",
    "location": "Kalaiya, Bara",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/interior_nitesh_singh_living.jpg",
    "description": "Modern luxury interior execution across living room with marble wall claddings, magnetic track lighting, and custom plush sectional sofa.",
    "highlights": "Magnetic Track Lights • Marble Cladding • Custom Furniture"
  },
  {
    "title": "Custom TV Console & Media Wall - Nitesh Singh",
    "category": "Interior",
    "client": "Mr. Nitesh Singh",
    "location": "Kalaiya, Bara",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/interior_nitesh_singh_tv.jpg",
    "description": "Minimalist entertainment console with integrated acoustic wood louvers, concealed sub-woofer bay, and satin finish cabinetry.",
    "highlights": "Acoustic Slats • Concealed Equipment Bay • Satin Finish"
  },
  {
    "title": "Master Suite & Walk-in Wardrobe - Nitesh Singh",
    "category": "Interior",
    "client": "Mr. Nitesh Singh",
    "location": "Kalaiya, Bara",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/interior_nitesh_singh_master.jpg",
    "description": "Full-height walk-in wardrobe with tinted glass profile doors, interior sensor LEDs, jewelry organizer trays, and private dressing lounge.",
    "highlights": "Tinted Glass Wardrobe • Sensor LED Illumination • Dressing Lounge"
  },
  {
    "title": "Modern Luxury Living Room Suite",
    "category": "Interior",
    "client": "Scale & Spaces Signature Suite",
    "location": "Birgunj / Kathmandu",
    "year": "2024 A.D.",
    "imageUrl": "assets/projects/interior_modern_luxury_living.jpg",
    "description": "Signature living room design by Scale and Spaces featuring floating false ceiling, acoustic panels, concealed HVAC diffusers, and luxury furniture.",
    "highlights": "Floating False Ceiling • Concealed HVAC • Luxury Materials"
  },
  {
    "title": "National Logo Design Competition - Winning Entry",
    "category": "Branding",
    "client": "National Architectural Competition",
    "location": "Nepal",
    "year": "2022 A.D.",
    "imageUrl": "assets/projects/logo_competition_winner.jpg",
    "description": "First Prize Winning architectural logo design demonstrating structural geometry, spatial balance, and the golden ratio in brand identity.",
    "highlights": "First Prize Winner • Golden Ratio • Brand Identity"
  }
];

export const defaultShowcase: ShowcaseItem[] = [
  {
    title: 'Master Suite Lighting & Joinery Walkthrough',
    platform: 'Instagram',
    date: 'Recent Update',
    imageUrl: 'https://i.postimg.cc/ryKvxdrN/Bedroom-render-Project2-1.png',
    url: 'https://www.instagram.com/scaleandspaces/',
    description: 'Watch video walkthrough of custom joinery and warm 3000K indirect cove illumination.',
  },
  {
    title: 'Living Room 360° Interactive Virtual Tour',
    platform: '360° VR',
    date: 'VR Tour',
    imageUrl: 'assets/projects/interior_modern_luxury_living.jpg',
    url: 'https://www.facebook.com/p/Scale-and-Spaces-61555038874110/',
    description: 'Pan in 360 degrees to inspect floor plan flow, furniture clearance, and texture finishes.',
  },
  {
    title: 'On-Site RCC Pouring & Quality Audit',
    platform: 'Site Update',
    date: 'Birgunj Hub',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?w=1000&fit=crop&q=80',
    url: 'https://wa.me/9779703881733',
    description: 'Slump test and cube compression testing on M20 concrete slab casting under lead engineer supervision.',
  },
];

// Rich Posts dataset extracted directly from official document portfolio_d5c2edf0.htm
// Directly powers both the Live Project View and the Continuous Construction Reel
export const defaultPosts: PostItem[] = [
  {
    title: 'Hyatt Community Hospital',
    caption:
      'Tertiary healthcare facility master planned with NBC 105 seismic ductility, specialized medical gas pipeline routing, 150-bed inpatient capacity.',
    imageUrl: 'assets/projects/hyatt_hospital_1.jpg',
    location: 'Barhathwa, Sarlahi & Birgunj',
    category: 'Healthcare & Institutional Architecture',
    area: '45,000 Sq.Ft Built-up',
    status: 'Turnkey Phase II • Active Site',
    blueprintRef: 'NBC 205-HOSP-2024',
    link: '#portfolio',
  },
  {
    title: 'BYD Birgunj Showroom & Corporate Complex',
    caption:
      'Double-height structural glass curtain wall facade, EV heavy charging bay structural foundations, executive corporate lounge, and daylight illumination.',
    imageUrl: 'assets/projects/byd_showroom_1.jpg',
    location: 'Birgunj-12 (Opp. Indian Embassy)',
    category: 'Commercial Automobile Showroom',
    area: '12,500 Sq.Ft Built-up',
    status: 'Completed & Operational',
    blueprintRef: 'BYD-COMM-2024-PASS',
    link: '#portfolio',
  },
  {
    title: 'Tulsi Gupta Luxury Private Residence',
    caption:
      'Bespoke architectural residence featuring acoustic fluted wall cladding, floating ceiling coving with warm 3000K concealed LEDs, and Italian marble finishes.',
    imageUrl: 'assets/projects/interior_modern_luxury_living.jpg',
    location: 'Birgunj-12, Parsa',
    category: 'Contemporary Villa & Interior Fitout',
    area: '4,200 Sq.Ft Built-up',
    status: 'Handed Over • Complete Turnkey',
    blueprintRef: 'TG-RES-2024',
    link: '#portfolio',
  },
  {
    title: 'Adarsh City Center & Yash Commercial Complex',
    caption:
      'Modern shopping and corporate complex with basement multi-vehicle parking, dual high-speed escalators, fire-safe egress stairwells.',
    imageUrl: 'assets/projects/adarsh_city_center_1.jpg',
    location: 'Main Road, Birgunj',
    category: 'Urban Mixed-Use Commercial Mall',
    area: '32,000 Sq.Ft Built-up',
    status: 'Municipal Naksha Pass Approved',
    blueprintRef: 'ACC-COMM-2024',
    link: '#portfolio',
  },
  {
    title: 'Mithila Tower & Commercial Complex',
    caption:
      'High-traffic commercial landmark for Dr. Manoj Ray incorporating passive daylight atriums, column-free retail spans, Fe500 seismic reinforcement.',
    imageUrl: 'assets/projects/mithila_tower.jpg',
    location: 'Jiwisa Chowk, Malangwa',
    category: 'Mixed-Use High-Rise Plaza',
    area: '28,000 Sq.Ft Built-up',
    status: 'Structural Execution • NBC 205',
    blueprintRef: 'MT-CIVIL-2024',
    link: '#portfolio',
  },
  {
    title: 'Contemporary Master Residence & Penthouse',
    caption:
      'Complete structural and interior renovation of an existing 2.5-storey building in Kathmandu. Seismic retrofitting, acrylic modular kitchen.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&fit=crop&q=80',
    location: 'Tokha-6, Kathmandu',
    category: 'Turnkey Architectural Renovation',
    area: '3,400 Sq.Ft Built-up',
    status: 'Handed Over • Turnkey Finished',
    blueprintRef: 'KTM-RENO-2024',
    link: '#portfolio',
  },
  {
    title: 'Redevelopment of Ranighat Samshanghat',
    caption:
      'The Shavdaahgriham and masterplan integrating modern aesthetics with local terai climate landscaping, native plantings, and eco-friendly khapada roof.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&fit=crop&q=80',
    location: 'Ranighat, Birgunj',
    category: 'Landscape & Public Crematorium',
    area: 'Birgunj Metropolitan City Office',
    status: 'Completed Public Landmark',
    blueprintRef: 'RANI-LAND-2021',
    link: '#portfolio',
  },
  {
    title: 'Recreational Mato Park',
    caption:
      'Eco-friendly civic recreation park with water features, native terai flora, walking trails, and community pavilions for Pokhariya.',
    imageUrl: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=1000&fit=crop&q=80',
    location: 'Pokhariya, Parsa',
    category: 'Landscape & Urban Park',
    area: '18,000 Sq.M',
    status: 'Phase I Handover',
    blueprintRef: 'POKH-PARK-2025',
    link: '#portfolio',
  },
  {
    title: 'Commercial Complex of Mr. Aashiq Ansari',
    caption:
      'Heavy RCC framing, multi-tenant storefront layouts, high-visibility street frontage in Gandak commercial zone.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?w=1000&fit=crop&q=80',
    location: 'Gandak, Birgunj',
    category: 'Commercial Complex',
    area: '22,000 Sq.Ft Built-up',
    status: 'Turnkey Handover',
    blueprintRef: 'ANS-COMM-2023',
    link: '#portfolio',
  },
  {
    title: 'Residence of Dr. Shahid Alam',
    caption:
      'Tri-level contemporary residence with cantilevered balconies, private prayer sanctuary, and bespoke joinery.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&fit=crop&q=80',
    location: 'Birgunj, Parsa',
    category: 'Luxury Residential Villa',
    area: '4,800 Sq.Ft Built-up',
    status: 'Turnkey Completed',
    blueprintRef: 'ALAM-RES-2024',
    link: '#portfolio',
  },
];

export const defaultDownloads: DownloadItem[] = [
  {
    title: 'NBC 205:2024 Nepal Building Code Mandatory Structural Rules',
    category: 'Engineering Code',
    downloadUrl: 'https://moud.gov.np/storage/list/nbc-205.pdf',
    url: 'https://moud.gov.np/storage/list/nbc-205.pdf',
    fileSize: '3.4 MB',
    size: '3.4 MB',
  },
  {
    title: 'Turnkey Construction & BOQ Cost Guide (Kathmandu & Birgunj)',
    category: 'BOQ Estimator',
    downloadUrl: 'https://wa.me/9779703881733?text=Hi%20Scale%20and%20Spaces,%20please%20send%20me%20the%20Turnkey%20Construction%20BOQ%20Cost%20Guide%20PDF.',
    url: 'https://wa.me/9779703881733?text=Hi%20Scale%20and%20Spaces,%20please%20send%20me%20the%20Turnkey%20Construction%20BOQ%20Cost%20Guide%20PDF.',
    fileSize: '1.2 MB',
    size: '1.2 MB',
  },
  {
    title: 'Municipal Naksha Pass Checklist & Document Verification',
    category: 'Naksha Pass',
    downloadUrl: 'https://kmc.gov.np',
    url: 'https://kmc.gov.np',
    fileSize: '1.8 MB',
    size: '1.8 MB',
  },
];

export const defaultArticles: ArticleItem[] = [
  {
    title: 'Understanding NBC 205: Mandatory Earthquake Rules for Nepal',
    category: 'Structural Engineering',
    excerpt:
      'Why 350mm x 350mm columns and strict confinement ties are non-negotiable for 2-3 storey residential buildings.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?w=800',
    summary:
      'Nepal National Building Code NBC 205 dictates ductile seismic reinforcement detailing to ensure residential dwellings withstand major tremors without brittle catastrophic collapse.',
  },
  {
    title: 'Contractor vs Professional Architectural Firm: The Cost Reality',
    category: 'Home Renovation',
    excerpt:
      'Why informal contractor estimations lead to 25-40% hidden budget overruns compared to an itemized BOQ.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    summary:
      'A complete architectural set with 3D photorealistic visualization and itemized BOQ clarifies structural loads and materials upfront, eradicating costly on-site demolition and re-work.',
  },
];

export interface SheetSyncedState {
  hero: HeroContent;
  packages: PackageItem[];
  about: AboutContent;
  team: TeamMember[];
  faqs: FaqItem[];
  rates: RateItem[];
  portfolio: PortfolioItem[];
  showcase: ShowcaseItem[];
  posts: PostItem[];
  downloads: DownloadItem[];
  articles: ArticleItem[];
  ads: AdItem[];
}

// Robust fallback fetching with JSONP & CSV
async function fetchSheetJSONP(sheetId: string, tabName: string): Promise<any[][]> {
  return new Promise((resolve, reject) => {
    const callbackName = `gviz_cb_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=responseHandler:${callbackName}&sheet=${encodeURIComponent(
      tabName
    )}&headers=0`;

    const script = document.createElement('script');
    script.src = url;

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error(`Timeout loading Google Sheet tab: ${tabName}`));
    }, 9000);

    const cleanup = () => {
      clearTimeout(timeout);
      if (script.parentNode) script.parentNode.removeChild(script);
      delete (window as any)[callbackName];
    };

    (window as any)[callbackName] = (response: any) => {
      cleanup();
      try {
        if (!response || !response.table || !response.table.rows) {
          resolve([]);
          return;
        }
        const rows = response.table.rows.map((row: any) => {
          if (!row || !row.c) return [];
          return row.c.map((cell: any) => (cell ? cell.v ?? cell.f ?? '' : ''));
        });
        resolve(rows);
      } catch (err) {
        reject(err);
      }
    };

    script.onerror = () => {
      cleanup();
      reject(new Error(`Script loading error for Google Sheet tab: ${tabName}`));
    };

    document.body.appendChild(script);
  });
}

function parseCSV(text: string): string[][] {
  const lines = text.split(/\r\n|\n/);
  return lines.map((line) => {
    const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
    const row: string[] = [];
    let match;
    while ((match = regex.exec(line))) {
      let val = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
      row.push(val ?? '');
    }
    return row;
  });
}

async function fetchGoogleTab(sheetId: string, tabName: string): Promise<any[][]> {
  try {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
      tabName
    )}`;
    const res = await fetch(csvUrl, { cache: 'no-cache' });
    if (res.ok) {
      const text = await res.text();
      return parseCSV(text);
    }
    throw new Error('CSV fetch failed');
  } catch (e) {
    return await fetchSheetJSONP(sheetId, tabName);
  }
}

async function fetchTabWithAliases(sheetId: string, aliases: string[]): Promise<any[][]> {
  for (const name of aliases) {
    try {
      const rows = await fetchGoogleTab(sheetId, name);
      if (rows && rows.length > 0) return rows;
    } catch (e) {
      // try next alias
    }
  }
  return [];
}

export async function loadAllSheetData(sheetId: string = GOOGLE_SHEET_ID): Promise<Partial<SheetSyncedState>> {
  const result: Partial<SheetSyncedState> = {};

  // 0. Ads / Hiring Popup Tab
  try {
    const adRows = await fetchTabWithAliases(sheetId, ['Ads', 'ads', 'Notice', 'notices', 'Popup', 'Hiring']);
    if (adRows && adRows.length > 0) {
      const valid = adRows.filter((r, idx) => {
        if (idx === 0 && /^(title|ad|notice|sn|id)/i.test(String(r[0] || '').trim())) return false;
        return (r[0] || r[1]) && String(r[0] || r[1]).trim() !== '';
      });
      if (valid.length > 0) {
        result.ads = valid.map((r) => ({
          title: String(r[0] || 'Notice'),
          imageUrl: formatImageUrl(r[1]) || 'https://i.postimg.cc/TYFVjwS0/Hiring.jpg',
          caption: String(r[2] || ''),
          status: String(r[3] || 'Active'),
          badge: String(r[4] || 'Announcement'),
          ctaText: String(r[5] || 'Apply on WhatsApp'),
          ctaLink: String(r[6] || 'https://wa.me/9779703881733'),
        }));
      }
    }
  } catch (e) {
    console.warn('Error fetching Ads tab:', e);
  }

  // 1. Packages
  try {
    const pkgRows = await fetchTabWithAliases(sheetId, ['Packages', 'packages', 'Package', 'Pricing']);
    if (pkgRows && pkgRows.length > 0) {
      const valid = pkgRows.filter((r, idx) => {
        if (idx === 0 && /^(tier|package|name)/i.test(String(r[0] || r[1]).trim())) return false;
        return (r[0] || r[1]) && String(r[0] || r[1]).trim() !== '';
      });
      if (valid.length > 0) {
        result.packages = valid.map((r) => ({
          badge: String(r[0] || 'Package'),
          name: String(r[1] || 'Service'),
          price: String(r[2] || 'Custom Quote'),
          description: String(r[3] || ''),
          features: r[4] ? String(r[4]).split(',').map((f) => f.trim()).filter(Boolean) : [],
          isPopular: String(r[5] || '').toLowerCase() === 'true' || String(r[5] || '').toLowerCase() === 'yes',
          whatsappMessage: String(r[6] || ''),
        }));
      }
    }
  } catch (e) {
    console.warn('Google Sheet Packages sync error, keeping defaults', e);
  }

  // 2. Hero (Supports both Key-Value layout and Column Header layout)
  try {
    const heroRows = await fetchTabWithAliases(sheetId, ['Hero', 'hero', 'Home', 'SEO']);
    if (heroRows && heroRows.length > 0) {
      const map: Record<string, string> = {};
      heroRows.forEach((row) => {
        if (row[0]) map[String(row[0]).trim()] = String(row[1] || '').trim();
      });

      let disciplines = defaultHero.disciplines;
      if (map['Disciplines'] || map['Turnkey Disciplines'] || map['Diciplines']) {
        const raw = map['Disciplines'] || map['Turnkey Disciplines'] || map['Diciplines'];
        disciplines = raw.split(',').map((s) => s.trim()).filter(Boolean);
      }

      result.hero = {
        badge: map['Badge'] || defaultHero.badge,
        title: map['H1_Title'] ? map['H1_Title'].replace(/\*(.*?)\*/g, '$1') : defaultHero.title,
        description: map['Paragraph'] ? map['Paragraph'].replace(/\*\*(.*?)\*\*/g, '$1') : defaultHero.description,
        btn1Text: map['Btn1_Text'] || defaultHero.btn1Text,
        btn1Link: map['Btn1_Link'] || defaultHero.btn1Link,
        btn2Text: map['Btn2_Text'] || defaultHero.btn2Text,
        btn2Link: map['Btn2_Link'] || defaultHero.btn2Link,
        disciplines,
      };
    }
  } catch (e) {
    console.warn('Google Sheet Hero sync error', e);
  }

  // 3. About
  try {
    const abRows = await fetchTabWithAliases(sheetId, ['About', 'about', 'Philosophy', 'Firm']);
    if (abRows && abRows.length > 0) {
      const map: Record<string, string> = {};
      abRows.forEach((row) => {
        if (row[0]) map[String(row[0]).trim()] = String(row[1] || '').trim();
      });
      result.about = {
        title: map['H2_Title'] || map['Title'] || defaultAbout.title,
        bioP1: map['Bio_P1'] || map['Paragraph1'] || defaultAbout.bioP1,
        bioP2: map['Bio_P2'] || map['Paragraph2'] || defaultAbout.bioP2,
        photoUrl: formatImageUrl(map['Photo_URL']) || defaultAbout.photoUrl,
        stat1Num: map['Stat1_Num'] || defaultAbout.stat1Num,
        stat1Label: map['Stat1_Label'] || defaultAbout.stat1Label,
        stat2Num: map['Stat2_Num'] || defaultAbout.stat2Num,
        stat2Label: map['Stat2_Label'] || defaultAbout.stat2Label,
        stat3Num: map['Stat3_Num'] || defaultAbout.stat3Num,
        stat3Label: map['Stat3_Label'] || defaultAbout.stat3Label,
        languages: map['Languages'] || defaultAbout.languages,
      };
    }
  } catch (e) {
    console.warn('Google Sheet About sync error', e);
  }

  // 4. Team (From portfolio_d5c2edf0.htm)
  try {
    const teamRows = await fetchTabWithAliases(sheetId, ['Team', 'team', 'Teams', 'teams', 'Our Team', 'Members']);
    if (teamRows && teamRows.length > 0) {
      let offset = 0;
      const firstRow = teamRows[0] || [];
      if (/^(sn|s\.n|no|id)/i.test(String(firstRow[0]).trim()) || (!isNaN(Number(firstRow[0])) && firstRow[0] !== '')) {
        offset = 1;
      }
      const valid = teamRows.filter((r, idx) => {
        if (idx === 0 && /^(name|member|sn)/i.test(String(r[offset] || r[0]).trim())) return false;
        return r[offset] && String(r[offset]).trim() !== '';
      });
      if (valid.length > 0) {
        result.team = valid.map((r) => ({
          name: String(r[offset] || 'Team Specialist'),
          role: String(r[offset + 1] || 'Design Consultant'),
          photoUrl: formatImageUrl(r[offset + 2]) || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
          bio: String(r[offset + 3] || 'Scale and Spaces Pvt. Ltd. Design Team'),
        }));
      }
    }
  } catch (e) {
    console.warn('Google Sheet Team sync error', e);
  }

  // 5. FAQs
  try {
    const faqRows = await fetchTabWithAliases(sheetId, ['FAQs', 'FAQ', 'faq', 'faqs', 'Questions']);
    if (faqRows && faqRows.length > 0) {
      let qOffset = 0;
      if (/^(sn|s\.n|no|id)/i.test(String(faqRows[0][0]).trim())) qOffset = 1;
      const valid = faqRows.filter((r, idx) => {
        if (idx === 0 && /^(question|faq|q|sn)/i.test(String(r[qOffset] || r[0]).trim())) return false;
        return r[qOffset] && String(r[qOffset]).trim() !== '';
      });
      if (valid.length > 0) {
        result.faqs = valid.map((r) => ({
          question: String(r[qOffset] || ''),
          answer: String(r[qOffset + 1] || ''),
        }));
      }
    }
  } catch (e) {
    console.warn('Google Sheet FAQs sync error', e);
  }

  // 6. Rates
  try {
    const rateRows = await fetchTabWithAliases(sheetId, ['Rates', 'rates', 'Material Rates']);
    if (rateRows && rateRows.length > 0) {
      const valid = rateRows.filter((r, idx) => {
        if (idx === 0 && /^(item|material|sn)/i.test(String(r[0]).trim())) return false;
        return r[0] && String(r[0]).trim() !== '';
      });
      if (valid.length > 0) {
        result.rates = valid.map((r) => ({
          item: String(r[0] || ''),
          category: String(r[1] || 'General'),
          unit: String(r[2] || 'sq.ft'),
          rate: String(r[3] || 'Market Rate'),
          updated: String(r[4] || 'Live 2026'),
        }));
      }
    }
  } catch (e) {
    console.warn('Google Sheet Rates sync error', e);
  }

  // 7. Portfolio (Projects)
  try {
    const pRows = await fetchTabWithAliases(sheetId, ['Portfolio', 'portfolio', 'Works', 'works', 'Projects']);
    if (pRows && pRows.length > 0) {
      const valid = pRows.filter((r, idx) => {
        if (idx === 0 && /^(title|design|sn)/i.test(String(r[0]).trim())) return false;
        return r[0] && String(r[0]).trim() !== '';
      });
      if (valid.length > 0) {
        result.portfolio = valid.map((r) => ({
          title: String(r[0] || 'Scale and Spaces Work'),
          category: String(r[1] || 'Residential'),
          description: String(r[2] || ''),
          imageUrl: formatImageUrl(r[3]) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000',
          client: String(r[4] || ''),
          location: String(r[5] || ''),
          year: String(r[6] || ''),
          highlights: String(r[7] || ''),
        }));
      }
    }
  } catch (e) {
    console.warn('Google Sheet Portfolio sync error', e);
  }

  // 8. Showcase (360 VR & Live Works)
  try {
    const sRows = await fetchTabWithAliases(sheetId, ['Showcase', 'showcase', '360 VR', 'Live Works', 'VR']);
    if (sRows && sRows.length > 0) {
      const valid = sRows.filter((r, idx) => {
        if (idx === 0 && /^(title|project|sn)/i.test(String(r[0]).trim())) return false;
        return r[0] && String(r[0]).trim() !== '';
      });
      if (valid.length > 0) {
        result.showcase = valid.map((r) => {
          const title = String(r[0] || '360° Walkthrough');
          const platform = String(r[1] || '360° VR');

          // Intelligently find image URL and link URL across row columns
          let img = '';
          let link = '';
          let desc = '';

          // Look at standard columns first: Col 3 is Image_URL, Col 4 is Link_URL
          if (r[3] && /^https?:\/\//i.test(String(r[3]).trim())) {
            img = String(r[3]).trim();
          }
          if (r[4] && /^https?:\/\//i.test(String(r[4]).trim())) {
            link = String(r[4]).trim();
          }
          if (r[5] && !String(r[5]).trim().startsWith('http')) {
            desc = String(r[5]).trim();
          }

          // Fallback scan across all cells in this row
          if (!img || !link) {
            for (let i = 1; i < r.length; i++) {
              const cell = String(r[i] || '').trim();
              if (/^https?:\/\//i.test(cell)) {
                if (
                  /\.(jpg|jpeg|png|webp|gif)/i.test(cell) ||
                  cell.includes('postimg') ||
                  cell.includes('unsplash') ||
                  cell.includes('googleusercontent') ||
                  cell.includes('drive.google.com')
                ) {
                  if (!img) img = cell;
                  else if (!link) link = cell;
                } else {
                  if (!link) link = cell;
                  else if (!img) img = cell;
                }
              } else if (i >= 4 && !desc && cell !== '') {
                desc = cell;
              }
            }
          }

          return {
            title,
            platform,
            imageUrl: formatImageUrl(img),
            url: link || 'https://wa.me/9779703881733',
            description: desc || '',
          };
        });
      }
    }
  } catch (e) {
    console.warn('Google Sheet Showcase sync error', e);
  }

  // 9. Posts (Powers Home Page Background Slider & Continuous Reel)
  try {
    const postRows = await fetchTabWithAliases(sheetId, [
      'Posts',
      'posts',
      'Post',
      'post',
      'POST',
      'POSTS',
      'Reel',
      'LiveProjectView',
      'Gallery',
    ]);
    if (postRows && postRows.length > 0) {
      const valid = postRows.filter((r, idx) => {
        if (idx === 0 && /^(title|post|sn|name|key)/i.test(String(r[0]).trim())) return false;
        return (r[0] || r[1]) && String(r[4] || 'Active').toLowerCase() !== 'inactive';
      });
      if (valid.length > 0) {
        result.posts = valid.map((r) => {
          let img = '';
          let caption = '';
          let link = '#portfolio';

          // Standard Sheet format: Col 0 Title, Col 1 Image_URL, Col 2 Caption, Col 3 Link_URL, Col 4 Description
          if (r[1] && /^https?:\/\//i.test(String(r[1]).trim())) {
            img = String(r[1]).trim();
            caption = String(r[2] || r[4] || '');
            link = String(r[3] || '#portfolio');
          } else if (r[2] && /^https?:\/\//i.test(String(r[2]).trim())) {
            img = String(r[2]).trim();
            caption = String(r[1] || '');
            link = String(r[3] || '#portfolio');
          } else {
            // Find any cell with image URL
            for (let i = 1; i < r.length; i++) {
              const val = String(r[i] || '').trim();
              if (/^https?:\/\//i.test(val)) {
                img = val;
                break;
              }
            }
            caption = String(r[2] || r[1] || '');
          }

          return {
            title: String(r[0] || 'Scale and Spaces Project'),
            imageUrl: formatImageUrl(img) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000',
            caption: caption || 'Scale and Spaces Pvt. Ltd.',
            link,
            location: String(r[3] || ''),
            category: String(r[4] || ''),
          };
        });
      }
    }
  } catch (e) {
    console.warn('Google Sheet Posts sync error', e);
  }

  // 10. Downloads
  try {
    const dRows = await fetchTabWithAliases(sheetId, [
      'Downloads',
      'downloads',
      'Download',
      'download',
      'Files',
      'files',
      'Documents',
      'Brochures',
    ]);
    if (dRows && dRows.length > 0) {
      const valid = dRows.filter((r, idx) => {
        if (idx === 0 && /^(title|file|sn|name|doc)/i.test(String(r[0] || '').trim())) return false;
        return r[0] && String(r[0]).trim() !== '';
      });
      if (valid.length > 0) {
        result.downloads = valid.map((r) => {
          const title = String(r[0] || 'Architectural Guide');
          let url = '';
          let category = 'Engineering Guide';
          let size = '1.2 MB';

          // Extract across columns
          for (let i = 1; i < r.length; i++) {
            const val = String(r[i] || '').trim();
            if (/^https?:\/\//i.test(val)) {
              if (!url) url = val;
            } else if (/\b(\d+(\.\d+)?\s*(mb|kb|gb))\b/i.test(val)) {
              size = val;
            } else if (val && !category && i <= 2) {
              category = val;
            }
          }

          if (r[1] && !/^https?:\/\//i.test(r[1]) && !/\b(mb|kb)\b/i.test(r[1])) {
            category = String(r[1]);
          }
          if (r[2] && /^https?:\/\//i.test(r[2])) {
            url = String(r[2]);
          }

          // If no direct download URL provided in sheet for this title, fallback to WhatsApp document request
          if (!url) {
            url = `https://wa.me/9779703881733?text=${encodeURIComponent(
              `Hi Scale and Spaces, please share the official guide / document: "${title}".`
            )}`;
          }

          return {
            title,
            category,
            downloadUrl: url,
            url,
            fileSize: size,
            size,
          };
        });
      }
    }
  } catch (e) {
    console.warn('Google Sheet Downloads sync error', e);
  }

  // 11. Articles (Powers "Integrated Services Built for Nepal's Standards")
  try {
    const artRows = await fetchTabWithAliases(sheetId, [
      'Articles',
      'articles',
      'Article',
      'article',
      'ARTICLE',
      'Services',
      'services',
      'Journal',
      'Blog',
    ]);
    if (artRows && artRows.length > 0) {
      const valid = artRows.filter((r, idx) => {
        if (idx === 0 && /^(title|article|sn|key)/i.test(String(r[0]).trim())) return false;
        return r[0] && String(r[0]).trim() !== '';
      });
      if (valid.length > 0) {
        result.articles = valid.map((r) => {
          const title = String(r[0] || 'Integrated Service');
          let img = '';
          let category = '';
          let summary = '';
          let link = '';

          for (let i = 1; i < r.length; i++) {
            const val = String(r[i] || '').trim();
            if (/^https?:\/\//i.test(val)) {
              if (
                /\.(jpg|jpeg|png|webp|gif)/i.test(val) ||
                val.includes('postimg') ||
                val.includes('unsplash') ||
                val.includes('googleusercontent')
              ) {
                if (!img) img = val;
              } else {
                if (!link) link = val;
              }
            } else if (!category && (val.length < 35 || i === 1)) {
              category = val;
            } else if (!summary && val.length > 20) {
              summary = val;
            }
          }

          if (r[3] && /^https?:\/\//i.test(String(r[3]).trim())) {
            img = String(r[3]).trim();
          }
          if (r[4] && !summary) {
            summary = String(r[4]).trim();
          }

          if (!link) {
            link = `https://wa.me/9779703881733?text=${encodeURIComponent(
              `Hi Scale and Spaces, I would like to consult on: "${title}".`
            )}`;
          }

          return {
            title,
            category: category || 'Specialized Discipline',
            excerpt: summary || 'Comprehensive architectural and engineering services tailored for Nepal.',
            imageUrl: formatImageUrl(img) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            summary: summary || 'Comprehensive architectural and engineering services tailored for Nepal.',
            link,
            url: link,
          };
        });
      }
    }
  } catch (e) {
    console.warn('Google Sheet Articles sync error', e);
  }

  return result;
}
