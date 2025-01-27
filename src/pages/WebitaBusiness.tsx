import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { BarChart2, Target, Globe, PenTool } from 'lucide-react';
import ServiceFeature from '../components/ServiceFeature';

const WebitaBusiness = () => {
  return (
    <>
      <Helmet>
        <title>Webita BUSINESS - Consulenza di Marketing per Aziende</title>
        <meta name="description" content="Consulenza di marketing a 360 gradi per la tua attività. Strategie personalizzate, analisi di mercato e soluzioni di marketing integrate." />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl font-bold mb-6">Webita BUSINESS</h1>
              <h2 className="text-2xl mb-4">Consulenza di marketing</h2>
              <p className="text-lg mb-8">
                Soluzioni su misura - Con Webita BUSINESS avrai accesso ad una serie di servizi rivolti alla promozione ed all'internazionalizzazione della tua attività.
              </p>
              <button className="btn-secondary">Scopri i Dettagli Del Pacchetto</button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Webita BUSINESS"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ServiceFeature
              icon={Target}
              title="Pubblicità su Google Ads"
              description="Attiveremo per te delle campagne pubblicitarie su Google Search con annunci testuali e grafici con target specifici."
              color="bg-blue-500"
            />
            <ServiceFeature
              icon={Globe}
              title="Traduzioni e localizzazioni"
              description="Potrai usufruire di traduttori professionisti che localizzeranno per te i testi del sito e di qualsiasi altro materiale."
              color="bg-cyan-500"
            />
            <ServiceFeature
              icon={PenTool}
              title="Realizzazioni grafiche"
              description="Il tuo bigliettino da visita nel mondo è la nostra priorità ed i nostri designer ti aiuteranno a farti notare."
              color="bg-purple-500"
            />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebitaBusiness;
