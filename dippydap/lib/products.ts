export type Nutrition = {
  servingSize: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number;
};

export type Product = {
  slug: string;
  name: string;
  base: string;
  tagline: string;
  description: string;
  accent: string; // hex used for this product's illustration/tag
  image: string;  // path relative to /public
  nutrition: Nutrition;
  price: {
    estimate: string;
  };
  vegan?: boolean;
};

export const products: Product[] = [
  {
    slug: "italian-cheesy",
    name: "Italian Cheesy",
    base: "Cottage cheese base",
    tagline: "Herby, rich, and slow-churned",
    description:
      "A slow-blended cottage cheese dip with roasted garlic, basil, and a whisper of black pepper — built for a thick, spoonable texture that holds onto every chip.",
    accent: "#D9A441",
    image: "/images/italian_cheesy.png",
    nutrition: {
      servingSize: "30 g",
      calories: 42,
      proteinG: 3.3,
      carbsG: 1.8,
      fatG: 2.1,
      fiberG: 0.3,
    },
    price: {
      estimate: "₹199 for 300 g",
    },
  },
  {
    slug: "indian-masala",
    name: "Indian Masala",
    base: "Yogurt base",
    tagline: "Tangy, spiced, and cooling",
    description:
      "Thick strained yogurt whisked with roasted cumin, coriander, and a light chaat masala blend — a tangy, cooling dip with a gentle kick.",
    accent: "#C1622D",
    image: "/images/indian_masala.png",
    nutrition: {
      servingSize: "30 g",
      calories: 34,
      proteinG: 2.8,
      carbsG: 2.4,
      fatG: 1.2,
      fiberG: 0.4,
    },
    price: {
      estimate: "₹199 for 300 g",
    },
  },
  {
    slug: "garlic-butter",
    name: "Garlic Butter",
    base: "Chickpea base (vegan)",
    tagline: "Rich, garlicky, and plant-powered",
    description:
      "Blended chickpeas with slow-roasted garlic and a smooth butter-forward finish — a rich, savory dip that's entirely dairy-free and built for serious snackers.",
    accent: "#E0A93E",
    image: "/images/garlic_butter.png",
    nutrition: {
      servingSize: "30 g",
      calories: 38,
      proteinG: 2.1,
      carbsG: 4.6,
      fatG: 1.0,
      fiberG: 1.1,
    },
    price: {
      estimate: "₹199 for 300 g",
    },
    vegan: true,
  },
];
