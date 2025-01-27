export type Destination = {
  id: string
  name: string
  description: string
  imageUrl: string
  activities: Activity[]
}

export type Activity = {
  id: string
  destinationId: string
  name: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  price: number
  highlights: string[]
  itinerary: ItineraryDay[]
}

export type ItineraryDay = {
  day: number
  title: string
  description: string
  accommodation: string
  meals: string
  elevation?: string
}

