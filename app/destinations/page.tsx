import { getDestinations } from "@/app/actions"
import { DestinationGrid } from "@/components/destination-grid"

export default async function DestinationsPage() {
  const destinations = await getDestinations()

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Destinations</h1>
      <DestinationGrid destinations={destinations} />
    </div>
  )
}

