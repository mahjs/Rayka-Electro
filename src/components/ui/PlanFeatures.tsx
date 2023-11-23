import Tick from '../../assets/images/tick.svg';

import { FC } from 'react';

interface Props {
  disable?: boolean;
  active?: boolean;
  absolute?: boolean;
  icon: string;
  title: string;
  featuresList: string[];
  price: number;
}

const PlanFeatures: FC<Props> = ({ icon, active, disable, title, featuresList, price, absolute }) => {
  return (
    <div
      style={{
        position: absolute ? 'absolute' : 'initial',
      }}
      className="h-full w-full flex flex-col gap-5 py-5 px-8 border-[#ffffff33] border-[1.5px] rounded-lg  bg-[#ffffff22] "
    >
      <div className="flex gap-3 text-white items-center">
        <img alt="icon" src={icon} className="w-[40px] h-[40px]" style={{ width: '40px', height: '40px' }} />
        <h3 className="text-[2.5rem] font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-x-10">
        {featuresList.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-white">
            <img
              alt="tick"
              src={Tick}
              className="w-[30px] h-[20px]"
              style={{
                width: '30px',
                height: '20px',
              }}
            />
            <span className="text-[1.5rem] whitespace-nowrap">{feature}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-[#ffffff88] mt-auto">
        قیمت: {price === 0 ? 'رایگان' : `${price.toLocaleString()} تومان/ماهانه`}
      </p>
      <button
        style={{
          opacity: disable ? '.6' : '1',
        }}
        className="bg-white py-2 text-[#541A79] rounded-lg font-bold"
      >
        {active ? 'فعال' : disable ? 'غیر فعال' : 'فعالسازی'}
      </button>
    </div>
  );
};

export default PlanFeatures;
