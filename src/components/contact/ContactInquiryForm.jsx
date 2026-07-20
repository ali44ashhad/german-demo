/**
 * Shared contact inquiry form (home section and /contact page).
 * Copy and fields come from `contact.form` i18n keys; services from `contactus.services`.
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Sparkles, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthRedirect } from '../../utils/useAuthRedirect';

const INPUT_CLASS =
  'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300';

const FormLabel = ({ htmlFor, children, required = false }) => (
  <label htmlFor={htmlFor} className="block text-gray-700 text-sm font-medium mb-2">
    {children}
    {required && <span className="text-red-500"> *</span>}
  </label>
);

export const EMPTY_CONTACT_INQUIRY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  serviceInterest: '',
  description: '',
  emailConsent: false
};

const DEFAULT_SERVICES = [
  'Forex Card & Remittances',
  'Accommodation',
  'Medical Insurance',
  'Education Loan',
  'University Admission',
  'Visa Guidance'
];

const DEFAULT_COUNTRIES = [
  { value: 'IN', label: 'India' },
  { value: 'DE', label: 'Germany' },
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'AU', label: 'Australia' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'CN', label: 'China' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'SG', label: 'Singapore' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'AT', label: 'Austria' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'OTHER', label: 'Other' }
];

const fieldMotion = (isInView, delay) =>
  isInView
    ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } }
    : {};

const ContactInquiryForm = ({
  idPrefix = 'contact-inquiry',
  isInView = true,
  className = '',
  variant = 'default'
}) => {
  const compact = variant === 'compact';
  const inputClass = compact
    ? 'w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all duration-300'
    : INPUT_CLASS;
  const { t } = useTranslation('common');
  const { requireAuth } = useAuthRedirect();

  const [formData, setFormData] = useState(EMPTY_CONTACT_INQUIRY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showServiceHint, setShowServiceHint] = useState(false);

  const rawServices = t('contactus.services', { returnObjects: true });
  const services =
    Array.isArray(rawServices) && rawServices.length ? rawServices : DEFAULT_SERVICES;

  const rawCountries = t('contact.form.countries', { returnObjects: true });
  const countries =
    Array.isArray(rawCountries) && rawCountries.length ? rawCountries : DEFAULT_COUNTRIES;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.serviceInterest) {
      setShowServiceHint(true);
      return;
    }
    if (!requireAuth()) return;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1600));
      setIsSubmitted(true);
      setShowServiceHint(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(EMPTY_CONTACT_INQUIRY_FORM);
      }, 4000);
    } catch {
      // API hook can surface errors here later
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (name === 'serviceInterest' && value) {
      setShowServiceHint(false);
    }
  };

  const fid = (name) => `${idPrefix}-${name}`;

  const shellClass = compact
    ? 'bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm'
    : 'bg-white rounded-3xl p-8 border border-gray-100 shadow-sm';

  return (
    <div className={`${shellClass} ${className}`.trim()}>
      {isSubmitted ? (
        <motion.div
          className="text-center py-12"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.thank_you_title')}</h3>
          <p className="text-gray-700 mb-6">{t('contact.thank_you_text')}</p>
          <motion.div
            className="w-full bg-gray-200 rounded-full h-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4, ease: 'linear' }}
          >
            <div className="bg-gradient-to-r from-green-600 to-sky-600 h-2 rounded-full" />
          </motion.div>
        </motion.div>
      ) : (
        <>
          <h3
            className={`font-bold text-gray-900 ${compact ? 'text-xl mb-4' : 'text-2xl mb-6'}`}
          >
            {t('contact.form.heading')}
          </h3>

          <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-6'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div {...fieldMotion(isInView, 0.5)}>
                <FormLabel htmlFor={fid('firstName')} required>
                  {t('contact.form.first_name')}
                </FormLabel>
                <input
                  id={fid('firstName')}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  autoComplete="given-name"
                />
              </motion.div>

              <motion.div {...fieldMotion(isInView, 0.55)}>
                <FormLabel htmlFor={fid('lastName')} required>
                  {t('contact.form.last_name')}
                </FormLabel>
                <input
                  id={fid('lastName')}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  autoComplete="family-name"
                />
              </motion.div>
            </div>

            <motion.div {...fieldMotion(isInView, 0.6)}>
              <FormLabel htmlFor={fid('email')} required>
                {t('contact.form.email')}
              </FormLabel>
              <input
                id={fid('email')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                autoComplete="email"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div {...fieldMotion(isInView, 0.65)}>
                <FormLabel htmlFor={fid('phone')} required>
                  {t('contact.form.phone')}
                </FormLabel>
                <input
                  id={fid('phone')}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  autoComplete="tel"
                />
              </motion.div>

              <motion.div {...fieldMotion(isInView, 0.7)}>
                <FormLabel htmlFor={fid('country')} required>
                  {t('contact.form.country')}
                </FormLabel>
                <select
                  id={fid('country')}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">{t('contact.form.please_select')}</option>
                  {countries.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div {...fieldMotion(isInView, 0.75)}>
              <FormLabel htmlFor={fid('serviceInterest')} required>
                {t('contact.form.service_interest')}
              </FormLabel>
              <select
                id={fid('serviceInterest')}
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                required
                className={inputClass}
                aria-describedby={fid('service-hint')}
              >
                <option value="">{t('contact.form.please_select')}</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <p
                id={fid('service-hint')}
                className={`mt-2 text-sm ${showServiceHint ? 'text-red-600' : 'text-gray-500'}`}
              >
                {t('contact.form.service_interest_hint')}
              </p>
            </motion.div>

            <motion.div {...fieldMotion(isInView, 0.8)}>
              <FormLabel htmlFor={fid('description')}>{t('contact.form.description')}</FormLabel>
              <textarea
                id={fid('description')}
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={compact ? 3 : 4}
                className={`${inputClass} resize-none`}
              />
            </motion.div>

            <motion.div
              {...fieldMotion(isInView, 0.85)}
              className={compact ? 'space-y-3' : 'space-y-4'}
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="emailConsent"
                  checked={formData.emailConsent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
                <span
                  className={`text-gray-700 leading-relaxed ${compact ? 'text-xs' : 'text-sm'}`}
                >
                  {t('contact.form.consent')}
                </span>
              </label>

              <div
                className={`text-gray-600 leading-relaxed ${compact ? 'text-xs' : 'text-sm'}`}
              >
                {!compact && (
                  <p className="font-semibold text-gray-800 mb-1">
                    {t('contact.form.privacy_note_title')}
                  </p>
                )}
                <p>
                  {t('contact.form.privacy_note_before_links')}
                  <Link to="/privacy" className="text-green-600 hover:underline font-medium">
                    {t('contact.form.privacy_policy_link')}
                  </Link>
                  {' & '}
                  <Link to="/terms" className="text-green-600 hover:underline font-medium">
                    {t('contact.form.terms_link')}
                  </Link>
                  {t('contact.form.privacy_note_after_links')}
                </p>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-600/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group ${compact ? 'py-3 px-5 text-sm' : 'py-4 px-6'}`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              {...fieldMotion(isInView, 1)}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-6 h-6 mx-auto" />
                </motion.div>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  {t('contact.form.submit')}
                </span>
              )}
            </motion.button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactInquiryForm;
