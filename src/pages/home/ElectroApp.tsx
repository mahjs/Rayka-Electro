import Laptop from '../../assets/images/Laptop.webp';
import Windows from '../../assets/images/windows.svg';
import Android from '../../assets/images/android.svg';
import Caret from '../../assets/images/caret.svg';
import useObserver from '../../utils/useObserver';
import { useRef } from 'react';
import LazyImage from '../../components/ui/LazyImage';

// ElectroApp Component
const ElectroApp = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startAnimation = useObserver(containerRef);

  return (
    <div
      id="ElectroApp"
      ref={containerRef}
      className="flex justify-start  lg:justify-center flex-col gap-5 h-[100dvh]  px-10 md:px-20"
    >
      <div className="flex lg:flex-row lg:justify-between lg:gap-44  flex-col  items-center">
        <div className="flex  slideDown flex-1	justify-center	">
          <img
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
            <p className="text-[2rem] max-w-[80%] text-white header-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col mt-4 gap-3 justify-center lg:justify-start ">
            <button
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .5s 1.3s ease',
              }}
              className="flex justify-center items-center gap-2 border-[2px] py-2 btn px-5 rounded-full bg-[rgba(255,255,255,0.2)]"
            >
              <LazyImage src={Windows} style={{ width: '20px' }} alt="windows" />
              <p className="text-white">اپلیکیشن ویندوز</p>
            </button>
            <button
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .5s 1.8s ease',
              }}
              className="flex justify-center items-center gap-2 py-2 px-5 bg-[#8C39F3] rounded-full btn"
            >
              <LazyImage src={Android} style={{ width: '40px' }} alt="android" />
              <p className="text-white">اپلیکیشن اندروید</p>
            </button>
          </div>
        </div>
      </div>
      <div className="slideUpScroll absolute flex  mt-7 bottom-1 left-0 right-0  flex-col justify-center items-center gap-2 mb-3">
        <LazyImage alt="caret" src={Caret} className="lg:w-[45px] md:w-[30px] w-[25px] " />
        <p className="text-white text-[.8rem] opacity-75">اسکرول کنید</p>
      </div>
    </div>
  );
};

export default ElectroApp;
