"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationContainerProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate"
  delay?: number
  duration?: number
  once?: boolean
}

const ScrollAnimationContainer = ({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  once = true,
}: ScrollAnimationContainerProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -10 },
      animate: { opacity: 1, rotate: 0 },
    },
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export { ScrollAnimationContainer }
