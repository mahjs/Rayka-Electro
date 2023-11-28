import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login.png';
// import VantaBackground from '../signUp/VantaBackground ';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  return (
    <div className="overflow-x-hidden h-[100dvh] bg-[#23153c]">
      {/* <VantaBackground /> */}
      <Navbar />
      <div className="flex flex-wrap w-full h-full justify-evenly items-center px-4 md:px-0 mt-3">
        <LoginForm />
        <img src={LoginImg} alt="login image " className="hidden md:flex w-[50%]" />
      </div>
    </div>
  );
};

export default Login;
