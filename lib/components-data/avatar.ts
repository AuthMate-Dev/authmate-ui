import type { ComponentData } from "./index"

export const avatarComponent: ComponentData = {
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
      description: "The image source URL",
    },
    {
      name: "alt",
      type: "string",
      default: "undefined",
      description: "Alternative text for the image",
    },
    {
      name: "fallback",
      type: "React.ReactNode",
      default: "undefined",
      description: "Fallback content when image fails to load",
    },
  ],
  examples: [
    {
      title: "Default Avatar",
      preview: "default",
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  )
}`,
    },
    {
      title: "Avatar Sizes",
      preview: "sizes",
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder-user.jpg" alt="Small" />
        <AvatarFallback className="text-xs">S</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" alt="Default" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="/placeholder-user.jpg" alt="Large" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="/placeholder-user.jpg" alt="Extra Large" />
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
  )
}`,
    },
    {
      title: "Avatar Fallback",
      preview: "fallback",
      code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarFallback() {
  return (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}`,
    },
  ],
  installation: {
    cli: "npx shadcn@latest add avatar",
    manual: `import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
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

export { Avatar, AvatarImage }`,
  },
}
