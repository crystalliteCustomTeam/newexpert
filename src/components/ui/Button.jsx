import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const ButtonVariants = cva(
  "w-max rounded-[10px] font-medium xs:text-[14px] sm:text-[15px] text-[16px] h-[45px]  ",
  {
    variants: {
      variant: {
        default:
          "bg-[#f90]  text-primary-foreground shadow  xs:px-5 px-10",
        black:
          "bg-black text-primary-foreground shadow hover:bg-black/90 xs:px-5 px-10",
        icon:
          "bg-black text-primary-foreground shadow hover:bg-black/90 xs:px-3 px-6",
      }
    },
    defaultVariants: {
      variant: "default"
    },
  }
)

const Button = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ButtonVariants({ variant, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, ButtonVariants }
