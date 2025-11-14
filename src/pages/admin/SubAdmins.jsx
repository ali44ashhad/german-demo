import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Loader2 } from "lucide-react";
import DataTable from "../../components/common/DataTable";
import SearchBar from "../../components/common/SearchBar";
import Pagination from "../../components/common/Pagination";
import {
  useGetAllSubadminsQuery,
  useCreateSubadminMutation,
  useUpdateSubadminMutation,
  useDeleteSubadminMutation,
  useGetAllServicesQuery,
} from "../../store/apiSlice";

const SubAdmins = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingSubadmin, setEditingSubadmin] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    serviceId: "",
  });

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1); // Reset to first page on new search
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data, isLoading } = useGetAllSubadminsQuery({ 
    page: currentPage,
    limit,
    search: debouncedSearch || undefined,
  });
  const { data: servicesData } = useGetAllServicesQuery({ limit: 100 });
  const [createSubadmin, { isLoading: isCreating }] = useCreateSubadminMutation();
  const [updateSubadmin, { isLoading: isUpdating }] = useUpdateSubadminMutation();
  const [deleteSubadmin, { isLoading: isDeleting }] = useDeleteSubadminMutation();

  const subadmins = data?.users || [];
  const services = servicesData?.services || [];
  const pagination = data?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0,
    limit: 10,
  };

  const handleCreate = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      contactNumber: "",
      serviceId: "",
    });
    setEditingSubadmin(null);
    setIsCreateModalOpen(true);
  };

  const handleEdit = (subadmin) => {
    setFormData({
      name: subadmin.name || "",
      email: subadmin.email || "",
      password: "",
      contactNumber: subadmin.contactNumber || "",
      serviceId: subadmin.serviceId?._id || subadmin.serviceId || "",
    });
    setEditingSubadmin(subadmin);
    setIsCreateModalOpen(true);
  };

  const handleDelete = async (subadmin) => {
    if (window.confirm(`Are you sure you want to delete ${subadmin.name}?`)) {
      try {
        await deleteSubadmin(subadmin._id).unwrap();
      } catch (error) {
        alert(error?.data?.message || "Failed to delete subadmin");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSubadmin) {
        await updateSubadmin({
          id: editingSubadmin._id,
          ...formData,
          ...(formData.password === "" && { password: undefined }),
        }).unwrap();
      } else {
        if (!formData.password) {
          alert("Password is required for new subadmins");
          return;
        }
        await createSubadmin(formData).unwrap();
      }
      setIsCreateModalOpen(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        contactNumber: "",
        serviceId: "",
      });
      setEditingSubadmin(null);
    } catch (error) {
      alert(error?.data?.message || "Failed to save subadmin");
    }
  };

  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Contact Number",
      accessor: "contactNumber",
      render: (value) => value || "N/A",
    },
    {
      header: "Service",
      accessor: "serviceId",
      render: (value, row) => {
        if (typeof value === "object" && value?.name) {
          return value.name;
        }
        return "N/A";
      },
    },
    {
      header: "Created At",
      accessor: "createdAt",
      render: (value) => {
        if (!value) return "N/A";
        const date = new Date(value);
        return date.toLocaleDateString();
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl text-white px-10 py-12 shadow-lg"
        >
          <p className="text-sm uppercase tracking-widest text-white/80">Admin Panel</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Sub-admins Management</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Manage your sub-admins, assign services, and control access permissions.
          </p>
        </motion.div>

        <div className="flex justify-between items-center gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name or email..."
          />
          <motion.button
            onClick={handleCreate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5" />
            Create Sub-admin
          </motion.button>
        </div>

        <DataTable
          columns={columns}
          data={subadmins}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading || isDeleting}
        />

        <Pagination
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        {/* Create/Edit Modal */}
        <AnimatePresence>
          {isCreateModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsCreateModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingSubadmin ? "Edit Sub-admin" : "Create Sub-admin"}
                  </h2>
                  <button
                    onClick={() => setIsCreateModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password {!editingSubadmin && "*"}
                    </label>
                    <input
                      type="password"
                      required={!editingSubadmin}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={editingSubadmin ? "Leave blank to keep current password" : ""}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service *
                    </label>
                    <select
                      required
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service._id} value={service._id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsCreateModalOpen(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isCreating || isUpdating}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {(isCreating || isUpdating) && (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      )}
                      {editingSubadmin ? "Update" : "Create"}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SubAdmins;

