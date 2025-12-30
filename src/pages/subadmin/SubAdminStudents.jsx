import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Loader2,
  Search,
  X,
  Calendar,
  Clock,
  Package,
  Eye,
  FileText,
} from "lucide-react";
import {
  useGetAllBookingsQuery,
  useGetCurrentUserQuery,
} from "../../store/apiSlice";

const formatDate = (isoString) => {
  if (!isoString) return "Date TBD";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "Date TBD";
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
};

const formatTimeRange = (booking) => {
  const start = booking?.timeslot?.start || booking?.date;
  const end = booking?.timeslot?.end;
  const startLabel = formatTime(start);
  const endLabel = formatTime(end);

  if (startLabel && endLabel) return `${startLabel} - ${endLabel}`;
  if (startLabel) return startLabel;
  return "Time TBD";
};

const statusBadgeClass = (status) => {
  const normalized = (status || "scheduled").toLowerCase();
  switch (normalized) {
    case "completed":
      return "bg-green-100 text-green-700";
    case "cancelled":
      return "bg-red-100 text-red-700";
    case "no-show":
      return "bg-orange-100 text-orange-700";
    case "rescheduled":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-blue-100 text-blue-700";
  }
};

// Student Card Component
const StudentCard = ({ student, onViewDetails, onViewBookings }) => {
  const profileImage = student?.profileImage;
  const name = student?.name || "Unknown Student";
  const email = student?.email || "No email";
  const contactNumber = student?.contactNumber || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col rounded-2xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md bg-white"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-sky-400 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-sky-600" />
            <span className="truncate">{email}</span>
          </div>
          {contactNumber && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-sky-600" />
              <span>{contactNumber}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onViewDetails(student)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow transition-shadow hover:shadow-lg"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={() => onViewBookings(student)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
          >
            <FileText className="w-4 h-4" />
            View Bookings
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Student Bookings Modal
const StudentBookingsModal = ({
  isOpen,
  onClose,
  student,
  bookings,
  subAdminId,
}) => {
  if (!isOpen) return null;

  const studentBookings = useMemo(() => {
    if (!bookings || !student?._id) return [];
    return bookings.filter(
      (booking) =>
        String(booking?.userId?._id || booking?.userId) === String(student._id) &&
        String(booking?.subAdminId?._id || booking?.subAdminId) === String(subAdminId)
    );
  }, [bookings, student, subAdminId]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Bookings</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {student?.name || "Student"} - {studentBookings.length} booking
                  {studentBookings.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {studentBookings.length === 0 ? (
                <div className="text-center py-16">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No bookings found for this student</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {studentBookings.map((booking) => {
                    const startDate = booking?.timeslot?.start || booking?.date;
                    const serviceName = booking?.serviceId?.name || "Service TBD";
                    const status = booking?.bookingStatus || "scheduled";
                    const amount =
                      typeof booking?.amount === "number" ? booking.amount.toFixed(2) : null;

                    return (
                      <motion.div
                        key={booking?._id || booking?.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-xl text-xs font-semibold ${statusBadgeClass(
                              status
                            )}`}
                          >
                            {status.toUpperCase()}
                          </span>
                          {amount && (
                            <span className="text-sm font-semibold text-gray-700">
                              ₹{amount}
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-sky-600" />
                            <span>{formatDate(startDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-sky-600" />
                            <span>{formatTimeRange(booking)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-sky-600" />
                            <span>{serviceName}</span>
                          </div>
                        </div>
                        {booking?.notes && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-sm text-gray-500">{booking.notes}</p>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SubAdminStudents = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showBookingsModal, setShowBookingsModal] = useState(false);

  const {
    data: currentUserData,
    isLoading: isUserLoading,
    isFetching: isUserFetching,
  } = useGetCurrentUserQuery();
  const subAdminId = currentUserData?.user?._id;

  const {
    data: bookingsData,
    isLoading: isBookingsLoading,
    isFetching: isBookingsFetching,
  } = useGetAllBookingsQuery(
    { page: 1, limit: 1000, subAdminId },
    { skip: !subAdminId }
  );

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Extract unique students from bookings
  const uniqueStudents = useMemo(() => {
    if (!bookingsData?.bookings) return [];

    const studentMap = new Map();

    bookingsData.bookings.forEach((booking) => {
      const userId = booking?.userId?._id || booking?.userId;
      if (!userId) return;

      const userIdString = String(userId);

      if (!studentMap.has(userIdString)) {
        studentMap.set(userIdString, {
          _id: userIdString,
          ...booking.userId,
        });
      }
    });

    return Array.from(studentMap.values());
  }, [bookingsData]);

  // Filter students by search query
  const filteredStudents = useMemo(() => {
    if (!debouncedSearch.trim()) return uniqueStudents;

    const query = debouncedSearch.toLowerCase();
    return uniqueStudents.filter(
      (student) =>
        student?.name?.toLowerCase().includes(query) ||
        student?.email?.toLowerCase().includes(query)
    );
  }, [uniqueStudents, debouncedSearch]);

  const handleViewDetails = (student) => {
    navigate(`/subadmin/students/view/${student._id}`);
  };

  const handleViewBookings = (student) => {
    setSelectedStudent(student);
    setShowBookingsModal(true);
  };

  const isLoading = isUserLoading || isUserFetching || isBookingsLoading || isBookingsFetching;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl text-white px-10 py-12 shadow-lg"
        >
          <p className="text-sm uppercase tracking-widest text-white/80">Sub-admin Dashboard</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Students</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            View and manage all students who have bookings with you. Access their details and booking
            history.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8"
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-16 text-gray-500">
              <Loader2 className="w-6 h-6 mr-3 animate-spin" />
              Loading students...
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600">
                <User className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {debouncedSearch.trim() ? "No students found" : "No students yet"}
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                {debouncedSearch.trim()
                  ? "Try adjusting your search query."
                  : "Students will appear here once they have bookings with you."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student._id}
                  student={student}
                  onViewDetails={handleViewDetails}
                  onViewBookings={handleViewBookings}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Student Bookings Modal */}
      <StudentBookingsModal
        isOpen={showBookingsModal}
        onClose={() => {
          setShowBookingsModal(false);
          setSelectedStudent(null);
        }}
        student={selectedStudent}
        bookings={bookingsData?.bookings || []}
        subAdminId={subAdminId}
      />
    </div>
  );
};

export default SubAdminStudents;
