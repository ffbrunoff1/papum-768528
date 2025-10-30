import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { HelpCircle, Plus, Minus, Mail, MessageSquare, ArrowRight } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: '',
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }

    recaptchaRef.current.reset()
  }

  const handleCTAClick = () => {
    window.open('https://papum.ai/register', '_blank')
  }

  const faqData = [
    {
      question: "Quanto tempo leva para criar um site?",
      answer: "Com a Papum, seu site fica pronto em questão de minutos! Você só precisa preencher nosso formulário inteligente com as informações do seu negócio e nossa IA cria tudo automaticamente."
    },
    {
      question: "Preciso saber programação para usar?",
      answer: "Não! A Papum foi criada exatamente para quem não sabe programar. Nossa interface é 100% visual e intuitiva. Você edita seu site como se fosse um documento no Word."
    },
    {
      question: "Os sites são responsivos (funcionam no celular)?",
      answer: "Sim! Todos os sites criados pela Papum são 100% responsivos e otimizados para funcionar perfeitamente em computadores, tablets e smartphones."
    },
    {
      question: "Posso editar o site depois de criado?",
      answer: "Claro! Você pode fazer quantas edições quiser. Textos, imagens, cores, layout - tudo pode ser personalizado de forma fácil e rápida."
    },
    {
      question: "O preço é único ou tem mensalidade?",
      answer: "Oferecemos diferentes planos para atender suas necessidades. Você pode testar gratuitamente e escolher o plano que melhor se adapta ao seu negócio."
    },
    {
      question: "Vocês fazem a hospedagem do site?",
      answer: "Sim! Cuidamos de toda a parte técnica para você. Hospedagem, domínio, SSL - tudo incluído para que você só precise se preocupar com seu negócio."
    },
    {
      question: "E se eu não gostar do resultado?",
      answer: "Nossa IA cria sites baseados nas melhores práticas de design e conversão. Mas se não ficar satisfeito, oferecemos garantia de reembolso."
    },
    {
      question: "Posso migrar meu site atual para a Papum?",
      answer: "Sim! Nossa equipe pode te ajudar a migrar seu site atual ou criar uma versão melhorada usando nossa tecnologia."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="w-5 h-5 text-accent-600 mr-2" />
            <span className="text-accent-700 font-medium">❓ FAQ - Dúvidas Frequentes</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6">
            Suas <span className="text-gradient">dúvidas</span> respondidas
          </h2>
          
          <p className="text-lead text-gray-600 max-w-3xl mx-auto">
            Separamos as principais dúvidas para você tomar a melhor decisão sobre criar seu site com a Papum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h3>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-gradient overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-accent-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-accent-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-gradient p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ainda tem dúvidas?</h3>
                <p className="text-gray-600">Entre em contato conosco e responderemos rapidinho!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    placeholder="Sobre o que você gostaria de falar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Descreva sua dúvida ou como podemos te ajudar..."
                  />
                </div>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />

                {status.message && (
                  <div className={`p-4 rounded-lg ${status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Ou experimente agora mesmo:</p>
                <motion.button
                  onClick={handleCTAClick}
                  className="btn-secondary w-full inline-flex items-center justify-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Criar Meu Site Grátis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}