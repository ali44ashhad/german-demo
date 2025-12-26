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
//   CheckCircle,
//   Users,
//   Target
// } from 'lucide-react';

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
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
//       info: "hello@profiberater.com",
//       description: "We reply within 2 hours",
//       color: "from-green-600 to-sky-600",
//       link: "mailto:hello@profiberater.com"
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

//   const services = [
//     "Forex Card & Remittances",
//     "Accommodation", 
//     "Medical Insurance",
//     "Education Loan",
//     "University Admission",
//     "Visa Guidance"
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
    
//     // Reset form after success
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//       });
//     }, 5000);
//   };

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-90"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />
//           {/* Keep bluish overlay as requested */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
//         </div>
        
//         <div className="relative z-10 max-w-6xl py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Contact <span className="bg-gradient-to-r from-green-300 to-sky-300 bg-clip-text text-transparent">Us</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Get in touch with our Germany education experts. We're here to help you with your study abroad journey.
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
//               <div className="space-y-6 mb-8">
//                 {contactInfo.map((contact, index) => (
//                   <motion.a
//                     key={index}
//                     href={contact.link}
//                     className="block group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
//                       <div className="flex items-center gap-4">
//                         <motion.div
//                           className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}
//                           whileHover={{ 
//                             scale: 1.1,
//                             rotate: 360
//                           }}
//                           transition={{ duration: 0.5 }}
//                         >
//                           <contact.icon className="w-6 h-6" />
//                         </motion.div>
                        
//                         <div className="flex-1 text-left">
//                           <h4 className="text-lg font-semibold text-gray-900 mb-1">
//                             {contact.title}
//                           </h4>
//                           <p className="text-green-600 font-medium mb-1">
//                             {contact.info}
//                           </p>
//                           <p className="text-gray-700 text-sm">
//                             {contact.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Why Choose Us */}
//               <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <Target className="w-5 h-5 text-green-600" />
//                   Why Choose Profiberater?
//                 </h3>
//                 <div className="space-y-2">
//                   {[
//                     "10+ Years Experience in Europe",
//                     "500+ Successful Admissions",
//                     "End-to-End Support",
//                     "Germany-Specific Expertise"
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center gap-3 text-gray-700">
//                       <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                       <span className="text-sm">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
//                 {isSubmitted ? (
//                   <motion.div
//                     className="text-center py-12"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <motion.div
//                       className="w-20 h-20 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6"
//                       animate={{ 
//                         scale: [1, 1.1, 1],
//                         rotate: [0, 10, 0]
//                       }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <CheckCircle className="w-10 h-10 text-white" />
//                     </motion.div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       Thank You!
//                     </h3>
//                     <p className="text-gray-700 mb-6">
//                       We've received your message and will contact you within 2 hours.
//                     </p>
//                     <motion.div
//                       className="w-full bg-gray-200 rounded-full h-2"
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ duration: 5, ease: "linear" }}
//                     >
//                       <div className="bg-gradient-to-r from-green-600 to-sky-600 h-2 rounded-full" />
//                     </motion.div>
//                   </motion.div>
//                 ) : (
//                   <>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                       Free Consultation Form
//                     </h3>
                    
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.3 }}
//                         >
//                           <label className="block text-gray-700 text-sm font-medium mb-2">
//                             Full Name *
//                           </label>
//                           <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-all duration-300"
//                             placeholder="Enter your name"
//                           />
//                         </motion.div>

//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.4 }}
//                         >
//                           <label className="block text-gray-700 text-sm font-medium mb-2">
//                             Email Address *
//                           </label>
//                           <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-all duration-300"
//                             placeholder="Enter your email"
//                           />
//                         </motion.div>
//                       </div>

//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.5 }}
//                         >
//                           <label className="block text-gray-700 text-sm font-medium mb-2">
//                             Phone Number
//                           </label>
//                           <input
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-all duration-300"
//                             placeholder="+91 98765 43210"
//                           />
//                         </motion.div>

//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.6 }}
//                         >
//                           <label className="block text-gray-700 text-sm font-medium mb-2">
//                             Service Interest
//                           </label>
//                           <select
//                             name="service"
//                             value={formData.service}
//                             onChange={handleChange}
//                             className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 focus:bg-white transition-all duration-300"
//                           >
//                             <option value="">Select service</option>
//                             {services.map((service, index) => (
//                               <option key={index} value={service}>
//                                 {service}
//                               </option>
//                             ))}
//                           </select>
//                         </motion.div>
//                       </div>

