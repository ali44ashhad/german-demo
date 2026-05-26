import { motion } from "framer-motion";

const TRACK_HEIGHT = 48;
const DOT_SIZE = 14;
const DOT_TRAVEL = TRACK_HEIGHT - DOT_SIZE;

const FlowConnector = ({ isLast = false, reducedMotion = false }) => {
  if (isLast) return null;

  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <div
        className="relative mx-auto"
        style={{ width: DOT_SIZE, height: TRACK_HEIGHT }}
      >
        <div
          className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-300 to-emerald-400 opacity-60"
        />
        {!reducedMotion && (
          <motion.div
            className="absolute left-1/2 top-0 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-500 to-sky-500 shadow-md"
            animate={{ y: [0, DOT_TRAVEL, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {reducedMotion && (
          <div
            className="absolute left-1/2 top-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-green-500 to-sky-500 shadow-md"
          />
        )}
      </div>
    </div>
  );
};

export default FlowConnector;
