import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const WebitaAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Webita AI: Consulente per intelligenza artificiale</title>
        <meta 
          name="description" 
          content="Servizi di consulenza per intelligenza artificiale, AI generativa e automazioni." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Webita AI: Consulente per intelligenza artificiale</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-webita-yellow mb-4">Webita AI</h2>
              <p className="text-gray-600 mb-4">
                Il nostro servizio di tecnologia AI permette di automatizzare e migliorare la comunicazione con i vostri clienti.
              </p>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-2">Conversazione Naturale</h3>
                <p className="text-gray-600">
                  I nostri chatbot con intelligenza artificiale utilizzano algoritmi di elaborazione del linguaggio naturale (NLP).
                </p>
              </div>
              <div className="bg-pink-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Soluzioni personalizzate</h3>
                <p className="text-gray-600">
                  Grazie alle tecnologie di automazione con intelligenza artificiale possiamo fornire soluzioni personalizzate.
                </p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-yellow-600 mb-2">Genera articoli informativi o news</h3>
                <p className="text-gray-600">
                  La tecnologia di generazione di testo permette di automatizzare la creazione di contenuti.
                </p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Aggiorna costantemente i follower</h3>
                <p className="text-gray-600">
                  La creazione di testi per articoli, descrizioni, prodotti e post social permette di automatizzare e mantenere costante la comunicazione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebitaAI;
