"use client"

import { SignupForm } from "@/components/auth/signup-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SignupPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center hero-gradient">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-full max-w-lg auth-card-gradient">
          <CardHeader className="space-y-1 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle className="text-2xl text-gradient">Create account</CardTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardDescription>Enter your information to create your account</CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
