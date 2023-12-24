import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import signImg from '../../assets/images/signin.webp';
import SignUpForm from './SignUpForm';
import LazyImage from '../../components/ui/LazyImage';
import ThreeBackground from '../login/ThreeBackground';

const SignUp: React.FC = () => {
  return (
    <div className={`overflow-x-hidden h-[100vh] bg-[#23153c] relative`}>
      <ThreeBackground />
      <Navbar currentIndex={0} swiper={null} />
      <div className="flex flex-wrap w-full h-full justify-evenly items-center px-4 md:px-0 absolute top-0">
        <SignUpForm />
        <div className="sign-img hidden 2xl:flex w-[50%]">
          <LazyImage src={signImg} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
