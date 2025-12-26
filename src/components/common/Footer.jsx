
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   Linkedin,
//   Youtube,
//   ArrowUp,
//   Heart,
//   Shield,
//   CheckCircle,
//   Globe,
//   MessageCircle
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.1 });

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" }, 
//     { name: "Contact", href: "/contact" },
//     { name: "Services", href: "/services" }
//   ];

//   const services = [
//     { name: "Forex Card & Remittances", to: "/services/forex-card-remittances" },
//     { name: "Accommodation", to: "/services/accommodation" },
//     { name: "Medical Insurance", to: "/services/medical-insurance" },
//     { name: "Education Loan", to: "/services/education-loan" }
//   ];

//   const importantLinks = [
//     { name: "Disclaimer & Policy", href: "/disclaimer" },
//     { name: "Reviews", href: "/reviews" },
//     { name: "Team", href: "/team" },
//     { name: "Coaching", href: "/coaching" }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: "#", color: "hover:text-blue-400" },
//     { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
//     { icon: Instagram, href: "#", color: "hover:text-pink-400" },
//     { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
//     { icon: Youtube, href: "#", color: "hover:text-red-400" }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   return (
//     <footer ref={ref} className="relative bg-gradient-to-br from-slate-100 via-sky-50 to-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute bottom-10 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-10 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], y: [0, 30, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
 
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
//       </div>

  
     
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
//         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
//           {/* Company Info */}
//           <motion.div className="lg:col-span-1" variants={itemVariants}>
//             <motion.div className="flex items-center gap-3 mb-6" whileHover={{ scale: 1.03 }}>
//               <div className="w-10 h-10 bg-gradient-to-r from-green-900 to-sky-900 rounded-xl flex items-center justify-center">
//                 <Globe className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Eduberator</h3>
//             </motion.div>

//             <p className="text-gray-700 mb-6 leading-relaxed">Your strategic partner for German education. We transform dreams into successful admissions with proven strategies and expert guidance.</p>

//             {/* Trust Badges */}
//             <div className="space-y-3">
//               <div className="flex items-center gap-3 text-sm text-gray-700">
//                 <CheckCircle className="w-4 h-4 text-green-600" />
//                 <span>99% Admission Success</span>
//               </div>
//               <div className="flex items-center gap-3 text-sm text-gray-700">
//                 <CheckCircle className="w-4 h-4 text-green-600" />
//                 <span>500+ Students Guided</span>
//               </div>
//               <div className="flex items-center gap-3 text-sm text-gray-700">
//                 <CheckCircle className="w-4 h-4 text-green-600" />
//                 <span>Germany Education Experts</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.li key={index} whileHover={{ x: 5 }}>
//                   <Link to={link.href} className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Our Services */}
//           <motion.div variants={itemVariants}>
//             <h4 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h4>
//             <ul className="space-y-3">
//               {services.map((service, index) => (
//                 <motion.li key={index} whileHover={{ x: 5 }}>
//                   <Link to={service.to} className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {service.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Important Links */}
//           <motion.div variants={itemVariants}>
//             <h4 className="text-lg font-semibold text-gray-900 mb-6">Important Links</h4>
//             <ul className="space-y-3">
//               {importantLinks.map((link, index) => (
//                 <motion.li key={index} whileHover={{ x: 5 }}>
//                   <Link to={link.href} className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </motion.div>

//         {/* Contact & Social Section */}
//         <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-t border-gray-200" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.4 }}>
//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h4>
//             <div className="space-y-3">
//               <motion.a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors duration-300 group" whileHover={{ x: 5 }}>
//                 <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-sky-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
//                   <Phone className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <div className="font-medium text-gray-900">+91 98765 43210</div>
//                   <div className="text-sm text-gray-600">Mon-Sat, 10AM-7PM</div>
//                 </div>
//               </motion.a>

//               <motion.a href="mailto:hello@eduberator.com" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors duration-300 group" whileHover={{ x: 5 }}>
//                 <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-green-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
//                   <Mail className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <div className="font-medium text-gray-900">hello@eduberator.com</div>
//                   <div className="text-sm text-gray-600">We reply within 2 hours</div>
//                 </div>
//               </motion.a>

