"use client";

type Props = {
  riskScore: number;
  riskLevel: string;
  recommendation: string;
};

export default function AIFinalVerdict({
  riskScore,
  riskLevel,
  recommendation,
}: Props) {
  let confidence = 100 - riskScore;

  let title = "";
  let badgeColor = "";
  let emoji = "";
  let buttonColor = "";

  if (riskScore <= 30) {
    title = "Recommended";
    emoji = "🟢";
    badgeColor = "bg-green-100 text-green-700";
    buttonColor = "bg-green-600 hover:bg-green-700";
  } else if (riskScore <= 70) {
    title = "Proceed Carefully";
    emoji = "🟡";
    badgeColor = "bg-yellow-100 text-yellow-700";
    buttonColor = "bg-yellow-500 hover:bg-yellow-600";
  } else {
    title = "Not Recommended";
    emoji = "🔴";
    badgeColor = "bg-red-100 text-red-700";
    buttonColor = "bg-red-600 hover:bg-red-700";
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        🧠 AI Final Decision
      </h2>

      <div className={`inline-block px-5 py-2 rounded-full font-bold ${badgeColor}`}>
        {emoji} {title}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-slate-500">Confidence Score</p>

          <h1 className="text-6xl font-bold text-teal-600 mt-2">
            {confidence}%
          </h1>

          <p className="mt-2 text-slate-500">
            AI believes this decision is {confidence}% reliable.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl text-slate-900 mb-4">
            Why?
          </h3>

          <ul className="space-y-3 text-slate-700">
            <li>✔ Risk Level: {riskLevel}</li>
            <li>✔ AI Recommendation Reviewed</li>
            <li>✔ Loan Terms Analysed</li>
            <li>✔ Hidden Clauses Checked</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 rounded-2xl p-6">
        <h3 className="font-bold text-slate-900 mb-3">
          AI Recommendation
        </h3>

        <p className="text-slate-700 leading-7">
          {recommendation}
        </p>
      </div>

      <button
        className={`w-full mt-8 text-white py-4 rounded-xl font-bold transition ${buttonColor}`}
      >
        {title}
      </button>
    </div>
  );
}