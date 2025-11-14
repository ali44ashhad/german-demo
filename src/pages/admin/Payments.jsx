import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Loader2 } from "lucide-react";
import DataTable from "../../components/common/DataTable";
import SearchBar from "../../components/common/SearchBar";
import Pagination from "../../components/common/Pagination";

const initialPayments = [
  {
    _id: "payment-1",
    transactionId: "PAY-202311-001",
    studentName: "Lucas Schneider",
    email: "lucas.schneider@example.com",
    amount: 249.99,
    currency: "EUR",
    status: "Completed",
    method: "Credit Card",
    notes: "First instalment confirmed.",
    createdAt: "2025-10-12T09:30:00.000Z",
    updatedAt: "2025-10-12T09:30:00.000Z",
  },
  {
    _id: "payment-2",
    transactionId: "PAY-202311-002",
    studentName: "Amelia Fischer",
    email: "amelia.fischer@example.com",
    amount: 499.0,
    currency: "EUR",
    status: "Pending",
    method: "Bank Transfer",
    notes: "Awaiting bank confirmation.",
    createdAt: "2025-11-01T14:45:00.000Z",
    updatedAt: "2025-11-01T14:45:00.000Z",
  },
  {
    _id: "payment-3",
    transactionId: "PAY-202311-003",
    studentName: "Mateo Weber",
    email: "mateo.weber@example.com",
    amount: 199.95,
    currency: "EUR",
    status: "Failed",
    method: "UPI",
    notes: "Payment declined by issuer.",
    createdAt: "2025-11-08T17:20:00.000Z",
    updatedAt: "2025-11-09T09:05:00.000Z",
  },
  {
    _id: "payment-4",
    transactionId: "PAY-202311-004",
    studentName: "Noah Wagner",
    email: "noah.wagner@example.com",
    amount: 349.0,
    currency: "EUR",
    status: "Refunded",
    method: "Credit Card",
    notes: "Refund issued due to booking cancellation.",
    createdAt: "2025-09-25T11:10:00.000Z",
    updatedAt: "2025-10-05T08:30:00.000Z",
  },
  {
    _id: "payment-5",
    transactionId: "PAY-202311-005",
    studentName: "Mila Braun",
    email: "mila.braun@example.com",
    amount: 129.0,
    currency: "EUR",
    status: "Completed",
    method: "Bank Transfer",
    notes: "Payment received in full.",
    createdAt: "2025-11-10T08:00:00.000Z",
    updatedAt: "2025-11-10T08:00:00.000Z",
  },
];

const statusStyles = {
  Completed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-rose-100 text-rose-700",
  Refunded: "bg-sky-100 text-sky-700",
};

const paymentStatuses = ["Completed", "Pending", "Failed", "Refunded"];
const paymentMethods = ["Credit Card", "Bank Transfer", "UPI", "Cash"];

