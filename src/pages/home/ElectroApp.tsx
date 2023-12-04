import Laptop from '../../assets/images/Laptop.webp';
import Windows from '../../assets/images/windows.svg';
import Android from '../../assets/images/android.svg';
import Caret from '../../assets/images/caret.svg';
import useObserver from '../../utils/useObserver';
import { useEffect, useRef, useState } from 'react';
import LazyImage from '../../components/ui/LazyImage';
import { Download } from '../../services/downloads';
import api from '../../services';

// ElectroApp Component
const ElectroApp = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startAnimation = useObserver(containerRef);

  const [downloadsDetails, setDownloadDetails] = useState<Download[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    api.downloads.getAllDownloads().then((data) => {
      setDownloadDetails(data.datas.results.downloads);
      setLoading(false);
    });
  }, []);

  return (
    <div
      id="ElectroApp"
      ref={containerRef}
      className="flex justify-start  lg:justify-center flex-col gap-5 h-[100dvh]  px-10 md:px-20"
    >
      <div className="flex lg:flex-row lg:justify-between lg:gap-44  flex-col  items-center">
        <div className="flex  slideDown flex-1	justify-center	">
          <img
            loading="lazy"
            src={Laptop}
            style={{
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? 'scale(1)' : 'scale(.6)',
              transition: 'all .6s .1s linear',
            }}
          />
        </div>

        <div className="flex flex-col flex-1">
          <div
            className="flex flex-col justify-center lg:items-start items-center"
            style={{
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? 'translateX(0)' : 'translateX(3rem)',
              transition: 'all .6s .7s ease-in-out',
            }}
          >
            <p className=" text-white header-1 whitespace-nowrap	">
              دانلود اپلیکیشن <span className="text-[#8C39F3]">الکترو</span>
            </p>
            <p className="text-[2rem] text-justify max-w-[80%] text-white header-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col mt-4 gap-3 justify-center lg:justify-start ">
            {downloadsDetails.map((item, index) => {
              return (
                <a
                  key={index}
                  href={loading ? '#' : item.link}
                  style={{
                    opacity: startAnimation ? 1 : 0,
                    transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                    transition: `all .5s ${1.3 + index * 0.5}s ease`,
                  }}
                  className={`flex justify-center items-center gap-2 border-[2px] py-2 btn px-5 rounded-full ${
                    index === 0 ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-[#8C39F3]'
                  }`}
                >
                  <LazyImage
                    src={index === 0 ? Windows : Android}
                    style={{ width: index === 0 ? '20px' : '40px' }}
                    alt={index === 0 ? 'windows' : 'android'}
                  />
                  <p className="text-white">{item.title}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {startAnimation && (
        <div className="slideUpScroll absolute flex  mt-7 bottom-1 left-0 right-0  flex-col justify-center items-center gap-2 mb-3">
          <LazyImage alt="caret" src={Caret} className="lg:w-[45px] md:w-[30px] w-[25px] " />
          <p className="text-white text-[.8rem] opacity-75">اسکرول کنید</p>
        </div>
      )}
    </div>
  );
};

export default ElectroApp;
