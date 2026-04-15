import { Brain, MessageCircle, Calendar, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = '5519992085365';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img src="/images/Logo_Completa.png" className="mb-6 w-72" />

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Aqui, sua experiência ganha espaço
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aqui é um espaço de escuta e acolhimento. Um lugar onde você pode falar da sua história,
              das suas dores, dúvidas e sentimentos, sendo recebido com respeito e sem julgamentos.
              A psicoterapia, aqui, é um convite para olhar para si.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={openWhatsApp}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-teal-700 flex items-center gap-2"
              >
                Agendar Consulta
                <Calendar />
              </motion.button>

              <button className="border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-teal-600">
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <video
              src="/videos/VideoNovo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>

        </div>
      </section>

      {/* CARDS */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre Devaneios e Estudos</h2>
          <p className="text-gray-600 text-lg">
            Reflexões e conteúdos sobre mente e comportamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">

          {[{
            icon: <Brain />,
            title: "Neurociência",
            color: "teal"
          },{
            icon: <Heart />,
            title: "Psicologia",
            color: "rose"
          },{
            icon: <MessageCircle />,
            title: "Terapia",
            color: "blue"
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition"
            >
              <div className="mb-6 text-teal-600">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Sobre o Leandro Lonardoni
            </h2>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Psicólogo com atuação clínica baseada na Gestalt-Terapia.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Integra corpo, emoção e expressão como caminhos terapêuticos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/foto.jpeg"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white p-5 rounded-xl shadow-lg flex items-center gap-3">
              <Award className="text-teal-600" />
              <div>
                <p className="font-semibold">CRP: 06/231956</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/ImagemNova.jpeg" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p>© 2026 Leandro Lonardoni</p>
      </footer>
    </>
  );
}