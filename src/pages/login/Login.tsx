import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginImg from '../../assets/images/login-.svg';
import Logo from '../../assets/images/Logo.svg';
import VantaBackground from '../signUp/VantaBackground ';

const Login: React.FC = () => {
  return (
    <div className="overflow-x-hidden relative bg-[#23153c]">
      <VantaBackground />
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>
      <div className="flex absolute w-full justify-around p-4 top-36">
        <div className="bg-[#501a79] rounded-[1.25rem] border border-zinc-600 w-[28rem] h-[32rem] mt-2 p-8 flex flex-col items-center space-y-6">
          <img src={Logo} alt="Logo-login" className="w-20 h-20" />
          <h2 className="text-white text-3xl font-bold">ورود به حساب کاربری</h2>
          <form className="w-full max-w-[28rem] flex flex-wrap justify-between text-[#fff]">
            <div className="flex items-center border border-slate-500 p-4 mb-5 w-full rounded-[1.25rem] focus-within:border-[#fff]">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
                <path
                  d="M11.39 11.5812C14.2592 11.5812 16.5851 9.25532 16.5851 6.38619C16.5851 3.51705 14.2592 1.19116 11.39 1.19116C8.52092 1.19116 6.19502 3.51705 6.19502 6.38619C6.19502 9.25532 8.52092 11.5812 11.39 11.5812Z"
                  stroke="#F8F8F8"
                  strokeWidth={1.5}
                />
                <path
                  d="M21.7801 21.3219C21.7801 24.5493 21.7801 27.1663 11.39 27.1663C1 27.1663 1 24.5493 1 21.3219C1 18.0945 5.65214 15.4775 11.39 15.4775C17.128 15.4775 21.7801 18.0945 21.7801 21.3219Z"
                  stroke="#F8F8F8"
                  strokeWidth={1.5}
                />
              </svg>
              <input
                className="bg-transparent outline-none pl-2 mr-2 w-full text-white"
                type="text"
                placeholder="Alireza"
              />
            </div>
            <div className="flex items-center border border-slate-500 outline-none p-4 w-full rounded-[1.25rem] focus-within:border-[#fff]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  opacity={0.4}
                  d="M6.19502 11.3853V8.78778C6.19502 6.72107 7.01602 4.739 8.47741 3.27762C9.93879 1.81624 11.9209 0.995239 13.9876 0.995239C16.0543 0.995239 18.0363 1.81624 19.4977 3.27762C20.9591 4.739 21.7801 6.72107 21.7801 8.78778V11.3853M1 19.1778C1 15.5049 1 13.6672 2.14161 12.5269C3.28191 11.3853 5.11965 11.3853 8.79254 11.3853H19.1826C22.8555 11.3853 24.6932 11.3853 25.8335 12.5269C26.9751 13.6672 26.9751 15.5049 26.9751 19.1778C26.9751 22.8507 26.9751 24.6884 25.8335 25.8288C24.6932 26.9704 22.8555 26.9704 19.1826 26.9704H8.79254C5.11965 26.9704 3.28191 26.9704 2.14161 25.8288C1 24.6884 1 22.8507 1 19.1778ZM16.5851 19.1778C16.5851 20.6124 15.4221 21.7753 13.9876 21.7753C12.553 21.7753 11.39 20.6124 11.39 19.1778C11.39 17.7433 12.553 16.5803 13.9876 16.5803C15.4221 16.5803 16.5851 17.7433 16.5851 19.1778Z"
                  stroke="#F8F8F8"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              </svg>
              <input
                className="bg-transparent outline-none pl-2 mr-2 w-full text-white"
                type="password"
                placeholder="کلمه عبور"
              />
            </div>
            <div className="flex justify-between w-full items-center text-sm my-4">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" className="ml-2 mt-1.5" />
                بخاطر سپردن رمز عبور
              </label>
              <a href="#" className="text-[#fff] hover:text-blue-200 underline">
                فراموشی رمز
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#fff] rounded-full text-[#3E016A] text-[1.3125rem] font-[600] p-4"
            >
              ورود به حساب
            </button>
            <div className="flex w-full justify-center items-center text-sm mt-4">
              <a href="/sign-up" className="text-slate-300">
                حساب کاربری ندارید؟
              </a>
              <a href="/sign-up" className="text-[#fff] hover:text-blue-200 underline">
                ثبت نام
              </a>
            </div>
          </form>
        </div>

        <img src={LoginImg} alt="LoginImg" style={{ width: '33rem', height: '33rem' }} />
      </div>
    </div>
  );
};

export default Login;
