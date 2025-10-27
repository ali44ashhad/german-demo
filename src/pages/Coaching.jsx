// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   BookOpen, 
//   Users, 
//   Award, 
//   Clock,
//   CheckCircle,
//   Star,
//   ArrowRight
// } from 'lucide-react';

// const Coaching = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const partnerInstitutes = [
//     {
//       name: "German Language Institute",
//       courses: ["A1-C2 German", "TestDaF Prep", "Goethe Exam"],
//       discount: "20%",
//       rating: 4.9,
//       students: "2000+"
//     },
//     {
//       name: "STEM Training Center", 
//       courses: ["TestAS Prep", "GRE/GMAT", "Technical Interviews"],
//       discount: "15%",
//       rating: 4.8,
//       students: "1500+"
//     },
//     {
//       name: "Study Abroad Academy",
//       courses: ["IELTS Prep", "Academic Writing", "Interview Skills"],
//       discount: "25%", 
//       rating: 4.7,
//       students: "1800+"
//     }
//   ];

//   const benefits = [
//     "Exclusive discounts for Profiberater students",
//     "Proven track record of success",
//     "Experienced certified trainers", 
//     "Flexible batch timings",
//     "Personalized attention",
//     "Regular progress tracking"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-70"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />
//           {/* Unified Bluish-Green Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-500/60 via-cyan-600/50 to-emerald-600/60 mix-blend-multiply" />
//         </div>
        
//         <div className="relative z-10 max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">Coaching</span> & Training
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-sky-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             We are your one-stop source for all your training needs. Access our network of premium training partners with exclusive discounts.
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Training Partners</h2>
//               <div className="space-y-4 text-gray-700 mb-8">
//                 <p className="leading-relaxed">
//                   While we do not provide training directly, we have partnerships with well-established professional institutes that have a strong track record of successfully training students.
//                 </p>
//                 <p className="leading-relaxed">
//                   These institutes are known for guiding learners effectively to achieve higher scores, which in turn enhances their profiles and supports their admission process.
//                 </p>
//                 <p className="leading-relaxed font-semibold text-emerald-700">
//                   By applying for admission through us, you may also become eligible for exclusive discounts.
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <BookOpen className="w-6 h-6 text-emerald-600" />
//                   Access Requirements
//                 </h3>
//                 <p className="text-gray-700">
//                   Access to our partner program is available only after you register with us. Once registered, you will be able to view and connect with our training partners directly through your personal profile.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
//                 <div className="space-y-4">
//                   {benefits.map((benefit, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-center gap-3"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                       transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                     >
//                       <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//                       <span className="text-gray-700">{benefit}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Partner Institutes */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Training Partners</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {partnerInstitutes.map((institute, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-all duration-300"
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-bold text-gray-900">{institute.name}</h3>
//                     <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
//                       {institute.discount} OFF
//                     </div>
//                   </div>

//                   <div className="space-y-3 mb-4">
//                     {institute.courses.map((course, courseIndex) => (
//                       <div key={courseIndex} className="flex items-center gap-2 text-gray-700 text-sm">
//                         <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
//                         {course}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex justify-between items-center text-sm text-gray-600">
//                     <div className="flex items-center gap-1">
//                       <Star className="w-4 h-4 text-amber-400" />
//                       <span>{institute.rating}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Users className="w-4 h-4 text-emerald-600" />
//                       <span>{institute.students}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Comparative Tests Table (added) */}
//       <section className="py-12 bg-gradient-to-b from-white via-sky-50 to-white">
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-emerald-700 text-sm font-semibold not-italic leading-[normal] tracking-[2.8px] md:text-xl md:tracking-[4px]">Comparative Guide to English Proficiency Tests</h2>
//           <h2 className="max-w-[340px] md:max-w-none md:text-5xl text-gray-900 font-extrabold not-italic !leading-[1.42] tracking-[normal] text-[1.75rem] mt-4">Essential Info for Test-Takers</h2>

