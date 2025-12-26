// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
 
//   FileText,
//   CheckCircle,
//   ArrowRight,
//   Star,
//   Users
// } from 'lucide-react';

// const MedicalInsurance = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const insurancePlans = [
//     {
//       name: "Basic Student Plan",
//       price: "€30-€40/month",
//       coverage: "Basic medical coverage",
//       features: ["Doctor Visits", "Basic Medications", "Emergency Care", "24/7 Support"],
//       bestFor: "Budget-conscious students",
//       popular: false
//     },
//     {
//       name: "Comprehensive Plan", 
//       price: "€50-€70/month",
//       coverage: "Full medical coverage",
//       features: ["Hospitalization", "Dental Care", "Vision Care", "Therapy Sessions"],
//       bestFor: "Most international students",
//       popular: true
//     },
//     {
//       name: "Premium Plan",
//       price: "€80-€100/month",
//       coverage: "Premium comprehensive coverage", 
//       features: ["Private Hospital", "Worldwide Coverage", "No Waiting Period", "Full Dental"],
//       bestFor: "Students wanting premium care",
//       popular: false
//     }
//   ];

//   const requirements = [
//     "Mandatory for German visa application",
//     "Minimum coverage of €30,000",
//     "Valid for entire study period", 
//     "Must cover repatriation",
//     "No deductibles for basic care",
//     "EU-wide recognition"
//   ];

//   const providers = [
//     {
//       name: "TK (Techniker Krankenkasse)",
//       rating: 4.8,
//       students: "500,000+",
//       features: ["English Support", "Digital Services", "Wide Network"]
//     },
//     {
//       name: "AOK",
//       rating: 4.6, 
//       students: "400,000+",
//       features: ["Local Offices", "Traditional Provider", "Comprehensive"]
//     },
//     {
//       name: "DAK-Gesundheit",
//       rating: 4.7,
//       students: "300,000+", 
//       features: ["Modern App", "Preventive Care", "Student Discounts"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
//       {/* Hero Section */}
//       <section className="relative py-30 overflow-hidden">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-90"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />

//           {/* Bluish overlay (kept) */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
//         </div>
        
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Medical <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">Insurance</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Comprehensive health insurance solutions meeting German visa requirements. Stay protected throughout your studies in Germany.
//           </motion.p>
//         </div>
//       </section>

