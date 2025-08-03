import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Zap, Github, Download, Copy } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AnimatedSection className="hero-gradient container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <Badge className="mb-4 badge-gradient">Built with shadcn/ui</Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-gradient">
            Beautiful components
            <br className="hidden sm:inline" />
            for modern React apps
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            A comprehensive component library built with Tailwind CSS and shadcn/ui. Copy, paste, and customize
            components for your next project.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" className="button-gradient" asChild>
              <Link href="/components">
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="button-outline-gradient" asChild>
              <Link href="/installation">Get Started</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="section-gradient container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl text-gradient-secondary">
            Why choose our components?
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Built with modern tools and best practices for the best developer experience.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <AnimatedCard delay={0.1}>
            <Card className="card-hover feature-card-gradient h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-gradient">Developer First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with TypeScript, fully typed, and designed for the best developer experience.
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <Card className="card-hover feature-card-gradient h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-gradient">Customizable</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Easy to customize with CSS variables and Tailwind CSS. Make it your own.
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.3}>
            <Card className="card-hover feature-card-gradient h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-gradient">Fast Setup</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Install components with a single command using the shadcn CLI.</CardDescription>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Quick Start Section */}
      <AnimatedSection className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl text-gradient-secondary">
            Quick Start
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Get started with our component library in seconds.
          </p>
        </div>
        <div className="mx-auto max-w-[800px] space-y-6">
          <AnimatedCard delay={0.1}>
            <Card className="card-gradient card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  Install via CLI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="code-block-gradient rounded-lg p-4 font-mono text-sm">
                  npx shadcn@latest add https://ui.authmate.xyz/registry/button.json
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <Card className="card-gradient card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <Copy className="h-5 w-5 text-primary" />
                  </div>
                  Or Copy & Paste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse our components, copy the code, and paste it into your project. No installation required.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-gradient container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl text-gradient-secondary">
            Ready to build?
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Start building beautiful interfaces with our component library today.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" className="button-gradient" asChild>
              <Link href="/components">Browse Components</Link>
            </Button>
            <Button variant="outline" size="lg" className="button-outline-gradient" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
