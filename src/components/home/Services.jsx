// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   Search, 
//   FileText, 
//   BookOpen, 
//   Shield, 
//   Plane, 
//   Users,
//   ArrowRight,
//   Star,
//   CheckCircle
// } from 'lucide-react';

// const Services = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const services = [
//     {
//       icon: Search,
//       title: "University & Program Shortlisting",
//       description: "Strategic selection from TU9, U15, and Universities of Applied Sciences based on your profile and career goals.",
//       features: ["TU9 University Matching", "Career ROI Analysis", "Program Fit Assessment", "Future Job Market Trends"],
//       color: "from-blue-500 to-cyan-500",
//       delay: 0.1
//     },
//     {
//       icon: FileText,
//       title: "Application & Documentation Mastery",
//       description: "Expert handling of VPD from Uni-Assist, German-style SOPs, LORs, and Europass CV preparation.",
//       features: ["Uni-Assist VPD Processing", "German SOP Writing", "LOR Optimization", "Document Verification"],
//       color: "from-purple-500 to-pink-500",
//       delay: 0.2
//     },
//     {
//       icon: BookOpen,
//       title: "Admission Test Guidance",
//       description: "Comprehensive preparation support for TestAS, GRE, GMAT and other required entrance examinations.",
//       features: ["TestAS Preparation", "Study Material", "Mock Tests", "Strategy Sessions"],
//       color: "from-green-500 to-emerald-500",
//       delay: 0.3
//     },
//     {
//       icon: Shield,
//       title: "Blocked Account & Financial Proof",
//       description: "Complete guidance on setting up your Sperrkonto and preparing financial documentation for visa.",
//       features: ["Blocked Account Setup", "Financial Planning", "Document Preparation", "Bank Coordination"],
//       color: "from-yellow-500 to-orange-500",
//       delay: 0.4
//     },
//     {
//       icon: Plane,
//       title: "German Student Visa Support",
//       description: "End-to-end visa application support including appointment booking, document checklist, and mock interviews.",
//       features: ["Visa Appointment", "Document Checklist", "Mock Interviews", "Application Tracking"],
//       color: "from-red-500 to-rose-500",
//       delay: 0.5
//     },
//     {
//       icon: Users,
//       title: "Pre-Departure & Cultural Integration",
//       description: "Complete preparation for life in Germany - from accommodation search to understanding German culture.",
//       features: ["Accommodation Support", "Health Insurance", "Cultural Training", "Airport Pickup Coordination"],
//       color: "from-indigo-500 to-blue-500",
//       delay: 0.6
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 60,
//       rotateX: 15
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
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
//           className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, 50, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-10 left-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             y: [0, -40, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
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
//             className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Star className="w-5 h-5 text-yellow-400" />
//             <span className="text-yellow-400 font-semibold">Germany-Specific Expertise</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             Our Comprehensive{' '}
//             <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
//               Germany Services
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             From university selection to your first day in Germany - we handle every step with German precision and expertise.
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               custom={index}
//               className="group relative"
//             >
//               {/* Main Card */}
//               <motion.div
//                 className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 hover:border-cyan-400/50 h-full flex flex-col"
//                 whileHover={{ 
//                   y: -15,
//                   scale: 1.02,
//                   rotateY: 5,
//                   transition: { type: "spring", stiffness: 300 }
//                 }}
//                 style={{
//                   transformStyle: "preserve-3d"
//                 }}
//               >
//                 {/* Gradient Glow Effect */}
//                 <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
//                 {/* Service Icon */}
//                 <motion.div
//                   className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-5 mb-6 flex items-center justify-center relative overflow-hidden`}
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotate: [0, -5, 5, 0]
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <service.icon className="w-10 h-10 text-white" />
                  
//                   {/* Shine Effect */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                     initial={{ x: -100 }}
//                     whileHover={{ x: 200 }}
//                     transition={{ duration: 0.8 }}
//                   />
//                 </motion.div>

//                 {/* Service Content */}
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-white mb-4">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>

//                   {/* Features List */}
//                   <div className="space-y-3 mb-6">
//                     {service.features.map((feature, featureIndex) => (
//                       <motion.div
//                         key={featureIndex}
//                         className="flex items-center gap-3"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                         transition={{ duration: 0.5, delay: service.delay + featureIndex * 0.1 }}
//                       >
//                         <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                         <span className="text-gray-300 text-sm">{feature}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <motion.button
//                   className="w-full mt-auto flex items-center justify-center gap-2 py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all duration-300 group/btn"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span>Learn More</span>
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </motion.div>
//                 </motion.button>

//                 {/* Hover Border Animation */}
//                 <motion.div
//                   className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 -z-10`}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   whileHover={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom Process Indicator */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-4 bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
//             <motion.div
//               className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full flex items-center justify-center"
//               animate={{ 
//                 scale: [1, 1.1, 1],
//                 rotate: [0, 180, 360]
//               }}
//               transition={{ 
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <CheckCircle className="w-6 h-6 text-gray-900" />
//             </motion.div>
//             <div className="text-left">
//               <h3 className="text-xl font-bold text-white">
//                 Ready to Start Your German Journey?
//               </h3>
//               <p className="text-gray-300">
//                 Let's discuss which services are perfect for your profile.
//               </p>
//             </div>
//             <motion.button
//               className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      link: "/services/forex-card-remittances"
    },
    {
      icon: Home,
      title: "Accommodation",
      description: "Find your perfect home in Germany with our comprehensive accommodation services near universities.",
      features: ["Student Hostels", "Shared Apartments", "Studio Flats", "Homestay Options"],
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      link: "/services/accommodation"
    },
    {
      icon: Heart,
      title: "Medical Insurance",
      description: "German health insurance solutions meeting visa requirements with comprehensive coverage for international students.",
      features: ["Visa Compliance", "Full Coverage", "EU-Wide Validity", "Multilingual Support"],
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
      link: "/services/medical-insurance"
    },
    {
      icon: TrendingUp,
      title: "Education Loan",
      description: "Financial assistance for Indian students pursuing higher education in Germany with flexible repayment options.",
      features: ["Collateral-Free", "Low Interest", "Flexible Tenure", "Quick Processing"],
      color: "from-orange-500 to-red-500",
      delay: 0.4,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
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
      rotateX: 15
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
          className="absolute top-10 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
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
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Essential Services for Germany</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Core{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Complete support services for Indian students - from financial solutions to accommodation and insurance, we've got you covered for your German journey.
          </motion.p>
        </motion.div>

        {/* Services Grid - Now 2x2 layout for 4 services */}
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
              {/* Background Image for Service */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${service.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Make whole card clickable by wrapping the card in Link (avoid nested Link inside) */}
              <Link to={service.link} className="block relative z-10" aria-label={`${service.title} — Learn more`}>
                <motion.div
                  className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 hover:border-cyan-400/50 h-full flex flex-col"
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Gradient Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Service Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-5 mb-6 flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: -100 }}
                      whileHover={{ x: 200 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: service.delay + featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button (visual only) */}
                  <div className="mt-2">
                    <motion.div
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover Border Animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 -z-10`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-5"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523050853678-2b2f6a6ed51d?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full flex items-center justify-center relative z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CheckCircle className="w-6 h-6 text-gray-900" />
            </motion.div>
            <div className="text-left relative z-10">
              <h3 className="text-xl font-bold text-white">
                Need Comprehensive Support?
              </h3>
              <p className="text-gray-300">
                Explore all our services in detail and get personalized assistance.
              </p>
            </div>
            <Link to="/services">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
