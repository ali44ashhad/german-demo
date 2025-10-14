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
    { step: 1, title: "Documentation", description: "Submit KYC documents and application form" },
    { step: 2, title: "Card Issuance", description: "Receive your forex card within 2-3 business days" },
    { step: 3, title: "Currency Load", description: "Load desired currencies at best exchange rates" },
    { step: 4, title: "Activation & Use", description: "Activate and start using your card globally" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Bluish Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Forex Card & <span className="bg-green-300 bg-clip-text text-transparent">Remittances</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-50 mb-8 max-w-3xl mx-auto leading-relaxed"
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
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Simple 4-Step Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Forex Services?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Best Exchange Rates", description: "Get the most competitive rates for EUR and other major currencies" },
              { icon: TrendingUp, title: "Save 3-5% on Forex", description: "Significantly better rates compared to banks and airports" },
              { icon: Shield, title: "Complete Security", description: "Bank-grade security with 24/7 fraud monitoring" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-3xl p-12 border border-green-100 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Your Forex Card?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Start your financial journey to Germany with the best forex solutions.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
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