import type { ComponentData } from "./index"

export const pricingComponent: ComponentData = {
  name: "Pricing",
  description: "A flexible pricing component with multiple plans, billing toggles, and feature comparisons.",
  category: "Marketing",
  version: "1.0.0",
  dependencies: ["framer-motion", "lucide-react"],
  props: [
    {
      name: "plans",
      type: "PricingPlan[]",
      default: "defaultPlans",
      description: "Array of pricing plans to display",
    },
    {
      name: "defaultCycle",
      type: "'monthly' | 'yearly'",
      default: "'monthly'",
      description: "Default billing cycle",
    },
    {
      name: "showToggle",
      type: "boolean",
      default: "true",
      description: "Whether to show the billing cycle toggle",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes",
    },
  ],
  examples: [
    {
      title: "Basic Pricing",
      code: `import { Pricing } from "@/components/ui/pricing"

export function PricingDemo() {
  return <Pricing />
}`,
      preview: "basic",
    },
    {
      title: "Yearly Billing Default",
      code: `import { Pricing } from "@/components/ui/pricing"

export function PricingYearlyDemo() {
  return <Pricing defaultCycle="yearly" />
}`,
      preview: "yearly",
    },
    {
      title: "Custom Plans",
      code: `import { Pricing } from "@/components/ui/pricing"

const customPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small projects",
    monthlyPrice: 9,
    yearlyPrice: 7,
    features: ["10 components", "Email support"],
    buttonText: "Get Started",
  },
  {
    id: "pro",
    name: "Professional",
    description: "For growing businesses",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: ["50+ components", "Priority support", "Custom themes"],
    popular: true,
    buttonText: "Start Trial",
  },
]

export function CustomPricingDemo() {
  return <Pricing plans={customPlans} />
}`,
      preview: "custom",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/pricing.json",
    manual: `// Install dependencies
npm install framer-motion lucide-react

// Copy the component code to components/ui/pricing.tsx

// Usage example:
import { Pricing } from "@/components/ui/pricing"

export function MyPricing() {
  return (
    <Pricing 
      defaultCycle="monthly"
      showToggle={true}
    />
  )
}`,
  },
}
