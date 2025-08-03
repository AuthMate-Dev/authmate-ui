"use client"

import type * as React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Search, X, Command, CornerDownLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export interface SearchSuggestion {
  id: string
  title: string
  description?: string
  category?: string
  url?: string
  icon?: React.ReactNode
}

export interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  onSelect?: (suggestion: SearchSuggestion) => void
  suggestions?: SearchSuggestion[]
  showSuggestions?: boolean
  showShortcuts?: boolean
  shortcutKey?: string
  className?: string
  variant?: "default" | "command" | "floating"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  loading?: boolean
  maxSuggestions?: number
}

export function SearchBar({
  placeholder = "Search...",
  value: controlledValue,
  onChange,
  onSearch,
  onSelect,
  suggestions = [],
  showSuggestions = true,
  showShortcuts = true,
  shortcutKey = "k",
  className,
  variant = "default",
  size = "md",
  disabled = false,
  loading = false,
  maxSuggestions = 8,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [showKeyboardHints, setShowKeyboardHints] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionRefs = useRef<(HTMLElement | null)[]>([])

  const value = controlledValue !== undefined ? controlledValue : internalValue
  const filteredSuggestions = suggestions.slice(0, maxSuggestions)

  // Handle value changes
  const handleValueChange = useCallback(
    (newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
      setSelectedIndex(-1)
      setIsOpen(newValue.length > 0 && showSuggestions)
    },
    [controlledValue, onChange, showSuggestions],
  )

  // Handle search submission
  const handleSearch = useCallback(
    (searchValue?: string) => {
      const finalValue = searchValue || value
      onSearch?.(finalValue)
      setIsOpen(false)
      setSelectedIndex(-1)
    },
    [value, onSearch],
  )

  // Handle suggestion selection
  const handleSelect = useCallback(
    (suggestion: SearchSuggestion) => {
      onSelect?.(suggestion)
      handleValueChange(suggestion.title)
      setIsOpen(false)
      setSelectedIndex(-1)
      inputRef.current?.blur()
    },
    [onSelect, handleValueChange],
  )

  // Clear search
  const handleClear = useCallback(() => {
    handleValueChange("")
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }, [handleValueChange])

  // Focus search input
  const focusSearch = useCallback(() => {
    inputRef.current?.focus()
    setIsOpen(value.length > 0 && showSuggestions)
  }, [value, showSuggestions])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          if (!isOpen && value) {
            setIsOpen(true)
          } else {
            setSelectedIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev))
          }
          break

        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
          break

        case "Enter":
          e.preventDefault()
          if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
            handleSelect(filteredSuggestions[selectedIndex])
          } else {
            handleSearch()
          }
          break

        case "Escape":
          e.preventDefault()
          if (isOpen) {
            setIsOpen(false)
            setSelectedIndex(-1)
          } else {
            handleClear()
          }
          break

        case "Tab":
          if (isOpen) {
            setIsOpen(false)
            setSelectedIndex(-1)
          }
          break
      }
    },
    [isOpen, selectedIndex, filteredSuggestions, handleSelect, handleSearch, handleClear, value],
  )

  // Global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === shortcutKey.toLowerCase()) {
        e.preventDefault()
        focusSearch()
        return
      }

      // Cmd/Ctrl + / to toggle keyboard hints
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault()
        setShowKeyboardHints(!showKeyboardHints)
        return
      }
    }

    if (showShortcuts) {
      document.addEventListener("keydown", handleGlobalKeyDown)
      return () => document.removeEventListener("keydown", handleGlobalKeyDown)
    }
  }, [shortcutKey, showShortcuts, focusSearch, showKeyboardHints])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Scroll selected suggestion into view
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      })
    }
  }, [selectedIndex])

  const sizeClasses = {
    sm: "h-8 text-sm",
    md: "h-10 text-sm",
    lg: "h-12 text-base",
  }

  const variantClasses = {
    default: "border-input bg-background",
    command: "border-2 border-primary/20 bg-background/50 backdrop-blur-sm",
    floating: "border-0 bg-background/80 backdrop-blur-md shadow-lg",
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Keyboard Hints */}
      <AnimatePresence>
        {showKeyboardHints && showShortcuts && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute -top-20 left-0 right-0 z-50 bg-popover border rounded-lg p-3 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Command className="h-3 w-3" />
              <span className="text-xs font-medium">Keyboard Shortcuts</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Focus</span>
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">⌘{shortcutKey.toUpperCase()}</kbd>
              </div>
              <div className="flex justify-between">
                <span>Clear</span>
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Esc</kbd>
              </div>
              <div className="flex justify-between">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">↑↓</kbd>
              </div>
              <div className="flex justify-between">
                <span>Select</span>
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Enter</kbd>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={showShortcuts ? `${placeholder} (⌘${shortcutKey.toUpperCase()} to focus)` : placeholder}
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(value.length > 0 && showSuggestions)}
          disabled={disabled}
          className={cn(
            "pl-10 pr-20",
            sizeClasses[size],
            variantClasses[variant],
            "transition-all duration-200",
            isOpen && "ring-2 ring-primary/20",
          )}
        />

        {/* Action Buttons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {loading && (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
          )}

          {value && !loading && (
            <Button variant="ghost" size="sm" onClick={handleClear} className="h-6 w-6 p-0 hover:bg-muted">
              <X className="h-3 w-3" />
            </Button>
          )}

          {showShortcuts && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowKeyboardHints(!showKeyboardHints)}
              className="h-6 w-6 p-0 hover:bg-muted"
            >
              <Command className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && showSuggestions && filteredSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 z-50 mt-2 bg-popover border rounded-lg shadow-lg max-h-80 overflow-auto"
          >
            <div className="p-2">
              {filteredSuggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  ref={(el) => (suggestionRefs.current[index] = el)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    selectedIndex === index && "bg-accent text-accent-foreground",
                  )}
                  onClick={() => handleSelect(suggestion)}
                >
                  {suggestion.icon && <div className="flex-shrink-0 text-muted-foreground">{suggestion.icon}</div>}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{suggestion.title}</div>
                    {suggestion.description && (
                      <div className="text-sm text-muted-foreground truncate">{suggestion.description}</div>
                    )}
                  </div>
                  {suggestion.category && (
                    <Badge variant="secondary" className="text-xs">
                      {suggestion.category}
                    </Badge>
                  )}
                  {selectedIndex === index && <CornerDownLeft className="h-3 w-3 text-muted-foreground" />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
