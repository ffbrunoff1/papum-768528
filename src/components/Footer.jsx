import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary-900 text-white pb-20">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="mb-6"
            >
              <img 
                src="https://qotdxwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/f9ef552e-f7d2-4fc0-ac05-8b5d1f016908/logo_1761859516142_0.png"
                alt="Papum"
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
            </motion.div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A plataforma que revoluciona a criação de sites. 
              Sites profissionais criados em minutos, sem complicação, sem código.
            </p>
            
            <p className="text-gray-400">
              Transformamos suas ideias em sites funcionais e otimizados para venda. 
              Papum: onde a tecnologia encontra a simplicidade.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Comece Agora</h3>
            <div className="space-y-4">
              <motion.button
                onClick={() => window.open('https://papum.ai/register', '_blank')}
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Criar Site Grátis
              </motion.button>
              
              <p className="text-gray-400 text-sm">
                Teste grátis e veja como é fácil ter um site profissional em minutos
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} Papum. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex items-center text-gray-400">
              <span>Criado com </span>
              <Heart className="w-4 h-4 text-accent-500 mx-1" />
              <span> por </span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-medium italic hover:text-accent-400 transition-colors ml-1 inline-flex items-center"
              >
                Papum
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}