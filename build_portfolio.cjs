const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const projectsData = [
  // Commercial Buildings
  {
    id: 'mithila-tower',
    title: 'Mithila Tower',
    client: 'for Dr. Manoj Ray',
    location: 'Jiwisa Chowk, Malangwa',
    year: '2024 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/mithila_tower.jpg',
    images: ['assets/projects/mithila_tower.jpg'],
    desc: 'Contemporary commercial landmark featuring terracotta perforated jali screen geometry, deep cantilever terraces, curved glazed archways, and integrated retail frontages tailored for Malangwa.'
  },
  {
    id: 'hyatt-community-hospital',
    title: 'Hyatt Community Hospital',
    client: 'Barhathwa 06 Healthcare Center',
    location: 'Barhathwa, Sarlahi',
    year: '2025 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/hyatt_hospital_1.jpg',
    images: ['assets/projects/hyatt_hospital_1.jpg', 'assets/projects/hyatt_hospital_2.jpg'],
    desc: 'Multi-storey community hospital designed for clear emergency ambulance access, hygienic ward zoning, vertical louvered daylighting, and seismic safety.'
  },
  {
    id: 'aashiq-ansari-complex',
    title: 'Commercial Complex',
    client: 'of Mr. Aashiq Ansari',
    location: 'Gandak, Birgunj',
    year: '2023 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/aashiq_ansari_commercial.jpg',
    images: ['assets/projects/aashiq_ansari_commercial.jpg'],
    desc: 'Mixed retail and commercial complex featuring expressive angular concrete canopies, glass balustrades, double-glazed ground storefronts, and generous arterial visibility.'
  },
  {
    id: 'umashankar-commercial',
    title: 'Commercial Building',
    client: 'for Mr. Umashankar',
    location: 'Birgunj, Parsa',
    year: '2026 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/umashankar_commercial.jpg',
    images: ['assets/projects/umashankar_commercial.jpg'],
    desc: 'Contemporary urban retail & banking building uniting classical arched glazing, brick accents, curved concrete soffits, and active street-level hospitality spaces.'
  },
  {
    id: 'anand-chaudhary-commercial',
    title: 'Commercial Building',
    client: 'of Mr. Anand Chaudhary',
    location: 'Birgunj-7, Parsa',
    year: '2026 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/anand_chaudhary_commercial.jpg',
    images: ['assets/projects/anand_chaudhary_commercial.jpg'],
    desc: 'Sculpted commercial development highlighted by dramatic evening architectural illumination, vertical metal grilles, textured stone cladding, and organized forecourt parking.'
  },
  {
    id: 'kamlesh-agrawal-commercial',
    title: 'Commercial cum Residence',
    client: 'for Mr. Kamlesh Agrawal',
    location: 'Adarshnagar, Birgunj',
    year: '2025 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/kamlesh_agrawal_commercial.jpg',
    images: ['assets/projects/kamlesh_agrawal_commercial.jpg'],
    desc: 'Mixed-use commercial cum residence building combining warm earthy composite panels, continuous balcony bands, and private upper living suites in prime Adarshnagar.'
  },
  {
    id: 'byd-showroom',
    title: 'Showroom Design',
    client: 'of BYD, Birgunj',
    location: 'Birgunj, Parsa',
    year: '2023 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/byd_showroom_1.jpg',
    images: ['assets/projects/byd_showroom_1.jpg', 'assets/projects/byd_showroom_2.jpg'],
    desc: 'Flagship electric vehicle showroom adhering to international brand guidelines with double-height structural glazing, sweeping aluminum fascia, delivery bay, and customer lounge.'
  },
  {
    id: 'adarsh-city-center',
    title: 'Adarsh City Center',
    client: 'of Yash Petrol Pump',
    location: 'Inarwamal, Harnaiya, Bara',
    year: '2025 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/adarsh_city_center_1.jpg',
    images: ['assets/projects/adarsh_city_center_1.jpg', 'assets/projects/adarsh_city_center_2.jpg'],
    desc: 'Integrated highway commercial hub pairing a modernized refuelling forecourt with an open-air festive shopping promenade, timber-louvered atrium tower, and cinema retail frontage.'
  },

  // Landscape Development
  {
    id: 'shavdaahgriham-crematorium',
    title: 'The Shavdaahgriham & Masterplan',
    client: 'of Birgunj Metropolitan City Office',
    location: 'Ranighat, Birgunj',
    year: '2021 A.D.',
    category: 'Landscape',
    categoryLabel: 'Landscape Development',
    image: 'assets/projects/shavdaahgriham_crematorium.jpg',
    images: [
      'assets/projects/shavdaahgriham_crematorium.jpg',
      'assets/projects/shavdaahgriham_ranighat_1.jpg',
      'assets/projects/shavdaahgriham_roof.jpg',
      'assets/projects/shavdaahgriham_pavilion.jpg'
    ],
    desc: 'Redevelopment of Ranighat Samshanghat. Tent-cloth form inspires peaceful minimalist geometry, while traditional Khapada roofing preserves indigenous Birgunj heritage alongside calm scattering gardens.'
  },
  {
    id: 'recreational-mato-park',
    title: 'Recreational Mato Park',
    client: 'at Pokhariya, Parsa',
    location: 'Pokhariya, Parsa',
    year: '2025 A.D.',
    category: 'Landscape',
    categoryLabel: 'Landscape Development',
    image: 'assets/projects/recreational_mato_park_1.jpg',
    images: [
      'assets/projects/recreational_mato_park_1.jpg',
      'assets/projects/recreational_mato_park_2.jpg',
      'assets/projects/recreational_mato_park_3.jpg',
      'assets/projects/recreational_mato_park_4.jpg',
      'assets/projects/recreational_mato_park_5.jpg'
    ],
    desc: 'Large civic park development welcoming visitors through an iconic bamboo-and-masonry entry portal into landscaped garden rings, gazebos, water fountains, and multipurpose community pavilions.'
  },
  {
    id: 'iro-birgunj-landscape',
    title: 'Landscape Makeover',
    client: 'of Inland Revenue Office, Birgunj',
    location: 'IRO, Birgunj',
    year: '2023 A.D.',
    category: 'Landscape',
    categoryLabel: 'Landscape Development',
    image: 'assets/projects/iro_birgunj_landscape.jpg',
    images: ['assets/projects/iro_birgunj_landscape.jpg'],
    desc: 'Public institutional plaza transformation introducing curvilinear brick planter beds, wheelchair-accessible paved walkways, native shade trees, and bamboo privacy screening.'
  },

  // Residences
  {
    id: 'tulsi-gupta-residence',
    title: 'Residence',
    client: 'of Mr. Tulsi Gupta',
    location: 'Birgunj, Parsa',
    year: '2024 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/tulsi_gupta_residence_1.jpg',
    images: ['assets/projects/tulsi_gupta_residence_1.jpg', 'assets/projects/tulsi_gupta_residence_2.jpg'],
    desc: 'Neoclassical family villa with grand double-height fluted columns, semicircular balconies, arched fenestrations, and lush landscaped arrival motor court.'
  },
  {
    id: 'shahid-alam-residence',
    title: 'Residence',
    client: 'of Dr. Shahid Alam, Birgunj',
    location: 'Birgunj, Parsa',
    year: '2024 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/shahid_alam_residence.jpg',
    images: ['assets/projects/shahid_alam_residence.jpg'],
    desc: 'Contemporary private residence combining crisp rectilinear geometry, stacked natural stone accents, and cantilevered viewing decks.'
  },
  {
    id: 'rohan-yadav-residence',
    title: 'Residence',
    client: 'of Mr. Rohan Yadav',
    location: 'Ranighat, Birgunj',
    year: '2022 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/rohan_yadav_residence.jpg',
    images: ['assets/projects/rohan_yadav_residence.jpg'],
    desc: 'Urban residential design balancing exposed brick planes, symmetrical balcony slabs, and clean vehicular entry shelter.'
  },
  {
    id: 'sumit-singh-residence',
    title: 'Residence',
    client: 'for Mr. Sumit Singh',
    location: 'Brahma Chowk, Birgunj',
    year: '2025 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/sumit_singh_residence.jpg',
    images: ['assets/projects/sumit_singh_residence.jpg'],
    desc: 'Modern corner villa defined by a vertical glazed stairwell tower, brick veneer accents, and wraparound rooftop terrace railings.'
  },
  {
    id: 'ashok-shah-residence',
    title: 'Residence cum Commercial Building',
    client: 'of Dr. Ashok Shah',
    location: 'Lath Galli, Birgunj',
    year: '2019 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/ashok_shah_residence.jpg',
    images: ['assets/projects/ashok_shah_residence.jpg'],
    desc: 'Multi-level mixed typology pairing commercial ground bays with private clinical chambers and family living suites above.'
  },
  {
    id: 'rajeshwar-tiwari-residence',
    title: 'Residence Building',
    client: 'of Mr. Rajeshwar Tiwari',
    location: 'Birgunj-13, Parsa',
    year: '2022 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/rajeshwar_tiwari_residence.jpg',
    images: ['assets/projects/rajeshwar_tiwari_residence.jpg'],
    desc: 'Suburban residence dressed in natural dressed stone blocks, timber pergola terrace crowning, and warm C-frame accent bands.'
  },
  {
    id: 'tikaram-dhakal-residence',
    title: 'Residence',
    client: 'of Mr. Tikaram Dhakal',
    location: 'Budhanilkantha, Kathmandu',
    year: '2025 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/tikaram_dhakal_residence.jpg',
    images: ['assets/projects/tikaram_dhakal_residence.jpg'],
    desc: 'Budhanilkantha residence uniting traditional Nepali brick masonry with modern cantilevered grey boxes and shingled pitched overhang eaves.'
  },
  {
    id: 'samir-ojha-residence',
    title: 'Residence',
    client: 'of Mr. Samir Ojha',
    location: 'Tokha-6, Kathmandu',
    year: '2025 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/samir_ojha_residence.jpg',
    images: ['assets/projects/samir_ojha_residence.jpg'],
    desc: 'Expressive Kathmandu facade sculpting sweeping curved brick balconies alongside crisp cantilevered slate framing.'
  },
  {
    id: 'prakash-amatya-residence',
    title: 'Residence',
    client: 'of Mr. Prakash Amatya',
    location: 'Chandragiri, Kathmandu',
    year: '2023 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/prakash_amatya_residence.jpg',
    images: ['assets/projects/prakash_amatya_residence.jpg'],
    desc: 'Intimate Chandragiri residence set within illuminated perimeter walls, pairing warm cove lighting with vertical louver screens.'
  },
  {
    id: 'yagya-raj-upreti-residence',
    title: 'Residence',
    client: 'of Mr. Yagya Raj Upreti',
    location: 'Chandragiri, Kathmandu',
    year: '2021 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/yagya_raj_upreti_residence.jpg',
    images: ['assets/projects/yagya_raj_upreti_residence.jpg'],
    desc: 'Multi-storey family home combining warm exposed brick masonry with grey texture render and glass balconies.'
  },
  {
    id: 'bidur-khatiwada-residence',
    title: 'Residence',
    client: 'of Mr. Bidur Khatiwada',
    location: 'Sirutaar, Lalitpur',
    year: '2021 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/bidur_khatiwada_residence.jpg',
    images: ['assets/projects/bidur_khatiwada_residence.jpg'],
    desc: 'Lalitpur residential dwelling pairing clean rectilinear frames with exposed brick piers and horizontal metal railings.'
  },
  {
    id: 'uma-shah-residence',
    title: 'Residence',
    client: 'of Mr. Uma Shah',
    location: 'Tokha-6, Kathmandu',
    year: '2019 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/uma_shah_residence.jpg',
    images: ['assets/projects/uma_shah_residence.jpg'],
    desc: 'Distinctive Tokha home distinguished by a signature circular porthole window, pitched tile caps, and red-brick volumes.'
  },
  {
    id: 'laxmi-poudel-residence',
    title: 'Residence',
    client: 'of Mr. Laxmi Prasad Poudel',
    location: 'Bhaktapur',
    year: '2019 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/laxmi_poudel_residence.jpg',
    images: ['assets/projects/laxmi_poudel_residence.jpg'],
    desc: 'Illustrative architectural residence elevation designed for functional urban living in Bhaktapur.'
  },
  {
    id: 'narayan-baral-residence',
    title: 'Residence',
    client: 'of Mr. Narayan Baral',
    location: 'Birtamod, Jhapa',
    year: '2021 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/narayan_baral_residence.jpg',
    images: ['assets/projects/narayan_baral_residence.jpg'],
    desc: 'Dynamic curved roof silhouettes framing shaded carport, wraparound terraces, and lush Jhapa gardens.'
  },
  {
    id: 'bhim-baral-residence',
    title: 'Residence',
    client: 'of Mr. Bhim Baral',
    location: 'Birtamod, Jhapa',
    year: '2021 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/bhim_baral_residence.jpg',
    images: ['assets/projects/bhim_baral_residence.jpg'],
    desc: 'Contemporary Birtamod home featuring perforated brick jaali screen towers, recessed circular glazing, and shaded verandas.'
  },
  {
    id: 'chiran-khatiwada-residence',
    title: 'Residence',
    client: 'of Mr. Chiran Khatiwada',
    location: 'Budhabare, Jhapa',
    year: '2024 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/chiran_khatiwada_residence.jpg',
    images: ['assets/projects/chiran_khatiwada_residence.jpg'],
    desc: 'Serene two-storey tropical pavilion surrounded by palm trees, stone pillars, and intimate outdoor patio seating.'
  },
  {
    id: 'jagdish-mahato-residence',
    title: 'Residence',
    client: 'of Jagdish Mahato, Janakpur',
    location: 'Janakpurdham, Dhanusha',
    year: '2024 A.D.',
    category: 'Residences',
    categoryLabel: 'Residence',
    image: 'assets/projects/jagdish_mahato_residence.jpg',
    images: ['assets/projects/jagdish_mahato_residence.jpg'],
    desc: 'Classical Janakpur bungalow uniting ornamental pediments, ionic columns, and bespoke lattice boundary screens.'
  },

  // Office / Institutional Buildings
  {
    id: 'birgunj-customs-apartment',
    title: 'Low-rise Apartment',
    client: 'for Birgunj Customs Office',
    location: 'Birgunj Customs Office, Birgunj',
    year: '2024 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/birgunj_customs_apartment.jpg',
    images: ['assets/projects/birgunj_customs_apartment.jpg'],
    desc: 'Staff residential apartment complex featuring brick facade articulation, circular balustrade cutouts, terracotta pitched roofs, and garden terraces.'
  },
  {
    id: 'alpine-high-school',
    title: 'Office Building',
    client: 'for Alpine High School',
    location: 'Birgunj-13, Parsa',
    year: '2024 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/alpine_high_school.jpg',
    images: ['assets/projects/alpine_high_school.jpg'],
    desc: 'School administration building defined by bold institutional branding, angled curtain glazing, and clear entrance legibility.'
  },
  {
    id: 'aria-institute',
    title: 'Institutional Building',
    client: 'of Aria Institute',
    location: 'Birgunj-13, Parsa',
    year: '2023 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/aria_institute.jpg',
    images: ['assets/projects/aria_institute.jpg'],
    desc: 'Academic institute combining full-height stairwell glazing, angular horizontal sun-shading louvers, and student plaza paving.'
  },
  {
    id: 'standards-metrology-hetauda',
    title: 'Office Building & Calibration Center',
    client: 'of Standards and Metrology Office, Birgunj',
    location: 'Hetauda, Makwanpur',
    year: '2020 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/standards_metrology_hetauda.jpg',
    images: ['assets/projects/standards_metrology_hetauda.jpg'],
    desc: 'Governmental calibration testing facility engineered with clean brick tower cores, slanted canopies, and technical laboratory suites.'
  },
  {
    id: 'arun-rural-municipality',
    title: 'Administrative Building',
    client: 'of Arun Rural Municipality, Bhojpur',
    location: 'Pyauli, Arun, Bhojpur',
    year: '2023 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/arun_rural_municipality_2.jpg',
    images: ['assets/projects/arun_rural_municipality_2.jpg', 'assets/projects/arun_rural_municipality_1.jpg'],
    desc: 'Civic administrative headquarters in Bhojpur crowned by a sculptural arched portico welcoming citizens into public council chambers.'
  },
  {
    id: 'blood-transfusion-center',
    title: 'Blood Transfusion Service Center',
    client: 'of Project Office of Urban Dev. & Building Construction, Dhankuta',
    location: 'Khandbari, Sankhuwasabha',
    year: '2021 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/blood_transfusion_center.jpg',
    images: ['assets/projects/blood_transfusion_center.jpg'],
    desc: 'Himalayan healthcare service center blending traditional arched dormer detailing with sterile laboratory zoning.'
  },
  {
    id: 'himalaya-kiran-campus',
    title: 'Multipurpose Block',
    client: 'of Himalaya Kiran Public Campus',
    location: 'Khandbari, Sankhuwasabha',
    year: '2022 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/himalaya_kiran_campus.jpg',
    images: ['assets/projects/himalaya_kiran_campus.jpg'],
    desc: 'Academic multipurpose campus block pairing crisp crimson portal framing with accessible student walkways.'
  },
  {
    id: 'animal-quarantine-jhapa',
    title: 'Office Building',
    client: 'of Animal Quarantine Office, Jhapa',
    location: 'Kakarbhitta, Jhapa',
    year: '2022 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/animal_quarantine_jhapa.jpg',
    images: ['assets/projects/animal_quarantine_jhapa.jpg'],
    desc: 'Symmetrical brick-and-concrete border inspection headquarters designed for Eastern Nepal transit administration.'
  },

  // Religious Complexes
  {
    id: 'isckon-temple-birgunj',
    title: 'ISCKON Temple',
    client: 'behind Ramjanki Temple, Birgunj',
    location: 'Kalikamai, Parsa',
    year: '2020 A.D.',
    category: 'Religious',
    categoryLabel: 'Religious Complexes',
    image: 'assets/projects/isckon_temple_birgunj.jpg',
    images: ['assets/projects/isckon_temple_birgunj.jpg'],
    desc: 'Contemporary sacred temple harmonizing traditional shikhara spire with exposed brick geometry, grand processional stairs, and serene carved mandapa.'
  },
  {
    id: 'kalikamai-temple-complex',
    title: 'Temple Complex',
    client: 'of Kalikamai Temple, Kalikamai',
    location: 'Kalikamai, Parsa',
    year: '2020 A.D.',
    category: 'Religious',
    categoryLabel: 'Religious Complexes',
    image: 'assets/projects/kalikamai_temple_complex.jpg',
    images: ['assets/projects/kalikamai_temple_complex.jpg'],
    desc: 'Sacred pilgrimage complex crowned by ribbed domes and golden finials, guarded by stone lion sculptures around an open ceremonial courtyard.'
  },
  {
    id: 'arun-adhyatmik-temple',
    title: 'Temple',
    client: 'of Arun Adhyatmik Kendra, Bhojpur',
    location: 'Pyauli, Bhojpur',
    year: '2024 A.D.',
    category: 'Religious',
    categoryLabel: 'Religious Complexes',
    image: 'assets/projects/arun_adhyatmik_temple.jpg',
    images: ['assets/projects/arun_adhyatmik_temple.jpg'],
    desc: 'Traditional Nepali multi-tiered pagoda temple crafted with intricate timber struts, brass-toned roof slopes, and carved red brick walls.'
  },

  // Interior Design
  {
    id: 'interior-bidur-khatiwada',
    title: 'Interior Design',
    client: 'of Residence of Mr. Bidur Khatiwada',
    location: 'Sirutaar, Lalitpur',
    year: '2020 A.D.',
    category: 'Interior',
    categoryLabel: 'Interior Design',
    image: 'assets/projects/interior_bidur_khatiwada_1.jpg',
    images: [
      'assets/projects/interior_bidur_khatiwada_1.jpg',
      'assets/projects/interior_bidur_khatiwada_2.jpg',
      'assets/projects/interior_bidur_khatiwada_kitchen.jpg'
    ],
    desc: 'Bespoke study window-seat nook, warm timber ceiling slats, master suite cabinetry, and slate-toned minimalist modular kitchen.'
  },
  {
    id: 'interior-narayan-baral',
    title: 'Interior Design',
    client: 'of Residence of Mr. Narayan Baral',
    location: 'Birtamod, Jhapa',
    year: '2021 A.D.',
    category: 'Interior',
    categoryLabel: 'Interior Design',
    image: 'assets/projects/interior_narayan_baral_1.jpg',
    images: [
      'assets/projects/interior_narayan_baral_1.jpg',
      'assets/projects/interior_narayan_baral_bedroom.jpg',
      'assets/projects/interior_narayan_baral_dining.jpg'
    ],
    desc: 'Warm timber flooring, exposed rustic brick accent wall, under-stair reading nook, and layered pendant ceiling coves.'
  },
  {
    id: 'interior-nitesh-singh',
    title: 'Interior Design',
    client: 'of Residence of Mr. Nitesh Singh',
    location: 'Kalaiya, Bara',
    year: '2024 A.D.',
    category: 'Interior',
    categoryLabel: 'Interior Design',
    image: 'assets/projects/interior_nitesh_singh_living.jpg',
    images: [
      'assets/projects/interior_nitesh_singh_living.jpg',
      'assets/projects/interior_nitesh_singh_dining.jpg',
      'assets/projects/interior_nitesh_singh_master.jpg',
      'assets/projects/interior_nitesh_singh_bed2.jpg',
      'assets/projects/interior_nitesh_singh_tv.jpg',
      'assets/projects/interior_nitesh_singh_study.jpg'
    ],
    desc: 'Complete 6-room interior architecture encompassing marble media walls, geometric-tiled kitchen & dining suite, upholstered master bedrooms, and warm oak study.'
  },
  {
    id: 'interior-modern-luxury',
    title: 'Modern Living Lounge Interior',
    client: 'Residential Interior Study',
    location: 'Kathmandu',
    year: '2024 A.D.',
    category: 'Interior',
    categoryLabel: 'Interior Design',
    image: 'assets/projects/interior_modern_luxury_living.jpg',
    images: ['assets/projects/interior_modern_luxury_living.jpg'],
    desc: 'High-contrast modern living room pairing sculptural pendant lights with plush neutral seating and architectural shelving.'
  },

  // Logo Design Competition Winning Entry (Page 70)
  {
    id: 'logo-competition-winner',
    title: 'Logo Design Competition Winning Entry',
    client: 'Jeetpur Simara Sub-Metropolitan City (Competition Winner)',
    location: 'Jeetpur Simara, Bara',
    year: '2022 A.D.',
    category: 'Branding',
    categoryLabel: 'Logo Designs',
    image: 'assets/projects/logo_competition_winner.jpg',
    images: ['assets/projects/logo_competition_winner.jpg', 'assets/projects/logo_competition_sheet2.jpg'],
    desc: 'Official winning emblem designed by Ar. Yateendra Kishore Labh synthesizing Churia hills, Terai biodiversity, Karma Kumari Dhara heritage, agricultural wealth, and national transit corridors.'
  }
];

