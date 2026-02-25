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
    phone: '02-2321-5511 ext. Banquet Sales',
    description: 'Heritage 5-star hotel with over 20 years of wedding expertise. Michelin-caliber chefs, 1,000+ ping of flexible banquet space across 4 floors, and a dedicated wedding consultant team (partnered with "Cheng Jia" wedding planners, valued at NT$68,000).',
    packages: [
      {
        name: 'Happy Wedding 喜來享婚',
        priceTWD: 'NT$16,800/table +10%',
        priceUSD: '~$521/table +10%',
        features: [
          '6-dish welcome platter (迎賓六頭盤)',
          'Full banquet menu (10+ courses)',
          'Jiaoxi Mu Hotel spa stay (for qualifying tables)',
          'Basic venue setup & LED screen',
          'Complimentary parking',
        ],
      },
      {
        name: 'Double Joy 喜悅成雙',
        priceTWD: 'NT$22,800/table +10%',
        priceUSD: '~$707/table +10%',
        features: [
          'Everything in Happy Wedding',
          'Unlimited beer during banquet',
          'Wedding consultant service (10+ tables, worth NT$68,000)',
          'Upgraded menu with premium seafood',
          'Fresh lobster course',
        ],
        note: 'Popular — includes wedding consultant worth NT$68K',
      },
      {
        name: 'Eternal Shine 喜耀永恆',
        priceTWD: 'NT$25,800/table +10%',
        priceUSD: '~$800/table +10%',
        features: [
          'Everything in Double Joy',
          'Unlimited red wine + beer',
          'Welcome gifts for each guest (位上禮)',
          'Chinese engagement ceremony included (10+ tables)',
          'Choice of Classic (A) or Fusion (B) menu',
          'Lobster, grouper, abalone, sea cucumber all included',
          'Australian wagyu beef cheek or Iberian pork',
        ],
        note: 'Most popular — A (classic) or B (fusion) menu options',
      },
      {
        name: 'Diamond Sparkle 喜鑽閃耀',
        priceTWD: 'NT$32,800/table +10%',
        priceUSD: '~$1,017/table +10%',
        features: [
          'Everything in Eternal Shine',
          'Michelin-star chef curated menu',
          'Unlimited red wine + white wine + beer',
          'Top-tier premium ingredients throughout',
          'Ultimate luxury banquet experience',
        ],
        note: 'Premium tier — Michelin chef menu',
      },
    ],
    venues: [
      { name: 'Grand Ballroom (B2) 福廳·祿廳·壽廳·喜廳', capacity: '760 ping · 120 tables · 1,400 guests · 4.8m ceiling · 310" LED screen' },
      { name: 'Shou + Xi Hall (B2) 壽廳·喜廳', capacity: '72 ping · 12 tables · 150 guests · Column-free design, can merge' },
      { name: 'Qingwan (1F) 清翫', capacity: '72 ping · 13 tables · 150 guests · 120" projector, private restroom, bridal suite' },
      { name: 'Ruisui Garden (2F) 瑞穗園', capacity: '92 ping · 18 tables · 210 guests · Brintons coral-purple handmade carpet' },
      { name: 'Multi-function Halls (B1) 玉瀾·薈萃·翠芳·彩蝶·逸絢', capacity: '85 ping · 13 tables · 140 guests · 5 halls, can merge' },
    ],
    menu: {
      title: 'Banquet Menu (Chef Ye Junjie & Chef Lin Yugang)',
      categories: [
        {
          name: '6-Dish Welcome Platter (served per table of 10)',
          chinese: '迎賓六頭盤（十人份）',
          items: [
            'Charcoal-grilled mullet roe (炭烤大根烏魚子)',
            'Double-sauce chicken (雙醬黃皮雞)',
            'Sichuan-spiced chitterlings (四季麻香拌肥腸)',
            'Scallion-oil rose chicken (蔥油沙薑玫瑰雞)',
            'Golden kimchi conch slices (黃金泡菜鮮螺片)',
            'Seasonal cold appetizer (時令冷盤)',
          ],
        },
        {
          name: 'Soup',
          chinese: '湯品',
          items: [
            'Fish maw & sea treasure chicken pot (花膠海皇燉雞盅)',
          ],
        },
        {
          name: 'Main Courses',
          chinese: '主菜',
          items: [
            'Fresh live lobster — scallion oil or laksa coconut style (鮮露活龍蝦 — 蔥油/叻沙椰香)',
            'Herbal grouper (靈草鳳脂潤虎斑)',
            'Braised sea cucumber with abalone — whole per person (蔥燒烏參燴鮑魚，一人一條)',
            'Australian wagyu beef cheek — boneless, tender (澳洲和牛牛頰肉)',
            'OR Iberian pork (伊比利豬) — 2x price of regular pork',
            'Typhoon shelter soft-shell crab rice cake (避風塘軟殼蟹米糕) — #1 most packed to-go',
          ],
        },
        {
          name: 'Dessert',
          chinese: '甜品',
          items: [
            '4-color stuffed tangyuan — red, white, purple & yellow sweet potato, all with filling (花開富貴花好月圓四色湯圓)',
            'Seasonal fresh fruit platter',
          ],
        },
      ],
      signature: [
        '6-dish welcome platter — individual portions, not shared small plates (迎賓六頭盤)',
        'Fresh live lobster (鮮露活龍蝦)',
        'Whole sea cucumber per person + abalone (蔥燒烏參燴鮑魚)',
        'Typhoon shelter soft-shell crab rice cake — highest "take-home" rate (避風塘軟殼蟹米糕)',
        '4-color stuffed tangyuan (花好月圓四色湯圓)',
        'Australian wagyu beef cheek (澳洲和牛牛頰肉)',
      ],
    },
    footnote: 'All prices +10% service charge. Menu items vary by package tier. 25,800 tier offers choice of Classic (A) or Fusion (B) menus. Chef personally attends tasting sessions. Trial meal available at ~80% price. Gifts: spending tiers from NT$100K to NT$800K unlock perks (afternoon tea → spa stays → bridal gown experience → "Shark Wedding" photography → I-PRIMO diamond ring).',
  },
  zh: {
    name: '台北喜來登大飯店',
    chineseName: '台北喜來登大飯店',
    website: 'https://www.sheratongrandtaipei.com/websev?lang=zh-tw&ref=pages&cat=50&id=336',
    location: '台北市善導寺捷運站旁',
    phone: '02-2321-5511轉宴會業務部',
    description: '五星級飯店婚宴，超過20年婚禮經驗。米其林級主廚葉俊傑、林玉罡雙廚聯手掌杓，千坪宴會空間跨4層樓，搭配「成家婚禮顧問」專屬服務（價值NT$68,000）。',
    packages: [
      {
        name: '喜來享婚',
        priceTWD: 'NT$16,800/桌 +10%',
        priceUSD: '~$521/桌 +10%',
        features: [
          '迎賓六頭盤',
          '完整宴會菜色（10道以上）',
          '達指定桌數享礁溪寒沐酒店平日住宿',
          '基本場地佈置 & LED螢幕',
          '免費停車',
        ],
      },
      {
        name: '喜悅成雙',
        priceTWD: 'NT$22,800/桌 +10%',
        priceUSD: '~$707/桌 +10%',
        features: [
          '含喜來享婚所有內容',
          '席間啤酒暢飲',
          '達指定桌數享婚顧服務（價值NT$68,000）',
          '升級菜色含頂級海鮮',
          '活龍蝦料理',
        ],
        note: '人氣之選 — 含價值NT$68K婚禮顧問',
      },
      {
        name: '喜耀永恆',
        priceTWD: 'NT$25,800/桌 +10%',
        priceUSD: '~$800/桌 +10%',
        features: [
          '含喜悅成雙所有內容',
          '紅酒+啤酒暢飲',
          '每位賓客位上禮',
          '達指定桌數加贈文定迎娶',
          '可選經典A方案或異國風味B方案',
          '龍蝦、石斑、鮑魚、烏參全含',
          '澳洲和牛牛頰肉或伊比利豬',
        ],
        note: '最受歡迎 — 可選經典(A)或創意(B)菜單',
      },
      {
        name: '喜鑽閃耀',
        priceTWD: 'NT$32,800/桌 +10%',
        priceUSD: '~$1,017/桌 +10%',
        features: [
          '含喜耀永恆所有內容',
          '米其林星廚精選菜色',
          '紅酒+白酒+啤酒暢飲',
          '全程頂級食材',
          '極致尊榮婚宴體驗',
        ],
        note: '頂級方案 — 米其林主廚菜單',
      },
    ],
    venues: [
      { name: '大宴會廳 (B2) 福廳·祿廳·壽廳·喜廳', capacity: '760坪 · 120桌 · 1,400人 · 挑高4.8米 · 310吋LED螢幕' },
      { name: '壽廳·喜廳 (B2)', capacity: '72坪 · 12桌 · 150人 · 無樑柱設計，可合併' },
      { name: '清翫 (1F)', capacity: '72坪 · 13桌 · 150人 · 120吋投影、獨立洗手間、新人休息室' },
      { name: '瑞穗園 (2F)', capacity: '92坪 · 18桌 · 210人 · 英國Brintons珊瑚紫手工地毯' },
      { name: '多功能廳 (B1) 玉瀾·薈萃·翠芳·彩蝶·逸絢', capacity: '85坪 · 13桌 · 140人 · 5廳可合併' },
    ],
    menu: {
      title: '婚宴菜單（主廚葉俊傑 & 林玉罡）',
      categories: [
        {
          name: '迎賓六頭盤（十人份獨立呈現）',
          chinese: '迎賓六頭盤',
          items: [
            '炭烤大根烏魚子',
            '雙醬黃皮雞',
            '四季麻香拌肥腸',
            '蔥油沙薑玫瑰雞',
            '黃金泡菜鮮螺片',
            '時令冷盤',
          ],
        },
        {
          name: '湯品',
          chinese: '湯品',
          items: ['花膠海皇燉雞盅'],
        },
        {
          name: '主菜',
          chinese: '主菜',
          items: [
            '鮮露活龍蝦 — 蔥油/叻沙椰香兩種風格',
            '靈草鳳脂潤虎斑',
            '蔥燒烏參燴鮑魚（一人一條，非切塊）',
            '澳洲和牛牛頰肉（無骨軟嫩）',
            '或 伊比利豬（價格為一般豬肉兩倍）',
            '避風塘軟殼蟹米糕 — 打包率第一名',
          ],
        },
        {
          name: '甜品',
          chinese: '甜品',
          items: [
            '花開富貴花好月圓四色湯圓 — 紅、白、紫地瓜、黃地瓜，每顆都包餡',
            '時令水果盤',
          ],
        },
      ],
      signature: [
        '迎賓六頭盤 — 獨立呈現，非混盤小碟',
        '鮮露活龍蝦',
        '蔥燒烏參燴鮑魚 — 一人一條',
        '避風塘軟殼蟹米糕 — 打包率最高',
        '花好月圓四色湯圓 — 每顆包餡',
        '澳洲和牛牛頰肉',
      ],
    },
    footnote: '以上價格均另加10%服務費。菜色依方案等級有所不同。25,800方案可選經典A或異國風味B菜單。主廚親自出席試菜。試菜約八折優惠。滿額贈：10-20萬享十二廚雙人下午茶；30-40萬享頂級住宿或主桌半桌禮遇；60萬享婚禮背板或SJ鯊魚婚攝；80萬享I-PRIMO鑽戒。',
  },
};
