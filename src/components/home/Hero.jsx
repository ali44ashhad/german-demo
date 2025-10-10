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
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroVideo}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/40 via-blue-500/30 to-sky-700/50 mix-blend-multiply" />
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          className="absolute top-[20%] left-[10%] w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 border-2 border-sky-200/60 rounded-xl bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 8, 0],
            rotateY: [0, 6, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 border-2 border-blue-200/50 rounded-full bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, 30, 0],
            rotateZ: [0, 180, 360],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-28 lg:py-40">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-green-300 to-sky-400 bg-clip-text text-transparent">
            Study in Germany
          </span>
          <br />
          <motion.span
            className="block text-lg sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 text-blue-100"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your Smartest <span className="text-yellow-300">Investment</span>
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mb-6 sm:mb-8 max-w-lg sm:max-w-2xl md:max-w-3xl leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Eduberator is your trusted partner for admissions to Germany's top
          universities. We handle everything online — from shortlisting to visa
          guidance and pre-departure support.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mb-10 sm:mb-14 w-full sm:w-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg text-base sm:text-lg shadow-lg hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Book Free Consultation
          </motion.button>

          <motion.button
            className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-blue-200 text-white font-semibold rounded-lg text-base sm:text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📚 Explore Programs
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-2xl"
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
              className="text-center p-4 sm:p-5 bg-white/20 rounded-xl border border-blue-100/30 backdrop-blur-sm"
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-300">
                {stat.number}
              </div>
              <div className="text-blue-100 text-xs sm:text-sm md:text-base">
                {stat.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-blue-200 rounded-full flex justify-center bg-white/20">
          <motion.div
            className="w-1 h-3 bg-blue-100 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
