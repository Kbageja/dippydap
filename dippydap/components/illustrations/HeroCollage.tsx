import { DipBowl } from "./DipBowl";
import { products } from "@/lib/products";

export function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg">
      <div className="blob-bg" aria-hidden="true" />
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute left-[6%] top-[8%] w-[52%] rotate-[-6deg]">
          <DipBowl accent={products[0].accent} chipRotation={-22} />
        </div>
        <div className="absolute right-[4%] top-[2%] w-[54%] rotate-[4deg]">
          <DipBowl accent={products[1].accent} chipRotation={-14} />
        </div>
        <div className="absolute bottom-[2%] left-[20%] w-[58%] rotate-[2deg]">
          <DipBowl accent={products[2].accent} chipRotation={-20} />
        </div>
      </div>
    </div>
  );
}
