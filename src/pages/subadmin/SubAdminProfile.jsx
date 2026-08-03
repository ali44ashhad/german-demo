import React from "react";
import { motion } from "framer-motion";
import { useGetCurrentUserQuery } from "../../store/apiSlice";

const SubAdminProfile = () => {
  const { data } = useGetCurrentUserQuery();
  const user = data?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-surface rounded-3xl border border-border shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-6">Profile</h1>
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Name</p>
              <p className="text-lg font-semibold text-foreground">{user?.name || "—"}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Email</p>
              <p className="text-lg font-semibold text-foreground">{user?.email || "—"}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Role</p>
              <p className="text-lg font-semibold capitalize text-foreground">{user?.role || "subadmin"}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Add profile editing, password reset, or notification preferences here as the sub-admin experience evolves.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubAdminProfile;

