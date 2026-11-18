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

// ALL 10 Team Members with profile credentials & downloadable dossier metadata
const teamData = [
  {
    name: 'YATEENDRA K LABH',
    role: 'Director/Architect',
    image: 'assets/team/team-yateendra.jpg',
    office: 'Kathmandu & Birgunj Studios',
    experience: 'Practice Leadership',
    qualification: 'Architect & Studio Director',
    specialization: 'Masterplanning, Commercial Complexes, Civic Identity & Conceptual Architecture',
    bio: 'Leads architectural vision, urban masterplanning, civic competitions, and multidisciplinary studio oversight across Kathmandu Valley and Terai Nepal.',
    keyProjects: 'Mithila Tower (Malangwa), Jeetpur Simara Civic Emblem (1st Prize Winner), Shavdaahgriham Ranighat Masterplan',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Architect Profile & Dossier',
    cvUrl: ''
  },
  {
    name: 'SUPRIYA THAPA',
    role: 'Principal Architect',
    image: 'assets/team/team-supriya.jpg',
    office: 'Tokha-6, Kathmandu',
    experience: 'Principal Lead',
    qualification: 'Principal Architect',
    specialization: 'Residential Villas, Healthcare Facilities, Daylight Modeling & Hospitality Interiors',
    bio: 'Directs architectural design development, human-centric residential zoning, hospital layouts, and permit-ready architectural documentation.',
    keyProjects: 'Hyatt Community Hospital (Sarlahi), Residence of Mr. Tulsi Gupta, Residence of Mrs. Uma Shah',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Principal Architect Profile',
    cvUrl: ''
  },
  {
    name: 'SHEETAL GUPTA',
    role: 'Architect',
    image: 'assets/team/team-sheetal.jpg',
    office: 'Birgunj & Kathmandu Studios',
    experience: 'Architectural Design',
    qualification: 'Registered Practice Architect',
    specialization: 'Residential Elevation Design, Working Drawings & Spatial Planning',
    bio: 'Translates client lifestyle briefs into clear functional plans, facade compositions, and coordinated municipal working drawings.',
    keyProjects: 'Private Residences & Institutional Campuses across Parsa, Chitwan, and Kathmandu',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Architect Portfolio Sheet',
    cvUrl: ''
  },
  {
    name: 'ASHMIN R BHATTARAI',
    role: 'Architect',
    image: 'assets/team/team-ashmin.jpg',
    office: 'Tokha-6, Kathmandu',
    experience: 'Architectural Design & 3D',
    qualification: 'Project Architect',
    specialization: 'Institutional Buildings, Religious Complexes & 3D Visualization',
    bio: 'Specializes in cultural and institutional architecture, 3D massing studies, and exterior contextual rendering.',
    keyProjects: 'ISKCON Temple Complex (Birgunj), Kalikamai Temple Complex, Educational & Civic Works',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Architect Bio & Works',
    cvUrl: ''
  },
  {
    name: 'SUNIL CHAURASIYA',
    role: 'Structural Engineer',
    image: 'assets/team/team-sunil.jpg',
    office: 'Birgunj & Kathmandu Studios',
    experience: 'Structural Engineering',
    qualification: 'Structural Engineer',
    specialization: 'NBC Seismic Analysis, RCC/Steel Framing & Foundation Detailing',
    bio: 'Leads structural finite-element modeling, Nepal National Building Code seismic design checks, and bar-bending reinforcement details.',
    keyProjects: 'Multi-Story Commercial Complexes, Hyatt Hospital Framing & Residential Seismic Detailing',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Structural Engineering Profile',
    cvUrl: ''
  },
  {
    name: 'CHETAN K SARRAF',
    role: 'Interior Designer',
    image: 'assets/team/team-chetan.jpg',
    office: 'Birgunj-12, Parsa',
    experience: 'Interior Architecture & BOQ',
    qualification: 'Civil & Interior Design Lead',
    specialization: 'Bespoke Residential & Executive Interiors, Custom Joinery & 3D Renders',
    bio: 'Combines civil engineering precision with warm materiality, lighting hierarchies, modular joinery detailing, and budget-aligned BOQ estimation.',
    keyProjects: 'Corporate & Residence Interiors in Birgunj & Kathmandu (Modern Luxury Living, Bidur Khatiwada Residence)',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Interior Design Dossier',
    cvUrl: ''
  },
  {
    name: 'ROHAN K PASWAN',
    role: 'Sanitary Designer',
    image: 'assets/team/team-rohan.jpg',
    office: 'Birgunj & Kathmandu Studios',
    experience: 'Plumbing & Sanitary MEP',
    qualification: 'Sanitary Systems Designer',
    specialization: 'Water Supply Risers, Storm Drainage, Septic & Healthcare MEP',
    bio: 'Designs reliable domestic water supply networks, rainwater harvesting, waste routing, and chamber inspection schedules.',
    keyProjects: 'Commercial Towers, Residential Utilities & Healthcare Sanitary Infrastructures',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Sanitary Designer Profile',
    cvUrl: ''
  },
  {
    name: 'BISHAL MANANDAR',
    role: 'Electrical Engineer',
    image: 'assets/team/team-bishal.jpg',
    office: 'Tokha-6, Kathmandu',
    experience: 'Electrical & Lighting Systems',
    qualification: 'Electrical Engineer',
    specialization: 'Power Distribution, Load Calculations, Panel Schedules & Earthing',
    bio: 'Prepares safe residential and commercial electrical schematics, lighting circuit layouts, backup power zoning, and safety grounding details.',
    keyProjects: 'BYD Showroom Illumination, Commercial Hubs, Hospitals & Apartments',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Electrical Engineer Profile',
    cvUrl: ''
  },
  {
    name: 'MEGNATH GUPTA',
    role: 'Project Manager',
    image: 'assets/team/team-megnath.jpg',
    office: 'Kathmandu & Birgunj Studios',
    experience: 'Project Scheduling & Procurement',
    qualification: 'Project Management Lead',
    specialization: 'Milestone Scheduling, Tendering, Contractor Coordination & Cost Control',
    bio: 'Coordinates multi-team consultant schedules, BOQ tender packaging, client approvals, and phased construction timelines.',
    keyProjects: 'Turnkey Commercial, Institutional & Mixed-Use Deliveries across Nepal',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Project Manager Resume',
    cvUrl: ''
  },
  {
    name: 'WASIM ALAM',
    role: 'Site Engineer',
    image: 'assets/team/team-wasim.jpg',
    office: 'Birgunj-12, Parsa',
    experience: 'Site Supervision & QA',
    qualification: 'Site Engineer',
    specialization: 'Layout Execution, Rebar Checking, Quality Assurance & Site Billing',
    bio: 'Oversees daily site layout verification, concrete pouring inspections, bar-bending compliance, and measurement billing on active sites.',
    keyProjects: 'Field Supervision across Birgunj, Parsa, Sarlahi, and Kathmandu Valley',
    email: 'studio@scaleandspaces.com',
    cvLabel: 'Site Engineer Profile',
    cvUrl: ''
  }
];

const scopeItems = [
  { title: 'Topographical Survey', note: 'Total-station site & contour mapping' },
  { title: 'Masterplanning', note: 'Land zoning, circulation & solar study' },
  { title: 'Architectural Plans', note: 'Concept to municipal permit sets' },
  { title: '3D Visualization', note: 'Photorealistic renders & walkthroughs' },
  { title: 'Structural Design', note: 'NBC seismic analysis & detailing' },
  { title: 'Electrical & Lighting', note: 'Load schedules, power & lighting plans' },
  { title: 'Sanitary & Plumbing', note: 'Water supply, drainage & chambers' },
  { title: 'Cost Estimation', note: 'Itemized material & civil costing' },
  { title: 'BOQ & Tendering', note: 'Contractor-ready bill of quantities' },
  { title: 'Site Supervision', note: 'Procurement & construction oversight' }
];

const reviewsData = [
  {
    author: 'Commercial Tower Commission',
    rating: 5,
    city: 'Malangwa, Sarlahi',
    scope: 'Architecture & Structural Design',
    quote: 'Scale and Spaces translated a complex commercial brief into a standout landmark with clear retail flow, crisp elevations, and coordinated structural drawings.',
    date: '2024'
  },
  {
    author: 'Private Residence Clients',
    rating: 5,
    city: 'Birgunj & Kathmandu',
    scope: 'Full Design, 3D & Interiors',
    quote: 'From initial floor plans and 3D views to structural detailing and interior joinery, the studio maintained clarity, daylight quality, and budget discipline throughout.',
    date: '2024'
  },
  {
    author: 'Civic & Institutional Works',
    rating: 5,
    city: 'Sarlahi & Parsa',
    scope: 'Masterplanning & Public Works',
    quote: 'Their contextual approach balanced serene public circulation, indigenous Khapada heritage detailing, and seismic safety tailored cleanly to the Terai climate.',
    date: '2025'
  }
];

const faqsData = [
  {
    category: 'Design Scope',
    question: 'What architectural and engineering services does Scale and Spaces provide?',
    answer: 'We deliver complete end-to-end services under one roof: topographical site survey, masterplanning, conceptual & municipal architectural plans, photorealistic 3D views/walkthroughs, Nepal National Building Code (NBC) seismic structural design, electrical & sanitary MEP drawings, detailed cost estimation & BOQ, and construction site supervision.'
  },
  {
    category: 'Seismic & Permits',
    question: 'Are your structural drawings compliant with Nepal municipal permit requirements?',
    answer: 'Yes. Every building design is engineered against the latest Nepal National Building Code (NBC) seismic provisions and tailored to local Metropolitan or Rural Municipality setbacks, FAR, ground coverage, and structural check documentation across Kathmandu Valley and Terai cities.'
  },
  {
    category: 'Timelines',
    question: 'How long does it take to prepare conceptual plans, 3D views, and complete working drawings?',
    answer: 'For standard residences, initial spatial concepts take 5 to 7 working days after site measurement. Once layouts are finalized, photorealistic 3D views and integrated architectural, structural, electrical, and sanitary permit/construction sets typically complete within 2 to 4 weeks depending on scale.'
  },
  {
    category: 'Visualization',
    question: 'Can we preview 3D exteriors and interior joinery before site construction starts?',
    answer: 'Yes. We prepare photorealistic exterior perspectives, lighting mood renders, material boards, and 3D walkthrough studies so clients can finalize facades, tile/timber palettes, ceiling coves, and wardrobe layouts before contractor execution begins.'
  },
  {
    category: 'Cost Control',
    question: 'How do your Detailed Estimate and Bill of Quantities (BOQ) prevent cost overruns?',
    answer: 'Our itemized quantity takeoff covers excavation, reinforcement steel, concrete grades, brickwork, finishes, and MEP fixtures prior to tendering. This enables transparent contractor comparison and minimizes mid-project scope surprises.'
  },
  {
    category: 'Consultation',
    question: 'How do I start a project consultation from Kathmandu, Birgunj, or abroad?',
    answer: 'Share your plot location, land area, and requirements via WhatsApp (+977-9703881733), email (studio@scaleandspaces.com), or the inquiry form below. Both in-person office visits in Tokha-6 (Kathmandu) & Birgunj-12 (Parsa) and remote online meetings for NRNs are supported.'
  }
];

const clientLogos = [
  {
    img: 'assets/logos/client-logo-1.jpg',
    name: 'Amico Books & Stationery',
    alt: 'Amico Books & Stationery logo',
    desc: 'Educational publications, academic books, and institutional stationery enterprise.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-2.jpg',
    name: 'Aarnav Nirman Sewa',
    alt: 'Aarnav Nirman Sewa logo',
    desc: 'Civil engineering contracting and commercial infrastructure execution partner.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-3.jpg',
    name: 'NITCO Construction Laboratory',
    alt: 'NITCO Construction Laboratory logo',
    desc: 'Construction materials testing, soil investigation, and quality assurance laboratory.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-4.jpg',
    name: 'Planetably Energy Pvt. Ltd.',
    alt: 'Planetably Energy Pvt. Ltd. logo',
    desc: 'Clean energy engineering and sustainable power development venture.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-5.jpg',
    name: 'Jupiter Power',
    alt: 'Jupiter Power logo',
    desc: 'Electrical power generation and utility infrastructure engineering partner.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-6.jpg',
    name: 'Lions Club of Kathmandu Sarang',
    alt: 'Lions Club of Kathmandu Sarang logo',
    desc: 'Community welfare, humanitarian service, and civic leadership organization.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-7.jpg',
    name: 'Global Career Care Pvt. Ltd.',
    alt: 'Global Career Care Pvt. Ltd. logo',
    desc: 'International academic counseling and global career advisory institution.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-8.jpg',
    name: 'Viewport',
    alt: 'Viewport logo',
    desc: 'Architectural visualization, creative studio production, and spatial media collaborator.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-9.jpg',
    name: 'Shristi Engineering Consultancy',
    alt: 'Shristi Engineering Consultancy logo',
    desc: 'Multidisciplinary civil and structural engineering technical consultancy.',
    url: ''
  },
  {
    img: 'assets/logos/client-logo-10.jpg',
    name: 'Abhiyanta Multipurpose Cooperative',
    alt: 'Abhiyanta Multipurpose Cooperative logo',
    desc: 'Engineer-led multipurpose financial cooperative and capital institution.',
    url: ''
  },
  {
    img: 'assets/logos/partner-kendrabindu.gif',
    name: 'Kendrabindu.com',
    alt: 'Kendrabindu Online Media logo',
    desc: 'National digital news portal by Kendrabindu Online Media Pvt. Ltd. (Kathmandu) covering current affairs, economy, and society.',
    url: 'https://kendrabindu.com'
  },
  {
    img: 'assets/logos/partner-nrb.jpg',
    name: 'Nepal Rastra Bank, Birgunj',
    alt: 'Nepal Rastra Bank Birgunj crest',
    desc: 'Regional branch of Nepal’s central bank in Adarshnagar, Birgunj overseeing provincial currency management and banking operations.',
    url: 'https://www.nrb.org.np'
  },
  {
    img: 'assets/logos/partner-laminar.svg',
    name: 'Laminar Tiles',
    alt: 'Laminar Tiles logo',
    desc: '100% fully vitrified porcelain tiles manufactured in Gulariya, Bardiya by Lumbini Ceramics Ltd. with ultra-low water absorption.',
    url: 'https://laminartiles.com'
  },
  {
    img: 'assets/logos/partner-ats-tiles.svg',
    name: 'ATS Tiles',
    alt: 'ATS Tiles wordmark',
    desc: 'Domestic floor and heavy-duty parking porcelain tile brand manufactured at Pashupati Ceramics Pvt. Ltd., Simara SEZ, Bara.',
    url: ''
  },
  {
    img: 'assets/logos/partner-isha.jpg',
    name: 'Isha Build Mart, Birgunj',
    alt: 'Isha Build Mart Pvt. Ltd. logo',
    desc: 'One-stop building material showroom on Link Road, Birgunj supplying tiles, sanitary ware, marble, granite, and fixtures.',
    url: 'https://www.ishabuildmart.com'
  },
  {
    img: 'assets/logos/partner-kajaria.png',
    name: 'Kajaria Tiles',
    alt: 'Kajaria Ramesh Tiles Ltd. logo',
    desc: 'Kajaria Ramesh Tiles Ltd., Nepal’s largest ceramic and vitrified tile plant in Nawalparasi formed with Ramesh Corp.',
    url: 'https://kajariaramesh.com'
  },
  {
    img: 'assets/logos/partner-merino.png',
    name: 'Merino Laminates',
    alt: 'Merino Laminates logo',
    desc: 'Global interior surfaces leader manufacturing decorative high-pressure laminates, plywood, and architectural panel systems.',
    url: 'https://www.merinolaminates.com'
  }
];

const articlesData = [
  {
    heading: 'Seismic-Resilient Residence Design Under Nepal National Building Code',
    image: 'assets/projects/prakash_amatya_residence.jpg',
    desc: 'How integrated architectural grid planning, balanced shear stiffness, and NBC ductile detailing safeguard modern reinforced-concrete homes across Kathmandu Valley and the Terai belt while streamlining municipal building permit approvals.',
    link: 'https://bishwokc.com.np/blog/earthquake-resistant-house-design-nepal',
    category: 'Structural & NBC',
    date: 'Studio Note · 2026'
  },
  {
    heading: 'Passive Cooling & Solar Orientation for Terai Homes in Birgunj',
    image: 'assets/projects/ashok_shah_residence.jpg',
    desc: 'Designing deep cantilevered verandas, shaded recessed fenestration, stack-effect stairwells, and high-albedo terrace roofing to reduce peak summer heat gain across Parsa, Bara, and Madhesh Province residences.',
    link: '?category=Residences#projects',
    category: 'Climate Architecture',
    date: 'Studio Note · 2026'
  },
  {
    heading: 'Mixed-Use Commercial Facade Economics: From 3D Concept to BOQ',
    image: 'assets/projects/adarsh_city_center_1.jpg',
    desc: 'Aligning street-facing curtain glazing, ACP cladding modules, clear structural column bays, and itemized Bills of Quantities before tendering so commercial developments stay visually sharp and financially predictable.',
    link: '?category=Commercial#projects',
    category: 'Commercial Practice',
    date: 'Studio Note · 2026'
  },
  {
    heading: 'Specifying Durable Vitrified Tiles, Laminates & Joinery Finishes',
    image: 'assets/projects/interior_modern_luxury_living.jpg',
    desc: 'A practical material specification guide comparing water-absorption grades in full-body vitrified tiles, high-pressure architectural laminates, acoustic ceilings, and warm layered LED coves for timeless interior spaces.',
    link: '?category=Interior#projects',
    category: 'Interior Materials',
    date: 'Studio Note · 2026'
  }
];

const officeLocations = [
  {
    id: 'kathmandu',
    label: 'Head Office · Kathmandu',
    name: 'Scale and Spaces Pvt. Ltd.',
    address: 'Dhapasi, Tokha, Kathmandu 44600, Nepal',
    plusCode: 'P8XH+53 Tokha, Bagmati Province',
    rating: '5.0',
    reviews: '14 Google reviews',
    mapsUrl: 'https://www.google.com/maps/place/Scale+and+Spaces+Pvt.+Ltd./@27.7479239,85.3277453,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19db5ebfeb59:0xf9aa29c9f7a522d1!8m2!3d27.7479239!4d85.3277453!16s%2Fg%2F11n42vm0g1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=27.7479239,85.3277453',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.007200889597!2d85.32774529999999!3d27.7479239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19db5ebfeb59%3A0xf9aa29c9f7a522d1!2sScale%20and%20Spaces%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1795012377222!5m2!1sen!2snp'
  },
  {
    id: 'birgunj',
    label: 'Branch Office · Birgunj',
    name: 'Scale and Spaces Pvt. Ltd., Birgunj Branch',
    address: 'Main Road, In front of Consulate General of India, Birgunj 44300',
    plusCode: '2V9J+MQ Birgunj, Madhesh Province',
    rating: '5.0',
    reviews: '1 Google review',
    mapsUrl: 'https://www.google.com/maps/place/Scale+and+Spaces+Pvt.+Ltd.,+Birgunj+Branch/@27.0192172,84.8819668,17z/data=!3m1!4b1!4m6!3m5!1s0x39935559a04e77ab:0xa2012fb3b7b03a56!8m2!3d27.0192172!4d84.8819668!16s%2Fg%2F11zy90tk02',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=27.0192172,84.8819668',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.346424316962!2d84.88196680000001!3d27.0192172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935559a04e77ab%3A0xa2012fb3b7b03a56!2sScale%20and%20Spaces%20Pvt.%20Ltd.%2C%20Birgunj%20Branch!5e0!3m2!1sen!2snp!4v1795012555091!5m2!1sen!2snp'
  }
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Scale and Spaces Private Limited",
  "alternateName": "Scale and Spaces Pvt. Ltd.",
  "url": "https://scaleandspaces.com.np/",
  "logo": "https://scaleandspaces.com.np/assets/logo.jpg",
  "image": [
    "https://scaleandspaces.com.np/assets/projects/cover_studio_tower.jpg",
    "https://scaleandspaces.com.np/assets/projects/mithila_tower.jpg"
  ],
  "description": "Trusted Architects & Interior Designers in Kathmandu, Birgunj & Nepal. 3D renders, NBC seismic plans & turnkey interiors by Scale and Spaces.",
  "slogan": "Designing Spaces, Defining Lifestyles!",
  "email": "studio@scaleandspaces.com",
  "telephone": "+977-9703881733",
  "priceRange": "$$",
  "address": [
    {
      "@type": "PostalAddress",
      "name": "Head Office - Kathmandu",
      "streetAddress": "Dhapasi, Tokha-6",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati Province",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    {
      "@type": "PostalAddress",
      "name": "Branch Office - Birgunj",
      "streetAddress": "Main Road, In front of Consulate General of India",
      "addressLocality": "Birgunj",
      "addressRegion": "Madhesh Province",
      "postalCode": "44300",
      "addressCountry": "NP"
    }
  ],
  "hasMap": [
    "https://www.google.com/maps/place/Scale+and+Spaces+Pvt.+Ltd./@27.7479239,85.3277453,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19db5ebfeb59:0xf9aa29c9f7a522d1!8m2!3d27.7479239!4d85.3277453!16s%2Fg%2F11n42vm0g1",
    "https://www.google.com/maps/place/Scale+and+Spaces+Pvt.+Ltd.,+Birgunj+Branch/@27.0192172,84.8819668,17z/data=!3m1!4b1!4m6!3m5!1s0x39935559a04e77ab:0xa2012fb3b7b03a56!8m2!3d27.0192172!4d84.8819668!16s%2Fg%2F11zy90tk02"
  ],
  "areaServed": ["Nepal", "Kathmandu", "Birgunj", "Parsa", "Sarlahi", "Bara"],
  "knowsAbout": [
    "Architect in Nepal",
    "Best Architect in Nepal",
    "Architect in Kathmandu",
    "Architect in Birgunj",
    "Interior Designer in Nepal",
    "Best Interior Designer in Nepal",
    "Interior Designer in Kathmandu",
    "Interior Designer in Birgunj",
    "Structural & Seismic Engineering"
  ],
  "serviceType": [
    "Architecture",
    "Civil & Structural Engineering",
    "Interior Design",
    "Landscape Masterplanning",
    "Topographical Survey",
    "BOQ & Construction Supervision"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Architectural & Engineering Services",
    "itemListElement": scopeItems.map(function(s) {
      return {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.note
        }
      };
    })
  }
};

