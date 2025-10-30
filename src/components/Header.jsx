import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    window.open('https://papum.ai/register', '_blank')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="https://qotdxwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/f9ef552e-f7d2-4fc0-ac05-8b5d1f016908/logo_1761859516142_0.png"
              alt="Papum"
              className="h-8 lg:h-10 w-auto"
            />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors duration-200 hover:text-accent-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-200 hover:text-accent-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-200 hover:text-accent-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-200 hover:text-accent-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={handleCTAClick}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Criar Site Agora
            </motion.button>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-600"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-600"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-600"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-accent-600"
            >
              FAQ
            </button>
            <motion.button
              onClick={handleCTAClick}
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🚀 Criar Site Agora
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}