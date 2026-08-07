/**
 * Home page process section: vertical accordion for the 4-step Eduberater roadmap.
 * Step copy comes from i18n (`process.steps`); expand/collapse is local UI state only.
 */
import { useRef, useState } from 'react';
import { motion as Motion, useInView, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Search,
  FileText,
  Shield,
  CheckCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STEP_ICONS = [UserCheck, Search, FileText, Shield];

/** Brand-aligned accent colors per step (reference layout, Eduberater palette). */
const STEP_BG_CLASSES = [
  'bg-teal-500',
  'bg-emerald-700',
  'bg-amber-400',
  'bg-sky-600',
];

const FALLBACK_STEPS = [
  {
    step: 1,
    title: 'Profile Analysis & Strategy',
    description:
      'Comprehensive assessment of your academic background, goals, and career aspirations to create your personalized Eduberater roadmap.',
    features: ['Academic Evaluation', 'Career Goal Mapping', 'ROI Analysis', 'Timeline Planning'],
  },
  {
    step: 2,
    title: 'University & Program Finalization',
    description:
      'Strategic selection from TU9, U15, and Applied Sciences universities based on your profile and German job market trends.',
    features: ['TU9 University Matching', 'Program Research', 'Admission Probability', 'Backup Options'],
  },
  {
    step: 3,
    title: 'Application & Documentation',
    description:
      'Perfect your applications with German-style SOPs, LORs, and handle Uni-Assist VPD processing with expert guidance.',
    features: ['SOP Writing', 'LOR Preparation', 'VPD Processing', 'Document Verification'],
  },
  {
    step: 4,
    title: 'Visa & Pre-Departure',
    description:
      'Complete visa application support, blocked account setup, and cultural preparation for your educational journey.',
    features: ['Visa Documentation', 'Blocked Account', 'Health Insurance', 'Cultural Briefing'],
  },
];

function parseStepsFromI18n(rawSteps, fallback) {
  if (!rawSteps) return fallback;
  if (Array.isArray(rawSteps) && rawSteps.length) return rawSteps;
  if (typeof rawSteps === 'object' && Object.keys(rawSteps).length) {
    const keys = Object.keys(rawSteps).sort((a, b) => {
      const na = Number(a);
      const nb = Number(b);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
      return String(a).localeCompare(String(b));
    });
    return keys.map((k) => rawSteps[k]);
  }
  return fallback;
}

/**
 * Single accordion row for one process step.
 */
function ProcessStepAccordionItem({
  stepData,
  index,
  isOpen,
  onToggle,
  stepLabel,
  showLessLabel,
  bgClass,
}) {
  const stepNumber = stepData.step ?? index + 1;
  const StepIcon = STEP_ICONS[index] ?? UserCheck;
  const features = Array.isArray(stepData.features) ? stepData.features : [];
  const panelId = `process-step-panel-${stepNumber}`;
  const triggerId = `process-step-trigger-${stepNumber}`;

  return (
    <div className={`${bgClass} rounded-[2rem] md:rounded-[2.5rem] text-white overflow-hidden shadow-md`}>
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 py-4 md:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <span className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <StepIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" strokeWidth={1.75} aria-hidden />
          <span className="font-semibold text-sm sm:text-base whitespace-nowrap">{stepLabel}</span>
        </span>

        <span className="hidden sm:block w-px h-8 bg-white/50 shrink-0" aria-hidden />

        <span className="flex-1 font-medium text-base sm:text-lg md:text-xl leading-snug min-w-0">
          {stepData.title}
        </span>

        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <Motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 pt-0">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-white/25 pt-6 md:pt-8">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-4 shrink-0">
                  <StepIcon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} aria-hidden />
                  <span className="font-semibold text-sm md:text-base">{stepLabel}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-white/90 mb-1">{stepLabel}</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4">
                    {stepData.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-5 max-w-3xl">
                    {stepData.description}
                  </p>

                  {features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm sm:text-base text-white/95">
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={onToggle}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/95 hover:text-white underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded"
                    >
                      {showLessLabel}
                      <ChevronUp className="w-4 h-4" aria-hidden />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });
  const { t } = useTranslation('common');
  const [openStep, setOpenStep] = useState(null);

  const rawSteps = t('process.steps', { returnObjects: true });
  const steps = parseStepsFromI18n(rawSteps, FALLBACK_STEPS).map((s, idx) => ({
    step: s.step ?? idx + 1,
    title: s.title ?? `Step ${idx + 1}`,
    description: s.description ?? '',
    features: Array.isArray(s.features) ? s.features : [],
  }));

  const toggleStep = (stepNumber) => {
    setOpenStep((current) => (current === stepNumber ? null : stepNumber));
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/20 dark:bg-emerald-900/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <Motion.div
            className="inline-flex items-center gap-2 bg-green-50/50 dark:bg-muted border border-green-100 dark:border-border rounded-full px-5 py-2.5 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" aria-hidden />
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm sm:text-base">
              {t('process.badge')}
            </span>
          </Motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-foreground uppercase tracking-tight leading-tight mb-4">
            {t('process.titlePrefix')}
            <span className="block mt-1">{t('process.titleMain')}</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('process.accordionSub')}
          </p>
        </Motion.div>

        <Motion.div
          className="flex flex-col gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {steps.map((step, index) => {
            const stepNumber = step.step ?? index + 1;
            const bgClass = STEP_BG_CLASSES[index] ?? 'bg-green-600';

            return (
              <ProcessStepAccordionItem
                key={stepNumber}
                stepData={step}
                index={index}
                isOpen={openStep === stepNumber}
                onToggle={() => toggleStep(stepNumber)}
                stepLabel={t('process.stepLabel', { step: stepNumber })}
                showLessLabel={t('process.showLess')}
                bgClass={bgClass}
              />
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
};

export default Process;
