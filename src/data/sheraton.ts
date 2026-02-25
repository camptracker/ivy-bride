export interface VenuePhoto {
  src: string;
}

const files = Array.from({ length: 11 }, (_, i) => `${String(i).padStart(2, '0')}.jpg`);

export const sheratonPhotos: VenuePhoto[] = files.map(f => ({
  src: `photos/sheraton/${f}`,
}));

export const sheratonData = {
  en: {
    name: 'Sheraton Grand Taipei',
    chineseName: '台北喜來登大飯店',
    website: 'https://www.sheratongrandtaipei.com/websev?lang=zh-tw&ref=pages&cat=50&id=336',
    location: 'Near Shandaosi MRT Station, Taipei',
    phone: 'See website',
    description: 'Iconic 5-star hotel offering luxurious wedding banquets with Michelin-level cuisine, grand ballrooms, and comprehensive wedding packages.',
    packages: [
      {
        name: 'Happy Wedding 喜來享婚',
        priceTWD: 'NT$16,800/table +10%',
        priceUSD: '~$521/table +10%',
        features: [
          'Standard wedding banquet package',
          'Professional event coordination',
          '+10% service charge applies',
        ],
      },
      {
        name: 'Double Joy 喜悅成雙',
        priceTWD: 'NT$22,800/table +10%',
        priceUSD: '~$707/table +10%',
        features: [
          'Unlimited beer throughout event',
          'Wedding consultant included (worth NT$68,000 / ~$2,108)',
          'Premium banquet menu',
          '+10% service charge applies',
        ],
        note: 'Popular choice — includes wedding consultant worth NT$68K',
      },
      {
        name: 'Eternal Shine 喜耀永恆',
        priceTWD: 'NT$25,800/table +10%',
        priceUSD: '~$800/table +10%',
        features: [
          'Red wine + beer unlimited',
          'Welcome gifts for guests',
          'Chinese engagement ceremony included',
          'Premium menu upgrade',
          '+10% service charge applies',
        ],
      },
      {
        name: 'Diamond Sparkle 喜鑽閃耀',
        priceTWD: 'NT$32,800/table +10%',
        priceUSD: '~$1,017/table +10%',
        features: [
          'Michelin chef curated menu',
          'Red wine + white wine + beer unlimited',
          'Full premium wedding experience',
          'Top-tier banquet service',
          '+10% service charge applies',
        ],
        note: 'Premium tier — Michelin chef menu',
      },
    ],
    venues: [
      { name: 'Grand Ballroom', capacity: '760 ping · 120 tables · 1,400 guests' },
      { name: 'Shou + Xi Hall', capacity: '72 ping · 12 tables' },
      { name: 'Qingwan', capacity: '72 ping · 13 tables' },
      { name: 'Ruisui Garden', capacity: '92 ping · 18 tables' },
      { name: 'Multi-function Hall', capacity: '85 ping · 13 tables' },
    ],
    menu: {
      title: 'Signature Dishes',
      categories: [],
      signature: [
        'Welcome Six-Course Platter (迎賓六頭盤)',
        'Fish Maw & Sea Treasure Chicken Soup (花膠海皇燉雞盅)',
        'Fresh Live Lobster (鮮露活龍蝦)',
        'Braised Sea Cucumber with Abalone (蔥燒烏參燴鮑魚)',
      ],
    },
    footnote: 'All prices are per table and subject to +10% service charge. Contact Sheraton Grand Taipei for availability and customization.',
  },
  zh: {
    name: '台北喜來登大飯店',
    chineseName: '台北喜來登大飯店',
    website: 'https://www.sheratongrandtaipei.com/websev?lang=zh-tw&ref=pages&cat=50&id=336',
    location: '台北市善導寺捷運站旁',
    phone: '請見官網',
    description: '五星級飯店婚宴，提供米其林級料理、豪華宴會廳及全方位婚禮方案。',
    packages: [
      {
        name: '喜來享婚 Happy Wedding',
        priceTWD: 'NT$16,800/桌 +10%',
        priceUSD: '~$521/桌 +10%',
        features: ['標準婚宴方案', '專業活動統籌', '另加10%服務費'],
      },
      {
        name: '喜悅成雙 Double Joy',
        priceTWD: 'NT$22,800/桌 +10%',
        priceUSD: '~$707/桌 +10%',
        features: [
          '啤酒無限暢飲',
          '含婚禮顧問（價值NT$68,000 / ~$2,108）',
          '精緻婚宴菜單',
          '另加10%服務費',
        ],
        note: '熱門選擇 — 含價值NT$68K婚禮顧問',
      },
      {
        name: '喜耀永恆 Eternal Shine',
        priceTWD: 'NT$25,800/桌 +10%',
        priceUSD: '~$800/桌 +10%',
        features: [
          '紅酒+啤酒無限暢飲',
          '賓客迎賓禮',
          '含中式訂婚儀式',
          '精緻菜單升級',
          '另加10%服務費',
        ],
      },
      {
        name: '喜鑽閃耀 Diamond Sparkle',
        priceTWD: 'NT$32,800/桌 +10%',
        priceUSD: '~$1,017/桌 +10%',
        features: [
          '米其林主廚精選菜單',
          '紅酒+白酒+啤酒無限暢飲',
          '頂級婚禮體驗',
          '最高規格宴會服務',
          '另加10%服務費',
        ],
        note: '頂級方案 — 米其林主廚菜單',
      },
    ],
    venues: [
      { name: '福廳（大宴會廳）', capacity: '760坪 · 120桌 · 1,400人' },
      { name: '壽＋禧廳', capacity: '72坪 · 12桌' },
      { name: '清婉廳', capacity: '72坪 · 13桌' },
      { name: '瑞穗花園', capacity: '92坪 · 18桌' },
      { name: '多功能廳', capacity: '85坪 · 13桌' },
    ],
    menu: {
      title: '招牌菜色',
      categories: [],
      signature: ['迎賓六頭盤', '花膠海皇燉雞盅', '鮮露活龍蝦', '蔥燒烏參燴鮑魚'],
    },
    footnote: '所有價格為每桌價格，另加10%服務費。詳情請洽台北喜來登大飯店。',
  },
};
