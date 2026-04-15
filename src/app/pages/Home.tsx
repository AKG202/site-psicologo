import { Brain, MessageCircle, Calendar, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = '5519992085365';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <img src="/images/Logo_Completa.png" alt="Logo" />
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
              Aqui, sua experiência ganha espaço
            </h1>

            <p className="text-xl text-gray-600 mb-8 text-center">
              Aqui é um espaço de escuta e acolhimento. Um lugar onde você pode falar da sua história, das suas dores, dúvidas e sentimentos, sendo recebido com respeito e sem julgamentos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2"
              >
                Agendar Consulta
                <Calendar className="w-5 h-5" />
              </motion.button>

              <button
                onClick={scrollToContact}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg"
              >
                Ligue: (19) 99208-5365
              </button>
            </div>
          </div>

          {/* 🎬 VÍDEO CORRIGIDO */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/videos/VideoNovo.mp4"
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-teal-50 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Artigos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/neurociencia">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Brain />
              <h3>Neurociência</h3>
            </div>
          </Link>

          <Link to="/psicologia">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Heart />
              <h3>Psicologia</h3>
            </div>
          </Link>

          <Link to="/terapia">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MessageCircle />
              <h3>Terapia</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre o Leandro Lonardoni
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Psicólogo com foco na abordagem Gestalt-Terapia, integrando corpo, emoção e experiência.
            </p>
          </div>

          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative">
            <ImageWithFallback
              src="/images/foto.jpeg"
              alt="Foto"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="font-semibold">CRP: 06/231956</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Imagem final */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/images/ImagemNova.jpeg"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p>© 2026 Leandro Lonardoni</p>
      </footer>
    </>
  );
}