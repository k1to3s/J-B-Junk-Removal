/**
 * J&B Junk Removal logo, rebuilt as inline SVG (scales crisply, no extra request).
 * To use the original raster file instead, drop it at public/images/logo.png
 * and swap this component for a next/image.
 */
export default function Logo({
  className = "h-12 w-auto",
  title = "J&B Junk Removal",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="100 170 1060 960"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* Dump bed */}
      <path
        fill="#111111"
        d="M150 322 L658 236 L704 190 L836 185 L840 222 L768 233 Q750 236 746 255 L700 540 L232 540 L232 625 L197 625 L197 577 L168 577 L168 540 L138 540 L172 372 L136 375 Z"
      />
      {/* Chassis + bumper */}
      <rect x="432" y="565" width="336" height="71" rx="6" fill="#111111" />
      <path fill="#111111" d="M1000 565 L1128 560 Q1146 560 1146 578 L1146 622 Q1146 636 1130 636 L1000 636 Z" />
      {/* Cab outline */}
      <path
        d="M772 548 L792 298 Q795 270 818 268 L905 270 Q925 272 936 286 L1020 398 L1100 430 Q1120 438 1120 462 L1118 543"
        fill="none"
        stroke="#111111"
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Cab window */}
      <path
        fill="#111111"
        d="M820 332 Q820 316 836 316 L895 316 Q906 318 911 328 L960 408 L960 444 L910 444 Q905 444 903 438 L890 405 L836 405 Q820 405 820 392 Z"
      />
      {/* Wheels with white cut-out ring */}
      <circle cx="338" cy="617" r="104" fill="#ffffff" />
      <circle cx="338" cy="617" r="90" fill="#111111" />
      <circle cx="338" cy="617" r="39" fill="#ffffff" />
      <circle cx="885" cy="612" r="112" fill="#ffffff" />
      <circle cx="885" cy="612" r="100" fill="#111111" />
      <circle cx="885" cy="612" r="45" fill="#ffffff" />

      {/* Wordmark */}
      <text
        x="150"
        y="997"
        textLength="958"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="372"
        fill="#111111"
      >
        J<tspan fill="#69B8FF">&amp;</tspan>B
      </text>
      <text
        x="115"
        y="1112"
        textLength="1025"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="112"
        fill="#111111"
      >
        JUNK REMOVAL
      </text>
    </svg>
  );
}
