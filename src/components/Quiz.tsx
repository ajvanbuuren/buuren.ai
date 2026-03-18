import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const questions = [
  {
    question: "Hoeveel tijd besteedt uw team wekelijks aan repetitieve, administratieve taken?",
    options: [
      { text: "Minder dan 5 uur", score: 1 },
      { text: "5 tot 15 uur", score: 2 },
      { text: "Meer dan 15 uur", score: 3 }
    ]
  },
  {
    question: "Hoe gaat u momenteel om met grote hoeveelheden data of documenten?",
    options: [
      { text: "Alles wordt handmatig gelezen en verwerkt", score: 3 },
      { text: "We gebruiken wat standaard software, maar veel handwerk", score: 2 },
      { text: "We hebben al geautomatiseerde systemen hiervoor", score: 1 }
    ]
  },
  {
    question: "Heeft uw organisatie al geëxperimenteerd met AI (zoals ChatGPT)?",
    options: [
      { text: "Nee, nog helemaal niet", score: 3 },
      { text: "Ja, individuele medewerkers proberen wel eens wat", score: 2 },
      { text: "Ja, we hebben een duidelijke strategie en richtlijnen", score: 1 }
    ]
  },
  {
    question: "Wat is de grootste drempel om AI te implementeren?",
    options: [
      { text: "Gebrek aan tijd en interne kennis", score: 3 },
      { text: "Onduidelijkheid over de kosten en ROI", score: 2 },
      { text: "We weten niet waar we moeten beginnen", score: 3 }
    ]
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  let resultTitle = "";
  let resultText = "";

  if (totalScore >= 10) {
    resultTitle = "Enorme Potentie voor AI";
    resultText = "Uw organisatie verliest momenteel veel tijd aan taken die AI perfect kan overnemen. Een AI-verkenning zal u direct inzicht geven in enorme tijd- en kostenbesparingen.";
  } else if (totalScore >= 6) {
    resultTitle = "Klaar voor de Volgende Stap";
    resultText = "U bent goed op weg, maar er zijn nog aanzienlijke efficiëntieslagen te maken. AI kan u helpen om van losse experimenten naar een structurele, tijdbesparende aanpak te gaan.";
  } else {
    resultTitle = "Goed Bezig!";
    resultText = "Uw organisatie heeft de basis al goed op orde. AI kan u helpen om processen verder te finetunen en u een concurrentievoordeel te geven.";
  }

  return (
    <section className="py-24 relative overflow-hidden bg-brand-blue-dark text-white">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-serif text-white">
            Is uw organisatie klaar voor AI?
          </h2>
          <p className="text-brand-blue-light font-sans text-lg">
            Doe de snelle test (1 minuut) en ontdek uw potentieel.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-black relative min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4 text-sm font-medium text-zinc-500 font-sans">
                    <span>Vraag {currentQuestion + 1} van {questions.length}</span>
                    <span>{Math.round(((currentQuestion) / questions.length) * 100)}% voltooid</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-orange h-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-8 font-serif text-brand-blue-dark">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 rounded-xl border border-zinc-200 hover:border-brand-orange hover:bg-brand-orange/5 transition-all duration-200 font-sans text-zinc-700 hover:text-black flex items-center justify-between group"
                    >
                      <span>{option.text}</span>
                      <ArrowRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-blue-dark" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif text-brand-blue-dark">
                  {resultTitle}
                </h3>
                <p className="text-zinc-600 mb-8 font-sans text-lg leading-relaxed">
                  {resultText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://calendly.com/buurenai/ai-verkenning" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-blue-dark text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-blue-dark/90 transition-all font-sans"
                  >
                    Plan een gratis verkenning
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="px-8 py-4 rounded-lg font-medium border border-zinc-200 hover:bg-zinc-50 transition-all font-sans text-zinc-600 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Opnieuw doen
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
