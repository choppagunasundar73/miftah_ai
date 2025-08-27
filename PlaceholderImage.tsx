import { Camera } from 'lucide-react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
}

export function PlaceholderImage({ width = 300, height = 200, className = '' }: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-[#957D65]/20 to-[#957D65]/10 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <Camera size={32} className="text-[#957D65]/50" />
    </div>
  );
}