const Payments = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const [formData, setFormData] = useState({
    transactionId: "",
    studentName: "",
    email: "",
    amount: "",
    currency: "EUR",
    status: "Pending",
    method: "Credit Card",
    notes: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery.trim().toLowerCase());
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredPayments = useMemo(() => {
    if (!debouncedSearch) return payments;
    return payments.filter((payment) => {
      const haystack = [
        payment.transactionId,
        payment.studentName,
        payment.email,
        payment.status,
        payment.method,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(debouncedSearch);
    });
  }, [debouncedSearch, payments]);

  const totalPages = Math.max(1, Math.ceil(filteredPayments.length / limit || 1));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedPayments = useMemo(() => {
    const startIndex = (currentPage - 1) * limit;
    return filteredPayments.slice(startIndex, startIndex + limit);
  }, [filteredPayments, currentPage, limit]);

  const pagination =
    filteredPayments.length > 0
      ? {
          currentPage,
          totalPages,
          total: filteredPayments.length,
        }
      : null;

  const formatCurrency = (amount, currency) => {
    if (!amount || Number.isNaN(amount)) return "—";
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency || "EUR",
      }).format(amount);
    } catch (error) {
      return `${currency || "EUR"} ${Number(amount).toFixed(2)}`;
    }
  };

  const handleCreate = () => {
    setFormData({
      transactionId: "",
      studentName: "",
      email: "",
      amount: "",
      currency: "EUR",
      status: "Pending",
      method: "Credit Card",
      notes: "",
    });
    setEditingPayment(null);
    setIsModalOpen(true);
  };

  const handleEdit = (payment) => {
    setFormData({
      transactionId: payment.transactionId || "",
      studentName: payment.studentName || "",
      email: payment.email || "",
      amount: payment.amount?.toString() || "",
      currency: payment.currency || "EUR",
      status: payment.status || "Pending",
      method: payment.method || "Credit Card",
      notes: payment.notes || "",
    });
    setEditingPayment(payment);
    setIsModalOpen(true);
  };

  const handleDelete = (payment) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete payment ${payment.transactionId}?`
    );
    if (!confirmation) return;
    setPayments((prev) => prev.filter((item) => item._id !== payment._id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedAmount = parseFloat(formData.amount);
    if (Number.isNaN(normalizedAmount) || normalizedAmount <= 0) {
      alert("Please enter a valid payment amount greater than zero.");
      return;
    }

    setIsSaving(true);
    const now = new Date().toISOString();
    const payload = {
      transactionId:
        formData.transactionId.trim() || `PAY-${Date.now().toString().slice(-6)}`,
      studentName: formData.studentName.trim(),
      email: formData.email.trim(),
      amount: normalizedAmount,
      currency: formData.currency.trim().toUpperCase() || "EUR",
      status: formData.status,
      method: formData.method,
      notes: formData.notes.trim(),
    };

    setTimeout(() => {
      if (editingPayment) {
        setPayments((prev) =>
          prev.map((payment) =>
            payment._id === editingPayment._id
              ? {
                  ...payment,
                  ...payload,
                  updatedAt: now,
                }
              : payment
          )
        );
      } else {
        setPayments((prev) => [
          {
            _id: `payment-${Date.now()}`,
            ...payload,
            createdAt: now,
            updatedAt: now,
          },
          ...prev,
        ]);
      }

      setIsSaving(false);
      setIsModalOpen(false);
      setEditingPayment(null);
      setFormData({
        transactionId: "",
        studentName: "",
        email: "",
        amount: "",
        currency: "EUR",
        status: "Pending",
        method: "Credit Card",
        notes: "",
      });
    }, 400);
  };

  const columns = [
    {
      header: "Transaction ID",
      accessor: "transactionId",
    },
    {
      header: "Student",
      accessor: "studentName",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Amount",
      accessor: "amount",
      render: (value, row) => formatCurrency(value, row.currency),
    },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyles[value] || "bg-gray-100 text-gray-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      header: "Method",
      accessor: "method",
    },
    {
      header: "Created At",
      accessor: "createdAt",
      render: (value) => {
        if (!value) return "—";
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return value;
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
          <p className="text-sm uppercase tracking-widest text-white/80">
            Admin Panel
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            Payments Management
          </h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            Review payment activity, keep track of outstanding balances, and
            maintain accurate finance records while APIs are under development.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by student, transaction, or status..."
          />
          <motion.button
            onClick={handleCreate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5" />
            Record Payment
          </motion.button>
        </div>

        <DataTable
          columns={columns}
          data={paginatedPayments}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={false}
        />

        <Pagination
          pagination={pagination}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(event) => event.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingPayment ? "Edit Payment" : "Record Payment"}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transaction ID
                      </label>
                      <input
                        type="text"
                        value={formData.transactionId}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            transactionId: event.target.value,
                          }))
                        }
                        placeholder="e.g. PAY-202311-010"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            studentName: event.target.value,
                          }))
                        }
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
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount (EUR) *
                      </label>
                      <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        required
                        value={formData.amount}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            amount: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.currency}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            currency: event.target.value.toUpperCase(),
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status *
                      </label>
                      <select
                        required
                        value={formData.status}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            status: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        {paymentStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Method *
                      </label>
                      <select
                        required
                        value={formData.method}
                        onChange={(event) =>
                          setFormData((prev) => ({
                            ...prev,
                            method: event.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        {paymentMethods.map((method) => (
                          <option key={method} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(event) =>
                        setFormData((prev) => ({
                          ...prev,
                          notes: event.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Add any internal remarks or next steps..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-sky-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSaving && <Loader2 className="w-5 h-5 animate-spin" />}
                      {editingPayment ? "Save Changes" : "Add Payment"}
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

export default Payments;


