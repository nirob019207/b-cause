import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/model.png"; // adjust path if needed

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Japan Market Entry Support Consulting Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Leveraging our unique network and years of experience in Japan, we
            support your entry into the Japanese market — from market research
            and company setup to HR and marketing assistance.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src={bannerImg}
            alt="Team working together"
            className="rounded-lg shadow-lg"
            width={395}
            height={539}
            priority
          />
        </div>
      </div>
    </section>
  );
}
