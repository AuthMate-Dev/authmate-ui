"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CarouselItem {
  id: string
  content: React.ReactNode
  alt?: string
}

export interface CarouselProps {
  items: CarouselItem[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showArrows?: boolean
  showDots?: boolean
  showPlayPause?: boolean
  infinite?: boolean
  itemsPerView?: number
  gap?: number
  variant?: "default" | "card" | "fade" | "slide"
  onSlideChange?: (index: number) => void
  dragEnabled?: boolean
  keyboardEnabled?: boolean
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const fadeVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export function Carousel({
  items = [],
  className,
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showDots = true,
  showPlayPause = false,
  infinite = true,
  itemsPerView = 1,
  gap = 16,
  variant = "default",
  onSlideChange,
  dragEnabled = true,
  keyboardEnabled = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Safety check for items
  const safeItems = items || []
  const totalSlides = Math.ceil(safeItems.length / itemsPerView)

  const nextSlide = useCallback(() => {
    if (infinite || currentIndex < totalSlides - 1) {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }
  }, [currentIndex, totalSlides, infinite])

  const prevSlide = useCallback(() => {
    if (infinite || currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }
  }, [currentIndex, totalSlides, infinite])

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    },
    [currentIndex],
  )

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && autoPlay) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, autoPlay, autoPlayInterval, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardEnabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        prevSlide()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        nextSlide()
      } else if (event.key === " ") {
        event.preventDefault()
        setIsPlaying(!isPlaying)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [keyboardEnabled, prevSlide, nextSlide, isPlaying])

  // Handle slide change callback
  useEffect(() => {
    onSlideChange?.(currentIndex)
  }, [currentIndex, onSlideChange])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!dragEnabled) return

    const threshold = 50
    if (info.offset.x > threshold) {
      prevSlide()
    } else if (info.offset.x < -threshold) {
      nextSlide()
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerView
    return safeItems.slice(startIndex, startIndex + itemsPerView)
  }

  const variants = variant === "fade" ? fadeVariants : slideVariants

  // Early return if no items
  if (safeItems.length === 0) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg flex items-center justify-center h-32",
          variant === "card" && "bg-white dark:bg-gray-800 shadow-lg",
          className,
        )}
      >
        <p className="text-muted-foreground">No items to display</p>
      </div>
    )
  }

  return (
    <div
      ref={carouselRef}
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        variant === "card" && "bg-white dark:bg-gray-800 shadow-lg",
        className,
      )}
      role="region"
      aria-label="Carousel"
      tabIndex={0}
    >
      {/* Main carousel content */}
      <div className="relative h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag={dragEnabled ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className={cn("flex w-full", itemsPerView > 1 && `gap-${gap / 4}`)}
          >
            {getCurrentItems().map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "flex-shrink-0",
                  itemsPerView === 1 ? "w-full" : `w-1/${itemsPerView}`,
                  variant === "card" && "p-4",
                )}
              >
                {item.content}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            disabled={!infinite && currentIndex === 0}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10",
              "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
              "hover:bg-white dark:hover:bg-gray-800",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "rounded-full p-2 shadow-lg transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500",
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            disabled={!infinite && currentIndex === totalSlides - 1}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10",
              "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
              "hover:bg-white dark:hover:bg-gray-800",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "rounded-full p-2 shadow-lg transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500",
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Play/Pause button */}
      {showPlayPause && autoPlay && (
        <button
          onClick={togglePlayPause}
          className={cn(
            "absolute top-2 right-2 z-10",
            "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
            "hover:bg-white dark:hover:bg-gray-800",
            "rounded-full p-2 shadow-lg transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
          )}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      )}

      {/* Dots indicator */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {totalSlides}
      </div>
    </div>
  )
}

// Carousel Item component for easier usage
export function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("w-full h-full flex items-center justify-center", className)}>{children}</div>
}

// Additional exports for compatibility with shadcn/ui carousel API
export function CarouselContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex", className)}>{children}</div>
}

export function CarouselPrevious({ className, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 z-10",
        "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
        "hover:bg-white dark:hover:bg-gray-800",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "rounded-full p-2 shadow-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        className,
      )}
      aria-label="Previous slide"
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  )
}

export function CarouselNext({ className, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 z-10",
        "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
        "hover:bg-white dark:hover:bg-gray-800",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "rounded-full p-2 shadow-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        className,
      )}
      aria-label="Next slide"
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}
