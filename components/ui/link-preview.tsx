"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

interface LinkPreviewProps {
  children: React.ReactNode
  url: string
  className?: string
  width?: number
  height?: number
  quality?: number
  layout?: string
}

const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
}: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [previewData, setPreviewData] = React.useState<{
    title?: string
    description?: string
    image?: string
    domain?: string
  } | null>(null)

  const src = `https://api.microlink.io/?url=${url}&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&"viewport.isMobile"=false&viewport.deviceScaleFactor=1&viewport.width=${width * 3}&viewport.height=${height * 3}`

  React.useEffect(() => {
    if (isOpen && !previewData) {
      // Simulate fetching preview data
      const domain = new URL(url).hostname
      setPreviewData({
        title: "Link Preview",
        description: "Preview of the linked content",
        domain: domain,
        image: src,
      })
    }
  }, [isOpen, url, src, previewData])

  return (
    <HoverCardPrimitive.Root openDelay={50} closeDelay={100} onOpenChange={setIsOpen}>
      <HoverCardPrimitive.Trigger asChild>
        <a
          href={url}
          className={cn(
            "font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 hover:after:w-full after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-300 after:block",
            className,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </HoverCardPrimitive.Trigger>

      <AnimatePresence>
        {isOpen && (
          <HoverCardPrimitive.Portal forceMount>
            <HoverCardPrimitive.Content className="z-50 w-80" side="top" align="center" sideOffset={10}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.15 }}
                className="rounded-xl border bg-popover p-4 text-popover-foreground shadow-md card-gradient"
              >
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      {previewData?.title}
                      <ExternalLink className="h-3 w-3" />
                    </h4>
                    <p className="text-sm text-muted-foreground">{previewData?.description}</p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">{previewData?.domain}</span>
                    </div>
                  </div>
                </div>
                {previewData?.image && (
                  <div className="mt-4">
                    <img
                      src={previewData.image || "/placeholder.svg"}
                      alt="Link preview"
                      className="rounded-md border w-full h-32 object-cover"
                    />
                  </div>
                )}
              </motion.div>
            </HoverCardPrimitive.Content>
          </HoverCardPrimitive.Portal>
        )}
      </AnimatePresence>
    </HoverCardPrimitive.Root>
  )
}

export { LinkPreview }
