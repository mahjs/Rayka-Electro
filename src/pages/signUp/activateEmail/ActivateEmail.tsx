import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import LoginImg from '../../../assets/images/login.webp';
import LazyImage from '../../../components/ui/LazyImage';
import ActivateEmailForm from './ActivateEmailForm';

const ActivateEmail: React.FC = () => {
  return (
    <div className={`overflow-x-hidden h-[100vh] bg-[#23153c]`}>
      <Navbar swiper={null} currentIndex={0} />
      <div className="flex flex-wrap w-full h-full justify-evenly items-center px-4 md:px-0 mt-3">
        <ActivateEmailForm />
        <div className="sign-img hidden 2xl:flex w-[50%]">
          <LazyImage src={LoginImg} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default ActivateEmail;
