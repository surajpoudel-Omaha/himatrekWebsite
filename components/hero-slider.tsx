"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const slides = [
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Trekking and Hiking",
    description: "Explore the majestic Himalayas with expert guides",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Mountain Adventures",
    description: "Experience breathtaking views and unforgettable journeys",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Cultural Experiences",
    description: "Discover local traditions and authentic Nepalese culture",
  },
]

export function HeroSlider() {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-center max-w-2xl px-4">{slide.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2" />
      <CarouselNext className="absolute right-4 top-1/2" />
    </Carousel>
  )
}

