import { MessageCircle, ArrowLeft, Sparkles, Heart, UserCheck } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Terapia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
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
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900">Psicoterapia</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Descobrindo abordagens terapêuticas, técnicas e práticas que promovem 
              cura, crescimento pessoal e bem-estar integral.
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
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Terapia"
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
                icon: Sparkles,
                color: 'teal',
                title: 'Gestalt-Terapia: A Arte do Contato e da Presença',
                excerpt: 'Explore os fundamentos da Gestalt-Terapia, uma abordagem humanista que valoriza o experienciar no aqui-agora. Como o contato autêntico e a awareness promovem transformação pessoal.',
                date: '10 de Março, 2026'
              },
              {
                icon: Heart,
                color: 'emerald',
                title: 'Terapia Cognitivo-Comportamental (TCC)',
                excerpt: 'Entenda como a TCC trabalha a relação entre pensamentos, emoções e comportamentos. Técnicas práticas para identificar e modificar padrões disfuncionais de pensamento.',
                date: '3 de Março, 2026'
              },
              {
                icon: UserCheck,
                color: 'cyan',
                title: 'Abordagens Sensíveis ao Trauma',
                excerpt: 'Conheça métodos terapêuticos especializados no tratamento de traumas, incluindo EMDR e terapia somática. Como criar um ambiente seguro para processamento e cura.',
                date: '25 de Fevereiro, 2026'
              },
              {
                icon: MessageCircle,
                color: 'blue',
                title: 'A Relação Terapêutica como Instrumento de Cura',
                excerpt: 'Descubra por que a qualidade do vínculo entre terapeuta e cliente é considerada o fator mais importante para o sucesso terapêutico. A importância da empatia, aceitação e autenticidade.',
                date: '16 de Fevereiro, 2026'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interessado em Aprender Mais?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Entre em contato para descobrir qual abordagem terapêutica 
            é mais adequada para você.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              Voltar para Home
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
