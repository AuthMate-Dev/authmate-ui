"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

interface ComponentSearchProps {
  onSearch: (query: string, category: string) => void
  categories: string[]
  totalComponents: number
  filteredCount: number
}

export function ComponentSearch({ onSearch, categories, totalComponents, filteredCount }: ComponentSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearch(value, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    const newCategory = category === selectedCategory ? "" : category
    setSelectedCategory(newCategory)
    onSearch(searchQuery, newCategory)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    onSearch("", "")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 space-y-4"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {selectedCategory || "All Categories"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleCategoryChange("")}>All Categories</DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem key={category} onClick={() => handleCategoryChange(category)}>
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {(searchQuery || selectedCategory) && (
          <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
            <X className="h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>
            Showing {filteredCount} of {totalComponents} components
          </span>
          {selectedCategory && (
            <Badge variant="secondary" className="text-xs">
              {selectedCategory}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  )
}
