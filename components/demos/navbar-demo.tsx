"use client"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function NavbarDemo() {
  const navItems = [
    { label: "Home", href: "#", isActive: true },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ]

  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <Navbar
        brand={
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-primary rounded" />
            <span className="font-bold">Acme Inc</span>
          </div>
        }
        items={navItems}
        actions={
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        }
      />
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to our website</h2>
        <p className="text-muted-foreground">This is a demo of the navbar component.</p>
      </div>
    </div>
  )
}
