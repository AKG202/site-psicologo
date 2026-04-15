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

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/images/Logo_Completa.png" className="mx-auto mb-6" />

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
              Aqui, sua experiência ganha espaço
            </h1>

            <p className="text-xl text-gray-600 mb-8 text-center">
              Aqui é um espaço de escuta e acolhimento. Um lugar onde você pode falar da sua história,
              das suas dores, dúvidas e sentimentos, sendo recebido com respeito e sem julgamentos.
              A psicoterapia é um convite para olhar para si e ampliar sua forma de ser no mundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:bg-teal-700"
              >
                Agendar Consulta
                <Calendar />
              </motion.button>

              <button
                onClick={scrollToContact}
                className="border-2 border-gray-300 px-8 py-4 rounded-lg hover:border-teal-600"
              >
                Ligue: (19) 99208-5365
              </button>
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              src="/videos/VideoNovo.mp4"
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gradient-to-b from-teal-50 to-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre Devaneios e Estudos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidar da saúde mental também envolve reflexão e compreensão sobre o ser humano.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[{
            icon: <Brain className="text-teal-600" />,
            title: "Neurociência",
            desc: "Transforme padrões de pensamento negativos e desenvolva estratégias saudáveis."
          },{
            icon: <Heart className="text-rose-600" />,
            title: "Psicologia",
            desc: "Fortaleça relacionamentos e aprofunde conexões emocionais."
          },{
            icon: <MessageCircle className="text-blue-600" />,
            title: "Terapia",
            desc: "Cuidado compassivo para recuperar segurança e equilíbrio."
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Sobre o Leandro Lonardoni
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Psicólogo com formação em Gestalt-Terapia, integrando corpo, emoção e experiência.
            </p>

            <p className="text-lg text-gray-600">
              A terapia valoriza o presente como caminho de transformação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden shadow-xl relative"
          >
            <img
              src="/images/foto.jpeg"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow">
              <div className="flex items-center gap-2">
                <Award className="text-teal-600" />
                <span>CRP: 06/231956</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/ImagemNova.jpeg" className="w-full h-auto" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p>© 2026 Leandro Lonardoni</p>
      </footer>
    </>
  );
}