const fs = require('fs');
const path = require('path');

const PORTFOLIO_DATA = [
  // Commercial
  {
    title: "Mithila Tower & Commercial Complex",
    category: "Commercial",
    client: "Dr. Manoj Ray",
    location: "Jiwisa Chowk, Malangwa",
    year: "2024 A.D.",
    imageUrl: "assets/projects/mithila_tower.jpg",
    description: "Multi-storey commercial complex designed with central atrium daylighting, retail promenades, earthquake-resistant RCC frame under NBC 205, and high-traffic circulation.",
    highlights: "NBC 205 Seismic Compliance • Commercial Atrium • Daylight Optimization"
  },
  {
    title: "Hyatt Community Hospital",
    category: "Institutional",
    client: "Hyatt Healthcare Trust",
    location: "Barhathwa, Sarlahi",
    year: "2025 A.D.",
    imageUrl: "assets/projects/hyatt_hospital_1.jpg",
    description: "Tertiary multi-specialty healthcare facility engineered for sterile medical zoning, ICU flows, medical gas distribution lines, and emergency trauma vehicular access.",
    highlights: "NBC 105 Seismic Code • Sterile Zoning • Medical Gas Pipeline • 150-Bed Capacity"
  },
  {
    title: "Hyatt Community Hospital - Campus Perspective",
    category: "Institutional",
    client: "Hyatt Healthcare Trust",
    location: "Barhathwa, Sarlahi",
    year: "2025 A.D.",
    imageUrl: "assets/projects/hyatt_hospital_2.jpg",
    description: "Campus perspective showing ambulance bays, outpatient reception plazas, solar orientation, and landscape buffer zones.",
    highlights: "Emergency Ramp • Passive Shading • Hospital Circulation"
  },
  {
    title: "Commercial Complex of Mr. Aashiq Ansari",
    category: "Commercial",
    client: "Mr. Aashiq Ansari",
    location: "Gandak, Birgunj",
    year: "2023 A.D.",
    imageUrl: "assets/projects/aashiq_ansari_commercial.jpg",
    description: "Modern commercial retail building featuring double-glazed glass storefronts, mezzanine retail storage, and structural concrete framing.",
    highlights: "Retail Glazing • Mezzanine Engineering • High Footfall Design"
  },
  {
    title: "Commercial Building for Mr. Umashankar",
    category: "Commercial",
    client: "Mr. Umashankar",
    location: "Birgunj, Parsa",
    year: "2026 A.D.",
    imageUrl: "assets/projects/umashankar_commercial.jpg",
    description: "Contemporary high-visibility retail and corporate office development along major transit corridors with municipal Naksha Pass documentation.",
    highlights: "Commercial Bye-laws • Naksha Pass Approved • Modern Facade"
  },
  {
    title: "Commercial Building of Mr. Anand Chaudhary",
    category: "Commercial",
    client: "Mr. Anand Chaudhary",
    location: "Birgunj-7, Parsa",
    year: "2026 A.D.",
    imageUrl: "assets/projects/anand_chaudhary_commercial.jpg",
    description: "Five-storey commercial building with column-free retail floor plates, elevator core integration, and earthquake ductile detailing.",
    highlights: "Column-free Spans • Ductile Detailing • Modern Aluminium Louvers"
  },
  {
    title: "Commercial cum Residence for Mr. Kamlesh Agrawal",
    category: "Commercial",
    client: "Mr. Kamlesh Agrawal",
    location: "Adarshnagar, Birgunj",
    year: "2025 A.D.",
    imageUrl: "assets/projects/kamlesh_agrawal_commercial.jpg",
    description: "Mixed-use commercial and luxury residential tower in Adarshnagar, featuring ground-floor showrooms with luxury duplex private residence above.",
    highlights: "Mixed-use Zoning • Private Elevator • Acoustic Separation"
  },
  {
    title: "BYD Birgunj Showroom & Corporate Complex",
    category: "Commercial",
    client: "BYD Birgunj",
    location: "Birgunj, Parsa",
    year: "2023 A.D.",
    imageUrl: "assets/projects/byd_showroom_1.jpg",
    description: "Flagship electric vehicle showroom with double-height structural glass curtain wall facade, EV heavy charging foundations, and executive VIP lounge.",
    highlights: "Double-height Curtain Wall • EV Charging Bay • Corporate Brand Guidelines"
  },
  {
    title: "BYD Birgunj - Service Bay & Experience Center",
    category: "Commercial",
    client: "BYD Birgunj",
    location: "Birgunj, Parsa",
    year: "2023 A.D.",
    imageUrl: "assets/projects/byd_showroom_2.jpg",
    description: "Complete architectural plan and Lumion 3D visualization for customer delivery bays, technical diagnostics workshop, and corporate reception.",
    highlights: "Industrial Heavy Floor Slab • 3D Photorealism • Delivery Pavilion"
  },
  {
    title: "Adarsh City Center & Yash Commercial Hub",
    category: "Commercial",
    client: "Yash Petrol Pump & Adarsh Group",
    location: "Inarwamal, Harnaiya, Bara",
    year: "2025 A.D.",
    imageUrl: "assets/projects/adarsh_city_center_1.jpg",
    description: "Transit-oriented retail and food plaza adjoining highway petrol center with basement parking, escalators, and covered promenades.",
    highlights: "Highway Transit Plaza • Basement Soil Stabilization • Food Court"
  },
  {
    title: "Adarsh City Center - Retail Promenade",
    category: "Commercial",
    client: "Yash Petrol Pump & Adarsh Group",
    location: "Inarwamal, Harnaiya, Bara",
    year: "2025 A.D.",
    imageUrl: "assets/projects/adarsh_city_center_2.jpg",
    description: "Architectural elevation and lighting scheme for the pedestrian retail concourse and outdoor landscaped terraces.",
    highlights: "Landscape Terraces • Outdoor Dining • Architectural Lighting"
  },

  // Landscape & Civic
  {
    title: "The Shavdaahgriham & Masterplan (Ranighat Samshanghat)",
    category: "Landscape",
    client: "Birgunj Metropolitan City Office",
    location: "Ranighat, Birgunj",
    year: "2021 A.D.",
    imageUrl: "assets/projects/shavdaahgriham_ranighat_1.jpg",
    description: "Civic masterplan and landscape architecture for riverfront crematorium, scattering gardens, and serene public reflection spaces.",
    highlights: "Riverfront Landscaping • Native Terai Vegetation • Heritage Preservation"
  },
  {
    title: "Electrical Crematorium (Ranighat Samshanghat)",
    category: "Landscape",
    client: "Birgunj Metropolitan City Office",
    location: "Ranighat, Birgunj",
    year: "2021 A.D.",
    imageUrl: "assets/projects/shavdaahgriham_crematorium.jpg",
    description: "Modern eco-friendly electrical crematorium engineered with high-efficiency exhaust scrubbers and minimal emotional distress architecture.",
    highlights: "Eco-friendly Engineering • Calming Geometry • Municipal Milestone"
  },
  {
    title: "Ranighat Shavdaahgriham - Traditional Khapada Roof",
    category: "Landscape",
    client: "Birgunj Metropolitan City Office",
    location: "Ranighat, Birgunj",
    year: "2021 A.D.",
    imageUrl: "assets/projects/shavdaahgriham_roof.jpg",
    description: "Preservation of indigenous Terai architectural heritage using traditional clay Khapada roofing integrated with contemporary steel tension trusses.",
    highlights: "Indigenous Khapada Clay • Hybrid Steel Trusses • Thermal Comfort"
  },
  {
    title: "Recreational Mato Park",
    category: "Landscape",
    client: "Pokhariya Municipality",
    location: "Pokhariya, Parsa",
    year: "2025 A.D.",
    imageUrl: "assets/projects/recreational_mato_park_1.jpg",
    description: "Public botanical and leisure park integrating earth architecture mounds, water retention ponds, walking tracks, and children play zones.",
    highlights: "Sustainable Earth Architecture • Rainwater Harvesting • Public Civic Plaza"
  },
  {
    title: "Recreational Mato Park - Amphitheater & Plaza",
    category: "Landscape",
    client: "Pokhariya Municipality",
    location: "Pokhariya, Parsa",
    year: "2025 A.D.",
    imageUrl: "assets/projects/recreational_mato_park_2.jpg",
    description: "Central community gathering amphitheater with stepped grass seating, native shade trees, and permeable paving.",
    highlights: "Open Amphitheater • Permeable Pavers • Native Flora"
  },
  {
    title: "Landscape Makeover of Inland Revenue Office (IRO)",
    category: "Landscape",
    client: "Inland Revenue Office, Birgunj",
    location: "Birgunj, Parsa",
    year: "2020 A.D.",
    imageUrl: "assets/projects/iro_birgunj_landscape.jpg",
    description: "Government office premises revitalization featuring welcoming entry gates, shaded waiting corridors, and drought-tolerant Terai landscaping.",
    highlights: "Government Campus Revitalization • Shaded Walkways • Low-maintenance Plants"
  },

  // Residential
  {
    title: "Residence of Mr. Tulsi Gupta",
    category: "Residential",
    client: "Mr. Tulsi Gupta",
    location: "Birgunj, Parsa",
    year: "2024 A.D.",
    imageUrl: "assets/projects/tulsi_gupta_residence_1.jpg",
    description: "Ultra-luxury modern family residence with Italian marble floors, fluted acoustic paneling, concealed cove LED lighting, and private courtyard.",
    highlights: "Turnkey Interior Fitout • NBC 205 Frame • Smart Home Automation"
  },
  {
    title: "Residence of Mr. Tulsi Gupta - Exterior View",
    category: "Residential",
    client: "Mr. Tulsi Gupta",
    location: "Birgunj, Parsa",
    year: "2024 A.D.",
    imageUrl: "assets/projects/tulsi_gupta_residence_2.jpg",
    description: "Architectural facade elevation featuring textured plaster, wood-finish exterior louvers, glass railings, and evening landscape lighting.",
    highlights: "Climate-responsive Louvers • Architectural Lighting • Grand Balcony"
  },
  {
    title: "Residence of Dr. Shahid Alam",
    category: "Residential",
    client: "Dr. Shahid Alam",
    location: "Birgunj, Parsa",
    year: "2024 A.D.",
    imageUrl: "assets/projects/shahid_alam_residence.jpg",
    description: "Contemporary villa designed for medical professional family with climate-responsive facade, spacious bedrooms, and earthquake-proof RCC structure.",
    highlights: "Passive Climate Shading • Custom Joinery • Structural Blueprints"
  },
  {
    title: "Residence of Mr. Rohan Yadav",
    category: "Residential",
    client: "Mr. Rohan Yadav",
    location: "Ranighat, Birgunj",
    year: "2022 A.D.",
    imageUrl: "assets/projects/rohan_yadav_residence.jpg",
    description: "Refined 2.5-storey residential bungalow with open-plan kitchen, south-facing daylighting, and complete municipal approval drawings.",
    highlights: "Daylight Planning • Naksha Pass Set • Open Plan Layout"
  },
  {
    title: "Residence for Mr. Sumit Singh",
    category: "Residential",
    client: "Mr. Sumit Singh",
    location: "Brahma Chowk, Birgunj",
    year: "2025 A.D.",
    imageUrl: "assets/projects/sumit_singh_residence.jpg",
    description: "Sleek geometric contemporary villa with cantilevered balconies, custom metal pergolas, and optimized cross-ventilation.",
    highlights: "Cantilever Balconies • Geometric Elevations • Cross Ventilation"
  },
  {
    title: "Residence cum Commercial Building of Dr. Ashok Shah",
    category: "Residential",
    client: "Dr. Ashok Shah",
    location: "Lath Galli, Birgunj",
    year: "2019 A.D.",
    imageUrl: "assets/projects/ashok_shah_residence.jpg",
    description: "Urban medical clinic on lower floor with comfortable private residential quarters above, maximizing narrow plot frontage.",
    highlights: "Clinic Integration • Efficient Core • Urban Infill Design"
  },
  {
    title: "Residence Building of Mr. Rajeshwar Tiwari",
    category: "Residential",
    client: "Mr. Rajeshwar Tiwari",
    location: "Birgunj-13, Parsa",
    year: "2022 A.D.",
    imageUrl: "assets/projects/rajeshwar_tiwari_residence.jpg",
    description: "Traditional Terai family home reimagined with modern earthquake-resistant structural grid, spacious verandas, and puja room.",
    highlights: "NBC 205 Frame • Vastu Compliant • Traditional Veranda"
  },
  {
    title: "Residence of Mr. Tikaram Dhakal",
    category: "Residential",
    client: "Mr. Tikaram Dhakal",
    location: "Budhanilkantha, Kathmandu",
    year: "2025 A.D.",
    imageUrl: "assets/projects/tikaram_dhakal_residence.jpg",
    description: "Valley hillside residence capturing Himalayan mountain views, south-facing solar gain, and seismic slope retaining foundation engineering.",
    highlights: "Himalayan Panorama • Hill Slope Foundation • Solar Orientation"
  },
  {
    title: "Residence of Mr. Samir Ojha",
    category: "Residential",
    client: "Mr. Samir Ojha",
    location: "Tokha-6, Kathmandu",
    year: "2025 A.D.",
    imageUrl: "assets/projects/samir_ojha_residence.jpg",
    description: "Modern urban villa in Tokha featuring 2.5 storeys, modular kitchen, rooftop solar terrace, and complete Naksha Pass municipal documentation.",
    highlights: "Tokha Bye-laws • Modular Kitchen • Solar Ready Terrace"
  },
  {
    title: "Residence of Mr. Prakash Amatya",
    category: "Residential",
    client: "Mr. Prakash Amatya",
    location: "Chandragiri, Kathmandu",
    year: "2023 A.D.",
    imageUrl: "assets/projects/prakash_amatya_residence.jpg",
    description: "Contemporary multi-family residence with stepped gardens, open terrace pavilions, and seismic foundation engineering.",
    highlights: "Stepped Garden • Mountain Views • Seismic Engineering"
  },
  {
    title: "Residence of Mr. Yagya Raj Upreti",
    category: "Residential",
    client: "Mr. Yagya Raj Upreti",
    location: "Chandragiri, Kathmandu",
    year: "2021 A.D.",
    imageUrl: "assets/projects/yagya_raj_upreti_residence.jpg",
    description: "Hilltop residence designed for thermal comfort, natural brick finishes, insulated glass windows, and earthquake safety.",
    highlights: "Thermal Comfort • Insulated Glazing • Brick Accent Architecture"
  },
  {
    title: "Residence of Mr. Bidur Khatiwada",
    category: "Residential",
    client: "Mr. Bidur Khatiwada",
    location: "Sirutaar, Lalitpur",
    year: "2021 A.D.",
    imageUrl: "assets/projects/bidur_khatiwada_residence.jpg",
    description: "Suburban Lalitpur villa combining modern minimalist aesthetics, private courtyard gardens, and full structural civil engineering.",
    highlights: "Lalitpur Bye-laws • Courtyard Garden • Turnkey Engineering"
  },
  {
    title: "Residence of Mr. Uma Shah",
    category: "Residential",
    client: "Mr. Uma Shah",
    location: "Tokha-6, Kathmandu",
    year: "2019 A.D.",
    imageUrl: "assets/projects/uma_shah_residence.jpg",
    description: "Kathmandu Valley residential home designed with traditional brick elements, open kitchen, and reinforced concrete frame.",
    highlights: "Valley Architecture • RCC Frame • Modern Traditional Blend"
  },
  {
    title: "Residence of Mr. Laxmi Prasad Poudel",
    category: "Residential",
    client: "Mr. Laxmi Prasad Poudel",
    location: "Bhaktapur",
    year: "2019 A.D.",
    imageUrl: "assets/projects/laxmi_poudel_residence.jpg",
    description: "Family residence in historic Bhaktapur respecting local municipal architectural bye-laws and Newari traditional accents.",
    highlights: "Bhaktapur Bye-laws • Heritage Context • Reinforced Frame"
  },
  {
    title: "Residence of Mr. Narayan Baral",
    category: "Residential",
    client: "Mr. Narayan Baral",
    location: "Birtamod, Jhapa",
    year: "2021 A.D.",
    imageUrl: "assets/projects/narayan_baral_residence.jpg",
    description: "Spacious Eastern Nepal residence featuring climate-responsive overhangs, wide porch, and turnkey interior joinery.",
    highlights: "Eastern Terai Climate • Wide Porch • Custom Interior"
  },
  {
    title: "Residence of Mr. Bhim Baral",
    category: "Residential",
    client: "Mr. Bhim Baral",
    location: "Birtamod, Jhapa",
    year: "2021 A.D.",
    imageUrl: "assets/projects/bhim_baral_residence.jpg",
    description: "Modern duplex home designed for joint family living with independent access, double garage, and landscaped lawn.",
    highlights: "Duplex Plan • Landscaped Frontage • Double Garage"
  },
  {
    title: "Residence of Mr. Chiran Khatiwada",
    category: "Residential",
    client: "Mr. Chiran Khatiwada",
    location: "Budhabare, Jhapa",
    year: "2024 A.D.",
    imageUrl: "assets/projects/chiran_khatiwada_residence.jpg",
    description: "Contemporary rural villa integrating scenic tea garden views, deep verandahs, and earthquake-proof civil detailing.",
    highlights: "Tea Garden Views • Deep Verandahs • Ductile RCC"
  },
  {
    title: "Residence of Jagdish Mahato",
    category: "Residential",
    client: "Mr. Jagdish Mahato",
    location: "Janakpurdham, Dhanusha",
    year: "2024 A.D.",
    imageUrl: "assets/projects/jagdish_mahato_residence.jpg",
    description: "Grand residential villa in Janakpur featuring classical Mithila arches, central courtyard ventilation, and modern luxury suites.",
    highlights: "Mithila Classical Touch • Courtyard Ventilation • Luxury Suites"
  },

  // Office & Institutional
  {
    title: "Low-rise Apartment for Birgunj Customs Office",
    category: "Institutional",
    client: "Birgunj Customs Office",
    location: "Birgunj Customs, Birgunj",
    year: "2024 A.D.",
    imageUrl: "assets/projects/birgunj_customs_apartment.jpg",
    description: "Staff housing and executive residential quarters for customs officers, built with high security, seismic durability, and communal facilities.",
    highlights: "Government Staff Housing • NBC 205 Compliance • Secure Compound"
  },
  {
    title: "Office Building for Alpine High School",
    category: "Institutional",
    client: "Alpine High School",
    location: "Birgunj-13, Parsa",
    year: "2024 A.D.",
    imageUrl: "assets/projects/alpine_high_school.jpg",
    description: "Administrative academic building featuring principal office, conference boardroom, staff lounges, and student advisory center.",
    highlights: "Educational Administration • Boardroom Acoustic Design • Natural Light"
  },
  {
    title: "Institutional Building of Aria Institute",
    category: "Institutional",
    client: "Aria Institute",
    location: "Birgunj-13, Parsa",
    year: "2023 A.D.",
    imageUrl: "assets/projects/aria_institute.jpg",
    description: "Higher education building with multimedia lecture halls, computer labs, student library, and fire safety egress staircases.",
    highlights: "Higher Education Facility • Fire Safety Egress • Sound Dampening"
  },
  {
    title: "Standards & Metrology Calibration Center",
    category: "Institutional",
    client: "Standards and Metrology Office, Birgunj",
    location: "Hetauda, Makwanpur",
    year: "2020 A.D.",
    imageUrl: "assets/projects/standards_metrology_hetauda.jpg",
    description: "Specialized precision measurement laboratory building with vibration-isolated foundations and thermal stabilization.",
    highlights: "Vibration Isolation • High Precision Labs • Government Infrastructure"
  },
  {
    title: "Administrative Building of Arun Rural Municipality",
    category: "Institutional",
    client: "Arun Rural Municipality, Bhojpur",
    location: "Pyauli, Arun, Bhojpur",
    year: "2023 A.D.",
    imageUrl: "assets/projects/arun_rural_municipality_1.jpg",
    description: "Local government municipal headquarters designed with civic assembly hall, mayoral offices, public service counters, and solar power.",
    highlights: "Civic Architecture • Mountain Terrain Retaining • Universal Accessibility"
  },
  {
    title: "Arun Rural Municipality - Elevation & Plaza",
    category: "Institutional",
    client: "Arun Rural Municipality, Bhojpur",
    location: "Pyauli, Arun, Bhojpur",
    year: "2023 A.D.",
    imageUrl: "assets/projects/arun_rural_municipality_2.jpg",
    description: "Public plaza, flagpole ceremonial ground, and stone-cladded municipal facade overlooking the Arun river valley.",
    highlights: "Ceremonial Plaza • Stone Cladding • Public Counters"
  },
  {
    title: "Blood Transfusion Service Center",
    category: "Institutional",
    client: "Project Office of Urban Development & Building Construction, Dhankuta",
    location: "Khandbari, Sankhuwasabha",
    year: "2021 A.D.",
    imageUrl: "assets/projects/blood_transfusion_center.jpg",
    description: "Critical regional healthcare facility with temperature-controlled cold chain blood storage, donor lounges, and sterile laboratory suites.",
    highlights: "Critical Healthcare • Cold Chain Storage • Sterile Lab Zoning"
  },
  {
    title: "Multipurpose Block of Himalaya Kiran Public Campus",
    category: "Institutional",
    client: "Himalaya Kiran Public Campus",
    location: "Khandbari, Sankhuwasabha",
    year: "2022 A.D.",
    imageUrl: "assets/projects/himalaya_kiran_campus.jpg",
    description: "University multipurpose academic block featuring 400-seat auditorium, exam halls, and earthquake-resistant structural grid.",
    highlights: "400-Seat Auditorium • Campus Masterplan • Structural Grid"
  },
  {
    title: "Office Building of Animal Quarantine Office",
    category: "Institutional",
    client: "Animal Quarantine Office",
    location: "Kakarbhitta, Jhapa",
    year: "2022 A.D.",
    imageUrl: "assets/projects/animal_quarantine_jhapa.jpg",
    description: "Cross-border quarantine inspection building with laboratory screening rooms, administrative desks, and vehicle inspection ramps.",
    highlights: "Border Inspection Facility • Bio-secure Labs • Quarantine Ramps"
  },

  // Religious Complexes
  {
    title: "ISCKON Temple Complex",
    category: "Religious",
    client: "ISCKON Birgunj / Ramjanki Temple Trust",
    location: "Behind Ramjanki Temple, Birgunj",
    year: "2020 A.D.",
    imageUrl: "assets/projects/isckon_temple_birgunj.jpg",
    description: "Sacred temple complex combining traditional Vedic shikhara geometry with seismic RCC core engineering and devotional prayer halls.",
    highlights: "Vedic Architecture • Shikhara Geometry • Acoustically Tuned Bhajan Hall"
  },
  {
    title: "Temple Complex of Kalikamai Temple",
    category: "Religious",
    client: "Kalikamai Temple Management Committee",
    location: "Kalikamai, Parsa",
    year: "2020 A.D.",
    imageUrl: "assets/projects/kalikamai_temple_complex.jpg",
    description: "Pilgrimage complex masterplan with circumambulation walkways, sacred water kund, pilgrim shelters, and ornate brick carvings.",
    highlights: "Pilgrimage Masterplan • Sacred Kund • Ornate Carvings"
  },
  {
    title: "Temple of Arun Adhyatmik Kendra",
    category: "Religious",
    client: "Arun Adhyatmik Kendra",
    location: "Pyauli, Bhojpur",
    year: "2024 A.D.",
    imageUrl: "assets/projects/arun_adhyatmik_temple.jpg",
    description: "Spiritual meditation sanctuary positioned on peaceful hilltop ridge, designed with natural local stone, timber rafters, and meditation gardens.",
    highlights: "Spiritual Sanctuary • Timber Rafters • Mountain Meditation Gardens"
  },

  // Interior Design
  {
    title: "Interior Design - Residence of Mr. Bidur Khatiwada",
    category: "Interior",
    client: "Mr. Bidur Khatiwada",
    location: "Sirutaar, Lalitpur",
    year: "2020 A.D.",
    imageUrl: "assets/projects/interior_bidur_khatiwada_1.jpg",
    description: "Scandinavian minimalist interior styling with fluted charcoal acoustic paneling, concealed cove LED lighting, and Italian marble flooring.",
    highlights: "Acoustic Fluting • Cove Lighting • Italian Marble"
  },
  {
    title: "Living Room & Entertainment Unit - Bidur Khatiwada",
    category: "Interior",
    client: "Mr. Bidur Khatiwada",
    location: "Sirutaar, Lalitpur",
    year: "2020 A.D.",
    imageUrl: "assets/projects/interior_bidur_khatiwada_2.jpg",
    description: "Custom floating TV credenza with concealed cable routing, backlit profile LED niches, and matte PU paint finish.",
    highlights: "Custom Joinery • Backlit Profile LED • Concealed Wiring"
  },
  {
    title: "Modular Kitchen with BWP Marine Ply & Acrylic",
    category: "Interior",
    client: "Mr. Bidur Khatiwada",
    location: "Sirutaar, Lalitpur",
    year: "2020 A.D.",
    imageUrl: "assets/projects/interior_bidur_khatiwada_kitchen.jpg",
    description: "Ergonomic modular kitchen built with Boiling Water Proof (BWP) 710 marine plywood, soft-close Blum hardware, and high-gloss acrylic shutters.",
    highlights: "BWP 710 Marine Ply • Soft-close Tandem Boxes • Quartz Countertop"
  },
  {
    title: "Interior Design - Residence of Mr. Narayan Baral",
    category: "Interior",
    client: "Mr. Narayan Baral",
    location: "Birtamode, Jhapa",
    year: "2021 A.D.",
    imageUrl: "assets/projects/interior_narayan_baral_1.jpg",
    description: "Warm contemporary interior featuring rich walnut laminates, coffered gypsum false ceilings, and ambient 3000K warm illumination.",
    highlights: "Walnut Joinery • Coffered Ceiling • 3000K Warm Ambiance"
  },
  {
    title: "Foyer & Dining Suite - Narayan Baral",
    category: "Interior",
    client: "Mr. Narayan Baral",
    location: "Birtamode, Jhapa",
    year: "2021 A.D.",
    imageUrl: "assets/projects/interior_narayan_baral_dining.jpg",
    description: "Open-plan dining space with integrated crockery unit, fluted glass partitions, and designer chandelier accent.",
    highlights: "Fluted Glass • Crockery Display • Designer Chandelier"
  },
  {
    title: "Master Bedroom Suite - Narayan Baral",
    category: "Interior",
    client: "Mr. Narayan Baral",
    location: "Birtamode, Jhapa",
    year: "2021 A.D.",
    imageUrl: "assets/projects/interior_narayan_baral_bedroom.jpg",
    description: "Luxury master bedroom with floor-to-ceiling cushioned headboard, integrated dresser unit, and bedside pendant drop lights.",
    highlights: "Cushioned Headboard • Floor-to-ceiling Wardrobes • Bedside Pendants"
  },
  {
    title: "Interior Design - Residence of Mr. Nitesh Singh",
    category: "Interior",
    client: "Mr. Nitesh Singh",
    location: "Kalaiya, Bara",
    year: "2024 A.D.",
    imageUrl: "assets/projects/interior_nitesh_singh_living.jpg",
    description: "Modern luxury interior execution across living room with marble wall claddings, magnetic track lighting, and custom plush sectional sofa.",
    highlights: "Magnetic Track Lights • Marble Cladding • Custom Furniture"
  },
  {
    title: "Custom TV Console & Media Wall - Nitesh Singh",
    category: "Interior",
    client: "Mr. Nitesh Singh",
    location: "Kalaiya, Bara",
    year: "2024 A.D.",
    imageUrl: "assets/projects/interior_nitesh_singh_tv.jpg",
    description: "Minimalist entertainment console with integrated acoustic wood louvers, concealed sub-woofer bay, and satin finish cabinetry.",
    highlights: "Acoustic Slats • Concealed Equipment Bay • Satin Finish"
  },
  {
    title: "Master Suite & Walk-in Wardrobe - Nitesh Singh",
    category: "Interior",
    client: "Mr. Nitesh Singh",
    location: "Kalaiya, Bara",
    year: "2024 A.D.",
    imageUrl: "assets/projects/interior_nitesh_singh_master.jpg",
    description: "Full-height walk-in wardrobe with tinted glass profile doors, interior sensor LEDs, jewelry organizer trays, and private dressing lounge.",
    highlights: "Tinted Glass Wardrobe • Sensor LED Illumination • Dressing Lounge"
  },
  {
    title: "Modern Luxury Living Room Suite",
    category: "Interior",
    client: "Scale & Spaces Signature Suite",
    location: "Birgunj / Kathmandu",
    year: "2024 A.D.",
    imageUrl: "assets/projects/interior_modern_luxury_living.jpg",
    description: "Signature living room design by Scale and Spaces featuring floating false ceiling, acoustic panels, concealed HVAC diffusers, and luxury furniture.",
    highlights: "Floating False Ceiling • Concealed HVAC • Luxury Materials"
  },

  // Branding & Competitions
  {
    title: "National Logo Design Competition - Winning Entry",
    category: "Branding",
    client: "National Architectural Competition",
    location: "Nepal",
    year: "2022 A.D.",
    imageUrl: "assets/projects/logo_competition_winner.jpg",
    description: "First Prize Winning architectural logo design demonstrating structural geometry, spatial balance, and the golden ratio in brand identity.",
    highlights: "First Prize Winner • Golden Ratio • Brand Identity"
  }
];