function animatedCompanyLogoSvg(maskId, opts) {
  const o = opts || {};
  const cls = o.className || 'ss-logo-draw-svg';
  const fillColor = o.fillColor || '#111111';
  const traceColor = o.traceColor || '#8F0000';
  const guideOpacity = o.guideOpacity != null ? o.guideOpacity : '0.16';
  const dur = o.dur || '1.15s';
  const loopAttr = o.loop ? 'indefinite' : '1';
  const fillAttr = o.loop ? '' : ' fill="freeze"';
  const vals = o.loop ? '100;0;0' : '100;0';
  const keys = o.loop ? '0;0.74;1' : '0;1';
  const splines = o.loop ? '0.45 0 0.55 1;0 0 1 1' : '0.45 0 0.55 1';
  return `<svg class="${cls}" viewBox="120 180 850 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scale and Spaces geometric logo animation">
    <defs>
      <mask id="${maskId}" maskUnits="userSpaceOnUse" x="100" y="160" width="900" height="680">
        <rect x="100" y="160" width="900" height="680" fill="#000000"/>
        <path class="ss-logo-mask-path" d="M570 348 L185 348 L406 738 L686 255 L909 640 L520 640"
              pathLength="100" fill="none" stroke="#ffffff" stroke-width="58"
              stroke-linejoin="miter" stroke-miterlimit="10" stroke-linecap="butt"
              stroke-dasharray="100" stroke-dashoffset="100">
          <animate class="ss-logo-smil-anim" attributeName="stroke-dashoffset"
                   values="${vals}" keyTimes="${keys}"
                   calcMode="spline" keySplines="${splines}"
                   dur="${dur}" repeatCount="${loopAttr}"${fillAttr}/>
        </path>
      </mask>
    </defs>
    <g>
      <path fill="none" stroke="${traceColor}" stroke-opacity="${guideOpacity}" stroke-width="2.5" stroke-dasharray="10 8"
            d="M686 233 L407 712 L202 360 L565 358 L576 338 L164 338 L405 756 L685 276 L890 628 L528 630 L516 650 L928 651 Z"/>
      <path fill="${fillColor}" mask="url(#${maskId})"
            d="M686 233 L407 712 L202 360 L565 358 L576 338 L164 338 L405 756 L685 276 L890 628 L528 630 L516 650 L928 651 Z"/>
      <path class="ss-logo-pen-trace" d="M570 348 L185 348 L406 738 L686 255 L909 640 L520 640"
            pathLength="100" fill="none" stroke="${traceColor}" stroke-opacity="0.72" stroke-width="4"
            stroke-linejoin="miter" stroke-miterlimit="10" stroke-linecap="butt"
            stroke-dasharray="100" stroke-dashoffset="100">
        <animate class="ss-logo-smil-anim" attributeName="stroke-dashoffset"
                 values="${vals}" keyTimes="${keys}"
                 calcMode="spline" keySplines="${splines}"
                 dur="${dur}" repeatCount="${loopAttr}"${fillAttr}/>
      </path>
    </g>
  </svg>`;
}

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
      overflow-x: clip;
    }

    html.modal-open,
    html.modal-open body {
      overflow: hidden;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
      overflow-x: clip;
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

    /* Architectural Preloader Curtain (Solid Non-Transparent Alabaster Paper Wash & Company Logo Draw) */
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
    .ss-preloader-emblem {
      position: relative;
      z-index: 4;
      width: min(260px, 60vw);
      height: auto;
      pointer-events: none;
    }
    .ss-transition-veil {
      position: fixed;
      inset: 0;
      z-index: 9600;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background-color: #F0EFEA;
      background-image: url('assets/art/watercolor-paper-wash.jpg');
      background-size: cover;
      background-position: center;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), visibility 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .ss-transition-veil.is-active {
      opacity: 1;
      visibility: visible;
    }
    .ss-transition-veil.is-blocking {
      pointer-events: auto;
    }
    .ss-transition-logo-svg {
      width: min(220px, 50vw);
      height: auto;
      display: block;
    }
    .ss-transition-label {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 10.5px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--crimson);
      font-weight: 700;
      background: #F4F3EE;
      padding: 0.2rem 0.65rem;
      border: 1px solid #DDD8CE;
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
    .discipline-card:hover,
    .discipline-card.is-active {
      transform: translateY(-2px);
      border-color: var(--crimson);
    }
    .discipline-monogram {
      width: 34px;
      height: 34px;
      background: #444444;
      color: #FFFFFF;
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 1.35rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0 4px 1px 0;
      line-height: 0.85;
      flex-shrink: 0;
      transition: background-color 0.3s ease, transform 0.4s var(--ease-expo);
    }
    @media (min-width: 640px) {
      .discipline-monogram {
        width: 40px;
        height: 40px;
        font-size: 1.55rem;
      }
    }
    .discipline-card:hover .discipline-monogram,
    .discipline-card.is-active .discipline-monogram {
      background: var(--crimson);
      transform: scale(1.06);
    }

    /* Filter Tabs (Minimal Underline Index + Smooth Horizontal Swipe on Phones) */
    .filter-scroll-row {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding-bottom: 0.75rem;
      margin-bottom: 1.75rem;
      border-bottom: 1px solid var(--border-line);
    }
    .filter-scroll-row::-webkit-scrollbar {
      display: none;
    }
    .filter-tab {
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--text-muted);
      font-family: var(--font-sans);
      font-size: 0.86rem;
      font-weight: 700;
      padding: 0.5rem 0.25rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      flex-shrink: 0;
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

    /* Project Cards (Clean Edge, Light Natural Lift — Zero Extra Box Clutter) */
    .project-card {
      background-color: var(--bg-card);
      border: none;
      box-shadow: 0 2px 14px -4px rgba(40, 24, 18, 0.06);
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
      aspect-ratio: 16 / 10;
      background-color: #ECEAE3;
      cursor: pointer;
    }
    .project-image-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.6s var(--ease-expo);
      display: block;
    }
    .project-card:hover .project-image-box img {
      transform: scale(1.03);
    }
    .lightbox-stage {
      position: relative;
      border: 1px solid var(--border-line);
      background-color: #ECEAE3;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 240px;
      overflow: hidden;
    }
    .lightbox-nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 48px;
      background: rgba(17, 17, 17, 0.72);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 20px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 4;
      transition: background-color 0.2s ease;
    }
    .lightbox-nav-arrow:hover {
      background: var(--crimson);
    }
    .fullscreen-viewer {
      position: fixed;
      inset: 0;
      z-index: 120;
      background: rgba(12, 12, 12, 0.96);
      display: none;
      flex-direction: column;
      overscroll-behavior: contain;
    }
    .fullscreen-viewer.active {
      display: flex;
    }
    .fullscreen-canvas {
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
    }
    .fullscreen-canvas.is-zoomed {
      align-items: flex-start;
      justify-content: flex-start;
    }
    .fullscreen-canvas img {
      max-width: 96vw;
      max-height: 86dvh;
      width: auto;
      height: auto;
      object-fit: contain;
      cursor: zoom-in;
      transition: transform 0.25s ease;
      margin: auto;
    }
    .fullscreen-canvas.is-zoomed img {
      max-width: none;
      max-height: none;
      width: 145vw;
      cursor: zoom-out;
    }
    .project-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(143, 0, 0, 0.52), rgba(20, 10, 8, 0.64));
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

    /* Team Card matching Page 3 PDF cleanly & compact on mobile phones */
    .team-card {
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      transition: transform 0.4s var(--ease-expo);
    }
    .team-card:hover {
      transform: translateY(-5px);
    }
    .team-circle-stage {
      padding: 0.75rem 0.5rem 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .team-img-wrap {
      width: 118px;
      height: 118px;
      border-radius: 9999px;
      overflow: hidden;
      background-color: #F2F0EB;
      border: 1px solid #C8C2B6;
      box-shadow: 0 8px 20px rgba(72, 24, 16, 0.08);
      transition: border-color 0.3s ease, transform 0.55s var(--ease-expo), box-shadow 0.45s var(--ease-expo);
    }
    @media (min-width: 640px) {
      .team-img-wrap {
        width: 158px;
        height: 158px;
      }
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
      padding: 0.5rem 0.35rem 0.25rem;
      text-align: center;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
      color: #EC7C30;
      font-weight: 400;
    }
    .team-name-box b {
      color: #EC7C30;
      font-weight: 700;
    }
    .team-role-box {
      background-color: #E8E6DF;
      padding: 0.35rem 0.45rem;
      text-align: center;
      font-size: 0.78rem;
      color: #111111;
      font-weight: 400;
    }

    /* Hairline Divider Columns (About, Testimonials & Services) */
    .hairline-matrix-3 {
      display: grid;
      grid-template-columns: 1fr;
      border-top: 1px solid var(--border-line);
    }
    @media (min-width: 768px) {
      .hairline-matrix-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    .hairline-matrix-cell {
      padding: 1.75rem 1.25rem;
      border-bottom: 1px solid var(--border-line);
    }
    @media (min-width: 768px) {
      .hairline-matrix-cell {
        border-right: 1px solid var(--border-line);
      }
      .hairline-matrix-cell:nth-child(3n) {
        border-right: none;
      }
    }
    /* Partner Logo Grayscale -> Full Color Micro-interaction */
    .partner-logo-cell {
      padding: 1.35rem 1rem;
      border: none;
      border-bottom: 1px solid var(--border-line);
      border-right: 1px solid var(--border-line);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 158px;
      height: auto;
      width: 100%;
      background: rgba(255, 255, 255, 0.48);
      transition: background-color 0.3s ease, transform 0.3s var(--ease-expo);
      cursor: pointer;
      color: inherit;
      font: inherit;
    }
    .partner-logo-stage {
      height: 64px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.7rem;
    }
    .partner-logo-cell img {
      filter: grayscale(100%) contrast(1.06);
      opacity: 0.82;
      transition: filter 0.35s ease, opacity 0.35s ease, transform 0.35s var(--ease-expo);
    }
    .partner-logo-cell:hover,
    .partner-logo-cell:focus-visible {
      background: rgba(255, 255, 255, 0.96);
      outline: none;
    }
    .partner-logo-cell:hover img,
    .partner-logo-cell:focus-visible img {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.06);
    }
    .partner-logo-cell:hover .partner-cell-name,
    .partner-logo-cell:focus-visible .partner-cell-name {
      color: var(--crimson);
    }

    /* Mobile Touch & Input Zoom Safeguards */
    @media (max-width: 640px) {
      .hero-full-section {
        min-height: 78svh;
      }
      input, select, textarea {
        font-size: 16px !important;
      }
    }
    @media (pointer: coarse) {
      .studio-cursor-canvas,
      .studio-cursor {
        display: none !important;
      }
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
      align-items: safe center;
      justify-content: center;
      padding: 1rem;
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
    }
    .lightbox-modal.active {
      display: flex;
    }
    .lightbox-content {
      background: var(--bg-canvas);
      max-width: 1020px;
      width: 100%;
      max-height: 90dvh;
      margin: auto;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid var(--border-line);
      position: relative;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .lightbox-scroll-body {
      flex: 1 1 auto;
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      outline: none;
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

    /* Navigation Dropdown Menus (Adapted cleanly from nsinghinteriors.com structure) */
    .nav-dropdown-wrap {
      position: relative;
      display: inline-flex;
      align-items: center;
    }
    .nav-dropdown-panel {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 225px;
      padding-top: 0.75rem;
      opacity: 0;
      visibility: hidden;
      transform: translateY(6px);
      transition: opacity 0.22s ease, transform 0.25s var(--ease-expo), visibility 0.22s ease;
      z-index: 65;
    }
    .nav-dropdown-wrap:hover .nav-dropdown-panel,
    .nav-dropdown-wrap:focus-within .nav-dropdown-panel {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .nav-dropdown-inner {
      background: rgba(247, 246, 242, 0.98);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-line);
      box-shadow: var(--shadow-elevated);
      padding: 0.45rem 0;
      display: flex;
      flex-direction: column;
    }
    .nav-dropdown-link {
      padding: 0.52rem 1rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-main);
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(221, 216, 206, 0.45);
      transition: background-color 0.2s ease, color 0.2s ease, padding-left 0.22s ease;
    }
    .nav-dropdown-link:last-child {
      border-bottom: none;
    }
    .nav-dropdown-link:hover {
      background-color: rgba(143, 0, 0, 0.06);
      color: var(--crimson);
      padding-left: 1.2rem;
    }

    /* Header CTA Responsive Hide (prevents .btn-crimson inline-flex overriding Tailwind .hidden on phones) */
    @media (max-width: 639px) {
      .header-cta-desktop {
        display: none !important;
      }
    }

    /* Discrete Cookie Notice Toast */
    .cookie-consent-bar {
      position: fixed;
      bottom: 0.75rem;
      right: 0.75rem;
      left: 0.75rem;
      max-width: 400px;
      margin-left: auto;
      z-index: 95;
      background: rgba(26, 26, 26, 0.96);
      color: #F0EFEA;
      border: 1px solid #3A3632;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
      padding: 0.9rem 1.05rem;
      display: none;
      flex-direction: column;
      gap: 0.65rem;
      backdrop-filter: blur(8px);
    }
    .cookie-consent-bar.is-visible {
      display: flex !important;
    }

    /* Legal & Policy Pages Editorial Typography */
    .legal-prose h2 {
      font-family: var(--font-serif);
      color: var(--crimson);
      font-size: 1.45rem;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 0.6rem;
      padding-bottom: 0.35rem;
      border-bottom: 1px solid var(--border-line);
    }
    .legal-prose p {
      font-size: 0.96rem;
      line-height: 1.72;
      color: #2A2A2A;
      margin-bottom: 0.9rem;
    }
    .legal-prose ul {
      list-style: disc;
      padding-left: 1.35rem;
      margin-bottom: 1rem;
    }
    .legal-prose li {
      font-size: 0.94rem;
      line-height: 1.68;
      color: #2A2A2A;
      margin-bottom: 0.4rem;
    }

    /* Interactive Team Profile Trigger & FAQ Hairline Accordion */
    .team-card {
      cursor: pointer;
    }
    .team-detail-hint {
      text-align: center;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-muted);
      padding-top: 0.35rem;
      transition: color 0.25s ease;
    }
    .team-card:hover .team-detail-hint {
      color: var(--crimson);
    }
    .faq-item {
      border-bottom: 1px solid var(--border-line);
    }
    .faq-trigger {
      width: 100%;
      background: transparent;
      border: none;
      padding: 1.1rem 0.25rem;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      cursor: pointer;
      font-family: var(--font-sans);
      color: var(--text-main);
      transition: color 0.25s ease;
    }
    .faq-trigger:hover {
      color: var(--crimson);
    }
    .faq-plus {
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
      font-weight: 400;
      color: var(--crimson);
      flex-shrink: 0;
      transition: transform 0.3s var(--ease-expo);
    }
    .faq-item.is-open .faq-plus {
      transform: rotate(45deg);
    }
    .faq-body {
      display: none;
      padding: 0 0.25rem 1.15rem;
      font-size: 0.92rem;
      line-height: 1.68;
      color: #444444;
    }
    .faq-item.is-open .faq-body {
      display: block;
    }

    /* Accessibility Fallback (preserve interactive user-triggered hovers) */
    @media (prefers-reduced-motion: reduce) {
      .vellum-drafting-grid { opacity: 0.4; }
    }
`;

function cookieBannerMarkup(isSubpage) {
  const cookieHref = isSubpage ? '../cookie-policy/index.html' : 'cookie-policy/index.html';
  const privacyHref = isSubpage ? '../privacy-policy/index.html' : 'privacy-policy/index.html';
  return `
  <!-- DISCRETE COOKIE NOTICE BAR -->
  <aside id="cookieConsentBar" class="cookie-consent-bar" role="dialog" aria-label="Cookie Preferences">
    <div class="flex items-center justify-between gap-2">
      <span class="text-[10px] font-mono uppercase tracking-widest text-[#FF8F8F] font-bold">Cookie &amp; Privacy Notice</span>
      <button type="button" id="cookieCloseBtn" aria-label="Close Cookie Notice" class="text-[#CCCCCC] hover:text-white bg-transparent border-0 text-sm leading-none px-1 cursor-pointer">&times;</button>
    </div>
    <p class="text-xs leading-relaxed text-[#E5E3DC] m-0">
      Scale and Spaces uses essential local preferences for navigation and interface state. Review our
      <a href="${cookieHref}" class="text-[#FF8F8F] underline hover:text-white">Cookie Policy</a> &amp;
      <a href="${privacyHref}" class="text-[#FF8F8F] underline hover:text-white">Privacy Policy</a>.
    </p>
    <p id="cookieStatusMsg" class="text-[11px] font-mono text-[#CCCCCC] m-0 hidden"></p>
    <div class="flex items-center justify-end gap-2">
      <button type="button" id="cookieDismissBtn" class="bg-transparent border border-[#55504B] text-[#CCCCCC] hover:text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 cursor-pointer">
        Essential Only
      </button>
      <button type="button" id="cookieAcceptBtn" class="bg-[#8F0000] hover:bg-[#B00000] border-0 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 cursor-pointer">
        Accept Cookies
      </button>
    </div>
  </aside>`;
}

const cookieBannerScript = String.raw`
    (function initCookieConsentSystem() {
      const cookieBar = document.getElementById('cookieConsentBar');
      const statusMsg = document.getElementById('cookieStatusMsg');
      const legalStatusEl = document.getElementById('legalCookieStatus');

      function readConsent() {
        let val = '';
        try { val = localStorage.getItem('ss_cookie_consent') || ''; } catch (err) {}
        if (!val && document.cookie) {
          const m = document.cookie.match(/(?:^|;\s*)ss_cookie_consent=([^;]+)/);
          if (m && m[1]) val = decodeURIComponent(m[1]);
        }
        return val;
      }

      function writeConsent(choice) {
        try { localStorage.setItem('ss_cookie_consent', choice); } catch (err) {}
        try { document.cookie = 'ss_cookie_consent=' + encodeURIComponent(choice) + '; path=/; max-age=15552000; SameSite=Lax'; } catch (err) {}
        if (statusMsg) {
          statusMsg.textContent = 'Saved preference: ' + (choice === 'accepted' ? 'All Cookies Accepted' : 'Essential Preferences Only');
          statusMsg.classList.remove('hidden');
          statusMsg.style.display = 'block';
        }
        if (legalStatusEl) {
          legalStatusEl.textContent = choice === 'accepted' ? 'All Cookies Accepted' : (choice === 'essential' ? 'Essential Only' : 'Not Set Yet');
        }
      }

      function openCookiePopup() {
        if (!cookieBar) return;
        const current = readConsent();
        if (statusMsg) {
          if (current) {
            statusMsg.textContent = 'Current setting: ' + (current === 'accepted' ? 'All Cookies Accepted' : 'Essential Preferences Only');
            statusMsg.classList.remove('hidden');
            statusMsg.style.display = 'block';
          } else {
            statusMsg.style.display = 'none';
          }
        }
        cookieBar.classList.add('is-visible');
        cookieBar.style.display = 'flex';
      }

      const initialChoice = readConsent();
      if (legalStatusEl) {
        legalStatusEl.textContent = initialChoice === 'accepted' ? 'All Cookies Accepted' : (initialChoice === 'essential' ? 'Essential Only' : 'Default Notice Active');
      }
      if (!initialChoice && cookieBar) {
        cookieBar.classList.add('is-visible');
        cookieBar.style.display = 'flex';
      }

      function applyAndClose(choice) {
        writeConsent(choice);
        if (cookieBar) {
          setTimeout(function() {
            cookieBar.classList.remove('is-visible');
            cookieBar.style.display = '';
          }, 260);
        }
      }

      const acceptBtn = document.getElementById('cookieAcceptBtn');
      const dismissBtn = document.getElementById('cookieDismissBtn');
      const closeBtn = document.getElementById('cookieCloseBtn');
      if (acceptBtn) acceptBtn.addEventListener('click', function() { applyAndClose('accepted'); });
      if (dismissBtn) dismissBtn.addEventListener('click', function() { applyAndClose('essential'); });
      if (closeBtn) closeBtn.addEventListener('click', function() {
        if (cookieBar) { cookieBar.classList.remove('is-visible'); cookieBar.style.display = ''; }
      });

      window.openCookiePopup = openCookiePopup;
      window.setCookiePreferenceChoice = function(choice) {
        writeConsent(choice);
        openCookiePopup();
      };
    })();
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
  crosshair: '<svg viewBox="0 0 12 12" fill="none" width="11" height="11"><path d="M6 0V12M0 6H12" stroke="currentColor" stroke-width="1"/></svg>',
  home: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>',
  compass: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5"/></svg>',
  grid: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  info: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" d="M12 11v5M12 8h.01"/></svg>',
  users: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  quote: '<svg class="inline-block w-5 h-5 text-[#8F0000]/65 shrink-0" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M10 7H6C4.9 7 4 7.9 4 9v4c0 1.1.9 2 2 2h2v2H5v2h3c1.66 0 3-1.34 3-3V9c0-1.1-.9-2-2-2zm10 0h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v2h-3v2h3c1.66 0 3-1.34 3-3V9c0-1.1-.9-2-2-2z"/></svg>',
  building: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 10h2M13 10h2M9 14h2M13 14h2M10 21v-4h4v4"/></svg>',
  award: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>',
  check: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>',
  help: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M9.5 9.2a2.5 2.5 0 0 1 4.9.7c0 1.6-2.4 2-2.4 3.4M12 17h.01"/></svg>',
  download: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>',
  star: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000]" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg>',
  article: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13z"/><path stroke-linecap="round" d="M8 9h8M8 13h8M8 17h5"/></svg>'
};

const htmlBodyTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Scale and Spaces Pvt. Ltd. | Best Architect &amp; Interior Designer in Nepal</title>
  <meta name="description" content="Trusted Architects &amp; Interior Designers in Kathmandu, Birgunj &amp; Nepal. 3D renders, NBC seismic plans &amp; turnkey interiors by Scale and Spaces." />
  <meta name="keywords" content="Architect in Nepal, Best Architect in Nepal, Architect in Kathmandu, Architect in Birgunj, Interior Designer in Nepal, Best Interior Designer in Nepal, Interior Designer in Kathmandu, Interior Designer in Birgunj, Architecture Firm Nepal, Structural Engineer Nepal, Scale and Spaces" />
  <meta name="geo.region" content="NP" />
  <meta name="geo.placename" content="Kathmandu, Birgunj, Nepal" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="theme-color" content="#8F0000" />
  <meta name="google-site-verification" content="mf4GOtcYonLwbYRts_cwxyovvrpZwiXa3juGaPnaX8I" />
  <link rel="canonical" href="https://scaleandspaces.com.np/" />

  <!-- Open Graph & Social Meta -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Scale and Spaces Pvt. Ltd." />
  <meta property="og:title" content="Scale and Spaces Pvt. Ltd. | Best Architect &amp; Interior Designer in Nepal" />
  <meta property="og:description" content="Trusted Architects &amp; Interior Designers in Kathmandu, Birgunj &amp; Nepal. 3D renders, NBC seismic plans &amp; turnkey interiors by Scale and Spaces." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://scaleandspaces.com.np/" />
  <meta property="og:image" content="https://scaleandspaces.com.np/assets/projects/cover_studio_tower.jpg" />
  <meta property="og:image:alt" content="Scale and Spaces architectural tower perspective study" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Scale and Spaces Pvt. Ltd. | Best Architect &amp; Interior Designer in Nepal" />
  <meta name="twitter:description" content="Trusted Architects &amp; Interior Designers in Kathmandu, Birgunj &amp; Nepal. 3D renders, seismic design &amp; turnkey interiors." />
  <meta name="twitter:image" content="https://scaleandspaces.com.np/assets/projects/cover_studio_tower.jpg" />

  <link rel="icon" type="image/svg+xml" href="assets/logo.svg" />
  <link rel="apple-touch-icon" href="assets/logo.jpg" />

  <!-- Authentic Portfolio Fonts: EB Garamond (Garamond) + Carlito (Calibri open metric match) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />

  <!-- Google SEO Structured Data (JSON-LD + FAQPage) -->
  <script type="application/ld+json">${JSON.stringify(jsonLdSchema)}</script>
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  })}</script>

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

    <div class="relative z-[4] flex flex-col items-center gap-3 pointer-events-none">
      ${animatedCompanyLogoSvg('ssMaskPreloader', { className: 'ss-preloader-emblem', dur: '1.1s', loop: false })}
      <span class="text-[10px] font-mono uppercase tracking-[0.26em] text-[#8F0000] font-bold">Scale &amp; Spaces Studio</span>
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

  <!-- SOLID NON-TRANSPARENT PAGE LOADING SCREEN FOR CROSS-PAGE NAVIGATION -->
  <div id="ssTransitionVeil" class="ss-transition-veil" aria-hidden="true">
    ${animatedCompanyLogoSvg('ssMaskVeil', { className: 'ss-transition-logo-svg', dur: '0.82s', loop: false })}
    <span id="ssTransitionLabel" class="ss-transition-label">Scale &amp; Spaces</span>
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
        <strong class="text-[#111111]">SCALE AND SPACES Pvt. Ltd.</strong> &bull; Architecture &bull; Engineering &bull; Interiors
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <a href="tel:+9779703881733" class="inline-flex items-center gap-1 text-[#111111] no-underline hover:text-[#8F0000]">${icons.phone} +977-9703881733</a>
        <a href="mailto:studio@scaleandspaces.com" class="inline-flex items-center gap-1 text-[#767070] no-underline hover:text-[#8F0000]">${icons.mail} studio@scaleandspaces.com</a>
        <span class="hidden md:inline-flex items-center gap-1">${icons.pin} Kathmandu &bull; Birgunj</span>
      </div>
    </div>
  </div>

  <!-- NAVIGATION BAR + SCROLL PROGRESS LINE -->
  <header class="site-nav flex items-center">
    <div class="portfolio-container flex items-center justify-between w-full gap-2.5">
      <a href="#home" class="flex items-center gap-2 no-underline shrink min-w-0">
        <img src="assets/logo.svg" alt="Scale and Spaces Pvt. Ltd. geometric emblem" class="nav-logo shrink-0" style="height: 36px; width: auto; max-width: 42px;" onerror="this.src='assets/logo.jpg'" />
        <div class="flex flex-col min-w-0">
          <span class="font-bold text-sm sm:text-base tracking-wider text-[#111111] leading-none truncate">
            SCALE <span class="font-normal text-[#8F0000]">AND</span> SPACES
          </span>
          <span class="text-[0.58rem] sm:text-[0.65rem] uppercase tracking-wider sm:tracking-widest text-[#767070] font-semibold mt-1 truncate">
            Pvt. Ltd. &bull; Architects &bull; Engineers
          </span>
        </div>
      </a>

      <!-- Semantic Section Navigation w/ Clean Practice Dropdowns -->
      <nav aria-label="Main navigation" class="hidden lg:flex items-center gap-2.5 xl:gap-4">
        <a href="#home" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Home</a>

        <div class="nav-dropdown-wrap">
          <a href="#services" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Services &#9662;</a>
          <div class="nav-dropdown-panel">
            <div class="nav-dropdown-inner">
              <a href="#services" class="nav-dropdown-link">Full Scope &amp; Deliverables</a>
              <a href="#services" class="nav-dropdown-link">Architecture &amp; 3D Design</a>
              <a href="#services" class="nav-dropdown-link">Structural &amp; Seismic Detailing</a>
              <a href="#services" class="nav-dropdown-link">Interior Design &amp; MEP</a>
              <a href="#services" class="nav-dropdown-link">BOQ &amp; Turnkey Supervision</a>
            </div>
          </div>
        </div>

        <div class="nav-dropdown-wrap">
          <a href="#projects" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Projects &#9662;</a>
          <div class="nav-dropdown-panel">
            <div class="nav-dropdown-inner">
              <a href="#projects" onclick="selectCategoryFilter('all'); return false;" class="nav-dropdown-link">All Projects (${projectsData.length})</a>
              <a href="#projects" onclick="selectCategoryFilter('Commercial'); return false;" class="nav-dropdown-link">Commercial Towers</a>
              <a href="#projects" onclick="selectCategoryFilter('Residences'); return false;" class="nav-dropdown-link">Private Residences</a>
              <a href="#projects" onclick="selectCategoryFilter('Landscape'); return false;" class="nav-dropdown-link">Landscape Masterplans</a>
              <a href="#projects" onclick="selectCategoryFilter('Interior'); return false;" class="nav-dropdown-link">Interior Design</a>
              <a href="#projects" onclick="selectCategoryFilter('Institutional'); return false;" class="nav-dropdown-link">Institutional &amp; Civic</a>
              <a href="#projects" onclick="selectCategoryFilter('Religious'); return false;" class="nav-dropdown-link">Religious Architecture</a>
            </div>
          </div>
        </div>

        <div class="nav-dropdown-wrap">
          <a href="#about" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">About &#9662;</a>
          <div class="nav-dropdown-panel">
            <div class="nav-dropdown-inner">
              <a href="#about" class="nav-dropdown-link">Studio Overview</a>
              <a href="#team" class="nav-dropdown-link">Our Team</a>
              <a href="#articles" class="nav-dropdown-link">Articles &amp; Notes</a>
              <a href="#reviews" class="nav-dropdown-link">Client Reviews</a>
              <a href="#faqs" class="nav-dropdown-link">FAQs</a>
              <a href="#partners" class="nav-dropdown-link">Partner Companies</a>
              <a href="privacy-policy/index.html" class="nav-dropdown-link">Policies &amp; Terms</a>
            </div>
          </div>
        </div>

        <a href="#team" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Team</a>
        <a href="#articles" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Articles</a>
        <a href="#reviews" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Reviews</a>
        <a href="#faqs" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">FAQs</a>
        <a href="#partners" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Partners</a>
        <a href="#contact" class="nav-link-animated text-[12px] xl:text-[13px] font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors whitespace-nowrap">Contact</a>
      </nav>

      <div class="flex items-center gap-2 shrink-0">
        <a href="https://wa.me/9779703881733?text=Hello%20Scale%20and%20Spaces,%20I%20would%20like%20to%20inquire%20regarding%20a%20project." target="_blank" rel="noopener noreferrer" class="header-cta-desktop hidden sm:inline-flex btn-crimson text-[10.5px] xl:text-[11px] py-2 px-3 xl:px-3.5">
          ${icons.whatsapp}
          <span>Get Quote</span>
        </a>
        <button id="mobile-toggle" type="button" aria-label="Open Navigation Menu" class="lg:hidden p-2 text-[#111111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
          ${icons.bars}
        </button>
      </div>
    </div>
    <div id="navProgress" class="nav-scroll-progress" aria-hidden="true"></div>
  </header>

  <!-- MOBILE NAVIGATION DRAWER (All Sections + Icons + Policies) -->
  <div id="mobile-backdrop" class="mobile-backdrop"></div>
  <aside id="mobile-menu" aria-label="Mobile Navigation" class="mobile-menu" data-lenis-prevent>
    <div class="flex justify-between items-center mb-5 pb-3 border-b border-[#DDD8CE] shrink-0">
      <div class="flex items-center gap-2">
        <img src="assets/logo.svg" alt="Scale and Spaces logo" style="height: 30px; width: auto; max-width: 36px;" onerror="this.src='assets/logo.jpg'" />
        <span class="font-bold text-sm tracking-wide text-[#111]">SCALE AND SPACES</span>
      </div>
      <button id="mobile-close" type="button" aria-label="Close Navigation Menu" class="text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer p-1">
        ${icons.close}
      </button>
    </div>
    <nav class="flex flex-col gap-3 text-sm font-bold text-[#111] overflow-y-auto overscroll-contain pb-4" data-lenis-prevent>
      <a href="#home" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.home} <span>Home</span></a>
      <a href="#services" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.compass} <span>Services</span></a>
      <a href="#projects" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.grid} <span>Projects (${projectsData.length})</span></a>
      <a href="#about" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.info} <span>About Studio</span></a>
      <a href="#team" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.users} <span>Our Team</span></a>
      <a href="#articles" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.article} <span>Articles</span></a>
      <a href="#reviews" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.quote} <span>Reviews</span></a>
      <a href="#faqs" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.help} <span>FAQs</span></a>
      <a href="#partners" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.building} <span>Partners Companies</span></a>
      <a href="#contact" class="mobile-link flex items-center gap-3 py-1.5 hover:text-[#8F0000] no-underline text-[#111]">${icons.phone} <span>Contact Studio</span></a>
      <div class="pt-3 mt-1 border-t border-[#DDD8CE] flex flex-wrap gap-3 text-[11px] font-semibold text-[#767070]">
        <a href="privacy-policy/index.html" class="no-underline text-[#767070] hover:text-[#8F0000]">Privacy Policy</a>
        <a href="terms-and-conditions/index.html" class="no-underline text-[#767070] hover:text-[#8F0000]">Terms</a>
        <a href="cookie-policy/index.html" class="no-underline text-[#767070] hover:text-[#8F0000]">Cookies</a>
        <a href="disclaimer/index.html" class="no-underline text-[#767070] hover:text-[#8F0000]">Disclaimer</a>
      </div>
    </nav>
    <div class="mt-auto pt-4 border-t border-[#DDD8CE] flex flex-col gap-2.5">
      <a href="https://wa.me/9779703881733" target="_blank" rel="noopener noreferrer" class="btn-crimson w-full text-xs">
        ${icons.whatsapp}
        <span id="cms-mobile-wa-label">+977-9703881733</span>
      </a>
      <a href="mailto:studio@scaleandspaces.com" class="text-xs text-center text-[#767070] no-underline hover:text-[#8F0000]">
        studio@scaleandspaces.com
      </a>
    </div>
  </aside>

  <main id="home">
    <!-- ======================================================================
         1. HOME / HERO COVER (Monochrome-to-Color Tower Backdrop, Clean Typography)
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
        <div class="hero-stagger mb-6">
          <p id="cms-hero-badge" class="text-sm md:text-base text-[#111111] tracking-wide">
            Architecture | Engineering | Interiors
          </p>
        </div>

        <div class="my-auto py-8 md:py-12 max-w-3xl">
          <!-- Single Semantic H1 with GSAP SplitText reveal -->
          <h1 id="heroHeadline" class="portfolio-crimson-quote">
            <span class="block text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style="font-family: Georgia, 'EB Garamond', serif;">Designing Spaces,</span>
            <span class="block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight" style="font-family: 'EB Garamond', Georgia, serif;">
              Defining Lifestyles<span style="font-size: 1.15em;">!</span>
            </span>
          </h1>
          <p id="cms-hero-subtitle" class="hero-stagger text-sm sm:text-base text-[#2E2E2E] mt-4 max-w-xl leading-relaxed">
            Full-service architectural design, seismic engineering, masterplanning &amp; interior studio by <strong class="text-[#111111]">Scale and Spaces Pvt. Ltd.</strong> across Nepal.
          </p>

          <div class="hero-stagger flex flex-wrap items-center gap-3 sm:gap-4 mt-7">
            <a id="cms-hero-cta1" href="#projects" class="btn-crimson text-xs py-2.5 px-5">
              ${icons.grid} <span id="cms-hero-cta1-label">Explore Projects</span>
            </a>
            <a id="cms-hero-cta2" href="#contact" class="btn-outline text-xs py-2.5 px-5">
              ${icons.phone} <span id="cms-hero-cta2-label">Consult Studio</span>
            </a>
          </div>
        </div>

        <!-- Clean Hairline Studio Locations Strip (No Extra Buttons/Caption) -->
        <div class="hero-stagger mt-6">
          <div class="py-3 border-t border-b border-[#111111]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-[#111111]">
            <div class="flex items-center gap-1.5">${icons.pin} <span><strong class="text-[#8F0000]">Head Office:</strong> <span id="cms-hero-head-office">Tokha-6, Kathmandu</span></span></div>
            <div class="flex items-center gap-1.5">${icons.pin} <span><strong class="text-[#8F0000]">Contact:</strong> <span id="cms-hero-branch-office">Birgunj-12, Parsa</span></span></div>
            <div class="flex items-center gap-1.5">${icons.mail} <a href="mailto:studio@scaleandspaces.com" class="text-[#111111] no-underline hover:text-[#8F0000]">studio@scaleandspaces.com</a></div>
            <div class="flex items-center gap-1.5">${icons.phone} <a href="tel:+9779703881733" class="text-[#111111] no-underline hover:text-[#8F0000]">+977-9703881733</a></div>
          </div>
        </div>
      </div>

      <!-- Thin Architectural Practice Marquee Strip -->
      <div class="studio-marquee-wrap" aria-hidden="true">
        <div class="studio-marquee-track">
          <span>TOPOGRAPHICAL SURVEY</span><span>&bull;</span>
          <span>ARCHITECTURAL DESIGN</span><span>&bull;</span>
          <span>3D VISUALIZATION</span><span>&bull;</span>
          <span>STRUCTURAL ENGINEERING</span><span>&bull;</span>
          <span>ELECTRICAL &amp; SANITARY MEP</span><span>&bull;</span>
          <span>LANDSCAPE MASTERPLANNING</span><span>&bull;</span>
          <span>INTERIOR JOINERY</span><span>&bull;</span>
          <span>BOQ &amp; SITE SUPERVISION</span><span>&bull;</span>
          <span>TOPOGRAPHICAL SURVEY</span><span>&bull;</span>
          <span>ARCHITECTURAL DESIGN</span><span>&bull;</span>
          <span>3D VISUALIZATION</span><span>&bull;</span>
          <span>STRUCTURAL ENGINEERING</span><span>&bull;</span>
          <span>ELECTRICAL &amp; SANITARY MEP</span><span>&bull;</span>
          <span>LANDSCAPE MASTERPLANNING</span><span>&bull;</span>
          <span>INTERIOR JOINERY</span><span>&bull;</span>
          <span>BOQ &amp; SITE SUPERVISION</span><span>&bull;</span>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         2. SERVICES (Full Scope of Works_ & Practice Lifecycle)
         ====================================================================== -->
    <section id="services" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] wc-section-wash">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 reveal-head">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.compass} Practice Scope
            </span>
            <h2 class="portfolio-section-title">SERVICES_</h2>
            <p class="text-sm text-[#767070] mt-2 max-w-2xl">
              End-to-end architectural, structural, MEP, costing, and supervision deliverables across Nepal.
            </p>
          </div>
          <div class="text-xs font-bold uppercase tracking-widest text-[#767070]">
            SCALE AND SPACES Pvt. Ltd.
          </div>
        </div>

        <!-- 10 Deliverables Open Hairline Grid (No Boxes — Sheet Upgradable via #services-grid) -->
        <div id="services-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 scope-grid">
          ${scopeItems.map(item => `
            <div class="scope-list-item justify-between">
              <div class="flex items-center gap-3 min-w-0">
                ${icons.check}
                <span class="text-sm sm:text-base font-bold text-[#111111]">${item.title}</span>
              </div>
              <span class="text-xs text-[#767070] text-right shrink-0 ml-2">${item.note}</span>
            </div>
          `).join('')}
        </div>

        <!-- Open 6-Column Architectural Workflow Strip -->
        <div class="service-hairline-grid mt-12 reveal-head">
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="16" cy="11" r="4"/><path d="M16 15V28M9 28H23M6 9C11 5 21 5 26 9"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">01</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Survey &amp; Site Analysis</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 26L16 6L28 26H4Z"/><path d="M16 6V26M10 16H22"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">02</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Concept &amp; 3D Renders</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="6" y="6" width="20" height="20"/><path d="M6 16H26M16 6V26M6 6L26 26"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">03</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Seismic &amp; Structure</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M8 26V10C8 7 12 5 16 5C20 5 24 7 24 10V26"/><path d="M4 26H28M12 14H20M12 20H20"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">04</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Interiors &amp; MEP Systems</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="6" y="5" width="16" height="22"/><path d="M22 9H26V27H10M10 11H18M10 16H18M10 21H15"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">05</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Permits &amp; Tender BOQ</p>
          </div>
          <div class="service-pillar-cell">
            <svg class="service-pillar-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="16" cy="16" r="10"/><path d="M16 10V16L21 19M4 16H7M25 16H28"/></svg>
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#8F0000] font-bold">06</span>
            <p class="text-xs font-bold text-[#111111] leading-snug">Turnkey Supervision</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         3. PROJECTS (Clean Filter Bar + 44 Portfolio Entries + Civic Spotlights)
         ====================================================================== -->
    <section id="projects" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA] wc-section-wash">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 reveal-head">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.grid} Portfolio Archive
            </span>
            <h2 class="portfolio-section-title">PROJECTS_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Commercial towers, private residences, landscapes, interiors, hospitals &amp; civic masterplans across Nepal.
            </p>
          </div>
          <div class="text-xs font-semibold text-[#767070]">
            Showing <span id="project-count" class="font-bold text-[#111111]">${projectsData.length}</span> works
          </div>
        </div>

        <!-- Classic Page 4 Architectural Category Quick Index (Residences, Commercial, Landscape, Interior, Office, Religious) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-7 reveal-head">
          <button type="button" data-cat="Residences" onclick="selectCategoryFilter('Residences')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">R</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Residences</span>
          </button>
          <button type="button" data-cat="Commercial" onclick="selectCategoryFilter('Commercial')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">C</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Commercial</span>
          </button>
          <button type="button" data-cat="Landscape" onclick="selectCategoryFilter('Landscape')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">L</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Landscape Development</span>
          </button>
          <button type="button" data-cat="Interior" onclick="selectCategoryFilter('Interior')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">I</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Interior Design</span>
          </button>
          <button type="button" data-cat="Institutional" onclick="selectCategoryFilter('Institutional')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">O</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Office Building</span>
          </button>
          <button type="button" data-cat="Religious" onclick="selectCategoryFilter('Religious')" class="discipline-card wc-hover-card">
            <span class="discipline-monogram">R</span>
            <span class="text-xs sm:text-sm font-bold text-[#111111]">Religious Complexes</span>
          </button>
        </div>

        <!-- Phone-Swipeable Minimal Underline Filter Strip (Zero Cluttered Boxes) -->
        <div class="filter-scroll-row" role="tablist" aria-label="Filter projects by discipline" data-lenis-prevent>
          <button type="button" class="filter-tab active" data-category="all">${icons.grid} All (${projectsData.length})</button>
          <button type="button" class="filter-tab" data-category="Commercial">${icons.building} Commercial</button>
          <button type="button" class="filter-tab" data-category="Residences">${icons.home} Residences</button>
          <button type="button" class="filter-tab" data-category="Landscape">${icons.compass} Landscape</button>
          <button type="button" class="filter-tab" data-category="Interior">Interiors</button>
          <button type="button" class="filter-tab" data-category="Institutional">Institutional</button>
          <button type="button" class="filter-tab" data-category="Religious">Religious</button>
          <button type="button" class="filter-tab" data-category="Branding">${icons.award} Logos</button>
        </div>

        <!-- Borderless Project Gallery Grid -->
        <div id="projects-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${projectsData.map(p => `
            <article class="project-card wc-hover-card" data-category="${p.category}" data-id="${p.id}">
              <div class="project-image-box" onclick="openLightbox('${p.id}')">
                <img src="${p.image}" alt="${p.title} ${p.client} architectural design in ${p.location} (${p.year}) by Scale and Spaces Pvt. Ltd." loading="lazy" />
                <div class="project-overlay">
                  <span class="btn-crimson text-xs py-2 px-4 shadow-lg">
                    ${icons.expand} <span>View Project (${p.images.length})</span>
                  </span>
                </div>
              </div>
              <div class="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div class="flex justify-between items-center text-xs text-[#767070] mb-1.5">
                    <span class="font-semibold">${p.location}</span>
                    <span class="font-bold text-[#111111]">${p.year}</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-[#C00000] mb-0.5 leading-snug cursor-pointer hover:underline" style="font-family: var(--font-sans);" onclick="openLightbox('${p.id}')">
                    ${p.title}
                  </h3>
                  <p class="text-sm font-bold text-[#111111] mb-1.5">${p.client}</p>
                  <p class="text-xs text-[#767070] leading-relaxed mb-3">${p.desc}</p>
                </div>
                <div class="pt-3 border-t border-[#DDD8CE] flex justify-between items-center text-xs">
                  <span class="text-[#767070] font-semibold">${p.categoryLabel}</span>
                  <button type="button" onclick="openLightbox('${p.id}')" class="text-[#8F0000] font-bold bg-transparent border-0 cursor-pointer hover:underline p-0">
                    Inspect &rarr;
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Featured Masterplan Spotlight (Clean Borderless Split inside #projects) -->
        <div id="ranighat-masterplan" class="mt-16 pt-12 border-t border-[#DDD8CE]">
          <div class="mb-8 reveal-head">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C00000] block mb-1">Featured Landscape Masterplan</span>
            <h3 class="portfolio-section-title">The Shavdaahgriham</h3>
            <p class="text-sm sm:text-base font-bold text-[#111111] mt-1">Ranighat Samshanghat Redevelopment &mdash; Birgunj Metropolitan City Office (2021 A.D.)</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 flex flex-col gap-4 reveal-card">
              <div class="overflow-hidden cursor-pointer wc-hover-card wc-ink-plate" onclick="openLightbox('shavdaahgriham-crematorium')">
                <img src="assets/projects/shavdaahgriham_crematorium.jpg" alt="The Shavdaahgriham electrical crematorium architecture at Ranighat, Birgunj" class="w-full h-auto object-cover block" loading="lazy" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="overflow-hidden wc-hover-card">
                  <img src="assets/projects/shavdaahgriham_roof.jpg" alt="Waterfront cremation platform and riverfront steps at Ranighat Samshanghat" class="w-full h-44 object-cover block" loading="lazy" />
                  <p class="pt-2 text-xs text-[#767070]">Riverfront ghats &amp; ceremonial platform</p>
                </div>
                <div class="overflow-hidden wc-hover-card">
                  <img src="assets/projects/shavdaahgriham_ranighat_1.jpg" alt="Ranighat riverfront crematorium park masterplan and scattering gardens" class="w-full h-44 object-cover block" loading="lazy" />
                  <p class="pt-2 text-xs text-[#767070]">Landscape masterplan &amp; scattering gardens</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col gap-4 reveal-card pt-2 border-t lg:border-t-0 lg:border-l border-[#DDD8CE] lg:pl-8">
              <img src="assets/projects/tent_form_diagram.jpg" alt="Hand-drawn tent form concept diagram for Ranighat Crematorium" class="w-full max-h-36 object-contain mx-auto mix-blend-multiply" loading="lazy" />
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#8F0000] mb-1">Form &amp; Material</h4>
                <p class="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  Minimalist tent geometry creates a serene environment for final rites while Traditional Khapada roofing honors Birgunj heritage.
                </p>
              </div>
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#8F0000] mb-1">Scattering Gardens</h4>
                <p class="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  Native Terai planting, evergreen shade canopies, water courts, and peaceful riverfront circulation paths.
                </p>
              </div>
              <button type="button" onclick="openLightbox('shavdaahgriham-crematorium')" class="btn-outline text-xs py-2 px-4 self-start mt-1">
                Inspect Masterplan Plates &rarr;
              </button>
            </div>
          </div>
        </div>

        <!-- Competition Winning Emblem Spotlight -->
        <div id="logo-designs" class="mt-14 pt-10 border-t border-[#DDD8CE] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-card">
          <div class="lg:col-span-4 flex flex-col gap-2.5">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#8F0000]">${icons.award} 1st Prize Competition Winner</span>
            <h3 class="text-2xl font-normal text-[#111111]" style="font-family: var(--font-sans);">Jeetpur Simara Civic Emblem</h3>
            <p class="text-xs sm:text-sm text-[#767070] leading-relaxed">
              Official Sub-Metropolitan Emblem created by <strong class="text-[#111111]">Ar. Yateendra Kishore Labh</strong> (2022).
            </p>
            <button type="button" onclick="openLightbox('logo-competition-winner')" class="btn-outline text-xs py-2 px-4 self-start mt-1">
              View Competition Boards &rarr;
            </button>
          </div>
          <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="overflow-hidden cursor-pointer wc-hover-card" onclick="openLightbox('logo-competition-winner')">
              <img src="assets/projects/logo_competition_winner.jpg" alt="Jeetpur Simara Sub-Metropolitan City Winning Emblem Design Board 1" class="w-full h-52 object-cover block" loading="lazy" />
            </div>
            <div class="overflow-hidden cursor-pointer wc-hover-card" onclick="openLightbox('logo-competition-winner')">
              <img src="assets/projects/logo_competition_sheet2.jpg" alt="Jeetpur Simara Sub-Metropolitan City Winning Emblem Design Board 2" class="w-full h-52 object-cover block" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         4. ABOUT STUDIO (Practice Profile + Hairline Metrics + Kinetic Plates)
         ====================================================================== -->
    <section id="about" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] wc-section-wash">
      <div class="portfolio-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal-head">
          <div class="lg:col-span-6">
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.info} About Practice
            </span>
            <h2 class="portfolio-section-title">ABOUT STUDIO_</h2>
            <p id="cms-about-title" class="text-xl sm:text-2xl font-bold serif-heading text-[#111111] mt-3 leading-snug">
              Architecture Rooted in Context, Climate &amp; Engineering Precision
            </p>
          </div>
          <div class="lg:col-span-6 flex flex-col gap-3 text-sm text-[#333333] leading-relaxed">
            <p id="cms-about-p1">
              <strong class="text-[#111111]">Scale and Spaces Private Limited</strong> is a multidisciplinary design and engineering firm practicing from Kathmandu Valley and Birgunj. We unite architectural aesthetics, NBC seismic safety, bioclimatic light, and transparent costing under one roof.
            </p>
            <p id="cms-about-p2" class="text-[#767070]">
              From bespoke family residences and commercial high-rises to community hospitals, civic ghats, and corporate interiors, every drawing transitions seamlessly from sketch to site execution.
            </p>
            <a id="cms-about-link" href="#contact" class="btn-outline text-xs py-2 px-4 self-start mt-1 hidden">
              <span id="cms-about-link-label">For More Details</span> &rarr;
            </a>
          </div>
        </div>

        <!-- Clean Open 4-Metric Hairline Strip -->
        <div class="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#DDD8CE] mt-10 reveal-card">
          <div class="py-5 px-4 border-r border-b md:border-b-0 border-[#DDD8CE]">
            <div id="cms-stat1-num" class="text-2xl sm:text-3xl font-bold serif-heading text-[#8F0000]">44+</div>
            <div id="cms-stat1-label" class="text-xs font-bold text-[#111111] mt-0.5">Portfolio Works</div>
          </div>
          <div class="py-5 px-4 md:border-r border-b md:border-b-0 border-[#DDD8CE]">
            <div id="cms-stat2-num" class="text-2xl sm:text-3xl font-bold serif-heading text-[#8F0000]">10</div>
            <div id="cms-stat2-label" class="text-xs font-bold text-[#111111] mt-0.5">Core Specialists</div>
          </div>
          <div class="py-5 px-4 border-r border-[#DDD8CE]">
            <div id="cms-stat3-num" class="text-2xl sm:text-3xl font-bold serif-heading text-[#8F0000]">2</div>
            <div id="cms-stat3-label" class="text-xs font-bold text-[#111111] mt-0.5">Nepal Offices</div>
          </div>
          <div class="py-5 px-4">
            <div id="cms-stat4-num" class="text-2xl sm:text-3xl font-bold serif-heading text-[#8F0000]">1st</div>
            <div id="cms-stat4-label" class="text-xs font-bold text-[#111111] mt-0.5">Civic Emblem Prize</div>
          </div>
        </div>
      </div>

      <!-- Kinetic Architectural Plate Stage (Borderless) -->
      <div id="atelierTrailStage" class="atelier-trail-stage py-14 md:py-16 mt-10">
        <div id="atelierTrailLayer" class="atelier-trail-layer" aria-hidden="true"></div>
        <div class="portfolio-container text-center relative z-[4] pointer-events-none select-none">
          <p id="cms-banner-title" class="text-xl sm:text-3xl font-bold serif-heading text-[#111111] max-w-2xl mx-auto leading-tight">
            From Concept Massing to Built Architectural Realities
          </p>
          <a href="#projects" class="btn-outline text-xs py-2 px-5 mt-5 pointer-events-auto no-underline">
            Browse Studio Archive &darr;
          </a>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         5. TEAM (Clickable 2-Col -> 5-Col Portraits w/ Profile & Download Modal)
         ====================================================================== -->
    <section id="team" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA] wc-section-wash">
      <div class="portfolio-container">
        <div class="text-center mb-10 reveal-head">
          <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
            ${icons.users} Multidisciplinary Practice
          </span>
          <h2 class="portfolio-section-title">OUR TEAM_</h2>
          <p class="text-sm text-[#767070] mt-2">
            Architects, Structural &amp; Civil Engineers, Interior Designers &amp; Project Managers
          </p>
        </div>

        <div id="team-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 team-grid">
          ${teamData.map((m, idx) => {
            const parts = m.name.split(' ');
            const first = parts.slice(0, -1).join(' ');
            const last = parts[parts.length - 1];
            return `
              <div class="team-card wc-hover-card" role="button" tabindex="0" aria-label="View profile for ${m.name}" onclick="openTeamModal(${idx})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openTeamModal(${idx});}">
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
      </div>
    </section>

    <!-- ======================================================================
         6. ARTICLES (Architectural Notes & Practice Insights — Upgradeable via Sheet)
         ====================================================================== -->
    <section id="articles" class="py-14 md:py-20 border-b border-[#DDD8CE] relative">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 reveal-head">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.article} Studio Journal &amp; Insights
            </span>
            <h2 class="portfolio-section-title">ARTICLES_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Technical notes on Nepal seismic compliance, climate-responsive architecture, materials, and interior craft.
            </p>
          </div>
          <div id="cms-articles-count" class="text-xs font-bold uppercase tracking-widest text-[#767070]">
            ${articlesData.length} Published Notes
          </div>
        </div>

        <div id="articles-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-card">
          ${articlesData.map((a, idx) => `
            <article class="project-card wc-hover-card cursor-pointer" role="button" tabindex="0" aria-label="Read article: ${a.heading}" onclick="openArticleModal(${idx})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openArticleModal(${idx});}">
              <div class="aspect-video overflow-hidden bg-[#E2DFD8] relative">
                <img src="${a.image}" alt="${a.heading}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
              <div class="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <div class="flex items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-widest text-[#8F0000] font-bold mb-1.5">
                    <span>${a.category}</span>
                    <span class="text-[#767070] font-normal">${a.date}</span>
                  </div>
                  <h3 class="text-sm font-bold text-[#111111] leading-snug mb-2" style="font-family: var(--font-sans);">${a.heading}</h3>
                  <p class="text-xs text-[#767070] leading-relaxed" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${a.desc}</p>
                </div>
                <div class="pt-2.5 border-t border-[#DDD8CE]/70 flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider">
                  <span class="text-[#767070] text-[10px] font-mono">Read Preview</span>
                  ${a.link
                    ? `<a href="${a.link}" ${/^https?:\/\//i.test(a.link) ? 'target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();"' : `onclick="event.stopPropagation(); return !handleSmartHrefClick(event, '${a.link}');"`} class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#8F0000] text-white hover:bg-[#B00000] no-underline transition-colors text-[10px]">For More Details &rarr;</a>`
                    : `<button type="button" onclick="event.stopPropagation(); openArticleModal(${idx});" class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#8F0000] text-white hover:bg-[#B00000] border-0 cursor-pointer transition-colors text-[10px] font-bold uppercase tracking-wider">For More Details &rarr;</button>`}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ======================================================================
         7. REVIEWS (Client & Commission Reviews)
         ====================================================================== -->
    <section id="reviews" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] wc-section-wash">
      <span id="testimonials" class="sr-only"></span>
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 reveal-head">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.quote} Verified Client &amp; Commission Reviews
            </span>
            <h2 class="portfolio-section-title">CLIENT REVIEWS_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Project feedback across commercial, residential, and civic commissions across Nepal.
            </p>
          </div>
          <a href="#contact" class="text-xs font-bold uppercase tracking-wider text-[#8F0000] no-underline hover:underline">
            Discuss Your Brief &rarr;
          </a>
        </div>

        <div id="reviews-grid" class="hairline-matrix-3 reveal-card">
          ${reviewsData.map(r => `
            <div class="hairline-matrix-cell flex flex-col justify-between gap-4">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span>${icons.quote}</span>
                  <span class="inline-flex items-center gap-0.5 text-[11px] font-bold text-[#8F0000]" aria-label="${r.rating} out of 5 stars">
                    ${Array.from({ length: r.rating }).map(() => icons.star).join('')}
                  </span>
                </div>
                <p class="text-sm text-[#2A2A2A] leading-relaxed italic font-serif">&ldquo;${r.quote}&rdquo;</p>
              </div>
              <div class="pt-3 border-t border-[#DDD8CE]/70 flex items-end justify-between gap-2">
                <div>
                  <div class="text-xs font-bold text-[#111111]">${r.author}</div>
                  <div class="text-[11px] text-[#767070] mt-0.5">${r.scope} &bull; ${r.city}</div>
                </div>
                <span class="text-[10px] font-mono text-[#767070]">${r.date}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ======================================================================
         7. FAQS (Expandable Architectural & Engineering Q&A + FAQPage Schema)
         ====================================================================== -->
    <section id="faqs" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA] wc-section-wash">
      <div class="portfolio-container max-w-4xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 reveal-head">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.help} Practice Answers
            </span>
            <h2 class="portfolio-section-title">FAQS_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Common questions on architectural workflow, Nepal NBC structural design, timelines &amp; supervision.
            </p>
          </div>
          <a href="#contact" class="text-xs font-bold uppercase tracking-wider text-[#8F0000] no-underline hover:underline">
            Ask a Specific Question &rarr;
          </a>
        </div>

        <div id="faqs-list" class="border-t border-[#DDD8CE] reveal-card">
          ${faqsData.map((f, idx) => `
            <div class="faq-item ${idx === 0 ? 'is-open' : ''}">
              <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}" onclick="toggleFaqItem(this)">
                <div class="pr-2">
                  <span class="block text-[10px] font-mono uppercase tracking-widest text-[#8F0000] font-bold mb-0.5">${f.category}</span>
                  <span class="text-sm sm:text-base font-bold leading-snug">${f.question}</span>
                </div>
                <span class="faq-plus" aria-hidden="true">+</span>
              </button>
              <div class="faq-body">
                ${f.answer}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ======================================================================
         8. PARTNER COMPANIES (Clean Hairline Logo Matrix & Civic Partners)
         ====================================================================== -->
    <section id="partners" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] relative">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 reveal-head">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
              ${icons.building} Brand &amp; Civic Collaborations
            </span>
            <h2 class="portfolio-section-title">PARTNERS COMPANIES_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Corporate partners, engineering labs, energy ventures, and municipalities we serve.
            </p>
          </div>
          <div id="cms-partners-count" class="text-xs font-bold uppercase tracking-widest text-[#767070]">
            ${clientLogos.length} Partner Organizations
          </div>
        </div>

        <div id="partners-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-l border-[#DDD8CE] reveal-card">
          ${clientLogos.map((l, idx) => `
            <button type="button" class="partner-logo-cell group" aria-label="View details for ${l.name}" onclick="openPartnerModal(${idx})">
              <div class="partner-logo-stage">
                <img src="${l.img}" alt="${l.alt}" class="max-h-14 max-w-[164px] w-auto object-contain rounded-[2px]" loading="lazy" />
              </div>
              <h3 class="partner-cell-name text-xs font-bold uppercase tracking-wider text-[#111111] leading-snug mb-0 transition-colors" style="font-family: var(--font-sans);">${l.name}</h3>
            </button>
          `).join('')}
        </div>

        <div class="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#767070]">
          <span><strong class="text-[#111111]">Civic Partners:</strong> Birgunj Metropolitan City Office &bull; Jeetpur Simara Sub-Metropolitan City</span>
          <span>Kathmandu &bull; Sarlahi &bull; Parsa &bull; Bara</span>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         8. CONTACT (Phone-Optimized Inquiries & Studio Offices)
         ====================================================================== -->
    <section id="contact" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2] relative">
      <div class="portfolio-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div class="lg:col-span-5 flex flex-col gap-5 reveal-card">
            <div>
              <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#8F0000] mb-1">
                ${icons.phone} Studio Offices
              </span>
              <h2 class="portfolio-section-title">CONTACT_</h2>
              <p class="text-sm text-[#767070] mt-2">
                Reach out to start residential, commercial, institutional, or interior commissions.
              </p>
            </div>

            <div class="border-t border-b border-[#DDD8CE] py-4 flex flex-col gap-3.5 text-sm">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#8F0000]" style="font-family: var(--font-sans);">Head Office</h3>
                <p class="font-bold text-[#111111] flex items-center gap-2 mt-0.5">${icons.pin} <span id="cms-contact-head-office">Dhapasi, Tokha-6, Kathmandu 44600</span></p>
              </div>
              <div class="arch-line"></div>
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#8F0000]" style="font-family: var(--font-sans);">Branch Office</h3>
                <p class="font-bold text-[#111111] flex items-center gap-2 mt-0.5">${icons.pin} <span id="cms-contact-branch-office">Main Road (In front of Consulate General of India), Birgunj 44300</span></p>
              </div>
              <div class="arch-line"></div>
              <div class="flex flex-col gap-2 text-xs sm:text-sm">
                <p class="flex items-center gap-2">${icons.mail} <strong>Email:</strong> <a href="mailto:studio@scaleandspaces.com" class="text-[#8F0000] underline">studio@scaleandspaces.com</a></p>
                <p class="flex items-center gap-2">${icons.phone} <strong>Phone:</strong> <a href="tel:+9779703881733" class="text-[#111111] no-underline hover:underline">+977-9703881733</a></p>
                <p><strong>Website:</strong> <a id="cms-contact-website" href="https://scaleandspaces.com.np" class="text-[#111111] no-underline hover:text-[#8F0000]">scaleandspaces.com.np</a></p>
              </div>
            </div>

            <a href="https://wa.me/9779703881733?text=Hello%20Scale%20and%20Spaces,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" class="btn-crimson w-full text-xs py-3">
              ${icons.whatsapp}
              <span id="cms-contact-wa-label">WhatsApp (+977-9703881733)</span>
            </a>
          </div>

          <div class="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#DDD8CE] pt-6 lg:pt-0 lg:pl-10 reveal-card">
            <h3 class="text-xl font-bold serif-heading text-[#111111] mb-1">Start a Project Inquiry</h3>
            <p class="text-xs text-[#767070] mb-5">
              Share your site details directly via WhatsApp for architecture, structural design, or interiors.
            </p>

            <form id="consultation-form" onsubmit="handleInquirySubmit(event)" class="flex flex-col gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="client-name" class="block text-xs font-bold text-[#111111] mb-1">Full Name *</label>
                  <input id="client-name" type="text" required placeholder="Your Name" class="w-full text-base p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none" />
                </div>
                <div>
                  <label for="client-phone" class="block text-xs font-bold text-[#111111] mb-1">Phone / WhatsApp *</label>
                  <input id="client-phone" type="tel" required placeholder="+977 98XXXXXXXX" class="w-full text-base p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="project-type" class="block text-xs font-bold text-[#111111] mb-1">Typology *</label>
                  <select id="project-type" class="w-full text-base p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none">
                    <option value="Residence">Private Residence</option>
                    <option value="Commercial Building">Commercial Tower / Retail</option>
                    <option value="Office / Institutional Building">Institutional / Hospital</option>
                    <option value="Landscape Development">Landscape Masterplan</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Religious Complex">Religious Architecture</option>
                  </select>
                </div>
                <div>
                  <label for="project-location" class="block text-xs font-bold text-[#111111] mb-1">Site City / Location *</label>
                  <input id="project-location" type="text" required placeholder="e.g. Kathmandu / Birgunj" class="w-full text-base p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none" />
                </div>
              </div>

              <div>
                <label for="client-message" class="block text-xs font-bold text-[#111111] mb-1">Brief &amp; Scope</label>
                <textarea id="client-message" rows="3" placeholder="Site area, number of floors, or scope needed..." class="w-full text-base p-2.5 border border-[#DDD8CE] bg-white focus:border-[#8F0000] outline-none"></textarea>
              </div>

              <button type="submit" class="btn-crimson w-full text-xs py-3 mt-1">
                ${icons.send} <span>Send Inquiry via WhatsApp</span>
              </button>
              <p id="form-feedback" class="text-xs text-center text-[#8F0000] font-bold hidden mt-1"></p>
            </form>
          </div>
        </div>

        <!-- FIND US ON GOOGLE (Verified Studio Locations & Interactive Maps) -->
        <div id="studio-locations" class="mt-12 pt-10 border-t border-[#DDD8CE] reveal-card">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8F0000] font-bold mb-1">
                ${icons.pin} Find Us On Google
              </span>
              <h3 class="text-xl sm:text-2xl font-bold serif-heading text-[#111111]">FIND US ON GOOGLE_</h3>
            </div>
            <p class="text-xs text-[#767070] m-0">
              Verified Google Business Profiles in Kathmandu &amp; Birgunj
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${officeLocations.map(loc => `
              <div class="bg-white border border-[#DDD8CE] shadow-sm flex flex-col overflow-hidden">
                <div class="p-4 border-b border-[#DDD8CE] bg-[#FBFBF9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1">
                      <span class="text-[10px] font-mono uppercase tracking-widest text-[#8F0000] font-bold">${loc.label}</span>
                      <span id="cms-loc-${loc.id}-rating" class="inline-flex items-center gap-1 text-[10px] font-bold text-[#111111] bg-[#E8E6DF] px-2 py-0.5">${loc.rating} &#9733; (${loc.reviews})</span>
                    </div>
                    <h4 id="cms-loc-${loc.id}-name" class="text-sm sm:text-base font-bold text-[#111111] truncate" style="font-family: var(--font-sans);">${loc.name}</h4>
                    <p id="cms-loc-${loc.id}-address" class="text-xs text-[#767070] mt-0.5 m-0">${loc.address} &bull; <span class="font-mono text-[11px]">${loc.plusCode}</span></p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <a id="cms-loc-${loc.id}-maps" href="${loc.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-crimson text-[11px] py-2 px-3 no-underline whitespace-nowrap">
                      Open in Maps &nearr;
                    </a>
                    <a id="cms-loc-${loc.id}-dir" href="${loc.directionsUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline text-[11px] py-2 px-3 no-underline whitespace-nowrap">
                      Directions
                    </a>
                  </div>
                </div>
                <div class="relative w-full h-[320px] sm:h-[360px] bg-[#E8E6DF]">
                  <iframe
                    id="cms-loc-${loc.id}-embed"
                    src="${loc.embedUrl}"
                    title="Google Map for ${loc.name}"
                    class="w-full h-full border-0 block"
                    loading="lazy"
                    allowfullscreen=""
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER WITH SECTIONS & POLICIES -->
  <footer class="bg-[#1A1A1A] text-[#CCCCCC] py-12 border-t border-[#333333]">
    <div class="portfolio-container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#333333]">
        <div class="lg:col-span-4 flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <img src="assets/logo.svg" alt="Scale and Spaces Pvt. Ltd. mark" style="height: 36px; width: auto; max-width: 44px; filter: invert(1) brightness(2);" onerror="this.src='assets/logo.jpg'" />
            <span class="font-bold text-lg text-white tracking-wide">
              SCALE <span class="text-[#C00000]">AND</span> SPACES
            </span>
          </div>
          <span class="text-xs uppercase tracking-widest text-[#888888] font-semibold">
            Pvt. Ltd. &bull; Architects &bull; Engineers &bull; Interiors
          </span>
          <p id="cms-footer-tagline" class="text-xs text-[#999999] max-w-sm mt-2">
            &ldquo;Designing Spaces, Defining Lifestyles!&rdquo;
          </p>
        </div>

        <div class="lg:col-span-3 flex flex-col gap-1.5 text-xs">
          <span class="text-white font-bold uppercase tracking-wider mb-1">Explore</span>
          <a href="#home" class="text-[#CCCCCC] no-underline hover:text-white">Home</a>
          <a href="#services" class="text-[#CCCCCC] no-underline hover:text-white">Services &amp; Scope</a>
          <a href="#projects" class="text-[#CCCCCC] no-underline hover:text-white">Projects (<span id="cms-footer-projects-count">${projectsData.length}</span>)</a>
          <a href="#about" class="text-[#CCCCCC] no-underline hover:text-white">About Studio</a>
          <a href="#team" class="text-[#CCCCCC] no-underline hover:text-white">Team &bull; Articles &bull; Reviews &bull; Partners</a>
        </div>

        <div class="lg:col-span-2 flex flex-col gap-1.5 text-xs">
          <span class="text-white font-bold uppercase tracking-wider mb-1">Legal &amp; Policies</span>
          <a href="privacy-policy/index.html" class="text-[#CCCCCC] no-underline hover:text-white">Privacy Policy</a>
          <a href="terms-and-conditions/index.html" class="text-[#CCCCCC] no-underline hover:text-white">Terms &amp; Conditions</a>
          <a href="cookie-policy/index.html" class="text-[#CCCCCC] no-underline hover:text-white">Cookie Policy</a>
          <a href="disclaimer/index.html" class="text-[#CCCCCC] no-underline hover:text-white">Studio Disclaimer</a>
        </div>

        <div class="lg:col-span-3 flex flex-col gap-1.5 text-xs">
          <span class="text-white font-bold uppercase tracking-wider mb-1">Offices</span>
          <p><strong class="text-white">Head Office:</strong> <span id="cms-footer-head-office">Dhapasi, Tokha-6, Kathmandu 44600</span></p>
          <p><strong class="text-white">Branch Office:</strong> <span id="cms-footer-branch-office">Main Road (In front of Consulate General of India), Birgunj 44300</span></p>
          <p><strong class="text-white">Email:</strong> <a href="mailto:studio@scaleandspaces.com" class="text-[#CCCCCC] no-underline hover:text-white">studio@scaleandspaces.com</a></p>
          <p><strong class="text-white">Phone:</strong> <a href="tel:+9779703881733" class="text-[#CCCCCC] no-underline hover:text-white">+977-9703881733</a></p>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#888888] gap-3">
        <div>
          &copy; <span id="footer-year">2026</span> Scale and Spaces Private Limited. All rights reserved.
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <a href="privacy-policy/index.html" class="text-[#888888] no-underline hover:text-white">Privacy</a>
          <a href="terms-and-conditions/index.html" class="text-[#888888] no-underline hover:text-white">Terms</a>
          <a href="cookie-policy/index.html" class="text-[#888888] no-underline hover:text-white">Cookies</a>
          <button type="button" onclick="if(window.openCookiePopup)window.openCookiePopup()" class="bg-transparent border-0 p-0 text-xs text-[#888888] hover:text-white underline cursor-pointer font-sans">Cookie Settings</button>
          <span id="cms-footer-domain">scaleandspaces.com.np</span>
        </div>
      </div>
    </div>
  </footer>

  ${cookieBannerMarkup(false)}

  <!-- LIGHTBOX MODAL -->
  <div id="lightbox" class="lightbox-modal" data-lenis-prevent onclick="closeLightboxOnBackdrop(event)">
    <div id="lightboxCard" class="lightbox-content" style="max-width: 1120px;" data-lenis-prevent>
      <div class="shrink-0 p-4 md:p-5 bg-[#E8E6DF] border-b border-[#DDD8CE] flex justify-between items-center">
        <div>
          <span id="modal-category" class="text-xs uppercase tracking-widest text-[#C00000] font-bold block"></span>
          <p id="modal-title" class="text-xl md:text-2xl font-bold text-[#111111]" style="font-family: var(--font-sans);"></p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="openFullscreenImage()" class="btn-outline text-[11px] py-1.5 px-3 hidden sm:inline-flex items-center gap-1.5">
            ${icons.expand} <span>Full Image</span>
          </button>
          <button type="button" onclick="closeLightbox()" aria-label="Close Project Modal" class="p-2 text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
            ${icons.close}
          </button>
        </div>
      </div>

      <div class="lightbox-scroll-body p-5 md:p-7 flex flex-col gap-5" data-lenis-prevent tabindex="-1">
        <div class="lightbox-stage">
          <button type="button" id="modal-prev-btn" onclick="stepLightboxImage(-1)" aria-label="Previous project image" class="lightbox-nav-arrow left-2 hidden">&lsaquo;</button>
          <img id="modal-image" onclick="openFullscreenImage()" title="Click to view full uncropped screen size" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Architectural project detail view" style="max-height: 62dvh; width: 100%; object-fit: contain; cursor: zoom-in; transition: opacity 0.2s ease;" />
          <button type="button" id="modal-next-btn" onclick="stepLightboxImage(1)" aria-label="Next project image" class="lightbox-nav-arrow right-2 hidden">&rsaquo;</button>
          <div class="absolute bottom-2.5 right-2.5 flex items-center gap-2 z-10">
            <span id="modal-photo-counter" class="bg-[#111111]/80 text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 hidden"></span>
            <button type="button" onclick="openFullscreenImage()" class="bg-[#8F0000]/90 hover:bg-[#8F0000] text-white border-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 cursor-pointer inline-flex items-center gap-1">
              ${icons.expand} <span>Expand Full Size</span>
            </button>
          </div>
        </div>

        <div id="modal-gallery" class="flex items-center gap-2.5 overflow-x-auto pb-1 shrink-0" data-lenis-prevent></div>

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
            <a id="modal-project-link" href="#" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-2 text-center hidden">
              <span>For More Details</span> &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FULLSCREEN UN-CROPPED ARCHITECTURAL IMAGE VIEWER -->
  <div id="fullscreenViewer" class="fullscreen-viewer" data-lenis-prevent onclick="if(event.target===this||event.target.id==='fullscreenCanvas')closeFullscreenViewer()">
    <div class="shrink-0 px-4 py-3 bg-[#1A1A1A] border-b border-[#333333] text-white flex items-center justify-between gap-3">
      <div class="min-w-0">
        <span id="fs-title" class="text-xs sm:text-sm font-bold tracking-wide truncate block"></span>
        <span id="fs-counter" class="text-[10px] font-mono uppercase tracking-widest text-[#AAAAAA]"></span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button type="button" id="fs-prev-btn" onclick="stepLightboxImage(-1)" class="bg-[#2C2C2C] hover:bg-[#8F0000] text-white border border-[#444] text-xs px-2.5 py-1.5 cursor-pointer hidden">&lsaquo; Prev</button>
        <button type="button" id="fs-next-btn" onclick="stepLightboxImage(1)" class="bg-[#2C2C2C] hover:bg-[#8F0000] text-white border border-[#444] text-xs px-2.5 py-1.5 cursor-pointer hidden">Next &rsaquo;</button>
        <button type="button" id="fs-zoom-btn" onclick="toggleFullscreenZoom()" class="bg-[#2C2C2C] hover:bg-[#8F0000] text-white border border-[#444] text-xs font-bold uppercase tracking-wider px-3 py-1.5 cursor-pointer">Zoom 100%</button>
        <button type="button" onclick="closeFullscreenViewer()" aria-label="Close Fullscreen Image" class="bg-[#8F0000] hover:bg-[#B00000] text-white border-0 text-xs font-bold uppercase tracking-wider px-3 py-1.5 cursor-pointer">Close &times;</button>
      </div>
    </div>
    <div id="fullscreenCanvas" class="fullscreen-canvas" data-lenis-prevent>
      <img id="fs-image" onclick="toggleFullscreenZoom()" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Fullscreen architectural image" />
    </div>
  </div>

  <!-- TEAM MEMBER PROFILE & CREDENTIALS DOWNLOAD MODAL -->
  <div id="team-modal" class="lightbox-modal" data-lenis-prevent onclick="closeTeamOnBackdrop(event)">
    <div id="teamModalCard" class="lightbox-content" style="max-width: 780px;" data-lenis-prevent>
      <div class="shrink-0 p-4 md:p-5 bg-[#E8E6DF] border-b border-[#DDD8CE] flex justify-between items-center">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#C00000] font-bold block">Practice Specialist Profile</span>
          <p id="team-modal-role" class="text-lg md:text-xl font-bold text-[#111111]" style="font-family: var(--font-sans);"></p>
        </div>
        <button type="button" onclick="closeTeamModal()" aria-label="Close Team Profile Modal" class="p-2 text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
          ${icons.close}
        </button>
      </div>

      <div class="lightbox-scroll-body p-5 md:p-7 flex flex-col gap-6" data-lenis-prevent tabindex="-1">
        <div class="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div class="team-img-wrap shrink-0" style="width: 148px; height: 148px;">
            <img id="team-modal-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Team member portrait" />
          </div>
          <div class="flex-1 text-center sm:text-left">
            <h3 id="team-modal-name" class="text-2xl font-bold tracking-wide text-[#EC7C30] mb-1" style="font-family: var(--font-sans);"></h3>
            <p id="team-modal-qual" class="text-xs font-bold uppercase tracking-wider text-[#8F0000] mb-3"></p>
            <p id="team-modal-bio" class="text-sm text-[#333333] leading-relaxed mb-4"></p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-b border-[#DDD8CE] py-3 text-left">
              <div><strong class="text-[#767070] uppercase tracking-wider">Studio Office:</strong><span id="team-modal-office" class="block font-bold text-[#111111] mt-0.5"></span></div>
              <div><strong class="text-[#767070] uppercase tracking-wider">Practice Focus:</strong><span id="team-modal-exp" class="block font-bold text-[#111111] mt-0.5"></span></div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div>
            <h4 class="font-bold uppercase tracking-wider text-[#111111] mb-1.5">Specialization</h4>
            <p id="team-modal-spec" class="text-[#444444] leading-relaxed"></p>
            <h4 class="font-bold uppercase tracking-wider text-[#111111] mt-4 mb-1.5">Selected Involvements</h4>
            <p id="team-modal-projects" class="text-[#444444] leading-relaxed"></p>
          </div>

          <div class="bg-white border border-[#DDD8CE] p-4 flex flex-col justify-between gap-4">
            <div>
              <span class="text-[11px] font-mono uppercase tracking-widest text-[#8F0000] font-bold block mb-1">Downloads &amp; Credentials</span>
              <p id="team-modal-cv-label" class="text-sm font-bold text-[#111111] mb-1"></p>
              <p class="text-[11px] text-[#767070] leading-relaxed">
                Download official studio profile, credentials summary, and project involvement brief.
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <button type="button" id="team-modal-download-btn" onclick="downloadTeamDossier()" class="btn-crimson w-full text-xs py-2.5">
                ${icons.download} <span>Download Profile / CV</span>
              </button>
              <a id="team-modal-email-link" href="mailto:studio@scaleandspaces.com" class="btn-outline w-full text-xs py-2 text-center no-underline">
                ${icons.mail} <span>Contact Via Studio Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- PARTNER DETAIL & OFFICIAL WEBSITE MODAL -->
  <div id="partner-modal" class="lightbox-modal" data-lenis-prevent onclick="closePartnerOnBackdrop(event)">
    <div id="partnerModalCard" class="lightbox-content" style="max-width: 640px;" data-lenis-prevent>
      <div class="shrink-0 p-4 md:p-5 bg-[#E8E6DF] border-b border-[#DDD8CE] flex justify-between items-center">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#C00000] font-bold block">Partner Organization</span>
          <p id="partner-modal-name" class="text-lg md:text-xl font-bold text-[#111111]" style="font-family: var(--font-sans);"></p>
        </div>
        <button type="button" onclick="closePartnerModal()" aria-label="Close Partner Details" class="p-2 text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
          ${icons.close}
        </button>
      </div>
      <div class="lightbox-scroll-body p-5 md:p-7 flex flex-col gap-5" data-lenis-prevent tabindex="-1">
        <div class="bg-white border border-[#DDD8CE] p-6 flex items-center justify-center min-h-[120px]">
          <img id="partner-modal-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Partner organization logo" class="max-h-20 max-w-[260px] w-auto object-contain rounded-[2px]" />
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">Collaboration &amp; Practice Overview</h4>
          <p id="partner-modal-desc" class="text-sm text-[#333333] leading-relaxed"></p>
        </div>
        <div class="pt-4 border-t border-[#DDD8CE] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a id="partner-modal-site-btn" href="#" target="_blank" rel="noopener noreferrer" class="btn-crimson text-xs py-2.5 px-5 text-center no-underline">
            <span>Visit Official Website &nearr;</span>
          </a>
          <a href="#contact" onclick="closePartnerModal()" class="btn-outline text-xs py-2.5 px-5 text-center no-underline">
            <span>Discuss Partnership</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ARTICLE FULL VIEWER MODAL -->
  <div id="article-modal" class="lightbox-modal" data-lenis-prevent onclick="closeArticleOnBackdrop(event)">
    <div id="articleModalCard" class="lightbox-content" style="max-width: 780px;" data-lenis-prevent>
      <div class="shrink-0 p-4 md:p-5 bg-[#E8E6DF] border-b border-[#DDD8CE] flex justify-between items-center">
        <div>
          <span id="article-modal-meta" class="text-xs uppercase tracking-widest text-[#C00000] font-bold block"></span>
          <p id="article-modal-title" class="text-lg md:text-xl font-bold text-[#111111]" style="font-family: var(--font-sans);"></p>
        </div>
        <button type="button" onclick="closeArticleModal()" aria-label="Close Article Modal" class="p-2 text-[#111] hover:text-[#8F0000] bg-transparent border-0 cursor-pointer">
          ${icons.close}
        </button>
      </div>
      <div class="lightbox-scroll-body p-5 md:p-7 flex flex-col gap-5" data-lenis-prevent tabindex="-1">
        <div class="border border-[#DDD8CE] overflow-hidden bg-black/5 flex items-center justify-center">
          <img id="article-modal-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Article illustration" style="max-height: 46vh; width: 100%; object-fit: cover;" />
        </div>
        <div class="text-sm sm:text-base text-[#2A2A2A] leading-relaxed whitespace-pre-line" id="article-modal-body"></div>
        <div class="pt-4 border-t border-[#DDD8CE] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a id="article-modal-link-btn" href="#" target="_blank" rel="noopener noreferrer" class="btn-crimson text-xs py-2.5 px-5 text-center no-underline">
            <span>For More Details &nearr;</span>
          </a>
          <a href="#contact" onclick="closeArticleModal()" class="btn-outline text-xs py-2.5 px-5 text-center no-underline">
            <span>Consult Our Architects</span>
          </a>
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
    let projects = ${JSON.stringify(projectsData)};
    let teamMembers = ${JSON.stringify(teamData)};
    let articlesList = ${JSON.stringify(articlesData)};
    let reviewsList = ${JSON.stringify(reviewsData)};
    let faqsList = ${JSON.stringify(faqsData)};
    let partnersList = ${JSON.stringify(clientLogos)};
    const scopeServicesList = ${JSON.stringify(scopeItems)};

    // Copyright year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Discrete Cookie Consent Preference Persistence
    ${cookieBannerScript}

    // Category Filtering with Clean URL Sync & GSAP Staggered Entrance (scoped strictly to #projects-grid)
    const projectCountEl = document.getElementById('project-count');
    let currentCategoryFilter = 'all';

    function getValidCategories() {
      const cats = ['all'];
      document.querySelectorAll('#projects-grid .project-card').forEach(function(card) {
        const c = card.getAttribute('data-category');
        if (c && cats.indexOf(c) === -1) cats.push(c);
      });
      document.querySelectorAll('.filter-tab[data-category]').forEach(function(t) {
        const c = t.getAttribute('data-category');
        if (c && cats.indexOf(c) === -1) cats.push(c);
      });
      return cats;
    }

    function applyFilter(cat, updateUrl) {
      const validCategories = getValidCategories();
      const targetCat = validCategories.indexOf(cat) !== -1 ? cat : 'all';
      currentCategoryFilter = targetCat;
      document.querySelectorAll('.filter-tab').forEach(function(t) {
        t.classList.toggle('active', t.getAttribute('data-category') === targetCat);
      });
      document.querySelectorAll('.discipline-card').forEach(function(dc) {
        dc.classList.toggle('is-active', dc.getAttribute('data-cat') === targetCat);
      });

      const liveCards = document.querySelectorAll('#projects-grid .project-card');
      const shown = [];
      liveCards.forEach(function(card) {
        const cardCat = card.getAttribute('data-category');
        if (targetCat === 'all' || cardCat === targetCat) {
          card.style.display = 'flex';
          shown.push(card);
        } else {
          card.style.display = 'none';
        }
      });

      if (projectCountEl) projectCountEl.textContent = shown.length;

      if (updateUrl && window.history && window.history.replaceState) {
        const nextUrl = targetCat === 'all'
          ? window.location.pathname + '#projects'
          : window.location.pathname + '?category=' + encodeURIComponent(targetCat) + '#projects';
        try { window.history.replaceState(null, '', nextUrl); } catch (err) {}
      }

      if (window.gsap && shown.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(
          shown,
          { opacity: 0, y: 20, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.035, ease: 'power3.out', clearProps: 'transform,opacity' }
        );
      }
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }

    const filterRowEl = document.querySelector('.filter-scroll-row');
    if (filterRowEl) {
      filterRowEl.addEventListener('click', function(e) {
        const tab = e.target && e.target.closest ? e.target.closest('.filter-tab') : null;
        if (tab) applyFilter(tab.getAttribute('data-category'), true);
      });
    }

    // Apply ?category= URL filter cleanly on initial load if supplied
    (function syncInitialUrlFilter() {
      try {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category');
        if (cat && cat !== 'all') {
          applyFilter(cat, false);
        }
      } catch (err) {}
    })();

    function selectCategoryFilter(cat) {
      applyFilter(cat, true);
      const sec = document.getElementById('projects');
      if (sec) {
        if (window.lenisInstance) {
          window.lenisInstance.scrollTo(sec, { offset: -76, duration: 0.9 });
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

    function openModalOverlay(modalEl, cardEl) {
      if (!modalEl) return;
      modalEl.classList.add('active');
      modalEl.scrollTop = 0;
      const bodyEl = modalEl.querySelector('.lightbox-scroll-body');
      if (bodyEl) bodyEl.scrollTop = 0;
      if (cardEl) cardEl.scrollTop = 0;
      document.documentElement.classList.add('modal-open');
      if (window.lenisInstance) window.lenisInstance.stop();
      if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(modalEl, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
        if (cardEl) gsap.fromTo(cardEl, { opacity: 0, y: 24, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'expo.out', clearProps: 'transform' });
      }
      if (bodyEl && typeof bodyEl.focus === 'function') {
        try { bodyEl.focus({ preventScroll: true }); } catch (err) {}
      }
    }

    function closeModalOverlay(modalEl) {
      if (!modalEl || !modalEl.classList.contains('active')) return;
      modalEl.classList.remove('active');
      if (!document.querySelector('.lightbox-modal.active')) {
        document.documentElement.classList.remove('modal-open');
        if (window.lenisInstance) window.lenisInstance.start();
      }
    }

    let activeProjectImages = [];
    let activeProjectIndex = 0;
    let activeProjectTitle = '';
    const fsViewer = document.getElementById('fullscreenViewer');
    const fsCanvas = document.getElementById('fullscreenCanvas');
    const fsImage = document.getElementById('fs-image');
    const fsTitleEl = document.getElementById('fs-title');
    const fsCounterEl = document.getElementById('fs-counter');
    const fsZoomBtn = document.getElementById('fs-zoom-btn');

    function setLightboxImageIndex(idx) {
      if (!activeProjectImages.length) return;
      const total = activeProjectImages.length;
      activeProjectIndex = ((idx % total) + total) % total;
      const imgUrl = activeProjectImages[activeProjectIndex];
      modalImage.style.opacity = '0.4';
      setTimeout(function() {
        modalImage.src = imgUrl;
        modalImage.style.opacity = '1';
      }, 90);
      if (fsImage) fsImage.src = imgUrl;

      const thumbs = modalGallery.querySelectorAll('img');
      thumbs.forEach(function(i, tIdx) {
        i.style.borderColor = tIdx === activeProjectIndex ? '#8F0000' : '#DDD8CE';
      });
      const counterEl = document.getElementById('modal-photo-counter');
      if (counterEl) {
        if (total > 1) {
          counterEl.textContent = 'Photo ' + (activeProjectIndex + 1) + ' / ' + total;
          counterEl.classList.remove('hidden');
        } else {
          counterEl.classList.add('hidden');
        }
      }
      if (fsCounterEl) {
        fsCounterEl.textContent = total > 1 ? ('Photo ' + (activeProjectIndex + 1) + ' of ' + total + ' • Click image to zoom') : 'Click image to zoom 100%';
      }
      const prevBtn = document.getElementById('modal-prev-btn');
      const nextBtn = document.getElementById('modal-next-btn');
      const fsPrev = document.getElementById('fs-prev-btn');
      const fsNext = document.getElementById('fs-next-btn');
      [prevBtn, nextBtn, fsPrev, fsNext].forEach(function(b) {
        if (b) b.classList.toggle('hidden', total <= 1);
      });
    }

    function stepLightboxImage(delta) {
      setLightboxImageIndex(activeProjectIndex + delta);
    }

    function openFullscreenImage() {
      if (!fsViewer || !activeProjectImages.length) return;
      if (fsTitleEl) fsTitleEl.textContent = activeProjectTitle || '';
      if (fsImage) fsImage.src = activeProjectImages[activeProjectIndex];
      if (fsCanvas) fsCanvas.classList.remove('is-zoomed');
      if (fsZoomBtn) fsZoomBtn.textContent = 'Zoom In';
      fsViewer.classList.add('active');
    }

    function closeFullscreenViewer() {
      if (!fsViewer) return;
      fsViewer.classList.remove('active');
      if (fsCanvas) fsCanvas.classList.remove('is-zoomed');
    }

    function toggleFullscreenZoom() {
      if (!fsCanvas) return;
      const zoomed = fsCanvas.classList.toggle('is-zoomed');
      if (fsZoomBtn) fsZoomBtn.textContent = zoomed ? 'Fit Screen' : 'Zoom In';
    }

    function openLightbox(id) {
      const p = projects.find(function(item) { return item.id === id; });
      if (!p) return;

      activeProjectImages = (p.images && p.images.length) ? p.images.slice() : [p.image];
      activeProjectTitle = p.title || '';
      modalTitle.textContent = p.title;
      modalCategory.textContent = p.categoryLabel;
      modalDesc.textContent = p.desc;
      modalClient.textContent = p.client;
      modalLocation.textContent = p.location;
      modalYear.textContent = p.year;

      const waMsg = encodeURIComponent("Hello Scale and Spaces, I would like to inquire regarding your project: " + p.title + " (" + p.location + ").");
      modalInquire.href = "https://wa.me/" + (window.__ssWhatsappNumber || "9779703881733") + "?text=" + waMsg;
      const projLinkEl = document.getElementById('modal-project-link');
      if (projLinkEl) {
        const pHref = normalizeExternalUrl(p.link || '');
        if (pHref) {
          projLinkEl.href = pHref;
          if (/^https?:\\/\\//i.test(pHref)) {
            projLinkEl.setAttribute('target', '_blank');
            projLinkEl.setAttribute('rel', 'noopener noreferrer');
          } else {
            projLinkEl.removeAttribute('target');
            projLinkEl.removeAttribute('rel');
          }
          projLinkEl.classList.remove('hidden');
        } else {
          projLinkEl.classList.add('hidden');
        }
      }

      modalGallery.innerHTML = '';
      if (activeProjectImages.length > 1) {
        activeProjectImages.forEach(function(imgUrl, idx) {
          const thumb = document.createElement('img');
          thumb.src = imgUrl;
          thumb.alt = p.title + ' perspective ' + (idx + 1);
          thumb.style.cssText = 'width:96px;height:64px;object-fit:contain;background:#ECEAE3;cursor:pointer;transition:border-color 0.2s ease;border:2px solid ' + (idx === 0 ? '#8F0000' : '#DDD8CE') + ';';
          thumb.onclick = function() { setLightboxImageIndex(idx); };
          modalGallery.appendChild(thumb);
        });
      }

      setLightboxImageIndex(0);
      openModalOverlay(lightbox, lightboxCard);
    }

    function closeLightbox() {
      closeFullscreenViewer();
      closeModalOverlay(lightbox);
    }

    function closeLightboxOnBackdrop(e) {
      if (e.target === lightbox) closeLightbox();
    }

    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.closeLightboxOnBackdrop = closeLightboxOnBackdrop;
    window.stepLightboxImage = stepLightboxImage;
    window.openFullscreenImage = openFullscreenImage;
    window.closeFullscreenViewer = closeFullscreenViewer;
    window.toggleFullscreenZoom = toggleFullscreenZoom;

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (fsViewer && fsViewer.classList.contains('active')) {
          closeFullscreenViewer();
          return;
        }
        if (lightbox && lightbox.classList.contains('active')) closeLightbox();
        if (typeof closeTeamModal === 'function') closeTeamModal();
        if (typeof closePartnerModal === 'function') closePartnerModal();
        if (typeof closeArticleModal === 'function') closeArticleModal();
      } else if (e.key === 'ArrowLeft' && ((fsViewer && fsViewer.classList.contains('active')) || (lightbox && lightbox.classList.contains('active')))) {
        stepLightboxImage(-1);
      } else if (e.key === 'ArrowRight' && ((fsViewer && fsViewer.classList.contains('active')) || (lightbox && lightbox.classList.contains('active')))) {
        stepLightboxImage(1);
      }
    });

    // Team Member Profile Modal & Printable/Direct CV Downloads
    let activeTeamMember = null;
    const teamModalEl = document.getElementById('team-modal');
    const teamModalCardEl = document.getElementById('teamModalCard');

    function openTeamModal(idx) {
      const m = teamMembers[idx];
      if (!m || !teamModalEl) return;
      activeTeamMember = m;

      const parts = String(m.name || '').split(' ');
      const first = parts.slice(0, -1).join(' ');
      const last = parts[parts.length - 1] || '';

      document.getElementById('team-modal-img').src = m.image || '';
      document.getElementById('team-modal-img').alt = m.name + ' portrait';
      document.getElementById('team-modal-name').innerHTML = escHtml(first) + ' <b>' + escHtml(last) + '</b>';
      document.getElementById('team-modal-role').textContent = m.role || '';
      document.getElementById('team-modal-qual').textContent = m.qualification || 'Practice Specialist';
      document.getElementById('team-modal-bio').textContent = m.bio || '';
      document.getElementById('team-modal-office').textContent = m.office || 'Kathmandu & Birgunj';
      document.getElementById('team-modal-exp').textContent = m.experience || 'Architecture & Engineering';
      document.getElementById('team-modal-spec').textContent = m.specialization || m.role || '';
      document.getElementById('team-modal-projects').textContent = m.keyProjects || 'Scale and Spaces Architectural Works';
      document.getElementById('team-modal-cv-label').textContent = m.cvLabel || (m.name + ' — Profile & CV');
      document.getElementById('team-modal-email-link').href = 'mailto:' + (m.email || 'studio@scaleandspaces.com') + '?subject=' + encodeURIComponent('Profile Inquiry: ' + m.name);

      openModalOverlay(teamModalEl, teamModalCardEl);
    }

    function closeTeamModal() {
      closeModalOverlay(teamModalEl);
    }

    function closeTeamOnBackdrop(e) {
      if (e.target === teamModalEl) closeTeamModal();
    }

    function downloadTeamDossier() {
      if (!activeTeamMember) return;
      const m = activeTeamMember;
      if (m.cvUrl && String(m.cvUrl).trim() !== '' && !String(m.cvUrl).includes('...')) {
        window.open(normalizeSheetMediaUrl(m.cvUrl), '_blank', 'noopener,noreferrer');
        return;
      }
      // Generate clean printable archival profile sheet when external CV URL isn't configured yet
      const cleanName = String(m.name || 'Specialist').replace(/[^a-zA-Z0-9]+/g, '_');
      const openH1 = '<' + 'h1>';
      const closeH1 = '</' + 'h1>';
      const openH2 = '<' + 'h2>';
      const closeH2 = '</' + 'h2>';
      const htmlDoc = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>' + escHtml(m.name) + ' | Scale and Spaces Pvt. Ltd.</title>' +
        '<style>body{font-family:Calibri,Arial,sans-serif;background:#F0EFEA;color:#111;margin:0;padding:40px}.sheet{max-width:760px;margin:0 auto;background:#fff;border:1px solid #ddd;padding:40px}.top{border-bottom:2px solid #8F0000;padding-bottom:16px;margin-bottom:24px}h1{font-family:Georgia,serif;color:#EC7C30;margin:0;font-size:28px}.role{font-weight:bold;color:#111;margin-top:4px;font-size:16px}h2{font-size:13px;text-transform:uppercase;letter-spacing:1.4px;color:#8F0000;border-bottom:1px solid #eee;padding-bottom:4px;margin-top:22px}p{font-size:14px;line-height:1.65;color:#333}.foot{margin-top:32px;padding-top:14px;border-top:1px solid #ddd;font-size:12px;color:#666}@media print{body{background:#fff;padding:0}.sheet{border:none}}</style></head><body>' +
        '<div class="sheet"><div class="top"><div style="font-size:11px;letter-spacing:2px;color:#767070;font-weight:bold;">SCALE AND SPACES PVT. LTD. &bull; ARCHITECTS &bull; ENGINEERS</div>' +
        openH1 + escHtml(m.name) + closeH1 + '<div class="role">' + escHtml(m.role) + ' &mdash; ' + escHtml(m.office || '') + '</div></div>' +
        openH2 + 'Overview &amp; Practice Role' + closeH2 + '<p>' + escHtml(m.bio) + '</p>' +
        openH2 + 'Credentials &amp; Qualification' + closeH2 + '<p><strong>Qualification / Status:</strong> ' + escHtml(m.qualification || '') + '<br><strong>Focus:</strong> ' + escHtml(m.experience || '') + '</p>' +
        openH2 + 'Core Specialization' + closeH2 + '<p>' + escHtml(m.specialization || '') + '</p>' +
        openH2 + 'Selected Project Involvements' + closeH2 + '<p>' + escHtml(m.keyProjects || '') + '</p>' +
        '<div class="foot"><strong>Head Office:</strong> Tokha-6, Kathmandu &bull; <strong>Contact Office:</strong> Birgunj-12, Parsa &bull; <strong>Email:</strong> studio@scaleandspaces.com &bull; <strong>Website:</strong> https://scaleandspaces.com.np/</div>' +
        '</div></body></html>';

      const blob = new Blob([htmlDoc], { type: 'text/html;charset=utf-8' });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'Scale_and_Spaces_' + cleanName + '_Profile.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function() { URL.revokeObjectURL(blobUrl); }, 2000);
    }

    function toggleFaqItem(btn) {
      const item = btn && btn.closest ? btn.closest('.faq-item') : null;
      if (!item) return;
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    }

    function escHtml(str) {
      return String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function normalizeSheetMediaUrl(url) {
      const raw = String(url || '').trim();
      if (!raw) return '';
      const driveMatch = raw.match(/https?:\\/\\/drive\\.google\\.com\\/(?:file\\/d\\/|open\\?id=|uc\\?[^#]*id=)([a-zA-Z0-9_-]+)/);
      if (driveMatch && driveMatch[1]) {
        return 'https://lh3.googleusercontent.com/d/' + driveMatch[1] + '=w1600';
      }
      return raw;
    }

    function normalizeExternalUrl(raw) {
      let s = String(raw || '').trim();
      if (!s) return '';
      const hlMatch = s.match(/^=HYPERLINK\\(\\s*"([^"]+)"/i);
      if (hlMatch && hlMatch[1]) s = hlMatch[1].trim();
      const mdMatch = s.match(/^\\[[^\\]]+\\]\\((https?:\\/\\/[^)]+)\\)$/i);
      if (mdMatch && mdMatch[1]) s = mdMatch[1].trim();
      if (/^(javascript|data|vbscript):/i.test(s)) return '';
      if (/^(https?:\\/\\/|#|\\?|\\/)/i.test(s)) return s;
      return 'https://' + s;
    }

    function replayLogoStroke(containerEl, durationMs) {
      if (!containerEl || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
      const dur = durationMs || 760;
      const paths = containerEl.querySelectorAll('.ss-logo-mask-path, .ss-logo-pen-trace');
      paths.forEach(function(pathEl) {
        if (typeof pathEl.animate === 'function') {
          try {
            pathEl.getAnimations().forEach(function(a) { a.cancel(); });
            pathEl.animate(
              [{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }],
              { duration: dur, easing: 'cubic-bezier(0.45, 0, 0.55, 1)', fill: 'forwards' }
            );
          } catch (e) {}
        }
      });
    }
    window.replayLogoStroke = replayLogoStroke;

    let __ssVeilTimer = null;
    function playLogoTransition(label, durationMs, blocking) {
      const veil = document.getElementById('ssTransitionVeil');
      const labelEl = document.getElementById('ssTransitionLabel');
      if (!veil) return;
      if (labelEl) labelEl.textContent = label || 'Scale & Spaces';
      clearTimeout(__ssVeilTimer);
      veil.classList.toggle('is-blocking', !!blocking);
      veil.classList.add('is-active');
      replayLogoStroke(veil, Math.max(420, (durationMs || 720) - 120));
      if (!blocking) {
        __ssVeilTimer = setTimeout(function() {
          veil.classList.remove('is-active', 'is-blocking');
        }, durationMs || 720);
      }
    }
    window.playLogoTransition = playLogoTransition;

    window.addEventListener('pageshow', function() {
      const veil = document.getElementById('ssTransitionVeil');
      if (veil) veil.classList.remove('is-active', 'is-blocking');
    });

    function handleSmartHrefClick(e, rawUrl) {
      const href = normalizeExternalUrl(rawUrl);
      if (!href) return false;
      if (/^https?:\\/\\//i.test(href)) return false;
      if (href.indexOf('?category=') !== -1) {
        try {
          const cat = decodeURIComponent(href.split('?category=')[1].split('#')[0] || '');
          if (cat && window.selectCategoryFilter) {
            if (e) { e.preventDefault(); e.stopPropagation(); }
            if (typeof closeArticleModal === 'function') closeArticleModal();
            window.selectCategoryFilter(cat);
            return true;
          }
        } catch (err) {}
      }
      if (href.charAt(0) === '#') {
        const target = document.querySelector(href);
        if (target) {
          if (e) { e.preventDefault(); e.stopPropagation(); }
          if (typeof closeArticleModal === 'function') closeArticleModal();
          if (window.lenisInstance) window.lenisInstance.scrollTo(target, { offset: -76, duration: 0.9 });
          else target.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
      }
      return false;
    }
    window.handleSmartHrefClick = handleSmartHrefClick;

    function renderPartnersGrid(list) {
      const ptGrid = document.getElementById('partners-grid');
      if (!ptGrid || !list || !list.length) return;
      partnersList = list;
      ptGrid.innerHTML = list.map(function(l, idx) {
        const logoUrl = normalizeSheetMediaUrl(l.img || l.Logo_URL);
        const name = (l.name || l.Name || 'Partner').trim();
        return '<button type="button" class="partner-logo-cell group" aria-label="View details for ' + escHtml(name) + '" onclick="openPartnerModal(' + idx + ')">' +
          '<div class="partner-logo-stage">' +
          (logoUrl ? '<img src="' + escHtml(logoUrl) + '" alt="' + escHtml(l.alt || (name + ' logo')) + '" class="max-h-14 max-w-[164px] w-auto object-contain rounded-[2px]" loading="lazy" />' : '') +
          '</div>' +
          '<h3 class="partner-cell-name text-xs font-bold uppercase tracking-wider text-[#111111] leading-snug mb-0 transition-colors" style="font-family: var(--font-sans);">' + escHtml(name) + '</h3>' +
          '</button>';
      }).join('');
      const ptCount = document.getElementById('cms-partners-count');
      if (ptCount) ptCount.textContent = list.length + ' Partner Organizations';
    }

    const partnerModalEl = document.getElementById('partner-modal');
    const partnerModalCardEl = document.getElementById('partnerModalCard');
    function openPartnerModal(idx) {
      const p = partnersList[idx];
      if (!p) return;
      const name = (p.name || p.Name || 'Partner Organization').trim();
      const desc = (p.desc || p.Description || '').trim();
      const logo = normalizeSheetMediaUrl(p.img || p.Logo_URL);
      const url = normalizeExternalUrl(p.url || p.Website);

      if (!desc && url) {
        window.open(url, '_blank', 'noopener,noreferrer');
        return;
      }
      if (!partnerModalEl) return;

      document.getElementById('partner-modal-name').textContent = name;
      const imgEl = document.getElementById('partner-modal-img');
      if (imgEl) {
        imgEl.src = logo || '';
        imgEl.alt = name + ' logo';
      }
      document.getElementById('partner-modal-desc').textContent = desc || (name + ' — collaborating partner organization with Scale and Spaces Pvt. Ltd.');
      const siteBtn = document.getElementById('partner-modal-site-btn');
      if (siteBtn) {
        if (url) {
          siteBtn.href = url;
          siteBtn.style.display = 'inline-flex';
        } else {
          siteBtn.style.display = 'none';
        }
      }

      openModalOverlay(partnerModalEl, partnerModalCardEl);
    }
    function closePartnerModal() {
      closeModalOverlay(partnerModalEl);
    }
    function closePartnerOnBackdrop(e) {
      if (e.target === partnerModalEl) closePartnerModal();
    }

    function renderArticlesGrid(list) {
      const aGrid = document.getElementById('articles-grid');
      if (!aGrid || !list || !list.length) return;
      articlesList = list;
      aGrid.innerHTML = list.map(function(a, idx) {
        const imgUrl = normalizeSheetMediaUrl(a.image || a.Image_URL);
        const linkHref = normalizeExternalUrl(a.link || a.Link);
        return '<article class="project-card wc-hover-card cursor-pointer" role="button" tabindex="0" aria-label="Read article: ' + escHtml(a.heading) + '" onclick="openArticleModal(' + idx + ')" onkeydown="if(event.key===\\'Enter\\'||event.key===\\' \\'){event.preventDefault();openArticleModal(' + idx + ');}">' +
          '<div class="aspect-video overflow-hidden bg-[#E2DFD8] relative">' +
          (imgUrl ? '<img src="' + escHtml(imgUrl) + '" alt="' + escHtml(a.heading) + '" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />' : '') +
          '</div>' +
          '<div class="p-4 flex flex-col flex-1 justify-between gap-3"><div>' +
          '<div class="flex items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-widest text-[#8F0000] font-bold mb-1.5">' +
          '<span>' + escHtml(a.category || 'Studio Article') + '</span>' +
          '<span class="text-[#767070] font-normal">' + escHtml(a.date || '') + '</span></div>' +
          '<h3 class="text-sm font-bold text-[#111111] leading-snug mb-2" style="font-family: var(--font-sans);">' + escHtml(a.heading) + '</h3>' +
          '<p class="text-xs text-[#767070] leading-relaxed" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">' + escHtml(a.desc) + '</p></div>' +
          '<div class="pt-2.5 border-t border-[#DDD8CE]/70 flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider">' +
          '<span class="text-[#767070] text-[10px] font-mono">Read Preview</span>' +
          (linkHref
            ? '<a href="' + escHtml(linkHref) + '" ' + (/^https?:\\/\\//i.test(linkHref) ? 'target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();"' : 'onclick="event.stopPropagation(); return !handleSmartHrefClick(event, \\'' + escHtml(linkHref).replace(/'/g, '') + '\\');"') + ' class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#8F0000] text-white hover:bg-[#B00000] no-underline transition-colors text-[10px]">For More Details &rarr;</a>'
            : '<button type="button" onclick="event.stopPropagation(); openArticleModal(' + idx + ');" class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#8F0000] text-white hover:bg-[#B00000] border-0 cursor-pointer transition-colors text-[10px] font-bold uppercase tracking-wider">For More Details &rarr;</button>') +
          '</div></div></article>';
      }).join('');
      const aCount = document.getElementById('cms-articles-count');
      if (aCount) aCount.textContent = list.length + ' Published Notes';
    }

    const articleModalEl = document.getElementById('article-modal');
    const articleModalCardEl = document.getElementById('articleModalCard');
    function openArticleModal(idx) {
      const a = articlesList[idx];
      if (!a || !articleModalEl) return;
      const imgUrl = normalizeSheetMediaUrl(a.image || a.Image_URL);
      const linkHref = normalizeExternalUrl(a.link || a.Link);
      document.getElementById('article-modal-meta').textContent = (a.category || 'Studio Article') + (a.date ? ' • ' + a.date : '');
      document.getElementById('article-modal-title').textContent = a.heading || '';
      const imgEl = document.getElementById('article-modal-img');
      if (imgEl) {
        imgEl.src = imgUrl || '';
        imgEl.style.display = imgUrl ? 'block' : 'none';
        imgEl.alt = a.heading || 'Article illustration';
      }
      document.getElementById('article-modal-body').textContent = a.desc || '';
      const linkBtn = document.getElementById('article-modal-link-btn');
      if (linkBtn) {
        if (linkHref) {
          linkBtn.href = linkHref;
          if (/^https?:\\/\\//i.test(linkHref)) {
            linkBtn.setAttribute('target', '_blank');
            linkBtn.setAttribute('rel', 'noopener noreferrer');
            linkBtn.onclick = null;
          } else {
            linkBtn.removeAttribute('target');
            linkBtn.removeAttribute('rel');
            linkBtn.onclick = function() { closeArticleModal(); };
          }
          linkBtn.style.display = 'inline-flex';
        } else {
          linkBtn.style.display = 'none';
        }
      }
      openModalOverlay(articleModalEl, articleModalCardEl);
    }
    function closeArticleModal() {
      closeModalOverlay(articleModalEl);
    }
    function closeArticleOnBackdrop(e) {
      if (e.target === articleModalEl) closeArticleModal();
    }

    window.openTeamModal = openTeamModal;
    window.closeTeamModal = closeTeamModal;
    window.closeTeamOnBackdrop = closeTeamOnBackdrop;
    window.downloadTeamDossier = downloadTeamDossier;
    window.toggleFaqItem = toggleFaqItem;
    window.openPartnerModal = openPartnerModal;
    window.closePartnerModal = closePartnerModal;
    window.closePartnerOnBackdrop = closePartnerOnBackdrop;
    window.openArticleModal = openArticleModal;
    window.closeArticleModal = closeArticleModal;
    window.closeArticleOnBackdrop = closeArticleOnBackdrop;

    // Live Google Sheet CMS Hydration (Upgradable Real-Time Sync: Settings, Hero, About, Services, Projects, Team, Articles, Reviews, FAQs, Partners)
    (function initGoogleSheetCms() {
      const DEFAULT_SHEET_ID = '1ITHet6vFTLALr3u01Db-GGPRh1sAzdtuiGR1fvJruts';
      window.__ssWhatsappNumber = window.__ssWhatsappNumber || '9779703881733';
      let jsonpCounter = 0;
      let lastTabSigs = {};
      let syncInFlight = false;
      let lastSyncAt = 0;
      let lastHeroMetaTitle = '';

      function isTabChanged(tabKey, rows) {
        if (!rows || !rows.length) return false;
        const sig = JSON.stringify(rows);
        if (sig === lastTabSigs[tabKey]) return false;
        lastTabSigs[tabKey] = sig;
        return true;
      }

      function parseGvizTable(json) {
        if (!json || json.status === 'error') return null;
        const table = json.table;
        if (!table || !table.cols || !table.rows || !table.rows.length) return [];
        const hasColLabels = table.cols.some(function(c) { return c && c.label && String(c.label).trim() !== ''; });
        let headers = table.cols.map(function(c, i) {
          return String((c && (c.label || c.id)) || ('col' + i)).replace(/^\\uFEFF/, '').trim();
        });
        let dataRows = table.rows;
        if (!hasColLabels && table.rows.length > 1) {
          const firstRow = table.rows[0];
          if (firstRow && firstRow.c) {
            headers = firstRow.c.map(function(cell, i) {
              const v = cell && cell.v != null ? String(cell.v).replace(/^\\uFEFF/, '').trim() : '';
              return v || headers[i];
            });
            dataRows = table.rows.slice(1);
          }
        }
        const out = [];
        dataRows.forEach(function(r) {
          if (!r || !r.c) return;
          const rowObj = {};
          let hasValue = false;
          headers.forEach(function(h, idx) {
            const cell = r.c[idx];
            const val = cell ? (cell.f != null && cell.v instanceof Date ? cell.f : (cell.v != null ? String(cell.v) : '')) : '';
            if (val !== '') hasValue = true;
            if (h) rowObj[h] = val.trim();
          });
          if (hasValue) out.push(rowObj);
        });
        return out;
      }

      function parseGvizResponse(text) {
        const start = text.indexOf('{');
        const end = text.lastIndexOf('}');
        if (start === -1 || end === -1) return null;
        return parseGvizTable(JSON.parse(text.slice(start, end + 1)));
      }

      function fetchSheetTabJsonp(sheetId, tabName) {
        return new Promise(function(resolve) {
          const cbName = '__ssGvizCb_' + (++jsonpCounter) + '_' + Date.now();
          let settled = false;
          const script = document.createElement('script');
          const timer = setTimeout(function() {
            if (settled) return;
            settled = true;
            try { delete window[cbName]; } catch (e) {}
            if (script.parentNode) script.parentNode.removeChild(script);
            resolve(null);
          }, 8000);
          window[cbName] = function(payload) {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            try { delete window[cbName]; } catch (e) {}
            if (script.parentNode) script.parentNode.removeChild(script);
            resolve(parseGvizTable(payload));
          };
          script.onerror = function() {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            try { delete window[cbName]; } catch (e) {}
            if (script.parentNode) script.parentNode.removeChild(script);
            resolve(null);
          };
          script.src = 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(sheetId) +
            '/gviz/tq?tqx=' + encodeURIComponent('responseHandler:' + cbName) +
            '&headers=1&sheet=' + encodeURIComponent(tabName) + '&_ts=' + Date.now();
          document.head.appendChild(script);
        });
      }

      async function fetchSheetTab(sheetId, tabName) {
        if (window.location && window.location.protocol === 'file:') {
          return fetchSheetTabJsonp(sheetId, tabName);
        }
        try {
          const url = 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(sheetId) +
            '/gviz/tq?tqx=out:json&headers=1&sheet=' + encodeURIComponent(tabName) + '&_ts=' + Date.now();
          const res = await fetch(url, { mode: 'cors', cache: 'no-store' });
          if (res.ok) {
            const txt = await res.text();
            if (txt.indexOf('"status":"error"') === -1 && txt.indexOf('google.visualization.Query.setResponse') !== -1) {
              return parseGvizResponse(txt);
            }
          }
        } catch (err) {}
        return fetchSheetTabJsonp(sheetId, tabName);
      }

      function pickField(row, candidates) {
        if (!row || typeof row !== 'object') return '';
        const keys = Object.keys(row);
        for (let i = 0; i < candidates.length; i++) {
          const want = candidates[i].toLowerCase().replace(/[^a-z0-9]/g, '');
          for (let j = 0; j < keys.length; j++) {
            const kNorm = keys[j].toLowerCase().replace(/[^a-z0-9]/g, '');
            if (kNorm === want && row[keys[j]] !== '') {
              return String(row[keys[j]]).trim();
            }
          }
        }
        return '';
      }

      function renderSmartActionLink(rawUrl, labelText, extraClasses) {
        const href = normalizeExternalUrl(rawUrl);
        if (!href) return '';
        const isExt = /^https?:\\/\\//i.test(href);
        const safeHref = escHtml(href).replace(/'/g, '');
        const attr = isExt
          ? 'target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();"'
          : 'onclick="event.stopPropagation(); return !handleSmartHrefClick(event, \\'' + safeHref + '\\');"';
        return '<a href="' + escHtml(href) + '" ' + attr + ' class="' + (extraClasses || 'text-[#8F0000] font-bold no-underline hover:underline text-[11px] inline-flex items-center gap-1') + '">' + escHtml(labelText || 'For More Details') + ' &rarr;</a>';
      }

      function applySmartLinkAttrs(el, rawUrl) {
        if (!el) return '';
        const href = normalizeExternalUrl(rawUrl);
        if (!href) return '';
        el.href = href;
        if (/^https?:\\/\\//i.test(href)) {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
          el.onclick = null;
        } else {
          el.removeAttribute('target');
          el.removeAttribute('rel');
          el.onclick = function(ev) { return !handleSmartHrefClick(ev, href); };
        }
        return href;
      }

      function kvRowsToMap(rows) {
        const map = {};
        rows.forEach(function(r) {
          const keys = Object.keys(r);
          if (keys.length >= 2) {
            const k = (r.Key || r.key || r[keys[0]] || '').trim();
            const v = (r.Value || r.value || r[keys[1]] || '').trim();
            if (k && v) map[k] = v;
          }
        });
        return map;
      }

      async function runSheetSync() {
        let sheetId = '';
        try {
          const q = new URLSearchParams(window.location.search).get('sheet');
          if (q) sheetId = q.trim();
        } catch (err) {}
        if (!sheetId && (!window.location || window.location.protocol !== 'file:')) {
          try {
            const cfgRes = await fetch('cms-config.json?v=' + Date.now());
            if (cfgRes.ok) {
              const cfg = await cfgRes.json();
              if (cfg && cfg.enabled === false) return;
              if (cfg && cfg.sheetId) sheetId = String(cfg.sheetId).trim();
            }
          } catch (err) {}
        }
        if (!sheetId) sheetId = DEFAULT_SHEET_ID;
        if (!sheetId) return;

        const tabsToLoad = ['Settings', 'Hero', 'About', 'Services', 'Projects', 'Team', 'Articles', 'Reviews', 'FAQs', 'Partners'];
        const results = await Promise.allSettled(tabsToLoad.map(function(name) { return fetchSheetTab(sheetId, name); }));
        const dataByTab = {};
        let readableTabCount = 0;
        tabsToLoad.forEach(function(name, i) {
          const val = (results[i] && results[i].status === 'fulfilled') ? results[i].value : null;
          if (Array.isArray(val)) readableTabCount++;
          dataByTab[name] = Array.isArray(val) ? val : [];
        });

        if (readableTabCount === 0) {
          if (!window.__ssWarnedAuth) {
            window.__ssWarnedAuth = true;
            if (window.console && console.warn) {
              console.warn('[Scale & Spaces CMS] Google Sheet "' + sheetId + '" returned 401/restricted to unauthenticated requests. Enable Share -> Anyone with the link (Viewer) on your Sheet for real-time updates.');
            }
            try {
              if (new URLSearchParams(window.location.search).get('cms') === 'debug') {
                const dbg = document.createElement('div');
                dbg.style.cssText = 'position:fixed;bottom:14px;right:14px;z-index:9998;background:#8F0000;color:#fff;padding:10px 14px;font:12px/1.4 monospace;box-shadow:0 8px 24px rgba(0,0,0,.22);max-width:340px;';
                dbg.textContent = 'Sheet CMS locked (HTTP 401): Open Share in Google Sheets -> General access -> Anyone with the link (Viewer).';
                document.body.appendChild(dbg);
              }
            } catch (e) {}
          }
          return;
        }

        let anyTabChanged = false;

        // 1. Settings overrides (Email, Phone, WhatsApp, Offices, Tagline, Domain, Studio Locations)
        if (isTabChanged('Settings', dataByTab.Settings)) {
          anyTabChanged = true;
          const s = kvRowsToMap(dataByTab.Settings);
          if (s.Email) {
            document.querySelectorAll('a[href^="mailto:"]').forEach(function(a) {
              if (!a.id || a.id !== 'team-modal-email-link') {
                a.href = 'mailto:' + s.Email;
                if (a.textContent.includes('@')) a.textContent = s.Email;
              }
            });
          }
          if (s.Phone && !/^-/.test(s.Phone) && s.Phone.replace(/[^0-9]/g, '').length >= 7) {
            const telDigits = s.Phone.replace(/[^+0-9]/g, '');
            document.querySelectorAll('a[href^="tel:"]').forEach(function(a) {
              a.href = 'tel:' + telDigits;
              a.textContent = s.Phone;
            });
          }
          const waRaw = s.WhatsApp || s.Phone || '';
          const waDigits = String(waRaw).replace(/[^0-9]/g, '');
          if (!/^-/.test(String(waRaw)) && waDigits.length >= 7) {
            window.__ssWhatsappNumber = waDigits;
            document.querySelectorAll('a[href*="wa.me/"]').forEach(function(a) {
              const cur = a.getAttribute('href') || '';
              const qIdx = cur.indexOf('?');
              a.setAttribute('href', 'https://wa.me/' + waDigits + (qIdx !== -1 ? cur.slice(qIdx) : ''));
            });
            const displayPhone = (s.Phone && !/^-/.test(s.Phone)) ? s.Phone : ('+' + waDigits);
            const waMob = document.getElementById('cms-mobile-wa-label');
            if (waMob) waMob.textContent = displayPhone;
            const waCta = document.getElementById('cms-contact-wa-label');
            if (waCta) waCta.textContent = 'WhatsApp (' + displayPhone + ')';
          }
          if (s.Head_Office) {
            ['cms-hero-head-office', 'cms-contact-head-office', 'cms-footer-head-office', 'cms-loc-kathmandu-address'].forEach(function(id) {
              const el = document.getElementById(id);
              if (el) el.textContent = s.Head_Office;
            });
          }
          if (s.Contact_Office) {
            ['cms-hero-branch-office', 'cms-contact-branch-office', 'cms-footer-branch-office', 'cms-loc-birgunj-address'].forEach(function(id) {
              const el = document.getElementById(id);
              if (el) el.textContent = s.Contact_Office;
            });
          }
          if (s.Maps_KTM_Address) {
            const el = document.getElementById('cms-loc-kathmandu-address');
            if (el) el.textContent = s.Maps_KTM_Address;
          }
          if (s.Maps_BRJ_Address) {
            const el = document.getElementById('cms-loc-birgunj-address');
            if (el) el.textContent = s.Maps_BRJ_Address;
          }
          if (s.Maps_KTM_Rating) {
            const el = document.getElementById('cms-loc-kathmandu-rating');
            if (el) el.textContent = s.Maps_KTM_Rating;
          }
          if (s.Maps_BRJ_Rating) {
            const el = document.getElementById('cms-loc-birgunj-rating');
            if (el) el.textContent = s.Maps_BRJ_Rating;
          }
          if (s.Maps_KTM_URL) applySmartLinkAttrs(document.getElementById('cms-loc-kathmandu-maps'), s.Maps_KTM_URL);
          if (s.Maps_KTM_Directions) applySmartLinkAttrs(document.getElementById('cms-loc-kathmandu-dir'), s.Maps_KTM_Directions);
          if (s.Maps_KTM_Embed) {
            const emb = document.getElementById('cms-loc-kathmandu-embed');
            if (emb && /^https:\\/\\//i.test(s.Maps_KTM_Embed)) emb.src = s.Maps_KTM_Embed;
          }
          if (s.Maps_BRJ_URL) applySmartLinkAttrs(document.getElementById('cms-loc-birgunj-maps'), s.Maps_BRJ_URL);
          if (s.Maps_BRJ_Directions) applySmartLinkAttrs(document.getElementById('cms-loc-birgunj-dir'), s.Maps_BRJ_Directions);
          if (s.Maps_BRJ_Embed) {
            const emb = document.getElementById('cms-loc-birgunj-embed');
            if (emb && /^https:\\/\\//i.test(s.Maps_BRJ_Embed)) emb.src = s.Maps_BRJ_Embed;
          }
          if (s.Tagline) {
            const tagEl = document.getElementById('cms-footer-tagline');
            if (tagEl) tagEl.textContent = '\u201C' + s.Tagline + '\u201D';
          }
          if (s.Custom_Domain) {
            const domUrl = normalizeExternalUrl(s.Custom_Domain);
            const domLabel = domUrl.replace(/^https?:\\/\\//i, '').replace(/\\/+$/, '');
            const cw = document.getElementById('cms-contact-website');
            if (cw && domUrl) { cw.href = domUrl; cw.textContent = domLabel; }
            const fd = document.getElementById('cms-footer-domain');
            if (fd && domLabel) fd.textContent = domLabel;
          }
          if (!lastHeroMetaTitle && (s.Site_Title || s.SEO_Title)) {
            document.title = s.Site_Title || s.SEO_Title;
          }
        }

        // 2. Hero overrides (Badge, Headline, Subtitle, Cover Photos, SEO Meta)
        if (isTabChanged('Hero', dataByTab.Hero)) {
          anyTabChanged = true;
          const h = kvRowsToMap(dataByTab.Hero);
          if (h.SEO_Meta_Title) {
            lastHeroMetaTitle = h.SEO_Meta_Title;
            document.title = h.SEO_Meta_Title;
            const ogT = document.querySelector('meta[property="og:title"]');
            if (ogT) ogT.setAttribute('content', h.SEO_Meta_Title);
          }
          if (h.SEO_Meta_Desc) {
            const md = document.querySelector('meta[name="description"]');
            if (md) md.setAttribute('content', h.SEO_Meta_Desc);
            const ogD = document.querySelector('meta[property="og:description"]');
            if (ogD) ogD.setAttribute('content', h.SEO_Meta_Desc);
          }
          if (h.SEO_Meta_Keywords) {
            const mk = document.querySelector('meta[name="keywords"]');
            if (mk) mk.setAttribute('content', h.SEO_Meta_Keywords);
          }
          if (h.Badge) {
            const badgeEl = document.getElementById('cms-hero-badge');
            if (badgeEl) badgeEl.textContent = h.Badge;
          }
          if (h.Subtitle) {
            const subEl = document.getElementById('cms-hero-subtitle');
            if (subEl) {
              const marker = 'Scale and Spaces Pvt. Ltd.';
              const mIdx = h.Subtitle.indexOf(marker);
              if (mIdx !== -1) {
                subEl.innerHTML = escHtml(h.Subtitle.slice(0, mIdx)) +
                  '<strong class="text-[#111111]">' + marker + '</strong>' +
                  escHtml(h.Subtitle.slice(mIdx + marker.length));
              } else {
                subEl.textContent = h.Subtitle;
              }
            }
          }
          if (h.Cover_Color_URL) {
            const hc = document.getElementById('heroBgColor');
            if (hc) hc.src = normalizeSheetMediaUrl(h.Cover_Color_URL);
          }
          if (h.Cover_BW_URL) {
            const hbw = document.querySelector('.hero-bg-bw');
            if (hbw) hbw.src = normalizeSheetMediaUrl(h.Cover_BW_URL);
          }
          if (h.Headline_Line1 || h.Headline_Line2) {
            const h1 = document.getElementById('heroHeadline');
            if (h1) {
              const nextL1 = (h.Headline_Line1 || 'Designing Spaces,').trim();
              const nextL2 = (h.Headline_Line2 || 'Defining Lifestyles').replace(/!+$/, '').trim();
              const normNext = (nextL1 + ' ' + nextL2 + '!').replace(/\\s+/g, ' ').trim();
              const normCur = (h1.textContent || '').replace(/\\s+/g, ' ').trim();
              if (normNext !== normCur) {
                h1.innerHTML = '<span class="block text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style="font-family: Georgia, \\'EB Garamond\\', serif;">' +
                  escHtml(nextL1) + '</span>' +
                  '<span class="block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight" style="font-family: \\'EB Garamond\\', Georgia, serif;">' +
                  escHtml(nextL2) + '<span style="font-size: 1.15em;">!</span></span>';
              }
            }
          }
          if (h.CTA1_Text) {
            const lbl = document.getElementById('cms-hero-cta1-label');
            if (lbl) lbl.textContent = h.CTA1_Text;
          }
          if (h.CTA1_Link) applySmartLinkAttrs(document.getElementById('cms-hero-cta1'), h.CTA1_Link);
          if (h.CTA2_Text) {
            const lbl = document.getElementById('cms-hero-cta2-label');
            if (lbl) lbl.textContent = h.CTA2_Text;
          }
          if (h.CTA2_Link) applySmartLinkAttrs(document.getElementById('cms-hero-cta2'), h.CTA2_Link);
        }

        // 3. About overrides
        if (isTabChanged('About', dataByTab.About)) {
          anyTabChanged = true;
          const ab = kvRowsToMap(dataByTab.About);
          const mapEls = {
            'cms-about-title': ab.Title,
            'cms-about-p1': ab.Bio_P1,
            'cms-about-p2': ab.Bio_P2,
            'cms-stat1-num': ab.Stat1_Num,
            'cms-stat1-label': ab.Stat1_Label,
            'cms-stat2-num': ab.Stat2_Num,
            'cms-stat2-label': ab.Stat2_Label,
            'cms-stat3-num': ab.Stat3_Num,
            'cms-stat3-label': ab.Stat3_Label,
            'cms-stat4-num': ab.Stat4_Num,
            'cms-stat4-label': ab.Stat4_Label,
            'cms-banner-title': ab.Banner_Headline
          };
          Object.keys(mapEls).forEach(function(id) {
            if (mapEls[id]) {
              const el = document.getElementById(id);
              if (el) el.textContent = mapEls[id];
            }
          });
          const abLinkEl = document.getElementById('cms-about-link');
          const abLinkLbl = document.getElementById('cms-about-link-label');
          if (abLinkEl) {
            if (ab.Link && normalizeExternalUrl(ab.Link)) {
              applySmartLinkAttrs(abLinkEl, ab.Link);
              if (abLinkLbl && ab.Link_Text) abLinkLbl.textContent = ab.Link_Text;
              abLinkEl.classList.remove('hidden');
            } else {
              abLinkEl.classList.add('hidden');
            }
          }
        }

        // 4. Services sync (supports Title, Note, Order, Link/URL)
        if (isTabChanged('Services', dataByTab.Services)) {
          anyTabChanged = true;
          const svcRows = dataByTab.Services.filter(function(r) { return pickField(r, ['Title', 'Service', 'Name']); });
          const svcGrid = document.getElementById('services-grid');
          if (svcGrid && svcRows.length) {
            svcRows.sort(function(a, b) { return (Number(pickField(a, ['Order'])) || 999) - (Number(pickField(b, ['Order'])) || 999); });
            svcGrid.innerHTML = svcRows.map(function(item) {
              const title = pickField(item, ['Title', 'Service', 'Name']);
              const note = pickField(item, ['Note', 'Description', 'Details']);
              const link = pickField(item, ['Link', 'URL', 'Website', 'Href']);
              const linkHtml = renderSmartActionLink(link, 'For More Details', 'text-[#8F0000] font-bold no-underline hover:underline text-[11px] shrink-0 ml-2 whitespace-nowrap');
              return '<div class="scope-list-item justify-between"><div class="flex items-center gap-3 min-w-0">' +
                '<span class="inline-block w-2 h-2 bg-[#8F0000] shrink-0"></span>' +
                '<span class="text-sm sm:text-base font-bold text-[#111111]">' + escHtml(title) + '</span></div>' +
                '<div class="flex items-center gap-3 shrink-0 ml-2 text-right">' +
                (note ? '<span class="text-xs text-[#767070]">' + escHtml(note) + '</span>' : '') +
                linkHtml + '</div></div>';
            }).join('');
          }
        }

        // 5. Projects sync (supports all fields + optional Link/URL + dynamic categories)
        if (isTabChanged('Projects', dataByTab.Projects)) {
          anyTabChanged = true;
          const pRows = dataByTab.Projects.filter(function(r) { return pickField(r, ['Title', 'Name']); });
          const pGrid = document.getElementById('projects-grid');
          if (pGrid && pRows.length) {
            projects = pRows.map(function(r, idx) {
              const extraRaw = pickField(r, ['Gallery_URLs', 'Gallery', 'Images']);
              const extraImgs = String(extraRaw || '').split(/[|,\\n]+/).map(normalizeSheetMediaUrl).filter(Boolean);
              const rawImg = pickField(r, ['Image_URL', 'Image', 'Cover']);
              const imgMain = normalizeSheetMediaUrl(rawImg) || extraImgs[0] || 'assets/projects/cover_studio_tower.jpg';
              const imgs = extraImgs.length ? ([imgMain].concat(extraImgs.filter(function(u) { return u !== imgMain; }))) : [imgMain];
              const cat = pickField(r, ['Category', 'Type']) || 'Commercial';
              return {
                id: pickField(r, ['ID', 'Slug']) || ('sheet-project-' + (idx + 1)),
                title: pickField(r, ['Title', 'Name']),
                client: pickField(r, ['Client']) || 'Studio Commission',
                location: pickField(r, ['Location', 'City']) || 'Nepal',
                year: pickField(r, ['Year', 'Date']) || '2025 A.D.',
                category: cat,
                categoryLabel: pickField(r, ['Category_Label']) || cat || 'Architecture',
                image: imgMain,
                images: imgs,
                desc: pickField(r, ['Desc', 'Description', 'Overview']) || '',
                link: normalizeExternalUrl(pickField(r, ['Link', 'URL', 'Website', 'Href']))
              };
            });
            pGrid.innerHTML = projects.map(function(p) {
              const cardLinkHtml = renderSmartActionLink(p.link, 'For More Details', 'text-[#111111] hover:text-[#8F0000] font-bold no-underline hover:underline text-[11px]');
              return '<article class="project-card wc-hover-card" data-category="' + escHtml(p.category) + '" data-id="' + escHtml(p.id) + '">' +
                '<div class="project-image-box" onclick="openLightbox(\\'' + escHtml(p.id).replace(/'/g, '') + '\\')">' +
                '<img src="' + escHtml(p.image) + '" alt="' + escHtml(p.title + ' - ' + p.client) + '" loading="lazy" />' +
                '<div class="project-overlay"><span class="btn-crimson text-xs py-2 px-4 shadow-lg">View Project (' + p.images.length + ')</span></div></div>' +
                '<div class="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white"><div>' +
                '<div class="flex justify-between items-center text-xs text-[#767070] mb-1.5"><span class="font-semibold">' + escHtml(p.location) + '</span><span class="font-bold text-[#111111]">' + escHtml(p.year) + '</span></div>' +
                '<h3 class="text-base sm:text-lg font-bold text-[#C00000] mb-0.5 leading-snug cursor-pointer hover:underline" style="font-family: var(--font-sans);" onclick="openLightbox(\\'' + escHtml(p.id).replace(/'/g, '') + '\\')">' + escHtml(p.title) + '</h3>' +
                '<p class="text-sm font-bold text-[#111111] mb-1.5">' + escHtml(p.client) + '</p>' +
                '<p class="text-xs text-[#767070] leading-relaxed mb-3">' + escHtml(p.desc) + '</p></div>' +
                '<div class="pt-3 border-t border-[#DDD8CE] flex justify-between items-center gap-2 text-xs"><span class="text-[#767070] font-semibold">' + escHtml(p.categoryLabel) + '</span>' +
                '<div class="flex items-center gap-3">' + cardLinkHtml +
                '<button type="button" onclick="openLightbox(\\'' + escHtml(p.id).replace(/'/g, '') + '\\')" class="text-[#8F0000] font-bold bg-transparent border-0 cursor-pointer hover:underline p-0">Inspect &rarr;</button></div></div></div></article>';
            }).join('');
            const filterBar = document.querySelector('.filter-scroll-row');
            if (filterBar) {
              projects.forEach(function(p) {
                if (p.category && !filterBar.querySelector('.filter-tab[data-category="' + CSS.escape(p.category) + '"]')) {
                  const btn = document.createElement('button');
                  btn.type = 'button';
                  btn.className = 'filter-tab';
                  btn.setAttribute('data-category', p.category);
                  btn.textContent = p.category;
                  filterBar.appendChild(btn);
                }
              });
            }
            const allTab = document.querySelector('.filter-tab[data-category="all"]');
            if (allTab) allTab.textContent = 'All (' + projects.length + ')';
            const fProjCount = document.getElementById('cms-footer-projects-count');
            if (fProjCount) fProjCount.textContent = String(projects.length);
            applyFilter(currentCategoryFilter, false);
          }
        }

        // 6. Team sync (supports all fields + CV_URL / Link / Website)
        if (isTabChanged('Team', dataByTab.Team)) {
          anyTabChanged = true;
          const tRows = dataByTab.Team.filter(function(r) { return pickField(r, ['Name']); });
          const tGrid = document.getElementById('team-grid');
          if (tGrid && tRows.length) {
            tRows.sort(function(a, b) { return (Number(pickField(a, ['Order'])) || 999) - (Number(pickField(b, ['Order'])) || 999); });
            teamMembers = tRows.map(function(r) {
              const name = pickField(r, ['Name']);
              return {
                name: name,
                role: pickField(r, ['Role']) || 'Team Member',
                image: normalizeSheetMediaUrl(pickField(r, ['Photo_URL', 'Photo', 'Image_URL', 'Image']) || 'assets/team/team-yateendra.jpg'),
                office: pickField(r, ['Office', 'Location']) || 'Kathmandu & Birgunj',
                experience: pickField(r, ['Experience']) || 'Practice Specialist',
                qualification: pickField(r, ['Qualification']) || 'Studio Specialist',
                specialization: pickField(r, ['Specialization']) || pickField(r, ['Role']) || '',
                bio: pickField(r, ['Bio', 'Description']) || '',
                keyProjects: pickField(r, ['Key_Projects', 'Projects']) || '',
                email: pickField(r, ['Email']) || 'studio@scaleandspaces.com',
                cvLabel: pickField(r, ['CV_Label']) || (name + ' — Profile & CV'),
                cvUrl: normalizeExternalUrl(pickField(r, ['CV_URL', 'Link', 'Website', 'URL']))
              };
            });
            tGrid.innerHTML = teamMembers.map(function(m, idx) {
              const parts = String(m.name).split(' ');
              const first = parts.slice(0, -1).join(' ');
              const last = parts[parts.length - 1] || '';
              return '<div class="team-card wc-hover-card" role="button" tabindex="0" aria-label="View profile for ' + escHtml(m.name) + '" onclick="openTeamModal(' + idx + ')" onkeydown="if(event.key===\\'Enter\\'||event.key===\\' \\'){event.preventDefault();openTeamModal(' + idx + ');}">' +
                '<div class="team-circle-stage"><div class="team-img-wrap"><img src="' + escHtml(m.image) + '" alt="' + escHtml(m.name) + '" loading="lazy" /></div></div>' +
                '<div class="team-name-box">' + escHtml(first) + ' <b>' + escHtml(last) + '</b></div>' +
                '<div class="team-role-box">' + escHtml(m.role) + '</div></div>';
            }).join('');
          }
        }

        // 7. Reviews sync (supports Link/URL + full fields)
        if (isTabChanged('Reviews', dataByTab.Reviews)) {
          anyTabChanged = true;
          const rRows = dataByTab.Reviews.filter(function(r) { return pickField(r, ['Name', 'Author']) && pickField(r, ['Review_Comment', 'Comment', 'Quote']); });
          const rGrid = document.getElementById('reviews-grid');
          if (rGrid && rRows.length) {
            reviewsList = rRows.map(function(r) {
              return {
                author: pickField(r, ['Name', 'Author']),
                rating: Math.max(1, Math.min(5, parseInt(pickField(r, ['Rating']), 10) || 5)),
                city: pickField(r, ['City', 'Location']) || 'Nepal',
                scope: pickField(r, ['Project_Scope', 'Scope']) || 'Architecture',
                quote: pickField(r, ['Review_Comment', 'Comment', 'Quote']),
                date: pickField(r, ['Date', 'Year']) || '',
                link: pickField(r, ['Link', 'URL', 'Website', 'Href'])
              };
            });
            rGrid.innerHTML = reviewsList.map(function(r) {
              const stars = new Array(r.rating + 1).join('&#9733;');
              const revLinkHtml = renderSmartActionLink(r.link, 'For More Details', 'text-[#8F0000] font-bold no-underline hover:underline text-[10px] mt-1 inline-block');
              return '<div class="hairline-matrix-cell flex flex-col justify-between gap-4"><div>' +
                '<div class="flex items-center justify-between gap-2 mb-3"><span class="text-[#8F0000] font-serif text-lg">&ldquo;</span>' +
                '<span class="text-xs font-bold text-[#8F0000]">' + stars + '</span></div>' +
                '<p class="text-sm text-[#2A2A2A] leading-relaxed italic font-serif">&ldquo;' + escHtml(r.quote) + '&rdquo;</p></div>' +
                '<div class="pt-3 border-t border-[#DDD8CE]/70 flex items-end justify-between gap-2"><div>' +
                '<div class="text-xs font-bold text-[#111111]">' + escHtml(r.author) + '</div>' +
                '<div class="text-[11px] text-[#767070] mt-0.5">' + escHtml(r.scope + ' • ' + r.city) + '</div></div>' +
                '<div class="text-right"><span class="text-[10px] font-mono text-[#767070] block">' + escHtml(r.date) + '</span>' + revLinkHtml + '</div></div></div>';
            }).join('');
          }
        }

        // 8. FAQs sync (supports Link/URL + full fields)
        if (isTabChanged('FAQs', dataByTab.FAQs)) {
          anyTabChanged = true;
          const fRows = dataByTab.FAQs.filter(function(r) { return pickField(r, ['Question']) && pickField(r, ['Answer']); });
          const fList = document.getElementById('faqs-list');
          if (fList && fRows.length) {
            fRows.sort(function(a, b) { return (Number(pickField(a, ['Order'])) || 999) - (Number(pickField(b, ['Order'])) || 999); });
            faqsList = fRows.map(function(r) {
              return {
                category: pickField(r, ['Category']) || 'FAQ',
                question: pickField(r, ['Question']),
                answer: pickField(r, ['Answer']),
                link: pickField(r, ['Link', 'URL', 'Website', 'Href'])
              };
            });
            fList.innerHTML = faqsList.map(function(f, idx) {
              const faqLinkHtml = renderSmartActionLink(f.link, 'For More Details', 'text-[#8F0000] font-bold no-underline hover:underline text-xs mt-2 inline-flex items-center gap-1');
              return '<div class="faq-item ' + (idx === 0 ? 'is-open' : '') + '">' +
                '<button type="button" class="faq-trigger" aria-expanded="' + (idx === 0 ? 'true' : 'false') + '" onclick="toggleFaqItem(this)">' +
                '<div class="pr-2"><span class="block text-[10px] font-mono uppercase tracking-widest text-[#8F0000] font-bold mb-0.5">' + escHtml(f.category) + '</span>' +
                '<span class="text-sm sm:text-base font-bold leading-snug">' + escHtml(f.question) + '</span></div>' +
                '<span class="faq-plus" aria-hidden="true">+</span></button>' +
                '<div class="faq-body"><div>' + escHtml(f.answer) + '</div>' + (faqLinkHtml ? '<div>' + faqLinkHtml + '</div>' : '') + '</div></div>';
            }).join('');
          }
        }

        // 9. Partners sync (Shows Logo + Name in grid; full details & website/link redirect on click)
        if (isTabChanged('Partners', dataByTab.Partners)) {
          anyTabChanged = true;
          const ptRows = dataByTab.Partners.filter(function(r) { return pickField(r, ['Logo_URL', 'Logo']) || pickField(r, ['Name', 'Title']); });
          if (ptRows.length) {
            ptRows.sort(function(a, b) { return (Number(pickField(a, ['Order'])) || 999) - (Number(pickField(b, ['Order'])) || 999); });
            const mappedPartners = ptRows.map(function(l) {
              const name = pickField(l, ['Name', 'Title']) || 'Partner';
              return {
                img: normalizeSheetMediaUrl(pickField(l, ['Logo_URL', 'Logo', 'Image_URL'])),
                name: name,
                alt: name + ' logo',
                desc: pickField(l, ['Description', 'Desc', 'Overview']),
                url: normalizeExternalUrl(pickField(l, ['Website', 'Link', 'URL', 'Href']))
              };
            });
            renderPartnersGrid(mappedPartners);
          }
        }

        // 10. Articles sync (Heading, Image_URL, Description, Link/URL, Category, Date, Order)
        if (isTabChanged('Articles', dataByTab.Articles)) {
          anyTabChanged = true;
          const artRows = dataByTab.Articles.filter(function(r) { return pickField(r, ['Heading', 'Title', 'Name']); });
          if (artRows.length) {
            artRows.sort(function(a, b) { return (Number(pickField(a, ['Order'])) || 999) - (Number(pickField(b, ['Order'])) || 999); });
            const mappedArticles = artRows.map(function(a) {
              return {
                heading: pickField(a, ['Heading', 'Title', 'Name']),
                image: normalizeSheetMediaUrl(pickField(a, ['Image_URL', 'Image', 'Cover'])),
                desc: pickField(a, ['Description', 'Summary', 'Desc']),
                link: normalizeExternalUrl(pickField(a, ['Link', 'URL', 'Website', 'Href'])),
                category: pickField(a, ['Category']) || 'Studio Article',
                date: pickField(a, ['Date', 'Year']) || ''
              };
            });
            renderArticlesGrid(mappedArticles);
          }
        }

        if (anyTabChanged && window.ScrollTrigger) ScrollTrigger.refresh();
      }

      function triggerSheetSync(force) {
        const now = Date.now();
        if (syncInFlight) return;
        if (!force && (now - lastSyncAt) < 4000) return;
        syncInFlight = true;
        lastSyncAt = now;
        runSheetSync().catch(function() {}).finally(function() {
          syncInFlight = false;
        });
      }

      triggerSheetSync(true);
      document.addEventListener('visibilitychange', function() {
        if (!document.hidden) triggerSheetSync(false);
      });
      window.addEventListener('focus', function() {
        triggerSheetSync(false);
      });
      setInterval(function() {
        if (!document.hidden) triggerSheetSync(false);
      }, 20000);
    })();

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

      const waUrl = "https://wa.me/" + (window.__ssWhatsappNumber || "9779703881733") + "?text=" + fullMsg;
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
      if (preloader && window.replayLogoStroke) {
        window.replayLogoStroke(preloader, 980);
      }

      // Cross-page navigation loading screen using non-transparent Company Logo draw
      document.querySelectorAll('a[href]').forEach(function(linkEl) {
        const href = linkEl.getAttribute('href') || '';
        const tgt = linkEl.getAttribute('target') || '';
        if (!href || tgt === '_blank' || /^(#|mailto:|tel:|https?:|javascript:)/i.test(href)) return;
        if (!/\\.html($|#|\\?)/i.test(href)) return;
        linkEl.addEventListener('click', function(e) {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          e.preventDefault();
          const pageLabel = (linkEl.textContent || 'Loading').replace(/\\s+/g, ' ').trim();
          if (window.playLogoTransition) window.playLogoTransition(pageLabel, 480, true);
          setTimeout(function() { window.location.href = href; }, 320);
        });
      });

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

      if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true });
      }
      if (window.SplitText) gsap.registerPlugin(SplitText);

      // 1. Initialize Lenis Smooth Inertia Scrolling (never hijacks modal/sub-scroller wheel events)
      if (window.Lenis) {
        const lenis = new Lenis({
          duration: 1.05,
          easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
          smoothWheel: true,
          wheelMultiplier: 1.0,
          prevent: function(node) {
            return !!(node && node.closest && node.closest('.lightbox-modal, .lightbox-content, .lightbox-scroll-body, #mobile-menu, [data-lenis-prevent]'));
          }
        });
        window.lenisInstance = lenis;

        lenis.on('scroll', function() {
          if (window.ScrollTrigger) ScrollTrigger.update();
        });
        gsap.ticker.add(function(time) {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Anchor smooth scrolling via Lenis
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
          anchor.addEventListener('click', function(e) {
            const href = anchor.getAttribute('href');
            if (href && href.length > 1) {
              const target = document.querySelector(href);
              if (target) {
                e.preventDefault();
                lenis.scrollTo(target, { offset: -76, duration: 0.9 });
              }
            }
          });
        });
      }

      if (window.ScrollTrigger && typeof ResizeObserver === 'function') {
        let refreshTimer = null;
        const ro = new ResizeObserver(function() {
          clearTimeout(refreshTimer);
          refreshTimer = setTimeout(function() { ScrollTrigger.refresh(); }, 180);
        });
        ro.observe(document.body);
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
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 95%', once: true }
          });
        });

        gsap.utils.toArray('.reveal-card').forEach(function(el) {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 95%', once: true }
          });
        });

        gsap.from('.scope-grid .scope-list-item', {
          x: -18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: '.scope-grid', start: 'top 92%', once: true }
        });

        gsap.from('.team-grid .team-card', {
          y: 24,
          scale: 0.97,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'expo.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: '.team-grid', start: 'top 92%', once: true }
        });

        ScrollTrigger.batch('.project-card', {
          start: 'top 95%',
          once: true,
          onEnter: function(batch) {
            gsap.from(batch, {
              y: 24,
              opacity: 0,
              duration: 0.6,
              stagger: 0.06,
              ease: 'power3.out',
              clearProps: 'transform,opacity'
            });
          }
        });

        window.addEventListener('load', function() { ScrollTrigger.refresh(); }, { once: true });
      }
    })();
  </script>
</body>
</html>
`;

const legalPages = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy | Scale and Spaces Pvt. Ltd.',
    description: 'Privacy policy describing how Scale and Spaces Private Limited handles consultation inquiries, contact records, and visitor data privacy in Nepal.',
    heading: 'Privacy Policy',
    updated: 'Effective Date: November 18, 2026',
    summary: 'Scale and Spaces Private Limited respects the confidentiality of your residential, commercial, and institutional project briefs submitted through our website, email, or WhatsApp.',
    sections: [
      {
        title: '1. Information We Collect',
        paragraphs: [
          'This portfolio website does not require user registration, accounts, or online payment submissions. Information is collected only when you voluntarily contact our Kathmandu or Birgunj studio via email (studio@scaleandspaces.com), phone (+977-9703881733), or the consultation form that opens a WhatsApp message from your device.'
        ],
        bullets: [
          'Contact name, phone number, and preferred communication handle you enter.',
          'Site location, project typology, plot dimensions, and architectural brief summary.',
          'Essential technical server access logs processed by GitHub Pages hosting infrastructure.'
        ]
      },
      {
        title: '2. How Your Inquiry Information Is Used',
        paragraphs: [
          'Submitted project briefs are reviewed strictly by our architects, engineers, and project coordinators to prepare fee proposals, site survey schedules, architectural feasibility feedback, and design consultations.'
        ],
        bullets: [
          'We do not sell, rent, or distribute client contact records to third-party brokers or marketing lists.',
          'Drawings, soil reports, land ownership documents, and floor plans shared during consultation remain strictly confidential.'
        ]
      },
      {
        title: '3. Local Storage & Communication Channels',
        paragraphs: [
          'When you use the WhatsApp consultation form, your browser redirects to WhatsApp (Meta Platforms) according to your device privacy settings. We store only your cookie notice choice locally in browser storage (`ss_cookie_consent`).'
        ]
      },
      {
        title: '4. Your Rights & Studio Contact',
        paragraphs: [
          'You may request review, correction, or deletion of prior email correspondence at any time by contacting our Head Office (Tokha-6, Dhapasi, Kathmandu) or Contact Office (Birgunj-12, Parsa) at studio@scaleandspaces.com.'
        ]
      }
    ]
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions | Scale and Spaces Pvt. Ltd.',
    description: 'Terms and conditions governing access to portfolio renders, architectural intellectual property, and consultancy engagement with Scale and Spaces Pvt. Ltd.',
    heading: 'Terms & Conditions',
    updated: 'Effective Date: November 18, 2026',
    summary: 'By accessing or browsing the Scale and Spaces Private Limited website, you agree to the intellectual property notices, consultancy scope boundaries, and governing terms below.',
    sections: [
      {
        title: '1. Architectural Intellectual Property & Copyright',
        paragraphs: [
          'All architectural renderings, floor layouts, structural concepts, civic competition boards, brand identity marks, and photographs published in this portfolio remain the intellectual property of Scale and Spaces Private Limited and respective commissioning clients unless governed otherwise by written contract.'
        ],
        bullets: [
          'No 3D image, elevation, emblem, or concept drawing may be copied, redistributed, or constructed without written authorization from Scale and Spaces Pvt. Ltd.',
          'Team portraits, client brand marks, and civic competition boards are presented solely to document completed or commissioned works.'
        ]
      },
      {
        title: '2. Consultancy & Scope Agreements',
        paragraphs: [
          'Browsing this website or submitting a WhatsApp project inquiry does not establish a formal architect-client contract. Formal architectural, structural, MEP, costing, and site supervision engagements begin only upon signing an official Scope of Works agreement with defined fee schedules and deliverables.'
        ]
      },
      {
        title: '3. Portfolio Presentation & Revisions',
        paragraphs: [
          'Scale and Spaces Pvt. Ltd. reserves the right to update, expand, or reorganize portfolio projects, team directories, and technical descriptions without prior notice.'
        ]
      },
      {
        title: '4. Governing Law',
        paragraphs: [
          'These terms are governed by the applicable laws of Nepal, including statutory municipal building bylaws and Nepal National Building Code standards where applicable.'
        ]
      }
    ]
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy | Scale and Spaces Pvt. Ltd.',
    description: 'Cookie and browser storage policy explaining strictly essential functional storage on Scale and Spaces Pvt. Ltd. portfolio pages.',
    heading: 'Cookie Policy',
    updated: 'Effective Date: November 18, 2026',
    summary: 'Scale and Spaces Private Limited keeps browser storage minimal and transparent, avoiding invasive third-party advertising trackers.',
    sections: [
      {
        title: '1. What Cookies & Storage We Use',
        paragraphs: [
          'Our static portfolio uses zero advertising pixels, behavioral profiling cookies, or cross-site ad trackers. We use only lightweight browser storage so interface preferences remain consistent across visits.'
        ],
        bullets: [
          'ss_cookie_consent (Local Storage): remembers whether you accepted or dismissed the bottom privacy notice bar.',
          'Typography Delivery: Google Fonts (`EB Garamond` and `Carlito`) stylesheet delivery subject to Google privacy standards.',
          'Static Hosting: GitHub Pages serves static HTML/CSS/JS bundles without user tracking cookies.'
        ]
      },
      {
        title: '2. Managing Your Browser Storage',
        paragraphs: [
          'You may clear browser site storage or disable cookies at any time through your web browser settings (Chrome, Safari, Edge, Firefox) without losing access to portfolio works or contact details.'
        ]
      }
    ]
  },
  {
    slug: 'disclaimer',
    title: 'Architectural Disclaimer | Scale and Spaces Pvt. Ltd.',
    description: 'Professional disclaimer regarding 3D architectural perspectives, site engineering verification, and construction drawings by Scale and Spaces Pvt. Ltd.',
    heading: 'Studio Disclaimer',
    updated: 'Effective Date: November 18, 2026',
    summary: 'Architectural visualizations displayed on this website illustrate conceptual and built studio commissions and do not replace site-specific engineering or municipal working drawings.',
    sections: [
      {
        title: '1. Conceptual Visualizations vs. Construction Drawings',
        paragraphs: [
          '3D perspectives, walkthrough stills, exterior elevations, and landscape visuals reflect design intent at the time of presentation. Executed field finishes, landscaping maturity, lighting fixtures, and site boundary adjustments may vary during construction or municipal approval stages.'
        ]
      },
      {
        title: '2. Site Engineering & Geotechnical Verification',
        paragraphs: [
          'Actual construction must proceed strictly from stamped structural, sanitary, electrical, and municipal permit drawings issued after site-specific topographical surveying, soil bearing capacity testing, and seismic code compliance under the Nepal National Building Code.'
        ]
      },
      {
        title: '3. Inquiries & Clarifications',
        paragraphs: [
          'For official stamped documentation or clarification on any project showcase, contact our studio directly via studio@scaleandspaces.com or +977-9703881733.'
        ]
      }
    ]
  }
];

function buildLegalPage(page, compiledCss) {
  const cookieControlsSection = page.slug === 'cookie-policy' ? `
      <section class="mt-8 p-5 bg-white border border-[#DDD8CE]">
        <h2 style="margin-top:0;">Manage Your Cookie Preferences</h2>
        <p class="text-sm text-[#444444]">
          Current preference: <strong id="legalCookieStatus" class="text-[#8F0000]">Checking...</strong>
        </p>
        <div class="flex flex-wrap gap-3 mt-3">
          <button type="button" onclick="if(window.setCookiePreferenceChoice)window.setCookiePreferenceChoice('accepted')" class="btn-crimson text-xs py-2 px-4">
            Accept All Cookies
          </button>
          <button type="button" onclick="if(window.setCookiePreferenceChoice)window.setCookiePreferenceChoice('essential')" class="btn-outline text-xs py-2 px-4">
            Essential Only
          </button>
          <button type="button" onclick="if(window.openCookiePopup)window.openCookiePopup()" class="btn-outline text-xs py-2 px-4">
            Open Cookie Notice Popup
          </button>
        </div>
      </section>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="theme-color" content="#8F0000" />
  <meta name="google-site-verification" content="mf4GOtcYonLwbYRts_cwxyovvrpZwiXa3juGaPnaX8I" />
  <link rel="canonical" href="https://scaleandspaces.com.np/${page.slug}/" />
  <link rel="icon" type="image/svg+xml" href="../assets/logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <style>${compiledCss}</style>
</head>
<body class="bg-[#F0EFEA] text-[#111111]">
  <div id="ssTransitionVeil" class="ss-transition-veil is-active" style="background-color:#F0EFEA;background-image:url('../assets/art/watercolor-paper-wash.jpg');background-size:cover;background-position:center;" aria-hidden="true">
    ${animatedCompanyLogoSvg('ssMaskLegalVeil', { className: 'ss-transition-logo-svg', dur: '0.82s', loop: false })}
    <span id="ssTransitionLabel" class="ss-transition-label">${page.heading}</span>
  </div>
  <div class="bg-[#E8E6DF] border-b border-[#DDD8CE] text-xs py-2 text-[#767070] hidden sm:block">
    <div class="portfolio-container flex justify-between items-center gap-2">
      <div><strong class="text-[#111111]">SCALE AND SPACES Pvt. Ltd.</strong> &bull; Architecture &bull; Engineering &bull; Interiors</div>
      <div class="flex items-center gap-4">
        <a href="tel:+9779703881733" class="text-[#111111] no-underline hover:text-[#8F0000]">+977-9703881733</a>
        <a href="mailto:studio@scaleandspaces.com" class="text-[#767070] no-underline hover:text-[#8F0000]">studio@scaleandspaces.com</a>
      </div>
    </div>
  </div>

  <header class="site-nav flex items-center">
    <div class="portfolio-container flex items-center justify-between w-full gap-2">
      <a href="../index.html#home" class="flex items-center gap-2 no-underline shrink min-w-0">
        <img src="../assets/logo.svg" alt="Scale and Spaces Pvt. Ltd. emblem" class="shrink-0" style="height: 34px; width: auto; max-width: 40px;" onerror="this.src='../assets/logo.jpg'" />
        <div class="flex flex-col min-w-0">
          <span class="font-bold text-sm sm:text-base tracking-wider text-[#111111] leading-none truncate">
            SCALE <span class="font-normal text-[#8F0000]">AND</span> SPACES
          </span>
          <span class="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-wider sm:tracking-widest text-[#767070] font-semibold mt-1 truncate">Pvt. Ltd. &bull; Policy &amp; Legal</span>
        </div>
      </a>
      <nav aria-label="Legal navigation" class="hidden md:flex items-center gap-5 text-[13px] font-bold">
        <a href="../index.html#home" class="text-[#111111] hover:text-[#8F0000] no-underline">Home</a>
        <a href="../index.html#services" class="text-[#111111] hover:text-[#8F0000] no-underline">Services</a>
        <a href="../index.html#projects" class="text-[#111111] hover:text-[#8F0000] no-underline">Projects</a>
        <a href="../index.html#about" class="text-[#111111] hover:text-[#8F0000] no-underline">About</a>
        <a href="../index.html#articles" class="text-[#111111] hover:text-[#8F0000] no-underline">Articles</a>
        <a href="../index.html#contact" class="text-[#111111] hover:text-[#8F0000] no-underline">Contact</a>
      </nav>
      <a href="../index.html#home" class="btn-outline text-[10px] sm:text-[11px] py-1.5 sm:py-2 px-2.5 sm:px-3.5 no-underline shrink-0 whitespace-nowrap">&larr; Home</a>
    </div>
  </header>

  <main class="py-12 md:py-16 min-h-[70vh]">
    <div class="portfolio-container max-w-4xl">
      <div class="mb-6 pb-6 border-b border-[#DDD8CE]">
        <div class="flex flex-wrap items-center gap-2 text-xs text-[#767070] mb-3">
          <a href="../index.html#home" class="text-[#8F0000] no-underline hover:underline font-semibold">Home</a>
          <span>/</span>
          <span class="text-[#111111] font-semibold">${page.heading}</span>
        </div>
        <h1 class="portfolio-section-title text-3xl md:text-4xl">${page.heading}</h1>
        <p class="text-xs font-mono uppercase tracking-widest text-[#767070] mt-2">${page.updated}</p>
        <p class="text-sm sm:text-base text-[#333333] leading-relaxed mt-4">${page.summary}</p>
      </div>

      <article class="legal-prose">
        ${page.sections.map(sec => `
          <section>
            <h2>${sec.title}</h2>
            ${sec.paragraphs.map(p => `<p>${p}</p>`).join('')}
            ${sec.bullets ? `<ul>${sec.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          </section>
        `).join('')}
        ${cookieControlsSection}
      </article>

      <div class="mt-12 pt-6 border-t border-[#DDD8CE] flex flex-wrap items-center justify-between gap-4 text-xs">
        <div class="flex flex-wrap gap-4 font-semibold items-center">
          <a href="../privacy-policy/index.html" class="text-[#8F0000] no-underline hover:underline">Privacy Policy</a>
          <a href="../terms-and-conditions/index.html" class="text-[#8F0000] no-underline hover:underline">Terms &amp; Conditions</a>
          <a href="../cookie-policy/index.html" class="text-[#8F0000] no-underline hover:underline">Cookie Policy</a>
          <a href="../disclaimer/index.html" class="text-[#8F0000] no-underline hover:underline">Studio Disclaimer</a>
          <button type="button" onclick="if(window.openCookiePopup)window.openCookiePopup()" class="bg-transparent border-0 p-0 text-xs text-[#767070] hover:text-[#8F0000] underline cursor-pointer font-semibold">Cookie Settings</button>
        </div>
        <a href="../index.html#contact" class="btn-crimson text-xs py-2 px-4 no-underline">Contact Studio</a>
      </div>
    </div>
  </main>

  <footer class="bg-[#1A1A1A] text-[#CCCCCC] py-8 border-t border-[#333333]">
    <div class="portfolio-container flex flex-col sm:flex-row justify-between items-center text-xs text-[#999999] gap-3">
      <div>&copy; 2026 Scale and Spaces Private Limited. All rights reserved.</div>
      <div>Head Office: Dhapasi, Tokha-6, Kathmandu 44600 &bull; Branch: Main Road (In front of Consulate General of India), Birgunj 44300</div>
    </div>
  </footer>
  ${cookieBannerMarkup(true)}
  <script>
    (function(){
      var veil = document.getElementById('ssTransitionVeil');
      var lbl = document.getElementById('ssTransitionLabel');
      function hideVeil(){ if (veil) veil.classList.remove('is-active', 'is-blocking'); }
      if (veil) {
        setTimeout(hideVeil, 480);
        window.addEventListener('pageshow', hideVeil);
      }
      document.querySelectorAll('a[href]').forEach(function(a){
        var href = a.getAttribute('href') || '';
        if (!href || a.getAttribute('target') === '_blank' || /^(#|mailto:|tel:|https?:|javascript:)/i.test(href)) return;
        a.addEventListener('click', function(e){
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !veil) return;
          e.preventDefault();
          if (lbl) lbl.textContent = (a.textContent || 'Loading').replace(/\\s+/g, ' ').trim();
          veil.classList.add('is-active', 'is-blocking');
          veil.querySelectorAll('.ss-logo-mask-path, .ss-logo-pen-trace').forEach(function(p){
            if (typeof p.animate === 'function') {
              p.animate([{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }], { duration: 480, easing: 'cubic-bezier(0.45, 0, 0.55, 1)', fill: 'forwards' });
            }
          });
          setTimeout(function(){ window.location.href = href; }, 240);
        });
      });
    })();
  </script>
  <script>${cookieBannerScript}</script>
</body>
</html>`;
}

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
    <loc>https://scaleandspaces.com.np/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://scaleandspaces.com.np/privacy-policy/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>https://scaleandspaces.com.np/terms-and-conditions/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>https://scaleandspaces.com.np/cookie-policy/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>https://scaleandspaces.com.np/disclaimer/</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://scaleandspaces.com.np/sitemap.xml
`;

const cnameTxt = 'scaleandspaces.com.np\n';

async function run() {
  const twNodeUrl = pathToFileURL('C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website/node_modules/@tailwindcss/node/dist/index.mjs').href;
  const twOxideUrl = pathToFileURL('C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website/node_modules/@tailwindcss/oxide/index.js').href;

  const { compile, optimize } = await import(twNodeUrl);
  const { Scanner } = await import(twOxideUrl);

  const compiler = await compile('@import "tailwindcss";\n' + customCss, {
    base: 'C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website',
    onDependency: () => {}
  });

  const sampleLegalMarkup = legalPages.map(p => buildLegalPage(p, '')).join('\n');
  const tempDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'twscan-'));
  const tempHtml = path.join(tempDir, 'scan.html');
  fs.writeFileSync(tempHtml, htmlBodyTemplate + '\n' + sampleLegalMarkup, 'utf8');

  const scanner = new Scanner({
    sources: [{ base: tempDir, pattern: '*.html', negated: false }]
  });
  const candidates = scanner.scan();
  const builtCss = compiler.build(candidates);
  const optimized = optimize(builtCss, { minify: true });

  fs.rmSync(tempDir, { recursive: true, force: true });

  const finalHtml = htmlBodyTemplate.replace('/*__COMPILED_CSS__*/', optimized.code);
  const renderedLegalPages = legalPages.map(p => ({
    slug: p.slug,
    html: buildLegalPage(p, optimized.code)
  }));

  const baseDirs = [
    __dirname,
    path.join('C:', 'Users', 'maste', 'Desktop', 'Website', 'Scale-and-Spaces-Website'),
    path.join('C:', 'Users', 'maste', '.gemini', 'antigravity', 'scratch', 'scale-and-spaces-website')
  ];

  // Build Complete Pre-Populated CMS Workbook (Matches Live Google Sheet Structure)
  const XLSX = require('C:/Users/maste/.gemini/antigravity/scratch/scale-and-spaces-website/node_modules/xlsx');
  const wb = XLSX.utils.book_new();
  const sheetTabs = {
    Settings: [
      ['Key', 'Value'],
      ['Site_Title', 'Scale and Spaces Pvt. Ltd. | Architecture, Structural Engineering & Interior Design in Nepal'],
      ['Tagline', 'Designing Spaces, Defining Lifestyles!'],
      ['Email', 'studio@scaleandspaces.com'],
      ['Phone', '+977-9703881733'],
      ['WhatsApp', '9779703881733'],
      ['Head_Office', 'Dhapasi, Tokha-6, Kathmandu 44600'],
      ['Contact_Office', 'Main Road, In front of Consulate General of India, Birgunj 44300'],
      ['Custom_Domain', 'https://scaleandspaces.com.np/']
    ],
    Hero: [
      ['Key', 'Value'],
      ['Badge', 'Architecture | Engineering | Interiors'],
      ['Headline_Line1', 'Designing Spaces,'],
      ['Headline_Line2', 'Defining Lifestyles'],
      ['Subtitle', 'Full-service architectural design, seismic engineering, masterplanning & interior studio by Scale and Spaces Pvt. Ltd. across Nepal.'],
      ['Cover_Color_URL', 'assets/projects/cover_studio_tower.jpg'],
      ['Cover_BW_URL', 'assets/projects/cover_studio_tower_bw.jpg'],
      ['SEO_Meta_Title', 'Scale and Spaces Pvt. Ltd. | Best Architect & Interior Designer in Nepal'],
      ['SEO_Meta_Desc', 'Trusted Architects & Interior Designers in Kathmandu, Birgunj & Nepal. 3D renders, NBC seismic plans & turnkey interiors by Scale and Spaces.'],
      ['SEO_Meta_Keywords', 'Architect in Nepal, Best Architect in Nepal, Architect in Kathmandu, Architect in Birgunj, Interior Designer in Nepal, Best Interior Designer in Nepal, Interior Designer in Kathmandu, Interior Designer in Birgunj, Architecture Firm Nepal, Structural Engineer Nepal, Scale and Spaces']
    ],
    About: [
      ['Key', 'Value'],
      ['Title', 'Architecture Rooted in Context, Climate & Engineering Precision'],
      ['Bio_P1', 'Scale and Spaces Private Limited is a multidisciplinary design and engineering firm practicing from Kathmandu Valley and Birgunj. We unite architectural aesthetics, NBC seismic safety, bioclimatic light, and transparent costing under one roof.'],
      ['Bio_P2', 'From bespoke family residences and commercial high-rises to community hospitals, civic ghats, and corporate interiors, every drawing transitions seamlessly from sketch to site execution.'],
      ['Stat1_Num', '44+'],
      ['Stat1_Label', 'Portfolio Works'],
      ['Stat2_Num', '10'],
      ['Stat2_Label', 'Core Specialists'],
      ['Stat3_Num', '2'],
      ['Stat3_Label', 'Nepal Offices'],
      ['Stat4_Num', '1st'],
      ['Stat4_Label', 'Civic Emblem Prize'],
      ['Banner_Headline', 'From Concept Massing to Built Architectural Realities']
    ],
    Services: [['Title', 'Note', 'Order', 'Link']].concat(scopeItems.map((s, i) => [s.title, s.note, i + 1, ''])),
    Projects: [['ID', 'Title', 'Client', 'Category', 'Category_Label', 'Location', 'Year', 'Desc', 'Image_URL', 'Gallery_URLs', 'Link']].concat(
      projectsData.map(p => [p.id, p.title, p.client, p.category, p.categoryLabel, p.location, p.year, p.desc, p.image, (p.images || []).join(' | '), p.link || ''])
    ),
    Team: [['Name', 'Role', 'Photo_URL', 'Qualification', 'Experience', 'Specialization', 'Bio', 'Key_Projects', 'Office', 'Email', 'CV_Label', 'CV_URL', 'Order']].concat(
      teamData.map((m, i) => [m.name, m.role, m.image, m.qualification, m.experience, m.specialization, m.bio, m.keyProjects, m.office, m.email, m.cvLabel, m.cvUrl, i + 1])
    ),
    Articles: [['Heading', 'Image_URL', 'Description', 'Link', 'Category', 'Date', 'Order']].concat(
      articlesData.map((a, i) => [a.heading, a.image, a.desc, a.link || '', a.category || 'Studio Article', a.date || '2026', i + 1])
    ),
    Reviews: [['Name', 'Rating', 'City', 'Project_Scope', 'Review_Comment', 'Date', 'Link']].concat(
      reviewsData.map(r => [r.author, r.rating, r.city, r.scope, r.quote, r.date, r.link || ''])
    ),
    FAQs: [['Question', 'Answer', 'Category', 'Order', 'Link']].concat(
      faqsData.map((f, i) => [f.question, f.answer, f.category, i + 1, f.link || ''])
    ),
    Partners: [['Name', 'Logo_URL', 'Description', 'Website', 'Order']].concat(
      clientLogos.map((l, i) => [l.name, l.img, l.desc, l.url || '', i + 1])
    )
  };
  Object.keys(sheetTabs).forEach(tabName => {
    const ws = XLSX.utils.aoa_to_sheet(sheetTabs[tabName]);
    XLSX.utils.book_append_sheet(wb, ws, tabName);
  });

  const existingCfgPath = path.join(__dirname, 'cms-config.json');
  const defaultSheetId = '1ITHet6vFTLALr3u01Db-GGPRh1sAzdtuiGR1fvJruts';
  let existingCfg = {
    sheetId: defaultSheetId,
    enabled: true,
    sheetUrl: 'https://docs.google.com/spreadsheets/d/' + defaultSheetId + '/edit',
    note: 'Share Sheet as Anyone with link -> Viewer (or transfer ownership to scaleandspaces@gmail.com anytime)'
  };
  if (fs.existsSync(existingCfgPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(existingCfgPath, 'utf8'));
      if (parsed && typeof parsed === 'object') {
        existingCfg = Object.assign({}, existingCfg, parsed);
        if (!existingCfg.sheetId) existingCfg.sheetId = defaultSheetId;
        existingCfg.sheetUrl = 'https://docs.google.com/spreadsheets/d/' + existingCfg.sheetId + '/edit';
      }
    } catch (e) {}
  }
  const cmsConfigStr = JSON.stringify(existingCfg, null, 2) + '\n';

  baseDirs.forEach(dir => {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), finalHtml, 'utf8');
    fs.writeFileSync(path.join(dir, 'standalone_index.html'), finalHtml, 'utf8');
    fs.writeFileSync(path.join(dir, '404.html'), notFoundHtml, 'utf8');
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemapXml, 'utf8');
    fs.writeFileSync(path.join(dir, 'robots.txt'), robotsTxt, 'utf8');
    fs.writeFileSync(path.join(dir, 'CNAME'), cnameTxt, 'utf8');
    fs.writeFileSync(path.join(dir, 'cms-config.json'), cmsConfigStr, 'utf8');
    XLSX.writeFile(wb, path.join(dir, 'Scale_and_Spaces_CMS.xlsx'));

    renderedLegalPages.forEach(lp => {
      const targetSub = path.join(dir, lp.slug);
      fs.mkdirSync(targetSub, { recursive: true });
      fs.writeFileSync(path.join(targetSub, 'index.html'), lp.html, 'utf8');
    });

    const pubDir = path.join(dir, 'public');
    if (fs.existsSync(pubDir)) {
      fs.writeFileSync(path.join(pubDir, '404.html'), notFoundHtml, 'utf8');
      fs.writeFileSync(path.join(pubDir, 'sitemap.xml'), sitemapXml, 'utf8');
      fs.writeFileSync(path.join(pubDir, 'robots.txt'), robotsTxt, 'utf8');
      fs.writeFileSync(path.join(pubDir, 'CNAME'), cnameTxt, 'utf8');
      fs.writeFileSync(path.join(pubDir, 'cms-config.json'), cmsConfigStr, 'utf8');
      renderedLegalPages.forEach(lp => {
        const pubSub = path.join(pubDir, lp.slug);
        fs.mkdirSync(pubSub, { recursive: true });
        fs.writeFileSync(path.join(pubSub, 'index.html'), lp.html, 'utf8');
      });
    }

    console.log('Successfully updated directory (' + finalHtml.length + ' bytes, CSS: ' + optimized.code.length + ' bytes + 4 legal pages): ' + dir);
  });
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
