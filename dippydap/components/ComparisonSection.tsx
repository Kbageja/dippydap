import Image from "next/image";
import { WaveDivider } from "./WaveDivider";

const rows = [
  {
    feature: "Main Ingredients",
    dippydap: "Chickpeas, Yogurt, Cottage Cheese & Herbs",
    mayo: "Mostly Refined Oils",
    mayoWins: false,
  },
  {
    feature: "Nutritional Value",
    dippydap: "High in Protein & Fibre",
    mayo: "No Significant Protein or Fibre",
    mayoWins: false,
  },
  {
    feature: "Healthier Choice",
    dippydap: "Lower in Saturated Fat",
    mayo: "Generally High in Saturated Fat",
    mayoWins: false,
  },
  {
    feature: "Flavours",
    dippydap: "Indian Masala, Italian Cheesy, Garlic Butter & more",
    mayo: "Available in Various Flavours",
    mayoWins: true,
  },
  {
    feature: "Taste Experience",
    dippydap: "Great Taste with No Guilt",
    mayo: "Same Taste with a Lot More Guilt",
    mayoWins: false,
  },
];

function Check() {
  return (
    <span
      aria-label="Yes"
      className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest text-paper text-sm font-bold"
    >
      ✓
    </span>
  );
}

function Cross() {
  return (
    <span
      aria-label="No"
      className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-clay/20 text-clay text-sm font-bold"
    >
      ✕
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="relative bg-paper overflow-hidden">
      {/* Soft cream background blob */}
      <WaveDivider color="var(--cream-soft)" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, var(--cream-soft) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        {/* ── Section header ── */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-2 font-display text-4xl font-semibold text-forest sm:text-5xl">
            Not just another dip
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
            Same spreadability. Far smarter nutrition.
          </p>
        </div>

        {/* ── Table card ── */}
        <div className="mt-10 sm:mt-14 overflow-hidden rounded-3xl shadow-xl ring-1 ring-forest/10">
          <table className="w-full border-collapse">
            {/* ── Column headers ── */}
            <thead>
              <tr>
                {/* Feature label column */}
                <th
                  scope="col"
                  className="w-[30%] bg-cream-soft px-4 py-5 text-left font-display text-base font-semibold text-forest sm:px-6 sm:text-lg"
                >
                  Feature
                </th>

                {/* DippyDap column header */}
                <th
                  scope="col"
                  className="w-[35%] px-4 py-5 text-left font-display text-base font-semibold text-forest sm:px-6 sm:text-lg bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-24 w-16 sm:h-28 sm:w-20 flex-shrink-0">
                      <Image
                        src="/images/italian_cheesy.png"
                        alt="DippyDap Italian Cheesy jar"
                        fill
                        sizes="112px"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span>DippyDap™</span>
                  </div>
                </th>

                {/* Regular Mayo column header */}
                <th
                  scope="col"
                  className="w-[35%] px-4 py-5 text-left font-display text-base font-semibold text-ink sm:px-6 sm:text-lg bg-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-24 w-16 sm:h-28 sm:w-20 flex-shrink-0">
                      <Image
                        src="/images/normal_mayo.png"
                        alt="Regular mayonnaise jar"
                        fill
                        sizes="112px"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span>Regular Mayo</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* ── Comparison rows ── */}
            <tbody>
              {rows.map((row, i) => {
                const isEven = i % 2 === 0;
                return (
                  <tr key={row.feature} className={isEven ? "bg-paper" : "bg-cream-soft/60"}>
                    {/* Feature name */}
                    <td className="px-4 py-4 sm:px-6 sm:py-5">
                      <span className="font-display text-sm font-semibold text-forest sm:text-base">
                        {row.feature}
                      </span>
                    </td>

                    {/* DippyDap cell */}
                    <td className="bg-forest/5 px-4 py-4 sm:px-6 sm:py-5">
                      <div className="flex items-start gap-2">
                        <Check />
                        <span className="text-xs leading-snug text-ink sm:text-sm">
                          {row.dippydap}
                        </span>
                      </div>
                    </td>

                    {/* Mayo cell */}
                    <td className="px-4 py-4 sm:px-6 sm:py-5">
                      <div className="flex items-start gap-2">
                        {row.mayoWins ? <Check /> : <Cross />}
                        <span className="text-xs leading-snug text-ink/70 sm:text-sm">
                          {row.mayo}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Caption */}
        <p className="mt-5 text-center text-xs text-ink/50">
          A smarter, tastier, better dip for your snack time.
        </p>
      </div>
    </section>
  );
}
