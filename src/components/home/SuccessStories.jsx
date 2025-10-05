// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { 
//   Quote, 
//   Star, 
//   MapPin, 
//   Calendar, 
//   Award, 
//   Play,
//   ArrowLeft,
//   ArrowRight
// } from 'lucide-react';

// const SuccessStories = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });
//   const [activeStory, setActiveStory] = useState(0);

//   const successStories = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       image: "/api/placeholder/400/400",
//       program: "M.Sc. Computer Science",
//       university: "Technical University of Munich",
//       destination: "Munich, Germany",
//       duration: "2023 Admission",
//       score: "IELTS 7.5 | TestAS 94%",
//       story: "Profitberator's strategic approach helped me secure admission to my dream university. Their guidance on German-style SOPs and TestAS preparation was invaluable. The ROI-focused counseling showed me exactly how this degree would benefit my career.",
//       video: "/api/placeholder/1920/1080",
//       achievements: ["TU9 University", "€15,000 Scholarship", "Research Assistant Position"],
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "Rahul Verma",
//       image: "/api/placeholder/400/400",
//       program: "B.Sc. Mechanical Engineering",
//       university: "RWTH Aachen University",
//       destination: "Aachen, Germany",
//       duration: "2023 Admission",
//       score: "TestAS 89% | 85% in 12th",
//       story: "As a bachelor's student, I was unsure about the German education system. Profitberator not only got me into RWTH Aachen but also helped me understand the cultural aspects. Their end-to-end support made the journey smooth.",
//       video: "/api/placeholder/1920/1080",
//       achievements: ["Top 1% University", "Internship at Bosch", "German B2 Level"],
//       rating: 5
//     },
//     {
//       id: 3,
//       name: "Anjali Patel",
//       image: "/api/placeholder/400/400",
//       program: "M.A. Data Science",
//       university: "University of Stuttgart",
//       destination: "Stuttgart, Germany",
//       duration: "2024 Admission",
//       score: "GRE 320 | IELTS 8.0",
//       story: "The Profitberator team's expertise in STEM admissions was exceptional. They helped me showcase my technical projects in a way that German universities appreciate. Now I'm studying at one of Germany's top tech universities!",
//       video: "/api/placeholder/1920/1080",
//       achievements: ["STEM Program", "DAAD Scholarship", "Industry Partnerships"],
//       rating: 5
//     },
//     {
//       id: 4,
//       name: "Arun Kumar",
//       image: "/api/placeholder/400/400",
//       program: "M.Sc. Automotive Engineering",
//       university: "TU Berlin",
//       destination: "Berlin, Germany",
//       duration: "2023 Admission",
//       score: "IELTS 7.0 | 8.2 CGPA",
//       story: "From blocked account setup to visa interview preparation, Profitberator handled everything professionally. Their network with German universities gave me an edge in the admission process.",
//       video: "/api/placeholder/1920/1080",
//       achievements: ["Auto Industry Hub", "Mercedes Internship", "German Government Funded"],
//       rating: 5
//     }
//   ];

//   const nextStory = () => {
//     setActiveStory((prev) => (prev + 1) % successStories.length);
//   };

