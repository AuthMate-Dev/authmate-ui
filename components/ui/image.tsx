"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hoverEffect?: "zoom" | "focus" | "lift" | "none"
  aspectRatio?: "square" | "video" | "portrait" | "auto"
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, hoverEffect = "focus", aspectRatio = "auto", alt, ...props }, ref) => {
    const aspectRatioClasses = {
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
      auto: "",
    }

    const hoverVariants = {
      zoom: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      },
      focus: {
        scale: 1.02,
        filter: "brightness(1.1) contrast(1.1)",
        transition: { duration: 0.3, ease: "easeOut" },
      },
      lift: {
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
      },
      none: {},
    }

    return (
      <motion.div
        className={cn("overflow-hidden rounded-lg", aspectRatioClasses[aspectRatio], className)}
        whileHover={hoverEffect !== "none" ? hoverVariants[hoverEffect] : undefined}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img ref={ref} alt={alt} className="h-full w-full object-cover" {...props} />
      </motion.div>
    )
  },
)
Image.displayName = "Image"

export { Image, type ImageProps }