//               <motion.div className="flex items-center gap-3 text-gray-700 group" whileHover={{ x: 5 }}>
//                 <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-sky-600/40 rounded-lg flex items-center justify-center">
//                   <MapPin className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <div className="font-medium text-gray-900">Delhi, India</div>
//                   <div className="text-sm text-gray-600">Book appointment before visit</div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Social & Newsletter */}
//           <div className="space-y-6">
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, index) => (
//                   <motion.a key={index} href={social.href} className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-700 ${social.color} transition-all duration-300 hover:scale-110 border border-gray-100`} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
//                     <social.icon className="w-5 h-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h4>
//               <div className="flex gap-2">
//                 <input type="email" placeholder="Enter your email" className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-600 transition-all duration-300" />
//                 <motion.button className="px-6 bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <MessageCircle className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.6 }}>
//           {/* Copyright */}
//           <div className="text-gray-600 text-sm text-center md:text-left">
//             <div className="flex items-center gap-2 justify-center md:justify-start">
//               <span>© 2025 Eduberator. Made with</span>
//               <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
//                 <Heart className="w-4 h-4 text-red-400 fill-red-400" />
//               </motion.div>
//               <span>for students worldwide.</span>
//             </div>
//           </div>

//           {/* Legal Links */}
//           <div className="flex items-center gap-6 text-sm">
//             <Link to="/privacy" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-1">
//               <Shield className="w-4 h-4" />
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="text-gray-600 hover:text-green-600 transition-colors duration-300">Terms of Service</Link>
//             <Link to="/cookies" className="text-gray-600 hover:text-green-600 transition-colors duration-300">Cookies</Link>
//           </div>

//           {/* Scroll to Top */}
//           <motion.button onClick={scrollToTop} className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//             <ArrowUp className="w-5 h-5" />
//           </motion.button>
//         </motion.div>
//       </div>
     
 
//     </footer>
//   );
// };

// export default Footer;


// src/components/layout/Footer.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart,
  Shield,
  CheckCircle,
  Globe,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import { useAuthRedirect } from '../../utils/useAuthRedirect';


const ICON_MAP = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation('common');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // read arrays/objects from i18n; fallback to defaults if missing
  const footer = t('footer', { returnObjects: true }) || {};

  const quickLinks = Array.isArray(footer.quick_links)
    ? footer.quick_links
    : [
        { name: 'Home', href: '/home' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Services', href: '/services' }
      ];

  const services = Array.isArray(footer.services)
    ? footer.services
    : [
        { name: 'Forex Card & Remittances', to: '/services/forex-card-remittances' },
        { name: 'Accommodation', to: '/services/accommodation' },
        { name: 'Medical Insurance', to: '/services/medical-insurance' },
        { name: 'Education Loan', to: '/services/education-loan' }
      ];

  const importantLinks = Array.isArray(footer.important_links)
    ? footer.important_links
    : [
        { name: 'Disclaimer & Policy', href: '/disclaimer' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Team', href: '/team' },
        { name: 'Coaching', href: '/coaching' }
      ];

  const socialLinks = Array.isArray(footer.social)
    ? footer.social
    : [
        { provider: 'facebook', href: '#' },
        { provider: 'twitter', href: '#' },
        { provider: 'instagram', href: '#' },
        { provider: 'linkedin', href: '#' },
        { provider: 'youtube', href: '#' }
      ];

  const contact = footer.contact || {};
  const contactPhone = contact.phone || '+91 98765 43210';
  const contactPhoneNote = contact.phone_note || 'Mon-Sat, 10AM-7PM';
  const contactEmail = contact.email || 'hello@eduberator.com';
  const contactEmailNote = contact.email_note || 'We reply within 2 hours';
  const contactAddress = contact.address || 'Delhi, India';
  const contactAddressNote = contact.address_note || 'Book appointment before visit';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-slate-100 via-sky-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.div className="flex items-center gap-3 mb-6" whileHover={{ scale: 1.03 }}>
              {/* <div className="w-10 h-10 bg-gradient-to-r from-green-900 to-sky-900 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div> */}
              <img src={logo} alt="Eduberator" className="h-14 w-auto" />
              {/* <h3 className="text-2xl font-bold text-gray-900">{footer.company || 'Eduberator'}</h3> */}
            </motion.div>

            <p className="text-gray-700 mb-6 leading-relaxed">{footer.about || 'Your strategic partner for European education. We transform dreams into successful admissions with proven strategies and expert guidance.'}</p>

            {/* Trust Badges */}
            {/* <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>{(footer.trust && footer.trust.one) || '99% Admission Success'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>{(footer.trust && footer.trust.two) || '500+ Students Guided'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>{(footer.trust && footer.trust.three) || 'Germany Education Experts'}</span>
              </div>
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">{footer.quick_links_title || 'Quick Links'}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.href} className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">{footer.our_services_title || 'Our Services'}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={service.to} className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">{footer.important_links_title || 'Important Links'}</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.href} className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact & Social Section */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-t border-gray-200" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.4 }}>
          {/* Contact Info */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">{footer.get_in_touch_title || 'Get In Touch'}</h4>
            <div className="space-y-3">
              <motion.a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors duration-300 group" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-sky-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{contactPhone}</div>
                  <div className="text-sm text-gray-600">{contactPhoneNote}</div>
                </div>
              </motion.a>

              <motion.a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors duration-300 group" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-green-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{contactEmail}</div>
                  <div className="text-sm text-gray-600">{contactEmailNote}</div>
                </div>
              </motion.a>

              <motion.div className="flex items-center gap-3 text-gray-700 group" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-sky-600/40 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{contactAddress}</div>
                  <div className="text-sm text-gray-600">{contactAddressNote}</div>
                </div>
              </motion.div>
            </div>
          </div> */}

          {/* Newsletter - LEFT */}
<div className="space-y-4">
  <h4 className="text-lg font-semibold text-gray-900 mb-4">
    {footer.newsletter_title || 'Newsletter'}
  </h4>

  <div className="flex gap-2">
    <input
      type="email"
      placeholder={footer.newsletter_placeholder || 'Enter your email'}
      className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-600 transition-all duration-300"
    />
    <motion.button
      className="px-6 bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="subscribe"
      onClick={(e) => {
        if (!requireAuth()) {
          e.preventDefault();
          return;
        }
      }}
    >
      <MessageCircle className="w-5 h-5" />
    </motion.button>
  </div>
</div>

{/* Social Links - RIGHT */}
<div className="space-y-4 lg:text-right">
  <h4 className="text-lg font-semibold text-gray-900 mb-4">
    {footer.follow_us_title || 'Follow Us'}
  </h4>

  <div className="flex gap-3 lg:justify-end">
    {socialLinks.map((social, index) => {
      const Icon =
        ICON_MAP[(social.provider || '').toLowerCase()] || null;

      return (
        <motion.a
          key={index}
          href={social.href || '#'}
          className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={social.provider || `social-${index}`}
        >
          {Icon ? (
            <Icon className="w-5 h-5" />
          ) : (
            <Globe className="w-5 h-5" />
          )}
        </motion.a>
      );
    })}
  </div>
</div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.6 }}>
          {/* Copyright */}
          <div className="text-gray-600 text-sm text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span>{footer.copyright_prefix || '© 2025 Eduberator. Made with'}</span>
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>{footer.copyright_suffix || 'for students worldwide.'}</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-1">
              <Shield className="w-4 h-4" />
              {footer.legal?.privacy || 'Privacy Policy'}
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-green-600 transition-colors duration-300">{footer.legal?.terms || 'Terms of Service'}</Link>
            <Link to="/cookies" className="text-gray-600 hover:text-green-600 transition-colors duration-300">{footer.legal?.cookies || 'Cookies'}</Link>
          </div>

          {/* Scroll to Top */}
          <motion.button onClick={scrollToTop} className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} aria-label="scroll to top">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
