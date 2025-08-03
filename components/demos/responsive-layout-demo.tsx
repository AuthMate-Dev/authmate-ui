"use client"

import { ResponsiveLayout } from "@/components/ui/responsive-layout"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Users, Settings, BarChart3, FileText, Bell, Search, User, LogOut } from "lucide-react"

export function ResponsiveLayoutDemo() {
  const sidebarItems = [
    { label: "Dashboard", href: "#", icon: Home, isActive: true },
    { label: "Users", href: "#", icon: Users, badge: "12" },
    { label: "Analytics", href: "#", icon: BarChart3 },
    { label: "Documents", href: "#", icon: FileText, badge: "3" },
    { label: "Settings", href: "#", icon: Settings },
  ]

  const navItems = [
    { label: "Overview", href: "#", isActive: true },
    { label: "Projects", href: "#" },
    { label: "Team", href: "#" },
    { label: "Reports", href: "#" },
  ]

  const sidebarHeader = (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">AC</span>
      </div>
      <span className="font-semibold text-lg">Acme Corp</span>
    </div>
  )

  const sidebarFooter = (
    <div className="flex items-center gap-3 p-2 rounded-lg bg-accent">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg?height=32&width=32" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">John Doe</p>
        <p className="text-xs text-muted-foreground truncate">john@example.com</p>
      </div>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )

  const navActions = (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="sm">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="relative">
        <Bell className="h-4 w-4" />
        <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">3</Badge>
      </Button>
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg?height=32&width=32" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )

  return (
    <div className="h-[600px] border rounded-lg overflow-hidden">
      <ResponsiveLayout
        sidebarItems={sidebarItems}
        sidebarHeader={sidebarHeader}
        sidebarFooter={sidebarFooter}
        navItems={navItems}
        navActions={navActions}
        collapsible={true}
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Documents</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your team's recent activity and updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">John Doe updated the project</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Sarah Miller added new documents</p>
                    <p className="text-sm text-muted-foreground">4 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ResponsiveLayout>
    </div>
  )
}
