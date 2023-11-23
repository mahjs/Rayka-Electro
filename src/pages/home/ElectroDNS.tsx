import Phone from '../../assets/images/phone.png';
import Caret from '../../assets/images/caret.svg';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';
import useObserver from '../../utils/useObserver';
import { useRef } from 'react';

const ElectroDNS = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const startAnimation = useObserver(containerRef);

  return (
    <section
      ref={containerRef}
      id="ElectroDNS"
      className="flex relative justify-around flex-wrap min-h-[100dvh] h-[100dvh]"
    >
      <div className="flex items-center justify-center">
        <div className="flex mr-auto max-w-[50%] pr-36 flex-col">
          <p
            style={{
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? 'translateX(0)' : 'translateX(2rem)',
              transition: 'all .6s .8s',
            }}
            className="text-[5.5rem] text-right font-bold text-white"
          >
            دی‌ان‌اس <span className="text-[#8C39F3]">الکترو</span>
          </p>
          {startAnimation && (
            <>
              <p
                className="text-[2.5rem] max-w-[95%] text-white showFromRight"
                style={{
                  animationDelay: '1.2s',
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              </p>
              <p
                style={{
                  animationDelay: '1.2s',
                }}
                className="text-[2.5rem] text-white showFromRight"
              >
                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
              </p>
              <p
                style={{
                  animationDelay: '1.2s',
                }}
                className="text-[2.5rem] text-white showFromRight"
              >
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
              </p>
            </>
          )}
          <div className="flex gap-3 mt-5">
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
          <img
            style={{
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? 'rotate(0)' : 'rotate(20deg)',
              transition: 'all 1s ease-out',
              width: '1000px',
              objectFit: 'contain',
            }}
            src={Phone}
            className="rotateMagnifier w-[1000px] ml-20 "
          />
        )}
      </div>
      <img
        style={{
          opacity: startAnimation ? 1 : 0,
          transform: startAnimation ? 'translateY(0)' : 'translateY(-2rem)',
          transition: 'all .8s 2.8s ease-out',
          width: '45px',
          height: '44px',
        }}
        alt="caret"
        src={Caret}
        className="w-[45px] absolute bottom-10 left-[50%] translate-x-[50%]"
      />
    </section>
  );
};

export default ElectroDNS;
