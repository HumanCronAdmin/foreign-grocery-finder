const ITEMS = [
  {
    name: "Chickpeas (canned)",
    alt: ["garbanzo beans", "ひよこ豆"],
    category: "Canned Goods",
    stores: [
      { name: "Gyomu Super", price: "~¥100", note: "400g can, cheapest option" },
      { name: "Kaldi", note: "Imported options" },
      { name: "Seijo Ishii", note: "Canned beans section" },
      { name: "Amazon Japan", note: "Multiple brands available" }
    ]
  },
  {
    name: "Kidney Beans (canned)",
    alt: ["red kidney beans", "金時豆"],
    category: "Canned Goods",
    stores: [
      { name: "Gyomu Super", price: "~¥100", note: "Large cans" },
      { name: "Amazon Japan", note: "Multiple sellers" }
    ]
  },
  {
    name: "Black Beans (canned)",
    alt: ["黒豆", "ブラックビーンズ"],
    category: "Canned Goods",
    stores: [
      { name: "Seijo Ishii", note: "Sometimes available" },
      { name: "Amazon Japan", note: "Available online" }
    ]
  },
  {
    name: "Lentils",
    alt: ["レンズ豆", "lentil"],
    category: "Canned Goods",
    stores: [
      { name: "Amazon Japan", note: "Dried lentils, multiple sellers" }
    ]
  },
  {
    name: "Coconut Milk",
    alt: ["ココナッツミルク"],
    category: "Canned Goods",
    stores: [
      { name: "Gyomu Super", price: "~¥250", note: "Large cartons" },
      { name: "Kaldi", note: "Thai cooking section" },
      { name: "Amazon Japan", note: "Multiple brands" }
    ]
  },
  {
    name: "Cheddar Cheese",
    alt: ["チェダーチーズ"],
    category: "Dairy",
    stores: [
      { name: "Costco Japan", note: "Blocks, Kirkland brand" },
      { name: "Gyomu Super", note: "European cheeses" },
      { name: "Seijo Ishii", note: "Imported cheddar" },
      { name: "Kaldi", note: "Imported cheeses" }
    ]
  },
  {
    name: "Mozzarella Cheese",
    alt: ["モッツァレラチーズ"],
    category: "Dairy",
    stores: [
      { name: "Gyomu Super", note: "Kilo bags available" },
      { name: "Costco Japan", note: "Blocks, best unit price" },
      { name: "Seijo Ishii", note: "Various types" }
    ]
  },
  {
    name: "Cream Cheese",
    alt: ["クリームチーズ"],
    category: "Dairy",
    stores: [
      { name: "Gyomu Super", note: "Rolls available" },
      { name: "Costco Japan", note: "Large format" },
      { name: "Seijo Ishii", note: "Multiple brands" }
    ]
  },
  {
    name: "Cumin (ground)",
    alt: ["クミン", "cumin powder"],
    category: "Spices",
    stores: [
      { name: "Kaldi", note: "Wide spice selection" },
      { name: "Seijo Ishii", note: "Spice section" },
      { name: "Gyomu Super", note: "Large packages, international section" },
      { name: "Amazon Japan", note: "Multiple brands" }
    ]
  },
  {
    name: "Paprika",
    alt: ["パプリカパウダー"],
    category: "Spices",
    stores: [
      { name: "Kaldi", note: "Standalone spice and in blends" },
      { name: "Amazon Japan", note: "Multiple sellers" }
    ]
  },
  {
    name: "Chili Flakes",
    alt: ["唐辛子フレーク", "red pepper flakes", "crushed red pepper"],
    category: "Spices",
    stores: [
      { name: "Kaldi", note: "International spice section" },
      { name: "Amazon Japan", note: "Available online" }
    ]
  },
  {
    name: "Tahini",
    alt: ["タヒニ", "sesame paste", "練りごま"],
    category: "Sauces & Spreads",
    stores: [
      { name: "Gyomu Super", price: "~¥300", note: "300g jar, 100% white sesame" },
      { name: "Don Quijote", note: "Western grocery section" },
      { name: "Amazon Japan", price: "~¥1,078", note: "Kobe Bussan, KOSKA, Haitoglou brands" }
    ]
  },
  {
    name: "Peanut Butter",
    alt: ["ピーナッツバター"],
    category: "Sauces & Spreads",
    stores: [
      { name: "Gyomu Super", price: "~¥200", note: "340g, creamy and chunky" },
      { name: "Costco Japan", note: "Large jars, JIF brand" },
      { name: "Kaldi", note: "Available" },
      { name: "Don Quijote", note: "Organic options" },
      { name: "Amazon Japan", note: "Skippy and others" }
    ]
  },
  {
    name: "Hot Sauce (Tabasco/Sriracha)",
    alt: ["ホットソース", "タバスコ", "シラチャ", "chili sauce"],
    category: "Sauces & Spreads",
    stores: [
      { name: "Costco Japan", note: "Cholula, Tabasco, Sriracha" },
      { name: "Kaldi", note: "Salsa and hot sauces" },
      { name: "Don Quijote", note: "Imported food section" },
      { name: "Amazon Japan", note: "Huy Fong Sriracha 482g and more" }
    ]
  },
  {
    name: "Tortillas (flour/corn)",
    alt: ["トルティーヤ"],
    category: "Grains & Pasta",
    stores: [
      { name: "Gyomu Super", note: "Imported food section" },
      { name: "Kaldi", note: "With salsa and Mexican items" },
      { name: "Costco Japan", note: "Large packs" },
      { name: "Seijo Ishii", note: "Available" }
    ]
  },
  {
    name: "Oats / Oatmeal",
    alt: ["オーツ", "オートミール", "rolled oats", "steel cut oats"],
    category: "Grains & Pasta",
    stores: [
      { name: "Gyomu Super", note: "Affordable" },
      { name: "Costco Japan", note: "Steel cut, Kirkland, huge bags" },
      { name: "Kaldi", note: "Quaker Oats, larger boxes" },
      { name: "Don Quijote", note: "Muesli and granola" },
      { name: "Amazon Japan", note: "Multiple brands" }
    ]
  },
  {
    name: "Quinoa",
    alt: ["キヌア", "キノア"],
    category: "Grains & Pasta",
    stores: [
      { name: "Kaldi", note: "Health food grains" },
      { name: "Amazon Japan", note: "Various quantities" }
    ]
  },
  {
    name: "Baking Soda",
    alt: ["重曹", "じゅうそう", "sodium bicarbonate"],
    category: "Baking",
    stores: [
      { name: "Amazon Japan", note: "Food-grade. JP label: 重曹 (juusou)" }
    ]
  },
  {
    name: "Vanilla Extract",
    alt: ["バニラエッセンス", "バニラエキストラクト"],
    category: "Baking",
    stores: [
      { name: "Kaldi", note: "Import baking supplies" },
      { name: "Seijo Ishii", note: "Baking section" },
      { name: "Amazon Japan", note: "Pure extract from intl sellers" }
    ]
  }
];

const CATEGORIES = [...new Set(ITEMS.map(i => i.category))];
