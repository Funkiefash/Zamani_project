export default function About() {
  const values = [
    {
      icon: "👁️",
      title: "Vision",
      description: "To be the leading investment platform creating generational wealth across Africa by 2030.",
    },
    {
      icon: "🎯",
      title: "Mission",
      description:
        "Democratizing access to premium investment opportunities through innovative technology and expert guidance.",
    },
    {
      icon: "⭐",
      title: "Core Values",
      list: ["Integrity", "Excellence", "Innovation", "Transparency", "Client-Focused"],
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[#0a2e1a] text-center">Why Choose Zamani?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-[#0a2e1a] mb-4">{value.title}</h3>
              {value.list ? (
                <ul className="space-y-2 text-gray-700">
                  {value.list.map((item, i) => (
                    <li key={i} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0a2e1a] to-[#1a5a33] text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-4 text-center">
            <span className="text-[#c4ff00]">Trusted by thousands</span> of investors
          </h3>
          <p className="text-center text-lg text-gray-100">
            Join a growing community of investors who are building wealth with Zamani Capital's proven strategies and
            personalized support.
          </p>
        </div>
      </div>
    </section>
  )
}
