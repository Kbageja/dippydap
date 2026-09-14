import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-forest-tint bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="DippyDap"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span className="font-display text-lg font-semibold text-forest">
            DippyDap
          </span>
        </a>
        <a
          href="#products"
          className="rounded-full bg-forest px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-forest-dark"
        >
          See the dips
        </a>
      </div>
    </header>
  );
}
