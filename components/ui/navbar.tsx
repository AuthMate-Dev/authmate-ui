"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface NavbarProps {
  brand?: React.ReactNode
  items?: NavItem[]
  actions?: React.ReactNode
  sticky?: boolean
  className?: string
}

const Navbar = ({ brand, items = [], actions, sticky = true, className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border",
        sticky && "sticky top-0 z-50",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          {brand && (
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 font-bold text-lg">
              {brand}
            </motion.div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  item.isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {item.isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          {actions && <div className="hidden md:flex items-center space-x-2">{actions}</div>}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      item.isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {actions && <div className="px-4 pt-2 border-t border-border">{actions}</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export { Navbar, type NavItem }
