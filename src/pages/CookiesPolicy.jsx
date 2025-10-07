import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Cookie, 
  Settings, 
  Eye,
  CheckCircle,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

const CookiesPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const cookieTypes = [
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
      description: "Help us understand how visitors interact with our website",
      examples: ["Page visits", "Time on site", "Error tracking"],
      duration: "2 years"
    },
    {
      type: "Marketing Cookies",
      necessary: false,
      description: "Used to track visitors across websites for advertising",
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
  ];

  const managementSteps = [
    {
      step: 1,
      title: "Browser Settings",
      description: "Manage cookies through your browser settings"
    },
    {
      step: 2,
      title: "Our Cookie Banner", 
      description: "Use the cookie consent banner on our website"
    },
    {
      step: 3,
      title: "Opt-Out Tools",
      description: "Use industry opt-out tools for advertising cookies"
    },
    {
      step: 4,
      title: "Contact Us",
      description: "Email us for specific cookie-related requests"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
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
            Cookies <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn about how we use cookies and similar technologies to enhance your browsing experience.
          </motion.p>

          <motion.div 
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Cookie className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">GDPR Compliant</span>
          </motion.div>
        </div>
      </section>

      {/* Cookie Consent Manager */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-cyan-400" />
              Cookie Preferences
            </h2>
            
            <div className="space-y-6">
              {/* Essential Cookies - Always On */}
              <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                <div>
                  <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                  <p className="text-gray-300 text-sm">Required for website functionality</p>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <ToggleRight className="w-8 h-8" />
                  <span className="text-sm font-semibold">Always Active</span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                <div>
                  <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                  <p className="text-gray-300 text-sm">Help us improve our website</p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className="flex items-center gap-2"
                >
                  {analyticsEnabled ? (
                    <>
                      <ToggleRight className="w-8 h-8 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Active</span>
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="w-8 h-8 text-gray-400" />
                      <span className="text-gray-400 text-sm font-semibold">Inactive</span>
                    </>
                  )}
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                <div>
                  <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                  <p className="text-gray-300 text-sm">Personalized advertising</p>
                </div>
                <button
                  onClick={() => setMarketingEnabled(!marketingEnabled)}
                  className="flex items-center gap-2"
                >
                  {marketingEnabled ? (
                    <>
                      <ToggleRight className="w-8 h-8 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">Active</span>
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="w-8 h-8 text-gray-400" />
                      <span className="text-gray-400 text-sm font-semibold">Inactive</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Save Preferences
                </motion.button>
                <motion.button
                  className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Accept All
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            Types of Cookies We Use
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{cookie.type}</h3>
                  {cookie.necessary ? (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      Necessary
                    </span>
                  ) : (
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">
                      Optional
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-4">{cookie.description}</p>

                <div className="space-y-2 mb-4">
                  <h4 className="text-cyan-400 font-semibold">Examples:</h4>
                  {cookie.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-400">
                  Duration: {cookie.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            Managing Your Cookies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Browser Instructions */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/30"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-purple-400" />
              Browser Cookie Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Chrome</h4>
                <p className="text-sm">Settings → Privacy and security → Cookies and other site data</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Firefox</h4>
                <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Safari</h4>
                <p className="text-sm">Preferences → Privacy → Cookies and website data</p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Edge</h4>
                <p className="text-sm">Settings → Cookies and site permissions → Cookies and data stored</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;