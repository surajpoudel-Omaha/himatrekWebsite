import Link from "next/link"
import Image from "next/image"
import { getDestinations } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function DestinationsPage() {
  const destinations = getDestinations()

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }]} />
      <h1 className="text-4xl font-bold text-center mb-8">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={destination.imageUrl || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{destination.description}</CardDescription>
              <Link href={`/destinations/${destination.id}`} className="text-blue-600 hover:underline">
                Explore Activities
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

