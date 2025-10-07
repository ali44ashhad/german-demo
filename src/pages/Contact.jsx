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

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      description: "Mon-Sat, 10AM-7PM",
      color: "from-green-500 to-emerald-500",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@profiberater.com",
      description: "We reply within 2 hours",
      color: "from-blue-500 to-cyan-500",
      link: "mailto:hello@profiberater.com"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      info: "Delhi, India",
      description: "Book appointment before visit",
      color: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "10:00 AM - 7:00 PM",
      description: "Monday to Saturday",
      color: "from-orange-500 to-red-500",
      link: "#"
    }
  ];

  const services = [
    "Forex Card & Remittances",
    "Accommodation", 
    "Medical Insurance",
    "Education Loan",
    "University Admission",
    "Visa Guidance"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our Germany education experts. We're here to help you with your study abroad journey.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    className="block group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 360
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <contact.icon className="w-6 h-6" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {contact.title}
                          </h4>
                          <p className="text-cyan-400 font-medium mb-1">
                            {contact.info}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-800/30 rounded-2xl p-6 border border-yellow-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-400" />
                  Why Choose Profiberater?
                </h3>
                <div className="space-y-2">
                  {[
                    "10+ Years Experience in Europe",
                    "500+ Successful Admissions",
                    "End-to-End Support",
                    "Germany-Specific Expertise"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-gray-300 mb-6">
                      We've received your message and will contact you within 2 hours.
                    </p>
                    <motion.div
                      className="w-full bg-gray-700 rounded-full h-2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                    >
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" />
                    </motion.div>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Free Consultation Form
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
                            placeholder="Enter your name"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
                            placeholder="+91 98765 43210"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Service Interest
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
                          >
                            <option value="">Select service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300 resize-none"
                          placeholder="Tell us about your academic background and goals..."
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-6 h-6 mx-auto" />
                          </motion.div>
                        ) : (
                          <span className="flex items-center justify-center gap-3">
                            <Send className="w-5 h-5" />
                            Send Message & Get Free Consultation
                          </span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            Ready to Start Your German Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            Contact us today and take the first step towards your dream education in Germany.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;