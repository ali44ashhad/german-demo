import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LogIn, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { useLoginMutation, useResendVerificationEmailMutation } from '../store/apiSlice';
import ThemeToggle from '../components/common/ThemeToggle';

const ADMIN_ROLE = 'superadmin';
const SUBADMIN_ROLE = 'subadmin';

const Login = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [login, { isLoading: isSubmitting }] = useLoginMutation();
  const [resendVerification, { isLoading: isResending }] = useResendVerificationEmailMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);
  const [resendSuccess, setResendSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
    setResendSuccess('');
    setShowResendButton(false);
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
          let targetRoute = '/profile';
          if (response.user?.role === ADMIN_ROLE) {
            targetRoute = '/admin';
          } else if (response.user?.role === SUBADMIN_ROLE) {
            targetRoute = '/subadmin';
          }
          navigate(targetRoute);
        }, 1500);
      }
    } catch (err) {
      const errorMsg = err.data?.message || err.message || 'Invalid email or password. Please try again.';
      setError(errorMsg);
      if (errorMsg.toLowerCase().includes('verify')) {
        setShowResendButton(true);
      }
    }
  };

  const handleResend = async () => {
    try {
      setError('');
      setResendSuccess('');
      const response = await resendVerification({ email: formData.email }).unwrap();
      if (response.success) {
        setShowResendButton(false);
        setResendSuccess(response.message || 'Verification link sent!');
      }
    } catch (err) {
      setError(err.data?.message || 'Failed to resend verification email.');
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
            <LogIn className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('auth.login.title', 'Welcome Back')}
          </h1>
          <p className="text-muted-foreground">
            {t('auth.login.subtitle', 'Sign in to continue your German education journey')}
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
                {t('auth.login.success.title', 'Login Successful!')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('auth.login.success.message', 'Redirecting to home page...')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <motion.div
                  className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3 flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-start gap-3 w-full">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 dark:text-red-300 text-sm flex-1">{error}</p>
                  </div>
                  {showResendButton && (
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={isResending}
                      className="mt-2 w-full flex items-center justify-center gap-2 bg-surface text-green-700 dark:text-green-400 border border-border py-2 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-muted transition shadow-sm text-sm"
                    >
                      {isResending ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                      {isResending ? 'Sending...' : 'Resend Verification Email'}
                    </button>
                  )}
                </motion.div>
              )}

              {/* Resend Success Message */}
              {resendSuccess && (
                <motion.div
                  className="bg-green-50 dark:bg-muted border border-border rounded-xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 dark:text-green-400 text-sm">{resendSuccess}</p>
                </motion.div>
              )}

              {/* Email */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.login.form.email', 'Email Address')} *
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
                    placeholder={t('auth.login.form.emailPlaceholder', 'Enter your email')}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  {t('auth.login.form.password', 'Password')} *
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
                    placeholder={t('auth.login.form.passwordPlaceholder', 'Enter your password')}
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

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  to="#"
                  className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:text-green-400 font-medium transition-colors"
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
            <p className="text-muted-foreground">
              {t('auth.login.dontHaveAccount', "Don't have an account?")}{' '}
              <Link
                to="/register"
                className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:text-green-400 transition-colors"
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

