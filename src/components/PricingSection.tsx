import './PricingSection.css';

interface Package {
  name: string;
  priceTWD: string;
  priceUSD: string;
  features: string[];
  note?: string;
}

interface PricingData {
  studio: string;
  website: string;
  location: string;
  phone: string;
  hours?: string;
  description: string;
  packages: Package[];
  footnote?: string;
}

export const ivyBridePricing: PricingData = {
  studio: "Ivy Bride 艾葳精品婚紗",
  website: "https://www.ivy-bride.com",
  location: "Taipei, Taiwan",
  phone: "LINE: @ivybride",
  hours: "13:00 – 22:00 (GMT+8)",
  description: "Boutique bridal studio specializing in elegant, high-quality wedding photography with a curated collection of designer gowns tailored for Asian body types.",
  packages: [
    {
      name: "Photo-Only Package 純拍方案",
      priceTWD: "NT$38,000 – 58,000",
      priceUSD: "~$1,180 – $1,800 USD",
      features: [
        "3–4 bridal gown changes",
        "Indoor studio + outdoor location shoots",
        "Professional hair & makeup styling",
        "20–40 edited digital photos",
        "Photo album included",
      ],
    },
    {
      name: "Full Package 全包套方案",
      priceTWD: "NT$58,000 – 88,000",
      priceUSD: "~$1,800 – $2,730 USD",
      features: [
        "Pre-wedding photoshoot (3–4 looks)",
        "Engagement & wedding day gown rentals",
        "Bridal accessories & bouquet",
        "Professional photography team",
        "Hair & makeup for all events",
        "Photo album + enlarged prints + thank-you cards",
      ],
    },
    {
      name: "Gown Rental Only 單租禮服",
      priceTWD: "NT$12,000 – 25,000/piece",
      priceUSD: "~$370 – $775 USD/piece",
      features: [
        "Choose from 200+ designer gowns",
        "White gowns, evening dresses, Chinese-style",
        "Fitting with personal stylist",
        "Alterations included",
      ],
    },
  ],
  footnote: "Prices are estimates based on market research. Contact Ivy Bride directly for exact quotes — pricing is customized per couple.",
};

export const royalMansionPricing: PricingData = {
  studio: "Royal Mansion 蘿亞結婚精品",
  website: "https://www.taipeiroyalwed.tw",
  location: "9F, No. 520, Sec. 5, Zhongshan N. Rd., Shilin, Taipei",
  phone: "02-2597-5777",
  hours: "12:00 – 21:00 (GMT+8)",
  description: "Taipei's most recommended bridal brand with 63,000+ happy couples. Known for French haute couture gown designs, cinematic photography, and full-service wedding packages.",
  packages: [
    {
      name: "Pre-Wedding Photo Package 婚紗攝影方案",
      priceTWD: "NT$40,000 – 70,000",
      priceUSD: "~$1,240 – $2,170 USD",
      features: [
        "3–4 gown changes (1,300+ gowns in collection)",
        "Indoor studio + outdoor locations",
        "Professional photography & styling team",
        "20–50 edited photos + digital files",
        "Photo album & enlarged prints",
      ],
    },
    {
      name: "Full Wedding Package 婚紗+婚禮包套",
      priceTWD: "NT$60,000 – 100,000+",
      priceUSD: "~$1,860 – $3,100+ USD",
      features: [
        "Pre-wedding photoshoot",
        "Engagement & wedding day gown rentals",
        "Groom's suit rental",
        "Day-of bridal hair & makeup",
        "Wedding photography",
        "Bouquet, corsages & accessories",
        "Photo album + thank-you cards + enlarged prints",
      ],
    },
    {
      name: "Gown Rental 禮服租借",
      priceTWD: "NT$15,000 – 30,000/piece",
      priceUSD: "~$465 – $930 USD/piece",
      features: [
        "1,300+ French haute couture gowns",
        "Custom-designed for Asian body types",
        "Swarovski crystal details",
        "Imported fabrics from France, Switzerland, Italy",
        "Personal fitting with bridal stylist",
      ],
    },
    {
      name: "Platinum Week Special 白金週限定",
      priceTWD: "Contact for pricing",
      priceUSD: "Limited time offer",
      features: [
        "Free upgrade to new collection gown (1 piece)",
        "Custom embroidered veil (photo + banquet package)",
        "NT$6,000 upgrade voucher bonus",
        "Must book in-store during promotion period",
      ],
      note: "Current promotion — limited availability",
    },
  ],
  footnote: "Prices are market estimates for Taipei mid-to-high range bridal studios. Royal Mansion offers customized quotes based on your needs. Contact them directly for exact pricing.",
};

