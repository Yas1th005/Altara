import { cn } from "@/lib/utils"
import { StarBorder } from "./star_border"

export function StarBorderDemo(props) {
  return (
    <div className="space-y-8">
      <StarBorder>
        {props.text}
      </StarBorder>
    </div>
  )
}