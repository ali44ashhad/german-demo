import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { CreditCard, Home, Heart, TrendingUp, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation("common");

  const fallbackServices = [
    {
      title: "Forex Card & Remittances",
      description: "Comprehensive foreign exchange solutions including multi-currency forex cards and international money transfer services with best exchange rates.",
      icon: CreditCard,
      to: "/services/forex-card-remittances"
    },
    {
      title: "Accommodation",
      description: "End-to-end accommodation solutions for students in Germany, from temporary stays to long-term rentals near universities.",
      icon: Home,
      to: "/services/accommodation"
    },
    {
      title: "Medical Insurance",
      description: "Medical health insurance solutions meeting visa requirements with comprehensive coverage for international students.",
      icon: Heart,
      to: "/services/medical-insurance"
    },
    {
      title: "Education Loan",
      description: "Financial assistance for students pursuing higher education in Europe with flexible repayment options.",
      icon: TrendingUp,
      to: "/services/education-loan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Unified Bluish-Green Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/60 via-cyan-600/50 to-emerald-600/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">Our</span> Services
          </motion.h1>

          <motion.p
            className="text-xl text-sky-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive support services for students pursuing education in Europe.
            From financial solutions to accommodation, we handle everything for your smooth transition.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Explore What We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fallbackServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link to={service.to} key={index}>
                    <motion.div
                      className="bg-white rounded-2xl h-full p-6 border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-sky-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all duration-300 text-sm">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
