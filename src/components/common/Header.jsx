// Header.jsx (fixed for scroll-related issues)
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X, ChevronDown, User } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // rAF ref to avoid multiple setState calls while scrolling
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      // throttle via rAF
      lastScrollY.current = window.scrollY;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const y = lastScrollY.current;
        const scrolled = y > 50;
        setIsScrolled(scrolled);

        // Close open dropdowns while scrolling to avoid flicker / stuck menus
        if (activeDropdown) setActiveDropdown(null);

        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial check
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 50);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only once

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
      { name: "Team", href: "/team" },
    {
      name: "Services",
      href: "/services",
      
      dropdown: [
        { name: "Forex Card & Remittances", to: "/services/forex-card-remittances" },
        { name: "Accommodation", to: "/services/accommodation" },
        { name: "Medical Insurance", to: "/services/medical-insurance" },
        { name: "Education Loan", to: "/services/education-loan" },
      ],
    },
  
    { name: "Pricing", href: "/#" },
    { name: "Coaching", href: "/coaching" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href) => {
    if (!href) return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const handleDropdownKey = (e, name) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === name ? null : name));
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <motion.header
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-sky-50 "
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Keep padding constant to avoid layout jumps */}
          <div className="flex justify-between items-center py-3">
           
            <a href="/">
             <img src={logo} alt="Eduberator" className="h-14 w-auto" /></a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex text-lg items-center space-x-8" role="navigation">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown((prev) => (prev === item.name ? null : prev))}
                    >
                      <button
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.name}
                        onKeyDown={(e) => handleDropdownKey(e, item.name)}
                        className={`flex items-center gap-1 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300 ${
                          isScrolled
                            ? isActiveLink(item.href)
                              ? "text-green-600"
                              : "text-gray-800 hover:text-green-600"
                            : "text-gray-700 hover:text-green-500"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
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
                            ? "text-green-600"
                            : "text-gray-800 hover:text-green-600"
                          : "text-gray-700 hover:text-green-500"
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
              {/* Profile Icon */}
              <Link
                to="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 focus:outline-none ${
                  isScrolled ? "bg-gradient-to-r from-green-600 to-sky-600 text-white" : "bg-white/90 text-green-700 hover:scale-105"
                }`}
                aria-label="Profile"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full focus:outline-none ${
                  isScrolled ? "bg-white text-gray-800 shadow-sm" : "bg-gradient-to-r from-green-600 to-sky-600 text-white shadow-md"
                }`}
                onClick={() => {
                  setIsMobileMenuOpen((prev) => !prev);
                  // Reset any desktop dropdown state when toggling mobile menu
                  if (!isMobileMenuOpen) setActiveDropdown(null);
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex flex-col px-4 py-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <>
                        <button
                          className="w-full flex justify-between items-center px-4 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-all focus:outline-none"
                          onClick={() => setActiveDropdown((prev) => (prev === item.name ? null : item.name))}
                          aria-expanded={activeDropdown === item.name}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="flex flex-col pl-6 mt-2 space-y-1 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.to}
                                  to={dropdownItem.to}
                                  className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg text-sm transition-all"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
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
  );
};

export default Header;
