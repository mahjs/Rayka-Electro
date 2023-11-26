import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login.png';
// import VantaBackground from '../signUp/VantaBackground ';
import LoginForm from './LoginForm';

interface LazyImageProps {
  src: string;
  alt?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    transition: 'filter 2s cubic-bezier(.35,.01,.53,.98), opacity 1s ease-in-out',
    filter: loaded ? 'none' : 'blur(8px)',
    opacity: loaded ? 1 : 0,
  };

  return <img src={src} loading="lazy" onLoad={handleLoad} style={imageStyle} alt={alt} />;
};

const Login: React.FC = () => {
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <div className="overflow-x-hidden h-[100dvh] bg-[#23153c]">
      {/* <VantaBackground /> */}
      <Navbar swiper={swiperInstance} currentIndex={currentSwiperIndex} />
      <div className="flex flex-wrap w-full h-full justify-evenly items-center px-4 md:px-0 mt-3">
        <LoginForm />
        <div className="sign-img hidden 2xl:flex w-[50%]">
          <LazyImage src={LoginImg} alt="Login Image" />
        </div>{' '}
      </div>
    </div>
  );
};

export default Login;
