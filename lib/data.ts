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
  imageUrl: string
  trips: Trip[]
}

export type Trip = {
  id: string
  name: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  price: number
  imageUrl: string
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
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "1",
            name: "Everest Base Camp Trek",
            duration: "14 Days",
            difficulty: "Challenging",
            price: 1800,
            imageUrl: "/placeholder.svg?height=300&width=400",
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
            imageUrl: "/placeholder.svg?height=300&width=400",
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
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "3",
            name: "Trishuli River Rafting",
            duration: "1 Day",
            difficulty: "Moderate",
            price: 80,
            imageUrl: "/placeholder.svg?height=300&width=400",
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
            imageUrl: "/placeholder.svg?height=300&width=400",
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
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "5",
            name: "Golden Triangle Tour",
            duration: "6 Days",
            difficulty: "Easy",
            price: 800,
            imageUrl: "/placeholder.svg?height=300&width=400",
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
  {
    id: "3",
    name: "Tibet",
    description: "The 'Roof of the World' with stunning landscapes and rich Buddhist culture",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [
      {
        id: "4",
        name: "Spiritual Journey",
        type: "Sightseeing",
        description: "Explore ancient monasteries and experience Tibetan Buddhism",
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "6",
            name: "Lhasa and Everest Base Camp Tour",
            duration: "8 Days",
            difficulty: "Moderate",
            price: 1500,
            imageUrl: "/placeholder.svg?height=300&width=400",
            highlights: [
              "Potala Palace",
              "Jokhang Temple",
              "Sera Monastery",
              "Yamdrok Lake",
              "Everest Base Camp (North Side)",
            ],
            itinerary: [
              {
                day: 1,
                title: "Arrival in Lhasa",
                description: "Acclimatization and welcome dinner",
                accommodation: "Hotel in Lhasa",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Lhasa Sightseeing",
                description: "Visit Potala Palace and Jokhang Temple",
                accommodation: "Hotel in Lhasa",
                meals: "Breakfast, Lunch",
              },
              // ... (other days of the itinerary)
            ],
          },
        ],
      },
      {
        id: "5",
        name: "High Altitude Trekking",
        type: "Trekking",
        description: "Challenge yourself with treks in the Tibetan plateau",
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "7",
            name: "Mount Kailash Pilgrimage Trek",
            duration: "15 Days",
            difficulty: "Challenging",
            price: 2200,
            imageUrl: "/placeholder.svg?height=300&width=400",
            highlights: [
              "Sacred Mount Kailash",
              "Lake Manasarovar",
              "Saga Dawa Festival (June departure)",
              "High altitude desert landscape",
            ],
            itinerary: [
              {
                day: 1,
                title: "Arrival in Lhasa",
                description: "Acclimatization and trip briefing",
                accommodation: "Hotel in Lhasa",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Lhasa Sightseeing",
                description: "Visit Sera Monastery and Norbulingka Palace",
                accommodation: "Hotel in Lhasa",
                meals: "Breakfast, Lunch",
              },
              // ... (other days of the itinerary)
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Bhutan",
    description: "The last Shangri-La, known for its pristine environment and unique culture",
    imageUrl: "/placeholder.svg?height=400&width=600",
    activities: [
      {
        id: "6",
        name: "Cultural Exploration",
        type: "Sightseeing",
        description: "Discover Bhutan's rich culture and traditional way of life",
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "8",
            name: "Bhutan Highlights Tour",
            duration: "7 Days",
            difficulty: "Easy",
            price: 1800,
            imageUrl: "/placeholder.svg?height=300&width=400",
            highlights: [
              "Tiger's Nest Monastery",
              "Punakha Dzong",
              "Traditional Bhutanese architecture",
              "Paro and Thimphu sightseeing",
            ],
            itinerary: [
              {
                day: 1,
                title: "Arrival in Paro",
                description: "Welcome ceremony and visit to Paro Dzong",
                accommodation: "Hotel in Paro",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Paro to Thimphu",
                description: "Drive to Thimphu, visit Memorial Chorten and Buddha Point",
                accommodation: "Hotel in Thimphu",
                meals: "Breakfast, Lunch, Dinner",
              },
              // ... (other days of the itinerary)
            ],
          },
        ],
      },
      {
        id: "7",
        name: "Himalayan Trekking",
        type: "Trekking",
        description: "Trek through Bhutan's pristine forests and mountain landscapes",
        imageUrl: "/placeholder.svg?height=300&width=400",
        trips: [
          {
            id: "9",
            name: "Druk Path Trek",
            duration: "9 Days",
            difficulty: "Moderate",
            price: 2500,
            imageUrl: "/placeholder.svg?height=300&width=400",
            highlights: [
              "High altitude lakes",
              "Ancient lhakhangs (temples)",
              "Spectacular views of eastern Himalayas",
              "Phajoding Monastery",
            ],
            itinerary: [
              {
                day: 1,
                title: "Arrival in Paro",
                description: "Acclimatization and trip briefing",
                accommodation: "Hotel in Paro",
                meals: "Welcome Dinner",
              },
              {
                day: 2,
                title: "Paro Sightseeing",
                description: "Visit Ta Dzong and Rinpung Dzong",
                accommodation: "Hotel in Paro",
                meals: "Breakfast, Lunch, Dinner",
              },
              // ... (other days of the itinerary)
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

export function addDestination(newDestination: Destination) {
  destinations.push(newDestination)
}

export function updateTrip(
destinationId: string, activityId: string, tripId: string, trip: Trip,
){
  console.log(destinationId, activityId, tripId) 
}

