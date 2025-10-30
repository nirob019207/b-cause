import { services } from "@/constants/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">
        Service Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services?.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}
