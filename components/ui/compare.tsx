"use client"

import React, { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { GripVertical, GripHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface CompareProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  direction?: "horizontal" | "vertical"
  initialPosition?: number
  showLabels?: boolean
  showHandle?: boolean
  onPositionChange?: (position: number) => void
  className?: string
  height?: string | number
  disabled?: boolean
}

export function Compare({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  direction = "horizontal",
  initialPosition = 50,
  showLabels = true,
  showHandle = true,
  onPositionChange,
  className,
  height = "400px",
  disabled = false,
}: CompareProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current || disabled) return

      const rect = containerRef.current.getBoundingClientRect()
      let newPosition: number

      if (direction === "horizontal") {
        newPosition = ((clientX - rect.left) / rect.width) * 100
      } else {
        newPosition = ((clientY - rect.top) / rect.height) * 100
      }

      newPosition = Math.max(0, Math.min(100, newPosition))
      setPosition(newPosition)
      onPositionChange?.(newPosition)
    },
    [direction, disabled, onPositionChange],
  )

  const handleMouseDown = useCallback(() => {
    if (disabled) return
    setIsDragging(true)
  }, [disabled])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      updatePosition(e.clientX, e.clientY)
    },
    [isDragging, updatePosition],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return
      updatePosition(e.clientX, e.clientY)
    },
    [disabled, updatePosition],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const touch = e.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    },
    [isDragging, updatePosition],
  )

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleMouseUp)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  const clipPath = direction === "horizontal" ? `inset(0 ${100 - position}% 0 0)` : `inset(0 0 ${100 - position}% 0)`

  const sliderStyle = direction === "horizontal" ? { left: `${position}%` } : { top: `${position}%` }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-lg cursor-pointer select-none",
        disabled && "cursor-not-allowed",
        className,
      )}
      style={{ height }}
      onClick={handleClick}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage || "/placeholder.svg"}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {showLabels && (
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {beforeLabel}
          </div>
        )}
      </div>

      {/* After Image */}
      <div className="absolute inset-0" style={{ clipPath }}>
        <img
          src={afterImage || "/placeholder.svg"}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {showLabels && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {afterLabel}
          </div>
        )}
      </div>

      {/* Slider */}
      {showHandle && (
        <motion.div
          className={cn(
            "absolute bg-white shadow-lg rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10",
            direction === "horizontal"
              ? "top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12"
              : "left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12",
            disabled && "cursor-not-allowed",
          )}
          style={sliderStyle}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          whileHover={{ scale: disabled ? 1 : 1.1 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
        >
          {direction === "horizontal" ? (
            <GripVertical className="w-5 h-5 text-gray-600" />
          ) : (
            <GripHorizontal className="w-5 h-5 text-gray-600" />
          )}
        </motion.div>
      )}

      {/* Slider Line */}
      <div
        className={cn(
          "absolute bg-white shadow-sm z-10",
          direction === "horizontal"
            ? "top-0 bottom-0 w-0.5 -translate-x-1/2"
            : "left-0 right-0 h-0.5 -translate-y-1/2",
        )}
        style={sliderStyle}
      />
    </div>
  )
}
