import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "#774c2e"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-lg",
        className
      )} 
      {...props}
    >
      {/* Glow border animation */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg animate-pulse",
          "bg-gradient-to-r from-transparent via-[#774c2e] to-transparent"
        )}
        style={{
          animationDuration: speed,
          boxShadow: `0 0 20px ${defaultColor}, 0 0 40px ${defaultColor}, 0 0 60px ${defaultColor}`,
        }}
      />
      
      {/* Animated glow elements */}
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-60"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-60"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      
      {/* Main content with black background */}
      <div className={cn(
        "relative z-10 border text-white text-center text-sm py-2 px-4 rounded-lg",
        "bg-black border-[#774c2e]/40 backdrop-blur-sm",
        "hover:border-[#774c2e]/60 transition-all duration-300"
      )}>
        {children}
      </div>
    </Component>
  )
}