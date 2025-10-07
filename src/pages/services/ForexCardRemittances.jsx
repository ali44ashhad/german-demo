import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CreditCard, 
  Send, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp
} from 'lucide-react';

const ForexCardRemittances = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: CreditCard,
      title: "Multi-Currency Forex Cards",
      description: "Load multiple currencies including EUR, USD, GBP on a single card for seamless transactions across Europe.",
      benefits: ["Zero Forex Markup", "Instant Reload", "ATM Access", "Online Tracking"]
    },
    {
      icon: Send,
      title: "International Money Transfer",
      description: "Fast and secure remittance services with competitive exchange rates and minimal transfer fees.",
      benefits: ["Best Exchange Rates", "Quick Transfer", "Low Fees", "24/7 Support"]
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Your money is protected with advanced security features and insurance coverage.",
      benefits: ["Fraud Protection", "Insurance Cover", "PIN Protection", "Emergency Support"]
    },
    {
      icon: Globe,
      title: "Global Acceptance",
      description: "Accepted at millions of locations worldwide including ATMs, shops, and online platforms.",
      benefits: ["Worldwide Acceptance", "Online Shopping", "Contactless Payments", "Mobile App"]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Documentation",
      description: "Submit KYC documents and application form"
    },
    {
      step: 2,
      title: "Card Issuance", 
      description: "Receive your forex card within 2-3 business days"
    },
    {
      step: 3,
      title: "Currency Load",
      description: "Load desired currencies at best exchange rates"
    },
    {
      step: 4,
      title: "Activation & Use",
      description: "Activate and start using your card globally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Forex Card & <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Remittances</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manage your international finances seamlessly with our multi-currency forex cards and competitive remittance services. Perfect for students studying in Germany.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            className="bg-gray-800/30 rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Simple 4-Step Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Forex Services?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Best Exchange Rates",
                description: "Get the most competitive rates for EUR and other major currencies"
              },
              {
                icon: TrendingUp,
                title: "Save 3-5% on Forex",
                description: "Significantly better rates compared to banks and airports"
              },
              {
                icon: Shield,
                title: "Complete Security",
                description: "Bank-grade security with 24/7 fraud monitoring"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Your Forex Card?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your financial journey to Germany with the best forex solutions.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForexCardRemittances;