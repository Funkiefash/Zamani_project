import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Investment Portfolios",
      description: "Diversified investment options tailored to your goals and risk profile",
      image: "/service-investment.jpg",
    },
    {
      title: "Wealth Management",
      description: "Expert guidance for comprehensive wealth planning and asset growth",
      image: "/service-wealth.jpg",
    },
    {
      title: "Savings Plans",
      description: "Secure savings programs with competitive returns and flexible terms",
      image: "/service-savings.jpg",
    },
    {
      title: "Financial Advisory",
      description: "Personalized financial strategies designed for your future success",
      image: "/service-advisory.jpg",
    },
    {
      title: "Business Loans",
      description: "Quick and flexible loan solutions for entrepreneurs and businesses",
      image: "/service-loans.jpg",
    },
    {
      title: "Personal Finance",
      description: "Comprehensive solutions for personal financial management and growth",
      image: "/service-personal.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e1a] to-[#1a5a33] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-[#c4ff00] text-xl">Comprehensive financial solutions for every stage of your journey</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow hover:shadow-xl transition border-l-4 border-[#c4ff00] group cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0a2e1a] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <button className="text-[#c4ff00] font-bold hover:text-[#0a2e1a] flex items-center gap-2 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2e1a] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-[#c4ff00] mb-8 text-lg">
            Discover how our services can help you achieve your financial goals
          </p>
          <button className="bg-[#c4ff00] text-[#0a2e1a] px-8 py-3 font-bold hover:bg-white transition">
            Contact Our Team Today
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
