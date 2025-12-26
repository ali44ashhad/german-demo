// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   Send,
//   MessageCircle,
//   Calendar,
//   Sparkles,
//   CheckCircle
// } from 'lucide-react';

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     program: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Call Us",
//       info: "+91 98765 43210",
//       description: "Mon-Sat, 10AM-7PM",
//       color: "from-green-600 to-sky-600",
//       link: "tel:+919876543210"
//     },
//     {
//       icon: Mail,
//       title: "Email Us",
//       info: "hello@eduberator.com",
//       description: "We reply within 2 hours",
//       color: "from-green-600 to-sky-600",
//       link: "mailto:hello@eduberator.com"
//     },
//     {
//       icon: MapPin,
//       title: "Visit Office",
//       info: "Delhi, India",
//       description: "Book appointment before visit",
//       color: "from-green-600 to-sky-600",
//       link: "#"
//     },
//     {
//       icon: Clock,
//       title: "Office Hours",
//       info: "10:00 AM - 7:00 PM",
//       description: "Monday to Saturday",
//       color: "from-green-600 to-sky-600",
//       link: "#"
//     }
//   ];

//   const programs = [
//     "Bachelor's in Germany",
//     "Master's in Germany", 
//     "STEM Programs",
//     "MBA in Germany",
//     "PhD in Germany",
//     "Language Courses"
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setIsSubmitting(false);
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', phone: '', program: '', message: '' });
//     }, 5000);
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.8 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   return (
//     <section ref={ref} className="relative py-20 bg-gradient-to-br from-white via-sky-50 to-green-50 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-10 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Floating Elements */}
//         <motion.div
//           className="absolute top-1/4 right-20 text-4xl opacity-15"
//           animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         >
//           💬
//         </motion.div>
//         <motion.div
//           className="absolute bottom-1/3 left-20 text-3xl opacity-15"
//           animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         >
//           📞
//         </motion.div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
//           <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-sky-50 border border-green-100 rounded-full px-6 py-3 mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.6, delay: 0.2 }}>
//             <MessageCircle className="w-5 h-5 text-green-600" />
//             <span className="text-green-600 font-semibold">Free Consultation</span>
//           </motion.div>

//           <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.3 }}>
//             Start Your <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">German Journey</span> Today
//           </motion.h2>
          
//           <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.4 }}>
//             Get personalized guidance from Germany education experts. Book your free profile assessment and discover your path to German universities.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
//             <motion.h3 className="text-3xl font-bold text-gray-900 mb-8" variants={itemVariants}>Get in Touch</motion.h3>

//             {/* Contact Cards */}
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((contact, index) => (
//                 <motion.a key={index} href={contact.link} variants={itemVariants} className="block group">
//                   <motion.div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" whileHover={{ y: -5, scale: 1.02 }}>
//                     <div className="flex items-center gap-4">
//                       <motion.div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`} whileHover={{ scale: 1.05, rotate: 360 }} transition={{ duration: 0.5 }}>
//                         <contact.icon className="w-6 h-6" />
//                       </motion.div>
                      
//                       <div className="flex-1">
//                         <h4 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h4>
//                         <p className="text-green-600 font-medium mb-1">{contact.info}</p>
//                         <p className="text-gray-600 text-sm">{contact.description}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Quick Action Cards */}
//             <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={itemVariants}>
//               <motion.button className="bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <span className="flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</span>
//               </motion.button>

//               <motion.button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <span className="flex items-center justify-center gap-2"><Calendar className="w-5 h-5" />Book Meeting</span>
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.4 }}>
//             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
//               {isSubmitted ? (
//                 <motion.div className="text-center py-12" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
//                   <motion.div className="w-20 h-20 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6" animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ duration: 0.5 }}>
//                     <CheckCircle className="w-10 h-10 text-white" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
//                   <p className="text-gray-700 mb-6">We've received your message and will contact you within 2 hours.</p>
//                   <motion.div className="w-full bg-gray-200 rounded-full h-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5, ease: "linear" }}>
//                     <div className="bg-gradient-to-r from-green-600 to-sky-600 h-2 rounded-full" />
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Free Profile Assessment</h3>
                  
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.5 }}>
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder="Enter your name" />
//                       </motion.div>

