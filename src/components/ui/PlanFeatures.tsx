import Tick from '../../assets/images/tick.svg';

import { FC } from 'react';

interface Props {
  icon: string;
  title: string;
  featuresList: string[];
  price: number;
}

const PlanFeatures: FC<Props> = ({ icon, title, featuresList, price }) => {
  return (
    <div className="flex flex-col gap-5 min-w-[28%] min-h-[500px] p-5 border-[#ffffff33] border-[1.5px] rounded-lg  bg-[#ffffff33] backdrop-blur-lg">
      <div className="flex gap-3 text-white items-center">
        <img src={icon} className="w-[40px] h-[40px]" />
        <h3 className="text-[2.5rem] font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2">
        {featuresList.map((feature) => (
          <div className="flex items-center gap-3 text-white">
            <img src={Tick} className="w-[30px] h-[20px]" />
            <span className="text-[1.5rem]">{feature}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-[#ffffff88] mt-auto">
        قیمت: {price === 0 ? 'رایگان' : `${price.toLocaleString()} تومان/ماهانه`}
      </p>
      <button className="bg-white py-2 rounded-lg font-bold">فعالسازی</button>
    </div>
  );
};

export default PlanFeatures;
