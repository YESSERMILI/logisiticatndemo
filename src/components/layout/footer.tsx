import Link from "next/link";
import { Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Trophy className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Your Team. The source code is available on GitHub.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 3ez El Mondial. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
