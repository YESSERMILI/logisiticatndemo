
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Logo = ({ className, variant = "default" }: { className?: string, variant?: "default" | "white" }) => {
  const logo = PlaceHolderImages.find(p => p.id === 'logistica-logo');
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {logo ? (
        <Image 
          src={logo.imageUrl} 
          alt="Logistica Tunisie Logo" 
          width={160} 
          height={40} 
          priority
          className={cn(
            "h-10 w-auto object-contain",
            variant === "white" && "brightness-0 invert"
          )}
        />
      ) : (
        <span className="text-xl font-black tracking-tight text-primary">Logistica</span>
      )}
    </div>
  );
};

export const AppName = ({ className }: { className?: string }) => {
  const logo = PlaceHolderImages.find(p => p.id === 'logistica-logo');

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      {logo && (
        <Image 
          src={logo.imageUrl} 
          alt="Logistica Tunisie Logo" 
          width={180} 
          height={60} 
          priority
          className="h-16 w-auto object-contain animate-in zoom-in duration-700"
        />
      )}
      <h1 className="text-4xl font-black tracking-tighter text-center text-primary">
        Logistica Tunisie
      </h1>
    </div>
  );
};
