const LEGEND_ITEMS = [
  {
    key: "initialConsultation",
    className: "bg-sky-100 border-sky-300 dark:bg-sky-900/70 dark:border-sky-600",
  },
  {
    key: "yourDecision",
    className: "bg-amber-100 border-amber-300 dark:bg-amber-900/70 dark:border-amber-600",
  },
  {
    key: "afterDecision",
    className: "bg-emerald-100 border-emerald-300 dark:bg-emerald-900/70 dark:border-emerald-600",
  },
];

const JourneyLegend = ({ labels = {} }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {LEGEND_ITEMS.map(({ key, className }) => (
        <div
          key={key}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm dark:shadow-black/30 text-sm"
        >
          <span className={`w-4 h-4 rounded-full border-2 ${className}`} />
          <span className="text-muted-foreground font-medium">
            {labels[key] ?? key}
          </span>
        </div>
      ))}
    </div>
  );
};

export default JourneyLegend;
