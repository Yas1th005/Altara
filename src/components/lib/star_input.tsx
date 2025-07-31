import { cn } from "@/lib/utils"
import { Mail, SendHorizonal } from "lucide-react"

interface StarBorderInputProps {
  color?: string
  speed?: string
  className?: string
  placeholder?: string
  type?: string
}

export function StarBorderInput({
  className,
  color,
  speed = "6s",
  placeholder = "Your mail address",
  type = "email",
  ...props
}: StarBorderInputProps) {
  const defaultColor = color || "#774c2e"

  return (
    <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
      <div className={cn(
        "relative inline-block p-[1px] overflow-hidden rounded-[10px] w-full",
        className
      )}>
        {/* Glow border animation */}
        <div
          className={cn(
            "absolute inset-0 rounded-[10px] animate-pulse",
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
        
        {/* Main input container with frost glass background */}
        <div className={cn(
          "relative z-10 backdrop-blur-lg bg-transparent has-[input:focus]:ring-muted",
          "grid grid-cols-[1fr_auto] items-center rounded-[10px] border border-white/30 pr-3",
          "shadow-lg shadow-zinc-950/10 has-[input:focus]:ring-2",
          "bg-gradient-to-br from-white/15 via-white/5 to-white/10",
          "border-[#774c2e]/40 hover:border-[#774c2e]/60 transition-all duration-300",
          "before:absolute before:inset-0 before:rounded-[10px] before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/5 before:opacity-50"
        )}>
          <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-white/80 z-10" />
          <input
            placeholder={placeholder}
            className="h-14 w-full bg-transparent pl-12 focus:outline-none text-white placeholder:text-white/60 relative z-10"
            type={type}
            {...props}
          />
          <div className="md:pr-1.5 lg:pr-0 relative z-10">
            <button
              type="submit"
              className={cn(
                "relative inline-block py-[1px] overflow-hidden rounded-lg"
              )}
            >
              {/* Button glow border animation */}
              <div
                className={cn(
                  "absolute inset-0 rounded-lg animate-pulse",
                  "bg-gradient-to-r from-transparent via-[#774c2e] to-transparent"
                )}
                style={{
                  animationDuration: speed,
                  boxShadow: `0 0 10px ${defaultColor}, 0 0 20px ${defaultColor}`,
                }}
              />
              
              {/* Button animated glow elements */}
              <div
                className={cn(
                  "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
                  "opacity-40"
                )}
                style={{
                  background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
                  animationDuration: speed,
                }}
              />
              <div
                className={cn(
                  "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
                  "opacity-40"
                )}
                style={{
                  background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
                  animationDuration: speed,
                }}
              />
              
              {/* Button content */}
              <div className={cn(
                "relative z-10 border text-white text-center text-sm py-2 px-4 rounded-lg",
                "bg-[#572817] border-[#774c2e]/40 backdrop-blur-sm",
                "hover:border-[#774c2e]/60 transition-all duration-300"
              )}>
                <span className="hidden md:block">Get Brochure</span>
                <SendHorizonal
                  className="relative mx-auto size-5 md:hidden"
                  strokeWidth={2}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

// CSS animations that need to be added to your global CSS or Tailwind config
/*
@keyframes star-movement-bottom {
  0% {
    transform: translateX(-100%) rotate(0deg);
  }
  100% {
    transform: translateX(100%) rotate(360deg);
  }
}

@keyframes star-movement-top {
  0% {
    transform: translateX(100%) rotate(0deg);
  }
  100% {
    transform: translateX(-100%) rotate(-360deg);
  }
}
*/