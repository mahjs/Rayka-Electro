import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login.webp';
// import VantaBackground from '../signUp/VantaBackground ';
import LoginForm from './LoginForm';
import LazyImage from '../../components/ui/LazyImage';

const BACKGROUND_COLOR = '#23153c';

const Login: React.FC = () => {
  return (
    <div className={`overflow-x-hidden h-[100vh] bg-[${BACKGROUND_COLOR}]`}>
      {/* <VantaBackground /> */}
      <Navbar swiper={null} currentIndex={0} />
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
