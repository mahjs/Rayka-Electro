import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login.png';
// import VantaBackground from '../signUp/VantaBackground ';
import LoginForm from './LoginForm';
import LazyImage from '../../components/ui/LazyImage';

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
        </div>
      </div>
    </div>
  );
};

export default Login;
