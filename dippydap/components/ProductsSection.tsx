"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { ProductRow } from "./ProductRow";
import { NotifyModal } from "./NotifyModal";
import { WaveDivider } from "./WaveDivider";

export function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <section id="products" className="relative bg-cream-soft">
      <WaveDivider color="var(--paper)" />
      <div className="mx-auto max-w-5xl px-5 pb-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
            Three dips, three bases
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
            Every DippyDap dip starts with a high-protein base — nothing added
            just to bulk it out.
          </p>
        </div>

        <div className="divide-y divide-forest-tint">
          {products.map((product, i) => (
            <ProductRow
              key={product.slug}
              product={product}
              reverse={i % 2 === 1}
              onNotify={setActiveProduct}
            />
          ))}
        </div>
      </div>
      <div id="notify-form" />
      <NotifyModal productName={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
