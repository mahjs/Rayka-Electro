import React, { useState, useRef } from 'react';
import Phone from '../../assets/images/phone.svg';
import Caret from '../../assets/images/caret.svg';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';
import useObserver from '../../utils/useObserver';

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

// ElectroDNS Component
const ElectroDNS = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const startAnimation = useObserver(containerRef);

  return (
    <section
      ref={containerRef}
      id="ElectroDNS"
      className="flex justify-center flex-col gap-5 h-[100dvh] px-10 md:px-20"
    >
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-20">
        <div className="flex lg:max-w-[50%] flex-col text-justify m-0 z-20 lg:items-start items-center">
          <div className="flex flex-col lg:justify-start justify-center">
            <p
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateX(0)' : 'translateX(2rem)',
                transition: 'all .6s .8s',
              }}
              className="text-white header-1"
            >
              دی‌ان‌اس <span className="text-[#8C39F3]">الکترو</span>
            </p>
            {startAnimation && (
              <>
                <p
                  className="text-[2.5rem] max-w-[95%] text-white showFromRight header-2"
                  style={{
                    animationDelay: '1.2s',
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی از
                </p>
                <p
                  style={{
                    animationDelay: '1.2s',
                  }}
                  className="text-[2.5rem] text-white showFromRight header-2"
                >
                  صنعت چاپ و با استفاده از طراحان گرافیک است و
                </p>
                <p
                  style={{
                    animationDelay: '1.2s',
                  }}
                  className="text-[2.5rem] text-white showFromRight header-2"
                >
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنه
                </p>
              </>
            )}
          </div>

          <div className="flex gap-3 mt-5 md:flex-row flex-col">
            <div
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .6s 1.8s ease-in-out',
              }}
            >
              <UnderlineCopyText text="78.157.42.100" />
            </div>
            <div
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .6s 2.1s ease-in-out',
              }}
            >
              <UnderlineCopyText text="78.157.42.101" />
            </div>
          </div>
        </div>
        {startAnimation && (
          <LazyImage
            src={Phone}
            style={{
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? 'rotate(0)' : 'rotate(20deg)',
              transition: 'all 1s ease-out',
              objectFit: 'contain',
              maxHeight: '40dvh',
              maxWidth: '65vw',
            }}
            alt="Phone"
          />
        )}
      </div>
      <div className="slideUpScroll flex flex-col justify-center items-center gap-2 mb-3">
        <LazyImage src={Caret} style={{ width: '45px', height: '45px' }} alt="caret" />
        <p className="text-white text-[.8rem] opacity-75">اسکرول کنید</p>
      </div>
    </section>
  );
};

export default ElectroDNS;
