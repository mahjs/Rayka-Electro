import ElectroDNS from './ElectroDNS';
import FreeElectro from './FreeElectro';
import FullImage from '../../assets/images/FullPage.svg';
// import Navbar from '../../components/navbar/Navbar';
import ElectroApp from './ElectroApp';
import ElectroTrains from './ElectroTrains';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel } from 'swiper/modules';
import Navbar from '../../components/navbar/Navbar';
import { useRef, useState } from 'react';

const Home = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState<number>(0);
  const [swiper, setSwiepr] = useState<boolean>(false);

  return (
    <div style={{ position: 'relative', height: '100%', zIndex: 10 }} className="me">
      <img alt="fullimage" src={FullImage} className="absolute w-full min-h-full -z-10" />
      <Navbar currentIndex={currentSwiperIndex} swiper={swiper ? swiperRef.current : null} />

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiepr(true);
        }}
        onSlideChange={(swiper) => {
          setCurrentSwiperIndex(swiper.realIndex);
        }}
        direction={'vertical'}
        slidesPerView={1}
        speed={1200}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <div className="h-full flex flex-col gap-10">
          <SwiperSlide>
            <FreeElectro />
          </SwiperSlide>
          <SwiperSlide>
            <ElectroApp />
          </SwiperSlide>
          <SwiperSlide>
            <ElectroDNS />
          </SwiperSlide>
          <SwiperSlide>
            <ElectroTrains />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Home;
