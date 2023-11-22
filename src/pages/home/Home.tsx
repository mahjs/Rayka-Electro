import ElectroDNS from './ElectroDNS';
import FreeElectro from './FreeElectro';
import FullImage from '../../assets/images/FullPage.svg';
import Navbar from '../../components/navbar/Navbar';
import ElectroApp from './ElectroApp';
import ElectroTrains from './ElectroTrains';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel } from 'swiper/modules';

const Home = () => {
  return (
    // <div className="flex flex-col gap-10">
    //   <img src={FullImage} className="absolute w-full min-h-full -z-10" />
    //   <Navbar />
    //   <FreeElectro />
    //   <ElectroApp />
    //   <ElectroDNS />
    //   <ElectroTrains />
    // </div>

    <div style={{ position: 'relative', height: '100%' }}>
      <img alt="fullimage" src={FullImage} className="absolute w-full min-h-full -z-10" />
      <Navbar />

      <Swiper
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
