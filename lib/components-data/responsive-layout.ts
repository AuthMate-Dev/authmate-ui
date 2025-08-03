import type { ComponentData } from "./index"

export const responsiveLayoutComponent: ComponentData = {
  name: "Responsive Layout",
  description: "A complete responsive layout with sidebar and navbar that adapts to different screen sizes",
  category: "Layout",
  version: "1.0.0",
  dependencies: ["framer-motion", "lucide-react", "@radix-ui/react-slot", "class-variance-authority"],
  props: [
    {
      name: "sidebarItems",
      type: "SidebarItem[]",
      default: "[]",
      description: "Array of sidebar navigation items",
    },
    {
      name: "navItems",
      type: "NavItem[]",
      default: "[]",
      description: "Array of navbar navigation items",
    },
    {
      name: "navActions",
      type: "ReactNode",
      default: "null",
      description: "Action buttons or elements for the navbar",
    },
    {
      name: "collapsible",
      type: "boolean",
      default: "true",
      description: "Whether the sidebar can be collapsed",
    },
    {
      name: "defaultCollapsed",
      type: "boolean",
      default: "false",
      description: "Initial collapsed state of the sidebar",
    },
    {
      name: "brand",
      type: "ReactNode",
      default: "null",
      description: "Brand logo or text for the navbar",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "null",
      description: "Main content area",
    },
  ],
  examples: [
    {
      title: "Basic Layout",
      code: `import { ResponsiveLayout } from "@/components/ui/responsive-layout"
import { Home, Settings, Users, BarChart } from 'lucide-react'

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: BarChart, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

const navItems = [
  { label: "Overview", href: "/overview" },
  { label: "Reports", href: "/reports" },
  { label: "Help", href: "/help" },
]

export default function App() {
  return (
    <ResponsiveLayout
      sidebarItems={sidebarItems}
      navItems={navItems}
      brand="My App"
      collapsible
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="text-muted-foreground">Your main content goes here.</p>
      </div>
    </ResponsiveLayout>
  )
}`,
      preview: "responsive-layout-basic",
    },
    {
      title: "With Actions",
      code: `import { ResponsiveLayout } from "@/components/ui/responsive-layout"
import { Button } from "@/components/ui/button"
import { Bell, User } from 'lucide-react'

const navActions = (
  <div className="flex items-center gap-2">
    <Button variant="ghost" size="icon">
      <Bell className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="icon">
      <User className="h-4 w-4" />
    </Button>
  </div>
)

export default function AppWithActions() {
  return (
    <ResponsiveLayout
      sidebarItems={sidebarItems}
      navItems={navItems}
      navActions={navActions}
      brand="Dashboard Pro"
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dashboard with Actions</h1>
      </div>
    </ResponsiveLayout>
  )
}`,
      preview: "responsive-layout-actions",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/responsive-layout.json",
    manual: `// 1. Install dependencies
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority

// 2. Copy the component code to components/ui/responsive-layout.tsx

// 3. Usage example:
import { ResponsiveLayout } from "@/components/ui/responsive-layout"
import { Home, Settings } from 'lucide-react'

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function MyLayout() {
  return (
    <ResponsiveLayout
      sidebarItems={sidebarItems}
      brand="My App"
    >
      <div className="p-6">
        <h1>Main Content</h1>
      </div>
    </ResponsiveLayout>
  )
}`,
  },
}
