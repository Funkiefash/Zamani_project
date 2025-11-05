export default function Services() {
  const services = [
    {
      title: "Investment Portfolios",
      description: "Diversified investment options tailored to your goals",
      icon: "💼",
    },
    {
      title: "Wealth Management",
      description: "Expert guidance for comprehensive wealth planning",
      icon: "💰",
    },
    {
      title: "Savings Plans",
      description: "Secure savings programs with competitive returns",
      icon: "🏦",
    },
    {
      title: "Financial Advisory",
      description: "Personalized financial strategies for your future",
      icon: "📊",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-[#0a2e1a]">Our Services</h2>
        <p className="text-gray-600 mb-12 text-lg">Comprehensive financial solutions for every stage of your journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0a2e1a] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-[#c4ff00] font-bold hover:gap-2 flex items-center gap-1 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
