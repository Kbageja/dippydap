import Image from "next/image";
import type { Product } from "@/lib/products";

type ProductRowProps = {
  product: Product;
  reverse?: boolean;
  onNotify: (name: string) => void;
};

export function ProductRow({ product, reverse, onNotify }: ProductRowProps) {
  return (
    <article
      className={`grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Product image — 2:3 portrait to match 1024×1536 px photos */}
      <div className="mx-auto w-full max-w-[220px] sm:max-w-[260px]">
        <div
          className="relative w-full overflow-hidden rounded-2xl "
          style={{ aspectRatio: "2/3" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 55vw, (max-width: 1024px) 30vw, 260px"
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
            {product.name}
          </h3>
          {product.vegan && (
            <span className="rounded-full bg-forest-tint px-3 py-1 text-xs font-medium text-forest">
              Vegan
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-medium text-clay">{product.base}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/80 sm:text-base">
          {product.description}
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
          <NutritionStat label="Cal" value={String(product.nutrition.calories)} />
          <NutritionStat label="Protein" value={`${product.nutrition.proteinG}g`} />
          <NutritionStat label="Carbs" value={`${product.nutrition.carbsG}g`} />
          <NutritionStat label="Fat" value={`${product.nutrition.fatG}g`} />
          <NutritionStat label="Fiber" value={`${product.nutrition.fiberG}g`} />
        </dl>
        <p className="mt-2 text-xs text-ink/50">
          Estimated per {product.nutrition.servingSize} serving
        </p>

        <div className="mt-6 rounded-2xl bg-cream-soft p-4">
          <p className="font-display text-lg font-semibold text-forest">
            {product.price.estimate}
          </p>
        </div>

        <button
          onClick={() => onNotify(product.name)}
          className="mt-6 rounded-full bg-forest px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-forest-dark"
        >
          Notify me
        </button>
      </div>
    </article>
  );
}

function NutritionStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-forest-tint px-2 py-3 text-center">
      <p className="font-display text-base font-semibold text-forest sm:text-lg">
        {value}
      </p>
      <p className="text-[11px] text-ink/50">{label}</p>
    </div>
  );
}
