import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ItineraryDay } from "@/types/database"

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[]
}

export function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  return (
    <div className="space-y-4">
      {itinerary.map((day) => (
        <Card key={day.day}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">
                {day.day}
              </span>
              {day.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-muted-foreground">{day.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Accommodation</p>
                <p className="text-muted-foreground">{day.accommodation}</p>
              </div>
              <div>
                <p className="font-medium">Meals</p>
                <p className="text-muted-foreground">{day.meals}</p>
              </div>
              {day.elevation && (
                <div>
                  <p className="font-medium">Elevation</p>
                  <p className="text-muted-foreground">{day.elevation}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

