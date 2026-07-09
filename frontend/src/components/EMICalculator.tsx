"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  const calculateEMI = () => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(tenure);

    if (!principal || !annualRate || !years) {
      alert("Please fill all the fields.");
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const emiValue =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPaymentValue = emiValue * months;
    const totalInterestValue = totalPaymentValue - principal;

    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalPayment(totalPaymentValue);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        🧮 EMI Calculator
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="border border-slate-300 rounded-xl p-4 text-black"
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border border-slate-300 rounded-xl p-4 text-black"
        />

        <input
          type="number"
          placeholder="Loan Tenure (Years)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="border border-slate-300 rounded-xl p-4 text-black"
        />

      </div>

      <button
        onClick={calculateEMI}
        className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition"
      >
        Calculate EMI
      </button>

      {emi !== null && (
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-100 rounded-2xl p-6 shadow">

            <h3 className="font-bold text-slate-900">
              Monthly EMI
            </h3>

            <p className="text-3xl font-bold text-teal-600 mt-2">
              ₹ {emi.toFixed(2)}
            </p>

          </div>

          <div className="bg-slate-100 rounded-2xl p-6 shadow">

            <h3 className="font-bold text-slate-900">
              Total Interest
            </h3>

            <p className="text-3xl font-bold text-red-600 mt-2">
              ₹ {totalInterest?.toFixed(2)}
            </p>

          </div>

          <div className="bg-slate-100 rounded-2xl p-6 shadow">

            <h3 className="font-bold text-slate-900">
              Total Payment
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              ₹ {totalPayment?.toFixed(2)}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}