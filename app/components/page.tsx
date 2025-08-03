"use client"

import { ComponentsSidebar } from "@/components/components-sidebar"
import { ComponentsGrid } from "@/components/components-grid"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { motion } from "framer-motion"

export default function ComponentsPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <ComponentsSidebar />
        <SidebarInset className="flex-1">
          <div className="container py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Component Library
                </h1>
                <p className="text-lg text-muted-foreground">
                  Browse our collection of beautiful, reusable components built with React and Tailwind CSS.
                </p>
              </div>
              <ComponentsGrid />
            </motion.div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
