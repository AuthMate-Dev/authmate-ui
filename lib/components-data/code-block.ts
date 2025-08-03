export const codeBlockComponent = {
  name: "Code Block",
  description:
    "A configurable code block component built on top of react-syntax-highlighter with syntax highlighting, copy functionality, and multiple themes.",
  category: "Code",
  version: "1.0.0",
  dependencies: ["react-syntax-highlighter", "@types/react-syntax-highlighter", "lucide-react", "framer-motion"],
  props: [
    {
      name: "code",
      type: "string",
      default: "''",
      description: "The code content to display",
    },
    {
      name: "language",
      type: "string",
      default: "'javascript'",
      description: "Programming language for syntax highlighting",
    },
    {
      name: "theme",
      type: "'vscode-dark' | 'github' | 'monokai' | 'tomorrow'",
      default: "'vscode-dark'",
      description: "Syntax highlighting theme",
    },
    {
      name: "showLineNumbers",
      type: "boolean",
      default: "false",
      description: "Show line numbers",
    },
    {
      name: "copyable",
      type: "boolean",
      default: "true",
      description: "Enable copy to clipboard functionality",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Optional title for the code block",
    },
    {
      name: "wrapLines",
      type: "boolean",
      default: "false",
      description: "Enable word wrapping",
    },
    {
      name: "highlightLines",
      type: "number[]",
      default: "[]",
      description: "Array of line numbers to highlight",
    },
    {
      name: "maxHeight",
      type: "string",
      default: "undefined",
      description: "Maximum height with scroll",
    },
    {
      name: "editable",
      type: "boolean",
      default: "false",
      description: "Enable inline code editing",
    },
  ],
  examples: [
    {
      title: "Basic Usage",
      code: `import { CodeBlock } from '@/components/ui/code-block'

export default function Example() {
  const code = \`function hello() {
  console.log("Hello World!");
}\`;

  return (
    <CodeBlock
      code={code}
      language="javascript"
      copyable={true}
    />
  )
}`,
      preview: "code-block-basic",
    },
    {
      title: "With Line Numbers and Title",
      code: `import { CodeBlock } from '@/components/ui/code-block'

export default function Example() {
  const code = \`import React from 'react'
import { Button } from '@/components/ui/button'

export default function App() {
  return <Button>Click me</Button>
}\`;

  return (
    <CodeBlock
      code={code}
      language="typescript"
      title="App.tsx"
      showLineNumbers={true}
      theme="github"
    />
  )
}`,
      preview: "code-block-with-title",
    },
    {
      title: "Highlighted Lines",
      code: `import { CodeBlock } from '@/components/ui/code-block'

export default function Example() {
  const code = \`const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
]

// This line is highlighted
const activeUsers = users.filter(user => user.active)\`;

  return (
    <CodeBlock
      code={code}
      language="javascript"
      highlightLines={[7]}
      showLineNumbers={true}
    />
  )
}`,
      preview: "code-block-highlighted",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/code-block.json",
    manual: `// 1. Install dependencies
npm install react-syntax-highlighter @types/react-syntax-highlighter lucide-react framer-motion

// 2. Copy the component code to components/ui/code-block.tsx

// 3. Add the following to your tailwind.config.js if not already present:
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    // ... other paths
  ],
  // ... rest of config
}

// 4. Usage example:
import { CodeBlock } from "@/components/ui/code-block"

export default function MyComponent() {
  return (
    <CodeBlock
      code="console.log('Hello World!')"
      language="javascript"
      copyable={true}
      showLineNumbers={true}
    />
  )
}`,
  },
}
