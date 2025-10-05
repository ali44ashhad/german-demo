// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   UserCheck, 
//   Search, 
//   FileText, 
//   Shield, 
//   Plane,
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
//       description: "Comprehensive assessment of your academic background, goals, and career aspirations to create your personalized Profitberator roadmap.",
//       color: "from-blue-500 to-cyan-500",
//       features: ["Academic Evaluation", "Career Goal Mapping", "ROI Analysis", "Timeline Planning"],
//       svg: (
//         <svg viewBox="0 0 200 200" className="w-full h-full">
//           <circle cx="100" cy="100" r="80" fill="url(#blueGradient)" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
//           <path d="M80 100 L95 115 L120 85" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round"/>
//           <defs>
//             <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#3B82F6"/>
//               <stop offset="100%" stopColor="#06B6D4"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
//     },
//     {
//       step: 2,
//       icon: Search,
//       title: "University & Program Finalization",
//       description: "Strategic selection from TU9, U15, and Applied Sciences universities based on your profile and German job market trends.",
//       color: "from-purple-500 to-pink-500",
//       features: ["TU9 University Matching", "Program Research", "Admission Probability", "Backup Options"],
//       svg: (
//         <svg viewBox="0 0 200 200" className="w-full h-full">
//           <rect x="50" y="50" width="100" height="100" rx="15" fill="url(#purpleGradient)" stroke="currentColor" strokeWidth="2" className="text-purple-400"/>
//           <circle cx="100" cy="80" r="25" fill="white" opacity="0.8"/>
//           <line x1="75" y1="120" x2="125" y2="150" stroke="white" strokeWidth="6" strokeLinecap="round"/>
//           <defs>
//             <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#8B5CF6"/>
//               <stop offset="100%" stopColor="#EC4899"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
//     },
//     {
//       step: 3,
//       icon: FileText,
//       title: "Application & Documentation",
//       description: "Perfect your applications with German-style SOPs, LORs, and handle Uni-Assist VPD processing with expert guidance.",
//       color: "from-green-500 to-emerald-500",
//       features: ["SOP Writing", "LOR Preparation", "VPD Processing", "Document Verification"],
//       svg: (
//         <svg viewBox="0 0 200 200" className="w-full h-full">
//           <path d="M60 60 L140 60 L140 140 L60 140 Z" fill="url(#greenGradient)" stroke="currentColor" strokeWidth="2" className="text-green-400"/>
//           <line x1="70" y1="80" x2="130" y2="80" stroke="white" strokeWidth="4"/>
//           <line x1="70" y1="100" x2="130" y2="100" stroke="white" strokeWidth="4"/>
//           <line x1="70" y1="120" x2="110" y2="120" stroke="white" strokeWidth="4"/>
//           <defs>
//             <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#10B981"/>
//               <stop offset="100%" stopColor="#059669"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
//     },
//     {
//       step: 4,
//       icon: Shield,
//       title: "Visa & Pre-Departure",
//       description: "Complete visa application support, blocked account setup, and cultural preparation for your German journey.",
//       color: "from-yellow-500 to-orange-500",
//       features: ["Visa Documentation", "Blocked Account", "Health Insurance", "Cultural Briefing"],
//       svg: (
//         <svg viewBox="0 0 200 200" className="w-full h-full">
//           <path d="M100 50 L150 80 L150 140 L50 140 L50 80 Z" fill="url(#yellowGradient)" stroke="currentColor" strokeWidth="2" className="text-yellow-400"/>
//           <circle cx="100" cy="100" r="20" fill="white" opacity="0.8"/>
//           <path d="M95 95 L105 105 M105 95 L95 105" stroke="currentColor" strokeWidth="4" className="text-yellow-600"/>
//           <defs>
//             <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#EAB308"/>
//               <stop offset="100%" stopColor="#F97316"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
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
//     <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
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
//           className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
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
        
//         {/* Animated Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
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
//             className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Sparkles className="w-5 h-5 text-cyan-400" />
//             <span className="text-cyan-400 font-semibold">4-Step Success Process</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             The Profitberator{' '}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Roadmap to Germany
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
//               {/* Connecting Line (for desktop) */}
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-0" />
//               )}

