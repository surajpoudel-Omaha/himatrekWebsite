import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getDestinationById } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function DestinationPage({ params: { destinationId } }: { params: { destinationId: string } }) {
  const destination = getDestinationById(destinationId)

  if (!destination) {
    notFound()
  }

  return (
    <div className="container py-8">
      <Breadcrumbs
        items={[
          { label: "Destinations", href: "/destinations" },
          { label: destination.name, href: `/destinations/${destinationId}` },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">{destination.name}</h1>
      <p className="text-xl text-muted-foreground mb-12">{destination.description}</p>

      <h2 className="text-2xl font-semibold mb-6">Available Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destination.activities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{activity.name}</span>
                <Badge>{activity.type}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{activity.description}</CardDescription>
              <Link
                href={`/destinations/${destinationId}/activities/${activity.id}`}
                className="text-blue-600 hover:underline"
              >
                View Trips ({activity.trips.length})
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

