/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function ServiceCard({ title, subtitle, points }:any) {
  return (
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{subtitle}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 flex-1">
        {points.map((point:any, index:any) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>  )
}
