"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { CodeBlock } from "@/components/code-block"
import { Copy, Check, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import type { ComponentData } from "@/lib/components-data"

interface ComponentDetailProps {
  component: ComponentData
  activeExample?: number
  onExampleChange?: (index: number) => void
}

export function ComponentDetail({ component, activeExample = 0, onExampleChange }: ComponentDetailProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [copiedInstall, setCopiedInstall] = useState(false)

  const copyToClipboard = async (text: string, type: "code" | "install" = "code") => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "code") {
        setCopiedCode(text)
        setTimeout(() => setCopiedCode(null), 2000)
      } else {
        setCopiedInstall(true)
        setTimeout(() => setCopiedInstall(false), 2000)
      }
      toast.success("Copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy to clipboard")
    }
  }

  const handleExampleChange = (value: string) => {
    const index = Number.parseInt(value)
    onExampleChange?.(index)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{component.name}</h1>
              <Badge variant="secondary">v{component.version}</Badge>
              <Badge variant="outline">{component.category}</Badge>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{component.description}</p>
          </div>
        </div>

        {/* Dependencies */}
        {component.dependencies && component.dependencies.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Dependencies</h3>
            <div className="flex flex-wrap gap-2">
              {component.dependencies.map((dep) => (
                <Badge key={dep} variant="outline" className="text-xs">
                  {dep}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Installation</CardTitle>
          <CardDescription>Add this component to your project</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">CLI Installation</h4>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(component.installation.cli, "install")}>
                {copiedInstall ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <CodeBlock code={component.installation.cli} language="bash" />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Manual Installation</h4>
            <CodeBlock code={component.installation.manual} language="typescript" />
          </div>
        </CardContent>
      </Card>

      {/* Props */}
      {component.props && component.props.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Props</CardTitle>
            <CardDescription>Component properties and their types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {component.props.map((prop) => (
                <div key={prop.name} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{prop.name}</code>
                        <Badge variant="outline" className="text-xs">
                          {prop.type}
                        </Badge>
                        {prop.default && (
                          <Badge variant="secondary" className="text-xs">
                            default: {prop.default}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{prop.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Examples</CardTitle>
          <CardDescription>
            {component.examples.length === 1
              ? "Code example for this component"
              : `${component.examples.length} different usage examples`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {component.examples.length > 1 ? (
            <Tabs value={activeExample.toString()} onValueChange={handleExampleChange}>
              <TabsList className="grid w-full grid-cols-3">
                {component.examples.slice(0, 3).map((example, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {example.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {component.examples.map((example, index) => (
                <TabsContent key={index} value={index.toString()} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{example.title}</h4>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(example.code)}>
                      {copiedCode === example.code ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <CodeBlock code={example.code} language="typescript" />
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{component.examples[0].title}</h4>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(component.examples[0].code)}>
                  {copiedCode === component.examples[0].code ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <CodeBlock code={component.examples[0].code} language="typescript" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Registry Link */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Registry</h4>
              <p className="text-sm text-muted-foreground">View the component registry file</p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`/registry/${component.name.toLowerCase().replace(/\s+/g, "-")}.json`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Registry
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
