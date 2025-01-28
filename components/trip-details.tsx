import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ItineraryTimeline } from '@/components/itinerary-timeline'

interface ItineraryDay {
  day: number
  title: string
  description: string
  accommodation: string
  meals: string
  elevation?: string
}

interface Trip {
  id: string
  name: string
  duration: string
  difficulty: string
  price: number
  highlights: string[]
  itinerary: ItineraryDay[]
}

interface TripDetailsProps {
  trip: Trip
}

export function TripDetails({ trip }: TripDetailsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{trip.name}</h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <Badge variant="outline" className="text-lg py-1 px-3">
            {trip.duration}
          </Badge>
          <Badge 
            variant={
              trip.difficulty === 'Easy' ? 'secondary' :
              trip.difficulty === 'Moderate' ? 'default' : 'destructive'
            }
            className="text-lg py-1 px-3"
          >
            {trip.difficulty}
          </Badge>
          <Badge variant="outline" className="text-lg py-1 px-3">
            ${trip.price}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {trip.highlights.map((highlight, index) => (
              <li key={index} className="text-muted-foreground">{highlight}</li>
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
          <ItineraryTimeline itinerary={trip.itinerary} />
        </CardContent>
      </Card>
    </div>
  )
}

