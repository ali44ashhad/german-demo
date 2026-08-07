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
//     <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
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
//               <h2 className="text-4xl font-bold text-foreground mb-8">Get In Touch</h2>
              
//               <div className="space-y-6 mb-8">
//                 {contactInfo.map((contact, index) => (
//                   <motion.a
//                     key={index}
//                     href={contact.link}
//                     className="block group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300">
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
//                           <h4 className="text-lg font-semibold text-foreground mb-1">
//                             {contact.title}
//                           </h4>
//                           <p className="text-green-600 dark:text-green-400 font-medium mb-1">
//                             {contact.info}
//                           </p>
//                           <p className="text-muted-foreground text-sm">
//                             {contact.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Why Choose Us */}
//               <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm">
//                 <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
//                   <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
//                   Why Choose Profiberater?
//                 </h3>
//                 <div className="space-y-2">
//                   {[
//                     "10+ Years Experience in Europe",
//                     "500+ Successful Admissions",
//                     "End-to-End Support",
//                     "Germany-Specific Expertise"
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center gap-3 text-muted-foreground">
//                       <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
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
//               <div className="bg-surface rounded-3xl p-8 border border-border shadow-sm">
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
//                     <h3 className="text-2xl font-bold text-foreground mb-4">
//                       Thank You!
//                     </h3>
//                     <p className="text-muted-foreground mb-6">
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
//                     <h3 className="text-2xl font-bold text-foreground mb-6">
//                       Free Consultation Form
//                     </h3>
                    
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.3 }}
//                         >
//                           <label className="block text-muted-foreground text-sm font-medium mb-2">
//                             Full Name *
//                           </label>
//                           <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 focus:bg-surface transition-all duration-300"
//                             placeholder="Enter your name"
//                           />
//                         </motion.div>

//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.4 }}
//                         >
//                           <label className="block text-muted-foreground text-sm font-medium mb-2">
//                             Email Address *
//                           </label>
//                           <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 focus:bg-surface transition-all duration-300"
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
//                           <label className="block text-muted-foreground text-sm font-medium mb-2">
//                             Phone Number
//                           </label>
//                           <input
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 focus:bg-surface transition-all duration-300"
//                             placeholder="+91 98765 43210"
//                           />
//                         </motion.div>

