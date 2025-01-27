import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contatti - Webita</title>
        <meta name="description" content="Contatta Webita per consulenze di marketing digitale, sviluppo web e gestione social media. Siamo a Castellana Grotte (Bari)." />
      </Helmet>

      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contattaci</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Siamo qui per aiutarti a sviluppare la tua presenza online
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">Informazioni di contatto</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-pink-500 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Indirizzo</h3>
                  <p className="text-gray-600">Traversa Tratturo Fanelli 13/7<br />70033 Castellana Grotte (Bari)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-pink-500 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Telefono</h3>
                  <p className="text-gray-600">+39 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-pink-500 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@webita.eu</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
