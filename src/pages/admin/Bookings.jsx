import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Loader2, Calendar, Clock, DollarSign, User, UserCog, Package } from "lucide-react";
import DataTableWithDetails from "../../components/common/DataTableWithDetails";
import SearchBar from "../../components/common/SearchBar";
import Pagination from "../../components/common/Pagination";
import {
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useGetAllUsersQuery,
  useGetAllServicesQuery,
} from "../../store/apiSlice";

const normalizeTimeString = (timeStr = "") => {
  let clean = timeStr.trim();

  if (clean.includes("T")) {
    const [, timePart = ""] = clean.split("T");
    clean = timePart;
  }

  clean = clean.replace("Z", "").trim();

  if (clean.includes(" ")) {
    clean = clean.split(" ")[0];
  }

  if (!clean) {
    return "00:00:00";
  }

  if (clean.length === 5) {
    return `${clean}:00`;
  }

  if (clean.length >= 8) {
    return clean.slice(0, 8);
  }

  return clean;
};

const buildISODateTime = (dateStr, timeStr) => {
  if (!dateStr) return "";

  const normalizedTime = normalizeTimeString(timeStr);
  return `${dateStr}T${normalizedTime}Z`;
};

const extractTimeForInput = (value) => {
  if (!value) return "";

  if (value.includes("T")) {
    const [, timePart = ""] = value.split("T");
    return timePart.replace("Z", "").slice(0, 5);
  }

  return value.slice(0, 5);
};

const formatTimeRange = (start, end) => {
  const toDisplay = (iso) => {
    if (!iso) return "";
    if (iso.includes("T")) {
      const [, timePart = ""] = iso.split("T");
      const [hours = "00", minutes = "00"] = timePart.replace("Z", "").split(":");
      const hourNum = parseInt(hours, 10);
      if (Number.isNaN(hourNum)) return `${hours}:${minutes}`;
      const period = hourNum >= 12 ? "PM" : "AM";
      const hour12 = hourNum % 12 || 12;
      return `${hour12}:${minutes} ${period}`;
    }
    return iso;
  };

  const startDisplay = toDisplay(start);
  const endDisplay = toDisplay(end);
  if (!startDisplay && !endDisplay) return "N/A";
  return `${startDisplay}${endDisplay ? ` - ${endDisplay}` : ""}`;
};

