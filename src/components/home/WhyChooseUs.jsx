// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { CheckCircle, Users, BookOpen, Globe, Banknote, LifeBuoy, MessageCircle } from 'lucide-react';

// const WhyChooseUs = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });

//   const features = [
//     {
//       icon: Users,
//       title: 'Expert Counsellors with Industry Insight',
//       description:
//         'Our team consists of seasoned professionals with extensive experience in both academics and industry, providing you with well-rounded and practical guidance.',
//       color: 'from-green-600 to-sky-600'
//     },
//     {
//       icon: CheckCircle,
//       title: 'Personalized Attention',
//       description:
//         "We work with a limited number of students per semester, ensuring each applicant receives dedicated time and support for a strong application strategy.",
//       color: 'from-yellow-500 to-orange-400'
//     },
//     {
//       icon: BookOpen,
//       title: 'Support Across All Academic Levels',
//       description:
//         "Whether you're applying for an Undergraduate, Master's, MBA, or Ph.D., we offer tailored assistance that meets the unique requirements of each program level.",
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: Globe,
//       title: 'Wide Range of Study Fields',
//       description:
//         'Our expertise spans diverse disciplines, helping students from various academic backgrounds in finding the best-fit programs and universities.',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: Banknote,
//       title: 'Opportunities for Tuition-Free Education',
//       description:
//         'We help identify programs and institutions that offer tuition-free or low-cost education, increasing your chances of an affordable, high-quality education in Europe.',
//       color: 'from-red-500 to-rose-500'
//     },
//     {
//       icon: LifeBuoy,
//       title: 'End-to-End Support',
//       description:
//         "From application to onboarding and settling in, we stand by your side throughout your educational journey.",
//       color: 'from-indigo-500 to-blue-500'
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-16 md:py-20 lg:py-28"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <motion.h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.7 }}
//           >
//             Why Choose{' '}
//             <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
//               Eduberator
//             </span>
//           </motion.h2>
//           <motion.p
//             className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed"
//             initial={{ opacity: 0, y: 16 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//           >
//             All our services are conducted entirely online — no office visits required. We stay in close communication via Email, TEAMS/Zoom, and WhatsApp to guide you at every step.
//           </motion.p>
//         </div>

//         {/* Features Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           {features.map((f, i) => (
//             <motion.div key={i} variants={itemVariants} className="group">
//               <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
//                 <div
//                   className={`w-14 h-14 rounded-xl bg-gradient-to-r ${f.color} p-3 mb-4 flex items-center justify-center shadow-inner`}
//                 >
//                   <f.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
//                 <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-auto">{f.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Additional Highlights */}
//         <motion.div
//           className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
//             <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900">Specialization in European Admissions</h4>
//               <p className="text-gray-600 text-sm md:text-base">
//                 We focus on top universities across Europe, providing insights into regional requirements, culture, and opportunities to help you pick the right destination.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
//             <MessageCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900">Fully Online & Always Connected</h4>
//               <p className="text-gray-600 text-sm md:text-base">
//                 All services are delivered online. We'll be in touch via Email, TEAMS/Zoom, and WhatsApp for document reviews, mock interviews, application tracking, and onboarding help.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
//             <div className="text-left flex-1">
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to build your roadmap?</h3>
//               <p className="text-gray-600 text-sm md:text-base mt-2">
//                 Book a free consultation and let our experts craft a personalized plan for your European education journey.
//               </p>
//             </div>
//             <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-lg transition-all mt-4 md:mt-0">
//               Start My Journey 🚀
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// src/components/home/WhyChooseUs.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckCircle,
  Users,
  BookOpen,
  Globe,
  Banknote,
  LifeBuoy,
  MessageCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ICONS = {
  users: Users,
  'check-circle': CheckCircle,
  'book-open': BookOpen,
  globe: Globe,
  banknote: Banknote,
  'life-buoy': LifeBuoy,
  'message-circle': MessageCircle
};

