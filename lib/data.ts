export type Destination = {
  id: string
  name: string
  description: string
  imageUrl: string
  activities: Activity[]
}

export type Activity = {
  id: string
  name: string
  type: "Trekking" | "Rafting" | "Sightseeing" | "PeakClimbing"
  description: string
  trips: Trip[]
}

export type Trip = {
  id: string
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

const destinations: Destination[] = [
  {
    id: "1",
    name: "Nepal",
    description: "Home to eight of the world's ten tallest mountains, including Mount Everest",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [
      {
        id: "1",
        name: "Mountain Trekking",
        type: "Trekking",
        description: "Experience the majestic Himalayas on foot",
        trips: [
          {
            id: "1",
            name: "Everest Base Camp Trek",
            duration: "14 Days",
            difficulty: "Challenging",
            price: 1800,
            highlights: [
              "View of Mount Everest",
              "Sherpa Culture",
              "Namche Bazaar",
              "Tengboche Monastery",
              "Kala Patthar viewpoint",
            ],
            itinerary: [
              {
                day: 1,
                title: "Arrival in Kathmandu",
                description: "Welcome meeting and trek briefing",
                accommodation: "Hotel in Kathmandu",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Fly to Lukla and Trek to Phakding",
                description: "Scenic flight to Lukla and begin the trek",
                accommodation: "Teahouse in Phakding",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "2,800m",
              },
              {
                day: 3,
                title: "Trek to Namche Bazaar",
                description: "Challenging ascent to the Sherpa capital",
                accommodation: "Teahouse in Namche Bazaar",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "3,440m",
              },
              {
                day: 4,
                title: "Acclimatization Day in Namche Bazaar",
                description: "Rest and explore the town, visit the Sherpa Museum",
                accommodation: "Teahouse in Namche Bazaar",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "3,440m",
              },
              {
                day: 5,
                title: "Trek to Tengboche",
                description: "Visit the famous Tengboche Monastery",
                accommodation: "Teahouse in Tengboche",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "3,870m",
              },
              {
                day: 6,
                title: "Trek to Dingboche",
                description: "Enter the Imja Valley",
                accommodation: "Teahouse in Dingboche",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "4,360m",
              },
              {
                day: 7,
                title: "Acclimatization Day in Dingboche",
                description: "Rest and short hike for acclimatization",
                accommodation: "Teahouse in Dingboche",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "4,360m",
              },
              {
                day: 8,
                title: "Trek to Lobuche",
                description: "Trek along the lateral moraine of the Khumbu Glacier",
                accommodation: "Teahouse in Lobuche",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "4,940m",
              },
              {
                day: 9,
                title: "Trek to Gorak Shep and Everest Base Camp",
                description: "Reach Everest Base Camp and return to Gorak Shep",
                accommodation: "Teahouse in Gorak Shep",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "5,364m (EBC)",
              },
              {
                day: 10,
                title: "Hike Kala Patthar and Trek to Pheriche",
                description: "Early morning hike to Kala Patthar for sunrise views of Everest",
                accommodation: "Teahouse in Pheriche",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "5,550m (Kala Patthar)",
              },
              {
                day: 11,
                title: "Trek to Namche Bazaar",
                description: "Descend through rhododendron and juniper forests",
                accommodation: "Teahouse in Namche Bazaar",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "3,440m",
              },
              {
                day: 12,
                title: "Trek to Lukla",
                description: "Final day of trekking, farewell dinner with the team",
                accommodation: "Teahouse in Lukla",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "2,800m",
              },
              {
                day: 13,
                title: "Fly to Kathmandu",
                description: "Morning flight back to Kathmandu",
                accommodation: "Hotel in Kathmandu",
                meals: "Breakfast",
              },
              {
                day: 14,
                title: "Departure from Kathmandu",
                description: "Transfer to airport for final departure",
                accommodation: "N/A",
                meals: "Breakfast",
              },
            ],
          },
          {
            id: "2",
            name: "Annapurna Circuit Trek",
            duration: "18 Days",
            difficulty: "Moderate",
            price: 1600,
            highlights: [
              "Diverse landscapes",
              "Thorong La Pass (5,416m)",
              "Muktinath Temple",
              "Poon Hill sunrise",
              "Hot springs at Tatopani",
            ],
            itinerary: [
              {
                day: 1,
                title: "Arrival in Kathmandu",
                description: "Welcome meeting and trek briefing",
                accommodation: "Hotel in Kathmandu",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Drive to Besisahar and Trek to Khudi",
                description: "Begin the trek along the Marsyangdi River",
                accommodation: "Teahouse in Khudi",
                meals: "Breakfast, Lunch, Dinner",
                elevation: "790m",
              },
              // ... More days would be added here to complete the 18-day itinerary
              {
                day: 18,
                title: "Departure from Kathmandu",
                description: "Transfer to airport for final departure",
                accommodation: "N/A",
                meals: "Breakfast",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "White Water Rafting",
        type: "Rafting",
        description: "Navigate thrilling rapids in Nepal's scenic rivers",
        trips: [
          {
            id: "3",
            name: "Trishuli River Rafting",
            duration: "1 Day",
            difficulty: "Moderate",
            price: 80,
            highlights: ["Exciting rapids", "Beautiful scenery", "Suitable for beginners"],
            itinerary: [
              {
                day: 1,
                title: "Trishuli River Adventure",
                description: "Full day of rafting with lunch break",
                accommodation: "N/A",
                meals: "Lunch",
              },
            ],
          },
          {
            id: "4",
            name: "Sun Koshi Expedition",
            duration: "9 Days",
            difficulty: "Challenging",
            price: 1200,
            highlights: ["Long river journey", "Diverse landscapes", "Class III-V rapids", "Camping on sandy beaches"],
            itinerary: [
              {
                day: 1,
                title: "Drive to Put-in Point",
                description: "Drive from Kathmandu to the starting point of the rafting trip",
                accommodation: "Camping",
                meals: "Lunch, Dinner",
              },
              // ... More days would be added here to complete the 9-day itinerary
              {
                day: 9,
                title: "Return to Kathmandu",
                description: "Drive back to Kathmandu after finishing the rafting expedition",
                accommodation: "Hotel in Kathmandu",
                meals: "Breakfast, Lunch",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "India",
    description: "A land of diverse cultures, ancient traditions, and breathtaking landscapes",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [
      {
        id: "3",
        name: "Cultural Tours",
        type: "Sightseeing",
        description: "Explore India's rich heritage and iconic landmarks",
        trips: [
          {
            id: "5",
            name: "Golden Triangle Tour",
            duration: "6 Days",
            difficulty: "Easy",
            price: 800,
            highlights: ["Taj Mahal in Agra", "Pink City of Jaipur", "Delhi's historical sites"],
            itinerary: [
              {
                day: 1,
                title: "Arrive in Delhi",
                description: "Welcome meeting and city tour",
                accommodation: "Hotel in Delhi",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Delhi to Agra",
                description: "Travel to Agra and visit Taj Mahal",
                accommodation: "Hotel in Agra",
                meals: "Breakfast, Dinner",
              },
              {
                day: 3,
                title: "Agra to Jaipur",
                description: "Visit Fatehpur Sikri en route to Jaipur",
                accommodation: "Hotel in Jaipur",
                meals: "Breakfast, Dinner",
              },
              {
                day: 4,
                title: "Jaipur Sightseeing",
                description: "Explore the Pink City, visit Amber Fort",
                accommodation: "Hotel in Jaipur",
                meals: "Breakfast, Dinner",
              },
              {
                day: 5,
                title: "Jaipur to Delhi",
                description: "Return to Delhi, evening at leisure",
                accommodation: "Hotel in Delhi",
                meals: "Breakfast, Dinner",
              },
              {
                day: 6,
                title: "Departure from Delhi",
                description: "Transfer to airport for final departure",
                accommodation: "N/A",
                meals: "Breakfast",
              },
            ],
          },
        ],
      },
    ],
  },
]

export function getDestinations(): Destination[] {
  return destinations
}

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id)
}

export function getActivityById(destinationId: string, activityId: string): Activity | undefined {
  const destination = getDestinationById(destinationId)
  return destination?.activities.find((a) => a.id === activityId)
}

export function getTripById(destinationId: string, activityId: string, tripId: string): Trip | undefined {
  const activity = getActivityById(destinationId, activityId)
  return activity?.trips.find((t) => t.id === tripId)
}

