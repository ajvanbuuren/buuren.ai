import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, ArrowRight, Clock, Zap, BarChart3, Settings, ShieldCheck } from 'lucide-react';

type Question = {
  id: string;
  title: string;
  type: 'single' | 'multiple';
  options: string[];
};

const questions: Question[] = [
  {
    id: 'size',
    title: 'Hoe groot is uw organisatie?',
    type: 'single',
    options: [
      '1–10 medewerkers',
      '10–50 medewerkers',
      '50–250 medewerkers',
      '250+'
    ]
  },
  {
    id: 'time',
    title: 'Waar verliest uw team momenteel het meeste tijd?',
    type: 'multiple',
    options: [
      'E-mails en communicatie',
      'Documenten schrijven of samenvatten',
      'Administratie en verwerking',
      'Data analyse of rapportages',
      'Klantenservice of vragen beantwoorden',
      'Marketing of content'
    ]
  },
  {
    id: 'usage',
    title: 'Gebruikt uw organisatie momenteel al AI-tools?',
    type: 'single',
    options: [
      'Nee',
      'Af en toe (bijvoorbeeld ChatGPT)',
      'Regelmatig',
      'AI is al geïntegreerd in processen'
    ]
  },
  {
    id: 'type',
    title: 'Welke omschrijving past het beste bij uw organisatie?',
    type: 'single',
    options: [
      'Zakelijke dienstverlening',
      'Financiële dienstverlening',
      'Bouw / vastgoed',
      'IT / technologie',
      'Retail / e-commerce',
      'Overig'
    ]
  },
  {
    id: 'ambition',
    title: 'Wat is uw belangrijkste doel met AI?',
    type: 'single',
    options: [
      'Tijd besparen',
      'Efficiënter werken',
      'Betere analyses en inzichten',
      'Innovatie of nieuwe diensten',
      'Kosten verlagen'
    ]
  }
];

export const AIOpportunityScan = () => {
  const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const handleAnswer = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion.type === 'single') {
      setAnswers({ ...answers, [currentQuestion.id]: option });
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setStep('results');
        }
      }, 300);
    } else {
      const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
      const newAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter(a => a !== option)
        : [...currentAnswers, option];
      setAnswers({ ...answers, [currentQuestion.id]: newAnswers });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('results');
    }
  };

  const resetScan = () => {
    setStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a9d6f3]/20 text-[#303994] text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                AI Opportunity Scan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#303994] mb-6 tracking-tight">
                Ontdek waar AI waarde kan creëren in uw organisatie
              </h2>
              <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
                In ongeveer 2 minuten ontdekt u waar kunstmatige intelligentie in uw organisatie de meeste impact kan maken. U ontvangt direct een aantal concrete toepassingen die relevant zijn voor uw bedrijf.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#f99830]" />
                  <span>Duurt ongeveer 2 minuten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#f99830]" />
                  <span>Geen technische kennis nodig</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#f99830]" />
                  <span>Direct inzicht</span>
                </div>
              </div>

              <button
                onClick={() => setStep('questions')}
                className="inline-flex items-center gap-2 bg-[#303994] text-white px-8 py-4 rounded-full font-medium hover:bg-[#303994]/90 transition-colors shadow-lg shadow-[#303994]/20"
              >
                Start de scan
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-12 shadow-xl shadow-zinc-200/50"
            >
              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-zinc-500 mb-4">
                  <span>Vraag {currentQuestionIndex + 1} van {questions.length}</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% voltooid</span>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#f99830]"
                    initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#303994] mb-8">
                {questions[currentQuestionIndex].title}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((option) => {
                  const isSelected = questions[currentQuestionIndex].type === 'single'
                    ? answers[questions[currentQuestionIndex].id] === option
                    : (answers[questions[currentQuestionIndex].id] as string[] || []).includes(option);

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                        isSelected
                          ? 'border-[#f99830] bg-[#f99830]/5 text-[#303994]'
                          : 'border-zinc-200 hover:border-[#f99830]/50 text-zinc-700 hover:bg-zinc-50'
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-[#f99830] bg-[#f99830]' : 'border-zinc-300 group-hover:border-[#f99830]/50'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {questions[currentQuestionIndex].type === 'multiple' && (
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={!(answers[questions[currentQuestionIndex].id] as string[])?.length}
                    className="inline-flex items-center gap-2 bg-[#303994] text-white px-6 py-3 rounded-full font-medium hover:bg-[#303994]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Volgende
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f99830]/20 text-[#f99830] mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#303994] mb-4">
                  Uw grootste AI-kansen
                </h2>
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                  Op basis van uw antwoorden zien we verschillende concrete mogelijkheden waar AI direct waarde kan toevoegen aan uw organisatie.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#303994] mb-3">Document- en kennisautomatisering</h3>
                  <p className="text-zinc-600">AI kan helpen bij het automatisch samenvatten van documenten, rapportages en interne kennis.</p>
                </div>
                
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#303994] mb-3">Slimme verwerking van communicatie</h3>
                  <p className="text-zinc-600">AI kan e-mails en klantvragen analyseren, categoriseren en deels automatisch beantwoorden.</p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#303994] mb-3">Automatisering van repetitieve taken</h3>
                  <p className="text-zinc-600">Taken zoals rapportages, administratieve verwerking en analyses kunnen deels geautomatiseerd worden.</p>
                </div>
              </div>

              <div className="bg-[#a9d6f3]/20 rounded-2xl p-6 md:p-8 flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-[#303994] shrink-0" />
                <div>
                  <h4 className="font-bold text-[#303994] mb-2">Impact</h4>
                  <p className="text-[#303994]/80">Veel organisaties met een vergelijkbaar profiel besparen 20–30% tijd op repetitieve taken door AI structureel toe te passen.</p>
                </div>
              </div>

              <div className="bg-[#303994] rounded-3xl p-8 md:p-12 text-center text-white mt-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Wilt u deze kansen vertalen naar uw organisatie?
                </h3>
                <p className="text-white mb-8 max-w-xl mx-auto">
                  Tijdens een kort en vrijblijvend gesprek verkennen we samen hoe deze kansen in uw specifieke situatie toegepast kunnen worden.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>15 minuten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Kosteloos en vrijblijvend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span>Direct inzicht</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://calendly.com/buurenai/ai-verkenning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f99830] text-white px-8 py-4 rounded-full font-medium hover:bg-[#f99830]/90 transition-colors inline-flex items-center gap-2"
                  >
                    Plan een AI-verkenning (15 min)
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={resetScan}
                    className="text-white hover:text-[#a9d6f3] px-6 py-4 font-medium transition-colors"
                  >
                    Scan opnieuw doen
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
