import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CreditCard, Home, Heart, TrendingUp } from "lucide-react";
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

  const shortTermVisaCategories = t("services.shortTermVisa.categories", {
    returnObjects: true
  });
  const visaCategories = Array.isArray(shortTermVisaCategories)
    ? shortTermVisaCategories
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/60 via-cyan-600/50 to-emerald-600/60 mix-blend-multiply dark:from-sky-700/70 dark:via-cyan-800/60 dark:to-emerald-900/70" />
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
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Explore What We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fallbackServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-surface rounded-2xl h-full p-6 border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-sky-50 dark:bg-muted text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-700 dark:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 bg-surface rounded-2xl border border-border shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                  {t("services.shortTermVisa.title")}
                </span>
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t("services.shortTermVisa.intro")}
              </p>

              <ul className="space-y-2 text-muted-foreground text-sm mb-5 list-disc list-inside marker:text-emerald-600 dark:text-emerald-400">
                {visaCategories.map((cat, idx) => (
                  <li key={`${cat}_${idx}`}>{cat}</li>
                ))}
              </ul>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {t("services.shortTermVisa.thankYou")}
              </p>

              <div className="rounded-xl border border-border bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-slate-800/80 dark:via-slate-800/50 dark:to-emerald-950/30 p-5 md:p-6">
                <div className="text-emerald-700 dark:text-emerald-400 font-semibold mb-2 text-sm">
                  {t("services.shortTermVisa.additionalServicesOfferedLabel")}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("services.shortTermVisa.partnershipText")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
