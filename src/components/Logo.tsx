export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 font-sans ${className}`}>
    <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top-Left: Structural Square */}
        <rect x="3" y="3" width="8" height="8" rx="2" className="fill-black" />
        {/* Bottom-Left: Transformation Circle */}
        <circle cx="7" cy="17" r="4" className="fill-black" opacity="0.5" />
        {/* Bottom-Right: Structural Square */}
        <rect x="13" y="13" width="8" height="8" rx="2" className="fill-black" />
        {/* Top-Right: AI Spark */}
        <path d="M17 3 Q17 7 13 7 Q17 7 17 11 Q17 7 21 7 Q17 7 17 3Z" className="fill-brand-orange" />
      </svg>
    </div>
    <div className="flex items-baseline tracking-tight">
      <span className="text-black font-bold text-2xl tracking-[-0.02em]">Buuren</span>
      <span className="text-brand-blue-dark font-semibold text-2xl">.AI</span>
    </div>
  </div>
);

export default Logo;
