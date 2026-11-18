import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Health check for Cloud Run deployment probes
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Fast & robust AI consultant knowledge base for Scale and Spaces Private Limited
function generateInstantConsultantReply(message: string): string {
  const q = message.toLowerCase();

  // 1. Company Aim, Mission & Philosophy
  if (/aim|mission|vision|goal|objective|purpose|philosophy|target|who are you|about|उद्देश्य|लक्ष्य|k ho aim/i.test(q)) {
    return `🏛️ **Foundational Aim & Mission of Scale and Spaces Private Limited:**

At **Scale and Spaces Private Limited**, our aim is **"Sensitizing Scale, Harmonizing Spaces"** — bridging high-end architectural creativity with uncompromising structural engineering discipline across Nepal (Kathmandu & Birgunj).

**Our 5 Core Pillars:**
1. **Life Safety First (NBC 205:2024 Compliance):** Every residential and commercial structure is engineered for earthquake resilience under Nepal National Building Codes (NBC 205 & NBC 105), protecting families against seismic hazards.
2. **Photorealistic Clarity Before Pouring Concrete:** We eliminate costly contractor blunders on site through ultra-HD 3D visualization and 360° VR digital walkthroughs before construction begins.
3. **Transparent Financial Control:** We provide transparent Bill of Quantities (BOQ) with live market rates so clients experience **Zero Unexpected Cost Overruns**.
4. **Bioclimatic & Sustainable Design:** Tailoring buildings to local topography, solar path, and natural cross-ventilation in Kathmandu Valley and Terai climates.
5. **Turnkey Peace of Mind:** Single-point accountability from municipal Naksha Pass and structural analysis to turnkey interior execution and final key handover.

*Led by Lead Engineer **Er. Chetan Kumar Sarraf**, we are committed to building safer, smarter, and more beautiful spaces in Nepal.*`;
  }

  // 2. Hiring & Careers
  if (/hiring|career|job|vacancy|apply|intern|cv|resume|architect|site supervisor|भर्ना|नौकरी|kaam/i.test(q)) {
    return `💼 **Scale and Spaces Private Limited is actively hiring!**

We currently have open opportunities:
• **Architect / 3D Visualizer** (Birgunj Office - in front of Indian Embassy & Kathmandu)
• **Site Engineer / Civil Supervisor** (NBC 205 structural compliance & site execution)
• **Junior Architect & CAD Detailer**

**How to Apply:**
1. View the **Full Resolution Hiring Poster** on our website popup.
2. Email your CV & Portfolio to: **studio@scaleandspaces.com**
3. Or apply directly on WhatsApp: **+977 9703881733**

*Our hiring team reviews applications promptly.*`;
  }

  // 3. Naksha Pass / Blueprints / Packages
  if (/naksha|municipal|pass|drawing|blueprint|2d|3d|नक्सा|floor plan|package/i.test(q)) {
    return `📐 **Official Municipal Naksha Pass & Design Packages:**

1. **Estimation Only (Rs. 1,500):** Full BOQ material takeoff & budget sheet.
2. **With 2D Working Plan (Rs. 2,500):** Detailed AutoCAD structural & architectural plans ready for municipal approval under NBC 205:2024.
3. **Complete 2D & 3D Plan (Rs. 20,000):** Comprehensive architectural drawings, ultra-realistic 3D exterior & interior renders, plus an interactive 360° VR virtual walkthrough!

Every plan is vetted by licensed engineers in Kathmandu and Birgunj.`;
  }

  // 4. Construction Cost & Rates
  if (/cost|price|rate|sqft|square foot|budget|per sq|खर्च|लागत|lakh/i.test(q)) {
    return `🧱 **Current Turnkey Construction Rates in Nepal (2026):**

• **Standard Residential:** Rs. 2,600 – 2,900 / sq.ft (Built-up area)
• **Premium Residential:** Rs. 3,000 – 3,400 / sq.ft (High-grade finishes, vitrified tiles)
• **Luxury Turnkey:** Rs. 3,500 – 4,000+ / sq.ft (Modular kitchen, designer ceilings, automated fixtures)

*A typical 2.5-storey home (~2,000 sq.ft built-up) averages **Rs. 58 to 68 Lakhs** turnkey. Use our live Cost Estimator on this site for an instant breakdown!*`;
  }

  // 5. Offices & Contact
  if (/office|address|location|kathmandu|birgunj|tokha|phone|number|contact|ठेगाना/i.test(q)) {
    return `🏢 **Scale and Spaces Practice Locations:**

📍 **Kathmandu Office:** Tokha-6, Kathmandu, Nepal
📍 **Birgunj Office:** Birgunj-12, Parsa, Nepal (Infront of Indian Embassy)

📞 **Phone / WhatsApp:** +977 9703881733
✉️ **Email:** studio@scaleandspaces.com
👨‍💼 **Lead Engineer:** Er. Chetan Kumar Sarraf

*We provide free site visits and engineering consultations in Kathmandu and Birgunj!*`;
  }

  // 6. Interior Renovation (Modular Kitchen, False Ceiling, Paints)
  if (/kitchen|modular|ceiling|interior|paint|decor|renovation|पुट्टी|किचेन/i.test(q)) {
    return `🎨 **Turnkey Interior & Renovation Rates:**

• **Modular Kitchen:** Marine BWP Plywood with Acrylic/PU finish at **Rs. 2,400 – 3,600 per running foot**.
• **Gypsum False Ceilings:** Concealed LED channel profile design at **Rs. 135 – 195 per sq.ft**.
• **Luxury Wall Painting:** 2 coats putty + primer + luxury emulsion at **Rs. 32 – 48 per sq.ft**.

We provide 3D photorealistic mockups before starting any interior work!`;
  }

  // 7. NBC 205 & Earthquake Safety
  if (/nbc|earthquake|seismic|column|beam|soil|sbc|पिलर|भूकम्प/i.test(q)) {
    return `🛡️ **NBC 205:2024 Earthquake Safety Standards:**

Our structural engineering strictly complies with Nepal Building Code:
• Minimum column dimension for 2.5–3 storeys: **350 mm × 350 mm** (up to 400 mm for Terai soft soils).
• Primary longitudinal reinforcement: 4 bars 16mm + 4 bars 12mm Fe500 grade TMT.
• Ductile confinement links spaced at **100 mm c/c** in beam-column junctions.

Every drawing comes with full structural calculation sheets.`;
  }

  // 8. Nepali / Hindi Greetings
  if (/namaste|hello|hi|hey|नमस्ते|प्रणाम|k cha|kaisan ba|haalat/i.test(q)) {
    return `**Namaste! / नमस्ते!** Welcome to **Scale and Spaces Private Limited** (Tokha-6 Kathmandu & Birgunj-12 Parsa).

हामी तपाईंको घरको **२D/३D नक्सा पास**, **इन्जिनियरिङ्ग डिजाइन**, **घर निर्माण**, वा **रेनोभेसन** को लागि कसरी सहयोग गर्न सक्छौं?

तपाईं नेपाली, हिन्दी वा अंग्रेजी जुनसुकै भाषामा पनि आफ्नो आवश्यकता सोध्न सक्नुहुन्छ!`;
  }

  // General conversational reply
  return `Thank you for reaching out to **Scale and Spaces Private Limited**!

We are Nepal's premier integrated practice for architecture, civil engineering, municipal Naksha Pass, and turnkey construction with offices in **Kathmandu (Tokha-6)** and **Birgunj (Birgunj-12)**.

For direct discussion with our Lead Engineer **Er. Chetan Kumar Sarraf**, feel free to message on WhatsApp: **+977 9703881733** or email **studio@scaleandspaces.com**.`;
}

// Ultra-fast Chat API endpoint
app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const reply = generateInstantConsultantReply(message);
    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error('Chat error:', err);
    return res.status(200).json({
      reply: 'Namaste! Scale and Spaces Private Limited is ready to assist. Please contact our lead engineer on WhatsApp: +977 9703881733.',
    });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
