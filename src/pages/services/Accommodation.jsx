// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   Home, 
//   MapPin, 
//   Users, 
//   Shield,
//   CheckCircle,
//   ArrowRight,
//   Star,
//   Wifi
// } from 'lucide-react';

// const Accommodation = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const accommodationTypes = [
//     {
//       type: "Student Hostels",
//       price: "€250-€400/month",
//       features: ["Fully Furnished", "WiFi Included", "Laundry Facilities", "Common Kitchen"],
//       bestFor: "First-year students",
//       image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
//     },
//     {
//       type: "Shared Apartments",
//       price: "€350-€550/month", 
//       features: ["Private Room", "Shared Kitchen", "Living Area", "Bills Included"],
//       bestFor: "Budget-conscious students",
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
//     },
//     {
//       type: "Studio Apartments",
//       price: "€450-€700/month",
//       features: ["Private Kitchen", "Private Bathroom", "Self-Contained", "All Utilities"],
//       bestFor: "Students preferring privacy",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
//     },
//     {
//       type: "Homestay",
//       price: "€300-€500/month",
//       features: ["Local Family", "Meals Included", "Cultural Immersion", "Support System"],
//       bestFor: "International students",
//       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
//     }
//   ];

//   const cities = [
//     {
//       name: "Berlin",
//       averageRent: "€400-€600",
//       popularity: "High",
//       studentAreas: ["Kreuzberg", "Neukölln", "Prenzlauer Berg"]
//     },
//     {
//       name: "Munich",
//       averageRent: "€500-€750", 
//       popularity: "Very High",
//       studentAreas: ["Schwabing", "Maxvorstadt", "Giesing"]
//     },
//     {
//       name: "Hamburg",
//       averageRent: "€350-€550",
//       popularity: "High", 
//       studentAreas: ["Sternschanze", "Eimsbüttel", "Altona"]
//     },
//     {
//       name: "Cologne",
//       averageRent: "€300-€500",
//       popularity: "Medium",
//       studentAreas: ["Ehrenfeld", "Sülz", "Lindenthal"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
//       {/* Hero Section */}
//       <section className="relative py-30 overflow-hidden">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-90"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />

//           {/* Bluish overlay preserved */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
//         </div>
        
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Student <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">Accommodation</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Find your perfect home in Germany with our comprehensive accommodation services. From student hostels to private apartments, we've got you covered.
//           </motion.p>
//         </div>
//       </section>

