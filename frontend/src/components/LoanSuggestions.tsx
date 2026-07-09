"use client";

type Props = {
  currentRate: string;
};

export default function LoanSuggestions({ currentRate }: Props) {
  const banks = [
    {
      name: "State Bank of India",
      rate: "8.55%",
      processing: "₹2,500",
      color: "green",
    },
    {
      name: "HDFC Bank",
      rate: "8.75%",
      processing: "₹3,000",
      color: "blue",
    },
    {
      name: "ICICI Bank",
      rate: "8.90%",
      processing: "₹3,500",
      color: "purple",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        🏦 Better Loan Suggestions
      </h2>

      <p className="text-slate-600 mb-8">
        Your current interest rate is{" "}
        <span className="font-bold text-teal-600">
          {currentRate}
        </span>
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {bank.name}
            </h3>

            <p className="mt-5 text-slate-500">
              Interest Rate
            </p>

            <p className="text-3xl font-bold text-green-600">
              {bank.rate}
            </p>

            <p className="mt-4 text-slate-500">
              Processing Fee
            </p>

            <p className="font-semibold text-slate-800">
              {bank.processing}
            </p>

          </div>
        ))}
      </div>

      <div className="mt-8 bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-500">
        <h3 className="font-bold text-teal-700">
          💡 AI Recommendation
        </h3>

        <p className="mt-3 text-slate-700 leading-7">
          Based on your current loan, you may qualify for loans
          with lower interest rates from the banks above.
          Compare processing fees, repayment flexibility,
          foreclosure charges, and hidden costs before switching.
        </p>
      </div>
    </div>
  );
}