import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Clock, Shield, Target, ArrowRight, Coffee, CheckCircle } from 'lucide-react'

export default function About() {
  const handleCTAClick = () => {
    window.open('https://papum.ai/register', '_blank')
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200 rounded-full px-6 py-3 mb-8">
            <Target className="w-5 h-5 text-accent-600 mr-2" />
            <span className="text-accent-700 font-medium">⚡ Seção 1 — Pra quem é</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Pra quem vive de <span className="text-gradient">resultado</span>, não de complicação
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gradient p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Se você tem um pequeno negócio:</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ganhe presença online com um site bonito, funcional e pronto pra atrair clientes — 
              <span className="font-semibold text-gray-900"> sem gastar rios de dinheiro com agência.</span>
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Site profissional por valor acessível</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Comece a atrair clientes ainda hoje</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Sem dependência de terceiros</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-gradient p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Se você tem uma agência:</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Crie e entregue sites otimizados em minutos, mantendo foco em performance e 
              <span className="font-semibold text-gray-900"> aumentando sua capacidade de entrega sem precisar contratar ninguém.</span>
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Escale projetos sem equipe extra</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Aumente produtividade do time</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Margens maiores por projeto</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-primary-700 font-medium">🚀 Seção 2 — O que é a Papum</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-8">
            O que é a Papum <span className="text-gray-500">(sem papo de IA robótica)</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-gray-900">Papum é uma plataforma que cria sites completos pra você em questão de minutos.</span>
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Você preenche um formulário simples com informações do negócio — e em instantes, 
              tem um site funcional, com layout profissional, textos que vendem e tudo pronto pra ir pro ar.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-lg font-medium text-gray-900">Sem dor de cabeça.</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-lg font-medium text-gray-900">Sem fila de dev.</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                <span className="text-lg font-medium text-gray-900">Sem retrabalho.</span>
              </div>
            </div>

            <p className="text-xl font-bold text-gray-900 mb-8">
              Você só clica, ajusta e publica. <span className="text-accent-600">Papum.</span>
            </p>

            <motion.button
              onClick={handleCTAClick}
              className="btn-primary inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Criar Meu Site Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-6 text-white text-center">
              <Coffee className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">⏱️ Minutos</h4>
              <p className="text-accent-100">Não horas ou dias</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">🎯 Direto</h4>
              <p className="text-primary-100">Sem complicação</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">✅ Pronto</h4>
              <p className="text-green-100">Para usar agora</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">✨ Bonito</h4>
              <p className="text-purple-100">Design profissional</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}