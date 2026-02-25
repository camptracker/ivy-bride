export interface VenuePhoto {
  src: string;
}

const files = ['00.jpg', '01.jpg'];

export const mov88Photos: VenuePhoto[] = files.map(f => ({
  src: `photos/88mov/${f}`,
}));

export const mov88Data = {
  en: {
    name: '88 Mov',
    chineseName: '88號樂章',
    website: 'https://www.88mov5f.com/',
    location: '5F, No. 88, Minshan St., Neihu, Taipei (inside Carrefour Neihu)',
    phone: '02-2794-3800 (main) / 02-2794-3839 (郭董私房菜)',
    hours: '10:00–21:00',
    description: '500-ping European-style wedding plaza with 10 scenic photo areas. Free shuttle from Songshan MRT Exit 4. 900 parking spots (4 hrs free). Also home to 88 SELECT (featuring 樂埔薈所, SMEXY, 掌門精釀 craft beer, and manor-style banquet hall).',
    packages: [
      {
        name: '2026 Happy Wedding Day 樂婚日',
        priceTWD: 'NT$3,000 off/table on select dates',
        priceUSD: '~$93 off/table',
        features: [
          'NT$3,000 savings per table on designated "Happy Wedding Days"',
          'Jan: 3,4,11,18,24,25 | Feb: 8,15,21 | Mar: 7,8,14,29',
          'Apr: 4,5,11,12,18,19 | May: 2,3,9,10,16,17,31',
          'Jun: 6,7,13,20,21,27,28 | Jul: 4,5,11,12,19,25,26',
          'Aug: 1,2,8,9,15,16 | Sep: 13,20,26 | Oct: 4,17,18,24',
          'Nov: 7,8,14,15,21,28,29 | Dec: 5,6,12,13,20,27',
        ],
        note: 'Key promotion — save NT$3K/table on select dates',
      },
      {
        name: 'VIP Engagement Ceremony 喜締鴛鴦文定 (VIP Room)',
        priceTWD: 'NT$18,888 +10%',
        priceUSD: '~$586 +10%',
        features: [
          'Exclusive VIP private space',
          'Engagement props & display table',
          'Handmade tea treats for 36 guests',
          'Photo backdrop + high/low chairs',
          'Wooden gift box set (2 sets)',
          'Tea set tray & engagement jewelry box',
          'Sweet tea for 6 + sweet soup for 20',
          'Chicken leg (traditional)',
          'Dragon & phoenix gown set (1 pair)',
          'Mandarin-speaking ceremony host',
        ],
      },
      {
        name: 'Banquet Hall Engagement 宴會廳文定',
        priceTWD: 'NT$6,000 +10%',
        priceUSD: '~$186 +10%',
        features: [
          'Gift display table',
          'Traditional high/low chairs',
          'Sweet tea for 6 + sweet soup for 20',
          'Chicken leg (traditional)',
          'Mandarin-speaking ceremony host',
        ],
      },
      {
        name: 'Light Wedding 質感輕婚禮',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          'Intimate, stylish wedding experience',
          'Bonus: mini honeymoon package included',
          'European-style venue with 10 photo spots',
          'Contact via LINE for details',
        ],
      },
    ],
    venues: [
      { name: '88號樂章 Main Hall (5F Carrefour)', capacity: '500 ping · European grand plaza · multiple photo zones' },
      { name: '88 SELECT Manor Banquet Hall', capacity: 'Separate venue · Intimate manor-style · 02-2796-8567' },
    ],
    menu: {
      title: 'Banquet Menu (郭董私房菜 / Chef Guo\'s Kitchen)',
      categories: [
        {
          name: 'Appetizers (四前菜)',
          chinese: '四前菜',
          items: [
            'Seasonal cold platter (時令冷盤拼盤)',
            'Marinated specialty platter (滷味拼盤)',
            'Smoked salmon canapé (煙燻鮭魚)',
            'Crispy shrimp rolls (酥炸蝦捲)',
          ],
        },
        {
          name: 'Chef\'s Specials (主廚推薦)',
          chinese: '主廚推薦',
          items: [
            'Live seafood — coast-to-table (產地直送活跳海鮮)',
            'Steamed whole fish (清蒸鮮魚)',
            'Braised abalone (紅燒鮑魚)',
            'Premium lobster preparation (頂級龍蝦料理)',
          ],
        },
        {
          name: 'Handmade Dishes (手作料理)',
          chinese: '手作料理',
          items: [
            'Seafood handmade noodles (海鮮手工麵)',
            'Slow-braised pork belly (慢燉五花肉)',
            'Clay pot rice with sausage (煲仔飯)',
            'Wok-fried seasonal greens (時蔬快炒)',
          ],
        },
        {
          name: 'Fine Desserts (精緻甜點)',
          chinese: '精緻甜點',
          items: [
            'Mango sago pudding (楊枝甘露)',
            'Taro ball sweet soup (芋圓甜湯)',
            'Seasonal fruit platter (時令水果盤)',
            'Wedding cake (婚禮蛋糕)',
          ],
        },
      ],
      signature: [
        'Live coast-to-table seafood (產地直送活跳海鮮)',
        'Chef\'s handmade specialties (主廚招牌手作料理)',
        '10-person banquet sets available (十人桌菜)',
        'Also offers: business lunch boxes (商務便當)',
      ],
    },
    footnote: 'Banquet per-table pricing is by consultation — contact via LINE or phone. The 樂婚日 (Happy Wedding Day) discount is the main published promotion. 88 SELECT (02-2796-8567) is a separate manor-style venue under the same brand.',
  },
  zh: {
    name: '88號樂章',
    chineseName: '88號樂章',
    website: 'https://www.88mov5f.com/',
    location: '台北市內湖區民善街88號5樓（家樂福內湖店內）',
    phone: '02-2794-3800（總機）/ 02-2794-3839（郭董私房菜）',
    hours: '10:00–21:00',
    description: '500坪歐式婚宴廣場，十大場景美拍。松山捷運站4號出口免費接駁。家樂福900停車位（賓客4小時免費）。旗下品牌88 SELECT（樂埔薈所、SMEXY、掌門精釀、莊園式宴會廳）。',
    packages: [
      {
        name: '2026 樂婚日',
        priceTWD: '每桌現省NT$3,000',
        priceUSD: '~每桌省$93',
        features: [
          '指定樂婚日每桌省NT$3,000',
          '一月：3,4,11,18,24,25 | 二月：8,15,21 | 三月：7,8,14,29',
          '四月：4,5,11,12,18,19 | 五月：2,3,9,10,16,17,31',
          '六月：6,7,13,20,21,27,28 | 七月：4,5,11,12,19,25,26',
          '八月：1,2,8,9,15,16 | 九月：13,20,26 | 十月：4,17,18,24',
          '十一月：7,8,14,15,21,28,29 | 十二月：5,6,12,13,20,27',
        ],
        note: '主打優惠 — 指定日每桌省NT$3,000',
      },
      {
        name: '喜締鴛鴦文定專案（VIP專屬空間）',
        priceTWD: 'NT$18,888 +10%',
        priceUSD: '~$586 +10%',
        features: [
          '專屬VIP空間',
          '文定備品 & 禮品展示桌',
          '36人份手工茶點',
          '專屬拍照背板 + 高低腳椅',
          '木盛盒2組',
          '專屬茶盤茶甌 & 聘金珠寶盒',
          '甜茶6位 + 甜湯20位',
          '雞腿1支',
          '龍鳳掛1套',
          '國語專業儀式帶領人員',
        ],
      },
      {
        name: '宴會廳文定',
        priceTWD: 'NT$6,000 +10%',
        priceUSD: '~$186 +10%',
        features: [
          '禮品展示桌',
          '傳統高低腳椅',
          '甜茶6位 + 甜湯20位',
          '雞腿1支',
          '國語專業儀式帶領人員',
        ],
      },
      {
        name: '質感輕婚禮',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: [
          '精緻質感婚禮體驗',
          '加碼贈小蜜月',
          '歐式場地+10大美拍場景',
          '加入官方LINE諮詢',
        ],
      },
    ],
    venues: [
      { name: '88號樂章本館（家樂福5F）', capacity: '500坪 · 歐式豪華廣場 · 多區美拍場景' },
      { name: '88 SELECT 莊園式宴會廳', capacity: '獨立場地 · 精緻莊園風格 · 02-2796-8567' },
    ],
    menu: {
      title: '婚宴菜色（郭董私房菜）',
      categories: [
        {
          name: '四前菜',
          chinese: '四前菜',
          items: ['時令冷盤拼盤', '滷味拼盤', '煙燻鮭魚', '酥炸蝦捲'],
        },
        {
          name: '主廚推薦',
          chinese: '主廚推薦',
          items: ['產地直送活跳海鮮', '清蒸鮮魚', '紅燒鮑魚', '頂級龍蝦料理'],
        },
        {
          name: '手作料理',
          chinese: '手作料理',
          items: ['海鮮手工麵', '慢燉五花肉', '煲仔飯', '時蔬快炒'],
        },
        {
          name: '精緻甜點',
          chinese: '精緻甜點',
          items: ['楊枝甘露', '芋圓甜湯', '時令水果盤', '婚禮蛋糕'],
        },
      ],
      signature: ['產地直送活跳海鮮', '主廚招牌手作料理', '十人桌菜', '商務便當亦可供應'],
    },
    footnote: '婚宴每桌價格需洽詢。樂婚日為主要公開優惠。88 SELECT（02-2796-8567）為旗下獨立莊園式婚宴場地。',
  },
};
