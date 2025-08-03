"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Navbar } from "@/components/ui/navbar"
import { Package, Github } from "lucide-react"

const navItems = [
  { label: "Home", href: "/", isActive: false },
  { label: "Components", href: "/components", isActive: false },
  { label: "Pricing", href: "/pricing", isActive: false },
  { label: "Installation", href: "/installation", isActive: false },
]

export function Navigation() {
  const pathname = usePathname()

  const itemsWithActiveState = navItems.map((item) => ({
    ...item,
    isActive: pathname === item.href || (item.href === "/components" && pathname.startsWith("/components")),
  }))

  const brand = (
    <Link href="/" className="flex items-center gap-2">
      <Package className="h-6 w-6 text-blue-600" />
      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AuthMate UI
      </span>
    </Link>
  )

  const actions = (
    <>
      <Button variant="ghost" size="sm" asChild>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-2" />
          GitHub
        </Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <Link href="/login">Sign In</Link>
      </Button>
      <Button
        size="sm"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        asChild
      >
        <Link href="/signup">Get Started</Link>
      </Button>
      <ModeToggle />
    </>
  )

  return (
    <Navbar
      brand={brand}
      items={itemsWithActiveState}
      actions={actions}
      sticky={true}
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    />
  )
}
