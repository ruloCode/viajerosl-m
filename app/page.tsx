import Header from "@/components/header"
import Hero from "@/components/hero"
import Destinations from "@/components/destinations"
import Culture from "@/components/culture"
import Packages from "@/components/packages"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import BahiaMalagaTours from "@/components/bahia-malaga-tours"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Culture />
        <BahiaMalagaTours />
        <Packages />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
