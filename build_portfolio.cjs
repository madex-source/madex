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
    desc: 'Contemporary multi-storey commercial tower featuring vertical louvers, deep cantilever balconies, and integrated retail floors tailored for the urban hub of Malangwa.',
    featured: true
  },
  {
    id: 'hyatt-community-hospital',
    title: 'Hyatt Community Hospital',
    client: 'Community Healthcare Facility',
    location: 'Barhathwa, Sarlahi',
    year: '2025 A.D.',
    category: 'Commercial',
    categoryLabel: 'Commercial Buildings',
    image: 'assets/projects/hyatt_hospital_1.jpg',
    images: ['assets/projects/hyatt_hospital_1.jpg', 'assets/projects/hyatt_hospital_2.jpg'],
    desc: 'Regional healthcare institution engineered for efficient medical zoning, cross-ventilation, emergency ramp accessibility, and resilient structural safety in Sarlahi.',
    featured: true
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
    desc: 'High-density mixed retail and commercial complex with glass curtain walls, wide circulation corridors, and energy-efficient shading along the Gandak arterial corridor.'
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
    desc: 'Corporate retail landmark designed with balanced massing, distinctive fenestrations, and a pedestrian-friendly front arcade.'
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
    desc: 'Urban commercial center planned with modular floor plates, expansive retail frontages, and optimized rooftop utility zones.'
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
    desc: 'Mixed-use development pairing streetfront commercial spaces with private residential quarters above in prime Adarshnagar.'
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
    desc: 'Electric vehicle showroom adhering to global brand guidelines, featuring seamless glazed facades, custom lighting tracks, and an expansive display lounge.'
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
    desc: 'Highway hospitality and commercial transit hub incorporating convenience retail, dining terrace, landscaped rest plaza, and refuelling forecourt.'
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
    images: ['assets/projects/shavdaahgriham_crematorium.jpg', 'assets/projects/shavdaahgriham_roof.jpg', 'assets/projects/shavdaahgriham_ranighat_1.jpg'],
    desc: 'Redevelopment of Ranighat Samshanghat. Tent-cloth form inspires peaceful minimalist geometry, while traditional Khapada clay roofing preserves indigenous Birgunj heritage.',
    featured: true
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
    images: ['assets/projects/recreational_mato_park_1.jpg', 'assets/projects/recreational_mato_park_2.jpg'],
    desc: 'Civic recreational park featuring eco-sensitive earthworks, native Terai flora pathways, community gazebos, water retention ponds, and leisure promenades.'
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
    desc: 'Public institutional landscape revitalization introducing manicured greenery, permeable paving, stone curbs, and pedestrian-friendly arrival squares.'
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
    desc: 'Modern tropical residence boasting vertical wood-finish louvers, generous overhangs for Terai heat mitigation, and seamless indoor-outdoor courtyards.',
    featured: true
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
    desc: 'Private residence combining contemporary rectilinear volumes, stone-clad feature walls, and cantilevered viewing decks.'
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
    desc: 'Clean geometric residential architecture with integrated planters, expansive corner glazing, and climate-responsive sunshades.'
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
    desc: 'Contemporary urban villa featuring textured exterior finishes, concealed drainage engineering, and open-plan family gathering zones.'
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
    desc: 'Multi-level residence integrating private medical consultation chambers with expansive upper-floor family living quarters.'
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
    desc: 'Suburban family home with classical proportions, generous verandas, and lush perimeter garden framing.'
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
    desc: 'Valley foothill modern residence in Budhanilkantha designed to capture southern mountain sunlight, with terrace gardens and seismic framing.'
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
    desc: 'Kathmandu urban home featuring efficient daylight wells, acoustic envelope insulation, and refined spatial planning.'
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
    desc: 'Hillside residence tailored for sloping topography in Chandragiri, maximizing panoramic valley views.'
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
    desc: 'Step-back hillside architecture celebrating natural sunlight and warm brick-accented styling.'
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
    desc: 'Serene Lalitpur family home pairing minimalist white volumes with warm timber trims and rear lawns.'
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
    desc: 'Modern suburban residence with cantilevered entry porch and functional floor plan layout.'
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
    desc: 'Contextual suburban dwelling in Bhaktapur harmonizing traditional brick tones with modern living.'
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
    desc: 'Expansive Eastern Nepal villa boasting deep wraparound balconies, high ceilings, and perimeter garden landscaping.'
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
    desc: 'Contemporary family home designed for multi-generational comfort, spacious vehicle porch, and cross ventilation.'
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
    desc: 'Modernist country residence with horizontal roof planes, generous window openings, and serene landscape views.'
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
    desc: 'Janakpur residence balancing regional Mithila aesthetic sensibilities with modern structural resilience.'
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
    desc: 'Low-rise staff residential apartment complex for government customs officers, providing comfortable quarters at Nepal’s key trade gateway.',
    featured: true
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
    desc: 'Institutional administration building designed with acoustic control, wide circulation staircases, and direct oversight over academic courtyards.'
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
    desc: 'Educational institution planned for flexible laboratory configurations, multimedia lecture halls, and climate-buffered verandas.'
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
    desc: 'Governmental calibration testing facility with vibration-isolated foundations, laboratory specifications, and secure administrative suites.'
  },
  {
    id: 'arun-rural-municipality',
    title: 'Administrative Building',
    client: 'of Arun Rural Municipality, Bhojpur',
    location: 'Pyauli, Arun, Bhojpur',
    year: '2023 A.D.',
    category: 'Institutional',
    categoryLabel: 'Office / Institutional Buildings',
    image: 'assets/projects/arun_rural_municipality_1.jpg',
    images: ['assets/projects/arun_rural_municipality_1.jpg', 'assets/projects/arun_rural_municipality_2.jpg'],
    desc: 'Local government civic complex in Bhojpur accommodating council chambers, citizen service counters, and municipal operations.'
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
    desc: 'Eastern Himalayan healthcare facility built to stringent hygiene protocols, cold-storage infrastructure, and emergency power reliability.'
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
    desc: 'Academic multipurpose block housing an auditorium, seminar rooms, and scenic student library.'
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
    desc: 'Cross-border veterinary inspection and quarantine office at the eastern transit corridor.'
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
    desc: 'Sacred architecture incorporating classical Shikhar elements, circumambulatory pradakshina pathways, and resonant prayer hall.',
    featured: true
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
    desc: 'Sacred community pilgrimage complex featuring traditional brick arches, ceremonial gateways, and sheltered gathering pavilions.'
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
    desc: 'Spiritual meditation and temple center nested in the hills of Bhojpur, emphasizing natural stone and peaceful proportions.'
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
    images: ['assets/projects/interior_bidur_khatiwada_1.jpg', 'assets/projects/interior_bidur_khatiwada_2.jpg', 'assets/projects/interior_bidur_khatiwada_kitchen.jpg'],
    desc: 'Warm contemporary residential interior detailing custom walnut joinery, concealed warm LED coves, and a modular ergonomic kitchen.',
    featured: true
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
    images: ['assets/projects/interior_narayan_baral_1.jpg', 'assets/projects/interior_narayan_baral_bedroom.jpg', 'assets/projects/interior_narayan_baral_dining.jpg'],
    desc: 'Bespoke residential interiors featuring stone accent paneling, sculpted ceilings, and integrated private dining lighting.'
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
    images: ['assets/projects/interior_nitesh_singh_living.jpg', 'assets/projects/interior_nitesh_singh_master.jpg', 'assets/projects/interior_nitesh_singh_tv.jpg'],
    desc: 'Contemporary interior styling incorporating fluted wooden wall panels, custom wardrobes, and layered ambiance illumination.'
  },
  {
    id: 'interior-modern-luxury',
    title: 'Modern Living Suite Interior',
    client: 'Residential Interior Study',
    location: 'Kathmandu',
    year: '2024 A.D.',
    category: 'Interior',
    categoryLabel: 'Interior Design',
    image: 'assets/projects/interior_modern_luxury_living.jpg',
    images: ['assets/projects/interior_modern_luxury_living.jpg'],
    desc: 'Residential lounge interior with tailored upholstery, textured acoustic backdrops, and warm accent illumination.'
  },

  // Competitions & Identity
  {
    id: 'logo-competition-winner',
    title: 'Logo Design Competition Winning Entry',
    client: 'Competition Winner',
    location: 'National Competition',
    year: '2022 A.D.',
    category: 'Branding',
    categoryLabel: 'Logo Designs',
    image: 'assets/projects/logo_competition_winner.jpg',
    images: ['assets/projects/logo_competition_winner.jpg'],
    desc: 'Competition-winning visual identity and logo design mark uniting architectural geometry, proportion, and structural clarity.',
    featured: true
  }
];

