import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Target, 
  Globe, 
  Heart,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const stats = [
    { number: "500+", label: "Students Guided" },
    { number: "99%", label: "Admission Success" },
    { number: "50+", label: "German Universities" },
    { number: "10+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To guide and support you in pursuing your passion through personalized counselling and our deep experience in the education industry.",
      color: "from-green-600 to-sky-600"
    },
    {
      icon: TrendingUp,
      title: "Our Vision", 
      description: "Empowering every student to pursue their passions with confidence, equipping them to realize their full potential and soar toward success.",
      color: "from-green-600 to-sky-600"
    },
    {
      icon: Heart,
      title: "Our Approach",
      description: "We don't just consult — we mentor, guide, and walk alongside you, navigating through every step of your educational journey abroad.",
      color: "from-green-600 to-sky-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
     
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="bg-gradient-to-r from-green-300 to-sky-300 bg-clip-text text-transparent">Profiberater</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a team of seasoned professionals, originally from India and now living and working across Europe for over a decade. This unique blend of cultural understanding and international experience allows us to support Indian students like no one else can.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Having started our own journeys as international students 10–15 years ago, we have first-hand knowledge of the challenges, decisions, and transitions involved. Today, we are established professionals across diverse industries and domains in Europe.
                </p>
                <p className="leading-relaxed">
                  Our background enables us to bridge the gap between aspiring Indian students' aspirations and European academic and career systems with clarity and empathy.
                </p>
                <p className="leading-relaxed">
                  Over the past two years, we have offered personalized counselling to a limited group of students—free of charge—every semester, gaining valuable insights and refining our approach. With this experience and confidence, we are now expanding our services in a more structured and professional way.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values & Philosophy</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 shadow-inner`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            Let us help you turn your German education dream into reality.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default About;
