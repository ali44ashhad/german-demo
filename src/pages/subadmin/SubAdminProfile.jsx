import React from "react";
import { motion } from "framer-motion";
import { useGetCurrentUserQuery } from "../../store/apiSlice";

const SubAdminProfile = () => {
  const { data } = useGetCurrentUserQuery();
  const user = data?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Name</p>
              <p className="text-lg font-semibold">{user?.name || "—"}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Email</p>
              <p className="text-lg font-semibold">{user?.email || "—"}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">Role</p>
              <p className="text-lg font-semibold capitalize">{user?.role || "subadmin"}</p>
            </div>
            <p className="text-sm text-gray-500">
              Add profile editing, password reset, or notification preferences here as the sub-admin experience evolves.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubAdminProfile;

