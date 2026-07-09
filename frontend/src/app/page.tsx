export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-5">

          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            LoanLens AI
          </h1>

          <div className="hidden md:flex items-center gap-8">

            <a href="#features" className="text-white hover:text-teal-400">
              Features
            </a>

            <a href="#about" className="text-white hover:text-teal-400">
              About
            </a>

            <a
              href="/upload"
              className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-xl text-white font-semibold"
            >
              Get Started
            </a>

          </div>

          <a
            href="/upload"
            className="md:hidden bg-teal-500 px-4 py-2 rounded-lg text-white"
          >
            Start
          </a>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full">
              AI Powered Loan Intelligence
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">

              Understand Every Loan

              <br />

              Before You Sign.

            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-8">

              LoanLens AI helps borrowers detect hidden fees,
              risky clauses, excessive interest rates,
              and confusing legal language before taking a loan.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <a
                href="/upload"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Analyze Loan
              </a>
               

            </div>

          </div>

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-900">

              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Sample Loan Report
              </h2>

              <div className="space-y-6">

                <div className="flex justify-between">
                  <p className="text-slate-600">Interest Rate</p>
                  <p className="font-bold text-red-600">15.9%</p>
                </div>

                <div className="flex justify-between">
                  <p>Processing Fee</p>
                  <p className="font-bold">₹10,000</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-slate-600">Hidden Charges</p>
                  <p className="font-bold text-orange-600">
                    3 Detected
                  </p>
                </div>

                <div className="border-t pt-6">

                  <p className="text-slate-600">Risk Score</p>

                  <h1 className="text-5xl font-bold text-orange-600">
                    72 / 100
                  </h1>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= STATS ================= */}

<section className="py-20 px-5 bg-white">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Hidden Fees */}

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <h1 className="text-5xl font-bold text-teal-600">
          95%
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          Hidden Fees Detected
        </p>

      </div>

      {/* Documents */}

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <h1 className="text-5xl font-bold text-teal-600">
          10K+
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          Loan Documents Analyzed
        </p>

      </div>

      {/* AI Assistance */}

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <h1 className="text-5xl font-bold text-teal-600">
          24/7
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          AI Assistance
        </p>

      </div>

      {/* Satisfaction */}

      <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <h1 className="text-5xl font-bold text-teal-600">
          99%
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          User Satisfaction
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= FINANCIAL TOOLS ================= */}

<section className="py-20 bg-slate-50 px-5">

  <div className="max-w-7xl mx-auto">

    <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900">
      Financial Tools
    </h1>

    <p className="text-center text-slate-600 mt-5 text-lg">
      Use our smart calculators before analyzing your loan.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

      {/* EMI Calculator */}

      <a
        href="/emi"
        className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >

        <div className="text-6xl mb-6">💰</div>

        <h2 className="text-3xl font-bold text-slate-900">
          EMI Calculator
        </h2>

        <p className="text-slate-600 mt-5 leading-8 text-lg">
          Calculate your monthly EMI instantly using your
          loan amount, interest rate and loan tenure.
        </p>

        <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition">
          Open Calculator →
        </button>

      </a>

      {/* Loan Affordability */}

      <a
        href="/affordability"
        className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >

        <div className="text-6xl mb-6">📊</div>

        <h2 className="text-3xl font-bold text-slate-900">
          Loan Affordability Checker
        </h2>

        <p className="text-slate-600 mt-5 leading-8 text-lg">
          Check whether your salary can comfortably
          handle a new loan EMI before applying.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition">
          Check Affordability →
        </button>

      </a>

    </div>

  </div>

</section>
      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="bg-slate-900 py-16 sm:py-24 px-5"
      >
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            About LoanLens AI
          </h1>

          <p className="mt-8 text-slate-300 text-base sm:text-xl leading-8 sm:leading-10">
            LoanLens AI is an AI-powered fintech platform that helps
            borrowers understand loan agreements before signing.

            <br /><br />

            Our AI analyzes loan documents to identify hidden charges,
            risky clauses, high interest rates, foreclosure penalties,
            and confusing legal language.

            <br /><br />

            We simplify complex financial documents into easy-to-read
            insights so borrowers can make smarter financial decisions.
          </p>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-black">

        <div className="max-w-7xl mx-auto px-5 py-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}

            <div>

              <h2 className="text-2xl font-bold text-white">
                LoanLens AI
              </h2>

              <p className="mt-4 text-slate-400 leading-7">
                AI-powered loan analysis that helps borrowers detect hidden
                fees, understand risks, and make informed financial decisions.
              </p>

            </div>

            {/* Features */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-4">
                Features
              </h3>

              <ul className="space-y-3 text-slate-400">

                <li>✔ AI Loan Analysis</li>
                <li>✔ EMI Calculator</li>
                <li>✔ Loan Affordability Checker</li>
                <li>✔ AI Risk Score</li>
                <li>✔ AI Recommendations</li>

              </ul>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Links
              </h3>

              <div className="flex flex-col space-y-3">

                <a
                  href="/"
                  className="text-slate-400 hover:text-white transition"
                >
                  Home
                </a>

                <a
                  href="/upload"
                  className="text-slate-400 hover:text-white transition"
                >
                  Upload Document
                </a>

                <a
                  href="/emi"
                  className="text-slate-400 hover:text-white transition"
                >
                  EMI Calculator
                </a>

                <a
                  href="/affordability"
                  className="text-slate-400 hover:text-white transition"
                >
                  Affordability Checker
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-slate-700 mt-10 pt-6 text-center">

            <p className="text-slate-400 text-sm sm:text-base">
              © {new Date().getFullYear()} LoanLens AI • AI Powered Loan Intelligence
            </p>

            <p className="text-slate-500 text-sm mt-2">
              Built with Next.js • FastAPI • Gemini AI
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}
      
