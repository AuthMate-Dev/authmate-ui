"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, Users, Settings, FileText, BarChart3, Mail, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function SidebarDemo() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { icon: Home, label: "Dashboard", badge: null },
    { icon: Users, label: "Users", badge: "12" },
    { icon: FileText, label: "Documents", badge: null },
    { icon: BarChart3, label: "Analytics", badge: "New" },
    { icon: Mail, label: "Messages", badge: "3" },
    { icon: Calendar, label: "Calendar", badge: null },
    { icon: Settings, label: "Settings", badge: null },
  ]

  return (
    <TooltipProvider>
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-0">
          <div className="flex h-96">
            {/* Sidebar */}
            <div
              className={cn(
                "bg-muted/50 border-r transition-all duration-300 ease-in-out flex flex-col",
                isCollapsed ? "w-16" : "w-64",
              )}
            >
              {/* Header */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  {!isCollapsed && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">A</span>
                      </div>
                      <span className="font-semibold">AuthMate</span>
                    </div>
                  )}
                  <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="h-8 w-8">
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-2">
                <ul className="space-y-1">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start h-10",
                              isCollapsed ? "px-2" : "px-3",
                              index === 0 && "bg-accent text-accent-foreground",
                            )}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            {!isCollapsed && (
                              <>
                                <span className="ml-3 truncate">{item.label}</span>
                                {item.badge && (
                                  <Badge
                                    variant={item.badge === "New" ? "default" : "secondary"}
                                    className="ml-auto text-xs"
                                  >
                                    {item.badge}
                                  </Badge>
                                )}
                              </>
                            )}
                          </Button>
                        </TooltipTrigger>
                        {isCollapsed && (
                          <TooltipContent side="right">
                            <p>{item.label}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t">
                {!isCollapsed ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">John Doe</p>
                      <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                    </div>
                  </div>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto cursor-pointer">
                        <span className="text-sm font-medium">JD</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>John Doe</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">Dashboard</h2>
                  <p className="text-muted-foreground">Welcome back, John!</p>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Total Users</span>
                      </div>
                      <p className="text-2xl font-bold mt-2">1,234</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Revenue</span>
                      </div>
                      <p className="text-2xl font-bold mt-2">$12,345</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Click the toggle button to collapse/expand the sidebar.</p>
                  <p>Hover over icons when collapsed to see tooltips.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
