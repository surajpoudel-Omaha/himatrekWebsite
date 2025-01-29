import { notFound } from "next/navigation"
import Image from "next/image"
import { getTripById, getActivityById, getDestinationById } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function TripPage({
  params: { destinationId, activityId, tripId },
}: {
  params: { destinationId: string; activityId: string; tripId: string }
}) {
  const destination = getDestinationById(destinationId)
  const activity = getActivityById(destinationId, activityId)
  const trip = getTripById(destinationId, activityId, tripId)

  if (!destination || !activity || !trip) {
    notFound()
  }

  return (
    <div className="container py-8">
      <Breadcrumbs
        items={[
          { label: "Destinations", href: "/destinations" },
          { label: destination.name, href: `/destinations/${destinationId}` },
          { label: activity.name, href: `/destinations/${destinationId}/activities/${activityId}` },
          { label: trip.name, href: `/destinations/${destinationId}/activities/${activityId}/trips/${tripId}` },
        ]}
      />
      <div className="relative h-64 w-full mb-8">
        <Image src={trip.imageUrl || "/placeholder.svg"} alt={trip.name} fill className="object-cover rounded-lg" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{trip.name}</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <Badge variant="outline" className="text-lg py-1 px-3">
          {trip.duration}
        </Badge>
        <Badge
          variant={
            trip.difficulty === "Easy" ? "secondary" : trip.difficulty === "Moderate" ? "default" : "destructive"
          }
          className="text-lg py-1 px-3"
        >
          {trip.difficulty}
        </Badge>
        <Badge variant="outline" className="text-lg py-1 px-3">
          ${trip.price}
        </Badge>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {trip.highlights.map((highlight, index) => (
              <li key={index} className="text-muted-foreground">
                {highlight}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Itinerary</CardTitle>
          <CardDescription>Day-by-day breakdown of the trip</CardDescription>
        </CardHeader>
        <CardContent>
          {trip.itinerary.map((day) => (
            <div key={day.day} className="mb-6 last:mb-0 border-b pb-4 last:border-b-0">
              <h3 className="text-lg font-semibold mb-2">
                Day {day.day}: {day.title}
              </h3>
              <p className="text-muted-foreground mb-2">{day.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <p>
                  <strong>Accommodation:</strong> {day.accommodation}
                </p>
                <p>
                  <strong>Meals:</strong> {day.meals}
                </p>
                {day.elevation && (
                  <p>
                    <strong>Elevation:</strong> {day.elevation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

