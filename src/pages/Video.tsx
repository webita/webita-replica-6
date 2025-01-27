import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Youtube } from 'lucide-react';

const Video = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Webita - Video Marketing e Tutorial</title>
        <meta 
          name="description" 
          content="Scopri i nostri video tutorial su marketing digitale, social media, intelligenza artificiale e sviluppo web. Guide pratiche e strategie per ottimizzare la tua presenza online usando le più moderne tecnologie." 
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Youtube className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Video Tutorial</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Scopri i nostri video tutorial su marketing digitale, social media, intelligenza artificiale e sviluppo web. 
              Guide pratiche per sfruttare al meglio le nuove tecnologie.
            </p>
          </div>
        </div>
      </div>

      {/* YouTube Channel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=UUS4KyFMkegiGfgF6z1f-q6A"
            title="Webita YouTube Channel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[800px] rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Ti piacciono i nostri contenuti? Iscriviti al canale per non perdere i prossimi video!
          </p>
          <a
            href="https://www.youtube.com/@webita-?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Youtube className="w-5 h-5" />
            Iscriviti al Canale
          </a>
        </div>

        {/* Featured Playlists */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUS4KyFMkegiGfgF6z1f-q6A"
                title="Marketing Digitale"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[200px]"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Marketing Digitale</h3>
              <p className="text-gray-600">Strategie e consigli per il tuo business online</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUS4KyFMkegiGfgF6z1f-q6A"
                title="Social Media Marketing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[200px]"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Social Media Marketing</h3>
              <p className="text-gray-600">Guide e tutorial sui social network</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUS4KyFMkegiGfgF6z1f-q6A"
                title="Intelligenza Artificiale"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[200px]"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Intelligenza Artificiale</h3>
              <p className="text-gray-600">Tutorial e applicazioni pratiche dell'AI nel business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
