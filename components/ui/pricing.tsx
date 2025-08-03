"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  limitations?: string[]
  popular?: boolean
  buttonText: string
  buttonVariant?: "default" | "outline" | "secondary"
}

export interface PricingProps {
  plans?: PricingPlan[]
  defaultCycle?: "monthly" | "yearly"
  showToggle?: boolean
  className?: string
}

const defaultPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["5 components", "Basic documentation", "Community support", "MIT license"],
    limitations: ["Limited components", "No priority support"],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for professional developers",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "50+ components",
      "Advanced documentation",
      "Priority support",
      "Commercial license",
      "Figma files",
      "Custom themes",
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large teams and organizations",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Unlimited components",
      "Custom components",
      "24/7 support",
      "Team collaboration",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
]

export function Pricing({
  plans = defaultPlans,
  defaultCycle = "monthly",
  showToggle = true,
  className,
}: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(defaultCycle)

  const getPrice = (plan: PricingPlan) => {
    return billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice
  }

  const getSavings = (plan: PricingPlan) => {
    if (plan.monthlyPrice === 0) return 0
    const yearlyTotal = plan.yearlyPrice * 12
    const monthlyTotal = plan.monthlyPrice * 12
    return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100)
  }

  return (
    <div className={className}>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start building beautiful interfaces today. Upgrade or downgrade at any time.
        </p>

        {showToggle && (
          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="billing-toggle" className={billingCycle === "monthly" ? "font-semibold" : ""}>
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <Label htmlFor="billing-toggle" className={billingCycle === "yearly" ? "font-semibold" : ""}>
              Yearly
            </Label>
            {billingCycle === "yearly" && (
              <Badge variant="secondary" className="ml-2">
                Save up to 17%
              </Badge>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Most Popular</Badge>
              </div>
            )}

            <Card className={`h-full ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">${getPrice(plan)}</span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-muted-foreground">/{billingCycle === "yearly" ? "month" : "month"}</span>
                    )}
                  </div>

                  {billingCycle === "yearly" && plan.monthlyPrice > 0 && (
                    <div className="text-sm text-muted-foreground">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                      {getSavings(plan) > 0 && (
                        <Badge variant="outline" className="ml-2">
                          Save {getSavings(plan)}%
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button className="w-full" variant={plan.buttonVariant} size="lg">
                  {plan.buttonText}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={`${plan.id}-feature-${featureIndex}`} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && plan.limitations.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={`${plan.id}-limitation-${limitationIndex}`} className="flex items-center gap-3">
                          <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
