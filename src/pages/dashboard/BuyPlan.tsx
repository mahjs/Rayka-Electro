import Crown from '../../assets/images/small-crown.svg';
import ShopCard from '../../assets/images/shop.svg';
import MoneySign from '../../assets/images/money-sign.svg';
import ArrowDown from '../../assets/images/arrow-down.svg';
import Discount from '../../assets/images/discount.svg';
import PriceBadge from '../../assets/images/price-badge.svg';

import { Fragment } from 'react';
import SelectButton from '../../components/ui/SelectButton';

const steps = [
  {
    id: 1,
    title: 'انتخاب پلن',
    icon: Crown,
  },
  {
    id: 2,
    title: 'نهایی سازی',
    icon: ShopCard,
  },
  {
    id: 3,
    title: 'پرداخت',
    icon: MoneySign,
  },
];

const BuyPlan = () => {
  // const [setpNumber, setStepNumber] = useState<number>(1);
  const setpNumber = 1;

  return (
    <div className="text-white h-full flex flex-col gap-5 justify-center items-center">
      {/* Stepper form buying plan */}
      <div className="flex items-center gap-5">
        {steps.map((step) => (
          <Fragment key={step.id}>
            <div className="flex flex-col">
              <div
                style={{
                  background: setpNumber >= step.id ? '#fff' : '#ffffff55',
                  border: step.id - setpNumber === 1 ? '2px solid #fff' : 'none',
                }}
                className="w-[60px] h-[60px]  rounded-full flex justify-center items-center"
              >
                <img loading="lazy" src={step.icon} className="w-[20px] h-[20px]" />
              </div>
              <span>{step.title}</span>
            </div>
            {step.id !== 3 && (
              <div
                style={{
                  opacity: setpNumber >= step.id ? '1' : '.2',
                }}
                className="w-[80px] mb-6 h-[2px] bg-white"
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Plans */}
      <div className="bg-[#ffffff33] flex flex-col gap-5 p-5 rounded-2xl border-[1.5px] border-[#ffffffaa]">
        <div className="flex min-w-[400px] items-center gap-3">
          <img loading="lazy" src={Crown} className="w-[30px] h-[30px]" />
          <h4 className="title-2">سطح ویژه</h4>
        </div>
        <SelectButton basis="small" />

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img loading="lazy" src={Discount} />
            <span className="btn">کد تخفیف</span>
          </div>

          <form className="flex gap-4">
            <input className="bg-[#ffffff33] w-full placeholder:opacity-30 focus:outline-none py-3 px-5 rounded-lg text-[#ffffff77]" />
            <button className="bg-white text-[#511A79] rounded-xl px-6">اعمال</button>
          </form>
        </div>
        <div className="w-full h-[1px] bg-[#ffffff22]" />

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img loading="lazy" src={PriceBadge} />
            <span className="btn">قیمت نهایی با احتساب تخفیف</span>
          </div>

          <div className="flex items-center gap-1 btn">
            {/* Price with discount*/}
            <span>{(100000).toLocaleString()}</span>
            <span>تومان</span>

            {/* Original price*/}
            <span className="btn-2 line-through opacity-50">{(119000).toLocaleString()}</span>
            <span className="btn-2 line-through opacity-50">تومان</span>
          </div>
        </div>

        <button className="w-full text-[#511A79] py-2 rounded-xl bg-white">پرداخت</button>
      </div>
    </div>
  );
};

export default BuyPlan;