// ALL 10 Team Members matching Page 3 of portfolio_67fe3a57.pdf exact grid order!
const teamData = [
  { name: 'YATEENDRA K LABH', role: 'Director/Architect', image: 'assets/team/team-yateendra.jpg' },
  { name: 'SUPRIYA THAPA', role: 'Principal Architect', image: 'assets/team/team-supriya.jpg' },
  { name: 'SHEETAL GUPTA', role: 'Architect', image: 'assets/team/team-sheetal.jpg' },
  { name: 'ASHMIN R BHATTARAI', role: 'Architect', image: 'assets/team/team-ashmin.jpg' },
  { name: 'SUNIL CHAURASIYA', role: 'Structural Engineer', image: 'assets/team/team-sunil.jpg' },
  { name: 'CHETAN K SARRAF', role: 'Interior Designer', image: 'assets/team/team-chetan.jpg' },
  { name: 'ROHAN K PASWAN', role: 'Sanitary Designer', image: 'assets/team/team-rohan.jpg' },
  { name: 'BISHAL MANANDAR', role: 'Electrical Engineer', image: 'assets/team/team-bishal.jpg' },
  { name: 'MEGNATH GUPTA', role: 'Project Manager', image: 'assets/team/team-megnath.jpg' },
  { name: 'WASIM ALAM', role: 'Site Engineer', image: 'assets/team/team-wasim.jpg' }
];

const scopeItems = [
  'Topographical Map',
  'Overall Masterplan',
  'Detailed Architectural Plan',
  '3D Walkthrough Video',
  'Structural Details',
  'Electrical Details',
  'Sanitary Details',
  'Detailed Estimate',
  'Bill of Quantities',
  'Procurement Consult, etc.'
];

