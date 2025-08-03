"use client"

import type { ComponentData } from "./index"

export const signupFormComponent: ComponentData = {
  name: "Sign Up Form",
  description: "A comprehensive registration form with validation, social login options, and loading states.",
  category: "Authentication",
  version: "1.0.0",
  dependencies: [
    "lucide-react",
    "@/components/ui/button",
    "@/components/ui/input",
    "@/components/ui/checkbox",
    "@/components/ui/label",
    "@/components/ui/separator",
    "@/components/ui/card",
  ],
  props: [
    {
      name: "onSubmit",
      type: "(data: { firstName: string; lastName: string; email: string; password: string; agreeToTerms: boolean }) => void | Promise<void>",
      default: "undefined",
      description: "Callback function called when the form is submitted with valid data.",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Whether the form is in a loading state (disables inputs and shows spinner).",
    },
    {
      name: "showSocial",
      type: "boolean",
      default: "true",
      description: "Whether to display social login buttons (GitHub and Google).",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes to apply to the form container.",
    },
  ],
  examples: [
    {
      title: "Basic Sign Up Form",
      code: `import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  const handleSignup = async (data: {
    firstName: string
    lastName: string
    email: string
    password: string
    agreeToTerms: boolean
  }) => {
    console.log("Registration data:", data)
    // Add your registration logic here
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <SignupForm onSubmit={handleSignup} />
    </div>
  )
}`,
      preview: "signup-form-basic",
    },
    {
      title: "With Loading State",
      code: `import { SignupForm } from "@/components/auth/signup-form"
import { useState } from "react"

export default function SignupPage() {
  const [loading, setLoading] = useState(false)

  const handleSignup = async (data: any) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Registration successful:", data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <SignupForm onSubmit={handleSignup} loading={loading} />
    </div>
  )
}`,
      preview: "signup-form-loading",
    },
    {
      title: "Without Social Login",
      code: `import { SignupForm } from "@/components/auth/signup-form"

export default function SimpleSignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <SignupForm
        onSubmit={async (data) => console.log(data)}
        showSocial={false}
      />
    </div>
  )
}`,
      preview: "signup-form-no-social",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/signup-form.json",
    manual: `// 1. Install dependencies
npm install lucide-react

// 2. Install required shadcn components
npx shadcn@latest add button input checkbox label separator card

// 3. Copy the component code to components/auth/signup-form.tsx

// 4. Usage example:
import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignupForm
        onSubmit={async (data) => {
          // Your registration logic here
          console.log("Signup:", data)
        }}
        loading={false}
        showSocial={true}
      />
    </div>
  )
}`,
  },
}