const Bookings = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [formData, setFormData] = useState({
    userId: "",
    subAdminId: "",
    serviceId: "",
    date: "",
    timeslot: { start: "", end: "" },
    amount: "",
    paymentStatus: "pending",
    bookingStatus: "scheduled",
  });

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data, isLoading } = useGetAllBookingsQuery({
    page: currentPage,
    limit,
    search: debouncedSearch || undefined,
  });
  const { data: usersData } = useGetAllUsersQuery({ limit: 1000 });
  const { data: subadminsData } = useGetAllUsersQuery({ limit: 1000, role: "subadmin" });
  const { data: servicesData } = useGetAllServicesQuery({ limit: 1000 });
  const [createBooking, { isLoading: isCreating }] = useCreateBookingMutation();
  const [updateBooking, { isLoading: isUpdating }] = useUpdateBookingMutation();
  const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();

  const bookings = data?.bookings || [];
  const users = usersData?.users || [];
  const subadmins = subadminsData?.users || [];
  const services = servicesData?.services || [];
  const pagination = data?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalBookings: 0,
    limit: 10,
  };

  const handleCreate = () => {
    setFormData({
      userId: "",
      subAdminId: "",
      serviceId: "",
      date: "",
      timeslot: { start: "", end: "" },
      amount: "",
      paymentStatus: "pending",
      bookingStatus: "scheduled",
    });
    setEditingBooking(null);
    setIsCreateModalOpen(true);
  };

  const handleEdit = (booking) => {
    setFormData({
      userId: booking.userId?._id || booking.userId || "",
      subAdminId: booking.subAdminId?._id || booking.subAdminId || "",
      serviceId: booking.serviceId?._id || booking.serviceId || "",
      date: booking.date ? new Date(booking.date).toISOString().split("T")[0] : "",
      timeslot: {
        start: extractTimeForInput(booking.timeslot?.start),
        end: extractTimeForInput(booking.timeslot?.end),
      },
      amount: booking.amount || "",
      paymentStatus: booking.paymentStatus || "pending",
      bookingStatus: booking.bookingStatus || "scheduled",
    });
    setEditingBooking(booking);
    setIsCreateModalOpen(true);
  };

  const handleDelete = async (booking) => {
    if (window.confirm(`Are you sure you want to delete this booking?`)) {
      try {
        await deleteBooking(booking._id).unwrap();
      } catch (error) {
        alert(error?.data?.message || "Failed to delete booking");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const amount = parseFloat(formData.amount);
      if (Number.isNaN(amount)) {
        throw new Error("Amount must be a valid number");
      }

      const dateISO = buildISODateTime(formData.date, formData.timeslot.start);
      const timeslot = {
        start: buildISODateTime(formData.date, formData.timeslot.start),
        end: buildISODateTime(formData.date, formData.timeslot.end),
      };

      const bookingData = {
        userId: formData.userId,
        subAdminId: formData.subAdminId,
        serviceId: formData.serviceId,
        date: dateISO,
        timeslot,
        amount,
        paymentStatus: formData.paymentStatus,
        bookingStatus: formData.bookingStatus,
      };
      
      if (editingBooking) {
        await updateBooking({ id: editingBooking._id, ...bookingData }).unwrap();
      } else {
        await createBooking(bookingData).unwrap();
      }
      setIsCreateModalOpen(false);
      setFormData({
        userId: "",
        subAdminId: "",
        serviceId: "",
        date: "",
        timeslot: { start: "", end: "" },
        amount: "",
        paymentStatus: "pending",
        bookingStatus: "scheduled",
      });
      setEditingBooking(null);
    } catch (error) {
      alert(error?.data?.message || "Failed to save booking");
    }
  };

  const renderBookingDetails = (booking) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">User</p>
              <p className="text-sm font-semibold text-gray-900">
                {booking.userId?.name || "N/A"}
              </p>
              <p className="text-xs text-gray-600">{booking.userId?.email || ""}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <UserCog className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Sub-admin</p>
              <p className="text-sm font-semibold text-gray-900">
                {booking.subAdminId?.name || "N/A"}
              </p>
              <p className="text-xs text-gray-600">{booking.subAdminId?.email || ""}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Service</p>
              <p className="text-sm font-semibold text-gray-900">
                {booking.serviceId?.name || "N/A"}
              </p>
              {booking.serviceId?.description && (
                <p className="text-xs text-gray-600 mt-1">{booking.serviceId.description}</p>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Date & Time</p>
              <p className="text-sm font-semibold text-gray-900">
                {booking.date ? new Date(booking.date).toLocaleDateString() : "N/A"}
              </p>
      {booking.timeslot && (
        <p className="text-xs text-gray-600">
          {formatTimeRange(booking.timeslot.start, booking.timeslot.end)}
        </p>
      )}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Amount</p>
              <p className="text-sm font-semibold text-gray-900">
                ${booking.amount?.toFixed(2) || "0.00"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 mt-0.5"></div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Payment Status</p>
              <span
                className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${
                  booking.paymentStatus === "success"
                    ? "bg-green-100 text-green-700"
                    : booking.paymentStatus === "failed"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {booking.paymentStatus?.toUpperCase() || "PENDING"}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 mt-0.5"></div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Booking Status</p>
              <span
                className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${
                  booking.bookingStatus === "completed"
                    ? "bg-green-100 text-green-700"
                    : booking.bookingStatus === "cancelled"
                    ? "bg-red-100 text-red-700"
                    : booking.bookingStatus === "no-show"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {booking.bookingStatus?.toUpperCase() || "SCHEDULED"}
              </span>
            </div>
          </div>
          {booking.zoomLink && (
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5"></div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Zoom Link</p>
                <a
                  href={booking.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Join Meeting
                </a>
              </div>
            </div>
          )}
          {booking.zoomRecordingLink && (
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5"></div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Recording</p>
                <a
                  href={booking.zoomRecordingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  View Recording
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const columns = [
    {
      header: "User",
      accessor: "userId",
      render: (value) => {
        if (typeof value === "object" && value?.name) {
          return value.name;
        }
        return "N/A";
      },
    },
    {
      header: "Sub-admin",
      accessor: "subAdminId",
      render: (value) => {
        if (typeof value === "object" && value?.name) {
          return value.name;
        }
        return "N/A";
      },
    },
    {
      header: "Service",
      accessor: "serviceId",
      render: (value) => {
        if (typeof value === "object" && value?.name) {
          return value.name;
        }
        return "N/A";
      },
    },
    {
      header: "Date",
      accessor: "date",
      render: (value) => {
        if (!value) return "N/A";
        return new Date(value).toLocaleDateString();
      },
    },
    {
      header: "Time",
      accessor: "timeslot",
      render: (value) => formatTimeRange(value?.start, value?.end),
    },
    {
      header: "Amount",
      accessor: "amount",
      render: (value) => `$${value?.toFixed(2) || "0.00"}`,
    },
    {
      header: "Payment Status",
      accessor: "paymentStatus",
      render: (value) => {
        const status = value || "pending";
        return (
          <span
            className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${
              status === "success"
                ? "bg-green-100 text-green-700"
                : status === "failed"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {status.toUpperCase()}
          </span>
        );
      },
    },
    {
      header: "Booking Status",
      accessor: "bookingStatus",
      render: (value) => {
        const status = value || "scheduled";
        return (
          <span
            className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${
              status === "completed"
                ? "bg-green-100 text-green-700"
                : status === "cancelled"
                ? "bg-red-100 text-red-700"
                : status === "no-show"
                ? "bg-orange-100 text-orange-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {status.toUpperCase()}
          </span>
        );
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
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Bookings Management</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Manage all bookings, view details, track payments, and monitor consultation sessions.
          </p>
        </motion.div>

        <div className="flex justify-between items-center gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by user name, email, or service..."
          />
          <motion.button
            onClick={handleCreate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5" />
            Create Booking
          </motion.button>
        </div>

        <DataTableWithDetails
          columns={columns}
          data={bookings}
          onEdit={handleEdit}
          onDelete={handleDelete}
          renderDetails={renderBookingDetails}
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
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingBooking ? "Edit Booking" : "Create Booking"}
                  </h2>
                  <button
                    onClick={() => setIsCreateModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        User *
                      </label>
                      <select
                        required
                        value={formData.userId}
                        onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a user</option>
                        {users
                          .filter((u) => u.role === "user")
                          .map((user) => (
                            <option key={user._id} value={user._id}>
                              {user.name} ({user.email})
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sub-admin *
                      </label>
                      <select
                        required
                        value={formData.subAdminId}
                        onChange={(e) => setFormData({ ...formData, subAdminId: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a sub-admin</option>
                        {subadmins.map((subadmin) => (
                          <option key={subadmin._id} value={subadmin._id}>
                            {subadmin.name} ({subadmin.email})
                          </option>
                        ))}
                      </select>
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.timeslot.start}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            timeslot: { ...formData.timeslot, start: e.target.value },
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.timeslot.end}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            timeslot: { ...formData.timeslot, end: e.target.value },
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Status *
                      </label>
                      <select
                        required
                        value={formData.paymentStatus}
                        onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="pending">Pending</option>
                        <option value="success">Success</option>
                        <option value="failed">Failed</option>
                        <option value="refunded">Refunded</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Booking Status *
                      </label>
                      <select
                        required
                        value={formData.bookingStatus}
                        onChange={(e) => setFormData({ ...formData, bookingStatus: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="no-show">No Show</option>
                      </select>
                    </div>
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
                      {editingBooking ? "Update" : "Create"}
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

export default Bookings;

