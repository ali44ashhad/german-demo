import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  FileText
} from 'lucide-react';
import EMICalculator from '../../components/common/EmiCalculator';

const EducationLoan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const loanTypes = [
    {
      name: "Collateral-Free Loan",
      amount: "Up to ₹75 Lakhs",
      interest: "8.5% - 11.5% p.a.",
      features: ["No Collateral", "Moratorium Period", "Flexible Repayment", "Quick Disbursal"],
      eligibility: "Indian students with admission"
    },
    {
      name: "Secured Education Loan", 
      amount: "Up to ₹1.5 Crores",
      interest: "7.5% - 9.5% p.a.",
      features: ["Lower Interest", "Longer Tenure", "Parent as Co-applicant", "Tax Benefits"],
      eligibility: "With collateral security"
    },
    {
      name: "German Government Loan",
      amount: "Up to €850/month",
      interest: "0% - 2% p.a.", 
      features: ["Subsidized Interest", "Long Repayment", "Income-Based", "No Collateral"],
      eligibility: "EU & International students"
    }
  ];

const lenders = [
  {
    name: "SBI Global Ed-Vantage",
    processing: "7-10 days",
    margin: "Up to 15%",
    special: "No margin for premier institutes"
  },
  {
    name: "HDFC Credila", 
    processing: "5-7 days",
    margin: "Up to 10%",
    special: "Digital process"
  },
  {
    name: "Axis Bank Education Loan",
    processing: "10-12 days",
    margin: "Up to 15%", 
    special: "Wide university coverage"
  },
  {
    name: "Prodigy Finance",
    processing: "2-3 weeks",
    margin: "No margin",
    special: "International lenders"
  },
  {
    name: "Union Bank of India – Education Loan",
    processing: "8-10 days",
    margin: "Up to 10%",
    special: "Low interest for overseas studies"
  }
];


  const documents = [
    "Admission letter from German university",
    "Academic transcripts and certificates",
    "Passport and visa documents", 
    "Cost of education breakdown",
    "Parent/guardian income proof"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Bluish overlay (kept) */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/60 to-sky-700/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">Loan</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Finance your German education with our partnership loan programs. Competitive interest rates and flexible repayment options.
          </motion.p>
        </div>
      </section>

      {/* Loan Types */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            Education Loan Options
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{loan.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sky-600 font-bold text-xl">{loan.amount}</div>
                    <div className="text-green-600 font-semibold">{loan.interest}</div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    Eligibility: {loan.eligibility}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {loan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check Eligibility
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-green-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lenders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Partner Lenders</h3>
              <div className="space-y-4">
                {lenders.map((lender, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{lender.name}</h4>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-3">
                      <div>
                        <span className="text-gray-500">Processing:</span>
                        <div className="text-sky-600 font-semibold">{lender.processing}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Margin Money:</span>
                        <div className="text-green-600 font-semibold">{lender.margin}</div>
                      </div>
                    </div>

                    <div className="text-green-600 text-sm">
                      {lender.special}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <div className="space-y-3">
                {documents.map((document, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <FileText className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </motion.div>
                ))}
              </div>

             
            <div
            className='py-6'>
              <EMICalculator/>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white rounded-3xl p-12 border border-orange-100 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Finance Your German Dream</h2>
            <p className="text-xl text-gray-700 mb-8">
              Get the best education loan for your studies in Germany with our expert guidance.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Education Loan <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EducationLoan;