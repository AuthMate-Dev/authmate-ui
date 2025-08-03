"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { Copy, Check, Download, Palette, Layout, Shield } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"

export default function InstallationPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = async (text: string, commandId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCommand(commandId)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const installCommand = "npm create next-app@latest my-app --typescript --tailwind --eslint"
  const shadcnCommand = "npx shadcn@latest init"
  const componentCommand = "npx shadcn@latest add https://ui.authmate.xyz/registry/button.json"

  return (
    <div className="container py-8 max-w-4xl">
      {/* Header */}
      <AnimatedSection className="text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-4 text-gradient">Installation Guide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with AuthMate UI components in your Next.js project
          </p>
        </motion.div>
      </AnimatedSection>

      <div className="space-y-8">
        {/* Quick Start */}
        <AnimatedCard>
          <Card className="card-gradient">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                <CardTitle>Quick Start</CardTitle>
              </div>
              <CardDescription>Get up and running with AuthMate UI in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Create a new Next.js project</h4>
                  <div className="flex items-center gap-2">
                    <div className="code-block-gradient rounded-lg p-3 font-mono text-sm flex-1">{installCommand}</div>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(installCommand, "install")}>
                      {copiedCommand === "install" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Initialize shadcn/ui</h4>
                  <div className="flex items-center gap-2">
                    <div className="code-block-gradient rounded-lg p-3 font-mono text-sm flex-1">{shadcnCommand}</div>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(shadcnCommand, "shadcn")}>
                      {copiedCommand === "shadcn" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Add your first component</h4>
                  <div className="flex items-center gap-2">
                    <div className="code-block-gradient rounded-lg p-3 font-mono text-sm flex-1">
                      {componentCommand}
                    </div>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(componentCommand, "component")}>
                      {copiedCommand === "component" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Tip:</strong> Make sure you have Node.js 18+ installed before starting.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Manual Installation */}
        <AnimatedCard delay={0.1}>
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Manual Installation</CardTitle>
              <CardDescription>Step-by-step setup for existing projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Install Dependencies</h4>
                  <CodeBlock
                    language="bash"
                    code={`# Install required dependencies
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
npm install lucide-react @radix-ui/react-slot
npm install framer-motion sonner`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Update Tailwind Config</h4>
                  <CodeBlock
                    language="typescript"
                    code={`// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Add CSS Variables</h4>
                  <CodeBlock
                    language="css"
                    code={`/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* AuthMate UI Custom Styles */
@layer components {
  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
  }
  
  .card-gradient {
    @apply bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50;
  }
  
  .button-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700;
  }
  
  .button-outline-gradient {
    @apply border-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950;
  }
}`}
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Add Utils Function</h4>
                  <CodeBlock
                    language="typescript"
                    code={`// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Component Categories */}
        <AnimatedCard delay={0.2}>
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Component Categories</CardTitle>
              <CardDescription>Explore our organized component library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Authentication</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Login Form</span>
                      <Badge variant="outline" className="text-xs">
                        Ready
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Sign Up Form</span>
                      <Badge variant="outline" className="text-xs">
                        Ready
                      </Badge>
                    </div>
                    <CodeBlock
                      language="bash"
                      code="npx shadcn@latest add https://ui.authmate.xyz/registry/login-form.json"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Layout className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold">Layout</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Sidebar</span>
                      <Badge variant="outline" className="text-xs">
                        Ready
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Navbar</span>
                      <Badge variant="outline" className="text-xs">
                        Ready
                      </Badge>
                    </div>
                    <CodeBlock
                      language="bash"
                      code="npx shadcn@latest add https://ui.authmate.xyz/registry/sidebar.json"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold">UI Components</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Button</span>
                      <Badge variant="outline" className="text-xs">
                        Ready
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Card</span>
                      <Badge variant="outline" className="text-xs">
                        Ready
                      </Badge>
                    </div>
                    <CodeBlock
                      language="bash"
                      code="npx shadcn@latest add https://ui.authmate.xyz/registry/button.json"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Usage Examples */}
        <AnimatedCard delay={0.3}>
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Usage Examples</CardTitle>
              <CardDescription>Common patterns and implementations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Authentication Page</h4>
                <CodeBlock
                  language="typescript"
                  code={`// app/login/page.tsx
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const handleLogin = async (data: { email: string; password: string }) => {
    // Your authentication logic here
    console.log("Login attempt:", data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={handleLogin} />
    </div>
  )
}`}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">Dashboard Layout</h4>
                <CodeBlock
                  language="typescript"
                  code={`// app/dashboard/layout.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { Navbar } from "@/components/ui/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}`}
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Next Steps */}
        <AnimatedCard delay={0.4}>
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>Continue building with AuthMate UI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="justify-start h-auto p-4 bg-transparent" variant="outline" asChild>
                  <a href="/components" className="block">
                    <div className="text-left">
                      <div className="font-semibold">Browse Components</div>
                      <div className="text-sm text-muted-foreground">Explore all available components</div>
                    </div>
                  </a>
                </Button>
                <Button className="justify-start h-auto p-4 bg-transparent" variant="outline" asChild>
                  <a href="https://github.com" target="_blank" className="block" rel="noreferrer">
                    <div className="text-left">
                      <div className="font-semibold">View on GitHub</div>
                      <div className="text-sm text-muted-foreground">Star the repository and contribute</div>
                    </div>
                  </a>
                </Button>
                <Button className="justify-start h-auto p-4 bg-transparent" variant="outline" asChild>
                  <a href="https://discord.gg/authmate" target="_blank" className="block" rel="noreferrer">
                    <div className="text-left">
                      <div className="font-semibold">Join Community</div>
                      <div className="text-sm text-muted-foreground">Get help and share feedback</div>
                    </div>
                  </a>
                </Button>
                <Button className="justify-start h-auto p-4 bg-transparent" variant="outline" asChild>
                  <a href="/docs" className="block">
                    <div className="text-left">
                      <div className="font-semibold">Read Documentation</div>
                      <div className="text-sm text-muted-foreground">Detailed guides and API reference</div>
                    </div>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  )
}
