export const linkPreviewComponent = {
  name: "Link Preview",
  description: "A component that shows a preview of a link on hover with smooth animations.",
  category: "Interaction",
  version: "1.0.0",
  dependencies: ["framer-motion", "@radix-ui/react-hover-card"],
  props: [
    {
      name: "url",
      type: "string",
      default: "undefined",
      description: "The URL to preview",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "The trigger element",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes",
    },
  ],
  examples: [
    {
      title: "Link with Preview",
      code: `import { LinkPreview } from "@/components/ui/link-preview"

export function LinkPreviewDemo() {
  return (
    <div className="p-8">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Visit{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        for amazing utility-first CSS framework and{" "}
        <LinkPreview url="https://framer.com" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        for beautiful animations.
      </p>
    </div>
  )
}`,
      preview: "basic",
    },
  ],
  installation: {
    cli: "npx shadcn@latest add https://ui.authmate.xyz/registry/link-preview.json",
    manual: `// Copy the link-preview component from the registry`,
  },
}

