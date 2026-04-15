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

          <div>
            <img src="/images/Logo_Completa.png" className="mb-6 w-72" />

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Aqui, sua experiência ganha espaço
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Um espaço de escuta, acolhimento e transformação.
              Psicoterapia com presença, ética e profundidade.
            </p>

            <div className="flex gap-4">
              <button
                onClick={openWhatsApp}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-teal-700 transition"
              >
                Agendar pelo WhatsApp
              </button>

              <button className="border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-teal-600 transition">
                Saiba mais
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/videos/VideoNovo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-teal-600">+100</h3>
            <p className="text-gray-600">Atendimentos realizados</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-teal-600">Gestalt</h3>
            <p className="text-gray-600">Abordagem terapêutica</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-teal-600">100%</h3>
            <p className="text-gray-600">Confidencialidade</p>
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre Devaneios e Estudos
          </h2>
          <p className="text-gray-600 text-lg">
            Reflexões e conteúdos sobre mente e comportamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[{
            icon: <Brain className="text-teal-600" />,
            title: "Neurociência"
          },{
            icon: <Heart className="text-rose-600" />,
            title: "Psicologia"
          },{
            icon: <MessageCircle className="text-blue-600" />,
            title: "Terapia"
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre o Leandro Lonardoni
            </h2>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Sou psicólogo clínico com atuação baseada na Gestalt-Terapia,
              integrando corpo, emoção e experiência no processo terapêutico.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Meu trabalho busca oferecer um espaço seguro e autêntico,
              onde cada pessoa possa se reconhecer, se escutar e se transformar.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
          </div>

        </div>
      </section>

      {/* IMAGEM */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/ImagemNova.jpeg" />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Dê o primeiro passo para cuidar de você
        </h2>

        <p className="mb-6 text-teal-100">
          Agende sua sessão e comece seu processo terapêutico
        </p>

        <button
          onClick={openWhatsApp}
          className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold"
        >
          Agendar Consulta
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p>© 2026 Leandro Lonardoni</p>
        <p>CRP: 06/231956</p>
      </footer>
    </>
  );
}