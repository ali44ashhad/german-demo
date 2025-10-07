import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const Coaching = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const partnerInstitutes = [
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
  ];

  const benefits = [
    "Exclusive discounts for Profiberater students",
    "Proven track record of success",
    "Experienced certified trainers", 
    "Flexible batch timings",
    "Personalized attention",
    "Regular progress tracking"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
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
            <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Coaching</span> & Training
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are your one-stop source for all your training needs. Access our network of premium training partners with exclusive discounts.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Premium Training Partners</h2>
              <div className="space-y-4 text-gray-300 mb-8">
                <p className="leading-relaxed">
                  While we do not provide training directly, we have partnerships with well-established professional institutes that have a strong track record of successfully training students.
                </p>
                <p className="leading-relaxed">
                  These institutes are known for guiding learners effectively to achieve higher scores, which in turn enhances their profiles and supports their admission process.
                </p>
                <p className="leading-relaxed font-semibold text-yellow-400">
                  By applying for admission through us, you may also become eligible for exclusive discounts.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-6 border border-yellow-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                  Access Requirements
                </h3>
                <p className="text-gray-300">
                  Access to our partner program is available only after you register with us. Once registered, you will be able to view and connect with our training partners directly through your personal profile.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
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
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Training Partners</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerInstitutes.map((institute, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{institute.name}</h3>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      {institute.discount} OFF
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {institute.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        {course}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>{institute.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span>{institute.students}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            Ready to Access Premium Training?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            Register with us to unlock exclusive discounts and connect with our premium training partners.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Coaching;