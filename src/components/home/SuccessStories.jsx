// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: 'Aman Verma',
//     meta: 'M.Sc. Computational Science — TU Munich',
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     text: '“Profiberater guided me through my German university application and visa process with clarity and care — my visa was approved faster than I expected. Deeply grateful!”',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Sakshi Gupta',
//     meta: 'B.Sc → M.Sc. — University of Freiburg',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     text: '“Their APS and language support was extremely professional — I found the right university match and received help securing a scholarship.”',
//     rating: 5
//   },
//   {
//     id: 3,
//     name: 'Rohit Singh',
//     meta: 'MS Applicant — RWTH Aachen (accepted)',
//     avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
//     text: '“After multiple Germany visa refusals, Profiberater reworked my profile and strategy. They kept expectations realistic and finally helped me secure approval.”',
//     rating: 5
//   },
//   {
//     id: 4,
//     name: 'Neha Joshi',
//     meta: 'Preparing for Studienkolleg / Language Courses',
//     avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
//     text: '“Transparent fees, consistent updates, and a dedicated counsellor made the entire process smooth. Highly recommended for anyone applying to Germany.”',
//     rating: 5
//   },
//   {
//     id: 5,
//     name: 'Ankit Sharma',
//     meta: 'MBA — Frankfurt School of Finance & Management',
//     avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
//     text: '“The team helped refine my SOP and CV, making my MBA application much stronger. Their feedback sessions were professional and practical.”',
//     rating: 5
//   },
//   {
//     id: 6,
//     name: 'Priya Menon',
//     meta: 'Master’s in Environmental Engineering — TU Delft',
//     avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//     text: '“Their expertise in European admissions really stood out. I got admits from multiple universities and their visa guidance was spot on.”',
//     rating: 5
//   },
//   {
//     id: 7,
//     name: 'Vikram Desai',
//     meta: 'B.Sc Data Science — University of Hamburg',
//     avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
//     text: '“Being a first-time international applicant, I appreciated their clarity and responsiveness. They handled every step seamlessly.”',
//     rating: 5
//   },
//   {
//     id: 8,
//     name: 'Ritika Bansal',
//     meta: 'Ph.D. in Biotechnology — University of Bonn',
//     avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
//     text: '“They helped align my research interests with suitable supervisors and crafted a strong proposal. Couldn’t have done it alone!”',
//     rating: 5
//   },
//   {
//     id: 9,
//     name: 'Aditya Narang',
//     meta: 'M.Sc. Mechanical Engineering — TU Darmstadt',
//     avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
//     text: '“Every step was transparent — from application shortlist to visa mock interview. I’d absolutely recommend Profiberater.”',
//     rating: 5
//   }
// ];


// const SuccessStories = () => {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [perPage, setPerPage] = useState(3); // default desktop
//   const containerRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const updatePerPage = () => {
//       // desktop >= 1024 => 3, tablet >= 768 => 2, else 1
//       const w = window.innerWidth;
//       if (w >= 1024) setPerPage(3);
//       else if (w >= 768) setPerPage(2);
//       else setPerPage(1);
//     };

//     updatePerPage();
//     window.addEventListener('resize', updatePerPage);
//     return () => window.removeEventListener('resize', updatePerPage);
//   }, []);

//   useEffect(() => {
//     startAutoPlay();
//     return stopAutoPlay;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index, paused, perPage]);

//   const startAutoPlay = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       if (!paused) next();
//     }, 4500);
//   };

//   const stopAutoPlay = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   const maxIndex = Math.max(0, TESTIMONIALS.length - perPage);

//   const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
//   const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
//   const goTo = (i) => setIndex(Math.min(maxIndex, Math.max(0, i)));

//   // translate percent: each step moves by (100 / perPage)
//   const translatePercent = -(index * (100 / perPage));

