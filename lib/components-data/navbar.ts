export const navbarComponent = {
  name: "Navbar",
  description: "A responsive navigation bar component with mobile menu support.",
  category: "Navigation",
  version: "1.0.0",
  dependencies: ["@radix-ui/react-navigation-menu", "framer-motion"],
  props: [
    {
      name: "logo",
      type: "React.ReactNode",
      default: "undefined",
      description: "Logo or brand element",
    },
    {
      name: "items",
      type: "NavItem[]",
      default: "[]",
      description: "Navigation items",
    },
    {
      name: "actions",
      type: "React.ReactNode",
      default: "undefined",
      description: "Action buttons (login, signup, etc.)",
    },
  ],
  examples: [
    {
      title: "Basic Navbar",
      code: `import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function NavbarDemo() {
  return (
    <Navbar
      logo={<div className="font-bold text-xl">Brand</div>}
      items={navItems}
      actions={
        <div className="flex gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      }
    />
  )
}`,
      preview: "navbar-basic",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/navbar.json",
    manual: `// 1. Install dependencies
npm install @radix-ui/react-navigation-menu framer-motion

// 2. Copy the component code to components/ui/navbar.tsx

// 3. Usage example:
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
]

export function MyNavbar() {
  return (
    <Navbar
      logo={<span>My Brand</span>}
      items={items}
      actions={<Button>Get Started</Button>}
    />
  )
}`,
  },
}