const DEFAULT_FEATURES = [
  {
    key: 'expert',
    icon: Users,
    title: 'Expert Counsellors with Industry Insight',
    description:
      'Our team consists of seasoned professionals with extensive experience in both academics and industry, providing you with well-rounded and practical guidance.',
    color: 'from-green-600 to-sky-600'
  },
  {
    key: 'personal',
    icon: CheckCircle,
    title: 'Personalized Attention',
    description:
      "We work with a limited number of students per semester, ensuring each applicant receives dedicated time and support for a strong application strategy.",
    color: 'from-yellow-500 to-orange-400'
  },
  {
    key: 'levels',
    icon: BookOpen,
    title: 'Support Across All Academic Levels',
    description:
      "Whether you're applying for an Undergraduate, Master's, MBA, or Ph.D., we offer tailored assistance that meets the unique requirements of each program level.",
    color: 'from-green-500 to-emerald-500'
  },
  {
    key: 'fields',
    icon: Globe,
    title: 'Wide Range of Study Fields',
    description:
      'Our expertise spans diverse disciplines, helping students from various academic backgrounds in finding the best-fit programs and universities.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    key: 'tuition',
    icon: Banknote,
    title: 'Opportunities for Tuition-Free Education',
    description:
      'We help identify programs and institutions that offer tuition-free or low-cost education, increasing your chances of an affordable, high-quality education in Europe.',
    color: 'from-red-500 to-rose-500'
  },
  {
    key: 'endtoend',
    icon: LifeBuoy,
    title: 'End-to-End Support',
    description:
      "From application to onboarding and settling in, we stand by your side throughout your educational journey.",
    color: 'from-indigo-500 to-blue-500'
  }
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { t } = useTranslation('common');

  // Load features from i18n (supports array OR object)
  const rawFeatures = t('why.features', { returnObjects: true });
  let features = DEFAULT_FEATURES;

  if (rawFeatures) {
    if (Array.isArray(rawFeatures) && rawFeatures.length) {
      features = rawFeatures.map((f, i) => ({
        key: f.key ?? `f_${i}`,
        icon: (f.icon && ICONS[f.icon]) ? ICONS[f.icon] : (ICONS[f.key] || DEFAULT_FEATURES[i]?.icon),
        title: f.title ?? f.name ?? '',
        description: f.description ?? f.desc ?? '',
        color: f.color ?? DEFAULT_FEATURES[i]?.color ?? 'from-green-600 to-sky-600'
      }));
    } else if (typeof rawFeatures === 'object') {
      // object keyed: convert to array sorted by key if numeric-ish
      const keys = Object.keys(rawFeatures).sort((a, b) => {
        const na = Number(a), nb = Number(b);
        if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
        return String(a).localeCompare(String(b));
      });
      features = keys.map((k, i) => {
        const f = rawFeatures[k] || {};
        return {
          key: f.key ?? k,
          icon: (f.icon && ICONS[f.icon]) ? ICONS[f.icon] : (ICONS[f.key] || DEFAULT_FEATURES[i]?.icon),
          title: f.title ?? f.name ?? '',
          description: f.description ?? f.desc ?? '',
          color: f.color ?? DEFAULT_FEATURES[i]?.color ?? 'from-green-600 to-sky-600'
        };
      });
    }
  }

  // additional highlights
  const add = t('why.additional_highlights', { returnObjects: true }) || {};
  const cta = t('why.cta', { returnObjects: true }) || {};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-16 md:py-20 lg:py-28"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            {t('why.heading') ? t('why.heading').split('{brand}')[0] : 'Why Choose '}
            <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
             {" "} {t('footer.company') || ' Eduberator'}
            </span>
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('why.sub') || 'All our services are conducted entirely online — no office visits required. We stay in close communication via Email, TEAMS/Zoom, and WhatsApp to guide you at every step.'}
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((f, i) => {
            const Icon = f.icon || DEFAULT_FEATURES[i].icon || Users;
            return (
              <motion.div key={f.key ?? i} variants={itemVariants} className="group">
                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${f.color} p-3 mb-4 flex items-center justify-center shadow-inner`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-auto">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Highlights */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{add.specialization_title || 'Specialization in European Admissions'}</h4>
              <p className="text-gray-600 text-sm md:text-base">
                {add.specialization_text || 'We focus on top universities across Europe, providing insights into regional requirements, culture, and opportunities to help you pick the right destination.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <MessageCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{add.online_title || 'Fully Online & Always Connected'}</h4>
              <p className="text-gray-600 text-sm md:text-base">
                {add.online_text || "All services are delivered online. We'll be in touch via Email, TEAMS/Zoom, and WhatsApp for document reviews, mock interviews, application tracking, and onboarding help."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{(cta.title) || 'Ready to build your roadmap?'}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                { (cta.text) || 'Book a free consultation and let our experts craft a personalized plan for your European education journey.'}
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-lg transition-all mt-4 md:mt-0">
              { (cta.button) || 'Start My Journey 🚀' }
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
