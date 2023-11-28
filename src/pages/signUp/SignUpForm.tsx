import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import { useForm, SubmitHandler, FieldError, UseFormRegister } from 'react-hook-form';
import { usernameValidation, emailValidation, passwordValidation, confirmPasswordValidation } from './ValidationRules';
import { useNavigate } from 'react-router-dom';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe: boolean;
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

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      console.log(data); // Replace with your API call
      reset();
      navigate('/');
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  const password = watch('password');

  return (
    <div className="bg-[#501a79] h-[90%] mb-4 lg:mb-0 rounded-[1.25rem] border border-zinc-600 w-[40rem] md:w-[44rem] mt-2 py-6 px-4 flex flex-col items-center space-y-6">
      <img src={Logo} alt="Logo" className="w-20 h-20" />
      <h2 className="text-white text-3xl font-bold">ساخت حساب جدید</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[90%] flex flex-wrap justify-between text-white bg-transparent"
      >
        <InputField
          name="username"
          placeholder="TestUser"
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
          name="email"
          placeholder="ایمیل"
          register={register}
          error={errors.email}
          type="email"
          validation={emailValidation}
          widthClass=" md:w-[22rem]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 22" fill="none">
              <path
                opacity="0.4"
                d="M6 6L8.69875 8.25C10.995 10.1625 12.1425 11.1188 13.5 11.1188C14.8575 11.1188 16.0063 10.1625 18.3013 8.24875L21 6M1 11C1 6.28625 1 3.92875 2.465 2.465C3.92875 1 6.28625 1 11 1H16C20.7137 1 23.0712 1 24.535 2.465C26 3.92875 26 6.28625 26 11C26 15.7138 26 18.0712 24.535 19.535C23.0712 21 20.7137 21 16 21H11C6.28625 21 3.92875 21 2.465 19.535C1 18.0712 1 15.7138 1 11Z"
                stroke="#F8F8F8"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          }
        />
        <InputField
          name="password"
          placeholder="تکرار کلمه عبور"
          register={register}
          error={errors.password}
          type="password"
          validation={passwordValidation}
          widthClass=" md:w-[22rem]"
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
        <InputField
          name="confirmPassword"
          placeholder="تکرار کلمه عبور"
          register={register}
          error={errors.confirmPassword}
          type="password"
          validation={confirmPasswordValidation(password)}
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
          <label className="flex items-center text-gray-300">
            <input type="checkbox" {...register('rememberMe')} className="ml-2 mt-2" />
            بخاطر سپردن رمز عبور
          </label>
          <a href="#" className="text-[#fff] hover:text-blue-200 underline">
            فراموشی رمز
          </a>
        </div>
        <button type="submit" className="w-full bg-white text-[#3E016A] text-[1.3125rem] font-bold p-4 rounded-full">
          ساخت حساب
        </button>
        <div className="flex w-full justify-center items-center text-sm mt-4">
          <a href="/login" className="text-slate-300">
            حساب کاربری دارید؟
          </a>
          <a href="/login" className="text-[#fff] hover:text-blue-200 underline">
            ورود
          </a>
        </div>
      </form>
    </div>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  register,
  error,
  type,
  icon,
  validation,
  widthClass = ' md:w-[15rem]',
}) => {
  return (
    <div className={`w-full ${widthClass}`}>
      <div
        className={`flex items-center border bg-transparent ${
          error ? 'border-red-500 my-3' : 'border-slate-500 focus-within:border-white'
        } p-4 mb-3 ${widthClass} rounded-[1.25rem]`}
      >
        {icon}
        <input
          {...register(name, validation)}
          className="bg-transparent outline-none pl-2 mr-2 w-full text-white"
          type={type}
          placeholder={placeholder}
        />
      </div>
      {error && <span className="text-red-500 text-sm w-[15rem]">{error.message}</span>}
    </div>
  );
};

export default SignUpForm;
