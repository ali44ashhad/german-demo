import { useRef, useEffect, useState } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Route, Sparkles, ArrowRight } from "lucide-react";
import JourneyLegend from "../components/student-journey/JourneyLegend";
import FlowTimeline from "../components/student-journey/FlowTimeline";
import DecisionBranch from "../components/student-journey/DecisionBranch";
import FlowConnector from "../components/student-journey/FlowConnector";
import {
  PHASE1_STEP_CONFIG,
  PHASE2_PRE_BRANCH_CONFIG,
} from "../components/student-journey/journeyData";

const normalizeArray = (value, fallback = []) => {
  if (Array.isArray(value)) return value;
  return fallback;
};

const StudentJourney = () => {
  const { t } = useTranslation("common");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const phase1Steps = normalizeArray(
    t("studentJourney.phase1.steps", { returnObjects: true }),
    []
  );
  const phase2PreSteps = normalizeArray(
    t("studentJourney.phase2.preSteps", { returnObjects: true }),
    []
  );
  const phase2YesSteps = normalizeArray(
    t("studentJourney.phase2.yesSteps", { returnObjects: true }),
    []
  );

  const legendLabels = {
    initialConsultation: t("studentJourney.legend.initialConsultation"),
    yourDecision: t("studentJourney.legend.yourDecision"),
    afterDecision: t("studentJourney.legend.afterDecision"),
  };

  const actionLabels = {
    register: t("studentJourney.actions.register"),
    login: t("studentJourney.actions.login"),
    profile: t("studentJourney.actions.profile"),
    contact: t("studentJourney.actions.contact"),
    coaching: t("studentJourney.actions.coaching"),
  };

  const phase2Decision = {
    yesLabel: t("studentJourney.phase2.decision.yesLabel"),
    noLabel: t("studentJourney.phase2.decision.noLabel"),
  };

  const phase2NoOutcome = {
    title: t("studentJourney.phase2.noOutcome.title"),
    body: t("studentJourney.phase2.noOutcome.body"),
  };

  const yesStartIndex = phase1Steps.length + phase2PreSteps.length + 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative py-20 sm:py-28 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/60 via-cyan-600/50 to-emerald-600/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : reducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <span className="text-white font-semibold">
              {t("studentJourney.hero.badge")}
            </span>
          </Motion.div>

          <Motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={reducedMotion ? false : { opacity: 0, y: 40 }}
            animate={
              isHeroInView
                ? { opacity: 1, y: 0 }
                : reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7 }}
          >
            {t("studentJourney.hero.title")}{" "}
            <span className="bg-gradient-to-r from-green-300 to-sky-300 bg-clip-text text-transparent">
              {t("studentJourney.hero.titleHighlight")}
            </span>
          </Motion.h1>

          <Motion.p
            className="text-lg sm:text-xl text-sky-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={
              isHeroInView
                ? { opacity: 1, y: 0 }
                : reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
            }
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {t("studentJourney.hero.subtitle")}
          </Motion.p>

          <Motion.nav
            className="flex flex-wrap justify-center gap-3"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={
              isHeroInView
                ? { opacity: 1, y: 0 }
                : reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
            }
            transition={{ duration: 0.6, delay: 0.25 }}
            aria-label="Journey sections"
          >
            <a
              href="#phase1"
              className="min-h-[44px] inline-flex items-center px-5 py-2.5 rounded-xl bg-white/90 text-sky-800 font-semibold text-sm hover:bg-white transition-colors"
            >
              {t("studentJourney.nav.phase1")}
            </a>
            <a
              href="#phase2"
              className="min-h-[44px] inline-flex items-center px-5 py-2.5 rounded-xl bg-white/20 text-white font-semibold text-sm border border-white/40 hover:bg-white/30 transition-colors"
            >
              {t("studentJourney.nav.phase2")}
            </a>
          </Motion.nav>
        </div>
      </section>

      {/* Phase 1: Before Consultation */}
      <section id="phase1" className="py-16 sm:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-3">
              <Route className="w-5 h-5" />
              {t("studentJourney.phase1.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("studentJourney.phase1.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("studentJourney.phase1.description")}
            </p>
          </div>
          <JourneyLegend labels={legendLabels} />
          <FlowTimeline
            steps={phase1Steps}
            stepConfigs={PHASE1_STEP_CONFIG}
            actionLabels={actionLabels}
            startIndex={1}
            reducedMotion={reducedMotion}
          />
        </div>
      </section>

      {/* Phase 2 */}
      <section
        id="phase2"
        className="py-16 sm:py-20 scroll-mt-24 bg-white/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("studentJourney.phase2.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("studentJourney.phase2.description")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-4">
            <FlowConnector reducedMotion={reducedMotion} />
          </div>

          <FlowTimeline
            steps={phase2PreSteps}
            stepConfigs={PHASE2_PRE_BRANCH_CONFIG}
            actionLabels={actionLabels}
            startIndex={phase1Steps.length + 1}
            reducedMotion={reducedMotion}
          />

          <div className="mt-12">
            <DecisionBranch
              decision={phase2Decision}
              noOutcome={phase2NoOutcome}
              yesSteps={phase2YesSteps}
              actionLabels={actionLabels}
              yesStartIndex={yesStartIndex}
              reducedMotion={reducedMotion}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion.div
            className="bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("studentJourney.cta.title")}
            </h2>
            <p className="text-green-50 mb-8 max-w-2xl mx-auto">
              {t("studentJourney.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-xl bg-white text-green-700 font-bold hover:bg-green-50 transition-colors"
              >
                {t("studentJourney.cta.register")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-xl border-2 border-white/80 text-white font-bold hover:bg-white/10 transition-colors"
              >
                {t("studentJourney.cta.login")}
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentJourney;
