import React from "react";
import { motion } from "framer-motion";
import { useGetCurrentUserQuery, useGetDashboardStatsQuery } from "../../store/apiSlice";
import {
  CalendarDays,
  Users,
  ClipboardCheck,
  TrendingUp,
  Loader2,
  DollarSign,
  Briefcase,
} from "lucide-react";
import {
  formatBookingDate,
  formatBookingTimeRange,
} from "../../utils/bookingFormatters";

const AdminHome = () => {
  const { data, isLoading: userLoading } = useGetCurrentUserQuery();
  const { data: dashboardData, isLoading: statsLoading, error } = useGetDashboardStatsQuery();
  const user = data?.user;
  const stats = dashboardData?.stats;

  const isLoading = userLoading || statsLoading;

  if (isLoading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

  // Prepare stat cards with real data
  const statCards = [
    {
      title: "New Registrations",
      value: stats?.newRegistrations?.toString() || "0",
      change: `${stats?.registrationChange}% `|| "+0%",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Pending Consultations",
      value: stats?.pendingBookings?.toString() || "0",
      change: stats?.recentBookingsCount > 0 ? `+${stats.recentBookingsCount}` : "0",
      icon: CalendarDays,
      color: "from-sky-500 to-blue-500",
    },
    {
      title: "Applications Reviewed",
      value: stats?.completedBookings?.toString() || "0",
      change: stats?.totalBookings > 0 
        ? `+${((stats.completedBookings / stats.totalBookings) * 100).toFixed(1)}%`
        : "+0%",
      icon: ClipboardCheck,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Conversion Rate",
      value: stats?.conversionRate || "0%",
      change: stats?.totalBookings > 0 ? "+0%" : "0%",
      icon: TrendingUp,
      color: "from-fuchsia-500 to-purple-500",
    },
  ];

  // Format upcoming consultations from real data
  const upcomingSessions = stats?.upcomingConsultations?.map((booking) => {
    const formattedDate = formatBookingDate(booking.date);
    const formattedTime = formatBookingTimeRange(booking.timeslot?.start, booking.timeslot?.end);
    const dateTimeDisplay = formattedDate !== "N/A" && formattedTime !== "N/A"
      ? `${formattedDate} • ${formattedTime}`
      : formattedDate !== "N/A"
      ? formattedDate
      : formattedTime !== "N/A"
      ? formattedTime
      : "Date TBD";
    return {
      applicant: booking.userId?.name || "Unknown User",
      program: booking.serviceId?.name || "Service",
      date: dateTimeDisplay,
      id: booking._id,
    };
  }) || [];

  // Prepare highlights based on real data
  const highlights = [
    {
      title: "Total Users",
      description: `You have ${stats?.totalUsers || 0} registered users in the system.`,
    },
    {
      title: "Total Bookings",
      description: `There are ${stats?.totalBookings || 0} total bookings, with ${stats?.pendingBookings || 0} pending payment.`,
    },
    {
      title: "Revenue",
      description: `Total revenue from successful payments: $${(stats?.totalRevenue || 0).toLocaleString()}.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40 py-24 px-4 sm:px-6 lg:px-10">
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
                className="bg-surface rounded-3xl border border-border shadow-lg p-6"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">{card.title}</p>
                <p className="mt-2 text-3xl font-bold text-foreground">{card.value}</p>
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
            className="bg-surface rounded-3xl border border-border shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Upcoming Consultation Slots</h2>
              <span className="text-sm text-green-600 font-semibold">View calendar</span>
            </div>
            <div className="space-y-4">
              {upcomingSessions.length > 0 ? (
                upcomingSessions.map((session, index) => (
                  <div
                    key={session.id || `session-${index}`}
                    className="rounded-2xl border border-border bg-muted px-4 py-3 hover:border-green-400/50 hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors"
                  >
                    <p className="text-sm font-semibold text-foreground">{session.applicant}</p>
                    <p className="text-sm text-muted-foreground">{session.program}</p>
                    <p className="text-xs text-green-600 mt-1">{session.date}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-border bg-muted px-4 py-3 text-center text-muted-foreground">
                  <p className="text-sm">No upcoming consultations scheduled</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-surface rounded-3xl border border-border shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Today&apos;s Highlights</h2>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-border bg-muted px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-green-100 to-sky-100 dark:from-green-950/40 dark:to-sky-950/40 px-4 py-4 text-sm text-green-900 dark:text-green-200">
              Tip: Invite your sub-admins to update student progress daily to keep insights fresh.
            </div>
          </motion.div>
        </section>

        {/* Recent Users Section */}
        {stats?.recentUsers && stats.recentUsers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-surface rounded-3xl border border-border shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Recent Users</h2>
              <span className="text-sm text-green-600 font-semibold">Last 5 registrations</span>
            </div>
            <div className="space-y-3">
              {stats.recentUsers.map((user) => (
                <div
                  key={user._id}
                  className="rounded-2xl border border-border bg-muted px-4 py-3 hover:border-green-400/50 hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{user.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {formatBookingDate(user.createdAt)}
                      </p>
                      {user.country && (
                        <p className="text-xs text-muted-foreground mt-1">{user.country}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;


