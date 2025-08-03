import type { Metadata } from "next"
import { PricingHero } from "@/components/pricing-hero"
import { PricingSection } from "@/components/pricing-section"
import { PricingFAQ } from "@/components/pricing-faq"

export const metadata: Metadata = {
  title: "Pricing - AuthMate UI",
  description:
    "Simple, transparent pricing for AuthMate UI component library. Choose the plan that works best for your project.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <PricingHero />
      <PricingSection />
      <PricingFAQ />
    </div>
  )
}