//               {/* Main Card */}
//               <motion.div
//                 className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 hover:border-cyan-400/50 h-full"
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   transition: { type: "spring", stiffness: 300 }
//                 }}
//               >
//                 {/* Step Number Badge */}
//                 <motion.div
//                   className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl`}
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotate: 360
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {step.step}
//                 </motion.div>

//                 <div className="flex flex-col lg:flex-row gap-8 items-center">
//                   {/* SVG Illustration */}
//                   <motion.div
//                     className="flex-shrink-0 w-40 h-40 relative"
//                     whileHover={{ 
//                       scale: 1.1,
//                       rotateY: 10
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {step.svg}
                    
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
//                   </motion.div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold text-white mb-4">
//                       {step.title}
//                     </h3>
                    
//                     <p className="text-gray-300 mb-6 leading-relaxed">
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
//                           <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                           <span className="text-gray-300 text-sm">{feature}</span>
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
//           <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/20">
//             <motion.h3
//               className="text-3xl font-bold text-white mb-4"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 1 }}
//             >
//               Ready to Start Your German Journey?
//             </motion.h3>
            
//             <motion.p
//               className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//             >
//               Let's begin with step 1 - your personalized profile analysis and strategy session.
//             </motion.p>

//             <motion.button
//               className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
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
//               className="text-cyan-300 mt-4 flex items-center justify-center gap-2"
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

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  UserCheck, 
  Search, 
  FileText, 
  Shield, 
  Plane,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const steps = [
    {
      step: 1,
      icon: UserCheck,
      title: "Profile Analysis & Strategy",
      description: "Comprehensive assessment of your academic background, goals, and career aspirations to create your personalized Profitberator roadmap.",
      color: "from-blue-500 to-cyan-500",
      features: ["Academic Evaluation", "Career Goal Mapping", "ROI Analysis", "Timeline Planning"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      step: 2,
      icon: Search,
      title: "University & Program Finalization",
      description: "Strategic selection from TU9, U15, and Applied Sciences universities based on your profile and German job market trends.",
      color: "from-purple-500 to-pink-500",
      features: ["TU9 University Matching", "Program Research", "Admission Probability", "Backup Options"],
      image: "https://images.unsplash.com/photo-152305962303-aa56b8d6b52f?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      step: 3,
      icon: FileText,
      title: "Application & Documentation",
      description: "Perfect your applications with German-style SOPs, LORs, and handle Uni-Assist VPD processing with expert guidance.",
      color: "from-green-500 to-emerald-500",
      features: ["SOP Writing", "LOR Preparation", "VPD Processing", "Document Verification"],
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      step: 4,
      icon: Shield,
      title: "Visa & Pre-Departure",
      description: "Complete visa application support, blocked account setup, and cultural preparation for your German journey.",
      color: "from-yellow-500 to-orange-500",
      features: ["Visa Documentation", "Blocked Account", "Health Insurance", "Cultural Briefing"],
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
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

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 overflow-hidden">
      {/* Background Image */}
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
          className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">4-Step Success Process</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The Profitberator{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Roadmap to Germany
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A proven 4-step process that has helped 500+ students successfully reach their dream German universities. 
            We handle the complexity while you focus on your preparation.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="group relative"
            >
              {/* Background Image for Step */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${step.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Connecting Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-0" />
              )}

              {/* Main Card */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 hover:border-cyan-400/50 h-full"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Step Number Badge */}
                <motion.div
                  className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {step.step}
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Icon Section */}
                  <motion.div
                    className="flex-shrink-0 w-40 h-40 relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl" />
                    
                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>

                    {/* Step Icon in Center */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 -z-10`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/20 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-5"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <motion.h3
              className="text-3xl font-bold text-white mb-4 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Ready to Start Your German Journey?
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Let's begin with step 1 - your personalized profile analysis and strategy session.
            </motion.p>

            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="flex items-center justify-center gap-3">
                Start My Profile Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.p
              className="text-cyan-300 mt-4 flex items-center justify-center gap-2 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <CheckCircle className="w-5 h-5" />
              Free initial consultation - No commitment required
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;