//           <div className="h-[100%] overflow-auto mt-10 md:mt-10">
//             <div className="rounded-2xl overflow-hidden border border-sky-200 shadow-sm">
//               <div className="max-h-[500px] overflow-auto">
//                 <table className="w-full min-w-[1200px]">
//                   <thead className="sticky top-0 z-20 bg-sky-600 text-left font-semibold text-white">
//                     <tr>
//                       <th className="min-w-[120px] sticky left-0 z-30 font-bold text-left border-r border-sky-200 p-3 bg-sky-700">Exam Name</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Full Name</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Purpose</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Modules &amp; Skills Tested</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Duration</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Modes</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Sessions</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Test Availability</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Test Registration</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Re-Test Wait Period</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Scoring</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Results</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Score Validity</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Cost</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Types of Questions</th>
//                       <th className="min-w-[200px] font-bold text-left p-3">Number of Questions</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     <tr className="odd:bg-white even:bg-sky-50">
//                       <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">PTE</td>
//                       <td className="p-3">Pearson Test of English</td>
//                       <td className="p-3">Student visa; college admissions</td>
//                       <td className="p-3">Speaking &amp; Writing, Reading, Listening</td>
//                       <td className="p-3">2 hours</td>
//                       <td className="p-3">Only at a Test Centre, Only Computer-delivered</td>
//                       <td className="p-3">Single session</td>
//                       <td className="p-3">Every day (depends on the test centre)</td>
//                       <td className="p-3">Up to 24 hours in advance</td>
//                       <td className="p-3">After receiving score report (2-3 days)</td>
//                       <td className="p-3">Only automated, Overall: out of 90, Individual modules: out of 90</td>
//                       <td className="p-3">In 48 hours</td>
//                       <td className="p-3">2 years</td>
//                       <td className="p-3">₹ 17,000</td>
//                       <td className="p-3">S: 5 types, W: 2 types, R: 5 types, L: 8 types</td>
//                       <td className="p-3">Total 52-73, S: 25-31, W: 2-4, R: 13-18, L: 12-20</td>
//                     </tr>

//                     <tr className="odd:bg-white even:bg-sky-50">
//                       <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">IELTS</td>
//                       <td className="p-3">International English Language Testing System</td>
//                       <td className="p-3">Student visa; college admissions</td>
//                       <td className="p-3">Listening, Reading, Writing, Speaking</td>
//                       <td className="p-3">LRW: 2 hours 40 mins, S: 11-14 mins</td>
//                       <td className="p-3">Only at a Test Centre, Paper-based and Computer-delivered</td>
//                       <td className="p-3">Two sessions: 1 for LRW, 1 for S</td>
//                       <td className="p-3">CDT: every day, PBT: 4-5 times a month</td>
//                       <td className="p-3">CDT: 4-5 days in advance, PBT: up to 15 days in advance</td>
//                       <td className="p-3">CDT: 3 days, PBT: no limit</td>

//                       <td className="p-3">Both human and automated, Overall: out of band 9.0, Individual modules: out of band 9.0</td>
//                       <td className="p-3">CDT: 3-4 days, PBT: 13 days</td>
//                       <td className="p-3">2 years</td>
//                       <td className="p-3">₹ 17,000</td>
//                       <td className="p-3">L: 8-9 types, R: 10-12 types, W: 2 types, S: 3 parts</td>
//                       <td className="p-3">L: 40, R: 40, W: 2, S: (P1: 9-10; P2: 1; P3: 5-6)</td>
//                     </tr>

//                     <tr className="odd:bg-white even:bg-sky-50">
//                       <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">TOEFL</td>
//                       <td className="p-3">Test of English as a Foreign Language</td>
//                       <td className="p-3">Student visa; college admissions</td>
//                       <td className="p-3">Reading, Listening, Speaking, Writing</td>
//                       <td className="p-3">2 hours</td>
//                       <td className="p-3">At a Test Centre and At Home, Paper-based and Computer-delivered</td>
//                       <td className="p-3">Single session at test centre or Home edition, Two sessions for Paper edition</td>
//                       <td className="p-3">At test centre: 60+ times a year, Home edition: 24 hrs / 4 days a week, Paper edition: once a month (3rd Saturday)</td>
//                       <td className="p-3">At test centre: 3-5 days in advance, Home edition: 1-2 days in advance, Paper edition: 7-10 days in advance</td>
//                       <td className="p-3">3 days</td>
//                       <td className="p-3">Both human and automated, Overall: out of 120 points, Individual modules: out of 30 points</td>
//                       <td className="p-3">At test centre: 4-8 days, Home edition: 4-8 days, Paper edition: 11-13 days</td>
//                       <td className="p-3">2 years</td>
//                       <td className="p-3">₹ 16,900 | $ 195</td>
//                       <td className="p-3">R: MCQs, L: MCQs, S: 4 types, W: 2 types</td>
//                       <td className="p-3">R: 20, L: 28, S: 4, W: 2</td>
//                     </tr>

