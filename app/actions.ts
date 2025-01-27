"use server"

import type { Destination, Activity } from "@/types/database"

// This would typically connect to your actual database
const destinations: Destination[] = [
  {
    id: "1",
    name: "Nepal",
    description: "Home to eight of the world's ten tallest mountains, including Mount Everest",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [],
  },
  {
    id: "2",
    name: "India",
    description: "From the mighty Himalayas to the diverse Western Ghats",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [],
  },
  {
    id: "3",
    name: "Tibet",
    description: "The roof of the world with its unique Buddhist culture",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [],
  },
  {
    id: "4",
    name: "Bhutan",
    description: "The last Shangri-La, known for its pristine environment and cultural heritage",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [],
  },
]

export async function getDestinations() {
  return destinations
}

export async function getActivitiesByDestination(destinationId: string): Promise<Activity[]> {
  // This would typically be a database query
  const activities: Activity[] = [
    {
      id: "1",
      destinationId: "1", // Nepal
      name: "Everest Base Camp Trek",
      duration: "15 Days",
      difficulty: "Challenging",
      price: 1800,
      highlights: ["View of Mount Everest", "Sherpa Culture", "Namche Bazaar", "Tengboche Monastery"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kathmandu",
          description: "Welcome meeting and trek briefing",
          accommodation: "Hotel in Kathmandu",
          meals: "Welcome Dinner",
        },
        // More days would be added here
      ],
    },
    // More activities would be added here
  ]

  return activities.filter((activity) => activity.destinationId === destinationId)
}

