import Link from "next/link"
import { getActivitiesByType } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activityTypes = ["Trekking", "Rafting", "Sightseeing", "PeakClimbing"] as const

export default function ActivitiesPage() {
  const activitiesByType = activityTypes.map((type) => ({
    type,
    activities: getActivitiesByType(type),
  }))

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Activities</h1>
      {activitiesByType.map(({ type, activities }) => (
        <section key={type} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{type}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{activity.name}</span>
                    <Badge>{activity.trips.length} trips</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{activity.description}</CardDescription>
                  <Link href={`/activities/${activity.id}`} className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

