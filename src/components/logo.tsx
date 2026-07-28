import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Logo = ({ className }: { className?: string }) => {
  const logo = PlaceHolderImages.find(p => p.id === 'main-logo');
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {logo ? (
        <Image 
          src={logo.imageUrl} 
          alt="Logo" 
          width={32} 
          height={32} 
          className="h-8 w-auto object-contain"
        />
      ) : (
        <div className="h-8 w-8 bg-primary rounded-lg" />
      )}
      <span className="text-xl font-bold tracking-tight">
        3ez El Mondial
      </span>
    </div>
  );
};

export const AppName = ({ className }: { className?: string }) => {
  const logo = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      {logo && (
        <Image 
          src={logo.imageUrl} 
          alt="3ez El Mondial Logo" 
          width={120} 
          height={120} 
          className="h-24 w-auto object-contain drop-shadow-xl"
        />
      )}
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        3ez El Mondial
        <span className="text-primary block sm:inline"> by TT</span>
      </h1>
    </div>
  );
};
