import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login-.svg';
import VantaBackground from '../signUp/VantaBackground ';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  return (
    <div className="overflow-x-hidden h-[100dvh] relative bg-[#23153c]">
      <VantaBackground />
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>
      <div className="flex flex-wrap absolute w-full justify-evenly items-center p-4 top-36">
        <LoginForm />
        <img src={LoginImg} alt="LoginImg" style={{ width: '33rem', height: '33rem' }} />
      </div>
    </div>
  );
};

export default Login;
