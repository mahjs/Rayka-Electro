import { FC, useState } from 'react';
import SpeedIcon from './SpeedIcon';
import WifiIcon from './WifiIcon';
import CheckIcon from './CheckIcon';

interface Props {
  icon: 'wifi' | 'speed' | 'check';
  text: string;
  description: string;
}

const Feature: FC<Props> = ({ icon, text, description }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col justify-center items-center"
    >
      <div className="mb-2">
        {icon === 'speed' && <SpeedIcon active={hover} />}
        {icon === 'wifi' && <WifiIcon active={hover} />}
        {icon === 'check' && <CheckIcon active={hover} />}
      </div>
      <p className="text-[1.5rem] text-white">{text}</p>
      <p className="text-[#5D5D5D] text-center max-w-[22rem]">{description}</p>
    </div>
  );
};

export default Feature;
