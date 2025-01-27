import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import Logo from './Logo';
    import { Menu, X } from 'lucide-react';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      const closeMenu = () => {
        setIsOpen(false);
      };

      return (
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Logo />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-gray-900">Servizi</button>
                  <div className="absolute left-0 -mt-8 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                    <Link to="/webita-site" className="block px-4 py-2 hover:bg-gray-100">Webita SITE</Link>
                    <Link to="/webita-social" className="block px-4 py-2 hover:bg-gray-100">Webita SOCIAL</Link>
                    <Link to="/webita-business" className="block px-4 py-2 hover:bg-gray-100">Webita BUSINESS</Link>
                    <Link to="/webita-ai" className="block px-4 py-2 hover:bg-gray-100">Webita AI</Link>
                    <Link to="/webita-app" className="block px-4 py-2 hover:bg-gray-100">Webita APP</Link>
                    <Link to="/webita-seo" className="block px-4 py-2 hover:bg-gray-100">Webita SEO</Link>
                  </div>
                </div>
                <Link to="/video" className="text-gray-700 hover:text-gray-900">Video</Link>
                <Link to="/contatti" className="text-gray-700 hover:text-gray-900">Contatti</Link>
                <Link to="/analisi-seo" className="text-gray-700 hover:text-gray-900">Analisi SEO</Link>
                <Link to="/corso-ai" className="text-gray-700 hover:text-gray-900">Corso A.I.</Link>
                <button className="text-gray-700 hover:text-gray-900">🇮🇹</button>
              </div>
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-50">
              <div className="flex justify-end p-4">
                <button onClick={closeMenu} className="text-gray-700 hover:text-gray-900">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Home</Link>
                <Link to="/webita-site" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Webita SITE</Link>
                <Link to="/webita-social" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Webita SOCIAL</Link>
                <Link to="/webita-business" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Webita BUSINESS</Link>
                <Link to="/webita-ai" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Webita AI</Link>
                <Link to="/webita-app" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Webita APP</Link>
                <Link to="/webita-seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Webita SEO</Link>
                <Link to="/video" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Video</Link>
                <Link to="/contatti" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Contatti</Link>
                <Link to="/analisi-seo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Analisi SEO</Link>
                <Link to="/corso-ai" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Corso A.I.</Link>
              </div>
            </div>
          )}
        </nav>
      );
    };

    export default Navbar;
