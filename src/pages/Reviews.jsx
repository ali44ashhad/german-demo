import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  Calendar,
  Award,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      program: "M.Sc. Computer Science",
      university: "Technical University of Munich",
      destination: "Munich, Germany", 
      rating: 5,
      review: "Profiberater's strategic approach helped me secure admission to my dream university. Their guidance on German-style SOPs and TestAS preparation was invaluable. The ROI-focused counseling showed me exactly how this degree would benefit my career.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      achievements: ["TU9 University", "€15,000 Scholarship", "Research Assistant"]
    },
    {
      id: 2,
      name: "Rahul Verma", 
      program: "B.Sc. Mechanical Engineering",
      university: "RWTH Aachen University",
      destination: "Aachen, Germany",
      rating: 5,
      review: "As a bachelor's student, I was unsure about the German education system. Profiberater not only got me into RWTH Aachen but also helped me understand the cultural aspects. Their end-to-end support made the journey smooth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      achievements: ["Top 1% University", "Internship at Bosch", "German B2 Level"]
    },
    {
      id: 3,
      name: "Anjali Patel",
      program: "M.A. Data Science", 
      university: "University of Stuttgart",
      destination: "Stuttgart, Germany",
      rating: 5,
      review: "The Profiberater team's expertise in STEM admissions was exceptional. They helped me showcase my technical projects in a way that German universities appreciate. Now I'm studying at one of Germany's top tech universities!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      achievements: ["STEM Program", "DAAD Scholarship", "Industry Partnerships"]
    },
    {
      id: 4,
      name: "Arun Kumar",
      program: "M.Sc. Automotive Engineering",
      university: "TU Berlin", 
      destination: "Berlin, Germany",
      rating: 5,
      review: "From blocked account setup to visa interview preparation, Profiberater handled everything professionally. Their network with German universities gave me an edge in the admission process.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      achievements: ["Auto Industry Hub", "Mercedes Internship", "Government Funded"]
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "500+", label: "Happy Students" },
    { number: "99%", label: "Recommend Us" },
    { number: "50+", label: "Universities" }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050853678-2b2f6a6ed51d?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
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
            Student <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Reviews</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from students who successfully made it to their dream German universities with our guidance.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reviews Carousel */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative bg-gray-800/50 rounded-3xl border border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Review Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Student Image */}
              <motion.div
                className="relative overflow-hidden"
                key={`image-${activeReview}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                <img
                  src={reviews[activeReview].image}
                  alt={reviews[activeReview].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Achievements */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {reviews[activeReview].achievements.map((achievement, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Review Details */}
              <motion.div
                className="p-8 lg:p-12 flex flex-col justify-center"
                key={`content-${activeReview}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="text-6xl text-yellow-400 mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  "
                </motion.div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(reviews[activeReview].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <motion.p
                  className="text-lg text-gray-300 mb-8 leading-relaxed italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {reviews[activeReview].review}
                </motion.p>

                {/* Student Details */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {reviews[activeReview].name}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      {reviews[activeReview].program}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>{reviews[activeReview].university}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span>{reviews[activeReview].destination}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Review Indicators */}
          <motion.div
            className="flex justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeReview 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
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
            Join Our Success Stories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            Be the next success story from Profiberater.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start My Success Journey
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;