export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-[#0a2e1a]">Join Our Team</h2>
        <p className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg">Build a career in finance and make an impact</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="/professional-team-office.jpg" alt="Team" className="rounded-lg shadow-lg w-full" />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a2e1a] mb-3 md:mb-4">Work With Us</h3>
            <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
              If you desire to work in an organization where employee motivation is key and passion is rewarded, Zamani
              Capital might be the place for you.
            </p>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <li className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <span className="text-[#c4ff00] font-bold text-lg">✓</span> Competitive compensation
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <span className="text-[#c4ff00] font-bold text-lg">✓</span> Career development opportunities
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <span className="text-[#c4ff00] font-bold text-lg">✓</span> Inclusive work environment
              </li>
            </ul>
            <button className="bg-[#0a2e1a] text-[#c4ff00] px-6 md:px-8 py-2 md:py-3 font-bold text-base md:text-lg hover:bg-[#1a5a33] transition w-full md:w-auto">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
