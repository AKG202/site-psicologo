import { Brain, MessageCircle, Calendar, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = '5519992085365';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center">
            <img src="/images/Logo_Completa.png" alt="Logo" className="mx-auto mb-6" />

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Aqui, sua experiência ganha espaço
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Espaço de escuta, acolhimento e transformação através da psicoterapia.
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
                className="border-2 border-gray-300 px-8 py-4 rounded-lg"
              >
                Ligue: (19) 99208-5365
              </button>
            </div>
          </div>

          {/* VÍDEO */}
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
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-teal-50 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Artigos</h2>
          <p className="text-gray-600">Explore conteúdos sobre mente e comportamento</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/neurociencia">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <Brain className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">Neurociência</h3>
            </div>
          </Link>

          <Link to="/psicologia">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <Heart className="mb-4 text-rose-600" />
              <h3 className="text-xl font-semibold">Psicologia</h3>
            </div>
          </Link>

          <Link to="/terapia">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <MessageCircle className="mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold">Terapia</h3>
            </div>
          </Link>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre o Leandro Lonardoni
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Psicólogo com abordagem em Gestalt-Terapia, focado na experiência presente e transformação pessoal.
            </p>

            <p className="text-lg text-gray-600">
              Integra corpo, emoção e expressão criativa como caminhos terapêuticos.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl relative">
            <img
              src="/images/foto.jpeg"
              alt="Foto"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow">
              <div className="flex items-center gap-2">
                <Award className="text-teal-600" />
                <span>CRP: 06/231956</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* IMAGEM FINAL */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/ImagemNova.jpeg"
            alt="Imagem"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p>© 2026 Leandro Lonardoni</p>
        <p>CRP: 06/231956</p>
      </footer>
    </>
  );
}