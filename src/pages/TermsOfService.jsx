import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Scale, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const TermsOfService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const sections = [
    {
      icon: Users,
      title: "Service Agreement",
      content: [
        {
          subtitle: "Acceptance of Terms",
          points: [
            "By accessing our services, you agree to be bound by these terms",
            "Services are available only to individuals who are at least 18 years old",
            "We reserve the right to update these terms at any time",
            "Continued use after changes constitutes acceptance"
          ]
        },
        {
          subtitle: "Service Description",
          points: [
            "Educational consulting for German universities",
            "Assistance with accommodation and financial services",
            "Visa guidance and documentation support",
            "Third-party service coordination"
          ]
        }
      ]
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Accurate Information",
          points: [
            "Provide complete and accurate personal information",
            "Update information promptly when changes occur",
            "Maintain confidentiality of account credentials",
            "Report unauthorized access immediately"
          ]
        },
        {
          subtitle: "Prohibited Activities",
          points: [
            "Misrepresentation of academic qualifications",
            "Submission of fraudulent documents",
            "Unauthorized commercial use of services",
            "Violation of German or Indian laws"
          ]
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations & Disclaimers",
      content: [
        {
          subtitle: "Service Limitations",
          points: [
            "We provide guidance but cannot guarantee university admissions",
            "Visa approvals are at the discretion of German authorities",
            "Service outcomes depend on individual circumstances",
            "Third-party services are subject to their terms"
          ]
        },
        {
          subtitle: "Financial Disclaimers",
          points: [
            "Loan approvals depend on lender criteria",
            "Exchange rates for forex services may fluctuate",
            "Insurance coverage subject to provider terms",
            "Fees are for services rendered, not outcomes"
          ]
        }
      ]
    },
    {
      icon: Clock,
      title: "Payments & Refunds",
      content: [
        {
          subtitle: "Fee Structure",
          points: [
            "Service fees are clearly communicated upfront",
            "Additional costs for third-party services may apply",
            "Payment plans available for certain services",
            "All fees are in Indian Rupees unless specified"
          ]
        },
        {
          subtitle: "Refund Policy",
          points: [
            "Consultation fees are non-refundable",
            "Partial refunds based on service completion stage",
            "No refunds after service delivery completion",
            "Refund requests must be submitted in writing"
          ]
        }
      ]
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
              backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
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
            Terms of <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Service</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Please read these terms carefully before using our services. These terms govern your relationship with Profiberater.
          </motion.p>

          <motion.div 
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Legal Agreement</span>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-400/30 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Important Legal Notice</h3>
                <p className="text-yellow-300">
                  These Terms of Service constitute a legally binding agreement between you and Profiberater. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound 
                  by these terms. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((content, contentIndex) => (
                    <div key={contentIndex}>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">{content.subtitle}</h3>
                      <div className="space-y-2">
                        {content.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Governing Law */}
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/30 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law & Jurisdiction</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under or in connection with these Terms shall be subject to the exclusive 
                jurisdiction of the courts located in Delhi, India.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver 
                of those rights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;