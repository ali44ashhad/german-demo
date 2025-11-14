import React from "react";
import { motion } from "framer-motion";
import { useGetCurrentUserQuery } from "../../store/apiSlice";

const SubAdminHome = () => {
  const { data } = useGetCurrentUserQuery();
  const user = data?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl text-white px-10 py-12 shadow-lg"
        >
          <p className="text-sm uppercase tracking-widest text-white/80">Sub-admin Dashboard</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            Welcome back{user?.name ? `, ${user.name}` : ""}!
          </h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Review your consultations, manage students, and track their progress with a focused workspace designed for sub-admins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 text-gray-700"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Check today&apos;s consultations to prepare your meeting notes.</li>
            <li>Update student status to keep the superadmin informed.</li>
            <li>Use the consultations view to follow up promptly with leads.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SubAdminHome;

