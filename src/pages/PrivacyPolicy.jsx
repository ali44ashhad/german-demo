// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   Shield, 
//   Lock, 
//   Eye, 
//   FileText,
//   CheckCircle,
//   AlertTriangle
// } from 'lucide-react';

// const PrivacyPolicy = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const sections = [
//     {
//       icon: Eye,
//       title: "Information We Collect",
//       content: [
//         {
//           subtitle: "Personal Information",
//           points: [
//             "Name, email address, phone number",
//             "Academic background and qualifications",
//             "Passport and visa documentation",
//             "Financial information for service processing"
//           ]
//         },
//         {
//           subtitle: "Usage Data", 
//           points: [
//             "IP address and browser type",
//             "Pages visited and time spent",
//             "Device information and operating system",
//             "Cookies and tracking technologies"
//           ]
//         }
//       ]
//     },
//     {
//       icon: Lock,
//       title: "How We Use Your Information",
//       content: [
//         {
//           subtitle: "Service Provision",
//           points: [
//             "Process your service applications",
//             "Communicate about your service status",
//             "Provide customer support",
//             "Send important updates and notifications"
//           ]
//         },
//         {
//           subtitle: "Legal Compliance",
//           points: [
//             "Comply with German education regulations",
//             "Meet financial service requirements",
//             "Prevent fraud and ensure security",
//             "Legal obligations and law enforcement"
//           ]
//         }
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Data Protection",
//       content: [
//         {
//           subtitle: "Security Measures",
//           points: [
//             "SSL encryption for all data transmission",
//             "Regular security audits and updates",
//             "Limited access to personal information",
//             "Secure data storage with backups"
//           ]
//         },
//         {
//           subtitle: "Data Retention",
//           points: [
//             "Service data: 7 years after service completion",
//             "Financial records: 10 years as per Indian law",
//             "Marketing data: Until consent withdrawal",
//             "Analytics data: 26 months maximum"
//           ]
//         }
//       ]
//     },
//     {
//       icon: FileText,
//       title: "Your Rights",
//       content: [
//         {
//           subtitle: "Access and Control",
//           points: [
//             "Right to access your personal data",
//             "Right to correct inaccurate information",
//             "Right to delete your data (with limitations)",
//             "Right to data portability"
//           ]
//         },
//         {
//           subtitle: "Consent Management",
//           points: [
//             "Withdraw consent for marketing communications",
//             "Opt-out of non-essential cookies",
//             "Request data processing restrictions",
//             "Object to certain data processing"
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
//       {/* Hero Section */}
//       <section className="relative py-30  ">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-80"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />

//           {/* Bluish overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
//         </div>
        
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Privacy <span className="bg-gradient-to-r from-green-300 to-sky-400 bg-clip-text text-transparent">Policy</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
//           </motion.p>

//           <motion.div 
//             className="inline-flex items-center gap-2 bg-green-50/30 border border-green-100 rounded-full px-6 py-3"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Shield className="w-5 h-5 text-cyan-500" />
//            <span className="text-yellow-500 font-semibold">
//   Last Updated: {new Date().toLocaleDateString('en-US', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   })}
// </span>

//           </motion.div>
//         </div>
//       </section>

//       {/* Policy Content */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="bg-green-50/30 rounded-2xl p-8 mb-12"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
//             <div className="space-y-4 text-gray-700">
//               <p>
//                 Profiberater ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
//                 explains how your personal information is collected, used, and disclosed by Profiberater.
//               </p>
//               <p>
//                 This policy applies to our website and its associated subdomains (collectively, our "Service") 
//                 alongside our application, Profiberater. By accessing or using our Service, you signify that 
//                 you have read, understood, and agree to our collection, storage, use, and disclosure of your 
//                 personal information as described in this Privacy Policy and our Terms of Service.
//               </p>
//             </div>
//           </motion.div>

//           <div className="space-y-8">
//             {sections.map((section, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center">
//                     <section.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
//                 </div>

//                 <div className="space-y-6">
//                   {section.content.map((content, contentIndex) => (
//                     <div key={contentIndex}>
//                       <h3 className="text-xl font-semibold text-green-600 mb-4">{content.subtitle}</h3>
//                       <div className="space-y-2">
//                         {content.points.map((point, pointIndex) => (
//                           <div key={pointIndex} className="flex items-start gap-3">
//                             <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                             <span className="text-gray-700">{point}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             className="bg-gradient-to-r from-green-50 to-sky-50 rounded-2xl p-8 border border-green-100 mt-12"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
//             <p className="text-gray-700 mb-4">
//               If you have any questions about this Privacy Policy, please contact us:
//             </p>
//             <div className="space-y-2 text-gray-700">
//               <p>Email: privacy@profiberater.com</p>
//               <p>Phone: +91 98765 43210</p>
//               <p>Address: Delhi, India</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Lock, Shield, FileText, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

