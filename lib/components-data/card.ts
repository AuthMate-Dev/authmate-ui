import type { ComponentData } from "./index"

export const cardComponent: ComponentData = {
  name: "Card",
  description: "A flexible container for grouping related content with header, content, and footer sections",
  category: "Layout",
  version: "1.0.0",
  dependencies: [],
  props: [
    {
      name: "className",
      type: "string",
      default: "''",
      description: "Additional CSS classes to apply to the card",
    },
  ],
  examples: [
    {
      title: "Basic Card",
      code: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  )
}`,
      preview: "card-basic",
    },
    {
      title: "Card with Footer",
      code: `import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardWithFooter() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Project Alpha</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A revolutionary new approach to solving complex problems.</p>
      </CardContent>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  )
}`,
      preview: "card-with-footer",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/card.json",
    manual: `// 1. Copy the component code to components/ui/card.tsx

// 2. Usage example:
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is my card content.</p>
      </CardContent>
    </Card>
  )
}`,
  },
}
