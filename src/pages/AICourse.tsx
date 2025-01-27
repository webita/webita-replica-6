import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmailGate from '../components/EmailGate';

const AICourse = () => {
  const videoUrl = 'https://www.webita.eu/wp-content/uploads/2024/07/Mini%20corso%20gratuito%20su%20intelligenza%20artificiale.mp4';

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Corso su Intelligenza Artificiale Gratis - Webita</title>
        <meta 
          name="description" 
          content="Mini corso su intelligenza artificiale gratis, introduzione, esempi pratici, utilizzo delle piattaforme. Lascia la tua mail e goditi 25 minuti di video." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Corso su intelligenza artificiale gratis
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Inserisci i tuoi dati nel form qui sotto per poter visionare il video <strong>corso sull'intelligenza artificiale GRATUITO!</strong>
            </p>
            <EmailGate videoUrl={videoUrl} />
          </div>

          {/* Right Column */}
          <div className="bg-webita-pink text-white p-8 rounded-lg">
            <div className="flex items-start mb-6">
              <img 
                src="https://www.webita.eu/wp-content/uploads/2023/05/Progetto-senza-titolo-6-150x150.png"
                alt="Giorgio Sanna"
                className="w-32 h-32 rounded-full float-right ml-4"
              />
              <div>
                <p className="mb-4">
                  Ciao! Mi chiamo <strong>Giorgio Sanna</strong> e se sei arrivato su questa pagina stai cercando informazioni e <strong>corsi sull'intelligenza artificiale</strong>... Direi che sei nel posto giusto.
                </p>
                <p className="mb-4">
                  Qui puoi accedere ad un <strong>video corso gratuito della durata di circa 25 minuti</strong> dove ti spiegherò in breve tempo nozioni e pratica su come usare l'intelligenza artificiale al meglio.
                </p>
                <p className="mb-4">
                  Di preciso nel video corso potrai avere una panoramica della tecnologia che c'è "dietro" all'intelligenza artificiale, la struttura, le <strong>piattaforme più diffuse</strong>, la creazione dei contenuti e segnalazioni pratiche di piattaforme per unire automazione e intelligenza artificiale per creare progetti o servizi.
                </p>
                <p>
                  Se ti piace l'idea lascia qui la tua mail, nome e cognome, (non voglio venderti nulla mi servirà solo per restare in contatto con te, una volta a settimana riceverai una newsletter) e <strong>fammi sapere sui social che ne pensi</strong> del video condividendolo o seguendomi. Il tuo contributo è importante!
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Link alle piattaforme menzionate nel video:</h2>
              <ul className="space-y-2">
                <li><strong>ChatGPT</strong>: <a href="https://openai.com/chatgpt/" className="text-white hover:underline">https://openai.com/chatgpt/</a></li>
                <li><strong>OpenAi API</strong>: <a href="https://platform.openai.com/login?launch" className="text-white hover:underline">https://platform.openai.com/login?launch</a></li>
                <li><strong>LLama 3.1</strong>: <a href="https://www.meta.ai/" className="text-white hover:underline">https://www.meta.ai/</a></li>
                <li><strong>Claude 3.5</strong>: <a href="https://claude.ai/" className="text-white hover:underline">https://claude.ai/</a></li>
                <li><strong>n8n</strong>: <a href="https://n8n.io" className="text-white hover:underline">https://n8n.io</a></li>
                <li><strong>Zapier</strong>: <a href="https://zapier.com" className="text-white hover:underline">https://zapier.com</a></li>
                <li><strong>Make</strong>: <a href="https://www.make.com/en" className="text-white hover:underline">https://www.make.com/en</a></li>
                <li><strong>Heygen</strong>: <a href="https://www.heygen.com" className="text-white hover:underline">https://www.heygen.com</a></li>
                <li><strong>Pictory</strong>: <a href="https://pictory.ai" className="text-white hover:underline">https://pictory.ai</a></li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Richiedi una consulenza sull'intelligenza artificiale</h2>
              <p className="mb-4">
                Hai bisogno di aiuto con un progetto? La tua attività credi possa migliorare <strong>sfruttando le automazioni ed A.I.</strong>? 
                Clicca qui sotto per conoscere il nostro servizio <em>Webita Ai</em> e compila il form nella pagina per chiederci aiuto e ricevere un preventivo.
              </p>
              <a 
                href="https://www.webita.eu/webita-ai-consulente-per-intelligenza-artificiale/"
                className="inline-block bg-white text-webita-pink px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold"
              >
                Consulenza Webita Ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICourse;
