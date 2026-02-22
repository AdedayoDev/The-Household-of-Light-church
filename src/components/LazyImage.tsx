import { useState } from "react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  onImageLoad?: () => void;
}

/**
 * Lazy loading image component with fade-in effect
 * Only loads image when element enters viewport
 */
export function LazyImage({
  src,
  alt,
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E",
  onImageLoad,
  className = "",
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useLazyLoad<HTMLImageElement>(() => {
    // Preload image
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onImageLoad?.();
    };
    img.onerror = () => {
      setImageSrc(placeholder);
      setIsLoaded(true);
    };
    img.src = src;
  });

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-75"
      } ${className}`}
      {...props}
    />
  );
}

export default LazyImage;
