import {
  UserPlus,
  LogIn,
  FileUp,
  CreditCard,
  CalendarCheck,
  Mail,
  Smartphone,
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

export const VARIANT_STYLES = {
  student: {
    card: "bg-sky-50/80 border-sky-200",
    badge: "from-sky-500 to-blue-600",
    iconBg: "bg-sky-100 text-sky-700",
  },
  platform: {
    card: "bg-emerald-50/80 border-emerald-200",
    badge: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  counsellor: {
    card: "bg-emerald-50/80 border-emerald-200",
    badge: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  warning: {
    card: "bg-orange-50/80 border-orange-200",
    badge: "from-orange-500 to-amber-600",
    iconBg: "bg-orange-100 text-orange-700",
  },
  decision: {
    card: "bg-white border-gray-200",
    badge: "from-green-600 to-sky-600",
    iconBg: "bg-gray-100 text-gray-700",
  },
};

export const PHASE1_STEP_CONFIG = [
  { id: "approach", icon: Users, variant: "student" },
  { id: "register", icon: UserPlus, variant: "student", actionKey: "register" },
  { id: "login", icon: LogIn, variant: "student", actionKey: "login" },
  { id: "upload", icon: FileUp, variant: "student", actionKey: "profile" },
  { id: "payment", icon: CreditCard, variant: "student" },
  { id: "appointment", icon: CalendarCheck, variant: "student", hasSubSteps: true },
  { id: "counsellorCalendar", icon: Mail, variant: "platform" },
  { id: "mobileApps", icon: Smartphone, variant: "platform" },
];

export const PHASE2_PRE_BRANCH_CONFIG = [
  { id: "counsellorOverview", icon: ClipboardList, variant: "counsellor" },
  { id: "counsellingDone", icon: MessageSquare, variant: "student" },
  { id: "decisionWindow", icon: Clock, variant: "student" },
];

export const PHASE2_YES_STEP_CONFIG = [
  { id: "deposit", icon: FileSignature, variant: "student" },
  { id: "documents", icon: FolderUp, variant: "student", actionKey: "profile" },
  { id: "recounselling", icon: GraduationCap, variant: "student" },
  { id: "partnerships", icon: Handshake, variant: "student", actionKey: "coaching" },
  { id: "tracking", icon: BarChart3, variant: "student", showProgressPreview: true },
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
