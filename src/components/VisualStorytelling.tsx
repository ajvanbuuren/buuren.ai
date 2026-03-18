import { motion } from 'motion/react';
import { Settings, DollarSign, Megaphone, Users, Briefcase } from 'lucide-react';

export const AIOpportunityMap = () => {
  const areas = [
    { 
      icon: <Settings className="w-6 h-6" />, 
      name: 'Operations', 
      desc: 'Procesoptimalisatie & planning', 
      bg: 'bg-white', 
      border: 'border-zinc-200', 
      text: 'text-[#303994]',
      iconBg: 'bg-[#a9d6f3]'
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      name: 'Finance', 
      desc: 'Factuurverwerking & forecasting', 
      bg: 'bg-white', 
      border: 'border-zinc-200', 
      text: 'text-[#303994]',
      iconBg: 'bg-[#f7f3e7]'
    },
    { 
      icon: <Megaphone className="w-6 h-6" />, 
      name: 'Marketing', 
      desc: 'Contentcreatie & personalisatie', 
      bg: 'bg-white', 
      border: 'border-zinc-200', 
      text: 'text-[#303994]',
      iconBg: 'bg-[#d7e021]'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      name: 'Customer Service', 
      desc: 'Slimme routering & concept-antwoorden', 
      bg: 'bg-white', 
      border: 'border-zinc-200', 
      text: 'text-[#303994]',
      iconBg: 'bg-brand-blue-dark/10'
    },
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      name: 'HR', 
      desc: 'CV-screening & onboarding', 
      bg: 'bg-white', 
      border: 'border-zinc-200', 
      text: 'text-[#303994]',
      iconBg: 'bg-[#f99830]'
    }
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black font-serif">AI Kansenkaart</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-sans">AI biedt mogelijkheden over de volledige breedte van uw organisatie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1 ${area.bg} ${area.border}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm ${area.iconBg} ${area.text}`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black relative z-10 font-serif">{area.name}</h3>
              <p className="text-sm text-zinc-800 relative z-10 font-sans">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
