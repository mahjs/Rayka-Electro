import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login.png';
// import VantaBackground from '../signUp/VantaBackground ';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  return (
    <div className="overflow-x-hidden h-[100dvh] relative bg-[#23153c]">
      {/* <VantaBackground /> */}
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>
      <div className="flex flex-wrap absolute w-full justify-evenly items-center p-4 top-72 md:top-[23.5%]">
        <LoginForm />
        <img src={LoginImg} alt="login image " className="hidden md:flex w-[35%] h-[35%]" />
      </div>
    </div>
  );
};

export default Login;
