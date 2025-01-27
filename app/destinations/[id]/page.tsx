import { getDestinations, getActivitiesByDestination } from "@/app/actions"
import { ActivityList } from "@/components/activity-list"
import { notFound } from "next/navigation"

export default async function DestinationPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const destinations = await getDestinations()
  const destination = destinations.find((d) => d.id === id)

  if (!destination) {
    notFound()
  }

  const activities = await getActivitiesByDestination(id)

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">{destination.name}</h1>
      <p className="text-xl text-muted-foreground mb-12">{destination.description}</p>

      <h2 className="text-2xl font-semibold mb-6">Available Activities</h2>
      <ActivityList activities={activities} />
    </div>
  )
}

