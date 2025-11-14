import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LogIn, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useLoginMutation } from '../store/apiSlice';

const ADMIN_ROLE = 'superadmin';
const SUBADMIN_ROLE = 'subadmin';

const Login = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [login, { isLoading: isSubmitting }] = useLoginMutation();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await login(formData).unwrap();
      
      if (response.success) {
        setSuccess(true);
        // Store user data in localStorage if needed
        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
        }
        setTimeout(() => {
          let targetRoute = '/home';
          if (response.user?.role === ADMIN_ROLE) {
            targetRoute = '/admin';
          } else if (response.user?.role === SUBADMIN_ROLE) {
            targetRoute = '/subadmin';
          }
          navigate(targetRoute);
        }, 1500);
      }
    } catch (err) {
      setError(err.data?.message || err.message || 'Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8">
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
            <LogIn className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t('auth.login.title', 'Welcome Back')}
          </h1>
          <p className="text-gray-600">
            {t('auth.login.subtitle', 'Sign in to continue your German education journey')}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('auth.login.success.title', 'Login Successful!')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('auth.login.success.message', 'Redirecting to home page...')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <motion.div
                  className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{error}</p>
                </motion.div>
              )}

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  {t('auth.login.form.email', 'Email Address')} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.login.form.emailPlaceholder', 'Enter your email')}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  {t('auth.login.form.password', 'Password')} *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300"
                    placeholder={t('auth.login.form.passwordPlaceholder', 'Enter your password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  to="#"
                  className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  {t('auth.login.forgotPassword', 'Forgot Password?')}
                </Link>
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
                    {t('auth.login.form.submitting', 'Signing In...')}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <LogIn className="w-5 h-5" />
                    {t('auth.login.form.submit', 'Sign In')}
                  </span>
                )}
              </motion.button>
            </form>
          )}

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t('auth.login.dontHaveAccount', "Don't have an account?")}{' '}
              <Link
                to="/register"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                {t('auth.login.registerLink', 'Register here')}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

