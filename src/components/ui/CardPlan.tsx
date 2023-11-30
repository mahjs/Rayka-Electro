import React, { FC } from 'react';
import close from '../../assets/images/close.svg';
import edit from '../../assets/images/edit.svg';
interface Props {
  icon: string;
  title: string;
  featuresList: string[];
  price: number;
}
const CardPlan: FC<Props> = ({ icon, price, title, featuresList }) => {
  return (
    <div className="flex flex-col w-[22.4375rem] justify-between rounded-xl border-2 border-[#ffffff18] gap-4 py-8 px-[1.28rem] ">
      <div className="flex gap-3 text-white justify-center items-center">
        <img alt="icon" src={icon} className="w-[40px] h-[40px]" />
        <p className="header-4">{title}</p>
        <img alt="edit" src={edit} className="w-[10px] h-[10px] cursor-pointer" />{' '}
      </div>{' '}
      <div className="flex flex-wrap gap-2 justify-start">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="flex items-center rounded-3xl px-3 py-4 gap-2 bg-[#ffffff18] h-[2rem] backdrop-blur-[37px] text-white"
          >
            <img alt="close" src={close} className="w-[10px] h-[10px] cursor-pointer	" />
            <span className=" body-1">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col ">
        <p className="text-start text-white opacity-50 mt-auto body-2">قیمت/ماهانه</p>
        <div className="flex items-center gap-2">
          <p className="text-center text-white  mt-auto body-3">{price}</p>
          <img alt="edit" src={edit} className="w-[10px] h-[10px] cursor-pointer" />{' '}
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
