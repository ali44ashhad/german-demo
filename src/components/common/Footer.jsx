 
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

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Success Stories", href: "#success" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "University Selection",
    "Application Assistance", 
    "Visa Guidance",
    "Test Preparation",
    "Blocked Account Help",
    "Pre-Departure Briefing"
  ];

  const germanUniversities = [
    "TU9 Universities",
    "U15 Universities", 
    "Applied Sciences",
    "Public Universities",
    "Private Universities",
    "STEM Programs"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-400" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white">Profitberator</h3>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your strategic partner for German education. We transform dreams into successful admissions with proven strategies and expert guidance.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>99% Admission Success</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>500+ Students Guided</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Germany Education Experts</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* German Universities */}
          <motion.div
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white mb-6">German Universities</h4>
            <ul className="space-y-3">
              {germanUniversities.map((university, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {university}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact & Social Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a 
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="font-medium">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">Mon-Sat, 10AM-7PM</div>
                </div>
              </motion.a>

              <motion.a 
                href="mailto:hello@profitberator.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium">hello@profitberator.com</div>
                  <div className="text-sm text-gray-400">We reply within 2 hours</div>
                </div>
              </motion.a>

              <motion.div 
                className="flex items-center gap-3 text-gray-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-medium">Delhi, India</div>
                  <div className="text-sm text-gray-400">Book appointment before visit</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 border border-gray-600`}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                />
                <motion.button
                  className="px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span>© 2025 Profitberator. Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>for students worldwide.</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Cookies
            </a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating WhatsApp CTA */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </footer>
  );
};

export default Footer;