import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, Outlet } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function Layout() {
  const [isArtigosOpen, setIsArtigosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsArtigosOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5519992085365';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-3"
            >
              <img
                src="/images/Logo_Completa.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-semibold text-lg">
                Leandro Lonardoni
              </span>
            </Link>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center gap-8">

              {/* DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setIsArtigosOpen(!isArtigosOpen)}
                  className="text-gray-600 hover:text-teal-700 flex items-center gap-1"
                >
                  Artigos
                  <ChevronDown className={`w-4 h-4 ${isArtigosOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isArtigosOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border py-2 min-w-[200px]"
                    >
                      <Link to="/neurociencia" className="block px-4 py-2 hover:bg-teal-50">Neurociência</Link>
                      <Link to="/psicologia" className="block px-4 py-2 hover:bg-teal-50">Psicologia</Link>
                      <Link to="/terapia" className="block px-4 py-2 hover:bg-teal-50">Terapia</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => navigateToSection('about')} className="text-gray-600 hover:text-teal-700">
                Sobre
              </button>

              <button onClick={() => navigateToSection('contact')} className="text-gray-600 hover:text-teal-700">
                Contato
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={openWhatsApp}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg"
              >
                Agendar
              </motion.button>

            </div>

            {/* MOBILE BUTTON */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4"
              >
                <div className="flex flex-col gap-4">

                  <button onClick={() => navigateToSection('about')}>Sobre</button>
                  <button onClick={() => navigateToSection('contact')}>Contato</button>

                  <button
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg"
                    onClick={openWhatsApp}
                  >
                    Agendar
                  </button>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>

      {/* CONTEÚDO */}
      <Outlet />
    </div>
  );
}