export const perfectWeddingPricing: PricingData = {
  studio: "Perfect Wedding 風華絕色婚禮事業",
  website: "https://perfect-wedding.com.tw",
  location: "No. 76, Aiguo E. Rd., Taipei",
  phone: "02-2356-7797~8",
  hours: "13:00 – 22:00 (GMT+8)",
  description: "Award-winning bridal studio certified by the Taipei City Government as an 'Excellent Store'. Known for hand-crafted lace fabrics sourced from France and a modern European-style indoor studio designed by Russ Lam.",
  packages: [
    {
      name: "Happy Wedding Photo Special 幸福婚拍專案",
      priceTWD: "NT$19,800",
      priceUSD: "~$614 USD",
      features: [
        "Quality wedding photos at special price",
        "Professional photography team",
        "Indoor sunlit studio + Korean-style studio",
        "Handmade bridal gowns",
        "Complimentary mystery gift for first-time clients",
      ],
      note: "Limited to 20 couples! Cannot combine with other offers.",
    },
    {
      name: "Wedding Photo Package 結婚照方案",
      priceTWD: "NT$16,800",
      priceUSD: "~$521 USD",
      features: [
        "Basic wedding photo package",
        "Studio photography session",
        "Hair & makeup styling",
        "Gown selection from collection",
      ],
    },
    {
      name: "Full Service 完整婚禮服務",
      priceTWD: "Contact for pricing",
      priceUSD: "Custom quote",
      features: [
        "Pre-wedding photography",
        "Wedding day photography & videography",
        "Gown rental (bridal & evening)",
        "Bridal makeup artist (新娘秘書)",
        "Complete wedding planning assistance",
      ],
    },
    {
      name: "Gown Fitting Experience 禮服試穿體驗",
      priceTWD: "Free",
      priceUSD: "Free",
      features: [
        "1-on-1 consultation with stylist (~30 min)",
        "Try on 3 gowns (~1 hour)",
        "Custom rental plan if interested (~30 min)",
        "New 2026 collection available",
      ],
      note: "Limited to 2 appointments per day",
    },
  ],
  footnote: "Prices from their official website. The NT$19,800 and NT$16,800 packages are promotional — contact Perfect Wedding for current availability.",
};

export default function PricingSection({ data }: { data: PricingData }) {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2>{data.studio}</h2>
        <p className="pricing-desc">{data.description}</p>
        <div className="pricing-info">
          <span>📍 {data.location}</span>
          <span>📞 {data.phone}</span>
          {data.hours && <span>🕐 {data.hours}</span>}
          <a href={data.website} target="_blank" rel="noopener noreferrer">🌐 Official Website</a>
        </div>
      </div>

      <div className="pricing-grid">
        {data.packages.map((pkg, i) => (
          <div key={i} className={`pricing-card ${pkg.note ? 'featured' : ''}`}>
            {pkg.note && <div className="pricing-badge">{pkg.note}</div>}
            <h3>{pkg.name}</h3>
            <div className="pricing-amount">
              <div className="price-twd">{pkg.priceTWD}</div>
              <div className="price-usd">{pkg.priceUSD}</div>
            </div>
            <ul>
              {pkg.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.footnote && <p className="pricing-footnote">⚠️ {data.footnote}</p>}

      <div className="exchange-note">
        <small>Exchange rate: 1 TWD ≈ $0.031 USD (approximate, may vary)</small>
      </div>
    </div>
  );
}
