export default function Opportunities() {
  return (
    <section
      id="opportunities"
      className="relative py-24 bg-gradient-to-r from-[#0a2e1a] to-[#1a5a33] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/lagos-slider.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e1a]/80 to-[#1a5a33]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
          Expand Your <span className="text-[#c4ff00]">Opportunities</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-200 max-w-2xl mx-auto text-pretty">
          Access exclusive investment opportunities and financial products designed to accelerate your wealth-building
          journey.
        </p>
        <button className="bg-[#c4ff00] text-[#0a2e1a] px-6 md:px-8 py-2 md:py-3 font-bold text-base md:text-lg hover:bg-white transition">
          EXPLORE NOW
        </button>
      </div>
    </section>
  )
}
