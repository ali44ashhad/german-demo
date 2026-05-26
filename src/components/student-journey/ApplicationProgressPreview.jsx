import { PROGRESS_PREVIEW_COLORS } from "./journeyData";

const ApplicationProgressPreview = ({ colleges = [] }) => {
  return (
    <div className="mt-6 space-y-5" role="img" aria-label="Application progress preview">
      {colleges.map((college, index) => {
        const colorClass =
          PROGRESS_PREVIEW_COLORS[index % PROGRESS_PREVIEW_COLORS.length];
        const percent = college.percent ?? 0;

        const pinRadius = 8;

        return (
          <div key={college.name ?? index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-800">
                {college.name}
              </span>
              <span className="text-sm font-bold text-gray-600">{percent}%</span>
            </div>
            <div className="relative py-2">
              <div className="relative h-3.5 bg-gray-200 rounded-full">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${colorClass} transition-all duration-700`}
                  style={{ width: `${percent}%` }}
                />
                <div
                  className="absolute top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-gray-300 shadow-sm pointer-events-none"
                  style={{
                    left: `clamp(${pinRadius}px, ${percent}%, calc(100% - ${pinRadius}px))`,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationProgressPreview;
