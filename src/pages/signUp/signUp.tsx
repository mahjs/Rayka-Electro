import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Navbar from '../../components/navbar/Navbar';
import signImg from '../../assets/images/signin.webp';
import SignUpForm from './SignUpForm';
import LazyImage from '../../components/ui/LazyImage';

const SignUp: React.FC = () => {
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="overflow-x-hidden h-[100vh] bg-[#23153c]">
      <Navbar swiper={swiperInstance} currentIndex={currentSwiperIndex} />
      <div className="flex flex-wrap w-full h-full justify-evenly items-center px-4 md:px-0 mt-3">
        <SignUpForm />
        <div className="sign-img hidden 2xl:flex w-[50%]">
          <LazyImage src={signImg} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
