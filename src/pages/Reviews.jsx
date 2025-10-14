import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perPage, setPerPage] = useState(3);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const TESTIMONIALS = [
    {
      id: 1,
      name: 'Aman Verma',
      meta: 'M.Sc. Computational Science — TU Munich',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: '“Profiberater guided me through my German university application and visa process with clarity and care — my visa was approved faster than I expected. Deeply grateful!”',
      rating: 5
    },
    {
      id: 2,
      name: 'Sakshi Gupta',
      meta: 'B.Sc → M.Sc. — University of Freiburg',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: '“Their APS and language support was extremely professional — I found the right university match and received help securing a scholarship.”',
      rating: 5
    },
    {
      id: 3,
      name: 'Rohit Singh',
      meta: 'MS Applicant — RWTH Aachen (accepted)',
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
      text: '“After multiple Germany visa refusals, Profiberater reworked my profile and strategy. They kept expectations realistic and finally helped me secure approval.”',
      rating: 5
    },
    {
      id: 4,
      name: 'Neha Joshi',
      meta: 'Preparing for Studienkolleg / Language Courses',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      text: '“Transparent fees, consistent updates, and a dedicated counsellor made the entire process smooth. Highly recommended for anyone applying to Germany.”',
      rating: 5
    },
    {
      id: 5,
      name: 'Ankit Sharma',
      meta: 'MBA — Frankfurt School of Finance & Management',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
      text: '“The team helped refine my SOP and CV, making my MBA application much stronger. Their feedback sessions were professional and practical.”',
      rating: 5
    },
    {
      id: 6,
      name: 'Priya Menon',
      meta: 'Master’s in Environmental Engineering — TU Delft',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: '“Their expertise in European admissions really stood out. I got admits from multiple universities and their visa guidance was spot on.”',
      rating: 5
    },
    {
      id: 7,
      name: 'Vikram Desai',
      meta: 'B.Sc Data Science — University of Hamburg',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
      text: '“Being a first-time international applicant, I appreciated their clarity and responsiveness. They handled every step seamlessly.”',
      rating: 5
    },
    {
      id: 8,
      name: 'Ritika Bansal',
      meta: 'Ph.D. in Biotechnology — University of Bonn',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      text: '“They helped align my research interests with suitable supervisors and crafted a strong proposal. Couldn’t have done it alone!”',
      rating: 5
    },
    {
      id: 9,
      name: 'Aditya Narang',
      meta: 'M.Sc. Mechanical Engineering — TU Darmstadt',
      avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
      text: '“Every step was transparent — from application shortlist to visa mock interview. I’d absolutely recommend Profiberater.”',
      rating: 5
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "500+", label: "Happy Students" },
    { number: "99%", label: "Recommend Us" },
    { number: "50+", label: "Partner Universities" }
  ];

  // Responsive cards per view
  useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerPage(3);
      else if (w >= 768) setPerPage(2);
      else setPerPage(1);
    };
    updatePerPage();
    window.addEventListener('resize', updatePerPage);
    return () => window.removeEventListener('resize', updatePerPage);
  }, []);

  // Autoplay
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) next();
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [index, paused, perPage]);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perPage);
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goTo = (i) => setIndex(Math.min(maxIndex, Math.max(0, i)));

  const translatePercent = -(index * (100 / perPage));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050853678-2b2f6a6ed51d?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Student <span className="bg-gradient-to-r from-yellow-300 to-green-200 bg-clip-text text-transparent">Reviews</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from students who successfully made it to their dream German universities with our guidance.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-50/40" ref={ref}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">{s.number}</div>
              <div className="text-gray-700 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div
        className="relative max-w-6xl mx-auto px-4 md:px-8 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={containerRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${translatePercent}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-4 md:p-6 flex-shrink-0"
              style={{ width: `${100 / perPage}%` }}
            >
              <article className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-lg border border-gray-100 p-6 min-h-[340px]">
                <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed flex-1">
                  {t.text}
                </blockquote>
                <div className="mt-5 flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.meta}</div>
                    <div className="flex mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} width="14" height="14" fill="#FFCA28" viewBox="0 0 20 20">
                          <path d="M10 1.5l2.6 5.3 5.8.5-4.2 3.7 1.3 5.6L10 14.9 4.5 17.6l1.3-5.6L1.6 8.4l5.8-.5L10 1.5z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prev} className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 text-slate-700" />
          </button>
          <button onClick={next} className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-100">
            <ArrowRight className="w-4 h-4 text-slate-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? 'bg-gradient-to-r from-green-600 to-sky-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA Section (Fully Restored) */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-sky-50 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Join Our Success Stories
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Become part of a community of motivated students who trusted Profiberater
            to turn their academic dreams into reality. From university shortlisting
            and SOP guidance to visa and accommodation — we’ve got you covered.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start My Success Journey
          </motion.button>

          {/* Last Updated Line */}
          <p className="mt-6 text-sm text-gray-600">
            <span className="text-yellow-500 font-semibold">
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
