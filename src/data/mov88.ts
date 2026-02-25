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
    phone: '02-2794-3839',
    hours: '10:00–21:00',
    description: '500-ping European-style wedding plaza featuring a Rome music fountain replica, London Big Ben, Mediterranean cafe, and 10 scenic photo areas. Free shuttle from Songshan MRT Station Exit 4.',
    packages: [
      {
        name: 'Wedding Banquet',
        priceTWD: 'Contact for pricing',
        priceUSD: 'Custom quote',
        features: [
          '500-ping European-style grand plaza',
          'Rome music fountain replica',
          'London Big Ben landmark',
          'Mediterranean-style cafe area',
          '10 scenic photo areas',
          'Free shuttle from Songshan MRT Exit 4',
          '900 parking spots at Carrefour (4 hours free)',
        ],
      },
    ],
    venues: [
      { name: 'European Grand Plaza', capacity: '500 ping, multiple event zones' },
    ],
    menu: {
      title: 'Menu Highlights',
      categories: [
        { name: '4 Appetizers', chinese: '四前菜', items: ['Fresh seasonal appetizers'] },
        { name: "Chef's Specials", chinese: '主廚推薦', items: ['Premium chef-curated dishes'] },
        { name: 'Handmade Dishes', chinese: '手作料理', items: ['Artisan handcrafted courses'] },
        { name: 'Fine Desserts', chinese: '精緻甜點', items: ['Exquisite dessert selection'] },
      ],
      signature: ['Fresh seafood', 'Chef specialties', 'Handmade dishes', 'Premium desserts'],
    },
    footnote: 'Located inside Carrefour Neihu. Contact directly for banquet pricing and availability.',
  },
  zh: {
    name: '88號樂章',
    chineseName: '88號樂章',
    website: 'https://www.88mov5f.com/',
    location: '台北市內湖區民善街88號5樓（家樂福內湖店內）',
    phone: '02-2794-3839',
    hours: '10:00–21:00',
    description: '500坪歐式婚宴廣場，設有羅馬音樂噴泉、倫敦大乘鐘、地中海咖啡廳及10大美拍場景。松山捷運站4號出口免費接駁。',
    packages: [
      {
        name: '婚宴方案',
        priceTWD: '請洽詢',
        priceUSD: '客製報價',
        features: [
          '500坪歐式豪華廣場',
          '羅馬音樂噴泉複刻',
          '倫敦大乘鐘地標',
          '地中海風格咖啡區',
          '10大美拍場景',
          '松山捷運站4號出口免費接駁',
          '家樂福900停車位（賓客免費4小時）',
        ],
      },
    ],
    venues: [
      { name: '歐式豪華廣場', capacity: '500坪，多功能活動區' },
    ],
    menu: {
      title: '菜色亮點',
      categories: [
        { name: '四前菜', chinese: '四前菜', items: ['新鮮時令前菜'] },
        { name: '主廚推薦', chinese: '主廚推薦', items: ['主廚精選料理'] },
        { name: '手作料理', chinese: '手作料理', items: ['職人手工菜品'] },
        { name: '精緻甜點', chinese: '精緻甜點', items: ['精緻甜點系列'] },
      ],
      signature: ['新鮮海鮮', '主廚特製', '手作料理', '頂級甜點'],
    },
    footnote: '位於家樂福內湖店內。詳細婚宴價格及檔期請直接洽詢。',
  },
};