//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.6 }}>
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
//                         <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder="Enter your email" />
//                       </motion.div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.7 }}>
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
//                         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder="+91 98765 43210" />
//                       </motion.div>

//                       <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.8 }}>
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Program Interest</label>
//                         <select name="program" value={formData.program} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition-all duration-300">
//                           <option value="">Select program</option>
//                           {programs.map((program, index) => (<option key={index} value={program}>{program}</option>))}
//                         </select>
//                       </motion.div>
//                     </div>

//                     <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.9 }}>
//                       <label className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
//                       <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300 resize-none" placeholder="Tell us about your academic background and goals..." />
//                     </motion.div>

//                     <motion.button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group" whileHover={!isSubmitting ? { scale: 1.02 } : {}} whileTap={!isSubmitting ? { scale: 0.98 } : {}} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 1 }}>
//                       {isSubmitting ? (
//                         <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
//                           <Sparkles className="w-6 h-6 mx-auto" />
//                         </motion.div>
//                       ) : (
//                         <span className="flex items-center justify-center gap-3"><Send className="w-5 h-5" />Send Message & Get Free Consultation</span>
//                       )}
//                     </motion.button>
//                   </form>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// src/components/home/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthRedirect } from '../../utils/useAuthRedirect';

const ICON_MAP = {
  call: Phone,
  email: Mail,
  visit: MapPin,
  hours: Clock
};

const DEFAULT_CONTACT_INFO = [
  {
    key: 'call',
    title: 'Call Us',
    info: '+91 98765 43210',
    description: 'Mon-Sat, 10AM-7PM',
    color: 'from-green-600 to-sky-600',
    link: 'tel:+919876543210',
    icon: Phone
  },
  {
    key: 'email',
    title: 'Email Us',
    info: 'hello@eduberator.com',
    description: 'We reply within 2 hours',
    color: 'from-green-600 to-sky-600',
    link: 'mailto:hello@eduberator.com',
    icon: Mail
  },
  {
    key: 'visit',
    title: 'Visit Office',
    info: 'Delhi, India',
    description: 'Book appointment before visit',
    color: 'from-green-600 to-sky-600',
    link: '#',
    icon: MapPin
  },
  {
    key: 'hours',
    title: 'Office Hours',
    info: '10:00 AM - 7:00 PM',
    description: 'Monday to Saturday',
    color: 'from-green-600 to-sky-600',
    link: '#',
    icon: Clock
  }
];

