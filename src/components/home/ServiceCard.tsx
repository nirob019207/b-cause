/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  CheckCircle,
  Code,
  Settings,
  Star,
  Layout,
} from "lucide-react";

export default function ServiceCard({ title, subtitle, points }: any) {
  // Choose an icon dynamically based on the title
  const getIcon = () => {
    if (title.toLowerCase().includes("design")) return <Layout size={24} />;
    if (title.toLowerCase().includes("development")) return <Code size={24} />;
    if (title.toLowerCase().includes("service")) return <Settings size={24} />;
    return <Star size={24} />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full border-t-4 border-indigo-600">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full mb-4">
        {getIcon()}
      </div>

      {/* Title & Subtitle */}
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{subtitle}</p>

      {/* Points List */}
      <ul className="list-none space-y-2 text-gray-700 flex-1">
        {points.map((point: any, index: any) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
