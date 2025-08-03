export const bentoGridComponent = {
  name: "Bento Grid",
  description: "A flexible grid layout component inspired by bento box designs.",
  category: "Layout",
  version: "1.0.0",
  dependencies: ["framer-motion"],
  props: [
    {
      name: "items",
      type: "BentoGridItem[]",
      default: "[]",
      description: "Array of grid items to display",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes",
    },
  ],
  examples: [
    {
      title: "Basic Bento Grid",
      code: `import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

const items = [
  {
    title: "Feature 1",
    description: "Description for feature 1",
    header: <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />,
    className: "md:col-span-2",
  },
  {
    title: "Feature 2",
    description: "Description for feature 2",
    header: <div className="h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg" />,
    className: "md:col-span-1",
  },
  {
    title: "Feature 3",
    description: "Description for feature 3",
    header: <div className="h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg" />,
    className: "md:col-span-1",
  },
]

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  )
}`,
      preview: "bento-grid-basic",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/bento-grid.json",
    manual: `// 1. Install dependencies
npm install framer-motion

// 2. Copy the component code to components/ui/bento-grid.tsx

// 3. Usage example:
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

const items = [
  {
    title: "My Feature",
    description: "Feature description",
    header: <div className="h-20 bg-blue-500 rounded" />,
  }
]

export function MyBentoGrid() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem key={i} {...item} />
      ))}
    </BentoGrid>
  )
}`,
  },
}
