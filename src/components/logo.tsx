import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export const Logo = ({ className, variant = "default" }: LogoProps) => {
  const navyColor = variant === "white" ? "#FFFFFF" : "#07163F";
  const blueColor = variant === "white" ? "#FFFFFF" : "#2563EB";
  const orangeColor = "#FF8A1F";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="827.505 -279.273 200 174.546" 
        className="h-full w-auto"
        role="img" 
        aria-label="LOGISTICA TUNISIE"
      >
        <g transform="scale(1 -1)" fillRule="nonzero">
          <path d="M 827.505,279.273 L 1002.05,192 L 888.596,192 Z" fill={navyColor}/>
          <path d="M 888.596,192 L 1002.05,192 L 827.505,104.727 Z" fill={blueColor}/>
          <path d="M 827.505,279.273 L 888.596,192 L 827.505,192 Z" fill={orangeColor}/>
        </g>
      </svg>
      <div className="flex flex-col -space-y-1">
        <span className={cn("text-2xl font-heading font-bold tracking-tighter uppercase", variant === "white" ? "text-white" : "text-primary")}>
          Logistica
        </span>
        <span className={cn("text-[9px] font-black tracking-[0.35em] uppercase", variant === "white" ? "text-white/60" : "text-gray-400")}>
          TUNISIE
        </span>
      </div>
    </div>
  );
};