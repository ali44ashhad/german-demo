import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import logo from "../../assets/logo.png";
import { useLogoutMutation, useGetCurrentUserQuery } from "../../store/apiSlice";
import { useTranslation } from "react-i18next";

const SubAdminHeader = () => {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  const { data } = useGetCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const user = data?.user;
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  useEffect(() => {
    const saved = localStorage.getItem("i18nextLng");
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved).catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onScroll = () => {
      lastScrollY.current = window.scrollY;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const y = lastScrollY.current;
        setIsScrolled(y > 50);
        if (activeDropdown) setActiveDropdown(null);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 50);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsProfileMenuOpen(false);
  }, [location.pathname]);

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

  const availableLangs = [
    { code: "en", label: "English", countryCode: "GB" },
    { code: "it", label: "Italiano", countryCode: "IT" },
    { code: "es", label: "Español", countryCode: "ES" },
    { code: "de", label: "Deutsch", countryCode: "DE" },
    { code: "zh-CN", label: "简体中文", countryCode: "CN" },
    { code: "fr", label: "Français", countryCode: "FR" },
  ];

  const currentLang = i18n.language || "en";

  const changeLanguage = (lng) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        localStorage.setItem("i18nextLng", lng);
        setActiveDropdown(null);
      })
      .catch(() => {});
  };

  const navigation = [
    { name: t("header.nav.home", "Home"), href: "/subadmin" },
    { name: t("header.nav.consultations", "Consultations"), href: "/subadmin/consultations" },
    { name: t("header.nav.students", "Students"), href: "/subadmin/students" },
  ];

  const isActiveLink = (href) => {
    if (!href) return false;
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  const handleDropdownKey = (e, name) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === name ? null : name));
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  const currentCountryCode = (code) => {
    const found = availableLangs.find((l) => l.code === code);
    return found ? found.countryCode : "GB";
  };

  const handleLogout = async () => {
    setIsProfileMenuOpen(false);
    try {
      await logout().unwrap();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <motion.header
      aria-label="Sub-admin navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-sky-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/subadmin" aria-label={t("header.nav.home", "Home")}>
            <img src={logo} alt="Eduberator" className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex text-lg items-center space-x-8" role="navigation" aria-label="Sub-admin primary">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled
                      ? isActiveLink(item.href)
                        ? "text-green-600"
                        : "text-gray-800 hover:text-green-600"
                      : isActiveLink(item.href)
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <button
                onClick={() => setActiveDropdown((prev) => (prev === "lang" ? null : "lang"))}
                onKeyDown={(e) => handleDropdownKey(e, "lang")}
                aria-haspopup="true"
                aria-expanded={activeDropdown === "lang"}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-white/90 border border-gray-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                title={t("header.language_toggle", "Change language")}
              >
                <ReactCountryFlag
                  countryCode={currentCountryCode(currentLang)}
                  svg
                  style={{ width: "1.2em", height: "1.2em", borderRadius: 4 }}
                  title={currentLang}
                />
                <span className="hidden md:inline text-sm">{availableLangs.find((l) => l.code === currentLang)?.label}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === "lang" && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden z-50"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                  >
                    <div className="p-2">
                      {availableLangs.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-3 ${
                            lang.code === currentLang ? "font-semibold bg-gray-50" : ""
                          }`}
                        >
                          <ReactCountryFlag countryCode={lang.countryCode} svg style={{ width: "1.4em", height: "1.4em", borderRadius: 4 }} title={lang.label} />
                          <span className="truncate">{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsProfileMenuOpen(true)}
              onMouseLeave={() => setIsProfileMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 focus:outline-none ${
                  isScrolled ? "bg-gradient-to-r from-green-600 to-sky-600 text-white" : "bg-white/90 text-green-700 hover:scale-105"
                }`}
                aria-haspopup="true"
                aria-expanded={isProfileMenuOpen}
                aria-label={t("header.profile", "Profile")}
              >
                <User className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-52 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden z-50"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                  >
                    <div className="p-2 flex flex-col gap-1">
                      <div className="px-3 py-2 rounded-xl text-sm text-gray-600">
                        <p className="font-semibold text-gray-900">{user?.name || t("subadmin.profile", "Profile")}</p>
                        <p className="text-xs truncate">{user?.email}</p>
                      </div>
                      <Link
                        to="/subadmin/profile"
                        className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        {t("header.profile", "Profile")}
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="px-3 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center justify-between disabled:opacity-60"
                      >
                        {t("header.logout", "Logout")}
                        {isLoggingOut && <span className="ml-2 h-2 w-2 rounded-full bg-red-400 animate-ping" aria-hidden="true" />}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full focus:outline-none ${
                isScrolled ? "bg-white text-gray-800 shadow-sm" : "bg-gradient-to-r from-green-600 to-sky-600 text-white shadow-md"
              }`}
              onClick={() => {
                setIsMobileMenuOpen((prev) => !prev);
                if (!isMobileMenuOpen) setActiveDropdown(null);
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t("header.close_menu", "Close menu") : t("header.open_menu", "Open menu")}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

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
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-lg text-sm transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <div className="text-sm font-medium px-4 py-2">{t("languages.select", "Language")}</div>
                <div className="flex flex-wrap gap-2 px-4 pb-3">
                  {availableLangs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLanguage(l.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${
                        currentLang === l.code ? "bg-green-50 border-green-200 font-semibold" : "bg-white border-gray-200"
                      }`}
                    >
                      <ReactCountryFlag countryCode={l.countryCode} svg style={{ width: "1.4em", height: "1.4em", borderRadius: 4 }} title={l.label} />
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full px-4 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {t("header.logout", "Logout")}
                  {isLoggingOut && <span className="h-2 w-2 rounded-full bg-red-400 animate-ping" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default SubAdminHeader;

