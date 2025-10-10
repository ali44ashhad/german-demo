import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { Menu, X, ChevronDown, User } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: 'Tools', href: '/#' },
    { name: 'Pricing', href: '/#' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href) => {
    if (!href) return false
    if (href === '/') return location.pathname === '/'
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">

            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Eduberator" className="h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                          isScrolled
                            ? isActiveLink(item.href)
                              ? 'text-green-600'
                              : 'text-gray-800 hover:text-green-600'
                            : 'text-white hover:text-yellow-300'
                        }`}
                      >
                        {item.name} <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.to}
                                  to={dropdownItem.to}
                                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-xl text-sm transition-all"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors duration-300 ${
                        isScrolled
                          ? isActiveLink(item.href)
                            ? 'text-green-600'
                            : 'text-gray-800 hover:text-green-600'
                          : 'text-white hover:text-yellow-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - Profile & Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Profile Icon - Always Visible */}
              <Link
                to="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-green-600 to-sky-600 text-white'
                    : 'bg-white/90 text-green-700 hover:scale-105'
                }`}
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                className={`lg:hidden w-10 h-10 flex items-center justify-center ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col px-4 py-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <>
                        <button
                          className="w-full flex justify-between items-center px-4 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-all"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          {item.name} <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="flex flex-col pl-6 mt-2 space-y-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.to}
                                  to={dropdownItem.to}
                                  className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg text-sm transition-all"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-lg text-sm transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header
