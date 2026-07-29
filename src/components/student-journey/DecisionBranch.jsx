import { motion as Motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import FlowStepCard from "./FlowStepCard";
import FlowConnector from "./FlowConnector";
import { PHASE2_YES_STEP_CONFIG } from "./journeyData";

const DecisionBranch = ({
  decision = {},
  noOutcome = {},
  yesSteps = [],
  yesStepConfigs = PHASE2_YES_STEP_CONFIG,
  actionLabels = {},
  yesStartIndex = 12,
  reducedMotion = false,
}) => {
  const yesLabel = decision.yesLabel ?? "YES";
  const noLabel = decision.noLabel ?? "NO";

  return (
    <div className="max-w-5xl mx-auto">
      <Motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-3 p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-200">
          <ThumbsUp className="w-8 h-8 text-emerald-600" />
          <span className="text-xl font-bold text-emerald-800">{yesLabel}</span>
        </div>
        <div className="flex items-center justify-center gap-3 p-6 rounded-3xl bg-red-50 border-2 border-red-200">
          <ThumbsDown className="w-8 h-8 text-red-600" />
          <span className="text-xl font-bold text-red-800">{noLabel}</span>
        </div>
      </Motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* YES: left column on desktop; below NO on mobile */}
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-4 text-center lg:text-left">
            {yesLabel}
          </p>
          <div className="space-y-0">
            {yesSteps.map((step, index) => {
              const config = yesStepConfigs[index] ?? {};
              const actionKey = config.actionKey;
              const actionPaths = {
                register: "/register",
                login: "/login",
                profile: "/profile",
                contact: "/contact",
                coaching: "/coaching",
              };
              const action = actionKey ? actionPaths[actionKey] : undefined;
              const actionLabel = actionKey ? actionLabels[actionKey] : undefined;

              return (
                <div key={step.id ?? index}>
                  <FlowStepCard
                    stepNumber={yesStartIndex + index}
                    title={step.title}
                    body={step.body}
                    bullets={step.bullets}
                    variant={config.variant ?? "success"}
                    icon={config.icon}
                    action={action}
                    actionLabel={actionLabel}
                    showProgressPreview={config.showProgressPreview}
                    progressColleges={step.progressColleges}
                    index={index}
                    reducedMotion={reducedMotion}
                  />
                  {index < yesSteps.length - 1 && (
                    <FlowConnector reducedMotion={reducedMotion} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* NO: right column on desktop; above YES on mobile */}
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-4 text-center lg:text-left">
            {noLabel}
          </p>
          <FlowStepCard
            stepNumber="—"
            title={noOutcome.title}
            body={noOutcome.body}
            variant="warning"
            icon={ThumbsDown}
            index={0}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>
    </div>
  );
};

export default DecisionBranch;
