// export const menuItems = [
//   {
//     isHeadr: true,
//     title: 'menu',
//   },
//   {
//     title: 'Dashboard',
//     icon: 'heroicons-outline:home',
//     link: '/dashboard',
//   },
//   {
//     title: 'API Token',
//     icon: 'bitcoin-icons:key-filled',
//     link: '/dashboard/api',
//   },
//   {
//     title: 'Address',
//     icon: 'maki:warehouse',
//     link: '/dashboard/address',
//   },
//   {
//     title: 'Bookings',
//     icon: 'material-symbols:book-sharp',
//     link: '/dashboard/bookings',
//   },
//   {
//     title: 'Pickups ',
//     icon: 'fa-solid:truck-pickup',
//     link: '/dashboard/pickup',
//   },
//   {
//     title: 'Invoices',
//     icon: 'iconamoon:invoice-thin',
//     link: '/dashboard/invoice',
//   },
//   // {
//   //   title: 'Reports',
//   //   icon: 'mdi:file',
//   //   link: '/dashboard/report',
//   // },
//   {
//     title: 'My Profile',
//     icon: 'gg:profile',
//     link: '/dashboard/profile',
//   },
// ];
export const menuItems = [
  {
    icon: "fa-solid:user-cog",
    label: "Account Setting",
    route: "/setting/personal-information",
  },
  {
    icon: "fa-solid:shopping-bag",
    label: "Orders",
    route: "/setting/orders",
  },
  {
    icon: "fa-solid:heart",
    label: "Wishlist",
    route: "/setting/wishlist",
  },
  {
    icon: "fa-solid:map-marker-alt",
    label: "Address",
    route: "/setting/address",
  },
  {
    icon: "fa-solid:bell",
    label: "Notifications",
    route: "/setting/notifications",
  },
  {
    icon: "fa-solid:file-contract",
    label: "Legal Notice",
    route: "/setting/legal-notice",
  },
  {
    icon: "fa-solid:question-circle",
    label: "Help Center",
    route: "/setting/help-center",
  },
  {
    icon: "fa-solid:lock",
    label: "Change Password",
    route: "/setting/change-password",
  },
  { icon: "fa-solid:sign-out-alt", label: "Logout", route: "/" },
];
export const topMenu = [];

export const notifications = [];

export const message = [];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [];

export const bottomFilterLists = [];

export const meets = [];

export const files = [];

export const tokenExpiry = [
  { value: 7, label: "7 Days" },
  { value: 30, label: "1 Month" },
  { value: 90, label: "3 Months" },
  { value: 180, label: "6 Months" },
  { value: 365, label: "1 year" },
  { value: 1830, label: "5 year" },
];

// Swiper for home page

export const Slides1 = [
  {
    image: "./assets/images/brands/b1.png",
    title: "Spring cleaning for home appliance",
    description: "Get your clean on supplies.",
    bgClass: "bg-yellow-100",
  },
  {
    image: "./assets/images/brands/b2.png",
    title: "Your pet choice for fresh healthy food",
    description: "Get your clean on supplies.",
    bgClass: "bg-green-100",
  },
  {
    image: "./assets/images/brands/b3.png",
    title: "Washing item with discount product",
    description: "Get your clean on supplies.",
    bgClass: "bg-blue-100",
  },
  {
    image: "./assets/images/brands/b4.png",
    title: "Fresh quality meat item with discount",
    description: "Get your clean on supplies.",
    bgClass: "bg-red-100",
  },
];

// This is products
export const ProductsData = [
  {
    id: 8,
    img: "./assets/images/products/p9.png",
    badge: "ON SALE",
    price: "$6.20",
    oldPrice: "$6.98",
    name: "Frito Lay's Family Fun Mix Snacks",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 9,
    img: "./assets/images/products/p10.png",
    price: "$5.00 - $15.00",
    name: "Lay's Kettle Cooked Mesquite Potato Chips",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 10,
    img: "./assets/images/products/p11.png",
    price: "$5.00 - $15.00",
    name: "Lay's Bar-B-Que Potato Chips",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 11,
    img: "./assets/images/products/p12.png",
    price: "$5.00 - $15.00",
    name: "Chester's Fries Flamen Hot Corn Potato Snacks",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 12,
    img: "./assets/images/products/p13.png",
    price: "$15.00 - $25.00",
    name: "Lay's Kettle Cooked Jalapeno Potato Chips",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 13,
    img: "./assets/images/products/p14.png",
    price: "$15.00 - $25.00",
    name: "Ruffles Party Size Cheddar & Sour Cream",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 14,
    img: "./assets/images/products/p15.png",
    price: "$25.00 - $40.00",
    name: "Calavo Fresh Avocados",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 15,
    img: "./assets/images/products/p16.png",
    price: "$25.00 - $40.00",
    name: "Fresh Cilantro",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 16,
    img: "./assets/images/products/p17.png",
    badge: "ON SALE",
    price: "$2.64",
    oldPrice: "$2.99",
    name: "Gourmet Garden™ Lightly Dried Cilantro",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 17,
    img: "./assets/images/products/p18.png",
    badge: "ON SALE",
    price: "$1.50",
    oldPrice: "$1.99",
    name: "Organic Green Cabbage",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 18,
    img: "./assets/images/products/p19.png",
    price: "$1.99",
    name: "Green Giant Peas",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 19,
    img: "./assets/images/products/p19.png",
    price: "$3.99",
    name: "Freshness Guaranteed Mango Spears",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 20,
    img: "./assets/images/products/p20.png",
    price: "$25.00 - $40.00",
    name: "Fresh Express Iceberg Garden Salad Blend",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 21,
    img: "./assets/images/products/p21.png",
    badge: "ON SALE",
    price: "$1.50",
    oldPrice: "$1.99",
    name: "Organic Green Cabbage",
    quantity: "1 each",
    action: "add",
  },
];

