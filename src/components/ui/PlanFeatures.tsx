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
    <div className="flex flex-col gap-5 min-w-[28%] min-h-[500px] p-5 border-[#ffffff33] border-[1.5px] rounded-lg  bg-[#ffffff33] ">
      <div className="flex gap-3 text-white items-center">
        <img alt="icon" src={icon} className="w-[40px] h-[40px]" style={{ width: '40px', height: '40px' }} />
        <h3 className="header-1">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
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
            <span className="text-[1.5rem] body">{feature}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-[#ffffff88] mt-auto body">
        قیمت: {price === 0 ? 'رایگان' : `${price.toLocaleString()} تومان/ماهانه`}
      </p>
      <button className="bg-white py-2 rounded-lg font-bold btn">فعالسازی</button>
    </div>
  );
};

export default PlanFeatures;
