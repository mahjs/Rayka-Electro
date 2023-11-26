import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const imageStyle: React.CSSProperties = {
    ...style,
    transition: 'filter 0.5s ease-in-out, opacity 0.5s ease-in-out',
    filter: loaded ? 'none' : 'blur(8px)',
    opacity: loaded ? 1 : 0,
  };

  return <img src={src} loading="lazy" onLoad={handleLoad} style={imageStyle} alt={alt} />;
};

export default LazyImage;
