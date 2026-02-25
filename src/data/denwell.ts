export interface VenuePhoto {
  src: string;
}

const files = Array.from({ length: 12 }, (_, i) => `${String(i).padStart(2, '0')}.jpg`);

export const denwellPhotos: VenuePhoto[] = files.map(f => ({
  src: `photos/denwell/${f}`,
}));

export const denwellData = {
  en: {
    name: 'Denwell (Xinzhuang)',
    chineseName: '典華 新莊',
    website: 'https://www.denwell.com/新莊-婚宴專案/',
    location: 'Xinzhuang, New Taipei City',
    phone: 'See website',
    description: 'Premium wedding banquet venue in Xinzhuang featuring elegant ballrooms, outdoor ceremony options, and comprehensive wedding packages.',
    packages: [
      {
        name: '2026 Good Day Wedding Package',
        priceTWD: 'NT$2,000 off/table',
        priceUSD: '~$62 off/table',
        features: [
          'NT$2,000 discount per table (before service charge)',
          'Valid until 2026/8/31',
          'Ghost month (8/13–9/10): ceremony hall half price',
          'Sign-up gifts (1 per 10 tables): wedding planner & MC, Chinese engagement ceremony, unlimited red wine, Hyatt Place hotel 1 night, photo backdrop, 80 wedding favors',
          'More tables = more gifts',
        ],
        note: 'Key promotion — valid until 2026/8/31',
      },
      {
        name: 'Royal Wedding Package',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          'Premium royal-themed wedding experience',
          'Luxury ballroom setup',
          'Full wedding coordination',
        ],
      },
      {
        name: 'Outdoor Wedding',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          'Outdoor ceremony options',
          'Garden-style celebration',
          'Weather backup plans available',
        ],
      },
      {
        name: 'Vegetarian Banquet',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          'Full vegetarian menu options',
          'Premium plant-based cuisine',
          'Same venue elegance',
        ],
      },
    ],
    excludedDates: '9/12, 9/19, 9/27, 10/3, 10/10, 10/11, 10/25, 11/1, 11/22',
    footnote: 'Excluded dates for the 2026 package: 9/12, 9/19, 9/27, 10/3, 10/10, 10/11, 10/25, 11/1, 11/22. Contact Denwell directly for exact pricing.',
  },
  zh: {
    name: '典華 新莊',
    chineseName: '典華 新莊',
    website: 'https://www.denwell.com/新莊-婚宴專案/',
    location: '新北市新莊區',
    phone: '請見官網',
    description: '新莊頂級婚宴會館，提供優雅宴會廳、戶外證婚及全方位婚禮套裝方案。',
    packages: [
      {
        name: '2026結婚好日子婚禮禮包',
        priceTWD: '每桌折NT$2,000',
        priceUSD: '~每桌折$62 USD',
        features: [
          '每桌優惠NT$2,000（未含服務費）',
          '有效期限至 2026/8/31',
          '鬼月期間（8/13–9/10）：儀式廳半價',
          '簽約禮（每10桌1份）：婚禮企劃&主持人、中式訂婚儀式、紅酒無限暢飲、凱悅嘉軒住宿一晚、拍照背板、80份婚禮小物',
          '桌數越多，禮物越多',
        ],
        note: '主打優惠 — 有效期至 2026/8/31',
      },
      {
        name: '皇家婚禮方案',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: ['頂級皇家主題婚禮體驗', '豪華宴會廳佈置', '全程婚禮統籌'],
      },
      {
        name: '戶外婚禮',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: ['戶外證婚選項', '花園式婚禮慶典', '雨天備案方案'],
      },
      {
        name: '素食婚宴',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: ['全素食菜單選擇', '頂級蔬食料理', '同等場地規格'],
      },
    ],
    excludedDates: '9/12, 9/19, 9/27, 10/3, 10/10, 10/11, 10/25, 11/1, 11/22',
    footnote: '2026方案除外日期：9/12、9/19、9/27、10/3、10/10、10/11、10/25、11/1、11/22。詳細價格請直接洽詢典華。',
  },
};