//   const prevStory = () => {
//     setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const storyVariants = {
//     hidden: { 
//       opacity: 0,
//       x: 100,
//       rotateY: 45
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       rotateY: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-20 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, -30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             y: [0, 40, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
        
//         {/* Floating University Icons */}
//         <motion.div
//           className="absolute top-1/4 right-20 text-6xl opacity-20"
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 5, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           🎓
//         </motion.div>
//         <motion.div
//           className="absolute bottom-1/3 left-20 text-4xl opacity-20"
//           animate={{
//             y: [0, 30, 0],
//             rotate: [0, -5, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           🇩🇪
//         </motion.div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 rounded-full px-6 py-3 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Award className="w-5 h-5 text-green-400" />
//             <span className="text-green-400 font-semibold">500+ Success Stories</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             From Our Students to{' '}
//             <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
//               German Universities
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Real stories from students who transformed their dreams into reality with Profitberator's strategic guidance.
//           </motion.p>
//         </motion.div>

//         {/* Main Story Carousel */}
//         <motion.div
//           className="relative mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700 overflow-hidden">
//             {/* Navigation Arrows */}
//             <button
//               onClick={prevStory}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
//             >
//               <ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
//             </button>
            
//             <button
//               onClick={nextStory}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
//             >
//               <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
//             </button>

//             {/* Story Content */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
//               {/* Student Image & Video Section */}
//               <motion.div
//                 className="relative overflow-hidden"
//                 key={`image-${activeStory}`}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
//                 <img
//                   src={successStories[activeStory].image}
//                   alt={successStories[activeStory].name}
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Video Play Button */}
//                 <motion.button
//                   className="absolute top-4 right-4 w-14 h-14 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
//                 </motion.button>

//                 {/* Achievement Badges */}
//                 <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
//                   {successStories[activeStory].achievements.map((achievement, index) => (
//                     <motion.span
//                       key={index}
//                       className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm backdrop-blur-sm"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       {achievement}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Story Details */}
//               <motion.div
//                 className="p-8 lg:p-12 flex flex-col justify-center"
//                 key={`content-${activeStory}`}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {/* Quote Icon */}
//                 <motion.div
//                   className="text-6xl text-yellow-400 mb-6"
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                   "
//                 </motion.div>

//                 {/* Student Rating */}
//                 <div className="flex items-center gap-2 mb-4">
//                   {[...Array(successStories[activeStory].rating)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ scale: 0, rotate: -180 }}
//                       animate={{ scale: 1, rotate: 0 }}
//                       transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
//                     >
//                       <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Student Story */}
//                 <motion.p
//                   className="text-lg text-gray-300 mb-8 leading-relaxed italic"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                 >
//                   {successStories[activeStory].story}
//                 </motion.p>

//                 {/* Student Details */}
//                 <motion.div
//                   className="space-y-4 mb-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                 >
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-1">
//                       {successStories[activeStory].name}
//                     </h3>
//                     <p className="text-cyan-400 font-semibold">
//                       {successStories[activeStory].program}
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-4 text-sm text-gray-300">
//                     <div className="flex items-center gap-2">
//                       <Award className="w-4 h-4 text-yellow-400" />
//                       <span>{successStories[activeStory].university}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-4 h-4 text-red-400" />
//                       <span>{successStories[activeStory].destination}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-green-400" />
//                       <span>{successStories[activeStory].duration}</span>
//                     </div>
//                   </div>

//                   <div className="text-sm text-gray-400">
//                     {successStories[activeStory].score}
//                   </div>
//                 </motion.div>

