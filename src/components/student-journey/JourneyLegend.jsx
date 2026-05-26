const LEGEND_ITEMS = [
  { key: "student", className: "bg-sky-100 border-sky-300" },
  { key: "platform", className: "bg-emerald-100 border-emerald-300" },
  { key: "decision", className: "bg-gray-100 border-gray-300" },
  { key: "warning", className: "bg-orange-100 border-orange-300" },
];

const JourneyLegend = ({ labels = {} }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {LEGEND_ITEMS.map(({ key, className }) => (
        <div
          key={key}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm"
        >
          <span className={`w-4 h-4 rounded-full border-2 ${className}`} />
          <span className="text-gray-700 font-medium">
            {labels[key] ?? key}
          </span>
        </div>
      ))}
    </div>
  );
};

export default JourneyLegend;
