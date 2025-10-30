import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Clock, Trophy, ArrowRight, Coffee, Sparkles } from 'lucide-react'

export default function Hero() {
  const handleCTAClick = () => {
    window.open('https://papum.ai/register', '_blank')
  }

  const scrollToNextSection = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary-500/20 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      <div className="relative container-max section-padding pt-32 lg:pt-40">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">🧠 Nova era da criação de sites</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Seu novo site pronto antes do
              <span className="inline-flex items-center ml-4">
                <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  café esfriar
                </span>
                <Coffee className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-400 ml-2 animate-bounce-slow" />
              </span>
            </h1>

            <p className="text-lead text-gray-200 mb-8 max-w-4xl mx-auto">
              Sites profissionais, rápidos e prontos pra vender — criados em minutos, 
              sem depender de dev, agência ou planilha de brief.
              <br />
              <span className="text-white font-semibold">
                Papum é pra quem quer entregar mais rápido, gastar menos e se destacar online.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <motion.button
              onClick={handleCTAClick}
              className="btn-primary text-xl px-12 py-6 mb-8 inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👉 Quero meu site pronto agora
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                <span>Sites em minutos</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Sem código</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-blue-400" />
                <span>Design profissional</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="card-gradient p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Para Pequenos Negócios</h3>
              <p className="text-gray-600 text-sm">
                Presença online profissional sem gastar rios de dinheiro com agência
              </p>
            </div>

            <div className="card-gradient p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Para Agências</h3>
              <p className="text-gray-600 text-sm">
                Entregue sites otimizados em minutos e aumente sua capacidade sem contratar
              </p>
            </div>

            <div className="card-gradient p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Para Quem Tem Pressa</h3>
              <p className="text-gray-600 text-sm">
                Menos briefing, mais resultado — com design que parece ter custado caro
              </p>
            </div>
          </motion.div>

          <motion.button
            onClick={scrollToNextSection}
            className="mt-16 text-white/60 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-8 h-8 rotate-90" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}