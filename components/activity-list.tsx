import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Activity {
  id: string
  name: string
  type: string
  description: string
  trips: Array<{ id: string; name: string; duration: string }>
}

interface ActivityListProps {
  activities: Activity[]
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => (
        <Card key={activity.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <span>{activity.name}</span>
              <Badge>{activity.type}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{activity.description}</p>
            <h4 className="font-semibold mb-2">Available Trips:</h4>
            <ul className="list-disc list-inside">
              {activity.trips.map((trip) => (
                <li key={trip.id}>
                  <Link href={`/trips/${trip.id}`} className="text-blue-600 hover:underline">
                    {trip.name} - {trip.duration}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

