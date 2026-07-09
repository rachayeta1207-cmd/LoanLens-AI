"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();

  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("https://airy-youthfulness-production-2c40.up.railway.app", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      if (data.error) {
      alert(data.error);
      setLoading(false);
      return;
    }
      console.log("Backend Response:", data);
      localStorage.setItem("analysis", JSON.stringify(data));

      localStorage.setItem(
        "analysis",
        JSON.stringify(data)
      );

      router.push("/analysis");

    } catch (error) {
      console.error(error);

      alert(
        "Unable to analyze the document.\n\nPlease make sure:\n\n• Backend server is running\n• PDF is valid\n• Internet connection is working."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-teal-50">

      {/* ================= Loading Overlay ================= */}

      {loading && (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-10 w-[90%] max-w-md text-center">

            <div className="w-20 h-20 mx-auto border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>

            <h2 className="mt-8 text-3xl font-bold text-slate-900">
              Analyzing Loan...
            </h2>

            <p className="mt-4 text-slate-600">
              Our AI is reviewing your loan agreement.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Detecting hidden fees • Checking interest rate • Finding risky clauses
            </p>

            <div className="mt-8 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-teal-500 h-2 w-2/3 rounded-full animate-pulse"></div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Please wait...
            </p>

          </div>

        </div>

      )}

      {/* ================= Navbar ================= */}

      <nav className="flex items-center justify-between px-5 md:px-10 py-5 bg-slate-900 shadow-lg">

        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-white"
        >
          LoanLens AI
        </Link>

        <Link
          href="/"
          className="text-white hover:text-teal-400 transition"
        >
          ← Back to Home
        </Link>

      </nav>
            {/* ================= Heading ================= */}

      <section className="max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-8">

        <div className="text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Upload Your Loan Agreement
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-8">
            Upload your loan agreement in PDF format.
            Our AI will analyze hidden fees,
            risky clauses, penalties,
            and generate a complete financial risk report.
          </p>

        </div>

        {/* ================= Upload Card ================= */}

        <div className="mt-12 md:mt-16 bg-white rounded-3xl shadow-2xl p-6 md:p-10 hover:shadow-3xl transition duration-300">

          <div className="border-2 border-dashed border-teal-400 rounded-3xl p-8 md:p-16 text-center">

            <div className="text-6xl md:text-7xl">
              📄
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-bold text-slate-900">
              Drag & Drop Your PDF
            </h2>

            <p className="mt-3 text-slate-600">
              or choose a PDF from your computer
            </p>

            <label className="inline-block mt-8 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">

              Choose PDF

              <input
                type="file"
                accept=".pdf"
                disabled={loading}
                onChange={handleFileChange}
                className="hidden"
              />

            </label>

            {fileName && (

              <div className="mt-8 bg-green-100 border border-green-300 rounded-xl p-5">

                <h3 className="font-bold text-green-700">
                  ✓ File Ready for Analysis
                </h3>

                <p className="mt-2 text-slate-700 break-all">
                  {fileName}
                </p>

              </div>

            )}

          </div>
                    {/* ================= Information Cards ================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            {/* Secure Upload */}

            <div className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">

              <h3 className="text-xl font-bold text-slate-900">
                🔒 Secure Upload
              </h3>

              <p className="text-slate-700 mt-3 leading-7">
                Your loan document is encrypted during upload
                and processed securely. We never permanently
                store your files.
              </p>

            </div>

            {/* AI Analysis */}

            <div className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">

              <h3 className="text-xl font-bold text-slate-900">
                ⚡ AI Analysis
              </h3>

              <p className="text-slate-700 mt-3 leading-7">
                Gemini AI extracts important loan details,
                detects hidden fees, risky clauses,
                penalties and unusual terms.
              </p>

            </div>

            {/* Instant Report */}

            <div className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">

              <h3 className="text-xl font-bold text-slate-900">
                📊 Instant Report
              </h3>

              <p className="text-slate-700 mt-3 leading-7">
                Receive an easy-to-understand AI-generated
                financial report within a few seconds.
              </p>

            </div>

          </div>

          {/* ================= Buttons ================= */}

          <div className="flex flex-col md:flex-row justify-between gap-4 mt-12">

            <Link
              href="/"
              className="border border-slate-300 text-slate-900 px-8 py-3 rounded-xl hover:bg-slate-100 transition text-center"
            >
              ← Back
            </Link>

            <button
              onClick={handleUpload}
              disabled={!selectedFile || loading}
              className={`flex items-center justify-center gap-3 px-8 py-3 rounded-xl text-white font-semibold transition ${
                selectedFile
                  ? "bg-slate-900 hover:bg-slate-800"
                  : "bg-slate-400 cursor-not-allowed"
              }`}
            >

              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  <span>Analyzing Document...</span>
                </>
              ) : (
                <>
                  Analyze Document →
                </>
              )}

            </button>

          </div>

        </div>

      </section>
            {/* ================= Footer ================= */}

      <footer className="bg-slate-900 mt-16">

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Brand */}

            <div>

              <h2 className="text-2xl font-bold text-white">
                LoanLens AI
              </h2>

              <p className="mt-3 text-slate-400 leading-7">
                AI-powered loan agreement analysis that helps
                borrowers identify hidden fees, risky clauses,
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

                <li>✔ Hidden Clause Detection</li>

                <li>✔ Smart Risk Score</li>

                <li>✔ AI Recommendations</li>

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
                  href="/analysis"
                  className="text-slate-400 hover:text-white transition"
                >
                  Analysis
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