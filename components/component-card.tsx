"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/component-preview"
import { motion } from "framer-motion"

interface ComponentCardProps {
  component: {
    name: string
    description: string
    category: string
    version?: string
  }
}

function generateComponentSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-")
}

export function ComponentCard({ component }: ComponentCardProps) {
  const slug = generateComponentSlug(component.name)

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="group card-hover card-gradient h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg group-hover:text-primary transition-colors text-gradient">
              {component.name}
            </CardTitle>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Badge className="badge-gradient text-xs">{component.category}</Badge>
            </motion.div>
          </div>
          <CardDescription>{component.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} className="preview-gradient rounded-lg p-4 border border-primary/10">
            <ComponentPreview type={slug} />
          </motion.div>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="button-gradient" asChild>
                <Link href={`/components/${slug}`}>View Details</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" variant="outline" className="button-outline-gradient" asChild>
                <Link href={`/registry/${slug}.json`} target="_blank">
                  Registry
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
