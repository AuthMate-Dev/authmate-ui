export const imageComponent = {
  name: "Image",
  description: "An enhanced image component with hover effects and loading states.",
  category: "Media",
  version: "1.0.0",
  dependencies: ["framer-motion"],
  props: [
    {
      name: "src",
      type: "string",
      default: "undefined",
      description: "The image source URL",
    },
    {
      name: "alt",
      type: "string",
      default: "undefined",
      description: "Alt text for the image",
    },
    {
      name: "hoverEffect",
      type: "boolean",
      default: "true",
      description: "Whether to show hover effects",
    },
    {
      name: "loading",
      type: "'lazy' | 'eager'",
      default: "'lazy'",
      description: "Image loading behavior",
    },
  ],
  examples: [
    {
      title: "Image with Hover Effect",
      code: `import { Image } from "@/components/ui/image"

export function ImageDemo() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-md">
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="Example image with hover effect"
        className="rounded-lg"
      />
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="Example image without hover effect"
        hoverEffect={false}
        className="rounded-lg"
      />
    </div>
  )
}`,
      preview: "image-hover-effect",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/image.json",
    manual: `// 1. Install dependencies
npm install framer-motion

// 2. Copy the component code to components/ui/image.tsx

// 3. Usage example:
import { Image } from "@/components/ui/image"

export function MyImage() {
  return (
    <Image
      src="/my-image.jpg"
      alt="My image"
      hoverEffect={true}
      className="rounded-lg"
    />
  )
}`,
  },
}
