import FlowStepCard from "./FlowStepCard";
import FlowConnector from "./FlowConnector";

const ACTION_PATHS = {
  register: "/register",
  login: "/login",
  profile: "/profile",
  contact: "/contact",
  coaching: "/coaching",
};

const FlowTimeline = ({
  steps = [],
  stepConfigs = [],
  actionLabels = {},
  startIndex = 1,
  reducedMotion = false,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const config = stepConfigs[index] ?? {};
        const stepNumber = startIndex + index;
        const actionKey = config.actionKey;
        const action = actionKey ? ACTION_PATHS[actionKey] : undefined;
        const actionLabel = actionKey ? actionLabels[actionKey] : undefined;

        return (
          <div key={step.id ?? config.id ?? index}>
            <FlowStepCard
              stepNumber={stepNumber}
              title={step.title}
              body={step.body}
              bullets={step.bullets}
              subSteps={step.subSteps}
              variant={config.variant ?? "student"}
              icon={config.icon}
              action={action}
              actionLabel={actionLabel}
              showProgressPreview={config.showProgressPreview}
              progressColleges={step.progressColleges}
              index={index}
              reducedMotion={reducedMotion}
            />
            <FlowConnector
              isLast={index === steps.length - 1}
              reducedMotion={reducedMotion}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FlowTimeline;
