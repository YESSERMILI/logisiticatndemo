import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <Trophy className="h-6 w-6 text-primary" />
    <span className="text-xl font-bold tracking-tight">
      3ez El Mondial
    </span>
  </div>
);

export const AppName = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center justify-center gap-3", className)}>
    <Trophy className="h-8 w-8 text-accent" />
    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      3ez El Mondial
      <span className="text-primary"> by TT</span>
    </h1>
  </div>
)
