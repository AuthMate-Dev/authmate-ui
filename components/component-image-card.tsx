"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Copy } from "lucide-react"
import type { ComponentData } from "@/lib/components-data"

interface ComponentImageCardProps {
  component: ComponentData
}

export function ComponentImageCard({ component }: ComponentImageCardProps) {
  const slug = component.name.toLowerCase().replace(/\s+/g, "-")

  const getComponentImage = (componentName: string) => {
    // Generate placeholder images for different component types
    const imageMap: Record<string, string> = {
      button: "/placeholder.svg?height=200&width=300&text=Button+Component",
      card: "/placeholder.svg?height=200&width=300&text=Card+Component",
      input: "/placeholder.svg?height=200&width=300&text=Input+Component",
      modal: "/placeholder.svg?height=200&width=300&text=Modal+Component",
      avatar: "/placeholder.svg?height=200&width=300&text=Avatar+Component",
      badge: "/placeholder.svg?height=200&width=300&text=Badge+Component",
      toast: "/placeholder.svg?height=200&width=300&text=Toast+Component",
      image: "/placeholder.svg?height=200&width=300&text=Image+Component",
      "bento-grid": "/placeholder.svg?height=200&width=300&text=Bento+Grid",
      navbar: "/placeholder.svg?height=200&width=300&text=Navbar+Component",
      sidebar: "/placeholder.svg?height=200&width=300&text=Sidebar+Component",
      "infinite-cards": "/placeholder.svg?height=200&width=300&text=Infinite+Cards",
      "link-preview": "/placeholder.svg?height=200&width=300&text=Link+Preview",
      "scroll-animation": "/placeholder.svg?height=200&width=300&text=Scroll+Animation",
      "responsive-layout": "/placeholder.svg?height=200&width=300&text=Responsive+Layout",
      "search-bar": "/placeholder.svg?height=200&width=300&text=Search+Bar",
      carousel: "/placeholder.svg?height=200&width=300&text=Carousel+Component",
      "code-block": "/placeholder.svg?height=200&width=300&text=Code+Block",
      compare: "/placeholder.svg?height=200&width=300&text=Compare+Component",
      "login-form": "/placeholder.svg?height=200&width=300&text=Login+Form",
      "signup-form": "/placeholder.svg?height=200&width=300&text=Signup+Form",
      pricing: "/placeholder.svg?height=200&width=300&text=Pricing+Component",
    }

    return imageMap[slug] || "/placeholder.svg?height=200&width=300&text=Component"
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Form: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Layout: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Display: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      Navigation: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Feedback: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      Media: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      Animation: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Overlay: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      Authentication: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      Marketing: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    }
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <img
            src={getComponentImage(component.name) || "/placeholder.svg"}
            alt={`${component.name} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge className={getCategoryColor(component.category)}>{component.category}</Badge>
            <span className="text-xs text-muted-foreground">v{component.version}</span>
          </div>

          <CardTitle className="text-lg">{component.name}</CardTitle>
          <CardDescription className="line-clamp-2">{component.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {component.dependencies.slice(0, 2).map((dep) => (
              <Badge key={dep} variant="outline" className="text-xs">
                {dep.replace("@", "").split("/").pop()}
              </Badge>
            ))}
            {component.dependencies.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{component.dependencies.length - 2}
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            <Button asChild className="flex-1">
              <Link href={`/components/${slug}`}>
                <ExternalLink className="h-4 w-4 mr-2" />
                View Details
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                navigator.clipboard.writeText(component.installation.cli)
              }}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
