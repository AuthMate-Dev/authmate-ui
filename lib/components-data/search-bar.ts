"use client"

import type { ComponentData } from "./index"

export const searchBarComponent: ComponentData = {
  name: "Search Bar",
  description: "A powerful search component with keyboard shortcuts, suggestions, and multiple variants",
  category: "Input",
  version: "1.0.0",
  dependencies: [
    "framer-motion",
    "lucide-react",
    "@/components/ui/input",
    "@/components/ui/button",
    "@/components/ui/badge",
    "@/lib/utils",
  ],
  props: [
    {
      name: "placeholder",
      type: "string",
      default: "Search...",
      description: "Placeholder text for the search input",
    },
    {
      name: "value",
      type: "string",
      default: "undefined",
      description: "Controlled value of the search input",
    },
    {
      name: "onChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback fired when the input value changes",
    },
    {
      name: "onSearch",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback fired when search is submitted",
    },
    {
      name: "onSelect",
      type: "(suggestion: SearchSuggestion) => void",
      default: "undefined",
      description: "Callback fired when a suggestion is selected",
    },
    {
      name: "suggestions",
      type: "SearchSuggestion[]",
      default: "[]",
      description: "Array of search suggestions to display",
    },
    {
      name: "showSuggestions",
      type: "boolean",
      default: "true",
      description: "Whether to show the suggestions dropdown",
    },
    {
      name: "showShortcuts",
      type: "boolean",
      default: "true",
      description: "Whether to enable keyboard shortcuts",
    },
    {
      name: "shortcutKey",
      type: "string",
      default: "k",
      description: "Key to use for the focus shortcut (Cmd/Ctrl + key)",
    },
    {
      name: "variant",
      type: "default | command | floating",
      default: "default",
      description: "Visual variant of the search bar",
    },
    {
      name: "size",
      type: "sm | md | lg",
      default: "md",
      description: "Size of the search bar",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the search bar is disabled",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Whether to show loading state",
    },
    {
      name: "maxSuggestions",
      type: "number",
      default: "8",
      description: "Maximum number of suggestions to display",
    },
  ],
  examples: [
    {
      title: "Basic Usage",
      code: `import { SearchBar } from "@/components/ui/search-bar"
import { useState } from "react"

export function BasicSearch() {
  const [value, setValue] = useState("")
  
  return (
    <SearchBar
      placeholder="Search..."
      value={value}
      onChange={setValue}
      onSearch={(query) => console.log("Search:", query)}
    />
  )
}`,
      preview: "search-bar-basic",
    },
    {
      title: "With Suggestions",
      code: `import { SearchBar, SearchSuggestion } from "@/components/ui/search-bar"
import { Home, Users, Settings } from 'lucide-react'

const suggestions: SearchSuggestion[] = [
  {
    id: "1",
    title: "Dashboard",
    description: "View your main dashboard",
    category: "Pages",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "2",
    title: "Users",
    description: "Manage users",
    category: "Admin",
    icon: <Users className="h-4 w-4" />,
  },
]

export function SearchWithSuggestions() {
  return (
    <SearchBar
      placeholder="Search pages..."
      suggestions={suggestions}
      onSelect={(item) => console.log("Selected:", item)}
    />
  )
}`,
      preview: "search-bar-suggestions",
    },
    {
      title: "Command Style",
      code: `import { SearchBar } from "@/components/ui/search-bar"

export function CommandSearch() {
  return (
    <SearchBar
      variant="command"
      size="lg"
      placeholder="Type a command..."
      shortcutKey="j"
    />
  )
}`,
      preview: "search-bar-command",
    },
    {
      title: "Floating Style",
      code: `import { SearchBar } from "@/components/ui/search-bar"

export function FloatingSearch() {
  return (
    <SearchBar
      variant="floating"
      placeholder="Floating search..."
      showShortcuts={false}
    />
  )
}`,
      preview: "search-bar-floating",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/search-bar.json",
    manual: `// 1. Install dependencies
npm install framer-motion lucide-react

// 2. Make sure you have these shadcn components installed:
npx shadcn@latest add input button badge

// 3. Copy the component code to components/ui/search-bar.tsx

// 4. Add global keyboard event listener to your root layout (optional for global shortcuts):
// In your app/layout.tsx or _app.tsx:
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      // Focus your search bar
      document.querySelector('[data-search-bar]')?.focus()
    }
  }
  
  document.addEventListener('keydown', handleKeyDown)
  return () => document.removeEventListener('keydown', handleKeyDown)
}, [])

// 5. Usage example:
import { SearchBar } from "@/components/ui/search-bar"
import { useState } from "react"

export default function MySearchComponent() {
  const [searchValue, setSearchValue] = useState("")
  
  const suggestions = [
    {
      id: "1",
      title: "Dashboard",
      description: "Go to dashboard",
      category: "Navigation"
    },
    {
      id: "2", 
      title: "Settings",
      description: "Open settings",
      category: "Configuration"
    }
  ]

  return (
    <div className="w-full max-w-md mx-auto">
      <SearchBar
        placeholder="Search or press Cmd+K..."
        value={searchValue}
        onChange={setSearchValue}
        suggestions={suggestions}
        onSearch={(query) => {
          console.log("Searching for:", query)
          // Perform your search logic here
        }}
        onSelect={(suggestion) => {
          console.log("Selected:", suggestion)
          // Handle suggestion selection
        }}
        shortcutKey="k" // Cmd+K or Ctrl+K to focus
        variant="default"
        showSuggestions={true}
      />
    </div>
  )
}`,
  },
}
