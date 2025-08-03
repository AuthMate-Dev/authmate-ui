"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Pricing } from "@/components/ui/pricing"
import { SearchBar } from "@/components/ui/search-bar"
import { Image } from "@/components/ui/image"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { ScrollAnimationContainer } from "@/components/ui/scroll-animation-container"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { LinkPreview } from "@/components/ui/link-preview"
import { ResponsiveLayout } from "@/components/ui/responsive-layout"
import { Carousel } from "@/components/ui/carousel"
import { CodeBlock } from "@/components/ui/code-block"
import { Compare } from "@/components/ui/compare"
import { Sidebar, SidebarHeader, SidebarContent, SidebarItem, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar"
import { Navbar } from "@/components/ui/navbar"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"
import { Plus, CheckCircle, AlertCircle, Star, Home, Users, Settings, FileText, BarChart3, ChevronDown } from "lucide-react"
import type { ComponentData } from "@/lib/components-data"

interface ComponentPreviewDetailedProps {
  component: ComponentData
  activeExample?: number
  onExampleChange?: (index: number) => void
}

export function ComponentPreviewDetailed({
  component,
  activeExample = 0,
  onExampleChange,
}: ComponentPreviewDetailedProps) {
  const [isYearly, setIsYearly] = useState(false)

  const handleExampleChange = (index: number) => {
    onExampleChange?.(index)
  }

  const renderPreview = (exampleIndex: number) => {
    const example = component.examples[exampleIndex]
    if (!example) return <div>No preview available</div>

    const componentType = component.name.toLowerCase().replace(/\s+/g, "-")
    const variant = example.preview

    switch (componentType) {
      case "button":
        switch (variant) {
          case "default":
            return (
              <div className="flex justify-center">
                <Button>Click me</Button>
              </div>
            )
          case "variants":
            return (
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            )
          case "sizes":
            return (
              <div className="flex flex-wrap items-center gap-3 justify-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )
          default:
            return (
              <div className="flex justify-center">
                <Button>Button</Button>
              </div>
            )
        }

      case "badge":
        switch (variant) {
          case "basic":
            return (
              <div className="flex justify-center">
                <Badge>Default Badge</Badge>
              </div>
            )
          case "variants":
            return (
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            )
          case "withIcon":
            return (
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className="gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Verified
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="h-3 w-3" />
                  Featured
                </Badge>
                <Badge variant="destructive" className="gap-1">
                  <AlertCircle className="h-3 w-3" />
                  Error
                </Badge>
              </div>
            )
          default:
            return (
              <div className="flex justify-center">
                <Badge>Badge</Badge>
              </div>
            )
        }

      case "avatar":
        switch (variant) {
          case "basic":
            return (
              <div className="flex justify-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            )
          case "sizes":
            return (
              <div className="flex items-center gap-4 justify-center">
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
                  <AvatarImage src="/placeholder-user.jpg" alt="XL" />
                  <AvatarFallback className="text-lg">XL</AvatarFallback>
                </Avatar>
              </div>
            )
          case "fallback":
            return (
              <div className="flex gap-4 justify-center">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
              </div>
            )
          default:
            return (
              <div className="flex justify-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </div>
            )
        }

      case "modal":
        switch (variant) {
          case "basic":
            return (
              <div className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Modal</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Modal Title</DialogTitle>
                      <DialogDescription>This is a modal dialog. You can put any content here.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Modal content goes here. This is just a demo.</p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )
          case "withForm":
            return (
              <div className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Tell us about yourself" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )
          default:
            return (
              <div className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Modal</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Modal</DialogTitle>
                      <DialogDescription>Modal content</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            )
        }

      case "input":
        switch (variant) {
          case "basic":
            return (
              <div className="space-y-2 max-w-sm mx-auto">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            )
          case "withLabel":
            return (
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter username" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </div>
            )
          case "disabled":
            return (
              <div className="space-y-2 max-w-sm mx-auto">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="This is disabled" disabled />
              </div>
            )
          default:
            return (
              <div className="max-w-sm mx-auto">
                <Input placeholder="Input field" />
              </div>
            )
        }

      case "card":
        return (
          <div className="max-w-sm mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content. You can put any content here.</p>
              </CardContent>
            </Card>
          </div>
        )

      case "pricing":
        switch (variant) {
          case "basic":
            return <Pricing />
          case "yearly":
            return <Pricing defaultCycle="yearly" />
          case "custom":
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span>Monthly</span>
                  <Button variant="outline" size="sm" onClick={() => setIsYearly(!isYearly)}>
                    {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
                  </Button>
                  <span>Yearly</span>
                </div>
                <Pricing defaultCycle={isYearly ? "yearly" : "monthly"} />
              </div>
            )
          default:
            return <Pricing />
        }

      case "toast":
        return (
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => toast.success("Success message!")}>Success Toast</Button>
            <Button onClick={() => toast.error("Error message!")}>Error Toast</Button>
            <Button onClick={() => toast("Info message!")}>Info Toast</Button>
          </div>
        )

      case "sidebar":
        return (
          <div className="max-w-lg mx-auto h-48 border rounded-lg overflow-hidden bg-background">
            <div className="flex h-full">
              {/* Sidebar Container */}
              <div className="w-64 border-r bg-muted/10">
                <Sidebar isOpen={true} width="16rem">
                  <SidebarHeader>
                    <div className="p-3 font-semibold text-lg">Dashboard</div>
                  </SidebarHeader>
                  <SidebarContent>
                    {/* Main Navigation Group */}
                    <SidebarGroup>
                      <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton isActive={true}>
                              <Home className="h-4 w-4" />
                              <span>Dashboard</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <Users className="h-4 w-4" />
                              <span>Team</span>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton>
                                  <span>All Members</span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton>
                                  <span>Roles</span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>

                    {/* Content Group */}
                    <SidebarGroup>
                      <SidebarGroupLabel>Content</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <FileText className="h-4 w-4" />
                              <span>Projects</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <BarChart3 className="h-4 w-4" />
                              <span>Analytics</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>

                    {/* Settings Group */}
                    <SidebarGroup>
                      <SidebarGroupLabel>Settings</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <Settings className="h-4 w-4" />
                              <span>Preferences</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
              </div>
              {/* Main Content Area */}
              <div className="flex-1 p-4 bg-background">
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        )

      case "navbar":
        return (
          <div className="max-w-lg mx-auto border rounded-lg overflow-hidden bg-background">
            {/* Navbar */}
            <Navbar
              brand="AuthMate UI"
              items={[
                { label: "Home", href: "#", isActive: true },
                { label: "Components", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "About", href: "#" }
              ]}
              actions={
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Sign In</Button>
                  <Button size="sm">Get Started</Button>
                </div>
              }
              sticky={true}
            />
            {/* Content below navbar */}
            <div className="p-4 space-y-2">
              <div className="h-3 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        )

      case "login-form":
        return (
          <div className="max-w-sm mx-auto">
            <LoginForm onSubmit={(data) => { toast.success("Login form submitted!") }} />
          </div>
        )

      case "sign-up-form":
      case "signup-form":
        return (
          <div className="max-w-sm mx-auto">
            <SignupForm onSubmit={(data) => { toast.success("Signup form submitted!") }} />
          </div>
        )

      case "search-bar":
        return (
          <div className="max-w-md mx-auto">
            <SearchBar placeholder="Search components..." />
          </div>
        )

      case "image":
        return (
          <div className="flex justify-center">
            <Image
              src="/placeholder.jpg"
              alt="Preview"
              hoverEffect="focus"
              aspectRatio="video"
              className="w-64 h-40"
            />
          </div>
        )

      case "bento-grid":
        return (
          <div className="max-w-lg mx-auto">
            <BentoGrid>
              <BentoGridItem
                title="Feature 1"
                description="Large tile description"
                className="col-span-2"
              />
              <BentoGridItem
                title="Feature 2"
                description="Small tile"
              />
              <BentoGridItem
                title="Feature 3"
                description="Small tile"
              />
              <BentoGridItem
                title="Feature 4"
                description="Large tile description"
                className="col-span-2"
              />
            </BentoGrid>
          </div>
        )

      case "scroll-animation-container":
        return (
          <div className="max-w-md mx-auto">
            <ScrollAnimationContainer animation="fadeIn">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Animated Content</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    This content animates when it enters the viewport
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimationContainer>
          </div>
        )

      case "infinite-moving-cards":
        const testimonials = [
          { quote: "Amazing component!", name: "John Doe", title: "Developer", avatar: "/placeholder-user.jpg" },
          { quote: "Love the animations", name: "Jane Smith", title: "Designer", avatar: "/placeholder-user.jpg" },
          { quote: "Great design system", name: "Mike Johnson", title: "Product Manager", avatar: "/placeholder-user.jpg" },
        ]
        return (
          <div className="max-w-lg mx-auto">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="fast"
            />
          </div>
        )

      case "link-preview":
        return (
          <div className="flex justify-center">
            <LinkPreview url="https://ui.authmate.xyz">
              Visit AuthMate UI Documentation
            </LinkPreview>
          </div>
        )

      case "responsive-layout":
        return (
          <div className="max-w-4xl mx-auto h-64 border rounded-lg overflow-hidden bg-background">
            <ResponsiveLayout>
              {/* Navbar at the top */}
              <Navbar
                brand={
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                    <span>AuthMate UI</span>
                  </div>
                }
                items={[
                  { label: "Dashboard", href: "#", isActive: true },
                  { label: "Analytics", href: "#" },
                  { label: "Reports", href: "#" },
                  { label: "Settings", href: "#" }
                ]}
                actions={
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">Help</Button>
                    <Button size="sm">Profile</Button>
                  </div>
                }
                sticky={true}
              />

              {/* Main layout with sidebar */}
              <div className="flex flex-1 h-full">
                {/* Sidebar */}
                <div className="w-64 border-r bg-muted/5">
                  <Sidebar isOpen={true} width="16rem">
                    <SidebarHeader>
                      <div className="p-3">
                        <h2 className="font-semibold text-sm">Navigation</h2>
                        <p className="text-xs text-muted-foreground">Main menu</p>
                      </div>
                    </SidebarHeader>
                    <SidebarContent>
                      {/* Main Navigation Group */}
                      <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton isActive={true}>
                                <Home className="h-4 w-4" />
                                <span>Dashboard</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <Users className="h-4 w-4" />
                                <span>Team</span>
                              </SidebarMenuButton>
                              <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <span>Members</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <span>Permissions</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              </SidebarMenuSub>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>

                      {/* Analytics Group */}
                      <SidebarGroup>
                        <SidebarGroupLabel>Analytics</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <FileText className="h-4 w-4" />
                                <span>Projects</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <BarChart3 className="h-4 w-4" />
                                <span>Reports</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>

                      {/* Settings Group */}
                      <SidebarGroup>
                        <SidebarGroupLabel>System</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                  </Sidebar>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-4 overflow-auto">
                  <div className="space-y-3">
                    <h1 className="text-lg font-semibold">Dashboard Overview</h1>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-muted rounded-lg flex items-center justify-center text-sm">
                        Card 1
                      </div>
                      <div className="h-16 bg-muted rounded-lg flex items-center justify-center text-sm">
                        Card 2
                      </div>
                    </div>
                    <div className="h-20 bg-muted rounded-lg flex items-center justify-center text-sm">
                      Content Area
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveLayout>
          </div>
        )

      case "carousel":
        const carouselItems = [
          {
            id: "slide-1",
            content: (
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Slide 1</h3>
                  <p className="text-sm text-muted-foreground">First carousel item</p>
                </CardContent>
              </Card>
            )
          },
          {
            id: "slide-2",
            content: (
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Slide 2</h3>
                  <p className="text-sm text-muted-foreground">Second carousel item</p>
                </CardContent>
              </Card>
            )
          },
          {
            id: "slide-3",
            content: (
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">Slide 3</h3>
                  <p className="text-sm text-muted-foreground">Third carousel item</p>
                </CardContent>
              </Card>
            )
          }
        ]
        return (
          <div className="max-w-md mx-auto">
            <Carousel
              items={carouselItems}
              className="h-64"
              autoPlay={true}
              autoPlayInterval={4000}
              showArrows={true}
              showDots={true}
              infinite={true}
              variant="default"
            />
          </div>
        )

      case "code-block":
        const codeExample = `function hello() {
  console.log("Hello, AuthMate UI!");
  return "Welcome to our component library";
}`
        return (
          <div className="max-w-md mx-auto">
            <CodeBlock language="javascript" code={codeExample} />
          </div>
        )

      case "compare":
        return (
          <div className="flex justify-center">
            <Compare
              beforeImage="/placeholder.jpg"
              afterImage="/placeholder.svg"
              className="w-64 h-32"
            />
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            <div className="text-center">
              <p>Preview not available for {component.name}</p>
              <p className="text-sm mt-1">Variant: {variant}</p>
            </div>
          </div>
        )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Live Preview
          <Badge variant="outline">Interactive</Badge>
        </CardTitle>
        <CardDescription>
          {component.examples.length > 1
            ? `${component.examples.length} examples available`
            : "Interactive component preview"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {component.examples.length > 1 ? (
          <Tabs value={activeExample.toString()} onValueChange={(value) => handleExampleChange(Number.parseInt(value))}>
            <TabsList className="grid w-full grid-cols-3">
              {component.examples.slice(0, 3).map((example, index) => (
                <TabsTrigger key={index} value={index.toString()}>
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {component.examples.map((example, index) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="min-h-[200px] flex items-center justify-center p-6 border rounded-lg bg-muted/10">
                  {renderPreview(index)}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="min-h-[200px] flex items-center justify-center p-6 border rounded-lg bg-muted/10">
            {renderPreview(0)}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
