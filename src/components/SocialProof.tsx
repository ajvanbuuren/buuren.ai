import { useLanguage } from '../translations';

const OpenAILogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0462 6.0462 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1686a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.807 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1686a.0757.0757 0 0 1-.038-.052V6.06A4.504 4.504 0 0 1 10.7431 1.5656a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369zm1.0976-2.3654l2.602-1.501 2.602 1.501v3.002l-2.602 1.501-2.602-1.501v-3.002z"/>
  </svg>
);

const AnthropicLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
  </svg>
);

const GeminiLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
  </svg>
);

const MistralLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z"/>
  </svg>
);

export const SocialProof = () => {
  const { t } = useLanguage();
  return (
  <section className="py-12 border-b border-zinc-200/50 bg-zinc-50 relative">
    <div className="glow-line bottom-0" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest font-sans">
        {t.social.title}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2.5 font-sans group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-zinc-200 group-hover:border-black shadow-sm transition-colors">
            <OpenAILogo className="w-6 h-6 text-zinc-700 group-hover:text-black transition-colors" /> 
          </div>
          <span>OpenAI</span>
        </div>
        <div className="text-2xl font-serif italic text-zinc-800 font-medium flex items-center gap-2 group tracking-tight">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-zinc-200 group-hover:border-[#D97757] shadow-sm transition-colors">
             <AnthropicLogo className="w-6 h-6 text-zinc-700 group-hover:text-[#D97757] transition-colors" />
          </div>
          <span>Anthropic</span>
        </div>
        <div className="text-xl font-bold tracking-tight flex items-center gap-2.5 font-sans group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-zinc-200 group-hover:border-[#8E75B2] shadow-sm transition-colors">
            <GeminiLogo className="w-6 h-6 text-zinc-700 group-hover:text-[#8E75B2] transition-colors" /> 
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-900 group-hover:from-[#8E75B2] group-hover:to-[#b7a3d3] transition-all">Gemini</span>
        </div>
        <div className="text-xl font-bold tracking-widest uppercase font-sans flex items-center gap-2.5 group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-zinc-200 group-hover:border-[#F26522] shadow-sm transition-colors pt-0.5">
            <MistralLogo className="w-7 h-7 text-zinc-700 group-hover:text-[#F26522] transition-colors" />
          </div>
          <span className="text-zinc-800">MISTRAL</span>
        </div>
      </div>
    </div>
  </section>
  );
};

export default SocialProof;
