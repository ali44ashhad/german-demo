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
//       title: "The Profitberator Strategy",
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
//             The name <span className="text-yellow-400 font-semibold">Profitberator</span> comes from a simple belief: your education should be a strategic investment that pays lifelong dividends. We architect personalized roadmaps to turn your German dream into a profitable reality.
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
//                 Let's build your personalized Profitberator roadmap today.
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
import { CheckCircle, Users, Target, Shield, Zap, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const features = [
    {
      icon: Target,
      title: "Germany-Only Experts",
      description: "100% focused on German education system. Deep knowledge of Uni-Assist, Blocked Accounts, and visa processes.",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-152305962303-aa56b8d6b52f?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "The Profitberator Strategy",
      description: "We analyze your profile for maximum career ROI, not just eligibility. Your success is our business model.",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Direct University Insights",
      description: "Strong connections with TU9, U15 universities. Real-time updates on admission requirements and deadlines.",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Shield,
      title: "End-to-End Ownership",
      description: "From first search to your first day in Germany. We handle everything while you focus on preparation.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Beyond admissions - we prepare you for German culture, lifestyle, and professional environment.",
      color: "from-red-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1506905925340-14faa3c85743?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: CheckCircle,
      title: "Proven Success Rate",
      description: "99% admission success with 500+ students placed in top German universities across 50+ institutions.",
      color: "from-indigo-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1523050853678-2b2f6a6ed51d?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond Counseling: We Are Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Strategic Education Partner
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The name <span className="text-yellow-400 font-semibold">Profitberator</span> comes from a simple belief: your education should be a strategic investment that pays lifelong dividends. We architect personalized roadmaps to turn your German dream into a profitable reality.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Background Image for Card */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${feature.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* 3D Card with Hover Effects */}
              <motion.div
                className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 h-full"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-yellow-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-yellow-500/20 group-hover:to-blue-500/20 transition-all duration-500 blur-sm" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Animated Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-6 left-8 w-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: 48 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-6 items-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Image for CTA */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-5"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <div className="text-left relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Generate Your Future in Germany?
              </h3>
              <p className="text-gray-300">
                Let's build your personalized Profitberator roadmap today.
              </p>
            </div>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 whitespace-nowrap relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start My Journey 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;