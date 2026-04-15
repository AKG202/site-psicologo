import image_b74d7966a4edf705c512c46a95853efe22302754 from 'figma:asset/b74d7966a4edf705c512c46a95853efe22302754.png'
import image_ce72d527806b3b5d78dfc60d8af82410251abff9 from 'figma:asset/ce72d527806b3b5d78dfc60d8af82410251abff9.png'
import image_f6f8a8dd6c3403771f1a0334fc15e3d705439596 from 'figma:asset/f6f8a8dd6c3403771f1a0334fc15e3d705439596.png'
import image_28aa392ddaade565b1f6566f82cde15e355142cf from 'figma:asset/28aa392ddaade565b1f6566f82cde15e355142cf.png'
import image_4016437bfc703a2122f82c782345e3768b4029c3 from 'figma:asset/4016437bfc703a2122f82c782345e3768b4029c3.png'
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, Outlet } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import logoImg from './figma/Logo.png';

export function Layout() {
  const [isArtigosOpen, setIsArtigosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsArtigosOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Se não estiver na home, navegar primeiro e depois fazer scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // Se já estiver na home, apenas fazer scroll
      scrollToSection(sectionId);
    }
  };

  const openWhatsApp = () => {
    // Substitua o número pelo número de WhatsApp da clínica (formato: código do país + DDD + número)
    const phoneNumber = '5519992085365'; // Atualizado com o número correto
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80"
            >
              <img src={image_b74d7966a4edf705c512c46a95853efe22302754} alt="Logo" className="w-16 h-16" />
              <span className="font-semibold text-xl">Leandro Lonardoni</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="relative">
                <button
                  onClick={() => setIsArtigosOpen(!isArtigosOpen)}
                  className="text-gray-600 hover:text-teal-700 flex items-center gap-1"
                >
                  Artigos
                  <ChevronDown className={`w-4 h-4 transition-transform ${isArtigosOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isArtigosOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]"
                    >
                      <Link
                        to="/neurociencia"
                        className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                        onClick={() => setIsArtigosOpen(false)}
                      >
                        Neurociência
                      </Link>
                      <Link
                        to="/psicologia"
                        className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                        onClick={() => setIsArtigosOpen(false)}
                      >
                        Psicologia
                      </Link>
                      <Link
                        to="/terapia"
                        className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                        onClick={() => setIsArtigosOpen(false)}
                      >
                        Psicoterapia
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => {
                  navigateToSection('about');
                }}
                className="text-gray-600 hover:text-teal-700 cursor-pointer"
              >
                Sobre
              </button>
              <button
                onClick={() => {
                  navigateToSection('contact');
                }}
                className="text-gray-600 hover:text-teal-700 cursor-pointer"
              >
                Contato
              </button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0f766e"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg"
              >
                Agendar Consulta
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-teal-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-4">
                  {/* Artigos Dropdown Mobile */}
                  <div>
                    <button
                      onClick={() => setIsArtigosOpen(!isArtigosOpen)}
                      className="w-full text-left text-gray-600 hover:text-teal-700 flex items-center justify-between py-2"
                    >
                      Artigos
                      <ChevronDown className={`w-4 h-4 transition-transform ${isArtigosOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isArtigosOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 mt-2 overflow-hidden"
                        >
                          <Link
                            to="/neurociencia"
                            className="block py-2 text-gray-600 hover:text-teal-700"
                          >
                            Neurociência
                          </Link>
                          <Link
                            to="/psicologia"
                            className="block py-2 text-gray-600 hover:text-teal-700"
                          >
                            Psicologia
                          </Link>
                          <Link
                            to="/terapia"
                            className="block py-2 text-gray-600 hover:text-teal-700"
                          >
                            Terapia
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button
                    onClick={() => {
                      navigateToSection('about');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-gray-600 hover:text-teal-700 py-2 w-full text-left cursor-pointer"
                  >Sobre</button>
                  <button
                    onClick={() => {
                      navigateToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-gray-600 hover:text-teal-700 py-2 w-full text-left cursor-pointer"
                  >
                    Contato
                  </button>
                  <button
                    className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg"
                    onClick={() => {
                      openWhatsApp();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Agendar Consulta
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />
    </div>
  );
}