"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for hobby projects and testing",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Star,
    features: ["5 components", "Basic documentation", "Community support", "MIT license"],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for professional projects",
    monthlyPrice: 19,
    yearlyPrice: 190,
    icon: Zap,
    features: [
      "50+ components",
      "Advanced documentation",
      "Priority support",
      "Commercial license",
      "Figma design system",
      "Custom themes",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large teams and organizations",
    monthlyPrice: 99,
    yearlyPrice: 990,
    icon: Crown,
    features: [
      "Everything in Pro",
      "Unlimited components",
      "24/7 dedicated support",
      "Custom component requests",
      "White-label solutions",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Billing Toggle */}
        <motion.div
          className="mb-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={`text-sm font-medium ${!isYearly ? "text-slate-900 dark:text-slate-100" : "text-slate-500 dark:text-slate-400"}`}
          >
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
          <span
            className={`text-sm font-medium ${isYearly ? "text-slate-900 dark:text-slate-100" : "text-slate-500 dark:text-slate-400"}`}
          >
            Yearly
          </span>
          {isYearly && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              Save 17%
            </Badge>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice

            return (
              <motion.div
                key={plan.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full transition-all duration-300 hover:shadow-xl ${plan.popular ? "ring-2 ring-blue-600 shadow-xl scale-105" : ""}`}
                >
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">${price}</span>
                      <span className="text-slate-600 dark:text-slate-400">/{isYearly ? "year" : "month"}</span>
                      {isYearly && plan.monthlyPrice > 0 && (
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          <span className="line-through">${plan.monthlyPrice}/month</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={`${plan.id}-feature-${featureIndex}`} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </CardContent>

                  <CardFooter className="pt-8">
                    <Button variant={plan.buttonVariant} className="w-full" size="lg">
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
