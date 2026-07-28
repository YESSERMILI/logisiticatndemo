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
          alt="3ez El Mondial Logo" 
          width={40} 
          height={40} 
          priority
          className="h-10 w-auto object-contain drop-shadow-md"
        />
      ) : (
        <div className="h-10 w-10 bg-primary rounded-lg" />
      )}
      <span className="text-xl font-black tracking-tight text-glow">
        3ez El Mondial
      </span>
    </div>
  );
};

export const AppName = ({ className }: { className?: string }) => {
  const logo = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      {logo && (
        <Image 
          src={logo.imageUrl} 
          alt="3ez El Mondial Logo" 
          width={180} 
          height={180} 
          priority
          className="h-32 w-auto object-contain drop-shadow-2xl animate-in zoom-in duration-700"
        />
      )}
      <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-center text-glow">
        3ez El Mondial
        <span className="text-primary block sm:inline"> by TT</span>
      </h1>
    </div>
  );
};
