import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { VARIANT_STYLES } from "./journeyData";
import ApplicationProgressPreview from "./ApplicationProgressPreview";

const FlowStepCard = ({
  stepNumber,
  title,
  body,
  bullets = [],
  subSteps = [],
  variant = "student",
  icon: Icon,
  action,
  actionLabel,
  showProgressPreview = false,
  progressColleges = [],
  index = 0,
  reducedMotion = false,
}) => {
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.student;

  return (
    <motion.article
      className={`relative rounded-3xl p-6 sm:p-8 border shadow-sm hover:shadow-md transition-shadow ${styles.card}`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
    >
      <div
        className={`absolute -top-4 -left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${styles.badge} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg z-10`}
      >
        {stepNumber}
      </div>

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 pt-2">
        {Icon && (
          <div
            className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${styles.iconBg}`}
          >
            <Icon className="w-7 h-7" aria-hidden="true" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 pr-4">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">{body}</p>

          {bullets.length > 0 && (
            <ul className="space-y-2 mb-4">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {subSteps.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {subSteps.map((sub, i) => (
                <div
                  key={i}
                  className="bg-white/70 rounded-2xl p-4 border border-sky-100"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {sub.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {sub.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {showProgressPreview && progressColleges.length > 0 && (
            <ApplicationProgressPreview colleges={progressColleges} />
          )}

          {action && actionLabel && (
            <Link
              to={action}
              className="inline-flex items-center gap-2 mt-4 min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {actionLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default FlowStepCard;
