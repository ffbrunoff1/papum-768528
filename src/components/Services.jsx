import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap, Smartphone, Edit3, TrendingUp, ArrowRight, Star, CheckCircle, Trophy, Target, Users, Briefcase } from 'lucide-react'

export default function Services() {
  const handleCTAClick = () => {
    window.open('https://papum.ai/register', '_blank')
  }

  const benefits = [
    {
      icon: Clock,
      title: "Sites prontos em minutos",
      description: "Do formulário ao site no ar em questão de minutos, não dias ou semanas"
    },
    {
      icon: Edit3,
      title: "Textos automáticos que já vendem bem",
      description: "Copy otimizada para conversão gerada automaticamente"
    },
    {
      icon: Smartphone,
      title: "Layouts modernos e responsivos",
      description: "Design profissional que funciona em todos os dispositivos"
    },
    {
      icon: Zap,
      title: "Fácil de editar (sem código)",
      description: "Interface intuitiva para ajustes rápidos sem conhecimento técnico"
    },
    {
      icon: TrendingUp,
      title: "Entregas mais rápidas, margens maiores",
      description: "Aumente sua produtividade e lucratividade com processos otimizados"
    }
  ]

  const testimonials = [
    {
      quote: "Eu tinha um restaurante e sempre enrolava pra fazer o site. Com a Papum, montei tudo em 15 minutos. Já recebi 3 pedidos pelo site na primeira semana!",
      author: "Lucas Andrade",
      business: "Restaurante Solar do Cerrado",
      rating: 5
    },
    {
      quote: "Como agência, economizei mais de 10h por semana. Hoje a gente entrega landing pages em 1 dia. É surreal.",
      author: "Fernanda Reis",
      business: "Agência Stratto",
      rating: 5
    }
  ]

  const whyChoose = [
    {
      icon: Users,
      title: "Pra pequenos negócios",
      description: "Tenha um site profissional por um valor que cabe no bolso e comece a atrair clientes ainda hoje."
    },
    {
      icon: Briefcase,
      title: "Pra agências e freelancers",
      description: "Escale seus projetos sem precisar de equipe extra e aumente a produtividade do seu time."
    },
    {
      icon: Target,
      title: "Pra quem quer agilidade",
      description: "Menos briefing, mais resultado — e tudo com aquele design que parece ter custado caro."
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-accent-600 mr-2" />
            <span className="text-accent-700 font-medium">💬 Seção 3 — Benefícios rápidos</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Tudo que você precisa para <span className="text-gradient">arrasar online</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">✅ {benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-200 rounded-full px-6 py-3 mb-8">
            <Trophy className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-primary-700 font-medium">🔥 Seção 4 — Por que escolher a Papum</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {whyChoose.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-gradient p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}:</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-medium">🧾 Seção 5 — Casos reais</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Quem já usa <span className="text-gradient">não volta atrás</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-gradient p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">— {testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-900 to-accent-900 rounded-2xl p-12 text-center text-white"
        >
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8">
            <Target className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-medium">🎯 Seção 6 — Chamada final</span>
          </div>
          
          <h2 className="heading-md mb-6">
            Chega de perder tempo com dev, freelancer e burocracia.
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Com a Papum, você cria, ajusta e publica seu site — antes do café esfriar ☕
          </p>

          <motion.button
            onClick={handleCTAClick}
            className="bg-white text-gray-900 px-12 py-6 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Crie seu site agora (é grátis pra testar)
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}