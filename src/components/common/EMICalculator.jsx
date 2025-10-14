// EMICalculator.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Simple EMI calculator component.
 * - Default values match your example (₹20,00,000 / 9.5% / 10 years).
 * - Computes EMI using the standard monthly EMI formula.
 * - Shows Monthly EMI, Total Payment and Total Interest.
 * - Friendly inputs (number fields + range slider for tenure).
 */

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);

const EMICalculator = ({ className = "" }) => {
  // default values from your example
  const [principal, setPrincipal] = useState(2000000); // ₹20,00,000
  const [annualRate, setAnnualRate] = useState(9.5); // % p.a.
  const [tenureYears, setTenureYears] = useState(10); // years

  const months = Math.max(1, Math.round(tenureYears * 12));

  // compute emi using standard formula (careful with arithmetic)
  const { emi, totalPayment, totalInterest, monthlyRate } = useMemo(() => {
    const P = Number(principal) || 0;
    const annual = Number(annualRate) || 0;
    const r = annual / 100 / 12; // monthly interest rate (decimal)
    const n = months;

    let emiValue = 0;
    if (P > 0 && n > 0) {
      if (r === 0) {
        emiValue = P / n;
      } else {
        const factor = Math.pow(1 + r, n);
        emiValue = (P * r * factor) / (factor - 1);
      }
    }

    const totalPay = emiValue * n;
    const totalInt = totalPay - P;
    return {
      emi: emiValue,
      totalPayment: totalPay,
      totalInterest: totalInt,
      monthlyRate: r,
    };
  }, [principal, annualRate, months]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 ${className}`}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-1">Quick EMI Calculator</h3>
      <p className="text-sm text-gray-600 mb-4">
        Estimate monthly EMI for education loans. Results use standard monthly-compounding EMI formula.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Loan Amount (₹)</label>
          <input
            type="number"
            min={0}
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value || 0))}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Interest Rate (% p.a.)</label>
          <input
            type="number"
            step="0.05"
            min={0}
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value || 0))}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Tenure (years)</label>
          <input
            type="number"
            min={0.5}
            step="0.5"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value || 0))}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>
      </div>

      {/* Slider for tenure (optional extra UI) */}
      <div className="mb-4">
        <label className="text-xs text-gray-500">Adjust Tenure: {tenureYears} years</label>
        <input
          type="range"
          min={1}
          max={30}
          step={1}
          value={tenureYears}
          onChange={(e) => setTenureYears(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-sky-50/60 p-4 rounded-lg text-center border border-sky-100">
          <div className="text-sm text-gray-600">Monthly EMI</div>
          <div className="text-xl font-bold text-gray-900 mt-1">₹{formatINR(Math.round(emi))}</div>
        </div>

        <div className="bg-white p-4 rounded-lg text-center border border-gray-100">
          <div className="text-sm text-gray-600">Total Payment</div>
          <div className="text-lg font-semibold text-gray-900 mt-1">₹{formatINR(Math.round(totalPayment))}</div>
        </div>

        <div className="bg-white p-4 rounded-lg text-center border border-gray-100">
          <div className="text-sm text-gray-600">Total Interest</div>
          <div className="text-lg font-semibold text-gray-900 mt-1">₹{formatINR(Math.round(totalInterest))}</div>
        </div>
      </div>

      {/* Small detail row */}
      <div className="mt-4 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>Principal: ₹{formatINR(principal)}</div>
        <div>Rate (monthly): {(monthlyRate * 100).toFixed(4)}%</div>
        <div>Tenure: {months} months</div>
      </div>

     
      <div className="mt-4 text-xs text-gray-500">
        <strong>Note:</strong> For your example inputs (₹20,00,000 · 9.5% p.a. · 10 years) this calculator shows ₹{formatINR(Math.round(emi))} as Monthly EMI using the standard formula.
      </div>

      {/* Optional action */}
      <div className="mt-6 text-right">
        <button
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold rounded-lg hover:shadow-md transition-transform transform hover:-translate-y-0.5"
          onClick={() => {
           
            const text = `Loan ₹${formatINR(principal)} | Rate ${annualRate}% p.a. | Tenure ${tenureYears} yrs → EMI ₹${formatINR(
              Math.round(emi)
            )}`;
            navigator.clipboard?.writeText(text).catch(() => {});
            
          }}
        >
          Copy Summary
        </button>
      </div>
    </motion.div>
  );
};

export default EMICalculator;
