export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 font-sans ${className}`}>
    <img src="/logo.png" alt="Buuren.AI logo" className="w-8 h-8 md:w-9 md:h-9 shrink-0" />
    <div className="flex items-baseline tracking-tight whitespace-nowrap">
      <span className="text-black font-bold text-lg md:text-2xl tracking-[-0.02em]">Buuren</span>
      <span className="text-brand-blue-dark font-semibold text-lg md:text-2xl">.AI</span>
    </div>
  </div>
);

export default Logo;
