import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-forest text-cream-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-8">
        <Image
          src="/images/logo.png"
          alt="DippyDap"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <p className="font-display text-lg font-semibold">DippyDap</p>
        <p className="max-w-sm text-sm text-cream-soft/80">
          High protein dips made from cottage cheese, yogurt, and chickpeas.
        </p>
        <p className="text-xs text-cream-soft/60">
          © {new Date().getFullYear()} DippyDap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
