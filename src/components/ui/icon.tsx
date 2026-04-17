import { icons, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    // Return a fallback or null if the icon name is invalid
    return null; 
  }

  return <LucideIcon {...props} />;
};
