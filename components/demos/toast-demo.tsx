"use client"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast("Hello World!")}>Show Toast</Button>
      <Button onClick={() => toast.success("Success message!")}>Success Toast</Button>
      <Button onClick={() => toast.error("Error message!")}>Error Toast</Button>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast with Action
      </Button>
    </div>
  )
}
