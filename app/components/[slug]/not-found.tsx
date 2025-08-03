import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search } from "lucide-react"

export default function ComponentNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Component Not Found</CardTitle>
            <CardDescription>The component you're looking for doesn't exist or may have been moved.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/components">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Components
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/components">
                  <Search className="h-4 w-4 mr-2" />
                  Browse All Components
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