const TEAM_DATA = [
  {
    name: "Er. Chetan Kr. Sarraf",
    role: "Interior Designer & Lead Civil Engineer",
    photoUrl: "assets/team/team-chetan.jpg",
    bio: "Co-founder & Lead Engineer. Specializing in high-end luxury interiors, NBC 205 structural blueprints, AutoCAD detailing, and transparent BOQ valuation."
  },
  {
    name: "Ar. Supriya Thapa",
    role: "Principal Architect",
    photoUrl: "assets/team/team-supriya.jpg",
    bio: "Leads bioclimatic spatial design, contemporary luxury villas, aesthetic elevations, and municipal bye-law compliance across Nepal."
  },
  {
    name: "Ar. Yateendra K Labh",
    role: "Director / Architect",
    photoUrl: "assets/team/team-yateendra.jpg",
    bio: "Oversees large-scale masterplanning, institutional healthcare infrastructure, commercial complexes, and urban landscape developments."
  },
  {
    name: "Er. Sunil Chaurasiya",
    role: "Structural Engineer",
    photoUrl: "assets/team/team-sunil.jpg",
    bio: "Directs NBC 205:2024 and NBC 105:2020 earthquake engineering, column-beam ductile detailing, and bar bending schedules."
  },
  {
    name: "Megnath Gupta",
    role: "Project Manager",
    photoUrl: "assets/team/team-megnath.jpg",
    bio: "Manages turnkey project execution, material procurement schedules, quality control, and on-site contractor logistics."
  },
  {
    name: "Ar. Ashmin R Bhattarai",
    role: "Architect & 3D Visualization Lead",
    photoUrl: "assets/team/team-ashmin.jpg",
    bio: "Expert in ultra-photorealistic Lumion 3D renderings, virtual reality walkthroughs, and architectural lighting plans."
  },
  {
    name: "Bishal Manandar",
    role: "Electrical Engineer",
    photoUrl: "assets/team/team-bishal.jpg",
    bio: "Specialist in electrical conduit layouts, power load balancing, smart home automation, and solar backup engineering."
  },
  {
    name: "Wasim Alam",
    role: "Site Engineer",
    photoUrl: "assets/team/team-wasim.jpg",
    bio: "Directs on-site structural audits, concrete batch slump tests, and foundation soil bearing checks."
  },
  {
    name: "Sheetal Gupta",
    role: "Architectural Designer",
    photoUrl: "assets/team/team-sheetal.jpg",
    bio: "Specializes in 2D working drawings, spatial zoning, interior clearances, and municipal Naksha Pass documentation."
  }
];

