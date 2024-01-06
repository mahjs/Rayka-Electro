import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import { useForm, SubmitHandler, FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form';
import { usernameValidation, passwordValidation } from '../signUp/ValidationRules';
import { useNavigate } from 'react-router-dom';
import api from '../../services';
import { useAuth } from '../../contexts/authContext';
import { toast } from 'react-toastify';

interface FormValues {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface InputFieldProps {
  name: keyof FormValues;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError | undefined;
  type: string;
  icon?: JSX.Element;
  validation?: RegisterOptions;
  widthClass?: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const rememberMe = watch('rememberMe');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    api.auth
      .login(data.username, data.password)
      .then((res) => {
        console.log(res);

        if (res.statusCode === 401) {
          toast.error(res.message);
          navigate('/activate-email');
          return;
        }
        login();
        toast.success('شما با موفقیت وارد شدید');
        navigate('/dashboard');
      })
      .catch((e) => {
        toast.error(e.message);
        reset();
      });
  };

  return (
    <div className="bg-[#501a79] sm:mb-4 rounded-[1.25rem] border border-zinc-600 w-full md:w-[50%] 2xl:w-[25%] mt-2 p-6 flex flex-col items-center space-y-6">
      <img loading="lazy" src={Logo} alt="Logo-login" className="w-20 h-20" />
      <h2 className="text-white text-3xl font-bold">ورود به حساب کاربری</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[100%] flex flex-wrap justify-between text-white">
        <InputField
          name="username"
          placeholder="Alireza"
          register={register}
          error={errors.username}
          type="text"
          validation={usernameValidation}
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
        <InputField
          name="password"
          placeholder="کلمه عبور"
          register={register}
          error={errors.password}
          type="password"
          validation={passwordValidation}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                opacity="0.4"
                d="M6.19502 11.3853V8.78778C6.19502 6.72107 7.01602 4.739 8.47741 3.27762C9.93879 1.81624 11.9209 0.995239 13.9876 0.995239C16.0543 0.995239 18.0363 1.81624 19.4977 3.27762C20.9591 4.739 21.7801 6.72107 21.7801 8.78778V11.3853M1 19.1778C1 15.5049 1 13.6672 2.14161 12.5269C3.28191 11.3853 5.11965 11.3853 8.79254 11.3853H19.1826C22.8555 11.3853 24.6932 11.3853 25.8335 12.5269C26.9751 13.6672 26.9751 15.5049 26.9751 19.1778C26.9751 22.8507 26.9751 24.6884 25.8335 25.8288C24.6932 26.9704 22.8555 26.9704 19.1826 26.9704H8.79254C5.11965 26.9704 3.28191 26.9704 2.14161 25.8288C1 24.6884 1 22.8507 1 19.1778ZM16.5851 19.1778C16.5851 20.6124 15.4221 21.7753 13.9876 21.7753C12.553 21.7753 11.39 20.6124 11.39 19.1778C11.39 17.7433 12.553 16.5803 13.9876 16.5803C15.4221 16.5803 16.5851 17.7433 16.5851 19.1778Z"
                stroke="#F8F8F8"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          }
        />
        <div className="flex justify-between w-full items-center text-sm my-4">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" {...register('rememberMe')} className="sr-only" />
            <span
              className={`flex-shrink-0 ml-2 mt-1.5 w-3.5 h-3.5 inline-block mr-2 rounded-full border ${
                rememberMe ? 'bg-blue-500' : 'bg-white'
              } border-gray-400`}
            ></span>
            بخاطر سپردن رمز عبور
          </label>
          <a href="#" className="text-white hover:text-blue-200 underline">
            فراموشی رمز
          </a>
        </div>
        <button type="submit" className="w-full bg-white rounded-full text-[#3E016A] text-[1.3125rem] font-[600] p-4">
          ورود به حساب
        </button>
        <div className="flex w-full justify-center items-center text-sm mt-4">
          <a href="/sign-up" className="text-slate-300">
            حساب کاربری ندارید؟
          </a>
          <a href="/sign-up" className="text-white hover:text-blue-200 underline">
            ثبت نام
          </a>
        </div>
      </form>
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

export default LoginForm;
