import React from "react";
import { motion } from "framer-motion";

const SubAdminStudents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Students</h1>
          <p className="text-gray-600">
            Manage student progress, update notes, and collaborate with the admin team. Replace this placeholder with the student management table once it&apos;s ready.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SubAdminStudents;

