import type { ComponentData } from "./index"

export const carouselComponent: ComponentData = {
  name: "Carousel",
  description:
    "A responsive carousel component with touch support, keyboard navigation, auto-play, and multiple variants.",
  category: "Display",
  version: "1.0.0",
  dependencies: ["framer-motion", "lucide-react", "@/lib/utils"],
  props: [
    {
      name: "items",
      type: "CarouselItem[]",
      default: "[]",
      description: "Array of carousel items to display",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes",
    },
    {
      name: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Enable auto-play functionality",
    },
    {
      name: "autoPlayInterval",
      type: "number",
      default: "3000",
      description: "Auto-play interval in milliseconds",
    },
    {
      name: "showArrows",
      type: "boolean",
      default: "true",
      description: "Show navigation arrows",
    },
    {
      name: "showDots",
      type: "boolean",
      default: "true",
      description: "Show dot indicators",
    },
    {
      name: "showPlayPause",
      type: "boolean",
      default: "false",
      description: "Show play/pause button",
    },
    {
      name: "infinite",
      type: "boolean",
      default: "true",
      description: "Enable infinite loop",
    },
    {
      name: "itemsPerView",
      type: "number",
      default: "1",
      description: "Number of items to show per view",
    },
    {
      name: "gap",
      type: "number",
      default: "16",
      description: "Gap between items in pixels",
    },
    {
      name: "variant",
      type: '"default" | "card" | "fade" | "slide"',
      default: '"default"',
      description: "Carousel variant style",
    },
    {
      name: "onSlideChange",
      type: "(index: number) => void",
      default: "undefined",
      description: "Callback when slide changes",
    },
    {
      name: "dragEnabled",
      type: "boolean",
      default: "true",
      description: "Enable drag/swipe gestures",
    },
    {
      name: "keyboardEnabled",
      type: "boolean",
      default: "true",
      description: "Enable keyboard navigation",
    },
  ],
  examples: [
    {
      title: "Basic Carousel",
      code: `import { Carousel, CarouselItem } from '@/components/ui/carousel'

const items = [
  {
    id: '1',
    content: (
      <CarouselItem>
        <img src="/placeholder.svg?height=300&width=400" alt="Image 1" className="w-full h-64 object-cover rounded-lg" />
      </CarouselItem>
    )
  },
  {
    id: '2',
    content: (
      <CarouselItem>
        <img src="/placeholder.svg?height=300&width=400" alt="Image 2" className="w-full h-64 object-cover rounded-lg" />
      </CarouselItem>
    )
  },
  {
    id: '3',
    content: (
      <CarouselItem>
        <img src="/placeholder.svg?height=300&width=400" alt="Image 3" className="w-full h-64 object-cover rounded-lg" />
      </CarouselItem>
    )
  }
]

export function BasicCarousel() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel
        items={items}
        showArrows={true}
        showDots={true}
      />
    </div>
  )
}`,
      preview: "carousel-basic",
    },
    {
      title: "Auto-play Carousel",
      code: `import { Carousel, CarouselItem } from '@/components/ui/carousel'

const items = [
  {
    id: '1',
    content: (
      <CarouselItem>
        <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
          Slide 1
        </div>
      </CarouselItem>
    )
  },
  {
    id: '2',
    content: (
      <CarouselItem>
        <div className="h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
          Slide 2
        </div>
      </CarouselItem>
    )
  }
]

export function AutoPlayCarousel() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel
        items={items}
        autoPlay={true}
        autoPlayInterval={4000}
        showPlayPause={true}
        showArrows={true}
        showDots={true}
      />
    </div>
  )
}`,
      preview: "carousel-autoplay",
    },
    {
      title: "Card Carousel",
      code: `import { Carousel, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const cardItems = [
  {
    id: '1',
    content: (
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600">Amazing feature description here.</p>
        </CardContent>
      </Card>
    )
  },
  {
    id: '2',
    content: (
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600">Another great feature description.</p>
        </CardContent>
      </Card>
    )
  }
]

export function CardCarousel() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel
        items={cardItems}
        variant="card"
        showArrows={true}
        showDots={true}
      />
    </div>
  )
}`,
      preview: "carousel-cards",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/carousel.json",
    manual: `// 1. Install dependencies
npm install framer-motion lucide-react

// 2. Make sure you have these shadcn components installed:
npx shadcn@latest add button

// 3. Copy the component code to components/ui/carousel.tsx

// 4. Update your tailwind.config.js to include touch-action utilities:
module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-left': 'slideLeft 0.3s ease-in-out',
        'slide-right': 'slideRight 0.3s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
}

// 5. Usage example:
import { Carousel, CarouselItem } from "@/components/ui/carousel"

const items = [
  {
    id: '1',
    content: <img src="/image1.jpg" alt="Slide 1" className="w-full h-64 object-cover" />
  },
  {
    id: '2', 
    content: <img src="/image2.jpg" alt="Slide 2" className="w-full h-64 object-cover" />
  }
]

export default function MyCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        items={items}
        autoPlay={true}
        autoPlayInterval={5000}
        showArrows={true}
        showDots={true}
        infinite={true}
      />
    </div>
  )
}`,
  },
}
