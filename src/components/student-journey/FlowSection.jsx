import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import JourneyLegend from "./JourneyLegend";
import FlowTimeline from "./FlowTimeline";
import DecisionBranch from "./DecisionBranch";
import FlowConnector from "./FlowConnector";
import {
  PHASE1_STEP_CONFIG,
  PHASE2_PRE_BRANCH_CONFIG,
  PHASE2_YES_STEP_CONFIG,
} from "./journeyData";

const FlowSection = ({
  id,
  title,
  description,
  legendLabels = {},
  phase1Steps = [],
  phase2PreSteps = [],
  phase2Decision = {},
  phase2NoOutcome = {},
  phase2YesSteps = [],
  actionLabels = {},
  showDecisionBranch = false,
  reducedMotion = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id={id} ref={ref} className="py-16 sm:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <JourneyLegend labels={legendLabels} />

        {phase1Steps.length > 0 && (
          <FlowTimeline
            steps={phase1Steps}
            stepConfigs={PHASE1_STEP_CONFIG}
            actionLabels={actionLabels}
            startIndex={1}
            reducedMotion={reducedMotion}
          />
        )}

        {phase2PreSteps.length > 0 && (
          <>
            {phase1Steps.length > 0 && (
              <div className="max-w-3xl mx-auto py-4">
                <FlowConnector reducedMotion={reducedMotion} />
              </div>
            )}
            <FlowTimeline
              steps={phase2PreSteps}
              stepConfigs={PHASE2_PRE_BRANCH_CONFIG}
              actionLabels={actionLabels}
              startIndex={phase1Steps.length > 0 ? phase1Steps.length + 1 : 1}
              reducedMotion={reducedMotion}
            />
          </>
        )}

        {showDecisionBranch && (
          <div className="mt-8">
            <DecisionBranch
              decision={phase2Decision}
              noOutcome={phase2NoOutcome}
              yesSteps={phase2YesSteps}
              yesStepConfigs={PHASE2_YES_STEP_CONFIG}
              actionLabels={actionLabels}
              reducedMotion={reducedMotion}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FlowSection;
