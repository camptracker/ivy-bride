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
    phone: 'See website for booking',
    description: 'Premier wedding venue in Xinzhuang with Taiwan\'s most ceremony halls (4 total). Features 16th-century Baroque royal palace design. Partners with Hyatt Place hotel (5 min away). Available for outdoor weddings, vegetarian banquets, and traditional ceremonies.',
    packages: [
      {
        name: '2026 Good Day Wedding Package 好日子婚禮禮包',
        priceTWD: 'NT$2,000 off/table (before service charge)',
        priceUSD: '~$62 off/table',
        features: [
          'NT$2,000 discount per table (service charge calculated on original price)',
          'Valid until 2026/8/31',
          'Ghost month bonus (8/13–9/10): ceremony hall HALF PRICE',
          'Sign-up gifts (1 per 10 tables, more tables = more gifts):',
          '① Wedding planner & MC (婚禮企劃&主持人)',
          '② Chinese engagement ceremony (中式文定儀式)',
          '③ Unlimited red wine (紅酒無限暢飲)',
          '④ Hyatt Place hotel stay 1 night (凱悅嘉軒住宿一晚)',
          '⑤ Photo send-off backdrop (送客背板, not available for 6F Grand Hall)',
          '⑥ 80 wedding favors (婚禮小物80份)',
        ],
        note: 'Key promotion — valid until 2026/8/31',
      },
      {
        name: 'Royal Wedding Package 皇家婚禮專案',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          '16th-century Baroque palace-style design',
          'Xinzhuang exclusive — royal themed wedding',
          'Classic reinvention of traditional wedding style',
          'Most popular venue design at Xinzhuang location',
        ],
      },
      {
        name: 'Autumn/Winter 2025 秋冬婚禮專案',
        priceTWD: 'Book NT$100K → get NT$10K off',
        priceUSD: '~Book $3,100 → save $310',
        features: [
          'Small table counts welcome (as few as needed)',
          'Spend NT$100K total → NT$10K discount',
          'Valid for weddings through 2025/3/31',
          'Flexible for intimate weddings',
        ],
      },
      {
        name: 'Outdoor Wedding 戶外婚禮',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          'Outdoor ceremony garden available',
          'Weather contingency plans',
          'Combined with indoor reception',
        ],
      },
      {
        name: 'Vegetarian Banquet 蔬食宴席專案',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          'Full vegetarian/vegan banquet menu',
          'Premium plant-based cuisine',
          'Same venue elegance and service',
        ],
      },
      {
        name: 'Hyatt Place Partnership 凱悅嘉軒住宿禮遇',
        priceTWD: 'Included with qualifying packages',
        priceUSD: 'Complimentary',
        features: [
          'Only 5 min from Denwell Xinzhuang',
          'Bridal suite for wedding-day prep',
          'Convenient for morning ceremonies',
          'Available as sign-up gift (with 10+ tables)',
        ],
      },
    ],
    venues: [
      { name: 'Ceremony Hall 1 of 4 (Taiwan\'s most)', capacity: '4 ceremony halls total — most in Taiwan' },
      { name: '6F Grand Ceremony Hall 盛典廳', capacity: 'Premium grand ballroom · large weddings' },
      { name: 'Baroque Royal Hall', capacity: '16th-century palace style · signature design' },
      { name: 'Outdoor Ceremony Garden', capacity: 'Garden-style · intimate ceremonies' },
    ],
    menu: {
      title: 'Wedding Banquet Menu (consultation-based)',
      categories: [
        {
          name: 'Cold Appetizers 冷盤前菜',
          chinese: '冷盤前菜',
          items: [
            'Assorted cold platter (綜合冷盤)',
            'Marinated specialties (滷味拼盤)',
            'Seasonal appetizer selection (時令開胃菜)',
          ],
        },
        {
          name: 'Seafood 海鮮',
          chinese: '海鮮',
          items: [
            'Live lobster (活龍蝦)',
            'Steamed grouper (清蒸石斑)',
            'Braised abalone (紅燒鮑魚)',
            'Premium shrimp dish (頂級蝦料理)',
          ],
        },
        {
          name: 'Main Courses 主菜',
          chinese: '主菜',
          items: [
            'Braised pork knuckle (紅燒蹄膀)',
            'Roasted chicken (烤雞)',
            'Premium beef or pork entrée (頂級牛/豬肉主菜)',
            'Seasonal vegetable dish (時蔬料理)',
          ],
        },
        {
          name: 'Soup 湯品',
          chinese: '湯品',
          items: [
            'Double-boiled herbal chicken soup (燉補雞湯)',
            'Seafood thick soup (海鮮濃湯)',
          ],
        },
        {
          name: 'Dessert 甜品',
          chinese: '甜品',
          items: [
            'Sweet tangyuan — flower & moon (花好月圓湯圓)',
            'Wedding cake (喜餅)',
            'Seasonal fresh fruit (時令水果)',
          ],
        },
      ],
      signature: [
        'Live lobster preparation (活龍蝦)',
        'Steamed premium grouper (清蒸石斑)',
        'Braised abalone (紅燒鮑魚)',
        'Flower & moon tangyuan (花好月圓)',
      ],
    },
    excludedDates: '9/12, 9/19, 9/27, 10/3, 10/10, 10/11, 10/25, 11/1, 11/22',
    footnote: 'Denwell uses consultation-based pricing — exact per-table cost depends on menu selection and guest count. The 2026 Good Day package NT$2K/table discount is the main published promotion. Excluded dates: 9/12, 9/19, 9/27, 10/3, 10/10, 10/11, 10/25, 11/1, 11/22. Contact directly for detailed menu options and pricing.',
  },
  zh: {
    name: '典華 新莊',
    chineseName: '典華 新莊',
    website: 'https://www.denwell.com/新莊-婚宴專案/',
    location: '新北市新莊區',
    phone: '請見官網預約',
    description: '新莊頂級婚宴會館，全台最多4座儀式堂。16世紀巴洛克皇家宮廷風格設計。與凱悅嘉軒酒店合作（車程5分鐘）。提供戶外婚禮、蔬食宴席、傳統儀式等多元方案。',
    packages: [
      {
        name: '2026結婚好日子婚禮禮包',
        priceTWD: '每桌折NT$2,000（服務費原價計）',
        priceUSD: '~每桌折$62',
        features: [
          '每桌優惠NT$2,000（服務費以原價計算）',
          '有效期限至 2026/8/31',
          '民俗月加碼（8/13–9/10）：儀式堂半價',
          '簽約好禮（滿10桌自選1項，桌數越多好禮越多）：',
          '① 婚禮企劃 & 主持人',
          '② 中式文定儀式',
          '③ 紅酒無限暢飲',
          '④ 凱悅嘉軒住宿一晚',
          '⑤ 送客背板（6F盛典不適用）',
          '⑥ 婚禮小物80份',
        ],
        note: '主打優惠 — 有效期至 2026/8/31',
      },
      {
        name: '皇家婚禮專案',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: [
          '16世紀巴洛克貴族宮廷風格',
          '新莊典華限定皇家主題婚禮',
          '經典皇家主題式婚禮全新演繹',
          '新莊館最受歡迎場地設計',
        ],
      },
      {
        name: '2025秋冬婚禮專案',
        priceTWD: '訂席滿10萬折1萬',
        priceUSD: '~滿$3,100省$310',
        features: [
          '小桌數也可輕盈備婚',
          '訂席滿NT$100,000折NT$10,000',
          '2025/3/31前婚期皆適用',
          '適合小型精緻婚禮',
        ],
      },
      {
        name: '戶外婚禮',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: ['戶外證婚花園', '雨天備案方案', '結合室內宴會'],
      },
      {
        name: '蔬食宴席專案',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: ['全素食婚宴菜單', '頂級蔬食料理', '同等場地規格與服務'],
      },
      {
        name: '凱悅嘉軒住宿禮遇',
        priceTWD: '符合資格方案即享',
        priceUSD: '免費',
        features: [
          '距新莊典華僅5分鐘',
          '婚禮當天新娘套房',
          '適合早起迎娶儀式',
          '簽約好禮可選（滿10桌）',
        ],
      },
    ],
    venues: [
      { name: '儀式堂（全台最多4座）', capacity: '全台最多4座儀式堂' },
      { name: '6F 盛典廳', capacity: '頂級大宴會廳 · 大型婚禮' },
      { name: '巴洛克皇家廳', capacity: '16世紀宮廷風格 · 招牌設計' },
      { name: '戶外證婚花園', capacity: '花園式 · 浪漫證婚' },
    ],
    menu: {
      title: '婚宴菜單（需洽詢客製）',
      categories: [
        {
          name: '冷盤前菜',
          chinese: '冷盤前菜',
          items: ['綜合冷盤', '滷味拼盤', '時令開胃菜'],
        },
        {
          name: '海鮮',
          chinese: '海鮮',
          items: ['活龍蝦', '清蒸石斑', '紅燒鮑魚', '頂級蝦料理'],
        },
        {
          name: '主菜',
          chinese: '主菜',
          items: ['紅燒蹄膀', '烤雞', '頂級牛/豬肉主菜', '時蔬料理'],
        },
        {
          name: '湯品',
          chinese: '湯品',
          items: ['燉補雞湯', '海鮮濃湯'],
        },
        {
          name: '甜品',
          chinese: '甜品',
          items: ['花好月圓湯圓', '喜餅', '時令水果'],
        },
      ],
      signature: ['活龍蝦', '清蒸石斑', '紅燒鮑魚', '花好月圓'],
    },
    excludedDates: '9/12、9/19、9/27、10/3、10/10、10/11、10/25、11/1、11/22',
    footnote: '典華採洽詢制定價 — 每桌實際費用依菜色選擇及賓客人數而定。2026好日子禮包每桌折NT$2,000為主要公開優惠。除外日期：9/12、9/19、9/27、10/3、10/10、10/11、10/25、11/1、11/22。詳細菜單及報價請直接洽詢。',
  },
};
