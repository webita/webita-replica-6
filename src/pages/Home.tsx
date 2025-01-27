import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, BarChart2, Layout, PenTool, Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import ClientLogosSlider from '../components/ClientLogosSlider';

const Home = () => {
  const services = [
    {
      title: "Realizzazione siti web e-commerce",
      description: "L'agenzia web realizza per te i siti ed i canali social più adatti a promuovere la tua immagine online. La nostra agenzia web realizzerà per te un sito professionale con contenuti di valore e grafiche di qualità per presentare la tua attività sul web nel modo più adatto. Per il tuo sito potrai scegliere tra diverse opzioni tra booking service ed e-commerce, attivare servizi di newsletter o la gestione del blog per creare contenuti unici e di valore, utili a far conoscere meglio i tuoi prodotti o servizi.",
      icon: Globe,
      color: 'bg-webita-pink'
    },
    {
      title: "Social Network",
      description: "Il metodo più efficace per raccontare la propria storia on line, è attraverso i social network. Ti aiuteremo a capire su quali canali social la tua attività deve presenziare, e con aggiornamenti mirati alla crescita del brand gestiremo per te non solo il profilo aziendale, ma con la nostra agenzia web struttureremo una strategia in grado di portare traffico verso i tuoi servizi, in modo da convertirlo in vendite e branding.",
      icon: Share2,
      color: 'bg-webita-yellow'
    },
    {
      title: "SEO e Pubblicità online",
      description: "L'agenzia web Webita ottimizza le pagine del tuo sito web per aumentare la visibilità sui motori di ricerca. Selezioniamo le keywords di interesse per la tua attività migliorando il posizionamento del tuo sito web. Creiamo campagne mirate sponsorizzando la tua attività su Google Ads e Facebook Ads, monitorando costantemente i risultati per proporti le strategie più efficaci.",
      icon: Search,
      color: 'bg-webita-blue'
    },
    {
      title: "Grafica",
      description: "Faremo in modo che i clienti si ricordino di te! La nostra agenzia web, attraverso il lavoro dei designers, accoglierà le tue idee trasformandole in concept innovativi, che contribuiranno a rafforzare la tua brand identity. Ideazione e creazione del logo aziendale, bigliettini da visita, brochure, locandine, depliants e tutti gli elementi grafici a supporto del marketing e della comunicazione sono solo alcuni dei servizi offerti.",
      icon: PenTool,
      color: 'bg-webita-green'
    }
  ];

  const clients = [
    {
      name: "Khoury Dulla",
      logo: "https://www.webita.eu/wp-content/uploads/2020/04/khoury-dulla.jpg",
      url: "https://khoury-dulla.ch/"
    },
    {
      name: "Renorm",
      logo: "https://www.webita.eu/wp-content/uploads/2020/08/renorm.png",
      url: "https://renorm.it"
    },
    {
      name: "Masseria Serritella",
      logo: "https://www.webita.eu/wp-content/uploads/2020/11/serritella.png",
      url: "https://masseriaserritella.it"
    },
    {
      name: "Giotta Elettrodomestici",
      logo: "https://www.webita.eu/wp-content/uploads/2022/06/giotta-elettrodomestici.png",
      url: "http://giotta-elettrodomestici.it/"
    },
    {
      name: "Occusol",
      logo: "https://www.webita.eu/wp-content/uploads/2023/05/loghi-clienti-webita-1.png",
      url: "https://occusol.org"
    },
    {
      name: "Biococco",
      logo: "https://www.webita.eu/wp-content/uploads/2020/08/biococco.png",
      url: "https://biococco.com"
    },
    {
      name: "Obesity Help",
      logo: "https://www.webita.eu/wp-content/uploads/2021/04/obesity-help.png",
      url: "https://obesityhelp.it/"
    },
    {
      name: "Errebiancheria",
      logo: "https://www.webita.eu/wp-content/uploads/2020/12/errebiancheria.png",
      url: "https://errebiancheria.it"
    },
    {
      name: "Federico Messina",
      logo: "https://www.webita.eu/wp-content/uploads/2022/06/federico-messina.png",
      url: "https://federicomessina.com"
    },
    {
      name: "Il Prof Che Ci Piace",
      logo: "https://www.webita.eu/wp-content/uploads/2022/06/ilprofchecipiace.png",
      url: "https://ilprofchecipiace.com/"
    },
    {
      name: "MC20",
      logo: "https://www.webita.eu/wp-content/uploads/2020/04/MC20.jpg",
      url: "https://www.mc20.ch/en/welcome-to-the-orthodontic-office/"
    },
    {
      name: "Gi.Ga.",
      logo: "https://www.webita.eu/wp-content/uploads/2023/05/loghi-clienti-webita.png",
      url: "https://gigaonline.it"
    },
    {
      name: "Acquerello Travel",
      logo: "https://www.webita.eu/wp-content/uploads/2023/11/Logo_Postivo_Colore.png",
      url: "https://acquerellotravel.com"
    },
    {
      name: "Sweet Puglia",
      logo: "https://www.webita.eu/wp-content/uploads/2020/04/sweet-puglia.jpg",
      url: "https://www.sweetpuglia.com/"
    },
    {
      name: "IES Apulia Eventi",
      logo: "https://www.webita.eu/wp-content/uploads/2020/04/ies.jpg",
      url: "https://iesapuliaeventi.com/"
    },
    {
      name: "Scatto Italiano",
      logo: "https://www.webita.eu/wp-content/uploads/2024/03/scattoitaliano-logo.jpg",
      url: "https://scattoitaliano.it"
    },
    {
      name: "Commixtio",
      logo: "https://www.webita.eu/wp-content/uploads/2024/03/logo-commixtio.png",
      url: "https://commixtio.it/#"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Webita - Agenzia Web Marketing e Servizi per Aziende"
        description="Webita è un'agenzia web specializzata in marketing digitale, sviluppo siti web, social media management e consulenza SEO per aziende."
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-webita-pink via-webita-yellow to-webita-blue py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl font-bold mb-6">Agenzia Web</h1>
              <h2 className="text-2xl mb-4">Web Marketing e servizi per aziende</h2>
              <p className="text-lg mb-8">
                Servizi per migliorare l'immagine della tua azienda sul web. L'Agenzia Web a Castellana Grotte (Bari) aiuta la tua azienda a sviluppare la strategia digital più adatta a vendere prodotti e servizi sul web attraverso i canali più adatti.
              </p>
              <Link to="/servizi" className="bg-white text-webita-pink px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors inline-block">
                SCOPRI I SERVIZI
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-4">
              <Link to="/webita-social" className="bg-white p-2 rounded-lg">
                <img src="https://www.webita.eu/wp-content/uploads/2021/03/webita_social.png" alt="Webita Social" className="w-full" />
              </Link>
              <Link to="/webita-blog" className="bg-white p-2 rounded-lg">
                <img src="https://www.webita.eu/wp-content/uploads/2021/03/webita_blog.png" alt="Webita Blog" className="w-full" />
              </Link>
              <Link to="/webita-site" className="bg-white p-2 rounded-lg">
                <img src="https://www.webita.eu/wp-content/uploads/2021/03/webita_site.png" alt="Webita Site" className="w-full" />
              </Link>
              <Link to="/webita-app" className="bg-white p-2 rounded-lg">
                <img src="https://www.webita.eu/wp-content/uploads/2021/03/webita_app.png" alt="Webita App" className="w-full" />
              </Link>
              <Link to="/webita-business" className="bg-white p-2 rounded-lg">
                <img src="https://www.webita.eu/wp-content/uploads/2021/03/Webita_business.png" alt="Webita Business" className="w-full" />
              </Link>
              <Link to="/webita-ai" className="bg-white p-2 rounded-lg">
                <img src="https://www.webita.eu/wp-content/uploads/2024/07/SEO-3.png" alt="Webita AI" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "I buoni marketer realizzano che il marketing non è una spesa ma un investimento."
            </p>
            <footer className="text-gray-600">
              Seth Godin - Scrittore e imprenditore statunitense
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">I Nostri Clienti</h2>
          <ClientLogosSlider clients={clients} />
        </div>
      </div>
    </div>
  );
};

export default Home;
