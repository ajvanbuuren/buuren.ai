import { ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../translations';
import Logo from './Logo';

export const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  return (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-zinc-200/50">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <Logo />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <a href="#waarde" className="hover:text-black transition-colors">{t.nav.results}</a>
        <a href="#voorbeelden" className="hover:text-black transition-colors">{t.nav.examples}</a>
        <a href="#over-ons" className="hover:text-black transition-colors">{t.nav.about}</a>
        <a href="#contact" className="hover:text-black transition-colors">{t.nav.contact}</a>
        <a href="/blog/" className="hover:text-black transition-colors">Blog</a>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')} 
          className="hidden md:flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-black transition-colors"
        >
          <Globe className="w-4 h-4" />
          {language.toUpperCase()}
        </button>
        <a href="https://calendly.com/buurenai/ai-verkenning" target="_blank" rel="noopener noreferrer" className="bg-brand-blue-dark text-white px-3 py-2 md:px-4 rounded-md text-xs md:text-sm font-medium hover:bg-brand-blue-dark/90 transition-colors flex items-center gap-1.5 md:gap-2 group whitespace-nowrap">
          <span className="hidden md:inline">{t.nav.book}</span>
          <span className="md:hidden">Plan verkenning</span>
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
