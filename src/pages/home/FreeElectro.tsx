import React, { useState } from 'react';
import main from '../../assets/images/main.svg';
import Mouse from '../../assets/images/mouse.svg';

// LazyImage Component
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

// FreeElectro Component
const FreeElectro = () => {
  return (
    <div id="FreeElectro" className="px-10 md:px-20 flex flex-col justify-center min-h-[100dvh]">
      <div className="flex lg:flex-row lg:gap-28 flex-col-reverse justify-center items-center">
        <div>
          <p className="text-white whitespace-nowrap  slideLeft header-1 	">
            با
            <span className="text-[#8C39F3]"> ((الکترو)) </span>
            آزادباش!
          </p>
          <p className="text-white  mt-4  showFromRight header-2 text-justify">
            الکترو با هدف کمک به جامعه آنلاین ایران ایجاد شد تا{' '}
          </p>
          <p className="text-white mt-3  showFromRight header-2 text-justify">
            تحریم های ظالمانه شرکت های خارجی مقابله کند...
          </p>
        </div>
        <div className="flex slideDown">
          <LazyImage src={main} alt="الکترو electro Electro" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="slideUpScroll flex flex-col justify-center items-center gap-2 mb-3">
        <LazyImage src={Mouse} style={{ width: '60px' }} />
        <p className="text-white text-[.8rem] opacity-75">اسکرول کنید</p>
      </div>
    </div>
  );
};

export default FreeElectro;
