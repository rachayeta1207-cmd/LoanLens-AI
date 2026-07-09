type Props = {
  riskLevel: string;
};

export default function NegotiationTips({ riskLevel }: Props) {
  const tips =
    riskLevel === "Low Risk"
      ? [
          "Compare offers from at least two banks before signing.",
          "Ask for a lower processing fee.",
          "Request a small reduction in interest rate.",
          "Confirm there are no hidden charges.",
        ]
      : riskLevel === "Medium Risk"
      ? [
          "Negotiate the interest rate before accepting.",
          "Ask for removal of foreclosure charges.",
          "Request all fees in written form.",
          "Avoid unnecessary insurance add-ons.",
          "Ask whether processing fees can be waived.",
        ]
      : [
          "Do NOT sign immediately.",
          "Request complete fee breakup.",
          "Negotiate every hidden charge.",
          "Ask for a lower interest rate.",
          "Compare multiple lenders first.",
          "Consult a financial advisor before proceeding.",
        ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        🤝 AI Loan Negotiation Tips
      </h2>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-teal-50 rounded-xl p-4"
          >
            <span className="text-2xl">✔</span>

            <p className="text-slate-700">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}