import Logo from './Logo';
import { useLanguage } from '../translations';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <Logo className="mb-4" />
          <p className="text-zinc-600 font-sans max-w-sm">
            {t.footer.desc}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-brand-blue-dark">Contact</h4>
          <ul className="space-y-2 text-zinc-600 font-sans">
            <li><a href="mailto:info@buuren.ai" className="hover:text-brand-orange transition-colors">info@buuren.ai</a></li>
            <li><a href="tel:+31640859962" className="hover:text-brand-orange transition-colors">+31 6 40 85 99 62</a></li>
            <li><a href="https://www.linkedin.com/company/buurenai/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-brand-blue-dark">{t.footer.business}</h4>
          <ul className="space-y-2 text-zinc-600 font-sans text-sm">
            <li>Florenweer 18</li>
            <li>3371 RC Hardinxveld-Giessendam</li>
            <li>KvK: 98732633</li>
            <li>BTW: NL005350167B49</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500 font-sans">
          &copy; {new Date().getFullYear()} Buuren.AI. {t.footer.rights}
        </div>
        <div className="text-sm text-zinc-500 font-sans">
          <a href="/privacy" className="hover:text-brand-orange transition-colors">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