const RATES_DATA = [
  { item: "OPC Cement (Shivam / Hetauda 53G)", category: "Civil", unit: "50 kg Bag", rate: "Rs. 720 – 770", status: "Verified 2026" },
  { item: "TMT Steel Rebar (Fe 500D Grade)", category: "Civil", unit: "Per Kg", rate: "Rs. 92 – 98", status: "Verified 2026" },
  { item: "First-Class Red Clay Bricks (Chimney)", category: "Civil", unit: "Per 1,000 Pcs", rate: "Rs. 14,500 – 16,000", status: "Verified 2026" },
  { item: "Coarse River Sand (Washed)", category: "Civil", unit: "Per Tiper (100 cu.ft)", rate: "Rs. 9,500 – 11,500", status: "Verified 2026" },
  { item: "Crushed Stone Aggregate (20mm / 40mm)", category: "Civil", unit: "Per Tiper (100 cu.ft)", rate: "Rs. 10,500 – 12,500", status: "Verified 2026" },
  { item: "UPVC Soundproof Glazed Windows", category: "Openings", unit: "sq.ft", rate: "Rs. 650 – 850", status: "Verified 2026" },
  { item: "Italian / Spanish Marble & Granite", category: "Finishes", unit: "sq.ft", rate: "Rs. 350 – 650", status: "Verified 2026" },
  { item: "Modular Kitchen (BWP 710 Marine Ply + Acrylic)", category: "Interior", unit: "Running Feet", rate: "Rs. 2,800 – 3,400", status: "Verified 2026" },
  { item: "Gypsum False Ceiling with LED Coving", category: "Interior", unit: "sq.ft", rate: "Rs. 165 – 195", status: "Verified 2026" },
  { item: "2-Coat Putty + Primer + Luxury Emulsion Paint", category: "Finishes", unit: "sq.ft", rate: "Rs. 38 – 48", status: "Verified 2026" }
];

console.log(`Loaded ${PORTFOLIO_DATA.length} projects, ${TEAM_DATA.length} team members, and ${RATES_DATA.length} rates items.`);
module.exports = { PORTFOLIO_DATA, TEAM_DATA, RATES_DATA };
