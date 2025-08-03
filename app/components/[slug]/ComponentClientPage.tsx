"use client"
import { useState } from "react"
import { notFound } from "next/navigation"
import { ComponentDetail } from "@/components/component-detail"
import { ComponentPreview } from "@/components/component-preview"
import { ComponentPreviewDetailed } from "@/components/component-preview-detailed"
import { ComponentsSidebar } from "@/components/components-sidebar"
import { getComponent } from "@/lib/components-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SidebarProvider } from "@/components/ui/sidebar"

interface ComponentClientPageProps {
  slug: string
}

export function ComponentClientPage({ slug }: ComponentClientPageProps) {
  const component = getComponent(slug)
  const [activeExample, setActiveExample] = useState(0)

  if (!component) {
    notFound()
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 border-r bg-muted/10">
            <div className="sticky top-0 h-screen overflow-y-auto">
              <ComponentsSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full">
            <div className="container py-6 max-w-7xl">
              {/* Back Button */}
              <div className="mb-6">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/components">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Components
                  </Link>
                </Button>
              </div>

              <div className="p-6">
                {/* Component Details */}
                <div>
                  <ComponentDetail
                    component={component}
                    activeExample={activeExample}
                    onExampleChange={setActiveExample}
                  />
                  <ComponentPreviewDetailed
                    component={component}
                    activeExample={activeExample}
                    onExampleChange={setActiveExample}
                  />
                  {/* <ComponentPreview
                    type = {slug}
                  /> */}

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
