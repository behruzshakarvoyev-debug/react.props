export const shop = { name: "TechShop" };

export const user = {
  firstName: "Behruz",
  lastName: "Shakarvoyev",
  email: "behruz@example.com",
  city: "Toshkent",
  isPremium: true,
};

export const categories = ["Electronics", "Phones", "Computers", "Accessories"];

// 12 ta mahsulot, har biri har xil holatda
export const products = [
  { id: 1, title: "Laptop Pro 15", brand: "Lenovo", price: 12500000, discount: 0, image: "https://picsum.photos/seed/laptop/300/200", category: "Computers", rating: 4.8, stock: 12, isAvailable: true, isNew: false },
  { id: 2, title: "iPhone 15", brand: "Apple", price: 13900000, discount: 10, image: "https://picsum.photos/seed/iphone/300/200", category: "Phones", rating: 4.9, stock: 30, isAvailable: true, isNew: true },
  { id: 3, title: "Quloqchin X", brand: "Sony", price: 650000, discount: 0, image: "https://picsum.photos/seed/headphones/300/200", category: "Accessories", rating: 4.3, stock: 0, isAvailable: false, isNew: false },
  { id: 4, title: "Smart Watch S3", brand: "Xiaomi", price: 2300000, discount: 20, image: "https://picsum.photos/seed/watch/300/200", category: "Electronics", rating: 4.5, stock: 8, isAvailable: true, isNew: false },
  { id: 5, title: "Mexanik Keyboard", brand: "Logitech", price: 450000, discount: 0, image: "https://picsum.photos/seed/keyboard/300/200", category: "Accessories", rating: 3.4, stock: 25, isAvailable: true, isNew: false },
  { id: 6, title: "Gaming Mouse", brand: "Razer", price: 180000, discount: 0, image: "https://picsum.photos/seed/mouse/300/200", category: "Accessories", rating: 4.0, stock: 0, isAvailable: false, isNew: false },
  { id: 7, title: "Monitor 27 4K", brand: "Samsung", price: 3400000, discount: 15, image: "https://picsum.photos/seed/monitor/300/200", category: "Computers", rating: 4.7, stock: 3, isAvailable: true, isNew: false },
  { id: 8, title: "Powerbank 20000", brand: "Baseus", price: 320000, discount: 0, image: "https://picsum.photos/seed/powerbank/300/200", category: "Accessories", rating: 4.2, stock: 40, isAvailable: true, isNew: true },
  { id: 9, title: "Galaxy S24", brand: "Samsung", price: 11200000, discount: 5, image: "https://picsum.photos/seed/galaxy/300/200", category: "Phones", rating: 4.6, stock: 4, isAvailable: true, isNew: true },
  { id: 10, title: "Televizor 55", brand: "LG", price: 7800000, discount: 0, image: "https://picsum.photos/seed/tv/300/200", category: "Electronics", rating: 4.1, stock: 15, isAvailable: true, isNew: false },
  { id: 11, title: "Planshet Tab A9", brand: "Samsung", price: 2900000, discount: 0, image: "https://picsum.photos/seed/tablet/300/200", category: "Electronics", rating: 3.8, stock: 6, isAvailable: true, isNew: false },
  { id: 12, title: "Web kamera HD", brand: "Logitech", price: 520000, discount: 0, image: "https://picsum.photos/seed/webcam/300/200", category: "Accessories", rating: 4.4, stock: 2, isAvailable: true, isNew: false },
];
