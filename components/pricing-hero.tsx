"use client"

import { motion } from "framer-motion"
import { Star, Zap, Crown, Package, Code, Palette } from "lucide-react"

const floatingIcons = [
  { icon: Star, delay: 0 },
  { icon: Zap, delay: 0.2 },
  { icon: Crown, delay: 0.4 },
  { icon: Package, delay: 0.6 },
  { icon: Code, delay: 0.8 },
  { icon: Palette, delay: 1.0 },
]

export function PricingHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={`floating-icon-${index}`}
              className="absolute opacity-10 dark:opacity-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                delay: item.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + ((index * 15) % 60)}%`,
                top: `${10 + ((index * 20) % 80)}%`,
              }}
            >
              <Icon className="h-16 w-16 text-blue-600" />
            </motion.div>
          )
        })}
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Simple, transparent
            </span>
            <br />
            <span className="text-slate-900 dark:text-slate-100">pricing</span>
          </h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the perfect plan for your project. Start building beautiful interfaces today with our comprehensive
            component library.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              No setup fees
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              14-day free trial
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
