"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
} from "@/components/ui/sidebar"
import { getAllComponents } from "@/lib/components-data"
import { 
  Search, 
  ChevronDown, 
  ChevronRight,
  FileText,
  Eye,
  Layout,
  Navigation,
  MessageCircle,
  Image,
  Sparkles,
  Square,
  Package
} from "lucide-react"

const categoryIcons = {
  Form: FileText,
  Display: Eye,
  Layout: Layout,
  Navigation: Navigation,
  Feedback: MessageCircle,
  Media: Image,
  Animation: Sparkles,
  Overlay: Square,
}

export function ComponentsSidebar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Form", "Display", "Layout"])
  const pathname = usePathname()

  const allComponents = getAllComponents()

  // Filter components based on search query
  const filteredComponents = allComponents.filter(
    (component) =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Group components by category
  const componentsByCategory = filteredComponents.reduce(
    (acc, component) => {
      const category = component.category || "Other"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(component)
      return acc
    },
    {} as Record<string, typeof allComponents>,
  )

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">UI</span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Components</h2>
            <p className="text-xs text-muted-foreground">{allComponents.length} components</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <SidebarInput
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto">
        <ScrollArea className="flex-1">
          {Object.entries(componentsByCategory).map(([category, components]) => {
          const isExpanded = expandedCategories.includes(category)
          const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Package

          return (
            <SidebarGroup key={category}>
              <Collapsible open={isExpanded} onOpenChange={() => toggleCategory(category)}>
                <CollapsibleTrigger asChild>
                  <SidebarGroupLabel className="flex items-center justify-between w-full hover:bg-accent/50 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4" />
                      <span className="font-medium">{category}</span>
                      <Badge variant="secondary" className="text-xs">
                        {components.length}
                      </Badge>
                    </div>
                    {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </SidebarGroupLabel>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {components.map((component) => {
                        const slug = component.name.toLowerCase().replace(/\s+/g, "-")
                        const isActive = pathname === `/components/${slug}`

                        return (
                          <SidebarMenuItem key={component.name}>
                            <SidebarMenuButton asChild isActive={isActive}>
                              <Link href={`/components/${slug}`} className="flex items-center justify-between">
                                <div className="flex flex-col items-start">
                                  <span className="font-medium">{component.name}</span>
                                  <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                                    {component.description}
                                  </span>
                                </div>
                              </Link>
                            </SidebarMenuButton>
                            <Badge variant="secondary" className="text-xs absolute right-2 top-[-5px]">
                              v{component.version}
                            </Badge>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          )
        })}
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}