//       {/* Insurance Plans */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-12 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             Insurance Plans for Students
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {insurancePlans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
//                   plan.popular 
//                     ? 'border-yellow-400 scale-105 relative shadow-lg' 
//                     : 'border-gray-100 hover:border-sky-300'
//                 }`}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
//                     Most Popular
//                   </div>
//                 )}

//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
//                   <div className="text-sky-600 font-bold text-xl mb-2">{plan.price}</div>
//                   <p className="text-gray-600 text-sm">{plan.coverage}</p>
//                 </div>

//                 <div className="space-y-3 mb-6">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
//                       <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
//                       <span className="text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <p className="text-green-600 text-sm text-center mb-6">Best for: {plan.bestFor}</p>

//                 <motion.button
//                   className={`w-full font-bold py-3 rounded-xl transition-all duration-300 ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-2xl hover:shadow-yellow-500/25'
//                       : 'bg-gradient-to-r from-green-600 to-sky-600 text-white hover:shadow-lg hover:shadow-green-600/25'
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {plan.popular ? 'Get Started' : 'Learn More'}
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Requirements & Providers */}
//       <section className="py-20 bg-green-50/30">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Requirements */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">German Visa Requirements</h3>
//               <div className="space-y-3">
//                 {requirements.map((requirement, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                     transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//                   >
//                     <FileText className="w-5 h-5 text-sky-600 flex-shrink-0" />
//                     <span className="text-gray-700">{requirement}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Providers */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">Trusted Providers</h3>
//               <div className="space-y-4">
//                 {providers.map((provider, index) => (
//                   <motion.div
//                     key={index}
//                     className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <h4 className="text-xl font-bold text-gray-900">{provider.name}</h4>
//                       <div className="flex items-center gap-1 text-yellow-400">
//                         <Star className="w-4 h-4 fill-current" />
//                         <span className="text-sm">{provider.rating}</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
//                       <Users className="w-4 h-4" />
//                       {provider.students} students
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {provider.features.map((feature, featureIndex) => (
//                         <span key={featureIndex} className="bg-sky-100 text-sky-600 px-2 py-1 rounded text-xs">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             className="bg-white rounded-3xl p-12 border border-green-100 shadow-sm"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Insured for Germany</h2>
//             <p className="text-xl text-gray-700 mb-8">
//               Complete your visa requirements with our approved health insurance plans.
//             </p>
//             <motion.button
//               className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Insurance Quote <ArrowRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MedicalInsurance;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Users
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuthRedirect } from "../../utils/useAuthRedirect";

// ---------- helpers ----------
const isObject = (v) => v && typeof v === "object" && !Array.isArray(v);
const normalizeArray = (val, fallback = []) => {
  if (Array.isArray(val)) return val;
  if (!val) return fallback;
  if (isObject(val)) {
    const keys = Object.keys(val).sort();
    if (keys.length && keys.every((k) => /^\d+$/.test(k))) return keys.map((k) => val[k]);
    return [val];
  }
  return fallback;
};

// ---------- FALLBACK (exact strings preserved) ----------
const FALLBACK = {
  hero: {
    title: "Medical Insurance",
    subtitle:
      "Comprehensive health insurance solutions meeting German visa requirements. Stay protected throughout your studies in Germany."
  },
  planTitle: "Insurance Plans for Students",
  insurancePlans: [
    {
      name: "Basic Student Plan",
      price: "€30-€40/month",
      coverage: "Basic medical coverage",
      features: ["Doctor Visits", "Basic Medications", "Emergency Care", "24/7 Support"],
      bestFor: "Budget-conscious students",
      popular: false
    },
    {
      name: "Comprehensive Plan",
      price: "€50-€70/month",
      coverage: "Full medical coverage",
      features: ["Hospitalization", "Dental Care", "Vision Care", "Therapy Sessions"],
      bestFor: "Most international students",
      popular: true
    },
    {
      name: "Premium Plan",
      price: "€80-€100/month",
      coverage: "Premium comprehensive coverage",
      features: ["Private Hospital", "Worldwide Coverage", "No Waiting Period", "Full Dental"],
      bestFor: "Students wanting premium care",
      popular: false
    }
  ],
  labels: {
    mostPopular: "Most Popular",
    bestFor: "Best for:",
    learnMore: "Learn More",
    getStarted: "Get Started",
    averageRent: "Average Rent:",
    popularity: "Popularity:",
    studentAreas: "Student Areas:"
  },
  requirementsTitle: "German Visa Requirements",
  requirements: [
    "Mandatory for German visa application",
    "Minimum coverage of €30,000",
    "Valid for entire study period",
    "Must cover repatriation",
    "No deductibles for basic care",
    "EU-wide recognition"
  ],
  providersTitle: "Trusted Providers",
  providers: [
    {
      name: "TK (Techniker Krankenkasse)",
      rating: 4.8,
      students: "500,000+",
      features: ["English Support", "Digital Services", "Wide Network"]
    },
    {
      name: "AOK",
      rating: 4.6,
      students: "400,000+",
      features: ["Local Offices", "Traditional Provider", "Comprehensive"]
    },
    {
      name: "DAK-Gesundheit",
      rating: 4.7,
      students: "300,000+",
      features: ["Modern App", "Preventive Care", "Student Discounts"]
    }
  ],
  cta: {
    heading: "Get Insured for Germany",
    sub: "Complete your visa requirements with our approved health insurance plans.",
    button: "Get Insurance Quote"
  }
};

export default function MedicalInsurance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation("common");

  // read from i18n; fall back safely
  const raw = t("medicalInsurance", { returnObjects: true, defaultValue: {} });

  const hero = isObject(raw.hero) ? raw.hero : FALLBACK.hero;
  const planTitle = typeof raw.planTitle === "string" ? raw.planTitle : FALLBACK.planTitle;
  const insurancePlans = normalizeArray(raw.insurancePlans, FALLBACK.insurancePlans).map((p) => ({
    ...p,
    features: normalizeArray(p.features, [])
  }));
  const labels = isObject(raw.labels) ? raw.labels : FALLBACK.labels;
  const requirementsTitle =
    typeof raw.requirementsTitle === "string" ? raw.requirementsTitle : FALLBACK.requirementsTitle;
  const requirements = normalizeArray(raw.requirements, FALLBACK.requirements);
  const providersTitle =
    typeof raw.providersTitle === "string" ? raw.providersTitle : FALLBACK.providersTitle;
  const providers = normalizeArray(raw.providers, FALLBACK.providers).map((pr) => ({
    ...pr,
    features: normalizeArray(pr.features, [])
  }));
  const cta = isObject(raw.cta) ? raw.cta : FALLBACK.cta;

  const firstWord = hero.title.split(" ")[0] || hero.title;
  const restTitle = hero.title.split(" ").slice(1).join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {firstWord}{" "}
            <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
              {restTitle}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Insurance Plans */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            {planTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insurancePlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-yellow-400 scale-105 relative shadow-lg"
                    : "border-gray-100 hover:border-sky-300"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    {labels.mostPopular}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-sky-600 font-bold text-xl mb-2">{plan.price}</div>
                  <p className="text-gray-600 text-sm">{plan.coverage}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-green-600 text-sm text-center mb-6">
                  {labels.bestFor} {plan.bestFor}
                </p>

                <motion.button
                  className={`w-full font-bold py-3 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-2xl hover:shadow-yellow-500/25"
                      : "bg-gradient-to-r from-green-600 to-sky-600 text-white hover:shadow-lg hover:shadow-green-600/25"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    if (!requireAuth()) {
                      e.preventDefault();
                      return;
                    }
                  }}
                >
                  {plan.popular ? labels.getStarted : labels.learnMore}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Providers */}
      <section className="py-20 bg-green-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{requirementsTitle}</h3>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <FileText className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Providers */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{providersTitle}</h3>
              <div className="space-y-4">
                {providers.map((provider, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{provider.name}</h4>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{provider.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Users className="w-4 h-4" />
                      {provider.students} students
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {provider.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-sky-100 text-sky-600 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{cta.heading}</h2>
            <p className="text-xl text-gray-700 mb-8">{cta.sub}</p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (!requireAuth()) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              {cta.button} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
