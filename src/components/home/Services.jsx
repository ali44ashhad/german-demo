import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CreditCard, 
  Home, 
  Heart, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: CreditCard,
      title: "Forex Card & Remittances",
      description: "Multi-currency forex cards and international money transfer services with best exchange rates for students going to Germany.",
      features: ["Multi-Currency Cards", "Zero Forex Markup", "Instant Reload", "24/7 Support"],
      color: "from-green-600 to-sky-600",
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      link: "/services/forex-card-remittances"
    },
    {
      icon: Home,
      title: "Accommodation",
      description: "Find your perfect home in Germany with our comprehensive accommodation services near universities.",
      features: ["Student Hostels", "Shared Apartments", "Studio Flats", "Homestay Options"],
      color: "from-green-600 to-sky-600",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      link: "/services/accommodation"
    },
    {
      icon: Heart,
      title: "Medical Insurance",
      description: "German health insurance solutions meeting visa requirements with comprehensive coverage for international students.",
      features: ["Visa Compliance", "Full Coverage", "EU-Wide Validity", "Multilingual Support"],
      color: "from-green-600 to-sky-600",
      delay: 0.3,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      link: "/services/medical-insurance"
    },
    {
      icon: TrendingUp,
      title: "Education Loan",
      description: "Financial assistance for Indian students pursuing higher education in Germany with flexible repayment options.",
      features: ["Collateral-Free", "Low Interest", "Flexible Tenure", "Quick Processing"],
      color: "from-green-600 to-sky-600",
      delay: 0.4,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      link: "/services/education-loan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-white via-sky-50 to-green-50 overflow-hidden">
      {/* Soft Decorative Blobs */}
      <div className="absolute top-6 right-12 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-6 left-12 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse-slower" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-sky-50 border border-green-100 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Star className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">Essential Services for Germany</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Our Core{' '}
            <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Complete support services for Indian students - from financial solutions to accommodation and insurance, we've got you covered for your German journey.
          </motion.p>
        </motion.div>

        {/* Services Grid - 2x2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              className="group relative"
            >
              {/* subtle bg image overlay */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              <Link to={service.link} className="block relative z-10" aria-label={`${service.title} — Learn more`}>
                <motion.div
                  className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                  whileHover={{ 
                    y: -8,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 220 }
                  }}
                >
                  {/* Gradient Accent */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-6 transition-opacity duration-500 -z-10`} />

                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-5 mb-6 flex items-center justify-center relative overflow-hidden shadow-inner`}
                    whileHover={{ 
                      scale: 1.06,
                      rotate: [0, -4, 4, 0]
                    }}
                    transition={{ duration: 0.45 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      initial={{ x: -120 }}
                      whileHover={{ x: 220 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-5 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.45, delay: service.delay + featureIndex * 0.08 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA visual */}
                  <div className="mt-2">
                    <motion.div
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </div>

                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 bg-white/60 rounded-2xl p-6 border border-gray-100 shadow-sm relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold"
            >
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900">Need Comprehensive Support?</h3>
              <p className="text-gray-700">Explore all our services in detail and get personalized assistance.</p>
            </div>
            <Link to="/services" className="ml-4">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
