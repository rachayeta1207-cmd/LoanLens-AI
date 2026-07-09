"use client";

import { useState } from "react";

export default function LoanAffordability() {
  const [salary, setSalary] = useState(50000);
  const [existingEMI, setExistingEMI] = useState(10000);
  const [newEMI, setNewEMI] = useState(15000);

  const totalEMI = existingEMI + newEMI;
  const emiRatio = salary > 0 ? (totalEMI / salary) * 100 : 0;

  let result = "";
  let color = "";

  if (emiRatio <= 40) {
    result = "✅ Affordable";
    color = "text-green-600";
  } else if (emiRatio <= 60) {
    result = "⚠️ Manageable but Risky";
    color = "text-yellow-600";
  } else {
    result = "❌ Not Affordable";
    color = "text-red-600";
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        💰 Loan Affordability Checker
      </h2>

      <div className="space-y-5">

        {/* Monthly Salary */}
        <div>
          <label className="block text-slate-700 font-semibold mb-2">
            Monthly Salary (₹)
          </label>

          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full border border-slate-300 rounded-xl p-3 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Existing EMI */}
        <div>
          <label className="block text-slate-700 font-semibold mb-2">
            Existing EMI (₹)
          </label>

          <input
            type="number"
            value={existingEMI}
            onChange={(e) => setExistingEMI(Number(e.target.value))}
            className="w-full border border-slate-300 rounded-xl p-3 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* New EMI */}
        <div>
          <label className="block text-slate-700 font-semibold mb-2">
            New Loan EMI (₹)
          </label>

          <input
            type="number"
            value={newEMI}
            onChange={(e) => setNewEMI(Number(e.target.value))}
            className="w-full border border-slate-300 rounded-xl p-3 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

      </div>

      {/* Result Card */}

      <div className="mt-8 bg-slate-100 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Result
        </h3>

        <div className="space-y-3 text-slate-800">

          <p>
            <span className="font-semibold">Total EMI:</span> ₹{totalEMI.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">EMI to Income Ratio:</span>{" "}
            {emiRatio.toFixed(1)}%
          </p>

          <p className={`text-xl font-bold ${color}`}>
            {result}
          </p>

        </div>

      </div>

    </div>
  );
}