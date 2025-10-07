// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { CheckCircle, Users, Target, Shield, Zap, Globe } from 'lucide-react';

// const WhyChooseUs = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });

//   const features = [
//     {
//       icon: Target,
//       title: "Germany-Only Experts",
//       description: "100% focused on German education system. Deep knowledge of Uni-Assist, Blocked Accounts, and visa processes.",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: Zap,
//       title: "The Eduberator Strategy",
//       description: "We analyze your profile for maximum career ROI, not just eligibility. Your success is our business model.",
//       color: "from-yellow-500 to-orange-500"
//     },
//     {
//       icon: Users,
//       title: "Direct University Insights",
//       description: "Strong connections with TU9, U15 universities. Real-time updates on admission requirements and deadlines.",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: Shield,
//       title: "End-to-End Ownership",
//       description: "From first search to your first day in Germany. We handle everything while you focus on preparation.",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: Globe,
//       title: "Cultural Integration",
//       description: "Beyond admissions - we prepare you for German culture, lifestyle, and professional environment.",
//       color: "from-red-500 to-rose-500"
//     },
//     {
//       icon: CheckCircle,
//       title: "Proven Success Rate",
//       description: "99% admission success with 500+ students placed in top German universities across 50+ institutions.",
//       color: "from-indigo-500 to-blue-500"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3]
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.4, 0.2, 0.4]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Beyond Counseling: We Are Your{' '}
//             <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
//               Strategic Education Partner
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             The name <span className="text-yellow-400 font-semibold">Eduberator</span> comes from a simple belief: your education should be a strategic investment that pays lifelong dividends. We architect personalized roadmaps to turn your German dream into a profitable reality.
//           </motion.p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="group relative"
//             >
//               {/* 3D Card with Hover Effects */}
//               <motion.div
//                 className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 h-full"
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   rotateX: 5,
//                   rotateY: 5
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {/* Gradient Border Effect on Hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-yellow-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-yellow-500/20 group-hover:to-blue-500/20 transition-all duration-500 blur-sm" />
                
//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Animated Icon */}
//                   <motion.div
//                     className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 flex items-center justify-center`}
//                     whileHover={{ 
//                       scale: 1.1,
//                       rotate: 360 
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <feature.icon className="w-8 h-8 text-white" />
//                   </motion.div>

//                   <h3 className="text-2xl font-bold text-white mb-4">
//                     {feature.title}
//                   </h3>
                  
//                   <p className="text-gray-300 leading-relaxed">
//                     {feature.description}
//                   </p>

//                   {/* Hover Indicator */}
//                   <motion.div
//                     className="absolute bottom-6 left-8 w-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
//                     initial={{ width: 0 }}
//                     whileHover={{ width: 48 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           <motion.div
//             className="inline-flex flex-col sm:flex-row gap-6 items-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <div className="text-left">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Ready to Generate Your Future in Germany?
//               </h3>
//               <p className="text-gray-300">
//                 Let's build your personalized Eduberator roadmap today.
//               </p>
//             </div>
//             <motion.button
//               className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 whitespace-nowrap"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Start My Journey 🚀
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, BookOpen, Globe, Banknote, LifeBuoy, MessageCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const features = [
    {
      icon: Users,
      title: 'Expert Counsellors with Industry Insight',
      description:
        'Our team consists of seasoned professionals with extensive experience in both academics and industry, providing you with well-rounded and practical guidance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Personalized Attention',
      description:
        "We work with a limited number of students per semester, ensuring each applicant receives dedicated time and support for a strong application strategy.",
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Support Across All Academic Levels',
      description:
        "Whether you're applying for an Undergraduate, Master's, MBA, or Ph.D., we offer tailored assistance that meets the unique requirements of each program level.",
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Wide Range of Study Fields',
      description:
        'Our expertise spans diverse disciplines, helping students from various academic backgrounds in finding the best-fit programs and universities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Banknote,
      title: 'Opportunities for Tuition-Free Education',
      description:
        'We help identify programs and institutions that offer tuition-free or low-cost education, increasing your chances of an affordable, high-quality education in Europe.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: LifeBuoy,
      title: 'End-to-End Support',
      description:
        "From application to onboarding and settling in, we stand by your side throughout your educational journey.",
      color: 'from-indigo-500 to-blue-500'
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

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-400">Eduberator</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All our services are conducted entirely online — no office visits required. We stay in close communication with you via Email, TEAMS/Zoom, and WhatsApp to guide you at every step.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants} className="relative group">
              <div className="relative bg-gray-800/40 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/40 transition-all duration-300 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${f.color} p-3 mb-4 flex items-center justify-center`}> 
                  <f.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Row: Specialization in European Admissions + Communication */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative bg-gray-800/40 backdrop-blur rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-lg font-semibold text-white">Specialization in European Admissions</h4>
                <p className="text-gray-300">We focus on top universities across Europe, providing insights into regional requirements, culture, and opportunities to help you pick the right destination.</p>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-800/40 backdrop-blur rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start gap-4">
              <MessageCircle className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-lg font-semibold text-white">Fully Online & Always Connected</h4>
                <p className="text-gray-300">All services are delivered online. We'll be in touch via Email, TEAMS/Zoom, and WhatsApp for document reviews, mock interviews, application tracking, and onboarding help.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-6 bg-white/6 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">Ready to build your roadmap?</h3>
              <p className="text-gray-300">Book a free consultation and let our experts craft a personalized plan for your European education journey.</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-lg transition-all">Start My Journey 🚀</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
