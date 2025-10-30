export default function PastPerformance() {
  const examples = [
    "Survey of 63 countries for major bank name selection.",
    "Business alliance between Japanese and Korean steel companies.",
    "Embassy business briefing event coordination.",
    "Dispatched 400 interpreters for 4-day international exhibition.",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Past Performance</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-10">
        Since 1998, b-cause, Inc. has completed over 2,700 multilingual projects,
        offering solutions for translation, recruitment, and market expansion.
      </p>
      <ul className="max-w-2xl mx-auto space-y-3 text-gray-700 text-left list-disc list-inside">
        {examples.map((ex, i) => (
          <li key={i}>{ex}</li>
        ))}
      </ul>
    </section>
  );
}
