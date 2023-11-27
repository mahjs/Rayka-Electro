import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

const LazyImage = ({ src, alt = '', className, style }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  // Separate internal styles for lazy loading
  const lazyLoadingStyle: React.CSSProperties = {
    transition: 'filter 0.5s ease-in-out, opacity 0.5s ease-in-out',
    filter: loaded ? 'none' : 'blur(8px)',
    opacity: loaded ? 1 : 0,
  };

  // Combine external and internal styles
  const combinedStyle: React.CSSProperties = { ...style, ...lazyLoadingStyle };

  return <img src={src} alt={alt} loading="lazy" onLoad={handleLoad} style={combinedStyle} className={className} />;
};

export default LazyImage;
