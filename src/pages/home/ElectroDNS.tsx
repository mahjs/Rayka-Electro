import Phone from '../../assets/images/phone.webp';
import Caret from '../../assets/images/caret.svg';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';
import useObserver from '../../utils/useObserver';
import { useEffect, useRef, useState } from 'react';
import LazyImage from '../../components/ui/LazyImage';
import { Dns } from '../../services/dns';
import api from '../../services';

// ElectroDNS Component
const ElectroDNS = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const startAnimation = useObserver(containerRef);

  const [dnses, setDnses] = useState<Dns[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    api.dns.getAllDns().then((data) => {
      setDnses(data.datas.results.dns);
      setLoading(false);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="ElectroDNS"
      className="flex justify-start  lg:justify-center lg:pt-0 pt-12 items-center flex-col gap-5 h-[100dvh]  px-10 md:px-20"
    >
      <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-12  ">
        <div className="flex gap-5 lg:max-w-[50%]  flex-col m-0 z-20 lg:items-start items-center">
          <div className="flex flex-col">
            <p
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateX(0)' : 'translateX(2rem)',
                transition: 'all .6s .8s',
              }}
              className="text-white text-right header-1"
            >
              دی‌ان‌اس <span className="text-[#8C39F3] ">الکترو</span>
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

          <div className="flex gap-3 md:flex-row flex-col">
            <div
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .6s 1.8s ease-in-out',
              }}
            >
              <UnderlineCopyText text={loading ? '1.1.1.1' : dnses[0].domain} />
            </div>
            <div
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .6s 2.1s ease-in-out',
              }}
            >
              <UnderlineCopyText text={loading ? '2.2.2.2' : dnses[1].domain} />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src={Phone}
          style={{
            opacity: startAnimation ? 1 : 0,
            transform: startAnimation ? 'rotate(0)' : 'rotate(40deg)',
            transition: 'all .7s ease-out',
            objectFit: 'contain',
            maxHeight: '70dvh',
          }}
          alt="Phone"
        />
      </div>
      {startAnimation && (
        <div className="slideUpScroll flex absolute  mt-7 bottom-1 left-0 right-0  flex-col justify-center items-center gap-2 mb-4">
          <LazyImage alt="caret" src={Caret} className="lg:w-[45px] md:w-[30px] w-[25px] " />
          <p className="text-white text-[.8rem] opacity-75">اسکرول کنید</p>
        </div>
      )}
    </section>
  );
};

export default ElectroDNS;
