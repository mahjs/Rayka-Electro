import { FC, HTMLInputTypeAttribute, useState } from 'react';

interface Props {
  title: string;
  value: string;
  setValue?: (value: string) => void;
  icon: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  disable?: boolean;
}

const Input: FC<Props> = ({ title, value, type, disable, setValue = () => {}, icon, placeholder = '' }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <p className="relative  flex flex-col gap-2 min-w-[280px] max-w-[320px] text-[1.2rem]">
      <span className="opacity-40 mr-4">{title}:</span>
      <input
        disabled={disable}
        className="bg-[#ffffff11] placeholder:opacity-30 focus:outline-none py-3 px-5 rounded-lg text-[#ffffff77]"
        type={type === 'password' && showPassword ? 'text' : type}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <img onClick={() => setShowPassword(!showPassword)} src={icon} className="absolute bottom-[.8rem] left-[.8rem]" />
    </p>
  );
};

export default Input;
