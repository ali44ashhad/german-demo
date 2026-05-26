import React, { useMemo, useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Loader2,
  ArrowLeft,
  Calendar,
  Clock,
  Package,
  FileText,
  Save,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  X,
  Pencil,
  Trash2,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  useGetUserByIdQuery,
  useGetAllBookingsQuery,
  useGetCurrentUserQuery,
  useGetNotesBySubAdminQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} from "../../store/apiSlice";
import {
  formatBookingDate,
  formatBookingTimeRange,
} from "../../utils/bookingFormatters";

// Set up PDF.js worker
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.5.4.296.min.mjs`;
}

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

// Toast Notification Component
const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className="fixed top-20 left-1/2 z-50 transform -translate-x-1/2"
        >
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[250px]">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold">{message}</span>
            <button
              onClick={onClose}
              className="ml-auto hover:bg-green-700 rounded p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Embedded PDF Viewer Component
const EmbeddedPDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);
  const [pdfError, setPdfError] = useState(null);
  const [pageWidth, setPageWidth] = useState(600);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // Base width for initial render, will scale with zoom
        setPageWidth(Math.min(containerWidth - 32, 600));
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Update page width when scale changes to ensure proper scrolling
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const baseWidth = Math.min(containerWidth - 32, 600);
      // When zoomed, the actual width will be baseWidth * scale
      // This allows the PDF to expand beyond container width for scrolling
      setPageWidth(baseWidth);
    }
  }, [scale]);

  useEffect(() => {
    if (!pdfUrl) return;

    let currentBlobUrl = null;
    const fetchPdf = async () => {
      setIsLoadingPdf(true);
      setPdfError(null);

      try {
        // If it's a Cloudinary URL or base64, use directly
        if (pdfUrl.startsWith("data:") || (pdfUrl.startsWith("http") && !pdfUrl.includes("/api/"))) {
          setPdfBlobUrl(pdfUrl);
          setIsLoadingPdf(false);
          return;
        }

        // If it's a backend URL, fetch it
        const response = await fetch(pdfUrl, {
          credentials: "include",
          headers: {
            Accept: "application/pdf",
          },
        });

        if (response.ok) {
          const blob = await response.blob();
          if (blob.type !== "application/pdf" && blob.size > 0) {
            throw new Error("Invalid PDF format received");
          }
          const blobUrl = URL.createObjectURL(blob);
          currentBlobUrl = blobUrl;
          setPdfBlobUrl(blobUrl);
          setIsLoadingPdf(false);
        } else {
          throw new Error(`Failed to load PDF: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching PDF:", error);
        setPdfError(error.message);
        setIsLoadingPdf(false);
      }
    };

    fetchPdf();

    return () => {
      if (currentBlobUrl && currentBlobUrl.startsWith("blob:")) {
        URL.revokeObjectURL(currentBlobUrl);
      }
    };
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center p-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
        <div className="text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No resume available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
      {pdfError ? (
        <div className="flex flex-col items-center justify-center p-8 text-red-600">
          <p className="text-lg font-semibold mb-2">Failed to load PDF</p>
          <p className="text-sm text-gray-600 text-center">{pdfError}</p>
        </div>
      ) : isLoadingPdf ? (
        <div className="flex flex-col items-center justify-center p-8">
          <Loader2 className="w-8 h-8 animate-spin text-gray-500 mb-2" />
          <p className="text-gray-600">Loading resume PDF...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div 
            ref={containerRef}
            className="overflow-x-auto overflow-y-auto max-h-[600px] w-full -mx-4 px-4"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex justify-center min-w-max">
              <Document
                file={pdfBlobUrl || pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex items-center justify-center p-8">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
                  </div>
                }
                error={
                  <div className="flex flex-col items-center justify-center p-8 text-red-600">
                    <p>Failed to render PDF. Please try again.</p>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="shadow-lg"
                  width={pageWidth}
                />
              </Document>
            </div>
          </div>

          {numPages && (
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
                    disabled={pageNumber <= 1}
                    className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
                    disabled={pageNumber >= numPages}
                    className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                  >
                    Next
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setScale((prev) => Math.max(0.5, prev - 0.25))}
                    className="px-2 py-1.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors text-sm"
                  >
                    -
                  </button>
                  <span className="text-sm text-gray-600 w-12 text-center whitespace-nowrap">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => setScale((prev) => Math.min(2, prev + 0.25))}
                    className="px-2 py-1.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const getNoteAuthorId = (note) =>
  String(note?.authorId?._id || note?.authorId || "");

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

const NoteThreadItem = ({ note, currentUserId, bookingId, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(note?.content || "");
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [updateNote] = useUpdateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();

  const authorId = getNoteAuthorId(note);
  const canModify = currentUserId && authorId === String(currentUserId);

  const handleUpdate = async () => {
    if (!editContent.trim()) return;
    setIsSaving(true);
    try {
      await updateNote({
        noteId: note._id,
        content: editContent.trim(),
        bookingId,
      }).unwrap();
      setIsEditing(false);
      onSave?.();
    } catch (error) {
      console.error("Failed to update note:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this note?")) return;
    setIsDeleting(true);
    try {
      await deleteNote({ noteId: note._id, bookingId }).unwrap();
      onSave?.();
    } catch (error) {
      console.error("Failed to delete note:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            {getNoteAuthorName(note)}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">
            {authorRoleLabel(note?.authorId?.role)}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          {formatNoteTimestamp(note?.createdAt)}
        </span>
      </div>

      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full min-h-[80px] p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditContent(note?.content || "");
              }}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              disabled={isSaving || !editContent.trim()}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-green-600 text-white disabled:opacity-60"
            >
              {isSaving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{note?.content}</p>
          {canModify && (
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-green-700"
              >
                <Pencil className="w-3 h-3" />
                Edit
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-red-600 disabled:opacity-60"
              >
                {isDeleting ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Trash2 className="w-3 h-3" />
                )}
                Delete
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const BookingNoteEditor = ({ booking, notes = [], currentUserId, onSave }) => {
  const [draft, setDraft] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [createNote] = useCreateNoteMutation();

  const bookingId = String(booking._id || booking.id);

  const handleAddNote = async () => {
    if (!draft.trim()) return;
    setIsSaving(true);
    try {
      await createNote({
        bookingId: booking._id || booking.id,
        content: draft.trim(),
      }).unwrap();
      setDraft("");
      onSave?.();
    } catch (error) {
      console.error("Failed to add note:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const serviceName = booking?.serviceId?.name || "Service TBD";
  const bookingDate = formatBookingDate(booking?.timeslot?.start || booking?.date);
  const bookingTime = formatBookingTimeRange(booking?.timeslot?.start, booking?.timeslot?.end);
  const status = booking?.bookingStatus || "scheduled";
  const sortedNotes = [...notes].sort(
    (a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0)
  );

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${statusBadgeClass(
                status
              )}`}
            >
              {status.toUpperCase()}
            </span>
            <span className="text-sm font-semibold text-gray-900">{serviceName}</span>
            {sortedNotes.length > 0 && (
              <span className="text-xs text-gray-500">({sortedNotes.length})</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {bookingDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {bookingTime}
            </span>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 bg-white border-t border-gray-200 space-y-4">
          {sortedNotes.length === 0 ? (
            <p className="text-sm text-gray-500">No notes yet for this booking.</p>
          ) : (
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {sortedNotes.map((note) => (
                <NoteThreadItem
                  key={note._id}
                  note={note}
                  currentUserId={currentUserId}
                  bookingId={bookingId}
                  onSave={onSave}
                />
              ))}
            </div>
          )}
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write a new note..."
              className="w-full min-h-[100px] p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddNote}
                disabled={isSaving || !draft.trim()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-sky-600 text-white text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Add note
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SubAdminStudentDetails = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const {
    data: currentUserData,
    isLoading: isUserLoading,
  } = useGetCurrentUserQuery();
  const subAdminId = currentUserData?.user?._id;

  const {
    data: studentData,
    isLoading: isStudentLoading,
    isError: isStudentError,
  } = useGetUserByIdQuery(studentId, { skip: !studentId });

  const {
    data: bookingsData,
    isLoading: isBookingsLoading,
  } = useGetAllBookingsQuery(
    { page: 1, limit: 1000, subAdminId, userId: studentId },
    { skip: !subAdminId || !studentId }
  );

  const {
    data: notesData,
    isLoading: isNotesLoading,
    refetch: refetchNotes,
  } = useGetNotesBySubAdminQuery(
    { page: 1, limit: 1000, userId: studentId },
    { skip: !subAdminId || !studentId }
  );

  const student = studentData?.user;

  // Filter bookings for this student
  const studentBookings = useMemo(() => {
    if (!bookingsData?.bookings || !studentId) return [];
    return bookingsData.bookings.filter(
      (booking) =>
        String(booking?.userId?._id || booking?.userId) === String(studentId) &&
        String(booking?.subAdminId?._id || booking?.subAdminId) === String(subAdminId)
    );
  }, [bookingsData, studentId, subAdminId]);

  const notesListByBookingId = useMemo(() => {
    if (!notesData?.notes || !studentBookings.length) return {};
    const studentBookingIds = new Set(
      studentBookings.map((booking) => String(booking._id || booking.id))
    );
    const map = {};
    notesData.notes.forEach((note) => {
      const bookingId = note?.bookingId?._id || note?.bookingId;
      const key = bookingId ? String(bookingId) : "";
      if (key && studentBookingIds.has(key)) {
        if (!map[key]) map[key] = [];
        map[key].push(note);
      }
    });
    return map;
  }, [notesData, studentBookings]);

  // Student PDFs (Cloudinary URLs work for subadmin embed; legacy resumePdf counts as biodata)
  const biodataPdfUrl = useMemo(() => {
    const raw = student?.biodataPdf || student?.resumePdf;
    if (!raw) return null;
    if (raw.startsWith("http") && !raw.includes("/api/")) return raw;
    if (raw.startsWith("data:")) return raw;
    return null;
  }, [student?.biodataPdf, student?.resumePdf]);

  const studentInquiryPdfUrl = useMemo(() => {
    const raw = student?.studentInquiryPdf;
    if (!raw) return null;
    if (raw.startsWith("http") && !raw.includes("/api/")) return raw;
    if (raw.startsWith("data:")) return raw;
    return null;
  }, [student?.studentInquiryPdf]);

  const isLoading = isUserLoading || isStudentLoading || isBookingsLoading || isNotesLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (isStudentError || !student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg font-semibold mb-2">Student not found</p>
          <button
            onClick={() => navigate("/subadmin/students")}
            className="text-sky-600 hover:underline"
          >
            Return to students list
          </button>
        </div>
      </div>
    );
  }

  const handleNoteSave = () => {
    setToastMessage("Note saved successfully!");
    setShowToast(true);
    refetchNotes();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 pt-24 pb-8 px-4 sm:px-6 lg:px-10">
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate("/subadmin/students")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Students</span>
          </button>
          <div className="bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl text-white px-10 py-8 shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-bold">Student Details</h1>
            <p className="mt-2 text-white/85">View student information and manage notes</p>
          </div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Student Details & Resume */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6"
            >
              <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
                {student.profileImage ? (
                  <img
                    src={student.profileImage}
                    alt={student.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-sky-400 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{student.email}</span>
                  </div>
                  {student.contactNumber && (
                    <div className="flex items-center gap-2 mt-1 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{student.contactNumber}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Student Details */}
              <div className="mt-6 space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Personal Information</h4>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                      {student.dateOfBirth && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Date of Birth</p>
                          <p className="text-gray-900 font-semibold">
                            {formatBookingDate(student.dateOfBirth)}
                          </p>
                        </div>
                      )}
                      {student.country && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Country</p>
                          <p className="text-gray-900 font-semibold">{student.country}</p>
                        </div>
                      )}
                      {student.city && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">City</p>
                          <p className="text-gray-900 font-semibold">{student.city}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Academic Information</h4>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                      {student.highestQualification && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Highest Qualification</p>
                          <p className="text-gray-900 font-semibold">
                            {student.highestQualification}
                          </p>
                        </div>
                      )}
                      {student.fieldOfStudy && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Field of Study</p>
                          <p className="text-gray-900 font-semibold">{student.fieldOfStudy}</p>
                        </div>
                      )}
                      {student.graduationYear && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Graduation Year</p>
                          <p className="text-gray-900 font-semibold">{student.graduationYear}</p>
                        </div>
                      )}
                      {student.marksOrCGPA && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Marks/CGPA</p>
                          <p className="text-gray-900 font-semibold">{student.marksOrCGPA}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Germany Plans */}
                {(student.targetDegreeInGermany ||
                  student.desiredCourseProgram ||
                  student.preferredIntake) && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Germany Plans</h4>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                      {student.targetDegreeInGermany && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Target Degree</p>
                          <p className="text-gray-900 font-semibold">
                            {student.targetDegreeInGermany}
                          </p>
                        </div>
                      )}
                      {student.desiredCourseProgram && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Desired Course</p>
                          <p className="text-gray-900 font-semibold">
                            {student.desiredCourseProgram}
                          </p>
                        </div>
                      )}
                      {student.preferredIntake && (
                        <div>
                          <p className="text-xs uppercase text-gray-400">Preferred Intake</p>
                          <p className="text-gray-900 font-semibold">{student.preferredIntake}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Language & Other Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {(student.englishProficiency || student.germanLanguageLevel) && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Language Proficiency</h4>
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        {student.englishProficiency && (
                          <div>
                            <p className="text-xs uppercase text-gray-400">English</p>
                            <p className="text-gray-900 font-semibold">
                              {student.englishProficiency}
                            </p>
                          </div>
                        )}
                        {student.germanLanguageLevel && (
                          <div>
                            <p className="text-xs uppercase text-gray-400">German</p>
                            <p className="text-gray-900 font-semibold">
                              {student.germanLanguageLevel}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {(student.workExperience ||
                    student.estimatedBudget ||
                    student.shortlistedUniversities) && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Additional Information</h4>
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        {student.workExperience && (
                          <div>
                            <p className="text-xs uppercase text-gray-400">Work Experience</p>
                            <p className="text-gray-900 font-semibold">{student.workExperience}</p>
                          </div>
                        )}
                        {student.estimatedBudget && (
                          <div>
                            <p className="text-xs uppercase text-gray-400">Estimated Budget</p>
                            <p className="text-gray-900 font-semibold">{student.estimatedBudget}</p>
                          </div>
                        )}
                        {student.shortlistedUniversities && (
                          <div>
                            <p className="text-xs uppercase text-gray-400">Shortlisted Universities</p>
                            <p className="text-gray-900 font-semibold">
                              {student.shortlistedUniversities}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {student.needHelpWith && student.needHelpWith.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Needs Help With</h4>
                    <div className="flex flex-wrap gap-2">
                      {student.needHelpWith.map((item, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Student PDFs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Biodata</h3>
                {biodataPdfUrl ? (
                  <EmbeddedPDFViewer pdfUrl={biodataPdfUrl} />
                ) : (
                  <p className="text-gray-500 text-sm">No biodata PDF available yet.</p>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student inquiry</h3>
                {studentInquiryPdfUrl ? (
                  <EmbeddedPDFViewer pdfUrl={studentInquiryPdfUrl} />
                ) : (
                  <p className="text-gray-500 text-sm">No student inquiry PDF available yet.</p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Section - Notes Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sticky top-6 flex flex-col lg:h-[calc(100vh-120px)] min-h-[400px] lg:min-h-0">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notes</h3>
              {studentBookings.length === 0 ? (
                <div className="text-center py-8 text-gray-500 flex-1 flex items-center justify-center">
                  <div>
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p>No bookings found for this student</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 flex-1 overflow-y-auto pr-2 -mr-2">
                  {studentBookings.map((booking) => (
                    <BookingNoteEditor
                      key={booking._id || booking.id}
                      booking={booking}
                      notes={notesListByBookingId[String(booking._id || booking.id)] || []}
                      currentUserId={subAdminId}
                      onSave={handleNoteSave}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminStudentDetails;