// ===== FALLBACK (mirrors your Reviews style) =====
const FALLBACK = {
  hero: {
    title: "Privacy Policy",
    subtitle:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
  },
  intro: {
    title: "Introduction",
    paragraphs: [
      `Profiberater ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Profiberater.`,
      `This policy applies to our website and its associated subdomains (collectively, our "Service") alongside our application, Profiberater. By accessing or using our Service, you agree to the collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.`
    ]
  },
  sections: [
    {
      icon: "Eye",
      title: "Information We Collect",
      blocks: [
        {
          subtitle: "Personal Information",
          points: [
            "Name, email address, phone number",
            "Academic background and qualifications",
            "Passport and visa documentation",
            "Financial information for service processing"
          ]
        },
        {
          subtitle: "Usage Data",
          points: [
            "IP address and browser type",
            "Pages visited and time spent",
            "Device information and operating system",
            "Cookies and tracking technologies"
          ]
        }
      ]
    },
    {
      icon: "Lock",
      title: "How We Use Your Information",
      blocks: [
        {
          subtitle: "Service Provision",
          points: [
            "Process your service applications",
            "Communicate about your service status",
            "Provide customer support",
            "Send important updates and notifications"
          ]
        },
        {
          subtitle: "Legal Compliance",
          points: [
            "Comply with German education regulations",
            "Meet financial service requirements",
            "Prevent fraud and ensure security",
            "Legal obligations and law enforcement"
          ]
        }
      ]
    },
    {
      icon: "Shield",
      title: "Data Protection",
      blocks: [
        {
          subtitle: "Security Measures",
          points: [
            "SSL encryption for all data transmission",
            "Regular security audits and updates",
            "Limited access to personal information",
            "Secure data storage with backups"
          ]
        },
        {
          subtitle: "Data Retention",
          points: [
            "Service data: 7 years after service completion",
            "Financial records: 10 years as per Indian law",
            "Marketing data: Until consent withdrawal",
            "Analytics data: 26 months maximum"
          ]
        }
      ]
    },
    {
      icon: "FileText",
      title: "Your Rights",
      blocks: [
        {
          subtitle: "Access and Control",
          points: [
            "Right to access your personal data",
            "Right to correct inaccurate information",
            "Right to delete your data (with limitations)",
            "Right to data portability"
          ]
        },
        {
          subtitle: "Consent Management",
          points: [
            "Withdraw consent for marketing communications",
            "Opt-out of non-essential cookies",
            "Request data processing restrictions",
            "Object to certain data processing"
          ]
        }
      ]
    }
  ],
  contact: {
    title: "Contact Us",
    description:
      "If you have any questions about this Privacy Policy, please contact us:",
    email: "Email: privacy@profiberater.com",
    phone: "Phone: +91 98765 43210",
    address: "Address: Delhi, India"
  },
  meta: {
    lastUpdated: "Last Updated: {{date}}"
  }
};

// small helper: normalize i18n values (accept string, array, object)
const normalizeArray = (val, fallback) => {
  if (Array.isArray(val)) return val;
  if (!val) return fallback;
  if (typeof val === "object") {
    const keys = Object.keys(val).sort();
    if (keys.length && keys.every((k) => /^\d+$/.test(k))) {
      return keys.map((k) => val[k]);
    }
    return [val];
  }
  return fallback;
};

const ICONS = { Eye, Lock, Shield, FileText };

const PrivacyPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation("common");

  // read privacy block from i18n
  const raw = t("privacy", { returnObjects: true, defaultValue: {} });

  const hero = raw.hero && Object.keys(raw.hero).length ? raw.hero : FALLBACK.hero;

  const introObj =
    raw.intro && Object.keys(raw.intro).length ? raw.intro : FALLBACK.intro;
  const intro = {
    title: introObj.title || FALLBACK.intro.title,
    paragraphs: normalizeArray(introObj.paragraphs, FALLBACK.intro.paragraphs)
  };

  const sections = normalizeArray(raw.sections, FALLBACK.sections).map((sec) => ({
    icon: sec.icon || "Shield",
    title: sec.title || "",
    blocks: normalizeArray(sec.blocks, [])
  }));

  const contact =
    raw.contact && Object.keys(raw.contact).length ? raw.contact : FALLBACK.contact;

  const meta =
    raw.meta && Object.keys(raw.meta).length ? raw.meta : FALLBACK.meta;

  const formattedDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero */}
      <section className="relative py-30  ">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 bg-green-50/30 border border-green-100 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Shield className="w-5 h-5 text-cyan-500" />
            <span className="text-yellow-500 font-semibold">
              {t("privacy.meta.lastUpdated", {
                defaultValue: FALLBACK.meta.lastUpdated,
                date: formattedDate
              })}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-green-50/30 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {intro.title}
            </h2>
            <div className="space-y-4 text-gray-700">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = ICONS[section.icon] || Shield;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {normalizeArray(section.blocks, []).map((block, bi) => (
                      <div key={bi}>
                        {block.subtitle && (
                          <h3 className="text-xl font-semibold text-green-600 mb-4">
                            {block.subtitle}
                          </h3>
                        )}
                        <div className="space-y-2">
                          {normalizeArray(block.points, []).map((pt, pi) => (
                            <div
                              key={pi}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact */}
          <motion.div
            className="bg-gradient-to-r from-green-50 to-sky-50 rounded-2xl p-8 border border-green-100 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {contact.title}
            </h2>
            <p className="text-gray-700 mb-4">{contact.description}</p>
            <div className="space-y-2 text-gray-700">
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