export const products2 = [
  {
    id: 1,
    img: "./assets/images/products/p2.png",
    badge: "ON SALE",
    price: "$2.64",
    oldPrice: "$2.74",
    name: "Fresh Green Leaf Lettuce",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 2,
    img: "./assets/images/products/p3.png",
    badge: "ON SALE",
    price: "$2.50",
    oldPrice: "$2.74",
    name: "Leafy Romaine Mixed Lettuce",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 3,
    img: "./assets/images/products/p4.png",
    price: "$25.00 - $40.00",
    name: "Fresh Express Iceberg Garden Salad Blend",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 4,
    img: "./assets/images/products/p5.png",
    price: "$1.50",
    name: "Organic Girl Lettuce",
    quantity: "1 Bag",
    action: "add",
  },
  {
    id: 5,
    img: "./assets/images/products/p6.png",
    badge: "ON SALE",
    price: "$2.60",
    oldPrice: "$3.00",
    name: "Organic Spring Mix",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 6,
    img: "./assets/images/products/p7.png",
    price: "$3.00 - $5.00",
    name: "Organic Firm Fresh White Lettuce",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 7,
    img: "./assets/images/products/p8.png",
    price: "$5.00 - $15.00",
    name: "Great Value Tortilla Chips, Cantina Style",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 8,
    img: "./assets/images/products/p9.png",
    badge: "ON SALE",
    price: "$6.20",
    oldPrice: "$6.98",
    name: "Frito Lay's Family Fun Mix Snacks",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 9,
    img: "./assets/images/products/p10.png",
    price: "$5.00 - $15.00",
    name: "Lay's Kettle Cooked Mesquite Potato Chips",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 10,
    img: "./assets/images/products/p11.png",
    price: "$5.00 - $15.00",
    name: "Lay's Bar-B-Que Potato Chips",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 11,
    img: "./assets/images/products/p12.png",
    price: "$5.00 - $15.00",
    name: "Chester's Fries Flamen Hot Corn Potato Snacks",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 12,
    img: "./assets/images/products/p13.png",
    price: "$15.00 - $25.00",
    name: "Lay's Kettle Cooked Jalapeno Potato Chips",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 13,
    img: "./assets/images/products/p14.png",
    price: "$15.00 - $25.00",
    name: "Ruffles Party Size Cheddar & Sour Cream",
    quantity: "1 each",
    action: "view",
  },
  {
    id: 14,
    img: "./assets/images/products/p15.png",
    price: "$25.00 - $40.00",
    name: "Calavo Fresh Avocados",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 15,
    img: "./assets/images/products/p16.png",
    price: "$25.00 - $40.00",
    name: "Fresh Cilantro",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 16,
    img: "./assets/images/products/p17.png",
    badge: "ON SALE",
    price: "$2.64",
    oldPrice: "$2.99",
    name: "Gourmet Garden™ Lightly Dried Cilantro",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 17,
    img: "./assets/images/products/p18.png",
    badge: "ON SALE",
    price: "$1.50",
    oldPrice: "$1.99",
    name: "Organic Green Cabbage",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 18,
    img: "./assets/images/products/p19.png",
    price: "$1.99",
    name: "Green Giant Peas",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 19,
    img: "./assets/images/products/p19.png",
    price: "$3.99",
    name: "Freshness Guaranteed Mango Spears",
    quantity: "1 each",
    action: "add",
  },
  {
    id: 20,
    img: "./assets/images/products/p20.png",
    price: "$25.00 - $40.00",
    name: "Fresh Express Iceberg Garden Salad Blend",
    quantity: "1 Bag",
    action: "view",
  },
  {
    id: 21,
    img: "./assets/images/products/p21.png",
    badge: "ON SALE",
    price: "$1.50",
    oldPrice: "$1.99",
    name: "Organic Green Cabbage",
    quantity: "1 each",
    action: "add",
  },
];

export const Slides2 = [
  { img: "./assets/images/categories/c1.png", name: "Fresh Vegetables" },
  { img: "./assets/images/categories/c2.png", name: "Diet Foods" },
  { img: "./assets/images/categories/c3.png", name: "Diet Nutrition" },
  { img: "./assets/images/categories/c4.png", name: "Fast Food Items" },
  { img: "./assets/images/categories/c5.png", name: "Fruits Items" },
  { img: "./assets/images/categories/c1.png", name: "Fresh Vegetables" },
  { img: "./assets/images/categories/c2.png", name: "Diet Foods" },
  { img: "./assets/images/categories/c3.png", name: "Diet Nutrition" },
  { img: "./assets/images/categories/c4.png", name: "Fast Food Items" },
  { img: "./assets/images/categories/c5.png", name: "Fruits Items" },
  // Add the rest of your category data here
];

