"use client"

import type { ComponentData } from "./index"

export const loginFormComponent: ComponentData = {
  name: "Login Form",
  description: "A complete login form with email/password fields, social login options, and forgot password link.",
  category: "Authentication",
  version: "1.0.0",
  dependencies: [
    "lucide-react",
    "@/components/ui/button",
    "@/components/ui/input",
    "@/components/ui/label",
    "@/components/ui/separator",
    "@/components/ui/card",
  ],
  props: [
    {
      name: "onSubmit",
      type: "(data: { email: string; password: string }) => void | Promise<void>",
      default: "undefined",
      description: "Callback executed when the form is submitted.",
    },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description: "Show a spinner and disable the form while a request is in flight.",
    },
    {
      name: "showSocial",
      type: "boolean",
      default: "true",
      description: "Whether to display social login buttons (GitHub/Google).",
    },
    {
      name: "className",
      type: "string",
      default: "''",
      description: "Additional CSS classes to apply to the form container.",
    },
  ],
  examples: [
    {
      title: "Basic Login Form",
      code: `import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const handleLogin = async (data: { email: string; password: string }) => {
    console.log("Login attempt:", data)
    // Add your authentication logic here
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={handleLogin} />
    </div>
  )
}`,
      preview: "login-form-basic",
    },
    {
      title: "With Loading State",
      code: `import { LoginForm } from "@/components/auth/login-form"
import { useState } from "react"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  const handleLogin = async (data: { email: string; password: string }) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Login successful:", data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </div>
  )
}`,
      preview: "login-form-loading",
    },
    {
      title: "Without Social Login",
      code: `import { LoginForm } from "@/components/auth/login-form"

export default function SimpleLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm
        onSubmit={async (data) => console.log(data)}
        showSocial={false}
      />
    </div>
  )
}`,
      preview: "login-form-no-social",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/login-form.json",
    manual: `// 1. Install dependencies
npm install lucide-react

// 2. Install required shadcn components
npx shadcn@latest add button input label separator card

// 3. Copy the component code to components/auth/login-form.tsx

// 4. Usage example:
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm
        onSubmit={async (data) => {
          // Your authentication logic here
          console.log("Login:", data)
        }}
        loading={false}
        showSocial={true}
      />
    </div>
  )
}`,
  },
}
