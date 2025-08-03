"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"

interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  isActive?: boolean
}

interface SidebarItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  isActive?: boolean
  badge?: string | number
}

interface ResponsiveLayoutProps {
  children: React.ReactNode
  // Navbar props
  brand?: React.ReactNode
  navItems?: NavItem[]
  navActions?: React.ReactNode
  // Sidebar props
  sidebarItems?: SidebarItem[]
  sidebarHeader?: React.ReactNode
  sidebarFooter?: React.ReactNode
  // Layout props
  sidebarWidth?: string
  collapsible?: boolean
  defaultCollapsed?: boolean
  className?: string
}

const ResponsiveLayout = ({
  children,
  brand,
  navItems = [],
  navActions,
  sidebarItems = [],
  sidebarHeader,
  sidebarFooter,
  sidebarWidth = "16rem",
  collapsible = true,
  defaultCollapsed = false,
  className,
}: ResponsiveLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(!defaultCollapsed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setIsSidebarOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const sidebarVariants = {
    open: {
      x: 0,
      width: isMobile ? "280px" : sidebarWidth,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: isMobile ? "-100%" : "0",
      width: isMobile ? "280px" : "4rem",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  }

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    } else {
      setIsSidebarOpen(!isSidebarOpen)
    }
  }

  return (
    <div className={cn("flex h-screen overflow-hidden bg-background", className)}>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isMobile ? (isMobileMenuOpen ? "open" : "closed") : isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-card border-r border-border flex flex-col md:relative md:z-auto",
          isMobile && !isMobileMenuOpen && "pointer-events-none",
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {sidebarHeader || (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              {(isSidebarOpen || isMobile) && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-semibold text-lg">
                  App Name
                </motion.span>
              )}
            </div>
          )}

          {/* Desktop Collapse Button */}
          {!isMobile && collapsible && (
            <Button variant="ghost" size="sm" onClick={toggleSidebar} className="h-6 w-6 p-0">
              {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          )}

          {/* Mobile Close Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-6 w-6 p-0 md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto p-2">
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  item.isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                  !isSidebarOpen && !isMobile && "justify-center",
                )}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
                {item.icon && <item.icon className="h-5 w-5 flex-shrink-0" />}
                {(isSidebarOpen || isMobile) && (
                  <>
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        {sidebarFooter && <div className="p-4 border-t border-border">{sidebarFooter}</div>}
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex h-16 items-center justify-between px-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            {/* Desktop Sidebar Toggle */}
            {!isMobile && collapsible && (
              <Button variant="ghost" size="sm" onClick={toggleSidebar} className="hidden md:flex">
                <Menu className="h-5 w-5" />
              </Button>
            )}

            {/* Brand */}
            {brand && <div className="flex items-center">{brand}</div>}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    item.isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <div className="flex items-center gap-2">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.label}
                  </div>
                  {item.isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Nav Actions */}
          {navActions && <div className="flex items-center space-x-2">{navActions}</div>}
        </motion.header>

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 overflow-auto p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}

export { ResponsiveLayout, type ResponsiveLayoutProps, type NavItem, type SidebarItem }
