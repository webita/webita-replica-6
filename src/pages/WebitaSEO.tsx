import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const WebitaSEO = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Webita SEO: consulente SEO</title>
        <meta 
          name="description" 
          content="Servizi di Consulenza SEO Professionale per massimizzare la visibilità online della tua azienda." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Webita SEO: consulente SEO</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-webita-yellow mb-4">Servizio di Consulenza SEO Professionale</h2>
              <p className="text-gray-600 mb-4">
                Massimizza la Visibilità Online della Tua Azienda
              </p>
              <p className="text-gray-600">
                Se desideri posizionare la tua azienda in cima ai risultati di ricerca e aumentare la visibilità online, il consulente SEO è ciò di cui hai bisogno.
              </p>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-pink-100 p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Ciao! Mi chiamo Giorgio Sanna</h2>
              <p className="text-gray-600">
                Sono un esperto nel campo della SEO, SEM e SMM, con una forte specializzazione nelle piattaforme di Google e Facebook.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Analisi Approfondita delle Parole Chiave</h3>
                <p className="text-gray-600">
                  Conduciamo un'analisi dettagliata delle parole chiave per identificare le migliori opportunità di posizionamento.
                </p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-600 mb-2">Ottimizzazione On-Page e Off-Page</h3>
                <p className="text-gray-600">
                  La nostra consulenza comprende un'ottimizzazione approfondita sia on-page che off-page.
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-2">Creazione di Contenuti SEO-Friendly</h3>
                <p className="text-gray-600">
                  I contenuti sono il cuore di una solida strategia SEO.
                </p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-2">Monitoraggio e Reportistica Dettagliata</h3>
                <p className="text-gray-600">
                  Ti forniamo report periodici dettagliati sull'andamento delle tue performance SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebitaSEO;