//                     <tr className="odd:bg-white even:bg-sky-50">
//                       <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">DUOLINGO</td>
//                       <td className="p-3">Duolingo English Test [Adaptive Test]</td>
//                       <td className="p-3">College admissions</td>
//                       <td className="p-3">Literacy - read and write, Comprehension - read and listen, Production - write and speak, Conversation - listen and speak [individual and integrated]</td>
//                       <td className="p-3">1 hour</td>
//                       <td className="p-3">NOT at a Test Centre, From home or office, Only Computer-delivered</td>
//                       <td className="p-3">Single session</td>
//                       <td className="p-3">Every day, any time</td>
//                       <td className="p-3">No limit</td>
//                       <td className="p-3">2 times a month</td>
//                       <td className="p-3">Only automated, Overall: out of 160</td>
//                       <td className="p-3">In 48 hours</td>
//                       <td className="p-3">2 years</td>
//                       <td className="p-3">$ 59</td>
//                       <td className="p-3">S: 4-5 types, W: 4 types, R: 7-8 types, L: 4-5 types</td>
//                       <td className="p-3">Total 50-58</td>
//                     </tr>

//                     <tr className="odd:bg-white even:bg-sky-50">
//                       <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">CELPIP</td>
//                       <td className="p-3">Canadian English Language Proficiency Index Program</td>
//                       <td className="p-3">Student visa (Canada); Permanent Residence (Canada)</td>
//                       <td className="p-3">Reading, Listening, Speaking, Writing [individual and integrated]</td>
//                       <td className="p-3">3 hours</td>
//                       <td className="p-3">Only at a Test Centre, Only Computer-delivered</td>
//                       <td className="p-3">Single session</td>
//                       <td className="p-3">Weekends, 2 slots a day</td>
//                       <td className="p-3">One business day before the test, Depends on seat availability</td>
//                       <td className="p-3">5 days</td>
//                       <td className="p-3">Both human and automated, Overall: out of levels 3-12, Individual modules: out of levels 3-12</td>
//                       <td className="p-3">4-5 days</td>
//                       <td className="p-3">2 years</td>
//                       <td className="p-3">₹ 12,500</td>
//                       <td className="p-3">L: 6 types, 38+ MCQs, R: 4 types, 38+ MCQs, S: 2 types, W: 8 types</td>
//                       <td className="p-3">L: 6 parts, 38+ MCQs, R: 4 parts, 38+ MCQs, W: 2 parts, 2 questions, S: 8 parts, 8 questions</td>
//                     </tr>

//                     <tr className="odd:bg-white even:bg-sky-50">
//                       <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">CAEL</td>
//                       <td className="p-3">Canadian Academic English Language</td>
//                       <td className="p-3">College admissions (Canada); Student Visa (only CAEL at test centre) (Canada)</td>
//                       <td className="p-3">Speaking, Reading, Listening, Academic Unit A, Academic Unit B</td>
//                       <td className="p-3">3.5 hours</td>
//                       <td className="p-3">At a Test Centre and At Home, Only Computer-delivered</td>
//                       <td className="p-3">Single session</td>
//                       <td className="p-3">Weekends</td>
//                       <td className="p-3">One business day before the test, Depends on seat availability</td>
//                       <td className="p-3">4 days</td>
//                       <td className="p-3">Both human and automated, Overall: out of Band 90, Individual modules: out of Band 90</td>
//                       <td className="p-3">8 days</td>
//                       <td className="p-3">2 years</td>
//                       <td className="p-3">₹ 12,500</td>
//                       <td className="p-3">S: 3 types, R: 2 types + 1 R+S Integrated, L: 2 types + 1 L+S Integrated, W: 2 types (R+L+W Integrated)</td>
//                       <td className="p-3">S: 3 questions, R: 14-25 MCQs + 1 R+S question, L: 14-25 MCQs + 1 L+S question, W: 44-60 MCQs + 2 R+L+W question</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           >
//             Ready to Access Premium Training?
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-gray-700 mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ delay: 0.2 }}
//           >
//             Register with us to unlock exclusive discounts and connect with our premium training partners.
//           </motion.p>
//           <motion.button
//             className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Register Now <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Coaching;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";

