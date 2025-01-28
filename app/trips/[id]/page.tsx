import { notFound } from 'next/navigation'
import { getTripById } from '@/app/actions'
import { TripDetails } from '@/components/trip-details'

export default async function TripPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const trip = await getTripById(id)

  if (!trip) {
    notFound()
  }

  return (
    <div className="container py-8">
      <TripDetails trip={trip} />
    </div>
  )
}

