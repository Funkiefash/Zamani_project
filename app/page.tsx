import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Opportunities from "@/components/opportunities"
import Team from "@/components/team"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Opportunities />
      <Team />
      <Footer />
    </main>
  )
}
