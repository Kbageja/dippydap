import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="font-display text-sm font-medium tracking-wide text-clay">
            Coming soon
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest sm:text-5xl lg:text-[3.4rem]">
            Dips with a purpose. Protein in every bite.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
            DippyDap turns cottage cheese, yogurt, and chickpeas into three
            dips built for people who snack often and want it to count —
            Italian Cheesy, Indian Masala, and a fully vegan Sweet Chilli &
            Honey.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-clay px-7 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-clay-dark"
            >
              Explore the dips
            </a>
            <a
              href="#notify-form"
              className="rounded-full border border-forest px-7 py-3 text-center text-sm font-medium text-forest transition-colors hover:bg-forest-tint"
            >
              Notify me at launch
            </a>
          </div>
        </div>

        {/* Image column — uses natural 3:2 ratio so nothing is cropped or squished */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ aspectRatio: "3/2" }}>
            <Image
              src="/images/hero_section.png"
              alt="DippyDap dips — Italian Cheesy, Indian Masala, and Sweet Chilli & Honey"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 768px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
