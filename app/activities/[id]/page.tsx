import { notFound } from "next/navigation"
import { getActivityById } from "@/lib/data"
import { ItineraryTimeline } from "@/components/itinerary-timeline"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivityPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const activity = getActivityById(id)

  if (!activity) {
    notFound()
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-4">{activity.name}</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <Badge variant="outline" className="text-lg py-1 px-3">
          {activity.type}
        </Badge>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{activity.description}</p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Available Trips</h2>
      {activity.trips.map((trip) => (
        <Card key={trip.id} className="mb-4">
          <CardHeader>
            <CardTitle>{trip.name}</CardTitle>
            <CardDescription>Duration: {trip.duration}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-4">
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

            <h3 className="text-xl font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {trip.highlights.map((highlight, index) => (
                <li key={index} className="text-muted-foreground">
                  {highlight}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Itinerary</h3>
            <ItineraryTimeline itinerary={trip.itinerary} />

            <div className="mt-4">
              <Button size="lg">Book This Trip</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

