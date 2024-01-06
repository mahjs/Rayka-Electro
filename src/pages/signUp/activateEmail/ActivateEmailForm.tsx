import React, { useEffect } from 'react';
import Logo from '../../../assets/images/Logo.svg';
import { useForm, SubmitHandler, FieldError, UseFormRegister } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import storage from '../../../services/storage';
import config from '../../../services/config';
import api from '../../../services';
import { useAuth } from '../../../contexts/authContext';
import { toast } from 'react-toastify';

interface FormValues {
  code: string;
}

interface InputFieldProps {
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  type: string;
  icon?: JSX.Element;
  validation?: any;
  widthClass?: string;
}

const ActivateEmailForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const signupOtpToken: string | null = storage.get('signup_otp_token'); // Token from signup
    const loginOtpToken: string | null = storage.get('login_otp_token'); // Token from login

    let otpTokenToUse: string | null = '';

    if (signupOtpToken) {
      otpTokenToUse = signupOtpToken;
    } else if (loginOtpToken) {
      otpTokenToUse = loginOtpToken;
    } else {
      toast.error('Invalid or missing OTP token.');
      return;
    }
    api.auth
      .activateEmail(otpTokenToUse, data.code)
      .then((res) => {
        console.log(res);

        toast.success('تایید حساب با موفقیت انجام شد.');
        login();
        navigate('/dashboard');
      })
      .catch((e) => {
        console.log(e.response.data);

        toast.error(e.response.data.message);
        reset();
      });
  };

  return (
    <div className="bg-[#501a79] sm:mb-4 rounded-[1.25rem] border border-zinc-600 w-full md:w-[50%] 2xl:w-[25%] mt-2 p-6 flex flex-col items-center space-y-6">
      <img loading="lazy" src={Logo} alt="Logo-login" className="w-20 h-20" />
      <h2 className="text-white text-3xl font-bold">تاییدیه حساب کاربری</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[100%] flex flex-wrap justify-between text-white">
        <InputField
          name="code"
          placeholder="12345"
          register={register}
          error={errors.code}
          type="text"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
              <path
                d="M11.39 11.5812C14.2592 11.5812 16.5851 9.25532 16.5851 6.38619C16.5851 3.51705 14.2592 1.19116 11.39 1.19116C8.52092 1.19116 6.19502 3.51705 6.19502 6.38619C6.19502 9.25532 8.52092 11.5812 11.39 11.5812Z"
                stroke="#F8F8F8"
                strokeWidth="1.5"
              />
              <path
                d="M21.7801 21.3219C21.7801 24.5493 21.7801 27.1663 11.39 27.1663C1 27.1663 1 24.5493 1 21.3219C1 18.0945 5.65214 15.4775 11.39 15.4775C17.128 15.4775 21.7801 18.0945 21.7801 21.3219Z"
                stroke="#F8F8F8"
                strokeWidth="1.5"
              />
            </svg>
          }
        />
        <button type="submit" className="w-full bg-white rounded-full text-[#3E016A] text-[1.3125rem] font-[600] p-4">
          تایید
        </button>
      </form>
      <div className="flex w-full justify-center items-center text-sm my-4">
        <a href="/sign-up" className="text-slate-300">
          حساب کاربری ندارید؟
        </a>
        <a href="/sign-up" className="text-white hover:text-blue-200 underline">
          ثبت نام
        </a>
      </div>
    </div>
  );
};

const InputField: React.FC<InputFieldProps> = ({ name, placeholder, register, error, type, icon, validation }) => {
  return (
    <>
      <style>
        {`
        .input-autofill:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px #501a79 inset;
          -webkit-text-fill-color: #fcfcfc;
        }
      `}
      </style>
      <div
        className={`flex items-center border w-full ${
          error ? 'border-red-500 my-3' : 'border-slate-500 focus-within:border-white'
        } p-4 mb-3 rounded-[1.25rem] bg-transparent`}
      >
        {icon}
        <input
          {...register(name, validation)}
          className="bg-transparent border-none outline-none pl-2 mr-2 w-full text-white input-autofill"
          type={type}
          placeholder={placeholder}
        />
      </div>
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </>
  );
};

export default ActivateEmailForm;
