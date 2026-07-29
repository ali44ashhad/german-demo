import {
  UserPlus,
  LogIn,
  FileUp,
  CreditCard,
  CalendarCheck,
  Mail,
  ClipboardList,
  MessageSquare,
  Clock,
  ThumbsUp,
  ThumbsDown,
  FileSignature,
  FolderUp,
  GraduationCap,
  Handshake,
  BarChart3,
  Users,
} from "lucide-react";

/** Card color variants for the student journey flow. */
export const VARIANT_STYLES = {
  /** Steps 1–10: shared light blue */
  student: {
    card: "bg-sky-100/90 border-sky-200",
    badge: "from-sky-400 to-sky-600",
    iconBg: "bg-sky-50 text-sky-700",
  },
  /** Step 11: decision window — light yellow */
  decisionHighlight: {
    card: "bg-amber-100/90 border-amber-200",
    badge: "from-amber-400 to-amber-500",
    iconBg: "bg-amber-50 text-amber-700",
  },
  /** After 11 on the YES path — green */
  success: {
    card: "bg-emerald-100/90 border-emerald-200",
    badge: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-50 text-emerald-700",
  },
  /** After NO — red */
  warning: {
    card: "bg-red-100/90 border-red-200",
    badge: "from-red-500 to-rose-600",
    iconBg: "bg-red-50 text-red-700",
  },
  decision: {
    card: "bg-white border-gray-200",
    badge: "from-green-600 to-sky-600",
    iconBg: "bg-gray-100 text-gray-700",
  },
};

/** Phase 1: Before Consultation (blocks 1–7) — all light blue */
export const PHASE1_STEP_CONFIG = [
  { id: "approach", icon: Users, variant: "student" },
  { id: "register", icon: UserPlus, variant: "student", actionKey: "register" },
  { id: "login", icon: LogIn, variant: "student", actionKey: "login" },
  { id: "upload", icon: FileUp, variant: "student" },
  { id: "payment", icon: CreditCard, variant: "student" },
  { id: "appointment", icon: CalendarCheck, variant: "student", hasSubSteps: true },
  { id: "counsellorCalendar", icon: Mail, variant: "student" },
];

/** Initial Consultation — light blue */
export const INITIAL_CONSULTATION_CONFIG = [
  { id: "counsellorOverview", icon: ClipboardList, variant: "student" },
  { id: "counsellingDone", icon: MessageSquare, variant: "student" },
];

/** Your Decision (block 11) — light yellow */
export const YOUR_DECISION_CONFIG = [
  { id: "decisionWindow", icon: Clock, variant: "decisionHighlight" },
];

/** After Decision — YES path (green) */
export const PHASE2_YES_STEP_CONFIG = [
  { id: "deposit", icon: FileSignature, variant: "success" },
  { id: "documents", icon: FolderUp, variant: "success", actionKey: "profile" },
  { id: "recounselling", icon: GraduationCap, variant: "success" },
  { id: "partnerships", icon: Handshake, variant: "success", actionKey: "profile" },
  { id: "tracking", icon: BarChart3, variant: "success" },
];

/** Phase 2 pre-branch: initial consultation (blue) + decision window (yellow) */
export const PHASE2_PRE_BRANCH_CONFIG = [
  ...INITIAL_CONSULTATION_CONFIG,
  ...YOUR_DECISION_CONFIG,
];

export const DECISION_CONFIG = {
  yesIcon: ThumbsUp,
  noIcon: ThumbsDown,
};

export const PROGRESS_PREVIEW_COLORS = [
  "from-cyan-400 to-cyan-600",
  "from-purple-400 to-purple-600",
  "from-orange-400 to-orange-600",
  "from-lime-400 to-lime-600",
];
