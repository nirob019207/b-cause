export default function StrengthsSection() {
  const strengths = [
    "Network in 194 countries with 180 languages for communication support.",
    "Japan’s first recruitment agency specializing in foreign talent.",
    "Experience with 83,000+ corporate clients for collaboration and sales.",
    "Comprehensive expertise and partnerships for diverse needs.",
  ];

  return (
    <section className="py-16 px-4 bg-indigo-50" id="strength">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Our Strengths
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {strengths.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow text-gray-700">
            {i + 1}. {s}
          </div>
        ))}
      </div>
    </section>
  );
}
