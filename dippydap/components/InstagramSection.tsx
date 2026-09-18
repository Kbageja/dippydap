import { WaveDivider } from "./WaveDivider";

export function InstagramSection() {
  return (
    <section className="relative bg-cream-soft  pb-16  sm:pb-24 text-center overflow-hidden">
      <WaveDivider color="var(--paper)" />
      
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 mt-12 sm:mt-16">
        <h2 className="font-display text-4xl font-semibold text-forest sm:text-5xl">
          Join our community
        </h2>
        <div className="mt-4 text-lg text-ink/70">
          Follow us on Instagram for new updates and Pre-Launch offers. <br />
        
        </div>
        
        <a 
          href="https://instagram.com/thedippydap" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-lg font-medium text-paper transition-all hover:bg-forest/90 hover:scale-105 shadow-lg shadow-forest/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          @thedippydap
        </a>
      </div>
    </section>
  );
}
