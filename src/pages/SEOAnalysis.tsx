import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, AlertCircle, CheckCircle, Clock, Globe, Smartphone, Zap } from 'lucide-react';

interface AnalysisResult {
  score: number;
  performance: {
    mobile: number;
    desktop: number;
    loadTime: string;
  };
  seo: {
    title: boolean;
    description: boolean;
    headings: boolean;
    images: boolean;
    ssl: boolean;
  };
  mobile: {
    responsive: boolean;
    viewport: boolean;
    textSize: boolean;
  };
}

const SEOAnalysis = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock result
      setResult({
        score: 85,
        performance: {
          mobile: 78,
          desktop: 92,
          loadTime: '2.3s'
        },
        seo: {
          title: true,
          description: true,
          headings: true,
          images: false,
          ssl: true
        },
        mobile: {
          responsive: true,
          viewport: true,
          textSize: false
        }
      });
    } catch (err) {
      setError('Si è verificato un errore durante l\'analisi. Riprova più tardi.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Analisi SEO Gratuita - Webita</title>
        <meta 
          name="description" 
          content="Analizza gratuitamente il tuo sito web con il nostro tool SEO. Scopri come migliorare le performance e la visibilità del tuo sito." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Analisi SEO Gratuita
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inserisci l'URL del tuo sito web per ricevere un'analisi dettagliata delle performance, 
            ottimizzazione SEO e compatibilità mobile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-12">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-webita-pink focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-webita-pink text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Analisi in corso...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Analizza
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="max-w-3xl mx-auto bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-2 mb-8">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        {result && (
          <div className="max-w-5xl mx-auto">
            {/* Overall Score */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8 text-center">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.score)}`}>
                {result.score}/100
              </div>
              <p className="text-gray-600">Punteggio complessivo</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Performance */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-6 h-6 text-webita-pink" />
                  <h2 className="text-xl font-semibold">Performance</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Mobile</span>
                      <span className={getScoreColor(result.performance.mobile)}>
                        {result.performance.mobile}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-webita-pink rounded-full h-2" 
                        style={{ width: `${result.performance.mobile}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Desktop</span>
                      <span className={getScoreColor(result.performance.desktop)}>
                        {result.performance.desktop}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-webita-pink rounded-full h-2" 
                        style={{ width: `${result.performance.desktop}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    Tempo di caricamento: {result.performance.loadTime}
                  </div>
                </div>
              </div>

              {/* SEO */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-6 h-6 text-webita-pink" />
                  <h2 className="text-xl font-semibold">SEO</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    {result.seo.title ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Meta Title ottimizzato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {result.seo.description ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Meta Description presente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {result.seo.headings ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Struttura heading corretta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {result.seo.images ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Alt text nelle immagini</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {result.seo.ssl ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Certificato SSL attivo</span>
                  </li>
                </ul>
              </div>

              {/* Mobile */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Smartphone className="w-6 h-6 text-webita-pink" />
                  <h2 className="text-xl font-semibold">Mobile</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    {result.mobile.responsive ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Design responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {result.mobile.viewport ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Viewport configurato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    {result.mobile.textSize ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span>Dimensione testo leggibile</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Vuoi un'analisi più approfondita e consigli personalizzati per migliorare il tuo sito?
              </p>
              <a 
                href="/contatti"
                className="inline-block bg-webita-pink text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Richiedi una consulenza
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SEOAnalysis;
