import type { ComponentData } from "./index"

export const scrollAnimationContainerComponent: ComponentData = {
  name: "Scroll Animation Container",
  description: "A container that triggers animations when elements enter the viewport using Framer Motion.",
  category: "Animation",
  version: "1.0.0",
  dependencies: ["framer-motion"],
  props: [
    {
      name: "animation",
      type: "'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'",
      default: "'fadeIn'",
      description: "The animation type to trigger on scroll",
    },
    {
      name: "delay",
      type: "number",
      default: "0",
      description: "Delay before animation starts in seconds",
    },
    {
      name: "duration",
      type: "number",
      default: "0.5",
      description: "Duration of the animation in seconds",
    },
    {
      name: "threshold",
      type: "number",
      default: "0.1",
      description: "Intersection threshold to trigger animation (0-1)",
    },
    {
      name: "triggerOnce",
      type: "boolean",
      default: "true",
      description: "Whether animation should trigger only once",
    },
  ],
  examples: [
    {
      title: "Fade In Animation",
      code: `import { ScrollAnimationContainer } from "@/components/ui/scroll-animation-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ScrollFadeInDemo() {
  return (
    <div className="space-y-8">
      <ScrollAnimationContainer animation="fadeIn">
        <Card>
          <CardHeader>
            <CardTitle>Fade In Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card fades in when it enters the viewport.</p>
          </CardContent>
        </Card>
      </ScrollAnimationContainer>
    </div>
  )
}`,
      preview: "scroll-fade-in",
    },
    {
      title: "Slide Up Animation",
      code: `import { ScrollAnimationContainer } from "@/components/ui/scroll-animation-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ScrollSlideUpDemo() {
  return (
    <div className="space-y-8">
      <ScrollAnimationContainer animation="slideUp" delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle>Slide Up Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card slides up with a delay when scrolled into view.</p>
          </CardContent>
        </Card>
      </ScrollAnimationContainer>
    </div>
  )
}`,
      preview: "scroll-slide-up",
    },
    {
      title: "Multiple Animations",
      code: `import { ScrollAnimationContainer } from "@/components/ui/scroll-animation-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ScrollMultipleDemo() {
  return (
    <div className="space-y-8">
      <ScrollAnimationContainer animation="slideLeft">
        <Card>
          <CardHeader>
            <CardTitle>Slide Left</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Slides in from the left</p>
          </CardContent>
        </Card>
      </ScrollAnimationContainer>
      
      <ScrollAnimationContainer animation="slideRight" delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Slide Right</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Slides in from the right with delay</p>
          </CardContent>
        </Card>
      </ScrollAnimationContainer>
      
      <ScrollAnimationContainer animation="scale" delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle>Scale</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Scales up with more delay</p>
          </CardContent>
        </Card>
      </ScrollAnimationContainer>
    </div>
  )
}`,
      preview: "scroll-multiple",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/scroll-animation-container.json",
    manual: `// 1. Install dependencies
npm install framer-motion

// 2. Copy the component code to components/ui/scroll-animation-container.tsx

// 3. Usage example:
import { ScrollAnimationContainer } from "@/components/ui/scroll-animation-container"
import { Card, CardContent } from "@/components/ui/card"

export function MyScrollAnimation() {
  return (
    <ScrollAnimationContainer animation="fadeIn" delay={0.2}>
      <Card>
        <CardContent className="p-6">
          <p>This content animates on scroll</p>
        </CardContent>
      </Card>
    </ScrollAnimationContainer>
  )
}`,
  },
}
