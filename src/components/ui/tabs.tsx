import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted dark:bg-muted/50 text-muted-foreground inline-flex h-11 w-fit items-center justify-center rounded-lg p-1 border border-border dark:border-primary/20",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:bg-primary/20 dark:data-[state=active]:text-accent data-[state=active]:text-primary data-[state=active]:shadow-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:focus-visible:ring-primary/30 text-foreground/70 dark:text-accent/70 inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-semibold whitespace-nowrap transition-all duration-300 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 hover:text-foreground dark:hover:text-accent data-[state=active]:hover:text-primary dark:data-[state=active]:hover:text-accent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
