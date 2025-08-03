"use client"

import { ComponentCard } from "@/components/component-card"
import { motion, AnimatePresence } from "framer-motion"
import type { ComponentData } from "@/lib/components-data"

interface ComponentGridProps {
  components: ComponentData[]
}

export function ComponentGrid({ components }: ComponentGridProps) {
  if (components.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
        <div className="text-muted-foreground">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium mb-2">No components found</h3>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {components.map((component, index) => (
          <motion.div
            key={component.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              layout: { duration: 0.3 },
            }}
          >
            <ComponentCard component={component} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
