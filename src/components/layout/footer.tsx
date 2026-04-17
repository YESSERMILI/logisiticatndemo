import Link from "next/link";
import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="w-full mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t">
        <div className="flex flex-col md:flex-row items-center gap-4">
            <Logo className="text-foreground"/>
            <p className="text-sm text-muted-foreground">
                Learn, Compete, Create, Conquer.
            </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
