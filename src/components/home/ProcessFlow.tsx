export default function ProcessFlow() {
  const stages = [
    { field: "Market Insight & Strategy", phase: "Before Entry", keyword: "Learn • Plan" },
    { field: "Establishment & Setup", phase: "Early Entry", keyword: "Laying the Foundation" },
    { field: "Organization & HR", phase: "Operational Prep", keyword: "Motivating People" },
    { field: "Market Entry & Growth", phase: "Expansion", keyword: "Sell • Grow" },
  ];

  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold text-indigo-700 mb-12">Process Flow</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stages.map((stage, i) => (
          <div key={i} className="border-t-4 border-indigo-500 rounded-xl bg-gray-50 shadow p-6">
            <h3 className="text-xl font-semibold">{stage.field}</h3>
            <p className="text-gray-500">{stage.phase}</p>
            <p className="mt-2 text-indigo-600 font-medium">{stage.keyword}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
