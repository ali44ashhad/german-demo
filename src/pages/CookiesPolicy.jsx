// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { 
//   Cookie, 
//   Settings, 
//   Eye,
//   CheckCircle,
//   ToggleLeft,
//   ToggleRight
// } from 'lucide-react';

// const CookiesPolicy = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });
//   const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
//   const [marketingEnabled, setMarketingEnabled] = useState(false);

//   const cookieTypes = [
//     {
//       type: "Essential Cookies",
//       necessary: true,
//       description: "Required for the website to function properly",
//       examples: ["Session management", "Security features", "Load balancing"],
//       duration: "Session"
//     },
//     {
//       type: "Analytics Cookies",
//       necessary: false,
//       description: "Help us understand how visitors interact with our website",
//       examples: ["Page visits", "Time on site", "Error tracking"],
//       duration: "2 years"
//     },
//     {
//       type: "Marketing Cookies",
//       necessary: false,
//       description: "Used to track visitors across websites for advertising",
//       examples: ["Remarketing", "Interest-based ads", "Conversion tracking"],
//       duration: "1 year"
//     },
//     {
//       type: "Preference Cookies",
//       necessary: false,
//       description: "Remember your settings and preferences",
//       examples: ["Language settings", "Font size", "Region selection"],
//       duration: "1 year"
//     }
//   ];

//   const managementSteps = [
//     {
//       step: 1,
//       title: "Browser Settings",
//       description: "Manage cookies through your browser settings"
//     },
//     {
//       step: 2,
//       title: "Our Cookie Banner", 
//       description: "Use the cookie consent banner on our website"
//     },
//     {
//       step: 3,
//       title: "Opt-Out Tools",
//       description: "Use industry opt-out tools for advertising cookies"
//     },
//     {
//       step: 4,
//       title: "Contact Us",
//       description: "Email us for specific cookie-related requests"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
//       {/* Hero Section */}
//       <section className="relative py-30 ">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 opacity-90"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center'
//             }}
//           />

//           {/* Bluish overlay kept as requested */}
//           <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Cookies <span className="bg-gradient-to-r from-green-300 to-sky-300 bg-clip-text text-transparent">Policy</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Learn about how we use cookies and similar technologies to enhance your browsing experience.
//           </motion.p>

//           <motion.div 
//             className="inline-flex items-center gap-2 bg-green-50/30 border border-green-100 rounded-full px-6 py-3"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Cookie className="w-5 h-5 text-cyan-500" />
//             <span className="text-cyan-500 font-semibold">GDPR Compliant</span>
//           </motion.div>
//         </div>
//       </section>
 

