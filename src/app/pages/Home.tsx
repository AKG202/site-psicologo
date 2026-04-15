import image_e472184955fadbd34733111dd46943167a28cf00 from 'figma:asset/e472184955fadbd34733111dd46943167a28cf00.png'
import image_5b4c1267b2ff9b9a252e60c4f44a72746852535e from 'figma:asset/5b4c1267b2ff9b9a252e60c4f44a72746852535e.png'
import image_75727fe069d88f705cf76a54762134e79b440a12 from 'figma:asset/75727fe069d88f705cf76a54762134e79b440a12.png'
import image_302b840bf96a6c7113a781c1c52f7b687fe9d49c from 'figma:asset/302b840bf96a6c7113a781c1c52f7b687fe9d49c.png'
import image_74146664bc77bf9effaf24c9dd4d6d1a9b5de4c1 from 'figma:asset/74146664bc77bf9effaf24c9dd4d6d1a9b5de4c1.png'
import image_8accc587bfaa96d8fe9a6070743258535e1192a5 from 'figma:asset/8accc587bfaa96d8fe9a6070743258535e1192a5.png'
import image_76b6d6be65acb13ef4c9c8a245932fcab266dd05 from 'figma:asset/76b6d6be65acb13ef4c9c8a245932fcab266dd05.png'
import { Brain, MessageCircle, Calendar, Star, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import logoCompleta from '../components/figma/Logo_Completa2.png';

export default function Home() {
  const openWhatsApp = () => {
    // Substitua o número pelo número de WhatsApp da clínica (formato: código do país + DDD + número)
    const phoneNumber = '5519992085365'; // Exemplo: 55 11 99999-9999
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={image_e472184955fadbd34733111dd46943167a28cf00} alt="Logo Completa" className="mx-auto mb-8" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                Aqui, sua experiência ganha espaço
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-center">Aqui é um espaço de escuta e acolhimento. Um lugar onde você pode falar da sua história, das suas dores, dúvidas e sentimentos, sendo recebido com respeito e sem julgamentos. A psicoterapia, aqui, é um convite para olhar para si, dando sentido às suas experiências e ampliando sua forma de ser no mundo</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(13, 148, 136, 0.3)",
                    backgroundColor: "#0f766e"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={openWhatsApp}
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 group"
                >
                  Agendar Consulta
                  <Calendar className="w-5 h-5 group-hover:scale-110" />
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#0d9488"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={scrollToContact}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg"
                >Ligue: (19) 99208-5365</motion.button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    null
                  ))}
                </div>
                <div>
                 
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-auto"
                  autoPlay
                  loop
                  playsInline
                  controls
                >
                  <source src="/src/app/components/figma/VideoNovo.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-teal-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre Devaneios e Estudos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cuidar da saúde mental também envolve criar espaços de reflexão e compreensão sobre o ser humano. Confira os artigos a seguir.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/neurociencia">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-xl shadow-sm cursor-pointer h-full"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neurociência</h3>
                <p className="text-gray-600">
                  Transforme padrões de pensamento negativos e desenvolva estratégias
                  de enfrentamento mais saudáveis ​​para ansiedade, depressão e gerenciamento do estresse.
                </p>
              </motion.div>
            </Link>

            <Link to="/psicologia">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-xl shadow-sm cursor-pointer h-full"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Psicologia</h3>
                <p className="text-gray-600">
                  Fortaleça seus relacionamentos por meio de uma comunicação aprimorada e da resolução de conflitos.
                  e uma conexão emocional mais profunda.
                </p>
              </motion.div>
            </Link>

            <Link to="/terapia">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-xl shadow-sm cursor-pointer h-full"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Terapia</h3>
                <p className="text-gray-600">
                  Cuidado gentil e compassivo, utilizando abordagens sensíveis ao trauma para ajudar você a se curar.
                  e recupere sua sensação de segurança e paz.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre o Leandro Lonardoni
              </h2>
              <p className="text-lg text-gray-600 mb-4">Sou psicólogo, tenho 32 anos, atualmente cursando pós-Graduação em Psicopatologia, possuo cursos de extensão em Neurociência, onde sempre tive como objetivo unir os conhecimentos biológicos do cérebro e do corpo, com a prática clínica.</p>
              <p className="text-lg text-gray-600 mb-6">
                Atendo com base na abordagem Gestalt-Terapia, sustentando uma relação terapêutica autêntica e acolhedora. A abordagem valoriza mais às experiências que se manifestam no presente, do que à busca por explicações no passado. <b>A terapia enfatiza o experienciar como caminho de transformação</b>,
  indo além apenas do cognitivo, integrando corpo, emoção e expressões criativas, como arte e poesia, que podem ampliar a percepção e favorecer novas formas de se relacionar consigo mesmo e com o mundo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative"
            >
              <ImageWithFallback
                src="src/app/components/figma/foto.jpeg"
                alt="Dr. Sarah Mitchell"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Licenciado e Certificado</p>
                    <p className="text-sm text-gray-600">CRP: 06/231956</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">Foco no aqui e agora</div>
              <div className="text-teal-100">onde o essencial emerge</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">Cultivando transformações</div>
              <div className="text-teal-100">novos modos de existir </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">Espaço Seguro</div>
              <div className="text-teal-100">Liberdade para ser</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold mb-2">Ética Profissional&nbsp;&nbsp;</div>
              <div className="text-teal-100">Presença respeitosa e singular</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      

      {/* Calming Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="src/app/components/figma/ImagemNova.jpeg"
              alt="Peaceful nature landscape"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center mx-[0px] my-[-20px] px-[0px] py-[48px]"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
            <div>
               <div className="flex items-center gap-2 mb-4">

                <span className="font-semibold text-xl text-white">Leandro Lonardoni</span>
              </div>
              <p className="text-gray-400">
               Aqui, sua experiência tem espaço!
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={scrollToAbout} className="hover:text-white cursor-pointer">
                    Sobre Leandro Lonardoni
                  </button>
                </li>
                <li>
                  <button onClick={scrollToServices} className="hover:text-white cursor-pointer">
                    Artigos
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">leandrolonardoni@yahoo.com
 </a></li>
                <li><a href="#" className="hover:text-white">(19) 99208-5365</a></li>
                <li><a href="#" className="hover:text-white"> </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Leandro Lonardoni, Psicólogo Clínico. Todos os direiros reservados.</p>
            <p className="mt-2">Psicólogo Clínico Licenciado • CRP: 06/231956</p>
          </div>
        </div>
      </footer>
    </>
  );
}
