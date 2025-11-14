import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Loader2, Package, User, Video } from "lucide-react";
import {
  useGetAllBookingsQuery,
  useGetAllZoomSessionsQuery,
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

const getStartDate = (booking) => booking?.timeslot?.start || booking?.date;

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

const ConsultationCard = ({ booking }) => {
  const bookingId = booking?._id || booking?.id;
  const {
    data: zoomSessionsData,
    isLoading: isZoomSessionsLoading,
    isFetching: isZoomSessionsFetching,
  } = useGetAllZoomSessionsQuery(
    { page: 1, limit: 5, bookingId },
    { skip: !bookingId }
  );

  const zoomSessionsRaw =
    (Array.isArray(zoomSessionsData?.zoomSessions) && zoomSessionsData.zoomSessions) ||
    (Array.isArray(zoomSessionsData?.sessions) && zoomSessionsData.sessions) ||
    [];

  const matchingZoomSession = zoomSessionsRaw.find((session) => {
    const sessionBookingId =
      session?.bookingId?._id ||
      session?.bookingId ||
      session?.booking?._id ||
      session?.booking ||
      null;
    if (!sessionBookingId || !bookingId) {
      return false;
    }
    return String(sessionBookingId) === String(bookingId);
  }) || zoomSessionsRaw[0];

  const zoomJoinLink =
    matchingZoomSession?.joinUrl ||
    matchingZoomSession?.joinURL ||
    matchingZoomSession?.join_link ||
    matchingZoomSession?.zoomLink ||
    matchingZoomSession?.meetingUrl ||
    matchingZoomSession?.meeting_url ||
    matchingZoomSession?.start_url ||
    matchingZoomSession?.startUrl ||
    booking?.zoomLink ||
    booking?.zoomMeetingLink ||
    null;

  const isZoomPending = isZoomSessionsLoading || isZoomSessionsFetching;
  const status = booking?.bookingStatus || "scheduled";
  const userName = booking?.userId?.name || "Unassigned user";
  const serviceName = booking?.serviceId?.name || "Service TBD";
  const amount = typeof booking?.amount === "number" ? booking.amount.toFixed(2) : null;
  const startDate = getStartDate(booking);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <User className="w-5 h-5 text-green-600" />
            {userName}
          </div>
          <span
            className={`inline-block px-3 py-1 rounded-xl text-xs font-semibold ${statusBadgeClass(status)}`}
          >
            {status.toUpperCase()}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2">
          <div className="flex items-center gap-2 rounded-xl px-3 py-2">
            <Calendar className="h-4 w-4 text-sky-600" />
            <span>{formatDate(startDate)}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl px-3 py-2">
            <Clock className="h-4 w-4 text-sky-600" />
            <span>{formatTimeRange(booking)}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl px-3 py-2">
            <Package className="h-4 w-4 text-sky-600" />
            <span>{serviceName}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl px-3 py-2">
            <Video className="h-4 w-4 text-sky-600" />
            <div className="flex items-center gap-2">
              {zoomJoinLink ? (
                <a
                  href={zoomJoinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-sky-600 px-3 py-1 text-xs font-semibold text-white shadow transition-shadow hover:shadow-lg"
                >
                  Join Zoom
                </a>
              ) : isZoomPending ? (
                <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Preparing meeting...</span>
                </div>
              ) : (
                <span className="text-xs text-gray-500">Zoom link not available yet</span>
              )}
            </div>
          </div>
        </div>
        {booking?.notes && (
          <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-500">{booking.notes}</p>
        )}
      </div>
    </motion.div>
  );
};

const SubAdminConsultations = () => {
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
    { page: 1, limit: 100, subAdminId },
    { skip: !subAdminId }
  );

  const upcomingConsultations = useMemo(() => {
    if (!bookingsData?.bookings) return [];
    const now = new Date();
    return bookingsData.bookings
      .filter((booking) => {
        const start = getStartDate(booking);
        if (!start) return false;
        const startDate = new Date(start);
        if (Number.isNaN(startDate.getTime())) return false;
        const status = (booking?.bookingStatus || "scheduled").toLowerCase();
        if (["completed", "cancelled", "no-show"].includes(status)) return false;
        return startDate >= now;
      })
      .sort((a, b) => {
        const startA = new Date(getStartDate(a) || 0).getTime();
        const startB = new Date(getStartDate(b) || 0).getTime();
        return startA - startB;
      });
  }, [bookingsData]);

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
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Upcoming Consultations</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Review the consultations assigned to you and be ready for your next session. Details update automatically as bookings are created or rescheduled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8"
        >
          {isLoading ? (
            <div className="flex items-center justify-center py-16 text-gray-500">
              <Loader2 className="w-6 h-6 mr-3 animate-spin" />
              Loading your upcoming consultations...
            </div>
          ) : upcomingConsultations.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">No upcoming consultations</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                You don&apos;t have any scheduled consultations right now. New sessions will appear here as soon as they&apos;re booked.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {upcomingConsultations.map((booking, index) => (
                <ConsultationCard
                  key={booking?._id || `${getStartDate(booking) || "booking"}-${index}`}
                  booking={booking}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SubAdminConsultations;

