import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getActivityById, getDestinationById } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function ActivityPage({
  params: { destinationId, activityId },
}: {
  params: { destinationId: string; activityId: string }
}) {
  const destination = getDestinationById(destinationId)
  const activity = getActivityById(destinationId, activityId)

  if (!destination || !activity) {
    notFound()
  }

  return (
    <div className="container py-8">
      <Breadcrumbs
        items={[
          { label: "Destinations", href: "/destinations" },
          { label: destination.name, href: `/destinations/${destinationId}` },
          { label: activity.name, href: `/destinations/${destinationId}/activities/${activityId}` },
        ]}
      />
      <h1 className="text-4xl font-bold mb-4">{activity.name}</h1>
      <p className="text-xl text-muted-foreground mb-8">{activity.description}</p>

      <h2 className="text-2xl font-semibold mb-6">Available Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activity.trips.map((trip) => (
          <Card key={trip.id} className="hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={trip.imageUrl || "/placeholder.svg"}
                alt={trip.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{trip.name}</CardTitle>
              <CardDescription>Duration: {trip.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant={
                    trip.difficulty === "Easy"
                      ? "secondary"
                      : trip.difficulty === "Moderate"
                        ? "default"
                        : "destructive"
                  }
                >
                  {trip.difficulty}
                </Badge>
                <Badge variant="outline">${trip.price}</Badge>
              </div>
              <Link
                href={`/destinations/${destinationId}/activities/${activityId}/trips/${trip.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

