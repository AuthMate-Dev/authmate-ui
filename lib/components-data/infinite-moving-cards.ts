export const infiniteMovingCardsComponent = {
  name: "Infinite Moving Cards",
  description: "An animated component that displays cards in continuous motion.",
  category: "Animation",
  version: "1.0.0",
  dependencies: ["framer-motion"],
  props: [
    {
      name: "items",
      type: "any[]",
      default: "[]",
      description: "Array of items to display in cards",
    },
    {
      name: "direction",
      type: "'left' | 'right'",
      default: "'left'",
      description: "Direction of the animation",
    },
    {
      name: "speed",
      type: "'fast' | 'normal' | 'slow'",
      default: "'normal'",
      description: "Animation speed",
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      default: "true",
      description: "Whether to pause animation on hover",
    },
  ],
  examples: [
    {
      title: "Testimonials Carousel",
      code: `import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

const testimonials = [
  {
    quote: "This product has transformed our workflow completely.",
    name: "John Doe",
    title: "CEO, Company Inc",
  },
  {
    quote: "Amazing experience and great customer support.",
    name: "Jane Smith",
    title: "Designer, Studio XYZ",
  },
  // Add more testimonials...
]

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}`,
      preview: "testimonials",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/infinite-moving-cards.json",
    manual: `// Copy the infinite-moving-cards component from the registry`,
  },
}

