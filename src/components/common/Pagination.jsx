import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const Pagination = ({ pagination, currentPage, onPageChange }) => {
  // Support different pagination field names (totalUsers, totalBookings, etc.)
  const totalItems = pagination?.totalUsers || pagination?.totalBookings || pagination?.totalServices || pagination?.total || 0;
  if (!pagination || totalItems === 0) return null;

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2 bg-white rounded-2xl border border-gray-200 shadow-lg px-3 py-2">
        {/* Page Info */}
        <div className="text-xs text-gray-600 font-medium hidden md:block mr-1">
          <span className="text-gray-500">Page</span>{" "}
          <span className="text-gray-900 font-bold">{pagination.currentPage}</span>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-700 font-semibold">{pagination.totalPages}</span>
        </div>

        {pagination.totalPages > 1 && (
          <>
            <div className="h-6 w-px bg-gray-200 hidden md:block"></div>

            {/* First Page Button */}
            {pagination.totalPages > 5 && currentPage > 3 && (
              <motion.button
                onClick={() => onPageChange(1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
                title="First page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </motion.button>
            )}

            {/* Previous Button */}
            <motion.button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1 || pagination.totalPages === 1}
              whileHover={{ scale: currentPage !== 1 && pagination.totalPages > 1 ? 1.1 : 1 }}
              whileTap={{ scale: currentPage !== 1 && pagination.totalPages > 1 ? 0.9 : 1 }}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
              title="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            {/* Page Numbers */}
            {pagination.totalPages > 1 ? (
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  let pageNum;
                  if (pagination.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= pagination.totalPages - 2) {
                    pageNum = pagination.totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <motion.button
                      key={pageNum}
                      onClick={() => onPageChange(pageNum)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition-all shadow-sm ${
                        currentPage === pageNum
                          ? "bg-gradient-to-r from-green-600 to-sky-600 text-white border-2 border-transparent shadow-md scale-105"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                      }`}
                    >
                      {pageNum}
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <div className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold bg-gradient-to-r from-green-600 to-sky-600 text-white border-2 border-transparent shadow-md">
                1
              </div>
            )}

            {/* Next Button */}
            <motion.button
              onClick={() => onPageChange(Math.min(pagination.totalPages, currentPage + 1))}
              disabled={currentPage === pagination.totalPages || pagination.totalPages === 1}
              whileHover={{ scale: currentPage !== pagination.totalPages && pagination.totalPages > 1 ? 1.1 : 1 }}
              whileTap={{ scale: currentPage !== pagination.totalPages && pagination.totalPages > 1 ? 0.9 : 1 }}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
              title="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>

            {/* Last Page Button */}
            {pagination.totalPages > 5 && currentPage < pagination.totalPages - 2 && (
              <motion.button
                onClick={() => onPageChange(pagination.totalPages)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
                title="Last page"
              >
                <ChevronsRight className="w-4 h-4" />
              </motion.button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;