const clientLogos = [
  { img: 'assets/logos/client-logo-1.jpg', alt: 'Amico Books & Stationery logo' },
  { img: 'assets/logos/client-logo-2.jpg', alt: 'Aarnav Nirman Sewa logo' },
  { img: 'assets/logos/client-logo-3.jpg', alt: 'NITCO Construction Laboratory logo' },
  { img: 'assets/logos/client-logo-4.jpg', alt: 'Planetably Energy Pvt. Ltd. logo' },
  { img: 'assets/logos/client-logo-5.jpg', alt: 'Jupiter Power logo' },
  { img: 'assets/logos/client-logo-6.jpg', alt: 'Lions Club of Kathmandu Sarang logo' },
  { img: 'assets/logos/client-logo-7.jpg', alt: 'Global Career Care Pvt. Ltd. logo' },
  { img: 'assets/logos/client-logo-8.jpg', alt: 'Viewport logo' },
  { img: 'assets/logos/client-logo-9.jpg', alt: 'Shristi Engineering Consultancy logo' },
  { img: 'assets/logos/client-logo-10.jpg', alt: 'Abhiyanta Multipurpose Cooperative logo' }
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Scale and Spaces Private Limited",
  "alternateName": "Scale and Spaces Pvt. Ltd.",
  "url": "https://madex-source.github.io/madex/",
  "logo": "https://madex-source.github.io/madex/assets/logo.jpg",
  "image": "https://madex-source.github.io/madex/assets/projects/mithila_tower.jpg",
  "description": "Scale and Spaces Pvt. Ltd. is an architectural, engineering, and interior design practice based in Tokha-6, Kathmandu and Birgunj-12, Parsa, Nepal.",
  "slogan": "Designing Spaces, Defining Lifestyles!",
  "email": "studio@scaleandspaces.com",
  "telephone": "+977-9703881733",
  "address": [
    {
      "@type": "PostalAddress",
      "name": "Head Office - Kathmandu",
      "streetAddress": "Tokha-6, Dhapasi",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    {
      "@type": "PostalAddress",
      "name": "Contact Office - Birgunj",
      "streetAddress": "Birgunj-12",
      "addressLocality": "Birgunj",
      "addressRegion": "Parsa",
      "addressCountry": "NP"
    }
  ],
  "areaServed": "Nepal",
  "serviceType": [
    "Architecture",
    "Civil & Structural Engineering",
    "Interior Design",
    "Landscape Masterplanning",
    "Construction Supervision"
  ]
};

const customCss = `
    /* ==========================================================================
       SCALE AND SPACES ARCHITECTURAL PORTFOLIO DESIGN + WATERCOLOR MOTION SYSTEM
       Canvas: #F0EFEA | Crimson: #8F0000 / #C00000 | Serif: EB Garamond | Sans: Calibri
       Enhanced with Cold-Press Watercolor Paper Substrate, Ink Turbulence Masks,
       Layered Elevation Shadows, Architectural Cursor Nib & Lenis/GSAP Motion.
       ========================================================================== */
    :root {
      --bg-canvas: #F0EFEA;
      --bg-canvas-subtle: #E8E6DF;
      --bg-card: #FFFFFF;
      --bg-card-alt: #F7F6F2;
      --bg-box-gray: #F1F1F1;
      --crimson: #8F0000;
      --crimson-bright: #C00000;
      --crimson-hover: #6E0000;
      --ochre: #EC7C30;
      --text-main: #111111;
      --text-muted: #767070;
      --border-line: #DDD8CE;
      --border-drafting: rgba(17, 17, 17, 0.055);
      --shadow-paper: 0 2px 6px rgba(34, 24, 18, 0.04), 0 12px 28px -12px rgba(78, 22, 16, 0.12);
      --shadow-elevated: 0 8px 18px rgba(34, 24, 18, 0.06), 0 24px 48px -14px rgba(108, 18, 12, 0.22);
      --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
      --font-serif: 'EB Garamond', Garamond, Georgia, 'Times New Roman', serif;
      --font-sans: 'Calibri', 'Carlito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    html {
      scroll-padding-top: 84px;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      position: relative;
    }

    /* Ambient Watercolor Paper Wash Substrate + Architectural Vellum Hairline Grid */
    .watercolor-paper-wash {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background-image: url('assets/art/watercolor-paper-wash.jpg');
      background-size: cover;
      background-position: center bottom;
      opacity: 0.28;
      mix-blend-mode: multiply;
    }
    .vellum-drafting-grid {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background-image:
        linear-gradient(to right, var(--border-drafting) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border-drafting) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(circle at 50% 35%, black 35%, transparent 90%);
      -webkit-mask-image: radial-gradient(circle at 50% 35%, black 35%, transparent 90%);
    }

    main, header, footer, aside {
      position: relative;
      z-index: 1;
    }

    /* Subtle Ambient Watercolor Corner Washes inside Major Sections */
    .wc-section-wash {
      position: relative;
      overflow: hidden;
    }
    .wc-section-wash::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background:
        radial-gradient(52% 45% at 4% 12%, rgba(143, 0, 0, 0.042), transparent 68%),
        radial-gradient(48% 42% at 96% 88%, rgba(236, 124, 48, 0.055), transparent 70%);
    }
    .wc-section-wash > .portfolio-container {
      position: relative;
      z-index: 1;
    }

    /* Architectural Preloader Curtain (Full-Page Architectural Elevation & Art Drawing) */
    .studio-preloader {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background-color: #F0EFEA;
      background-image: url('assets/art/watercolor-paper-wash.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      overflow: hidden;
    }
    .preloader-center-stage {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .preloader-sketch-svg {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: block;
    }
    .preloader-sketch-path {
      stroke-dasharray: 2400;
      stroke-dashoffset: 2400;
    }
    .preloader-hr-track {
      position: fixed;
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      background: rgba(17, 17, 17, 0.08);
      pointer-events: none;
      z-index: 3;
    }
    .preloader-hr-fill {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      background: var(--crimson);
      transform-origin: left center;
      transform: scaleX(0);
    }
    .preloader-ruler-v {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      background: rgba(17, 17, 17, 0.08);
      pointer-events: none;
    }
    .preloader-pct-tag {
      position: fixed;
      top: calc(50% - 22px);
      left: 1.5rem;
      font-family: monospace;
      font-size: 11px;
      letter-spacing: 0.08em;
      color: var(--crimson);
      font-weight: 700;
      pointer-events: none;
      z-index: 4;
    }
    .preloader-colophon-bottom {
      position: fixed;
      bottom: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2rem;
      font-size: 11px;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      pointer-events: none;
    }

    /* Architectural Marquee Ticker (matching Heron AI thin hairline ribbon) */
    .studio-marquee-wrap {
      overflow: hidden;
      border-top: 1px solid var(--border-line);
      border-bottom: 1px solid var(--border-line);
      background: rgba(240, 239, 234, 0.86);
      padding: 0.65rem 0;
      white-space: nowrap;
      position: relative;
      z-index: 3;
    }
    .studio-marquee-track {
      display: inline-flex;
      gap: 2.5rem;
      font-family: monospace;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-muted);
      animation: studioMarquee 32s linear infinite;
    }
    @keyframes studioMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* Full-Page Hero Architectural Cover Background (B&W Sketch -> Color Transition) */
    .hero-full-section {
      position: relative;
      overflow: hidden;
      min-height: calc(100vh - 76px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-line);
    }
    .hero-bg-stage {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    }
    .hero-bg-bw,
    .hero-bg-color {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 72% center;
    }
    .hero-bg-bw {
      opacity: 0.42;
      filter: contrast(1.06);
    }
    .hero-bg-color {
      opacity: 0.78;
      clip-path: circle(56% at 74% 48%);
      transition: clip-path 1.15s var(--ease-expo), opacity 0.9s var(--ease-expo);
      will-change: clip-path, transform;
    }
    .hero-bg-scrim {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(240, 239, 234, 0.96) 0%, rgba(240, 239, 234, 0.88) 42%, rgba(240, 239, 234, 0.25) 78%, rgba(240, 239, 234, 0.35) 100%),
        linear-gradient(180deg, rgba(240, 239, 234, 0.72) 0%, rgba(240, 239, 234, 0.08) 38%, rgba(240, 239, 234, 0.85) 100%);
    }
    .hero-sun-halo {
      position: absolute;
      width: 340px;
      height: 340px;
      border-radius: 9999px;
      background: radial-gradient(circle, rgba(143, 0, 0, 0.22) 0%, rgba(236, 124, 48, 0.14) 55%, transparent 72%);
      right: 12%;
      top: 14%;
      mix-blend-mode: multiply;
      pointer-events: none;
    }
    @media (max-width: 767px) {
      .hero-bg-bw { opacity: 0.28; object-position: center center; }
      .hero-bg-color { opacity: 0.55; clip-path: circle(62% at 50% 42%); }
      .hero-sun-halo { width: 220px; height: 220px; right: 5%; top: 8%; }
    }

    /* Interactive Studio Monograph Stage */
    .atelier-trail-stage {
      position: relative;
      overflow: hidden;
      min-height: 280px;
      background-color: #EFECE5;
      background-image:
        radial-gradient(circle at 20% 25%, rgba(143, 0, 0, 0.045), transparent 55%),
        radial-gradient(circle at 80% 75%, rgba(236, 124, 48, 0.06), transparent 55%),
        url('assets/art/watercolor-paper-wash.jpg');
      background-size: cover;
      background-position: center;
      border-bottom: 1px solid var(--border-line);
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    .atelier-trail-clone {
      position: absolute;
      width: 170px;
      height: 118px;
      object-fit: cover;
      border: 3px solid #FFFFFF;
      box-shadow: 0 20px 42px -12px rgba(74, 18, 12, 0.24);
      pointer-events: none;
      will-change: transform, opacity;
    }
    @media (max-width: 640px) {
      .atelier-trail-clone {
        width: 132px;
        height: 92px;
      }
    }

    /* 2D Canvas Pen Velocity Trail + Subtle Drafting Cursor Nib (No Cluttering Text Stamps) */
    .atelier-trail-layer {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      z-index: 3;
    }
    .studio-cursor-canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9997;
      display: none;
    }
    .studio-cursor {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9998;
      display: none;
    }
    @media (any-hover: hover) and (any-pointer: fine) {
      .studio-cursor-canvas,
      .studio-cursor {
        display: block;
      }
    }
    html.has-pointer .studio-cursor-canvas,
    html.has-pointer .studio-cursor {
      display: block;
    }
    .studio-cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      margin-left: -12px;
      margin-top: -12px;
      border-radius: 9999px;
      border: 1px solid rgba(143, 0, 0, 0.45);
      background: transparent;
      transition: width 0.28s var(--ease-expo), height 0.28s var(--ease-expo), margin 0.28s var(--ease-expo), border-color 0.25s ease, background-color 0.25s ease, opacity 0.25s ease;
      opacity: 0;
    }
    .studio-cursor-ring.is-visible {
      opacity: 1;
    }
    .studio-cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      width: 6px;
      height: 6px;
      margin-left: -3px;
      margin-top: -3px;
      background-color: var(--crimson);
      opacity: 0;
      transition: transform 0.2s var(--ease-expo), opacity 0.2s ease, background-color 0.2s ease;
    }
    .studio-cursor-dot.is-visible {
      opacity: 1;
    }
    .studio-cursor-ring.is-card-hover {
      width: 44px;
      height: 44px;
      margin-left: -22px;
      margin-top: -22px;
      border-color: rgba(143, 0, 0, 0.65);
      background: rgba(143, 0, 0, 0.06);
    }
    .studio-cursor-ring.is-interactive-hover {
      width: 36px;
      height: 36px;
      margin-left: -18px;
      margin-top: -18px;
      border-color: var(--ochre);
      background: rgba(236, 124, 48, 0.08);
    }

    /* Interactive Watercolor Spotlight Wash on Hover Elements */
    .wc-hover-card {
      position: relative;
      transition: transform 0.45s var(--ease-expo), box-shadow 0.45s var(--ease-expo), border-color 0.3s ease;
    }
    .wc-hover-card::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(143, 0, 0, 0.065), rgba(236, 124, 48, 0.035) 45%, transparent 72%);
      opacity: 0;
      transition: opacity 0.35s ease;
      z-index: 2;
    }
    .wc-hover-card:hover::after {
      opacity: 1;
    }

    /* Full Architectural Services Hairline Grid (Boxless Open Drafting Grid like Heron AI) */
    .service-hairline-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-top: 1px solid var(--border-line);
    }
    @media (min-width: 640px) {
      .service-hairline-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    @media (min-width: 1024px) {
      .service-hairline-grid {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }
    }
    .service-pillar-cell {
      padding: 1.5rem 1.15rem;
      border-bottom: 1px solid var(--border-line);
      border-right: 1px solid var(--border-line);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      transition: background-color 0.3s ease;
      position: relative;
    }
    .service-pillar-cell:last-child {
      border-right: none;
    }
    .service-pillar-cell:hover {
      background-color: rgba(255, 255, 255, 0.55);
    }
    .service-pillar-icon {
      width: 30px;
      height: 30px;
      color: var(--text-main);
      transition: transform 0.4s var(--ease-expo), color 0.3s ease;
    }
    .service-pillar-cell:hover .service-pillar-icon {
      color: var(--crimson);
      transform: scale(1.08);
    }

    /* Watercolor Ink Reveal Frame */
    .wc-ink-plate {
      filter: drop-shadow(0 18px 34px rgba(74, 24, 16, 0.12));
      will-change: transform, opacity;
    }

    h1, h2, h3, .font-serif, .serif-heading {
      font-family: var(--font-serif);
      font-feature-settings: "kern" 1, "liga" 1;
    }

    .portfolio-section-title {
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 1.85rem;
      letter-spacing: 0.03em;
      color: var(--text-main);
      position: relative;
      display: inline-block;
    }
    @media (min-width: 768px) {
      .portfolio-section-title {
        font-size: 2.35rem;
      }
    }

    .portfolio-crimson-quote {
      color: var(--crimson);
      font-family: 'EB Garamond', Georgia, serif;
      font-weight: 700;
      line-height: 1.08;
    }

    .portfolio-container {
      width: 100%;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      position: relative;
    }
    @media (min-width: 768px) {
      .portfolio-container {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .arch-line {
      height: 1px;
      background-color: var(--border-line);
      width: 100%;
    }

    /* Section Corner Crosshairs (matching Heron AI drafting markers) */
    .arch-crosshair {
      position: absolute;
      width: 11px;
      height: 11px;
      color: #8F0000;
      opacity: 0.45;
      pointer-events: none;
    }

    /* Sticky Header with defensive sizing & scroll progress bar */
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      height: 76px;
      background-color: rgba(240, 239, 234, 0.94);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-line);
    }
    .nav-scroll-progress {
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--crimson);
      transform-origin: left center;
      transform: scaleX(0);
    }
    .nav-logo {
      height: 40px;
      width: auto;
      max-width: 48px;
      object-fit: contain;
    }

    /* Animated Nav Underline */
    .nav-link-animated {
      position: relative;
      padding-bottom: 3px;
    }
    .nav-link-animated::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.5px;
      background-color: var(--crimson);
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.35s var(--ease-expo);
    }
    .nav-link-animated:hover::after {
      transform: scaleX(1);
      transform-origin: left center;
    }

    /* Hero Interactive Architectural Viewport & CAD Crosshair */
    .hero-viewport-frame {
      position: relative;
      width: 100%;
      height: 240px;
      overflow: hidden;
      cursor: crosshair;
    }
    @media (min-width: 768px) {
      .hero-viewport-frame {
        height: 400px;
      }
    }
    .cad-crosshair-v {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255, 255, 255, 0.45);
      pointer-events: none;
      z-index: 6;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .cad-crosshair-h {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.45);
      pointer-events: none;
      z-index: 6;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .cad-coord-pill {
      position: absolute;
      bottom: 14px;
      right: 14px;
      z-index: 6;
      background: rgba(17, 17, 17, 0.78);
      backdrop-filter: blur(6px);
      color: #F0EFEA;
      font-family: monospace;
      font-size: 0.7rem;
      letter-spacing: 0.06em;
      padding: 0.35rem 0.65rem;
      border: 1px solid rgba(255,255,255,0.25);
      pointer-events: none;
    }
    .hero-viewport-frame:hover .cad-crosshair-v,
    .hero-viewport-frame:hover .cad-crosshair-h {
      opacity: 1;
    }

    /* Hero Showcase Slideshow with Watercolor Ink Sweep Transition */
    .hero-slide-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      clip-path: circle(0% at 50% 50%);
      transition: opacity 0.9s var(--ease-expo), transform 1.4s var(--ease-expo), clip-path 1.1s var(--ease-expo);
      transform: scale(1.045);
    }
    .hero-slide-img.is-active {
      opacity: 1;
      clip-path: circle(145% at 50% 50%);
      transform: scale(1);
    }
    .hero-slide-tab {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0.35rem 0.75rem;
      border: 1px solid var(--border-line);
      background: #F7F6F2;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.28s var(--ease-expo);
      box-shadow: 0 2px 6px rgba(34, 24, 18, 0.03);
    }
    .hero-slide-tab:hover {
      border-color: var(--crimson);
      color: var(--crimson);
      transform: translateY(-2px);
    }
    .hero-slide-tab.is-active {
      background: var(--crimson);
      border-color: var(--crimson);
      color: #FFFFFF;
      box-shadow: 0 6px 14px rgba(143, 0, 0, 0.22);
    }

    /* Buttons with Rolling Ink Physics (adapted from Heron AI .btn-fill) */
    .btn-crimson {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: var(--crimson);
      color: #FFFFFF !important;
      font-family: var(--font-sans);
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0.65rem 1.5rem;
      border: 1px solid var(--crimson);
      text-decoration: none;
      position: relative;
      overflow: hidden;
      box-shadow: 0 6px 16px -4px rgba(143, 0, 0, 0.25);
      transition: transform 0.35s var(--ease-expo), background-color 0.25s ease, box-shadow 0.35s ease;
      cursor: pointer;
    }
    .btn-crimson::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent 20%, rgba(255, 255, 255, 0.2) 50%, transparent 80%);
      transform: translateX(-110%);
      transition: transform 0.65s var(--ease-expo);
    }
    .btn-crimson:hover::before {
      transform: translateX(110%);
    }
    .btn-crimson:hover {
      background-color: var(--crimson-hover);
      border-color: var(--crimson-hover);
      transform: translateY(-2px);
      box-shadow: 0 12px 24px -6px rgba(143, 0, 0, 0.34);
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: rgba(255, 255, 255, 0.72);
      color: var(--text-main);
      font-family: var(--font-sans);
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0.65rem 1.5rem;
      border: 1px solid var(--text-main);
      text-decoration: none;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 12px -4px rgba(34, 24, 18, 0.1);
      transition: transform 0.35s var(--ease-expo), background-color 0.25s ease, color 0.25s ease, box-shadow 0.35s ease;
      cursor: pointer;
    }
    .btn-outline:hover {
      background-color: var(--text-main);
      color: #FFFFFF;
      transform: translateY(-2px);
      box-shadow: 0 10px 22px -6px rgba(17, 17, 17, 0.22);
    }

    /* Page 4 Category Discipline Index (Clean Borderless Hairline Grid) */
    .discipline-card {
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--border-line);
      padding: 0.95rem 0.35rem;
      display: flex;
      align-items: center;
      gap: 0.9rem;
      cursor: pointer;
      transition: transform 0.35s var(--ease-expo), border-color 0.25s ease;
      text-align: left;
      position: relative;
    }
    .discipline-card:hover {
      transform: translateY(-2px);
      border-color: var(--crimson);
    }
    .discipline-monogram {
      width: 40px;
      height: 40px;
      background: #444444;
      color: #FFFFFF;
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 1.55rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0 4px 1px 0;
      line-height: 0.85;
      flex-shrink: 0;
      transition: background-color 0.3s ease, transform 0.4s var(--ease-expo);
    }
    .discipline-card:hover .discipline-monogram {
      background: var(--crimson);
      transform: scale(1.06);
    }

    /* Filter Tabs (Minimal Underline Architecture Index — No Heavy Box Chrome) */
    .filter-tab {
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--text-muted);
      font-family: var(--font-sans);
      font-size: 0.86rem;
      font-weight: 700;
      padding: 0.45rem 0.35rem;
      margin-right: 0.75rem;
      cursor: pointer;
      transition: color 0.25s ease, border-color 0.25s ease;
      white-space: nowrap;
    }
    .filter-tab:hover {
      color: var(--text-main);
    }
    .filter-tab.active {
      color: var(--crimson);
      border-bottom-color: var(--crimson);
    }

    /* Project Cards (Airy Edge, Soft Hover Elevation, Zero Double Boxes) */
    .project-card {
      background-color: var(--bg-card);
      border: 1px solid rgba(17, 17, 17, 0.06);
      box-shadow: 0 4px 18px -6px rgba(40, 24, 18, 0.08);
      transition: transform 0.45s var(--ease-expo), box-shadow 0.45s var(--ease-expo);
      display: flex;
      flex-direction: column;
      position: relative;
      will-change: transform;
    }
    .project-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-elevated);
    }
    .project-image-box {
      position: relative;
      overflow: hidden;
      aspect-ratio: 16 / 9;
      background-color: #E2DFD8;
      cursor: pointer;
    }
    .project-image-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s var(--ease-expo);
      display: block;
    }
    .project-card:hover .project-image-box img {
      transform: scale(1.06);
    }
    .project-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(143, 0, 0, 0.56), rgba(20, 10, 8, 0.68));
      backdrop-filter: blur(1.5px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.35s ease;
    }
    .project-card:hover .project-overlay {
      opacity: 1;
    }

    /* Team Card matching Page 3 PDF Identity cleanly without Heavy Outer Borders */
    .team-card {
      background: #FFFFFF;
      border: 1px solid rgba(17, 17, 17, 0.06);
      box-shadow: 0 4px 18px -6px rgba(40, 24, 18, 0.07);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      transition: transform 0.45s var(--ease-expo), box-shadow 0.45s var(--ease-expo);
    }
    .team-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-elevated);
    }
    .team-circle-stage {
      background-color: #F7F6F2;
      padding: 1.25rem 1rem 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .team-img-wrap {
      width: 164px;
      height: 164px;
      border-radius: 9999px;
      overflow: hidden;
      background-color: #F2F0EB;
      border: 1px solid #C8C2B6;
      box-shadow: 0 8px 20px rgba(72, 24, 16, 0.08);
      transition: border-color 0.3s ease, transform 0.55s var(--ease-expo), box-shadow 0.45s var(--ease-expo);
    }
    .team-card:hover .team-img-wrap {
      border-color: var(--crimson);
      transform: scale(1.035);
      box-shadow: 0 14px 26px rgba(143, 0, 0, 0.16);
    }
    .team-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }
    .team-name-box {
      background-color: #FFFFFF;
      padding: 0.65rem 0.5rem 0.35rem;
      text-align: center;
      font-size: 0.875rem;
      letter-spacing: 0.03em;
      color: #EC7C30;
      font-weight: 400;
    }
    .team-name-box b {
      color: #EC7C30;
      font-weight: 700;
    }
    .team-role-box {
      background-color: #F1F1F1;
      padding: 0.45rem 0.5rem;
      text-align: center;
      font-size: 0.825rem;
      color: #111111;
      font-weight: 400;
    }

    /* Scope of Works Open Hairline Row (Zero Rectangular Boxes) */
    .scope-list-item {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.82rem 0.25rem;
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--border-line);
      transition: border-color 0.25s ease, transform 0.35s var(--ease-expo);
    }
    .scope-list-item:hover {
      border-bottom-color: var(--crimson);
      transform: translateX(6px);
    }
    .scope-square {
      width: 9px;
      height: 9px;
      background-color: #111111;
      flex-shrink: 0;
      transition: background-color 0.25s ease, transform 0.35s var(--ease-expo);
    }
    .scope-list-item:hover .scope-square {
      background-color: var(--crimson);
      transform: rotate(45deg);
    }

    /* Lightbox Modal */
    .lightbox-modal {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(17, 17, 17, 0.9);
      backdrop-filter: blur(8px);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .lightbox-modal.active {
      display: flex;
    }
    .lightbox-content {
      background: var(--bg-canvas);
      max-width: 1020px;
      width: 100%;
      max-height: 92vh;
      overflow-y: auto;
      border: 1px solid var(--border-line);
      position: relative;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    /* Mobile menu drawer */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 85%;
      max-width: 360px;
      height: 100vh;
      background-color: var(--bg-canvas);
      z-index: 90;
      border-left: 1px solid var(--border-line);
      box-shadow: -10px 0 30px rgba(0,0,0,0.18);
      transition: right 0.35s var(--ease-expo);
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .mobile-menu.open {
      right: 0;
    }
    .mobile-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 85;
      display: none;
    }
    .mobile-backdrop.open {
      display: block;
    }

    /* Accessibility Fallback (preserve interactive user-triggered hovers) */
    @media (prefers-reduced-motion: reduce) {
      .vellum-drafting-grid { opacity: 0.4; }
    }
`;

const icons = {
  pin: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
  mail: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  phone: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.25 1.01l-2.2 2.2z"/></svg>',
  whatsapp: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.03 2a9.99 9.99 0 0 0-8.48 15.3L2 22l4.85-1.5A9.99 9.99 0 1 0 12.03 2zm5.82 14.1c-.25.7-1.45 1.35-2.02 1.43-.52.08-1.18.12-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.38-5.15-4.58-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.27-.3.6-.38.8-.38h.58c.18 0 .44-.07.69.52.25.61.85 2.09.92 2.24.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.54-.15.15-.31.32-.13.62.18.3.78 1.29 1.68 2.09 1.15 1.03 2.13 1.35 2.43 1.5.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.75.82 2.05.97.3.15.5.22.58.35.07.13.07.75-.18 1.45z"/></svg>',
  bars: '<svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>',
  expand: '<svg class="inline-block w-3.5 h-3.5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>',
  send: '<svg class="inline-block w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>',
  crosshair: '<svg viewBox="0 0 12 12" fill="none" width="11" height="11"><path d="M6 0V12M0 6H12" stroke="currentColor" stroke-width="1"/></svg>'
};

const htmlBodyTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Scale and Spaces Pvt. Ltd. | Architecture, Engineering &amp; Interior Design in Nepal</title>
  <meta name="description" content="Scale and Spaces Pvt. Ltd. — Architecture, structural engineering &amp; interior design firm in Tokha-6, Kathmandu and Birgunj-12, Parsa, Nepal." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://madex-source.github.io/madex/" />

  <!-- Open Graph & Social Meta -->
  <meta property="og:title" content="Scale and Spaces Pvt. Ltd. | Architecture, Engineering &amp; Interior Design" />
  <meta property="og:description" content="Designing Spaces, Defining Lifestyles! Architectural, structural, and interior design portfolio by Scale and Spaces Pvt. Ltd. (Kathmandu &amp; Birgunj)." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://madex-source.github.io/madex/" />
  <meta property="og:image" content="https://madex-source.github.io/madex/assets/projects/mithila_tower.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Scale and Spaces Pvt. Ltd. | Design Portfolio" />
  <meta name="twitter:description" content="Architecture, engineering, and interior design firm in Kathmandu &amp; Birgunj, Nepal." />

  <link rel="icon" type="image/svg+xml" href="assets/logo.svg" />
  <link rel="apple-touch-icon" href="assets/logo.jpg" />

  <!-- Authentic Portfolio Fonts: EB Garamond (Garamond) + Carlito (Calibri open metric match) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />

  <!-- Google SEO Structured Data (JSON-LD) -->
  <script type="application/ld+json">${JSON.stringify(jsonLdSchema)}</script>

  <style>/*__COMPILED_CSS__*/</style>
</head>
<body>

  <!-- WATERCOLOR PAPER SUBSTRATE & ARCHITECTURAL VELLUM GRID OVERLAY -->
  <div class="watercolor-paper-wash" aria-hidden="true"></div>
  <div class="vellum-drafting-grid" aria-hidden="true"></div>

  <!-- SHARED SVG WATERCOLOR INK-TURBULENCE DISPLACEMENT FILTER (Heron AI Inspired) -->
  <svg width="0" height="0" style="position:absolute;pointer-events:none;" aria-hidden="true">
    <defs>
      <filter id="studioInkDisplace">
        <feTurbulence type="fractalNoise" baseFrequency="0.032 0.045" numOctaves="4" seed="11" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="68" xChannelSelector="R" yChannelSelector="G" result="displaced" />
        <feGaussianBlur in="displaced" stdDeviation="1.4" result="blurred" />
        <feComponentTransfer in="blurred">
          <feFuncA type="linear" slope="2.1" intercept="-0.45" />
        </feComponentTransfer>
      </filter>
    </defs>
  </svg>

  <!-- FULL-PAGE ARCHITECTURAL PRELOADER CURTAIN (Full-Canvas Elevation & Art Sketch Draw) -->
  <div id="studioPreloader" class="studio-preloader" aria-hidden="true">
    <div id="preRulerV" class="preloader-ruler-v"></div>
    <div class="preloader-hr-track"><div id="preHrFill" class="preloader-hr-fill"></div></div>
    <span id="preloaderPct" class="preloader-pct-tag">0%</span>

    <div class="preloader-center-stage">
      <svg class="preloader-sketch-svg" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Subtle Full-Canvas Architectural Grid & Datum Axes -->
        <line class="preloader-sketch-path" x1="0" y1="620" x2="1440" y2="620" stroke="#111111" stroke-width="1.35" />
        <line class="preloader-sketch-path" x1="0" y1="634" x2="1440" y2="634" stroke="#767070" stroke-width="0.7" />
        <line class="preloader-sketch-path" x1="0" y1="410" x2="1440" y2="410" stroke="#8F0000" stroke-width="0.9" stroke-opacity="0.45" />
        <line class="preloader-sketch-path" x1="280" y1="90" x2="280" y2="690" stroke="#111111" stroke-width="0.6" stroke-opacity="0.18" />
        <line class="preloader-sketch-path" x1="520" y1="70" x2="520" y2="710" stroke="#111111" stroke-width="0.6" stroke-opacity="0.18" />
        <line class="preloader-sketch-path" x1="920" y1="70" x2="920" y2="710" stroke="#111111" stroke-width="0.6" stroke-opacity="0.18" />
        <line class="preloader-sketch-path" x1="1160" y1="90" x2="1160" y2="690" stroke="#111111" stroke-width="0.6" stroke-opacity="0.18" />

        <!-- Golden Ratio & Compass Elevation Sweep Curves -->
        <path class="preloader-sketch-path" d="M880 410 A290 290 0 1 1 1170 620" stroke="#8F0000" stroke-width="1.4" stroke-opacity="0.65" />
        <circle class="preloader-sketch-path" cx="1015" cy="275" r="95" stroke="#EC7C30" stroke-width="1.15" stroke-opacity="0.55" />
        <path class="preloader-sketch-path" d="M160 620 A460 460 0 0 1 620 160" stroke="#767070" stroke-width="0.85" stroke-dasharray="6 6" />

        <!-- Left Wing: Stepped Cantilever Villa & Colonnade Plinth -->
        <path class="preloader-sketch-path" d="M140 620 V560 H260 V480 H520" stroke="#111111" stroke-width="1.5" />
        <path class="preloader-sketch-path" d="M180 480 V385 H470 V340 H520" stroke="#111111" stroke-width="1.6" />
        <path class="preloader-sketch-path" d="M150 385 H490 L520 355" stroke="#8F0000" stroke-width="1.4" />
        <path class="preloader-sketch-path" d="M210 620 V520 H250 V620 M290 620 V520 H330 V620 M370 620 V520 H410 V620 M450 620 V520 H490 V620" stroke="#767070" stroke-width="1" />
        <path class="preloader-sketch-path" d="M235 480 V415 H360 V480 M395 480 V415 H485 V480" stroke="#111111" stroke-width="1.05" />

        <!-- Center Core: Contemporary Atrium Tower & Cross-Braced Structural Frame -->
        <path class="preloader-sketch-path" d="M520 620 V195 L720 135 L920 195 V620" stroke="#111111" stroke-width="1.8" />
        <path class="preloader-sketch-path" d="M500 205 L720 120 L940 205" stroke="#8F0000" stroke-width="1.6" />
        <path class="preloader-sketch-path" d="M555 620 V235 H885 V620" stroke="#111111" stroke-width="1.2" />
        <path class="preloader-sketch-path" d="M555 315 H885 M555 410 H885 M555 510 H885" stroke="#111111" stroke-width="1.15" />
        <path class="preloader-sketch-path" d="M635 235 V620 M720 140 V620 M805 235 V620" stroke="#767070" stroke-width="0.95" />
        <path class="preloader-sketch-path" d="M635 315 L720 410 L805 315 M635 410 L720 315 L805 410 M635 410 L720 510 L805 410 M635 510 L720 410 L805 510" stroke="#8F0000" stroke-width="1" stroke-opacity="0.7" />

        <!-- Right Wing: Modern Institutional Terrace Pavilion & Grand Steps -->
        <path class="preloader-sketch-path" d="M920 440 H1240 V505 H1310 V620" stroke="#111111" stroke-width="1.55" />
        <path class="preloader-sketch-path" d="M920 315 H1180 V440" stroke="#111111" stroke-width="1.45" />
        <path class="preloader-sketch-path" d="M905 315 H1210" stroke="#8F0000" stroke-width="1.45" />
        <path class="preloader-sketch-path" d="M965 620 V490 H1065 V620 M1110 620 V490 H1210 V620" stroke="#767070" stroke-width="1.05" />
        <path class="preloader-sketch-path" d="M950 440 V350 H1145 V440" stroke="#111111" stroke-width="1.1" />
        <path class="preloader-sketch-path" d="M1240 545 H1355 M1260 570 H1375 M1280 595 H1395" stroke="#767070" stroke-width="1" />

        <!-- Architectural Foliage Contour Linework (Left & Right Flanks) -->
        <path class="preloader-sketch-path" d="M88 620 C70 575 72 520 96 475 C118 430 108 370 128 335 C148 370 138 435 152 485 C166 535 162 580 144 620" stroke="#767070" stroke-width="1.1" />
        <path class="preloader-sketch-path" d="M114 620 V440 M114 525 L92 495 M114 490 L136 465" stroke="#767070" stroke-width="0.9" />
        <path class="preloader-sketch-path" d="M1325 620 C1290 565 1298 485 1340 445 C1375 415 1410 455 1405 510 C1400 560 1382 595 1358 620" stroke="#767070" stroke-width="1.1" />
        <path class="preloader-sketch-path" d="M1348 620 V495 M1348 545 L1320 515 M1348 525 L1375 500" stroke="#767070" stroke-width="0.9" />
      </svg>
    </div>

    <div class="preloader-colophon-bottom">
      <div class="flex items-center gap-3">
        <img src="assets/logo.svg" alt="" style="height: 28px; width: auto; max-width: 32px;" onerror="this.src='assets/logo.jpg'" />
        <div>
          <div class="font-bold tracking-widest uppercase text-[#111111]">Scale and Spaces Pvt. Ltd.</div>
          <div class="text-[10px] tracking-wider uppercase text-[#767070]">Architecture &bull; Engineering &bull; Interior Design</div>
        </div>
      </div>
      <div class="hidden sm:block text-right font-mono text-[10px] leading-relaxed uppercase text-[#767070]">
        <div>01 Survey &amp; Masterplan &bull; 02 Concept &amp; 3D</div>
        <div>03 Structural &amp; MEP &bull; 04 Turnkey Execution</div>
      </div>
    </div>
  </div>

  <!-- 2D CANVAS INK RIBBON TRAIL + SUBTLE ARCHITECTURAL NIB POINTER -->
  <canvas id="studioCursorCanvas" class="studio-cursor-canvas" aria-hidden="true"></canvas>
  <div id="studioCursor" class="studio-cursor" aria-hidden="true">
    <div id="cursorRing" class="studio-cursor-ring"></div>
    <div id="cursorDot" class="studio-cursor-dot"></div>
  </div>

  <!-- TOP EDITORIAL STUDIO BAR -->
  <div class="bg-[#E8E6DF] border-b border-[#DDD8CE] text-xs py-2 text-[#767070] hidden sm:block">
    <div class="portfolio-container flex flex-wrap justify-between items-center gap-2">
      <div>
        <strong class="text-[#111111]">SCALE AND SPACES Pvt. Ltd.</strong> &bull; Architecture &bull; Engineering &bull; Interior Design
      </div>
      <div class="flex items-center gap-4">
        <span class="inline-flex items-center gap-1">${icons.pin} Tokha-6, Kathmandu &nbsp;|&nbsp; Birgunj-12, Parsa</span>
        <span class="inline-flex items-center gap-1">${icons.mail} studio@scaleandspaces.com</span>
      </div>
    </div>
  </div>

  <!-- NAVIGATION BAR + SCROLL PROGRESS LINE -->
  <header class="site-nav flex items-center">
    <div class="portfolio-container flex items-center justify-between w-full">
      <a href="#top" class="flex items-center gap-3 no-underline">
        <img src="assets/logo.svg" alt="Scale and Spaces Pvt. Ltd. geometric emblem" class="nav-logo" style="height: 40px; width: auto; max-width: 48px;" onerror="this.src='assets/logo.jpg'" />
        <div class="flex flex-col">
          <span class="font-bold text-base sm:text-lg tracking-wider text-[#111111] leading-none">
            SCALE <span class="font-normal text-[#8F0000]">AND</span> SPACES
          </span>
          <span class="text-[0.68rem] uppercase tracking-widest text-[#767070] font-semibold mt-1">
            Pvt. Ltd. &bull; Architects &bull; Engineers
          </span>
        </div>
      </a>

      <!-- Semantic Crawlable Anchor Navigation -->
      <nav aria-label="Main navigation" class="hidden lg:flex items-center gap-7">
        <a href="#scope-of-works" class="nav-link-animated text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Scope of Works_</a>
        <a href="#the-full-team" class="nav-link-animated text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">The Full Team</a>
        <a href="#our-works" class="nav-link-animated text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Our Works_</a>
        <a href="#ranighat-masterplan" class="nav-link-animated text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Ranighat Masterplan</a>
        <a href="#contact" class="nav-link-animated text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Contact Offices</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="https://wa.me/9779703881733?text=Hello%20Scale%20and%20Spaces,%20I%20would%20like%20to%20inquire%20regarding%20a%20project." target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex btn-crimson text-xs py-2 px-4">
          ${icons.whatsapp}
          <span>Contact Studio</span>
        </a>
        <button id="mobile-toggle" type="button" aria-label="Open Navigation Menu" class="lg:hidden p-2 text-[#111111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
          ${icons.bars}
        </button>
      </div>
    </div>
    <div id="navProgress" class="nav-scroll-progress" aria-hidden="true"></div>
  </header>

  <!-- MOBILE NAVIGATION DRAWER -->
  <div id="mobile-backdrop" class="mobile-backdrop"></div>
  <aside id="mobile-menu" aria-label="Mobile Navigation" class="mobile-menu">
    <div class="flex justify-between items-center mb-8 pb-4 border-b border-[#DDD8CE]">
      <div class="flex items-center gap-2">
        <img src="assets/logo.svg" alt="Scale and Spaces logo" style="height: 32px; width: auto; max-width: 38px;" onerror="this.src='assets/logo.jpg'" />
        <span class="font-bold text-sm tracking-wide text-[#111]">SCALE AND SPACES</span>
      </div>
      <button id="mobile-close" type="button" aria-label="Close Navigation Menu" class="text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer p-1">
        ${icons.close}
      </button>
    </div>
    <nav class="flex flex-col gap-5 text-base font-bold text-[#111]">
      <a href="#scope-of-works" class="mobile-link hover:text-[#8F0000] no-underline text-[#111]">Scope of Works_</a>
      <a href="#the-full-team" class="mobile-link hover:text-[#8F0000] no-underline text-[#111]">The Full Team</a>
      <a href="#our-works" class="mobile-link hover:text-[#8F0000] no-underline text-[#111]">Our Works_</a>
      <a href="#ranighat-masterplan" class="mobile-link hover:text-[#8F0000] no-underline text-[#111]">Ranighat Masterplan</a>
      <a href="#contact" class="mobile-link hover:text-[#8F0000] no-underline text-[#111]">Contact Studio Offices</a>
    </nav>
    <div class="mt-auto pt-6 border-t border-[#DDD8CE] flex flex-col gap-3">
      <a href="https://wa.me/9779703881733" target="_blank" rel="noopener noreferrer" class="btn-crimson w-full text-xs">
        ${icons.whatsapp}
        <span>+977-9703881733</span>
      </a>
      <a href="mailto:studio@scaleandspaces.com" class="text-xs text-center text-[#767070] no-underline hover:text-[#8F0000]">
        studio@scaleandspaces.com
      </a>
    </div>
  </aside>

  <main id="top">
    <!-- ======================================================================
         COVER / HERO SECTION (Full-Page Cover Photo Background: B&W Sketch -> Color)
         ====================================================================== -->
    <section id="heroSection" class="hero-full-section">
      <!-- Atmospheric Full-Page Background Showcase (Monochrome Sketch + Color Render Reveal) -->
      <div id="heroBgStage" class="hero-bg-stage" aria-hidden="true">
        <img src="assets/projects/cover_studio_tower_bw.jpg" alt="" class="hero-bg-bw" />
        <img id="heroBgColor" src="assets/projects/cover_studio_tower.jpg" alt="Scale and Spaces architectural tower study — monochrome sketch to color perspective" class="hero-bg-color" />
        <div id="heroSunHalo" class="hero-sun-halo"></div>
        <div class="hero-bg-scrim"></div>
      </div>

      <div class="portfolio-container relative z-[2] pt-8 pb-6 md:pt-12 md:pb-8 flex-1 flex flex-col justify-between">
        <div class="hero-stagger flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
          <p class="text-sm md:text-base text-[#111111] tracking-wide">
            Architecture | Engineering | Construction
          </p>
          <p class="text-lg md:text-2xl tracking-wider text-[#111111]">
            <span style="color:#FF0000;">|</span> DESIGN <strong>PORTFOLIO</strong>
          </p>
        </div>

        <div class="my-auto py-6 md:py-10 max-w-3xl">
          <!-- Single Semantic H1 with GSAP SplitText reveal -->
          <h1 id="heroHeadline" class="portfolio-crimson-quote">
            <span class="block text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style="font-family: Georgia, 'EB Garamond', serif;">Designing Spaces,</span>
            <span class="block text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight" style="font-family: 'EB Garamond', Georgia, serif;">
              Defining Lifestyles<span style="font-size: 1.15em;">!</span>
            </span>
          </h1>
          <p class="hero-stagger text-sm sm:text-base text-[#333333] mt-4 max-w-xl leading-relaxed">
            Architectural design, structural engineering, landscape masterplanning, and interior studio by <strong class="text-[#111111]">Scale and Spaces Private Limited</strong> across Kathmandu and Birgunj.
          </p>

          <div class="hero-stagger flex flex-wrap items-center gap-4 mt-7">
            <a href="#our-works" class="btn-crimson text-xs py-2.5 px-5">Explore Architectural Works &darr;</a>
            <a href="#contact" class="btn-outline text-xs py-2.5 px-5">Request Studio Consultation</a>
          </div>
        </div>

        <!-- Clean Hairline Studio Locations Strip + Featured Project Selector (Zero Heavy Boxes) -->
        <div class="hero-stagger mt-6">
          <div class="py-3 border-t border-b border-[#111111]/15 flex flex-col md:flex-row justify-between items-start md:items-center text-xs sm:text-sm text-[#111111] gap-2 mb-4">
            <div><strong class="text-[#8F0000]">Head Office:</strong> Tokha-6, Kathmandu</div>
            <div class="hidden md:block text-[#767070]">|</div>
            <div><strong class="text-[#8F0000]">Contact Office:</strong> Birgunj-12, Parsa</div>
            <div class="hidden md:block text-[#767070]">|</div>
            <div><strong class="text-[#8F0000]">Email:</strong> studio@scaleandspaces.com</div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" class="hero-slide-tab is-active" onclick="setHeroSlide(0, event)">01 Studio Cover</button>
              <button type="button" class="hero-slide-tab" onclick="setHeroSlide(1, event)">02 Mithila Tower</button>
              <button type="button" class="hero-slide-tab" onclick="setHeroSlide(2, event)">03 Hyatt Hospital</button>
              <button type="button" class="hero-slide-tab" onclick="setHeroSlide(3, event)">04 Tulsi Villa</button>
            </div>
            <p id="heroSlideTitle" class="text-sm sm:text-base font-bold serif-heading text-[#111111]">
              Studio Cover &mdash; <span class="font-normal text-[#767070]">Conceptual Timber &amp; Steel Study</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Thin Architectural Practice Marquee Strip -->
      <div class="studio-marquee-wrap" aria-hidden="true">
        <div class="studio-marquee-track">
          <span>TOPOGRAPHICAL SURVEY</span><span>&bull;</span>
          <span>ARCHITECTURAL DESIGN</span><span>&bull;</span>
          <span>3D VISUALIZATION</span><span>&bull;</span>
          <span>STRUCTURAL SEISMIC ENGINEERING</span><span>&bull;</span>
          <span>ELECTRICAL &amp; SANITARY MEP</span><span>&bull;</span>
          <span>LANDSCAPE MASTERPLANNING</span><span>&bull;</span>
          <span>INTERIOR JOINERY</span><span>&bull;</span>
          <span>BOQ &amp; TURNKEY SUPERVISION</span><span>&bull;</span>
          <span>TOPOGRAPHICAL SURVEY</span><span>&bull;</span>
          <span>ARCHITECTURAL DESIGN</span><span>&bull;</span>
          <span>3D VISUALIZATION</span><span>&bull;</span>
          <span>STRUCTURAL SEISMIC ENGINEERING</span><span>&bull;</span>
          <span>ELECTRICAL &amp; SANITARY MEP</span><span>&bull;</span>
          <span>LANDSCAPE MASTERPLANNING</span><span>&bull;</span>
          <span>INTERIOR JOINERY</span><span>&bull;</span>
          <span>BOQ &amp; TURNKEY SUPERVISION</span><span>&bull;</span>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SCOPE OF WORKS_ (Clean Open Hairlines + Watercolor Ink Atelier Plate)
         ====================================================================== -->
    <section id="scope-of-works" class="py-16 md:py-22 border-b border-[#DDD8CE] bg-[#F7F6F2] wc-section-wash">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 reveal-head">
          <div>
            <h2 class="portfolio-section-title">SCOPE OF WORKS_</h2>
            <p class="text-sm text-[#767070] mt-2 max-w-2xl">
              Comprehensive architectural, structural engineering, MEP, cost estimation, and procurement supervision services delivered end-to-end across Nepal.
            </p>
          </div>
          <div class="text-xs font-bold uppercase tracking-widest text-[#767070]">
            SCALE AND SPACES Pvt. Ltd.
          </div>
        </div>

        <!-- 10 Deliverables Full-Width Hairline Grid matching Page 2 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-14 scope-grid">
          ${scopeItems.map(item => `
            <div class="scope-list-item">
              <span class="scope-square"></span>
              <span class="text-base font-normal text-[#111111]">${item}</span>
            </div>
          `).join('')}
        </div>

        <!-- Open 6-Column Architectural Practice Lifecycle Hairline Grid (Zero Card Boxes) -->
        <div class="service-hairline-grid mt-14 reveal-head">
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="16" cy="11" r="4"/><path d="M16 15V28M9 28H23M6 9C11 5 21 5 26 9"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">01</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Site Analysis &amp; Topographical Survey</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 26L16 6L28 26H4Z"/><path d="M16 6V26M10 16H22"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">02</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Concept Forms &amp; 3D Visualization</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="6" y="6" width="20" height="20"/><path d="M6 16H26M16 6V26M6 6L26 26"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">03</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Seismic Analysis &amp; Structural Engineering</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M8 26V10C8 7 12 5 16 5C20 5 24 7 24 10V26"/><path d="M4 26H28M12 14H20M12 20H20"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">04</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Interior Joinery, Electrical &amp; Sanitary</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="6" y="5" width="16" height="22"/><path d="M22 9H26V27H10M10 11H18M10 16H18M10 21H15"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">05</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Municipal Permit &amp; Tender BOQ Docs</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="16" cy="16" r="10"/><path d="M16 10V16L21 19M4 16H7M25 16H28"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">06</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Site Supervision &amp; Turnkey Delivery</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         ARCHITECTURAL PRACTICE MONOGRAPH STATEMENT
         ====================================================================== -->
    <section id="atelierTrailStage" class="atelier-trail-stage py-16 md:py-20">
      <div id="atelierTrailLayer" class="atelier-trail-layer" aria-hidden="true"></div>

      <div class="portfolio-container text-center relative z-[4] pointer-events-none select-none">
        <span class="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-2">
          SCALE AND SPACES PVT. LTD. &bull; NEPAL
        </span>
        <p class="text-2xl sm:text-3xl md:text-4xl font-bold serif-heading text-[#111111] max-w-2xl mx-auto leading-tight">
          From Sketch &amp; Concept Massing to Built Architectural Realities
        </p>
        <p class="text-xs sm:text-sm text-[#555555] mt-2 max-w-xl mx-auto">
          Residential villas, commercial landmarks, hospitals, temples, and bespoke interiors crafted across Kathmandu Valley and Terai.
        </p>
        <a href="#our-works" class="btn-outline text-xs py-2 px-5 mt-5 pointer-events-auto no-underline">
          Browse Studio Archive &darr;
        </a>
      </div>
    </section>

    <!-- ======================================================================
         THE FULL TEAM (Page 3 of Portfolio PDF — All 10 Verified Members)
         ====================================================================== -->
    <section id="the-full-team" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA] wc-section-wash">
      <div class="portfolio-container">
        <div class="text-center mb-12 reveal-head">
          <h2 class="portfolio-section-title">THE FULL TEAM</h2>
          <p class="text-sm text-[#767070] mt-2">
            Scale and Spaces Pvt. Ltd. &bull; Multidisciplinary Architects, Engineers &amp; Interior Specialists
          </p>
        </div>

        <!-- 5x2 Team Grid matching Page 3 of portfolio_67fe3a57.pdf -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 team-grid">
          ${teamData.map(m => {
            const parts = m.name.split(' ');
            const first = parts.slice(0, -1).join(' ');
            const last = parts[parts.length - 1];
            return `
              <div class="team-card wc-hover-card">
                <div class="team-circle-stage">
                  <div class="team-img-wrap">
                    <img src="${m.image}" alt="${m.name} — ${m.role} at Scale and Spaces Pvt. Ltd." loading="lazy" />
                  </div>
                </div>
                <div class="team-name-box">${first} <b>${last}</b></div>
                <div class="team-role-box">${m.role}</div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="mt-10 pt-4 text-center">
          <span class="font-serif italic text-base text-[#8F0000]">Scale and Spaces Pvt. Ltd.</span>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         OUR WORKS_ DISCIPLINE INDEX & GALLERY (Pages 4-68 of Portfolio PDF)
         ====================================================================== -->
    <section id="our-works" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] wc-section-wash">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 reveal-head">
          <div>
            <h2 class="portfolio-section-title">Our works_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Selected architectural, commercial, landscape, residential, institutional, religious &amp; interior projects across Nepal.
            </p>
          </div>
          <div class="text-xs font-semibold text-[#767070]">
            Showing <span id="project-count" class="font-bold text-[#111111]">${projectsData.length}</span> portfolio works
          </div>
        </div>

        <!-- Page 4 Architectural Category Quick Index -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 reveal-head">
          <button type="button" onclick="selectCategoryFilter('Residences')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">R</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Residences</span>
          </button>
          <button type="button" onclick="selectCategoryFilter('Commercial')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">C</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Commercial</span>
          </button>
          <button type="button" onclick="selectCategoryFilter('Landscape')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">L</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Landscape Development</span>
          </button>
          <button type="button" onclick="selectCategoryFilter('Interior')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">I</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Interior Design</span>
          </button>
          <button type="button" onclick="selectCategoryFilter('Institutional')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">O</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Office Building</span>
          </button>
          <button type="button" onclick="selectCategoryFilter('Religious')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">R</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Religious Complexes</span>
          </button>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 pb-6 mb-6 border-b border-[#DDD8CE]" role="tablist" aria-label="Filter projects by category">
          <button type="button" class="filter-tab active" data-category="all">All Works (${projectsData.length})</button>
          <button type="button" class="filter-tab" data-category="Commercial">Commercial Buildings</button>
          <button type="button" class="filter-tab" data-category="Landscape">Landscape Development</button>
          <button type="button" class="filter-tab" data-category="Residences">Residences</button>
          <button type="button" class="filter-tab" data-category="Institutional">Office / Institutional</button>
          <button type="button" class="filter-tab" data-category="Religious">Religious Complexes</button>
          <button type="button" class="filter-tab" data-category="Interior">Interior Design</button>
          <button type="button" class="filter-tab" data-category="Branding">Logo Designs</button>
        </div>

        <!-- Project Gallery Grid -->
        <div id="projects-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${projectsData.map(p => `
            <article class="project-card wc-hover-card" data-category="${p.category}" data-id="${p.id}">
              <div class="project-image-box" onclick="openLightbox('${p.id}')">
                <img src="${p.image}" alt="${p.title} ${p.client} architectural design in ${p.location} (${p.year}) by Scale and Spaces Pvt. Ltd." loading="lazy" />
                <div class="project-overlay">
                  <span class="btn-crimson text-xs py-2 px-4 shadow-lg">
                    ${icons.expand} <span>Inspect Project (${p.images.length} View${p.images.length > 1 ? 's' : ''})</span>
                  </span>
                </div>
              </div>
              <div class="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div class="flex justify-between items-center text-xs text-[#767070] mb-2">
                    <span class="font-semibold">${p.location}</span>
                    <span class="font-bold text-[#111111]">${p.year}</span>
                  </div>
                  <h3 class="text-lg font-bold text-[#C00000] mb-0.5 leading-snug cursor-pointer hover:underline" style="font-family: var(--font-sans);" onclick="openLightbox('${p.id}')">
                    ${p.title}
                  </h3>
                  <p class="text-sm font-bold text-[#111111] mb-2">${p.client}</p>
                  <p class="text-xs text-[#767070] leading-relaxed mb-3">${p.desc}</p>
                </div>
                <div class="pt-3 border-t border-[#DDD8CE] flex justify-between items-center text-xs">
                  <span class="text-[#767070] font-semibold">SCALE AND SPACES Pvt. Ltd.</span>
                  <button type="button" onclick="openLightbox('${p.id}')" class="text-[#8F0000] font-bold bg-transparent border-0 cursor-pointer hover:underline p-0">
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ======================================================================
         FEATURED CIVIC MASTERPLAN: THE SHAVDAAHGRIHAM (Pages 18-19)
         ====================================================================== -->
    <section id="ranighat-masterplan" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA] wc-section-wash">
      <div class="portfolio-container">
        <div class="mb-8 reveal-head">
          <span class="text-xs font-bold uppercase tracking-widest text-[#C00000] block mb-1">Landscape Development Feature</span>
          <h2 class="portfolio-section-title">The Shavdaahgriham</h2>
          <p class="text-base font-bold text-[#111111] mt-1">And the Masterplan &mdash; Ranighat, Birgunj (2021 A.D.)</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-7 flex flex-col gap-5 reveal-card">
            <div class="overflow-hidden cursor-pointer wc-hover-card wc-ink-plate shadow-sm" onclick="openLightbox('shavdaahgriham-crematorium')">
              <img src="assets/projects/shavdaahgriham_crematorium.jpg" alt="The Shavdaahgriham electrical crematorium architecture at Ranighat, Birgunj" class="w-full h-auto object-cover block" loading="lazy" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="overflow-hidden wc-hover-card">
                <img src="assets/projects/shavdaahgriham_roof.jpg" alt="Waterfront cremation platform and riverfront steps at Ranighat Samshanghat" class="w-full h-48 object-cover block" loading="lazy" />
                <p class="pt-2 text-xs text-[#767070]">Riverfront ghats &amp; ceremonial platform</p>
              </div>
              <div class="overflow-hidden wc-hover-card">
                <img src="assets/projects/shavdaahgriham_ranighat_1.jpg" alt="Ranighat riverfront crematorium park masterplan and scattering gardens" class="w-full h-48 object-cover block" loading="lazy" />
                <p class="pt-2 text-xs text-[#767070]">Landscape masterplan &amp; scattering gardens</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col gap-5 reveal-card pt-2 border-t lg:border-t-0 lg:border-l border-[#DDD8CE] lg:pl-8">
            <div>
              <h3 class="text-xl font-bold text-[#111111] mb-1" style="font-family: var(--font-sans);">REDEVELOPMENT OF RANIGHAT SAMSHANGHAT</h3>
              <p class="text-sm font-bold text-[#C00000]">of Birgunj Metropolitan City Office</p>
              <p class="text-xs text-[#767070] mt-0.5">Ranighat, Birgunj &bull; 2021 A.D.</p>
            </div>

            <div class="arch-line"></div>

            <div class="py-2">
              <img src="assets/projects/tent_form_diagram.jpg" alt="Hand-drawn tent form concept diagram for Ranighat Crematorium" class="w-full max-h-40 object-contain mx-auto mix-blend-multiply" loading="lazy" />
            </div>

            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">Form Development</h4>
              <p class="text-xs sm:text-sm text-[#333333] leading-relaxed">
                The space enclosed by a piece of cloth covering is very often used as a place for kriya karma. The basic form of tent inspired the overall form development. Over ornamentation and decorativeness would rather amplify anger; a minimalist approach in form creates a calming environment.
              </p>
            </div>

            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">Material</h4>
              <p class="text-xs sm:text-sm text-[#333333] leading-relaxed">
                Use of Traditional Khapada in the roof is an approach for preservation of heritage carried by the indigenous people of Birgunj.
              </p>
            </div>

            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">Landscaping &amp; Scattering Gardens</h4>
              <p class="text-xs sm:text-sm text-[#333333] leading-relaxed">
                Carefully selected plant species thriving in the local Terai climate provide year-round serenity with seasonal flowers, evergreen trees, manicured lawns, water features, and secluded scattering gardens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         BRAND IDENTITY & LOGO DESIGNS (Pages 69-70 of Portfolio PDF)
         ====================================================================== -->
    <section id="logo-designs" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] relative">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 reveal-head">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#888888] block mb-1">2022 &bull; Graphic &amp; Civic Identity</span>
            <h2 class="portfolio-section-title">OUR PROJECTS_ <span class="font-normal text-xl md:text-2xl text-[#111111]">Logo Designs</span></h2>
          </div>
          <span class="text-xs font-bold uppercase tracking-widest" style="color:#FF0000;">Logo Design Competition Winning Entry</span>
        </div>

        <!-- 10 Corporate Logo Marks Grid (Page 69 — Clean Hairline Matrix) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#DDD8CE] mb-12 reveal-card">
          ${clientLogos.map(l => `
            <div class="bg-white/60 border-r border-b border-[#DDD8CE] p-4 flex items-center justify-center h-28 hover:bg-white transition-colors">
              <img src="${l.img}" alt="${l.alt}" class="max-h-20 w-auto object-contain" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Competition Winning Entry Spread (Page 70) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 reveal-card">
          <div class="lg:col-span-4 flex flex-col gap-3">
            <div class="text-sm font-bold tracking-widest leading-relaxed text-[#111111]">
              L O G O<br/>
              D E S I G N<br/>
              C O M P E T I T I O N<br/>
              <span style="color:#FF0000;">W I N N I N G &nbsp; E N T R Y</span>
            </div>
            <h3 class="text-2xl font-normal text-[#111111]" style="font-family: var(--font-sans);">Competition Winner</h3>
            <p class="text-xs text-[#767070]">Official Emblem of Jeetpur Simara Sub-Metropolitan City designed by Ar. Yateendra Kishore Labh (2022).</p>
            <button type="button" onclick="openLightbox('logo-competition-winner')" class="btn-outline text-xs py-2 px-4 self-start mt-2">
              View Competition Boards &rarr;
            </button>
          </div>
          <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="overflow-hidden cursor-pointer wc-hover-card shadow-sm" onclick="openLightbox('logo-competition-winner')">
              <img src="assets/projects/logo_competition_winner.jpg" alt="Jeetpur Simara Sub-Metropolitan City Winning Emblem Design Board 1" class="w-full h-56 object-cover block" loading="lazy" />
            </div>
            <div class="overflow-hidden cursor-pointer wc-hover-card shadow-sm" onclick="openLightbox('logo-competition-winner')">
              <img src="assets/projects/logo_competition_sheet2.jpg" alt="Jeetpur Simara Sub-Metropolitan City Winning Emblem Design Board 2" class="w-full h-56 object-cover block" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         CONTACT & OFFICES (Matching Page 71 Back Cover of Portfolio PDF)
         ====================================================================== -->
    <section id="contact" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA] relative">
      <div class="portfolio-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-5 flex flex-col gap-6 reveal-card">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-[#8F0000] block mb-1">Practice Locations &amp; Inquiries</span>
              <h2 class="portfolio-section-title">Scale and Spaces Pvt. Ltd.</h2>
              <p class="text-sm text-[#767070] mt-2">
                Architects, Structural Engineers &amp; Interior Designers practicing across Kathmandu Valley and Terai Nepal.
              </p>
            </div>

            <div class="border-t border-b border-[#DDD8CE] py-5 flex flex-col gap-4 text-sm">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#8F0000]" style="font-family: var(--font-sans);">Head Office</h3>
                <p class="font-bold text-[#111111] flex items-center gap-2 mt-0.5">${icons.pin} Tokha-6, Dhapasi, Kathmandu</p>
              </div>
              <div class="arch-line"></div>
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#8F0000]" style="font-family: var(--font-sans);">Contact Office</h3>
                <p class="font-bold text-[#111111] flex items-center gap-2 mt-0.5">${icons.pin} Birgunj-12, Parsa</p>
              </div>
              <div class="arch-line"></div>
              <div class="flex flex-col gap-1.5 text-xs sm:text-sm">
                <p class="flex items-center gap-2">${icons.mail} <strong>Email:</strong> <a href="mailto:studio@scaleandspaces.com" class="text-[#8F0000] underline">studio@scaleandspaces.com</a></p>
                <p class="flex items-center gap-2">${icons.phone} <strong>Contact:</strong> <a href="tel:+9779703881733" class="text-[#111111] no-underline hover:underline">+977-9703881733</a></p>
                <p><strong>Official Website:</strong> www.scaleandspaces.com</p>
              </div>
            </div>

            <a href="https://wa.me/9779703881733?text=Hello%20Scale%20and%20Spaces,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" class="btn-crimson w-full text-xs py-3">
              ${icons.whatsapp}
              <span>Message Studio on WhatsApp (+977-9703881733)</span>
            </a>
          </div>

          <div class="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#DDD8CE] pt-6 lg:pt-0 lg:pl-10 reveal-card">
            <h3 class="text-xl font-bold serif-heading text-[#111111] mb-1">Studio Project Inquiry</h3>
            <p class="text-xs text-[#767070] mb-6">
              Submit your brief details for architectural design, interior work, structural engineering, or construction supervision.
            </p>

            <form id="consultation-form" onsubmit="handleInquirySubmit(event)" class="flex flex-col gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="client-name" class="block text-xs font-bold text-[#111111] mb-1">Full Name *</label>
                  <input id="client-name" type="text" required placeholder="Client Name" class="w-full text-sm p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none" />
                </div>
                <div>
                  <label for="client-phone" class="block text-xs font-bold text-[#111111] mb-1">Phone / WhatsApp *</label>
                  <input id="client-phone" type="tel" required placeholder="+977 98XXXXXXXX" class="w-full text-sm p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="project-type" class="block text-xs font-bold text-[#111111] mb-1">Project Typology *</label>
                  <select id="project-type" class="w-full text-sm p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none">
                    <option value="Residence">Residence</option>
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Office / Institutional Building">Office / Institutional Building</option>
                    <option value="Landscape Development">Landscape Development</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Religious Complex">Religious Complex</option>
                  </select>
                </div>
                <div>
                  <label for="project-location" class="block text-xs font-bold text-[#111111] mb-1">Site Location *</label>
                  <input id="project-location" type="text" required placeholder="e.g. Kathmandu / Birgunj" class="w-full text-sm p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none" />
                </div>
              </div>

              <div>
                <label for="client-message" class="block text-xs font-bold text-[#111111] mb-1">Project Brief</label>
                <textarea id="client-message" rows="3" placeholder="Outline your site area, floors, and scope of works required..." class="w-full text-sm p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none"></textarea>
              </div>

              <button type="submit" class="btn-crimson w-full text-xs py-3 mt-1">
                ${icons.send} <span>Send Inquiry via WhatsApp</span>
              </button>
              <p id="form-feedback" class="text-xs text-center text-[#8F0000] font-bold hidden mt-1"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="bg-[#1A1A1A] text-[#CCCCCC] py-12 border-t border-[#333333]">
    <div class="portfolio-container">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#333333]">
        <div class="md:col-span-5 flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <img src="assets/logo.svg" alt="Scale and Spaces Pvt. Ltd. mark" style="height: 36px; width: auto; max-width: 44px; filter: invert(1) brightness(2);" onerror="this.src='assets/logo.jpg'" />
            <span class="font-bold text-lg text-white tracking-wide">
              SCALE <span class="text-[#C00000]">AND</span> SPACES
            </span>
          </div>
          <span class="text-xs uppercase tracking-widest text-[#888888] font-semibold">
            Pvt. Ltd. &bull; Architects &bull; Engineers &bull; Interior Designers
          </span>
          <p class="text-xs text-[#999999] max-w-sm mt-2">
            "Designing Spaces, Defining Lifestyles!"
          </p>
        </div>

        <div class="md:col-span-3 flex flex-col gap-2 text-xs">
          <span class="text-white font-bold uppercase tracking-wider mb-1">Portfolio Sections</span>
          <a href="#scope-of-works" class="text-[#CCCCCC] no-underline hover:text-white">Scope of Works_</a>
          <a href="#the-full-team" class="text-[#CCCCCC] no-underline hover:text-white">The Full Team (10 Specialists)</a>
          <a href="#our-works" class="text-[#CCCCCC] no-underline hover:text-white">Our Works (${projectsData.length} Entries)</a>
          <a href="#ranighat-masterplan" class="text-[#CCCCCC] no-underline hover:text-white">Ranighat Masterplan</a>
        </div>

        <div class="md:col-span-4 flex flex-col gap-1.5 text-xs">
          <span class="text-white font-bold uppercase tracking-wider mb-1">Offices</span>
          <p><strong class="text-white">Head Office:</strong> Tokha-6, Dhapasi, Kathmandu</p>
          <p><strong class="text-white">Contact Office:</strong> Birgunj-12, Parsa</p>
          <p><strong class="text-white">Email:</strong> studio@scaleandspaces.com</p>
          <p><strong class="text-white">Contact:</strong> +977-9703881733</p>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#888888] gap-2">
        <div>
          &copy; <span id="footer-year">2026</span> Scale and Spaces Private Limited. All rights reserved.
        </div>
        <div>www.scaleandspaces.com</div>
      </div>
    </div>
  </footer>

  <!-- LIGHTBOX MODAL -->
  <div id="lightbox" class="lightbox-modal" onclick="closeLightboxOnBackdrop(event)">
    <div id="lightboxCard" class="lightbox-content">
      <div class="p-4 md:p-5 bg-[#E8E6DF] border-b border-[#DDD8CE] flex justify-between items-center">
        <div>
          <span id="modal-category" class="text-xs uppercase tracking-widest text-[#C00000] font-bold block"></span>
          <p id="modal-title" class="text-xl md:text-2xl font-bold text-[#111111]" style="font-family: var(--font-sans);"></p>
        </div>
        <button type="button" onclick="closeLightbox()" aria-label="Close Project Modal" class="p-2 text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
          ${icons.close}
        </button>
      </div>

      <div class="p-5 md:p-7 flex flex-col gap-5">
        <div class="border border-[#DDD8CE] overflow-hidden bg-black/5 flex items-center justify-center">
          <img id="modal-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Architectural project detail view" style="max-height: 60vh; width: 100%; object-fit: contain; transition: opacity 0.25s ease;" />
        </div>

        <div id="modal-gallery" class="flex items-center gap-2 overflow-x-auto pb-1"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-[#DDD8CE]">
          <div class="md:col-span-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">Project Overview</h3>
            <p id="modal-desc" class="text-sm text-[#333333] leading-relaxed"></p>
          </div>
          <div class="bg-white border border-[#DDD8CE] p-4 flex flex-col justify-between gap-3">
            <div class="text-xs flex flex-col gap-1.5">
              <div><strong class="text-[#767070]">Client:</strong> <span id="modal-client" class="text-[#111111] font-bold block"></span></div>
              <div><strong class="text-[#767070]">Location:</strong> <span id="modal-location" class="text-[#111111] block"></span></div>
              <div><strong class="text-[#767070]">Year:</strong> <span id="modal-year" class="text-[#111111] block"></span></div>
            </div>
            <a id="modal-inquire" href="https://wa.me/9779703881733" target="_blank" rel="noopener noreferrer" class="btn-crimson text-xs py-2 text-center">
              ${icons.whatsapp} <span>Inquire Studio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- BUNDLED MOTION ENGINE (From heron-ai-clone vendor stack: GSAP, ScrollTrigger, SplitText, Lenis) -->
  <script src="vendor/lenis.min.js"></script>
  <script src="vendor/gsap.min.js"></script>
  <script src="vendor/ScrollTrigger.min.js"></script>
  <script src="vendor/SplitText.min.js"></script>

  <script>
    const projects = ${JSON.stringify(projectsData)};

    // Copyright year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Hero Showcase Switcher State (Full-Page Atmospheric Cover Photo + Selected Highlights)
    const heroSlidesData = [
      {
        id: 'mithila-tower',
        img: 'assets/projects/cover_studio_tower.jpg',
        title: 'Studio Cover &mdash; <span class="font-normal text-[#767070]">Conceptual Timber &amp; Steel Study</span>'
      },
      {
        id: 'mithila-tower',
        img: 'assets/projects/mithila_tower.jpg',
        title: 'Mithila Tower &mdash; <span class="font-normal text-[#767070]">Jiwisa Chowk, Malangwa (2024 A.D.)</span>'
      },
      {
        id: 'hyatt-community-hospital',
        img: 'assets/projects/hyatt_hospital_1.jpg',
        title: 'Hyatt Community Hospital &mdash; <span class="font-normal text-[#767070]">Barhathwa, Sarlahi (2025 A.D.)</span>'
      },
      {
        id: 'tulsi-gupta-residence',
        img: 'assets/projects/tulsi_gupta_residence_1.jpg',
        title: 'Residence of Mr. Tulsi Gupta &mdash; <span class="font-normal text-[#767070]">Birgunj, Parsa (2024 A.D.)</span>'
      }
    ];
    let currentHeroIdx = 0;
    let currentHeroId = 'mithila-tower';
    window.currentHeroId = currentHeroId;

    function setHeroSlide(index, ev) {
      if (ev) ev.stopPropagation();
      currentHeroIdx = index;
      const slideData = heroSlidesData[index];
      currentHeroId = slideData.id;
      window.currentHeroId = currentHeroId;

      const bgColor = document.getElementById('heroBgColor');
      if (bgColor) {
        if (window.gsap) {
          gsap.to(bgColor, {
            opacity: 0.15,
            duration: 0.28,
            onComplete: function() {
              bgColor.src = slideData.img;
              gsap.to(bgColor, { opacity: 0.78, duration: 0.65, ease: 'power2.out' });
            }
          });
        } else {
          bgColor.src = slideData.img;
        }
      }

      document.querySelectorAll('.hero-slide-tab').forEach(function(btn, i) {
        btn.classList.toggle('is-active', i === index);
      });

      const titleEl = document.getElementById('heroSlideTitle');
      if (titleEl) titleEl.innerHTML = slideData.title;
    }
    window.setHeroSlide = setHeroSlide;

    // Gentle Hero Background Showcase Cycle
    let heroAutoTimer = setInterval(function() {
      setHeroSlide((currentHeroIdx + 1) % heroSlidesData.length);
    }, 5600);
    const heroSec = document.getElementById('heroSection');
    if (heroSec) {
      heroSec.addEventListener('mouseenter', function() { clearInterval(heroAutoTimer); });
    }

    // Category Filtering with GSAP staggered entrance
    const tabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');
    const projectCountEl = document.getElementById('project-count');

    function applyFilter(cat) {
      tabs.forEach(function(t) {
        t.classList.toggle('active', t.getAttribute('data-category') === cat);
      });

      const shown = [];
      projectCards.forEach(function(card) {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          shown.push(card);
        } else {
          card.style.display = 'none';
        }
      });

      if (projectCountEl) projectCountEl.textContent = shown.length;

      if (window.gsap && shown.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(
          shown,
          { opacity: 0, y: 20, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.035, ease: 'power3.out', clearProps: 'transform,opacity' }
        );
      }
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        applyFilter(tab.getAttribute('data-category'));
      });
    });

    function selectCategoryFilter(cat) {
      applyFilter(cat);
      const sec = document.getElementById('our-works');
      if (sec) {
        if (window.lenisInstance) {
          window.lenisInstance.scrollTo(sec, { offset: -76, duration: 1.0 });
        } else {
          sec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    window.selectCategoryFilter = selectCategoryFilter;

    // Lightbox Modal with GSAP smooth transition
    const lightbox = document.getElementById('lightbox');
    const lightboxCard = document.getElementById('lightboxCard');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalImage = document.getElementById('modal-image');
    const modalDesc = document.getElementById('modal-desc');
    const modalClient = document.getElementById('modal-client');
    const modalLocation = document.getElementById('modal-location');
    const modalYear = document.getElementById('modal-year');
    const modalGallery = document.getElementById('modal-gallery');
    const modalInquire = document.getElementById('modal-inquire');

    function openLightbox(id) {
      const p = projects.find(function(item) { return item.id === id; });
      if (!p) return;

      modalTitle.textContent = p.title;
      modalCategory.textContent = p.categoryLabel;
      modalImage.src = p.image;
      modalImage.alt = p.title + ' architectural render';
      modalDesc.textContent = p.desc;
      modalClient.textContent = p.client;
      modalLocation.textContent = p.location;
      modalYear.textContent = p.year;

      const waMsg = encodeURIComponent("Hello Scale and Spaces, I would like to inquire regarding your project: " + p.title + " (" + p.location + ").");
      modalInquire.href = "https://wa.me/9779703881733?text=" + waMsg;

      modalGallery.innerHTML = '';
      if (p.images && p.images.length > 1) {
        p.images.forEach(function(imgUrl, idx) {
          const thumb = document.createElement('img');
          thumb.src = imgUrl;
          thumb.alt = p.title + ' perspective ' + (idx + 1);
          thumb.style.cssText = 'width:76px;height:50px;object-fit:cover;cursor:pointer;transition:transform 0.2s ease;border:2px solid ' + (imgUrl === p.image ? '#8F0000' : '#DDD8CE') + ';';
          thumb.onclick = function() {
            modalImage.style.opacity = '0.35';
            setTimeout(function() {
              modalImage.src = imgUrl;
              modalImage.style.opacity = '1';
            }, 140);
            modalGallery.querySelectorAll('img').forEach(function(i) { i.style.borderColor = '#DDD8CE'; });
            thumb.style.borderColor = '#8F0000';
          };
          modalGallery.appendChild(thumb);
        });
      }

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lenisInstance) window.lenisInstance.stop();

      if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
        gsap.fromTo(lightboxCard, { opacity: 0, y: 24, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'expo.out', clearProps: 'transform' });
      }
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      if (window.lenisInstance) window.lenisInstance.start();
    }

    function closeLightboxOnBackdrop(e) {
      if (e.target === lightbox) closeLightbox();
    }

    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.closeLightboxOnBackdrop = closeLightboxOnBackdrop;

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });

    // Mobile Drawer
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBackdrop = document.getElementById('mobile-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      mobileBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      mobileBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(function(link) { link.addEventListener('click', closeMobileMenu); });

    // Inquiry Form WhatsApp Forwarder
    function handleInquirySubmit(e) {
      e.preventDefault();
      const name = document.getElementById('client-name').value;
      const phone = document.getElementById('client-phone').value;
      const type = document.getElementById('project-type').value;
      const loc = document.getElementById('project-location').value;
      const msg = document.getElementById('client-message').value;

      const fullMsg = "New Consultation Inquiry:%0A" +
        "- Name: " + encodeURIComponent(name) + "%0A" +
        "- Phone: " + encodeURIComponent(phone) + "%0A" +
        "- Typology: " + encodeURIComponent(type) + "%0A" +
        "- Location: " + encodeURIComponent(loc) + "%0A" +
        "- Brief: " + encodeURIComponent(msg || "None provided");

      const waUrl = "https://wa.me/9779703881733?text=" + fullMsg;
      const feedback = document.getElementById('form-feedback');
      feedback.textContent = "Opening WhatsApp to connect directly with Scale and Spaces...";
      feedback.classList.remove('hidden');

      setTimeout(function() {
        window.open(waUrl, '_blank');
      }, 600);
    }
    window.handleInquirySubmit = handleInquirySubmit;

    // Subtle interactive monochrome-to-color aperture reveal over Hero cover backdrop
    (function initHeroCoverMotion() {
      const heroSec = document.getElementById('heroSection');
      const bgColor = document.getElementById('heroBgColor');
      if (!heroSec || !bgColor) return;
      heroSec.addEventListener('mousemove', function(e) {
        const rect = heroSec.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const pctX = Math.max(25, Math.min(92, ((e.clientX - rect.left) / rect.width) * 100));
        const pctY = Math.max(20, Math.min(80, ((e.clientY - rect.top) / rect.height) * 100));
        bgColor.style.clipPath = 'circle(54% at ' + pctX.toFixed(1) + '% ' + pctY.toFixed(1) + '%)';
      });
    })();

    // =========================================================================
    // POINTER HOVER ENGINE: 2D CANVAS INK TRAIL + MAGNETIC BADGE + WATERCOLOR
    // =========================================================================
    (function initPointerAndWatercolorHover() {
      // 1. Per-card radial watercolor light & shadow depth (--mx / --my)
      document.addEventListener('mousemove', function(e) {
        document.documentElement.classList.add('has-pointer');
        const card = e.target.closest ? e.target.closest('.wc-hover-card') : null;
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.width && rect.height) {
            card.style.setProperty('--mx', (e.clientX - rect.left).toFixed(1) + 'px');
            card.style.setProperty('--my', (e.clientY - rect.top).toFixed(1) + 'px');
          }
        }
      });

      // 2. Kinetic Architectural Plate Stream (Silent Ambient Gallery)
      (function initAtelierImageTrail() {
        const trailStage = document.getElementById('atelierTrailStage');
        const trailLayer = document.getElementById('atelierTrailLayer');
        if (!trailStage || !trailLayer) return;

        const plateUrls = [
          'assets/projects/cover_studio_tower.jpg',
          'assets/projects/cover_studio_tower_bw.jpg',
          'assets/projects/mithila_tower.jpg',
          'assets/art/atelier-architecture-art.jpg',
          'assets/projects/hyatt_hospital_1.jpg',
          'assets/projects/tulsi_gupta_residence_1.jpg',
          'assets/projects/adarsh_city_center_1.jpg',
          'assets/projects/interior_modern_luxury_living.jpg'
        ];
        let plateIdx = 0;
        let lastSpawnX = 0;
        let lastSpawnY = 0;
        let zSeed = 10;
        let activeClones = 0;

        function spawnTrailPlate(x, y, vx, vy) {
          if (activeClones > 14) return;
          const img = document.createElement('img');
          img.src = plateUrls[plateIdx % plateUrls.length];
          img.alt = '';
          plateIdx++;
          zSeed++;
          activeClones++;
          img.className = 'atelier-trail-clone';
          img.style.left = x + 'px';
          img.style.top = y + 'px';
          img.style.zIndex = String(zSeed);
          trailLayer.appendChild(img);

          const rot = (Math.random() - 0.5) * 12;
          const throwX = Math.max(-75, Math.min(75, vx * 0.45));
          const throwY = Math.max(-55, Math.min(55, vy * 0.45));

          if (window.gsap) {
            gsap.timeline({
              onComplete: function() {
                img.remove();
                activeClones = Math.max(0, activeClones - 1);
              }
            })
              .fromTo(img,
                { opacity: 0, scale: 0.72, xPercent: -50, yPercent: -50, x: 0, y: 0, rotation: rot * 0.4 },
                { opacity: 0.96, scale: 1, x: throwX, y: throwY, rotation: rot, duration: 0.36, ease: 'expo.out' }
              )
              .to(img, {
                opacity: 0,
                y: throwY + 85,
                scale: 0.88,
                duration: 0.75,
                ease: 'power2.in'
              }, 1.15);
          } else {
            img.style.transform = 'translate(-50%, -50%) rotate(' + rot + 'deg)';
            setTimeout(function() {
              img.remove();
              activeClones = Math.max(0, activeClones - 1);
            }, 1300);
          }
        }

        trailStage.addEventListener('mousemove', function(e) {
          const rect = trailStage.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const dx = x - lastSpawnX;
          const dy = y - lastSpawnY;
          if (Math.hypot(dx, dy) > 48) {
            spawnTrailPlate(x, y, dx, dy);
            lastSpawnX = x;
            lastSpawnY = y;
          }
        });
      })();

      // 4. Desktop 2D Canvas Pen Velocity Ink Trail + Subtle Nib Follower
      const ring = document.getElementById('cursorRing');
      const dot = document.getElementById('cursorDot');
      const cursorCanvas = document.getElementById('studioCursorCanvas');
      if (!ring || !dot) return;

      const moveRingX = window.gsap ? gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power3.out' }) : function(v) { ring.style.left = v + 'px'; };
      const moveRingY = window.gsap ? gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power3.out' }) : function(v) { ring.style.top = v + 'px'; };
      const moveDotX = window.gsap ? gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' }) : function(v) { dot.style.left = v + 'px'; };
      const moveDotY = window.gsap ? gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' }) : function(v) { dot.style.top = v + 'px'; };

      // 2D Canvas Ink Ribbon Engine (adapted from Heron AI window.__canvasCursor)
      const ctx = cursorCanvas ? cursorCanvas.getContext('2d') : null;
      const penPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const smoothPos = { x: penPos.x, y: penPos.y };
      const inkTrail = [];
      let penVisible = false;

      function sizeCursorCanvas() {
        if (!cursorCanvas || !ctx) return;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        cursorCanvas.width = window.innerWidth * dpr;
        cursorCanvas.height = window.innerHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      if (ctx) {
        sizeCursorCanvas();
        window.addEventListener('resize', sizeCursorCanvas);
        (function renderPenTrail() {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          smoothPos.x += (penPos.x - smoothPos.x) * 0.28;
          smoothPos.y += (penPos.y - smoothPos.y) * 0.28;
          if (penVisible) {
            inkTrail.push({ x: smoothPos.x, y: smoothPos.y });
            if (inkTrail.length > 14) inkTrail.shift();
            if (inkTrail.length > 2) {
              ctx.lineCap = 'round';
              ctx.lineWidth = 1.6;
              for (let j = 1; j < inkTrail.length; j++) {
                const alpha = (j / inkTrail.length) * 0.42;
                ctx.strokeStyle = 'rgba(143, 0, 0, ' + alpha.toFixed(3) + ')';
                ctx.beginPath();
                ctx.moveTo(inkTrail[j - 1].x, inkTrail[j - 1].y);
                ctx.lineTo(inkTrail[j].x, inkTrail[j].y);
                ctx.stroke();
              }
            }
          } else {
            inkTrail.length = 0;
          }
          requestAnimationFrame(renderPenTrail);
        })();
      }

      document.addEventListener('mousemove', function(e) {
        penPos.x = e.clientX;
        penPos.y = e.clientY;
        penVisible = true;
        ring.classList.add('is-visible');
        dot.classList.add('is-visible');
        moveRingX(e.clientX);
        moveRingY(e.clientY);
        moveDotX(e.clientX);
        moveDotY(e.clientY);

        const target = e.target;
        ring.classList.remove('is-card-hover', 'is-interactive-hover');
        if (!target || !target.closest) return;

        if (target.closest('.project-card, .team-card')) {
          ring.classList.add('is-card-hover');
        } else if (target.closest('a, button, .discipline-card, .filter-tab')) {
          ring.classList.add('is-interactive-hover');
        }
      });

      document.addEventListener('mouseleave', function() {
        penVisible = false;
        ring.classList.remove('is-visible');
        dot.classList.remove('is-visible');
      });
    })();

    // =========================================================================
    // ARCHITECTURAL GSAP + LENIS + SPLITTEXT + WATERCOLOR MOTION ENGINE
    // =========================================================================
    (function initStudioMotion() {
      const preloader = document.getElementById('studioPreloader');
      const preHrFill = document.getElementById('preHrFill');
      const preloaderPct = document.getElementById('preloaderPct');
      const preRulerV = document.getElementById('preRulerV');
      const mainEl = document.querySelector('main');
      let preloaderDismissed = false;

      if (preloader && preRulerV) {
        preloader.addEventListener('mousemove', function(e) {
          preRulerV.style.left = e.clientX + 'px';
        });
      }

      // Draw Full-Page Architectural Elevation & Landscape Contour Artwork using real path lengths
      if (window.gsap) {
        const sketchPaths = document.querySelectorAll('.preloader-sketch-path');
        if (sketchPaths.length) {
          sketchPaths.forEach(function(p) {
            let len = 800;
            try { len = Math.ceil(p.getTotalLength()) || 800; } catch (err) {}
            p.style.strokeDasharray = String(len);
            p.style.strokeDashoffset = String(len);
          });
          gsap.to(sketchPaths, {
            strokeDashoffset: 0,
            duration: 0.68,
            stagger: 0.014,
            ease: 'power2.out'
          });
        }
        const pctCounter = { val: 0 };
        gsap.to(pctCounter, {
          val: 100,
          duration: 0.9,
          ease: 'power2.out',
          onUpdate: function() {
            if (preloaderPct) preloaderPct.textContent = Math.round(pctCounter.val) + '%';
          }
        });
        if (preHrFill) {
          gsap.to(preHrFill, { scaleX: 1, duration: 0.9, ease: 'power2.out' });
        }
      }

      function dismissPreloader() {
        if (!preloader || preloaderDismissed) return;
        preloaderDismissed = true;
        if (preloaderPct) preloaderPct.textContent = '100%';
        if (window.gsap) {
          gsap.to(preHrFill, { scaleX: 1, duration: 0.25, ease: 'power2.out' });
          gsap.to(preloader, {
            yPercent: -100,
            duration: 0.72,
            delay: 0.35,
            ease: 'expo.inOut',
            onComplete: function() {
              preloader.style.display = 'none';
            }
          });
          if (mainEl) {
            gsap.fromTo(mainEl,
              { clipPath: 'inset(4% 2.5% 4% 2.5%)' },
              { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85, delay: 0.42, ease: 'expo.out', clearProps: 'clipPath' }
            );
          }
        } else {
          preloader.style.display = 'none';
        }
      }

      // Guarantee preloader lets full-page elevation art draw cleanly without ever stalling
      const safetyTimer = setTimeout(dismissPreloader, 1350);
      window.addEventListener('load', function() {
        clearTimeout(safetyTimer);
        setTimeout(dismissPreloader, 750);
      });

      if (!window.gsap) {
        if (preloader) preloader.style.display = 'none';
        return;
      }

      if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      if (window.SplitText) gsap.registerPlugin(SplitText);

      // 1. Initialize Lenis Smooth Inertia Scrolling
      if (window.Lenis) {
        const lenis = new Lenis({
          duration: 1.15,
          easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
          smoothWheel: true,
          wheelMultiplier: 0.95
        });
        window.lenisInstance = lenis;

        if (window.ScrollTrigger) {
          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add(function(time) {
            lenis.raf(time * 1000);
          });
          gsap.ticker.lagSmoothing(0);
        }

        // Anchor smooth scrolling via Lenis
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
          anchor.addEventListener('click', function(e) {
            const href = anchor.getAttribute('href');
            if (href && href.length > 1) {
              const target = document.querySelector(href);
              if (target) {
                e.preventDefault();
                lenis.scrollTo(target, { offset: -76, duration: 1.1 });
              }
            }
          });
        });
      }

      // 2. Scroll Progress Line under Sticky Navbar
      const navProg = document.getElementById('navProgress');
      if (navProg && window.ScrollTrigger) {
        gsap.to(navProg, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.2
          }
        });
      }

      // 3. Hero SplitText Editorial Entrance & Stagger
      const heroHeadline = document.getElementById('heroHeadline');
      if (heroHeadline && window.SplitText) {
        try {
          const split = new SplitText(heroHeadline, { type: 'lines,words' });
          gsap.from(split.words, {
            yPercent: 105,
            opacity: 0,
            duration: 0.85,
            stagger: 0.06,
            ease: 'expo.out',
            delay: 0.9,
            clearProps: 'transform,opacity'
          });
        } catch (err) {}
      }

      gsap.from('.hero-stagger', {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.92,
        clearProps: 'transform,opacity'
      });

      // 4. Hero B&W-to-Color Scroll Transition + Watercolor Ink Reveal & Footer Wordmark
      if (window.ScrollTrigger) {
        const bgColor = document.getElementById('heroBgColor');
        const sunHalo = document.getElementById('heroSunHalo');
        if (bgColor) {
          gsap.to(bgColor, {
            yPercent: 12,
            scale: 1.08,
            opacity: 0.2,
            ease: 'none',
            scrollTrigger: {
              trigger: '#heroSection',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.35
            }
          });
        }
        if (sunHalo) {
          gsap.to(sunHalo, {
            yPercent: 55,
            scale: 1.35,
            ease: 'none',
            scrollTrigger: {
              trigger: '#heroSection',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.45
            }
          });
        }

        gsap.utils.toArray('.wc-ink-plate').forEach(function(el) {
          gsap.fromTo(
            el,
            { clipPath: 'inset(12% 0% 12% 0%)', opacity: 0.7 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: 1.05,
              ease: 'expo.out',
              clearProps: 'clipPath,opacity',
              scrollTrigger: { trigger: el, start: 'top 86%', once: true }
            }
          );
        });

        gsap.utils.toArray('.reveal-head').forEach(function(el) {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          });
        });

        gsap.utils.toArray('.reveal-card').forEach(function(el) {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          });
        });

        gsap.from('.scope-grid .scope-list-item', {
          x: -18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: '.scope-grid', start: 'top 85%', once: true }
        });

        gsap.from('.team-grid .team-card', {
          y: 28,
          scale: 0.96,
          opacity: 0,
          duration: 0.65,
          stagger: 0.055,
          ease: 'expo.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: '.team-grid', start: 'top 85%', once: true }
        });

        ScrollTrigger.batch('.project-card', {
          start: 'top 90%',
          once: true,
          onEnter: function(batch) {
            gsap.from(batch, {
              y: 28,
              opacity: 0,
              duration: 0.65,
              stagger: 0.07,
              ease: 'power3.out',
              clearProps: 'transform,opacity'
            });
          }
        });
      }
    })();
  </script>
</body>
</html>
`;

const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Not Found | Scale and Spaces Pvt. Ltd.</title>
  <meta name="robots" content="noindex" />
  <style>
    body { background: #F0EFEA; color: #111111; font-family: Calibri, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 2rem; text-align: center; }
    .card { background: #FFFFFF; border: 1px solid #DDD8CE; padding: 3rem 2rem; max-width: 520px; width: 100%; }
    h1 { color: #8F0000; font-family: Georgia, serif; font-size: 3rem; margin: 0 0 0.5rem; }
    p { color: #767070; margin-bottom: 1.5rem; }
    a { display: inline-block; background: #8F0000; color: #FFFFFF; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 0.85rem; padding: 0.75rem 1.5rem; }
    a:hover { background: #6E0000; }
  </style>
</head>
<body>
  <div class="card">
    <h1>404</h1>
    <p>The page or resource you requested could not be found on Scale and Spaces Pvt. Ltd.</p>
    <a href="./">Return to Portfolio Home</a>
  </div>
</body>
</html>
`;

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://madex-source.github.io/madex/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://madex-source.github.io/madex/sitemap.xml
`;

async function run() {
  const twNodeUrl = pathToFileURL('C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website/node_modules/@tailwindcss/node/dist/index.mjs').href;
  const twOxideUrl = pathToFileURL('C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website/node_modules/@tailwindcss/oxide/index.js').href;

  const { compile, optimize } = await import(twNodeUrl);
  const { Scanner } = await import(twOxideUrl);

  const compiler = await compile('@import "tailwindcss";\n' + customCss, {
    base: 'C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website',
    onDependency: () => {}
  });

  const tempDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'twscan-'));
  const tempHtml = path.join(tempDir, 'scan.html');
  fs.writeFileSync(tempHtml, htmlBodyTemplate, 'utf8');

  const scanner = new Scanner({
    sources: [{ base: tempDir, pattern: '*.html', negated: false }]
  });
  const candidates = scanner.scan();
  const builtCss = compiler.build(candidates);
  const optimized = optimize(builtCss, { minify: true });

  fs.rmSync(tempDir, { recursive: true, force: true });

  const finalHtml = htmlBodyTemplate.replace('/*__COMPILED_CSS__*/', optimized.code);

  const baseDirs = [
    __dirname,
    path.join('C:', 'Users', 'maste', 'Desktop', 'Website', 'Scale-and-Spaces-Website'),
    path.join('C:', 'Users', 'maste', '.gemini', 'antigravity', 'scratch', 'scale-and-spaces-website')
  ];

  baseDirs.forEach(dir => {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), finalHtml, 'utf8');
    fs.writeFileSync(path.join(dir, 'standalone_index.html'), finalHtml, 'utf8');
    fs.writeFileSync(path.join(dir, '404.html'), notFoundHtml, 'utf8');
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemapXml, 'utf8');
    fs.writeFileSync(path.join(dir, 'robots.txt'), robotsTxt, 'utf8');

    const pubDir = path.join(dir, 'public');
    if (fs.existsSync(pubDir)) {
      fs.writeFileSync(path.join(pubDir, '404.html'), notFoundHtml, 'utf8');
      fs.writeFileSync(path.join(pubDir, 'sitemap.xml'), sitemapXml, 'utf8');
      fs.writeFileSync(path.join(pubDir, 'robots.txt'), robotsTxt, 'utf8');
    }

    console.log('Successfully updated directory (' + finalHtml.length + ' bytes, CSS: ' + optimized.code.length + ' bytes): ' + dir);
  });
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
