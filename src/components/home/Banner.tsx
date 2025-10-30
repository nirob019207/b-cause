import Image from "next/image"
import banners from '@/assets/model.png'

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 text-white py-16 md:py-24 px-6 md:px-12">
      <div className="absolute top-8 left-12 opacity-80">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
          <path
            d="M10 30C5 30 2 27 2 22C2 18 5 15 10 15C12 8 18 3 25 3C33 3 40 8 42 15C47 15 50 18 50 22C50 27 47 30 42 30H10Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute top-20 right-20 opacity-70">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
          <path
            d="M15 40C8 40 3 35 3 28C3 22 8 17 15 17C17 8 24 2 32 2C42 2 50 8 52 17C59 17 64 22 64 28C64 35 59 40 52 40H15Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 opacity-60">
        <svg width="70" height="45" viewBox="0 0 70 45" fill="none">
          <path
            d="M8 28C3 28 0 25 0 20C0 16 3 13 8 13C10 7 15 2 22 2C30 2 37 7 39 13C44 13 47 16 47 20C47 25 44 28 39 28H8Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            Japan Market Entry Support Consulting Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-blue-50 mb-8">
            Leveraging our unique network and years of experience in Japan, we support your entry into the Japanese
            market — from market research and company setup to HR and marketing assistance.
          </p>
         
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src={banners}
              alt="Diverse team working together on Japan market entry"
              width={450}
              height={550}
              priority
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
