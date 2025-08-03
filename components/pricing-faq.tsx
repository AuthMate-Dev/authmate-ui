"use client"

import { motion } from "framer-motion"
import { Plus, Minus, MessageCircle, Mail } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    id: "faq-1",
    question: "What's included in the free plan?",
    answer:
      "The free plan includes 5 essential components, basic documentation, and community support. It's perfect for hobby projects and getting started with our component library.",
  },
  {
    id: "faq-2",
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    id: "faq-3",
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact us within 14 days for a full refund.",
  },
  {
    id: "faq-4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through Stripe.",
  },
  {
    id: "faq-5",
    question: "Is there a setup fee?",
    answer:
      "No, there are no setup fees or hidden costs. You only pay the monthly or yearly subscription fee for your chosen plan.",
  },
  {
    id: "faq-6",
    question: "Can I use the components in commercial projects?",
    answer:
      "Yes! The Pro and Enterprise plans include commercial licenses that allow you to use our components in client projects and commercial applications.",
  },
  {
    id: "faq-7",
    question: "Do you provide technical support?",
    answer:
      "Free users get community support through our Discord. Pro users get priority email support, and Enterprise users get 24/7 dedicated support.",
  },
  {
    id: "faq-8",
    question: "How often do you add new components?",
    answer:
      "We add new components every month. Pro and Enterprise users get early access to new components before they're released to free users.",
  },
]

export function PricingFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans. Can't find what you're looking for?
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id)

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader
                      className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-left text-lg font-semibold">{faq.question}</CardTitle>
                        {isOpen ? (
                          <Minus className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    {isOpen && (
                      <CardContent className="pt-0">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Contact Cards */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="text-center p-6">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Chat with us</CardTitle>
              <CardDescription>Get instant help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                Start a conversation
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Email support</CardTitle>
              <CardDescription>Send us an email and we'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                Send an email
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
