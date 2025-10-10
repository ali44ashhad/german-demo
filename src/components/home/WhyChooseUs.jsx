import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, BookOpen, Globe, Banknote, LifeBuoy, MessageCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const features = [
    {
      icon: Users,
      title: 'Expert Counsellors with Industry Insight',
      description:
        'Our team consists of seasoned professionals with extensive experience in both academics and industry, providing you with well-rounded and practical guidance.',
      color: 'from-green-600 to-sky-600'
    },
    {
      icon: CheckCircle,
      title: 'Personalized Attention',
      description:
        "We work with a limited number of students per semester, ensuring each applicant receives dedicated time and support for a strong application strategy.",
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: BookOpen,
      title: 'Support Across All Academic Levels',
      description:
        "Whether you're applying for an Undergraduate, Master's, MBA, or Ph.D., we offer tailored assistance that meets the unique requirements of each program level.",
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Wide Range of Study Fields',
      description:
        'Our expertise spans diverse disciplines, helping students from various academic backgrounds in finding the best-fit programs and universities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Banknote,
      title: 'Opportunities for Tuition-Free Education',
      description:
        'We help identify programs and institutions that offer tuition-free or low-cost education, increasing your chances of an affordable, high-quality education in Europe.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: LifeBuoy,
      title: 'End-to-End Support',
      description:
        "From application to onboarding and settling in, we stand by your side throughout your educational journey.",
      color: 'from-indigo-500 to-blue-500'
    }
  ];

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section ref={ref} className="relative  overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-20 lg:py-28">
      <div className="relative mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            Why Choose <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">Eduberator</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            All our services are conducted entirely online — no office visits required. We stay in close communication with you via Email, TEAMS/Zoom, and WhatsApp to guide you at every step.
          </motion.p>
        </div>
<div className='max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto text-center mb-12'>
        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants} className="relative group">
              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${f.color} p-3 mb-4 flex items-center justify-center shadow-inner`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Row: Specialization in European Admissions + Communication */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Specialization in European Admissions</h4>
                <p className="text-gray-600">We focus on top universities across Europe, providing insights into regional requirements, culture, and opportunities to help you pick the right destination.</p>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Fully Online & Always Connected</h4>
                <p className="text-gray-600">All services are delivered online. We'll be in touch via Email, TEAMS/Zoom, and WhatsApp for document reviews, mock interviews, application tracking, and onboarding help.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900">Ready to build your roadmap?</h3>
              <p className="text-gray-600">Book a free consultation and let our experts craft a personalized plan for your European education journey.</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-lg transition-all">Start My Journey 🚀</button>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
