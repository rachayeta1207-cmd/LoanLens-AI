import LoanAffordability from "@/components/LoanAffordability";

export default function AffordabilityPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        Loan Affordability Checker
      </h1>

      <div className="max-w-3xl mx-auto">
        <LoanAffordability />
      </div>

    </main>
  );
}