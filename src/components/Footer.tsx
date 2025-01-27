import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/Webita-210593926341937/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/webitamarketing/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCS4KyFMkegiGfgF6z1f-q6A" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@webita.eu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>© 2025 Webita - P.IVA: EE102810237</p>
              <Link to="/privacy-policy" className="hover:text-gray-600">Privacy policy</Link>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
