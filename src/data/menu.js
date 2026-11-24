// ===== BRAND =====
export const brand = {
  name: 'Rice Box',
  tagline: 'Explosive Flavour in Every Bite',
  badge: 'Chinese · Thai',
  phone: '0300 451 9922',
  phoneRaw: '03004519922',
  phone2: '0309 456 2222',
  phone2Raw: '03094562222',
  whatsapp: '923004519922',
  whatsappDisplay: '0300 451 9922',
  timing: '2:00 PM – 3:00 AM',
  delivery: 'Home Delivery & Takeaway',
}

export const fmtPrice = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK')

const img = (name) => 'images/food/' + name
const HF = (h, f) => [{ label: 'Half', price: h }, { label: 'Full', price: f }]
const SF = (s, f) => [{ label: 'Single', price: s }, { label: 'Family', price: f }]

// ===== BRANCH =====
export const branches = [
  {
    id: 'parkview',
    name: 'Park View City',
    address: 'Shop No 16, Rose Market, Beside Park View Zoo Mosque, Multan Road, Park View City, Lahore',
    phone: '0300 451 9922',
    whatsapp: '923004519922',
  },
]

// ===== ADD-ONS (real sides) =====
export const addonOptions = [
  { id: 'raita', name: 'Raita', price: 100 },
  { id: 'salad', name: 'Salad', price: 100 },
  { id: 'shami', name: 'Chicken Shami Kebab', price: 100 },
  { id: 'drink', name: '345ml Drink', price: 100 },
]

// ===== BEST SELLERS =====
export const bestSellers = [
  { id: 'bs-special-chicken', name: 'Rice Box Special Chicken', price: 895, img: img('maincourse.jpg'), tag: 'Signature' },
  { id: 'bs-biryani', name: 'Chicken Biryani', price: 699, img: img('afghanirice.jpg'), tag: 'Afghani' },
  { id: 'bs-dynamite-prawn', name: 'Dynamite Prawn', price: 995, img: img('starters.jpg'), tag: 'Starter Hit' },
  { id: 'bs-thai-basil', name: 'Thai Basil Chicken', price: 1195, img: img('thai.jpg'), tag: 'Thai' },
  { id: 'bs-special-chowmein', name: 'Rice Box Special Chowmein', price: 895, img: img('noodles.jpg'), tag: 'Wok-Tossed' },
  { id: 'bs-momos', name: 'Chicken Momos (6 pcs)', price: 695, img: img('momos.jpg'), tag: 'Steamed' },
]

