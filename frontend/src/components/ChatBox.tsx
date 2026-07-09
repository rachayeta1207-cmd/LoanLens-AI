"use client";

import { useState } from "react";

type Props = {
  summary: string;
};

export default function ChatBox({ summary }: Props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary,
          question,
        }),
      });

      const data = await response.json();

      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer("No response received.");
      }
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        🤖 Ask AI About Your Loan
      </h2>

      <p className="text-slate-600 mb-5">
        Ask any question related to your loan agreement and get an AI-powered explanation.
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Example: Is this loan safe? Can I repay early? Are there any hidden charges?"
        rows={5}
        className="w-full rounded-xl border border-slate-300 bg-white text-black placeholder:text-gray-500 p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
      />

      <button
        onClick={askAI}
        disabled={loading}
        className="mt-5 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition disabled:opacity-60"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="mt-8 bg-slate-100 rounded-2xl p-6 border border-slate-200">

          <h3 className="text-xl font-bold text-slate-900 mb-4">
            AI Answer
          </h3>

          <p className="text-slate-700 leading-8 whitespace-pre-line">
            {answer}
          </p>

        </div>
      )}

    </div>
  );
}