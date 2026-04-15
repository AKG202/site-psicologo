import { Heart, ArrowLeft, Users, Smile, Brain } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Psicologia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900">Psicologia</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Compreendendo a mente humana, comportamentos e processos mentais através 
              de pesquisas e práticas baseadas em evidências.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Psicologia"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Artigos em Destaque</h2>
          
          <div className="space-y-8">
            {[
              {
                icon: Brain,
                color: 'rose',
                title: 'Psicologia Positiva: O Estudo do Bem-Estar',
                excerpt: 'Explore como a psicologia positiva investiga os fatores que contribuem para uma vida plena e satisfatória. Descubra estratégias baseadas em evidências para cultivar felicidade, gratidão e resiliência.',
                date: '12 de Março, 2026'
              },
              {
                icon: Users,
                color: 'pink',
                title: 'A Psicologia das Relações Interpessoais',
                excerpt: 'Entenda os fundamentos psicológicos que moldam nossos relacionamentos. Como padrões de apego, comunicação e empatia influenciam nossas conexões com outras pessoas.',
                date: '5 de Março, 2026'
              },
              {
                icon: Smile,
                color: 'orange',
                title: 'Teoria da Regulação Emocional',
                excerpt: 'Aprenda sobre os mecanismos psicológicos envolvidos no reconhecimento, compreensão e gerenciamento das emoções. Estratégias eficazes para desenvolver inteligência emocional.',
                date: '27 de Fevereiro, 2026'
              },
              {
                icon: Heart,
                color: 'red',
                title: 'Psicologia do Desenvolvimento Humano',
                excerpt: 'Uma jornada pelas diferentes fases do desenvolvimento psicológico, desde a infância até a idade adulta. Como experiências formam nossa personalidade e visão de mundo.',
                date: '18 de Fevereiro, 2026'
              }
            ].map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 bg-${article.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <article.icon className={`w-7 h-7 text-${article.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition">
                      Ler mais
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interessado em Aprender Mais?
          </h2>
          <p className="text-xl text-rose-50 mb-8">
            Entre em contato para descobrir como os conhecimentos da psicologia 
            podem transformar sua vida.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rose-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              Voltar para Home
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