// helpers
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

// FALLBACK (exact text preserved)
const FALLBACK = {
  hero: {
    titleLeft: "Coaching",
    titleRight: "& Training",
    subtitle:
      "We are your one-stop source for all your training needs. Access our network of premium training partners with exclusive discounts."
  },
  headings: {
    premiumPartners: "Premium Training Partners",
    accessReq: "Access Requirements",
    keyBenefits: "Key Benefits",
    ourPartners: "Our Training Partners",
    compGuideKicker: "Comparative Guide to English Proficiency Tests",
    compGuideTitle: "Essential Info for Test-Takers",
    ctaTitle: "Ready to Access Premium Training?",
    ctaSub:
      "Register with us to unlock exclusive discounts and connect with our premium training partners.",
    ctaBtn: "Register Now"
  },
  paragraphs: [
    "While we do not provide training directly, we have partnerships with well-established professional institutes that have a strong track record of successfully training students.",
    "These institutes are known for guiding learners effectively to achieve higher scores, which in turn enhances their profiles and supports their admission process.",
    "By applying for admission through us, you may also become eligible for exclusive discounts."
  ],
  accessReqText:
    "Access to our partner program is available only after you register with us. Once registered, you will be able to view and connect with our training partners directly through your personal profile.",
  benefits: [
    "Exclusive discounts for Profiberater students",
    "Proven track record of success",
    "Experienced certified trainers",
    "Flexible batch timings",
    "Personalized attention",
    "Regular progress tracking"
  ],
  partnerInstitutes: [
    {
      name: "German Language Institute",
      courses: ["A1-C2 German", "TestDaF Prep", "Goethe Exam"],
      discount: "20%",
      rating: 4.9,
      students: "2000+"
    },
    {
      name: "STEM Training Center",
      courses: ["TestAS Prep", "GRE/GMAT", "Technical Interviews"],
      discount: "15%",
      rating: 4.8,
      students: "1500+"
    },
    {
      name: "Study Abroad Academy",
      courses: ["IELTS Prep", "Academic Writing", "Interview Skills"],
      discount: "25%",
      rating: 4.7,
      students: "1800+"
    }
  ],
  table: {
    headers: [
      "Exam Name",
      "Full Name",
      "Purpose",
      "Modules & Skills Tested",
      "Duration",
      "Modes",
      "Sessions",
      "Test Availability",
      "Test Registration",
      "Re-Test Wait Period",
      "Scoring",
      "Results",
      "Score Validity",
      "Cost",
      "Types of Questions",
      "Number of Questions"
    ],
    rows: [
      {
        exam: "PTE",
        full: "Pearson Test of English",
        purpose: "Student visa; college admissions",
        modules: "Speaking & Writing, Reading, Listening",
        duration: "2 hours",
        modes: "Only at a Test Centre, Only Computer-delivered",
        sessions: "Single session",
        avail: "Every day (depends on the test centre)",
        reg: "Up to 24 hours in advance",
        wait: "After receiving score report (2-3 days)",
        scoring: "Only automated, Overall: out of 90, Individual modules: out of 90",
        results: "In 48 hours",
        validity: "2 years",
        cost: "₹ 17,000",
        types: "S: 5 types, W: 2 types, R: 5 types, L: 8 types",
        count: "Total 52-73, S: 25-31, W: 2-4, R: 13-18, L: 12-20"
      },
      {
        exam: "IELTS",
        full: "International English Language Testing System",
        purpose: "Student visa; college admissions",
        modules: "Listening, Reading, Writing, Speaking",
        duration: "LRW: 2 hours 40 mins, S: 11-14 mins",
        modes: "Only at a Test Centre, Paper-based and Computer-delivered",
        sessions: "Two sessions: 1 for LRW, 1 for S",
        avail: "CDT: every day, PBT: 4-5 times a month",
        reg: "CDT: 4-5 days in advance, PBT: up to 15 days in advance",
        wait: "CDT: 3 days, PBT: no limit",
        scoring:
          "Both human and automated, Overall: out of band 9.0, Individual modules: out of band 9.0",
        results: "CDT: 3-4 days, PBT: 13 days",
        validity: "2 years",
        cost: "₹ 17,000",
        types: "L: 8-9 types, R: 10-12 types, W: 2 types, S: 3 parts",
        count: "L: 40, R: 40, W: 2, S: (P1: 9-10; P2: 1; P3: 5-6)"
      },
      {
        exam: "TOEFL",
        full: "Test of English as a Foreign Language",
        purpose: "Student visa; college admissions",
        modules: "Reading, Listening, Speaking, Writing",
        duration: "2 hours",
        modes: "At a Test Centre and At Home, Paper-based and Computer-delivered",
        sessions:
          "Single session at test centre or Home edition, Two sessions for Paper edition",
        avail:
          "At test centre: 60+ times a year, Home edition: 24 hrs / 4 days a week, Paper edition: once a month (3rd Saturday)",
        reg:
          "At test centre: 3-5 days in advance, Home edition: 1-2 days in advance, Paper edition: 7-10 days in advance",
        wait: "3 days",
        scoring:
          "Both human and automated, Overall: out of 120 points, Individual modules: out of 30 points",
        results:
          "At test centre: 4-8 days, Home edition: 4-8 days, Paper edition: 11-13 days",
        validity: "2 years",
        cost: "₹ 16,900 | $ 195",
        types: "R: MCQs, L: MCQs, S: 4 types, W: 2 types",
        count: "R: 20, L: 28, S: 4, W: 2"
      },
      {
        exam: "DUOLINGO",
        full: "Duolingo English Test [Adaptive Test]",
        purpose: "College admissions",
        modules:
          "Literacy - read and write, Comprehension - read and listen, Production - write and speak, Conversation - listen and speak [individual and integrated]",
        duration: "1 hour",
        modes:
          "NOT at a Test Centre, From home or office, Only Computer-delivered",
        sessions: "Single session",
        avail: "Every day, any time",
        reg: "No limit",
        wait: "2 times a month",
        scoring: "Only automated, Overall: out of 160",
        results: "In 48 hours",
        validity: "2 years",
        cost: "$ 59",
        types:
          "S: 4-5 types, W: 4 types, R: 7-8 types, L: 4-5 types",
        count: "Total 50-58"
      },
      {
        exam: "CELPIP",
        full: "Canadian English Language Proficiency Index Program",
        purpose: "Student visa (Canada); Permanent Residence (Canada)",
        modules:
          "Reading, Listening, Speaking, Writing [individual and integrated]",
        duration: "3 hours",
        modes: "Only at a Test Centre, Only Computer-delivered",
        sessions: "Single session",
        avail: "Weekends, 2 slots a day",
        reg: "One business day before the test, Depends on seat availability",
        wait: "5 days",
        scoring:
          "Both human and automated, Overall: out of levels 3-12, Individual modules: out of levels 3-12",
        results: "4-5 days",
        validity: "2 years",
        cost: "₹ 12,500",
        types:
          "L: 6 types, 38+ MCQs, R: 4 types, 38+ MCQs, S: 2 types, W: 8 types",
        count:
          "L: 6 parts, 38+ MCQs, R: 4 parts, 38+ MCQs, W: 2 parts, 2 questions, S: 8 parts, 8 questions"
      },
      {
        exam: "CAEL",
        full: "Canadian Academic English Language",
        purpose:
          "College admissions (Canada); Student Visa (only CAEL at test centre) (Canada)",
        modules:
          "Speaking, Reading, Listening, Academic Unit A, Academic Unit B",
        duration: "3.5 hours",
        modes: "At a Test Centre and At Home, Only Computer-delivered",
        sessions: "Single session",
        avail: "Weekends",
        reg: "One business day before the test, Depends on seat availability",
        wait: "4 days",
        scoring:
          "Both human and automated, Overall: out of Band 90, Individual modules: out of Band 90",
        results: "8 days",
        validity: "2 years",
        cost: "₹ 12,500",
        types:
          "S: 3 types, R: 2 types + 1 R+S Integrated, L: 2 types + 1 L+S Integrated, W: 2 types (R+L+W Integrated)",
        count:
          "S: 3 questions, R: 14-25 MCQs + 1 R+S question, L: 14-25 MCQs + 1 L+S question, W: 44-60 MCQs + 2 R+L+W question"
      }
    ]
  },
  cta: {
    title: "Ready to Access Premium Training?",
    sub: "Register with us to unlock exclusive discounts and connect with our premium training partners.",
    button: "Register Now"
  }
};

