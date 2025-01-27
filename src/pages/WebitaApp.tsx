import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const WebitaApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Webita APP: creazione applicazioni Android e iOS Apple</title>
        <meta 
          name="description" 
          content="Con Webita APP puoi pubblicare l'applicazione della tua attività sugli store di Android Google Play e iOS Appstore di Apple." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Webita APP: creazione applicazioni Android e iOS Apple</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-webita-pink mb-4">Da 900€ *</h2>
              <p className="text-gray-600 mb-4">
                Con Webita APP potrai pubblicare l'applicazione della tua attività sugli store di Android Google Play e iOS Appstore di Apple.
              </p>
              <button className="btn-primary">Dettagli Del Pacchetto</button>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-pink-100 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Contatti e notifiche push</h3>
              <p className="text-gray-600">
                Porta rimanere in contatto con i tuoi utenti grazie all'attivazione di notifiche push su tutti i contatti.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-2">E-commerce e servizi dedicati</h3>
                <p className="text-gray-600">
                  Con Webita App potrai integrare la vendita dei tuoi prodotti collegandoti a piattaforme di e-commerce già esistenti.
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-2">Blog aziendale e RSS</h3>
                <p className="text-gray-600">
                  Possiedi già una piattaforma di blogging online? Con Webita App potrai integrare i tuoi articoli in un'applicazione.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          * I prezzi si intendono di base, sono variabili a seconda dei servizi e delle funzionalità richieste dal cliente.
        </p>
      </div>
    </div>
  );
};

export default WebitaApp;
