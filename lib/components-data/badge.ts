import type { ComponentData } from "./index"

export const badgeComponent: ComponentData = {
  name: "Badge",
  description: "A small status indicator or label component with multiple variants and sizes.",
  category: "Display",
  version: "1.0.0",
  dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
  props: [
    {
      name: "variant",
      type: "'default' | 'secondary' | 'destructive' | 'outline'",
      default: "'default'",
      description: "The visual style variant of the badge",
    },
  ],
  examples: [
    {
      title: "Default Badge",
      preview: "default",
      code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Default</Badge>
}`,
    },
    {
      title: "Badge Variants",
      preview: "variants",
      code: `import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`,
    },
    {
      title: "Badge with Icon",
      preview: "withicon",
      code: `import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from 'lucide-react'

export function BadgeWithIcon() {
  return (
    <div className="flex gap-2">
      <Badge className="gap-1">
        <CheckCircle className="h-3 w-3" />
        Verified
      </Badge>
      <Badge variant="destructive" className="gap-1">
        <AlertCircle className="h-3 w-3" />
        Error
      </Badge>
    </div>
  )
}`,
    },
  ],
  installation: {
    cli: "npx shadcn@latest add badge",
    manual: `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`,
  },
}
