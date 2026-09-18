import { WaveDivider } from "./WaveDivider";

export function StorySection() {
  return (
    <section className="relative bg-paper  pb-16  sm:pb-24 overflow-hidden">
       <WaveDivider color="var(--cream-soft)" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold text-forest sm:text-5xl">
              Why DippyDap?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80 sm:text-lg">
              <p>
                Hey, I am <strong>Kinshuk</strong>! I am myself a big foodie and don't want to diet and eat those boring salads again. So I keep innovating myself to make boring foods healthy so that I can eat guilt-free.
              </p>
              <p>
                Obviously, that makes my trainer happy and, most importantly, keeps me away from LEG DAY and CARDIO!
              </p>
              <p>
                As a vegetarian, I find it very difficult to fulfill my protein goals, and I think everyone else is facing the same issue. So I introduce to you a healthier dip option! It won't just make your salad creamy, but it's tasty too, and you can eat it completely guilt-free.
              </p>
            </div>
          </div>
          
          <div className="relative w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl ring-1 ring-forest/10 bg-paper p-8 flex flex-col items-center justify-center text-center">
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">A Dip With Benefits</h3>
            <ul className="space-y-5 text-ink/80 w-full px-4 text-left">
              <li className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest text-paper">✓</span>
                <span className="font-medium text-lg">High Protein for Vegetarians</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest text-paper">✓</span>
                <span className="font-medium text-lg">Guilt-Free Indulgence</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest text-paper">✓</span>
                <span className="font-medium text-lg">Makes Boring Food Fun</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
