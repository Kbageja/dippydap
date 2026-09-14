type WaveDividerProps = {
  flip?: boolean;
  color?: string;
};

export function WaveDivider({ flip = false, color = "var(--cream-soft)" }: WaveDividerProps) {
  return (
    <div className={flip ? "rotate-180" : undefined} aria-hidden="true">
      <svg
        className="ripple-divider"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C150 60 300 0 450 30 C600 60 750 0 900 30 C1000 50 1100 40 1200 25 L1200 60 L0 60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