//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                           transition={{ duration: 0.5, delay: 0.6 }}
//                         >
//                           <label className="block text-muted-foreground text-sm font-medium mb-2">
//                             Service Interest
//                           </label>
//                           <select
//                             name="service"
//                             value={formData.service}
//                             onChange={handleChange}
//                             className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-green-600 focus:bg-surface transition-all duration-300"
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
//                         <label className="block text-muted-foreground text-sm font-medium mb-2">
//                           Your Message
//                         </label>
//                         <textarea
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           rows="4"
//                           className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 focus:bg-surface transition-all duration-300 resize-none"
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
//       <section className="py-20 bg-gradient-to-r from-green-50 to-sky-50 dark:from-slate-800/80 dark:to-slate-800/50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2 
//             className="text-4xl font-bold text-foreground mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           >
//             Ready to Start Your German Journey?
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-muted-foreground mb-8"
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
import { useRef } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ContactInquiryForm from '../components/contact/ContactInquiryForm';

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FALLBACK = {
  hero: {
    title: 'Contact Us',
    subtitle:
      'Our experienced team is here to guide you through every step of your immigration journey. Register today to receive personalized advice, expert guidance, and trusted support tailored to your goals.'
  },
  contactInfo: [
    {
      icon: 'WhatsApp',
      title: 'WhatsApp Number',
      info: '+91 98765 43210',
      description: 'Mon-Fri, 10AM-6PM',
      color: 'from-green-600 to-sky-600',
      link: 'https://wa.me/919876543210'
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
  cta: {
    heading: 'Ready to Start Your Journey?',
    sub: 'Contact us today and take the first step toward achieving your dream of studying in Europe.',
    sub2: 'Our experts are here to guide you through every stage of your journey.',
    button: 'Register'
  },
  community: {
    paragraphs: [
      'Join our growing community on social media and take the next step toward your European dream! 🌍 ✨',
      'Connect with fellow aspirants, share your migration journey, and stay informed with the latest immigration updates, expert tips, and valuable insights from our team.',
      "At Eduberater, we're more than an immigration service—we're a community committed to supporting you every step of the way. Follow us, engage with our content, and share your milestones using",
      "Your dream is our mission. Together, let's make your move to Europe a smooth, confident, and unforgettable journey."
    ],
    hashtag: '#eduberater',
    socialHeading: 'Your Journey Begins with Staying Connected.',
    social: [
      { provider: 'facebook', href: '#' },
      { provider: 'twitter', href: '#' },
      { provider: 'linkedin', href: '#' },
      { provider: 'youtube', href: '#' },
      { provider: 'instagram', href: '#' }
    ]
  }
};

// map of icon names to actual components
const ICON_MAP = {
  Phone: WhatsAppIcon,
  WhatsApp: WhatsAppIcon,
  Mail,
  MapPin,
  Clock
};

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube
};

const SOCIAL_BUTTON_CLASS = {
  facebook: 'bg-[#1877F2] hover:bg-[#166FE5]',
  twitter: 'bg-gray-900 hover:bg-black',
  linkedin: 'bg-[#0A66C2] hover:bg-[#004182]',
  youtube: 'bg-[#FF0000] hover:bg-[#CC0000]',
  instagram: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90'
};

const SIDEBAR_HIDDEN_CONTACT_ICONS = new Set(['MapPin', 'Clock']);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation('common');
  const navigate = useNavigate();

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
  contactInfo = contactInfo.filter((c) => {
    const iconName = typeof c.icon === 'string' ? c.icon : '';
    return !SIDEBAR_HIDDEN_CONTACT_ICONS.has(iconName);
  });
  // ensure contactInfo items contain icon components (resolve by name if string)
  contactInfo = contactInfo.map((c, i) => {
    // allow i18n strings to provide icon as name
    const iconComp = typeof c.icon === 'string' ? (ICON_MAP[c.icon] || WhatsAppIcon) : (c.icon || WhatsAppIcon);
    return {
      icon: iconComp,
      title: c.title || FALLBACK.contactInfo[i]?.title || 'Contact',
      info: c.info || FALLBACK.contactInfo[i]?.info || '',
      description: c.description || FALLBACK.contactInfo[i]?.description || '',
      color: c.color || FALLBACK.contactInfo[i]?.color || 'from-green-600 to-sky-600',
      link: c.link || FALLBACK.contactInfo[i]?.link || '#'
    };
  });

  const cta = (raw.cta && Object.keys(raw.cta).length) ? raw.cta : FALLBACK.cta;

  const communityRaw = raw.community && Object.keys(raw.community).length ? raw.community : FALLBACK.community;
  const communityParagraphs = normalizeArray(communityRaw.paragraphs, FALLBACK.community.paragraphs);
  const communitySocial = normalizeArray(communityRaw.social, FALLBACK.community.social);
  const community = {
    paragraphs: communityParagraphs,
    hashtag: communityRaw.hashtag || FALLBACK.community.hashtag,
    socialHeading: communityRaw.socialHeading || FALLBACK.community.socialHeading,
    social: communitySocial
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply dark:from-sky-600/50 dark:via-blue-700/40 dark:to-sky-900/60" />
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
      <section ref={ref} className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('contactus.getInTouch', 'Get In Touch')}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              {hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 xl:col-span-5 self-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6 }}
              >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {contactInfo.map((contact, idx) => {
                  const Icon = contact.icon || WhatsAppIcon;
                  const isExternal = /^https?:\/\//i.test(contact.link || '');
                  return (
                    <motion.a
                      key={idx}
                      href={contact.link}
                      className="block group h-full"
                      whileHover={{ y: -2 }}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <div className="h-full bg-surface rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-md hover:border-border transition-all duration-300">
                        <div className="flex flex-col gap-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white shrink-0`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.35 }}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>

                          <div className="text-left min-w-0">
                            <h4 className="text-base font-semibold text-foreground mb-1">
                              {contact.title}
                            </h4>
                            <p className="text-green-600 dark:text-green-400 font-medium text-sm mb-1 break-words">
                              {contact.info}
                            </p>
                            <p className="text-muted-foreground text-sm leading-snug">{contact.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                className="mt-8 pt-8 border-t border-border text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {community.paragraphs.slice(0, 2).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  <p>
                    {community.paragraphs[2]}{' '}
                    <strong className="font-bold text-foreground">{community.hashtag}</strong>
                  </p>
                  {community.paragraphs.slice(3).map((paragraph, idx) => (
                    <p key={`rest-${idx}`}>{paragraph}</p>
                  ))}
                </div>

                <h3 className="mt-8 text-lg sm:text-xl font-bold text-foreground">
                  {community.socialHeading}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {community.social.map((social, index) => {
                    const provider = (social.provider || '').toLowerCase();
                    const Icon = SOCIAL_ICON_MAP[provider] || Globe;
                    const buttonClass = SOCIAL_BUTTON_CLASS[provider] || 'bg-gray-700 hover:bg-gray-800';

                    return (
                      <motion.a
                        key={`${provider}-${index}`}
                        href={social.href || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white shadow-sm transition-colors duration-300 ${buttonClass}`}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={provider || `social-${index}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 xl:col-span-7 min-w-0 self-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ContactInquiryForm
                  idPrefix="page-contact"
                  isInView={isInView}
                  variant="compact"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-sky-50 dark:from-slate-800/80 dark:to-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl font-bold text-foreground mb-6" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
            {cta.heading}
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground mb-4" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ delay: 0.12 }}>
            {cta.sub}
          </motion.p>
          <motion.p className="text-xl text-muted-foreground mb-8" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ delay: 0.18 }}>
            {cta.sub2 || FALLBACK.cta.sub2}
          </motion.p>

          <motion.button
            type="button"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
          >
            {cta.button || FALLBACK.cta.button}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Contact;


