import { Brain, ArrowLeft, BookOpen, Microscope, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Neurociencia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900">Neurociência</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Explorando os mistérios do cérebro humano e sua relação com comportamento, 
              emoções e cognição.
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
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Neurociência"
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
                color: 'blue',
                title: 'Neuroplasticidade: O Cérebro que se Transforma',
                excerpt: 'Descubra como o cérebro humano possui a incrível capacidade de se reorganizar formando novas conexões neurais ao longo da vida. A neuroplasticidade é fundamental para aprendizado, memória e recuperação de lesões.',
                date: '15 de Março, 2026'
              },
              {
                icon: Zap,
                color: 'purple',
                title: 'Neurotransmissores e Saúde Mental',
                excerpt: 'Entenda o papel crucial dos neurotransmissores como serotonina, dopamina e noradrenalina na regulação do humor, ansiedade e bem-estar emocional. Como a terapia pode influenciar esses sistemas químicos.',
                date: '8 de Março, 2026'
              },
              {
                icon: Microscope,
                color: 'teal',
                title: 'A Base Neural das Emoções',
                excerpt: 'Explore como diferentes regiões cerebrais, como a amígdala e o córtex pré-frontal, trabalham juntas para processar e regular nossas emoções. Insights da neurociência afetiva aplicados à terapia.',
                date: '1 de Março, 2026'
              },
              {
                icon: BookOpen,
                color: 'indigo',
                title: 'Mindfulness e Mudanças Cerebrais',
                excerpt: 'Pesquisas recentes demonstram como práticas de mindfulness e meditação podem literalmente alterar a estrutura cerebral, aumentando áreas relacionadas à atenção, empatia e regulação emocional.',
                date: '22 de Fevereiro, 2026'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interessado em Aprender Mais?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Entre em contato para descobrir como a neurociência pode enriquecer 
            sua jornada terapêutica.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold"
            >
              Voltar para Home
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
