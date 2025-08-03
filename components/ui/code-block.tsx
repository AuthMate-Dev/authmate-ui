"use client"

import type React from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus, oneLight, tomorrow, materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check, Edit3, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const themes = {
  "vscode-dark": vscDarkPlus,
  "github": oneLight,
  tomorrow: tomorrow,
  monokai: materialDark,
}

interface CodeBlockProps {
  code: string
  language?: string
  theme?: keyof typeof themes
  showLineNumbers?: boolean
  copyable?: boolean
  title?: string
  wrapLines?: boolean
  highlightLines?: number[]
  maxHeight?: string
  editable?: boolean
  className?: string
  onCodeChange?: (code: string) => void
}

export function CodeBlock({
  code,
  language = "javascript",
  theme = "vscode-dark",
  showLineNumbers = false,
  copyable = true,
  title,
  wrapLines = false,
  highlightLines = [],
  maxHeight,
  editable = false,
  className,
  onCodeChange,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editableCode, setEditableCode] = useState(code)
  const [isExpanded, setIsExpanded] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const handleEdit = () => {
    if (isEditing) {
      onCodeChange?.(editableCode)
    }
    setIsEditing(!isEditing)
  }

  const lineProps = (lineNumber: number) => {
    const style: React.CSSProperties = {}
    if (highlightLines.includes(lineNumber)) {
      style.backgroundColor = "rgba(255, 255, 0, 0.1)"
      style.display = "block"
      style.margin = "0 -1rem"
      style.padding = "0 1rem"
    }
    return { style }
  }

  return (
    <div className={cn("relative group", className)}>
      {/* Header */}
      {(title || copyable || editable) && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
          {title && <span className="text-sm font-medium text-muted-foreground">{title}</span>}
          <div className="flex items-center gap-2">
            {maxHeight && (
              <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="h-8 w-8 p-0">
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            )}
            {editable && (
              <Button variant="ghost" size="sm" onClick={handleEdit} className="h-8 w-8 p-0">
                <Edit3 className="h-4 w-4" />
              </Button>
            )}
            {copyable && (
              <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 w-8 p-0">
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Code Content */}
      <div
        className="relative overflow-hidden"
        style={{
          maxHeight: maxHeight && !isExpanded ? maxHeight : undefined,
        }}
      >
        {isEditing ? (
          <textarea
            value={editableCode}
            onChange={(e) => setEditableCode(e.target.value)}
            className="w-full h-full min-h-[200px] p-4 font-mono text-sm bg-background border-0 resize-none focus:outline-none"
            style={{
              backgroundColor: themes[theme].hljs?.background || "#1e1e1e",
              color: themes[theme].hljs?.color || "#d4d4d4",
            }}
          />
        ) : (
          <SyntaxHighlighter
            language={language}
            style={themes[theme]}
            showLineNumbers={showLineNumbers}
            wrapLines={wrapLines}
            lineProps={lineProps}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
            }}
          >
            {code}
          </SyntaxHighlighter>
        )}

        {/* Fade overlay for max height */}
        {maxHeight && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      {/* Copy button overlay */}
      {copyable && !title && (
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      )}
    </div>
  )
}
