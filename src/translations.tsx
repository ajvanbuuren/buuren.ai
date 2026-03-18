import React, { createContext, useContext, ReactNode } from 'react';

export const translations = {
  nav: { results: "Resultaat", examples: "Voorbeelden", about: "Over ons", contact: "Contact", book: "Plan verkenning" },
  hero: { badge: "Klaar om AI om te zetten in echte waarde?", title1: "Iedereen praat over AI.", title2: "Maar wat betekent het voor ", title3: "úw organisatie?", desc: "U hoort de beloftes, maar mist de tijd en interne kennis om het concreet te maken. Ontdek in 15 minuten waar voor uw bedrijf de échte kansen liggen. Geen technische ruis, alleen strategische helderheid.", cta: "Plan een gratis AI-verkenning (15 min)" },
  social: { title: "Onafhankelijk advies over de beste AI-modellen" },
  target: { title: "Klinkt dit bekend?", subtitle: "Veel MKB-organisaties worstelen met dezelfde vragen rondom de adoptie van AI.", c1: "U ziet AI overal, maar weet niet waar u moet beginnen.", c2: "Uw team experimenteert met tools, maar een echte strategie ontbreekt.", c3: "Waardevolle tijd gaat verloren aan repetitief, administratief werk.", c4: "U wilt voorkomen dat u achterloopt op concurrenten die wél innoveren." },
  value: { title: "Van onzekerheid naar een helder actieplan.", subtitle: "Wat u direct wint door met ons in gesprek te gaan:", t1: "Krijg direct helderheid", d1: "Ontdek precies waar AI in uw specifieke processen waarde kan toevoegen en direct tijd kan besparen.", t2: "Weet wat u moet prioriteren", d2: "Voorkom keuzestress. Wij laten zien met welke simpele, eerste stap u vandaag de meeste impact maakt.", t3: "Voorkom dure fouten", d3: "Geen eindeloze IT-projecten of nutteloze tools. Wij focussen op strategische keuzes die direct renderen." },
  examples: { title: "Wat kan AI concreet voor u betekenen?", subtitle: "AI hoeft niet abstract te zijn. Voor MKB-bedrijven zit de waarde vaak in zeer praktische toepassingen die direct tijd besparen.", e1: "Documenten en rapportages automatisch samenvatten.", e2: "AI-assistenten voor interne kennisdeling of klantenservice.", e3: "Repetitief administratief werk automatiseren.", e4: "Ondersteuning bij analyses, rapportages en offertes.", e5: "Grote volumes e-mails of informatie razendsnel verwerken." },
  guidance: { title: "Hoe wij uw organisatie begeleiden.", subtitle: "Wij zijn geen technische ontwikkelaars die u een tool verkopen. Wij zijn uw strategische gids in AI-adoptie, met focus op de hele organisatie.", t1: "1. Kansen identificeren", d1: "We lichten uw huidige processen door en zoeken naar de quick-wins met de hoogste ROI voor uw organisatie.", t2: "2. Strategie & Roadmap", d2: "We ontwikkelen een pragmatisch stappenplan, volledig afgestemd op uw bedrijfsdoelen, capaciteit en budget.", t3: "3. Implementatie & Adoptie", d3: "Technologie werkt pas als mensen het gebruiken. Wij begeleiden de verandering en trainen uw team op de werkvloer." },
  proof: { quote: "“De maatstaf voor intelligentie is het vermogen om te veranderen.”", highlight: "", quote2: "", sub: "Albert Einstein" },
  about: { title: "Over Buuren.AI", p1: "Wij geloven dat AI geen puur technologisch vraagstuk is. Het raakt uw hele organisatie: uw processen, uw mensen, uw strategie en uw besluitvorming.", p2: "Buuren.AI is opgericht om MKB-bedrijven te helpen door de hype heen te kijken. Wij bieden geen vage beloftes of eindeloze IT-trajecten, maar pragmatische, realistische begeleiding.", p3: "Onze focus ligt op het creëren van tastbare waarde en het meenemen van uw team in de verandering." },
  exploration: { title: "Wat gebeurt er tijdens de AI-verkenning?", subtitle: "In slechts 15 minuten weet u precies waar u staat en wat uw logische volgende stap is.", t1: "U deelt uw uitdagingen", d1: "We bespreken kort uw huidige processen, knelpunten en doelen.", t2: "Wij analyseren de potentie", d2: "We vertalen uw situatie direct naar realistische AI-toepassingen.", t3: "U ontvangt inzicht", d3: "We delen 2 tot 3 concrete kansen waar AI direct waarde kan toevoegen." },
  faq: { title: "Veelgestelde vragen", q1: "Is de AI-verkenning echt kosteloos?", a1: "Ja, de 15-minuten verkenning is volledig gratis en vrijblijvend. Het is onze manier om te ontdekken of we waarde voor u kunnen toevoegen.", q2: "Hebben we technische kennis over AI nodig?", a2: "Absoluut niet. Wij vertalen de complexe technologie naar begrijpelijke, zakelijke oplossingen. U hoeft alleen uw eigen bedrijfsprocessen te kennen.", q3: "Is dit alleen voor grote bedrijven?", a3: "Nee, juist niet. Onze aanpak is specifiek ontworpen voor het MKB. AI biedt juist voor kleinere teams enorme kansen om efficiënter te werken.", q4: "Zitten we ergens aan vast na het gesprek?", a4: "Nee. Na het gesprek heeft u helder inzicht in uw kansen. Of u daarna met ons verder gaat, of het zelf oppakt, is helemaal aan u." },
  cta: { title: "Ontdek waar uw kansen liggen.", subtitle: "Plan een korte, vrijblijvende kennismaking. U vertelt over uw bedrijf, wij delen direct 2 tot 3 concrete AI-toepassingen die voor u relevant zijn.", f1: "Slechts 15 minuten", f2: "Kosteloos & vrijblijvend", f3: "Direct inzicht", btn: "Plan kennismaking (15 min)" },
  footer: { rights: "Alle rechten voorbehouden." }
};

type LanguageContextType = {
  t: typeof translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageContext.Provider value={{ t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
