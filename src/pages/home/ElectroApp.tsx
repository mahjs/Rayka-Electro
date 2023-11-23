import Laptob from '../../assets/images/laptob.png';
import Windows from '../../assets/images/windows.svg';
import Android from '../../assets/images/android.svg';
import Caret from '../../assets/images/caret.svg';
import { useRef } from 'react';
import useObserver from '../../utils/useObserver';

const ElectroApp = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const startAnimation = useObserver(containerRef);

  return (
    <section
      id="ElectroApp"
      ref={containerRef}
      className="flex justify-center flex-col gap-5 min-h-[100dvh] h-[100dvh]"
    >
      <div className="flex items-center">
        <img
          src={Laptob}
          className="w-[1000px]"
          style={{
            opacity: startAnimation ? 1 : 0,
            transform: startAnimation ? 'scale(1)' : 'scale(.6)',
            transition: 'all .6s .1s linear',
          }}
        />
        <div id="ElectroApp" className="flex flex-col">
          <div
            className="flex flex-col items-start"
            style={{
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? 'translateX(0)' : 'translateX(3rem)',
              transition: 'all .6s .7s ease-in-out',
            }}
          >
            <p className="text-[5.5rem] font-bold text-white">
              دانلود اپلیکیشن <span className="text-[#8C39F3]">الکترو</span>
            </p>
            <p className="text-[2rem] text-right max-w-[80%] text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
            </p>
          </div>
          <div className="flex mt-4 gap-3">
            <button
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .5s 1.3s ease',
              }}
              className="flex justify-center items-center gap-2 border-[2px] py-2 px-5 rounded-full bg-[#ffffff33]"
            >
              <img src={Windows} className="w-[20px]" alt="windows" style={{ width: '20px' }} />
              <p className="text-white">اپلیکیشن ویندوز</p>
            </button>
            <button
              style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: 'all .5s 1.8s ease',
              }}
              className="flex justify-center items-center gap-2 py-2 px-5 bg-[#8C39F3] rounded-full"
            >
              <img alt="android" src={Android} className="w-[20px]" style={{ width: '20px' }} />
              <p className="text-white ">اپلیکیشن اندروید</p>
            </button>
          </div>
        </div>
      </div>
      <img
        alt="caret"
        style={{
          opacity: startAnimation ? 1 : 0,
          transform: startAnimation ? 'translateY(0)' : 'translateY(-2rem)',
          transition: 'all .8s 2.3s ease-out',
          width: '45px',
          height: '45px',
        }}
        src={Caret}
        className="w-[45px] absolute  bottom-10 left-[50%] translate-x-[50%]"
      />
    </section>
  );
};

export default ElectroApp;
