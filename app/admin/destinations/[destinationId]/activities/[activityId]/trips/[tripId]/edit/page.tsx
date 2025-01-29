"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getTripById, getActivityById, getDestinationById, updateTrip } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EditTripPage({
  params: { destinationId, activityId, tripId },
}: {
  params: { destinationId: string; activityId: string; tripId: string }
}) {
  const router = useRouter()
  const [trip, setTrip] = useState(getTripById(destinationId, activityId, tripId))
  const [newItineraryDay, setNewItineraryDay] = useState({
    title: "",
    description: "",
    accommodation: "",
    meals: "",
    elevation: "",
  })

  useEffect(() => {
    if (!trip) {
      router.push("/admin/destinations")
    }
  }, [trip, router])

  if (!trip) return null

  const handleUpdateTrip = () => {
    updateTrip(destinationId, activityId, tripId, trip)
    router.push(`/admin/destinations/${destinationId}`)
  }

  const handleAddItineraryDay = () => {
    setTrip({
      ...trip,
      itinerary: [
        ...trip.itinerary,
        {
          ...newItineraryDay,
          day: trip.itinerary.length + 1,
        },
      ],
    })
    setNewItineraryDay({
      title: "",
      description: "",
      accommodation: "",
      meals: "",
      elevation: "",
    })
  }

  const handleRemoveItineraryDay = (dayNumber: number) => {
    setTrip({
      ...trip,
      itinerary: trip.itinerary
        .filter((day) => day.day !== dayNumber)
        .map((day, index) => ({
          ...day,
          day: index + 1,
        })),
    })
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Trip: {trip.name}</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Trip Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="trip-name">Trip Name</Label>
              <Input id="trip-name" value={trip.name} onChange={(e) => setTrip({ ...trip, name: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="trip-duration">Duration</Label>
              <Input
                id="trip-duration"
                value={trip.duration}
                onChange={(e) => setTrip({ ...trip, duration: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="trip-difficulty">Difficulty</Label>
              <Select
                value={trip.difficulty}
                onValueChange={(value) =>
                  setTrip({ ...trip, difficulty: value as "Easy" | "Moderate" | "Challenging" })
                }
              >
                <SelectTrigger id="trip-difficulty">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Challenging">Challenging</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="trip-price">Price</Label>
              <Input
                id="trip-price"
                type="number"
                value={trip.price}
                onChange={(e) => setTrip({ ...trip, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="trip-image">Image URL</Label>
              <Input
                id="trip-image"
                value={trip.imageUrl}
                onChange={(e) => setTrip({ ...trip, imageUrl: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Itinerary</CardTitle>
        </CardHeader>
        <CardContent>
          {trip.itinerary.map((day) => (
            <div key={day.day} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold">
                Day {day.day}: {day.title}
              </h3>
              <p>{day.description}</p>
              <p>
                <strong>Accommodation:</strong> {day.accommodation}
              </p>
              <p>
                <strong>Meals:</strong> {day.meals}
              </p>
              {day.elevation && (
                <p>
                  <strong>Elevation:</strong> {day.elevation}
                </p>
              )}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveItineraryDay(day.day)}
                className="mt-2"
              >
                Remove Day
              </Button>
            </div>
          ))}
          <div className="mt-4 space-y-2">
            <Input
              placeholder="Day Title"
              value={newItineraryDay.title}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, title: e.target.value })}
            />
            <Textarea
              placeholder="Day Description"
              value={newItineraryDay.description}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, description: e.target.value })}
            />
            <Input
              placeholder="Accommodation"
              value={newItineraryDay.accommodation}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, accommodation: e.target.value })}
            />
            <Input
              placeholder="Meals"
              value={newItineraryDay.meals}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, meals: e.target.value })}
            />
            <Input
              placeholder="Elevation (optional)"
              value={newItineraryDay.elevation}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, elevation: e.target.value })}
            />
            <Button onClick={handleAddItineraryDay}>Add Itinerary Day</Button>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleUpdateTrip}>Save Changes</Button>
    </div>
  )
}

