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
  nutrition: Nutrition;
  price: {
    estimate: string;
    reasoning: string;
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
    nutrition: {
      servingSize: "30 g",
      calories: 42,
      proteinG: 3.3,
      carbsG: 1.8,
      fatG: 2.1,
      fiberG: 0.3,
    },
    price: {
      estimate: "₹149 for 150 g",
      reasoning:
        "Cottage cheese is the priciest base of the three, and the herb blend adds a small premium. Estimate factors ingredient cost (~38%), cold-chain transport since it's dairy-based (~20%), recyclable tub packaging (~12%), and margin/overhead (~30%).",
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
    nutrition: {
      servingSize: "30 g",
      calories: 34,
      proteinG: 2.8,
      carbsG: 2.4,
      fatG: 1.2,
      fiberG: 0.4,
    },
    price: {
      estimate: "₹129 for 150 g",
      reasoning:
        "Yogurt is a cheaper, locally-abundant base than cottage cheese, keeping ingredient cost down (~32%). Spice sourcing adds a modest cost. Cold-chain transport (~18%), packaging (~12%), margin/overhead (~38%).",
    },
  },
  {
    slug: "sweet-chilli-honey",
    name: "Sweet Chilli & Honey",
    base: "Chickpea base (vegan)",
    tagline: "Sweet heat, plant-powered",
    description:
      "Blended chickpeas with red chilli, a touch of raw honey, and roasted garlic — a naturally sweet-and-spicy dip that's entirely dairy-free.",
    accent: "#E0A93E",
    nutrition: {
      servingSize: "30 g",
      calories: 38,
      proteinG: 2.1,
      carbsG: 4.6,
      fatG: 1.0,
      fiberG: 1.1,
    },
    price: {
      estimate: "₹139 for 150 g",
      reasoning:
        "Chickpeas are inexpensive, but this is priced closer to the dairy dips because it doesn't need refrigerated transport (offsetting savings go into ingredient quality — raw honey, ambient-stable packaging) and to reflect typical vegan-line premium positioning. Ingredients (~30%), transport (~14%, no cold chain needed), packaging (~14%), margin/overhead (~42%).",
    },
    vegan: true,
  },
];
