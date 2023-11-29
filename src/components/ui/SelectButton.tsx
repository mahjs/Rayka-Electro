import ArrowDown from '../../assets/images/arrow-down.svg';
import { cn } from '../../utils/cn';

type SelectButtonProps = {
  children?: React.ReactNode;
  basis?: 'small' | 'medium' | 'large';
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};
const SelectButton: React.FC<SelectButtonProps> = ({ children, basis = 'small', onChange, value }) => {
  return (
    <div
      className={cn('relative', {
        'basis-1/6': basis === 'small',
        'basis-1/5': basis === 'medium',
        'basis-1/4': basis === 'large',
      })}
    >
      <select
        onChange={onChange}
        value={value}
        title="choose"
        className="w-full focus:outline-none rounded-lg py-3 px-5 bg-[#ffffff33] text-white body"
      >
        {children}
      </select>
      <img alt="arrowDown" src={ArrowDown} className="absolute top-[45%] -translate-y-[50%] left-6" />
    </div>
  );
};

export default SelectButton;