const DEFAULT_PROGRAMS = [
  "Bachelor's in Germany",
  "Master's in Germany",
  "STEM Programs",
  "MBA in Germany",
  "PhD in Germany",
  "Language Courses"
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation('common');
  const { requireAuth } = useAuthRedirect();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Build contactInfo from translation safely
  const rawCards = t('contact.contact_cards', { returnObjects: true });
  let contactInfo = DEFAULT_CONTACT_INFO;

  if (rawCards) {
    // if translation provided as array
    if (Array.isArray(rawCards)) {
      contactInfo = rawCards.map((c, idx) => ({
        key: c.key ?? `card_${idx}`,
        title: c.title ?? c.name ?? '',
        info: c.info ?? '',
        description: c.description ?? c.desc ?? '',
        link: c.link ?? '#',
        color: c.color ?? 'from-green-600 to-sky-600',
        icon: ICON_MAP[c.key] ?? (c.icon ? ICON_MAP[c.icon] : undefined) ?? DEFAULT_CONTACT_INFO[idx]?.icon ?? Phone
      }));
    } else if (typeof rawCards === 'object') {
      // object keyed like { "call": { ... }, "email": { ... } }
      contactInfo = Object.keys(rawCards).sort().map((k, idx) => {
        const c = rawCards[k] || {};
        return {
          key: c.key ?? k,
          title: c.title ?? c.name ?? '',
          info: c.info ?? '',
          description: c.description ?? c.desc ?? '',
          link: c.link ?? '#',
          color: c.color ?? 'from-green-600 to-sky-600',
          icon: ICON_MAP[c.key ?? k] ?? DEFAULT_CONTACT_INFO[idx]?.icon ?? Phone
        };
      });
    }
  }

  // Programs from translation or default
  const rawPrograms = t('contact.programs', { returnObjects: true });
  const programs = Array.isArray(rawPrograms) && rawPrograms.length ? rawPrograms : DEFAULT_PROGRAMS;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!requireAuth()) return;
    setIsSubmitting(true);

    try {
      // Simulate network delay (replace with real API call)
      await new Promise(resolve => setTimeout(resolve, 1600));

      // TODO: replace with real submit logic (fetch / axios)
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', program: '', message: '' });
      }, 4000);
    } catch (err) {
      console.error('submit error', err);
      // handle user-visible error if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-white via-sky-50 to-green-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-20 text-4xl opacity-15"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          💬
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-20 text-3xl opacity-15"
          animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          📞
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-sky-50 border border-green-100 rounded-full px-6 py-3 mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-semibold">{t('contact.eyebrow')}</span>
          </motion.div>

          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.3 }}>
            {t('contact.heading').split('{highlight}')[0]} <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent"> </span>
          </motion.h2>
          
          <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.4 }}>
            {t('contact.sub')}
          </motion.p>
        </motion.div> */}

        {/* Heading outside grid */}
        <motion.h3 
          className="text-3xl font-bold text-gray-900 mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
          transition={{ duration: 0.6 }}
        >
          {t('contact.get_in_touch')}
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon || ICON_MAP[contact.key] || Phone;
                return (
                  <motion.a key={contact.key ?? index} href={contact.link || '#'} variants={itemVariants} className="block group" aria-label={contact.title || 'contact card'}>
                    <motion.div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" whileHover={{ y: -5, scale: 1.02 }}>
                      <div className="flex items-center gap-4">
                        <motion.div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color || 'from-green-600 to-sky-600'} flex items-center justify-center text-white`} whileHover={{ scale: 1.05, rotate: 360 }} transition={{ duration: 0.5 }}>
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h4>
                          <p className="text-green-600 font-medium mb-1">{contact.info}</p>
                          <p className="text-gray-600 text-sm">{contact.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Action Cards */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={itemVariants}>
              <motion.button 
                className="bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 group" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  if (!requireAuth()) {
                    e.preventDefault();
                    return;
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2"><Phone className="w-5 h-5" />{t('contact.cta_call_now')}</span>
              </motion.button>

              <motion.button 
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 group" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  if (!requireAuth()) {
                    e.preventDefault();
                    return;
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2"><Calendar className="w-5 h-5" />{t('contact.cta_book_meeting')}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              {isSubmitted ? (
                <motion.div className="text-center py-12" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                  <motion.div className="w-20 h-20 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6" animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ duration: 0.5 }}>
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.thank_you_title')}</h3>
                  <p className="text-gray-700 mb-6">{t('contact.thank_you_text')}</p>
                  <motion.div className="w-full bg-gray-200 rounded-full h-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 4, ease: "linear" }}>
                    <div className="bg-gradient-to-r from-green-600 to-sky-600 h-2 rounded-full" />
                  </motion.div>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.free_assessment')}</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <label className="block text-gray-700 text-sm font-medium mb-2">{t('contact.form.name')}</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder={t('contact.form.name')} />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        <label className="block text-gray-700 text-sm font-medium mb-2">{t('contact.form.email')}</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder={t('contact.form.email')} />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.7 }}>
                        <label className="block text-gray-700 text-sm font-medium mb-2">{t('contact.form.phone')}</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder={t('contact.form.phone')} />
                      </motion.div>

                      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.8 }}>
                        <label className="block text-gray-700 text-sm font-medium mb-2">{t('contact.form.program')}</label>
                        <select name="program" value={formData.program} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition-all duration-300">
                          <option value="">{t('contact.form.program')}</option>
                          {programs.map((program, index) => (<option key={index} value={program}>{program}</option>))}
                        </select>
                      </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.9 }}>
                      <label className="block text-gray-700 text-sm font-medium mb-2">{t('contact.form.message')}</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300 resize-none" placeholder={t('contact.form.message')} />
                    </motion.div>

                    <motion.button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group" whileHover={!isSubmitting ? { scale: 1.02 } : {}} whileTap={!isSubmitting ? { scale: 0.98 } : {}} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 1 }}>
                      {isSubmitting ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          <Sparkles className="w-6 h-6 mx-auto" />
                        </motion.div>
                      ) : (
                        <span className="flex items-center justify-center gap-3"><Send className="w-5 h-5" />{t('contact.form.submit')}</span>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
