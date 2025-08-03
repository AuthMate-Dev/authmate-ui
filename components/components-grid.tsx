"use client"

import { motion } from "framer-motion"
import { ComponentImageCard } from "@/components/component-image-card"
import { getAllComponents } from "@/lib/components-data"

export function ComponentsGrid() {
  const components = getAllComponents()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component, index) => (
        <motion.div
          key={component.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ComponentImageCard component={component} />
        </motion.div>
      ))}
    </div>
  )
}
