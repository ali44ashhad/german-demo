// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   Shield, 
//   FileText, 
//   Lock, 
//   AlertTriangle,
//   CheckCircle
// } from 'lucide-react';

// const DisclaimerAndPolicy = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const policies = [
//     {
//       icon: Shield,
//       title: "Privacy Policy",
//       content: [
//         "We collect only necessary information for providing our services",
//         "Your data is protected with industry-standard security measures", 
//         "We do not share your personal information with third parties without consent",
//         "You can request data deletion at any time"
//       ]
//     },
//     {
//       icon: FileText,
//       title: "Terms of Service",
//       content: [
//         "Our services are advisory in nature",
//         "We provide guidance but cannot guarantee university admissions",
//         "Clients are responsible for their own applications and documents",
//         "Fees are for services rendered, not admission guarantees"
//       ]
//     },
//     {
//       icon: Lock, 
//       title: "Data Protection",
//       content: [
//         "SSL encryption for all data transmission",
//         "Regular security audits and updates",
//         "Limited access to personal information",
//         "GDPR compliant data handling practices"
//       ]
//     },
//     {
//       icon: AlertTriangle,
//       title: "Important Disclaimers", 
//       content: [
//         "We are not affiliated with any German universities or government bodies",
//         "Admission decisions are made solely by universities",
//         "Visa approvals are at the discretion of German authorities", 
//         "Test scores and academic performance are student responsibilities"
//       ]
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
//               backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />

//           {/* Bluish overlay (preserved per request) */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
//         </div>
        
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Disclaimer & <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">Policy</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Important legal information about our services, data protection, and terms of engagement.
//           </motion.p>
//         </div>
//       </section>

//       {/* Policies Grid */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {policies.map((policy, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center">
//                     <policy.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">{policy.title}</h3>
//                 </div>

//                 <div className="space-y-3">
//                   {policy.content.map((item, itemIndex) => (
//                     <div key={itemIndex} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                       <p className="text-gray-700 leading-relaxed">{item}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Legal Info */}
//       <section className="py-20 bg-green-50/30">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Service Understanding</h2>
            
//             <div className="space-y-4 text-gray-700">
//               <p>
//                 <strong>Educational Consulting Nature:</strong> Profiberater provides educational consulting and advisory services. We offer guidance, support, and expertise in the German education system but do not guarantee admissions, scholarships, or visa approvals.
//               </p>
              
//               <p>
//                 <strong>Client Responsibilities:</strong> Students are responsible for their academic performance, test scores, document preparation, and meeting all application deadlines. We provide guidance but the execution remains with the student.
//               </p>
              
//               <p>
//                 <strong>Third-Party Services:</strong> While we partner with training institutes and other service providers, we are not directly responsible for their services. Any agreements with third-party providers are between the student and the provider.
//               </p>
              
//               <p>
//                 <strong>Policy Updates:</strong> We reserve the right to update our policies and terms. Continued use of our services constitutes acceptance of updated terms.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact for Queries */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           >
//             Questions About Our Policies?
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-gray-700 mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ delay: 0.2 }}
//           >
//             Contact us for any clarification regarding our policies and terms.
//           </motion.p>
//           <motion.button
//             className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Legal Team
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DisclaimerAndPolicy;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, FileText, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ICON_MAP = { Shield, FileText, Lock, AlertTriangle };

const normalizeToArray = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'object') {
    // If object with numeric keys, convert to array
    const keys = Object.keys(val).sort();
    if (keys.length && keys.every(k => /^\d+$/.test(k))) {
      return keys.map(k => val[k]);
    }
    // otherwise wrap
    return [val];
  }
  return [val];
};

const DisclaimerAndPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation('common');

  // Read the whole block as object (returnObjects: true)
  const raw = t('disclaimer', { returnObjects: true, defaultValue: {} });

  // Header / hero
  const hero = raw.hero || {};
  const heroTitle = hero.title || '';
  const heroSubtitle = hero.subtitle || '';

  // Policies — expect an array of objects with icon (string), title, content(array)
  const policiesRaw = normalizeToArray(raw.policies || []);
  const policies = policiesRaw.map((p, idx) => {
    const iconName = p.icon || '';
    const Icon = ICON_MAP[iconName] || ICON_MAP.Shield || Shield;
    const title = p.title || '';
    const content = normalizeToArray(p.content || []);
    return { Icon, title, content };
  });

  // Additional legal info
  const additional = raw.additional || {};
  const additionalTitle = additional.title || '';
  const additionalParagraphs = normalizeToArray(additional.paragraphs || []);

  // Contact CTA
  const contact = raw.contact || {};
  const contactTitle = contact.title || '';
  const contactSubtitle = contact.subtitle || '';
  const contactButton = contact.button || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url(${hero.backgroundImage || 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Policies Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center">
                    <policy.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{policy.title}</h3>
                </div>

                <div className="space-y-3">
                  {policy.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Legal Info */}
      <section className="py-20 bg-green-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{additionalTitle}</h2>

            <div className="space-y-4 text-gray-700">
              {additionalParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            {contactTitle}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.12 }}
          >
            {contactSubtitle}
          </motion.p>

          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {contactButton}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerAndPolicy;
