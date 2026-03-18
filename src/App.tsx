import { LanguageProvider } from './translations';
import { AIOpportunityMap } from './components/VisualStorytelling';
import { AIOpportunityScan } from './components/AIOpportunityScan';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import TargetAudience from './components/TargetAudience';
import ValueProposition from './components/ValueProposition';
import ConcreteExamples from './components/ConcreteExamples';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
