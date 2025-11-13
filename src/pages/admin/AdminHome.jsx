import React from "react";
import { motion } from "framer-motion";
import { useGetCurrentUserQuery } from "../../store/apiSlice";
import {
  CalendarDays,
  Users,
  ClipboardCheck,
  TrendingUp,
  Loader2,
} from "lucide-react";

const statCards = [
  {
    title: "New Registrations",
    value: "24",
    change: "+12.5%",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Pending Consultations",
    value: "8",
    change: "-5.2%",
    icon: CalendarDays,
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Applications Reviewed",
    value: "19",
    change: "+3.8%",
    icon: ClipboardCheck,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Conversion Rate",
    value: "42%",
    change: "+2.4%",
    icon: TrendingUp,
    color: "from-fuchsia-500 to-purple-500",
  },
];

const upcomingSessions = [
  { applicant: "Anika Sharma", program: "MSc Computer Science", date: "12 Nov 2025 • 4:00 PM" },
  { applicant: "Lukas Meyer", program: "MBA International Business", date: "13 Nov 2025 • 11:30 AM" },
  { applicant: "Maria Garcia", program: "BSc Mechanical Engineering", date: "14 Nov 2025 • 2:15 PM" },
];

const highlights = [
  {
    title: "Scholarship Alerts",
    description: "3 new DAAD scholarship updates available for Winter 2026 intake.",
  },
  {
    title: "University Follow-ups",
    description: "Send personalised follow-up emails to 5 shortlisted candidates.",
  },
  {
    title: "Team Updates",
    description: "Sub-admin onboarding session scheduled for Friday at 10:00 AM.",
  },
];

const AdminHome = () => {
  const { data, isLoading } = useGetCurrentUserQuery();
  const user = data?.user;

  if (isLoading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-green-50">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-sky-600 rounded-3xl text-white px-10 py-12 shadow-lg"
        >
          <p className="text-sm uppercase tracking-widest text-white/80">Admin Dashboard</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            Welcome back{user?.name ? `, ${user.name}` : ""}!
          </h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Monitor learner progress, coordinate your team, and keep every applicant on track for their German university goals — all in one place.
          </p>
        </motion.div>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-sm uppercase tracking-wide text-gray-500">{card.title}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{card.value}</p>
                <p className="mt-2 text-xs font-semibold text-green-600">{card.change} vs last week</p>
              </motion.div>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Consultation Slots</h2>
              <span className="text-sm text-green-600 font-semibold">View calendar</span>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div
                  key={`${session.applicant}-${index}`}
                  className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 hover:border-green-200 hover:bg-green-50 transition-colors"
                >
                  <p className="text-sm font-semibold text-gray-900">{session.applicant}</p>
                  <p className="text-sm text-gray-600">{session.program}</p>
                  <p className="text-xs text-green-600 mt-1">{session.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Today&apos;s Highlights</h2>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-green-100 to-sky-100 px-4 py-4 text-sm text-green-900">
              Tip: Invite your sub-admins to update student progress daily to keep insights fresh.
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;


