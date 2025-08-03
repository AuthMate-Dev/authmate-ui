export const toastComponent = {
  name: "Toast",
  description: "A notification component that appears temporarily to provide feedback.",
  category: "Feedback",
  version: "1.0.0",
  dependencies: ["@radix-ui/react-toast", "framer-motion"],
  props: [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "The toast title",
    },
    {
      name: "description",
      type: "string",
      default: "undefined",
      description: "The toast description",
    },
    {
      name: "variant",
      type: "'default' | 'destructive' | 'success'",
      default: "'default'",
      description: "The visual style variant",
    },
    {
      name: "duration",
      type: "number",
      default: "5000",
      description: "Duration in milliseconds",
    },
  ],
  examples: [
    {
      title: "Toast Variants",
      code: `"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="space-x-2">
      <Button
        onClick={() => {
          toast({
            title: "Success!",
            description: "Your action was completed successfully.",
            variant: "success",
          })
        }}
      >
        Success Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Error!",
            description: "Something went wrong.",
            variant: "destructive",
          })
        }}
      >
        Error Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Info",
            description: "Here's some information for you.",
          })
        }}
      >
        Default Toast
      </Button>
    </div>
  )
}`,
      preview: "toast-variants",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/toast.json",
    manual: `// 1. Install dependencies
npm install @radix-ui/react-toast framer-motion

// 2. Copy the component code to components/ui/toast.tsx

// 3. Usage example:
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export function MyToast() {
  const { toast } = useToast()
  
  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Operation completed successfully",
        })
      }}
    >
      Show Toast
    </Button>
  )
}`,
  },
}
