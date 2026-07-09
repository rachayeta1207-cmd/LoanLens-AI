"use client";

import { useState } from "react";
import ChatBox from "./ChatBox";

type Props = {
  summary: string;
};

export default function FloatingAI({ summary }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-teal-500 text-white text-3xl shadow-2xl hover:scale-110 transition"
      >
        🤖
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-28 right-6 w-[380px] max-w-[90vw] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden">

          <div className="bg-teal-500 text-white px-5 py-4 flex justify-between items-center">

            <h2 className="font-bold">
              LoanLens AI Assistant
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-xl"
            >
              ✕
            </button>

          </div>

          <div className="p-5 max-h-[600px] overflow-y-auto">
            <ChatBox summary={summary} />
          </div>

        </div>
      )}
    </>
  );
}