//   return (
//     <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
//       <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16">
//         <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-6">
//             <div>
//               <span className="block text-green-600 text-sm font-semibold tracking-widest md:text-base">TESTIMONIALS</span>
//               <h2 className="text-slate-900 font-extrabold text-2xl md:text-4xl leading-[1.12] max-w-3xl">
//                 What our students say about studying in Germany with Profiberater
//               </h2>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="hidden md:flex gap-3 items-center">
//                 <button
//                   onClick={prev}
//                   aria-label="Previous testimonial"
//                   className="w-11 h-11 inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
//                 >
//                   <ArrowLeft className="w-4 h-4 text-slate-900" />
//                 </button>

//                 <button
//                   onClick={next}
//                   aria-label="Next testimonial"
//                   className="w-11 h-11 inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
//                 >
//                   <ArrowRight className="w-4 h-4 text-slate-900" />
//                 </button>
//               </div>

//               <button
//                 onClick={() => setPaused((p) => !p)}
//                 aria-pressed={paused}
//                 className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow border border-gray-100 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-green-300/40"
//               >
//                 {paused ? 'Resume' : 'Pause'}
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="overflow-hidden">
//               <div
//                 ref={containerRef}
//                 className="flex transition-transform duration-700 ease-in-out"
//                 aria-live="polite"
//                 aria-roledescription="carousel"
//                 aria-label="Student testimonials carousel"
//                 style={{ transform: `translateX(${translatePercent}%)` }}
//               >
//                 {TESTIMONIALS.map((t) => (
//                   <div
//                     key={t.id}
//                     className="p-4 md:p-6 flex-shrink-0"
//                     style={{ width: `${100 / perPage}%` }}
//                   >
//                     <article
//                       role="group"
//                       tabIndex={0}
//                       aria-label={`Testimonial by ${t.name}`}
//                       className="h-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-green-300/40"
//                     >
//                       <div>
//                         <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed">{t.text}</blockquote>
//                       </div>

//                       <div className="mt-5 flex items-center gap-4">
//                         <img alt={`${t.name} avatar`} className="w-12 h-12 rounded-full object-cover" src={t.avatar} />
//                         <div className="flex-1">
//                           <div className="text-sm font-bold text-slate-900">{t.name}</div>
//                           <div className="text-xs text-slate-500 opacity-90">{t.meta}</div>
//                           <div className="flex items-center mt-1" aria-hidden="true">
//                             {Array.from({ length: t.rating }).map((_, i) => (
//                               <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#FFCA28" stroke="#FFCA28" className="mr-0.5" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M10 1.5l2.6 5.3 5.8.5-4.2 3.7 1.3 5.6L10 14.9 4.5 17.6l1.3-5.6L1.6 8.4l5.8-.5L10 1.5z"></path>
//                               </svg>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div aria-live="polite" className="sr-only" role="status">Showing {Math.min(perPage, TESTIMONIALS.length)} of {TESTIMONIALS.length}</div>

//             <div className="flex justify-center gap-2 mt-6">
//               {TESTIMONIALS.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => goTo(i)}
//                   aria-label={`Go to testimonial ${i + 1}`}
//                   className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300/40 ${i === index ? 'bg-gradient-to-r from-green-600 to-sky-600' : 'bg-gray-300'}`}
//                 />
//               ))}
//             </div>

//             <div className="flex md:hidden justify-center gap-4 mt-4">
//               <button onClick={prev} aria-label="Previous testimonial" className="w-10 h-10 inline-flex items-center justify-center bg-white border rounded focus:outline-none focus:ring-4 focus:ring-green-300/40">
//                 <ArrowLeft className="w-4 h-4 text-slate-900" />
//               </button>
//               <button onClick={next} aria-label="Next testimonial" className="w-10 h-10 inline-flex items-center justify-center bg-white border rounded focus:outline-none focus:ring-4 focus:ring-green-300/40">
//                 <ArrowRight className="w-4 h-4 text-slate-900" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <style>{`
//           .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }
//           @media (prefers-reduced-motion: reduce) {
//             .transition-transform { transition: none !important; }
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// };

// export default SuccessStories;

