"use client"

import { useState } from "react"
import { SearchBar, type SearchSuggestion } from "@/components/ui/search-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Settings, Home, Search, Command, Zap, Heart, Star } from "lucide-react"

const mockSuggestions: SearchSuggestion[] = [
  {
    id: "1",
    title: "Dashboard",
    description: "View your main dashboard",
    category: "Pages",
    icon: <Home className="h-4 w-4" />,
    url: "/dashboard",
  },
  {
    id: "2",
    title: "User Management",
    description: "Manage users and permissions",
    category: "Admin",
    icon: <Users className="h-4 w-4" />,
    url: "/users",
  },
  {
    id: "3",
    title: "Settings",
    description: "Configure your preferences",
    category: "Config",
    icon: <Settings className="h-4 w-4" />,
    url: "/settings",
  },
  {
    id: "4",
    title: "Documentation",
    description: "Read the docs and guides",
    category: "Help",
    icon: <FileText className="h-4 w-4" />,
    url: "/docs",
  },
  {
    id: "5",
    title: "Search Components",
    description: "Find UI components",
    category: "Components",
    icon: <Search className="h-4 w-4" />,
    url: "/components",
  },
  {
    id: "6",
    title: "Keyboard Shortcuts",
    description: "View all keyboard shortcuts",
    category: "Help",
    icon: <Command className="h-4 w-4" />,
    url: "/shortcuts",
  },
]

export function SearchBarDemo() {
  const [searchValue, setSearchValue] = useState("")
  const [selectedItem, setSelectedItem] = useState<SearchSuggestion | null>(null)
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleSearch = (value: string) => {
    console.log("Searching for:", value)
    setSearchResults([`Results for "${value}"`])
  }

  const handleSelect = (suggestion: SearchSuggestion) => {
    console.log("Selected:", suggestion)
    setSelectedItem(suggestion)
  }

  const filteredSuggestions = mockSuggestions.filter(
    (suggestion) =>
      suggestion.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      suggestion.description?.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Default Search Bar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Default Search Bar
          </CardTitle>
          <CardDescription>Basic search with keyboard shortcuts (⌘K to focus)</CardDescription>
        </CardHeader>
        <CardContent>
          <SearchBar
            placeholder="Search anything..."
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            onSelect={handleSelect}
            suggestions={filteredSuggestions}
          />
        </CardContent>
      </Card>

      {/* Command Style Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Command className="h-5 w-5" />
            Command Style
          </CardTitle>
          <CardDescription>Command palette style with enhanced border</CardDescription>
        </CardHeader>
        <CardContent>
          <SearchBar
            variant="command"
            size="lg"
            placeholder="Type a command or search..."
            suggestions={filteredSuggestions}
            onSelect={handleSelect}
            shortcutKey="j"
          />
        </CardContent>
      </Card>

      {/* Floating Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Floating Style
          </CardTitle>
          <CardDescription>Floating search with backdrop blur effect</CardDescription>
        </CardHeader>
        <CardContent>
          <SearchBar
            variant="floating"
            placeholder="Floating search..."
            suggestions={filteredSuggestions}
            onSelect={handleSelect}
            shortcutKey="f"
          />
        </CardContent>
      </Card>

      {/* Compact Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Compact Size
          </CardTitle>
          <CardDescription>Small search bar for tight spaces</CardDescription>
        </CardHeader>
        <CardContent>
          <SearchBar
            size="sm"
            placeholder="Compact search..."
            suggestions={filteredSuggestions.slice(0, 4)}
            onSelect={handleSelect}
            showShortcuts={false}
          />
        </CardContent>
      </Card>

      {/* Results Display */}
      {selectedItem && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Selected Item
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              {selectedItem.icon}
              <div>
                <div className="font-medium">{selectedItem.title}</div>
                <div className="text-sm text-muted-foreground">{selectedItem.description}</div>
              </div>
              <Badge variant="secondary">{selectedItem.category}</Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Keyboard Shortcuts Info */}
      <Card>
        <CardHeader>
          <CardTitle>Keyboard Shortcuts</CardTitle>
          <CardDescription>Available keyboard shortcuts for the search bar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between items-center">
              <span>Focus search</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd>
            </div>
            <div className="flex justify-between items-center">
              <span>Clear search</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
            </div>
            <div className="flex justify-between items-center">
              <span>Navigate suggestions</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">↑ ↓</kbd>
            </div>
            <div className="flex justify-between items-center">
              <span>Select suggestion</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
            </div>
            <div className="flex justify-between items-center">
              <span>Toggle shortcuts</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘/</kbd>
            </div>
            <div className="flex justify-between items-center">
              <span>Close suggestions</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
