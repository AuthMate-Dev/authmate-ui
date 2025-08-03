"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"
import { SidebarDemo } from "@/components/demos/sidebar-demo"
import { NavbarDemo } from "@/components/demos/navbar-demo"
import { ResponsiveLayoutDemo } from "@/components/demos/responsive-layout-demo"
import { SearchBarDemo } from "@/components/demos/search-bar-demo"
import { CarouselDemo } from "@/components/demos/carousel-demo"
import { ToastDemo } from "@/components/demos/toast-demo"
import { Pricing } from "@/components/ui/pricing"

interface ComponentPreviewProps {
  type: string
}

export function ComponentPreview({ type }: ComponentPreviewProps) {
  const handleDemoSubmit = (formType: string) => {
    toast.success(`${formType} form submitted successfully!`, {
      description: "This is just a demo - no actual submission occurred.",
    })
  }

  switch (type) {
    case "button":
      return (
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      )

    case "card":
      return (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area.</p>
          </CardContent>
        </Card>
      )

    case "input":
      return (
        <div className="space-y-2 w-full max-w-sm">
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter your password" type="password" />
        </div>
      )

    case "modal":
      return (
        <div className="p-4 border rounded-lg bg-background">
          <h3 className="font-semibold mb-2">Modal Preview</h3>
          <p className="text-sm text-muted-foreground mb-4">This would be a modal dialog in the actual component.</p>
          <div className="flex gap-2">
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="outline">
              Cancel
            </Button>
          </div>
        </div>
      )

    case "avatar":
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

    case "badge":
      return (
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      )

    case "toast":
      return <ToastDemo />

    case "image":
      return (
        <div className="w-full max-w-sm">
          <img
            src="/placeholder.jpg"
            alt="Placeholder"
            className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      )

    case "bento-grid":
      return (
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg">
            <h4 className="font-semibold text-sm">Feature 1</h4>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-lg">
            <h4 className="font-semibold text-sm">Feature 2</h4>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg col-span-2">
            <h4 className="font-semibold text-sm">Feature 3</h4>
          </div>
        </div>
      )

    case "navbar":
      return <NavbarDemo />

    case "sidebar":
      return <SidebarDemo />

    case "infinite-moving-cards":
      return (
        <div className="flex gap-2 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="min-w-[200px] animate-pulse">
              <CardContent className="p-4">
                <p className="text-sm">Moving Card {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )

    case "link-preview":
      return (
        <div className="p-4 border rounded-lg">
          <a href="https://authmate.xyz/" className="text-blue-600 hover:underline">
            Hover to preview link
          </a>
        </div>
      )

    case "scroll-animation-container":
      return (
        <div className="h-32 overflow-y-auto border rounded-lg p-4">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-2 bg-muted rounded animate-fade-in">
                Scroll item {i}
              </div>
            ))}
          </div>
        </div>
      )

    case "responsive-layout":
      return <ResponsiveLayoutDemo />

    case "search-bar":
      return <SearchBarDemo />

    case "carousel":
      return <CarouselDemo />

    case "code-block":
      return (
        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
          <span className="text-blue-600">const</span> <span className="text-purple-600">greeting</span> ={" "}
          <span className="text-green-600">"Hello World!"</span>
        </div>
      )

    case "compare":
      return (
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold text-sm">Before</h4>
            <p className="text-xs text-muted-foreground">Old version</p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-semibold text-sm">After</h4>
            <p className="text-xs text-muted-foreground">New version</p>
          </div>
        </div>
      )

    case "pricing":
      return (
        <div className="w-full">
          <Pricing />
        </div>
      )

    case "login-form":
      return (
        <div className="w-full max-w-sm">
          <LoginForm onSubmit={() => handleDemoSubmit("Login")} showSocial={true} />
        </div>
      )

    case "signup-form":
    case "sign-up-form":
      return (
        <div className="w-full max-w-sm">
          <SignupForm onSubmit={() => handleDemoSubmit("Sign up")} showSocial={true} />
        </div>
      )

    default:
      return (
        <div className="p-4 border rounded-lg text-center text-muted-foreground">
          Preview not available for "{type}"
        </div>
      )
  }
}
