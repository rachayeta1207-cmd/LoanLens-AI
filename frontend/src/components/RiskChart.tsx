"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface RiskChartProps {
  score: number;
}

export default function RiskChart({ score }: RiskChartProps) {
  let color = "#22c55e"; // Green

  if (score > 30) {
    color = "#f59e0b"; // Yellow
  }

  if (score > 70) {
    color = "#ef4444"; // Red
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Risk Score
      </h2>

      <div className="w-52 h-52 mx-auto">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={{
            path: {
              stroke: color,
              strokeLinecap: "round",
            },
            trail: {
              stroke: "#e5e7eb",
            },
            text: {
              fill: color,
              fontSize: "16px",
              fontWeight: "bold",
            },
          }}
        />
      </div>

      <p className="text-center mt-6 text-slate-600">
        AI calculated overall financial risk.
      </p>
    </div>
  );
}