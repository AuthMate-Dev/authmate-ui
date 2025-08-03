import type { ComponentData } from "./index"

export const buttonComponent: ComponentData = {
  name: "Button",
  description: "A versatile button component with multiple variants and sizes for different use cases.",
  category: "Form",
  version: "1.0.0",
  dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
  props: [
    {
      name: "variant",
      type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
      default: "'default'",
      description: "The visual style variant of the button",
    },
    {
      name: "size",
      type: "'default' | 'sm' | 'lg' | 'icon'",
      default: "'default'",
      description: "The size of the button",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Change the default rendered element for the one passed as a child",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the button is disabled",
    },
  ],
  examples: [
    {
      title: "Default Button",
      preview: "default",
      code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
    },
    {
      title: "Button Variants",
      preview: "variants",
      code: `import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`,
    },
    {
      title: "Button Sizes",
      preview: "sizes",
      code: `import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}`,
    },
  ],
  installation: {
    cli: "npx shadcn@latest add button",
    manual: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,
  },
}
