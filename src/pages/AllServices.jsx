import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CreditCard, 
  Home, 
  Heart, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AllServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: CreditCard,
      title: "Forex Card & Remittances",
      description: "Comprehensive foreign exchange solutions including multi-currency forex cards and international money transfer services with best exchange rates.",
      features: [
        "Multi-Currency Forex Cards",
        "Zero Forex Markup", 
        "International Money Transfer",
        "24/7 Customer Support",
        "Mobile App Management",
        "Emergency Card Replacement"
      ],
      benefits: [
        "Save 3-5% on currency conversion",
        "Instant reload options",
        "Accepted worldwide",
        "Complete transaction security"
      ],
      process: ["Documentation", "KYC Verification", "Card Delivery", "Activation & Use"],
      price: "No hidden charges",
      color: "from-green-600 to-sky-600",
      link: "/services/forex-card-remittances"
    },
    {
      icon: Home,
      title: "Accommodation Services",
      description: "End-to-end accommodation solutions for students in Germany, from temporary stays to long-term rentals near universities.",
      features: [
        "Student Hostels & Dorms",
        "Shared Apartments (WG)",
        "Studio Apartments", 
        "Homestay Options",
        "University Partnerships",
        "Rental Contract Assistance"
      ],
      benefits: [
        "Verified landlords & properties",
        "Location near universities",
        "All utility bills included",
        "Furnished options available"
      ],
      process: ["Requirement Analysis", "Property Shortlisting", "Virtual Tours", "Booking & Move-in"],
      price: "€250-€700/month",
      color: "from-green-600 to-sky-600",
      link: "/services/accommodation"
    },
    {
      icon: Heart,
      title: "Medical Insurance",
      description: "German health insurance solutions meeting visa requirements with comprehensive coverage for international students.",
      features: [
        "Public Health Insurance (GKV)",
        "Private Health Insurance",
        "Dental & Vision Coverage", 
        "Emergency Medical Evacuation",
        "Repatriation Coverage",
        "24/7 Multilingual Support"
      ],
      benefits: [
        "Visa compliance guaranteed",
        "Cashless hospitalization",
        "EU-wide coverage",
        "Pre-existing conditions coverage"
      ],
      process: ["Plan Selection", "Document Submission", "Policy Issuance", "Visa Application Support"],
      price: "€30-€100/month",
      color: "from-green-600 to-sky-600",
      link: "/services/medical-insurance"
    },
    {
      icon: TrendingUp,
      title: "Education Loan",
      description: "Financial assistance for Indian students pursuing higher education in Germany with flexible repayment options.",
      features: [
        "Collateral-Free Loans",
        "Secured Education Loans", 
        "German Government Loans",
        "Moratorium Period",
        "Tax Benefits Under 80E",
        "Flexible Repayment Tenure"
      ],
      benefits: [
        "Competitive interest rates",
        "Quick loan processing",
        "No prepayment penalties",
        "Income tax benefits"
      ],
      process: ["Eligibility Check", "Documentation", "Sanction & Disbursal", "Post-Loan Support"],
      price: "Up to ₹1.5 Crores",
      color: "from-green-600 to-sky-600",
      link: "/services/education-loan"
    }
  ];

  const stats = [
    { number: "5000+", label: "Forex Cards Issued" },
    { number: "2000+", label: "Accommodations Arranged" },
    { number: "3000+", label: "Insurance Policies" },
    { number: "₹100Cr+", label: "Loans Sanctioned" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Bluish overlay (kept) */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="bg-gradient-to-r from-green-700 to-sky-900 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive support services for Indian students pursuing education in Germany. 
            From financial solutions to accommodation, we handle everything for your smooth transition.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                        <div className="text-green-600 font-semibold">{service.price}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-600" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-green-600" />
                        Key Benefits
                      </h3>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="bg-green-50 rounded-lg p-3">
                            <div className="text-green-700 text-sm font-semibold">{benefit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="space-y-6">
                    {/* Process */}
                    <div className="bg-green-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-green-600" />
                        Process Flow
                      </h3>
                      <div className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-green-50 to-sky-50 rounded-2xl p-6 border border-green-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
                      <p className="text-gray-700 text-sm mb-4">
                        Begin your journey with our comprehensive {service.title.toLowerCase()} services.
                      </p>
                      <Link to={service.link}>
                        <motion.button
                          className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-3 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-green-50 rounded-xl p-4">
                        <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <div className="text-gray-900 font-bold text-sm">1000+ Students</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4">
                        <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <div className="text-gray-900 font-bold text-sm">100% Secure</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive CTA */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-3xl p-12 border border-green-100 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Multiple Services?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Get special package deals when you avail multiple services together. Save time and money with our bundled solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Package Deal
              </motion.button>
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-green-600 text-green-600 font-bold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Custom Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
