import { HeroSlider } from "@/components/hero-slider"
import { DestinationsSection } from "@/components/destinations-section"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main>
        <HeroSlider />
        <DestinationsSection />
      </main>
    </div>
  )
}

