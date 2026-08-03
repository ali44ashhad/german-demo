import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react";

const DataTableWithDetails = ({
  columns = [],
  data = [],
  onEdit,
  onDelete,
  renderDetails,
  isLoading = false,
}) => {
  const [expandedRows, setExpandedRows] = useState(new Set());

  const toggleRow = (rowId) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <div className="bg-surface rounded-3xl border border-border shadow-lg dark:shadow-black/30 p-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-surface rounded-3xl border border-border shadow-lg dark:shadow-black/30 p-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-3xl border border-border shadow-lg dark:shadow-black/30 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-green-50 to-sky-50 dark:from-sky-950 dark:to-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-sky-100 uppercase tracking-wider w-12"></th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-sky-100 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-sky-100 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-surface divide-y divide-border">
            {data.map((row, rowIndex) => {
              const rowId = row._id || row.id || rowIndex;
              const isExpanded = expandedRows.has(rowId);
              return (
                <React.Fragment key={rowId}>
                  <motion.tr
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: rowIndex * 0.02 }}
                    className={`hover:bg-muted transition-colors ${
                      rowIndex % 2 === 1 ? "bg-sky-50/40 dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderDetails && (
                        <motion.button
                          onClick={() => toggleRow(rowId)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
                          aria-label={isExpanded ? "Collapse details" : "Expand details"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </motion.button>
                      )}
                    </td>
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground"
                      >
                        {column.render
                          ? column.render(row[column.accessor], row)
                          : row[column.accessor]}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        {onEdit && (
                          <motion.button
                            onClick={() => onEdit(row)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-sky-100 text-sky-600 hover:bg-sky-200 dark:bg-sky-900/50 dark:text-sky-300 dark:hover:bg-sky-800/60 transition-colors"
                            aria-label="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </motion.button>
                        )}
                        {onDelete && (
                          <motion.button
                            onClick={() => onDelete(row)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
                            aria-label="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                  {renderDetails && isExpanded && (
                    <tr>
                      <td colSpan={columns.length + 2} className="px-6 py-4 bg-muted">
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-border">
                              {renderDetails(row)}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableWithDetails;