//       {/* Accommodation Types */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-12 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             Types of Accommodation
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {accommodationTypes.map((accommodation, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={accommodation.image} 
//                     alt={accommodation.type}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-2xl font-bold text-gray-900">{accommodation.type}</h3>
//                     <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
//                       {accommodation.price}
//                     </div>
//                   </div>

//                   <p className="text-sky-600 text-sm mb-4 flex items-center gap-1">
//                     <Users className="w-4 h-4" />
//                     Best for: {accommodation.bestFor}
//                   </p>

//                   <div className="space-y-2 mb-4">
//                     {accommodation.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center gap-2 text-gray-700 text-sm">
//                         <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>

//                   <motion.button
//                     className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     View Available Options
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cities Section */}
//       <section className="py-20 bg-green-50/30">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-12 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             Popular Student Cities
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {cities.map((city, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <MapPin className="w-6 h-6 text-white" />
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                
//                 <div className="space-y-2 text-sm text-gray-700 mb-4">
//                   <div className="flex justify-between">
//                     <span>Average Rent:</span>
//                     <span className="text-sky-600">{city.averageRent}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Popularity:</span>
//                     <span className="text-green-600">{city.popularity}</span>
//                   </div>
//                 </div>

//                 <div className="text-left">
//                   <p className="text-gray-600 text-sm mb-2">Student Areas:</p>
//                   {city.studentAreas.map((area, areaIndex) => (
//                     <div key={areaIndex} className="flex items-center gap-2 text-gray-700 text-xs mb-1">
//                       <div className="w-1 h-1 bg-green-600 rounded-full"></div>
//                       {area}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             className="bg-white rounded-3xl p-12 border border-green-100 shadow-sm"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Accommodation in Germany?</h2>
//             <p className="text-xl text-gray-700 mb-8">
//               Let us help you find the perfect home for your study journey.
//             </p>
//             <motion.button
//               className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Find My Accommodation <ArrowRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Accommodation;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  MapPin,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Wifi
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuthRedirect } from "../../utils/useAuthRedirect";

// ===== FALLBACK (matches your original strings) =====
const FALLBACK = {
  hero: {
    title: "Student Accommodation",
    subtitle:
      "Find your perfect home in Germany with our comprehensive accommodation services. From student hostels to private apartments, we've got you covered."
  },
  accommodationTypes: [
    {
      type: "Student Hostels",
      price: "€250-€400/month",
      features: ["Fully Furnished", "WiFi Included", "Laundry Facilities", "Common Kitchen"],
      bestFor: "First-year students",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      type: "Shared Apartments",
      price: "€350-€550/month",
      features: ["Private Room", "Shared Kitchen", "Living Area", "Bills Included"],
      bestFor: "Budget-conscious students",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      type: "Studio Apartments",
      price: "€450-€700/month",
      features: ["Private Kitchen", "Private Bathroom", "Self-Contained", "All Utilities"],
      bestFor: "Students preferring privacy",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      type: "Homestay",
      price: "€300-€500/month",
      features: ["Local Family", "Meals Included", "Cultural Immersion", "Support System"],
      bestFor: "International students",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    }
  ],
  cities: [
    {
      name: "Berlin",
      averageRent: "€400-€600",
      popularity: "High",
      studentAreas: ["Kreuzberg", "Neukölln", "Prenzlauer Berg"]
    },
    {
      name: "Munich",
      averageRent: "€500-€750",
      popularity: "Very High",
      studentAreas: ["Schwabing", "Maxvorstadt", "Giesing"]
    },
    {
      name: "Hamburg",
      averageRent: "€350-€550",
      popularity: "High",
      studentAreas: ["Sternschanze", "Eimsbüttel", "Altona"]
    },
    {
      name: "Cologne",
      averageRent: "€300-€500",
      popularity: "Medium",
      studentAreas: ["Ehrenfeld", "Sülz", "Lindenthal"]
    }
  ],
  cta: {
    heading: "Need Accommodation in Germany?",
    sub: "Let us help you find the perfect home for your study journey.",
    button: "Find My Accommodation"
  }
};

// small helper: normalize i18n values (accept string, array, object)
const normalizeArray = (val, fallback) => {
  if (Array.isArray(val)) return val;
  if (!val) return fallback;
  if (typeof val === "object") {
    const keys = Object.keys(val).sort();
    if (keys.length && keys.every((k) => /^\d+$/.test(k))) {
      return keys.map((k) => val[k]);
    }
    return [val];
  }
  return fallback;
};

const ICONS = { Home, MapPin, Users, Shield, Wifi };

const Accommodation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation("common");
  const { requireAuth } = useAuthRedirect();

  // read accommodation block from i18n
  const raw = t("accommodation", { returnObjects: true, defaultValue: {} });

  const hero = raw.hero && Object.keys(raw.hero).length ? raw.hero : FALLBACK.hero;
  const accommodationTypes = normalizeArray(raw.accommodationTypes, FALLBACK.accommodationTypes);
  const cities = normalizeArray(raw.cities, FALLBACK.cities);
  const cta = raw.cta && Object.keys(raw.cta).length ? raw.cta : FALLBACK.cta;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {hero.title.split(" ")[0]} <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">{hero.title.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Accommodation Types */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            {t("accommodation.typesTitle", { defaultValue: "Types of Accommodation" })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationTypes.map((accommodation, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.type}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{accommodation.type}</h3>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                      {accommodation.price}
                    </div>
                  </div>

                  <p className="text-sky-600 text-sm mb-4 flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {t("accommodation.bestForLabel", { defaultValue: "Best for:" })} {accommodation.bestFor}
                  </p>

                  <div className="space-y-2 mb-4">
                    {normalizeArray(accommodation.features, []).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      if (!requireAuth()) {
                        e.preventDefault();
                        return;
                      }
                    }}
                  >
                    {t("accommodation.viewOptions", { defaultValue: "View Available Options" })}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-green-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            {t("accommodation.citiesTitle", { defaultValue: "Popular Student Cities" })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>

                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>{t("accommodation.averageRentLabel", { defaultValue: "Average Rent:" })}</span>
                    <span className="text-sky-600">{city.averageRent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("accommodation.popularityLabel", { defaultValue: "Popularity:" })}</span>
                    <span className="text-green-600">{city.popularity}</span>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-gray-600 text-sm mb-2">{t("accommodation.studentAreasLabel", { defaultValue: "Student Areas:" })}</p>
                  {normalizeArray(city.studentAreas, []).map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-center gap-2 text-gray-700 text-xs mb-1">
                      <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                      {area}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-3xl p-12 border border-green-100 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{cta.heading}</h2>
            <p className="text-xl text-gray-700 mb-8">
              {cta.sub}
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (!requireAuth()) {
                  e.preventDefault();
                  return;
                }
              }}
            >
              {cta.button} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
