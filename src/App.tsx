import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Lightbulb, Target, ShieldCheck, Search, Map, Users, TrendingUp, CheckCircle2, Sparkles, Clock, ChevronRight, Check, MessageSquare, FileText, Bot, Zap, ChevronDown, User, BarChart, Mail, AlertCircle, Globe } from 'lucide-react';
import { useRef, useState } from 'react';
import { LanguageProvider, useLanguage } from './translations';
import { AIOpportunityMap } from './components/VisualStorytelling';
import { AIOpportunityScan } from './components/AIOpportunityScan';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
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

const Navbar = () => {
  const { t } = useLanguage();
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
      </div>
      <div className="flex items-center gap-4">
        <a href="https://calendly.com/buurenai/ai-verkenning" target="_blank" rel="noopener noreferrer" className="bg-brand-blue-dark text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-blue-dark/90 transition-colors flex items-center gap-2 group">
          {t.nav.book}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-50">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          {t.hero.title1}<br className="hidden md:block" />
          {t.hero.title2}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-dark to-brand-blue-light">{t.hero.title3}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://calendly.com/buurenai/ai-verkenning" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-blue-dark text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-blue-dark/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue-dark/10 border-beam font-sans">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => {
  const { t } = useLanguage();
  return (
  <section className="py-8 border-b border-zinc-200/50 bg-zinc-50 relative">
    <div className="glow-line bottom-0" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <p className="text-center text-sm font-medium text-zinc-500 mb-6 uppercase tracking-widest font-sans">
        {t.social.title}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2 font-sans">
          <div className="w-6 h-6 rounded-full bg-current" /> OpenAI
        </div>
        <div className="text-xl font-serif italic font-bold">Anthropic</div>
        <div className="text-xl font-bold tracking-tight flex items-center gap-1 font-sans">
          <Sparkles className="w-5 h-5" /> Gemini
        </div>
        <div className="text-xl font-bold tracking-widest uppercase font-sans">Mistral</div>
      </div>
    </div>
  </section>
  );
};

const ValueProposition = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t.value.t1,
      description: t.value.d1
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t.value.t2,
      description: t.value.d2
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t.value.t3,
      description: t.value.d3
    }
  ];

  return (
    <section id="waarde" className="py-24 relative overflow-hidden bg-zinc-50/50 border-y border-dashed border-zinc-200/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Van onzekerheid naar een <span className="text-[#d7e021]">helder actieplan.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-sans">
            {t.value.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-lime flex items-center justify-center mb-6 text-brand-blue-dark">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




const TargetAudience = () => {
  const { t } = useLanguage();
  const challenges = [
    t.target.c1,
    t.target.c2,
    t.target.c3,
    t.target.c4
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Klinkt dit <span className="text-[#f99830]">bekend?</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg font-sans">
            {t.target.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-[#f99830] bg-[#f99830] flex items-start gap-4 shadow-sm"
            >
              <AlertCircle className="w-6 h-6 text-[#303994] shrink-0 mt-0.5" />
              <p className="text-[#303994] font-medium font-sans">{challenge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConcreteExamples = () => {
  const { t } = useLanguage();
  const examples = [
    { icon: <FileText className="w-5 h-5" />, text: t.examples.e1 },
    { icon: <Bot className="w-5 h-5" />, text: t.examples.e2 },
    { icon: <Zap className="w-5 h-5" />, text: t.examples.e3 },
    { icon: <BarChart className="w-5 h-5" />, text: t.examples.e4 },
    { icon: <Mail className="w-5 h-5" />, text: t.examples.e5 }
  ];

  return (
    <section id="voorbeelden" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Wat kan AI concreet voor u <span className="text-[#a9d6f3]">betekenen?</span>
          </h2>
          <p className="text-zinc-600 text-lg font-sans">
            {t.examples.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200 bg-white flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#a9d6f3] flex items-center justify-center shrink-0 text-[#303994]">
                {item.icon}
              </div>
              <p className="text-[#303994] font-medium pt-2 font-sans">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();
  return (
  <section id="over-ons" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t.about.title}
          </h2>
          <div className="space-y-4 text-lg text-zinc-600 font-sans">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80" 
            alt="Rotterdam Skyline" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue-dark/10 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-brand-blue-light rounded-2xl overflow-hidden bg-brand-blue-light hover:bg-brand-blue-light/90 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold pr-4 font-sans transition-colors text-brand-blue-dark">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue-dark' : 'text-brand-blue-dark'}`} />
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-brand-blue-dark font-sans">{faq.a}</p>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const { t } = useLanguage();
  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-50/50 border-y border-dashed border-zinc-200/50">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useLanguage();
  return (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-10 md:p-16 border border-zinc-200/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg text-zinc-600 font-sans">
              {t.cta.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm font-medium text-zinc-600 font-sans">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-blue-dark" />
              {t.cta.f1}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-lime" />
              {t.cta.f2}
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-brand-orange" />
              {t.cta.f3}
            </div>
          </div>

          <a href="https://calendly.com/buurenai/ai-verkenning" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-blue-dark/90 transition-all flex items-center justify-center gap-2 mx-auto group border-beam shadow-[0_0_30px_rgba(48,58,149,0.2)] font-sans">
            {t.cta.btn}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Logo className="mb-4" />
          <p className="text-zinc-600 font-sans max-w-sm">
            Onafhankelijk advies en pragmatische begeleiding bij AI-adoptie voor het MKB.
          </p>
        </div>
        <div className="md:text-right">
          <h4 className="font-semibold mb-4 text-[#303994]">Contact</h4>
          <ul className="space-y-2 text-zinc-600 font-sans">
            <li><a href="mailto:info@buuren.ai" className="hover:text-[#f99830] transition-colors">info@buuren.ai</a></li>
            <li><a href="tel:+31640859962" className="hover:text-[#f99830] transition-colors">+31 6 40 85 99 62</a></li>
            <li><a href="#" className="hover:text-[#f99830] transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500 font-sans">
          &copy; {new Date().getFullYear()} Buuren.AI. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black selection:bg-brand-blue-light/30 selection:text-brand-blue-dark">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <TargetAudience />
          <ValueProposition />
          <ConcreteExamples />
          <AIOpportunityScan />
          <AIOpportunityMap />
          <About />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
