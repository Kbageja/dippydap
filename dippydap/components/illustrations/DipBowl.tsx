type DipBowlProps = {
  accent: string;
  className?: string;
  chipRotation?: number;
};

/**
 * A flat, rounded-line illustration of a chip dipped into a bowl,
 * matching the DippyDap logo's line-art / dotted-chip language.
 */
export function DipBowl({ accent, className, chipRotation = -18 }: DipBowlProps) {
  return (
    <svg
      viewBox="0 0 240 220"
      className={className}
      role="img"
      aria-label="Illustration of a chip dipped into a bowl of dip"
    >
      {/* bowl */}
      <ellipse cx="120" cy="168" rx="86" ry="26" fill={accent} opacity="0.18" />
      <path
        d="M40 150 C40 190 84 206 120 206 C156 206 200 190 200 150"
        fill="none"
        stroke="#1F4A3F"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse
        cx="120"
        cy="150"
        rx="80"
        ry="22"
        fill={accent}
        stroke="#1F4A3F"
        strokeWidth="6"
      />
      <ellipse cx="120" cy="150" rx="58" ry="13" fill="#1F4A3F" opacity="0.12" />

      {/* chip */}
      <g transform={`rotate(${chipRotation} 130 90)`}>
        <path
          d="M84 34 L190 92 L84 148 Z"
          fill="#F3E7C6"
          stroke="#1F4A3F"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="108" cy="66" r="4.5" fill="#1F4A3F" />
        <circle cx="132" cy="82" r="4.5" fill="#1F4A3F" />
        <circle cx="106" cy="100" r="4.5" fill="#1F4A3F" />
        <circle cx="140" cy="108" r="4.5" fill="#1F4A3F" />
        <circle cx="120" cy="118" r="4.5" fill="#1F4A3F" />
      </g>
    </svg>
  );
}
