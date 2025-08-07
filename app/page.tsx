import Hero from '@/components/hero'
import VisionMission from '@/components/vision-mission'
import Programs from '@/components/programs'
import Facilities from '@/components/facilities'
import Events from '@/components/events'
import Portfolio from '@/components/portfolio'
import Products from '@/components/products'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-blueprint text-white overflow-x-hidden">
      <Navbar />
      <div className="blueprint-grid">
        <Hero />
        <VisionMission />
        <Programs />
        <Facilities />
        <Events />
        <Portfolio />
        <Products />
        <Footer />
      </div>
    </main>
  )
}
