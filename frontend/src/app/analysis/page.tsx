"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";
import RiskChart from "@/components/RiskChart";
import ChatBox from "@/components/ChatBox";
import EMICalculator from "@/components/EMICalculator";
import LoanAffordability from "@/components/LoanAffordability";
import NegotiationTips from "@/components/NegotiationTips";
import LoanSuggestions from "@/components/LoanSuggestions";
import AIFinalVerdict from "@/components/AIFinalVerdict";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingAI from "@/components/FloatingAI";



export default function AnalysisPage() {

 const [analysis, setAnalysis] = useState<any>(null);
 
  useEffect(() => {
    const stored = localStorage.getItem("analysis");

    

    if (stored) {
      const parsed = JSON.parse(stored);

      console.log("Stored Analysis:", parsed);
      setAnalysis(parsed);
    }
  }, []);

  const riskColor = !analysis
    ? "yellow"
    : analysis.risk_score <= 30
    ? "green"
    : analysis.risk_score <= 70
    ? "yellow"
    : "red";

  const downloadReport = () => {
    if (!analysis) return;

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("LoanLens AI", 20, 20);

    doc.setFontSize(16);
    doc.text("AI Loan Analysis Report", 20, 32);

    doc.setDrawColor(0);
    doc.line(20, 36, 190, 36);

    doc.setFontSize(14);

    doc.text(`Risk Score : ${analysis.risk_score}`, 20, 50);
    doc.text(`Risk Level : ${analysis.risk_level}`, 20, 60);
    doc.text(`Interest Rate : ${analysis.interest_rate}`, 20, 70);
    doc.text(`Processing Fee : ${analysis.processing_fee}`, 20, 80);
    doc.text(`Hidden Charges : ${analysis.hidden_charges}`, 20, 90);

    doc.line(20, 95, 190, 95);

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("AI Summary", 20, 108);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(
      doc.splitTextToSize(analysis.summary, 170),
      20,
      118
    );

    let y = 170;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Recommendation", 20, y);

    y += 10;

    doc.setFont("helvetica", "normal");

    doc.text(
      doc.splitTextToSize(
        analysis.recommendation,
        170
      ),
      20,
      y
    );

    y += 40;

    doc.setFont("helvetica", "bold");

    const verdictTitle =
      analysis.risk_score <= 30
        ? "OK - Overall Verdict"
        : analysis.risk_score <= 70
        ? "Warning - Overall Verdict"
        : "High Risk - Overall Verdict";

    doc.text(verdictTitle, 20, y);

    y += 10;

    doc.setFont("helvetica", "normal");

    doc.text(
      doc.splitTextToSize(
        analysis.verdict,
        170
      ),
      20,
      y
    );

    doc.save("LoanLens_AI_Report.pdf");
  };

  if (!analysis) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-700">
          Loading AI Analysis...
        </h1>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-slate-100">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-5 md:px-10 py-4 md:py-5 bg-slate-900 shadow-lg">

        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-white"
        >
          LoanLens AI
        </Link>

        <Link
          href="/upload"
          className="text-sm md:text-base text-white hover:text-teal-400 transition"
        >
          Analyze Another Loan
        </Link>

      </nav>

      {/* Header */}

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-10">

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          AI Loan Analysis Report
        </h1>

        <p className="mt-4 text-base md:text-xl text-slate-600">
          Your uploaded document has been analyzed successfully.
        </p>


        <div
          className={`mt-6 inline-block px-5 py-2 rounded-full font-semibold ${
            riskColor === "green"
              ? "bg-green-100 text-green-700"
              : riskColor === "yellow"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {analysis.risk_level}
        </div>

      </section>
            {/* Score Cards */}

      <section className="max-w-7xl mx-auto px-4 md:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Risk Score */}

          <AnimatedCard delay={0}>
          <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-slate-500">
              Risk Score
            </p>

            <h1
              className={`text-4xl md:text-5xl font-bold mt-4 ${
                riskColor === "green"
                  ? "text-green-600"
                  : riskColor === "yellow"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              <AnimatedCounter value={analysis.risk_score} />
            </h1>

            <p
              className={`mt-2 font-semibold ${
                riskColor === "green"
                  ? "text-green-600"
                  : riskColor === "yellow"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {analysis.risk_level}
            </p>

          </div>
          </AnimatedCard>

          {/* Interest Rate */}

           <AnimatedCard delay={0}>
           <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-slate-500">
              Interest Rate
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mt-4">
              {analysis.interest_rate}
            </h1>

          </div>
          </AnimatedCard>

          {/* Processing Fee */}
          <AnimatedCard delay={0.4}>

          <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-slate-500">
              Processing Fee
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              {analysis.processing_fee}
            </h1>

          </div>
          </AnimatedCard>

          {/* Hidden Charges */}
          <AnimatedCard delay={0.6}>

          <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-slate-500">
              Hidden Charges
            </p>

            <h1
              className={`text-4xl md:text-5xl font-bold mt-4 ${
                riskColor === "green"
                  ? "text-green-600"
                  : riskColor === "yellow"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {analysis.hidden_charges}
            </h1>

          </div>
          </AnimatedCard>

        </div>

      </section>

      {/* Main Dashboard */}

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* AI Summary */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              AI Summary
            </h2>


            <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 rounded-xl p-5">

              <h3 className="font-bold text-yellow-700">
                Recommendation
              </h3>

              <p className="mt-3 text-slate-800">
                {analysis.recommendation}
              </p>

            </div>

          </div>
                    <RiskChart score={analysis.risk_score} />

          {/* Overall Verdict */}

          <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Overall Verdict
            </h2>

            <div
              className={`rounded-2xl p-6 text-center ${
                riskColor === "green"
                  ? "bg-green-100"
                  : riskColor === "yellow"
                  ? "bg-yellow-100"
                  : "bg-red-100"
              }`}
            >

              <h1 className="text-5xl md:text-6xl">

                {riskColor === "green"
                  ? "✅"
                  : riskColor === "yellow"
                  ? "⚠️"
                  : "❌"}

              </h1>

              <h2
                className={`mt-4 text-2xl font-bold ${
                  riskColor === "green"
                    ? "text-green-700"
                    : riskColor === "yellow"
                    ? "text-yellow-700"
                    : "text-red-700"
                }`}
              >
                {analysis.risk_level}
              </h2>

              <p className="mt-4 text-slate-700 leading-7">
                {analysis.verdict}
              </p>

            </div>

            <button
              onClick={downloadReport}
              className="w-full mt-8 bg-teal-500 hover:bg-teal-600 active:scale-95 transition-all duration-300 text-white py-4 rounded-xl font-semibold text-lg shadow-md"
            >
              📄 Download PDF Report
            </button>

            <Link
              href="/upload"
              className="block text-center mt-4 border border-slate-300 rounded-xl py-3 hover:bg-slate-100 transition"
            >
              Analyze Another Document
            </Link>

          </div>

        </div>

      </section>

      
      {/* EMI Calculator */}

      <section className="max-w-7xl mx-auto px-4 md:px-10 pb-10 space-y-10">
      
        <AIFinalVerdict riskScore={analysis.risk_score} riskLevel={analysis.risk_level} recommendation={analysis.recommendation}
/>
        <NegotiationTips riskLevel={analysis.risk_level} />
        <LoanSuggestions currentRate={analysis.interest_rate}/>

        <EMICalculator  />
        <LoanAffordability />
        

      </section>

      <FloatingAI summary={analysis.summary} />


       {/* Footer */}

      <footer className="bg-slate-900 mt-10">

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Brand */}

            <div>

              <h2 className="text-2xl font-bold text-white">
                LoanLens AI
              </h2>

              <p className="mt-3 text-slate-400 leading-7">
                AI-powered loan agreement analysis that helps
                borrowers identify hidden charges, risky clauses,
                and understand financial risks before signing.
              </p>

            </div>

            {/* Features */}

            <div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Features
              </h3>

              <ul className="space-y-2 text-slate-400">

                <li>✔ AI Loan Analysis</li>

                <li>✔ Risk Score</li>

                <li>✔ Hidden Clause Detection</li>

                <li>✔ Smart Recommendations</li>

                <li>✔ PDF Report Download</li>

              </ul>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>

              <div className="flex flex-col space-y-3">

                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition"
                >
                  Home
                </Link>

                <Link
                  href="/upload"
                  className="text-slate-400 hover:text-white transition"
                >
                  Upload Document
                </Link>

              </div>

            </div>

          </div>

          <div className="border-t border-slate-700 mt-10 pt-6 text-center">

            <p className="text-slate-400">

              © {new Date().getFullYear()} LoanLens AI • AI Powered Loan Intelligence

            </p>

            <p className="text-slate-500 text-sm mt-2">

              Built using Next.js • FastAPI • Gemini AI

            </p>

          </div>

        </div>

      </footer>

    </main>
  );

}
