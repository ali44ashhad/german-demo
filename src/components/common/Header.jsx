import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle,
  ChevronDown
} from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation: Services dropdown items are objects with name + to (route)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Forex Card & Remittances', to: '/services/forex-card-remittances' },
        { name: 'Accommodation', to: '/services/accommodation' },
        { name: 'Medical Insurance', to: '/services/medical-insurance' },
        { name: 'Education Loan', to: '/services/education-loan' },
      ]
    },
    { name: 'Coaching', href: '/coaching' }, 
    { name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href) => {
    if (!href) return false
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 transition-all duration-500 `}
       
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/">
                <img src={logo} alt="Profiberater" className='h-full w-35' />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="relative"
                    >
                      <button className={`flex items-center gap-1 transition-colors duration-300 font-medium group ${
                        isActiveLink(item.href) 
                          ? 'text-cyan-400' 
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}>
                        {item.name}
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2">
                              {item.dropdown.map((dropdownItem, index) => (
                                <motion.div
                                  key={dropdownItem.to}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.05 }}
                                >
                                  <Link
                                    to={dropdownItem.to}
                                    className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-xl transition-all duration-300 text-sm"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`transition-colors duration-300 font-medium relative group ${
                        isActiveLink(item.href) 
                          ? 'text-cyan-400' 
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                        isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Login
              </motion.button>

              <motion.button
                onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                Sign Up
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              <motion.div
                className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-gray-900 border-l border-gray-700 z-50"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="flex items-center gap-3">
                        <img src={logo} alt="Profiberater" className='h-10 w-auto' />
                      </div>
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyan-400"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <nav className="space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <div className="space-y-2">
                            <button
                              onClick={() => setActiveDropdown(
                                activeDropdown === item.name ? null : item.name
                              )}
                              className="flex items-center justify-between w-full text-left transition-colors duration-300 font-medium py-3 text-gray-300 hover:text-cyan-400"
                            >
                              {item.name}
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  activeDropdown === item.name ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                            
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  className="ml-4 space-y-2 border-l-2 border-cyan-400/30 pl-4"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  {item.dropdown.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.to}
                                      to={dropdownItem.to}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setActiveDropdown(null)
                                      }}
                                      className="block w-full text-left text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-2 text-sm"
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left transition-colors duration-300 font-medium py-3 ${
                              isActiveLink(item.href) 
                                ? 'text-cyan-400' 
                                : 'text-gray-300 hover:text-cyan-400'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="mt-8 space-y-4">
                    <motion.a
                      href="tel:+919876543210"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-800 rounded-xl text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call: +91 98765 43210</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 rounded-xl text-white font-medium hover:bg-green-600 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </motion.a>

                    <motion.button
                      onClick={() => {
                        window.location.href = '/contact'
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Free Consultation
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  )
}

export default Header