// ===== MENU CATEGORIES (accordion) =====
export const categories = [
  {
    id: 'afghani',
    name: 'Afghani Rice',
    emoji: '🍚',
    banner: img('afghanirice.jpg'),
    note: 'Fragrant pulao & biryani, charcoal-cooked',
    items: [
      { name: 'Chicken Kofta Pulao', price: 500 },
      { name: 'Chicken Biryani (2 Pcs)', price: 699 },
      { name: 'Afghani Beef Pulao', price: 750 },
      { name: 'Shami Kebab Rice', price: 400 },
    ],
  },
  {
    id: 'maincourse',
    name: 'Main Course',
    emoji: '🥢',
    banner: img('maincourse.jpg'),
    note: 'Served with Egg Fried Rice · Half / Full',
    items: [
      { name: 'Rice Box Special Chicken', variants: HF(895, 1545) },
      { name: 'Chicken Chilli Dry', variants: HF(875, 1445) },
      { name: 'Chicken Cashew Nuts', variants: HF(875, 1445) },
      { name: 'Chicken Almond', variants: HF(875, 1445) },
      { name: 'Oyster Chicken', variants: HF(875, 1445) },
      { name: 'Kung Pao Chicken', variants: HF(875, 1445) },
      { name: 'Chicken Manchurian', variants: HF(795, 1375) },
      { name: 'Chicken Black Pepper', variants: HF(795, 1375) },
      { name: 'Mongolian Chicken', variants: HF(875, 1445) },
      { name: 'Hot Garlic Chicken', variants: HF(875, 1475) },
      { name: 'Szechuan Chicken', variants: HF(875, 1495) },
      { name: 'Chicken Chilli with Vegetable', variants: HF(875, 1475) },
      { name: 'Sweet & Sour Chicken', variants: HF(875, 1475) },
      { name: 'Crispy Honey Sesame Chicken', variants: HF(875, 1495) },
      { name: 'Red Dragon Chicken', variants: HF(875, 1495) },
    ],
  },
  {
    id: 'thai',
    name: 'Thai Gravies',
    emoji: '🌶️',
    banner: img('thai.jpg'),
    items: [
      { name: 'Thai Chicken with Cashew Nuts', price: 1195 },
      { name: 'Thai Orange Chicken', price: 1195 },
      { name: 'Thai Basil Chicken', price: 1195 },
      { name: 'Thai Sticky Sweet & Sour Chicken', price: 1195 },
      { name: 'Thai Chicken Butter Mushroom', price: 1195 },
    ],
  },
  {
    id: 'seafood',
    name: 'Seafood Gravies',
    emoji: '🦐',
    banner: img('seafood.jpg'),
    note: 'Half / Full',
    items: [
      { name: 'Fish Chilli Dry', variants: HF(1295, 1595) },
      { name: 'Hot Garlic Prawn', variants: HF(1295, 1595) },
      { name: 'Chilli Chilli Prawn', variants: HF(1295, 1595) },
      { name: 'Prawn Chilli Onion', variants: HF(1295, 1595) },
    ],
  },
  {
    id: 'rice',
    name: 'Fried Rice',
    emoji: '🍛',
    banner: img('rice.jpg'),
    note: 'Half / Full',
    items: [
      { name: 'Egg Fried Rice', variants: HF(445, 775) },
      { name: 'Chicken Fried Rice', variants: HF(495, 845) },
      { name: 'Vegetable Rice', variants: HF(395, 585) },
      { name: 'Garlic Rice', variants: HF(395, 595) },
      { name: 'Chicken Masala Rice', variants: HF(495, 795) },
    ],
  },
  {
    id: 'noodles',
    name: 'Noodles',
    emoji: '🍜',
    banner: img('noodles.jpg'),
    items: [
      { name: 'Chicken Chowmein', price: 775 },
      { name: 'Vegetable Chowmein', price: 575 },
      { name: 'Thai Garlic Noodles', price: 875 },
      { name: 'Rice Box Special Chowmein', price: 895 },
      { name: 'Thai Chilli Noodles', price: 875 },
      { name: 'Prawn Chowmein', price: 895 },
    ],
  },
  {
    id: 'chopsuey',
    name: 'Chop Suey',
    emoji: '🍲',
    banner: img('chopsuey.jpg'),
    items: [
      { name: 'Chicken Chop Suey', price: 895 },
      { name: 'American Chop Suey', price: 895 },
      { name: 'Chinese Chop Suey', price: 895 },
    ],
  },
  {
    id: 'momos',
    name: 'Momos',
    emoji: '🥟',
    banner: img('momos.jpg'),
    items: [
      { name: 'Chicken Momos (6 pcs)', price: 695 },
      { name: 'Chicken Wonton Momos (6 pcs)', price: 725 },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    emoji: '🍗',
    banner: img('starters.jpg'),
    items: [
      { name: 'Rice Box Special Fries', price: 695 },
      { name: 'Dynamite Chicken', price: 695 },
      { name: 'Dynamite Prawn', price: 995 },
      { name: 'Finger Fish (8 Pcs)', price: 1145 },
      { name: 'Chicken Drumstick (4 Pcs)', price: 945 },
      { name: 'Tempura Prawn (6 Pcs)', price: 1295 },
      { name: 'Honey Wings (6 Pcs)', price: 645 },
      { name: 'Buffalo Wings (6 Pcs)', price: 695 },
      { name: 'Korean Fish & Chips (2 Pcs)', price: 995 },
      { name: 'Fish Crackers', price: 295 },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    emoji: '🍝',
    banner: img('pasta.jpg'),
    items: [
      { name: 'Alfredo Pasta', price: 775 },
      { name: 'Arrabbiata Pasta', price: 795 },
    ],
  },
  {
    id: 'soups',
    name: 'Soups',
    emoji: '🥣',
    banner: img('soup.jpg'),
    note: 'Single / Family',
    items: [
      { name: 'Rice Box Special Soup', variants: SF(395, 1145) },
      { name: 'RB Special Soup', variants: SF(395, 1145) },
      { name: 'Hot & Sour Soup', variants: SF(295, 945) },
      { name: 'Chicken Corn Soup', variants: SF(295, 945) },
      { name: 'Chicken Noodle Soup', variants: SF(275, 925) },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    emoji: '🥤',
    banner: img('beverages.jpg'),
    items: [
      { name: '345 ml Drink', price: 100 },
      { name: '500 ml Drink', price: 135 },
      { name: '1.5 Ltr Drink', price: 250 },
      { name: 'Mineral Water (Small)', price: 75 },
      { name: 'Mineral Water (Large)', price: 140 },
    ],
  },
]
