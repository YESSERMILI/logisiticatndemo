import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2 text-primary-foreground", className)}>
    <Trophy className="h-6 w-6 text-accent" />
    <span className="font-heading text-xl font-bold tracking-tight">
      3ez El Mondial
    </span>
  </div>
);

export const AppName = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <Trophy className="h-8 w-8 text-accent" />
    <h1 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      3ez El Mondial
      <span className="text-primary"> by TT</span>
    </h1>
  </div>
)
