import type {
  CustomizationGroup,
  MenuCategory,
  MenuCategoryId,
  MenuItem,
} from "@/types/menu";

export const MENU_HOURS = "11:00 AM – 10:45 PM";

export const MENU_PRICING_NOTE =
  "Menu prices shown reflect current Gotcha Oakville Uber Eats base pricing in CAD. In-store, regional, and delivery platform pricing, sizes, and seasonal availability may vary by location.";

export const MENU_CUSTOMIZATIONS: CustomizationGroup[] = [
  {
    "id": "temperature",
    "labelEn": "Temperature",
    "labelZh": "溫度",
    "description": "Most milk teas and fresh milk drinks can be prepared hot or iced; slushes, smoothies, and sodas are served chilled.",
    "options": [
      {
        "label": "Iced",
        "labelZh": "冰飲",
        "note": "Default for most drinks"
      },
      {
        "label": "Hot",
        "labelZh": "熱飲",
        "note": "Select milk teas & brewed teas"
      }
    ]
  },
  {
    "id": "sweetness",
    "labelEn": "Sweetness Level",
    "labelZh": "甜度",
    "description": "Customize every handcrafted cup to your preferred sweetness.",
    "options": [
      {
        "label": "0%",
        "labelZh": "無糖",
        "note": "No added sugar"
      },
      {
        "label": "30%",
        "labelZh": "微糖",
        "note": "Light sweet"
      },
      {
        "label": "50%",
        "labelZh": "半糖",
        "note": "Half sweet"
      },
      {
        "label": "70%",
        "labelZh": "少糖",
        "note": "Less sweet (popular)"
      },
      {
        "label": "100%",
        "labelZh": "正常甜",
        "note": "Standard sweet"
      }
    ]
  },
  {
    "id": "ice",
    "labelEn": "Ice Level",
    "labelZh": "冰塊",
    "description": "Adjust ice level for brewed teas, milk teas, and fruit teas.",
    "options": [
      {
        "label": "0%",
        "labelZh": "去冰",
        "note": "No ice"
      },
      {
        "label": "50%",
        "labelZh": "微冰",
        "note": "Low ice"
      },
      {
        "label": "70%",
        "labelZh": "少冰",
        "note": "Less ice"
      },
      {
        "label": "100%",
        "labelZh": "正常冰",
        "note": "Regular ice"
      }
    ]
  },
  {
    "id": "toppings",
    "labelEn": "Popular Toppings",
    "labelZh": "精選加料",
    "description": "Add extra texture and flavour to any drink (availability & pricing vary by store).",
    "options": [
      {
        "label": "Brown Sugar Tapioca",
        "labelZh": "黑糖珍珠"
      },
      {
        "label": "Crystal Boba",
        "labelZh": "寒天晶球"
      },
      {
        "label": "Salted Cheese Foam",
        "labelZh": "起司奶蓋"
      },
      {
        "label": "Mango Coconut Jelly",
        "labelZh": "芒果椰果"
      },
      {
        "label": "Colourful Jelly",
        "labelZh": "多彩果凍"
      },
      {
        "label": "Pandan Jelly",
        "labelZh": "斑斕凍"
      },
      {
        "label": "Grass Jelly",
        "labelZh": "仙草涼粉"
      },
      {
        "label": "Caramel Pudding",
        "labelZh": "焦糖布丁"
      },
      {
        "label": "Taro & Sweet Potato Balls",
        "labelZh": "雙色芋圓"
      },
      {
        "label": "Popping Boba",
        "labelZh": "爆爆珠"
      },
      {
        "label": "Red Bean",
        "labelZh": "蜜紅豆"
      },
      {
        "label": "Oreo Crumble",
        "labelZh": "奧利奧碎"
      }
    ]
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    "id": "house-special",
    "nameEn": "House Special",
    "nameZh": "椰香冰沙系列",
    "subtitle": "Signature coconut desserts, house smoothies & pastries",
    "sortOrder": 1,
    "accentTone": "mango",
    "bannerImage": {
      "src": "/images/b2.webp",
      "alt": "Gotcha Mango Parfait topped with fresh mango chunks and colourful jelly",
      "width": 600,
      "height": 800
    }
  },
  {
    "id": "smoothie",
    "nameEn": "Smoothie",
    "nameZh": "冰奶昔",
    "subtitle": "Creamy blended milk smoothies",
    "sortOrder": 2,
    "accentTone": "taro",
    "bannerImage": {
      "src": "/images/b12.webp",
      "alt": "Assorted creamy Gotcha smoothies and boba drinks in front of a greenery wall",
      "width": 1920,
      "height": 1536
    }
  },
  {
    "id": "slush",
    "nameEn": "Slush",
    "nameZh": "冰沙",
    "subtitle": "Icy fruit slushes blended with Gotcha tea",
    "sortOrder": 3,
    "accentTone": "mango",
    "bannerImage": {
      "src": "/images/b15.webp",
      "alt": "Chilled mango slush drinks topped with diced fresh mango",
      "width": 1284,
      "height": 1286
    }
  },
  {
    "id": "macchiato",
    "nameEn": "Macchiato (Slush & Smoothie with Cheese Foam)",
    "nameZh": "瑪奇朵系列（冰沙配奶盖）",
    "subtitle": "Icy slushes & smoothies crowned with salted cheese foam",
    "sortOrder": 4,
    "accentTone": "berry",
    "bannerImage": {
      "src": "/images/b11.webp",
      "alt": "Gotcha fruit slushes and smoothies topped with velvety salted cheese foam",
      "width": 1920,
      "height": 1280
    }
  },
  {
    "id": "qq-fresh-fruit-tea",
    "nameEn": "QQ Fresh Fruit Tea",
    "nameZh": "特调QQ水果茶（配芒果椰果）",
    "subtitle": "Handcrafted fruit teas with mango coconut jelly, fresh lemon & apple",
    "sortOrder": 5,
    "accentTone": "citrus",
    "bannerImage": {
      "src": "/images/b8.webp",
      "alt": "Barista garnishing vibrant Gotcha fruit teas, sodas, and specialty drinks",
      "width": 1920,
      "height": 1536
    }
  },
  {
    "id": "fruit-tea",
    "nameEn": "Fruit Tea",
    "nameZh": "手作鮮果茶",
    "subtitle": "Freshly brewed jasmine, oolong & black teas infused with fruit",
    "sortOrder": 6,
    "accentTone": "citrus",
    "bannerImage": {
      "src": "/images/b10.webp",
      "alt": "Gotcha fresh fruit tea lineup including Signature Fruit Tea XL with sliced citrus",
      "width": 1600,
      "height": 1280
    }
  },
  {
    "id": "milk-tea",
    "nameEn": "Milk Tea with Tapioca",
    "nameZh": "奶茶（配黑糖珍珠）",
    "subtitle": "Signature Taiwanese milk teas served with brown sugar tapioca",
    "sortOrder": 7,
    "accentTone": "boba",
    "bannerImage": {
      "src": "/images/b3.webp",
      "alt": "Signature Gotcha milk teas and fruit teas on display",
      "width": 1920,
      "height": 1536
    }
  },
  {
    "id": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Fresh Milk with Tapioca",
    "nameZh": "黑糖珍珠鲜奶系列",
    "subtitle": "Rich fresh milk swirled with warm house-cooked brown sugar pearls",
    "sortOrder": 8,
    "accentTone": "boba",
    "bannerImage": {
      "src": "/images/b1.webp",
      "alt": "Gotcha Brown Sugar Boba Fresh Milk with tiger-stripe caramel swirls",
      "width": 1066,
      "height": 1600
    }
  },
  {
    "id": "healthy-fresh-milk",
    "nameEn": "Healthy Fresh Milk",
    "nameZh": "健康鮮奶",
    "subtitle": "Caffeine-free & tea-free fresh milk creations",
    "sortOrder": 9,
    "accentTone": "matcha",
    "bannerImage": {
      "src": "/images/b5.webp",
      "alt": "Gotcha fresh milk and hand-crafted tea series styled on a blush backdrop",
      "width": 1600,
      "height": 887
    }
  },
  {
    "id": "soda",
    "nameEn": "Soda",
    "nameZh": "气泡水",
    "subtitle": "Sparkling fruit sodas layered with blue butterfly pea tea",
    "sortOrder": 10,
    "accentTone": "berry",
    "bannerImage": {
      "src": "/images/b6.webp",
      "alt": "Gotcha sparkling butterfly pea soda bottle alongside fresh fruit and milk teas",
      "width": 1200,
      "height": 1600
    }
  },
  {
    "id": "yogurt-series",
    "nameEn": "Yogurt Series",
    "nameZh": "優格系列",
    "subtitle": "Tangy, creamy fruit & tea yogurt drinks",
    "sortOrder": 11,
    "accentTone": "berry",
    "bannerImage": {
      "src": "/images/b12.webp",
      "alt": "Creamy Gotcha yogurt and blended specialty beverages",
      "width": 1920,
      "height": 1536
    }
  },
  {
    "id": "redbull-slush",
    "nameEn": "RedBull Slush with Colourful Jelly",
    "nameZh": "紅牛冰沙（配多彩果凍）",
    "subtitle": "Energizing fruit & Red Bull slushes with colourful jelly toppings",
    "sortOrder": 12,
    "accentTone": "citrus",
    "bannerImage": {
      "src": "/images/b8.webp",
      "alt": "Vibrant fruit and RedBull slushes garnished at the Gotcha tea bar",
      "width": 1920,
      "height": 1536
    }
  },
  {
    "id": "hand-crafted-tea",
    "nameEn": "Hand-Crafted Tea",
    "nameZh": "鮮萃纯茶",
    "subtitle": "Single-origin organic teas harvested from our own farms in Taiwan",
    "sortOrder": 13,
    "accentTone": "matcha",
    "bannerImage": {
      "src": "/images/b5.webp",
      "alt": "Single-origin Taiwanese oolong, jasmine, and black teas brewed fresh",
      "width": 1600,
      "height": 887
    }
  },
  {
    "id": "yakult-green-tea",
    "nameEn": "Yakult Green Tea",
    "nameZh": "養樂多系列",
    "subtitle": "Probiotic Yakult blended with crisp jasmine green tea & fruit",
    "sortOrder": 14,
    "accentTone": "matcha",
    "bannerImage": {
      "src": "/images/b4.webp",
      "alt": "Refreshing citrus and green tea infusions at Gotcha Bubble Tea",
      "width": 1067,
      "height": 1600
    }
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "mango-sensation",
    "categoryId": "house-special",
    "nameEn": "Mango Sensation",
    "description": "Mouthwatering dessert with a mango base and our signature milk, loaded with fresh mango, taro & sweet potato balls, palm seed, crystal boba, and coconut jelly.",
    "price": {
      "base": 11.99,
      "currency": "CAD"
    },
    "nameZh": "芒果奇緣",
    "descriptionZh": "泰国椰子风味招牌甜品 2 号：搭配新鲜芒果，寒天晶，糯叽叽的香甜软糯大芋丸和椰奶布丁，好吃停不下来。",
    "rating": {
      "positivePercent": 91,
      "reviewCount": 48
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Fresh Mango",
      "Taro & Sweet Potato Balls",
      "Palm Seed",
      "Crystal Boba",
      "Coconut Jelly"
    ],
    "image": {
      "src": "/images/b16.webp",
      "alt": "Gotcha Coconut Dessert Series featuring Mango Sensation, Purple Delight, and Tropical Medley",
      "width": 530,
      "height": 832
    }
  },
  {
    "id": "purple-delight",
    "categoryId": "house-special",
    "nameEn": "Purple Delight",
    "description": "Mouthwatering dessert with a hint of coconut flavor and our signature milk, loaded with fresh taro, red bean, brown sugar tapioca, taro & sweet potato balls, palm seed, and coconut jelly.",
    "price": {
      "base": 11.99,
      "currency": "CAD"
    },
    "nameZh": "紫色喜悅",
    "descriptionZh": "泰国椰子风味招牌甜品 3 号：搭配黑糖珍珠，Q弹糯叽叽的大芋丸，甜甜软糯芋泥，蜜红豆和椰奶布丁，巨好吃！",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 18
    },
    "includedToppings": [
      "Fresh Taro",
      "Red Bean",
      "Brown Sugar Tapioca",
      "Taro & Sweet Potato Balls",
      "Palm Seed",
      "Coconut Jelly"
    ],
    "image": {
      "src": "/images/b16.webp",
      "alt": "Gotcha Purple Delight coconut dessert with taro, red bean, and brown sugar tapioca",
      "width": 530,
      "height": 832
    }
  },
  {
    "id": "tropical-medley",
    "categoryId": "house-special",
    "nameEn": "Tropical Medley",
    "description": "Mouthwatering dessert with a hint of coconut flavor and our signature milk, loaded with brown sugar tapioca, taro & sweet potato balls, palm seed, crystal boba, grass jelly, and coconut jelly.",
    "price": {
      "base": 11.99,
      "currency": "CAD"
    },
    "nameZh": "熱帶風情",
    "descriptionZh": "泰国椰子风味招牌甜品 1号：丰富的配料配黑糖珍珠，仙草凉粉，Q弹糯叽叽的亚达籽，香甜软糯的大芋丸和椰奶布丁，巨好吃！",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 18
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Tapioca",
      "Taro & Sweet Potato Balls",
      "Palm Seed",
      "Crystal Boba",
      "Grass Jelly",
      "Coconut Jelly"
    ],
    "image": {
      "src": "/images/b16.webp",
      "alt": "Gotcha Tropical Medley coconut dessert loaded with grass jelly, taro balls, and tapioca",
      "width": 530,
      "height": 832
    }
  },
  {
    "id": "island-sunset",
    "categoryId": "house-special",
    "nameEn": "Island Sunset",
    "description": "Coconut and signature milk dessert base loaded with pineapple chunks, mango coconut jelly, tapioca, taro & sweet potato balls, and coconut pudding.",
    "price": {
      "base": 11.99,
      "currency": "CAD"
    },
    "nameZh": "粒粒鳳梨爽",
    "descriptionZh": "泰国椰子风味招牌甜品 4 号：搭配酸酸甜甜的鳳梨果肉，台湾古早味的芒果椰果，黑糖珍珠，仙草凉粉，糯叽叽的香甜软糯大芋丸和椰奶布丁，冰凉滑顺，夏天必点！",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 9
    },
    "includedToppings": [
      "Pineapple Chunks",
      "Mango Coconut Jelly",
      "Tapioca",
      "Taro & Sweet Potato Balls",
      "Coconut Pudding"
    ],
    "image": {
      "src": "/images/b16.webp",
      "alt": "Gotcha Island Sunset coconut dessert with pineapple chunks and coconut pudding",
      "width": 530,
      "height": 832,
      "isCategoryFallback": true
    }
  },
  {
    "id": "mango-parfait",
    "categoryId": "house-special",
    "nameEn": "Mango Parfait",
    "description": "Coconut mango smoothie topped with fresh mango chunks, pandan jelly, and colourful jelly.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "芒果聖代（本店招牌）",
    "descriptionZh": "椰香芒果冰沙 搭配新鲜芒果点缀，斑斓冻，寒天晶，多彩果凍；Q感爆棚，一口喝出热带风情",
    "rating": {
      "positivePercent": 93,
      "reviewCount": 16
    },
    "isFeatured": true,
    "mostLikedRank": 1,
    "badges": [
      "signature",
      "featured"
    ],
    "includedToppings": [
      "Fresh Mango Chunks",
      "Pandan Jelly",
      "Colourful Jelly"
    ],
    "image": {
      "src": "/images/b2.webp",
      "alt": "Gotcha Mango Parfait with fresh mango chunks, pandan jelly, and colourful jelly",
      "width": 600,
      "height": 800
    }
  },
  {
    "id": "strawberry-pink",
    "categoryId": "house-special",
    "nameEn": "Strawberry Pink",
    "description": "Strawberry pink smoothie with a hint of coconut flavor, topped with colourful jelly and crystal boba.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "椰香草莓冰沙",
    "descriptionZh": "椰香草莓冰沙配多彩果凍，寒天晶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 13
    },
    "includedToppings": [
      "Colourful Jelly",
      "Crystal Boba"
    ],
    "image": {
      "src": "/images/b17.webp",
      "alt": "Gotcha Strawberry Pink coconut smoothie with colourful jelly and crystal boba",
      "width": 1080,
      "height": 1769
    }
  },
  {
    "id": "pineapple-coconut-house-smoothie-pina-colada",
    "categoryId": "house-special",
    "nameEn": "Pineapple Coconut House Smoothie (Pina Colada)",
    "description": "Pina Colada coconut and pineapple house smoothie with colourful jelly and crystal boba.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "椰香鳳梨冰沙",
    "descriptionZh": "椰香鳳梨冰沙配多彩果凍，寒天晶",
    "rating": {
      "positivePercent": 91,
      "reviewCount": 12
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Colourful Jelly",
      "Crystal Boba"
    ]
  },
  {
    "id": "taro-coconut-house-smoothie",
    "categoryId": "house-special",
    "nameEn": "Taro Coconut House Smoothie",
    "description": "Taro coconut house smoothie with colourful jelly and crystal boba.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "椰香芋头冰沙",
    "descriptionZh": "椰香芋头冰沙配多彩果凍，寒天晶",
    "includedToppings": [
      "Colourful Jelly",
      "Crystal Boba"
    ]
  },
  {
    "id": "matcha-coconut-house-smoothie",
    "categoryId": "house-special",
    "nameEn": "Matcha Coconut House Smoothie",
    "description": "Matcha coconut house smoothie with colourful jelly and crystal boba.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "椰香抹茶冰沙",
    "descriptionZh": "椰香抹茶冰沙配多彩果凍，寒天晶",
    "includedToppings": [
      "Colourful Jelly",
      "Crystal Boba"
    ]
  },
  {
    "id": "coffee-coconut-house-smoothie",
    "categoryId": "house-special",
    "nameEn": "Coffee Coconut House Smoothie",
    "description": "Coffee coconut house smoothie with colourful jelly and crystal boba.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "椰香咖啡冰沙",
    "descriptionZh": "椰香咖啡冰沙配多彩果凍，寒天晶",
    "includedToppings": [
      "Colourful Jelly",
      "Crystal Boba"
    ]
  },
  {
    "id": "red-bean-coconut-house-smoothie",
    "categoryId": "house-special",
    "nameEn": "Red Bean Coconut House Smoothie",
    "description": "Red bean coconut house smoothie with colourful jelly and crystal boba.",
    "price": {
      "base": 8.99,
      "currency": "CAD"
    },
    "nameZh": "椰香紅豆冰沙",
    "includedToppings": [
      "Colourful Jelly",
      "Crystal Boba"
    ]
  },
  {
    "id": "tofu-soybean-dessert-with-sago-and-fresh-mango",
    "categoryId": "house-special",
    "nameEn": "Tofu (Soybean) Dessert with Sago & Fresh Mango",
    "description": "Silky soybean tofu pudding topped with sago and fresh mango chunks.",
    "price": {
      "base": 3.99,
      "currency": "CAD"
    },
    "nameZh": "芒果豆奶布丁配鲜芒果粒",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 6
    }
  },
  {
    "id": "creme-brulee-dessert",
    "categoryId": "house-special",
    "nameEn": "Crème Brûlée Dessert",
    "description": "Creamy crème brûlée beneath a crisp caramelized sugar crust.",
    "price": {
      "base": 3.99,
      "currency": "CAD"
    },
    "nameZh": "焦糖烤布雷布丁",
    "descriptionZh": "这款甜而不腻的焦糖烤布雷非常惊艳！绵密顺滑的焦糖奶香烤布雷，冷冷的，软软的，入口即化，无论是作为下午茶小甜点，还是餐后甜点，焦糖烤布雷都是令人难以抗拒的精致选择。"
  },
  {
    "id": "strawberry-cheesecake",
    "categoryId": "house-special",
    "nameEn": "Strawberry Cheesecake",
    "description": "Classic baked strawberry cheesecake — great for a light snack.",
    "price": {
      "base": 3.49,
      "currency": "CAD"
    },
    "nameZh": "草莓芝士蛋糕",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 12
    }
  },
  {
    "id": "matcha-cheesecake",
    "categoryId": "house-special",
    "nameEn": "Matcha Cheesecake",
    "description": "Classic baked matcha cheesecake — great for a light snack.",
    "price": {
      "base": 3.49,
      "currency": "CAD"
    },
    "nameZh": "抹茶芝士蛋糕",
    "rating": {
      "positivePercent": 91,
      "reviewCount": 12
    }
  },
  {
    "id": "side-order-toppings-1-cup",
    "categoryId": "house-special",
    "nameEn": "Side Order Toppings (1 Cup)",
    "description": "Individual side cup of drink topping.",
    "price": {
      "base": 0.5,
      "currency": "CAD"
    },
    "nameZh": "杯装小料"
  },
  {
    "id": "side-order-ice-l",
    "categoryId": "house-special",
    "nameEn": "Side Order Ice (L)",
    "description": "Large cup of ice cubes — add-on to keep your drink extra cold.",
    "price": {
      "base": 1.99,
      "currency": "CAD",
      "sizeLabel": "L"
    },
    "nameZh": "一杯冰"
  },
  {
    "id": "taro-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Taro Smoothie",
    "description": "Icy refreshing taro smoothie made with real taro.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "香芋冰奶昔",
    "rating": {
      "positivePercent": 90,
      "reviewCount": 55
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "notes": "Milk alternative available on request",
    "image": {
      "src": "/images/b12.webp",
      "alt": "Creamy Gotcha taro and specialty smoothies lined up at the tea bar",
      "width": 1920,
      "height": 1536,
      "isCategoryFallback": true
    }
  },
  {
    "id": "matcha-red-bean-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Matcha Red Bean Smoothie",
    "description": "Icy refreshing matcha red bean smoothie.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "抹茶紅豆冰奶昔",
    "rating": {
      "positivePercent": 88,
      "reviewCount": 9
    },
    "notes": "Cheese foam extra; milk alternative available on request"
  },
  {
    "id": "chocolate-caramel-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Chocolate Caramel Smoothie",
    "description": "Icy refreshing chocolate caramel smoothie.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "焦糖巧克力冰奶昔",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 6
    },
    "notes": "Brown sugar tapioca extra"
  },
  {
    "id": "red-bean-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Red Bean Smoothie",
    "description": "Icy refreshing red bean smoothie.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "紅豆冰奶昔",
    "rating": {
      "positivePercent": 83,
      "reviewCount": 6
    },
    "notes": "Brown sugar tapioca extra"
  },
  {
    "id": "matcha-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Matcha Smoothie",
    "description": "Icy refreshing matcha smoothie.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "抹茶冰奶昔"
  },
  {
    "id": "mango-coconut-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Mango Coconut Smoothie",
    "description": "The combination of coconut and mango flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "椰香芒果冰奶昔",
    "rating": {
      "positivePercent": 83,
      "reviewCount": 6
    }
  },
  {
    "id": "pineapple-coconut-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Pineapple Coconut Smoothie",
    "description": "The combination of pineapple and coconut flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "椰香鳳梨冰奶昔"
  },
  {
    "id": "mango-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Mango Smoothie",
    "description": "Icy refreshing mango smoothie.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "芒果冰奶昔",
    "rating": {
      "positivePercent": 88,
      "reviewCount": 9
    }
  },
  {
    "id": "strawberry-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Strawberry Smoothie",
    "description": "Icy refreshing strawberry smoothie.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "草莓冰奶昔"
  },
  {
    "id": "pineapple-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Pineapple Smoothie",
    "description": "Icy refreshing pineapple smoothie.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "鳳梨冰奶昔"
  },
  {
    "id": "peach-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Peach Smoothie",
    "description": "Icy refreshing peach smoothie.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃冰奶昔"
  },
  {
    "id": "fresh-strawberry-and-fresh-banana-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Fresh Strawberry & Fresh Banana Smoothie",
    "description": "Icy and refreshing blend with fresh strawberry and fresh banana.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "草莓香蕉冰奶昔"
  },
  {
    "id": "bamboo-charcoal-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Bamboo Charcoal Smoothie",
    "description": "Refreshing blend of bamboo charcoal and fruit.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "竹炭冰奶昔"
  },
  {
    "id": "toffee-coffee-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Toffee Coffee Smoothie",
    "description": "Icy refreshing toffee coffee smoothie.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "太妃咖啡冰奶昔"
  },
  {
    "id": "chocolate-toffee-smoothie",
    "categoryId": "smoothie",
    "nameEn": "Chocolate Toffee Smoothie",
    "description": "Icy refreshing chocolate toffee smoothie.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "太妃巧克力冰奶昔"
  },
  {
    "id": "mango-slush",
    "categoryId": "slush",
    "nameEn": "Mango Slush",
    "description": "Icy and refreshing slush with fresh mango and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "芒果冰沙",
    "rating": {
      "positivePercent": 93,
      "reviewCount": 62
    }
  },
  {
    "id": "strawberry-slush",
    "categoryId": "slush",
    "nameEn": "Strawberry Slush",
    "description": "Icy and refreshing slush with fresh strawberries and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "草莓冰沙",
    "rating": {
      "positivePercent": 92,
      "reviewCount": 42
    }
  },
  {
    "id": "peach-slush",
    "categoryId": "slush",
    "nameEn": "Peach Slush",
    "description": "Icy and refreshing slush with sweet peaches and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃冰沙",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 6
    }
  },
  {
    "id": "lychee-slush",
    "categoryId": "slush",
    "nameEn": "Lychee Slush",
    "description": "Icy and refreshing slush with lychee flavour and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "荔枝冰沙",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 16
    }
  },
  {
    "id": "passionfruit-slush",
    "categoryId": "slush",
    "nameEn": "Passionfruit Slush",
    "description": "Icy and refreshing slush with passionfruit flavour and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "百香果冰沙",
    "rating": {
      "positivePercent": 81,
      "reviewCount": 27
    }
  },
  {
    "id": "pineapple-slush",
    "categoryId": "slush",
    "nameEn": "Pineapple Slush",
    "description": "Icy and refreshing slush with pineapple and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "鳳梨冰沙",
    "rating": {
      "positivePercent": 62,
      "reviewCount": 8
    }
  },
  {
    "id": "lemon-slush",
    "categoryId": "slush",
    "nameEn": "Lemon Slush",
    "description": "Icy and refreshing slush with lemon flavor and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "檸檬冰沙"
  },
  {
    "id": "mulberry-slush",
    "categoryId": "slush",
    "nameEn": "Mulberry Slush",
    "description": "Icy and refreshing slush with mulberry flavour and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "桑葚冰沙",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 3
    }
  },
  {
    "id": "mango-and-strawberry-slush",
    "categoryId": "slush",
    "nameEn": "Mango & Strawberry Slush",
    "description": "Icy and refreshing slush with fresh mango, strawberry, and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "芒果草莓冰沙"
  },
  {
    "id": "lemon-and-curacao-slush",
    "categoryId": "slush",
    "nameEn": "Lemon & Curacao Slush",
    "description": "Icy and refreshing slush with lemon and curacao flavor, with Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "檸檬藍柑冰沙"
  },
  {
    "id": "strawberry-and-passionfruit-slush",
    "categoryId": "slush",
    "nameEn": "Strawberry & Passionfruit Slush",
    "description": "Icy and refreshing slush with fresh strawberry, passionfruit flavor, and Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "草莓百香果冰沙"
  },
  {
    "id": "lychee-and-peach-slush",
    "categoryId": "slush",
    "nameEn": "Lychee & Peach Slush",
    "description": "Icy and refreshing slush with peach and lychee flavor, with Gotcha tea.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "荔枝水蜜桃冰沙",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 3
    }
  },
  {
    "id": "honeydew-slush",
    "categoryId": "slush",
    "nameEn": "Honeydew Slush",
    "description": "Refreshing honeydew flavoured slush.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "哈密瓜冰沙",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 4
    }
  },
  {
    "id": "aromatic-lemon-peach-slush",
    "categoryId": "slush",
    "nameEn": "Aromatic Lemon Peach Slush",
    "description": "Refreshing aromatic lemon peach flavoured slush.",
    "price": {
      "base": 7.09,
      "currency": "CAD"
    },
    "nameZh": "香水檸檬水蜜桃冰沙",
    "isPopular": true,
    "badges": [
      "popular"
    ]
  },
  {
    "id": "strawberry-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Strawberry Macchiato",
    "description": "Icy refreshing strawberry slush with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "草莓冰沙配奶盖",
    "rating": {
      "positivePercent": 90,
      "reviewCount": 21
    },
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "mango-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Mango Macchiato",
    "description": "Icy refreshing mango slush with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "芒果冰沙配奶盖",
    "rating": {
      "positivePercent": 93,
      "reviewCount": 16
    },
    "includedToppings": [
      "Cheese Foam"
    ],
    "notes": "Popping peach boba extra",
    "image": {
      "src": "/images/b15.webp",
      "alt": "Gotcha Mango Macchiato slush topped with salted cheese foam and fresh mango",
      "width": 1284,
      "height": 1286
    }
  },
  {
    "id": "matcha-red-bean-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Matcha Red Bean Macchiato",
    "description": "Icy refreshing matcha red bean smoothie with cheese foam.",
    "price": {
      "base": 8.39,
      "currency": "CAD"
    },
    "nameZh": "抹茶紅豆冰奶昔配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "caramel-coffee-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Caramel Coffee Macchiato",
    "description": "Icy refreshing caramel coffee smoothie with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "焦糖咖啡冰奶昔配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ],
    "notes": "Oreo extra"
  },
  {
    "id": "peach-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Peach Macchiato",
    "description": "Icy refreshing peach slush with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃冰沙配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ],
    "notes": "Popping boba extra"
  },
  {
    "id": "matcha-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Matcha Macchiato",
    "description": "Icy refreshing matcha smoothie with cheese foam.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "抹茶冰奶昔配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "mango-and-strawberry-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Mango & Strawberry Macchiato",
    "description": "Icy refreshing mango & strawberry slush with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "芒果草莓冰沙配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "taro-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Taro Macchiato",
    "description": "Icy refreshing taro smoothie with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "香芋冰奶昔配奶盖",
    "isPopular": true,
    "badges": [
      "popular"
    ],
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "chocolate-caramel-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Chocolate Caramel Macchiato",
    "description": "Icy refreshing chocolate caramel smoothie with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "焦糖巧克力冰奶昔配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "chocolate-toffee-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Chocolate Toffee Macchiato",
    "description": "Icy refreshing chocolate toffee smoothie with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "太妃巧克力冰奶昔配奶盖",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "toffee-coffee-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Toffee Coffee Macchiato",
    "description": "Icy refreshing toffee coffee smoothie with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "太妃咖啡冰奶昔配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "honeydew-macchiato",
    "categoryId": "macchiato",
    "nameEn": "Honeydew Macchiato",
    "description": "Honeydew slush with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "哈密瓜冰沙配奶盖",
    "includedToppings": [
      "Cheese Foam"
    ]
  },
  {
    "id": "qq-lemon-peach-blossom-black-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Lemon Peach Blossom Black Fruit Tea",
    "description": "Refreshing black fruit tea with mango coconut jelly.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "经典檸檬水蜜桃水果茶（配芒果椰果）",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 16
    },
    "includedToppings": [
      "Mango Coconut Jelly"
    ]
  },
  {
    "id": "qq-aromatic-lemon-peach-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Aromatic Lemon Peach Fruit Tea",
    "description": "Refreshing fruit tea with mango coconut jelly, fresh lemon, and apple.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "香水檸檬水蜜桃水果茶（配芒果椰果）",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 13
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Mango Coconut Jelly",
      "Fresh Lemon",
      "Apple"
    ],
    "image": {
      "src": "/images/b8.webp",
      "alt": "Handcrafted Gotcha QQ fruit tea garnished with fresh citrus",
      "width": 1920,
      "height": 1536,
      "isCategoryFallback": true
    }
  },
  {
    "id": "qq-mango-and-passionfruit-fresh-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Mango & Passionfruit Fresh Fruit Tea",
    "description": "Refreshing fruit tea with mango coconut jelly, fresh lemon, and apple.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "芒果百香水果茶（配芒果椰果）",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 4
    },
    "includedToppings": [
      "Mango Coconut Jelly",
      "Fresh Lemon",
      "Apple"
    ]
  },
  {
    "id": "qq-strawberry-and-passionfruit-fresh-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Strawberry & Passionfruit Fresh Fruit Tea",
    "description": "Refreshing fruit tea with mango coconut jelly, fresh lemon, and apple.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "草莓百香水果茶（配芒果椰果）",
    "includedToppings": [
      "Mango Coconut Jelly",
      "Fresh Lemon",
      "Apple"
    ]
  },
  {
    "id": "qq-mango-lychee-fresh-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Mango Lychee Fresh Fruit Tea",
    "description": "Refreshing mango and lychee fruit tea with mango coconut jelly.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "芒果荔枝水果茶（配芒果椰果）",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Mango Coconut Jelly"
    ]
  },
  {
    "id": "qq-peach-and-lychee-fresh-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Peach & Lychee Fresh Fruit Tea",
    "description": "Refreshing fruit tea with mango coconut jelly, fresh lemon, and apple.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃荔枝水果茶（配芒果椰果）",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 3
    },
    "includedToppings": [
      "Mango Coconut Jelly",
      "Fresh Lemon",
      "Apple"
    ]
  },
  {
    "id": "qq-peach-earl-grey-black-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Peach Earl Grey Black Fruit Tea",
    "description": "Refreshing Earl Grey black fruit tea with mango coconut jelly, fresh lemon, and apple.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃伯爵水果茶（配芒果椰果）",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 16
    },
    "includedToppings": [
      "Mango Coconut Jelly",
      "Fresh Lemon",
      "Apple"
    ]
  },
  {
    "id": "qq-curacao-and-lemon-fresh-fruit-tea",
    "categoryId": "qq-fresh-fruit-tea",
    "nameEn": "QQ Curacao & Lemon Fresh Fruit Tea",
    "description": "Refreshing curacao & lemon fruit tea with mango coconut jelly, fresh lemon, and apple.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "檸檬藍柑水果茶（配芒果椰果）",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 5
    },
    "includedToppings": [
      "Mango Coconut Jelly",
      "Fresh Lemon",
      "Apple"
    ]
  },
  {
    "id": "lychee-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Lychee Fruit Tea",
    "description": "Fresh brewed jasmine green tea with lychee flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "荔枝綠茶",
    "rating": {
      "positivePercent": 96,
      "reviewCount": 31
    },
    "isFeatured": true,
    "mostLikedRank": 2,
    "badges": [
      "signature",
      "featured"
    ],
    "image": {
      "src": "/images/b10.webp",
      "alt": "Refreshing Gotcha fruit tea collection featuring fresh fruit infusions",
      "width": 1600,
      "height": 1280,
      "isCategoryFallback": true
    }
  },
  {
    "id": "mulberry-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Mulberry Fruit Tea",
    "description": "Fresh brewed jasmine green tea with mulberry flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "桑葚綠茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 6
    }
  },
  {
    "id": "mango-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Mango Fruit Tea",
    "description": "Fresh brewed jasmine green tea with mango flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "芒果綠茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 26
    }
  },
  {
    "id": "gotcha-signature-fruit-tea-xl",
    "categoryId": "fruit-tea",
    "nameEn": "Gotcha Signature Fruit Tea (XL)",
    "description": "Fresh brewed jasmine green tea with peach flavor and multiple fresh fruits.",
    "price": {
      "base": 9.99,
      "currency": "CAD",
      "sizeLabel": "XL"
    },
    "nameZh": "招牌鮮饗手作果茶（加大杯）",
    "isFeatured": true,
    "isPopular": true,
    "badges": [
      "featured",
      "popular"
    ],
    "image": {
      "src": "/images/b10.webp",
      "alt": "Gotcha Signature Fruit Tea XL packed with fresh citrus and seasonal fruit",
      "width": 1600,
      "height": 1280
    }
  },
  {
    "id": "peach-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Peach Fruit Tea",
    "description": "Sweet and refreshing tea infused with peaches.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃綠茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 23
    }
  },
  {
    "id": "passionfruit-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Passionfruit Fruit Tea",
    "description": "Fresh brewed jasmine green tea with passionfruit flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "百香果綠茶"
  },
  {
    "id": "strawberry-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Strawberry Fruit Tea",
    "description": "Sweet and refreshing tea infused with strawberry flavour.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "草莓綠茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 5
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "image": {
      "src": "/images/b11.webp",
      "alt": "Gotcha strawberry and fruit tea selection on the terrazzo bar",
      "width": 1920,
      "height": 1280,
      "isCategoryFallback": true
    }
  },
  {
    "id": "kumquat-lemon-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Kumquat Lemon Fruit Tea",
    "description": "Fresh brewed jasmine green tea with kumquat and lemon flavor.",
    "price": {
      "base": 7.79,
      "currency": "CAD"
    },
    "nameZh": "金桔檸檬綠茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 19
    }
  },
  {
    "id": "pineapple-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Pineapple Fruit Tea",
    "description": "Fresh brewed jasmine green tea with pineapple flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "鳳梨綠茶"
  },
  {
    "id": "honeydew-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Honeydew Fruit Tea",
    "description": "Fresh brewed jasmine green tea with honeydew flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "哈密瓜綠茶"
  },
  {
    "id": "kiwi-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Kiwi Fruit Tea",
    "description": "Fresh brewed jasmine green tea with kiwi flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "奇异果綠茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 3
    }
  },
  {
    "id": "honey-lemon-green-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Honey Lemon Green Fruit Tea",
    "description": "Fresh brewed jasmine green tea with lemon and honey flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "蜂蜜檸檬綠茶",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "image": {
      "src": "/images/b4.webp",
      "alt": "Gotcha Honey Lemon Green Fruit Tea with fresh lemon slices",
      "width": 1067,
      "height": 1600
    }
  },
  {
    "id": "grape-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Grape Fruit Tea",
    "description": "Fresh brewed jasmine green tea with grape flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "葡萄綠茶"
  },
  {
    "id": "lemon-green-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Lemon Green Fruit Tea",
    "description": "Fresh brewed green tea with lemon flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "檸檬綠茶"
  },
  {
    "id": "lemon-jade-jasmine-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Lemon Jade Jasmine Fruit Tea",
    "description": "Fresh brewed jade jasmine green tea with lemon flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "翡翠茉香檸檬綠茶"
  },
  {
    "id": "mint-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Mint Fruit Tea",
    "description": "Fresh brewed jasmine green tea with mint flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "薄荷绿茶"
  },
  {
    "id": "lychee-oolong-tea-with-lychee-popping-boba",
    "categoryId": "fruit-tea",
    "nameEn": "Lychee Oolong Tea with Lychee Popping Boba",
    "description": "Lychee oolong tea served with lychee popping boba.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "荔枝烏龍茶（配荔枝爆珠）",
    "includedToppings": [
      "Lychee Popping Boba"
    ]
  },
  {
    "id": "lemon-black-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Lemon Black Fruit Tea",
    "description": "Fresh brewed Ceylon black tea with lemon flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "檸檬紅茶"
  },
  {
    "id": "honey-lemon-black-fruit-tea",
    "categoryId": "fruit-tea",
    "nameEn": "Honey Lemon Black Fruit Tea",
    "description": "Fresh brewed black tea with lemon and honey flavour.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "蜂蜜檸檬紅茶"
  },
  {
    "id": "gotcha-signature-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Gotcha Signature Milk Tea",
    "description": "Signature Gotcha milk tea with brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "本店招牌奶茶（配黑糖珍珠）",
    "isFeatured": true,
    "mostLikedRank": 3,
    "badges": [
      "signature",
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Boba"
    ],
    "image": {
      "src": "/images/b3.webp",
      "alt": "Gotcha Signature Milk Tea served with chewy brown sugar tapioca",
      "width": 1920,
      "height": 1536,
      "isCategoryFallback": true
    }
  },
  {
    "id": "taro-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Taro Milk Tea",
    "description": "Signature milk tea with taro flavor, fresh taro, and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "香芋奶茶（配黑糖珍珠）",
    "descriptionZh": "芋泥风味奶茶，搭配香甜的鲜芋泥和黑糖珍珠。",
    "rating": {
      "positivePercent": 71,
      "reviewCount": 21
    },
    "includedToppings": [
      "Fresh Taro",
      "Brown Sugar Boba"
    ],
    "notes": "Cheese foam extra"
  },
  {
    "id": "coconut-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Coconut Milk Tea",
    "description": "Signature milk tea with coconut flavor and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "椰香奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "thai-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Thai Milk Tea",
    "description": "Authentic Thai flavor tea with brown sugar tapioca.",
    "price": {
      "base": 8.59,
      "currency": "CAD"
    },
    "nameZh": "泰式奶茶（配黑糖珍珠）",
    "descriptionZh": "源自曼谷街头最经典味道的泰国手冲奶茶，甜中带香，香中带茶，经典的配方标准，泰奶不分季节，一年四季都想喝的泰奶，快来试试泰国人每天都爱喝的泰国奶茶吧！搭配黑糖珍珠。",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Tapioca"
    ],
    "image": {
      "src": "/images/b3.webp",
      "alt": "Signature Gotcha milk teas crafted with chewy brown sugar tapioca",
      "width": 1920,
      "height": 1536,
      "isCategoryFallback": true
    }
  },
  {
    "id": "paris-1883-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Paris 1883 Milk Tea",
    "description": "Gotcha signature milk tea with caramel pudding, brown sugar boba, grass jelly, and topped with Oreo crumble.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "1883特調奶茶（配黑糖珍珠，仙草凉粉，焦糖布丁，奥利奥）",
    "descriptionZh": "我们的招牌特调奶茶，搭配焦糖布丁，仙草凉粉，现熬黑糖珍珠，顶部加上奥利奥碎",
    "includedToppings": [
      "Brown Sugar Boba",
      "Grass Jelly",
      "Caramel Pudding",
      "Oreo Crumble"
    ]
  },
  {
    "id": "tiramisu-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Tiramisu Milk Tea",
    "description": "Regular milk tea with tiramisu flavor and boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "提拉米蘇奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "matcha-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Matcha Milk Tea",
    "description": "Matcha milk tea with brown sugar tapioca.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "抹茶奶茶（配黑糖珍珠）",
    "descriptionZh": "本店热卖招牌抹茶风味奶茶，搭配黑糖珍珠。",
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "toffee-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Toffee Milk Tea",
    "description": "Gotcha milk tea with toffee flavor and boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "太妃奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "red-bean-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Red Bean Milk Tea",
    "description": "Signature milk tea with red bean flavor, fresh red bean, and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Fresh Red Bean",
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "oolong-green-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Oolong Green Milk Tea",
    "description": "Made with oolong / jasmine green tea with brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "台湾乌龙绿奶茶（配黑糖珍珠）",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "jade-jasmine-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Jade Jasmine Milk Tea",
    "description": "Made with Jade Jasmine tea with brown sugar boba.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "翡翠茉香奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "oolong-black-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Oolong Black Milk Tea",
    "description": "Made with Taiwanese high mountain oolong tea with brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "台湾高山烏龍奶茶（配黑糖珍珠）",
    "descriptionZh": "台湾高山烏龍奶茶结合了高山烏龍茶的清香甘醇与奶香的浓郁顺滑，搭配现熬黑糖珍珠，茶香→奶香→回甘，三重口感递进，越喝越清爽！",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "honey-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Honey Milk Tea",
    "description": "Gotcha milk tea with honey flavor and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "mint-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Mint Milk Tea",
    "description": "Signature milk tea with mint flavor and brown sugar tapioca.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "barley-black-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Barley Black Milk Tea",
    "description": "Barley milk tea with boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "coffee-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Coffee Milk Tea",
    "description": "Signature milk tea with coffee flavor and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "咖啡奶茶（配黑糖珍珠）",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "thai-milk-tea-with-cheese-foam",
    "categoryId": "milk-tea",
    "nameEn": "Thai Milk Tea with Cheese Foam",
    "description": "Authentic Thai flavor tea with cheese foam and brown sugar tapioca.",
    "price": {
      "base": 8.79,
      "currency": "CAD"
    },
    "nameZh": "泰式奶茶（配黑糖珍珠+奶盖）",
    "includedToppings": [
      "Cheese Foam",
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "jade-jasmine-taro-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Jade Jasmine Taro Milk Tea",
    "description": "Jade Jasmine taro milk tea with fresh taro and brown sugar boba.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "香芋翡翠茉香奶茶（配黑糖珍珠）",
    "isPopular": true,
    "badges": [
      "popular"
    ],
    "includedToppings": [
      "Fresh Taro",
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "jade-jasmine-rose-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Jade Jasmine Rose Milk Tea",
    "description": "Jade Jasmine rose milk tea with brown sugar boba.",
    "price": {
      "base": 8.19,
      "currency": "CAD"
    },
    "nameZh": "翡翠茉香玫瑰奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "bamboo-charcoal-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Bamboo Charcoal Milk Tea",
    "description": "Smooth and creamy milk tea infused with the subtle taste of bamboo charcoal.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "竹炭奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "earl-grey-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Earl Grey Milk Tea",
    "description": "Earl Grey milk tea with brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "伯爵奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "supreme-black-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Supreme Black Milk Tea",
    "description": "Supreme black milk tea with brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "nameZh": "蜜香红玉奶茶（配黑糖珍珠）",
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "toffee-coffee-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Toffee Coffee Milk Tea",
    "description": "Signature milk tea with toffee and coffee flavor, and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "caramel-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Caramel Milk Tea",
    "description": "Signature milk tea with caramel flavor and brown sugar boba.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Brown Sugar Boba"
    ]
  },
  {
    "id": "aromatic-green-milk-tea",
    "categoryId": "milk-tea",
    "nameEn": "Aromatic Green Milk Tea",
    "description": "Milk tea blended with green tea and served with black sugar tapioca pearls.",
    "price": {
      "base": 7.39,
      "currency": "CAD"
    },
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "brown-sugar-fresh-milk-with-cheese-foam",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Fresh Milk with Cheese Foam",
    "description": "Brown sugar boba fresh milk including brown sugar tapioca and cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠鲜奶配奶蓋",
    "rating": {
      "positivePercent": 92,
      "reviewCount": 28
    },
    "includedToppings": [
      "Brown Sugar Tapioca",
      "Cheese Foam"
    ]
  },
  {
    "id": "brown-sugar-fresh-milk",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Fresh Milk",
    "description": "Brown sugar boba fresh milk including brown sugar tapioca.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠鮮奶",
    "rating": {
      "positivePercent": 87,
      "reviewCount": 24
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Tapioca"
    ],
    "image": {
      "src": "/images/b1.webp",
      "alt": "Gotcha Brown Sugar Fresh Milk with warm brown sugar tapioca pearls",
      "width": 1066,
      "height": 1600
    }
  },
  {
    "id": "paris-1883-boba-fresh-milk-with-cheese-foam",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Paris 1883 Boba Fresh Milk with Cheese Foam",
    "description": "Paris 1883 boba fresh milk with brown sugar tapioca, grass jelly, caramel pudding, Oreo crumble, and topped with cheese foam.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "1883特调奶盖",
    "rating": {
      "positivePercent": 93,
      "reviewCount": 15
    },
    "includedToppings": [
      "Brown Sugar Tapioca",
      "Grass Jelly",
      "Caramel Pudding",
      "Oreo Crumble",
      "Cheese Foam"
    ]
  },
  {
    "id": "brown-sugar-chocolate",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Chocolate",
    "description": "Brown sugar boba fresh milk with chocolate flavour and brown sugar tapioca.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠巧克力鮮奶",
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "brown-sugar-matcha",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Matcha",
    "description": "Brown sugar boba fresh milk with matcha and brown sugar tapioca.",
    "price": {
      "base": 7.69,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠抹茶鮮奶",
    "rating": {
      "positivePercent": 96,
      "reviewCount": 26
    },
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "cheese-foam-creme-brulee-fresh-milk",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Cheese Foam Crème Brûlée Fresh Milk",
    "description": "Cheese foam crème brûlée fresh milk with brown sugar tapioca.",
    "price": {
      "base": 7.99,
      "currency": "CAD"
    },
    "nameZh": "烤布蕾黑糖珍珠鲜奶（配奶盖）",
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "includedToppings": [
      "Brown Sugar Tapioca",
      "Cheese Foam",
      "Crème Brûlée"
    ],
    "image": {
      "src": "/images/b1.webp",
      "alt": "Gotcha brown sugar fresh milk series with creamy cheese foam",
      "width": 1066,
      "height": 1600,
      "isCategoryFallback": true
    }
  },
  {
    "id": "brown-sugar-taro-fresh-milk",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Taro Fresh Milk",
    "description": "Brown sugar boba fresh milk with fresh taro and brown sugar tapioca.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠香芋鮮奶",
    "includedToppings": [
      "Fresh Taro",
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "brown-sugar-coffee-fresh-milk",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Coffee Fresh Milk",
    "description": "Brown sugar boba fresh milk with coffee flavour and brown sugar tapioca.",
    "price": {
      "base": 7.69,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠咖啡鮮奶",
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "brown-sugar-coconut-coffee-fresh-milk",
    "categoryId": "brown-sugar-fresh-milk",
    "nameEn": "Brown Sugar Coconut Coffee Fresh Milk",
    "description": "Brown sugar boba fresh milk with coconut flavour, coffee, and brown sugar tapioca.",
    "price": {
      "base": 7.59,
      "currency": "CAD"
    },
    "nameZh": "黑糖珍珠椰香咖啡鮮奶",
    "includedToppings": [
      "Brown Sugar Tapioca"
    ]
  },
  {
    "id": "strawberry-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Strawberry Milk",
    "description": "Signature fresh milk with strawberry flavour and fresh strawberry.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "草莓鮮奶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 4
    },
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "coconut-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Coconut Milk",
    "description": "Signature fresh milk with coconut flavour.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "椰香鮮奶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 4
    },
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "mango-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Mango Milk",
    "description": "Signature fresh milk with fresh mango.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "芒果鮮奶",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "chocolate-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Chocolate Milk",
    "description": "Chocolate flavor fresh milk.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "巧克力鮮奶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 4
    },
    "badges": [
      "caffeine-free"
    ],
    "notes": "Cheese foam and Oreo extra"
  },
  {
    "id": "taro-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Taro Milk",
    "description": "Signature fresh milk with taro flavour and fresh taro.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "香芋鮮奶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 13
    },
    "badges": [
      "caffeine-free"
    ],
    "includedToppings": [
      "Fresh Taro"
    ],
    "notes": "Tapioca not included"
  },
  {
    "id": "mother-s-favourite-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Mother's Favourite Milk",
    "description": "Gotcha fresh milk with brown sugar tapioca, grass jelly, caramel pudding, and red bean.",
    "price": {
      "base": 8.29,
      "currency": "CAD"
    },
    "nameZh": "媽咪挚爱鮮奶",
    "rating": {
      "positivePercent": 80,
      "reviewCount": 5
    },
    "badges": [
      "caffeine-free"
    ],
    "includedToppings": [
      "Brown Sugar Tapioca",
      "Grass Jelly",
      "Caramel Pudding",
      "Red Bean"
    ]
  },
  {
    "id": "red-bean-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Red Bean Milk",
    "description": "Red bean fresh milk with fresh red bean.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "紅豆鮮奶",
    "rating": {
      "positivePercent": 60,
      "reviewCount": 5
    },
    "badges": [
      "caffeine-free"
    ],
    "includedToppings": [
      "Fresh Red Bean"
    ],
    "notes": "Brown sugar boba extra"
  },
  {
    "id": "honeydew-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Honeydew Milk",
    "description": "Gotcha signature fresh milk with honeydew flavour.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "哈密瓜鮮奶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 5
    },
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "mint-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Mint Milk",
    "description": "Fresh milk with refreshing mint flavour.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "薄荷鮮奶",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "peach-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Peach Milk",
    "description": "Signature fresh milk with peach flavor and a slice of sweet peach.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃鮮奶",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "matcha-red-bean-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Matcha Red Bean Milk",
    "description": "Signature fresh milk with matcha and red bean flavour, topped with fresh red bean.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "抹茶紅豆鮮奶",
    "badges": [
      "caffeine-free"
    ],
    "includedToppings": [
      "Fresh Red Bean"
    ]
  },
  {
    "id": "matcha-fresh-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Matcha Fresh Milk",
    "description": "Signature fresh milk with matcha flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "抹茶鮮奶",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "bamboo-charcoal-milk",
    "categoryId": "healthy-fresh-milk",
    "nameEn": "Bamboo Charcoal Milk",
    "description": "Bamboo charcoal flavor fresh milk.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "竹炭鮮奶",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "strawberry-soda",
    "categoryId": "soda",
    "nameEn": "Strawberry Soda",
    "description": "Strawberry flavoured soda with blue butterfly tea layered on top, includes fresh strawberry.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "草莓气泡水",
    "rating": {
      "positivePercent": 91,
      "reviewCount": 23
    }
  },
  {
    "id": "peach-soda",
    "categoryId": "soda",
    "nameEn": "Peach Soda",
    "description": "Peach flavoured soda with blue butterfly tea on top, includes sweet peach.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃气泡水",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 13
    }
  },
  {
    "id": "lemon-soda",
    "categoryId": "soda",
    "nameEn": "Lemon Soda",
    "description": "Lemon flavoured soda with blue butterfly tea on top and a slice of lemon.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "檸檬气泡水",
    "rating": {
      "positivePercent": 91,
      "reviewCount": 12
    }
  },
  {
    "id": "passionfruit-soda",
    "categoryId": "soda",
    "nameEn": "Passionfruit Soda",
    "description": "Passionfruit flavoured soda with blue butterfly tea layered on top.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "百香果气泡水",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 9
    }
  },
  {
    "id": "kiwi-soda",
    "categoryId": "soda",
    "nameEn": "Kiwi Soda",
    "description": "Kiwi flavoured soda with blue butterfly tea on top.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "奇异果气泡水"
  },
  {
    "id": "mulberry-soda",
    "categoryId": "soda",
    "nameEn": "Mulberry Soda",
    "description": "Mulberry flavoured soda with blue butterfly tea layered on top.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "桑葚气泡水"
  },
  {
    "id": "mango-soda",
    "categoryId": "soda",
    "nameEn": "Mango Soda",
    "description": "Mango flavoured soda with blue butterfly tea layered on top, includes fresh mango.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "芒果气泡水"
  },
  {
    "id": "lychee-soda",
    "categoryId": "soda",
    "nameEn": "Lychee Soda",
    "description": "Lychee flavoured soda with blue butterfly tea layered on top.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "荔枝气泡水",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 5
    },
    "isFeatured": true,
    "badges": [
      "featured"
    ],
    "image": {
      "src": "/images/b6.webp",
      "alt": "Gotcha sparkling soda layered with blue butterfly pea tea",
      "width": 1200,
      "height": 1600,
      "isCategoryFallback": true
    }
  },
  {
    "id": "lemon-curacao-soda-tea-with-fresh-lemon",
    "categoryId": "soda",
    "nameEn": "Lemon Curacao Soda Tea with Fresh Lemon",
    "description": "Lemon & curacao flavoured soda with blue butterfly tea layered on top, includes fresh lemon.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "檸檬藍柑气泡水"
  },
  {
    "id": "lychee-and-peach-soda",
    "categoryId": "soda",
    "nameEn": "Lychee & Peach Soda",
    "description": "Lychee & peach flavoured soda with blue butterfly tea layered on top.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "荔枝水蜜桃气泡水",
    "isFeatured": true,
    "isPopular": true,
    "badges": [
      "featured",
      "popular"
    ]
  },
  {
    "id": "lychee-and-rose-soda",
    "categoryId": "soda",
    "nameEn": "Lychee & Rose Soda",
    "description": "Lychee flavoured soda with blue butterfly tea layered on top and rose tea.",
    "price": {
      "base": 7.89,
      "currency": "CAD"
    },
    "nameZh": "荔枝玫瑰气泡水"
  },
  {
    "id": "coconut-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Coconut Yogurt",
    "description": "Yogurt drink base with coconut flavour.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "椰香優格",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "taro-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Taro Yogurt",
    "description": "Yogurt base with taro flavour.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "香芋優格",
    "badges": [
      "caffeine-free"
    ],
    "notes": "Cheese foam extra"
  },
  {
    "id": "strawberry-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Strawberry Yogurt",
    "description": "Yogurt fresh milk with strawberry flavour.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "草莓優格",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "peach-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Peach Yogurt",
    "description": "Yogurt drink base with peach flavour.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃優格",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "matcha-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Matcha Yogurt",
    "description": "Yogurt drink base with matcha flavour.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "抹茶優格",
    "badges": [
      "caffeine-free"
    ],
    "notes": "Brown sugar tapioca extra"
  },
  {
    "id": "red-bean-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Red Bean Yogurt",
    "description": "Yogurt with fresh red bean.",
    "price": {
      "base": 7.29,
      "currency": "CAD"
    },
    "nameZh": "红豆優格",
    "badges": [
      "caffeine-free"
    ],
    "notes": "Brown sugar boba extra"
  },
  {
    "id": "mango-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Mango Yogurt",
    "description": "Yogurt drink base with fresh mango.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "芒果優格",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "pineapple-yogurt",
    "categoryId": "yogurt-series",
    "nameEn": "Pineapple Yogurt",
    "description": "Yogurt drink base with pineapple flavor.",
    "price": {
      "base": 7.49,
      "currency": "CAD"
    },
    "nameZh": "鳳梨優格",
    "badges": [
      "caffeine-free"
    ]
  },
  {
    "id": "fruity-frenzy",
    "categoryId": "redbull-slush",
    "nameEn": "Fruity Frenzy",
    "description": "Icy and refreshing slush with fresh mulberries, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "桑之衝擊",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "peachy-bomb",
    "categoryId": "redbull-slush",
    "nameEn": "Peachy Bomb",
    "description": "Icy and refreshing slush with sweet peach, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "桃之情懷",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "tropical-rush",
    "categoryId": "redbull-slush",
    "nameEn": "Tropical Rush",
    "description": "Icy and refreshing slush with pineapple flavour, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "鳳梨之戀",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "lychee-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Lychee RedBull",
    "description": "Icy and refreshing slush with lychee flavour, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "荔枝紅牛冰沙",
    "isPopular": true,
    "badges": [
      "popular"
    ],
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "strawberry-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Strawberry RedBull",
    "description": "Icy and refreshing slush with fresh strawberries, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "草莓紅牛冰沙",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "lychee-strawberry-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Lychee Strawberry RedBull",
    "description": "Icy and refreshing slush with fresh strawberries, lychee flavour, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "荔枝草莓紅牛冰沙",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "kiwi-mango-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Kiwi Mango RedBull",
    "description": "Icy and refreshing slush with kiwi & mango flavour, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "奇异果芒果紅牛冰沙",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "strawberry-rose-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Strawberry Rose RedBull",
    "description": "Icy and refreshing slush with fresh strawberries, rose, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "草莓玫瑰紅牛冰沙",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "curacao-grape-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Curacao Grape RedBull",
    "description": "Icy and refreshing slush with fresh grapes, curacao, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "葡萄藍柑紅牛冰沙",
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "passionfruit-redbull",
    "categoryId": "redbull-slush",
    "nameEn": "Passionfruit RedBull",
    "description": "Icy and refreshing slush with passionfruit flavour, Red Bull, and colourful jelly toppings.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "百香果紅牛冰沙",
    "isPopular": true,
    "badges": [
      "popular"
    ],
    "includedToppings": [
      "Colourful Jelly"
    ]
  },
  {
    "id": "oolong-green-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Oolong Green Tea",
    "description": "Fresh brewed oolong green tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "台湾烏龍青茶",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 5
    }
  },
  {
    "id": "high-mountain-oolong-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "High Mountain Oolong Tea",
    "description": "Fresh brewed Taiwanese high mountain oolong tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "台湾高山烏龍茶"
  },
  {
    "id": "jade-jasmine-green-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Jade Jasmine Green Tea",
    "description": "Fresh brewed jade jasmine green tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "台湾翡翠茉香绿茶",
    "rating": {
      "positivePercent": 75,
      "reviewCount": 4
    }
  },
  {
    "id": "barley-black-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Barley Black Tea",
    "description": "Fresh brewed barley black tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "麦香红茶"
  },
  {
    "id": "four-season-green-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Four-Season Green Tea",
    "description": "Fresh brewed four-season green tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "台湾四季春绿茶"
  },
  {
    "id": "alishan-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Alishan Tea",
    "description": "Freshly brewed Alishan tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "台湾阿里山冰茶"
  },
  {
    "id": "aromatic-green-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Aromatic Green Tea",
    "description": "Fresh brewed aromatic green tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "翠花绿茶"
  },
  {
    "id": "supreme-black-tea",
    "categoryId": "hand-crafted-tea",
    "nameEn": "Supreme Black Tea",
    "description": "Fresh brewed supreme black tea.",
    "price": {
      "base": 6.99,
      "currency": "CAD"
    },
    "nameZh": "經典红茶"
  },
  {
    "id": "mango-yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Mango Yakult Green Tea",
    "description": "Yakult green tea with mango flavor.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "芒果養樂多",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 6
    }
  },
  {
    "id": "peach-yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Peach Yakult Green Tea",
    "description": "Yakult green tea with peach flavor.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "水蜜桃養樂多",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 8
    }
  },
  {
    "id": "strawberry-yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Strawberry Yakult Green Tea",
    "description": "Yakult green tea with strawberry flavor.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "草莓養樂多",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 8
    }
  },
  {
    "id": "kiwi-yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Kiwi Yakult Green Tea",
    "description": "Yakult kiwi green tea.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "奇异果養樂多",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 4
    }
  },
  {
    "id": "mulberry-yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Mulberry Yakult Green Tea",
    "description": "Yakult green tea with mulberry flavor.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "桑葚養樂多",
    "rating": {
      "positivePercent": 100,
      "reviewCount": 6
    }
  },
  {
    "id": "yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Yakult Green Tea",
    "description": "Original Yakult green tea.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "養樂多綠茶"
  },
  {
    "id": "pineapple-yakult-green-tea",
    "categoryId": "yakult-green-tea",
    "nameEn": "Pineapple Yakult Green Tea",
    "description": "Yakult green tea with pineapple flavor.",
    "price": {
      "base": 7.19,
      "currency": "CAD"
    },
    "nameZh": "凤梨養樂多",
    "isPopular": true,
    "badges": [
      "popular"
    ]
  }
];

export const FEATURED_MENU_ITEMS: MenuItem[] = MENU_ITEMS.filter(
  (item) => item.isFeatured
).sort((a, b) => (a.mostLikedRank ?? 99) - (b.mostLikedRank ?? 99));

export const MOST_LIKED_MENU_ITEMS: MenuItem[] = MENU_ITEMS.filter(
  (item) => item.mostLikedRank !== undefined
).sort((a, b) => (a.mostLikedRank ?? 99) - (b.mostLikedRank ?? 99));

export function getMenuCategoryById(
  id: MenuCategoryId
): MenuCategory | undefined {
  return MENU_CATEGORIES.find((category) => category.id === id);
}

export function getMenuItemsByCategory(categoryId: MenuCategoryId): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.categoryId === categoryId);
}
