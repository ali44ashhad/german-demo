import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserPlus, Mail, Lock, User, Phone, Eye, EyeOff, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { useRegisterMutation } from '../store/apiSlice';
import ThemeToggle from '../components/common/ThemeToggle';

const Register = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [register, { isLoading: isSubmitting }] = useRegisterMutation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    contactNumber: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const roles = [
    { value: 'user', label: 'User' },
    // { value: 'subadmin', label: 'Sub Admin' },
    // { value: 'superadmin', label: 'Super Admin' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError('All required fields must be filled');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    try {
      const { confirmPassword, ...submitData } = formData;
      const response = await register(submitData).unwrap();
      
      if (response.success) {
        setSuccess(true);
        setSuccessMessage(response.message || 'Your account has been created. Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      }
    } catch (err) {
      setError(err.data?.message || err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40 py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Back to Home Button */}
      <motion.div
        className="absolute top-6 left-4 sm:left-6 lg:left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/home"
          className="inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 rounded-lg hover:bg-muted"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('auth.backToHome', 'Back to Home')}</span>
        </Link>
      </motion.div>
      <div className="absolute top-6 right-4 sm:right-6 lg:right-8 z-10">
        <ThemeToggle />
      </div>
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-sky-600 rounded-full mb-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <UserPlus className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('auth.register.title', 'Create Your Account')}
          </h1>
          <p className="text-muted-foreground">
            {t('auth.register.subtitle', 'Join us and start your German education journey')}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-surface rounded-3xl p-8 border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {success ? (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-600 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('auth.register.success.title', 'Registration Successful!')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {successMessage}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <motion.div
                  className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </motion.div>
              )}

              {/* Name */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.register.form.name', 'Full Name')} *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.register.form.namePlaceholder', 'Enter your full name')}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.register.form.email', 'Email Address')} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.register.form.emailPlaceholder', 'Enter your email')}
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.register.form.contactNumber', 'Contact Number')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.register.form.contactPlaceholder', '+91 12345 67890')}
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.register.form.role', 'Role')} *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-foreground focus:outline-none focus:border-green-600 transition-all duration-300"
                >
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.register.form.password', 'Password')} *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.register.form.passwordPlaceholder', 'Enter your password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.register.form.confirmPassword', 'Confirm Password')} *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.register.form.confirmPasswordPlaceholder', 'Confirm your password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    {t('auth.register.form.submitting', 'Creating Account...')}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    {t('auth.register.form.submit', 'Create Account')}
                  </span>
                )}
              </motion.button>
            </form>
          )}

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {t('auth.register.alreadyHaveAccount', 'Already have an account?')}{' '}
              <Link
                to="/login"
                className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:text-green-400 transition-colors"
              >
                {t('auth.register.loginLink', 'Login here')}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;

