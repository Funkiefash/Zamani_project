"use client"

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
      list: ["Integrity", "Excellence", "Client-Focused"],
    },
  ]

  const stats = [
    { number: "50K+", label: "Investors" },
    { number: "$2B+", label: "Assets Managed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
  ]

  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-[#0a2e1a] text-center">Why Choose Zamani?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center px-2">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{value.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0a2e1a] mb-3 md:mb-4">{value.title}</h3>
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

        <div className="w-screen relative left-[calc(-50vw+50%)] bg-gradient-to-r from-[#0a2e1a] to-[#1a5a33] text-white py-16 md:py-32">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center">
              <span className="text-[#c4ff00]">Trusted by thousands</span> of investors
            </h3>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-12 md:mb-20 max-w-3xl mx-auto leading-relaxed">
              Join a growing community of investors who are building wealth with Zamani Capital's proven strategies and
              personalized support. We've helped our clients achieve their financial goals.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:p-8 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c4ff00] mb-2 md:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-100">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonials Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: "Chioma Okafor",
                  role: "Entrepreneur",
                  text: "Zamani Capital transformed my investment journey. The guidance and returns have been exceptional.",
                },
                {
                  name: "Kwame Mensah",
                  role: "Business Owner",
                  text: "Professional team, transparent process, and impressive results. Highly recommended for serious investors.",
                },
                {
                  name: "Amara Hassan",
                  role: "Corporate Executive",
                  text: "Best investment decision I've made. The personalized approach and support is unmatched.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-lg hover:bg-white/20 transition-all"
                >
                  <p className="text-gray-100 mb-4 md:mb-6 italic text-sm md:text-base lg:text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-white/20 pt-3 md:pt-4">
                    <p className="font-bold text-[#c4ff00] text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-gray-300 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
