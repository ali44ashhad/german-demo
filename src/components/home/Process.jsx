// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { 
//   UserCheck, 
//   Search, 
//   FileText, 
//   Shield,
//   ArrowRight,
//   CheckCircle,
//   Sparkles
// } from 'lucide-react';

// const Process = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const steps = [
//     {
//       step: 1,
//       icon: UserCheck,
//       title: "Profile Analysis & Strategy",
//       description: "Comprehensive assessment of your academic background, goals, and career aspirations to create your personalized Eduberator roadmap.",
//       color: "from-green-600 to-sky-600",
//       features: ["Academic Evaluation", "Career Goal Mapping", "ROI Analysis", "Timeline Planning"],
//       image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
//     },
//     {
//       step: 2,
//       icon: Search,
//       title: "University & Program Finalization",
//       description: "Strategic selection from TU9, U15, and Applied Sciences universities based on your profile and German job market trends.",
//       color: "from-green-600 to-sky-600",
//       features: ["TU9 University Matching", "Program Research", "Admission Probability", "Backup Options"],
//       image: "https://images.unsplash.com/photo-152305962303-aa56b8d6b52f?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
//     },
//     {
//       step: 3,
//       icon: FileText,
//       title: "Application & Documentation",
//       description: "Perfect your applications with German-style SOPs, LORs, and handle Uni-Assist VPD processing with expert guidance.",
//       color: "from-green-600 to-sky-600",
//       features: ["SOP Writing", "LOR Preparation", "VPD Processing", "Document Verification"],
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
//     },
//     {
//       step: 4,
//       icon: Shield,
//       title: "Visa & Pre-Departure",
//       description: "Complete visa application support, blocked account setup, and cultural preparation for your German journey.",
//       color: "from-green-600 to-sky-600",
//       features: ["Visa Documentation", "Blocked Account", "Health Insurance", "Cultural Briefing"],
//       image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
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

//   const stepVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 60,
//       scale: 0.8
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section ref={ref} className="relative py-20 bg-gradient-to-br from-white via-sky-50 to-green-50 overflow-hidden">
//       {/* Soft Background Image (light, subtle) */}
//       <div 
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />

//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-10 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.4, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             x: [0, 50, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 bg-green-50/50 border border-green-100 rounded-full px-6 py-3 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Sparkles className="w-5 h-5 text-green-600" />
//             <span className="text-green-600 font-semibold">4-Step Success Process</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             The Eduberator{' '}
//             <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
//               Roadmap to Germany
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             A proven 4-step process that has helped 500+ students successfully reach their dream German universities. 
//             We handle the complexity while you focus on your preparation.
//           </motion.p>
//         </motion.div>

//         {/* Process Steps */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.step}
//               variants={stepVariants}
//               className="group relative"
//             >
//               {/* Background Image for Step */}
//               <div 
//                 className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-6 transition-opacity duration-500"
//                 style={{
//                   backgroundImage: `url('${step.image}')`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center'
//                 }}
//               />

//               {/* Connecting Line (for desktop) */}
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-green-600 to-sky-600 z-0" />
//               )}

//               {/* Main Card */}
//               <motion.div
//                 className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md h-full"
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   transition: { type: "spring", stiffness: 300 }
//                 }}
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 {/* Step Number Badge */}
//                 <motion.div
//                   className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl`}
//                   whileHover={{ 
//                     scale: 1.08,
//                     rotate: 360
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {step.step}
//                 </motion.div>

