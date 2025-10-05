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
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
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
      info: "hello@profitberator.com",
      description: "We reply within 2 hours",
      color: "from-blue-500 to-cyan-500",
      link: "mailto:hello@profitberator.com"
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

  const programs = [
    "Bachelor's in Germany",
    "Master's in Germany", 
    "STEM Programs",
    "MBA in Germany",
    "PhD in Germany",
    "Language Courses"
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
        program: '',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-20 text-4xl opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💬
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-20 text-3xl opacity-20"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📞
        </motion.div>
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
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MessageCircle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Free Consultation</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Start Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              German Journey
            </span>
            {' '}Today
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get personalized guidance from Germany education experts. Book your free profile assessment and discover your path to German universities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  variants={itemVariants}
                  className="block group"
                >
                  <motion.div
                    className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{ 
                      y: -5,
                      scale: 1.02
                    }}
                  >
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
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Quick Action Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </span>
              </motion.button>

              <motion.button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Meeting
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                    Free Profile Assessment
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
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
                        transition={{ duration: 0.5, delay: 0.6 }}
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
                        transition={{ duration: 0.5, delay: 0.7 }}
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
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Program Interest
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
                        >
                          <option value="">Select program</option>
                          {programs.map((program, index) => (
                            <option key={index} value={program}>
                              {program}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
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
                      transition={{ duration: 0.5, delay: 1 }}
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
  );
};

export default Contact;


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
//       color: "from-green-500 to-emerald-500",
//       link: "tel:+919876543210",
//       image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&w=200&h=150&fit=crop"
//     },
//     {
//       icon: Mail,
//       title: "Email Us",
//       info: "hello@profitberator.com",
//       description: "We reply within 2 hours",
//       color: "from-blue-500 to-cyan-500",
//       link: "mailto:hello@profitberator.com",
//       image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&w=200&h=150&fit=crop"
//     },
//     {
//       icon: MapPin,
//       title: "Visit Office",
//       info: "Delhi, India",
//       description: "Book appointment before visit",
//       color: "from-purple-500 to-pink-500",
//       link: "#",
//       image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&w=200&h=150&fit=crop"
//     },
//     {
//       icon: Clock,
//       title: "Office Hours",
//       info: "10:00 AM - 7:00 PM",
//       description: "Monday to Saturday",
//       color: "from-orange-500 to-red-500",
//       link: "#",
//       image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&w=200&h=150&fit=crop"
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
//         program: '',
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

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.8
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section ref={ref} className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-purple-900 overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />

//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, 30, 0],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             y: [0, -40, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
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
//             className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-6"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <MessageCircle className="w-5 h-5 text-yellow-400" />
//             <span className="text-yellow-400 font-semibold">Free Consultation</span>
//           </motion.div>

//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             Start Your{' '}
//             <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
//               German Journey
//             </span>
//             {' '}Today
//           </motion.h2>
          
//           <motion.p
//             className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Get personalized guidance from Germany education experts. Book your free profile assessment and discover your path to German universities.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             <motion.h3
//               className="text-3xl font-bold text-white mb-8"
//               variants={itemVariants}
//             >
//               Get in Touch
//             </motion.h3>

//             {/* Contact Cards */}
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((contact, index) => (
//                 <motion.a
//                   key={index}
//                   href={contact.link}
//                   variants={itemVariants}
//                   className="block group"
//                 >
//                   {/* Background Image for Contact Card */}
//                   <div 
//                     className="absolute inset-0 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
//                     style={{
//                       backgroundImage: `url('${contact.image}')`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center'
//                     }}
//                   />

//                   <motion.div
//                     className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
//                     whileHover={{ 
//                       y: -5,
//                       scale: 1.02
//                     }}
//                   >
//                     <div className="flex items-center gap-4">
//                       <motion.div
//                         className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white relative z-10`}
//                         whileHover={{ 
//                           scale: 1.1,
//                           rotate: 360
//                         }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <contact.icon className="w-6 h-6" />
//                       </motion.div>
                      
//                       <div className="flex-1 relative z-10">
//                         <h4 className="text-lg font-semibold text-white mb-1">
//                           {contact.title}
//                         </h4>
//                         <p className="text-cyan-400 font-medium mb-1">
//                           {contact.info}
//                         </p>
//                         <p className="text-gray-400 text-sm">
//                           {contact.description}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Quick Action Cards */}
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//               variants={itemVariants}
//             >
//               <motion.button
//                 className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group relative"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="flex items-center justify-center gap-2 relative z-10">
//                   <Phone className="w-5 h-5" />
//                   Call Now
//                 </span>
//               </motion.button>

//               <motion.button
//                 className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="flex items-center justify-center gap-2 relative z-10">
//                   <Calendar className="w-5 h-5" />
//                   Book Meeting
//                 </span>
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             {/* Form Background Image */}
//             <div 
//               className="absolute inset-0 rounded-3xl opacity-5"
//               style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&w=600&h=400&fit=crop')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             />

//             <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
//               {isSubmitted ? (
//                 <motion.div
//                   className="text-center py-12"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <motion.div
//                     className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
//                     animate={{ 
//                       scale: [1, 1.1, 1],
//                       rotate: [0, 10, 0]
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <CheckCircle className="w-10 h-10 text-white" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-white mb-4">
//                     Thank You!
//                   </h3>
//                   <p className="text-gray-300 mb-6">
//                     We've received your message and will contact you within 2 hours.
//                   </p>
//                   <motion.div
//                     className="w-full bg-gray-700 rounded-full h-2"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 5, ease: "linear" }}
//                   >
//                     <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" />
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <>
//                   <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
//                     Free Profile Assessment
//                   </h3>
                  
//                   <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5, delay: 0.5 }}
//                       >
//                         <label className="block text-gray-300 text-sm font-medium mb-2">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
//                           placeholder="Enter your name"
//                         />
//                       </motion.div>

//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5, delay: 0.6 }}
//                       >
//                         <label className="block text-gray-300 text-sm font-medium mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
//                           placeholder="Enter your email"
//                         />
//                       </motion.div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5, delay: 0.7 }}
//                       >
//                         <label className="block text-gray-300 text-sm font-medium mb-2">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
//                           placeholder="+91 98765 43210"
//                         />
//                       </motion.div>

//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                         transition={{ duration: 0.5, delay: 0.8 }}
//                       >
//                         <label className="block text-gray-300 text-sm font-medium mb-2">
//                           Program Interest
//                         </label>
//                         <select
//                           name="program"
//                           value={formData.program}
//                           onChange={handleChange}
//                           className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300"
//                         >
//                           <option value="">Select program</option>
//                           {programs.map((program, index) => (
//                             <option key={index} value={program}>
//                               {program}
//                             </option>
//                           ))}
//                         </select>
//                       </motion.div>
//                     </div>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                       transition={{ duration: 0.5, delay: 0.9 }}
//                     >
//                       <label className="block text-gray-300 text-sm font-medium mb-2">
//                         Your Message
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows="4"
//                         className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-700 transition-all duration-300 resize-none"
//                         placeholder="Tell us about your academic background and goals..."
//                       />
//                     </motion.div>

//                     <motion.button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative"
//                       whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                       whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                       transition={{ duration: 0.5, delay: 1 }}
//                     >
//                       {isSubmitting ? (
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         >
//                           <Sparkles className="w-6 h-6 mx-auto" />
//                         </motion.div>
//                       ) : (
//                         <span className="flex items-center justify-center gap-3 relative z-10">
//                           <Send className="w-5 h-5" />
//                           Send Message & Get Free Consultation
//                         </span>
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