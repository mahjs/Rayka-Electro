import React from 'react';
import Navbar from '../../components/navbar/Navbar';
// import VantaBackground from './VantaBackground ';
import signImg from '../../assets/images/sign-in.png';
import SignUpForm from './SignUpForm';

const SignUp: React.FC = () => {
  return (
    <div className="overflow-x-hidden relative bg-[#23153c] w-full h-full">
      {/* <VantaBackground /> */}
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>
      <div className="flex flex-wrap absolute w-full justify-evenly items-center p-4 top-72 md:top-44">
        <SignUpForm />
        <img src={signImg} alt="sign image " className="hidden md:flex w-1/2 h-1/2" />
      </div>
    </div>
  );
};

export default SignUp;
