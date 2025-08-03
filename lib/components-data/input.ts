export const inputComponent = {
  name: "Input",
  description: "A flexible input component with various styles and validation states.",
  category: "Form",
  version: "1.0.0",
  dependencies: ["@radix-ui/react-slot"],
  props: [
    {
      name: "type",
      type: "string",
      default: "'text'",
      description: "The input type (text, email, password, etc.)",
    },
    {
      name: "placeholder",
      type: "string",
      default: "undefined",
      description: "Placeholder text for the input",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the input is disabled",
    },
    {
      name: "error",
      type: "boolean",
      default: "false",
      description: "Whether the input has an error state",
    },
  ],
  examples: [
    {
      title: "Basic Input",
      code: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      <Input placeholder="Disabled input" disabled />
    </div>
  )
}`,
      preview: "basic",
    },
    {
      title: "Input with Label",
      code: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  )
}`,
      preview: "with-label",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/input.json",
    manual: `// Copy the input component from the registry`,
  },
}

