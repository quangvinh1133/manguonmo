// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Corsair K55 RGB Pro Gaming Keyboard",
    price: 49.99,
    description:
      "Bàn phím gaming Corsair K55 RGB Pro với 6 phím macro, chống nước IP42, đèn nền RGB đa vùng.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71xsXSPpYhL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Logitech MX Master 3S Wireless Mouse",
    price: 89.99,
    description:
      "Chuột không dây Logitech MX Master 3S với cảm biến 8000 DPI, siêu êm, hỗ trợ 3 thiết bị cùng lúc.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61t-cW8bGPL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    title: "Kingston NV2 1TB NVMe SSD",
    price: 64.99,
    description:
      "Ổ cứng Kingston NV2 NVMe SSD tốc độ cao 3500MB/s, phù hợp nâng cấp laptop và PC.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71s7+cvFLPL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    title: "Samsung 980 PRO 500GB NVMe SSD",
    price: 79.99,
    description:
      "SSD Samsung 980 PRO PCIe 4.0 tốc độ 6900MB/s, siêu nhanh cho gaming và đồ họa.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61Ri1JDcA1L._AC_SL1500_.jpg",
  },
  {
    id: 5,
    title: "HyperX Fury DDR4 16GB 3200MHz",
    price: 39.99,
    description:
      "RAM HyperX Fury DDR4 dung lượng 16GB bus 3200MHz, hiệu năng ổn định cho gaming.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61iNj8cY7SL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    title: "Corsair Vengeance RGB Pro 16GB",
    price: 69.99,
    description:
      "RAM Corsair Vengeance RGB Pro RGB đẹp mắt, hiệu năng cao, hỗ trợ XMP 2.0.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/81CB2Vqwa7L._AC_SL1500_.jpg",
  },
  {
    id: 7,
    title: "Logitech C920 HD Pro Webcam",
    price: 59.99,
    description:
      "Webcam Logitech C920 quay video Full HD 1080p, micro kép chống ồn, phù hợp học online và livestream.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg",
  },
  {
    id: 8,
    title: "Elgato Wave 1 USB Microphone",
    price: 119.99,
    description:
      "Micro thu âm Elgato Wave 1 chất lượng cao, giảm nhiễu, phù hợp streamer và podcaster.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61sno5ek5PL._AC_SL1500_.jpg",
  },
  {
    id: 9,
    title: "SteelSeries QcK Heavy Mouse Pad",
    price: 24.99,
    description:
      "Lót chuột SteelSeries QcK Heavy dày 6mm, bám bàn tốt, bề mặt mịn tối ưu cho game FPS.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71SYgG2U6IL._AC_SL1500_.jpg",
  },
  {
    id: 10,
    title: "Razer Firefly V2 RGB Mouse Pad",
    price: 49.99,
    description:
      "Lót chuột RGB Razer Firefly V2 siêu mỏng, LED Chroma, bề mặt ma sát thấp cho tốc độ cao.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/71GwB7DVjsL._AC_SL1500_.jpg",
  },
  {
    id: 11,
    title: "Anker USB-C Hub 7-in-1",
    price: 29.99,
    description:
      "Hub Anker 7-in-1 hỗ trợ HDMI 4K, USB 3.0, SD/TF, USB-C PD 100W.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61V7R5fOc6L._AC_SL1500_.jpg",
  },
  {
    id: 12,
    title: "Ugreen USB 3.0 Hub 4 Ports",
    price: 12.99,
    description:
      "Hub USB 3.0 Ugreen 4 cổng tốc độ cao, nhỏ gọn, tiện lợi khi dùng laptop.",
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/61uBDpRiSyL._AC_SL1500_.jpg",
  },
];
