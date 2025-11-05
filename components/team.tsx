export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-[#0a2e1a]">Join Our Team</h2>
        <p className="text-gray-600 mb-12 text-lg">Build a career in finance and make an impact</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/professional-team-office.jpg" alt="Team" className="rounded-lg shadow-lg w-full" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0a2e1a] mb-4">Work With Us</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              If you desire to work in an organization where employee motivation is key and passion is rewarded, Zamani
              Capital might be the place for you.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-[#c4ff00] font-bold">✓</span> Competitive compensation
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-[#c4ff00] font-bold">✓</span> Career development opportunities
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-[#c4ff00] font-bold">✓</span> Inclusive work environment
              </li>
            </ul>
            <button className="bg-[#0a2e1a] text-[#c4ff00] px-8 py-3 font-bold text-lg hover:bg-[#1a5a33] transition">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