//                 {/* CTA Button */}
//                 <motion.button
//                   className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     Start My Success Story
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Story Indicators */}
//         <motion.div
//           className="flex justify-center gap-3 mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           {successStories.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveStory(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === activeStory 
//                   ? 'bg-cyan-400 scale-125' 
//                   : 'bg-gray-600 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 1 }}
//         >
//           {[
//             { number: "99%", label: "Admission Success Rate" },
//             { number: "500+", label: "Students Guided" },
//             { number: "50+", label: "German Universities" },
//             { number: "₹10Cr+", label: "Scholarships Secured" }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
//               whileHover={{ y: -5, scale: 1.05 }}
//             >
//               <div className="text-3xl font-bold text-cyan-400 mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-gray-300 text-sm">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;


       
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Quote, 
  Star, 
  MapPin, 
  Calendar, 
  Award, 
  Play,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      program: "M.Sc. Computer Science",
      university: "Technical University of Munich",
      destination: "Munich, Germany",
      duration: "2023 Admission",
      score: "IELTS 7.5 | TestAS 94%",
      story: "Profitberator's strategic approach helped me secure admission to my dream university. Their guidance on German-style SOPs and TestAS preparation was invaluable. The ROI-focused counseling showed me exactly how this degree would benefit my career.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-students-walking-on-a-university-campus-34557-large.mp4",
      achievements: ["TU9 University", "€15,000 Scholarship", "Research Assistant Position"],
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Verma",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      program: "B.Sc. Mechanical Engineering",
      university: "RWTH Aachen University",
      destination: "Aachen, Germany",
      duration: "2023 Admission",
      score: "TestAS 89% | 85% in 12th",
      story: "As a bachelor's student, I was unsure about the German education system. Profitberator not only got me into RWTH Aachen but also helped me understand the cultural aspects. Their end-to-end support made the journey smooth.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-university-campus-34580-large.mp4",
      achievements: ["Top 1% University", "Internship at Bosch", "German B2 Level"],
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Patel",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      program: "M.A. Data Science",
      university: "University of Stuttgart",
      destination: "Stuttgart, Germany",
      duration: "2024 Admission",
      score: "GRE 320 | IELTS 8.0",
      story: "The Profitberator team's expertise in STEM admissions was exceptional. They helped me showcase my technical projects in a way that German universities appreciate. Now I'm studying at one of Germany's top tech universities!",
      video: "https://assets.mixkit.co/videos/preview/mixkit-empty-university-auditorium-34558-large.mp4",
      achievements: ["STEM Program", "DAAD Scholarship", "Industry Partnerships"],
      rating: 5
    },
    {
      id: 4,
      name: "Arun Kumar",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      program: "M.Sc. Automotive Engineering",
      university: "TU Berlin",
      destination: "Berlin, Germany",
      duration: "2023 Admission",
      score: "IELTS 7.0 | 8.2 CGPA",
      story: "From blocked account setup to visa interview preparation, Profitberator handled everything professionally. Their network with German universities gave me an edge in the admission process.",
      video: "https://cdn.pixabay.com/vimeo/764221975/students-140267.mp4?width=1280&hash=abc123456",
      achievements: ["Auto Industry Hub", "Mercedes Internship", "German Government Funded"],
      rating: 5
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const storyVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      rotateY: 45
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Background University Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-152305962303-aa56b8d6b52f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
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
          <motion.div
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">500+ Success Stories</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From Our Students to{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              German Universities
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real stories from students who transformed their dreams into reality with Profitberator's strategic guidance.
          </motion.p>
        </motion.div>

        {/* Main Story Carousel */}
        <motion.div
          className="relative mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700 overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Story Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Student Image & Video Section */}
              <motion.div
                className="relative overflow-hidden"
                key={`image-${activeStory}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                <img
                  src={successStories[activeStory].image}
                  alt={successStories[activeStory].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Play Button */}
                <motion.button
                  className="absolute top-4 right-4 w-14 h-14 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </motion.button>

                {/* University Background Image */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Achievement Badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {successStories[activeStory].achievements.map((achievement, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Story Details */}
              <motion.div
                className="p-8 lg:p-12 flex flex-col justify-center"
                key={`content-${activeStory}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="text-6xl text-yellow-400 mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  "
                </motion.div>

                {/* Student Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(successStories[activeStory].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Student Story */}
                <motion.p
                  className="text-lg text-gray-300 mb-8 leading-relaxed italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {successStories[activeStory].story}
                </motion.p>

                {/* Student Details */}
                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {successStories[activeStory].name}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      {successStories[activeStory].program}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>{successStories[activeStory].university}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span>{successStories[activeStory].destination}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span>{successStories[activeStory].duration}</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400">
                    {successStories[activeStory].score}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Start My Success Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Story Indicators */}
        <motion.div
          className="flex justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStory 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "99%", label: "Admission Success Rate" },
            { number: "500+", label: "Students Guided" },
            { number: "50+", label: "German Universities" },
            { number: "₹10Cr+", label: "Scholarships Secured" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;