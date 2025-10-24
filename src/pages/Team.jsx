import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Award, 
  Briefcase,
  Mail, 
  GraduationCap,
  Linkedin
} from 'lucide-react';


const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const teamMembers = [
    {
      name: "Dr. Pavan B.",
      role: "Biomedical / Biotech / Biology Expert",
      education: "PhD in Biomedical Engineering",
      experience: "10+ years in European healthcare",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      specialization: ["Medical Research", "Biotech Admissions", "PhD Guidance"]
    },
    {
      name: "Sagar P.",
      role: "Business Development Manager",
      education: "Mechanical Engineering",
      experience: "8+ years in European industry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      specialization: ["Mechanical Engineering", "Business Programs", "Industry Connections"]
    },
    {
      name: "Vivek P.",
      role: "CEO & Founder",
      education: "Mechanical Engineering", 
      experience: "12+ years in Germany",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      specialization: ["Strategic Planning", "University Partnerships", "Career Development"]
    },
    {
      name: "Dr. Pavan Reddy",
      role: "Biomedical Specialist",
      education: "PhD in Biotechnology",
      experience: "9+ years in German research",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      specialization: ["Research Programs", "Lab Placements", "Scientific Writing"]
    },
    {
      name: "Dr. Arindam",
      role: "Academic Consultant",
      education: "Doctorate in Engineering",
      experience: "11+ years academic experience",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face", 
      specialization: ["Engineering Programs", "Technical Admissions", "Research Guidance"]
    }
  ];

  const expertiseAreas = [
    {
      field: "COEP & Automobile",
      description: "Specialized guidance for automotive engineering and COEP programs",
      icon: Briefcase
    },
    {
      field: "SAP & IT", 
      description: "Expert consultation for SAP certifications and IT programs",
      icon: Award
    },
    {
      field: "STEM Programs",
      description: "Comprehensive support for Science, Technology, Engineering, and Mathematics",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Bluish overlay (kept as requested) */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">Team</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seasoned professionals from India now living and working across Europe for over a decade. 
            We bring first-hand experience and deep industry insights to guide your German education journey.
          </motion.p>
        </div>
      </section>

 
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-50 group-hover:border-green-200 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.experience}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                    <span>{member.education}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm font-semibold">Specializations:</p>
                    {member.specialization.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
                  <button className="flex-1 bg-white/60 text-green-600 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 inline" />
                    Contact
                  </button>
                  <button className="flex-1 bg-white/60 text-sky-600 py-2 rounded-lg text-sm font-semibold hover:bg-sky-50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Linkedin className="w-4 h-4 inline" />
                    Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise Areas</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Specialized guidance across diverse academic and professional fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.field}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
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
            Ready to Work With Our Experts?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            Get personalized guidance from our team of experienced professionals.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Consultation With Our Team
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Team;
