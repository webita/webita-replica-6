import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { Layout, ShoppingCart, Code } from 'lucide-react';
import ServiceFeature from '../components/ServiceFeature';

const WebitaSite = () => {
  return (
    <>
      <Helmet>
        <title>Webita SITE - Realizzazione Siti Web Professionali</title>
        <meta name="description" content="Realizziamo siti web professionali e piattaforme e-commerce. Soluzioni web personalizzate per la tua azienda con tecnologie moderne e sicure." />
      </Helmet>

      <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl font-bold mb-6">Webita SITE</h1>
              <h2 className="text-2xl mb-4">Realizzazione siti web</h2>
              <p className="text-lg mb-8">
                Da 149€ al mese* - La realizzazione di siti web è il punto forte di Webita. Con il pacchetto Webita SITE realizzeremo il tuo sito web aziendale professionale e piattaforme e-commerce per la vendita dei tuoi prodotti online.
              </p>
              <button className="btn-secondary">Dettagli Del Servizio</button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Webita SITE"
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
              icon={Layout}
              title="Creazione del tuo sito web"
              description="Webita realizzerà il sito web per la tua azienda con il dominio scelto. La realizzazione siti web previene attraverso le più attuali tecnologie, auto aggiornate, moderne e sicure."
              color="bg-pink-500"
            />
            <ServiceFeature
              icon={ShoppingCart}
              title="Realizzazione siti web E-commerce"
              description="La vendita di prodotti e servizi su internet permette di raggiungere un target di persone molto più ampio rispetto al bacino dei tuoi potenziali clienti."
              color="bg-purple-500"
            />
            <ServiceFeature
              icon={Code}
              title="Import/export dati con API"
              description="Hai bisogno di collegare il tuo gestionale per importare i prodotti sul nuovo e-commerce? Vuoi esportare i dati dei tuoi clienti su un tuo gestionale/CRM?"
              color="bg-blue-500"
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

export default WebitaSite;
