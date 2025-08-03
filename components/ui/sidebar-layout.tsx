"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface SidebarLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  navbar?: React.ReactNode
  className?: string
  sidebarWidth?: string
  collapsible?: boolean
}

const SidebarLayout = ({
  children,
  sidebar,
  navbar,
  className,
  sidebarWidth = "16rem",
  collapsible = true,
}: SidebarLayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: isMobile ? "-100%" : `-${sidebarWidth}`,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  }

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  return (
    <div className={cn("flex h-screen overflow-hidden", className)}>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-background border-r md:relative md:z-auto",
          isMobile ? "w-80" : "",
        )}
        style={{ width: isMobile ? "20rem" : sidebarWidth }}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Close Button */}
          {isMobile && (
            <div className="flex justify-end p-4 md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          {sidebar}
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        {navbar && (
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div className="flex h-14 items-center px-4">
              {collapsible && (
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="mr-4">
                  <Menu className="h-4 w-4" />
                </Button>
              )}
              {navbar}
            </div>
          </motion.header>
        )}

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

export { SidebarLayout }