//                 <div className="flex flex-col lg:flex-row gap-8 items-center">
//                   {/* Icon Section */}
//                   <motion.div
//                     className="flex-shrink-0 w-40 h-40 relative"
//                     whileHover={{ 
//                       scale: 1.06,
//                       rotateY: 10
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {/* Background Pattern */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-green-50 rounded-2xl" />
                    
//                     {/* Floating Icon */}
//                     <motion.div
//                       className={`absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
//                       animate={{
//                         y: [0, -10, 0],
//                         rotate: [0, 5, 0]
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: index * 0.5
//                       }}
//                     >
//                       <step.icon className="w-6 h-6" />
//                     </motion.div>

//                     {/* Step Icon in Center */}
//                     <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
//                       <step.icon className="w-10 h-10 text-white" />
//                     </div>
//                   </motion.div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       {step.title}
//                     </h3>
                    
//                     <p className="text-gray-700 mb-6 leading-relaxed">
//                       {step.description}
//                     </p>

//                     {/* Features List */}
//                     <div className="space-y-2">
//                       {step.features.map((feature, featureIndex) => (
//                         <motion.div
//                           key={featureIndex}
//                           className="flex items-center gap-3"
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                           transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
//                         >
//                           <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
//                           <span className="text-gray-700 text-sm">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hover Effect */}
//                 <motion.div
//                   className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 -z-10`}
//                   initial={{ scale: 0.8 }}
//                   whileHover={{ scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           <div className="bg-gradient-to-r from-green-50 to-sky-50 backdrop-blur-lg rounded-3xl p-12 border border-green-100 relative">
//             {/* Background Image */}
//             <div 
//               className="absolute inset-0 rounded-3xl opacity-4"
//               style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             />
            
//             <motion.h3
//               className="text-3xl font-bold text-gray-900 mb-4 relative z-10"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 1 }}
//             >
//               Ready to Start Your German Journey?
//             </motion.h3>
            
//             <motion.p
//               className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto relative z-10"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//             >
//               Let's begin with step 1 - your personalized profile analysis and strategy session.
//             </motion.p>

//             <motion.button
//               className="px-12 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 group relative z-10"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//             >
//               <span className="flex items-center justify-center gap-3">
//                 Start My Profile Analysis
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </motion.button>

//             <motion.p
//               className="text-green-600 mt-4 flex items-center justify-center gap-2 relative z-10"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6, delay: 1.3 }}
//             >
//               <CheckCircle className="w-5 h-5" />
//               Free initial consultation - No commitment required
//             </motion.p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Process;


// src/components/home/Process.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UserCheck,
  Search,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FALLBACK_STEPS = [
  {
    step: 1,
    icon: UserCheck,
    title: "Profile Analysis & Strategy",
    description: "Comprehensive assessment of your academic background, goals, and career aspirations to create your personalized Eduberator roadmap.",
    color: "from-green-600 to-sky-600",
    features: ["Academic Evaluation", "Career Goal Mapping", "ROI Analysis", "Timeline Planning"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
  },
  {
    step: 2,
    icon: Search,
    title: "University & Program Finalization",
    description: "Strategic selection from TU9, U15, and Applied Sciences universities based on your profile and German job market trends.",
    color: "from-green-600 to-sky-600",
    features: ["TU9 University Matching", "Program Research", "Admission Probability", "Backup Options"],
    image: "https://images.unsplash.com/photo-152305962303-aa56b8d6b52f?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
  },
  {
    step: 3,
    icon: FileText,
    title: "Application & Documentation",
    description: "Perfect your applications with German-style SOPs, LORs, and handle Uni-Assist VPD processing with expert guidance.",
    color: "from-green-600 to-sky-600",
    features: ["SOP Writing", "LOR Preparation", "VPD Processing", "Document Verification"],
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
  },
  {
    step: 4,
    icon: Shield,
    title: "Visa & Pre-Departure",
    description: "Complete visa application support, blocked account setup, and cultural preparation for your German journey.",
    color: "from-green-600 to-sky-600",
    features: ["Visa Documentation", "Blocked Account", "Health Insurance", "Cultural Briefing"],
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation('common');

  // read steps from i18n; allow array or keyed object
  const rawSteps = t('process.steps', { returnObjects: true });
  let steps = FALLBACK_STEPS;

  if (rawSteps) {
    if (Array.isArray(rawSteps) && rawSteps.length) {
      steps = rawSteps;
    } else if (typeof rawSteps === 'object' && Object.keys(rawSteps).length) {
      // convert keyed object to array and sort by numeric key when possible
      const keys = Object.keys(rawSteps).sort((a, b) => {
        const na = Number(a), nb = Number(b);
        if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
        return String(a).localeCompare(String(b));
      });
      steps = keys.map(k => rawSteps[k]);
    }
  }

  // ensure each step has features array and color
  steps = steps.map((s, idx) => ({
    step: s.step ?? idx + 1,
    icon: s.icon ?? [UserCheck, Search, FileText, Shield][idx] ?? UserCheck,
    title: s.title ?? `Step ${s.step ?? idx + 1}`,
    description: s.description ?? '',
    features: Array.isArray(s.features) ? s.features : [],
    image: s.image ?? '',
    color: s.color ?? 'from-green-600 to-sky-600'
  }));

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-white via-sky-50 to-green-50 overflow-hidden">
      {/* Soft Background Image (light, subtle) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-50/50 border border-green-100 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-semibold">{t('process.badge') ?? '4-Step Success Process'}</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('process.heading') ?? 'The Eduberator Roadmap to Germany'}
            <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent"> </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('process.sub') ?? 'A proven 4-step process that has helped 500+ students successfully reach their dream German universities. We handle the complexity while you focus on your preparation.'}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => {
            // pick icon component (if icon is a string name in locale, you can map it; fallback to defaults above)
            const IconComp = step.icon && typeof step.icon === 'function' ? step.icon : [UserCheck, Search, FileText, Shield][index] || UserCheck;

            return (
              <motion.div key={step.step ?? index} variants={stepVariants} className="group relative">
                {/* Background Image for Step */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-6 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('${step.image ?? ''}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Connecting Line (for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-green-600 to-sky-600 z-0" />
                )}

                {/* Main Card */}
                <motion.div
                  className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md h-full"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color ?? 'from-green-600 to-sky-600'} flex items-center justify-center text-white font-bold text-xl shadow-2xl`}
                    whileHover={{
                      scale: 1.08,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.step}
                  </motion.div>

                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Icon Section */}
                    <motion.div className="flex-shrink-0 w-40 h-40 relative" whileHover={{ scale: 1.06, rotateY: 10 }} transition={{ duration: 0.5 }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-green-50 rounded-2xl" />

                      <motion.div
                        className={`absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r ${step.color ?? 'from-green-600 to-sky-600'} flex items-center justify-center text-white shadow-lg`}
                        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      >
                        <IconComp className="w-6 h-6" />
                      </motion.div>

                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color ?? 'from-green-600 to-sky-600'} flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                        <IconComp className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {(Array.isArray(step.features) ? step.features : []).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color ?? 'from-green-600 to-sky-600'} opacity-0 group-hover:opacity-5 -z-10`}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <div className="bg-gradient-to-r from-green-50 to-sky-50 backdrop-blur-lg rounded-3xl p-12 border border-green-100 relative">
            <div className="absolute inset-0 rounded-3xl opacity-4" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

            <motion.h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 1 }}>
              {t('process.cta_title') ?? 'Ready to Start Your German Journey?'}
            </motion.h3>

            <motion.p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto relative z-10" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 1.1 }}>
              {t('process.cta_note') ?? "Let's begin with step 1 - your personalized profile analysis and strategy session."}
            </motion.p>

            <motion.button className="px-12 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 group relative z-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 1.2 }}>
              <span className="flex items-center justify-center gap-3">{t('process.cta_button') ?? 'Start My Profile Analysis'} <ArrowRight className="w-5 h-5" /></span>
            </motion.button>

            <motion.p className="text-green-600 mt-4 flex items-center justify-center gap-2 relative z-10" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 1.3 }}>
              <CheckCircle className="w-5 h-5" /> {t('process.cta_note') ?? 'Free initial consultation - No commitment required'}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
