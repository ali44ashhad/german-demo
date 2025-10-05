import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/hero.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full object-cover opacity-60"
          poster={heroVideo}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-gray-900/75 to-black/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 border-2 border-blue-400/30 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 15, 0],
            rotateY: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-32 sm:w-48 h-32 sm:h-48 border-2 border-yellow-400/20 rounded-full"
          animate={{
            y: [0, 40, 0],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-3 sm:px-4 lg:px-5 text-center">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Study in Germany
          </span>
          <br />
          <motion.span
            className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your Smartest <span className="text-yellow-400">Investment</span>
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6 max-w-full sm:max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Eduberator is your exclusive expert partner for admission to Germany's world-class universities.
          We specialize in guiding students to Bachelor's, Master's, and STEM programs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 w-full sm:w-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg text-lg shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Book Your Free Consultation
          </motion.button>

          <motion.button
            className="px-4 sm:px-5 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📚 Explore Programs
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-full sm:max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[
            { number: "99%", text: "Admission Success" },
            { number: "500+", text: "Students Guided" },
            { number: "50+", text: "German Universities" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
              <div className="text-gray-200 text-sm sm:text-base">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