//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5, delay: 0.7 }}
//                       >
//                         <label className="block text-gray-700 text-sm font-medium mb-2">
//                           Your Message
//                         </label>
//                         <textarea
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           rows="4"
//                           className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-all duration-300 resize-none"
//                           placeholder="Tell us about your academic background and goals..."
//                         />
//                       </motion.div>

//                       <motion.button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
//                         whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                         whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5, delay: 0.8 }}
//                       >
//                         {isSubmitting ? (
//                           <motion.div
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                           >
//                             <Sparkles className="w-6 h-6 mx-auto" />
//                           </motion.div>
//                         ) : (
//                           <span className="flex items-center justify-center gap-3">
//                             <Send className="w-5 h-5" />
//                             Send Message & Get Free Consultation
//                           </span>
//                         )}
//                       </motion.button>
//                     </form>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-green-50 to-sky-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           >
//             Ready to Start Your German Journey?
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-gray-700 mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ delay: 0.2 }}
//           >
//             Contact us today and take the first step towards your dream education in Germany.
//           </motion.p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <MessageCircle className="w-5 h-5" />
//               WhatsApp Now
//             </motion.a>
//             <motion.a
//               href="tel:+919876543210"
//               className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-sky-600/25 transition-all duration-300 flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Phone className="w-5 h-5" />
//               Call Now
//             </motion.a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


//src/components/Contact.jsx
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Sparkles,
  CheckCircle,
  Users,
  Target
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthRedirect } from '../utils/useAuthRedirect';

const FALLBACK = {
  hero: {
    title: 'Contact Us',
    subtitle: "Get in touch with our Germany education experts. We're here to help you with your study abroad journey."
  },
  contactInfo: [
    {
      icon: 'Phone',
      title: 'Call Us',
      info: '+91 98765 43210',
      description: 'Mon-Sat, 10AM-7PM',
      color: 'from-green-600 to-sky-600',
      link: 'tel:+919876543210'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      info: 'hello@profiberater.com',
      description: 'We reply within 2 hours',
      color: 'from-green-600 to-sky-600',
      link: 'mailto:hello@profiberater.com'
    },
    {
      icon: 'MapPin',
      title: 'Visit Office',
      info: 'Delhi, India',
      description: 'Book appointment before visit',
      color: 'from-green-600 to-sky-600',
      link: '#'
    },
    {
      icon: 'Clock',
      title: 'Office Hours',
      info: '10:00 AM - 7:00 PM',
      description: 'Monday to Saturday',
      color: 'from-green-600 to-sky-600',
      link: '#'
    }
  ],
  services: [
    'Forex Card & Remittances',
    'Accommodation',
    'Medical Insurance',
    'Education Loan',
    'University Admission',
    'Visa Guidance'
  ],
  form: {
    heading: 'Free Consultation Form',
    name: 'Full Name *',
    email: 'Email Address *',
    phone: 'Phone Number',
    service: 'Service Interest',
    message: 'Your Message',
    submit: 'Send Message & Get Free Consultation',
    submitting: 'Sending...',
    thanksTitle: 'Thank You!',
    thanksText: "We've received your message and will contact you within 2 hours."
  },
  why: {
    heading: 'Why Choose Profiberater?',
    bullets: [
      '10+ Years Experience in Europe',
      '500+ Successful Admissions',
      'End-to-End Support',
      'Germany-Specific Expertise'
    ]
  },
  cta: {
    heading: 'Ready to Start Your German Journey?',
    sub: 'Contact us today and take the first step towards your dream education in Germany.',
    whatsapp: 'WhatsApp Now',
    call: 'Call Now'
  }
};

