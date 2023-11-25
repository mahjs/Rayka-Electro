import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import VantaBackground from './VantaBackground ';
import signImg from '../../assets/images/sign-img.svg';
import SignUpForm from './SignUpForm';

const SignUp: React.FC = () => {
  return (
    <div className="overflow-x-hidden relative bg-[#23153c]">
      <VantaBackground />
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>
      <div className="flex flex-wrap absolute w-full justify-evenly p-4 top-36">
        <SignUpForm />
        <img src={signImg} alt="sign image " style={{ width: '30rem', height: '33rem' }} />
      </div>
    </div>
  );
};

export default SignUp;