const teamData = [
  { name: 'SHEETAL GUPTA', role: 'Architect', image: 'assets/team/team-sheetal.jpg' },
  { name: 'SUPRIYA THAPA', role: 'Principal Architect', image: 'assets/team/team-supriya.jpg' },
  { name: 'YATEENDRA K LABH', role: 'Director / Architect', image: 'assets/team/team-yateendra.jpg' },
  { name: 'SUNIL CHAURASIYA', role: 'Structural Engineer', image: 'assets/team/team-sunil.jpg' },
  { name: 'MEGNATH GUPTA', role: 'Project Manager', image: 'assets/team/team-megnath.jpg' },
  { name: 'ASHMIN R BHATTARAI', role: 'Architect', image: 'assets/team/team-ashmin.jpg' },
  { name: 'CHETAN K SARRAF', role: 'Interior Designer', image: 'assets/team/team-chetan.jpg' },
  { name: 'BISHAL MANANDAR', role: 'Electrical Engineer', image: 'assets/team/team-bishal.jpg' },
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
       SCALE AND SPACES PORTFOLIO DESIGN SYSTEM
       Exact match to portfolio_d5c2edf0.htm:
       - Canvas: #F0EFEA (Warm architectural paper cream)
       - Primary Crimson: #8F0000 / #C00000
       - Highlight Mark: #FF0000
       - Team Surname Highlight: #EC7C30
       - Team Role Strip: #F1F1F1
       - Muted Grey: #767070
       - Serif Display: 'EB Garamond', Garamond, Georgia, serif
       - Sans Body: 'Calibri', 'Carlito', -apple-system, BlinkMacSystemFont, sans-serif
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
      --font-serif: 'EB Garamond', Garamond, Georgia, 'Times New Roman', serif;
      --font-sans: 'Calibri', 'Carlito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    html {
      scroll-behavior: smooth;
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
      line-height: 1.1;
    }

    .portfolio-container {
      width: 100%;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
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

    .site-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      height: 76px;
      background-color: rgba(240, 239, 234, 0.96);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border-line);
    }
    .nav-logo {
      height: 40px;
      width: auto;
      max-width: 48px;
      object-fit: contain;
    }

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
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .btn-crimson:hover {
      background-color: var(--crimson-hover);
      border-color: var(--crimson-hover);
      transform: translateY(-1px);
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: transparent;
      color: var(--text-main);
      font-family: var(--font-sans);
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0.65rem 1.5rem;
      border: 1px solid var(--text-main);
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .btn-outline:hover {
      background-color: var(--text-main);
      color: #FFFFFF;
    }

    .filter-tab {
      background: #FFFFFF;
      border: 1px solid var(--border-line);
      color: var(--text-muted);
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .filter-tab:hover {
      color: var(--text-main);
      border-color: var(--text-main);
    }
    .filter-tab.active {
      background-color: var(--crimson);
      color: #FFFFFF;
      border-color: var(--crimson);
    }

    .project-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-line);
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .project-card:hover {
      transform: translateY(-3px);
      border-color: var(--crimson);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
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
      transition: transform 0.5s ease;
      display: block;
    }
    .project-card:hover .project-image-box img {
      transform: scale(1.04);
    }
    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(143, 0, 0, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .team-card {
      background: #FFFFFF;
      border: 1px solid var(--border-line);
      display: flex;
      flex-direction: column;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .team-card:hover {
      transform: translateY(-3px);
      border-color: var(--crimson);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
    .team-img-wrap {
      aspect-ratio: 1 / 1.12;
      overflow: hidden;
      background-color: #EAE8E1;
    }
    .team-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }
    .team-role-box {
      background-color: #F1F1F1;
      padding: 0.45rem 0.75rem;
      text-align: center;
      border-top: 1px solid var(--border-line);
      border-bottom: 1px solid var(--border-line);
      font-size: 0.875rem;
      color: #111111;
      font-weight: 400;
    }
    .team-name-box {
      background-color: #FFFFFF;
      padding: 0.6rem 0.75rem 0.7rem;
      text-align: center;
      font-size: 0.925rem;
      letter-spacing: 0.04em;
      color: #EC7C30;
      font-weight: 400;
    }
    .team-name-box b {
      color: #EC7C30;
      font-weight: 700;
    }

    .scope-list-item {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.85rem 1.25rem;
      background: #FFFFFF;
      border: 1px solid var(--border-line);
      transition: border-color 0.2s ease, transform 0.2s ease;
    }
    .scope-list-item:hover {
      border-color: var(--crimson);
      transform: translateX(3px);
    }
    .scope-square {
      width: 10px;
      height: 10px;
      background-color: #111111;
      border: 1px solid #111111;
      flex-shrink: 0;
    }
    .scope-list-item:hover .scope-square {
      background-color: var(--crimson);
      border-color: var(--crimson);
    }

    .lightbox-modal {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: rgba(17, 17, 17, 0.9);
      backdrop-filter: blur(6px);
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
      transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
`;

const icons = {
  pin: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
  mail: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  phone: '<svg class="inline-block w-3.5 h-3.5 text-[#8F0000] shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.25 1.01l-2.2 2.2z"/></svg>',
  whatsapp: '<svg class="inline-block w-4 h-4 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.03 2a9.99 9.99 0 0 0-8.48 15.3L2 22l4.85-1.5A9.99 9.99 0 1 0 12.03 2zm5.82 14.1c-.25.7-1.45 1.35-2.02 1.43-.52.08-1.18.12-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.38-5.15-4.58-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.27-.3.6-.38.8-.38h.58c.18 0 .44-.07.69.52.25.61.85 2.09.92 2.24.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.54-.15.15-.31.32-.13.62.18.3.78 1.29 1.68 2.09 1.15 1.03 2.13 1.35 2.43 1.5.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.75.82 2.05.97.3.15.5.22.58.35.07.13.07.75-.18 1.45z"/></svg>',
  bars: '<svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>',
  expand: '<svg class="inline-block w-3.5 h-3.5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>',
  send: '<svg class="inline-block w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>'
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

  <!-- NAVIGATION BAR -->
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
        <a href="#scope-of-works" class="text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Scope of Works_</a>
        <a href="#the-full-team" class="text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">The Full Team</a>
        <a href="#our-works" class="text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Our Works_</a>
        <a href="#ranighat-masterplan" class="text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Ranighat Masterplan</a>
        <a href="#contact" class="text-sm font-bold text-[#111111] hover:text-[#8F0000] no-underline transition-colors">Contact Offices</a>
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
         COVER / HERO SECTION (Page 1 of Portfolio PDF)
         ====================================================================== -->
    <section class="pt-10 pb-14 md:pt-14 md:pb-20 border-b border-[#DDD8CE]">
      <div class="portfolio-container">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
          <p class="text-sm md:text-base text-[#111111] tracking-wide">
            Architecture | Engineering | Construction
          </p>
          <p class="text-xl md:text-2xl tracking-wider text-[#111111]">
            <span style="color:#FF0000;">|</span> DESIGN <strong>PORTFOLIO</strong>
          </p>
        </div>

        <!-- Single Semantic H1 per SEO Starter Guide -->
        <div class="my-6 md:my-8">
          <h1 class="portfolio-crimson-quote">
            <span class="block text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style="font-family: Georgia, 'EB Garamond', serif;">Designing Spaces,</span>
            <span class="block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight" style="font-family: 'EB Garamond', Georgia, serif;">
              Defining Lifestyles<span style="font-size: 1.15em;">!</span>
            </span>
          </h1>
          <p class="text-sm md:text-base text-[#767070] mt-4 max-w-3xl">
            Official architectural, civil engineering, landscape masterplanning, and interior design portfolio of <strong class="text-[#111111]">Scale and Spaces Private Limited</strong>.
          </p>
        </div>

        <!-- Studio Offices Line (Page 1 Bottom Strip) -->
        <div class="bg-[#E8E6DF] border border-[#DDD8CE] px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center text-xs sm:text-sm text-[#111111] gap-2 mb-8">
          <div><strong class="text-[#8F0000]">Head Office:</strong> Tokha-6, Kathmandu</div>
          <div class="hidden md:block text-[#B8B3A8]">|</div>
          <div><strong class="text-[#8F0000]">Contact Office:</strong> Birgunj-12, Parsa</div>
          <div class="hidden md:block text-[#B8B3A8]">|</div>
          <div><strong class="text-[#8F0000]">Email:</strong> studio@scaleandspaces.com</div>
        </div>

        <!-- Featured Cover Render Frame -->
        <div class="bg-white border border-[#DDD8CE] overflow-hidden shadow-sm">
          <div class="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#E2DFD8] cursor-pointer" onclick="openLightbox('mithila-tower')">
            <img src="assets/projects/mithila_tower.jpg" alt="Mithila Tower commercial building architectural render in Jiwisa Chowk, Malangwa by Scale and Spaces Pvt. Ltd." class="w-full h-full object-cover" />
          </div>
          <div class="p-4 sm:p-6 bg-white border-t border-[#DDD8CE] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-[#C00000] block mb-0.5">Featured Commercial Architecture</span>
              <p class="text-xl md:text-2xl font-bold serif-heading text-[#111111]">
                Mithila Tower <span class="font-normal text-[#767070]">&mdash; Jiwisa Chowk, Malangwa (2024 A.D.)</span>
              </p>
              <p class="text-xs sm:text-sm text-[#767070]">for Dr. Manoj Ray &bull; SCALE AND SPACES Pvt. Ltd., Tokha-6, Kathmandu</p>
            </div>
            <div class="flex flex-wrap items-center gap-3 shrink-0">
              <a href="#our-works" class="btn-outline text-xs py-2 px-4">Explore Architectural Works &darr;</a>
              <a href="#contact" class="btn-crimson text-xs py-2 px-4">Request Studio Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SCOPE OF WORKS_ (Page 2 of Portfolio PDF)
         ====================================================================== -->
    <section id="scope-of-works" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2]">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 md:gap-4">
          ${scopeItems.map(item => `
            <div class="scope-list-item">
              <span class="scope-square"></span>
              <span class="text-base md:text-lg font-normal text-[#111111]">${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ======================================================================
         THE FULL TEAM (Pages 3-5 of Portfolio PDF)
         ====================================================================== -->
    <section id="the-full-team" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA]">
      <div class="portfolio-container">
        <div class="text-center mb-12">
          <h2 class="portfolio-section-title">THE FULL TEAM</h2>
          <p class="text-sm text-[#767070] mt-2">
            Scale and Spaces Pvt. Ltd. &bull; Multidisciplinary Architects, Structural Engineers &amp; Interior Specialists
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          ${teamData.map(m => {
            const parts = m.name.split(' ');
            const first = parts.slice(0, -1).join(' ');
            const last = parts[parts.length - 1];
            return `
              <div class="team-card">
                <div class="team-img-wrap">
                  <img src="${m.image}" alt="${m.name} — ${m.role} at Scale and Spaces Pvt. Ltd." loading="lazy" />
                </div>
                <div class="team-role-box">${m.role}</div>
                <div class="team-name-box">${first} <b>${last}</b></div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="mt-10 pt-6 border-t border-[#DDD8CE] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#767070]">
          <span>Sanitary Design Department: <strong class="text-[#111111]">Rohan K Paswan</strong> (Sanitary Designer)</span>
          <span class="font-serif italic text-base text-[#8F0000]">Scale and Spaces Pvt. Ltd.</span>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         OUR WORKS_ (Pages 6-53 of Portfolio PDF)
         ====================================================================== -->
    <section id="our-works" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F7F6F2]">
      <div class="portfolio-container">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h2 class="portfolio-section-title">Our works_</h2>
            <p class="text-sm text-[#767070] mt-1">
              Selected architectural, residential, commercial, institutional, religious, landscape &amp; interior projects across Nepal.
            </p>
          </div>
          <div class="text-xs font-semibold text-[#767070]">
            Showing <span id="project-count" class="font-bold text-[#111111]">${projectsData.length}</span> portfolio works
          </div>
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
            <article class="project-card" data-category="${p.category}" data-id="${p.id}">
              <div class="project-image-box" onclick="openLightbox('${p.id}')">
                <img src="${p.image}" alt="${p.title} ${p.client} architectural design in ${p.location} (${p.year}) by Scale and Spaces Pvt. Ltd." loading="lazy" />
                <div class="project-overlay">
                  <span class="btn-crimson text-xs py-2 px-4 shadow-lg">
                    ${icons.expand} <span>Inspect Project Render</span>
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
                    View ${p.title} Details &rarr;
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ======================================================================
         FEATURED CIVIC MASTERPLAN: THE SHAVDAAHGRIHAM (Pages 10-12)
         ====================================================================== -->
    <section id="ranighat-masterplan" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-[#F0EFEA]">
      <div class="portfolio-container">
        <div class="mb-8">
          <span class="text-xs font-bold uppercase tracking-widest text-[#C00000] block mb-1">Landscape Development Feature</span>
          <h2 class="portfolio-section-title">The Shavdaahgriham</h2>
          <p class="text-base font-bold text-[#111111] mt-1">And the Masterplan &mdash; Ranighat, Birgunj (2021 A.D.)</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 flex flex-col gap-4">
            <div class="border border-[#DDD8CE] bg-white overflow-hidden cursor-pointer" onclick="openLightbox('shavdaahgriham-crematorium')">
              <img src="assets/projects/shavdaahgriham_crematorium.jpg" alt="The Shavdaahgriham electrical crematorium architecture at Ranighat, Birgunj designed by Scale and Spaces Pvt. Ltd." class="w-full h-auto object-cover block" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="border border-[#DDD8CE] bg-white overflow-hidden">
                <img src="assets/projects/shavdaahgriham_roof.jpg" alt="Traditional Khapada clay tile roof preserving indigenous Birgunj heritage" class="w-full h-48 object-cover block" />
                <p class="p-2.5 text-xs text-[#767070] bg-white border-t border-[#DDD8CE]">Traditional Khapada tile roof craftsmanship</p>
              </div>
              <div class="border border-[#DDD8CE] bg-white overflow-hidden">
                <img src="assets/projects/shavdaahgriham_ranighat_1.jpg" alt="Ranighat riverfront crematorium park masterplan and scattering gardens in Birgunj" class="w-full h-48 object-cover block" />
                <p class="p-2.5 text-xs text-[#767070] bg-white border-t border-[#DDD8CE]">Landscape masterplan &amp; scattering gardens</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 bg-white border border-[#DDD8CE] p-6 md:p-8 flex flex-col gap-5">
            <div>
              <h3 class="text-xl font-bold text-[#111111] mb-1" style="font-family: var(--font-sans);">REDEVELOPMENT OF RANIGHAT SAMSHANGHAT</h3>
              <p class="text-sm font-bold text-[#C00000]">of Birgunj Metropolitan City Office</p>
              <p class="text-xs text-[#767070] mt-0.5">Ranighat, Birgunj &bull; 2021 A.D.</p>
            </div>

            <div class="arch-line"></div>

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
         CONTACT & OFFICES (Matching Back Cover of Portfolio PDF)
         ====================================================================== -->
    <section id="contact" class="py-14 md:py-20 border-b border-[#DDD8CE] bg-white">
      <div class="portfolio-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-[#8F0000] block mb-1">Practice Locations &amp; Inquiries</span>
              <h2 class="portfolio-section-title">Scale and Spaces Pvt. Ltd.</h2>
              <p class="text-sm text-[#767070] mt-2">
                Architects, Structural Engineers &amp; Interior Designers practicing across Kathmandu Valley and Terai Nepal.
              </p>
            </div>

            <div class="bg-[#F0EFEA] border border-[#DDD8CE] p-5 flex flex-col gap-4 text-sm">
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

          <div class="lg:col-span-7 bg-[#F7F6F2] border border-[#DDD8CE] p-6 md:p-8">
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
          <a href="#the-full-team" class="text-[#CCCCCC] no-underline hover:text-white">The Full Team</a>
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
    <div class="lightbox-content">
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
          <img id="modal-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Architectural project detail view" style="max-height: 60vh; width: 100%; object-fit: contain;" />
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

  <script>
    const projects = ${JSON.stringify(projectsData)};

    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const tabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');
    const projectCountEl = document.getElementById('project-count');

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        const cat = tab.getAttribute('data-category');

        let visibleCount = 0;
        projectCards.forEach(function(card) {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        if (projectCountEl) projectCountEl.textContent = visibleCount;
      });
    });

    const lightbox = document.getElementById('lightbox');
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
          thumb.style.cssText = 'width:72px;height:48px;object-fit:cover;cursor:pointer;border:2px solid ' + (imgUrl === p.image ? '#8F0000' : '#DDD8CE') + ';';
          thumb.onclick = function() {
            modalImage.src = imgUrl;
            modalGallery.querySelectorAll('img').forEach(function(i) { i.style.borderColor = '#DDD8CE'; });
            thumb.style.borderColor = '#8F0000';
          };
          modalGallery.appendChild(thumb);
        });
      }

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function closeLightboxOnBackdrop(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    }

    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.closeLightboxOnBackdrop = closeLightboxOnBackdrop;

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

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
  </script>
</body>
</html>
`;

// Helpful SEO 404 Page, Sitemap & Robots matching Google SEO Starter Guide
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

    // Ensure public/ also carries sitemap, robots, 404 for Vite dist/ builds
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