// src/components/home/SuccessStories.jsx
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FALLBACK_TESTIMONIALS = [
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

const SuccessStories = () => {
  const { t } = useTranslation('common');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perPage, setPerPage] = useState(3); // default desktop
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Load testimonials from i18n safely
  const raw = t('testimonials.list', { returnObjects: true });
  let TESTIMONIALS = FALLBACK_TESTIMONIALS;

  if (raw) {
    if (Array.isArray(raw) && raw.length) {
      TESTIMONIALS = raw;
    } else if (typeof raw === 'object') {
      // convert keyed object -> array (preserve numeric order where possible)
      const keys = Object.keys(raw).sort((a, b) => {
        const na = Number(a), nb = Number(b);
        if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
        return String(a).localeCompare(String(b));
      });
      TESTIMONIALS = keys.map((k) => raw[k]);
    }
  }

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

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, perPage, TESTIMONIALS.length]);

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!paused) next();
    }, 4500);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const maxIndex = Math.max(0, TESTIMONIALS.length - perPage);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goTo = (i) => setIndex(Math.min(maxIndex, Math.max(0, i)));

  const translatePercent = -(index * (100 / perPage));

  return (
    <div className="relative isolate w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-green-50 py-12 md:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-6">
            <div>
              <span className="block text-green-600 text-sm font-semibold tracking-widest md:text-base">
                {t('testimonials.label') || 'TESTIMONIALS'}
              </span>
              <h2 className="text-slate-900 font-extrabold text-2xl md:text-4xl leading-[1.12] max-w-3xl">
                {t('testimonials.heading') || 'What our students say about studying in Germany with Profiberater'}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex gap-3 items-center">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-900" />
                </button>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 inline-flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded focus:outline-none focus:ring-4 focus:ring-green-300/40"
                >
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </button>
              </div>

              <button
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow border border-gray-100 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-green-300/40"
              >
                {paused ? (t('testimonials.resume') || 'Resume') : (t('testimonials.pause') || 'Pause')}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                ref={containerRef}
                className="flex transition-transform duration-700 ease-in-out"
                aria-live="polite"
                aria-roledescription="carousel"
                aria-label="Student testimonials carousel"
                style={{ transform: `translateX(${translatePercent}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id ?? `${t.name}-${Math.random()}`}
                    className="p-4 md:p-6 flex-shrink-0"
                    style={{ width: `${100 / perPage}%` }}
                  >
                    <article
                      role="group"
                      tabIndex={0}
                      aria-label={`Testimonial by ${t.name}`}
                      className="h-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-green-300/40"
                    >
                      <div>
                        <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed">{t.text}</blockquote>
                      </div>

                      <div className="mt-5 flex items-center gap-4">
                        <img alt={`${t.name} avatar`} className="w-12 h-12 rounded-full object-cover" src={t.avatar} />
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-900">{t.name}</div>
                          <div className="text-xs text-slate-500 opacity-90">{t.meta}</div>
                          <div className="flex items-center mt-1" aria-hidden="true">
                            {Array.from({ length: Number(t.rating) || 0 }).map((_, i) => (
                              <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#FFCA28" stroke="#FFCA28" className="mr-0.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.5l2.6 5.3 5.8.5-4.2 3.7 1.3 5.6L10 14.9 4.5 17.6l1.3-5.6L1.6 8.4l5.8-.5L10 1.5z"></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div aria-live="polite" className="sr-only" role="status">Showing {Math.min(perPage, TESTIMONIALS.length)} of {TESTIMONIALS.length}</div>

            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300/40 ${i === index ? 'bg-gradient-to-r from-green-600 to-sky-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <div className="flex md:hidden justify-center gap-4 mt-4">
              <button onClick={prev} aria-label="Previous testimonial" className="w-10 h-10 inline-flex items-center justify-center bg-white border rounded focus:outline-none focus:ring-4 focus:ring-green-300/40">
                <ArrowLeft className="w-4 h-4 text-slate-900" />
              </button>
              <button onClick={next} aria-label="Next testimonial" className="w-10 h-10 inline-flex items-center justify-center bg-white border rounded focus:outline-none focus:ring-4 focus:ring-green-300/40">
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </div>
        </div>

        <style>{`
          .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }
          @media (prefers-reduced-motion: reduce) {
            .transition-transform { transition: none !important; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default SuccessStories;
