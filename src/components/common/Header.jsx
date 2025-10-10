import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { Menu, X, Phone, ChevronDown, User } from 'lucide-react'

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
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            
            {/* Logo */}
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.03 }}>
              <Link to="/">
                <img src={logo} alt="Eduberator" className="h-14 w-auto" />
              </Link>
            </motion.div>

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
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
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

            {/* Right Tools */}
            <div className="hidden lg:flex items-center gap-4">
              

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
            </div>

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
      </motion.header>
    </>
  )
}

export default Header
