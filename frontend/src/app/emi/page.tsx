import EMICalculator from "@/components/EMICalculator";

export default function EMIPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        EMI Calculator
      </h1>

      <div className="max-w-3xl mx-auto">
        <EMICalculator />
      </div>

    </main>
  );
}