//       {/* Cookie Types */}
//       <section ref={ref} className="py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-12 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             Types of Cookies We Use
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {cookieTypes.map((cookie, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">{cookie.type}</h3>
//                   {cookie.necessary ? (
//                     <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
//                       Necessary
//                     </span>
//                   ) : (
//                     <span className="bg-cyan-600/10 text-cyan-600 px-3 py-1 rounded-full text-sm font-bold">
//                       Optional
//                     </span>
//                   )}
//                 </div>

//                 <p className="text-gray-700 mb-4">{cookie.description}</p>

//                 <div className="space-y-2 mb-4">
//                   <h4 className="text-green-600 font-semibold">Examples:</h4>
//                   {cookie.examples.map((example, exampleIndex) => (
//                     <div key={exampleIndex} className="flex items-center gap-2 text-gray-700 text-sm">
//                       <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                       {example}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="text-sm text-gray-600">
//                   Duration: {cookie.duration}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cookie Management */}
//       <section className="py-20 bg-white/40">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-bold text-gray-900 mb-12 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           >
//             Managing Your Cookies
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {managementSteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
//                   {step.step}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-700 text-sm">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Browser Instructions */}
//           <motion.div
//             className="mt-12 bg-gradient-to-r from-green-50 to-sky-50 rounded-2xl p-8 border border-green-100"
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//               <Eye className="w-6 h-6 text-cyan-500" />
//               Browser Cookie Settings
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
//               <div>
//                 <h4 className="text-green-600 font-semibold mb-2">Chrome</h4>
//                 <p className="text-sm">Settings → Privacy and security → Cookies and other site data</p>
//               </div>
//               <div>
//                 <h4 className="text-green-600 font-semibold mb-2">Firefox</h4>
//                 <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
//               </div>
//               <div>
//                 <h4 className="text-green-600 font-semibold mb-2">Safari</h4>
//                 <p className="text-sm">Preferences → Privacy → Cookies and website data</p>
//               </div>
//               <div>
//                 <h4 className="text-green-600 font-semibold mb-2">Edge</h4>
//                 <p className="text-sm">Settings → Cookies and site permissions → Cookies and data stored</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CookiesPolicy;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Cookie,
  Eye,
  CheckCircle,
  ToggleLeft,
  ToggleRight
} from "lucide-react";
import { useTranslation } from "react-i18next";

// helper (same as before)
const normalizeArray = (val, fallback) => {
  if (Array.isArray(val)) return val;
  if (!val) return fallback;
  if (typeof val === "object") {
    const keys = Object.keys(val).sort();
    if (keys.length && keys.every(k => /^\d+$/.test(k))) {
      return keys.map(k => val[k]);
    }
    return [val];
  }
  return fallback;
};

const FALLBACK = {
  hero: {
    title: "Cookies Policy",
    subtitle:
      "Learn about how we use cookies and similar technologies to enhance your browsing experience."
  },
  badge: "GDPR Compliant",
  cookieTypes: [
    {
      type: "Essential Cookies",
      necessary: true,
      description: "Required for the website to function properly",
      examples: ["Session management", "Security features", "Load balancing"],
      duration: "Session"
    },
    {
      type: "Analytics Cookies",
      necessary: false,
      description: "Help us improve the site by seeing usage patterns.",
      examples: ["Page visits", "Time on site", "Error tracking"],
      duration: "2 years"
    },
    {
      type: "Marketing Cookies",
      necessary: false,
      description: "Used for showing more relevant ads across the web.",
      examples: ["Remarketing", "Interest-based ads", "Conversion tracking"],
      duration: "1 year"
    },
    {
      type: "Preference Cookies",
      necessary: false,
      description: "Remember your settings and preferences",
      examples: ["Language settings", "Font size", "Region selection"],
      duration: "1 year"
    }
  ],
  managementSteps: [
    { step: 1, title: "Browser Settings", description: "Manage cookies through your browser settings" },
    { step: 2, title: "Our Cookie Banner", description: "Use the cookie consent banner on our website" },
    { step: 3, title: "Opt-Out Tools", description: "Use industry opt-out tools for advertising cookies" },
    { step: 4, title: "Contact Us", description: "Email us for specific cookie-related requests" }
  ],
  browsers: [
    { name: "Chrome", instr: "Settings → Privacy and security → Cookies and other site data" },
    { name: "Firefox", instr: "Options → Privacy & Security → Cookies and Site Data" },
    { name: "Safari", instr: "Preferences → Privacy → Cookies and website data" },
    { name: "Edge", instr: "Settings → Cookies and site permissions → Cookies and data stored" }
  ],
  defaults: {
    analyticsEnabled: true,
    marketingEnabled: false
  },
  meta: { lastUpdated: "Last Updated: {{date}}" }
};

const CookiesPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation("common");

  const raw = t("cookies", { returnObjects: true, defaultValue: {} });

  const hero = raw.hero && Object.keys(raw.hero).length ? raw.hero : FALLBACK.hero;
  const badge = raw.badge || FALLBACK.badge;
  const cookieTypes = normalizeArray(raw.cookieTypes, FALLBACK.cookieTypes);
  const managementSteps = normalizeArray(raw.managementSteps, FALLBACK.managementSteps);
  const browsers = normalizeArray(raw.browsers, FALLBACK.browsers);

  const defaults = raw.defaults || FALLBACK.defaults;
  const [analyticsEnabled, setAnalyticsEnabled] = useState(defaults.analyticsEnabled);
  const [marketingEnabled, setMarketingEnabled] = useState(defaults.marketingEnabled);

  // --- NEW: get toggle descriptions from i18n/cookieTypes or fallback keys
  // find cookie type entries by substring match (case-insensitive)
  const findCookieDesc = (keyWord) => {
    const found = cookieTypes.find(ct =>
      ct.type && ct.type.toLowerCase().includes(keyWord.toLowerCase())
    );
    if (found && found.description) return found.description;
    // fallback to specific keys under t('cookies.toggles.*')
    if (keyWord.toLowerCase() === "analytics") {
      return t("cookies.toggles.analyticsDescription", { defaultValue: "Help us improve the site by seeing usage patterns." });
    }
    if (keyWord.toLowerCase() === "marketing") {
      return t("cookies.toggles.marketingDescription", { defaultValue: "Used for showing more relevant ads across the web." });
    }
    return "";
  };

  const analyticsDesc = findCookieDesc("analytics");
  const marketingDesc = findCookieDesc("marketing");

  const formattedDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero */}
      <section className="relative py-30 ">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 bg-green-50/30 border border-green-100 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Cookie className="w-5 h-5 text-cyan-500" />
            <span className="text-cyan-500 font-semibold">{badge}</span>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            {t("cookies.headings.types", { defaultValue: "Types of Cookies We Use" })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{cookie.type}</h3>
                  {cookie.necessary ? (
                    <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                      {t("cookies.tags.necessary", { defaultValue: "Necessary" })}
                    </span>
                  ) : (
                    <span className="bg-cyan-600/10 text-cyan-600 px-3 py-1 rounded-full text-sm font-bold">
                      {t("cookies.tags.optional", { defaultValue: "Optional" })}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-4">{cookie.description}</p>

                <div className="space-y-2 mb-4">
                  <h4 className="text-green-600 font-semibold">
                    {t("cookies.labels.examples", { defaultValue: "Examples:" })}
                  </h4>
                  {normalizeArray(cookie.examples, []).map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-600">
                  {t("cookies.labels.duration", { defaultValue: "Duration:" })} {cookie.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-white/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            {t("cookies.headings.management", { defaultValue: "Managing Your Cookies" })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.12 + index * 0.08 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Browser Instructions */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-green-50 to-sky-50 rounded-2xl p-8 border border-green-100"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-cyan-500" />
              {t("cookies.headings.browserSettings", { defaultValue: "Browser Cookie Settings" })}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              {browsers.map((b, i) => (
                <div key={i}>
                  <h4 className="text-green-600 font-semibold mb-2">{b.name}</h4>
                  <p className="text-sm">{b.instr}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Toggles use descriptions from cookieTypes (or explicit toggles keys) */}
          <motion.div
            className="mt-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-900">{t("cookies.cookieTypes.analyticsLabel", { defaultValue: "Analytics Cookies" })}</div>
                <div className="text-sm text-gray-600">{analyticsDesc}</div>
              </div>
              <button
                onClick={() => setAnalyticsEnabled(s => !s)}
                className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-50"
                aria-pressed={analyticsEnabled}
              >
                {analyticsEnabled ? <ToggleRight className="w-6 h-6 text-green-600" /> : <ToggleLeft className="w-6 h-6 text-gray-400" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-900">{t("cookies.cookieTypes.marketingLabel", { defaultValue: "Marketing Cookies" })}</div>
                <div className="text-sm text-gray-600">{marketingDesc}</div>
              </div>
              <button
                onClick={() => setMarketingEnabled(s => !s)}
                className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-50"
                aria-pressed={marketingEnabled}
              >
                {marketingEnabled ? <ToggleRight className="w-6 h-6 text-green-600" /> : <ToggleLeft className="w-6 h-6 text-gray-400" />}
              </button>
            </div>
          </motion.div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <span className="text-yellow-500 font-semibold">
              {t("cookies.meta.lastUpdated", { defaultValue: FALLBACK.meta.lastUpdated, date: formattedDate })}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;