// map of icon names to actual components
const ICON_MAP = {
  Phone,
  Mail,
  MapPin,
  Clock
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation('common');
  const { requireAuth } = useAuthRedirect();

  // Attempt to read the whole contactus block as object
  const raw = t('contactus', { returnObjects: true, defaultValue: {} });

  // Helpers to normalize object/array forms (i18next may provide either)
  const normalizeArray = (val, fallback) => {
    if (Array.isArray(val)) return val;
    if (!val) return fallback;
    // if it's an object with numeric keys -> convert to array
    if (typeof val === 'object') {
      const keys = Object.keys(val).sort();
      if (keys.length && keys.every(k => /^\d+$/.test(k))) {
        return keys.map(k => val[k]);
      }
      // otherwise, try to return as single element array
      return [val];
    }
    return fallback;
  };

  const hero = raw.hero && Object.keys(raw.hero).length ? raw.hero : FALLBACK.hero;
  let contactInfo = normalizeArray(raw.contactInfo, FALLBACK.contactInfo);
  // ensure contactInfo items contain icon components (resolve by name if string)
  contactInfo = contactInfo.map((c, i) => {
    // allow i18n strings to provide icon as name
    const iconComp = typeof c.icon === 'string' ? (ICON_MAP[c.icon] || Phone) : (c.icon || Phone);
    return {
      icon: iconComp,
      title: c.title || FALLBACK.contactInfo[i]?.title || 'Contact',
      info: c.info || FALLBACK.contactInfo[i]?.info || '',
      description: c.description || FALLBACK.contactInfo[i]?.description || '',
      color: c.color || FALLBACK.contactInfo[i]?.color || 'from-green-600 to-sky-600',
      link: c.link || FALLBACK.contactInfo[i]?.link || '#'
    };
  });

  const services = normalizeArray(raw.services, FALLBACK.services);
  const form = (raw.form && Object.keys(raw.form).length) ? raw.form : FALLBACK.form;
  const why = (raw.why && Object.keys(raw.why).length) ? raw.why : FALLBACK.why;
  const cta = (raw.cta && Object.keys(raw.cta).length) ? raw.cta : FALLBACK.cta;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!requireAuth()) return;
    setIsSubmitting(true);

    // TODO: replace with real API call
    await new Promise(resolve => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-6xl py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            {hero.title}
            <span className="ml-2 bg-gradient-to-r from-green-300 to-sky-300 bg-clip-text text-transparent">Us</span>
          </motion.h1>

          <motion.p
            className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading outside grid */}
          <h2 className="text-4xl font-bold text-gray-900 mb-12">{t('contactus.getInTouch', 'Get In Touch')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, idx) => {
                  const Icon = contact.icon || Phone;
                  return (
                    <motion.a
                      key={idx}
                      href={contact.link}
                      className="block group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}
                            whileHover={{ scale: 1.07, rotate: 360 }}
                            transition={{ duration: 0.45 }}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>

                          <div className="flex-1 text-left">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h4>
                            <p className="text-green-600 font-medium mb-1">{contact.info}</p>
                            <p className="text-gray-700 text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Why Choose */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  {why.heading || 'Why Choose Profiberater?'}
                </h3>
                <div className="space-y-2">
                  {(why.bullets || []).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{form.thanksTitle}</h3>
                    <p className="text-gray-700 mb-6">{form.thanksText}</p>
                    <motion.div className="w-full bg-gray-200 rounded-full h-2" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 4, ease: 'linear' }}>
                      <div className="bg-gradient-to-r from-green-600 to-sky-600 h-2 rounded-full" />
                    </motion.div>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{form.heading}</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.45 }}>
                          <label className="block text-gray-700 text-sm font-medium mb-2">{form.name}</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder="Enter your name" />
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.45, delay: 0.05 }}>
                          <label className="block text-gray-700 text-sm font-medium mb-2">{form.email}</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder="Enter your email" />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.45, delay: 0.1 }}>
                          <label className="block text-gray-700 text-sm font-medium mb-2">{form.phone}</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300" placeholder="+91 98765 43210" />
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.45, delay: 0.15 }}>
                          <label className="block text-gray-700 text-sm font-medium mb-2">{form.service}</label>
                          <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition-all duration-300">
                            <option value="">Select service</option>
                            {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                          </select>
                        </motion.div>
                      </div>

                      <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.45, delay: 0.2 }}>
                        <label className="block text-gray-700 text-sm font-medium mb-2">{form.message}</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300 resize-none" placeholder="Tell us about your academic background and goals..." />
                      </motion.div>

                      <motion.button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group" whileHover={!isSubmitting ? { scale: 1.02 } : {}}>
                        {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}><Sparkles className="w-6 h-6 mx-auto" /></motion.div> : <span className="flex items-center justify-center gap-3"><Send className="w-5 h-5" />{form.submit}</span>}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
            {cta.heading}
          </motion.h2>
          <motion.p className="text-xl text-gray-700 mb-8" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ delay: 0.12 }}>
            {cta.sub}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2" 
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                if (!requireAuth()) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              <MessageCircle className="w-5 h-5" /> {cta.whatsapp}
            </motion.a>

            <motion.a 
              href="tel:+919876543210" 
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2" 
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                if (!requireAuth()) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              <Phone className="w-5 h-5" /> {cta.call}
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


