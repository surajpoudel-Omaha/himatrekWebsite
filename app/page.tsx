import Link from "next/link"
import Image from "next/image"
import { getDestinations } from "@/lib/data"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const destinations = getDestinations()

  return (
    <div className="relative min-h-screen">
      <main>
        <HeroSlider />
        <section className="py-16 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {destinations.map((destination) => (
                <Card key={destination.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={destination.imageUrl || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{destination.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{destination.description}</CardDescription>
                    <Link href={`/destinations/${destination.id}`}>
                      <Button>Explore Activities</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/destinations">
                <Button variant="outline" size="lg">
                  View All Destinations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

