import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border placeholder:text-muted-foreground dark:placeholder:text-accent/50 focus-visible:border-primary dark:focus-visible:border-accent focus-visible:ring-primary/20 dark:focus-visible:ring-accent/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input flex field-sizing-content min-h-20 w-full rounded-lg border bg-background px-4 py-3 text-base shadow-sm transition-[color,box-shadow,border-color] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
