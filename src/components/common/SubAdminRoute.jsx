import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useGetCurrentUserQuery } from "../../store/apiSlice";

const SUBADMIN_ROLES = new Set(["subadmin"]);

const getStoredUser = () => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn("Unable to parse stored user", error);
    return null;
  }
};

const SubAdminRoute = ({ children }) => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useGetCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const fallbackUser = useMemo(() => getStoredUser(), []);
  const user = data?.user || fallbackUser;

  if (isLoading || isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-green-50">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!SUBADMIN_ROLES.has(user.role)) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default SubAdminRoute;

