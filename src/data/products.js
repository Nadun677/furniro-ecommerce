import c1Img from "../assets/chair1.webp";
import c2Img from "../assets/chair2.jpg";
import s1Img from "../assets/sofa1.webp";
import t1Img from "../assets/table1.avif";
import l1Img from "../assets/lamp1.webp";
import c3Img from "../assets/chair3.jpg";
import sImg from "../assets/1_5d1458e3-7a74-473a-a195-db4cbb619727.webp";
import s5Img from "../assets/sofa5.webp";
import t2Img from "../assets/table2.webp";
import l2Img from "../assets/lamp2.webp";
import s4Img from "../assets/sofa4.webp";
import c4Img from "../assets/chair4.webp";
import bImg from "../assets/bedrrom.webp";
import b2Img from "../assets/bed2.webp";
import b1Img from "../assets/beds1.webp"; 
import b3Img from "../assets/bed3.webp";

export const productsData = [
  {
    id: 1,
    name: "Syltherine",
    category: "Chair",
    price: "2,500,000",
    image: c1Img,
    description: "Stylish cafe chair",
    sku: "SS001"
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Chair",
    price: "2,500,000",
    image: c2Img,
    description: "Stylish cafe chair",
    sku: "SS002"
  },
  {
    id: 3,
    name: "Lolito",
    category: "Sofa",
    price: "7,000,000",
    image: s1Img, // FIX: Removed quotes so it reads the imported file variable
    description: "Luxury big sofa",
    sku: "SS003"
  },
  {
    id: 4,
    name: "Respira",
    category: "Table",
    price: "500,000",
    image: t1Img,
    description: "Outdoor bar table and stool",
    sku: "SS004"
  },
  {
    id: 5,
    name: "Grifo",
    category: "Lamp",
    price: "1,500,000",
    image: l1Img,
    description: "Night lamp",
    sku: "SS005"
  },
  {
    id: 6,
    name: "Muggo",
    category: "Chair",
    price: "150,000",
    image: c3Img,
    description: "Small mug chair",
    sku: "SS006"
  },
  {
    id: 7,
    name: "Pingky",
    category: "Sofa",
    price: "7,000,000",
    image: sImg,
    description: "Cute bed set",
    sku: "SS007"
  },
  {
    id: 8,
    name: "Potty",
    category: "Sofa",
    price: "500,000",
    image: s5Img,
    description: "Minimalist flower pot",
    sku: "SS008"
  },
  {
    id: 9,
    name: "Kili",
    category: "Table",
    price: "850,000",
    image: t2Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Mid-century coffee table",
    sku: "SS009"
  },
  {
    id: 10,
    name: "Artemis",
    category: "Lamp",
    price: "1,200,000",
    image: l2Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Modern floor lamp",
    sku: "SS010"
  },
  {
    id: 11,
    name: "Hera",
    category: "Sofa",
    price: "9,500,000",
    image: s4Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Premium velvet sectional",
    sku: "SS011"
  },
  {
    id: 12,
    name: "Apollo",
    category: "Chair",
    price: "320,000",
    image: c4Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Ergonomic office chair",
    sku: "SS012"
  },
  {
    id: 13,
    name: "Eos Luxe", // FIX: Changed duplicate name
    category: "Beds",
    price: "4,200,000",
    image: bImg, // FIX: Swapped hardcoded path out for the imported reference
    description: "Modern minimalist master bed", // FIX: Changed irrelevant description
    sku: "SS013" // FIX: Unique SKU
  },
  {
    id: 14,
    name: "Somnus", // FIX: Changed duplicate name
    category: "Beds",
    price: "3,800,000",
    image: b2Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Premium cushioned bed frame", // FIX: Changed irrelevant description
    sku: "SS014" // FIX: Unique SKU
  },
  {
    id: 15,
    name: "Nyx Classic", // FIX: Changed duplicate name
    category: "Beds",
    price: "2,900,000",
    image: b1Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Elegant hardwood bed platform", // FIX: Changed irrelevant description
    sku: "SS015" // FIX: Unique SKU
  },
  {
    id: 16,
    name: "Selene", // FIX: Changed duplicate name
    category: "Beds",
    price: "5,100,000",
    image: b3Img, // FIX: Swapped hardcoded path out for the imported reference
    description: "Luxury upholstered king bed", // FIX: Changed irrelevant description
    sku: "SS016" // FIX: Unique SKU
  }
];