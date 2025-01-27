import React, { useState } from 'react';
import ReactPlayer from 'react-player';

interface EmailGateProps {
  videoUrl: string;
}

const EmailGate: React.FC<EmailGateProps> = ({ videoUrl }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      setError('Per favore compila tutti i campi');
      return;
    }

    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      setHasAccess(true);
      setStatus('success');
      setError('');
    } catch (err) {
      setStatus('error');
      setError('Si è verificato un errore. Riprova più tardi.');
    }
  };

  if (hasAccess) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="auto"
          controls
          playing
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Accedi al Video Corso</h2>
      <p className="text-gray-600 mb-6 text-center">
        Inserisci il tuo nome e la tua email per accedere al video corso gratuito sull'intelligenza artificiale
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome e Cognome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-webita-pink focus:ring focus:ring-webita-pink focus:ring-opacity-50"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-webita-pink focus:ring focus:ring-webita-pink focus:ring-opacity-50"
            required
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-webita-pink focus:ring-webita-pink"
            required
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
            Accetto la <a href="/privacy-policy" className="text-webita-pink hover:text-webita-pink/80">privacy policy</a> e l'iscrizione alla newsletter
          </label>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-webita-pink text-white px-4 py-2 rounded-md hover:bg-webita-pink/90 focus:outline-none focus:ring-2 focus:ring-webita-pink focus:ring-offset-2"
        >
          Guarda il Video
        </button>

        {status === 'success' && (
          <p className="text-green-500 mt-4">Accesso al video corso concesso!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4">Si è verificato un errore. Riprova più tardi.</p>
        )}
      </form>
    </div>
  );
};

export default EmailGate;
