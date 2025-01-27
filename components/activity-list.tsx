import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Activity } from "@/types/database"

interface ActivityListProps {
  activities: Activity[]
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => (
        <Link key={activity.id} href={`/activities/${activity.id}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{activity.name}</span>
                <Badge
                  variant={
                    activity.difficulty === "Easy"
                      ? "secondary"
                      : activity.difficulty === "Moderate"
                        ? "default"
                        : "destructive"
                  }
                >
                  {activity.difficulty}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">Duration: {activity.duration}</p>
                <p className="font-semibold">Price: ${activity.price}</p>
                <div className="space-y-1">
                  <p className="font-medium">Highlights:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {activity.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