// THis is data
export const items = [
  {
    id: 1,
    img: "./assets/images/collections/c1.png",
    title: "Feel the Thirst in summer anytime",
    description: "Your body's way of telling you that it's time to hydrate.",
  },
  {
    id: 2,
    img: "./assets/images/collections/c2.png",
    title: "Most popular item for Fast food",
    description: "Tasty and spicy fast food with different cuisines to try.",
  },
  {
    id: 3,
    img: "./assets/images/collections/c3.png",
    title: "Authentic japanese food in real taste",
    description: "Your body's way of telling you that it's time to eat to try.",
  },
  {
    id: 4,
    img: "./assets/images/collections/c4.png",
    title: "Explore our family of freshest Food",
    description:
      "Your pet's way of telling you that it's time to enjoy to try.",
  },
];

export const categories = [
  {
    id: 1,
    name: "Fresh Vegetables",
    icon: "assets/images/cat-items/c1.svg",
    items: ["Arugula", "Asparagus", "Beets", "Cabbages"],
  },
  {
    id: 2,
    name: "Diet Foods",
    icon: "assets/images/cat-items/c2.svg ",
    items: [],
  },
  {
    id: 3,
    name: "Diet Nutrition",
    icon: "assets/images/cat-items/c3.svg",
    items: [],
  },
  {
    id: 4,
    name: "Fast Food Items",
    icon: "assets/images/cat-items/c4.svg",
    items: [],
  },
  {
    id: 5,
    name: "Fruits Items",
    icon: "assets/images/cat-items/c5.svg",
    items: [],
  },
  {
    id: 6,
    name: "Healthy Foods",
    icon: "assets/images/cat-items/c6.svg",
    items: [],
  },
  {
    id: 7,
    name: "Grocery Items",
    icon: "assets/images/cat-items/c7.svg",
    items: [],
  },
  {
    id: 8,
    name: "Fresh Vegetables",
    icon: "assets/images/cat-items/c1.svg",
    items: ["Arugula", "Asparagus", "Beets", "Cabbages"],
  },
  {
    id: 9,
    name: "Diet Foods",
    icon: "assets/images/cat-items/c2.svg ",
    items: [],
  },
  {
    id: 10,
    name: "Diet Nutrition",
    icon: "assets/images/cat-items/c3.svg",
    items: [],
  },
  {
    id: 11,
    name: "Fast Food Items",
    icon: "assets/images/cat-items/c4.svg",
    items: [],
  },
  {
    id: 12,
    name: "Fruits Items",
    icon: "assets/images/cat-items/c5.svg",
    items: [],
  },
  {
    id: 13,
    name: "Healthy Foods",
    icon: "assets/images/cat-items/c6.svg",
    items: [],
  },
  {
    id: 14,
    name: "Grocery Items",
    icon: "assets/images/cat-items/c7.svg",
    items: [],
  },
  {
    id: 15,
    name: "Fresh Vegetables",
    icon: "assets/images/cat-items/c1.svg",
    items: ["Arugula", "Asparagus", "Beets", "Cabbages"],
  },
  {
    id: 16,
    name: "Diet Foods",
    icon: "assets/images/cat-items/c2.svg ",
    items: [],
  },
  {
    id: 17,
    name: "Diet Nutrition",
    icon: "assets/images/cat-items/c3.svg",
    items: [],
  },
  {
    id: 18,
    name: "Fast Food Items",
    icon: "assets/images/cat-items/c4.svg",
    items: [],
  },
  {
    id: 19,
    name: "Fruits Items",
    icon: "assets/images/cat-items/c5.svg",
    items: [],
  },
];

export const shops = [
  {
    id: 1,
    name: "Popcorn Shop",
    address: "1986 Spinnaker Lane, Illinois, Freeport, 61032, USA",
    image: "assets/images/shop/sp1.webp",
  },
  {
    id: 2,
    name: "Candy Store",
    address: "123 Sweet Lane, Illinois, Chicago, 60614, USA",
    image: "assets/images/shop/sp2.webp",
  },
  {
    id: 3,
    name: "Book Haven",
    address: "456 Library St, New York, NY, 10001, USA",
    image: "assets/images/shop/sp3.webp",
  },
  {
    id: 4,
    name: "Toy Kingdom",
    address: "789 Fun Ave, California, Los Angeles, 90001, USA",
    image: "assets/images/shop/sp4.webp",
  },
  {
    id: 5,
    name: "Fashion Hub",
    address: "321 Style St, Texas, Houston, 77002, USA",
    image: "assets/images/shop/sp5.webp",
  },
  {
    id: 6,
    name: "Gadget World",
    address: "654 Tech Blvd, Washington, Seattle, 98101, USA",
    image: "assets/images/shop/sp6.webp",
  },
];
