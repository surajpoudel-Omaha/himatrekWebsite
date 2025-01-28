"use client"

import { useState, useEffect } from "react"
import {
  type Destination,
  type Activity,
  type Trip,
  type ItineraryDay,
  getDestinations,
  getDestinationById,
} from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ManageDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [newActivity, setNewActivity] = useState<Partial<Activity>>({})
  const [newTrip, setNewTrip] = useState<Partial<Trip>>({})
  const [newItineraryDay, setNewItineraryDay] = useState<Partial<ItineraryDay>>({})
  const [editingTripId, setEditingTripId] = useState<string | null>(null)

  useEffect(() => {
    setDestinations(getDestinations())
  }, [])

  function handleAddActivity() {
    if (selectedDestination && newActivity.name && newActivity.type) {
      const updatedDestinations = destinations.map((dest) => {
        if (dest.id === selectedDestination.id) {
          return {
            ...dest,
            activities: [
              ...dest.activities,
              {
                id: Date.now().toString(),
                name: newActivity.name,
                type: newActivity.type as Activity["type"],
                description: newActivity.description || "",
                trips: [],
              },
            ],
          }
        }
        return dest
      })
      setDestinations(updatedDestinations)
      setSelectedDestination(getDestinationById(selectedDestination.id) || null)
      setNewActivity({})
    }
  }

  function handleRemoveActivity(activityId: string) {
    if (selectedDestination) {
      const updatedDestinations = destinations.map((dest) => {
        if (dest.id === selectedDestination.id) {
          return {
            ...dest,
            activities: dest.activities.filter((activity) => activity.id !== activityId),
          }
        }
        return dest
      })
      setDestinations(updatedDestinations)
      setSelectedDestination(getDestinationById(selectedDestination.id) || null)
    }
  }

  function handleAddTrip(activityId: string) {
    if (selectedDestination && newTrip.name && newTrip.duration && newTrip.difficulty && newTrip.price) {
      const updatedDestinations = destinations.map((dest) => {
        if (dest.id === selectedDestination.id) {
          return {
            ...dest,
            activities: dest.activities.map((activity) => {
              if (activity.id === activityId) {
                return {
                  ...activity,
                  trips: [
                    ...activity.trips,
                    {
                      id: Date.now().toString(),
                      name: newTrip.name,
                      duration: newTrip.duration,
                      difficulty: newTrip.difficulty as Trip["difficulty"],
                      price: Number(newTrip.price),
                      highlights: [],
                      itinerary: [],
                    },
                  ],
                }
              }
              return activity
            }),
          }
        }
        return dest
      })
      setDestinations(updatedDestinations)
      setSelectedDestination(getDestinationById(selectedDestination.id) || null)
      setNewTrip({})
    }
  }

  function handleRemoveTrip(activityId: string, tripId: string) {
    if (selectedDestination) {
      const updatedDestinations = destinations.map((dest) => {
        if (dest.id === selectedDestination.id) {
          return {
            ...dest,
            activities: dest.activities.map((activity) => {
              if (activity.id === activityId) {
                return {
                  ...activity,
                  trips: activity.trips.filter((trip) => trip.id !== tripId),
                }
              }
              return activity
            }),
          }
        }
        return dest
      })
      setDestinations(updatedDestinations)
      setSelectedDestination(getDestinationById(selectedDestination.id) || null)
    }
  }

  function handleAddItineraryDay(activityId: string, tripId: string) {
    if (selectedDestination && newItineraryDay.title && newItineraryDay.description) {
      const updatedDestinations = destinations.map((dest) => {
        if (dest.id === selectedDestination.id) {
          return {
            ...dest,
            activities: dest.activities.map((activity) => {
              if (activity.id === activityId) {
                return {
                  ...activity,
                  trips: activity.trips.map((trip) => {
                    if (trip.id === tripId) {
                      const newDay: ItineraryDay = {
                        day: trip.itinerary.length + 1,
                        title: newItineraryDay.title,
                        description: newItineraryDay.description,
                        accommodation: newItineraryDay.accommodation || "",
                        meals: newItineraryDay.meals || "",
                        elevation: newItineraryDay.elevation,
                      }
                      return {
                        ...trip,
                        itinerary: [...trip.itinerary, newDay],
                      }
                    }
                    return trip
                  }),
                }
              }
              return activity
            }),
          }
        }
        return dest
      })
      setDestinations(updatedDestinations)
      setSelectedDestination(getDestinationById(selectedDestination.id) || null)
      setNewItineraryDay({})
    }
  }

  function handleRemoveItineraryDay(activityId: string, tripId: string, dayNumber: number) {
    if (selectedDestination) {
      const updatedDestinations = destinations.map((dest) => {
        if (dest.id === selectedDestination.id) {
          return {
            ...dest,
            activities: dest.activities.map((activity) => {
              if (activity.id === activityId) {
                return {
                  ...activity,
                  trips: activity.trips.map((trip) => {
                    if (trip.id === tripId) {
                      return {
                        ...trip,
                        itinerary: trip.itinerary
                          .filter((day) => day.day !== dayNumber)
                          .map((day, index) => ({
                            ...day,
                            day: index + 1,
                          })),
                      }
                    }
                    return trip
                  }),
                }
              }
              return activity
            }),
          }
        }
        return dest
      })
      setDestinations(updatedDestinations)
      setSelectedDestination(getDestinationById(selectedDestination.id) || null)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Manage Destinations</h1>

      <div className="mb-8">
        <Label htmlFor="destination-select">Select Destination</Label>
        <Select onValueChange={(value) => setSelectedDestination(getDestinationById(value) || null)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a destination" />
          </SelectTrigger>
          <SelectContent>
            {destinations.map((dest) => (
              <SelectItem key={dest.id} value={dest.id}>
                {dest.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedDestination && (
        <>
          <h2 className="text-2xl font-bold mb-4">Activities for {selectedDestination.name}</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Add New Activity</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="activity-name">Activity Name</Label>
                <Input
                  id="activity-name"
                  value={newActivity.name || ""}
                  onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="activity-type">Activity Type</Label>
                <Select onValueChange={(value) => setNewActivity({ ...newActivity, type: value as Activity["type"] })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select activity type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Trekking">Trekking</SelectItem>
                    <SelectItem value="Rafting">Rafting</SelectItem>
                    <SelectItem value="Sightseeing">Sightseeing</SelectItem>
                    <SelectItem value="PeakClimbing">Peak Climbing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="activity-description">Description</Label>
                <Textarea
                  id="activity-description"
                  value={newActivity.description || ""}
                  onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                />
              </div>
              <Button onClick={handleAddActivity}>Add Activity</Button>
            </div>
          </div>

          <div className="space-y-8">
            {selectedDestination.activities.map((activity) => (
              <Card key={activity.id} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{activity.description}</p>
                  <Button variant="destructive" onClick={() => handleRemoveActivity(activity.id)}>
                    Remove Activity
                  </Button>

                  <h4 className="text-lg font-semibold mt-6 mb-4">Trips</h4>
                  <div className="space-y-4">
                    {activity.trips.map((trip) => (
                      <Card key={trip.id} className="p-4">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold">
                            {trip.name} - {trip.duration}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Difficulty: {trip.difficulty}</p>
                          <p>Price: ${trip.price}</p>
                          <div className="flex space-x-2 mt-2">
                            <Button variant="destructive" onClick={() => handleRemoveTrip(activity.id, trip.id)}>
                              Remove Trip
                            </Button>
                            <Button onClick={() => setEditingTripId(editingTripId === trip.id ? null : trip.id)}>
                              {editingTripId === trip.id ? "Close Itinerary" : "Edit Itinerary"}
                            </Button>
                          </div>

                          {editingTripId === trip.id && (
                            <div className="mt-4">
                              <h5 className="text-md font-semibold mb-2">Itinerary</h5>
                              {trip.itinerary.map((day) => (
                                <div key={day.day} className="mb-2 p-2 border rounded">
                                  <p>
                                    <strong>Day {day.day}:</strong> {day.title}
                                  </p>
                                  <p>{day.description}</p>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleRemoveItineraryDay(activity.id, trip.id, day.day)}
                                  >
                                    Remove Day
                                  </Button>
                                </div>
                              ))}
                              <div className="mt-4 space-y-2">
                                <Input
                                  placeholder="Day Title"
                                  value={newItineraryDay.title || ""}
                                  onChange={(e) => setNewItineraryDay({ ...newItineraryDay, title: e.target.value })}
                                />
                                <Textarea
                                  placeholder="Day Description"
                                  value={newItineraryDay.description || ""}
                                  onChange={(e) =>
                                    setNewItineraryDay({ ...newItineraryDay, description: e.target.value })
                                  }
                                />
                                <Input
                                  placeholder="Accommodation"
                                  value={newItineraryDay.accommodation || ""}
                                  onChange={(e) =>
                                    setNewItineraryDay({ ...newItineraryDay, accommodation: e.target.value })
                                  }
                                />
                                <Input
                                  placeholder="Meals"
                                  value={newItineraryDay.meals || ""}
                                  onChange={(e) => setNewItineraryDay({ ...newItineraryDay, meals: e.target.value })}
                                />
                                <Input
                                  placeholder="Elevation (optional)"
                                  value={newItineraryDay.elevation || ""}
                                  onChange={(e) =>
                                    setNewItineraryDay({ ...newItineraryDay, elevation: e.target.value })
                                  }
                                />
                                <Button onClick={() => handleAddItineraryDay(activity.id, trip.id)}>
                                  Add Itinerary Day
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold mt-6 mb-4">Add New Trip</h4>
                  <div className="space-y-2">
                    <Input
                      placeholder="Trip Name"
                      value={newTrip.name || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, name: e.target.value })}
                    />
                    <Input
                      placeholder="Duration"
                      value={newTrip.duration || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, duration: e.target.value })}
                    />
                    <Select
                      onValueChange={(value) => setNewTrip({ ...newTrip, difficulty: value as Trip["difficulty"] })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Challenging">Challenging</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Price"
                      value={newTrip.price || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, price: Number(e.target.value) })}
                    />
                    <Button onClick={() => handleAddTrip(activity.id)}>Add Trip</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

