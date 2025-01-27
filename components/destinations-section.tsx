import { getDestinations } from "@/app/actions"
import { DestinationGrid } from "@/components/destination-grid"

export async function DestinationsSection() {
  const destinations = await getDestinations()

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Destinations</h2>
        <DestinationGrid destinations={destinations} />
      </div>
    </section>
  )
}

