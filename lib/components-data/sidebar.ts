export const sidebarComponent = {
  name: "Sidebar",
  description: "A collapsible sidebar navigation component with smooth animations and responsive behavior.",
  category: "Navigation",
  version: "1.0.0",
  dependencies: ["@radix-ui/react-slot", "framer-motion"],
  props: [
    {
      name: "collapsible",
      type: "'offcanvas' | 'icon' | 'none'",
      default: "'offcanvas'",
      description: "The collapsible behavior of the sidebar",
    },
    {
      name: "side",
      type: "'left' | 'right'",
      default: "'left'",
      description: "The side where the sidebar appears",
    },
  ],
  examples: [
    {
      title: "Basic Sidebar",
      code: `"use client"

import React from "react"
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Home, Settings, User } from 'lucide-react'

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: Home },
    { label: "Profile", href: "#", icon: User },
    { label: "Settings", href: "#", icon: Settings },
  ]

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="h-6 w-6 bg-primary rounded" />
            <span className="font-semibold">Acme Inc</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {links.map((link, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild>
                  <a href={link.href} className="flex items-center gap-2">
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <p>Your main content goes here.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`,
      preview: "sidebar-basic",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/sidebar.json",
    manual: `// 1. Install dependencies
npm install @radix-ui/react-slot framer-motion

// 2. Copy the component code to components/ui/sidebar.tsx

// 3. Usage example:
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Home, Settings } from 'lucide-react'

const links = [
  { label: "Home", href: "/", icon: Home },
  { label: "Settings", href: "/settings", icon: Settings },
]

export function MySidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            {links.map((link, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild>
                  <a href={link.href}>
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}`,
  },
}
