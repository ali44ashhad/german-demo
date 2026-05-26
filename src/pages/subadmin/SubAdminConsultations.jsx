import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Loader2, Package, User, Video, FileText } from "lucide-react";
import {
  useGetAllBookingsQuery,
  useGetAllZoomSessionsQuery,
  useGetCurrentUserQuery,
  useGetNotesBySubAdminQuery,
} from "../../store/apiSlice";
import {
  formatBookingDate,
  formatBookingTimeRange,
} from "../../utils/bookingFormatters";

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

const getNoteAuthorName = (note) =>
  note?.authorId?.name || note?.authorId?.email || "Unknown";

const authorRoleLabel = (role) => {
  if (role === "superadmin") return "Admin";
  if (role === "subadmin") return "Counselor";
  return role || "Staff";
};

const formatNoteTimestamp = (date) => {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const truncateText = (text, max = 120) => {
  if (!text) return "";
  const t = String(text).trim();
  return t.length <= max ? t : `${t.slice(0, max)}…`;
};

const ConsultationCard = ({ booking, notes = [] }) => {
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
  const studentId = booking?.userId?._id || booking?.userId;
  const serviceName = booking?.serviceId?.name || "Service TBD";
  const amount = typeof booking?.amount === "number" ? booking.amount.toFixed(2) : null;
  const startDate = getStartDate(booking);

  const previewNotes = [...notes]
    .sort((a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0))
    .slice(0, 2);

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
            <span>{formatBookingDate(startDate)}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl px-3 py-2">
            <Clock className="h-4 w-4 text-sky-600" />
            <span>{formatBookingTimeRange(booking.timeslot?.start, booking.timeslot?.end)}</span>
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

        {previewNotes.length > 0 && (
          <div className="rounded-xl bg-gray-50 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 uppercase tracking-wide">
              <FileText className="w-3.5 h-3.5" />
              Recent notes
            </div>
            {previewNotes.map((note) => (
              <div key={note._id} className="text-sm border-t border-gray-200/80 pt-2 first:border-0 first:pt-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-1">
                  <span className="font-medium text-gray-700">{getNoteAuthorName(note)}</span>
                  <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-700">
                    {authorRoleLabel(note?.authorId?.role)}
                  </span>
                  <span>{formatNoteTimestamp(note?.createdAt)}</span>
                </div>
                <p className="text-gray-600">{truncateText(note?.content)}</p>
              </div>
            ))}
            {studentId && (
              <Link
                to={`/subadmin/students/view/${studentId}`}
                className="inline-block text-xs font-semibold text-sky-600 hover:underline"
              >
                View all notes on student profile
              </Link>
            )}
          </div>
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

  const { data: notesData } = useGetNotesBySubAdminQuery(
    { page: 1, limit: 500 },
    { skip: !subAdminId }
  );

  const notesByBookingId = useMemo(() => {
    if (!notesData?.notes) return {};
    const map = {};
    notesData.notes.forEach((note) => {
      const bookingId = note?.bookingId?._id || note?.bookingId;
      const key = bookingId ? String(bookingId) : "";
      if (!key) return;
      if (!map[key]) map[key] = [];
      map[key].push(note);
    });
    return map;
  }, [notesData]);

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
              {upcomingConsultations.map((booking, index) => {
                const id = String(booking?._id || booking?.id || "");
                return (
                  <ConsultationCard
                    key={booking?._id || `${getStartDate(booking) || "booking"}-${index}`}
                    booking={booking}
                    notes={notesByBookingId[id] || []}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SubAdminConsultations;
