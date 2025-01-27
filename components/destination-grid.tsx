import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Destination } from "@/types/database"

interface DestinationGridProps {
  destinations: Destination[]
}

export function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {destinations.map((destination) => (
        <Link key={destination.id} href={`/destinations/${destination.id}`}>
          <Card className="hover:shadow-lg transition-shadow">
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
              <p className="text-muted-foreground">{destination.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

