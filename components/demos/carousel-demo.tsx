"use client"

import { Carousel, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"

const sampleImages = [
  {
    id: "1",
    title: "Mountain Landscape",
    description: "Beautiful mountain scenery with snow-capped peaks",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Ocean Sunset",
    description: "Stunning sunset over the ocean waves",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Forest Path",
    description: "Peaceful walking path through dense forest",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.7,
  },
  {
    id: "4",
    title: "City Skyline",
    description: "Modern city skyline at night",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.6,
  },
  {
    id: "5",
    title: "Desert Dunes",
    description: "Golden sand dunes in the desert",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
  },
]

export function CarouselDemo() {
  // Basic carousel items
  const basicItems = sampleImages.map((item) => ({
    id: item.id,
    content: (
      <CarouselItem>
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
      </CarouselItem>
    ),
  }))

  // Card carousel items
  const cardItems = sampleImages.map((item) => ({
    id: item.id,
    content: (
      <Card className="w-full">
        <CardContent className="p-0">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{item.rating}</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  }))

  // Multi-item carousel
  const multiItems = sampleImages.slice(0, 6).map((item, index) => ({
    id: item.id,
    content: (
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
        <div className="text-2xl font-bold mb-2">Item {index + 1}</div>
        <div className="text-sm opacity-90">{item.title}</div>
      </div>
    ),
  }))

  return (
    <div className="space-y-8">
      {/* Basic Carousel */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Carousel</h3>
        <div className="h-64">
          <Carousel
            items={basicItems}
            autoPlay={true}
            autoPlayInterval={4000}
            showArrows={true}
            showDots={true}
            variant="default"
          />
        </div>
      </div>

      {/* Card Carousel */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Carousel with Auto-play</h3>
        <div className="h-80">
          <Carousel
            items={cardItems}
            autoPlay={true}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={true}
            showPlayPause={true}
            variant="card"
          />
        </div>
      </div>

      {/* Fade Carousel */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Fade Transition Carousel</h3>
        <div className="h-64">
          <Carousel
            items={basicItems.slice(0, 3)}
            variant="fade"
            autoPlay={true}
            autoPlayInterval={3000}
            showArrows={true}
            showDots={true}
          />
        </div>
      </div>

      {/* Multi-item Carousel */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Multi-item Carousel</h3>
        <div className="h-32">
          <Carousel items={multiItems} itemsPerView={3} gap={16} showArrows={true} showDots={true} infinite={true} />
        </div>
      </div>

      {/* Keyboard Instructions */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <h4 className="font-medium mb-2">Keyboard Controls:</h4>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <div>
            <Badge variant="outline">←</Badge> Previous slide
          </div>
          <div>
            <Badge variant="outline">→</Badge> Next slide
          </div>
          <div>
            <Badge variant="outline">Space</Badge> Play/Pause (when auto-play is enabled)
          </div>
        </div>
      </div>
    </div>
  )
}
