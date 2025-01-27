import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { Facebook, Video, PenTool } from 'lucide-react';
import ServiceFeature from '../components/ServiceFeature';

const WebitaSocial = () => {
  return (
    <>
      <Helmet>
        <title>Webita SOCIAL - Gestione Social Network per Aziende</title>
        <meta name="description" content="Gestione professionale dei social network aziendali. Strategia social media, creazione contenuti, advertising e community management." />
      </Helmet>

      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl font-bold mb-6">Webita SOCIAL</h1>
              <h2 className="text-2xl mb-4">La gestione dei social network per aziende</h2>
              <p className="text-lg mb-8">
                Da 329€ al mese* - Webita SOCIAL è il pacchetto che permette alle aziende ed alle attività di delegare la propria immagine social a professionisti del web marketing.
              </p>
              <button className="btn-secondary">Dettagli Del Servizio</button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80"
                alt="Webita SOCIAL"
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
              icon={Facebook}
              title="Creazione/Gestione pagine social"
              description="I nostri professionisti creeranno o gestiranno per te i tuoi canali social Facebook, Instagram, Twitter o LinkedIn."
              color="bg-yellow-500"
            />
            <ServiceFeature
              icon={Video}
              title="TikTok, YouTube e Instagram con i video"
              description="I video sono la forma più moderna ed immediata di comunicazione sui social. Hai pensato di poterti creare per apparire su TikTok, Instagram o YouTube?"
              color="bg-pink-500"
            />
            <ServiceFeature
              icon={PenTool}
              title="Realizzazioni Grafiche"
              description="Avrai a tua disposizione grafici professionisti che supporteranno creativamente il tuo canale realizzando grafiche professionali."
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

export default WebitaSocial;