const Coaching = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation("common");

  const raw = t("coaching", { returnObjects: true, defaultValue: {} });

  const hero = isObject(raw.hero) ? raw.hero : FALLBACK.hero;
  const headings = isObject(raw.headings) ? raw.headings : FALLBACK.headings;
  const paras = normalizeArray(raw.paragraphs, FALLBACK.paragraphs);
  const accessReqText =
    typeof raw.accessReqText === "string" ? raw.accessReqText : FALLBACK.accessReqText;
  const benefits = normalizeArray(raw.benefits, FALLBACK.benefits);
  const partnerInstitutes = normalizeArray(raw.partnerInstitutes, FALLBACK.partnerInstitutes).map(
    (p) => ({ ...p, courses: normalizeArray(p.courses, []) })
  );

  // table: pull from i18n with safe fallbacks
  const table = isObject(raw.table) ? raw.table : FALLBACK.table;
  const tableHeaders =
    Array.isArray(table.headers) && table.headers.length ? table.headers : FALLBACK.table.headers;
  const tableRows =
    Array.isArray(table.rows) && table.rows.length ? table.rows : FALLBACK.table.rows;

  const cta = isObject(raw.cta) ? raw.cta : FALLBACK.cta;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
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
            <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
              {hero.titleLeft}
            </span>{" "}
            {hero.titleRight}
          </motion.h1>

          <motion.p
            className="text-xl text-sky-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {headings.premiumPartners}
              </h2>
              <div className="space-y-4 text-gray-700 mb-8">
                <p className="leading-relaxed">{paras[0]}</p>
                <p className="leading-relaxed">{paras[1]}</p>
                <p className="leading-relaxed font-semibold text-emerald-700">
                  {paras[2]}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                  {headings.accessReq}
                </h3>
                <p className="text-gray-700">
                  {accessReqText}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {headings.keyBenefits}
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partner Institutes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              {headings.ourPartners}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerInstitutes.map((institute, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{institute.name}</h3>
                    <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                      {institute.discount} OFF
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {institute.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
                        {course}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400" />
                      <span>{institute.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>{institute.students}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparative Tests Table */}
      <section className="py-12 bg-gradient-to-b from-white via-sky-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-emerald-700 text-sm font-semibold not-italic leading-[normal] tracking-[2.8px] md:text-xl md:tracking-[4px]">
            {headings.compGuideKicker}
          </h2>
          <h2 className="max-w-[340px] md:max-w-none md:text-5xl text-gray-900 font-extrabold not-italic !leading-[1.42] tracking-[normal] text-[1.75rem] mt-4">
            {headings.compGuideTitle}
          </h2>

          <div className="h-[100%] overflow-auto mt-10 md:mt-10">
            <div className="rounded-2xl overflow-hidden border border-sky-200 shadow-sm">
              <div className="max-h-[500px] overflow-auto">
                <table className="w-full min-w-[1200px]">
                  <thead className="sticky top-0 z-20 bg-sky-600 text-left font-semibold text-white">
                    <tr>
                      {tableHeaders.map((h, i) => (
                        <th
                          key={i}
                          className={
                            i === 0
                              ? "min-w-[120px] sticky left-0 z-30 font-bold text-left border-r border-sky-200 p-3 bg-sky-700"
                              : "min-w-[200px] font-bold text-left p-3"
                          }
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {tableRows.map((row, rIdx) => (
                      <tr key={rIdx} className="odd:bg-white even:bg-sky-50">
                        <td className="sticky left-0 font-bold z-10 text-left bg-sky-100 border-y border-sky-200 p-3">
                          {row.exam}
                        </td>
                        <td className="p-3">{row.full}</td>
                        <td className="p-3">{row.purpose}</td>
                        <td className="p-3">{row.modules}</td>
                        <td className="p-3">{row.duration}</td>
                        <td className="p-3">{row.modes}</td>
                        <td className="p-3">{row.sessions}</td>
                        <td className="p-3">{row.avail}</td>
                        <td className="p-3">{row.reg}</td>
                        <td className="p-3">{row.wait}</td>
                        <td className="p-3">{row.scoring}</td>
                        <td className="p-3">{row.results}</td>
                        <td className="p-3">{row.validity}</td>
                        <td className="p-3">{row.cost}</td>
                        <td className="p-3">{row.types}</td>
                        <td className="p-3">{row.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            {headings.ctaTitle}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            {headings.ctaSub}
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {headings.ctaBtn} <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
