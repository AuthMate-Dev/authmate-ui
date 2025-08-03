export const compareComponent = {
  name: "Compare",
  description:
    "A comparison component between two images with slide or drag interaction to compare before and after states.",
  category: "Features",
  version: "1.0.0",
  dependencies: ["framer-motion", "lucide-react"],
  props: [
    {
      name: "beforeImage",
      type: "string",
      default: "''",
      description: "URL or path to the before image",
    },
    {
      name: "afterImage",
      type: "string",
      default: "''",
      description: "URL or path to the after image",
    },
    {
      name: "beforeLabel",
      type: "string",
      default: "'Before'",
      description: "Label for the before image",
    },
    {
      name: "afterLabel",
      type: "string",
      default: "'After'",
      description: "Label for the after image",
    },
    {
      name: "direction",
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      description: "Direction of the comparison slider",
    },
    {
      name: "initialPosition",
      type: "number",
      default: "50",
      description: "Initial position of the slider (0-100)",
    },
    {
      name: "showLabels",
      type: "boolean",
      default: "true",
      description: "Show before/after labels",
    },
    {
      name: "showHandle",
      type: "boolean",
      default: "true",
      description: "Show the drag handle",
    },
    {
      name: "onPositionChange",
      type: "(position: number) => void",
      default: "undefined",
      description: "Callback when slider position changes",
    },
    {
      name: "className",
      type: "string",
      default: "''",
      description: "Additional CSS classes",
    },
    {
      name: "height",
      type: "string | number",
      default: "'400px'",
      description: "Height of the comparison container",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable interaction",
    },
  ],
  examples: [
    {
      title: "Basic Image Comparison",
      code: `import { Compare } from '@/components/ui/compare'

export default function Example() {
  return (
    <Compare
      beforeImage="/placeholder.svg?height=400&width=600"
      afterImage="/placeholder.svg?height=400&width=600"
      beforeLabel="Original"
      afterLabel="Enhanced"
    />
  )
}`,
      preview: "compare-basic",
    },
    {
      title: "Vertical Comparison",
      code: `import { Compare } from '@/components/ui/compare'

export default function Example() {
  return (
    <Compare
      beforeImage="/placeholder.svg?height=500&width=400"
      afterImage="/placeholder.svg?height=500&width=400"
      direction="vertical"
      beforeLabel="Old Design"
      afterLabel="New Design"
      height="500px"
    />
  )
}`,
      preview: "compare-vertical",
    },
    {
      title: "Custom Initial Position",
      code: `import { Compare } from '@/components/ui/compare'

export default function Example() {
  const handlePositionChange = (position: number) => {
    console.log('Slider position:', position)
  }

  return (
    <Compare
      beforeImage="/placeholder.svg?height=400&width=600"
      afterImage="/placeholder.svg?height=400&width=600"
      initialPosition={25}
      onPositionChange={handlePositionChange}
      beforeLabel="Unedited"
      afterLabel="Edited"
    />
  )
}`,
      preview: "compare-custom-position",
    },
    {
      title: "Minimal Style",
      code: `import { Compare } from '@/components/ui/compare'

export default function Example() {
  return (
    <Compare
      beforeImage="/placeholder.svg?height=400&width=600"
      afterImage="/placeholder.svg?height=400&width=600"
      showLabels={false}
      showHandle={false}
      className="rounded-lg shadow-lg"
    />
  )
}`,
      preview: "compare-minimal",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/compare.json",
    manual: `// 1. Install dependencies
npm install framer-motion lucide-react

// 2. Copy the component code to components/ui/compare.tsx

// 3. Add the following to your tailwind.config.js if not already present:
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    // ... other paths
  ],
  theme: {
    extend: {
      cursor: {
        'ew-resize': 'ew-resize',
        'ns-resize': 'ns-resize',
      }
    }
  },
  // ... rest of config
}

// 4. Usage example:
import { Compare } from "@/components/ui/compare"

export default function MyComponent() {
  return (
    <Compare
      beforeImage="/before.jpg"
      afterImage="/after.jpg"
      beforeLabel="Before"
      afterLabel="After"
      direction="horizontal"
    />
  )
}`,
  },
}
