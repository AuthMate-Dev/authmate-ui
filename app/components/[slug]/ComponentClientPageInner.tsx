"use client"
// Component data
const components = {
  button: {
    name: "Button",
    description: "A versatile button component with multiple variants, sizes, and states.",
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
        code: `<Button>Click me</Button>`,
        preview: "default",
      },
      {
        title: "Button Variants",
        code: `<div className="flex gap-2">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="destructive">Destructive</Button>
</div>`,
        preview: "variants",
      },
      {
        title: "Button Sizes",
        code: `<div className="flex items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <Plus className="h-4 w-4" />
  </Button>
</div>`,
        preview: "sizes",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/button.json",
      manual: `// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
  },
  toast: {
    name: "Toast",
    description: "A succinct message that is displayed temporarily with smooth animations.",
    category: "Feedback",
    version: "1.0.0",
    dependencies: ["@radix-ui/react-toast", "framer-motion"],
    props: [
      {
        name: "variant",
        type: "'default' | 'destructive' | 'success'",
        default: "'default'",
        description: "The visual style variant of the toast",
      },
      {
        name: "duration",
        type: "number",
        default: "5000",
        description: "Time in milliseconds before toast auto-closes",
      },
    ],
    examples: [
      {
        title: "Basic Toast",
        code: `<Button onClick={() => toast("Hello World!")}>
  Show Toast
</Button>`,
        preview: "basic",
      },
      {
        title: "Toast Variants",
        code: `<div className="flex gap-2">
  <Button onClick={() => toast("Default toast")}>Default</Button>
  <Button onClick={() => toast.success("Success!")}>Success</Button>
  <Button onClick={() => toast.error("Error occurred")}>Error</Button>
</div>`,
        preview: "variants",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/toast.json",
      manual: `// See full implementation in the component file`,
    },
  },
  image: {
    name: "Image",
    description: "An enhanced image component with hover effects and aspect ratio control.",
    category: "Media",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "hoverEffect",
        type: "'zoom' | 'focus' | 'lift' | 'none'",
        default: "'focus'",
        description: "The hover effect to apply to the image",
      },
      {
        name: "aspectRatio",
        type: "'square' | 'video' | 'portrait' | 'auto'",
        default: "'auto'",
        description: "The aspect ratio of the image container",
      },
    ],
    examples: [
      {
        title: "Basic Image",
        code: `<Image 
  src="/placeholder.svg?height=300&width=400" 
  alt="Example" 
  hoverEffect="focus"
/>`,
        preview: "basic",
      },
      {
        title: "Hover Effects",
        code: `<div className="grid grid-cols-2 gap-4">
  <Image src="/placeholder.svg?height=200&width=200" alt="Zoom" hoverEffect="zoom" />
  <Image src="/placeholder.svg?height=200&width=200" alt="Focus" hoverEffect="focus" />
  <Image src="/placeholder.svg?height=200&width=200" alt="Lift" hoverEffect="lift" />
</div>`,
        preview: "effects",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/image.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "bento-grid": {
    name: "Bento Grid",
    description: "A flexible grid layout component inspired by Apple's design language.",
    category: "Layout",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "className",
        type: "string",
        default: "undefined",
        description: "Additional CSS classes for the grid container",
      },
    ],
    examples: [
      {
        title: "Basic Bento Grid",
        code: `<BentoGrid>
  <BentoGridItem title="Feature 1" description="Description here" />
  <BentoGridItem title="Feature 2" description="Description here" />
  <BentoGridItem title="Feature 3" description="Description here" />
</BentoGrid>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/bento-grid.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "scroll-animation": {
    name: "Scroll Animation Container",
    description: "A container that triggers animations when elements enter the viewport.",
    category: "Animation",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "animation",
        type: "'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'",
        default: "'fadeIn'",
        description: "The animation type to trigger on scroll",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Delay before animation starts in seconds",
      },
    ],
    examples: [
      {
        title: "Scroll Animations",
        code: `<ScrollAnimationContainer animation="slideUp">
  <Card>Content that animates on scroll</Card>
</ScrollAnimationContainer>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/scroll-animation.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "infinite-cards": {
    name: "Infinite Moving Cards",
    description: "An infinite scrolling carousel of cards with smooth animations.",
    category: "Animation",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "direction",
        type: "'left' | 'right'",
        default: "'left'",
        description: "Direction of the infinite scroll",
      },
      {
        name: "speed",
        type: "'fast' | 'normal' | 'slow'",
        default: "'fast'",
        description: "Speed of the animation",
      },
    ],
    examples: [
      {
        title: "Moving Cards",
        code: `<InfiniteMovingCards
  items={testimonials}
  direction="left"
  speed="fast"
/>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/infinite-cards.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "link-preview": {
    name: "Link Preview",
    description: "A link component that shows a preview on hover with smooth animations.",
    category: "Navigation",
    version: "1.0.0",
    dependencies: ["@radix-ui/react-hover-card", "framer-motion"],
    props: [
      {
        name: "url",
        type: "string",
        default: "undefined",
        description: "The URL to preview",
      },
      {
        name: "width",
        type: "number",
        default: "200",
        description: "Width of the preview image",
      },
    ],
    examples: [
      {
        title: "Link with Preview",
        code: `<LinkPreview url="https://example.com">
  Visit Example.com
</LinkPreview>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/link-preview.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "sidebar-layout": {
    name: "Sidebar Layout",
    description: "A complete layout component with sidebar, navbar, and responsive behavior.",
    category: "Layout",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "collapsible",
        type: "boolean",
        default: "true'",
        description: "Whether the sidebar can be collapsed",
      },
      {
        name: "sidebarWidth",
        type: "string",
        default: "'16rem'",
        description: "Width of the sidebar",
      },
    ],
    examples: [
      {
        title: "Complete Layout",
        code: `<SidebarLayout
  sidebar={<MySidebar />}
  navbar={<MyNavbar />}
>
  <div>Main content here</div>
</SidebarLayout>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/sidebar-layout.json",
      manual: `// See full implementation in the component file`,
    },
  },
  card: {
    name: "Card",
    description: "A flexible container component for grouping related content with header, body, and footer sections.",
    category: "Layout",
    version: "1.0.0",
    dependencies: [],
    props: [
      {
        name: "className",
        type: "string",
        default: "undefined",
        description: "Additional CSS classes to apply to the card",
      },
    ],
    examples: [
      {
        title: "Basic Card",
        code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardHeader>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`,
        preview: "basic",
      },
      {
        title: "Card with Footer",
        code: `<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>A revolutionary new project</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This project will change everything we know about development.</p>
  </CardContent>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>`,
        preview: "withFooter",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/card.json",
      manual: `// components/ui/card.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,
    },
  },
  input: {
    name: "Input",
    description: "A text input field component with built-in styling and validation support.",
    category: "Form",
    version: "1.0.0",
    dependencies: [],
    props: [
      {
        name: "type",
        type: "string",
        default: "'text'",
        description: "The type of input (text, email, password, etc.)",
      },
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        description: "Placeholder text for the input",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the input is disabled",
      },
    ],
    examples: [
      {
        title: "Basic Input",
        code: `<Input placeholder="Enter your name" />`,
        preview: "basic",
      },
      {
        title: "Input with Label",
        code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`,
        preview: "withLabel",
      },
      {
        title: "Disabled Input",
        code: `<Input disabled placeholder="Disabled input" />`,
        preview: "disabled",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/input.json",
      manual: `// components/ui/input.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`,
    },
  },
  avatar: {
    name: "Avatar",
    description: "A user profile picture component with fallback support and customizable sizes.",
    category: "Display",
    version: "1.0.0",
    dependencies: ["@radix-ui/react-avatar"],
    props: [
      {
        name: "src",
        type: "string",
        default: "undefined",
        description: "The source URL of the avatar image",
      },
      {
        name: "alt",
        type: "string",
        default: "undefined",
        description: "Alternative text for the avatar image",
      },
      {
        name: "fallback",
        type: "string",
        default: "undefined",
        description: "Fallback text or initials when image fails to load",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "The size of the avatar",
      },
    ],
    examples: [
      {
        title: "Basic Avatar",
        code: `<Avatar>
  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
        preview: "basic",
      },
      {
        title: "Avatar Sizes",
        code: `<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="/placeholder.svg?height=32&width=32" />
    <AvatarFallback className="text-xs">SM</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/placeholder.svg?height=40&width=40" />
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-12 w-12">
    <AvatarImage src="/placeholder.svg?height=48&width=48" />
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
  <Avatar className="h-16 w-16">
    <AvatarImage src="/placeholder.svg?height=64&width=64" />
    <AvatarFallback className="text-lg">XL</AvatarFallback>
  </Avatar>
</div>`,
        preview: "sizes",
      },
      {
        title: "Fallback Only",
        code: `<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
        preview: "fallback",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/avatar.json",
      manual: `// components/ui/avatar.tsx
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }`,
    },
  },
  modal: {
    name: "Modal",
    description:
      "A dialog overlay component for displaying content above the main page with backdrop and focus management.",
    category: "Overlay",
    version: "1.0.0",
    dependencies: ["@radix-ui/react-dialog"],
    props: [
      {
        name: "open",
        type: "boolean",
        default: "undefined",
        description: "Controls whether the modal is open",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        default: "undefined",
        description: "Callback when the modal open state changes",
      },
      {
        name: "modal",
        type: "boolean",
        default: "true",
        description: "Whether the modal should be modal (blocking interaction with the rest of the page)",
      },
    ],
    examples: [
      {
        title: "Basic Modal",
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
      <DialogDescription>
        This is a modal dialog. You can put any content here.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Modal content goes here.</p>
    </div>
  </DialogContent>
</Dialog>`,
        preview: "basic",
      },
      {
        title: "Modal with Form",
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" value="John Doe" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">Email</Label>
        <Input id="email" value="john@example.com" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        preview: "withForm",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/modal.json",
      manual: `// components/ui/dialog.tsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}`,
    },
  },
  badge: {
    name: "Badge",
    description: "A small status indicator or label component with multiple variants and sizes.",
    category: "Display",
    version: "1.0.0",
    dependencies: ["class-variance-authority"],
    props: [
      {
        name: "variant",
        type: "'default' | 'secondary' | 'destructive' | 'outline'",
        default: "'default'",
        description: "The visual style variant of the badge",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "The size of the badge",
      },
    ],
    examples: [
      {
        title: "Basic Badge",
        code: `<Badge>Default</Badge>`,
        preview: "basic",
      },
      {
        title: "Badge Variants",
        code: `<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</div>`,
        preview: "variants",
      },
      {
        title: "Badge with Icon",
        code: `<div className="flex gap-2">
  <Badge className="gap-1">
    <CheckCircle className="h-3 w-3" />
    Verified
  </Badge>
  <Badge variant="destructive" className="gap-1">
    <AlertCircle className="h-3 w-3" />
    Error
  </Badge>
</div>`,
        preview: "withIcon",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/badge.json",
      manual: `// components/ui/badge.tsx
import * as React from "react"
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
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }`,
    },
  },
  sidebar: {
    name: "Sidebar",
    description: "A collapsible sidebar navigation component with smooth animations and responsive behavior.",
    category: "Navigation",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "collapsible",
        type: "boolean",
        default: "true",
        description: "Whether the sidebar can be collapsed",
      },
    ],
    examples: [
      {
        title: "Basic Sidebar",
        code: `<Sidebar>
  <SidebarContent>
    Navigation items here
  </SidebarContent>
</Sidebar>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/sidebar.json",
      manual: `// See full implementation in the component file`,
    },
  },
  navbar: {
    name: "Navbar",
    description: "A responsive navigation bar component with mobile menu support and smooth animations.",
    category: "Navigation",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "items",
        type: "NavItem[]",
        default: "[]",
        description: "Navigation items to display",
      },
    ],
    examples: [
      {
        title: "Basic Navbar",
        code: `<Navbar items={navItems} />`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/navbar.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "login-form": {
    name: "Login Form",
    description: "A complete login form component with email/password validation and social authentication options.",
    category: "Form",
    version: "1.0.0",
    dependencies: ["react-hook-form", "zod"],
    props: [
      {
        name: "onSubmit",
        type: "(data: LoginData) => void",
        default: "undefined",
        description: "Callback when form is submitted",
      },
    ],
    examples: [
      {
        title: "Basic Login Form",
        code: `<LoginForm onSubmit={handleLogin} />`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/login-form.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "sign-up-form": {
    name: "Signup Form",
    description: "A comprehensive signup form with validation, password confirmation, and terms acceptance.",
    category: "Form",
    version: "1.0.0",
    dependencies: ["react-hook-form", "zod"],
    props: [
      {
        name: "onSubmit",
        type: "(data: SignupData) => void",
        default: "undefined",
        description: "Callback when form is submitted",
      },
    ],
    examples: [
      {
        title: "Basic Signup Form",
        code: `<SignupForm onSubmit={handleSignup} />`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/signup-form.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "search-bar": {
    name: "Search Bar",
    description: "An interactive search input component with autocomplete and filtering capabilities.",
    category: "Form",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "placeholder",
        type: "string",
        default: "'Search...'",
        description: "Placeholder text for the search input",
      },
    ],
    examples: [
      {
        title: "Basic Search Bar",
        code: `<SearchBar placeholder="Search components..." />`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/search-bar.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "scroll-animation-container": {
    name: "Scroll Animation Container",
    description: "A container that triggers animations when elements enter the viewport.",
    category: "Animation",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "animation",
        type: "'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'",
        default: "'fadeIn'",
        description: "The animation type to trigger on scroll",
      },
      {
        name: "delay",
        type: "number",
        default: "0",
        description: "Delay before animation starts in seconds",
      },
    ],
    examples: [
      {
        title: "Scroll Animations",
        code: `<ScrollAnimationContainer animation="slideUp">
  <Card>Content that animates on scroll</Card>
</ScrollAnimationContainer>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/scroll-animation-container.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "infinite-moving-cards": {
    name: "Infinite Moving Cards",
    description: "An infinite scrolling carousel of cards with smooth animations.",
    category: "Animation",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "direction",
        type: "'left' | 'right'",
        default: "'left'",
        description: "Direction of the infinite scroll",
      },
      {
        name: "speed",
        type: "'fast' | 'normal' | 'slow'",
        default: "'fast'",
        description: "Speed of the animation",
      },
    ],
    examples: [
      {
        title: "Moving Cards",
        code: `<InfiniteMovingCards
  items={testimonials}
  direction="left"
  speed="fast"
/>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/infinite-moving-cards.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "responsive-layout": {
    name: "Responsive Layout",
    description: "A complete layout component with sidebar, navbar, and responsive behavior.",
    category: "Layout",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "collapsible",
        type: "boolean",
        default: "true",
        description: "Whether the sidebar can be collapsed",
      },
      {
        name: "sidebarWidth",
        type: "string",
        default: "'16rem'",
        description: "Width of the sidebar",
      },
    ],
    examples: [
      {
        title: "Complete Layout",
        code: `<ResponsiveLayout
  sidebar={<MySidebar />}
  navbar={<MyNavbar />}
>
  <div>Main content here</div>
</ResponsiveLayout>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/responsive-layout.json",
      manual: `// See full implementation in the component file`,
    },
  },
  pricing: {
    name: "Pricing",
    description: "A flexible pricing component with multiple plans, billing toggles, and feature comparisons.",
    category: "Marketing",
    version: "1.0.0",
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      {
        name: "plans",
        type: "PricingPlan[]",
        default: "[]",
        description: "Array of pricing plans to display",
      },
    ],
    examples: [
      {
        title: "Pricing Section",
        code: `<Pricing plans={pricingPlans} />`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/pricing.json",
      manual: `// See full implementation in the component file`,
    },
  },
  carousel: {
    name: "Carousel",
    description: "An interactive carousel component with navigation controls and smooth transitions.",
    category: "Display",
    version: "1.0.0",
    dependencies: ["embla-carousel-react"],
    props: [
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "The orientation of the carousel",
      },
    ],
    examples: [
      {
        title: "Basic Carousel",
        code: `<Carousel>
  <CarouselContent>
    <CarouselItem>Item 1</CarouselItem>
    <CarouselItem>Item 2</CarouselItem>
    <CarouselItem>Item 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/carousel.json",
      manual: `// See full implementation in the component file`,
    },
  },
  "code-block": {
    name: "Code Block",
    description: "A syntax-highlighted code display component with copy functionality.",
    category: "Display",
    version: "1.0.0",
    dependencies: ["prismjs"],
    props: [
      {
        name: "language",
        type: "string",
        default: "'javascript'",
        description: "The programming language for syntax highlighting",
      },
    ],
    examples: [
      {
        title: "Code Block",
        code: `<CodeBlock language="javascript">
  {codeString}
</CodeBlock>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/code-block.json",
      manual: `// See full implementation in the component file`,
    },
  },
  compare: {
    name: "Compare",
    description: "An interactive comparison component for before/after or side-by-side comparisons.",
    category: "Display",
    version: "1.0.0",
    dependencies: ["framer-motion"],
    props: [
      {
        name: "firstImage",
        type: "string",
        default: "undefined",
        description: "URL of the first image to compare",
      },
      {
        name: "secondImage",
        type: "string",
        default: "undefined",
        description: "URL of the second image to compare",
      },
    ],
    examples: [
      {
        title: "Image Comparison",
        code: `<Compare
  firstImage="/before.jpg"
  secondImage="/after.jpg"
/>`,
        preview: "basic",
      },
    ],
    installation: {
      cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/compare.json",
      manual: `// See full implementation in the component file`,
    },
  },
}
export default function ComponentClientPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug)
  const component = components[decodedSlug as keyof typeof components]

  if (!component) {
    return <div>Component not found</div>
  }

  return (
    <div>
      <h1>{component.name}</h1>
      <p>{component.description}</p>
      {/* Render other component details here */}
    </div>
  )
}
